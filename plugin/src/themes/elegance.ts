import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "elegance",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["monaco"],
    styleSettingsId: "elegance-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --animation: 200ms;
  --arrow1: rgba(99, 99, 99, 0.687);
  --background-accent: rgb(234, 117, 0);
  --background-modifier-border: var(--color-base-30, rgb(102, 102, 102));
  --background-modifier-cover: rgba(0, 0, 0, 0.68);
  --background-modifier-error: var(--color-red, rgba(255, 0, 0, 0.5));
  --background-modifier-error-hover: var(--color-red, rgba(171, 0, 0, 0.306));
  --background-modifier-error-rgb: var(--color-red-rgb, 61, 0, 0);
  --background-modifier-form-field: var(--color-base-25, rgba(0, 0, 0, 0.2));
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(0, 0, 0, 0.2));
  --background-modifier-success: var(--color-green, #50fa7b);
  --background-primary: var(--color-base-00, rgb(53, 56, 67));
  --background-primary-alt: var(--color-base-10, rgb(73, 76, 95));
  --background-secondary: var(--color-base-20, rgb(39, 38, 47));
  --background-secondary-alt: var(--color-base-30, rgb(40, 42, 54));
  --bases-cards-background: var(--background-primary, rgb(53, 56, 67));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(73, 76, 95));
  --bases-embed-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --bases-group-heading-property-color: var(--text-muted, rgb(255, 255, 255));
  --bases-group-heading-property-size: var(--font-ui-smaller, 13.5px);
  --bases-table-border-color: var(--table-border-color, rgb(102, 102, 102));
  --bases-table-cell-background-active: var(--background-primary, rgb(53, 56, 67));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(73, 76, 95));
  --bases-table-group-background: var(--background-primary-alt, rgb(73, 76, 95));
  --bases-table-header-background: var(--background-primary, rgb(53, 56, 67));
  --bases-table-header-color: var(--text-muted, rgb(255, 255, 255));
  --bases-table-summary-background: var(--background-primary, rgb(53, 56, 67));
  --bg-blue: rgba(29, 174, 226, 0.4);
  --bg-blue2: rgb(29, 173, 226);
  --bg-green: rgba(32, 225, 180, 0.4);
  --bg-green2: rgb(32, 225, 180);
  --bg-magenta: rgba(231, 60, 126, 0.45);
  --bg-magenta2: rgb(249, 75, 142);
  --bg-orange: rgba(255, 132, 0, 0.43);
  --bg-orange2: rgb(255, 145, 18);
  --bg-purple: rgba(165, 26, 234, 0.4);
  --bg-purple2: rgb(180, 37, 252);
  --blockquote-border-color: var(--interactive-accent, rgb(255, 184, 108));
  --callout-bug: var(--callout-bug, 251, 70, 76);
  --callout-color: rgba(103, 161, 149, 0.459);
  --callout-default: var(--callout-default, 2, 122, 255);
  --callout-error: var(--callout-error, 251, 70, 76);
  --callout-example: var(--callout-example, 168, 130, 255);
  --callout-fail: var(--callout-fail, 251, 70, 76);
  --callout-gap: 1em;
  --callout-info: var(--callout-info, 0, 184, 212);
  --callout-margin: 0px 5px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --callout-question: var(--callout-question, 233, 151, 63);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 68, 207, 110);
  --callout-summary: var(--callout-summary, 83, 223, 221);
  --callout-tip: var(--callout-tip, 83, 223, 221);
  --callout-todo: var(--callout-todo, 0, 184, 212);
  --callout-warning: var(--callout-warning, 233, 151, 63);
  --canvas-background: var(--background-primary, rgb(53, 56, 67));
  --canvas-card-label-color: var(--text-faint, rgb(255, 62, 151));
  --caret-color: var(--text-normal, white);
  --checkbox-border-color: var(--text-faint, rgb(255, 62, 151));
  --checkbox-border-color-hover: var(--text-muted, rgb(255, 255, 255));
  --checkbox-color: var(--interactive-accent, rgb(255, 184, 108));
  --checkbox-color-hover: var(--interactive-accent-hover, rgb(255, 85, 85));
  --checkbox-marker-color: var(--background-primary, rgb(53, 56, 67));
  --checklist-done-color: var(--text-muted, rgb(255, 255, 255));
  --code-background: var(--background-primary-alt, rgb(73, 76, 95));
  --code-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --code-comment: var(--text-faint, rgb(255, 62, 151));
  --code-normal: var(--text-normal, white);
  --code-punctuation: var(--text-muted, rgb(255, 255, 255));
  --col-rule-color: var(--background-modifier-border, rgb(102, 102, 102));
  --col-rule-width: 1px;
  --collapse-icon-color: var(--text-faint, rgb(255, 62, 151));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(248, 173, 93));
  --color-pink-list: rgb(255, 192, 227);
  --color-pink-list2: rgb(255, 137, 202);
  --color-pink-list3: rgb(255, 119, 194);
  --dark: var(--text-normal, var(--color-base-100, white));
  --darkgray: var(--text-normal, var(--color-base-100, white));
  --divider-color: var(--background-modifier-border, rgb(102, 102, 102));
  --divider-color-hover: var(--interactive-accent, rgb(255, 184, 108));
  --dropdown-background: var(--interactive-normal, #ffb86c);
  --dropdown-background-hover: var(--interactive-hover, rgb(255, 85, 85));
  --embed-border-radius: 10px;
  --external-link: rgb(255, 219, 180);
  --fbold: rgb(255, 251, 200);
  --fcolor-header: white;
  --file-header-background: var(--background-primary, rgb(53, 56, 67));
  --file-header-background-focused: var(--background-primary, rgb(53, 56, 67));
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-margins: var(--file-margins-y) var(--file-margins-x, 8px);
  --fitalic: rgb(255, 251, 200);
  --flair-background: var(--interactive-normal, #ffb86c);
  --flair-color: var(--text-normal, white);
  --float-callout-bottom-margin: 0em;
  --float-callout-snw-display: none;
  --float-callout-top-margin: 0em;
  --float-large-width: 600px;
  --float-left-callout-margin: 0 15px 0 0;
  --float-left-callout-margin-inline: 0 12px;
  --float-medium-width: 400px;
  --float-right-callout-margin: 0 0 0 15px;
  --float-right-callout-margin-inline: 12px 0;
  --float-small-width: 300px;
  --float-snw-display: none;
  --fluro-blue-rgb: 0, 255, 255;
  --fluro-pink-rgb: 255, 0, 255;
  --font-size-code: 15px;
  --font-size-h1: 23px;
  --font-size-h2: 22px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 16px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 16px;
  --font-size-status-bar: 13.75px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote-divider-color: var(--metadata-divider-color, rgb(102, 102, 102));
  --footnote-id-color: var(--text-muted, rgb(255, 255, 255));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(255, 62, 151));
  --graph-node: var(--text-muted, rgb(255, 255, 255));
  --graph-node-focused: var(--text-accent, rgb(248, 173, 93));
  --graph-node-unresolved: var(--text-faint, rgb(255, 62, 151));
  --graph-text: var(--text-normal, white);
  --gray: var(--text-muted, var(--color-base-70, rgb(255, 255, 255)));
  --heading-formatting: var(--text-faint, rgb(255, 62, 151));
  --hr-color: var(--background-modifier-border, rgb(102, 102, 102));
  --icon-color: var(--text-muted, rgb(255, 255, 255));
  --icon-color-active: var(--text-accent, rgb(248, 173, 93));
  --icon-color-focused: var(--text-normal, white);
  --icon-color-hover: var(--text-muted, rgb(255, 255, 255));
  --input-date-separator: var(--text-faint, rgb(255, 62, 151));
  --input-placeholder-color: var(--text-faint, rgb(255, 62, 151));
  --interactive-accent: var(--color-accent, rgb(255, 184, 108));
  --interactive-accent-hover: var(--color-accent-1, rgb(255, 85, 85));
  --interactive-hover: var(--color-base-35, rgb(255, 85, 85));
  --interactive-normal: var(--color-base-30, #ffb86c);
  --interactive-success: rgb(25, 115, 0);
  --light: var(--background-primary, var(--color-base-00, rgb(53, 56, 67)));
  --lightgray: var(--background-secondary, var(--color-base-20, rgb(39, 38, 47)));
  --link-color: var(--text-accent, rgb(248, 173, 93));
  --link-color-hover: var(--text-accent-hover, rgb(139, 233, 253));
  --link-external-color: var(--text-accent, rgb(248, 173, 93));
  --link-external-color-hover: var(--text-accent-hover, rgb(139, 233, 253));
  --link-unresolved-color: var(--text-accent, rgb(248, 173, 93));
  --list-grid-min-width: 250px;
  --list-grid-wide-min-width: 350px;
  --list-marker-color: var(--text-faint, rgb(255, 62, 151));
  --list-marker-color-collapsed: var(--text-accent, rgb(248, 173, 93));
  --list-marker-color-hover: var(--text-muted, rgb(255, 255, 255));
  --list-min-width: 200px;
  --mcc-img-snw-display: none;
  --mcl-card-bg-color: var(--background-secondary, rgb(39, 38, 47));
  --mcl-card-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --mcl-card-border-width: 1px;
  --mcl-card-gap: 0.2em;
  --mcl-card-header-border-width: 1px;
  --menu-background: var(--background-secondary, rgb(39, 38, 47));
  --metadata-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --metadata-divider-color: var(--background-modifier-border, rgb(102, 102, 102));
  --metadata-input-text-color: var(--text-normal, white);
  --metadata-label-text-color: var(--text-muted, rgb(255, 255, 255));
  --metadata-label-text-color-hover: var(--text-muted, rgb(255, 255, 255));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, rgb(53, 56, 67));
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(255, 62, 151));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(255, 62, 151));
  --nav-heading-color: var(--text-normal, white);
  --nav-heading-color-collapsed: var(--text-faint, rgb(255, 62, 151));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(255, 255, 255));
  --nav-heading-color-hover: var(--text-normal, white);
  --nav-item-color: var(--text-muted, rgb(255, 255, 255));
  --nav-item-color-active: var(--text-normal, white);
  --nav-item-color-highlighted: var(--text-accent, rgb(248, 173, 93));
  --nav-item-color-hover: var(--text-normal, white);
  --nav-item-color-selected: var(--text-normal, white);
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, rgb(255, 62, 151));
  --nav-tag-color-active: var(--text-muted, rgb(255, 255, 255));
  --nav-tag-color-hover: var(--text-muted, rgb(255, 255, 255));
  --pdf-background: var(--background-primary, rgb(53, 56, 67));
  --pdf-page-background: var(--background-primary, rgb(53, 56, 67));
  --pdf-sidebar-background: var(--background-primary, rgb(53, 56, 67));
  --pill-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --pill-color: var(--text-muted, rgb(255, 255, 255));
  --pill-color-hover: var(--text-normal, white);
  --pill-color-remove: var(--text-faint, rgb(255, 62, 151));
  --pill-color-remove-hover: var(--text-accent, rgb(248, 173, 93));
  --pre-code: rgba(255, 255, 255, 0.064);
  --prompt-background: var(--background-primary, rgb(53, 56, 67));
  --quote-bg: rgba(77, 74, 75, 0.7);
  --raised-background: var(--blur-background, color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(39, 38, 47));
  --ribbon-background-collapsed: var(--background-primary, rgb(53, 56, 67));
  --search-clear-button-color: var(--text-muted, rgb(255, 255, 255));
  --search-icon-color: var(--text-muted, rgb(255, 255, 255));
  --search-result-background: var(--background-primary, rgb(53, 56, 67));
  --secondary: var(--text-accent, var(--color-accent-1, rgb(248, 173, 93)));
  --setting-group-heading-color: var(--text-normal, white);
  --setting-items-background: var(--background-primary-alt, rgb(73, 76, 95));
  --setting-items-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(255, 255, 255));
  --shiki-code-background: var(--code-background, rgb(73, 76, 95));
  --shiki-code-comment: var(--text-faint, rgb(255, 62, 151));
  --shiki-code-normal: var(--text-muted, rgb(255, 255, 255));
  --shiki-code-punctuation: var(--text-muted, rgb(255, 255, 255));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --shiki-gutter-text-color: var(--text-faint, rgb(255, 62, 151));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(255, 255, 255));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(255, 255, 255));
  --shiki-terminal-dots-color: var(--text-faint, rgb(255, 62, 151));
  --signature: "֎";
  --slider-track-background: var(--background-modifier-border, rgb(102, 102, 102));
  --status-bar-background: var(--background-secondary, rgb(39, 38, 47));
  --status-bar-border-color: var(--divider-color, rgb(102, 102, 102));
  --status-bar-font-size: var(--font-ui-smaller, 13.5px);
  --status-bar-text-color: var(--text-muted, rgb(255, 255, 255));
  --suggestion-background: var(--background-primary, rgb(53, 56, 67));
  --tab-background-active: var(--background-primary, rgb(53, 56, 67));
  --tab-container-background: var(--background-secondary, rgb(39, 38, 47));
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, rgb(102, 102, 102));
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, rgb(39, 38, 47));
  --tab-text-color: var(--text-faint, rgb(255, 62, 151));
  --tab-text-color-active: var(--text-muted, rgb(255, 255, 255));
  --tab-text-color-focused: var(--text-muted, rgb(255, 255, 255));
  --tab-text-color-focused-active: var(--text-muted, rgb(255, 255, 255));
  --tab-text-color-focused-active-current: var(--text-normal, white);
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(248, 173, 93));
  --tab-text-nofocus: rgba(255, 255, 255, 0.7);
  --table-add-button-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --table-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --table-border-radius: 5px;
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(255, 184, 108));
  --table-drag-handle-color: var(--text-faint, rgb(255, 62, 151));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(0, 0, 0));
  --table-header-border-color: var(--table-border-color, rgb(102, 102, 102));
  --table-header-color: var(--text-normal, white);
  --table-selection-border-color: var(--interactive-accent, rgb(255, 184, 108));
  --tag-color: var(--text-accent, rgb(248, 173, 93));
  --tag-color-hover: var(--text-accent, rgb(248, 173, 93));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, rgb(139, 233, 253)));
  --text-accent: var(--color-accent-1, rgb(248, 173, 93));
  --text-accent-hover: var(--color-accent-2, rgb(139, 233, 253));
  --text-antinormal: black;
  --text-error: var(--color-red, rgba(214, 0, 46, 0.925));
  --text-error-hover: rgba(255, 0, 0, 0.466);
  --text-faint: var(--color-base-50, rgb(255, 62, 151));
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-highlight-rgb: var(--zotero-yellow-rgb, 255, 212, 0);
  --text-muted: var(--color-base-70, rgb(255, 255, 255));
  --text-muted2: rgb(255, 255, 255);
  --text-normal: var(--color-base-100, white);
  --text-on-accent: rgb(0, 0, 0);
  --titlebar-background: var(--background-secondary, rgb(39, 38, 47));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(40, 42, 54));
  --titlebar-border-color: var(--background-modifier-border, rgb(102, 102, 102));
  --titlebar-text-color: var(--text-muted, rgb(255, 255, 255));
  --titlebar-text-color-focused: var(--text-normal, white);
  --vault-profile-color: var(--text-normal, white);
  --vault-profile-color-hover: var(--vault-profile-color, white);
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --zotero-black-dark-rgb: 255, 255, 255;
  --zotero-black-light-rgb: 0, 0, 0;
  --zotero-blue-rgb: 46, 168, 229;
  --zotero-gray-rgb: 170, 170, 170;
  --zotero-green-rgb: 95, 178, 54;
  --zotero-magenta-rgb: 229, 110, 238;
  --zotero-orange-rgb: 241, 152, 55;
  --zotero-purple-rgb: 162, 138, 229;
  --zotero-red-rgb: 255, 102, 102;
  --zotero-yellow-rgb: 255, 212, 0;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(39, 38, 47));
  background-color: var(--tab-container-background, rgb(39, 38, 47));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(53, 56, 67));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(39, 38, 47));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(39, 38, 47));
  background-color: var(--tab-container-background, rgb(39, 38, 47));
  border-left-color: rgb(102, 102, 102);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body html {
  --callout-color: rgba(103, 161, 149, 0.459);
  --embed-border-radius: 10px;
  --embed-max-height: 500px;
  --embed-padding: 16px;
  --fluro-blue-rgb: 0, 255, 255;
  --fluro-pink-rgb: 255, 0, 255;
  --font-size-code: 15px;
  --font-size-h1: 23px;
  --font-size-h2: 22px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 16px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 16px;
  --font-size-status-bar: 13.75px;
  --line-height-normal: 1.5;
  --scrollbar-width: 8px;
  --table-border-radius: 5px;
  --text-highlight-rgb: var(--zotero-yellow-rgb, 255, 212, 0);
  --zotero-black-dark-rgb: 255, 255, 255;
  --zotero-black-light-rgb: 0, 0, 0;
  --zotero-blue-rgb: 46, 168, 229;
  --zotero-gray-rgb: 170, 170, 170;
  --zotero-green-rgb: 95, 178, 54;
  --zotero-magenta-rgb: 229, 110, 238;
  --zotero-orange-rgb: 241, 152, 55;
  --zotero-purple-rgb: 162, 138, 229;
  --zotero-red-rgb: 255, 102, 102;
  --zotero-yellow-rgb: 255, 212, 0;
  scrollbar-width: thin;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--fbold, rgb(255, 251, 200));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--fitalic, rgb(255, 251, 200));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--fitalic, rgb(255, 251, 200));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--fitalic, rgb(255, 251, 200));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--fbold, rgb(255, 251, 200));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 251, 200) none 0px;
  text-decoration-color: rgb(255, 251, 200);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 62, 151);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(255, 184, 108));
  border-color: rgb(255, 184, 108);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(255, 255, 255));
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--external-link, rgb(255, 219, 180));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(255, 219, 180) none 0px;
  text-decoration-color: rgb(255, 219, 180);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(248, 173, 93));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 173, 93) none 0px;
  text-decoration-color: rgb(248, 173, 93);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(248, 173, 93));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 173, 93) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(248, 173, 93));
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-accent, rgb(248, 173, 93));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--quote-bg, rgba(77, 74, 75, 0.7));
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 213.828px;
  margin-right: 213.844px;
  margin-top: var(--heading-spacing, 20px);
  text-align: left;
}

