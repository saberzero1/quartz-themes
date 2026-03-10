import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "red-graphite",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 41;
  --accent-l: 71%;
  --background-modifier-active-hover: rgba(246, 205, 116, 0.1);
  --background-modifier-border: rgb(30, 35, 47);
  --background-modifier-border-focus: rgb(50, 58, 78);
  --background-modifier-border-hover: hsl(222, 22%, -50%);
  --background-modifier-form-field: hsl(222, 22%, -60%);
  --background-modifier-form-field-hover: hsl(222, 22%, -60%);
  --background-primary: rgb(40, 47, 62);
  --background-primary-alt: rgb(30, 35, 47);
  --background-secondary: rgb(30, 35, 47);
  --background-secondary-alt: hsl(222, 22%, -80%);
  --bases-cards-background: rgb(40, 47, 62);
  --bases-cards-cover-background: rgb(30, 35, 47);
  --bases-cards-shadow: 0 0 0 1px rgb(30, 35, 47);
  --bases-cards-shadow-hover: 0 0 0 1px hsl(222, 22%, -50%);
  --bases-embed-border-color: rgb(30, 35, 47);
  --bases-group-heading-property-color: rgb(208, 213, 225);
  --bases-table-border-color: rgb(80, 93, 124);
  --bases-table-cell-background-active: rgb(40, 47, 62);
  --bases-table-cell-background-disabled: rgb(30, 35, 47);
  --bases-table-cell-background-selected: rgba(246, 205, 116, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(50, 58, 78);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(246, 205, 116);
  --bases-table-group-background: rgb(30, 35, 47);
  --bases-table-header-background: rgb(40, 47, 62);
  --bases-table-header-color: rgb(208, 213, 225);
  --bases-table-summary-background: rgb(40, 47, 62);
  --blockquote-border-color: rgb(246, 205, 116);
  --blur-background: color-mix(in srgb, rgb(20, 23, 31) 65%, transparent) linear-gradient(rgb(20, 23, 31), color-mix(in srgb, rgb(20, 23, 31) 65%, transparent));
  --bodyFont: var(--font-text);
  --canvas-background: rgb(40, 47, 62);
  --canvas-card-label-color: rgb(177, 186, 205);
  --canvas-dot-pattern: hsl(222, 22%, -55%);
  --caret-color: rgb(239, 241, 245);
  --checkbox-border-color: rgb(177, 186, 205);
  --checkbox-border-color-hover: rgb(208, 213, 225);
  --checkbox-color: rgb(246, 205, 116);
  --checkbox-color-hover: rgb(250, 220, 168);
  --checkbox-marker-color: rgb(40, 47, 62);
  --checklist-done-color: rgb(208, 213, 225);
  --code-background: rgb(30, 35, 47);
  --code-block-border-color: rgb(20, 23, 31);
  --code-block-border-style: solid;
  --code-block-border-width: 1px;
  --code-border-color: rgb(30, 35, 47);
  --code-comment: rgb(177, 186, 205);
  --code-normal: rgb(239, 241, 245);
  --code-punctuation: rgb(208, 213, 225);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(177, 186, 205);
  --collapse-icon-color-collapsed: rgb(246, 205, 116);
  --color-accent: rgb(246, 205, 116);
  --color-accent-1: rgb(250, 220, 168);
  --color-accent-2: rgb(253, 238, 216);
  --color-accent-hsl: 41, 88%, 71%;
  --color-base-00: hsl(222, 22%, -85%);
  --color-base-05: hsl(222, 22%, -80%);
  --color-base-10: hsl(222, 22%, -75%);
  --color-base-100: rgb(30, 35, 47);
  --color-base-105: rgb(40, 47, 62);
  --color-base-110: rgb(50, 58, 78);
  --color-base-115: rgb(60, 70, 93);
  --color-base-120: rgb(70, 81, 109);
  --color-base-125: rgb(80, 93, 124);
  --color-base-130: rgb(90, 105, 140);
  --color-base-135: rgb(99, 116, 156);
  --color-base-140: rgb(115, 130, 165);
  --color-base-145: rgb(131, 144, 175);
  --color-base-15: hsl(222, 22%, -70%);
  --color-base-150: rgb(146, 158, 185);
  --color-base-155: rgb(162, 172, 195);
  --color-base-160: rgb(177, 186, 205);
  --color-base-165: rgb(193, 200, 215);
  --color-base-170: rgb(208, 213, 225);
  --color-base-175: rgb(224, 227, 235);
  --color-base-180: rgb(239, 241, 245);
  --color-base-185: rgb(255, 255, 255);
  --color-base-190: hsl(222, 22%, 105%);
  --color-base-195: hsl(222, 22%, 110%);
  --color-base-20: hsl(222, 22%, -65%);
  --color-base-200: hsl(222, 22%, 115%);
  --color-base-25: hsl(222, 22%, -60%);
  --color-base-30: hsl(222, 22%, -55%);
  --color-base-35: hsl(222, 22%, -50%);
  --color-base-40: hsl(222, 22%, -45%);
  --color-base-45: hsl(222, 22%, -40%);
  --color-base-50: hsl(222, 22%, -35%);
  --color-base-55: hsl(222, 22%, -30%);
  --color-base-60: hsl(222, 22%, -25%);
  --color-base-65: hsl(222, 22%, -20%);
  --color-base-70: hsl(222, 22%, -15%);
  --color-base-75: hsl(222, 22%, -10%);
  --color-base-80: hsl(222, 22%, -5%);
  --color-base-85: rgb(0, 0, 0);
  --color-base-90: rgb(10, 12, 16);
  --color-base-95: rgb(20, 23, 31);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(20, 23, 31);
  --divider-color-hover: rgb(246, 205, 116);
  --dropdown-background: rgb(20, 23, 31);
  --dropdown-background-hover: rgb(10, 12, 16);
  --embed-block-shadow-hover: 0 0 0 0 rgb(30, 35, 47), inset 0 0 0 0 rgb(30, 35, 47);
  --embed-border-start: 2px solid rgb(246, 205, 116);
  --file-header-background: rgb(40, 47, 62);
  --file-header-background-focused: rgb(40, 47, 62);
  --file-header-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(20, 23, 31);
  --flair-color: rgb(239, 241, 245);
  --font-interface: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-override: "Avenir";
  --font-mermaid: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "", '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-override: "";
  --font-print: '??', "Avenir", '??', 'Arial';
  --font-text: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-override: "Avenir";
  --footnote-divider-color: rgb(30, 35, 47);
  --footnote-id-color: rgb(208, 213, 225);
  --footnote-id-color-no-occurrences: rgb(177, 186, 205);
  --graph-line: hsl(222, 22%, -50%);
  --graph-node: rgb(208, 213, 225);
  --graph-node-focused: rgb(246, 205, 116);
  --graph-node-unresolved: rgb(177, 186, 205);
  --graph-text: rgb(239, 241, 245);
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --heading-formatting: rgb(177, 186, 205);
  --highlight: var(--background-modifier-active-hover);
  --hr-color: rgb(30, 35, 47);
  --icon-color: rgb(115, 130, 165);
  --icon-color-active: rgb(246, 205, 116);
  --icon-color-focused: rgb(246, 205, 116);
  --icon-color-hover: rgb(246, 205, 116);
  --input-date-separator: rgb(177, 186, 205);
  --input-placeholder-color: rgb(177, 186, 205);
  --interactive-accent: rgb(246, 205, 116);
  --interactive-accent-hover: rgb(250, 220, 168);
  --interactive-accent-hsl: 41, 88%, 71%;
  --interactive-hover: rgb(10, 12, 16);
  --interactive-normal: rgb(20, 23, 31);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(246, 205, 116);
  --link-color-hover: rgb(253, 238, 216);
  --link-external-color: rgb(246, 205, 116);
  --link-external-color-hover: rgb(253, 238, 216);
  --link-unresolved-color: rgb(246, 205, 116);
  --link-unresolved-decoration-color: rgba(246, 205, 116, 0.3);
  --list-marker-color: rgb(246, 205, 116);
  --list-marker-color-collapsed: rgb(246, 205, 116);
  --list-marker-color-hover: rgb(208, 213, 225);
  --menu-background: rgb(30, 35, 47);
  --menu-border-color: hsl(222, 22%, -50%);
  --metadata-border-color: rgb(30, 35, 47);
  --metadata-divider-color: rgb(30, 35, 47);
  --metadata-input-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(239, 241, 245);
  --metadata-label-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(208, 213, 225);
  --metadata-label-text-color-hover: rgb(208, 213, 225);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(50, 58, 78);
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(222, 22%, -50%);
  --modal-background: rgb(40, 47, 62);
  --modal-border-color: hsl(222, 22%, -45%);
  --modal-border-width: 0;
  --nav-collapse-icon-color: rgb(246, 205, 116);
  --nav-collapse-icon-color-collapsed: rgb(246, 205, 116);
  --nav-heading-color: rgb(239, 241, 245);
  --nav-heading-color-collapsed: rgb(177, 186, 205);
  --nav-heading-color-collapsed-hover: rgb(208, 213, 225);
  --nav-heading-color-hover: rgb(239, 241, 245);
  --nav-indentation-guide-color: rgb(50, 58, 78);
  --nav-item-background-active: rgb(246, 205, 116);
  --nav-item-background-hover: rgb(246, 205, 116);
  --nav-item-background-selected: rgba(246, 205, 116, 0.15);
  --nav-item-color: rgb(177, 186, 205);
  --nav-item-color-active: hsl(222, 22%, -85%);
  --nav-item-color-highlighted: rgb(246, 205, 116);
  --nav-item-color-hover: hsl(222, 22%, -85%);
  --nav-item-color-selected: hsl(222, 22%, -85%);
  --nav-item-size: 15px;
  --nav-tag-color: rgb(177, 186, 205);
  --nav-tag-color-active: rgb(208, 213, 225);
  --nav-tag-color-hover: rgb(208, 213, 225);
  --pdf-background: rgb(40, 47, 62);
  --pdf-page-background: rgb(40, 47, 62);
  --pdf-shadow: 0 0 0 1px rgb(30, 35, 47);
  --pdf-sidebar-background: rgb(40, 47, 62);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(30, 35, 47);
  --pill-border-color: rgb(30, 35, 47);
  --pill-border-color-hover: hsl(222, 22%, -50%);
  --pill-color: rgb(208, 213, 225);
  --pill-color-hover: rgb(239, 241, 245);
  --pill-color-remove: rgb(177, 186, 205);
  --pill-color-remove-hover: rgb(246, 205, 116);
  --prompt-background: rgb(40, 47, 62);
  --prompt-border-color: hsl(222, 22%, -45%);
  --raised-background: color-mix(in srgb, rgb(20, 23, 31) 65%, transparent) linear-gradient(rgb(20, 23, 31), color-mix(in srgb, rgb(20, 23, 31) 65%, transparent));
  --red-graphite-accent-color-h: 41;
  --red-graphite-accent-color-l: 71%;
  --red-graphite-accent-color-s: 88%;
  --red-graphite-base-color-h: 222;
  --red-graphite-base-color-l: 15%;
  --red-graphite-base-color-s: 22%;
  --red-graphite-interface-font: "Avenir";
  --red-graphite-monospace-font: "";
  --red-graphite-text-font: "Avenir";
  --ribbon-background: rgb(20, 23, 31);
  --ribbon-background-collapsed: rgb(20, 23, 31);
  --search-clear-button-color: rgb(208, 213, 225);
  --search-icon-color: rgb(208, 213, 225);
  --search-result-background: rgb(40, 47, 62);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(239, 241, 245);
  --setting-items-background: rgb(30, 35, 47);
  --setting-items-border-color: rgb(30, 35, 47);
  --slider-thumb-border-color: hsl(222, 22%, -50%);
  --slider-track-background: rgb(30, 35, 47);
  --status-bar-background: rgb(20, 23, 31);
  --status-bar-border-color: rgb(20, 23, 31);
  --status-bar-text-color: rgb(208, 213, 225);
  --suggestion-background: rgb(40, 47, 62);
  --tab-background-active: rgb(40, 47, 62);
  --tab-container-background: rgb(30, 35, 47);
  --tab-divider-color: rgb(30, 35, 47);
  --tab-outline-color: rgb(20, 23, 31);
  --tab-outline-width: 0px;
  --tab-switcher-background: rgb(30, 35, 47);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(30, 35, 47), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(246, 205, 116);
  --tab-text-color: rgb(177, 186, 205);
  --tab-text-color-active: rgb(208, 213, 225);
  --tab-text-color-focused: rgb(177, 186, 205);
  --tab-text-color-focused-active: rgb(208, 213, 225);
  --tab-text-color-focused-active-current: rgb(239, 241, 245);
  --tab-text-color-focused-highlighted: rgb(246, 205, 116);
  --table-add-button-border-color: rgb(30, 35, 47);
  --table-border-color: rgb(80, 93, 124);
  --table-drag-handle-background-active: rgb(246, 205, 116);
  --table-drag-handle-color: rgb(177, 186, 205);
  --table-drag-handle-color-active: rgb(30, 35, 47);
  --table-header-background: rgb(70, 81, 109);
  --table-header-background-hover: rgb(70, 81, 109);
  --table-header-border-color: rgb(80, 93, 124);
  --table-header-color: hsl(222, 22%, 115%);
  --table-selection: rgba(246, 205, 116, 0.1);
  --table-selection-border-color: rgb(246, 205, 116);
  --tag-background: rgba(246, 205, 116, 0.1);
  --tag-background-hover: rgba(246, 205, 116, 0.2);
  --tag-border-color: rgba(246, 205, 116, 0.15);
  --tag-border-color-hover: rgba(246, 205, 116, 0.15);
  --tag-color: rgb(246, 205, 116);
  --tag-color-hover: rgb(246, 205, 116);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(246, 205, 116);
  --text-accent-hover: rgb(253, 238, 216);
  --text-faint: rgb(177, 186, 205);
  --text-muted: rgb(208, 213, 225);
  --text-normal: rgb(239, 241, 245);
  --text-on-accent: rgb(30, 35, 47);
  --text-selection: rgba(246, 205, 116, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --theme-base-color-h: 222;
  --theme-base-color-l: 15%;
  --theme-base-color-s: 22%;
  --titleFont: var(--font-text);
  --titlebar-background: rgb(20, 23, 31);
  --titlebar-background-focused: rgb(20, 23, 31);
  --titlebar-border-color: rgb(30, 35, 47);
  --titlebar-text-color: rgb(177, 186, 205);
  --titlebar-text-color-focused: rgb(177, 186, 205);
  --titlebar-text-weight: 400;
  --vault-name-color: rgb(246, 205, 116);
  --vault-name-font-size: 15px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(177, 186, 205);
  --vault-profile-color-hover: rgb(177, 186, 205);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 47, 62);
  color: rgb(239, 241, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(20, 23, 31);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 35, 47);
  border-left-color: rgb(20, 23, 31);
  color: rgb(239, 241, 245);
}

