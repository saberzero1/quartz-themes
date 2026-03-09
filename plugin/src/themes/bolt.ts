import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "bolt",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["formular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 181;
  --accent-l: 41%;
  --accent-s: 80%;
  --background: #0d1a1a;
  --background-modifier-active-hover: rgba(21, 185, 188, 0.1);
  --background-modifier-border: #2f3f3f;
  --background-modifier-border-focus: #2f8a8b;
  --background-modifier-border-hover: #2f3f3f;
  --background-modifier-form-field: #2f3f3f;
  --background-modifier-form-field-hover: #2f3f3f;
  --background-modifier-hover: rgba(106, 148, 149, 0.15);
  --background-primary: #0d1a1a;
  --background-primary-alt: #2f3f3f;
  --background-secondary: #192e2e;
  --background-secondary-alt: #2f3f3f;
  --bases-cards-background: #0d1a1a;
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: #2f3f3f;
  --bases-cards-radius: 1.1em;
  --bases-cards-shadow: 0 0 0 1px #2f3f3f;
  --bases-cards-shadow-hover: 0 0 0 1px #2f3f3f;
  --bases-embed-border-color: #2f3f3f;
  --bases-embed-border-radius: 0.75em;
  --bases-group-heading-property-color: #bec8c8;
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: #2f3f3f;
  --bases-table-cell-background-active: #0d1a1a;
  --bases-table-cell-background-disabled: #2f3f3f;
  --bases-table-cell-background-selected: rgba(21, 185, 188, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #2f8a8b;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(21, 185, 188);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-radius: 0.75em;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: #2f3f3f;
  --bases-table-header-background: #0d1a1a;
  --bases-table-header-background-hover: rgba(106, 148, 149, 0.15);
  --bases-table-header-color: #bec8c8;
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: #0d1a1a;
  --bases-table-summary-background-hover: rgba(106, 148, 149, 0.15);
  --blockquote-background-color: #156f73;
  --blockquote-border-color: rgb(21, 185, 188);
  --blockquote-border-thickness: 0px;
  --blockquote-color: #cce8e8;
  --blur-background: color-mix(in srgb, #2f3f3f 65%, transparent) linear-gradient(#2f3f3f, color-mix(in srgb, #2f3f3f 65%, transparent));
  --border-width: 2px;
  --button-radius: 20px;
  --callout-radius: 0.75em;
  --canvas-background: #0d1a1a;
  --canvas-card-label-color: #899392;
  --canvas-controls-radius: 0.75em;
  --canvas-dot-pattern: #2f3f3f;
  --caret-color: #e0e3e2;
  --checkbox-border-color: #899392;
  --checkbox-border-color-hover: #bec8c8;
  --checkbox-color: rgb(21, 185, 188);
  --checkbox-color-hover: rgb(22, 218, 212);
  --checkbox-marker-color: #0d1a1a;
  --checkbox-radius: 0.2rem;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 0.75em;
  --code-background: #2f3f3f;
  --code-border-color: #2f3f3f;
  --code-bracket-background: rgba(106, 148, 149, 0.15);
  --code-comment: #899392;
  --code-normal: #e0e3e2;
  --code-punctuation: #bec8c8;
  --code-radius: 0.75em;
  --collapse-icon-color: #899392;
  --collapse-icon-color-collapsed: rgb(22, 218, 212);
  --color-accent: rgb(21, 185, 188);
  --color-accent-1: rgb(22, 218, 212);
  --color-accent-2: #b0cccc;
  --color-accent-hsl: 181,
			80%,
			41%;
  --color-base-00: #0d1a1a;
  --color-base-05: #192e2e;
  --color-base-10: #2f3f3f;
  --color-base-100: #e0e3e2;
  --color-base-20: #192e2e;
  --color-base-25: #2f3f3f;
  --color-base-30: #2f3f3f;
  --color-base-35: #2f3f3f;
  --color-base-40: #2f3f3f;
  --color-base-50: #899392;
  --color-base-60: #b0cccc;
  --color-base-70: #bec8c8;
  --custom-drawer-header: "Bolt";
  --divider-color: transparent;
  --divider-color-hover: rgb(21, 185, 188);
  --dropdown-background: #2f3f3f;
  --dropdown-background-hover: #2f3f3f;
  --embed-block-shadow-hover: 0 0 0 1px #2f3f3f, inset 0 0 0 1px #2f3f3f;
  --embed-border-start: 2px solid rgb(21, 185, 188);
  --error: #ffb4ab;
  --error-container: #93000a;
  --file-header-background: #0d1a1a;
  --file-header-background-focused: #0d1a1a;
  --file-header-border: 2px solid transparent;
  --file-header-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-justify: left;
  --file-line-width: 750px;
  --flair-background: #2f3f3f;
  --flair-color: #e0e3e2;
  --font-interface: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R';
  --footnote-divider-color: #2f3f3f;
  --footnote-divider-width: 2px;
  --footnote-id-color: #bec8c8;
  --footnote-id-color-no-occurrences: #899392;
  --footnote-input-background-active: rgba(106, 148, 149, 0.15);
  --footnote-radius: 0.75em;
  --graph-line: #2f3f3f;
  --graph-node: rgb(26, 206, 209);
  --graph-node-focused: #2f8a8b;
  --graph-node-tag: #53dfdd;
  --graph-node-unresolved: #b4c8e9;
  --graph-text: #e0e3e2;
  --h1-size: 2.3em;
  --h1-weight: 300;
  --h2-size: 2em;
  --h2-weight: 300;
  --h3-size: 1.85em;
  --h3-weight: 400;
  --h4-size: 1.7em;
  --h4-weight: 400;
  --h5-size: 1.58em;
  --h5-weight: 400;
  --h6-size: 1.35em;
  --h6-weight: 500;
  --heading-formatting: #899392;
  --hr-color: #2f3f3f;
  --icon-color: #bec8c8;
  --icon-color-active: rgb(22, 218, 212);
  --icon-color-focused: #e0e3e2;
  --icon-color-hover: #bec8c8;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-line-height: 1.3em;
  --inline-title-size: 2.5em;
  --inline-title-weight: 500;
  --input-border-width: 0;
  --input-date-separator: #899392;
  --input-placeholder-color: #899392;
  --input-radius: 20px;
  --input-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --interactive-accent: rgb(21, 185, 188);
  --interactive-accent-hover: rgb(22, 218, 212);
  --interactive-accent-hsl: 181,
			80%,
			41%;
  --interactive-hover: #2f3f3f;
  --interactive-normal: #2f3f3f;
  --link-color: rgb(21, 185, 188);
  --link-color-hover: rgb(21, 185, 188);
  --link-decoration-thickness: 1.5px;
  --link-external-color: #b4c8e9;
  --link-external-color-hover: #b0cccc;
  --link-external-decoration: none;
  --link-unresolved-color: rgb(22, 218, 212);
  --link-unresolved-decoration-color: rgba(21, 185, 188, 0.3);
  --list-marker-color: #899392;
  --list-marker-color-collapsed: rgb(22, 218, 212);
  --list-marker-color-hover: #bec8c8;
  --lower-accent: #156f73;
  --menu-background: #192e2e;
  --menu-border-color: #2f3f3f;
  --menu-border-width: 2px;
  --menu-radius: 1.1em;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --metadata-background: #192e2e;
  --metadata-border-color: #2f3f3f;
  --metadata-border-radius: 0.75em;
  --metadata-divider-color: #2f3f3f;
  --metadata-input-background-active: rgba(106, 148, 149, 0.15);
  --metadata-input-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #e0e3e2;
  --metadata-label-background-active: rgba(106, 148, 149, 0.15);
  --metadata-label-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #bec8c8;
  --metadata-label-text-color-hover: #bec8c8;
  --metadata-padding: 1em;
  --metadata-property-background-active: rgba(106, 148, 149, 0.15);
  --metadata-property-box-shadow-focus: 0 0 0 2px #2f8a8b;
  --metadata-property-box-shadow-hover: 0 0 0 2px #2f3f3f;
  --modal-background: #0d1a1a;
  --modal-border-color: #2f3f3f;
  --modal-border-width: 2px;
  --modal-radius: 20px;
  --nav-collapse-icon-color: #899392;
  --nav-collapse-icon-color-collapsed: #899392;
  --nav-heading-color: #e0e3e2;
  --nav-heading-color-collapsed: #899392;
  --nav-heading-color-collapsed-hover: #bec8c8;
  --nav-heading-color-hover: #e0e3e2;
  --nav-indentation-guide-color: rgb(21, 185, 188);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgba(106, 148, 149, 0.15);
  --nav-item-background-hover: rgba(106, 148, 149, 0.15);
  --nav-item-background-selected: rgba(21, 185, 188, 0.15);
  --nav-item-color: #bec8c8;
  --nav-item-color-active: #e0e3e2;
  --nav-item-color-highlighted: rgb(22, 218, 212);
  --nav-item-color-hover: #e0e3e2;
  --nav-item-color-selected: #e0e3e2;
  --nav-item-radius: 0.75em;
  --nav-tag-color: #899392;
  --nav-tag-color-active: #bec8c8;
  --nav-tag-color-hover: #bec8c8;
  --nav-tag-radius: 0.75em;
  --on-background: #e0e3e2;
  --on-error: #690005;
  --on-error-container: #ffdad6;
  --on-lower-accent: #cce8e8;
  --on-primary: #e2f0f0;
  --on-primary-container: #b4dcdd;
  --on-secondary: #034747;
  --on-secondary-container: #cce8e8;
  --on-surface: #e0e3e2;
  --on-surface-variant: #bec8c8;
  --on-tertiary: #1d314c;
  --on-tertiary-container: #d4e3ff;
  --on-upper-accent: #b0cccc;
  --outline: #899392;
  --pdf-background: #0d1a1a;
  --pdf-page-background: #0d1a1a;
  --pdf-shadow: 0 0 0 1px #2f3f3f;
  --pdf-sidebar-background: #0d1a1a;
  --pdf-thumbnail-shadow: 0 0 0 1px #2f3f3f;
  --pill-border-color: #2f3f3f;
  --pill-border-color-hover: #2f3f3f;
  --pill-border-width: 2px;
  --pill-color: #bec8c8;
  --pill-color-hover: #e0e3e2;
  --pill-color-remove: #899392;
  --pill-color-remove-hover: rgb(22, 218, 212);
  --primary: rgb(21, 185, 188);
  --primary-container: #2f8a8b;
  --primary-lighter: rgb(26, 206, 209);
  --prompt-background: #0d1a1a;
  --prompt-border-color: #2f3f3f;
  --prompt-border-width: 2px;
  --radius-l: 20px;
  --radius-m: 1.1em;
  --radius-s: 0.75em;
  --raised-background: color-mix(in srgb, #2f3f3f 65%, transparent) linear-gradient(#2f3f3f, color-mix(in srgb, #2f3f3f 65%, transparent));
  --ribbon-background: #192e2e;
  --ribbon-background-collapsed: #0d1a1a;
  --scrollbar-active-thumb-bg: #156f73;
  --scrollbar-radius: 20px;
  --scrollbar-thumb-bg: #2f3f3f;
  --search-clear-button-color: #bec8c8;
  --search-icon-color: #bec8c8;
  --search-result-background: #0d1a1a;
  --secondary: #b0cccc;
  --secondary-container: #156f73;
  --setting-group-heading-color: #e0e3e2;
  --setting-items-background: #2f3f3f;
  --setting-items-border-color: #2f3f3f;
  --setting-items-radius: 20px;
  --shadow-bottom: 0 10px 10px -10px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23);
  --shadow-m: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --slider-thumb-border-color: #2f3f3f;
  --slider-thumb-border-width: 2px;
  --slider-track-background: #2f3f3f;
  --status-bar-background: #192e2e;
  --status-bar-border-color: transparent;
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-radius: 1.1em 0 0 0;
  --status-bar-text-color: #bec8c8;
  --suggestion-background: #0d1a1a;
  --surface: #192e2e;
  --surface-variant: #2f3f3f;
  --tab-background-active: transparent;
  --tab-container-background: #192e2e;
  --tab-curve: 0;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-outline-width: 0;
  --tab-radius: 0.75em;
  --tab-radius-active: 0;
  --tab-switcher-background: #192e2e;
  --tab-switcher-menubar-background: linear-gradient(to top, #192e2e, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(21, 185, 188);
  --tab-text-color: #899392;
  --tab-text-color-active: #bec8c8;
  --tab-text-color-focused: #bec8c8;
  --tab-text-color-focused-active: #bec8c8;
  --tab-text-color-focused-active-current: #e0e3e2;
  --tab-text-color-focused-highlighted: rgb(22, 218, 212);
  --tab-width: 250px;
  --table-add-button-border-color: #2f3f3f;
  --table-border-color: #2f3f3f;
  --table-drag-handle-background-active: rgb(21, 185, 188);
  --table-drag-handle-color: #899392;
  --table-header-align: center;
  --table-header-background: #b0cccc;
  --table-header-background-hover: #b0cccc;
  --table-header-border-color: #2f3f3f;
  --table-header-color: #e0e3e2;
  --table-header-size: 0.875em;
  --table-selection: rgba(21, 185, 188, 0.1);
  --table-selection-border-color: rgb(21, 185, 188);
  --tag-background: #354863;
  --tag-background-hover: #354863;
  --tag-border-color: rgba(21, 185, 188, 0.15);
  --tag-border-color-hover: rgba(21, 185, 188, 0.15);
  --tag-color: #d4e3ff;
  --tag-color-hover: #d4e3ff;
  --tag-radius: 5px;
  --tertiary: #b4c8e9;
  --tertiary-container: #354863;
  --text-accent: rgb(22, 218, 212);
  --text-accent-hover: #b0cccc;
  --text-faint: #899392;
  --text-muted: #bec8c8;
  --text-normal: #e0e3e2;
  --text-selection: rgba(21, 185, 188, 0.33);
  --titlebar-background: #192e2e;
  --titlebar-background-focused: #2f3f3f;
  --titlebar-border-color: #2f3f3f;
  --titlebar-text-color: #bec8c8;
  --titlebar-text-color-focused: #e0e3e2;
  --upper-accent: #034747;
  --vault-profile-color: #e0e3e2;
  --vault-profile-color-hover: #e0e3e2;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 46, 46);
  color: rgb(224, 227, 226);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 26, 26);
  color: rgb(224, 227, 226);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 46, 46);
  color: rgb(224, 227, 226);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 46, 46);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(224, 227, 226);
}