html[saved-theme="dark"] body td {
  background-color: var(--background-secondary-alt, rgb(40, 42, 54));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(255, 255, 255));
  font-weight: 450;
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-width: 0px;
  border-left-color: rgb(102, 102, 102);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(102, 102, 102);
  border-right-width: 0px;
  border-top-color: rgb(102, 102, 102);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 700);
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-block, rgb(255, 255, 255));
  font-family: var(--ec-codeFontFml, monaco);
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(73, 76, 95));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(73, 76, 95));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-secondary, rgb(39, 38, 47));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-radius: 10px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-muted, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--background-secondary, rgb(39, 38, 47));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--background-secondary, rgb(39, 38, 47));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-left-color: rgb(255, 255, 255);
  border-radius: 10px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  color: rgb(255, 255, 255);
  margin-bottom: 15px;
  margin-top: 15px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  margin-left: -20px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li.task-list-item {
  --list-marker-color: var(--bg-orange2, rgb(255, 145, 18));
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 56, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 56, 67);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
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

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
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

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
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

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgba(83, 223, 221, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(251, 70, 76, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(251, 70, 76, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(168, 130, 255, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(251, 70, 76, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="imagen"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgb(102, 102, 102);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: rgba(255, 0, 0, 0.5);
  --background-modifier-error-hover: rgba(171, 0, 0, 0.306);
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #50fa7b;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(53, 56, 67);
  --background-primary-alt: rgb(73, 76, 95);
  --background-secondary: rgb(39, 38, 47);
  --background-secondary-alt: rgb(40, 42, 54);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: rgb(255, 184, 108);
  --blur-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, white);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-color: white;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: rgb(53, 56, 67);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: white;
  --checkbox-border-color: rgb(255, 62, 151);
  --checkbox-border-color-hover: rgb(255, 255, 255);
  --checkbox-color: rgb(255, 184, 108);
  --checkbox-color-hover: rgb(255, 85, 85);
  --checkbox-marker-color: rgb(53, 56, 67);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgb(255, 255, 255);
  --clickable-icon-radius: 4px;
  --code-background: rgb(73, 76, 95);
  --code-border-color: rgb(102, 102, 102);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: rgb(255, 62, 151);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: rgb(255, 255, 255);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: rgb(102, 102, 102);
  --collapse-icon-color: rgb(255, 62, 151);
  --collapse-icon-color-collapsed: rgb(248, 173, 93);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgb(102, 102, 102);
  --divider-color-hover: rgb(255, 184, 108);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffb86c;
  --dropdown-background-hover: rgb(255, 85, 85);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffb86c;
  --flair-color: white;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: rgb(255, 255, 255);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: rgb(248, 173, 93);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: rgb(255, 62, 151);
  --graph-text: white;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: rgb(255, 62, 151);
  --heading-spacing: 2.5rem;
  --hr-color: rgb(102, 102, 102);
  --interactive-accent: rgb(255, 184, 108);
  --interactive-accent-hover: rgb(255, 85, 85);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: rgb(255, 85, 85);
  --interactive-normal: #ffb86c;
  --link-color: rgb(248, 173, 93);
  --link-color-hover: rgb(139, 233, 253);
  --link-external-color: rgb(248, 173, 93);
  --link-external-color-hover: rgb(139, 233, 253);
  --link-unresolved-color: rgb(248, 173, 93);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.9em;
  --mcl-card-bg-color: rgb(39, 38, 47);
  --mcl-card-border-color: rgb(102, 102, 102);
  --menu-background: rgb(39, 38, 47);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(53, 56, 67);
  --pdf-page-background: rgb(53, 56, 67);
  --pdf-shadow: 0 0 0 1px rgb(102, 102, 102);
  --pdf-sidebar-background: rgb(53, 56, 67);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(102, 102, 102);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.5);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.22);
  --scrollbar-width: 12px;
  --search-clear-button-color: rgb(255, 255, 255);
  --search-icon-color: rgb(255, 255, 255);
  --search-result-background: rgb(53, 56, 67);
  --setting-group-heading-color: white;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(73, 76, 95);
  --setting-items-border-color: rgb(102, 102, 102);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: rgb(255, 255, 255);
  --shiki-code-background: rgb(73, 76, 95);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgb(255, 62, 151);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: rgb(255, 255, 255);
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: rgb(255, 255, 255);
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgb(102, 102, 102);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgb(255, 62, 151);
  --shiki-gutter-text-color-highlight: rgb(255, 255, 255);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: rgb(255, 255, 255);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: rgb(255, 62, 151);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(53, 56, 67);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(53, 56, 67);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 14px;
  --tab-outline-color: rgb(102, 102, 102);
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(39, 38, 47);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(39, 38, 47), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: rgb(255, 62, 151);
  --tab-text-color-active: rgb(255, 255, 255);
  --tab-text-color-focused: rgb(255, 255, 255);
  --tab-text-color-focused-active: rgb(255, 255, 255);
  --tab-text-color-focused-active-current: white;
  --tab-text-color-focused-highlighted: rgb(248, 173, 93);
  --table-add-button-border-color: rgb(102, 102, 102);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(255, 184, 108);
  --table-drag-handle-color: rgb(255, 62, 151);
  --table-drag-handle-color-active: rgb(0, 0, 0);
  --table-header-background: transparent;
  --table-header-border-color: rgb(102, 102, 102);
  --table-header-border-width: 1px;
  --table-header-color: white;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgb(255, 184, 108);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: rgb(248, 173, 93);
  --tag-color-hover: rgb(248, 173, 93);
  --tag-size: 0.875em;
  --text-accent: rgb(248, 173, 93);
  --text-accent-hover: rgb(139, 233, 253);
  --text-error: rgba(214, 0, 46, 0.925);
  --text-faint: rgb(255, 62, 151);
  --text-highlight-bg: rgba(255, 255, 0, 0.699);
  --text-highlight-rgb: 255, 212, 0;
  --text-muted: rgb(255, 255, 255);
  --text-normal: white;
  --text-selection: rgb(78, 91, 154);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: var(--background-primary-alt, rgb(73, 76, 95));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  scrollbar-color: var(--scrollbar-thumb-bg) var(--scrollbar-bg, rgba(255, 255, 255, 0.22) rgba(255, 255, 255, 0.05));
  scrollbar-width: thin;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 184, 212);
  background: rgba(0, 184, 212, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgb(102, 102, 102);
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: rgba(255, 0, 0, 0.5);
  --background-modifier-error-hover: rgba(171, 0, 0, 0.306);
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: #50fa7b;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: rgb(53, 56, 67);
  --background-primary-alt: rgb(73, 76, 95);
  --background-secondary: rgb(39, 38, 47);
  --background-secondary-alt: rgb(40, 42, 54);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: rgb(255, 184, 108);
  --blur-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: rgb(53, 56, 67);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #363636;
  --caret-color: white;
  --checkbox-border-color: rgb(255, 62, 151);
  --checkbox-border-color-hover: rgb(255, 255, 255);
  --checkbox-color: rgb(255, 184, 108);
  --checkbox-color-hover: rgb(255, 85, 85);
  --checkbox-marker-color: rgb(53, 56, 67);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgb(255, 255, 255);
  --clickable-icon-radius: 4px;
  --code-background: rgb(73, 76, 95);
  --code-border-color: rgb(102, 102, 102);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: rgb(255, 62, 151);
  --code-function: #e0de71;
  --code-important: #e9973f;
  --code-keyword: #fa99cd;
  --code-normal: white;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: rgb(255, 255, 255);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #44cf6e;
  --code-tag: #fb464c;
  --code-value: #a882ff;
  --col-rule-color: rgb(102, 102, 102);
  --collapse-icon-color: rgb(255, 62, 151);
  --collapse-icon-color-collapsed: rgb(248, 173, 93);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgb(102, 102, 102);
  --divider-color-hover: rgb(255, 184, 108);
  --divider-vertical-height: 100%;
  --dropdown-background: #ffb86c;
  --dropdown-background-hover: rgb(255, 85, 85);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffb86c;
  --flair-color: white;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: rgb(255, 255, 255);
  --graph-node-attachment: #e0de71;
  --graph-node-focused: rgb(248, 173, 93);
  --graph-node-tag: #44cf6e;
  --graph-node-unresolved: rgb(255, 62, 151);
  --graph-text: white;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: rgb(255, 62, 151);
  --heading-spacing: 2.5rem;
  --hr-color: rgb(102, 102, 102);
  --interactive-accent: rgb(255, 184, 108);
  --interactive-accent-hover: rgb(255, 85, 85);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: rgb(255, 85, 85);
  --interactive-normal: #ffb86c;
  --link-color: rgb(248, 173, 93);
  --link-color-hover: rgb(139, 233, 253);
  --link-external-color: rgb(248, 173, 93);
  --link-external-color-hover: rgb(139, 233, 253);
  --link-unresolved-color: rgb(248, 173, 93);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.9em;
  --mcl-card-bg-color: rgb(39, 38, 47);
  --mcl-card-border-color: rgb(102, 102, 102);
  --menu-background: rgb(39, 38, 47);
  --menu-border-color: #3f3f3f;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: rgb(53, 56, 67);
  --pdf-page-background: rgb(53, 56, 67);
  --pdf-shadow: 0 0 0 1px rgb(102, 102, 102);
  --pdf-sidebar-background: rgb(53, 56, 67);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(102, 102, 102);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.5);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.22);
  --scrollbar-width: 12px;
  --search-clear-button-color: rgb(255, 255, 255);
  --search-icon-color: rgb(255, 255, 255);
  --search-result-background: rgb(53, 56, 67);
  --setting-group-heading-color: white;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(73, 76, 95);
  --setting-items-border-color: rgb(102, 102, 102);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: rgb(255, 255, 255);
  --shiki-code-background: rgb(73, 76, 95);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgb(255, 62, 151);
  --shiki-code-function: #44cf6e;
  --shiki-code-important: #e9973f;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: rgb(255, 255, 255);
  --shiki-code-property: #53dfdd;
  --shiki-code-punctuation: rgb(255, 255, 255);
  --shiki-code-string: #e0de71;
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: rgb(102, 102, 102);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgb(255, 62, 151);
  --shiki-gutter-text-color-highlight: rgb(255, 255, 255);
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: rgb(255, 255, 255);
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: rgb(255, 62, 151);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(53, 56, 67);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #e0de71;
  --sync-avatar-color-4: #44cf6e;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #027aff;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: rgb(53, 56, 67);
  --tab-divider-color: #3f3f3f;
  --tab-font-size: 14px;
  --tab-outline-color: rgb(102, 102, 102);
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(39, 38, 47);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(39, 38, 47), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: rgb(255, 62, 151);
  --tab-text-color-active: rgb(255, 255, 255);
  --tab-text-color-focused: rgb(255, 255, 255);
  --tab-text-color-focused-active: rgb(255, 255, 255);
  --tab-text-color-focused-active-current: white;
  --tab-text-color-focused-highlighted: rgb(248, 173, 93);
  --table-add-button-border-color: rgb(102, 102, 102);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(255, 184, 108);
  --table-drag-handle-color: rgb(255, 62, 151);
  --table-drag-handle-color-active: rgb(0, 0, 0);
  --table-header-background: transparent;
  --table-header-border-color: rgb(102, 102, 102);
  --table-header-border-width: 1px;
  --table-header-color: white;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: rgb(255, 184, 108);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: rgb(248, 173, 93);
  --tag-color-hover: rgb(248, 173, 93);
  --tag-size: 0.875em;
  --text-accent: rgb(248, 173, 93);
  --text-accent-hover: rgb(139, 233, 253);
  --text-error: rgba(214, 0, 46, 0.925);
  --text-faint: rgb(255, 62, 151);
  --text-highlight-bg: rgba(255, 255, 0, 0.699);
  --text-highlight-rgb: 255, 212, 0;
  --text-muted: rgb(255, 255, 255);
  --text-normal: white;
  --text-selection: rgb(78, 91, 154);
  --text-success: #44cf6e;
  --text-warning: #e9973f;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.3);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  scrollbar-color: var(--scrollbar-thumb-bg) var(--scrollbar-bg, rgba(255, 255, 255, 0.22) rgba(255, 255, 255, 0.05));
  scrollbar-width: thin;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(2, 122, 255, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(233, 151, 63, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(68, 207, 110, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(83, 223, 221, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 184, 212);
  background: rgba(0, 184, 212, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(233, 151, 63, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: var(--text-normal, rgb(255, 255, 255));
  padding-left: 15px;
  padding-right: 15px;
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

html[saved-theme="dark"] body .callout[data-callout="imagen"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(53, 56, 67));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 173, 93);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(248, 173, 93);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(248, 173, 93);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(248, 173, 93);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.15));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--text-antinormal, rgb(0, 0, 0));
  border-bottom-color: rgb(39, 38, 47);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.15));
  border-bottom-color: rgb(248, 173, 93);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(248, 173, 93);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(248, 173, 93);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(248, 173, 93);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.15));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, rgb(248, 173, 93));
  --pill-color-hover: var(--tag-color-hover, rgb(248, 173, 93));
  --pill-color-remove: var(--tag-color, rgb(248, 173, 93));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(248, 173, 93));
  color: var(--pill-color, rgb(248, 173, 93));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(248, 173, 93);
}

