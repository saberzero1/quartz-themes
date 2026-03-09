import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "royal-velvet",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["fira-sans", "fira-code"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: transparent;
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: transparent;
  --background-modifier-box-shadow: rgb(41, 42, 56);
  --background-modifier-cover: rgb(20, 20, 26);
  --background-modifier-error: rgba(255, 149, 128, 0.9);
  --background-modifier-error-hover: rgb(255, 149, 128);
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(255, 128, 191, 0.1);
  --background-modifier-form-field-highlighted: rgba(255, 128, 191, 0.3);
  --background-modifier-form-field-hover: rgba(255, 128, 191, 0.1);
  --background-modifier-success: rgba(138, 255, 128, 0.2);
  --background-primary: rgb(33, 33, 44);
  --background-primary-alt: rgb(28, 29, 38);
  --background-secondary: rgb(28, 29, 38);
  --background-secondary-alt: rgb(20, 20, 26);
  --bases-cards-background: rgb(33, 33, 44);
  --bases-cards-cover-background: rgb(28, 29, 38);
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-group-heading-property-color: rgba(248, 248, 242, 0.6);
  --bases-table-border-color: transparent;
  --bases-table-cell-background-active: rgb(33, 33, 44);
  --bases-table-cell-background-disabled: rgb(28, 29, 38);
  --bases-table-cell-shadow-active: 0 0 0 2px transparent;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 128, 191);
  --bases-table-group-background: rgb(28, 29, 38);
  --bases-table-header-background: rgb(33, 33, 44);
  --bases-table-header-color: rgba(248, 248, 242, 0.6);
  --bases-table-summary-background: rgb(33, 33, 44);
  --blockquote-border: rgb(255, 149, 128);
  --blockquote-border-color: none;
  --blue: rgb(128, 255, 234);
  --blue-600: rgba(128, 255, 234, 0.6);
  --blue-hue: 170;
  --blue-secondary-tuple: 170, 100%, 90%;
  --blue-tuple: 170, 100%, 75.1%;
  --blur-background: color-mix(in srgb, rgb(28, 29, 38) 65%, transparent) linear-gradient(rgb(28, 29, 38), color-mix(in srgb, rgb(28, 29, 38) 65%, transparent));
  --canvas-background: rgb(33, 33, 44);
  --canvas-card-label-color: rgba(248, 248, 242, 0.6);
  --caret-color: rgb(248, 248, 242);
  --checkbox-border-color: rgba(248, 248, 242, 0.6);
  --checkbox-border-color-hover: rgba(248, 248, 242, 0.6);
  --checkbox-color: rgb(255, 128, 191);
  --checkbox-color-hover: rgba(248, 248, 242, 0.6);
  --checkbox-marker-color: rgb(33, 33, 44);
  --checklist-done-color: rgba(248, 248, 242, 0.6);
  --code-background: rgb(28, 29, 38);
  --code-border-color: transparent;
  --code-comment: rgba(248, 248, 242, 0.6);
  --code-normal: rgb(223, 128, 255);
  --code-punctuation: rgba(248, 248, 242, 0.6);
  --code-size: 1em;
  --collapse-icon-color: rgba(248, 248, 242, 0.6);
  --collapse-icon-color-collapsed: rgb(255, 128, 191);
  --divider-color: transparent;
  --divider-color-hover: rgb(255, 128, 191);
  --dropdown-background: rgb(28, 29, 38);
  --dropdown-background-hover: rgb(20, 20, 26);
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --embed-border-start: 2px solid rgb(255, 128, 191);
  --file-header-background: rgb(33, 33, 44);
  --file-header-background-focused: rgb(33, 33, 44);
  --file-header-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(28, 29, 38);
  --flair-color: rgb(248, 248, 242);
  --font-interface: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Fira Sans", sans-serif;
  --font-mermaid: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Fira Code", monospace;
  --font-print: '??', '??', "Fira Sans", sans-serif, 'Arial';
  --font-text: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Fira Sans", sans-serif;
  --footnote-divider-color: transparent;
  --footnote-id-color: rgba(248, 248, 242, 0.6);
  --footnote-id-color-no-occurrences: rgba(248, 248, 242, 0.6);
  --gradientDegree: 135deg;
  --graph-node: rgba(248, 248, 242, 0.6);
  --graph-node-focused: rgb(255, 128, 191);
  --graph-node-unresolved: rgba(248, 248, 242, 0.6);
  --graph-text: rgb(248, 248, 242);
  --green: rgb(138, 255, 128);
  --green-200: rgba(138, 255, 128, 0.2);
  --green-hue: 115;
  --green-secondary-tuple: 115, 100%, 90%;
  --green-tuple: 115, 100%, 75.1%;
  --greenSecondary: rgb(208, 255, 204);
  --heading-formatting: rgba(248, 248, 242, 0.6);
  --hr-color: rgb(255, 202, 128);
  --icon-color: rgba(248, 248, 242, 0.6);
  --icon-color-active: rgb(255, 128, 191);
  --icon-color-focused: rgb(248, 248, 242);
  --icon-color-hover: rgba(248, 248, 242, 0.6);
  --indentation-guide: rgb(65, 67, 88);
  --indentation-guide-opacity: 10%;
  --input-date-separator: rgba(248, 248, 242, 0.6);
  --input-placeholder-color: rgba(248, 248, 242, 0.6);
  --input-shadow: none;
  --interactive-accent: rgb(255, 128, 191);
  --interactive-accent-hover: rgb(255, 202, 128);
  --interactive-hover: rgb(20, 20, 26);
  --interactive-normal: rgb(28, 29, 38);
  --interactive-success: rgb(138, 255, 128);
  --layer-0: rgb(20, 20, 26);
  --layer-1: rgb(28, 29, 38);
  --layer-2: rgb(33, 33, 44);
  --layer-3: rgb(41, 42, 56);
  --layer-4: rgb(65, 67, 88);
  --layer-hue-sat: 235, 15%;
  --link-color: rgb(255, 202, 128);
  --link-color-hover: rgb(255, 234, 204);
  --link-external-color: rgb(138, 255, 128);
  --link-external-color-hover: rgb(208, 255, 204);
  --link-unresolved-color: rgba(255, 255, 128, 0.7);
  --link-unresolved-hover: rgb(255, 255, 128);
  --list-marker-color: rgba(248, 248, 242, 0.6);
  --list-marker-color-collapsed: rgb(255, 128, 191);
  --list-marker-color-hover: rgba(248, 248, 242, 0.6);
  --menu-background: rgb(28, 29, 38);
  --menu-border-color: transparent;
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-input-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(248, 248, 242);
  --metadata-label-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgba(248, 248, 242, 0.6);
  --metadata-label-text-color-hover: rgba(248, 248, 242, 0.6);
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --modal-background: rgb(33, 33, 44);
  --modal-border-color: transparent;
  --nav-collapse-icon-color: rgba(248, 248, 242, 0.6);
  --nav-collapse-icon-color-collapsed: rgba(248, 248, 242, 0.6);
  --nav-heading-color: rgb(248, 248, 242);
  --nav-heading-color-collapsed: rgba(248, 248, 242, 0.6);
  --nav-heading-color-collapsed-hover: rgba(248, 248, 242, 0.6);
  --nav-heading-color-hover: rgb(248, 248, 242);
  --nav-item-color: rgba(248, 248, 242, 0.6);
  --nav-item-color-active: rgb(248, 248, 242);
  --nav-item-color-highlighted: rgb(255, 128, 191);
  --nav-item-color-hover: rgb(248, 248, 242);
  --nav-item-color-selected: rgb(248, 248, 242);
  --nav-tag-color: rgba(248, 248, 242, 0.6);
  --nav-tag-color-active: rgba(248, 248, 242, 0.6);
  --nav-tag-color-hover: rgba(248, 248, 242, 0.6);
  --on-layer: rgb(248, 248, 242);
  --on-layer-400: rgba(248, 248, 242, 0.4);
  --on-layer-600: rgba(248, 248, 242, 0.6);
  --on-layer-tuple: 60, 30%, 96%;
  --orange: rgb(255, 202, 128);
  --orange-100: rgba(255, 202, 128, 0.1);
  --orange-hue: 35;
  --orange-secondary-tuple: 35, 100%, 90%;
  --orange-tuple: 35, 100%, 75.1%;
  --orangeSecondary: rgb(255, 234, 204);
  --pdf-background: rgb(33, 33, 44);
  --pdf-page-background: rgb(33, 33, 44);
  --pdf-shadow: 0 0 0 1px transparent;
  --pdf-sidebar-background: rgb(33, 33, 44);
  --pdf-thumbnail-shadow: 0 0 0 1px transparent;
  --pill-border-color: transparent;
  --pill-border-color-hover: transparent;
  --pill-color: rgba(248, 248, 242, 0.6);
  --pill-color-hover: rgb(248, 248, 242);
  --pill-color-remove: rgba(248, 248, 242, 0.6);
  --pill-color-remove-hover: rgb(255, 128, 191);
  --pink: rgb(255, 128, 191);
  --pink-100: rgba(255, 128, 191, 0.1);
  --pink-300: rgba(255, 128, 191, 0.3);
  --pink-400: rgba(255, 128, 191, 0.4);
  --pink-hue: 330;
  --pink-secondary-tuple: 330, 100%, 90%;
  --pink-tuple: 330, 100%, 75.1%;
  --pinkSecondary: rgb(255, 204, 230);
  --primary-lit: 75.1%;
  --primary-sat: 100%;
  --prompt-background: rgb(33, 33, 44);
  --prompt-border-color: transparent;
  --purple: rgb(149, 128, 255);
  --purple-200: rgba(149, 128, 255, 0.2);
  --purple-hue: 250;
  --purple-pink: rgb(223, 128, 255);
  --purple-pink-hue: 285;
  --purple-pink-secondary-tuple: 285, 100%, 90%;
  --purple-pink-tuple: 285, 100%, 75.1%;
  --purple-secondary-tuple: 250, 100%, 90%;
  --purple-tuple: 250, 100%, 75.1%;
  --raised-background: color-mix(in srgb, rgb(28, 29, 38) 65%, transparent) linear-gradient(rgb(28, 29, 38), color-mix(in srgb, rgb(28, 29, 38) 65%, transparent));
  --red: rgb(255, 149, 128);
  --red-900: rgba(255, 149, 128, 0.9);
  --red-hue: 10;
  --red-secondary-tuple: 10, 100%, 90%;
  --red-tuple: 10, 100%, 75.1%;
  --ribbon-background: rgb(20, 20, 26);
  --ribbon-background-collapsed: rgb(20, 20, 26);
  --scrollbar-active-thumb-bg: rgba(255, 128, 191, 0.3);
  --scrollbar-bg: rgb(33, 33, 44);
  --scrollbar-thumb-bg: rgba(255, 128, 191, 0.1);
  --search-clear-button-color: rgba(248, 248, 242, 0.6);
  --search-icon-color: rgba(248, 248, 242, 0.6);
  --search-result-background: rgb(33, 33, 44);
  --secondary-lit: 90%;
  --secondary-sat: 100%;
  --setting-group-heading-color: rgb(248, 248, 242);
  --setting-items-background: rgb(28, 29, 38);
  --setting-items-border-color: transparent;
  --slider-thumb-border-color: transparent;
  --slider-track-background: transparent;
  --status-bar-background: rgb(28, 29, 38);
  --status-bar-border-color: transparent;
  --status-bar-text-color: rgba(248, 248, 242, 0.6);
  --suggestion-background: rgb(33, 33, 44);
  --tab-background-active: rgb(33, 33, 44);
  --tab-container-background: rgb(28, 29, 38);
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-switcher-background: rgb(28, 29, 38);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(28, 29, 38), transparent);
  --tab-text-color: rgba(248, 248, 242, 0.6);
  --tab-text-color-active: rgba(248, 248, 242, 0.6);
  --tab-text-color-focused: rgba(248, 248, 242, 0.6);
  --tab-text-color-focused-active: rgba(248, 248, 242, 0.6);
  --tab-text-color-focused-active-current: rgb(248, 248, 242);
  --tab-text-color-focused-highlighted: rgb(255, 128, 191);
  --table-add-button-border-color: transparent;
  --table-border-color: transparent;
  --table-drag-handle-background-active: rgb(255, 128, 191);
  --table-drag-handle-color: rgba(248, 248, 242, 0.6);
  --table-drag-handle-color-active: rgb(33, 33, 44);
  --table-header-border-color: transparent;
  --table-header-color: rgb(33, 33, 44);
  --table-selection-border-color: rgb(255, 128, 191);
  --tag-color: rgb(255, 128, 191);
  --tag-color-hover: rgb(255, 128, 191);
  --text-accent: rgb(255, 128, 191);
  --text-accent-hover: rgb(255, 204, 230);
  --text-error: rgb(255, 149, 128);
  --text-faint: rgba(248, 248, 242, 0.6);
  --text-highlight-bg: rgba(255, 255, 128, 0.1);
  --text-highlight-bg-active: rgba(255, 202, 128, 0.1);
  --text-muted: rgba(248, 248, 242, 0.6);
  --text-normal: rgb(248, 248, 242);
  --text-on-accent: rgb(33, 33, 44);
  --text-selection: rgba(149, 128, 255, 0.2);
  --titlebar-background: rgb(28, 29, 38);
  --titlebar-background-focused: rgb(20, 20, 26);
  --titlebar-border-color: transparent;
  --titlebar-text-color: rgba(248, 248, 242, 0.6);
  --titlebar-text-color-focused: rgb(248, 248, 242);
  --vault-profile-color: rgb(248, 248, 242);
  --vault-profile-color-hover: rgb(248, 248, 242);
  --yellow: rgb(255, 255, 128);
  --yellow-100: rgba(255, 255, 128, 0.1);
  --yellow-700: rgba(255, 255, 128, 0.7);
  --yellow-hue: 60;
  --yellow-secondary-tuple: 60, 100%, 90%;
  --yellow-tuple: 60, 100%, 75.1%;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 29, 38);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 33, 44);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 29, 38);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 29, 38);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(33, 33, 44);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 128, 192);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 192) none 0px;
  text-decoration: rgb(255, 128, 192);
  text-decoration-color: rgb(255, 128, 192);
}

