import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "publisher",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["lato"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 11;
  --accent-l: 50%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgb(255, 47, 0);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: transparent;
  --background-modifier-hover: transparent;
  --background-primary: rgb(26, 26, 26);
  --background-primary-alt: rgb(26, 26, 26);
  --background-secondary: rgb(26, 26, 26);
  --background-secondary-alt: rgb(26, 26, 26);
  --bases-cards-background: rgb(26, 26, 26);
  --bases-cards-cover-background: rgb(26, 26, 26);
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-group-heading-property-color: rgb(153, 153, 153);
  --bases-table-border-color: transparent;
  --bases-table-cell-background-active: rgb(26, 26, 26);
  --bases-table-cell-background-disabled: rgb(26, 26, 26);
  --bases-table-cell-background-selected: rgba(255, 47, 0, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px transparent;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 47, 0);
  --bases-table-group-background: rgb(26, 26, 26);
  --bases-table-header-background: rgb(26, 26, 26);
  --bases-table-header-background-hover: transparent;
  --bases-table-header-color: rgb(153, 153, 153);
  --bases-table-summary-background: rgb(26, 26, 26);
  --bases-table-summary-background-hover: transparent;
  --black-10: rgb(230, 230, 230);
  --black-100: rgb(0, 0, 0);
  --black-20: rgb(204, 204, 204);
  --black-30: rgb(179, 179, 179);
  --black-40: rgb(153, 153, 153);
  --black-50: rgb(128, 128, 128);
  --black-60: rgb(102, 102, 102);
  --black-70: rgb(77, 77, 77);
  --black-75: rgb(64, 64, 64);
  --black-80: rgb(51, 51, 51);
  --black-85: rgb(38, 38, 38);
  --black-90: rgb(26, 26, 26);
  --black-95: rgb(13, 13, 13);
  --blockquote-border-color: rgb(255, 47, 0);
  --blur-background: color-mix(in srgb, rgb(51, 51, 51) 65%, transparent) linear-gradient(rgb(51, 51, 51), color-mix(in srgb, rgb(51, 51, 51) 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 8px;
  --callout-border-width: 2px;
  --callout-radius: 8px;
  --canvas-background: rgb(26, 26, 26);
  --canvas-card-label-color: rgb(128, 128, 128);
  --caret-color: rgb(179, 179, 179);
  --checkbox-border-color: rgb(102, 102, 102);
  --checkbox-border-color-hover: rgb(102, 102, 102);
  --checkbox-color: rgb(0, 0, 0);
  --checkbox-color-hover: rgb(26, 26, 26);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checkbox-radius: 8px;
  --checkbox-size: 15px;
  --checklist-done-color: rgb(153, 153, 153);
  --clickable-icon-radius: 8px;
  --code-background: rgb(51, 51, 51);
  --code-bracket-background: transparent;
  --code-comment: rgb(128, 128, 128);
  --code-normal: rgb(204, 204, 204);
  --code-punctuation: rgb(153, 153, 153);
  --codeFont: var(--font-text);
  --collapse-icon-color: rgb(128, 128, 128);
  --collapse-icon-color-collapsed: rgb(255, 47, 0);
  --color-accent: rgb(255, 47, 0);
  --color-accent-1: hsl(8, 102%, 57.5%);
  --color-accent-2: hsl(6, 105%, 64.5%);
  --color-accent-hsl: 11, 100%, 50%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: transparent;
  --divider-color-hover: rgb(255, 47, 0);
  --drag-ghost-background: rgb(255, 255, 255);
  --drag-ghost-text-color: rgb(204, 204, 204);
  --dropdown-background: rgb(51, 51, 51);
  --dropdown-background-hover: rgb(26, 26, 26);
  --embed-border-start: 2px solid rgb(255, 47, 0);
  --file-header-background: rgb(26, 26, 26);
  --file-header-background-focused: rgb(26, 26, 26);
  --file-header-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(51, 51, 51);
  --flair-color: rgb(179, 179, 179);
  --font-interface: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Lato Light";
  --font-mermaid: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Times New Roman", Times, serif, 'Arial';
  --font-text: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Times New Roman", Times, serif;
  --footnote-id-color: rgb(153, 153, 153);
  --footnote-id-color-no-occurrences: rgb(128, 128, 128);
  --footnote-input-background-active: transparent;
  --graph-node: rgb(153, 153, 153);
  --graph-node-attachment: rgb(204, 204, 204);
  --graph-node-focused: rgb(255, 47, 0);
  --graph-node-tag: rgb(179, 179, 179);
  --graph-node-unresolved: rgb(128, 128, 128);
  --graph-text: rgb(179, 179, 179);
  --gray: var(--text-muted);
  --h1-line-height: 1.5rem;
  --h1-size: 1.5rem;
  --h1-weight: 425;
  --h2-line-height: 1.25rem;
  --h2-size: 1.375rem;
  --h2-weight: 415;
  --h3-line-height: 1.2rem;
  --h3-size: 1.25rem;
  --h3-weight: 400;
  --h4-line-height: 1.15rem;
  --h4-size: 1.125rem;
  --h4-weight: 390;
  --h5-line-height: 1.1rem;
  --h5-size: 1rem;
  --h5-weight: 380;
  --h6-size: .88rem;
  --h6-weight: 375;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(128, 128, 128);
  --highlight: var(--background-modifier-hover);
  --hr-color: rgb(153, 153, 153);
  --hr-thickness: 1px;
  --icon-color: rgb(204, 204, 204);
  --icon-color-active: rgb(255, 255, 255);
  --icon-color-focused: rgb(255, 255, 255);
  --icon-color-hover: rgb(255, 255, 255);
  --inline-title-line-height: 1.5rem;
  --inline-title-size: 1.5rem;
  --inline-title-weight: 425;
  --input-date-separator: rgb(128, 128, 128);
  --input-placeholder-color: rgb(128, 128, 128);
  --input-radius: 8px;
  --interactive-accent: rgb(255, 47, 0);
  --interactive-accent-hover: hsl(8, 102%, 57.5%);
  --interactive-accent-hsl: 11, 100%, 50%;
  --interactive-hover: rgb(26, 26, 26);
  --interactive-normal: rgb(51, 51, 51);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(179, 179, 179);
  --link-color-hover: rgb(204, 204, 204);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(179, 179, 179);
  --link-external-color-hover: rgb(204, 204, 204);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(128, 128, 128);
  --link-unresolved-decoration-color: rgba(255, 47, 0, 0.3);
  --link-unresolved-opacity: .4;
  --list-bullet-radius: 8px;
  --list-marker-color: rgb(128, 128, 128);
  --list-marker-color-collapsed: rgb(255, 47, 0);
  --list-marker-color-hover: rgb(153, 153, 153);
  --menu-background: rgb(26, 26, 26);
  --menu-border-color: transparent;
  --metadata-background-color: rgb(51, 51, 51);
  --metadata-border-radius: 8px;
  --metadata-gap: 2px;
  --metadata-input-background-active: transparent;
  --metadata-input-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(179, 179, 179);
  --metadata-label-background-active: transparent;
  --metadata-label-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(153, 153, 153);
  --metadata-label-text-color-hover: rgb(153, 153, 153);
  --metadata-padding: 2px;
  --metadata-property-background-active: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --metadata-property-radius: 8px;
  --metadata-property-radius-hover: 8px;
  --metadata-property-radius-hover-focus: 8px;
  --modal-background: rgb(26, 26, 26);
  --modal-radius: 8px;
  --nav-collapse-icon-color: rgb(204, 204, 204);
  --nav-collapse-icon-color-collapsed: rgb(255, 255, 255);
  --nav-heading-color: rgb(204, 204, 204);
  --nav-heading-color-colapsed-hover: rgb(255, 255, 255);
  --nav-heading-color-collapsed: rgb(204, 204, 204);
  --nav-heading-color-collapsed-hover: rgb(153, 153, 153);
  --nav-heading-color-hover: rgb(230, 230, 230);
  --nav-heading-weight: 425;
  --nav-indentation-guide-color: rgb(102, 102, 102);
  --nav-item-background-active: rgb(38, 38, 38);
  --nav-item-background-hover: rgb(38, 38, 38);
  --nav-item-background-selected: rgb(38, 38, 38);
  --nav-item-color: rgb(204, 204, 204);
  --nav-item-color-active: rgb(255, 255, 255);
  --nav-item-color-highlighted: rgb(230, 230, 230);
  --nav-item-color-hover: rgb(230, 230, 230);
  --nav-item-color-selected: rgb(255, 255, 255);
  --nav-item-weight: 425;
  --nav-tag-color: rgb(128, 128, 128);
  --nav-tag-color-active: rgb(153, 153, 153);
  --nav-tag-color-hover: rgb(153, 153, 153);
  --orange-10: rgb(51, 9, 0);
  --orange-100: rgb(255, 234, 229);
  --orange-20: rgb(102, 19, 0);
  --orange-30: rgb(153, 28, 0);
  --orange-40: rgb(204, 37, 0);
  --orange-50: rgb(255, 47, 0);
  --orange-60: rgb(255, 88, 51);
  --orange-70: rgb(255, 130, 102);
  --orange-80: rgb(255, 172, 153);
  --orange-90: rgb(255, 213, 204);
  --pdf-background: rgb(26, 26, 26);
  --pdf-page-background: rgb(26, 26, 26);
  --pdf-sidebar-background: rgb(26, 26, 26);
  --pill-background: rgb(38, 38, 38);
  --pill-background-hover: rgb(26, 26, 26);
  --pill-border-color: rgb(38, 38, 38);
  --pill-border-color-hover: rgb(26, 26, 26);
  --pill-color: rgb(204, 204, 204);
  --pill-color-hover: rgb(51, 51, 51);
  --pill-color-remove: rgb(128, 128, 128);
  --pill-color-remove-hover: rgb(255, 47, 0);
  --pill-radius: 8px;
  --prompt-background: rgb(26, 26, 26);
  --raised-background: color-mix(in srgb, rgb(51, 51, 51) 65%, transparent) linear-gradient(rgb(51, 51, 51), color-mix(in srgb, rgb(51, 51, 51) 65%, transparent));
  --ribbon-background: rgb(0, 0, 0);
  --ribbon-background-collapsed: rgb(0, 0, 0);
  --scrollbar-active-thumb-bg: rgb(51, 51, 51);
  --scrollbar-bg-color: rgb(102, 102, 102);
  --scrollbar-thumb-bg: rgb(102, 102, 102);
  --search-clear-button-color: rgb(153, 153, 153);
  --search-icon-color: rgb(204, 204, 204);
  --search-result-background: rgb(51, 51, 51);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(179, 179, 179);
  --setting-items-background: rgb(26, 26, 26);
  --shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  --slider-thumb-border-color: transparent;
  --slider-thumb-radius: 10px;
  --slider-track-background: rgb(255, 88, 51);
  --status-bar-background: rgb(26, 26, 26);
  --status-bar-border-color: transparent;
  --status-bar-text-color: rgb(204, 204, 204);
  --suggestion-background: rgb(26, 26, 26);
  --swatch-radius: 8px;
  --tab-background-active: rgb(38, 38, 38);
  --tab-container-background: rgb(26, 26, 26);
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 8px;
  --tab-radius-active: 8px;
  --tab-switcher-background: rgb(26, 26, 26);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(26, 26, 26), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 47, 0);
  --tab-text-color: rgb(204, 204, 204);
  --tab-text-color-active: rgb(153, 153, 153);
  --tab-text-color-focused: rgb(153, 153, 153);
  --tab-text-color-focused-active: rgb(230, 230, 230);
  --tab-text-color-focused-active-current: rgb(255, 88, 51);
  --tab-text-color-focused-highlighted: rgb(255, 88, 51);
  --table-background-color: rgb(102, 102, 102);
  --table-border-color: transparent;
  --table-drag-handle-background-active: rgb(255, 47, 0);
  --table-drag-handle-color: rgb(128, 128, 128);
  --table-header-background: rgb(38, 38, 38);
  --table-header-background-hover: rgb(26, 26, 26);
  --table-header-border-color: transparent;
  --table-header-color: rgb(204, 204, 204);
  --table-header-font: "Lato Light";
  --table-line-height: 2rem;
  --table-selection: rgba(255, 47, 0, 0.1);
  --table-selection-border-color: rgb(255, 47, 0);
  --tag-background: rgba(255, 47, 0, 0.1);
  --tag-background-hover: rgba(255, 47, 0, 0.2);
  --tag-border-color: rgba(255, 47, 0, 0.15);
  --tag-border-color-hover: rgba(255, 47, 0, 0.15);
  --tag-color: rgb(255, 47, 0);
  --tag-color-hover: rgb(255, 47, 0);
  --tag-radius: 8px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(255, 47, 0);
  --text-accent-hover: rgb(255, 88, 51);
  --text-faint: rgb(128, 128, 128);
  --text-muted: rgb(153, 153, 153);
  --text-normal: rgb(179, 179, 179);
  --text-selection: rgba(255, 47, 0, 0.33);
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(26, 26, 26);
  --titlebar-background-focused: rgb(26, 26, 26);
  --titlebar-text-color: rgb(204, 204, 204);
  --titlebar-text-color-focused: rgb(204, 204, 204);
  --toggle-border-width: 1px;
  --toggle-s-border-width: 1px;
  --vault-profile-actions-display: none;
  --vault-profile-color: rgb(204, 204, 204);
  --vault-profile-color-hover: rgb(255, 255, 255);
  --white-10: rgb(26, 26, 26);
  --white-100: rgb(255, 255, 255);
  --white-20: rgb(51, 51, 51);
  --white-30: rgb(77, 77, 77);
  --white-40: rgb(102, 102, 102);
  --white-50: rgb(128, 128, 128);
  --white-60: rgb(153, 153, 153);
  --white-70: rgb(179, 179, 179);
  --white-80: rgb(204, 204, 204);
  --white-85: rgb(217, 217, 217);
  --white-90: rgb(230, 230, 230);
  --white-92: rgb(235, 235, 235);
  --white-96: rgb(245, 245, 245);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
  color: rgb(179, 179, 179);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(179, 179, 179);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(13, 13, 13);
  color: rgb(179, 179, 179);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(179, 179, 179);
}`,
    typography: `body .page article p > b, b {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body .page article p > em, em {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body .page article p > i, i {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body .page article p > strong, strong {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body .text-highlight {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body del {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: line-through rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body p {
  color: rgb(153, 153, 153);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body a.internal.broken {
  color: rgb(128, 128, 128);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: rgba(255, 47, 0, 0.3);
  text-decoration-color: rgba(255, 47, 0, 0.3);
}`,
    lists: `body dd {
  color: rgb(179, 179, 179);
}

body dt {
  color: rgb(179, 179, 179);
}

body ol > li {
  color: rgb(179, 179, 179);
}

body ol.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body ul > li {
  color: rgb(179, 179, 179);
}

body ul.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
}

body blockquote {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body table {
  background-color: rgb(51, 51, 51);
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.312px;
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
}

body tr {
  background-color: rgb(38, 38, 38);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(51, 51, 51);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(51, 51, 51);
  color: rgb(179, 179, 179);
}

body pre > code, pre:has(> code) {
  background-color: rgb(51, 51, 51);
}

body pre:has(> code) {
  background-color: rgb(51, 51, 51);
}`,
    images: `body audio {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body figcaption {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body img {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body video {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .footnotes {
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

body .transclude {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(255, 47, 0);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body .transclude-inner {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(255, 47, 0);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: -22.5px;
  width: 15px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='*'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='-'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='/'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='>'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='?'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='I'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='S'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='b'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='c'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='d'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='f'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='i'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='k'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='l'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='p'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='u'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='w'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  padding-left: 10px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(179, 179, 179);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > * {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(179, 179, 179);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(179, 179, 179);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 47, 0, 0.1);
  border-bottom-color: rgba(255, 47, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 47, 0, 0.15);
  border-right-color: rgba(255, 47, 0, 0.15);
  border-top-color: rgba(255, 47, 0, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 47, 0);
}

body h1 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(179, 179, 179);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(26, 26, 26);
  border-left-width: 1px;
  border-right-color: rgb(26, 26, 26);
  border-right-width: 1px;
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 425;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(204, 204, 204);
}`,
    footer: `body footer {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(179, 179, 179);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body ul.section-ul {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(204, 204, 204);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(204, 204, 204);
}

body .darkmode svg {
  color: rgb(204, 204, 204);
  stroke: rgb(204, 204, 204);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .breadcrumb-element p {
  color: rgb(128, 128, 128);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

body .metadata {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(153, 153, 153);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(26, 26, 26);
}

body .page-header h2.page-title {
  color: rgb(179, 179, 179);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(179, 179, 179);
  text-decoration: underline dotted rgb(179, 179, 179);
}

body details {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body progress {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body sub {
  color: rgb(179, 179, 179);
}

body summary {
  color: rgb(179, 179, 179);
}

body sup {
  color: rgb(179, 179, 179);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 11;
  --accent-l: 50%;
  --accent-s: 100%;
  --background-modifier-active-hover: rgb(230, 230, 230);
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: transparent;
  --background-modifier-hover: transparent;
  --background-primary: rgb(255, 255, 255);
  --background-primary-alt: rgb(245, 245, 245);
  --background-secondary: rgb(255, 255, 255);
  --background-secondary-alt: rgb(255, 255, 255);
  --bases-cards-background: rgb(255, 255, 255);
  --bases-cards-cover-background: rgb(245, 245, 245);
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-group-heading-property-color: rgb(102, 102, 102);
  --bases-table-cell-background-active: rgb(255, 255, 255);
  --bases-table-cell-background-disabled: rgb(245, 245, 245);
  --bases-table-cell-background-selected: rgba(255, 47, 0, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px transparent;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(10, 101%, 53.75%);
  --bases-table-group-background: rgb(245, 245, 245);
  --bases-table-header-background: rgb(255, 255, 255);
  --bases-table-header-background-hover: transparent;
  --bases-table-header-color: rgb(102, 102, 102);
  --bases-table-summary-background: rgb(255, 255, 255);
  --bases-table-summary-background-hover: transparent;
  --black-10: rgb(230, 230, 230);
  --black-100: rgb(0, 0, 0);
  --black-20: rgb(204, 204, 204);
  --black-30: rgb(179, 179, 179);
  --black-40: rgb(153, 153, 153);
  --black-50: rgb(128, 128, 128);
  --black-60: rgb(102, 102, 102);
  --black-70: rgb(77, 77, 77);
  --black-75: rgb(64, 64, 64);
  --black-80: rgb(51, 51, 51);
  --black-85: rgb(38, 38, 38);
  --black-90: rgb(26, 26, 26);
  --black-95: rgb(13, 13, 13);
  --blockquote-border-color: hsl(10, 101%, 53.75%);
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 8px;
  --callout-border-width: 2px;
  --callout-radius: 8px;
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgb(128, 128, 128);
  --caret-color: rgb(77, 77, 77);
  --checkbox-border-color: rgb(51, 51, 51);
  --checkbox-border-color-hover: rgb(77, 77, 77);
  --checkbox-color: rgb(0, 0, 0);
  --checkbox-color-hover: rgb(26, 26, 26);
  --checkbox-marker-color: rgb(255, 255, 255);
  --checkbox-radius: 8px;
  --checkbox-size: 15px;
  --checklist-done-color: rgb(102, 102, 102);
  --clickable-icon-radius: 8px;
  --code-background: rgb(255, 255, 255);
  --code-bracket-background: transparent;
  --code-comment: rgb(128, 128, 128);
  --code-normal: rgb(26, 26, 26);
  --code-punctuation: rgb(102, 102, 102);
  --codeFont: var(--font-text);
  --collapse-icon-color: rgb(128, 128, 128);
  --collapse-icon-color-collapsed: rgb(255, 47, 0);
  --color-accent: rgb(255, 47, 0);
  --color-accent-1: hsl(10, 101%, 53.75%);
  --color-accent-2: hsl(8, 102%, 57.5%);
  --color-accent-hsl: 11, 100%, 50%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: transparent;
  --divider-color-hover: hsl(10, 101%, 53.75%);
  --drag-ghost-background: rgb(255, 213, 204);
  --drag-ghost-text-color: rgb(26, 26, 26);
  --dropdown-background: rgb(235, 235, 235);
  --dropdown-background-hover: rgb(255, 255, 255);
  --embed-block-shadow-hover: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  --embed-border-start: 2px solid hsl(10, 101%, 53.75%);
  --file-header-background: rgb(255, 255, 255);
  --file-header-background-focused: rgb(255, 255, 255);
  --file-header-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(230, 230, 230);
  --flair-color: rgb(77, 77, 77);
  --font-interface: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Lato Light";
  --font-mermaid: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Times New Roman", Times, serif, 'Arial';
  --font-text: '??', "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Times New Roman", Times, serif;
  --footnote-id-color: rgb(102, 102, 102);
  --footnote-id-color-no-occurrences: rgb(128, 128, 128);
  --footnote-input-background-active: transparent;
  --graph-node: rgb(51, 51, 51);
  --graph-node-attachment: rgb(0, 0, 0);
  --graph-node-focused: rgb(255, 47, 0);
  --graph-node-tag: rgb(0, 0, 0);
  --graph-node-unresolved: rgb(128, 128, 128);
  --graph-text: rgb(77, 77, 77);
  --gray: var(--text-muted);
  --h1-line-height: 1.5rem;
  --h1-size: 1.5rem;
  --h1-weight: 425;
  --h2-line-height: 1.25rem;
  --h2-size: 1.375rem;
  --h2-weight: 415;
  --h3-line-height: 1.2rem;
  --h3-size: 1.25rem;
  --h3-weight: 400;
  --h4-line-height: 1.15rem;
  --h4-size: 1.125rem;
  --h4-weight: 390;
  --h5-line-height: 1.1rem;
  --h5-size: 1rem;
  --h5-weight: 380;
  --h6-size: .88rem;
  --h6-weight: 375;
  --headerFont: var(--font-text);
  --heading-formatting: rgb(128, 128, 128);
  --highlight: var(--background-modifier-hover);
  --hr-color: rgb(51, 51, 51);
  --hr-thickness: 1px;
  --icon-color: rgb(51, 51, 51);
  --icon-color-active: rgb(0, 0, 0);
  --icon-color-focused: rgb(26, 26, 26);
  --icon-color-hover: rgb(26, 26, 26);
  --inline-title-line-height: 1.5rem;
  --inline-title-size: 1.5rem;
  --inline-title-weight: 425;
  --input-date-separator: rgb(128, 128, 128);
  --input-placeholder-color: rgb(128, 128, 128);
  --input-radius: 8px;
  --interactive-accent: hsl(10, 101%, 53.75%);
  --interactive-accent-hover: hsl(8, 102%, 57.5%);
  --interactive-accent-hsl: 11, 100%, 50%;
  --interactive-hover: rgb(255, 255, 255);
  --interactive-normal: rgb(230, 230, 230);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(77, 77, 77);
  --link-color-hover: rgb(0, 0, 0);
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: rgb(77, 77, 77);
  --link-external-color-hover: rgb(0, 0, 0);
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: rgb(128, 128, 128);
  --link-unresolved-decoration-color: rgb(51, 51, 51);
  --link-unresolved-opacity: .5;
  --list-bullet-radius: 8px;
  --list-marker-color: rgb(128, 128, 128);
  --list-marker-color-collapsed: rgb(255, 47, 0);
  --list-marker-color-hover: rgb(102, 102, 102);
  --menu-background: rgb(255, 255, 255);
  --menu-border-color: transparent;
  --metadata-border-radius: 8px;
  --metadata-gap: 2px;
  --metadata-input-background-active: transparent;
  --metadata-input-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(77, 77, 77);
  --metadata-label-background-active: transparent;
  --metadata-label-font: '??', "Lato Light", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(102, 102, 102);
  --metadata-label-text-color-hover: rgb(102, 102, 102);
  --metadata-padding: 2px;
  --metadata-property-background-active: transparent;
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --metadata-property-radius: 8px;
  --metadata-property-radius-hover: 8px;
  --metadata-property-radius-hover-focus: 8px;
  --modal-background: rgb(255, 255, 255);
  --modal-border-color: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  --modal-radius: 8px;
  --nav-collapse-icon-color: rgb(204, 204, 204);
  --nav-collapse-icon-color-collapsed: rgb(255, 255, 255);
  --nav-heading-color: rgb(204, 204, 204);
  --nav-heading-color-colapsed-hover: rgb(255, 255, 255);
  --nav-heading-color-collapsed: rgb(204, 204, 204);
  --nav-heading-color-collapsed-hover: rgb(102, 102, 102);
  --nav-heading-color-hover: rgb(230, 230, 230);
  --nav-heading-weight: 425;
  --nav-indentation-guide-color: rgb(102, 102, 102);
  --nav-item-background-active: rgb(51, 51, 51);
  --nav-item-background-hover: rgb(51, 51, 51);
  --nav-item-background-selected: rgb(51, 51, 51);
  --nav-item-color: rgb(204, 204, 204);
  --nav-item-color-active: rgb(255, 255, 255);
  --nav-item-color-highlighted: rgb(230, 230, 230);
  --nav-item-color-hover: rgb(230, 230, 230);
  --nav-item-color-selected: rgb(255, 255, 255);
  --nav-item-weight: 425;
  --nav-tag-color: rgb(128, 128, 128);
  --nav-tag-color-active: rgb(102, 102, 102);
  --nav-tag-color-hover: rgb(102, 102, 102);
  --orange-10: rgb(51, 9, 0);
  --orange-100: rgb(255, 234, 229);
  --orange-20: rgb(102, 19, 0);
  --orange-30: rgb(153, 28, 0);
  --orange-40: rgb(204, 37, 0);
  --orange-50: rgb(255, 47, 0);
  --orange-60: rgb(255, 88, 51);
  --orange-70: rgb(255, 130, 102);
  --orange-80: rgb(255, 172, 153);
  --orange-90: rgb(255, 213, 204);
  --pdf-background: rgb(255, 255, 255);
  --pdf-page-background: rgb(255, 255, 255);
  --pdf-sidebar-background: rgb(255, 255, 255);
  --pill-background: rgb(245, 245, 245);
  --pill-background-hover: rgb(235, 235, 235);
  --pill-border-color: rgb(230, 230, 230);
  --pill-border-color-hover: rgb(26, 26, 26);
  --pill-color: rgb(51, 51, 51);
  --pill-color-hover: rgb(51, 51, 51);
  --pill-color-remove: rgb(128, 128, 128);
  --pill-color-remove-hover: rgb(255, 47, 0);
  --pill-radius: 8px;
  --prompt-background: rgb(255, 255, 255);
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent));
  --ribbon-background: rgb(26, 26, 26);
  --ribbon-background-collapsed: rgb(26, 26, 26);
  --scrollbar-active-thumb-bg: rgb(51, 51, 51);
  --scrollbar-bg-color: rgb(102, 102, 102);
  --scrollbar-thumb-bg: rgb(102, 102, 102);
  --search-clear-button-color: rgb(102, 102, 102);
  --search-icon-color: rgb(51, 51, 51);
  --search-result-background: rgb(51, 51, 51);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(77, 77, 77);
  --setting-items-background: rgb(245, 245, 245);
  --shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  --slider-thumb-border-color: transparent;
  --slider-thumb-radius: 10px;
  --slider-track-background: rgb(51, 51, 51);
  --status-bar-background: rgb(38, 38, 38);
  --status-bar-border-color: transparent;
  --status-bar-text-color: rgb(204, 204, 204);
  --suggestion-background: rgb(255, 255, 255);
  --swatch-radius: 8px;
  --swatch-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  --tab-background-active: rgb(245, 245, 245);
  --tab-container-background: rgb(255, 255, 255);
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-radius: 8px;
  --tab-radius-active: 8px;
  --tab-switcher-background: rgb(255, 255, 255);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 255, 255), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 47, 0);
  --tab-text-color: rgb(51, 51, 51);
  --tab-text-color-active: rgb(102, 102, 102);
  --tab-text-color-focused: rgb(102, 102, 102);
  --tab-text-color-focused-active: rgb(0, 0, 0);
  --tab-text-color-focused-active-current: rgb(255, 47, 0);
  --tab-text-color-focused-highlighted: rgb(255, 47, 0);
  --table-background-color: rgb(51, 51, 51);
  --table-drag-handle-background-active: hsl(10, 101%, 53.75%);
  --table-drag-handle-color: rgb(128, 128, 128);
  --table-drag-handle-color-active: rgb(255, 255, 255);
  --table-header-background: rgb(245, 245, 245);
  --table-header-background-hover: rgb(235, 235, 235);
  --table-header-color: rgb(26, 26, 26);
  --table-header-font: "Lato Light";
  --table-line-height: 2rem;
  --table-selection: rgba(255, 47, 0, 0.1);
  --table-selection-border-color: hsl(10, 101%, 53.75%);
  --tag-background: rgba(255, 47, 0, 0.1);
  --tag-background-hover: rgba(255, 47, 0, 0.2);
  --tag-border-color: rgba(255, 47, 0, 0.15);
  --tag-border-color-hover: rgba(255, 47, 0, 0.15);
  --tag-color: rgb(255, 47, 0);
  --tag-color-hover: rgb(255, 47, 0);
  --tag-radius: 8px;
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(255, 47, 0);
  --text-accent-hover: rgb(255, 88, 51);
  --text-faint: rgb(128, 128, 128);
  --text-muted: rgb(102, 102, 102);
  --text-normal: rgb(77, 77, 77);
  --text-on-accent: rgb(255, 255, 255);
  --text-selection: rgba(255, 47, 0, 0.2);
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-text);
  --titlebar-background: rgb(255, 255, 255);
  --titlebar-background-focused: rgb(255, 255, 255);
  --titlebar-text-color: rgb(26, 26, 26);
  --titlebar-text-color-focused: rgb(0, 0, 0);
  --toggle-border-width: 1px;
  --toggle-s-border-width: 1px;
  --vault-profile-actions-display: none;
  --vault-profile-color: rgb(230, 230, 230);
  --vault-profile-color-hover: rgb(255, 255, 255);
  --white-10: rgb(26, 26, 26);
  --white-100: rgb(255, 255, 255);
  --white-20: rgb(51, 51, 51);
  --white-30: rgb(77, 77, 77);
  --white-40: rgb(102, 102, 102);
  --white-50: rgb(128, 128, 128);
  --white-60: rgb(153, 153, 153);
  --white-70: rgb(179, 179, 179);
  --white-80: rgb(204, 204, 204);
  --white-85: rgb(217, 217, 217);
  --white-90: rgb(230, 230, 230);
  --white-92: rgb(235, 235, 235);
  --white-96: rgb(245, 245, 245);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(77, 77, 77);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(77, 77, 77);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 38, 38);
  color: rgb(77, 77, 77);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(77, 77, 77);
}

body div#quartz-root {
  color: rgb(77, 77, 77);
}`,
    typography: `body .page article p > b, b {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body .page article p > em, em {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body .page article p > i, i {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body .page article p > strong, strong {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body .text-highlight {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body del {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body p {
  color: rgb(102, 102, 102);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    links: `body a.external, footer a {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body a.internal.broken {
  color: rgb(128, 128, 128);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    lists: `body dd {
  color: rgb(77, 77, 77);
}

body dt {
  color: rgb(77, 77, 77);
}

body ol > li {
  color: rgb(77, 77, 77);
}

body ol.overflow {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body ul > li {
  color: rgb(77, 77, 77);
}

body ul.overflow {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
}

body blockquote {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body table {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.312px;
}

body td {
  color: rgb(77, 77, 77);
}

body th {
  color: rgb(26, 26, 26);
}

body tr {
  background-color: rgb(245, 245, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  color: rgb(77, 77, 77);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 255, 255);
}

body pre:has(> code) {
  background-color: rgb(255, 255, 255);
}`,
    images: `body audio {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body figcaption {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body img {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body video {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body .footnotes {
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body .transclude {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(255, 58, 19);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body .transclude-inner {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(255, 58, 19);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(102, 102, 102);
  text-decoration: line-through rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

body input[type=checkbox] {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  margin-left: -22.5px;
  width: 15px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='*'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='-'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='/'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='>'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='?'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='I'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='S'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='b'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='c'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='d'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='f'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='i'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='k'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='l'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='p'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='u'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body li.task-list-item[data-task='w'] {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  padding-left: 10px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(77, 77, 77);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(77, 77, 77);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(77, 77, 77);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(77, 77, 77);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(77, 77, 77);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 47, 0, 0.1);
  border-bottom-color: rgba(255, 47, 0, 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 47, 0, 0.15);
  border-right-color: rgba(255, 47, 0, 0.15);
  border-top-color: rgba(255, 47, 0, 0.15);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 47, 0);
}

body h1 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(77, 77, 77);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 425;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 425;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(51, 51, 51);
}`,
    footer: `body footer {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(77, 77, 77);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body ul.section-ul {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(51, 51, 51);
}

body .darkmode svg {
  color: rgb(51, 51, 51);
  stroke: rgb(51, 51, 51);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

body .breadcrumb-element p {
  color: rgb(128, 128, 128);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body .metadata {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(102, 102, 102);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 2px;
}

body .metadata-properties {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(38, 38, 38);
}

body .page-header h2.page-title {
  color: rgb(77, 77, 77);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(77, 77, 77);
  text-decoration: underline dotted rgb(77, 77, 77);
}

body details {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body input[type=text] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
  font-family: "??", "Lato Light", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body progress {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body sub {
  color: rgb(77, 77, 77);
}

body summary {
  color: rgb(77, 77, 77);
}

body sup {
  color: rgb(77, 77, 77);
}`,
  },
};