html[saved-theme="dark"] body h1 {
  background: rgba(0, 0, 0, 0) linear-gradient(271deg, rgba(0, 0, 0, 0), rgba(32, 225, 180, 0.4), rgba(29, 174, 226, 0.4), rgba(165, 26, 234, 0.4), rgba(231, 60, 126, 0.45), rgba(255, 132, 0, 0.43), rgba(0, 0, 0, 0)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(271deg, rgba(0, 0, 0, 0), rgba(32, 225, 180, 0.4), rgba(29, 174, 226, 0.4), rgba(165, 26, 234, 0.4), rgba(231, 60, 126, 0.45), rgba(255, 132, 0, 0.43), rgba(0, 0, 0, 0));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--fcolor-header, rgb(255, 255, 255));
  font-family: var(--h1-font, Inter);
  font-size: var(--h1-size, 18.5px);
  letter-spacing: var(--h1-letter-spacing, 0.15px);
  line-height: var(--h1-line-height, 22.2px);
  margin-bottom: 3px;
  padding-bottom: 6px;
  padding-top: 6px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(255, 255, 255));
  font-size: var(--inline-title-size, 23px);
}

html[saved-theme="dark"] body h2 {
  background: rgba(0, 0, 0, 0) linear-gradient(271deg, rgba(0, 0, 0, 0), rgba(255, 132, 0, 0.43), rgba(255, 140, 0, 0.51), rgba(255, 132, 0, 0.43), rgba(0, 0, 0, 0)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(271deg, rgba(0, 0, 0, 0), rgba(255, 132, 0, 0.43), rgba(255, 140, 0, 0.51), rgba(255, 132, 0, 0.43), rgba(0, 0, 0, 0));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--fcolor-header, rgb(255, 255, 255));
  font-family: var(--h2-font, Inter);
  font-size: var(--h2-size, 18.25px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h2-letter-spacing, 0.15px);
  line-height: var(--h2-line-height, 21.9px);
  margin-bottom: 3px;
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 6px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: double;
  border-bottom-width: 3px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--inline-title-color, rgb(255, 255, 255));
  font-family: var(--inline-title-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 23px);
  letter-spacing: -0.345px;
  line-height: var(--inline-title-line-height, 27.6px);
  margin-bottom: 40px;
  margin-top: 20px;
  padding-bottom: 5px;
}

