import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nightfox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 181;
  --accent-l: 51%;
  --accent-s: 37%;
  --background-modifier-active-hover: rgba(84, 175, 176, 0.1);
  --background-modifier-border: #243347;
  --background-modifier-border-focus: #39506d;
  --background-modifier-border-hover: #29394f;
  --background-modifier-error: #c94f6d;
  --background-modifier-error-hover: #c94f6d;
  --background-modifier-error-rgb: 201, 79, 109;
  --background-modifier-form-field: #243347;
  --background-modifier-form-field-hover: #243347;
  --background-modifier-hover: rgba(205, 206, 207, 0.067);
  --background-modifier-success: #81b29a;
  --background-modifier-success-rgb: 129, 178, 154;
  --background-primary: #192330;
  --background-primary-alt: #151d28;
  --background-secondary: #151d28;
  --background-secondary-alt: #29394f;
  --bases-cards-background: #192330;
  --bases-cards-cover-background: #151d28;
  --bases-cards-shadow: 0 0 0 1px #243347;
  --bases-cards-shadow-hover: 0 0 0 1px #29394f;
  --bases-embed-border-color: #243347;
  --bases-group-heading-property-color: #aeafb0;
  --bases-table-border-color: #243347;
  --bases-table-cell-background-active: #192330;
  --bases-table-cell-background-disabled: #151d28;
  --bases-table-cell-background-selected: rgba(84, 175, 176, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #39506d;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(84, 175, 176);
  --bases-table-group-background: #151d28;
  --bases-table-header-background: #192330;
  --bases-table-header-background-hover: rgba(205, 206, 207, 0.067);
  --bases-table-header-color: #aeafb0;
  --bases-table-summary-background: #192330;
  --bases-table-summary-background-hover: rgba(205, 206, 207, 0.067);
  --blockquote-background-color: rgba(99, 205, 207, 0.03);
  --blockquote-border-color: rgb(84, 175, 176);
  --blur-background: color-mix(in srgb, #29394f 65%, transparent) linear-gradient(#29394f, color-mix(in srgb, #29394f 65%, transparent));
  --bold-color: #d6d6d7;
  --callout-bug: 201, 79, 109;
  --callout-default: 113, 156, 214;
  --callout-error: 201, 79, 109;
  --callout-example: 157, 121, 214;
  --callout-fail: 201, 79, 109;
  --callout-important: 99, 205, 207;
  --callout-info: 113, 156, 214;
  --callout-question: 244, 162, 97;
  --callout-success: 129, 178, 154;
  --callout-summary: 99, 205, 207;
  --callout-tip: 99, 205, 207;
  --callout-todo: 113, 156, 214;
  --callout-warning: 244, 162, 97;
  --canvas-background: #192330;
  --canvas-card-label-color: #5d728e;
  --canvas-color-1: 201, 79, 109;
  --canvas-color-2: 244, 162, 97;
  --canvas-color-3: 219, 192, 116;
  --canvas-color-4: 129, 178, 154;
  --canvas-color-5: 99, 205, 207;
  --canvas-color-6: 157, 121, 214;
  --canvas-dot-pattern: #29394f;
  --caret-color: #cdcecf;
  --checkbox-border-color: #5d728e;
  --checkbox-border-color-hover: #aeafb0;
  --checkbox-color: rgb(84, 175, 176);
  --checkbox-color-hover: rgb(111, 190, 188);
  --checkbox-marker-color: #192330;
  --checklist-done-color: #aeafb0;
  --code-background: #151d28;
  --code-border-color: #243347;
  --code-bracket-background: rgba(205, 206, 207, 0.067);
  --code-comment: #738091;
  --code-function: #dbc074;
  --code-important: #f4a261;
  --code-inline-background: #131a24;
  --code-keyword: #d67ad2;
  --code-normal: #cdcecf;
  --code-operator: #c94f6d;
  --code-property: #63cdcf;
  --code-punctuation: #aeafb0;
  --code-string: #81b29a;
  --code-tag: #c94f6d;
  --code-value: #9d79d6;
  --collapse-icon-color: #5d728e;
  --collapse-icon-color-collapsed: rgb(111, 190, 188);
  --color-accent: rgb(84, 175, 176);
  --color-accent-1: rgb(111, 190, 188);
  --color-accent-2: rgb(134, 202, 198);
  --color-accent-hsl: 181, 37%, 51%;
  --color-base-00: #131a24;
  --color-base-05: #151d28;
  --color-base-10: #192330;
  --color-base-100: #cdcecf;
  --color-base-110: #d6d6d7;
  --color-base-20: #212e3f;
  --color-base-25: #243347;
  --color-base-30: #29394f;
  --color-base-35: #39506d;
  --color-base-40: #496283;
  --color-base-50: #5d728e;
  --color-base-60: #71839b;
  --color-base-70: #aeafb0;
  --color-blue: #719cd6;
  --color-blue-bright: #86abdc;
  --color-blue-dim: #6085b6;
  --color-blue-rgb: 113, 156, 214;
  --color-cyan: #63cdcf;
  --color-cyan-bright: #7ad5d6;
  --color-cyan-dim: #54aeb0;
  --color-cyan-rgb: 99, 205, 207;
  --color-green: #81b29a;
  --color-green-bright: #8ebaa4;
  --color-green-dim: #6e9783;
  --color-green-rgb: 129, 178, 154;
  --color-orange: #f4a261;
  --color-orange-bright: #f6b079;
  --color-orange-dim: #cf8a52;
  --color-orange-rgb: 244, 162, 97;
  --color-pink: #d67ad2;
  --color-pink-bright: #dc8ed9;
  --color-pink-dim: #b668b3;
  --color-pink-rgb: 214, 122, 210;
  --color-purple: #9d79d6;
  --color-purple-bright: #baa1e2;
  --color-purple-dim: #8567b6;
  --color-purple-rgb: 157, 121, 214;
  --color-red: #c94f6d;
  --color-red-bright: #d16983;
  --color-red-dim: #ab435d;
  --color-red-rgb: 201, 79, 109;
  --color-yellow: #dbc074;
  --color-yellow-bright: #e0c989;
  --color-yellow-dim: #baa363;
  --color-yellow-rgb: 219, 192, 116;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #243347;
  --divider-color-hover: rgb(84, 175, 176);
  --dropdown-background: #29394f;
  --dropdown-background-hover: #39506d;
  --embed-block-shadow-hover: 0 0 0 1px #243347, inset 0 0 0 1px #243347;
  --embed-border-start: 2px solid rgb(84, 175, 176);
  --file-header-background: #192330;
  --file-header-background-focused: #192330;
  --flair-background: #29394f;
  --flair-color: #cdcecf;
  --footnote-divider-color: #243347;
  --footnote-id-color: #aeafb0;
  --footnote-id-color-no-occurrences: #5d728e;
  --footnote-input-background-active: rgba(205, 206, 207, 0.067);
  --graph-line: #39506d;
  --graph-node: #aeafb0;
  --graph-node-attachment: #dbc074;
  --graph-node-focused: rgb(111, 190, 188);
  --graph-node-tag: #4f9c77;
  --graph-node-unresolved: #5d728e;
  --graph-text: #cdcecf;
  --gray: var(--text-muted);
  --h1-color: #d6d6d7;
  --h1-size: 2.75em;
  --h1-weight: 300;
  --h2-color: #d6d6d7;
  --h2-size: 2.0em;
  --h2-weight: 700;
  --h3-color: #d6d6d7;
  --h3-size: 1.75em;
  --h3-weight: 700;
  --h4-color: #d6d6d7;
  --h4-size: 1.4em;
  --h4-weight: 700;
  --h5-color: #d6d6d7;
  --h5-size: 1.2em;
  --h5-style: italic;
  --h5-weight: 700;
  --h6-color: #d6d6d7;
  --h6-size: 1.0em;
  --h6-style: italic;
  --h6-weight: 700;
  --heading-color: #d6d6d7;
  --heading-formatting: #5d728e;
  --highlight: var(--background-modifier-hover);
  --hr-color: #243347;
  --hr-thickness: 3px;
  --icon-color: #aeafb0;
  --icon-color-active: rgb(111, 190, 188);
  --icon-color-focused: #cdcecf;
  --icon-color-hover: #aeafb0;
  --indentation-guide-color: rgba(205, 206, 207, 0.12);
  --indentation-guide-color-active: rgba(205, 206, 207, 0.3);
  --inline-title-color: #d6d6d7;
  --inline-title-size: 2.75em;
  --inline-title-weight: 300;
  --input-date-separator: #5d728e;
  --input-placeholder-color: #5d728e;
  --interactive-accent: rgb(84, 175, 176);
  --interactive-accent-hover: rgb(111, 190, 188);
  --interactive-accent-hsl: 181, 37%, 51%;
  --interactive-hover: #39506d;
  --interactive-normal: #29394f;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(111, 190, 188);
  --link-color-hover: rgb(134, 202, 198);
  --link-external-color: rgb(111, 190, 188);
  --link-external-color-hover: rgb(134, 202, 198);
  --link-unresolved-color: rgb(111, 190, 188);
  --link-unresolved-decoration-color: rgba(84, 175, 176, 0.3);
  --list-marker-color: #5d728e;
  --list-marker-color-collapsed: rgb(111, 190, 188);
  --list-marker-color-hover: #aeafb0;
  --menu-background: #151d28;
  --menu-border-color: #29394f;
  --metadata-border-color: #243347;
  --metadata-divider-color: #243347;
  --metadata-input-background-active: rgba(205, 206, 207, 0.067);
  --metadata-input-text-color: #cdcecf;
  --metadata-label-background-active: rgba(205, 206, 207, 0.067);
  --metadata-label-text-color: #aeafb0;
  --metadata-label-text-color-hover: #aeafb0;
  --metadata-property-background-active: rgba(205, 206, 207, 0.067);
  --metadata-property-box-shadow-focus: 0 0 0 2px #39506d;
  --metadata-property-box-shadow-hover: 0 0 0 1px #29394f;
  --modal-background: #192330;
  --modal-border-color: #29394f;
  --mono-rgb-0: 19, 26, 36;
  --mono-rgb-100: 205, 206, 207;
  --nav-collapse-icon-color: #5d728e;
  --nav-collapse-icon-color-collapsed: #5d728e;
  --nav-heading-color: #cdcecf;
  --nav-heading-color-collapsed: #5d728e;
  --nav-heading-color-collapsed-hover: #aeafb0;
  --nav-heading-color-hover: #cdcecf;
  --nav-indentation-guide-color: rgba(205, 206, 207, 0.12);
  --nav-item-background-active: rgba(205, 206, 207, 0.067);
  --nav-item-background-hover: rgba(205, 206, 207, 0.067);
  --nav-item-background-selected: rgba(84, 175, 176, 0.15);
  --nav-item-color: #aeafb0;
  --nav-item-color-active: #cdcecf;
  --nav-item-color-highlighted: rgb(111, 190, 188);
  --nav-item-color-hover: #cdcecf;
  --nav-item-color-selected: #cdcecf;
  --nav-tag-color: #5d728e;
  --nav-tag-color-active: #aeafb0;
  --nav-tag-color-hover: #aeafb0;
  --pdf-background: #192330;
  --pdf-page-background: #192330;
  --pdf-shadow: 0 0 0 1px #243347;
  --pdf-sidebar-background: #192330;
  --pdf-thumbnail-shadow: 0 0 0 1px #243347;
  --pill-border-color: #243347;
  --pill-border-color-hover: #29394f;
  --pill-color: #aeafb0;
  --pill-color-hover: #cdcecf;
  --pill-color-remove: #5d728e;
  --pill-color-remove-hover: rgb(111, 190, 188);
  --prompt-background: #192330;
  --prompt-border-color: #496283;
  --raised-background: color-mix(in srgb, #29394f 65%, transparent) linear-gradient(#29394f, color-mix(in srgb, #29394f 65%, transparent));
  --ribbon-background: #131a24;
  --ribbon-background-collapsed: #151d28;
  --scrollbar-active-thumb-bg: rgba(205, 206, 207, 0.2);
  --scrollbar-bg: rgba(205, 206, 207, 0.05);
  --scrollbar-thumb-bg: rgba(205, 206, 207, 0.1);
  --search-clear-button-color: #aeafb0;
  --search-icon-color: #aeafb0;
  --search-result-background: #192330;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #cdcecf;
  --setting-items-background: #151d28;
  --setting-items-border-color: #243347;
  --slider-thumb-border-color: #29394f;
  --slider-track-background: #243347;
  --status-bar-background: #151d28;
  --status-bar-border-color: #243347;
  --status-bar-text-color: #aeafb0;
  --suggestion-background: #192330;
  --swatch-shadow: inset 0 0 0 1px rgba(205, 206, 207, 0.15);
  --sync-avatar-color-1: #c94f6d;
  --sync-avatar-color-2: #f4a261;
  --sync-avatar-color-3: #dbc074;
  --sync-avatar-color-4: #81b29a;
  --sync-avatar-color-5: #63cdcf;
  --sync-avatar-color-6: #719cd6;
  --sync-avatar-color-7: #9d79d6;
  --sync-avatar-color-8: #d67ad2;
  --tab-background-active: #192330;
  --tab-container-background: #151d28;
  --tab-divider-color: #29394f;
  --tab-outline-color: #243347;
  --tab-switcher-background: #151d28;
  --tab-switcher-menubar-background: linear-gradient(to top, #151d28, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(205, 206, 207, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(84, 175, 176);
  --tab-text-color: #5d728e;
  --tab-text-color-active: #aeafb0;
  --tab-text-color-focused: #aeafb0;
  --tab-text-color-focused-active: #aeafb0;
  --tab-text-color-focused-active-current: #cdcecf;
  --tab-text-color-focused-highlighted: rgb(111, 190, 188);
  --table-add-button-border-color: #243347;
  --table-border-color: #243347;
  --table-drag-handle-background-active: rgb(84, 175, 176);
  --table-drag-handle-color: #5d728e;
  --table-header-background: #151d28;
  --table-header-background-hover: #151d28;
  --table-header-border-color: #243347;
  --table-header-color: #cdcecf;
  --table-selection: rgba(84, 175, 176, 0.1);
  --table-selection-border-color: rgb(84, 175, 176);
  --tag-background: rgba(84, 175, 176, 0.1);
  --tag-background-hover: rgba(84, 175, 176, 0.2);
  --tag-border-color: rgba(84, 175, 176, 0.15);
  --tag-border-color-hover: rgba(84, 175, 176, 0.15);
  --tag-color: rgb(111, 190, 188);
  --tag-color-hover: rgb(111, 190, 188);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(111, 190, 188);
  --text-accent-hover: rgb(134, 202, 198);
  --text-error: #c94f6d;
  --text-faint: #5d728e;
  --text-muted: #aeafb0;
  --text-normal: #cdcecf;
  --text-selection: rgba(84, 175, 176, 0.33);
  --text-success: #81b29a;
  --text-warning: #f4a261;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #131a24;
  --titlebar-background-focused: #131a24;
  --titlebar-border-color: #243347;
  --titlebar-text-color: #aeafb0;
  --titlebar-text-color-focused: #cdcecf;
  --vault-profile-color: #cdcecf;
  --vault-profile-color-hover: #cdcecf;
  --workspace-background-translucent: rgba(19, 26, 36, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 29, 40);
  color: rgb(205, 206, 207);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 35, 48);
  color: rgb(205, 206, 207);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 29, 40);
  color: rgb(205, 206, 207);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 51, 71);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 29, 40);
  border-left-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