body .page article p > em, em {
  color: rgb(128, 255, 234);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 255, 234) none 0px;
  text-decoration: rgb(128, 255, 234);
  text-decoration-color: rgb(128, 255, 234);
}

body .page article p > i, i {
  color: rgb(128, 255, 234);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 255, 234) none 0px;
  text-decoration: rgb(128, 255, 234);
  text-decoration-color: rgb(128, 255, 234);
}

body .page article p > strong, strong {
  color: rgb(255, 128, 192);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 128, 192) none 0px;
  text-decoration: rgb(255, 128, 192);
  text-decoration-color: rgb(255, 128, 192);
}

body .text-highlight {
  background-color: rgba(255, 255, 128, 0.1);
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgba(248, 248, 242, 0.4);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 242, 0.4) none 0px;
  text-decoration: line-through rgba(248, 248, 242, 0.4);
  text-decoration-color: rgba(248, 248, 242, 0.4);
}

body p {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(248, 248, 242, 0.6) none 0px;
  text-decoration: rgba(248, 248, 242, 0.6);
  text-decoration-color: rgba(248, 248, 242, 0.6);
}`,
    links: `body a.external, footer a {
  color: rgb(139, 255, 128);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(139, 255, 128) none 0px;
  text-decoration: underline rgb(139, 255, 128);
  text-decoration-color: rgb(139, 255, 128);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 202, 128);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 202, 128) none 0px;
  text-decoration: underline rgb(255, 202, 128);
  text-decoration-color: rgb(255, 202, 128);
}