html[saved-theme="dark"] body h3 {
  background: rgba(0, 0, 0, 0) radial-gradient(circle, rgba(231, 60, 126, 0.45) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(circle, rgba(231, 60, 126, 0.45) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--fcolor-header, rgb(255, 255, 255));
  font-family: var(--h3-font, Inter);
  font-size: var(--h3-size, 17.85px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h3-letter-spacing, 0.15px);
  line-height: var(--h3-line-height, 23.205px);
  margin-bottom: 5px;
  margin-top: var(--heading-spacing, 28px);
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 6px;
}

html[saved-theme="dark"] body h4 {
  background: rgba(0, 0, 0, 0) radial-gradient(circle, rgba(165, 26, 234, 0.4) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(circle, rgba(165, 26, 234, 0.4) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--fcolor-header, rgb(255, 255, 255));
  font-family: var(--h4-font, Inter);
  font-size: var(--h4-size, 17.5px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h4-letter-spacing, 0.15px);
  line-height: var(--h4-line-height, 24.5px);
  margin-bottom: 5px;
  margin-top: var(--heading-spacing, 28px);
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 6px;
}

html[saved-theme="dark"] body h5 {
  background: rgba(0, 0, 0, 0) radial-gradient(circle, rgba(29, 174, 226, 0.4) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(circle, rgba(29, 174, 226, 0.4) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--fcolor-header, rgb(255, 255, 255));
  font-family: var(--h5-font, Inter);
  font-size: var(--h5-size, 17px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h5-letter-spacing, 0.15px);
  line-height: var(--h5-line-height, 25.5px);
  margin-bottom: 5px;
  margin-top: var(--heading-spacing, 28px);
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

html[saved-theme="dark"] body h6 {
  background: rgba(0, 0, 0, 0) radial-gradient(circle, rgba(32, 225, 180, 0.4) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(circle, rgba(32, 225, 180, 0.4) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--fcolor-header, rgb(255, 255, 255));
  font-family: var(--h6-font, Inter);
  font-size: var(--h6-size, 17px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h6-letter-spacing, 0.15px);
  line-height: var(--h6-line-height, 25.5px);
  margin-bottom: 5px;
  margin-top: 30px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 4px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body body {
  scrollbar-color: var(--scrollbar-thumb-bg) var(--scrollbar-bg, rgba(255, 255, 255, 0.22) rgba(255, 255, 255, 0.05));
  scrollbar-width: thin;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(255, 255, 255));
  font-weight: var(--nav-item-weight, 650);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(255, 255, 255));
  font-weight: var(--nav-item-weight, 650);
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 650);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--icon-color, rgb(255, 255, 255));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--background-secondary-alt, rgb(40, 42, 54));
  border-bottom-color: rgba(255, 255, 255, 0.714);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.714);
  border-right-color: rgba(255, 255, 255, 0.714);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.714);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: var(--text-faint, rgb(255, 62, 151));
  font-size: var(--font-size-status-bar, 13.75px);
  padding-bottom: 0px;
  padding-left: 1px;
  padding-top: 0px;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 62, 151);
  font-size: 13.75px;
  font-weight: 600;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--icon-color, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(255, 62, 151));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--table-background-color, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(39, 38, 47));
  border-color: rgb(255, 255, 255);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(0, 0, 0);
  border-color: rgb(102, 102, 102);
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: var(--text-muted, rgb(255, 255, 255));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-color: var(--tag-color, rgb(248, 173, 93));
  --pill-color-hover: var(--tag-color-hover, rgb(248, 173, 93));
  --pill-color-remove: var(--tag-color, rgb(248, 173, 93));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(248, 173, 93));
  color: var(--pill-color, rgb(248, 173, 93));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(53, 56, 67));
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(39, 38, 47));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(40, 42, 54));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(255, 255, 255);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--background-secondary-alt, rgb(40, 42, 54));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--text-normal, rgb(255, 255, 255));
  font-size: 14px;
  font-weight: 600;
  line-height: 18.2px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(73, 76, 95));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--code-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
  font-size: 12px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--background-secondary, rgb(39, 38, 47));
  border-bottom-left-radius: 27.16px;
  border-bottom-right-radius: 27.16px;
  border-top-left-radius: 27.16px;
  border-top-right-radius: 27.16px;
  color: var(--text-accent-hover, rgb(139, 233, 253));
}`,
  },
  light: {
    base: `:root:root {
  --animation: 200ms;
  --arrow1: rgba(211, 211, 211, 0.852);
  --background-accent: rgb(255, 128, 0);
  --background-modifier-border: var(--color-base-30, rgb(67, 67, 67));
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(0, 0, 0, 0.307);
  --background-modifier-error: var(--color-red, rgba(255, 0, 0, 0.45));
  --background-modifier-error-hover: var(--color-red, rgba(255, 0, 0, 0.616));
  --background-modifier-error-rgb: var(--color-red-rgb, rgb(255, 0, 0));
  --background-modifier-form-field: var(--color-base-00, rgba(255, 255, 255, 0.2));
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(255, 255, 255, 0.2));
  --background-modifier-success: var(--color-green, rgb(80, 250, 123));
  --background-primary: var(--color-base-00, rgb(255, 255, 255));
  --background-primary-alt: var(--color-base-10, rgb(230, 229, 224));
  --background-secondary: var(--color-base-20, rgb(247 245 244));
  --background-secondary-alt: var(--color-base-05, rgb(242, 242, 242));
  --bases-cards-background: var(--background-primary, rgb(255, 255, 255));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(230, 229, 224));
  --bases-embed-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --bases-group-heading-property-color: var(--text-muted, rgb(0, 0, 0));
  --bases-group-heading-property-size: var(--font-ui-smaller, 13.5px);
  --bases-table-border-color: var(--table-border-color, rgb(67, 67, 67));
  --bases-table-cell-background-active: var(--background-primary, rgb(255, 255, 255));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(230, 229, 224));
  --bases-table-group-background: var(--background-primary-alt, rgb(230, 229, 224));
  --bases-table-header-background: var(--background-primary, rgb(255, 255, 255));
  --bases-table-header-color: var(--text-muted, rgb(0, 0, 0));
  --bases-table-summary-background: var(--background-primary, rgb(255, 255, 255));
  --bg-blue: rgba(9, 168, 225, 0.45);
  --bg-blue2: rgba(1, 149, 203, 0.847);
  --bg-green: rgba(1, 224, 172, 0.5);
  --bg-green2: rgba(0, 185, 142, 0.905);
  --bg-magenta: rgba(220, 10, 90, 0.45);
  --bg-magenta2: rgba(220, 10, 90, 0.85);
  --bg-orange: rgba(255, 132, 0, 0.5);
  --bg-orange2: rgba(255, 132, 0, 0.85);
  --bg-purple: rgba(150, 8, 220, 0.4);
  --bg-purple2: rgba(150, 8, 220, 0.8);
  --blockquote-border-color: var(--interactive-accent, rgb(255, 184, 108));
  --callout-bug: var(--callout-bug, 233, 49, 71);
  --callout-color: rgba(103, 161, 149, 0.459);
  --callout-default: var(--callout-default, 8, 109, 221);
  --callout-error: var(--callout-error, 233, 49, 71);
  --callout-example: var(--callout-example, 120, 82, 238);
  --callout-fail: var(--callout-fail, 233, 49, 71);
  --callout-gap: 1em;
  --callout-info: var(--callout-info, 0, 184, 212);
  --callout-margin: 0px 5px;
  --callout-min-width: 200px;
  --callout-nowrap-min-width: 250px;
  --callout-question: var(--callout-question, 236, 117, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--callout-success, 8, 185, 78);
  --callout-summary: var(--callout-summary, 0, 191, 188);
  --callout-tip: var(--callout-tip, 0, 191, 188);
  --callout-todo: var(--callout-todo, 0, 184, 212);
  --callout-warning: var(--callout-warning, 236, 117, 0);
  --canvas-background: var(--background-primary, rgb(255, 255, 255));
  --canvas-card-label-color: var(--text-faint, rgb(227, 0, 106));
  --caret-color: var(--text-normal, rgb(6, 6, 6));
  --checkbox-border-color: var(--text-faint, rgb(227, 0, 106));
  --checkbox-border-color-hover: var(--text-muted, rgb(0, 0, 0));
  --checkbox-color: var(--interactive-accent, rgb(255, 184, 108));
  --checkbox-color-hover: var(--interactive-accent-hover, rgb(255, 85, 85));
  --checkbox-marker-color: var(--background-primary, rgb(255, 255, 255));
  --checklist-done-color: var(--text-muted, rgb(0, 0, 0));
  --code-background: var(--background-primary-alt, rgb(230, 229, 224));
  --code-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --code-comment: var(--text-faint, rgb(227, 0, 106));
  --code-normal: var(--text-normal, rgb(6, 6, 6));
  --code-punctuation: var(--text-muted, rgb(0, 0, 0));
  --col-rule-color: var(--background-modifier-border, rgb(67, 67, 67));
  --col-rule-width: 1px;
  --collapse-icon-color: var(--text-faint, rgb(227, 0, 106));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(196 98 0));
  --color-pink-list: rgb(255, 192, 227);
  --color-pink-list2: rgb(255, 137, 202);
  --color-pink-list3: rgb(255, 119, 194);
  --dark: var(--text-normal, var(--color-base-100, rgb(6, 6, 6)));
  --darkgray: var(--text-normal, var(--color-base-100, rgb(6, 6, 6)));
  --divider-color: var(--background-modifier-border, rgb(67, 67, 67));
  --divider-color-hover: var(--interactive-accent, rgb(255, 184, 108));
  --dropdown-background: var(--interactive-normal, rgb(240, 128, 0));
  --dropdown-background-hover: var(--interactive-hover, rgb(255, 85, 85));
  --embed-border-radius: 10px;
  --external-link: rgb(96, 123, 4);
  --fbold: rgb(55, 0, 0);
  --fcolor-header: rgb(0, 0, 0);
  --file-header-background: var(--background-primary, rgb(255, 255, 255));
  --file-header-background-focused: var(--background-primary, rgb(255, 255, 255));
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-margins: var(--file-margins-y) var(--file-margins-x, 4px);
  --fitalic: rgb(55, 0, 0);
  --flair-background: var(--interactive-normal, rgb(240, 128, 0));
  --flair-color: var(--text-normal, rgb(6, 6, 6));
  --float-callout-bottom-margin: 0em;
  --float-callout-snw-display: none;
  --float-callout-top-margin: 0em;
  --float-large-width: 600px;
  --float-left-callout-margin: 0 15px 0 0;
  --float-left-callout-margin-inline: 0 12px;
  --float-medium-width: 400px;
  --float-right-callout-margin: 0 0 0 15px;
  --float-right-callout-margin-inline: 12px 0;
  --float-small-width: 300px;
  --float-snw-display: none;
  --fluro-blue-rgb: 0, 255, 255;
  --fluro-pink-rgb: 255, 0, 255;
  --font-size-code: 15px;
  --font-size-h1: 23px;
  --font-size-h2: 22px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 16px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 16px;
  --font-size-status-bar: 13.75px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13.5px;
  --footnote-divider-color: var(--metadata-divider-color, rgb(67, 67, 67));
  --footnote-id-color: var(--text-muted, rgb(0, 0, 0));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(227, 0, 106));
  --graph-node: var(--text-muted, rgb(0, 0, 0));
  --graph-node-focused: var(--text-accent, rgb(196 98 0));
  --graph-node-unresolved: var(--text-faint, rgb(227, 0, 106));
  --graph-text: var(--text-normal, rgb(6, 6, 6));
  --gray: var(--text-muted, var(--color-base-70, rgb(0, 0, 0)));
  --heading-formatting: var(--text-faint, rgb(227, 0, 106));
  --hr-color: var(--background-modifier-border, rgb(67, 67, 67));
  --icon-color: var(--text-muted, rgb(0, 0, 0));
  --icon-color-active: var(--text-accent, rgb(196 98 0));
  --icon-color-focused: var(--text-normal, rgb(6, 6, 6));
  --icon-color-hover: var(--text-muted, rgb(0, 0, 0));
  --input-date-separator: var(--text-faint, rgb(227, 0, 106));
  --input-placeholder-color: var(--text-faint, rgb(227, 0, 106));
  --interactive-accent: var(--color-accent-1, rgb(255, 184, 108));
  --interactive-accent-hover: var(--color-accent-2, rgb(255, 85, 85));
  --interactive-hover: var(--color-base-10, rgb(255, 85, 85));
  --interactive-normal: var(--color-base-00, rgb(240, 128, 0));
  --interactive-success: rgb(25, 115, 0);
  --light: var(--background-primary, var(--color-base-00, rgb(255, 255, 255)));
  --lightgray: var(--background-secondary, var(--color-base-20, rgb(247 245 244)));
  --link-color: var(--text-accent, rgb(196 98 0));
  --link-color-hover: var(--text-accent-hover, rgb(0, 184, 225));
  --link-external-color: var(--text-accent, rgb(196 98 0));
  --link-external-color-hover: var(--text-accent-hover, rgb(0, 184, 225));
  --link-unresolved-color: var(--text-accent, rgb(196 98 0));
  --list-grid-min-width: 250px;
  --list-grid-wide-min-width: 350px;
  --list-marker-color: var(--text-faint, rgb(227, 0, 106));
  --list-marker-color-collapsed: var(--text-accent, rgb(196 98 0));
  --list-marker-color-hover: var(--text-muted, rgb(0, 0, 0));
  --list-min-width: 200px;
  --mcc-img-snw-display: none;
  --mcl-card-bg-color: var(--background-secondary, rgb(247 245 244));
  --mcl-card-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --mcl-card-border-width: 1px;
  --mcl-card-gap: 0.2em;
  --mcl-card-header-border-width: 1px;
  --menu-background: var(--background-secondary, rgb(247 245 244));
  --metadata-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --metadata-divider-color: var(--background-modifier-border, rgb(67, 67, 67));
  --metadata-input-text-color: var(--text-normal, rgb(6, 6, 6));
  --metadata-label-text-color: var(--text-muted, rgb(0, 0, 0));
  --metadata-label-text-color-hover: var(--text-muted, rgb(0, 0, 0));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, rgb(255, 255, 255));
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(227, 0, 106));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(227, 0, 106));
  --nav-heading-color: var(--text-normal, rgb(6, 6, 6));
  --nav-heading-color-collapsed: var(--text-faint, rgb(227, 0, 106));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(0, 0, 0));
  --nav-heading-color-hover: var(--text-normal, rgb(6, 6, 6));
  --nav-item-color: var(--text-muted, rgb(0, 0, 0));
  --nav-item-color-active: var(--text-normal, rgb(6, 6, 6));
  --nav-item-color-highlighted: var(--text-accent, rgb(196 98 0));
  --nav-item-color-hover: var(--text-normal, rgb(6, 6, 6));
  --nav-item-color-selected: var(--text-normal, rgb(6, 6, 6));
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, rgb(227, 0, 106));
  --nav-tag-color-active: var(--text-muted, rgb(0, 0, 0));
  --nav-tag-color-hover: var(--text-muted, rgb(0, 0, 0));
  --pdf-background: var(--background-primary, rgb(255, 255, 255));
  --pdf-page-background: var(--background-primary, rgb(255, 255, 255));
  --pdf-sidebar-background: var(--background-primary, rgb(255, 255, 255));
  --pill-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --pill-color: var(--text-muted, rgb(0, 0, 0));
  --pill-color-hover: var(--text-normal, rgb(6, 6, 6));
  --pill-color-remove: var(--text-faint, rgb(227, 0, 106));
  --pill-color-remove-hover: var(--text-accent, rgb(196 98 0));
  --pre-code: rgba(0, 0, 0, 0.044);
  --prompt-background: var(--background-primary, rgb(255, 255, 255));
  --quote-bg: rgba(164, 164, 160, 0.15);
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(247 245 244));
  --ribbon-background-collapsed: var(--background-primary, rgb(255, 255, 255));
  --search-clear-button-color: var(--text-muted, rgb(0, 0, 0));
  --search-icon-color: var(--text-muted, rgb(0, 0, 0));
  --search-result-background: var(--background-primary, rgb(255, 255, 255));
  --secondary: var(--text-accent, var(--color-accent, rgb(196 98 0)));
  --setting-group-heading-color: var(--text-normal, rgb(6, 6, 6));
  --setting-items-background: var(--background-primary-alt, rgb(230, 229, 224));
  --setting-items-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(0, 0, 0));
  --shiki-code-background: var(--code-background, rgb(230, 229, 224));
  --shiki-code-comment: var(--text-faint, rgb(227, 0, 106));
  --shiki-code-normal: var(--text-muted, rgb(0, 0, 0));
  --shiki-code-punctuation: var(--text-muted, rgb(0, 0, 0));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --shiki-gutter-text-color: var(--text-faint, rgb(227, 0, 106));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(0, 0, 0));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(0, 0, 0));
  --shiki-terminal-dots-color: var(--text-faint, rgb(227, 0, 106));
  --signature: "֎";
  --slider-track-background: var(--background-modifier-border, rgb(67, 67, 67));
  --status-bar-background: var(--background-secondary, rgb(247 245 244));
  --status-bar-border-color: var(--divider-color, rgb(67, 67, 67));
  --status-bar-font-size: var(--font-ui-smaller, 13.5px);
  --status-bar-text-color: var(--text-muted, rgb(0, 0, 0));
  --suggestion-background: var(--background-primary, rgb(255, 255, 255));
  --tab-background-active: var(--background-primary, rgb(255, 255, 255));
  --tab-container-background: var(--background-secondary, rgb(247 245 244));
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, rgb(67, 67, 67));
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-switcher-background: var(--background-secondary, rgb(247 245 244));
  --tab-text-color: var(--text-faint, rgb(227, 0, 106));
  --tab-text-color-active: var(--text-muted, rgb(0, 0, 0));
  --tab-text-color-focused: var(--text-muted, rgb(0, 0, 0));
  --tab-text-color-focused-active: var(--text-muted, rgb(0, 0, 0));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(6, 6, 6));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(196 98 0));
  --tab-text-nofocus: rgba(0, 0, 0, 0.6);
  --table-add-button-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --table-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --table-border-radius: 5px;
  --table-drag-handle-background-active: var(--table-selection-border-color, rgb(255, 184, 108));
  --table-drag-handle-color: var(--text-faint, rgb(227, 0, 106));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(255, 255, 255));
  --table-header-border-color: var(--table-border-color, rgb(67, 67, 67));
  --table-header-color: var(--text-normal, rgb(6, 6, 6));
  --table-selection-border-color: var(--interactive-accent, rgb(255, 184, 108));
  --tag-color: var(--text-accent, rgb(196 98 0));
  --tag-color-hover: var(--text-accent, rgb(196 98 0));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, rgb(0, 184, 225)));
  --text-accent: var(--color-accent, rgb(196 98 0));
  --text-accent-hover: var(--color-accent-2, rgb(0, 184, 225));
  --text-antinormal: white;
  --text-error: var(--color-red, rgb(255, 0, 55));
  --text-error-hover: rgb(232, 0, 0);
  --text-faint: var(--color-base-50, rgb(227, 0, 106));
  --text-highlight-bg-active: rgba(255, 255, 50, 0.4);
  --text-highlight-rgb: var(--zotero-yellow-rgb, 255, 212, 0);
  --text-muted: var(--color-base-70, rgb(0, 0, 0));
  --text-muted2: rgb(123, 123, 123);
  --text-normal: var(--color-base-100, rgb(6, 6, 6));
  --text-on-accent: rgb(255, 255, 255);
  --titlebar-background: var(--background-secondary, rgb(247 245 244));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(242, 242, 242));
  --titlebar-border-color: var(--background-modifier-border, rgb(67, 67, 67));
  --titlebar-text-color: var(--text-muted, rgb(0, 0, 0));
  --titlebar-text-color-focused: var(--text-normal, rgb(6, 6, 6));
  --vault-profile-color: var(--text-normal, rgb(6, 6, 6));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(6, 6, 6));
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --zotero-black-dark-rgb: 255, 255, 255;
  --zotero-black-light-rgb: 0, 0, 0;
  --zotero-blue-rgb: 46, 168, 229;
  --zotero-gray-rgb: 170, 170, 170;
  --zotero-green-rgb: 95, 178, 54;
  --zotero-magenta-rgb: 229, 110, 238;
  --zotero-orange-rgb: 241, 152, 55;
  --zotero-purple-rgb: 162, 138, 229;
  --zotero-red-rgb: 255, 102, 102;
  --zotero-yellow-rgb: 255, 212, 0;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(247 245 244));
  background-color: var(--tab-container-background, rgb(247, 245, 244));
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(247, 245, 244));
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(247 245 244));
  background-color: var(--tab-container-background, rgb(247, 245, 244));
  border-left-color: rgb(67, 67, 67);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body html {
  --callout-color: rgba(103, 161, 149, 0.459);
  --embed-border-radius: 10px;
  --embed-max-height: 500px;
  --embed-padding: 16px;
  --fluro-blue-rgb: 0, 255, 255;
  --fluro-pink-rgb: 255, 0, 255;
  --font-size-code: 15px;
  --font-size-h1: 23px;
  --font-size-h2: 22px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 16px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 16px;
  --font-size-status-bar: 13.75px;
  --line-height-normal: 1.5;
  --scrollbar-width: 8px;
  --table-border-radius: 5px;
  --text-highlight-rgb: var(--zotero-yellow-rgb, 255, 212, 0);
  --zotero-black-dark-rgb: 255, 255, 255;
  --zotero-black-light-rgb: 0, 0, 0;
  --zotero-blue-rgb: 46, 168, 229;
  --zotero-gray-rgb: 170, 170, 170;
  --zotero-green-rgb: 95, 178, 54;
  --zotero-magenta-rgb: 229, 110, 238;
  --zotero-orange-rgb: 241, 152, 55;
  --zotero-purple-rgb: 162, 138, 229;
  --zotero-red-rgb: 255, 102, 102;
  --zotero-yellow-rgb: 255, 212, 0;
  scrollbar-width: thin;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--fbold, rgb(55, 0, 0));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--fitalic, rgb(55, 0, 0));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--fitalic, rgb(55, 0, 0));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--fitalic, rgb(55, 0, 0));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--fbold, rgb(55, 0, 0));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 0, 0) none 0px;
  text-decoration-color: rgb(55, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(6, 6, 6));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body del {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(227, 0, 106);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(255, 184, 108));
  border-color: rgb(255, 184, 108);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(0, 0, 0));
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--external-link, rgb(96, 123, 4));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--link-weight, 500);
  outline: rgb(96, 123, 4) none 0px;
  text-decoration-color: rgb(96, 123, 4);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(196, 98, 0));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(196, 98, 0) none 0px;
  text-decoration-color: rgb(196, 98, 0);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(196, 98, 0));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(196, 98, 0) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(196, 98, 0));
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ol > li {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body ul > li {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-accent, rgb(196, 98, 0));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--quote-bg, rgba(164, 164, 160, 0.15));
  color: var(--text-normal, rgb(6, 6, 6));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body table {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 213.828px;
  margin-right: 213.844px;
  margin-top: var(--heading-spacing, 20px);
  text-align: left;
}