body div#quartz-root {
  background-color: rgb(25, 35, 48);
  color: rgb(205, 206, 207);
}`,
    typography: `body .page article p > b, b {
  color: rgb(214, 214, 215);
  outline: rgb(214, 214, 215) none 0px;
  text-decoration: rgb(214, 214, 215);
  text-decoration-color: rgb(214, 214, 215);
}

body .page article p > em, em {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body .page article p > i, i {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body .page article p > strong, strong {
  color: rgb(214, 214, 215);
  outline: rgb(214, 214, 215) none 0px;
  text-decoration: rgb(214, 214, 215);
  text-decoration-color: rgb(214, 214, 215);
}

body .text-highlight {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body del {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration: line-through rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body p {
  color: rgb(174, 175, 176);
  outline: rgb(174, 175, 176) none 0px;
  text-decoration: rgb(174, 175, 176);
  text-decoration-color: rgb(174, 175, 176);
}`,
    links: `body a.external, footer a {
  color: rgb(110, 189, 187);
  outline: rgb(110, 189, 187) none 0px;
  text-decoration: underline rgb(110, 189, 187);
  text-decoration-color: rgb(110, 189, 187);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 189, 187);
  outline: rgb(110, 189, 187) none 0px;
  text-decoration: underline rgb(110, 189, 187);
  text-decoration-color: rgb(110, 189, 187);
}

body a.internal.broken {
  color: rgb(110, 189, 187);
  outline: rgb(110, 189, 187) none 0px;
  text-decoration: underline rgba(84, 175, 176, 0.3);
  text-decoration-color: rgba(84, 175, 176, 0.3);
}`,
    lists: `body dd {
  color: rgb(205, 206, 207);
}

body dt {
  color: rgb(205, 206, 207);
}

body ol > li {
  color: rgb(205, 206, 207);
}

body ol.overflow {
  background-color: rgb(25, 35, 48);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body ul > li {
  color: rgb(205, 206, 207);
}

body ul.overflow {
  background-color: rgb(25, 35, 48);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(93, 114, 142);
  text-decoration: rgb(93, 114, 142);
}

body blockquote {
  background-color: rgba(99, 205, 207, 0.03);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body table {
  color: rgb(205, 206, 207);
}

body td {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

body th {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

body tr {
  background-color: rgb(21, 29, 40);
}`,
    code: `body code {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

body pre > code > [data-line] {
  border-left-color: rgb(219, 192, 116);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(219, 192, 116);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(219, 192, 116);
  border-left-color: rgb(219, 192, 116);
  border-right-color: rgb(219, 192, 116);
  border-top-color: rgb(219, 192, 116);
}

body pre > code, pre:has(> code) {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
}

body pre:has(> code) {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
}`,
    images: `body audio {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body figcaption {
  color: rgb(205, 206, 207);
}

body figure {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body img {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body video {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    embeds: `body .file-embed {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
}

body .footnotes {
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

body .transclude {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(84, 175, 176);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body .transclude-inner {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(84, 175, 176);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(174, 175, 176);
  text-decoration: line-through rgb(174, 175, 176);
  text-decoration-color: rgb(174, 175, 176);
}

body input[type=checkbox] {
  border-bottom-color: rgb(93, 114, 142);
  border-left-color: rgb(93, 114, 142);
  border-right-color: rgb(93, 114, 142);
  border-top-color: rgb(93, 114, 142);
}

body li.task-list-item[data-task='!'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='*'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='-'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='/'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='>'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='?'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='I'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='S'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='b'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='c'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='d'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='f'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='i'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='k'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='l'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='p'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='u'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body li.task-list-item[data-task='w'] {
  color: rgb(205, 206, 207);
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(113, 156, 214);
  border-left-color: rgb(113, 156, 214);
  border-right-color: rgb(113, 156, 214);
  border-top-color: rgb(113, 156, 214);
}

body .callout[data-callout="abstract"] {
  --callout-color: 99, 205, 207;
  background-color: rgba(99, 205, 207, 0.1);
  border-bottom-color: rgba(99, 205, 207, 0.25);
  border-left-color: rgba(99, 205, 207, 0.25);
  border-right-color: rgba(99, 205, 207, 0.25);
  border-top-color: rgba(99, 205, 207, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 201, 79, 109;
  background-color: rgba(201, 79, 109, 0.1);
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 201, 79, 109;
  background-color: rgba(201, 79, 109, 0.1);
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 157, 121, 214;
  background-color: rgba(157, 121, 214, 0.1);
  border-bottom-color: rgba(157, 121, 214, 0.25);
  border-left-color: rgba(157, 121, 214, 0.25);
  border-right-color: rgba(157, 121, 214, 0.25);
  border-top-color: rgba(157, 121, 214, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 201, 79, 109;
  background-color: rgba(201, 79, 109, 0.1);
  border-bottom-color: rgba(201, 79, 109, 0.25);
  border-left-color: rgba(201, 79, 109, 0.25);
  border-right-color: rgba(201, 79, 109, 0.25);
  border-top-color: rgba(201, 79, 109, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 113, 156, 214;
  background-color: rgba(113, 156, 214, 0.1);
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 113, 156, 214;
  background-color: rgba(113, 156, 214, 0.1);
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 244, 162, 97;
  background-color: rgba(244, 162, 97, 0.1);
  border-bottom-color: rgba(244, 162, 97, 0.25);
  border-left-color: rgba(244, 162, 97, 0.25);
  border-right-color: rgba(244, 162, 97, 0.25);
  border-top-color: rgba(244, 162, 97, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 129, 178, 154;
  background-color: rgba(129, 178, 154, 0.1);
  border-bottom-color: rgba(129, 178, 154, 0.25);
  border-left-color: rgba(129, 178, 154, 0.25);
  border-right-color: rgba(129, 178, 154, 0.25);
  border-top-color: rgba(129, 178, 154, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 99, 205, 207;
  background-color: rgba(99, 205, 207, 0.1);
  border-bottom-color: rgba(99, 205, 207, 0.25);
  border-left-color: rgba(99, 205, 207, 0.25);
  border-right-color: rgba(99, 205, 207, 0.25);
  border-top-color: rgba(99, 205, 207, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 113, 156, 214;
  background-color: rgba(113, 156, 214, 0.1);
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 244, 162, 97;
  background-color: rgba(244, 162, 97, 0.1);
  border-bottom-color: rgba(244, 162, 97, 0.25);
  border-left-color: rgba(244, 162, 97, 0.25);
  border-right-color: rgba(244, 162, 97, 0.25);
  border-top-color: rgba(244, 162, 97, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(36, 51, 71);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(205, 206, 207);
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 35, 48);
  border-bottom-color: rgb(73, 98, 131);
  border-left-color: rgb(73, 98, 131);
  border-right-color: rgb(73, 98, 131);
  border-top-color: rgb(73, 98, 131);
}

body .search > .search-container > .search-space > * {
  color: rgb(205, 206, 207);
  outline: rgb(205, 206, 207) none 0px;
  text-decoration: rgb(205, 206, 207);
  text-decoration-color: rgb(205, 206, 207);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(205, 206, 207);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(205, 206, 207);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(205, 206, 207, 0.067);
  color: rgb(205, 206, 207);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(73, 98, 131);
  border-left-color: rgb(73, 98, 131);
  border-right-color: rgb(73, 98, 131);
  border-top-color: rgb(73, 98, 131);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(21, 29, 40);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(205, 206, 207, 0.067);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(205, 206, 207, 0.067);
  color: rgb(205, 206, 207);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(84, 175, 176, 0.1);
  border-bottom-color: rgba(84, 175, 176, 0.15);
  border-left-color: rgba(84, 175, 176, 0.15);
  border-right-color: rgba(84, 175, 176, 0.15);
  border-top-color: rgba(84, 175, 176, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(110, 189, 187);
}

body h1 {
  color: rgb(214, 214, 215);
}

body h2 {
  color: rgb(214, 214, 215);
}

body h2.page-title, h2.page-title a {
  color: rgb(214, 214, 215);
}

body h3 {
  color: rgb(214, 214, 215);
}

body h4 {
  color: rgb(214, 214, 215);
}

body h5 {
  color: rgb(214, 214, 215);
}

body h6 {
  color: rgb(214, 214, 215);
}

body hr {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
}`,
    scrollbars: `body .callout {
  --callout-color: 113, 156, 214;
  border-bottom-color: rgba(113, 156, 214, 0.25);
  border-left-color: rgba(113, 156, 214, 0.25);
  border-right-color: rgba(113, 156, 214, 0.25);
  border-top-color: rgba(113, 156, 214, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 35, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 35, 48);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(174, 175, 176);
  text-decoration: rgb(174, 175, 176);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(174, 175, 176);
  text-decoration: rgb(174, 175, 176);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(174, 175, 176);
  text-decoration: rgb(174, 175, 176);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(205, 206, 207, 0.067);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}`,
    footer: `body footer {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(174, 175, 176);
}

body footer ul li a {
  color: rgb(174, 175, 176);
  text-decoration: rgb(174, 175, 176);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(205, 206, 207);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(174, 175, 176);
  text-decoration: rgb(174, 175, 176);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(174, 175, 176);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body li.section-li > .section .meta {
  color: rgb(174, 175, 176);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(174, 175, 176);
  text-decoration: rgb(174, 175, 176);
}

body ul.section-ul {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

body .darkmode svg {
  color: rgb(174, 175, 176);
  stroke: rgb(174, 175, 176);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

body .breadcrumb-element p {
  color: rgb(93, 114, 142);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

body .metadata {
  border-bottom-color: rgb(36, 51, 71);
  border-left-color: rgb(36, 51, 71);
  border-right-color: rgb(36, 51, 71);
  border-top-color: rgb(36, 51, 71);
  color: rgb(174, 175, 176);
}

body .metadata-properties {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

body .navigation-progress {
  background-color: rgb(21, 29, 40);
}

body .page-header h2.page-title {
  color: rgb(205, 206, 207);
}

body abbr {
  color: rgb(205, 206, 207);
  text-decoration: underline dotted rgb(205, 206, 207);
}

body details {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body input[type=text] {
  border-bottom-color: rgb(174, 175, 176);
  border-left-color: rgb(174, 175, 176);
  border-right-color: rgb(174, 175, 176);
  border-top-color: rgb(174, 175, 176);
  color: rgb(174, 175, 176);
}

body kbd {
  background-color: rgb(21, 29, 40);
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
  color: rgb(205, 206, 207);
}

body progress {
  border-bottom-color: rgb(205, 206, 207);
  border-left-color: rgb(205, 206, 207);
  border-right-color: rgb(205, 206, 207);
  border-top-color: rgb(205, 206, 207);
}

body sub {
  color: rgb(205, 206, 207);
}

body summary {
  color: rgb(205, 206, 207);
}

body sup {
  color: rgb(205, 206, 207);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 185;
  --accent-l: 43%;
  --accent-s: 34%;
  --background-modifier-active-hover: rgba(72, 141, 147, 0.1);
  --background-modifier-border: #d3c7bb;
  --background-modifier-border-focus: #a4a2a1;
  --background-modifier-border-hover: #aab0ad;
  --background-modifier-error: #a5222f;
  --background-modifier-error-hover: #a5222f;
  --background-modifier-error-rgb: 165, 34, 47;
  --background-modifier-form-field: #e4dcd4;
  --background-modifier-form-field-hover: #e4dcd4;
  --background-modifier-hover: rgba(61, 43, 90, 0.067);
  --background-modifier-success: #396847;
  --background-modifier-success-rgb: 87, 127, 99;
  --background-primary: #f6f2ee;
  --background-primary-alt: #eae3dc;
  --background-secondary: #eae3dc;
  --background-secondary-alt: #eae3dc;
  --bases-cards-background: #f6f2ee;
  --bases-cards-cover-background: #eae3dc;
  --bases-cards-shadow: 0 0 0 1px #d3c7bb;
  --bases-cards-shadow-hover: 0 0 0 1px #aab0ad;
  --bases-embed-border-color: #d3c7bb;
  --bases-group-heading-property-color: #643f61;
  --bases-table-border-color: #d3c7bb;
  --bases-table-cell-background-active: #f6f2ee;
  --bases-table-cell-background-disabled: #eae3dc;
  --bases-table-cell-background-selected: rgba(72, 141, 147, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #a4a2a1;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(77, 152, 157);
  --bases-table-group-background: #eae3dc;
  --bases-table-header-background: #f6f2ee;
  --bases-table-header-background-hover: rgba(61, 43, 90, 0.067);
  --bases-table-header-color: #643f61;
  --bases-table-summary-background: #f6f2ee;
  --bases-table-summary-background-hover: rgba(61, 43, 90, 0.067);
  --blockquote-background-color: rgba(40, 121, 128, 0.03);
  --blockquote-border-color: rgb(77, 152, 157);
  --blur-background: color-mix(in srgb, #f6f2ee 65%, transparent) linear-gradient(#f6f2ee, color-mix(in srgb, #f6f2ee 65%, transparent));
  --bold-color: #302b5d;
  --callout-bug: 165, 34, 47;
  --callout-default: 40, 72, 169;
  --callout-error: 165, 34, 47;
  --callout-example: 110, 51, 206;
  --callout-fail: 165, 34, 47;
  --callout-important: 40, 121, 128;
  --callout-info: 40, 72, 169;
  --callout-question: 149, 95, 97;
  --callout-success: 87, 127, 99;
  --callout-summary: 40, 121, 128;
  --callout-tip: 40, 121, 128;
  --callout-todo: 40, 72, 169;
  --callout-warning: 172, 84, 2;
  --canvas-background: #f6f2ee;
  --canvas-card-label-color: #99868a;
  --canvas-color-1: 209, 105, 131;
  --canvas-color-2: 246, 176, 121;
  --canvas-color-3: 224, 201, 137;
  --canvas-color-4: 142, 186, 164;
  --canvas-color-5: 122, 213, 214;
  --canvas-color-6: 186, 161, 226;
  --canvas-dot-pattern: #aab0ad;
  --caret-color: #3d2b5a;
  --checkbox-border-color: #99868a;
  --checkbox-border-color-hover: #643f61;
  --checkbox-color: rgb(77, 152, 157);
  --checkbox-color-hover: rgb(81, 166, 169);
  --checkbox-marker-color: #f6f2ee;
  --checklist-done-color: #643f61;
  --code-background: #eae3dc;
  --code-border-color: #d3c7bb;
  --code-bracket-background: rgba(61, 43, 90, 0.067);
  --code-comment: #837a72;
  --code-function: #ac5402;
  --code-important: #955f61;
  --code-inline-background: #eae3dc;
  --code-keyword: #a440b5;
  --code-normal: #3d2b5a;
  --code-operator: #a5222f;
  --code-property: #287980;
  --code-punctuation: #643f61;
  --code-string: #396847;
  --code-tag: #a5222f;
  --code-value: #6e33ce;
  --collapse-icon-color: #99868a;
  --collapse-icon-color-collapsed: rgb(72, 141, 147);
  --color-accent: rgb(72, 141, 147);
  --color-accent-1: rgb(77, 152, 157);
  --color-accent-2: rgb(81, 166, 169);
  --color-accent-hsl: 185, 34%, 43%;
  --color-base-00: #e4dcd4;
  --color-base-05: #eae3dc;
  --color-base-10: #f6f2ee;
  --color-base-100: #3d2b5a;
  --color-base-110: #302b5d;
  --color-base-20: #dbd1dd;
  --color-base-25: #d3c7bb;
  --color-base-30: #aab0ad;
  --color-base-35: #a4a2a1;
  --color-base-40: #9f9496;
  --color-base-50: #99868a;
  --color-base-60: #824d5b;
  --color-base-70: #643f61;
  --color-blue: #2848a9;
  --color-blue-bright: #4863b6;
  --color-blue-bright-rgb: 134, 171, 220;
  --color-blue-dim: #223d90;
  --color-blue-rgb: 40, 72, 169;
  --color-cyan: #287980;
  --color-cyan-bright: #488d93;
  --color-cyan-bright-rgb: 122, 213, 214;
  --color-cyan-dim: #22676d;
  --color-cyan-rgb: 40, 121, 128;
  --color-green: #396847;
  --color-green-bright: #577f63;
  --color-green-bright-rgb: 142, 186, 164;
  --color-green-dim: #30583c;
  --color-green-rgb: 87, 127, 99;
  --color-orange: #955f61;
  --color-orange-bright: #a57779;
  --color-orange-bright-rgb: 246, 176, 121;
  --color-orange-dim: #7f5152;
  --color-orange-rgb: 149, 95, 97;
  --color-pink: #a440b5;
  --color-pink-bright: #b25dc0;
  --color-pink-bright-rgb: 220, 142, 217;
  --color-pink-dim: #8b369a;
  --color-pink-rgb: 164, 64, 181;
  --color-purple: #6e33ce;
  --color-purple-bright: #8452d5;
  --color-purple-bright-rgb: 186, 161, 226;
  --color-purple-dim: #5e2baf;
  --color-purple-rgb: 110, 51, 206;
  --color-red: #a5222f;
  --color-red-bright: #b3434e;
  --color-red-bright-rgb: 209, 105, 131;
  --color-red-dim: #8c1d28;
  --color-red-rgb: 165, 34, 47;
  --color-yellow: #ac5402;
  --color-yellow-bright: #b86e28;
  --color-yellow-bright-rgb: 224, 201, 137;
  --color-yellow-dim: #924702;
  --color-yellow-rgb: 172, 84, 2;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #d3c7bb;
  --divider-color-hover: rgb(77, 152, 157);
  --dropdown-background: #e4dcd4;
  --dropdown-background-hover: #f6f2ee;
  --embed-block-shadow-hover: 0 0 0 1px #d3c7bb, inset 0 0 0 1px #d3c7bb;
  --embed-border-start: 2px solid rgb(77, 152, 157);
  --file-header-background: #f6f2ee;
  --file-header-background-focused: #f6f2ee;
  --flair-background: #e4dcd4;
  --flair-color: #3d2b5a;
  --footnote-divider-color: #d3c7bb;
  --footnote-id-color: #643f61;
  --footnote-id-color-no-occurrences: #99868a;
  --footnote-input-background-active: rgba(61, 43, 90, 0.067);
  --graph-line: #dbd1dd;
  --graph-node: #643f61;
  --graph-node-attachment: #e0af0f;
  --graph-node-focused: rgb(72, 141, 147);
  --graph-node-tag: #19ae5b;
  --graph-node-unresolved: #99868a;
  --graph-text: #3d2b5a;
  --gray: var(--text-muted);
  --h1-color: #302b5d;
  --h1-size: 2.75em;
  --h1-weight: 300;
  --h2-color: #302b5d;
  --h2-size: 2.0em;
  --h2-weight: 700;
  --h3-color: #302b5d;
  --h3-size: 1.75em;
  --h3-weight: 700;
  --h4-color: #302b5d;
  --h4-size: 1.4em;
  --h4-weight: 700;
  --h5-color: #302b5d;
  --h5-size: 1.2em;
  --h5-style: italic;
  --h5-weight: 700;
  --h6-color: #302b5d;
  --h6-size: 1.0em;
  --h6-style: italic;
  --h6-weight: 700;
  --heading-color: #302b5d;
  --heading-formatting: #99868a;
  --highlight: var(--background-modifier-hover);
  --hr-color: #d3c7bb;
  --hr-thickness: 3px;
  --icon-color: #643f61;
  --icon-color-active: rgb(72, 141, 147);
  --icon-color-focused: #3d2b5a;
  --icon-color-hover: #643f61;
  --indentation-guide-color: rgba(61, 43, 90, 0.12);
  --indentation-guide-color-active: rgba(61, 43, 90, 0.3);
  --inline-title-color: #302b5d;
  --inline-title-size: 2.75em;
  --inline-title-weight: 300;
  --input-date-separator: #99868a;
  --input-placeholder-color: #99868a;
  --interactive-accent: rgb(77, 152, 157);
  --interactive-accent-hover: rgb(81, 166, 169);
  --interactive-accent-hsl: 185, 34%, 43%;
  --interactive-hover: #f6f2ee;
  --interactive-normal: #e4dcd4;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(72, 141, 147);
  --link-color-hover: rgb(81, 166, 169);
  --link-external-color: rgb(72, 141, 147);
  --link-external-color-hover: rgb(81, 166, 169);
  --link-unresolved-color: rgb(72, 141, 147);
  --link-unresolved-decoration-color: rgba(72, 141, 147, 0.3);
  --list-marker-color: #99868a;
  --list-marker-color-collapsed: rgb(72, 141, 147);
  --list-marker-color-hover: #643f61;
  --menu-background: #eae3dc;
  --menu-border-color: #aab0ad;
  --metadata-border-color: #d3c7bb;
  --metadata-divider-color: #d3c7bb;
  --metadata-input-background-active: rgba(61, 43, 90, 0.067);
  --metadata-input-text-color: #3d2b5a;
  --metadata-label-background-active: rgba(61, 43, 90, 0.067);
  --metadata-label-text-color: #643f61;
  --metadata-label-text-color-hover: #643f61;
  --metadata-property-background-active: rgba(61, 43, 90, 0.067);
  --metadata-property-box-shadow-focus: 0 0 0 2px #a4a2a1;
  --metadata-property-box-shadow-hover: 0 0 0 1px #aab0ad;
  --modal-background: #f6f2ee;
  --modal-border-color: #aab0ad;
  --mono-rgb-0: 228, 220, 212;
  --mono-rgb-100: 61, 43, 90;
  --nav-collapse-icon-color: #99868a;
  --nav-collapse-icon-color-collapsed: #99868a;
  --nav-heading-color: #3d2b5a;
  --nav-heading-color-collapsed: #99868a;
  --nav-heading-color-collapsed-hover: #643f61;
  --nav-heading-color-hover: #3d2b5a;
  --nav-indentation-guide-color: rgba(61, 43, 90, 0.12);
  --nav-item-background-active: rgba(61, 43, 90, 0.067);
  --nav-item-background-hover: rgba(61, 43, 90, 0.067);
  --nav-item-background-selected: rgba(72, 141, 147, 0.15);
  --nav-item-color: #643f61;
  --nav-item-color-active: #3d2b5a;
  --nav-item-color-highlighted: rgb(72, 141, 147);
  --nav-item-color-hover: #3d2b5a;
  --nav-item-color-selected: #3d2b5a;
  --nav-tag-color: #99868a;
  --nav-tag-color-active: #643f61;
  --nav-tag-color-hover: #643f61;
  --pdf-background: #f6f2ee;
  --pdf-page-background: #f6f2ee;
  --pdf-sidebar-background: #f6f2ee;
  --pill-border-color: #d3c7bb;
  --pill-border-color-hover: #aab0ad;
  --pill-color: #643f61;
  --pill-color-hover: #3d2b5a;
  --pill-color-remove: #99868a;
  --pill-color-remove-hover: rgb(72, 141, 147);
  --prompt-background: #f6f2ee;
  --prompt-border-color: #9f9496;
  --raised-background: color-mix(in srgb, #f6f2ee 65%, transparent) linear-gradient(#f6f2ee, color-mix(in srgb, #f6f2ee 65%, transparent));
  --ribbon-background: #e4dcd4;
  --ribbon-background-collapsed: #eae3dc;
  --scrollbar-active-thumb-bg: rgba(61, 43, 90, 0.2);
  --scrollbar-bg: rgba(61, 43, 90, 0.05);
  --scrollbar-thumb-bg: rgba(61, 43, 90, 0.1);
  --search-clear-button-color: #643f61;
  --search-icon-color: #643f61;
  --search-result-background: #f6f2ee;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #3d2b5a;
  --setting-items-background: #eae3dc;
  --setting-items-border-color: #d3c7bb;
  --slider-thumb-border-color: #aab0ad;
  --slider-track-background: #d3c7bb;
  --status-bar-background: #eae3dc;
  --status-bar-border-color: #d3c7bb;
  --status-bar-text-color: #643f61;
  --suggestion-background: #f6f2ee;
  --swatch-shadow: inset 0 0 0 1px rgba(61, 43, 90, 0.15);
  --sync-avatar-color-1: #a5222f;
  --sync-avatar-color-2: #955f61;
  --sync-avatar-color-3: #ac5402;
  --sync-avatar-color-4: #396847;
  --sync-avatar-color-5: #287980;
  --sync-avatar-color-6: #2848a9;
  --sync-avatar-color-7: #6e33ce;
  --sync-avatar-color-8: #a440b5;
  --tab-background-active: #f6f2ee;
  --tab-container-background: #eae3dc;
  --tab-divider-color: #aab0ad;
  --tab-outline-color: #d3c7bb;
  --tab-switcher-background: #eae3dc;
  --tab-switcher-menubar-background: linear-gradient(to top, #eae3dc, transparent);
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(61, 43, 90, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(72, 141, 147);
  --tab-text-color: #99868a;
  --tab-text-color-active: #643f61;
  --tab-text-color-focused: #643f61;
  --tab-text-color-focused-active: #643f61;
  --tab-text-color-focused-active-current: #3d2b5a;
  --tab-text-color-focused-highlighted: rgb(72, 141, 147);
  --table-add-button-border-color: #d3c7bb;
  --table-border-color: #d3c7bb;
  --table-drag-handle-background-active: rgb(77, 152, 157);
  --table-drag-handle-color: #99868a;
  --table-header-background: #eae3dc;
  --table-header-background-hover: #eae3dc;
  --table-header-border-color: #d3c7bb;
  --table-header-color: #3d2b5a;
  --table-selection: rgba(72, 141, 147, 0.1);
  --table-selection-border-color: rgb(77, 152, 157);
  --tag-background: rgba(72, 141, 147, 0.1);
  --tag-background-hover: rgba(72, 141, 147, 0.2);
  --tag-border-color: rgba(72, 141, 147, 0.15);
  --tag-border-color-hover: rgba(72, 141, 147, 0.15);
  --tag-color: rgb(72, 141, 147);
  --tag-color-hover: rgb(72, 141, 147);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(72, 141, 147);
  --text-accent-hover: rgb(81, 166, 169);
  --text-error: #a5222f;
  --text-faint: #99868a;
  --text-muted: #643f61;
  --text-normal: #3d2b5a;
  --text-selection: rgba(72, 141, 147, 0.2);
  --text-success: #396847;
  --text-warning: #ac5402;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #e4dcd4;
  --titlebar-background-focused: #e4dcd4;
  --titlebar-border-color: #d3c7bb;
  --titlebar-text-color: #643f61;
  --titlebar-text-color-focused: #3d2b5a;
  --vault-profile-color: #3d2b5a;
  --vault-profile-color-hover: #3d2b5a;
  --workspace-background-translucent: rgba(228, 220, 212, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(234, 227, 220);
  color: rgb(61, 43, 90);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(246, 242, 238);
  color: rgb(61, 43, 90);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(234, 227, 220);
  color: rgb(61, 43, 90);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(211, 199, 187);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(234, 227, 220);
  border-left-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

body div#quartz-root {
  background-color: rgb(246, 242, 238);
  color: rgb(61, 43, 90);
}`,
    typography: `body .page article p > b, b {
  color: rgb(48, 43, 93);
  outline: rgb(48, 43, 93) none 0px;
  text-decoration: rgb(48, 43, 93);
  text-decoration-color: rgb(48, 43, 93);
}

body .page article p > em, em {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body .page article p > i, i {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body .page article p > strong, strong {
  color: rgb(48, 43, 93);
  outline: rgb(48, 43, 93) none 0px;
  text-decoration: rgb(48, 43, 93);
  text-decoration-color: rgb(48, 43, 93);
}

body .text-highlight {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body del {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration: line-through rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body p {
  color: rgb(100, 63, 97);
  outline: rgb(100, 63, 97) none 0px;
  text-decoration: rgb(100, 63, 97);
  text-decoration-color: rgb(100, 63, 97);
}`,
    links: `body a.external, footer a {
  color: rgb(72, 141, 147);
  outline: rgb(72, 141, 147) none 0px;
  text-decoration: underline rgb(72, 141, 147);
  text-decoration-color: rgb(72, 141, 147);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(72, 141, 147);
  outline: rgb(72, 141, 147) none 0px;
  text-decoration: underline rgb(72, 141, 147);
  text-decoration-color: rgb(72, 141, 147);
}

body a.internal.broken {
  color: rgb(72, 141, 147);
  outline: rgb(72, 141, 147) none 0px;
  text-decoration: underline rgba(72, 141, 147, 0.3);
  text-decoration-color: rgba(72, 141, 147, 0.3);
}`,
    lists: `body dd {
  color: rgb(61, 43, 90);
}

body dt {
  color: rgb(61, 43, 90);
}

body ol > li {
  color: rgb(61, 43, 90);
}

body ol.overflow {
  background-color: rgb(246, 242, 238);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body ul > li {
  color: rgb(61, 43, 90);
}

body ul.overflow {
  background-color: rgb(246, 242, 238);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 134, 138);
  text-decoration: rgb(153, 134, 138);
}

body blockquote {
  background-color: rgba(40, 121, 128, 0.03);
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body table {
  color: rgb(61, 43, 90);
}

body td {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

body th {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

body tr {
  background-color: rgb(234, 227, 220);
}`,
    code: `body code {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

body pre > code > [data-line] {
  border-left-color: rgb(172, 84, 2);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(172, 84, 2);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(172, 84, 2);
  border-left-color: rgb(172, 84, 2);
  border-right-color: rgb(172, 84, 2);
  border-top-color: rgb(172, 84, 2);
}

body pre > code, pre:has(> code) {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
}

body pre:has(> code) {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
}`,
    images: `body audio {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body figcaption {
  color: rgb(61, 43, 90);
}

body figure {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body img {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body video {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    embeds: `body .file-embed {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
}

body .footnotes {
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

body .transclude {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(77, 153, 158);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body .transclude-inner {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(77, 153, 158);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(100, 63, 97);
  text-decoration: line-through rgb(100, 63, 97);
  text-decoration-color: rgb(100, 63, 97);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 134, 138);
  border-left-color: rgb(153, 134, 138);
  border-right-color: rgb(153, 134, 138);
  border-top-color: rgb(153, 134, 138);
}

body li.task-list-item[data-task='!'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='*'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='-'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='/'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='>'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='?'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='I'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='S'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='b'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='c'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='d'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='f'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='i'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='k'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='l'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='p'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='u'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body li.task-list-item[data-task='w'] {
  color: rgb(61, 43, 90);
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(40, 72, 169);
  border-left-color: rgb(40, 72, 169);
  border-right-color: rgb(40, 72, 169);
  border-top-color: rgb(40, 72, 169);
}

body .callout[data-callout="abstract"] {
  --callout-color: 40, 121, 128;
  background-color: rgba(40, 121, 128, 0.1);
  border-bottom-color: rgba(40, 121, 128, 0.25);
  border-left-color: rgba(40, 121, 128, 0.25);
  border-right-color: rgba(40, 121, 128, 0.25);
  border-top-color: rgba(40, 121, 128, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 165, 34, 47;
  background-color: rgba(165, 34, 47, 0.1);
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 165, 34, 47;
  background-color: rgba(165, 34, 47, 0.1);
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 110, 51, 206;
  background-color: rgba(110, 51, 206, 0.1);
  border-bottom-color: rgba(110, 51, 206, 0.25);
  border-left-color: rgba(110, 51, 206, 0.25);
  border-right-color: rgba(110, 51, 206, 0.25);
  border-top-color: rgba(110, 51, 206, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 165, 34, 47;
  background-color: rgba(165, 34, 47, 0.1);
  border-bottom-color: rgba(165, 34, 47, 0.25);
  border-left-color: rgba(165, 34, 47, 0.25);
  border-right-color: rgba(165, 34, 47, 0.25);
  border-top-color: rgba(165, 34, 47, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 40, 72, 169;
  background-color: rgba(40, 72, 169, 0.1);
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 40, 72, 169;
  background-color: rgba(40, 72, 169, 0.1);
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 149, 95, 97;
  background-color: rgba(149, 95, 97, 0.1);
  border-bottom-color: rgba(149, 95, 97, 0.25);
  border-left-color: rgba(149, 95, 97, 0.25);
  border-right-color: rgba(149, 95, 97, 0.25);
  border-top-color: rgba(149, 95, 97, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 87, 127, 99;
  background-color: rgba(87, 127, 99, 0.1);
  border-bottom-color: rgba(87, 127, 99, 0.25);
  border-left-color: rgba(87, 127, 99, 0.25);
  border-right-color: rgba(87, 127, 99, 0.25);
  border-top-color: rgba(87, 127, 99, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 40, 121, 128;
  background-color: rgba(40, 121, 128, 0.1);
  border-bottom-color: rgba(40, 121, 128, 0.25);
  border-left-color: rgba(40, 121, 128, 0.25);
  border-right-color: rgba(40, 121, 128, 0.25);
  border-top-color: rgba(40, 121, 128, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 40, 72, 169;
  background-color: rgba(40, 72, 169, 0.1);
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 172, 84, 2;
  background-color: rgba(172, 84, 2, 0.1);
  border-bottom-color: rgba(172, 84, 2, 0.25);
  border-left-color: rgba(172, 84, 2, 0.25);
  border-right-color: rgba(172, 84, 2, 0.25);
  border-top-color: rgba(172, 84, 2, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(228, 220, 212);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(61, 43, 90);
}

body .search > .search-container > .search-space {
  background-color: rgb(246, 242, 238);
  border-bottom-color: rgb(159, 148, 150);
  border-left-color: rgb(159, 148, 150);
  border-right-color: rgb(159, 148, 150);
  border-top-color: rgb(159, 148, 150);
}

body .search > .search-container > .search-space > * {
  color: rgb(61, 43, 90);
  outline: rgb(61, 43, 90) none 0px;
  text-decoration: rgb(61, 43, 90);
  text-decoration-color: rgb(61, 43, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(61, 43, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(61, 43, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(61, 43, 90, 0.067);
  color: rgb(61, 43, 90);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(159, 148, 150);
  border-left-color: rgb(159, 148, 150);
  border-right-color: rgb(159, 148, 150);
  border-top-color: rgb(159, 148, 150);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(234, 227, 220);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(61, 43, 90, 0.067);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(61, 43, 90, 0.067);
  color: rgb(61, 43, 90);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(72, 141, 147, 0.1);
  border-bottom-color: rgba(72, 141, 147, 0.15);
  border-left-color: rgba(72, 141, 147, 0.15);
  border-right-color: rgba(72, 141, 147, 0.15);
  border-top-color: rgba(72, 141, 147, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(72, 141, 147);
}

body h1 {
  color: rgb(48, 43, 93);
}

body h2 {
  color: rgb(48, 43, 93);
}

body h2.page-title, h2.page-title a {
  color: rgb(48, 43, 93);
}

body h3 {
  color: rgb(48, 43, 93);
}

body h4 {
  color: rgb(48, 43, 93);
}

body h5 {
  color: rgb(48, 43, 93);
}

body h6 {
  color: rgb(48, 43, 93);
}

body hr {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
}`,
    scrollbars: `body .callout {
  --callout-color: 40, 72, 169;
  border-bottom-color: rgba(40, 72, 169, 0.25);
  border-left-color: rgba(40, 72, 169, 0.25);
  border-right-color: rgba(40, 72, 169, 0.25);
  border-top-color: rgba(40, 72, 169, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}

body ::-webkit-scrollbar-corner {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}

body ::-webkit-scrollbar-track {
  background: rgb(246, 242, 238) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 242, 238);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(100, 63, 97);
  text-decoration: rgb(100, 63, 97);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(100, 63, 97);
  text-decoration: rgb(100, 63, 97);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(100, 63, 97);
  text-decoration: rgb(100, 63, 97);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(61, 43, 90, 0.067);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}`,
    footer: `body footer {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(100, 63, 97);
}

body footer ul li a {
  color: rgb(100, 63, 97);
  text-decoration: rgb(100, 63, 97);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(61, 43, 90);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(100, 63, 97);
  text-decoration: rgb(100, 63, 97);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(100, 63, 97);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body li.section-li > .section .meta {
  color: rgb(100, 63, 97);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(100, 63, 97);
  text-decoration: rgb(100, 63, 97);
}

body ul.section-ul {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

body .darkmode svg {
  color: rgb(100, 63, 97);
  stroke: rgb(100, 63, 97);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

body .breadcrumb-element p {
  color: rgb(153, 134, 138);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

body .metadata {
  border-bottom-color: rgb(211, 199, 187);
  border-left-color: rgb(211, 199, 187);
  border-right-color: rgb(211, 199, 187);
  border-top-color: rgb(211, 199, 187);
  color: rgb(100, 63, 97);
}

body .metadata-properties {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

body .navigation-progress {
  background-color: rgb(234, 227, 220);
}

body .page-header h2.page-title {
  color: rgb(61, 43, 90);
}

body abbr {
  color: rgb(61, 43, 90);
  text-decoration: underline dotted rgb(61, 43, 90);
}

body details {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body input[type=text] {
  border-bottom-color: rgb(100, 63, 97);
  border-left-color: rgb(100, 63, 97);
  border-right-color: rgb(100, 63, 97);
  border-top-color: rgb(100, 63, 97);
  color: rgb(100, 63, 97);
}

body kbd {
  background-color: rgb(234, 227, 220);
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
  color: rgb(61, 43, 90);
}

body progress {
  border-bottom-color: rgb(61, 43, 90);
  border-left-color: rgb(61, 43, 90);
  border-right-color: rgb(61, 43, 90);
  border-top-color: rgb(61, 43, 90);
}

body sub {
  color: rgb(61, 43, 90);
}

body summary {
  color: rgb(61, 43, 90);
}

body sup {
  color: rgb(61, 43, 90);
}`,
  },
};