body a.internal.broken {
  color: rgba(255, 255, 128, 0.7);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(255, 255, 128, 0.7) none 0px;
  text-decoration: underline rgba(255, 255, 128, 0.7);
  text-decoration-color: rgba(255, 255, 128, 0.7);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(255, 128, 192, 0.4);
  text-decoration: rgba(255, 128, 192, 0.4);
}

body blockquote {
  background-color: rgb(28, 29, 38);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 239.578px;
  margin-right: 239.578px;
  width: 182.844px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(33, 33, 44);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(28, 29, 38);
}

body td {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-width: 0px;
  border-left-color: rgb(248, 248, 242);
  border-left-width: 0px;
  border-right-color: rgb(248, 248, 242);
  border-right-width: 0px;
  border-top-color: rgb(248, 248, 242);
  border-top-width: 0px;
  color: rgb(248, 248, 242);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(33, 33, 44);
  font-weight: 700;
  padding-bottom: 6px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `body code {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
}

body pre > code > [data-line] {
  border-left-color: rgb(149, 128, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(149, 128, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}

body pre:has(> code) {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body img {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(248, 248, 242);
  border-radius: 4px;
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(255, 128, 192);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(255, 128, 192);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(248, 248, 242, 0.6);
  text-decoration: line-through rgba(248, 248, 242, 0.6);
  text-decoration-color: rgba(248, 248, 242, 0.6);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 128, 192);
  border-left-color: rgb(255, 128, 192);
  border-right-color: rgb(255, 128, 192);
  border-top-color: rgb(255, 128, 192);
}

body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `body .search > .search-button {
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgb(28, 29, 38);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 128, 192);
}