html[saved-theme="light"] body td {
  background-color: var(--background-secondary-alt, rgb(242, 242, 242));
  border-bottom-color: rgb(6, 6, 6);
  border-bottom-width: 0px;
  border-left-color: rgb(6, 6, 6);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(6, 6, 6);
  border-right-width: 0px;
  border-top-color: rgb(6, 6, 6);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(6, 6, 6));
  font-weight: 450;
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body th {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(67, 67, 67);
  border-bottom-width: 0px;
  border-left-color: rgb(67, 67, 67);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(67, 67, 67);
  border-right-width: 0px;
  border-top-color: rgb(67, 67, 67);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 700);
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(6, 6, 6);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-block, rgb(6, 6, 6));
  font-family: var(--ec-codeFontFml, monaco);
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(230, 229, 224));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body figcaption {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(230, 229, 224));
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-secondary, rgb(247, 245, 244));
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(0, 0, 0);
  border-radius: 10px;
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: var(--text-muted, rgb(0, 0, 0));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--background-secondary, rgb(247, 245, 244));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-radius: 10px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--background-secondary, rgb(247, 245, 244));
  border-bottom-color: rgb(6, 6, 6);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-style: solid;
  border-left-color: rgb(6, 6, 6);
  border-radius: 10px;
  border-right-color: rgb(6, 6, 6);
  border-right-style: solid;
  border-top-color: rgb(6, 6, 6);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-style: solid;
  color: rgb(6, 6, 6);
  margin-bottom: 15px;
  margin-top: 15px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  margin-left: -20px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
  color: rgb(6, 6, 6);
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body ul > li.task-list-item {
  --list-marker-color: var(--bg-orange2, rgba(255, 132, 0, 0.85));
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
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

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
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

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
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

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgba(0, 191, 188, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgba(233, 49, 71, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgba(233, 49, 71, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgba(120, 82, 238, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgba(233, 49, 71, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="imagen"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgb(67, 67, 67);
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: rgba(255, 0, 0, 0.45);
  --background-modifier-error-hover: rgba(255, 0, 0, 0.616);
  --background-modifier-error-rgb: rgb(255, 0, 0);
  --background-modifier-form-field: rgba(255, 255, 255, 0.2);
  --background-modifier-form-field-hover: rgba(255, 255, 255, 0.2);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: rgb(80, 250, 123);
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(230, 229, 224);
  --background-secondary: rgb(247 245 244);
  --background-secondary-alt: rgb(242, 242, 242);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: rgb(255, 184, 108);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, white);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-color: white;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(255, 255, 255);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: rgb(6, 6, 6);
  --checkbox-border-color: rgb(227, 0, 106);
  --checkbox-border-color-hover: rgb(0, 0, 0);
  --checkbox-color: rgb(255, 184, 108);
  --checkbox-color-hover: rgb(255, 85, 85);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgb(0, 0, 0);
  --clickable-icon-radius: 4px;
  --code-background: rgb(230, 229, 224);
  --code-border-color: rgb(67, 67, 67);
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: rgb(227, 0, 106);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: rgb(6, 6, 6);
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: rgb(0, 0, 0);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --col-rule-color: rgb(67, 67, 67);
  --collapse-icon-color: rgb(227, 0, 106);
  --collapse-icon-color-collapsed: rgb(196 98 0);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgb(67, 67, 67);
  --divider-color-hover: rgb(255, 184, 108);
  --divider-vertical-height: 100%;
  --dropdown-background: rgb(240, 128, 0);
  --dropdown-background-hover: rgb(255, 85, 85);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: rgb(240, 128, 0);
  --flair-color: rgb(6, 6, 6);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: rgb(0, 0, 0);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: rgb(196 98 0);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: rgb(227, 0, 106);
  --graph-text: rgb(6, 6, 6);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: rgb(227, 0, 106);
  --heading-spacing: 2.5rem;
  --hr-color: rgb(67, 67, 67);
  --interactive-accent: rgb(255, 184, 108);
  --interactive-accent-hover: rgb(255, 85, 85);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: rgb(255, 85, 85);
  --interactive-normal: rgb(240, 128, 0);
  --link-color: rgb(196 98 0);
  --link-color-hover: rgb(0, 184, 225);
  --link-external-color: rgb(196 98 0);
  --link-external-color-hover: rgb(0, 184, 225);
  --link-unresolved-color: rgb(196 98 0);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.9em;
  --mcl-card-bg-color: rgb(247 245 244);
  --mcl-card-border-color: rgb(67, 67, 67);
  --menu-background: rgb(247 245 244);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.422);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.287);
  --scrollbar-width: 12px;
  --search-clear-button-color: rgb(0, 0, 0);
  --search-icon-color: rgb(0, 0, 0);
  --search-result-background: rgb(255, 255, 255);
  --setting-group-heading-color: rgb(6, 6, 6);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(230, 229, 224);
  --setting-items-border-color: rgb(67, 67, 67);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: rgb(0, 0, 0);
  --shiki-code-background: rgb(230, 229, 224);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgb(227, 0, 106);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: rgb(0, 0, 0);
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: rgb(0, 0, 0);
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgb(67, 67, 67);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgb(227, 0, 106);
  --shiki-gutter-text-color-highlight: rgb(0, 0, 0);
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: rgb(0, 0, 0);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: rgb(227, 0, 106);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(255, 255, 255);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(255, 255, 255);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 14px;
  --tab-outline-color: rgb(67, 67, 67);
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(247 245 244);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(247 245 244), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: rgb(227, 0, 106);
  --tab-text-color-active: rgb(0, 0, 0);
  --tab-text-color-focused: rgb(0, 0, 0);
  --tab-text-color-focused-active: rgb(0, 0, 0);
  --tab-text-color-focused-active-current: rgb(6, 6, 6);
  --tab-text-color-focused-highlighted: rgb(196 98 0);
  --table-add-button-border-color: rgb(67, 67, 67);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(255, 184, 108);
  --table-drag-handle-color: rgb(227, 0, 106);
  --table-drag-handle-color-active: rgb(255, 255, 255);
  --table-header-background: transparent;
  --table-header-border-color: rgb(67, 67, 67);
  --table-header-border-width: 1px;
  --table-header-color: rgb(6, 6, 6);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: rgb(255, 184, 108);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: rgb(196 98 0);
  --tag-color-hover: rgb(196 98 0);
  --tag-size: 0.875em;
  --text-accent: rgb(196 98 0);
  --text-accent-hover: rgb(0, 184, 225);
  --text-error: rgb(255, 0, 55);
  --text-faint: rgb(227, 0, 106);
  --text-highlight-bg: rgba(117, 0, 0, 0.293);
  --text-highlight-rgb: 255, 212, 0;
  --text-muted: rgb(0, 0, 0);
  --text-normal: rgb(6, 6, 6);
  --text-selection: rgba(44, 77, 188, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: var(--background-primary-alt, rgb(230, 229, 224));
  border-bottom-color: rgb(6, 6, 6);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(6, 6, 6);
  border-left-style: solid;
  border-left-width: 0px;
  border-right-color: rgb(6, 6, 6);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(6, 6, 6);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(6, 6, 6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  scrollbar-color: var(--scrollbar-thumb-bg) var(--scrollbar-bg, rgba(0, 0, 0, 0.286) rgba(0, 0, 0, 0.05));
  scrollbar-width: thin;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 184, 212);
  background: rgba(0, 184, 212, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: rgb(67, 67, 67);
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: rgba(255, 0, 0, 0.45);
  --background-modifier-error-hover: rgba(255, 0, 0, 0.616);
  --background-modifier-error-rgb: rgb(255, 0, 0);
  --background-modifier-form-field: rgba(255, 255, 255, 0.2);
  --background-modifier-form-field-hover: rgba(255, 255, 255, 0.2);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: rgb(80, 250, 123);
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(230, 229, 224);
  --background-secondary: rgb(247 245 244);
  --background-secondary-alt: rgb(242, 242, 242);
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --blockquote-border-color: rgb(255, 184, 108);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: normal;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: rgb(255, 255, 255);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #e0e0e0;
  --caret-color: rgb(6, 6, 6);
  --checkbox-border-color: rgb(227, 0, 106);
  --checkbox-border-color-hover: rgb(0, 0, 0);
  --checkbox-color: rgb(255, 184, 108);
  --checkbox-color-hover: rgb(255, 85, 85);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: rgb(0, 0, 0);
  --clickable-icon-radius: 4px;
  --code-background: rgb(230, 229, 224);
  --code-border-color: rgb(67, 67, 67);
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: rgb(227, 0, 106);
  --code-function: #e0ac00;
  --code-important: #ec7500;
  --code-keyword: #d53984;
  --code-normal: rgb(6, 6, 6);
  --code-operator: #e93147;
  --code-property: #00bfbc;
  --code-punctuation: rgb(0, 0, 0);
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #08b94e;
  --code-tag: #e93147;
  --code-value: #7852ee;
  --col-rule-color: rgb(67, 67, 67);
  --collapse-icon-color: rgb(227, 0, 106);
  --collapse-icon-color-collapsed: rgb(196 98 0);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --divider-color: rgb(67, 67, 67);
  --divider-color-hover: rgb(255, 184, 108);
  --divider-vertical-height: 100%;
  --dropdown-background: rgb(240, 128, 0);
  --dropdown-background-hover: rgb(255, 85, 85);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: rgb(240, 128, 0);
  --flair-color: rgb(6, 6, 6);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: rgb(0, 0, 0);
  --graph-node-attachment: #e0ac00;
  --graph-node-focused: rgb(196 98 0);
  --graph-node-tag: #08b94e;
  --graph-node-unresolved: rgb(227, 0, 106);
  --graph-text: rgb(6, 6, 6);
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: rgb(227, 0, 106);
  --heading-spacing: 2.5rem;
  --hr-color: rgb(67, 67, 67);
  --interactive-accent: rgb(255, 184, 108);
  --interactive-accent-hover: rgb(255, 85, 85);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: rgb(255, 85, 85);
  --interactive-normal: rgb(240, 128, 0);
  --link-color: rgb(196 98 0);
  --link-color-hover: rgb(0, 184, 225);
  --link-external-color: rgb(196 98 0);
  --link-external-color-hover: rgb(0, 184, 225);
  --link-unresolved-color: rgb(196 98 0);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 1.9em;
  --mcl-card-bg-color: rgb(247 245 244);
  --mcl-card-border-color: rgb(67, 67, 67);
  --menu-background: rgb(247 245 244);
  --menu-border-color: #d4d4d4;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.422);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.287);
  --scrollbar-width: 12px;
  --search-clear-button-color: rgb(0, 0, 0);
  --search-icon-color: rgb(0, 0, 0);
  --search-result-background: rgb(255, 255, 255);
  --setting-group-heading-color: rgb(6, 6, 6);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: rgb(230, 229, 224);
  --setting-items-border-color: rgb(67, 67, 67);
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: rgb(0, 0, 0);
  --shiki-code-background: rgb(230, 229, 224);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: rgb(227, 0, 106);
  --shiki-code-function: #08b94e;
  --shiki-code-important: #ec7500;
  --shiki-code-keyword: #d53984;
  --shiki-code-normal: rgb(0, 0, 0);
  --shiki-code-property: #00bfbc;
  --shiki-code-punctuation: rgb(0, 0, 0);
  --shiki-code-string: #e0ac00;
  --shiki-code-value: #7852ee;
  --shiki-gutter-border-color: rgb(67, 67, 67);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: rgb(227, 0, 106);
  --shiki-gutter-text-color-highlight: rgb(0, 0, 0);
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: rgb(0, 0, 0);
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: rgb(227, 0, 106);
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: rgb(255, 255, 255);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e93147;
  --sync-avatar-color-2: #ec7500;
  --sync-avatar-color-3: #e0ac00;
  --sync-avatar-color-4: #08b94e;
  --sync-avatar-color-5: #00bfbc;
  --sync-avatar-color-6: #086ddd;
  --sync-avatar-color-7: #7852ee;
  --sync-avatar-color-8: #d53984;
  --tab-background-active: rgb(255, 255, 255);
  --tab-divider-color: #d4d4d4;
  --tab-font-size: 14px;
  --tab-outline-color: rgb(67, 67, 67);
  --tab-radius: 4px;
  --tab-stacked-font-size: 14px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: rgb(247 245 244);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(247 245 244), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: rgb(227, 0, 106);
  --tab-text-color-active: rgb(0, 0, 0);
  --tab-text-color-focused: rgb(0, 0, 0);
  --tab-text-color-focused-active: rgb(0, 0, 0);
  --tab-text-color-focused-active-current: rgb(6, 6, 6);
  --tab-text-color-focused-highlighted: rgb(196 98 0);
  --table-add-button-border-color: rgb(67, 67, 67);
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: rgb(255, 184, 108);
  --table-drag-handle-color: rgb(227, 0, 106);
  --table-drag-handle-color-active: rgb(255, 255, 255);
  --table-header-background: transparent;
  --table-header-border-color: rgb(67, 67, 67);
  --table-header-border-width: 1px;
  --table-header-color: rgb(6, 6, 6);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: rgb(255, 184, 108);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: rgb(196 98 0);
  --tag-color-hover: rgb(196 98 0);
  --tag-size: 0.875em;
  --text-accent: rgb(196 98 0);
  --text-accent-hover: rgb(0, 184, 225);
  --text-error: rgb(255, 0, 55);
  --text-faint: rgb(227, 0, 106);
  --text-highlight-bg: rgba(117, 0, 0, 0.293);
  --text-highlight-rgb: 255, 212, 0;
  --text-muted: rgb(0, 0, 0);
  --text-normal: rgb(6, 6, 6);
  --text-selection: rgba(44, 77, 188, 0.2);
  --text-success: #08b94e;
  --text-warning: #ec7500;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(var(--callout-color), 0.3);
  border-bottom-color: rgb(6, 6, 6);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(6, 6, 6);
  border-left-width: 0px;
  border-right-color: rgb(6, 6, 6);
  border-right-width: 0px;
  border-top-color: rgb(6, 6, 6);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
  color: rgb(6, 6, 6);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  scrollbar-color: var(--scrollbar-thumb-bg) var(--scrollbar-bg, rgba(0, 0, 0, 0.286) rgba(0, 0, 0, 0.05));
  scrollbar-width: thin;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  background: rgba(8, 109, 221, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgba(236, 117, 0, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgba(8, 185, 78, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgba(0, 191, 188, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 184, 212);
  background: rgba(0, 184, 212, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  border-bottom-color: rgba(0, 184, 212, 0.25);
  border-left-color: rgba(0, 184, 212, 0.25);
  border-right-color: rgba(0, 184, 212, 0.25);
  border-top-color: rgba(0, 184, 212, 0.25);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgba(236, 117, 0, 0.3) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.3);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: white;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 10px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: var(--text-normal, rgb(6, 6, 6));
  padding-left: 15px;
  padding-right: 15px;
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

html[saved-theme="light"] body .callout[data-callout="imagen"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="multi-column"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgba(255, 255, 255, 0.2);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(6, 6, 6);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 6, 6) none 0px;
  text-decoration-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(196, 98, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(196, 98, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(196, 98, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(196, 98, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.15));
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--text-antinormal, rgb(255, 255, 255));
  border-bottom-color: rgb(247, 245, 244);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.15));
  border-bottom-color: rgb(196, 98, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(196, 98, 0);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(196, 98, 0);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(196, 98, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.15));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-color: var(--tag-color, rgb(196 98 0));
  --pill-color-hover: var(--tag-color-hover, rgb(196 98 0));
  --pill-color-remove: var(--tag-color, rgb(196 98 0));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(196 98 0));
  color: var(--pill-color, rgb(196, 98, 0));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(196, 98, 0);
}

html[saved-theme="light"] body h1 {
  background: rgba(0, 0, 0, 0) linear-gradient(271deg, rgba(0, 0, 0, 0), rgba(1, 224, 172, 0.5), rgba(9, 168, 225, 0.45), rgba(150, 8, 220, 0.4), rgba(220, 10, 90, 0.45), rgba(255, 132, 0, 0.5), rgba(0, 0, 0, 0)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(271deg, rgba(0, 0, 0, 0), rgba(1, 224, 172, 0.5), rgba(9, 168, 225, 0.45), rgba(150, 8, 220, 0.4), rgba(220, 10, 90, 0.45), rgba(255, 132, 0, 0.5), rgba(0, 0, 0, 0));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--fcolor-header, rgb(0, 0, 0));
  font-family: var(--h1-font, Inter);
  font-size: var(--h1-size, 18.5px);
  letter-spacing: var(--h1-letter-spacing, 0.15px);
  line-height: var(--h1-line-height, 22.2px);
  margin-bottom: 3px;
  padding-bottom: 6px;
  padding-top: 6px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(6, 6, 6));
  font-size: var(--inline-title-size, 23px);
}

html[saved-theme="light"] body h2 {
  background: rgba(0, 0, 0, 0) linear-gradient(271deg, rgba(0, 0, 0, 0), rgba(255, 132, 0, 0.5), rgba(255, 140, 0, 0.51), rgba(255, 132, 0, 0.5), rgba(0, 0, 0, 0)) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: linear-gradient(271deg, rgba(0, 0, 0, 0), rgba(255, 132, 0, 0.5), rgba(255, 140, 0, 0.51), rgba(255, 132, 0, 0.5), rgba(0, 0, 0, 0));
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--fcolor-header, rgb(0, 0, 0));
  font-family: var(--h2-font, Inter);
  font-size: var(--h2-size, 18.25px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h2-letter-spacing, 0.15px);
  line-height: var(--h2-line-height, 21.9px);
  margin-bottom: 3px;
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 6px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(6, 6, 6);
  border-bottom-style: double;
  border-bottom-width: 3px;
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: var(--inline-title-color, rgb(6, 6, 6));
  font-family: var(--inline-title-font, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 23px);
  letter-spacing: -0.345px;
  line-height: var(--inline-title-line-height, 27.6px);
  margin-bottom: 40px;
  margin-top: 20px;
  padding-bottom: 5px;
}

html[saved-theme="light"] body h3 {
  background: rgba(0, 0, 0, 0) radial-gradient(circle, rgba(220, 10, 90, 0.45) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(circle, rgba(220, 10, 90, 0.45) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--fcolor-header, rgb(0, 0, 0));
  font-family: var(--h3-font, Inter);
  font-size: var(--h3-size, 17.85px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h3-letter-spacing, 0.15px);
  line-height: var(--h3-line-height, 23.205px);
  margin-bottom: 5px;
  margin-top: var(--heading-spacing, 28px);
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 6px;
}

html[saved-theme="light"] body h4 {
  background: rgba(0, 0, 0, 0) radial-gradient(circle, rgba(150, 8, 220, 0.4) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(circle, rgba(150, 8, 220, 0.4) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--fcolor-header, rgb(0, 0, 0));
  font-family: var(--h4-font, Inter);
  font-size: var(--h4-size, 17.5px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h4-letter-spacing, 0.15px);
  line-height: var(--h4-line-height, 24.5px);
  margin-bottom: 5px;
  margin-top: var(--heading-spacing, 28px);
  padding-bottom: 6px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 6px;
}

html[saved-theme="light"] body h5 {
  background: rgba(0, 0, 0, 0) radial-gradient(circle, rgba(9, 168, 225, 0.45) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(circle, rgba(9, 168, 225, 0.45) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--fcolor-header, rgb(0, 0, 0));
  font-family: var(--h5-font, Inter);
  font-size: var(--h5-size, 17px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h5-letter-spacing, 0.15px);
  line-height: var(--h5-line-height, 25.5px);
  margin-bottom: 5px;
  margin-top: var(--heading-spacing, 28px);
  padding-bottom: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
}

html[saved-theme="light"] body h6 {
  background: rgba(0, 0, 0, 0) radial-gradient(circle, rgba(1, 224, 172, 0.5) 50%, rgba(0, 0, 0, 0) 100%) repeat scroll 0% 0% / auto padding-box border-box;
  background-image: radial-gradient(circle, rgba(1, 224, 172, 0.5) 50%, rgba(0, 0, 0, 0) 100%);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--fcolor-header, rgb(0, 0, 0));
  font-family: var(--h6-font, Inter);
  font-size: var(--h6-size, 17px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h6-letter-spacing, 0.15px);
  line-height: var(--h6-line-height, 25.5px);
  margin-bottom: 5px;
  margin-top: 30px;
  padding-bottom: 4px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 4px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body body {
  scrollbar-color: var(--scrollbar-thumb-bg) var(--scrollbar-bg, rgba(0, 0, 0, 0.286) rgba(0, 0, 0, 0.05));
  scrollbar-width: thin;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(0, 0, 0));
  font-weight: var(--nav-item-weight, 650);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(0, 0, 0));
  font-weight: var(--nav-item-weight, 650);
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--nav-item-weight, 650);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--icon-color, rgb(0, 0, 0));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--background-secondary-alt, rgb(242, 242, 242));
  border-bottom-color: rgba(255, 255, 255, 0.714);
  border-bottom-left-radius: 7.5px;
  border-bottom-right-radius: 7.5px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.714);
  border-right-color: rgba(255, 255, 255, 0.714);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.714);
  border-top-left-radius: 7.5px;
  border-top-right-radius: 7.5px;
  color: var(--text-faint, rgb(227, 0, 106));
  font-size: var(--font-size-status-bar, 13.75px);
  padding-bottom: 0px;
  padding-left: 1px;
  padding-top: 0px;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(227, 0, 106);
  font-size: 13.75px;
  font-weight: 600;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--icon-color, rgb(0, 0, 0));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(227, 0, 106));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--table-background-color, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(6, 6, 6);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(0, 0, 0);
  border-color: rgb(67, 67, 67);
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: var(--text-muted, rgb(0, 0, 0));
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-color: var(--tag-color, rgb(196 98 0));
  --pill-color-hover: var(--tag-color-hover, rgb(196 98 0));
  --pill-color-remove: var(--tag-color, rgb(196 98 0));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(196 98 0));
  color: var(--pill-color, rgb(196, 98, 0));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(247, 245, 244));
  border-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(242, 242, 242));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(6, 6, 6);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--background-secondary-alt, rgb(242, 242, 242));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: var(--text-normal, rgb(6, 6, 6));
  font-size: 14px;
  font-weight: 600;
  line-height: 18.2px;
}