body div#quartz-root {
  background-color: rgb(40, 47, 62);
  color: rgb(239, 241, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body .page article p > em, em {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body .page article p > i, i {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body .page article p > strong, strong {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body .text-highlight {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body del {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: line-through rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body p {
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 213, 225) none 0px;
  text-decoration: rgb(208, 213, 225);
  text-decoration-color: rgb(208, 213, 225);
}`,
    links: `body a.external, footer a {
  color: rgb(246, 205, 116);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 205, 116) none 0px;
  text-decoration: underline rgb(246, 205, 116);
  text-decoration-color: rgb(246, 205, 116);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(246, 205, 116);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 205, 116) none 0px;
  text-decoration: underline rgb(246, 205, 116);
  text-decoration-color: rgb(246, 205, 116);
}

body a.internal.broken {
  color: rgb(246, 205, 116);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 205, 116) none 0px;
  text-decoration: underline rgba(246, 205, 116, 0.3);
  text-decoration-color: rgba(246, 205, 116, 0.3);
}`,
    lists: `body dd {
  color: rgb(239, 241, 245);
}

body dt {
  color: rgb(239, 241, 245);
}

body ol > li {
  color: rgb(239, 241, 245);
}

body ol.overflow {
  background-color: rgb(40, 47, 62);
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body ul > li {
  color: rgb(239, 241, 245);
}

body ul.overflow {
  background-color: rgb(40, 47, 62);
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(177, 186, 205);
  text-decoration: rgb(177, 186, 205);
}

body blockquote {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body table {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body td {
  border-bottom-color: rgb(80, 93, 124);
  border-left-color: rgb(80, 93, 124);
  border-right-color: rgb(80, 93, 124);
  border-top-color: rgb(80, 93, 124);
  color: rgb(239, 241, 245);
}

body th {
  border-bottom-color: rgb(80, 93, 124);
  border-left-color: rgb(80, 93, 124);
  border-right-color: rgb(80, 93, 124);
  border-top-color: rgb(80, 93, 124);
  color: rgb(255, 255, 255);
}

body tr {
  background-color: rgb(70, 81, 109);
}`,
    code: `body code {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
  font-family: "", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
}

body pre > code, pre:has(> code) {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
}

body pre:has(> code) {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
}`,
    images: `body audio {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body figcaption {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body img {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body video {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    embeds: `body .file-embed {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(208, 213, 225);
  border-left-color: rgb(208, 213, 225);
  border-right-color: rgb(208, 213, 225);
  border-top-color: rgb(208, 213, 225);
}

body .footnotes {
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

body .transclude {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(246, 205, 116);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body .transclude-inner {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(246, 205, 116);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(208, 213, 225);
  text-decoration: line-through rgb(208, 213, 225);
  text-decoration-color: rgb(208, 213, 225);
}

body input[type=checkbox] {
  border-bottom-color: rgb(177, 186, 205);
  border-left-color: rgb(177, 186, 205);
  border-right-color: rgb(177, 186, 205);
  border-top-color: rgb(177, 186, 205);
}

body li.task-list-item[data-task='!'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='/'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(239, 241, 245);
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}`,
    search: `body .search > .search-button {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 47, 62);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(239, 241, 245) none 0px;
  text-decoration: rgb(239, 241, 245);
  text-decoration-color: rgb(239, 241, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(239, 241, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(239, 241, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(239, 241, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(239, 241, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(246, 205, 116, 0.1);
  border-bottom-color: rgba(246, 205, 116, 0.15);
  border-left-color: rgba(246, 205, 116, 0.15);
  border-right-color: rgba(246, 205, 116, 0.15);
  border-top-color: rgba(246, 205, 116, 0.15);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(246, 205, 116);
}

body h1 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(20, 23, 31);
  border-left-color: rgb(20, 23, 31);
  border-right-color: rgb(20, 23, 31);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 47, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 47, 62);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(177, 186, 205);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(177, 186, 205);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(177, 186, 205);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(246, 205, 116);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 130, 165);
  border-left-color: rgb(115, 130, 165);
  border-right-color: rgb(115, 130, 165);
  border-top-color: rgb(115, 130, 165);
  color: rgb(115, 130, 165);
}`,
    footer: `body footer {
  background-color: rgb(20, 23, 31);
  border-bottom-color: rgb(20, 23, 31);
  border-left-color: rgb(20, 23, 31);
  border-right-color: rgb(20, 23, 31);
  border-top-color: rgb(20, 23, 31);
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(208, 213, 225);
  text-decoration: rgb(208, 213, 225);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(177, 186, 205);
  text-decoration: rgb(177, 186, 205);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body li.section-li > .section .meta {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(177, 186, 205);
  text-decoration: rgb(177, 186, 205);
}

body ul.section-ul {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(115, 130, 165);
  border-left-color: rgb(115, 130, 165);
  border-right-color: rgb(115, 130, 165);
  border-top-color: rgb(115, 130, 165);
  color: rgb(115, 130, 165);
}

body .darkmode svg {
  color: rgb(115, 130, 165);
  stroke: rgb(115, 130, 165);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(208, 213, 225);
  border-left-color: rgb(208, 213, 225);
  border-right-color: rgb(208, 213, 225);
  border-top-color: rgb(208, 213, 225);
  color: rgb(208, 213, 225);
}

body .breadcrumb-element p {
  color: rgb(177, 186, 205);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
}

body .metadata {
  border-bottom-color: rgb(30, 35, 47);
  border-left-color: rgb(30, 35, 47);
  border-right-color: rgb(30, 35, 47);
  border-top-color: rgb(30, 35, 47);
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(208, 213, 225);
  border-left-color: rgb(208, 213, 225);
  border-right-color: rgb(208, 213, 225);
  border-top-color: rgb(208, 213, 225);
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(20, 23, 31);
}

body .page-header h2.page-title {
  color: rgb(239, 241, 245);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(239, 241, 245);
  text-decoration: underline dotted rgb(239, 241, 245);
}

body details {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body input[type=text] {
  border-bottom-color: rgb(208, 213, 225);
  border-left-color: rgb(208, 213, 225);
  border-right-color: rgb(208, 213, 225);
  border-top-color: rgb(208, 213, 225);
  color: rgb(208, 213, 225);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(30, 35, 47);
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
  color: rgb(239, 241, 245);
  font-family: "", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(239, 241, 245);
  border-right-color: rgb(239, 241, 245);
  border-top-color: rgb(239, 241, 245);
}

body sub {
  color: rgb(239, 241, 245);
}

body summary {
  color: rgb(239, 241, 245);
}

body sup {
  color: rgb(239, 241, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 2;
  --accent-l: 54%;
  --accent-s: 56%;
  --background-modifier-active-hover: rgba(203, 76, 72, 0.1);
  --background-modifier-border: rgb(220, 222, 224);
  --background-modifier-border-focus: rgb(233, 235, 236);
  --background-modifier-border-hover: rgb(206, 210, 212);
  --background-modifier-form-field: hsl(204, 6%, 117%);
  --background-modifier-form-field-hover: hsl(204, 6%, 117%);
  --background-primary: rgb(247, 247, 248);
  --background-primary-alt: hsl(204, 6%, 117%);
  --background-secondary: rgb(41, 44, 46);
  --background-secondary-alt: hsl(204, 6%, 112%);
  --bases-cards-background: rgb(247, 247, 248);
  --bases-cards-cover-background: hsl(204, 6%, 117%);
  --bases-cards-shadow: 0 0 0 1px rgb(220, 222, 224);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(206, 210, 212);
  --bases-embed-border-color: rgb(220, 222, 224);
  --bases-group-heading-property-color: rgb(113, 121, 127);
  --bases-table-border-color: rgb(166, 172, 176);
  --bases-table-cell-background-active: rgb(247, 247, 248);
  --bases-table-cell-background-disabled: hsl(204, 6%, 117%);
  --bases-table-cell-background-selected: rgba(203, 76, 72, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(233, 235, 236);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(209, 89, 87);
  --bases-table-group-background: hsl(204, 6%, 117%);
  --bases-table-header-background: rgb(247, 247, 248);
  --bases-table-header-color: rgb(113, 121, 127);
  --bases-table-summary-background: rgb(247, 247, 248);
  --blockquote-border-color: rgb(209, 89, 87);
  --blur-background: color-mix(in srgb, rgb(247, 247, 248) 65%, transparent) linear-gradient(rgb(247, 247, 248), color-mix(in srgb, rgb(247, 247, 248) 65%, transparent));
  --bodyFont: var(--font-text);
  --canvas-background: rgb(247, 247, 248);
  --canvas-card-label-color: rgb(139, 147, 152);
  --canvas-dot-pattern: rgb(220, 222, 224);
  --caret-color: rgb(41, 44, 46);
  --checkbox-border-color: rgb(139, 147, 152);
  --checkbox-border-color-hover: rgb(113, 121, 127);
  --checkbox-color: rgb(209, 89, 87);
  --checkbox-color-hover: rgb(213, 103, 105);
  --checkbox-marker-color: rgb(247, 247, 248);
  --checklist-done-color: rgb(113, 121, 127);
  --code-background: hsl(204, 6%, 117%);
  --code-block-border-color: rgb(193, 197, 200);
  --code-block-border-style: solid;
  --code-block-border-width: 1px;
  --code-border-color: rgb(220, 222, 224);
  --code-comment: rgb(139, 147, 152);
  --code-normal: rgb(41, 44, 46);
  --code-punctuation: rgb(113, 121, 127);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(139, 147, 152);
  --collapse-icon-color-collapsed: rgb(203, 76, 72);
  --color-accent: rgb(203, 76, 72);
  --color-accent-1: rgb(209, 89, 87);
  --color-accent-2: rgb(213, 103, 105);
  --color-accent-hsl: 2, 56%, 54%;
  --color-base-00: hsl(204, 6%, 117%);
  --color-base-05: hsl(204, 6%, 112%);
  --color-base-10: hsl(204, 6%, 107%);
  --color-base-100: rgb(41, 44, 46);
  --color-base-105: rgb(29, 31, 32);
  --color-base-110: rgb(17, 18, 19);
  --color-base-115: rgb(5, 5, 5);
  --color-base-120: hsl(204, 6%, -3%);
  --color-base-125: hsl(204, 6%, -8%);
  --color-base-130: hsl(204, 6%, -13%);
  --color-base-135: hsl(204, 6%, -18%);
  --color-base-140: hsl(204, 6%, -23%);
  --color-base-145: hsl(204, 6%, -28%);
  --color-base-15: hsl(204, 6%, 102%);
  --color-base-150: hsl(204, 6%, -33%);
  --color-base-155: hsl(204, 6%, -38%);
  --color-base-160: hsl(204, 6%, -43%);
  --color-base-165: hsl(204, 6%, -48%);
  --color-base-170: hsl(204, 6%, -53%);
  --color-base-175: hsl(204, 6%, -58%);
  --color-base-180: hsl(204, 6%, -63%);
  --color-base-185: hsl(204, 6%, -68%);
  --color-base-190: hsl(204, 6%, -73%);
  --color-base-195: hsl(204, 6%, -78%);
  --color-base-20: rgb(247, 247, 248);
  --color-base-200: hsl(204, 6%, -83%);
  --color-base-25: rgb(233, 235, 236);
  --color-base-30: rgb(220, 222, 224);
  --color-base-35: rgb(206, 210, 212);
  --color-base-40: rgb(193, 197, 200);
  --color-base-45: rgb(179, 184, 188);
  --color-base-50: rgb(166, 172, 176);
  --color-base-55: rgb(152, 159, 164);
  --color-base-60: rgb(139, 147, 152);
  --color-base-65: rgb(125, 134, 140);
  --color-base-70: rgb(113, 121, 127);
  --color-base-75: rgb(101, 108, 114);
  --color-base-80: rgb(89, 95, 100);
  --color-base-85: rgb(77, 83, 86);
  --color-base-90: rgb(65, 70, 73);
  --color-base-95: rgb(53, 57, 59);
  --color-text-heading: rgb(193, 197, 200);
  --color-text-title: rgb(193, 197, 200);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(53, 57, 59);
  --divider-color-hover: rgb(209, 89, 87);
  --dropdown-background: hsl(204, 6%, 117%);
  --dropdown-background-hover: hsl(204, 6%, 117%);
  --embed-block-shadow-hover: 0 0 0 0 rgb(220, 222, 224), inset 0 0 0 0 rgb(220, 222, 224);
  --embed-border-start: 2px solid rgb(209, 89, 87);
  --file-header-background: rgb(247, 247, 248);
  --file-header-background-focused: rgb(247, 247, 248);
  --file-header-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: hsl(204, 6%, 117%);
  --flair-color: rgb(41, 44, 46);
  --font-interface: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-override: "Avenir";
  --font-mermaid: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "", '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-override: "";
  --font-print: '??', "Avenir", '??', 'Arial';
  --font-text: "Avenir", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-override: "Avenir";
  --footnote-divider-color: rgb(220, 222, 224);
  --footnote-id-color: rgb(113, 121, 127);
  --footnote-id-color-no-occurrences: rgb(139, 147, 152);
  --graph-line: rgb(206, 210, 212);
  --graph-node: rgb(113, 121, 127);
  --graph-node-focused: rgb(203, 76, 72);
  --graph-node-unresolved: rgb(139, 147, 152);
  --graph-text: rgb(41, 44, 46);
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --heading-formatting: rgb(139, 147, 152);
  --highlight: var(--background-modifier-active-hover);
  --hr-color: rgb(220, 222, 224);
  --icon-color: rgb(139, 147, 152);
  --icon-color-active: rgb(203, 76, 72);
  --icon-color-focused: rgb(203, 76, 72);
  --icon-color-hover: rgb(203, 76, 72);
  --input-date-separator: rgb(139, 147, 152);
  --input-placeholder-color: rgb(139, 147, 152);
  --interactive-accent: rgb(209, 89, 87);
  --interactive-accent-hover: rgb(213, 103, 105);
  --interactive-accent-hsl: 2, 56%, 54%;
  --interactive-hover: hsl(204, 6%, 117%);
  --interactive-normal: hsl(204, 6%, 117%);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(203, 76, 72);
  --link-color-hover: rgb(213, 103, 105);
  --link-external-color: rgb(203, 76, 72);
  --link-external-color-hover: rgb(213, 103, 105);
  --link-unresolved-color: rgb(203, 76, 72);
  --link-unresolved-decoration-color: rgba(203, 76, 72, 0.3);
  --list-marker-color: rgb(203, 76, 72);
  --list-marker-color-collapsed: rgb(203, 76, 72);
  --list-marker-color-hover: rgb(113, 121, 127);
  --menu-background: rgb(41, 44, 46);
  --menu-border-color: rgb(206, 210, 212);
  --metadata-border-color: rgb(220, 222, 224);
  --metadata-divider-color: rgb(220, 222, 224);
  --metadata-input-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(41, 44, 46);
  --metadata-label-font: "Avenir", '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(113, 121, 127);
  --metadata-label-text-color-hover: rgb(113, 121, 127);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(233, 235, 236);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(206, 210, 212);
  --mk-ui-border: rgb(65, 70, 73);
  --mk-ui-text-secondary: rgb(193, 197, 200);
  --modal-background: rgb(247, 247, 248);
  --modal-border-color: rgb(193, 197, 200);
  --modal-border-width: 0;
  --nav-collapse-icon-color: rgb(203, 76, 72);
  --nav-collapse-icon-color-collapsed: rgb(203, 76, 72);
  --nav-heading-color: rgb(41, 44, 46);
  --nav-heading-color-collapsed: rgb(139, 147, 152);
  --nav-heading-color-collapsed-hover: rgb(113, 121, 127);
  --nav-heading-color-hover: rgb(41, 44, 46);
  --nav-indentation-guide-color: rgb(65, 70, 73);
  --nav-item-background-active: rgb(209, 89, 87);
  --nav-item-background-hover: rgb(209, 89, 87);
  --nav-item-background-selected: rgba(203, 76, 72, 0.15);
  --nav-item-color: rgb(193, 197, 200);
  --nav-item-color-active: hsl(204, 6%, 117%);
  --nav-item-color-highlighted: rgb(203, 76, 72);
  --nav-item-color-hover: hsl(204, 6%, 117%);
  --nav-item-color-selected: hsl(204, 6%, 117%);
  --nav-item-size: 0.933em;
  --nav-tag-color: rgb(139, 147, 152);
  --nav-tag-color-active: rgb(113, 121, 127);
  --nav-tag-color-hover: rgb(113, 121, 127);
  --pdf-background: rgb(247, 247, 248);
  --pdf-page-background: rgb(247, 247, 248);
  --pdf-sidebar-background: rgb(247, 247, 248);
  --pill-border-color: rgb(220, 222, 224);
  --pill-border-color-hover: rgb(206, 210, 212);
  --pill-color: rgb(113, 121, 127);
  --pill-color-hover: rgb(41, 44, 46);
  --pill-color-remove: rgb(139, 147, 152);
  --pill-color-remove-hover: rgb(203, 76, 72);
  --prompt-background: rgb(247, 247, 248);
  --prompt-border-color: rgb(193, 197, 200);
  --raised-background: color-mix(in srgb, rgb(247, 247, 248) 65%, transparent) linear-gradient(rgb(247, 247, 248), color-mix(in srgb, rgb(247, 247, 248) 65%, transparent));
  --red-graphite-accent-color-h: 2;
  --red-graphite-accent-color-l: 54%;
  --red-graphite-accent-color-s: 56%;
  --red-graphite-base-color-h: 204;
  --red-graphite-base-color-l: 17%;
  --red-graphite-base-color-s: 6%;
  --red-graphite-interface-font: "Avenir";
  --red-graphite-monospace-font: "";
  --red-graphite-text-font: "Avenir";
  --ribbon-background: rgb(53, 57, 59);
  --ribbon-background-collapsed: rgb(53, 57, 59);
  --search-clear-button-color: rgb(113, 121, 127);
  --search-icon-color: rgb(113, 121, 127);
  --search-result-background: rgb(247, 247, 248);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(41, 44, 46);
  --setting-items-background: hsl(204, 6%, 117%);
  --setting-items-border-color: rgb(220, 222, 224);
  --slider-thumb-border-color: rgb(206, 210, 212);
  --slider-track-background: rgb(220, 222, 224);
  --status-bar-background: rgb(53, 57, 59);
  --status-bar-border-color: rgb(53, 57, 59);
  --status-bar-text-color: rgb(113, 121, 127);
  --suggestion-background: rgb(247, 247, 248);
  --tab-background-active: rgb(247, 247, 248);
  --tab-container-background: rgb(41, 44, 46);
  --tab-divider-color: rgb(41, 44, 46);
  --tab-outline-color: rgb(139, 147, 152);
  --tab-outline-width: 0px;
  --tab-switcher-background: rgb(41, 44, 46);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(41, 44, 46), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(203, 76, 72);
  --tab-text-color: rgb(139, 147, 152);
  --tab-text-color-active: rgb(113, 121, 127);
  --tab-text-color-focused: rgb(139, 147, 152);
  --tab-text-color-focused-active: rgb(113, 121, 127);
  --tab-text-color-focused-active-current: rgb(41, 44, 46);
  --tab-text-color-focused-highlighted: rgb(203, 76, 72);
  --table-add-button-border-color: rgb(220, 222, 224);
  --table-border-color: rgb(166, 172, 176);
  --table-drag-handle-background-active: rgb(209, 89, 87);
  --table-drag-handle-color: rgb(139, 147, 152);
  --table-drag-handle-color-active: hsl(204, 6%, 117%);
  --table-header-background: rgb(220, 222, 224);
  --table-header-background-hover: rgb(220, 222, 224);
  --table-header-border-color: rgb(166, 172, 176);
  --table-header-color: rgb(41, 44, 46);
  --table-selection: rgba(203, 76, 72, 0.1);
  --table-selection-border-color: rgb(209, 89, 87);
  --tag-background: rgba(203, 76, 72, 0.1);
  --tag-background-hover: rgba(203, 76, 72, 0.2);
  --tag-border-color: rgba(203, 76, 72, 0.15);
  --tag-border-color-hover: rgba(203, 76, 72, 0.15);
  --tag-color: rgb(203, 76, 72);
  --tag-color-hover: rgb(203, 76, 72);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(203, 76, 72);
  --text-accent-hover: rgb(213, 103, 105);
  --text-faint: rgb(139, 147, 152);
  --text-muted: rgb(113, 121, 127);
  --text-normal: rgb(41, 44, 46);
  --text-on-accent: hsl(204, 6%, 117%);
  --text-selection: rgba(203, 76, 72, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --theme-base-color-h: 204;
  --theme-base-color-l: 17%;
  --theme-base-color-s: 6%;
  --titleFont: var(--font-text);
  --titlebar-background: rgb(53, 57, 59);
  --titlebar-background-focused: rgb(53, 57, 59);
  --titlebar-border-color: rgb(220, 222, 224);
  --titlebar-text-color: rgb(139, 147, 152);
  --titlebar-text-color-focused: rgb(139, 147, 152);
  --titlebar-text-weight: 400;
  --vault-name-color: rgb(203, 76, 72);
  --vault-name-font-size: 15px;
  --vault-name-font-weight: 500;
  --vault-profile-color: rgb(193, 197, 200);
  --vault-profile-color-hover: rgb(193, 197, 200);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 247, 248);
  color: rgb(41, 44, 46);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(53, 57, 59);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(41, 44, 46);
  border-left-color: rgb(53, 57, 59);
  color: rgb(41, 44, 46);
}

body div#quartz-root {
  background-color: rgb(247, 247, 248);
  color: rgb(41, 44, 46);
}`,
    typography: `body .page article p > b, b {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body .page article p > em, em {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body .page article p > i, i {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body .page article p > strong, strong {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body .text-highlight {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body del {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: line-through rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body p {
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(113, 121, 127) none 0px;
  text-decoration: rgb(113, 121, 127);
  text-decoration-color: rgb(113, 121, 127);
}`,
    links: `body a.external, footer a {
  color: rgb(203, 76, 72);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 76, 72) none 0px;
  text-decoration: underline rgb(203, 76, 72);
  text-decoration-color: rgb(203, 76, 72);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 76, 72);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 76, 72) none 0px;
  text-decoration: underline rgb(203, 76, 72);
  text-decoration-color: rgb(203, 76, 72);
}

body a.internal.broken {
  color: rgb(203, 76, 72);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(203, 76, 72) none 0px;
  text-decoration: underline rgba(203, 76, 72, 0.3);
  text-decoration-color: rgba(203, 76, 72, 0.3);
}`,
    lists: `body dd {
  color: rgb(41, 44, 46);
}

body dt {
  color: rgb(41, 44, 46);
}

body ol > li {
  color: rgb(41, 44, 46);
}

body ol.overflow {
  background-color: rgb(247, 247, 248);
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body ul > li {
  color: rgb(41, 44, 46);
}

body ul.overflow {
  background-color: rgb(247, 247, 248);
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(139, 147, 152);
  text-decoration: rgb(139, 147, 152);
}

body blockquote {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body table {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body td {
  border-bottom-color: rgb(166, 172, 176);
  border-left-color: rgb(166, 172, 176);
  border-right-color: rgb(166, 172, 176);
  border-top-color: rgb(166, 172, 176);
  color: rgb(41, 44, 46);
}

body th {
  border-bottom-color: rgb(166, 172, 176);
  border-left-color: rgb(166, 172, 176);
  border-right-color: rgb(166, 172, 176);
  border-top-color: rgb(166, 172, 176);
  color: rgb(41, 44, 46);
}

body tr {
  background-color: rgb(220, 222, 224);
}`,
    code: `body code {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
  font-family: "", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
  color: rgb(41, 44, 46);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
}

body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
}`,
    images: `body audio {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body figcaption {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body img {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body video {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    embeds: `body .file-embed {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(113, 121, 127);
  border-left-color: rgb(113, 121, 127);
  border-right-color: rgb(113, 121, 127);
  border-top-color: rgb(113, 121, 127);
}

body .footnotes {
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

body .transclude {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(209, 90, 88);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body .transclude-inner {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(209, 90, 88);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(113, 121, 127);
  text-decoration: line-through rgb(113, 121, 127);
  text-decoration-color: rgb(113, 121, 127);
}

body input[type=checkbox] {
  border-bottom-color: rgb(139, 147, 152);
  border-left-color: rgb(139, 147, 152);
  border-right-color: rgb(139, 147, 152);
  border-top-color: rgb(139, 147, 152);
}

body li.task-list-item[data-task='!'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='*'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='-'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='/'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='>'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='?'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='I'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='S'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='b'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='c'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='d'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='f'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='i'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='k'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='l'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='p'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='u'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body li.task-list-item[data-task='w'] {
  color: rgb(41, 44, 46);
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(247, 247, 248);
  border-bottom-color: rgb(193, 197, 200);
  border-left-color: rgb(193, 197, 200);
  border-right-color: rgb(193, 197, 200);
  border-top-color: rgb(193, 197, 200);
}

body .search > .search-container > .search-space > * {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 46) none 0px;
  text-decoration: rgb(41, 44, 46);
  text-decoration-color: rgb(41, 44, 46);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(41, 44, 46);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(41, 44, 46);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(41, 44, 46);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(193, 197, 200);
  border-left-color: rgb(193, 197, 200);
  border-right-color: rgb(193, 197, 200);
  border-top-color: rgb(193, 197, 200);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(41, 44, 46);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(203, 76, 72, 0.1);
  border-bottom-color: rgba(203, 76, 72, 0.15);
  border-left-color: rgba(203, 76, 72, 0.15);
  border-right-color: rgba(203, 76, 72, 0.15);
  border-top-color: rgba(203, 76, 72, 0.15);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(203, 76, 72);
}

body h1 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(53, 57, 59);
  border-left-color: rgb(53, 57, 59);
  border-right-color: rgb(53, 57, 59);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}

body ::-webkit-scrollbar-corner {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}

body ::-webkit-scrollbar-track {
  background: rgb(247, 247, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 248);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(193, 197, 200);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(193, 197, 200);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(193, 197, 200);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(209, 90, 88);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 147, 152);
  border-left-color: rgb(139, 147, 152);
  border-right-color: rgb(139, 147, 152);
  border-top-color: rgb(139, 147, 152);
  color: rgb(139, 147, 152);
}`,
    footer: `body footer {
  background-color: rgb(53, 57, 59);
  border-bottom-color: rgb(53, 57, 59);
  border-left-color: rgb(53, 57, 59);
  border-right-color: rgb(53, 57, 59);
  border-top-color: rgb(53, 57, 59);
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(113, 121, 127);
  text-decoration: rgb(113, 121, 127);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(193, 197, 200);
  text-decoration: rgb(193, 197, 200);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body li.section-li > .section .meta {
  color: rgb(193, 197, 200);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(193, 197, 200);
  text-decoration: rgb(193, 197, 200);
}

body ul.section-ul {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(139, 147, 152);
  border-left-color: rgb(139, 147, 152);
  border-right-color: rgb(139, 147, 152);
  border-top-color: rgb(139, 147, 152);
  color: rgb(139, 147, 152);
}

body .darkmode svg {
  color: rgb(139, 147, 152);
  stroke: rgb(139, 147, 152);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(113, 121, 127);
  border-left-color: rgb(113, 121, 127);
  border-right-color: rgb(113, 121, 127);
  border-top-color: rgb(113, 121, 127);
  color: rgb(113, 121, 127);
}

body .breadcrumb-element p {
  color: rgb(139, 147, 152);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
}

body .metadata {
  border-bottom-color: rgb(220, 222, 224);
  border-left-color: rgb(220, 222, 224);
  border-right-color: rgb(220, 222, 224);
  border-top-color: rgb(220, 222, 224);
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(113, 121, 127);
  border-left-color: rgb(113, 121, 127);
  border-right-color: rgb(113, 121, 127);
  border-top-color: rgb(113, 121, 127);
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(53, 57, 59);
}

body .page-header h2.page-title {
  color: rgb(41, 44, 46);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(41, 44, 46);
  text-decoration: underline dotted rgb(41, 44, 46);
}

body details {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body input[type=text] {
  border-bottom-color: rgb(113, 121, 127);
  border-left-color: rgb(113, 121, 127);
  border-right-color: rgb(113, 121, 127);
  border-top-color: rgb(113, 121, 127);
  color: rgb(113, 121, 127);
  font-family: Avenir, "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
  color: rgb(41, 44, 46);
  font-family: "", "??", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(41, 44, 46);
  border-left-color: rgb(41, 44, 46);
  border-right-color: rgb(41, 44, 46);
  border-top-color: rgb(41, 44, 46);
}

body sub {
  color: rgb(41, 44, 46);
}

body summary {
  color: rgb(41, 44, 46);
}

body sup {
  color: rgb(41, 44, 46);
}`,
  },
};