body h1 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 44);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(248, 248, 242, 0.6);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(248, 248, 242, 0.6);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(248, 248, 242, 0.6);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 128, 0.1);
  border-bottom-color: rgb(255, 255, 128);
  border-left-color: rgb(255, 255, 128);
  border-right-color: rgb(255, 255, 128);
  border-top-color: rgb(255, 255, 128);
  color: rgb(255, 255, 128);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}`,
    footer: `body footer {
  background-color: rgb(20, 20, 26);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(248, 248, 242, 0.6);
  border-top-width: 0px;
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgba(248, 248, 242, 0.6);
  text-decoration: rgba(248, 248, 242, 0.6);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(248, 248, 242, 0.6);
  text-decoration: rgba(248, 248, 242, 0.6);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(248, 248, 242, 0.6);
  text-decoration: rgba(248, 248, 242, 0.6);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}

body .darkmode svg {
  color: rgba(248, 248, 242, 0.6);
  stroke: rgba(248, 248, 242, 0.6);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
}

body .breadcrumb-element p {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(149, 128, 255);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(255, 128, 192);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(248, 248, 242);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(20, 20, 26);
}

body .page-header h2.page-title {
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body input[type=text] {
  border-bottom-color: rgba(248, 248, 242, 0.6);
  border-left-color: rgba(248, 248, 242, 0.6);
  border-right-color: rgba(248, 248, 242, 0.6);
  border-top-color: rgba(248, 248, 242, 0.6);
  color: rgba(248, 248, 242, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(28, 29, 38);
  border-bottom-color: rgb(223, 128, 255);
  border-left-color: rgb(223, 128, 255);
  border-right-color: rgb(223, 128, 255);
  border-top-color: rgb(223, 128, 255);
  color: rgb(223, 128, 255);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body sub {
  color: rgb(248, 248, 242);
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: transparent;
  --background-modifier-border-focus: transparent;
  --background-modifier-border-hover: transparent;
  --background-modifier-box-shadow: rgb(205, 206, 218);
  --background-modifier-cover: rgb(223, 223, 231);
  --background-modifier-error: rgba(219, 0, 0, 0.9);
  --background-modifier-error-hover: rgb(219, 0, 0);
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(219, 0, 110, 0.1);
  --background-modifier-form-field-highlighted: rgba(219, 0, 110, 0.3);
  --background-modifier-form-field-hover: rgba(219, 0, 110, 0.1);
  --background-modifier-success: rgba(55, 219, 0, 0.2);
  --background-primary: rgb(243, 244, 246);
  --background-primary-alt: rgb(252, 252, 253);
  --background-secondary: rgb(252, 252, 253);
  --background-secondary-alt: rgb(223, 223, 231);
  --bases-cards-background: rgb(243, 244, 246);
  --bases-cards-cover-background: rgb(252, 252, 253);
  --bases-cards-shadow: 0 0 0 1px transparent;
  --bases-cards-shadow-hover: 0 0 0 1px transparent;
  --bases-embed-border-color: transparent;
  --bases-group-heading-property-color: rgba(33, 34, 44, 0.6);
  --bases-table-border-color: transparent;
  --bases-table-cell-background-active: rgb(243, 244, 246);
  --bases-table-cell-background-disabled: rgb(252, 252, 253);
  --bases-table-cell-shadow-active: 0 0 0 2px transparent;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(219, 0, 110);
  --bases-table-group-background: rgb(252, 252, 253);
  --bases-table-header-background: rgb(243, 244, 246);
  --bases-table-header-color: rgba(33, 34, 44, 0.6);
  --bases-table-summary-background: rgb(243, 244, 246);
  --blockquote-border: rgb(219, 0, 0);
  --blockquote-border-color: none;
  --blue: rgb(0, 146, 219);
  --blue-600: rgba(0, 146, 219, 0.6);
  --blue-hue: 200;
  --blue-secondary-tuple: 200, 80%, 50%;
  --blue-tuple: 200, 100%, 43%;
  --blur-background: color-mix(in srgb, rgb(243, 244, 246) 65%, transparent) linear-gradient(rgb(243, 244, 246), color-mix(in srgb, rgb(243, 244, 246) 65%, transparent));
  --canvas-background: rgb(243, 244, 246);
  --canvas-card-label-color: rgba(33, 34, 44, 0.6);
  --caret-color: rgb(33, 34, 44);
  --checkbox-border-color: rgba(33, 34, 44, 0.6);
  --checkbox-border-color-hover: rgba(33, 34, 44, 0.6);
  --checkbox-color: rgb(219, 0, 110);
  --checkbox-color-hover: rgba(33, 34, 44, 0.6);
  --checkbox-marker-color: rgb(243, 244, 246);
  --checklist-done-color: rgba(33, 34, 44, 0.6);
  --code-background: rgb(252, 252, 253);
  --code-border-color: transparent;
  --code-comment: rgba(33, 34, 44, 0.6);
  --code-normal: rgb(219, 0, 183);
  --code-punctuation: rgba(33, 34, 44, 0.6);
  --code-size: 1em;
  --collapse-icon-color: rgba(33, 34, 44, 0.6);
  --collapse-icon-color-collapsed: rgb(219, 0, 110);
  --divider-color: transparent;
  --divider-color-hover: rgb(219, 0, 110);
  --dropdown-background: rgb(252, 252, 253);
  --dropdown-background-hover: rgb(223, 223, 231);
  --embed-block-shadow-hover: 0 0 0 1px transparent, inset 0 0 0 1px transparent;
  --embed-border-start: 2px solid rgb(219, 0, 110);
  --file-header-background: rgb(243, 244, 246);
  --file-header-background-focused: rgb(243, 244, 246);
  --file-header-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: rgb(252, 252, 253);
  --flair-color: rgb(33, 34, 44);
  --font-interface: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Fira Sans", sans-serif;
  --font-mermaid: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Fira Code", monospace;
  --font-print: '??', '??', "Fira Sans", sans-serif, 'Arial';
  --font-text: '??', "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Fira Sans", sans-serif;
  --footnote-divider-color: transparent;
  --footnote-id-color: rgba(33, 34, 44, 0.6);
  --footnote-id-color-no-occurrences: rgba(33, 34, 44, 0.6);
  --gradientDegree: 135deg;
  --graph-node: rgba(33, 34, 44, 0.6);
  --graph-node-focused: rgb(219, 0, 110);
  --graph-node-unresolved: rgba(33, 34, 44, 0.6);
  --graph-text: rgb(33, 34, 44);
  --green: rgb(55, 219, 0);
  --green-200: rgba(55, 219, 0, 0.2);
  --green-hue: 105;
  --green-secondary-tuple: 105, 80%, 50%;
  --green-tuple: 105, 100%, 43%;
  --greenSecondary: rgb(77, 230, 25);
  --heading-formatting: rgba(33, 34, 44, 0.6);
  --hr-color: rgb(219, 110, 0);
  --icon-color: rgba(33, 34, 44, 0.6);
  --icon-color-active: rgb(219, 0, 110);
  --icon-color-focused: rgb(33, 34, 44);
  --icon-color-hover: rgba(33, 34, 44, 0.6);
  --indentation-guide: rgb(196, 198, 212);
  --indentation-guide-opacity: 10%;
  --input-date-separator: rgba(33, 34, 44, 0.6);
  --input-placeholder-color: rgba(33, 34, 44, 0.6);
  --input-shadow: none;
  --interactive-accent: rgb(219, 0, 110);
  --interactive-accent-hover: rgb(219, 110, 0);
  --interactive-hover: rgb(223, 223, 231);
  --interactive-normal: rgb(252, 252, 253);
  --interactive-success: rgb(55, 219, 0);
  --layer-0: rgb(223, 223, 231);
  --layer-1: rgb(252, 252, 253);
  --layer-2: rgb(243, 244, 246);
  --layer-3: rgb(205, 206, 218);
  --layer-4: rgb(196, 198, 212);
  --layer-hue-sat: 235, 15%;
  --link-color: rgb(219, 110, 0);
  --link-color-hover: rgb(230, 128, 25);
  --link-external-color: rgb(55, 219, 0);
  --link-external-color-hover: rgb(77, 230, 25);
  --link-unresolved-color: rgba(219, 146, 0, 0.7);
  --link-unresolved-hover: rgb(219, 146, 0);
  --list-marker-color: rgba(33, 34, 44, 0.6);
  --list-marker-color-collapsed: rgb(219, 0, 110);
  --list-marker-color-hover: rgba(33, 34, 44, 0.6);
  --menu-background: rgb(252, 252, 253);
  --menu-border-color: transparent;
  --metadata-border-color: transparent;
  --metadata-divider-color: transparent;
  --metadata-input-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(33, 34, 44);
  --metadata-label-font: '??', "Fira Sans", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgba(33, 34, 44, 0.6);
  --metadata-label-text-color-hover: rgba(33, 34, 44, 0.6);
  --metadata-property-box-shadow-focus: 0 0 0 2px transparent;
  --metadata-property-box-shadow-hover: 0 0 0 1px transparent;
  --modal-background: rgb(243, 244, 246);
  --modal-border-color: transparent;
  --nav-collapse-icon-color: rgba(33, 34, 44, 0.6);
  --nav-collapse-icon-color-collapsed: rgba(33, 34, 44, 0.6);
  --nav-heading-color: rgb(33, 34, 44);
  --nav-heading-color-collapsed: rgba(33, 34, 44, 0.6);
  --nav-heading-color-collapsed-hover: rgba(33, 34, 44, 0.6);
  --nav-heading-color-hover: rgb(33, 34, 44);
  --nav-item-color: rgba(33, 34, 44, 0.6);
  --nav-item-color-active: rgb(33, 34, 44);
  --nav-item-color-highlighted: rgb(219, 0, 110);
  --nav-item-color-hover: rgb(33, 34, 44);
  --nav-item-color-selected: rgb(33, 34, 44);
  --nav-tag-color: rgba(33, 34, 44, 0.6);
  --nav-tag-color-active: rgba(33, 34, 44, 0.6);
  --nav-tag-color-hover: rgba(33, 34, 44, 0.6);
  --on-layer: rgb(33, 34, 44);
  --on-layer-400: rgba(33, 34, 44, 0.4);
  --on-layer-600: rgba(33, 34, 44, 0.6);
  --on-layer-tuple: 234, 14%, 15%;
  --orange: rgb(219, 110, 0);
  --orange-100: rgba(219, 110, 0, 0.1);
  --orange-hue: 30;
  --orange-secondary-tuple: 30, 80%, 50%;
  --orange-tuple: 30, 100%, 43%;
  --orangeSecondary: rgb(230, 128, 25);
  --pdf-background: rgb(243, 244, 246);
  --pdf-page-background: rgb(243, 244, 246);
  --pdf-sidebar-background: rgb(243, 244, 246);
  --pill-border-color: transparent;
  --pill-border-color-hover: transparent;
  --pill-color: rgba(33, 34, 44, 0.6);
  --pill-color-hover: rgb(33, 34, 44);
  --pill-color-remove: rgba(33, 34, 44, 0.6);
  --pill-color-remove-hover: rgb(219, 0, 110);
  --pink: rgb(219, 0, 110);
  --pink-100: rgba(219, 0, 110, 0.1);
  --pink-300: rgba(219, 0, 110, 0.3);
  --pink-400: rgba(219, 0, 110, 0.4);
  --pink-hue: 330;
  --pink-secondary-tuple: 330, 80%, 50%;
  --pink-tuple: 330, 100%, 43%;
  --pinkSecondary: rgb(230, 25, 128);
  --primary-lit: 43%;
  --primary-sat: 100%;
  --prompt-background: rgb(243, 244, 246);
  --prompt-border-color: transparent;
  --purple: rgb(219, 0, 219);
  --purple-200: rgba(219, 0, 219, 0.2);
  --purple-hue: 300;
  --purple-pink: rgb(219, 0, 183);
  --purple-pink-hue: 310;
  --purple-pink-secondary-tuple: 310, 80%, 50%;
  --purple-pink-tuple: 310, 100%, 43%;
  --purple-secondary-tuple: 300, 80%, 50%;
  --purple-tuple: 300, 100%, 43%;
  --raised-background: color-mix(in srgb, rgb(243, 244, 246) 65%, transparent) linear-gradient(rgb(243, 244, 246), color-mix(in srgb, rgb(243, 244, 246) 65%, transparent));
  --red: rgb(219, 0, 0);
  --red-900: rgba(219, 0, 0, 0.9);
  --red-hue: 0;
  --red-secondary-tuple: 0, 80%, 50%;
  --red-tuple: 0, 100%, 43%;
  --ribbon-background: rgb(223, 223, 231);
  --ribbon-background-collapsed: rgb(223, 223, 231);
  --scrollbar-active-thumb-bg: rgba(219, 0, 110, 0.3);
  --scrollbar-bg: rgb(243, 244, 246);
  --scrollbar-thumb-bg: rgba(219, 0, 110, 0.1);
  --search-clear-button-color: rgba(33, 34, 44, 0.6);
  --search-icon-color: rgba(33, 34, 44, 0.6);
  --search-result-background: rgb(243, 244, 246);
  --secondary-lit: 50%;
  --secondary-sat: 80%;
  --setting-group-heading-color: rgb(33, 34, 44);
  --setting-items-background: rgb(252, 252, 253);
  --setting-items-border-color: transparent;
  --slider-thumb-border-color: transparent;
  --slider-track-background: transparent;
  --status-bar-background: rgb(252, 252, 253);
  --status-bar-border-color: transparent;
  --status-bar-text-color: rgba(33, 34, 44, 0.6);
  --suggestion-background: rgb(243, 244, 246);
  --tab-background-active: rgb(243, 244, 246);
  --tab-container-background: rgb(252, 252, 253);
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-switcher-background: rgb(252, 252, 253);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(252, 252, 253), transparent);
  --tab-text-color: rgba(33, 34, 44, 0.6);
  --tab-text-color-active: rgba(33, 34, 44, 0.6);
  --tab-text-color-focused: rgba(33, 34, 44, 0.6);
  --tab-text-color-focused-active: rgba(33, 34, 44, 0.6);
  --tab-text-color-focused-active-current: rgb(33, 34, 44);
  --tab-text-color-focused-highlighted: rgb(219, 0, 110);
  --table-add-button-border-color: transparent;
  --table-border-color: transparent;
  --table-drag-handle-background-active: rgb(219, 0, 110);
  --table-drag-handle-color: rgba(33, 34, 44, 0.6);
  --table-drag-handle-color-active: rgb(243, 244, 246);
  --table-header-border-color: transparent;
  --table-header-color: rgb(243, 244, 246);
  --table-selection-border-color: rgb(219, 0, 110);
  --tag-color: rgb(219, 0, 110);
  --tag-color-hover: rgb(219, 0, 110);
  --text-accent: rgb(219, 0, 110);
  --text-accent-hover: rgb(230, 25, 128);
  --text-error: rgb(219, 0, 0);
  --text-faint: rgba(33, 34, 44, 0.6);
  --text-highlight-bg: rgba(219, 146, 0, 0.1);
  --text-highlight-bg-active: rgba(219, 110, 0, 0.1);
  --text-muted: rgba(33, 34, 44, 0.6);
  --text-normal: rgb(33, 34, 44);
  --text-on-accent: rgb(243, 244, 246);
  --text-selection: rgba(219, 0, 219, 0.2);
  --titlebar-background: rgb(252, 252, 253);
  --titlebar-background-focused: rgb(223, 223, 231);
  --titlebar-border-color: transparent;
  --titlebar-text-color: rgba(33, 34, 44, 0.6);
  --titlebar-text-color-focused: rgb(33, 34, 44);
  --vault-profile-color: rgb(33, 34, 44);
  --vault-profile-color-hover: rgb(33, 34, 44);
  --yellow: rgb(219, 146, 0);
  --yellow-100: rgba(219, 146, 0, 0.1);
  --yellow-700: rgba(219, 146, 0, 0.7);
  --yellow-hue: 40;
  --yellow-secondary-tuple: 40, 80%, 50%;
  --yellow-tuple: 40, 100%, 43%;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(252, 252, 253);
  color: rgb(33, 34, 44);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(243, 244, 246);
  color: rgb(33, 34, 44);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 253);
  color: rgb(33, 34, 44);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(252, 252, 253);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
}

body div#quartz-root {
  background-color: rgb(243, 244, 246);
  color: rgb(33, 34, 44);
}`,
    typography: `body .page article p > b, b {
  color: rgb(219, 0, 110);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 0, 110) none 0px;
  text-decoration: rgb(219, 0, 110);
  text-decoration-color: rgb(219, 0, 110);
}

