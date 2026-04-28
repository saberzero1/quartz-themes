import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "bolt",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["formular"],
    fontFiles: [
      {
        family: "Formular",
        style: "normal",
        weight: "normal",
        file: "formular.woff",
        format: "woff",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "bolt-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 181;
  --accent-l: 41%;
  --accent-s: 80%;
  --background: #0d1a1a;
  --background-modifier-active-hover: hsla(181,
			80%,
			41%, 0.1);
  --background-modifier-border: #2f3f3f;
  --background-modifier-border-focus: #2f8a8b;
  --background-modifier-border-hover: #2f3f3f;
  --background-modifier-form-field: #2f3f3f;
  --background-modifier-form-field-hover: #2f3f3f;
  --background-modifier-hover: hsla(181, 17%, 50%, 0.15);
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
  --bases-table-cell-background-selected: hsla(181,
			80%,
			41%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #2f8a8b;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(181, 80%, 41%);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-radius: 0.75em;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: #2f3f3f;
  --bases-table-header-background: #0d1a1a;
  --bases-table-header-background-hover: hsla(181, 17%, 50%, 0.15);
  --bases-table-header-color: #bec8c8;
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: #0d1a1a;
  --bases-table-summary-background-hover: hsla(181, 17%, 50%, 0.15);
  --blockquote-background-color: #156f73;
  --blockquote-border-color: hsl(181, 80%, 41%);
  --blockquote-border-thickness: 0px;
  --blockquote-color: #cce8e8;
  --blur-background: color-mix(in srgb, #2f3f3f 65%, transparent) linear-gradient(#2f3f3f, color-mix(in srgb, #2f3f3f 65%, transparent));
  --bodyFont: var(--font-interface, Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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
  --checkbox-color: hsl(181, 80%, 41%);
  --checkbox-color-hover: hsl(178, 81.6%, 47.15%);
  --checkbox-marker-color: #0d1a1a;
  --checkbox-radius: 0.2rem;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 0.75em;
  --code-background: #2f3f3f;
  --code-border-color: #2f3f3f;
  --code-bracket-background: hsla(181, 17%, 50%, 0.15);
  --code-comment: #899392;
  --code-normal: #e0e3e2;
  --code-punctuation: #bec8c8;
  --code-radius: 0.75em;
  --codeFont: var(--font-interface, Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: #899392;
  --collapse-icon-color-collapsed: hsl(178, 81.6%, 47.15%);
  --color-accent: hsl(181, 80%, 41%);
  --color-accent-1: hsl(178, 81.6%, 47.15%);
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
  --dark: var(--text-normal, #e0e3e2);
  --darkgray: var(--text-normal, #e0e3e2);
  --divider-color: transparent;
  --divider-color-hover: hsl(181, 80%, 41%);
  --dropdown-background: #2f3f3f;
  --dropdown-background-hover: #2f3f3f;
  --embed-block-shadow-hover: 0 0 0 1px #2f3f3f, inset 0 0 0 1px #2f3f3f;
  --embed-border-start: 2px solid hsl(181, 80%, 41%);
  --error: #ffb4ab;
  --error-container: #93000a;
  --file-header-background: #0d1a1a;
  --file-header-background-focused: #0d1a1a;
  --file-header-border: 2px solid transparent;
  --file-header-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-justify: left;
  --file-line-width: 750px;
  --flair-background: #2f3f3f;
  --flair-color: #e0e3e2;
  --font-interface: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R';
  --footnote-divider-color: #2f3f3f;
  --footnote-divider-width: 2px;
  --footnote-id-color: #bec8c8;
  --footnote-id-color-no-occurrences: #899392;
  --footnote-input-background-active: hsla(181, 17%, 50%, 0.15);
  --footnote-radius: 0.75em;
  --graph-line: #2f3f3f;
  --graph-node: hsl(181, 78%, 46%);
  --graph-node-focused: #2f8a8b;
  --graph-node-tag: #53dfdd;
  --graph-node-unresolved: #b4c8e9;
  --graph-text: #e0e3e2;
  --gray: var(--text-muted, #bec8c8);
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
  --headerFont: var(--font-interface, Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: #899392;
  --highlight: var(--background-modifier-hover, hsla(181, 17%, 50%, 0.15));
  --hr-color: #2f3f3f;
  --icon-color: #bec8c8;
  --icon-color-active: hsl(178, 81.6%, 47.15%);
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
  --interactive-accent: hsl(181, 80%, 41%);
  --interactive-accent-hover: hsl(178, 81.6%, 47.15%);
  --interactive-accent-hsl: 181,
			80%,
			41%;
  --interactive-hover: #2f3f3f;
  --interactive-normal: #2f3f3f;
  --light: var(--background-primary, #0d1a1a);
  --lightgray: var(--background-secondary, #192e2e);
  --link-color: hsl(181, 80%, 41%);
  --link-color-hover: hsl(181, 80%, 41%);
  --link-decoration-thickness: 1.5px;
  --link-external-color: #b4c8e9;
  --link-external-color-hover: #b0cccc;
  --link-external-decoration: none;
  --link-unresolved-color: hsl(178, 81.6%, 47.15%);
  --link-unresolved-decoration-color: hsla(181,
			80%,
			41%, 0.3);
  --list-marker-color: #899392;
  --list-marker-color-collapsed: hsl(178, 81.6%, 47.15%);
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
  --metadata-input-background-active: hsla(181, 17%, 50%, 0.15);
  --metadata-input-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #e0e3e2;
  --metadata-label-background-active: hsla(181, 17%, 50%, 0.15);
  --metadata-label-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #bec8c8;
  --metadata-label-text-color-hover: #bec8c8;
  --metadata-padding: 1em;
  --metadata-property-background-active: hsla(181, 17%, 50%, 0.15);
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
  --nav-indentation-guide-color: hsl(181, 80%, 41%);
  --nav-indentation-guide-width: 2px;
  --nav-item-background-active: hsla(181, 17%, 50%, 0.15);
  --nav-item-background-hover: hsla(181, 17%, 50%, 0.15);
  --nav-item-background-selected: hsla(181,
			80%,
			41%, 0.15);
  --nav-item-color: #bec8c8;
  --nav-item-color-active: #e0e3e2;
  --nav-item-color-highlighted: hsl(178, 81.6%, 47.15%);
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
  --pill-color-remove-hover: hsl(178, 81.6%, 47.15%);
  --primary: hsl(181, 80%, 41%);
  --primary-container: #2f8a8b;
  --primary-lighter: hsl(181, 78%, 46%);
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
  --shiki-active-tab-border-color: #bec8c8;
  --shiki-code-background: #2f3f3f;
  --shiki-code-block-border-radius: 0.75em;
  --shiki-code-comment: #899392;
  --shiki-code-normal: #bec8c8;
  --shiki-code-punctuation: #bec8c8;
  --shiki-gutter-border-color: #2f3f3f;
  --shiki-gutter-border-width: 2px;
  --shiki-gutter-text-color: #899392;
  --shiki-gutter-text-color-highlight: #bec8c8;
  --shiki-highlight-neutral: #bec8c8;
  --shiki-terminal-dots-color: #899392;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(181, 80%, 41%);
  --tab-text-color: #899392;
  --tab-text-color-active: #bec8c8;
  --tab-text-color-focused: #bec8c8;
  --tab-text-color-focused-active: #bec8c8;
  --tab-text-color-focused-active-current: #e0e3e2;
  --tab-text-color-focused-highlighted: hsl(178, 81.6%, 47.15%);
  --tab-width: 250px;
  --table-add-button-border-color: #2f3f3f;
  --table-border-color: #2f3f3f;
  --table-drag-handle-background-active: hsl(181, 80%, 41%);
  --table-drag-handle-color: #899392;
  --table-header-align: center;
  --table-header-background: #b0cccc;
  --table-header-background-hover: #b0cccc;
  --table-header-border-color: #2f3f3f;
  --table-header-color: #e0e3e2;
  --table-header-size: 0.875em;
  --table-selection: hsla(181,
			80%,
			41%, 0.1);
  --table-selection-border-color: hsl(181, 80%, 41%);
  --tag-background: #354863;
  --tag-background-hover: #354863;
  --tag-border-color: hsla(181,
			80%,
			41%, 0.15);
  --tag-border-color-hover: hsla(181,
			80%,
			41%, 0.15);
  --tag-color: #d4e3ff;
  --tag-color-hover: #d4e3ff;
  --tag-radius: 5px;
  --tertiary: #b4c8e9;
  --tertiary-container: #354863;
  --text-accent: hsl(178, 81.6%, 47.15%);
  --text-accent-hover: #b0cccc;
  --text-faint: #899392;
  --text-muted: #bec8c8;
  --text-normal: #e0e3e2;
  --text-selection: hsla(181,
			80%,
			41%, 0.33);
  --textHighlight: var(--background-modifier-hover, hsla(181, 17%, 50%, 0.15));
  --titleFont: var(--font-interface, Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 46, 46);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(13, 26, 26);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 46, 46);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 46, 46);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(224, 227, 226);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(137, 147, 146);
  border-radius: 3.2px;
  border-width: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(21, 185, 188);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(190, 200, 200) none 0px;
  text-decoration-color: rgb(190, 200, 200);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(180, 200, 233);
  outline: rgb(180, 200, 233) none 0px;
  text-decoration: 1.5px;
  text-decoration-color: rgb(180, 200, 233);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 185, 188);
  outline: rgb(21, 185, 188) none 0px;
  text-decoration: underline 1.5px;
  text-decoration-color: rgb(21, 185, 188);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(22, 218, 212);
  outline: rgb(22, 218, 212) none 0px;
  text-decoration: underline 1.5px rgba(21, 185, 188, 0.3);
  text-decoration-color: rgba(21, 185, 188, 0.3);
  text-decoration-thickness: 1.5px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(137, 147, 146);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(21, 111, 115);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 227, 226);
  width: 226.438px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(47, 63, 63);
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-width: 0px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body th {
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

html[saved-theme="dark"] body tr {
  background-color: rgb(176, 204, 204);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgb(47, 63, 63);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(47, 63, 63);
  border-right-color: rgb(47, 63, 63);
  border-top-color: rgb(47, 63, 63);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(224, 227, 226);
  padding-bottom: 1.4px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 1.4px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(47, 63, 63);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 227, 226);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 40.48px;
  border-bottom-right-radius: 40.48px;
  border-left-color: rgb(224, 227, 226);
  border-radius: 40.48px;
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 40.48px;
  border-top-right-radius: 40.48px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(21, 185, 188);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 227, 226);
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(137, 147, 146);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
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

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(13, 26, 26);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background: rgb(53, 72, 99) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 72, 99);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(212, 227, 255);
  border-left-color: rgb(212, 227, 255);
  border-right-color: rgb(212, 227, 255);
  border-top-color: rgb(212, 227, 255);
  color: rgb(212, 227, 255);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(212, 227, 255);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
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

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 227, 226);
  outline: rgb(224, 227, 226) none 0px;
  text-decoration-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 227, 226);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 46, 46);
  border-bottom-width: 2px;
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 227, 226);
  font-size: 40px;
  font-weight: 500;
}

html[saved-theme="dark"] body h2 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h3 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h5 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(21, 185, 188);
  border-left-width: 2px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(190, 200, 200);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(21, 185, 188);
  stroke: rgb(21, 185, 188);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 46, 46);
  border-color: rgb(224, 227, 226);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(3, 71, 71);
  color: rgb(3, 71, 71);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
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

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(190, 200, 200);
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(25, 46, 46);
  border-color: rgb(47, 63, 63);
  border-radius: 12px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(53, 72, 99);
  border-radius: 5px;
  color: rgb(212, 227, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(190, 200, 200);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 26, 26);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(25, 46, 46);
  border-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(3, 71, 71);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(224, 227, 226);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 46, 46);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 232, 232);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(190, 200, 200);
  border-left-color: rgb(190, 200, 200);
  border-right-color: rgb(190, 200, 200);
  border-top-color: rgb(190, 200, 200);
  color: rgb(190, 200, 200);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 227, 226);
  border-left-color: rgb(224, 227, 226);
  border-right-color: rgb(224, 227, 226);
  border-top-color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 227, 226);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(53, 72, 99);
  border-bottom-color: rgba(21, 185, 188, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(21, 185, 188, 0.15);
  border-right-color: rgba(21, 185, 188, 0.15);
  border-top-color: rgba(21, 185, 188, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 227, 255);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 181;
  --accent-l: 21%;
  --accent-s: 100%;
  --background: #fdfcfa;
  --background-modifier-active-hover: hsla(181,
			100%,
			21%, 0.1);
  --background-modifier-border: #dbe8e8;
  --background-modifier-border-focus: #5fb9bb;
  --background-modifier-border-hover: #dbe8e8;
  --background-modifier-form-field: #dbe8e8;
  --background-modifier-form-field-hover: #dbe8e8;
  --background-modifier-hover: hsla(181, 17%, 50%, 0.15);
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
  --bases-table-cell-background-selected: hsla(181,
			100%,
			21%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #5fb9bb;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(180, 101%, 22.575%);
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-radius: 0.75em;
  --bases-table-container-border-width: 2px;
  --bases-table-group-background: #dbe8e8;
  --bases-table-header-background: #fdfcfa;
  --bases-table-header-background-hover: hsla(181, 17%, 50%, 0.15);
  --bases-table-header-color: #3f4949;
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: #fdfcfa;
  --bases-table-summary-background-hover: hsla(181, 17%, 50%, 0.15);
  --blockquote-background-color: #cce8e8;
  --blockquote-border-color: hsl(180, 101%, 22.575%);
  --blockquote-border-thickness: 0px;
  --blockquote-color: #041f20;
  --blur-background: color-mix(in srgb, #fdfcfa 65%, transparent) linear-gradient(#fdfcfa, color-mix(in srgb, #fdfcfa 65%, transparent));
  --bodyFont: var(--font-interface, Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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
  --code-bracket-background: hsla(181, 17%, 50%, 0.15);
  --code-comment: #6f7979;
  --code-normal: #191c1c;
  --code-punctuation: #3f4949;
  --code-radius: 0.75em;
  --codeFont: var(--font-interface, Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --collapse-icon-color: #6f7979;
  --collapse-icon-color-collapsed: hsl(181, 100%, 21%);
  --color-accent: hsl(181, 100%, 21%);
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
  --dark: var(--text-normal, #191c1c);
  --darkgray: var(--text-normal, #191c1c);
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
  --file-header-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-justify: left;
  --file-line-width: 750px;
  --flair-background: #eef5f3;
  --flair-color: #191c1c;
  --font-interface: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Roboto, OpenSans, Inter, 'Noto Sans JP', 'UD Digi Kyokasho NK-R';
  --footnote-divider-color: #dbe8e8;
  --footnote-divider-width: 2px;
  --footnote-id-color: #3f4949;
  --footnote-id-color-no-occurrences: #6f7979;
  --footnote-input-background-active: hsla(181, 17%, 50%, 0.15);
  --footnote-radius: 0.75em;
  --graph-line: #dbe8e8;
  --graph-node: hsl(181, 86%, 28%);
  --graph-node-focused: #5fb9bb;
  --graph-node-tag: #00bfbc;
  --graph-node-unresolved: #4c5f7c;
  --graph-text: #191c1c;
  --gray: var(--text-muted, #3f4949);
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
  --headerFont: var(--font-interface, Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --heading-formatting: #6f7979;
  --highlight: var(--background-modifier-hover, hsla(181, 17%, 50%, 0.15));
  --hr-color: #dbe8e8;
  --icon-color: #3f4949;
  --icon-color-active: hsl(181, 100%, 21%);
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
  --light: var(--background-primary, #fdfcfa);
  --lightgray: var(--background-secondary, #eef5f3);
  --link-color: #00696b;
  --link-color-hover: #00696b;
  --link-decoration-thickness: 1.5px;
  --link-external-color: #4c5f7c;
  --link-external-color-hover: #4a6363;
  --link-external-decoration: none;
  --link-unresolved-color: hsl(181, 100%, 21%);
  --link-unresolved-decoration-color: hsla(181,
			100%,
			21%, 0.3);
  --list-marker-color: #6f7979;
  --list-marker-color-collapsed: hsl(181, 100%, 21%);
  --list-marker-color-hover: #3f4949;
  --lower-accent: hsl(181, 86%, 28%);
  --menu-background: #eef5f3;
  --menu-border-color: #dbe8e8;
  --menu-border-width: 2px;
  --menu-radius: 1.1em;
  --menu-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --metadata-background: #eef5f3;
  --metadata-border-color: #dbe8e8;
  --metadata-border-radius: 0.75em;
  --metadata-divider-color: #dbe8e8;
  --metadata-input-background-active: hsla(181, 17%, 50%, 0.15);
  --metadata-input-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #191c1c;
  --metadata-label-background-active: hsla(181, 17%, 50%, 0.15);
  --metadata-label-font: Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #3f4949;
  --metadata-label-text-color-hover: #3f4949;
  --metadata-padding: 1em;
  --metadata-property-background-active: hsla(181, 17%, 50%, 0.15);
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
  --nav-item-background-active: hsla(181, 17%, 50%, 0.15);
  --nav-item-background-hover: hsla(181, 17%, 50%, 0.15);
  --nav-item-background-selected: hsla(181,
			100%,
			21%, 0.15);
  --nav-item-color: #3f4949;
  --nav-item-color-active: #191c1c;
  --nav-item-color-highlighted: hsl(181, 100%, 21%);
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
  --pill-color-remove-hover: hsl(181, 100%, 21%);
  --primary: #00696b;
  --primary-container: #5fb9bb;
  --primary-lighter: hsl(181, 86%, 28%);
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
  --shiki-active-tab-border-color: #3f4949;
  --shiki-code-background: #dbe8e8;
  --shiki-code-block-border-radius: 0.75em;
  --shiki-code-comment: #6f7979;
  --shiki-code-normal: #3f4949;
  --shiki-code-punctuation: #3f4949;
  --shiki-gutter-border-color: #dbe8e8;
  --shiki-gutter-border-width: 2px;
  --shiki-gutter-text-color: #6f7979;
  --shiki-gutter-text-color-highlight: #3f4949;
  --shiki-highlight-neutral: #3f4949;
  --shiki-terminal-dots-color: #6f7979;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(181, 100%, 21%);
  --tab-text-color: #6f7979;
  --tab-text-color-active: #3f4949;
  --tab-text-color-focused: #3f4949;
  --tab-text-color-focused-active: #3f4949;
  --tab-text-color-focused-active-current: #191c1c;
  --tab-text-color-focused-highlighted: hsl(181, 100%, 21%);
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
  --table-selection: hsla(181,
			100%,
			21%, 0.1);
  --table-selection-border-color: hsl(180, 101%, 22.575%);
  --tag-background: #d4e3ff;
  --tag-background-hover: #d4e3ff;
  --tag-border-color: hsla(181,
			100%,
			21%, 0.15);
  --tag-border-color-hover: hsla(181,
			100%,
			21%, 0.15);
  --tag-color: #061c36;
  --tag-color-hover: #061c36;
  --tag-radius: 5px;
  --tertiary: #4c5f7c;
  --tertiary-container: #d4e3ff;
  --text-accent: hsl(181, 100%, 21%);
  --text-accent-hover: #4a6363;
  --text-faint: #6f7979;
  --text-muted: #3f4949;
  --text-normal: #191c1c;
  --text-selection: hsla(181,
			100%,
			21%, 0.2);
  --textHighlight: var(--background-modifier-hover, hsla(181, 17%, 50%, 0.15));
  --titleFont: var(--font-interface, Roboto, OpenSans, Inter, Noto Sans JP, UD Digi Kyokasho NK-R, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
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

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(238, 245, 243);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 252, 250);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(238, 245, 243);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(238, 245, 243);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(25, 28, 28);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body del {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(111, 121, 121);
  border-radius: 3.2px;
  border-width: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 115, 115);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(63, 73, 73) none 0px;
  text-decoration-color: rgb(63, 73, 73);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(76, 95, 124);
  outline: rgb(76, 95, 124) none 0px;
  text-decoration: 1.5px;
  text-decoration-color: rgb(76, 95, 124);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 105, 107);
  outline: rgb(0, 105, 107) none 0px;
  text-decoration: underline 1.5px;
  text-decoration-color: rgb(0, 105, 107);
  text-decoration-thickness: 1.5px;
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(0, 105, 107);
  outline: rgb(0, 105, 107) none 0px;
  text-decoration: underline 1.5px rgba(0, 105, 107, 0.3);
  text-decoration-color: rgba(0, 105, 107, 0.3);
  text-decoration-thickness: 1.5px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body dt {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ol > li {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ul > li {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(111, 121, 121);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(204, 232, 232);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body table {
  color: rgb(25, 28, 28);
  width: 226.438px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(219, 232, 232);
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-width: 0px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body th {
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

html[saved-theme="light"] body tr {
  background-color: rgb(74, 99, 99);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgb(219, 232, 232);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(219, 232, 232);
  border-right-color: rgb(219, 232, 232);
  border-top-color: rgb(219, 232, 232);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(25, 28, 28);
  padding-bottom: 1.4px;
  padding-left: 5.6px;
  padding-right: 5.6px;
  padding-top: 1.4px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(219, 232, 232);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body figcaption {
  color: rgb(25, 28, 28);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 40.48px;
  border-bottom-right-radius: 40.48px;
  border-left-color: rgb(25, 28, 28);
  border-radius: 40.48px;
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 40.48px;
  border-top-right-radius: 40.48px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(0, 115, 115);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(25, 28, 28);
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 121, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
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

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 viewBox=\\%220 0 21 21\\%22%3E%3Cpath fill=\\%22currentColor\\%22 d=\\%22m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4L9.55 18Z\\%22%2F%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 252, 250);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background: rgb(212, 227, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(212, 227, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgb(6, 28, 54);
  border-left-color: rgb(6, 28, 54);
  border-right-color: rgb(6, 28, 54);
  border-top-color: rgb(6, 28, 54);
  color: rgb(6, 28, 54);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(6, 28, 54);
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
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

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(25, 28, 28);
  outline: rgb(25, 28, 28) none 0px;
  text-decoration-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 28, 28);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(238, 245, 243);
  border-bottom-width: 2px;
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(106, 148, 149, 0.15);
  border-bottom-left-radius: 11.25px;
  border-bottom-right-radius: 11.25px;
  border-top-left-radius: 11.25px;
  border-top-right-radius: 11.25px;
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body h1 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(25, 28, 28);
  font-size: 40px;
  font-weight: 500;
}

html[saved-theme="light"] body h2 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h3 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h4 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h5 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body h6 {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(0, 115, 115);
  border-left-width: 2px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(63, 73, 73);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(0, 105, 107);
  stroke: rgb(0, 105, 107);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
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

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 252, 250);
  border-color: rgb(25, 28, 28);
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    properties: `html[saved-theme="light"] body .metadata {
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

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(63, 73, 73);
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(238, 245, 243);
  border-color: rgb(219, 232, 232);
  border-radius: 12px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(63, 73, 73);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(212, 227, 255);
  border-radius: 5px;
  color: rgb(6, 28, 54);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(63, 73, 73);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 252, 250);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(238, 245, 243);
  border-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(0, 105, 107);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(25, 28, 28);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(238, 245, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(63, 73, 73);
  border-left-color: rgb(63, 73, 73);
  border-right-color: rgb(63, 73, 73);
  border-top-color: rgb(63, 73, 73);
  color: rgb(63, 73, 73);
  font-family: "??", Roboto, OpenSans, Inter, "Noto Sans JP", "UD Digi Kyokasho NK-R", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(25, 28, 28);
  border-left-color: rgb(25, 28, 28);
  border-right-color: rgb(25, 28, 28);
  border-top-color: rgb(25, 28, 28);
}

html[saved-theme="light"] body sub {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body summary {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body sup {
  color: rgb(25, 28, 28);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(212, 227, 255);
  border-bottom-color: rgba(0, 105, 107, 0.15);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgba(0, 105, 107, 0.15);
  border-right-color: rgba(0, 105, 107, 0.15);
  border-top-color: rgba(0, 105, 107, 0.15);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(6, 28, 54);
}`,
  },
  classSettings: {
    "theme-green": `.theme-green {
--accent-h: 97 !important;
--accent-s: 61% !important;
--accent-l: 62% !important;
--primary: hsl(97, 61%, 62%);
--on-primary:#4d852d;
--primary-container: #40751c;
--on-primary-container: #acf67d;
--secondary: #b8d166;
--on-secondary: #293500;
--secondary-container: #3d4d00;
--on-secondary-container: #d3ee7f;
--tertiary: #ffb68f;
--on-tertiary: #542100;
--tertiary-container: #773200;
--on-tertiary-container: #ffdbca;
--background: #1a1c18;
--on-background: #e3e3dc;
--surface: #1f231b;
--on-surface: #b6c0ad;
--outline: #74796d;
--surface-variant: #43483e;
--on-surface-variant: #e3e3dc;
}
.theme-green {
--accent-h: 94 !important;
--accent-s: 100% !important;
--accent-l: 21% !important;
--primary: hsl(94, 100%, 21%);
--on-primary:#ffffff;
--primary-container: #a1e477;
--on-primary-container: #092100;
--secondary: #526600;
--on-secondary: #ffffff;
--secondary-container: #d2e98e;
--on-secondary-container: #171e00;
--tertiary: #974813;
--on-tertiary: #ffffff;
--tertiary-container: #ffdbca;
--on-tertiary-container: #331100;
--background: #fdfdf5;
--on-background: #1a1c18;
--surface: #f5f5e8;
--on-surface: #1a1c18;
--outline: #74796d;
--surface-variant: #e0e4d6;
--on-surface-variant: #43483e;
}`,
    "theme-classic": `.theme-classic {
--accent-h: 258 !important;
--accent-s: 100% !important;
--accent-l: 87% !important;
--primary: hsl(258, 100%, 87%);
--on-primary:#D0BCFF;
--primary-container: #745eaa;
--on-primary-container: #EADDFF;
--secondary: #CCC2DC;
--on-secondary: #483a69;
--secondary-container: #6e5c99;
--on-secondary-container: #E8DEF8;
--tertiary: #EFB8C8;
--on-tertiary: #492532;
--tertiary-container: #633B48;
--on-tertiary-container: #FFD8E4;
--background: #191720;
--on-background: #E6E1E5;
--surface: #2b2930;
--on-surface: #E6E1E5;
--outline: #938F99;
--surface-variant: #49454F;
--on-surface-variant: #CAC4D0;
}
.theme-classic {
--accent-h: 256 !important;
--accent-s: 34% !important;
--accent-l: 48% !important;
--primary: hsl(256, 34%, 48%);
--on-primary:#ffffff;
--primary-container: #EADDFF;
--on-primary-container: #21005D;
--secondary: #625B71;
--on-secondary: #ffffff;
--secondary-container: #E8DEF8;
--on-secondary-container: #1D192B;
--tertiary: #7D5260;
--on-tertiary: #FFFFFF;
--tertiary-container: #FFD8E4;
--on-tertiary-container: #31111D;
--background: #FFFBFE;
--on-background: #1C1B1F;
--surface: #f7f1f6;
--on-surface: #1C1B1F;
--outline: #79747E;
--surface-variant: #E7E0EC;
--on-surface-variant: #49454F;
}`,
    "theme-lumen": `.theme-lumen {
--accent-h: 233 !important;
--accent-s: 100% !important;
--accent-l: 87% !important;
--primary: hsl(233, 100%, 87%);
--on-primary:#d8e2ee;
--primary-container: #abd0ed;
--on-primary-container: #dee0ff;
--secondary: hsl(189, 100%, 87%);
--on-secondary: #1e93a5;
--secondary-container: #0d596e;
--on-secondary-container: #e5f4f8;
--tertiary: #7dffd6;
--on-tertiary: #004d2d;
--tertiary-container: #138462;
--on-tertiary-container: #c3ffdc;
--background: #18192a;
--on-background: #e0e0ff;
--surface: #232341;
--on-surface: #e0e0ff;
--outline: #90909a;
--surface-variant: #46464f;
--on-surface-variant: #c7c5d0;
}
.theme-lumen {
--accent-h: 231 !important;
--accent-s: 49% !important;
--accent-l: 50% !important;
--primary: hsl(232, 43%, 65%);
--on-primary:#ffffff;
--primary-container: #dee0ff;
--on-primary-container: #000f5d;
--secondary: #006875;
--on-secondary: #ffffff;
--secondary-container: #beefe8;
--on-secondary-container: #001f24;
--tertiary: #904d00;
--on-tertiary: #FFFFFF;
--tertiary-container: #fff0cb;
--on-tertiary-container: #2f1500;
--background: #fffefa;
--on-background: #32345d;
--surface: #f6f5f2;
--on-surface: #030865;
--outline: #767680;
--surface-variant: #e3e1ec;
--on-surface-variant: #46464f;
}`,
    "restore-ribbon": `.restore-ribbon .workspace-ribbon {
background-color: var(--lower-accent) !important;
}

.restore-ribbon .workspace-ribbon::before {
background-color: var(--upper-accent) !important;
}

.restore-ribbon .workspace-ribbon * {
color: var(--on-upper-accent) !important;
}`,
  },
};