html[saved-theme="light"] body abbr {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: var(--text-normal, rgb(0, 0, 0));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(230, 229, 224));
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
  color: var(--code-normal, rgb(6, 6, 6));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(6, 6, 6);
  border-left-color: rgb(6, 6, 6);
  border-right-color: rgb(6, 6, 6);
  border-top-color: rgb(6, 6, 6);
}

html[saved-theme="light"] body sub {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body summary {
  color: rgb(6, 6, 6);
}

html[saved-theme="light"] body sup {
  color: rgb(6, 6, 6);
  font-size: 12px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--background-secondary, rgb(247, 245, 244));
  border-bottom-left-radius: 27.16px;
  border-bottom-right-radius: 27.16px;
  border-top-left-radius: 27.16px;
  border-top-right-radius: 27.16px;
  color: var(--text-accent-hover, rgb(0, 184, 225));
}`,
  },
  extras: `@keyframes cambiarOpacidad {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

@keyframes example11 {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.55;
  }
  100% {
    opacity: 1;
  }
}

.inline-title {
  animation-name: example11;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
}

.theme-dark .empty-state {
  animation-name: title_dark;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
}

.theme-light .empty-state {
  animation-name: title_light;
  animation-duration: 3.5s;
  animation-iteration-count: infinite;
}

@keyframes title_dark {
  0% {
    color: rgb(255 255 255 / 100%);
  }
  50% {
    color: rgb(255 255 255 / 70%);
  }
  100% {
    color: rgb(255 255 255 / 100%);
  }
}

@keyframes title_light {
  0% {
    color: rgb(50 50 50 / 100%);
  }
  50% {
    color: rgb(50 50 50 / 60%);
  }
  100% {
    color: rgb(50 50 50 / 100%);
  }
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeOpacity {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes active_line_dark {
  0% {
    background-color: rgba(255, 255, 255, 0.09);
  }
  100% {
    background-color: rgba(255, 255, 255, 0);
  }
}

@keyframes active_line_light {
  0% {
    background-color: rgba(0, 0, 0, 0.09);
  }
  100% {
    background-color: rgba(0, 0, 0, 0);
  }
}
`,
  classSettings: {
    "embed-show-shadow": {
      general: `body.embed-show-shadow .markdown-embed:hover {
box-shadow: 0 10px 15px rgba(0,0,0,.25), 0 5px 5px rgba(0,0,0,.22) !important;
}`,
    },
    "embed-smooth-scroll": {
      general: `body.embed-smooth-scroll .internal-embed {
scroll-behavior: smooth;
}`,
    },
  },
};