body .page article p > em, em {
  color: rgb(0, 146, 219);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 146, 219) none 0px;
  text-decoration: rgb(0, 146, 219);
  text-decoration-color: rgb(0, 146, 219);
}

body .page article p > i, i {
  color: rgb(0, 146, 219);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 146, 219) none 0px;
  text-decoration: rgb(0, 146, 219);
  text-decoration-color: rgb(0, 146, 219);
}

body .page article p > strong, strong {
  color: rgb(219, 0, 110);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 0, 110) none 0px;
  text-decoration: rgb(219, 0, 110);
  text-decoration-color: rgb(219, 0, 110);
}

body .text-highlight {
  background-color: rgba(219, 146, 0, 0.1);
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(33, 34, 44) none 0px;
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body del {
  color: rgba(33, 34, 44, 0.4);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(33, 34, 44, 0.4) none 0px;
  text-decoration: line-through rgba(33, 34, 44, 0.4);
  text-decoration-color: rgba(33, 34, 44, 0.4);
}

body p {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(33, 34, 44, 0.6) none 0px;
  text-decoration: rgba(33, 34, 44, 0.6);
  text-decoration-color: rgba(33, 34, 44, 0.6);
}`,
    links: `body a.external, footer a {
  color: rgb(55, 219, 0);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(55, 219, 0) none 0px;
  text-decoration: underline rgb(55, 219, 0);
  text-decoration-color: rgb(55, 219, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(219, 110, 0);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 110, 0) none 0px;
  text-decoration: underline rgb(219, 110, 0);
  text-decoration-color: rgb(219, 110, 0);
}

body a.internal.broken {
  color: rgba(219, 146, 0, 0.7);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgba(219, 146, 0, 0.7) none 0px;
  text-decoration: underline rgba(219, 146, 0, 0.7);
  text-decoration-color: rgba(219, 146, 0, 0.7);
}`,
    lists: `body dd {
  color: rgb(33, 34, 44);
}

body dt {
  color: rgb(33, 34, 44);
}

body ol > li {
  color: rgb(33, 34, 44);
}

body ol.overflow {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body ul > li {
  color: rgb(33, 34, 44);
}

body ul.overflow {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(219, 0, 110, 0.4);
  text-decoration: rgba(219, 0, 110, 0.4);
}

body blockquote {
  background-color: rgb(252, 252, 253);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 239.578px;
  margin-right: 239.578px;
  width: 182.844px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(243, 244, 246);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(252, 252, 253);
}

body td {
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 34, 44);
  border-left-width: 0px;
  border-right-color: rgb(33, 34, 44);
  border-right-width: 0px;
  border-top-color: rgb(33, 34, 44);
  border-top-width: 0px;
  color: rgb(33, 34, 44);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: rgb(243, 244, 246);
  font-weight: 700;
  padding-bottom: 6px;
  padding-top: 6px;
  text-align: center;
}`,
    code: `body code {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
}

body pre > code > [data-line] {
  border-left-color: rgb(219, 0, 219);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(219, 0, 219);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(219, 0, 219);
  border-left-color: rgb(219, 0, 219);
  border-right-color: rgb(219, 0, 219);
  border-top-color: rgb(219, 0, 219);
}

body pre > code, pre:has(> code) {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}

body pre:has(> code) {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-left: 19.8398px;
}`,
    images: `body audio {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body figcaption {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body img {
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(33, 34, 44);
  border-radius: 4px;
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    embeds: `body .file-embed {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
}

body .footnotes {
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

body .transclude {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(219, 0, 110);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body .transclude-inner {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(219, 0, 110);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(33, 34, 44, 0.6);
  text-decoration: line-through rgba(33, 34, 44, 0.6);
  text-decoration-color: rgba(33, 34, 44, 0.6);
}

body input[type=checkbox] {
  border-bottom-color: rgb(219, 0, 110);
  border-left-color: rgb(219, 0, 110);
  border-right-color: rgb(219, 0, 110);
  border-top-color: rgb(219, 0, 110);
}

body li.task-list-item[data-task='!'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='*'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='-'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='/'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='>'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='?'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='I'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='S'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='b'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='c'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='d'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='f'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='i'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='k'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='l'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='p'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='u'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body li.task-list-item[data-task='w'] {
  color: rgb(33, 34, 44);
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}`,
    search: `body .search > .search-button {
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(33, 34, 44) none 0px;
  text-decoration: rgb(33, 34, 44);
  text-decoration-color: rgb(33, 34, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 34, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(33, 34, 44);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(33, 34, 44);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgb(252, 252, 253);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(33, 34, 44);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(219, 0, 110);
}

body h1 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

body ::-webkit-scrollbar-corner {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}

body ::-webkit-scrollbar-track {
  background: rgb(243, 244, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 244, 246);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(33, 34, 44, 0.6);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(33, 34, 44, 0.6);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(33, 34, 44, 0.6);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(219, 146, 0, 0.1);
  border-bottom-color: rgb(219, 146, 0);
  border-left-color: rgb(219, 146, 0);
  border-right-color: rgb(219, 146, 0);
  border-top-color: rgb(219, 146, 0);
  color: rgb(219, 146, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}`,
    footer: `body footer {
  background-color: rgb(223, 223, 231);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(33, 34, 44, 0.6);
  border-top-width: 0px;
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgba(33, 34, 44, 0.6);
  text-decoration: rgba(33, 34, 44, 0.6);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(33, 34, 44);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
  color: rgb(33, 34, 44);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgba(33, 34, 44, 0.6);
  text-decoration: rgba(33, 34, 44, 0.6);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body li.section-li > .section .meta {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgba(33, 34, 44, 0.6);
  text-decoration: rgba(33, 34, 44, 0.6);
}

body ul.section-ul {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}

body .darkmode svg {
  color: rgba(33, 34, 44, 0.6);
  stroke: rgba(33, 34, 44, 0.6);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
}

body .breadcrumb-element p {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgb(33, 34, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(219, 0, 219);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(219, 0, 110);
  border-right-style: solid;
  border-right-width: 4px;
  border-top-color: rgb(33, 34, 44);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(33, 34, 44);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(223, 223, 231);
}

body .page-header h2.page-title {
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(33, 34, 44);
  text-decoration: underline dotted rgb(33, 34, 44);
}

body details {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body input[type=text] {
  border-bottom-color: rgba(33, 34, 44, 0.6);
  border-left-color: rgba(33, 34, 44, 0.6);
  border-right-color: rgba(33, 34, 44, 0.6);
  border-top-color: rgba(33, 34, 44, 0.6);
  color: rgba(33, 34, 44, 0.6);
  font-family: "??", "Fira Sans", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(252, 252, 253);
  border-bottom-color: rgb(219, 0, 183);
  border-left-color: rgb(219, 0, 183);
  border-right-color: rgb(219, 0, 183);
  border-top-color: rgb(219, 0, 183);
  color: rgb(219, 0, 183);
  font-family: "??", "Fira Code", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(33, 34, 44);
  border-left-color: rgb(33, 34, 44);
  border-right-color: rgb(33, 34, 44);
  border-top-color: rgb(33, 34, 44);
}

body sub {
  color: rgb(33, 34, 44);
}

body summary {
  color: rgb(33, 34, 44);
}

body sup {
  color: rgb(33, 34, 44);
}`,
  },
};