body div#quartz-root {
  background-color: rgb(13, 26, 26);
  color: rgb(224, 227, 226);
}`,
    typography: `body .page article p > b, b {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .page article p > em, em {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .page article p > i, i {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .page article p > strong, strong {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .text-highlight {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body del {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: line-through rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body p {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 200, 200) none 0px;
  text-decoration: rgb(190, 200, 200);
  text-decoration-color: rgb(190, 200, 200);
}`,
    links: `body a.external, footer a {
  color: rgb(180, 200, 233);
  outline: rgb(180, 200, 233) none 0px;
  text-decoration: 1.5px rgb(180, 200, 233);
  text-decoration-color: rgb(180, 200, 233);
  text-decoration-thickness: 1.5px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 185, 188);
  outline: rgb(21, 185, 188) none 0px;
  text-decoration: underline 1.5px rgb(21, 185, 188);
  text-decoration-color: rgb(21, 185, 188);
  text-decoration-thickness: 1.5px;
}

body a.internal.broken {
  color: rgb(22, 218, 212);
  outline: rgb(22, 218, 212) none 0px;
  text-decoration: underline 1.5px rgba(21, 185, 188, 0.3);
  text-decoration-color: rgba(21, 185, 188, 0.3);
  text-decoration-thickness: 1.5px;
}`,
    lists: `body dd {
  color: rgb(224, 227, 226);
}

body dt {
  color: rgb(224, 227, 226);
}

body ol > li {
  color: rgb(224, 227, 226);
}

body ol.overflow {
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body ul > li {
  color: rgb(224, 227, 226);
}

body ul.overflow {
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(137, 147, 146);
  text-decoration: rgb(137, 147, 146);
}

body blockquote {
  background-color: rgb(21, 111, 115);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body table {
  color: rgb(224, 227, 226);
  width: 226.438px;
}

body td {
  border-bottom-color: rgb(47, 63, 63);
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-width: 0px;
  color: rgb(224, 227, 226);
}

body th {
  border-bottom-color: rgb(3, 71, 71);
  border-bottom-width: 0px;
  border-left-color: rgb(3, 71, 71);
  border-left-width: 0px;
  border-right-color: rgb(3, 71, 71);
  border-right-width: 0px;
  border-top-color: rgb(3, 71, 71);
  border-top-left-radius: 10.5px;
  border-top-width: 0px;
  color: rgb(3, 71, 71);
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 7px;
  text-align: center;
}

body tr {
  background-color: rgb(176, 204, 204);
}`,
    code: `body code {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(224, 227, 226);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

body pre > code, pre:has(> code) {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body figcaption {
  color: rgb(224, 227, 226);
}

body figure {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body img {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 17.6px;
  border-bottom-right-radius: 17.6px;
  border-left-color: rgb(224, 227, 226);
  border-radius: 17.6px;
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 17.6px;
  border-top-right-radius: 17.6px;
}

body video {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    embeds: `body .file-embed {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(190, 200, 200);
  border-bottom-left-radius: 15.4px;
  border-bottom-right-radius: 15.4px;
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  border-top-left-radius: 15.4px;
  border-top-right-radius: 15.4px;
}

body .footnotes {
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

body .transclude {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(21, 185, 188);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body .transclude-inner {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(21, 185, 188);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body input[type=checkbox] {
  border-bottom-color: rgb(137, 147, 146);
  border-bottom-left-radius: 3.2px;
  border-bottom-right-radius: 3.2px;
  border-bottom-width: 2px;
  border-left-color: rgb(137, 147, 146);
  border-left-width: 2px;
  border-right-color: rgb(137, 147, 146);
  border-right-width: 2px;
  border-top-color: rgb(137, 147, 146);
  border-top-left-radius: 3.2px;
  border-top-right-radius: 3.2px;
  border-top-width: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='*'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='-'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='/'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='>'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='?'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='I'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='S'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='b'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='c'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='d'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='f'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='i'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='k'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='l'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='p'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='u'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body li.task-list-item[data-task='w'] {
  color: rgb(224, 227, 226);
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(47, 63, 63);
  border-left-width: 0px;
  border-right-color: rgb(47, 63, 63);
  border-right-width: 0px;
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: rgb(224, 227, 226);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 2px;
  border-left-color: rgb(47, 63, 63);
  border-left-width: 2px;
  border-right-color: rgb(47, 63, 63);
  border-right-width: 2px;
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 227, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 227, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  color: rgb(224, 227, 226);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 2px;
  border-left-color: rgb(47, 63, 63);
  border-left-width: 2px;
  border-right-color: rgb(47, 63, 63);
  border-right-width: 2px;
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 46, 46);
  border-bottom-width: 2px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(224, 227, 226);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(224, 227, 226);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(53, 72, 99);
  border-bottom-color: rgba(21, 185, 188, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(21, 185, 188, 0.15);
  border-right-color: rgba(21, 185, 188, 0.15);
  border-top-color: rgba(21, 185, 188, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(212, 227, 255);
}

body h1 {
  color: rgb(224, 227, 226);
}

body h2 {
  color: rgb(224, 227, 226);
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 227, 226);
}

body h3 {
  color: rgb(224, 227, 226);
}

body h4 {
  color: rgb(224, 227, 226);
}

body h5 {
  color: rgb(224, 227, 226);
}

body h6 {
  color: rgb(224, 227, 226);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(13, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(190, 200, 200);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(190, 200, 200);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(190, 200, 200);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 9.75px;
  border-bottom-right-radius: 9.75px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 9.75px;
  border-top-right-radius: 9.75px;
  color: rgb(224, 227, 226);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(190, 200, 200);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(190, 200, 200);
}`,
    footer: `body footer {
  background-color: rgb(25, 46, 46);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 13.2px;
  border-top-width: 2px;
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(190, 200, 200);
  text-decoration: rgb(190, 200, 200);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(190, 200, 200);
  text-decoration: rgb(190, 200, 200);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body li.section-li > .section .meta {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(190, 200, 200);
  text-decoration: rgb(190, 200, 200);
}

body ul.section-ul {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(190, 200, 200);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(190, 200, 200);
}

body .darkmode svg {
  color: rgb(21, 185, 188);
  stroke: rgb(21, 185, 188);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(204, 232, 232);
  border-bottom-left-radius: 9.75px;
  border-bottom-right-radius: 9.75px;
  border-left-color: rgb(204, 232, 232);
  border-right-color: rgb(204, 232, 232);
  border-top-color: rgb(204, 232, 232);
  border-top-left-radius: 9.75px;
  border-top-right-radius: 9.75px;
  color: rgb(204, 232, 232);
}

body .breadcrumb-element p {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

body .metadata {
  background-color: rgb(25, 46, 46);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(190, 200, 200);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .metadata-properties {
  border-bottom-color: rgb(190, 200, 200);
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  color: rgb(190, 200, 200);
}

body .navigation-progress {
  background-color: rgb(25, 46, 46);
}

body .page-header h2.page-title {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(224, 227, 226);
  text-decoration: underline dotted rgb(224, 227, 226);
}

body details {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body input[type=text] {
  border-bottom-color: rgb(190, 200, 200);
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 10.5px;
  border-bottom-right-radius: 10.5px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 10.5px;
  border-top-right-radius: 10.5px;
  color: rgb(224, 227, 226);
}

body progress {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

body sub {
  color: rgb(224, 227, 226);
}

body summary {
  color: rgb(224, 227, 226);
}

body sup {
  color: rgb(224, 227, 226);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 181;
  --accent-l: 21%;
  --accent-s: 100%;
  --background: #fdfcfa;
  --background-modifier-active-hover: rgba(0, 105, 107, 0.1);
  --background-modifier-border: #dbe8e8;
  --background-modifier-border-focus: #5fb9bb;
  --background-modifier-border-hover: #dbe8e8;
  --background-modifier-form-field: #dbe8e8;
  --background-modifier-form-field-hover: #dbe8e8;
  --background-modifier-hover: rgba(106, 148, 149, 0.15);
  --background-primary: #fdfcfa;
  --background-primary-alt: #dbe8e8;
  --background-secondary: #eef5f3;
  --background-secondary-alt: #eef5f3;
  --bases-cards-background: #fdfcfa;
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: #dbe8e8;
  --bases-cards-radius: 1.1em;
  --bases-cards-shadow: 0 0 0 1px #dbe8e8;
  --bases-cards-shadow-hover: 0 0 0 1px #dbe8e8;
  --bases-embed-border-color: #dbe8e8;
  --bases-embed-border-radius: 0.75em;
  --bases-group-heading-property-color: #3f4949;
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: #dbe8e8;
  --bases-table-cell-background-active: #fdfcfa;
  --bases-table-cell-background-disabled: #dbe8e8;
  --bases-table-cell-background-selected: rgba(0, 105, 107, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #5fb9bb;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(180, 101%, 22.575%);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-radius: 0.75em;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: #dbe8e8;
  --bases-table-header-background: #fdfcfa;
  --bases-table-header-background-hover: rgba(106, 148, 149, 0.15);
  --bases-table-header-color: #3f4949;
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: #fdfcfa;
  --bases-table-summary-background-hover: rgba(106, 148, 149, 0.15);
  --blockquote-background-color: #cce8e8;
  --blockquote-border-color: hsl(180, 101%, 22.575%);
  --blockquote-border-thickness: 0px;
  --blockquote-color: #041f20;
  --blur-background: color-mix(in srgb, #fdfcfa 65%, transparent) linear-gradient(#fdfcfa, color-mix(in srgb, #fdfcfa 65%, transparent));
  --border-width: 2px;
  --button-radius: 20px;
  --callout-radius: 0.75em;
  --canvas-background: #fdfcfa;
  --canvas-card-label-color: #6f7979;
  --canvas-controls-radius: 0.75em;
  --canvas-dot-pattern: #dbe8e8;
  --caret-color: #191c1c;
  --checkbox-border-color: #6f7979;
  --checkbox-border-color-hover: #3f4949;
  --checkbox-color: hsl(180, 101%, 22.575%);
  --checkbox-color-hover: #4a6363;
  --checkbox-marker-color: #fdfcfa;
  --checkbox-radius: 0.2rem;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 0.75em;
  --code-background: #dbe8e8;
  --code-border-color: #dbe8e8;
  --code-bracket-background: rgba(106, 148, 149, 0.15);
  --code-comment: #6f7979;
  --code-normal: #191c1c;
  --code-punctuation: #3f4949;
  --code-radius: 0.75em;
  --collapse-icon-color: #6f7979;
  --collapse-icon-color-collapsed: rgb(0, 105, 107);
  --color-accent: rgb(0, 105, 107);
  --color-accent-1: hsl(180, 101%, 22.575%);
  --color-accent-2: #4a6363;
  --color-accent-hsl: 181,
			100%,
			21%;
  --color-base-00: #fdfcfa;
  --color-base-05: #eef5f3;
  --color-base-10: #dbe8e8;
  --color-base-100: #191c1c;
  --color-base-20: #eef5f3;
  --color-base-25: #dbe8e8;
  --color-base-30: #dbe8e8;
  --color-base-35: #dbe8e8;
  --color-base-40: #dbe8e8;
  --color-base-50: #6f7979;
  --color-base-60: #4a6363;
  --color-base-70: #3f4949;
  --custom-drawer-header: "Bolt";
  --divider-color: transparent;
  --divider-color-hover: hsl(180, 101%, 22.575%);
  --dropdown-background: #eef5f3;
  --dropdown-background-hover: #dbe8e8;
  --embed-block-shadow-hover: 0 0 0 1px #dbe8e8, inset 0 0 0 1px #dbe8e8;
  --embed-border-start: 2px solid hsl(180, 101%, 22.575%);
  --error: #ba1a1a;
  --error-container: #ffdad6;
  --file-header-background: #fdfcfa;
  --file-header-background-focused: #fdfcfa;
  --file-header-border: 2px solid transparent;
  --file-header-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-justify: left;
  --file-line-width: 750px;
  --flair-background: #eef5f3;
  --flair-color: #191c1c;
  --font-interface: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R';
  --footnote-divider-color: #dbe8e8;
  --footnote-divider-width: 2px;
  --footnote-id-color: #3f4949;
  --footnote-id-color-no-occurrences: #6f7979;
  --footnote-input-background-active: rgba(106, 148, 149, 0.15);
  --footnote-radius: 0.75em;
  --graph-line: #dbe8e8;
  --graph-node: rgb(10, 131, 133);
  --graph-node-focused: #5fb9bb;
  --graph-node-tag: #00bfbc;
  --graph-node-unresolved: #4c5f7c;
  --graph-text: #191c1c;
  --h1-size: 2.3em;
  --h1-weight: 300;
  --h2-size: 2em;
  --h2-weight: 300;
  --h3-size: 1.85em;
  --h3-weight: 400;
  --h4-size: 1.7em;
  --h4-weight: 400;
  --h5-size: 1.58em;
  --h5-weight: 400;
  --h6-size: 1.35em;
  --h6-weight: 500;
  --heading-formatting: #6f7979;
  --hr-color: #dbe8e8;
  --icon-color: #3f4949;
  --icon-color-active: rgb(0, 105, 107);
  --icon-color-focused: #191c1c;
  --icon-color-hover: #3f4949;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-line-height: 1.3em;
  --inline-title-size: 2.5em;
  --inline-title-weight: 500;
  --input-border-width: 0;
  --input-date-separator: #6f7979;
  --input-placeholder-color: #6f7979;
  --input-radius: 20px;
  --input-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --interactive-accent: hsl(180, 101%, 22.575%);
  --interactive-accent-hover: #4a6363;
  --interactive-accent-hsl: 181,
			100%,
			21%;
  --interactive-hover: #dbe8e8;
  --interactive-normal: #eef5f3;
  --link-color: #00696b;
  --link-color-hover: #00696b;
  --link-decoration-thickness: 1.5px;
  --link-external-color: #4c5f7c;
  --link-external-color-hover: #4a6363;
  --link-external-decoration: none;
  --link-unresolved-color: rgb(0, 105, 107);
  --link-unresolved-decoration-color: rgba(0, 105, 107, 0.3);
  --list-marker-color: #6f7979;
  --list-marker-color-collapsed: rgb(0, 105, 107);
  --list-marker-color-hover: #3f4949;
  --lower-accent: rgb(10, 131, 133);
  --menu-background: #eef5f3;
  --menu-border-color: #dbe8e8;
  --menu-border-width: 2px;
  --menu-radius: 1.1em;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --metadata-background: #eef5f3;
  --metadata-border-color: #dbe8e8;
  --metadata-border-radius: 0.75em;
  --metadata-divider-color: #dbe8e8;
  --metadata-input-background-active: rgba(106, 148, 149, 0.15);
  --metadata-input-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #191c1c;
  --metadata-label-background-active: rgba(106, 148, 149, 0.15);
  --metadata-label-font: '??', Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #3f4949;
  --metadata-label-text-color-hover: #3f4949;
  --metadata-padding: 1em;
  --metadata-property-background-active: rgba(106, 148, 149, 0.15);
  --metadata-property-box-shadow-focus: 0 0 0 2px #5fb9bb;
  --metadata-property-box-shadow-hover: 0 0 0 2px #dbe8e8;
  --modal-background: #fdfcfa;
  --modal-border-color: #dbe8e8;
  --modal-border-width: 2px;
  --modal-radius: 20px;
  --nav-collapse-icon-color: #6f7979;
  --nav-collapse-icon-color-collapsed: #6f7979;
  --nav-heading-color: #191c1c;
  --nav-heading-color-collapsed: #6f7979;
  --nav-heading-color-collapsed-hover: #3f4949;
  --nav-heading-color-hover: #191c1c;
  --nav-indentation-guide-color: hsl(180, 101%, 22.575%);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: rgba(106, 148, 149, 0.15);
  --nav-item-background-hover: rgba(106, 148, 149, 0.15);
  --nav-item-background-selected: rgba(0, 105, 107, 0.15);
  --nav-item-color: #3f4949;
  --nav-item-color-active: #191c1c;
  --nav-item-color-highlighted: rgb(0, 105, 107);
  --nav-item-color-hover: #191c1c;
  --nav-item-color-selected: #191c1c;
  --nav-item-radius: 0.75em;
  --nav-tag-color: #6f7979;
  --nav-tag-color-active: #3f4949;
  --nav-tag-color-hover: #3f4949;
  --nav-tag-radius: 0.75em;
  --on-background: #191c1c;
  --on-error: #ffffff;
  --on-error-container: #410002;
  --on-lower-accent: #ffffff;
  --on-primary: #ffffff;
  --on-primary-container: #002021;
  --on-secondary: #ffffff;
  --on-secondary-container: #041f20;
  --on-surface: #191c1c;
  --on-surface-variant: #3f4949;
  --on-tertiary: #ffffff;
  --on-tertiary-container: #061c36;
  --on-upper-accent: #ffffff;
  --outline: #6f7979;
  --pdf-background: #fdfcfa;
  --pdf-page-background: #fdfcfa;
  --pdf-sidebar-background: #fdfcfa;
  --pill-border-color: #dbe8e8;
  --pill-border-color-hover: #dbe8e8;
  --pill-border-width: 2px;
  --pill-color: #3f4949;
  --pill-color-hover: #191c1c;
  --pill-color-remove: #6f7979;
  --pill-color-remove-hover: rgb(0, 105, 107);
  --primary: #00696b;
  --primary-container: #5fb9bb;
  --primary-lighter: rgb(10, 131, 133);
  --prompt-background: #fdfcfa;
  --prompt-border-color: #dbe8e8;
  --prompt-border-width: 2px;
  --radius-l: 20px;
  --radius-m: 1.1em;
  --radius-s: 0.75em;
  --raised-background: color-mix(in srgb, #fdfcfa 65%, transparent) linear-gradient(#fdfcfa, color-mix(in srgb, #fdfcfa 65%, transparent));
  --ribbon-background: #eef5f3;
  --ribbon-background-collapsed: #fdfcfa;
  --scrollbar-active-thumb-bg: #cce8e8;
  --scrollbar-radius: 20px;
  --scrollbar-thumb-bg: #dbe8e8;
  --search-clear-button-color: #3f4949;
  --search-icon-color: #3f4949;
  --search-result-background: #fdfcfa;
  --secondary: #4a6363;
  --secondary-container: #cce8e8;
  --setting-group-heading-color: #191c1c;
  --setting-items-background: #dbe8e8;
  --setting-items-border-color: #dbe8e8;
  --setting-items-radius: 20px;
  --shadow-bottom: 0 10px 10px -10px rgba(0, 0, 0, 0.19), 0 6px 6px -6px rgba(0, 0, 0, 0.23);
  --shadow-m: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --slider-thumb-border-color: #dbe8e8;
  --slider-thumb-border-width: 2px;
  --slider-track-background: #dbe8e8;
  --status-bar-background: #eef5f3;
  --status-bar-border-color: transparent;
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-radius: 1.1em 0 0 0;
  --status-bar-text-color: #3f4949;
  --suggestion-background: #fdfcfa;
  --surface: #eef5f3;
  --surface-variant: #dbe8e8;
  --tab-background-active: transparent;
  --tab-container-background: #eef5f3;
  --tab-curve: 0;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-outline-width: 0;
  --tab-radius: 0.75em;
  --tab-radius-active: 0;
  --tab-switcher-background: #eef5f3;
  --tab-switcher-menubar-background: linear-gradient(to top, #eef5f3, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 105, 107);
  --tab-text-color: #6f7979;
  --tab-text-color-active: #3f4949;
  --tab-text-color-focused: #3f4949;
  --tab-text-color-focused-active: #3f4949;
  --tab-text-color-focused-active-current: #191c1c;
  --tab-text-color-focused-highlighted: rgb(0, 105, 107);
  --tab-width: 250px;
  --table-add-button-border-color: #dbe8e8;
  --table-border-color: #dbe8e8;
  --table-drag-handle-background-active: hsl(180, 101%, 22.575%);
  --table-drag-handle-color: #6f7979;
  --table-header-align: center;
  --table-header-background: #4a6363;
  --table-header-background-hover: #4a6363;
  --table-header-border-color: #dbe8e8;
  --table-header-color: #191c1c;
  --table-header-size: 0.875em;
  --table-selection: rgba(0, 105, 107, 0.1);
  --table-selection-border-color: hsl(180, 101%, 22.575%);
  --tag-background: #d4e3ff;
  --tag-background-hover: #d4e3ff;
  --tag-border-color: rgba(0, 105, 107, 0.15);
  --tag-border-color-hover: rgba(0, 105, 107, 0.15);
  --tag-color: #061c36;
  --tag-color-hover: #061c36;
  --tag-radius: 5px;
  --tertiary: #4c5f7c;
  --tertiary-container: #d4e3ff;
  --text-accent: rgb(0, 105, 107);
  --text-accent-hover: #4a6363;
  --text-faint: #6f7979;
  --text-muted: #3f4949;
  --text-normal: #191c1c;
  --text-selection: rgba(0, 105, 107, 0.2);
  --titlebar-background: #eef5f3;
  --titlebar-background-focused: #eef5f3;
  --titlebar-border-color: #dbe8e8;
  --titlebar-text-color: #3f4949;
  --titlebar-text-color-focused: #191c1c;
  --upper-accent: #00696b;
  --vault-profile-color: #191c1c;
  --vault-profile-color-hover: #191c1c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 245, 243);
  color: rgb(25, 28, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 252, 250);
  color: rgb(25, 28, 28);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 245, 243);
  color: rgb(25, 28, 28);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 245, 243);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(25, 28, 28);
}

body div#quartz-root {
  background-color: rgb(253, 252, 250);
  color: rgb(25, 28, 28);
}`,
    typography: `body .page article p > b, b {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .page article p > em, em {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .page article p > i, i {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .page article p > strong, strong {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .text-highlight {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body del {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: line-through rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body p {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(63, 73, 73) none 0px;
  text-decoration: rgb(63, 73, 73);
  text-decoration-color: rgb(63, 73, 73);
}`,
    links: `body a.external, footer a {
  color: rgb(76, 95, 124);
  outline: rgb(76, 95, 124) none 0px;
  text-decoration: 1.5px rgb(76, 95, 124);
  text-decoration-color: rgb(76, 95, 124);
  text-decoration-thickness: 1.5px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 105, 107);
  outline: rgb(0, 105, 107) none 0px;
  text-decoration: underline 1.5px rgb(0, 105, 107);
  text-decoration-color: rgb(0, 105, 107);
  text-decoration-thickness: 1.5px;
}

body a.internal.broken {
  color: rgb(0, 105, 107);
  outline: rgb(0, 105, 107) none 0px;
  text-decoration: underline 1.5px rgba(0, 105, 107, 0.3);
  text-decoration-color: rgba(0, 105, 107, 0.3);
  text-decoration-thickness: 1.5px;
}`,
    lists: `body dd {
  color: rgb(25, 28, 28);
}

body dt {
  color: rgb(25, 28, 28);
}

body ol > li {
  color: rgb(25, 28, 28);
}

body ol.overflow {
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body ul > li {
  color: rgb(25, 28, 28);
}

body ul.overflow {
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(111, 121, 121);
  text-decoration: rgb(111, 121, 121);
}

body blockquote {
  background-color: rgb(204, 232, 232);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body table {
  color: rgb(25, 28, 28);
  width: 226.438px;
}

body td {
  border-bottom-color: rgb(219, 232, 232);
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-width: 0px;
  color: rgb(25, 28, 28);
}

body th {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10.5px;
  border-top-width: 0px;
  color: rgb(255, 255, 255);
  padding-bottom: 7px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 7px;
  text-align: center;
}

body tr {
  background-color: rgb(74, 99, 99);
}`,
    code: `body code {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(25, 28, 28);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

body pre > code, pre:has(> code) {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body figcaption {
  color: rgb(25, 28, 28);
}

body figure {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body img {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 17.6px;
  border-bottom-right-radius: 17.6px;
  border-left-color: rgb(25, 28, 28);
  border-radius: 17.6px;
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 17.6px;
  border-top-right-radius: 17.6px;
}

body video {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    embeds: `body .file-embed {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(63, 73, 73);
  border-bottom-left-radius: 15.4px;
  border-bottom-right-radius: 15.4px;
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  border-top-left-radius: 15.4px;
  border-top-right-radius: 15.4px;
}

body .footnotes {
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

body .transclude {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(0, 115, 115);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body .transclude-inner {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(0, 115, 115);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body input[type=checkbox] {
  border-bottom-color: rgb(111, 121, 121);
  border-bottom-left-radius: 3.2px;
  border-bottom-right-radius: 3.2px;
  border-bottom-width: 2px;
  border-left-color: rgb(111, 121, 121);
  border-left-width: 2px;
  border-right-color: rgb(111, 121, 121);
  border-right-width: 2px;
  border-top-color: rgb(111, 121, 121);
  border-top-left-radius: 3.2px;
  border-top-right-radius: 3.2px;
  border-top-width: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='*'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='-'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='/'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='>'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='?'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='I'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='S'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='b'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='c'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='d'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='f'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='i'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='k'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='l'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='p'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='u'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body li.task-list-item[data-task='w'] {
  color: rgb(25, 28, 28);
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="example"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="info"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="note"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="question"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="success"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(219, 232, 232);
  border-left-width: 0px;
  border-right-color: rgb(219, 232, 232);
  border-right-width: 0px;
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: rgb(25, 28, 28);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 2px;
  border-left-color: rgb(219, 232, 232);
  border-left-width: 2px;
  border-right-color: rgb(219, 232, 232);
  border-right-width: 2px;
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 28, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(25, 28, 28);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  color: rgb(25, 28, 28);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 2px;
  border-left-color: rgb(219, 232, 232);
  border-left-width: 2px;
  border-right-color: rgb(219, 232, 232);
  border-right-width: 2px;
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(238, 245, 243);
  border-bottom-width: 2px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(25, 28, 28);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(25, 28, 28);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(212, 227, 255);
  border-bottom-color: rgba(0, 105, 107, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 105, 107, 0.15);
  border-right-color: rgba(0, 105, 107, 0.15);
  border-top-color: rgba(0, 105, 107, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(6, 28, 54);
}

body h1 {
  color: rgb(25, 28, 28);
}

body h2 {
  color: rgb(25, 28, 28);
}

body h2.page-title, h2.page-title a {
  color: rgb(25, 28, 28);
}

body h3 {
  color: rgb(25, 28, 28);
}

body h4 {
  color: rgb(25, 28, 28);
}

body h5 {
  color: rgb(25, 28, 28);
}

body h6 {
  color: rgb(25, 28, 28);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body ::-webkit-scrollbar {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(253, 252, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(63, 73, 73);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(63, 73, 73);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(63, 73, 73);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 9.75px;
  border-bottom-right-radius: 9.75px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 9.75px;
  border-top-right-radius: 9.75px;
  color: rgb(25, 28, 28);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(63, 73, 73);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(63, 73, 73);
}`,
    footer: `body footer {
  background-color: rgb(238, 245, 243);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 13.2px;
  border-top-width: 2px;
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(63, 73, 73);
  text-decoration: rgb(63, 73, 73);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 73, 73);
  text-decoration: rgb(63, 73, 73);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body li.section-li > .section .meta {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 73, 73);
  text-decoration: rgb(63, 73, 73);
}

body ul.section-ul {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(63, 73, 73);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(63, 73, 73);
}

body .darkmode svg {
  color: rgb(0, 105, 107);
  stroke: rgb(0, 105, 107);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9.75px;
  border-bottom-right-radius: 9.75px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9.75px;
  border-top-right-radius: 9.75px;
  color: rgb(255, 255, 255);
}

body .breadcrumb-element p {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

body .metadata {
  background-color: rgb(238, 245, 243);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(63, 73, 73);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .metadata-properties {
  border-bottom-color: rgb(63, 73, 73);
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  color: rgb(63, 73, 73);
}

body .navigation-progress {
  background-color: rgb(238, 245, 243);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(25, 28, 28);
  text-decoration: underline dotted rgb(25, 28, 28);
}

body details {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body input[type=text] {
  border-bottom-color: rgb(63, 73, 73);
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 10.5px;
  border-bottom-right-radius: 10.5px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 10.5px;
  border-top-right-radius: 10.5px;
  color: rgb(25, 28, 28);
}

body progress {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

body sub {
  color: rgb(25, 28, 28);
}

body summary {
  color: rgb(25, 28, 28);
}

body sup {
  color: rgb(25, 28, 28);
}`,
  },
};
