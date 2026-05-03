import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "allium",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["icons/its"],
    fontFiles: [
      {
        family: "its",
        style: "normal",
        weight: "400",
        file: "its.woff",
        format: "woff",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "checkbox",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --AccentA1: #a32d7f;
  --AccentA2: #D560B1;
  --Axt: #A32D7F36;
  --Axt2: #50125A94;
  --Bgcl: #A32D7F52;
  --Bgnd: #2C1C27;
  --EBgnd: #211F23;
  --background-modifier-accent: var(--AccentA2, #D560B1);
  --background-modifier-active-hover: var(--Bgcl, #A32D7F52);
  --background-modifier-border: var(--Axt, #A32D7F36);
  --background-modifier-border-focus: var(--AccentA1, #a32d7f);
  --background-modifier-border-hover: var(--Axt2, #50125A94);
  --background-modifier-form-field: var(--EBgnd, #211F23);
  --background-modifier-form-field-highlighted: var(--EBgnd, #211F23);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #211F23);
  --background-modifier-hover: var(--Bgcl, #A32D7F52);
  --background-primary: var(--EBgnd, #211F23);
  --background-primary-alt: var(--color-base-10, #211F23);
  --background-secondary: var(--Bgnd, #2C1C27);
  --background-secondary-alt: var(--color-base-30, #A32D7F36);
  --background-table-rows: var(--Bgnd, #2C1C27);
  --bases-cards-background: var(--background-primary, #211F23);
  --bases-cards-cover-background: var(--background-primary-alt, #211F23);
  --bases-cards-radius: var(--radius-m, 5px);
  --bases-embed-border-color: var(--background-modifier-border, #A32D7F36);
  --bases-embed-border-radius: var(--radius-s, 5px);
  --bases-group-heading-property-color: var(--text-muted, #e499e4a2);
  --bases-table-border-color: var(--table-border-color, #A32D7F36);
  --bases-table-cell-background-active: var(--background-primary, #211F23);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #211F23);
  --bases-table-container-border-radius: var(--radius-s, 5px);
  --bases-table-group-background: var(--background-primary-alt, #211F23);
  --bases-table-header-background: var(--background-primary, #211F23);
  --bases-table-header-background-hover: var(--background-modifier-hover, #A32D7F52);
  --bases-table-header-color: var(--text-muted, #e499e4a2);
  --bases-table-summary-background: var(--background-primary, #211F23);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #A32D7F52);
  --blockquote-border-color: var(--interactive-accent, #a32d7f);
  --bold-color: #9c4296;
  --callout-radius: var(--radius-s, 5px);
  --canvas-background: var(--background-primary, #211F23);
  --canvas-card-label-color: var(--text-faint, #e499e4a2);
  --canvas-controls-radius: var(--radius-s, 5px);
  --canvas-dot-pattern: var(--color-base-30, #A32D7F36);
  --caret-color: var(--text-normal, #d8bcd8);
  --chbx-B: 216, 188, 216;
  --chbx-C: 241, 99, 125;
  --chbx-I: 243, 150, 122;
  --chbx-N: 216, 188, 216;
  --chbx-P: 200, 216, 155;
  --chbx-R: 200, 216, 155;
  --chbx-a: 241, 99, 125;
  --chbx-b: 243, 150, 122;
  --chbx-c: 163, 45, 127;
  --chbx-d: 163, 45, 127;
  --chbx-h: 216, 188, 216;
  --chbx-i: 241, 99, 125;
  --chbx-id: 243, 150, 122;
  --chbx-q: 243, 150, 122;
  --chbx-r: 243, 150, 122;
  --checkbox-border-color: var(--text-faint, #e499e4a2);
  --checkbox-border-color-hover: var(--text-muted, #e499e4a2);
  --checkbox-color: var(--AccentA1, #a32d7f);
  --checkbox-color-hover: var(--interactive-accent-hover, #D560B1);
  --checkbox-marker-color: var(--background-primary, #211F23);
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, #e499e4a2);
  --clickable-icon-radius: var(--radius-s, 5px);
  --code-background: var(--background-primary-alt, #211F23);
  --code-border-color: var(--background-modifier-border, #A32D7F36);
  --code-bracket-background: var(--background-modifier-hover, #A32D7F52);
  --code-comment: var(--text-faint, #e499e4a2);
  --code-normal: var(--txi, #e499e4a2);
  --code-punctuation: var(--text-muted, #e499e4a2);
  --code-radius: var(--radius-s, 5px);
  --collapse-icon-color: var(--text-faint, #e499e4a2);
  --collapse-icon-color-collapsed: var(--text-accent, #D560B1);
  --color-base-00: var(--EBgnd, #211F23);
  --color-base-05: var(--EBgnd, #211F23);
  --color-base-10: var(--EBgnd, #211F23);
  --color-base-100: #d8bcd8;
  --color-base-20: var(--Bgnd, #2C1C27);
  --color-base-25: #252429;
  --color-base-30: var(--Axt, #A32D7F36);
  --color-base-35: #a540a55f;
  --color-base-40: var(--Axt, #A32D7F36);
  --color-base-50: var(--txi, #e499e4a2);
  --color-base-60: #d8bcd8;
  --color-base-70: #d8bcd8;
  --color-scheme: dark;
  --dark: var(--text-normal, var(--txt, #d8bcd8));
  --darkgray: var(--text-normal, var(--txt, #d8bcd8));
  --divider-color: var(--Axt, #A32D7F36);
  --divider-color-hover: var(--interactive-accent, #a32d7f);
  --dropdown-background: var(--Bgnd, #2C1C27);
  --dropdown-background-hover: var(--Bgnd, #2C1C27);
  --dropdown-background-normal: var(--Bgnd, #2C1C27);
  --file-header-background: var(--background-primary, #211F23);
  --file-header-background-focused: var(--background-primary, #211F23);
  --flair-background: var(--interactive-normal, #A32D7F36);
  --flair-color: var(--text-normal, #d8bcd8);
  --footnote-divider-color: var(--metadata-divider-color, #A32D7F36);
  --footnote-id-color: var(--text-muted, #e499e4a2);
  --footnote-id-color-no-occurrences: var(--text-faint, #e499e4a2);
  --footnote-input-background-active: var(--metadata-input-background-active, #A32D7F52);
  --footnote-radius: var(--radius-s, 5px);
  --frame-divider-color: var(--Axt, #A32D7F36);
  --graph-node: var(--text-muted, #d8bcd8);
  --graph-node-attachment: var(--color-yellow, #d6d89b);
  --graph-node-focused: var(--text-accent, #D560B1);
  --graph-node-tag: var(--color-green, #C8D89BDB);
  --graph-node-unresolved: var(--text-faint, #e499e4a2);
  --graph-text: var(--text-normal, #d8bcd8);
  --gray: var(--text-muted, var(--color-base-70, #e499e4a2));
  --h1-color: #d8bcd8;
  --h2-color: #c4a5c4;
  --h3-color: #ac81ac;
  --h4-color: #946a94;
  --h5-color: #835783;
  --h6-color: #805380;
  --heading-formatting: var(--text-faint, #e499e4a2);
  --highlight: var(--text-highlight-bg, var(--Bgcl, #A32D7F52));
  --hr-color: var(--background-modifier-border, #A32D7F36);
  --icon-color: var(--text-muted, #d8bcd8);
  --icon-color-active: var(--txt, #d8bcd8);
  --icon-color-focused: var(--txt, #d8bcd8);
  --icon-color-hover: var(--txi, #e499e4a2);
  --inline-title-color: var(--h1-color, #d8bcd8);
  --input-date-separator: var(--text-faint, #e499e4a2);
  --input-placeholder-color: var(--text-faint, #e499e4a2);
  --interactive-accent: var(--AccentA1, #a32d7f);
  --interactive-accent-hover: var(--AccentA2, #D560B1);
  --interactive-hover: var(--Axt, #A32D7F36);
  --interactive-normal: var(--color-base-30, #A32D7F36);
  --italic-color: #f3967a;
  --its: "its";
  --light: var(--background-primary, var(--EBgnd, #211F23));
  --lightgray: var(--background-secondary, var(--Bgnd, #2C1C27));
  --link-color: var(--text-accent, #D560B1);
  --link-color-hover: var(--text-accent-hover, #D560B1);
  --link-external-color: var(--text-accent, #D560B1);
  --link-external-color-hover: var(--text-accent-hover, #D560B1);
  --link-unresolved-color: var(--text-accent, #D560B1);
  --list-marker-color: var(--txi, #e499e4a2);
  --list-marker-color-collapsed: var(--text-accent, #D560B1);
  --list-marker-color-hover: var(--text-muted, #e499e4a2);
  --menu-background: var(--background-secondary, #2C1C27);
  --menu-border-color: var(--background-modifier-border-hover, #50125A94);
  --menu-radius: var(--radius-m, 5px);
  --metadata-border-color: var(--background-modifier-border, #A32D7F36);
  --metadata-divider-color: var(--background-modifier-border, #A32D7F36);
  --metadata-input-background-active: var(--background-modifier-hover, #A32D7F52);
  --metadata-input-text-color: var(--text-normal, #d8bcd8);
  --metadata-label-background-active: var(--background-modifier-hover, #A32D7F52);
  --metadata-label-text-color: var(--text-muted, #e499e4a2);
  --metadata-label-text-color-hover: var(--text-muted, #e499e4a2);
  --metadata-property-background-active: var(--background-modifier-hover, #A32D7F52);
  --modal-background: var(--background-primary, #211F23);
  --modal-border-color: var(--Axt, #A32D7F36);
  --modal-radius: var(--radius-l, 5px);
  --nav-collapse-icon-color: var(--txi, #e499e4a2);
  --nav-collapse-icon-color-collapsed: var(--txi, #e499e4a2);
  --nav-heading-color: var(--text-normal, #d8bcd8);
  --nav-heading-color-collapsed: var(--text-faint, #e499e4a2);
  --nav-heading-color-collapsed-hover: var(--text-muted, #e499e4a2);
  --nav-heading-color-hover: var(--text-normal, #d8bcd8);
  --nav-indentation-guide-color: var(--Axt, #A32D7F36);
  --nav-item-background-active: var(--Bgcl, #A32D7F52);
  --nav-item-background-hover: var(--Bgcl, #A32D7F52);
  --nav-item-background-selected: var(--Axt, #A32D7F36);
  --nav-item-color: var(--txt, #d8bcd8);
  --nav-item-color-active: var(--txt, #d8bcd8);
  --nav-item-color-highlighted: var(--text-accent, #D560B1);
  --nav-item-color-hover: var(--txt, #d8bcd8);
  --nav-item-color-selected: var(--text-normal, #d8bcd8);
  --nav-item-radius: var(--radius-s, 5px);
  --nav-tag-color: var(--text-faint, #e499e4a2);
  --nav-tag-color-active: var(--text-muted, #e499e4a2);
  --nav-tag-color-hover: var(--text-muted, #e499e4a2);
  --nav-tag-radius: var(--radius-s, 5px);
  --pdf-background: var(--background-primary, #211F23);
  --pdf-page-background: var(--background-primary, #211F23);
  --pdf-sidebar-background: var(--background-primary, #211F23);
  --pill-border-color: var(--background-modifier-border, #A32D7F36);
  --pill-border-color-hover: var(--background-modifier-border-hover, #50125A94);
  --pill-color: var(--text-muted, #e499e4a2);
  --pill-color-hover: var(--text-normal, #d8bcd8);
  --pill-color-remove: var(--text-faint, #e499e4a2);
  --pill-color-remove-hover: var(--text-accent, #D560B1);
  --prompt-background: var(--background-primary, #211F23);
  --prompt-border-color: var(--AccentA1, #a32d7f);
  --quote-opening-modifier: var(--Axt2, #50125A94);
  --radius-l: 5px;
  --radius-m: 5px;
  --radius-s: 5px;
  --raised-background: var(--blur-background, color-mix(in srgb, #A32D7F36 65%, transparent) linear-gradient(#A32D7F36, color-mix(in srgb, #A32D7F36 65%, transparent)));
  --ribbon-background: var(--Bgnd, #2C1C27);
  --ribbon-background-collapsed: var(--background-primary, #211F23);
  --scrollbar-active-thumb-bg: var(--AccentA1, #a32d7f);
  --scrollbar-radius: var(--radius-l, 5px);
  --scrollbar-thumb-bg: var(--Axt, #A32D7F36);
  --search-clear-button-color: var(--text-muted, #e499e4a2);
  --search-icon-color: var(--text-muted, #e499e4a2);
  --search-result-background: var(--EBgnd, #211F23);
  --secondary: var(--text-accent, var(--AccentA2, #D560B1));
  --setting-group-heading-color: var(--text-normal, #d8bcd8);
  --setting-items-background: var(--background-primary-alt, #211F23);
  --setting-items-border-color: var(--background-modifier-border, #A32D7F36);
  --setting-items-radius: var(--radius-l, 5px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #e499e4a2);
  --shiki-code-background: var(--code-background, #211F23);
  --shiki-code-block-border-radius: var(--code-radius, 5px);
  --shiki-code-comment: var(--text-faint, #e499e4a2);
  --shiki-code-normal: var(--text-muted, #e499e4a2);
  --shiki-code-punctuation: var(--text-muted, #e499e4a2);
  --shiki-gutter-border-color: var(--background-modifier-border, #A32D7F36);
  --shiki-gutter-text-color: var(--text-faint, #e499e4a2);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #e499e4a2);
  --shiki-highlight-neutral: var(--shiki-code-normal, #e499e4a2);
  --shiki-terminal-dots-color: var(--text-faint, #e499e4a2);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #50125A94);
  --slider-thumb-radius: var(--slider-thumb-height, 2px);
  --slider-track-background: var(--background-modifier-border, #A32D7F36);
  --status-bar-background: var(--background-secondary, #2C1C27);
  --status-bar-border-color: var(--divider-color, #A32D7F36);
  --status-bar-radius: var(--radius-m, 5px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #e499e4a2);
  --suggestion-background: var(--background-primary, #211F23);
  --tab-background-active: var(--background-primary, #211F23);
  --tab-container-background: var(--background-secondary, #2C1C27);
  --tab-divider-color: var(--background-modifier-border-hover, #50125A94);
  --tab-outline-color: var(--Axt, #A32D7F36);
  --tab-radius: var(--radius-s, 5px);
  --tab-radius-active: 1px;
  --tab-switcher-background: var(--background-secondary, #2C1C27);
  --tab-text-color: var(--text-faint, #e499e4a2);
  --tab-text-color-active: var(--text-muted, #e499e4a2);
  --tab-text-color-focused: var(--text-muted, #e499e4a2);
  --tab-text-color-focused-active: var(--txt, #d8bcd8);
  --tab-text-color-focused-active-current: var(--text-normal, #d8bcd8);
  --tab-text-color-focused-highlighted: var(--text-accent, #D560B1);
  --table-add-button-border-color: var(--background-modifier-border, #A32D7F36);
  --table-border-color: var(--background-modifier-border, #A32D7F36);
  --table-drag-handle-background-active: var(--table-selection-border-color, #a32d7f);
  --table-drag-handle-color: var(--text-faint, #e499e4a2);
  --table-header-border-color: var(--table-border-color, #A32D7F36);
  --table-header-color: var(--text-normal, #d8bcd8);
  --table-selection-border-color: var(--interactive-accent, #a32d7f);
  --tag-color: var(--text-accent, #D560B1);
  --tag-color-hover: var(--text-accent, #D560B1);
  --tertiary: var(--text-accent-hover, var(--AccentA2, #D560B1));
  --text-accent: var(--AccentA2, #D560B1);
  --text-accent-hover: var(--AccentA2, #D560B1);
  --text-blockquote: var(--txi, #e499e4a2);
  --text-bold: var(--txt, #d8bcd8);
  --text-code: var(--txi, #e499e4a2);
  --text-error: var(--color-red, #f1637d);
  --text-faint: var(--color-base-50, #e499e4a2);
  --text-formatting: #9c4296;
  --text-highlight-bg: var(--Bgcl, #A32D7F52);
  --text-italic: var(--txt, #d8bcd8);
  --text-muted: var(--color-base-70, #e499e4a2);
  --text-normal: var(--txt, #d8bcd8);
  --text-selection: var(--txi, #e499e4a2);
  --textHighlight: var(--text-highlight-bg, var(--Bgcl, #A32D7F52));
  --titlebar-background: var(--Bgnd, #2C1C27);
  --titlebar-background-focused: var(--Bgnd, #2C1C27);
  --titlebar-border-color: var(--Bgnd, #2C1C27);
  --titlebar-text-color: var(--txt, #d8bcd8);
  --titlebar-text-color-focused: var(--txt, #d8bcd8);
  --toggle-radius: 2px;
  --toggle-thumb-radius: 2px;
  --txi: #e499e4a2;
  --txt: #d8bcd8;
  --vault-profile-color: var(--text-normal, #d8bcd8);
  --vault-profile-color-hover: var(--vault-profile-color, #d8bcd8);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #2C1C27);
  background-color: var(--tab-container-background, rgb(44, 28, 39));
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(33, 31, 35));
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(44, 28, 39));
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #2C1C27);
  background-color: var(--tab-container-background, rgb(44, 28, 39));
  border-left-color: rgba(163, 45, 127, 0.21);
  color: rgb(216, 188, 216);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(156, 66, 150));
  outline: rgb(156, 66, 150) none 0px;
  text-decoration-color: rgb(156, 66, 150);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(243, 150, 122));
  outline: rgb(243, 150, 122) none 0px;
  text-decoration-color: rgb(243, 150, 122);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(243, 150, 122));
  outline: rgb(243, 150, 122) none 0px;
  text-decoration-color: rgb(243, 150, 122);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(156, 66, 150));
  outline: rgb(156, 66, 150) none 0px;
  text-decoration-color: rgb(156, 66, 150);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(163, 45, 127, 0.32));
  color: var(--text-normal, rgb(216, 188, 216));
  outline: rgb(216, 188, 216) none 0px;
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body del {
  color: rgb(216, 188, 216);
  outline: rgb(216, 188, 216) none 0px;
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(228, 153, 228, 0.635);
  border-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgba(228, 153, 228, 0.635));
  outline: rgba(228, 153, 228, 0.635) none 0px;
  text-decoration-color: rgba(228, 153, 228, 0.635);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(213, 96, 177));
  outline: rgb(213, 96, 177) none 0px;
  text-decoration-color: rgb(213, 96, 177);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(213, 96, 177));
  outline: rgb(213, 96, 177) none 0px;
  text-decoration-color: rgb(213, 96, 177);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(213, 96, 177));
  outline: rgb(213, 96, 177) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body dt {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgba(228, 153, 228, 0.635));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body table {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: var(--table-text-color, rgb(216, 188, 216));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: var(--table-header-color, rgb(216, 188, 216));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(33, 31, 35));
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--code-normal, rgba(228, 153, 228, 0.635));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(33, 31, 35));
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #211F23);
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(33, 31, 35));
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(216, 188, 216);
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec02";
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec08";
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec05";
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\e900";
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec17";
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec32";
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec06";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgba(228, 153, 228, 0.635);
  content: "\\ec03";
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec03";
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec33";
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec20";
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec15";
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec10";
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec29";
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec12";
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec25";
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec04";
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec18";
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\e81e";
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec28";
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec30";
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec09";
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec16";
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec21";
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec14";
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec24";
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(138, 92, 245);
  content: "\\e805";
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec19";
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec11";
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec13";
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec22";
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec07";
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec31";
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec27";
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec26";
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\e813";
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(213, 96, 177);
  content: "\\ec01";
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(216, 188, 216);
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
  background-color: rgb(33, 31, 35);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: var(--text-normal, rgb(216, 188, 216));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(33, 31, 35));
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(216, 188, 216);
  outline: rgb(216, 188, 216) none 0px;
  text-decoration-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(163, 45, 127, 0.32));
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(44, 28, 39);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(163, 45, 127, 0.32));
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(163, 45, 127, 0.32));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #D560B1);
  --pill-color-hover: var(--tag-color-hover, #D560B1);
  --pill-color-remove: var(--tag-color, #D560B1);
  --pill-color-remove-hover: var(--tag-color-hover, #D560B1);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(213, 96, 177);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(216, 188, 216));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(216, 188, 216));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(196, 165, 196));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(216, 188, 216));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(172, 129, 172));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(148, 106, 148));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(131, 87, 131));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(128, 83, 128));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(216, 188, 216));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(216, 188, 216));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(216, 188, 216);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--icon-color, rgb(216, 188, 216));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(44, 28, 39));
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  color: var(--status-bar-text-color, rgba(228, 153, 228, 0.635));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgba(228, 153, 228, 0.635);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(216, 188, 216));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(216, 188, 216);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(216, 188, 216));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(216, 188, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--icon-color, rgb(216, 188, 216));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(216, 188, 216);
  stroke: rgb(216, 188, 216);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(228, 153, 228, 0.635));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(216, 188, 216));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(44, 28, 39));
  border-color: rgb(216, 188, 216);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(163, 45, 127, 0.21);
  color: var(--table-header-color, rgb(216, 188, 216));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: var(--text-muted, rgba(228, 153, 228, 0.635));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, #D560B1);
  --pill-color-hover: var(--tag-color-hover, #D560B1);
  --pill-color-remove: var(--tag-color, #D560B1);
  --pill-color-remove-hover: var(--tag-color-hover, #D560B1);
  color: var(--pill-color, rgb(213, 96, 177));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgba(228, 153, 228, 0.635);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(33, 31, 35));
  color: var(--text-normal, rgb(216, 188, 216));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(44, 28, 39));
  border-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(44, 28, 39));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(216, 188, 216);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(44, 28, 39));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(216, 188, 216));
}

html[saved-theme="dark"] body abbr {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  color: var(--text-normal, rgba(228, 153, 228, 0.635));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(33, 31, 35));
  border-bottom-color: rgba(228, 153, 228, 0.635);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(228, 153, 228, 0.635);
  border-right-color: rgba(228, 153, 228, 0.635);
  border-top-color: rgba(228, 153, 228, 0.635);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--code-normal, rgba(228, 153, 228, 0.635));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(216, 188, 216);
  border-left-color: rgb(216, 188, 216);
  border-right-color: rgb(216, 188, 216);
  border-top-color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body sub {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body summary {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body sup {
  color: rgb(216, 188, 216);
}

html[saved-theme="dark"] body ul.tags > li {
  color: var(--tag-color, rgb(213, 96, 177));
}`,
  },
  light: {
    base: `:root:root {
  --AccentA1: #a32d7f;
  --AccentA2: #D560B1;
  --Axt: #A32D7F36;
  --Axt2: #d5acdc94;
  --Bgcl: #A32D7F52;
  --Bgnd: hsla(300, 30%, 92%, 1);
  --EBgnd: hsla(89, 58%, 95%, 1);
  --background-modifier-accent: var(--AccentA2, #D560B1);
  --background-modifier-active-hover: var(--Bgcl, #A32D7F52);
  --background-modifier-border: var(--Axt, #A32D7F36);
  --background-modifier-border-focus: var(--AccentA1, #a32d7f);
  --background-modifier-border-hover: var(--Axt2, #d5acdc94);
  --background-modifier-form-field: var(--EBgnd, hsla(89, 58%, 95%, 1));
  --background-modifier-form-field-highlighted: var(--EBgnd, hsla(89, 58%, 95%, 1));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsla(89, 58%, 95%, 1));
  --background-modifier-hover: var(--Bgcl, #A32D7F52);
  --background-primary: var(--EBgnd, hsla(89, 58%, 95%, 1));
  --background-primary-alt: var(--color-base-10, hsla(89, 58%, 95%, 1));
  --background-secondary: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --background-secondary-alt: var(--color-base-05, hsla(89, 58%, 95%, 1));
  --background-table-rows: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --bases-cards-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --bases-cards-cover-background: var(--background-primary-alt, hsla(89, 58%, 95%, 1));
  --bases-cards-radius: var(--radius-m, 5px);
  --bases-embed-border-color: var(--background-modifier-border, #A32D7F36);
  --bases-embed-border-radius: var(--radius-s, 5px);
  --bases-group-heading-property-color: var(--text-muted, #412438cd);
  --bases-table-border-color: var(--table-border-color, #A32D7F36);
  --bases-table-cell-background-active: var(--background-primary, hsla(89, 58%, 95%, 1));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsla(89, 58%, 95%, 1));
  --bases-table-container-border-radius: var(--radius-s, 5px);
  --bases-table-group-background: var(--background-primary-alt, hsla(89, 58%, 95%, 1));
  --bases-table-header-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --bases-table-header-background-hover: var(--background-modifier-hover, #A32D7F52);
  --bases-table-header-color: var(--text-muted, #412438cd);
  --bases-table-summary-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --bases-table-summary-background-hover: var(--background-modifier-hover, #A32D7F52);
  --blockquote-border-color: var(--interactive-accent, #a32d7f);
  --bold-color: #24262a;
  --callout-radius: var(--radius-s, 5px);
  --canvas-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --canvas-card-label-color: var(--text-faint, #412438cd);
  --canvas-controls-radius: var(--radius-s, 5px);
  --canvas-dot-pattern: var(--color-base-30, #A32D7F36);
  --caret-color: var(--text-normal, #30222b);
  --chbx-B: 216, 188, 216;
  --chbx-C: 241, 99, 125;
  --chbx-I: 243, 150, 122;
  --chbx-N: 216, 188, 216;
  --chbx-P: 200, 216, 155;
  --chbx-R: 200, 216, 155;
  --chbx-a: 241, 99, 125;
  --chbx-b: 243, 150, 122;
  --chbx-c: 163, 45, 127;
  --chbx-d: 163, 45, 127;
  --chbx-h: 216, 188, 216;
  --chbx-i: 241, 99, 125;
  --chbx-id: 243, 150, 122;
  --chbx-q: 243, 150, 122;
  --chbx-r: 243, 150, 122;
  --checkbox-border-color: var(--text-faint, #412438cd);
  --checkbox-border-color-hover: var(--text-muted, #412438cd);
  --checkbox-color: var(--AccentA1, #a32d7f);
  --checkbox-color-hover: var(--interactive-accent-hover, #D560B1);
  --checkbox-marker-color: var(--background-primary, hsla(89, 58%, 95%, 1));
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, #412438cd);
  --clickable-icon-radius: var(--radius-s, 5px);
  --code-background: var(--background-primary-alt, hsla(89, 58%, 95%, 1));
  --code-border-color: var(--background-modifier-border, #A32D7F36);
  --code-bracket-background: var(--background-modifier-hover, #A32D7F52);
  --code-comment: var(--text-faint, #412438cd);
  --code-normal: var(--txi, #412438cd);
  --code-punctuation: var(--text-muted, #412438cd);
  --code-radius: var(--radius-s, 5px);
  --collapse-icon-color: var(--text-faint, #412438cd);
  --collapse-icon-color-collapsed: var(--text-accent, #D560B1);
  --color-base-00: var(--EBgnd, hsla(89, 58%, 95%, 1));
  --color-base-05: var(--EBgnd, hsla(89, 58%, 95%, 1));
  --color-base-10: var(--EBgnd, hsla(89, 58%, 95%, 1));
  --color-base-100: #412438;
  --color-base-20: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --color-base-25: #412438;
  --color-base-30: var(--Axt, #A32D7F36);
  --color-base-35: #c8a2c85f;
  --color-base-40: var(--Axt, #A32D7F36);
  --color-base-50: var(--txi, #412438cd);
  --color-base-60: #412438;
  --color-base-70: #412438;
  --color-scheme: light;
  --dark: var(--text-normal, var(--txt, #30222b));
  --darkgray: var(--text-normal, var(--txt, #30222b));
  --divider-color: var(--Axt, #A32D7F36);
  --divider-color-hover: var(--interactive-accent, #a32d7f);
  --dropdown-background: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --dropdown-background-hover: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --dropdown-background-normal: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --file-header-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --file-header-background-focused: var(--background-primary, hsla(89, 58%, 95%, 1));
  --flair-background: var(--interactive-normal, hsla(89, 58%, 95%, 1));
  --flair-color: var(--text-normal, #30222b);
  --footnote-divider-color: var(--metadata-divider-color, #A32D7F36);
  --footnote-id-color: var(--text-muted, #412438cd);
  --footnote-id-color-no-occurrences: var(--text-faint, #412438cd);
  --footnote-input-background-active: var(--metadata-input-background-active, #A32D7F52);
  --footnote-radius: var(--radius-s, 5px);
  --frame-divider-color: var(--Axt, #A32D7F36);
  --graph-node: var(--text-muted, #C8A2C8);
  --graph-node-attachment: var(--color-yellow, #412438);
  --graph-node-focused: var(--text-accent, #D560B1);
  --graph-node-tag: var(--color-green, #C8D89BDB);
  --graph-node-unresolved: var(--text-faint, #412438cd);
  --graph-text: var(--text-normal, #30222b);
  --gray: var(--text-muted, var(--txi, #412438cd));
  --heading-formatting: var(--text-faint, #412438cd);
  --highlight: var(--text-highlight-bg, var(--Bgcl, #A32D7F52));
  --hr-color: var(--background-modifier-border, #A32D7F36);
  --icon-color: var(--text-muted, #24262a);
  --icon-color-active: var(--txt, #30222b);
  --icon-color-focused: var(--txt, #30222b);
  --icon-color-hover: var(--txi, #412438cd);
  --input-date-separator: var(--text-faint, #412438cd);
  --input-placeholder-color: var(--text-faint, #412438cd);
  --interactive-accent: var(--AccentA1, #a32d7f);
  --interactive-accent-hover: var(--AccentA2, #D560B1);
  --interactive-hover: var(--Axt, #A32D7F36);
  --interactive-normal: var(--color-base-00, hsla(89, 58%, 95%, 1));
  --italic-color: #FCA287;
  --its: "its";
  --light: var(--background-primary, var(--EBgnd, hsla(89, 58%, 95%, 1)));
  --lightgray: var(--background-secondary, var(--Bgnd, hsla(300, 30%, 92%, 1)));
  --link-color: var(--text-accent, #D560B1);
  --link-color-hover: var(--text-accent-hover, #D560B1);
  --link-external-color: var(--text-accent, #D560B1);
  --link-external-color-hover: var(--text-accent-hover, #D560B1);
  --link-unresolved-color: var(--text-accent, #D560B1);
  --list-marker-color: var(--txi, #412438cd);
  --list-marker-color-collapsed: var(--text-accent, #D560B1);
  --list-marker-color-hover: var(--text-muted, #412438cd);
  --menu-background: var(--background-secondary, hsla(300, 30%, 92%, 1));
  --menu-border-color: var(--background-modifier-border-hover, #d5acdc94);
  --menu-radius: var(--radius-m, 5px);
  --metadata-border-color: var(--background-modifier-border, #A32D7F36);
  --metadata-divider-color: var(--background-modifier-border, #A32D7F36);
  --metadata-input-background-active: var(--background-modifier-hover, #A32D7F52);
  --metadata-input-text-color: var(--text-normal, #30222b);
  --metadata-label-background-active: var(--background-modifier-hover, #A32D7F52);
  --metadata-label-text-color: var(--text-muted, #412438cd);
  --metadata-label-text-color-hover: var(--text-muted, #412438cd);
  --metadata-property-background-active: var(--background-modifier-hover, #A32D7F52);
  --modal-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --modal-border-color: var(--Axt, #A32D7F36);
  --modal-radius: var(--radius-l, 5px);
  --nav-collapse-icon-color: var(--txi, #412438cd);
  --nav-collapse-icon-color-collapsed: var(--txi, #412438cd);
  --nav-heading-color: var(--text-normal, #30222b);
  --nav-heading-color-collapsed: var(--text-faint, #412438cd);
  --nav-heading-color-collapsed-hover: var(--text-muted, #412438cd);
  --nav-heading-color-hover: var(--text-normal, #30222b);
  --nav-indentation-guide-color: var(--Axt, #A32D7F36);
  --nav-item-background-active: var(--Bgcl, #A32D7F52);
  --nav-item-background-hover: var(--Bgcl, #A32D7F52);
  --nav-item-background-selected: var(--Axt, #A32D7F36);
  --nav-item-color: var(--txt, #30222b);
  --nav-item-color-active: var(--txt, #30222b);
  --nav-item-color-highlighted: var(--text-accent, #D560B1);
  --nav-item-color-hover: var(--txt, #30222b);
  --nav-item-color-selected: var(--text-normal, #30222b);
  --nav-item-radius: var(--radius-s, 5px);
  --nav-tag-color: var(--text-faint, #412438cd);
  --nav-tag-color-active: var(--text-muted, #412438cd);
  --nav-tag-color-hover: var(--text-muted, #412438cd);
  --nav-tag-radius: var(--radius-s, 5px);
  --pdf-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --pdf-page-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --pdf-sidebar-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --pill-border-color: var(--background-modifier-border, #A32D7F36);
  --pill-border-color-hover: var(--background-modifier-border-hover, #d5acdc94);
  --pill-color: var(--text-muted, #412438cd);
  --pill-color-hover: var(--text-normal, #30222b);
  --pill-color-remove: var(--text-faint, #412438cd);
  --pill-color-remove-hover: var(--text-accent, #D560B1);
  --prompt-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --prompt-border-color: var(--AccentA1, #a32d7f);
  --quote-opening-modifier: var(--Axt2, #d5acdc94);
  --radius-l: 5px;
  --radius-m: 5px;
  --radius-s: 5px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsla(89, 58%, 95%, 1) 65%, transparent) linear-gradient(hsla(89, 58%, 95%, 1), color-mix(in srgb, hsla(89, 58%, 95%, 1) 65%, transparent)));
  --ribbon-background: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --ribbon-background-collapsed: var(--background-primary, hsla(89, 58%, 95%, 1));
  --scrollbar-active-thumb-bg: var(--AccentA1, #a32d7f);
  --scrollbar-radius: var(--radius-l, 5px);
  --scrollbar-thumb-bg: var(--Axt, #A32D7F36);
  --search-clear-button-color: var(--text-muted, #412438cd);
  --search-icon-color: var(--text-muted, #412438cd);
  --search-result-background: var(--EBgnd, hsla(89, 58%, 95%, 1));
  --secondary: var(--text-accent, var(--AccentA2, #D560B1));
  --setting-group-heading-color: var(--text-normal, #30222b);
  --setting-items-background: var(--background-primary-alt, hsla(89, 58%, 95%, 1));
  --setting-items-border-color: var(--background-modifier-border, #A32D7F36);
  --setting-items-radius: var(--radius-l, 5px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #412438cd);
  --shiki-code-background: var(--code-background, hsla(89, 58%, 95%, 1));
  --shiki-code-block-border-radius: var(--code-radius, 5px);
  --shiki-code-comment: var(--text-faint, #412438cd);
  --shiki-code-normal: var(--text-muted, #412438cd);
  --shiki-code-punctuation: var(--text-muted, #412438cd);
  --shiki-gutter-border-color: var(--background-modifier-border, #A32D7F36);
  --shiki-gutter-text-color: var(--text-faint, #412438cd);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #412438cd);
  --shiki-highlight-neutral: var(--shiki-code-normal, #412438cd);
  --shiki-terminal-dots-color: var(--text-faint, #412438cd);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #d5acdc94);
  --slider-thumb-radius: var(--slider-thumb-height, 2px);
  --slider-track-background: var(--background-modifier-border, #A32D7F36);
  --status-bar-background: var(--background-secondary, hsla(300, 30%, 92%, 1));
  --status-bar-border-color: var(--divider-color, #A32D7F36);
  --status-bar-radius: var(--radius-m, 5px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #412438cd);
  --suggestion-background: var(--background-primary, hsla(89, 58%, 95%, 1));
  --tab-background-active: var(--background-primary, hsla(89, 58%, 95%, 1));
  --tab-container-background: var(--background-secondary, hsla(300, 30%, 92%, 1));
  --tab-divider-color: var(--background-modifier-border-hover, #d5acdc94);
  --tab-outline-color: var(--Axt, #A32D7F36);
  --tab-radius: var(--radius-s, 5px);
  --tab-radius-active: 1px;
  --tab-switcher-background: var(--background-secondary, hsla(300, 30%, 92%, 1));
  --tab-text-color: var(--text-faint, #412438cd);
  --tab-text-color-active: var(--text-muted, #412438cd);
  --tab-text-color-focused: var(--text-muted, #412438cd);
  --tab-text-color-focused-active: var(--txt, #30222b);
  --tab-text-color-focused-active-current: var(--text-normal, #30222b);
  --tab-text-color-focused-highlighted: var(--text-accent, #D560B1);
  --table-add-button-border-color: var(--background-modifier-border, #A32D7F36);
  --table-border-color: var(--background-modifier-border, #A32D7F36);
  --table-drag-handle-background-active: var(--table-selection-border-color, #a32d7f);
  --table-drag-handle-color: var(--text-faint, #412438cd);
  --table-header-border-color: var(--table-border-color, #A32D7F36);
  --table-header-color: var(--text-normal, #30222b);
  --table-selection-border-color: var(--interactive-accent, #a32d7f);
  --tag-color: var(--text-accent, #D560B1);
  --tag-color-hover: var(--text-accent, #D560B1);
  --tertiary: var(--text-accent-hover, var(--AccentA2, #D560B1));
  --text-accent: var(--AccentA2, #D560B1);
  --text-accent-hover: var(--AccentA2, #D560B1);
  --text-blockquote: var(--txi, #412438cd);
  --text-bold: var(--txt, #30222b);
  --text-code: var(--txi, #412438cd);
  --text-error: var(--color-red, #f1637d);
  --text-faint: var(--txi, #412438cd);
  --text-formatting: #635e6a;
  --text-highlight-bg: var(--Bgcl, #A32D7F52);
  --text-italic: var(--txt, #30222b);
  --text-muted: var(--txi, #412438cd);
  --text-normal: var(--txt, #30222b);
  --textHighlight: var(--text-highlight-bg, var(--Bgcl, #A32D7F52));
  --titlebar-background: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --titlebar-background-focused: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --titlebar-border-color: var(--Bgnd, hsla(300, 30%, 92%, 1));
  --titlebar-text-color: var(--text-muted, #30222b);
  --titlebar-text-color-focused: var(--text-normal, #30222b);
  --toggle-radius: 2px;
  --toggle-thumb-radius: 2px;
  --txi: #412438cd;
  --txt: #30222b;
  --vault-profile-color: var(--text-normal, #30222b);
  --vault-profile-color-hover: var(--vault-profile-color, #30222b);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsla(300, 30%, 92%, 1));
  background-color: var(--tab-container-background, rgb(241, 228, 241));
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(242, 250, 235));
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(241, 228, 241));
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsla(300, 30%, 92%, 1));
  background-color: var(--tab-container-background, rgb(241, 228, 241));
  border-left-color: rgba(163, 45, 127, 0.21);
  color: rgb(48, 34, 43);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(36, 38, 42));
  outline: rgb(36, 38, 42) none 0px;
  text-decoration-color: rgb(36, 38, 42);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(252, 162, 135));
  outline: rgb(252, 162, 135) none 0px;
  text-decoration-color: rgb(252, 162, 135);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(252, 162, 135));
  outline: rgb(252, 162, 135) none 0px;
  text-decoration-color: rgb(252, 162, 135);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(36, 38, 42));
  outline: rgb(36, 38, 42) none 0px;
  text-decoration-color: rgb(36, 38, 42);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(163, 45, 127, 0.32));
  color: var(--text-normal, rgb(48, 34, 43));
  outline: rgb(48, 34, 43) none 0px;
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body del {
  color: rgb(48, 34, 43);
  outline: rgb(48, 34, 43) none 0px;
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(65, 36, 56, 0.804);
  border-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgba(0, 0, 0, 0));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgba(65, 36, 56, 0.804));
  outline: rgba(65, 36, 56, 0.804) none 0px;
  text-decoration-color: rgba(65, 36, 56, 0.804);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(213, 96, 177));
  outline: rgb(213, 96, 177) none 0px;
  text-decoration-color: rgb(213, 96, 177);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(213, 96, 177));
  outline: rgb(213, 96, 177) none 0px;
  text-decoration-color: rgb(213, 96, 177);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(213, 96, 177));
  outline: rgb(213, 96, 177) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body dt {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ol > li {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ul > li {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgba(65, 36, 56, 0.804));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body table {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: var(--table-text-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: var(--table-header-color, rgb(48, 34, 43));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(242, 250, 235));
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--code-normal, rgba(65, 36, 56, 0.804));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(242, 250, 235));
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body figcaption {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsla(89, 58%, 95%, 1));
  border-bottom-color: rgb(48, 34, 43);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(242, 250, 235));
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(48, 34, 43);
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec02";
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec08";
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec05";
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\e900";
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec17";
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec32";
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec06";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgba(65, 36, 56, 0.804);
  content: "\\ec03";
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(48, 34, 43);
  content: "\\ec03";
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec33";
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec20";
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec15";
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec10";
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec29";
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec12";
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec25";
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec04";
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec18";
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\e81e";
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec28";
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  color: rgb(241, 99, 125);
  content: "\\ec30";
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec09";
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec16";
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec21";
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(216, 188, 216);
  content: "\\ec14";
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec24";
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  color: rgb(138, 92, 245);
  content: "\\e805";
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec19";
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec11";
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec13";
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(243, 150, 122);
  content: "\\ec22";
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec07";
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(163, 45, 127);
  content: "\\ec31";
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec27";
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\ec26";
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(200, 216, 155);
  content: "\\e813";
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  color: rgb(213, 96, 177);
  content: "\\ec01";
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(48, 34, 43);
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
  background-color: rgb(242, 250, 235);
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: var(--text-normal, rgb(48, 34, 43));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(242, 250, 235));
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(48, 34, 43);
  outline: rgb(48, 34, 43) none 0px;
  text-decoration-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 34, 43);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(163, 45, 127, 0.32));
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(163, 45, 127);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(163, 45, 127);
  border-right-color: rgb(163, 45, 127);
  border-top-color: rgb(163, 45, 127);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 228, 241);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(163, 45, 127, 0.32));
  border-bottom-color: rgb(48, 34, 43);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(163, 45, 127, 0.32));
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, #D560B1);
  --pill-color-hover: var(--tag-color-hover, #D560B1);
  --pill-color-remove: var(--tag-color, #D560B1);
  --pill-color-remove-hover: var(--tag-color-hover, #D560B1);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(213, 96, 177);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(48, 34, 43));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(48, 34, 43);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(36, 38, 42);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(36, 38, 42);
  border-right-color: rgb(36, 38, 42);
  border-top-color: rgb(36, 38, 42);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--icon-color, rgb(36, 38, 42));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(241, 228, 241));
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  border-top-left-radius: 5px;
  color: var(--status-bar-text-color, rgba(65, 36, 56, 0.804));
}

html[saved-theme="light"] body footer ul li a {
  color: rgba(65, 36, 56, 0.804);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(48, 34, 43);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(48, 34, 43));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(36, 38, 42);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(36, 38, 42);
  border-right-color: rgb(36, 38, 42);
  border-top-color: rgb(36, 38, 42);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--icon-color, rgb(36, 38, 42));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(36, 38, 42);
  stroke: rgb(36, 38, 42);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgba(65, 36, 56, 0.804));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(48, 34, 43));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(242, 250, 235));
  border-color: rgb(48, 34, 43);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(163, 45, 127, 0.21);
  color: var(--table-header-color, rgb(48, 34, 43));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(163, 45, 127, 0.21);
  border-left-color: rgba(163, 45, 127, 0.21);
  border-right-color: rgba(163, 45, 127, 0.21);
  border-top-color: rgba(163, 45, 127, 0.21);
  color: var(--text-muted, rgba(65, 36, 56, 0.804));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(163, 45, 127, 0.21);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, #D560B1);
  --pill-color-hover: var(--tag-color-hover, #D560B1);
  --pill-color-remove: var(--tag-color, #D560B1);
  --pill-color-remove-hover: var(--tag-color-hover, #D560B1);
  color: var(--pill-color, rgb(213, 96, 177));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgba(65, 36, 56, 0.804);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(242, 250, 235));
  color: var(--text-normal, rgb(48, 34, 43));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(241, 228, 241));
  border-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(241, 228, 241));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(48, 34, 43);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(241, 228, 241));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(48, 34, 43));
}

html[saved-theme="light"] body abbr {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  color: var(--text-normal, rgba(65, 36, 56, 0.804));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(242, 250, 235));
  border-bottom-color: rgba(65, 36, 56, 0.804);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(65, 36, 56, 0.804);
  border-right-color: rgba(65, 36, 56, 0.804);
  border-top-color: rgba(65, 36, 56, 0.804);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: var(--code-normal, rgba(65, 36, 56, 0.804));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(48, 34, 43);
  border-left-color: rgb(48, 34, 43);
  border-right-color: rgb(48, 34, 43);
  border-top-color: rgb(48, 34, 43);
}

html[saved-theme="light"] body sub {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body summary {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body sup {
  color: rgb(48, 34, 43);
}

html[saved-theme="light"] body ul.tags > li {
  color: var(--tag-color, rgb(213, 96, 177));
}`,
  },
  classSettings: {
    "check-color": {
      general: `.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=X] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=X].task-list-item.is-checked {
color: var(--text-faint);
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=">"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=">"].task-list-item.is-checked {
color: var(--text-normal);
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="<"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="<"].task-list-item.is-checked {
color: var(--text-faint);
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=D] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=D].task-list-item.is-checked {
color: rgb(var(--chbx-h));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="-"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="-"].task-list-item.is-checked {
color: rgb(var(--chbx-d));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="?"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="?"].task-list-item.is-checked {
color: rgb(var(--chbx-q));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="!"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="!"].task-list-item.is-checked {
color: rgb(var(--chbx-i));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="+"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="+"].task-list-item.is-checked {
color: rgb(var(--chbx-a));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="/"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="/"].task-list-item.is-checked {
color: var(--text-muted);
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=R] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=R].task-list-item.is-checked {
color: rgb(var(--chbx-R));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=i] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=i].task-list-item.is-checked {
color: rgb(var(--chbx-id));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=B] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=B].task-list-item.is-checked {
color: rgb(var(--chbx-B));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=P] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=P].task-list-item.is-checked {
color: rgb(var(--chbx-P));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=C] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=C].task-list-item.is-checked {
color: rgb(var(--chbx-C));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=I] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=I].task-list-item.is-checked {
color: rgb(var(--chbx-I));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=Q] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=Q].task-list-item.is-checked {
color: rgb(var(--chbx-R));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=N] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=N].task-list-item.is-checked {
color: rgb(var(--chbx-N));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=b] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=b].task-list-item.is-checked {
color: rgb(var(--chbx-b));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=p] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=p].task-list-item.is-checked {
color: rgb(var(--chbx-R));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=E] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=E].task-list-item.is-checked {
color: rgb(var(--chbx-I));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=L] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=L].task-list-item.is-checked {
color: rgb(var(--chbx-N));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=A] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=A].task-list-item.is-checked {
color: rgb(var(--chbx-P));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=r] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=r].task-list-item.is-checked {
color: rgb(var(--chbx-r));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=c] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=c].task-list-item.is-checked {
color: rgb(var(--chbx-c));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=o] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=o].task-list-item.is-checked {
color: rgb(var(--chbx-b));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=d] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=d].task-list-item.is-checked {
color: rgb(var(--chbx-I));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=T] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=T].task-list-item.is-checked {
color: rgb(var(--chbx-R));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=t] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=t].task-list-item.is-checked {
color: rgb(var(--chbx-R));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=O] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=O].task-list-item.is-checked {
color: hsl(var(--interactive-accent-hsl));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=F] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=F].task-list-item.is-checked {
color: rgb(var(--chbx-h));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=W] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=W].task-list-item.is-checked {
color: rgb(var(--chbx-R));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="~"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="~"].task-list-item.is-checked {
color: rgb(var(--chbx-C));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="@"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="@"].task-list-item.is-checked {
color: rgb(var(--chbx-b));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=f] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=f].task-list-item.is-checked {
color: rgb(var(--chbx-N));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=H] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=H].task-list-item.is-checked {
color: rgb(var(--chbx-a));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="&"] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task="&"].task-list-item.is-checked {
color: rgb(var(--chbx-B));
}

.check-color .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=s] [class^=cm-list]:not(.cm-formatting-task), .check-color ul > li[data-task=s].task-list-item.is-checked {
color: rgb(var(--chbx-d));
}`,
    },
    "check-bg": {
      general: `.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=X], .check-bg :is(ul, ol) > li[data-task=X].task-list-item.is-checked {
background: rgba(var(--chbx-R), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=">"], .check-bg :is(ul, ol) > li[data-task=">"].task-list-item.is-checked {
background: rgba(var(--chbx-h), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="<"], .check-bg :is(ul, ol) > li[data-task="<"].task-list-item.is-checked {
background: rgba(var(--chbx-h), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=D], .check-bg :is(ul, ol) > li[data-task=D].task-list-item.is-checked {
background: rgba(var(--chbx-h), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="-"], .check-bg :is(ul, ol) > li[data-task="-"].task-list-item.is-checked {
background: rgba(var(--chbx-d), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="?"], .check-bg :is(ul, ol) > li[data-task="?"].task-list-item.is-checked {
background: rgba(var(--chbx-q), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="!"], .check-bg :is(ul, ol) > li[data-task="!"].task-list-item.is-checked {
background: rgba(var(--chbx-i), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="+"], .check-bg :is(ul, ol) > li[data-task="+"].task-list-item.is-checked {
background: rgba(var(--chbx-a), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="/"], .check-bg :is(ul, ol) > li[data-task="/"].task-list-item.is-checked {
background: linear-gradient(to left, var(--accent, var(--interactive-accent)) 0%, transparent 1%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=R], .check-bg :is(ul, ol) > li[data-task=R].task-list-item.is-checked {
background: rgba(var(--chbx-R), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=i], .check-bg :is(ul, ol) > li[data-task=i].task-list-item.is-checked {
background: rgba(var(--chbx-id), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=B], .check-bg :is(ul, ol) > li[data-task=B].task-list-item.is-checked {
background: rgba(var(--chbx-B), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=P], .check-bg :is(ul, ol) > li[data-task=P].task-list-item.is-checked {
background: rgba(var(--chbx-P), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=C], .check-bg :is(ul, ol) > li[data-task=C].task-list-item.is-checked {
background: rgba(var(--chbx-C), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=I], .check-bg :is(ul, ol) > li[data-task=I].task-list-item.is-checked {
background: rgba(var(--chbx-I), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=Q], .check-bg :is(ul, ol) > li[data-task=Q].task-list-item.is-checked {
background: rgba(var(--chbx-R), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=N], .check-bg :is(ul, ol) > li[data-task=N].task-list-item.is-checked {
background: rgba(var(--chbx-N), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=b], .check-bg :is(ul, ol) > li[data-task=b].task-list-item.is-checked {
background: rgba(var(--chbx-b), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=p], .check-bg :is(ul, ol) > li[data-task=p].task-list-item.is-checked {
background: rgba(var(--chbx-R), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=E], .check-bg :is(ul, ol) > li[data-task=E].task-list-item.is-checked {
background: rgba(var(--chbx-I), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=L], .check-bg :is(ul, ol) > li[data-task=L].task-list-item.is-checked {
background: rgba(var(--chbx-N), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=A], .check-bg :is(ul, ol) > li[data-task=A].task-list-item.is-checked {
background: rgba(var(--chbx-P), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=r], .check-bg :is(ul, ol) > li[data-task=r].task-list-item.is-checked {
background: rgba(var(--chbx-r), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=c], .check-bg :is(ul, ol) > li[data-task=c].task-list-item.is-checked {
background: rgba(var(--chbx-c), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=o], .check-bg :is(ul, ol) > li[data-task=o].task-list-item.is-checked {
background: rgba(var(--chbx-b), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=d], .check-bg :is(ul, ol) > li[data-task=d].task-list-item.is-checked {
background: rgba(var(--chbx-I), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=T], .check-bg :is(ul, ol) > li[data-task=T].task-list-item.is-checked {
background: rgba(var(--chbx-R), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=t], .check-bg :is(ul, ol) > li[data-task=t].task-list-item.is-checked {
background: rgba(var(--chbx-R), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=O], .check-bg :is(ul, ol) > li[data-task=O].task-list-item.is-checked {
background: hsla(var(--interactive-accent-hsl), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=F], .check-bg :is(ul, ol) > li[data-task=F].task-list-item.is-checked {
background: rgba(var(--chbx-h), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=W], .check-bg :is(ul, ol) > li[data-task=W].task-list-item.is-checked {
background: rgba(var(--chbx-P), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="~"], .check-bg :is(ul, ol) > li[data-task="~"].task-list-item.is-checked {
background: rgba(var(--chbx-C), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="@"], .check-bg :is(ul, ol) > li[data-task="@"].task-list-item.is-checked {
background: rgba(var(--chbx-b), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=f], .check-bg :is(ul, ol) > li[data-task=f].task-list-item.is-checked {
background: rgba(var(--chbx-N), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=H], .check-bg :is(ul, ol) > li[data-task=H].task-list-item.is-checked {
background: rgba(var(--chbx-a), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task="&"], .check-bg :is(ul, ol) > li[data-task="&"].task-list-item.is-checked {
background: rgba(var(--txt), 20%);
}

.check-bg .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task][data-task=s], .check-bg :is(ul, ol) > li[data-task=s].task-list-item.is-checked {
background: rgba(var(--chbx-d), 20%);
}`,
    },
    "check-strike": {
      general: `.check-strike .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task]:not([data-task=" "]), .check-strike .markdown-preview-view ul > li.task-list-item.is-checked, .check-strike .markdown-preview-view ol > li.task-list-item.is-checked {
--checklist-done-decoration: line-through 2px;
text-decoration: var(--checklist-done-decoration);
}`,
    },
    "checkbox-strike-regular": {
      general: `.checkbox-strike-regular .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=x], .checkbox-strike-regular ul li[data-task=x].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-checked": {
      general: `.checkbox-strike-checked .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=X], .checkbox-strike-checked ul li[data-task=X].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-dropped": {
      general: `.checkbox-strike-dropped .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="-"], .checkbox-strike-dropped ul li[data-task="-"].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-frwd": {
      general: `.checkbox-strike-frwd .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=">"], .checkbox-strike-frwd ul li[data-task=">"].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-bkwd": {
      general: `.checkbox-strike-bkwd .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="<"], .checkbox-strike-bkwd ul li[data-task="<"].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-date": {
      general: `.checkbox-strike-date .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=D], .checkbox-strike-date ul li[data-task=D].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-q": {
      general: `.checkbox-strike-q .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="?"], .checkbox-strike-q ul li[data-task="?"].task-list-item.is-checked {
text-decoration: line-through 2px;
}

.checkbox-strike-quot .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=Q], .checkbox-strike-quot ul li[data-task=Q].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-half": {
      general: `.checkbox-strike-half .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="/"], .checkbox-strike-half ul li[data-task="/"].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-add": {
      general: `.checkbox-strike-add .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="+"], .checkbox-strike-add ul li[data-task="+"].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-rsrch": {
      general: `.checkbox-strike-rsrch .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=R], .checkbox-strike-rsrch ul li[data-task=R].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-imp": {
      general: `.checkbox-strike-imp .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="!"], .checkbox-strike-imp ul li[data-task="!"].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-idea": {
      general: `.checkbox-strike-idea .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=i], .checkbox-strike-idea ul li[data-task=i].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-brn": {
      general: `.checkbox-strike-brn .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=B], .checkbox-strike-brn ul li[data-task=B].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-pro": {
      general: `.checkbox-strike-pro .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=P], .checkbox-strike-pro ul li[data-task=P].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-con": {
      general: `.checkbox-strike-con .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=C], .checkbox-strike-con ul li[data-task=C].task-list-item.is-checked {
text-decoration: line-through 2px;
}

.checkbox-strike-conf .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task="~"], .checkbox-strike-conf ul li[data-task="~"].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-quot": {
      general: `.checkbox-strike-quot .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=Q], .checkbox-strike-quot ul li[data-task=Q].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-book": {
      general: `.checkbox-strike-book .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=b], .checkbox-strike-book ul li[data-task=b].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-info": {
      general: `.checkbox-strike-info .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=I], .checkbox-strike-info ul li[data-task=I].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
    "checkbox-strike-para": {
      general: `.checkbox-strike-para .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task=p], .checkbox-strike-para ul li[data-task=p].task-list-item.is-checked {
text-decoration: line-through 2px;
}`,
    },
  },
};
