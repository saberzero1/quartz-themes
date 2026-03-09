import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "shade-sanctuary",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["computer-modern-bright", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background: rgb(25, 11, 45);
  --background-modifier-border: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --background-modifier-border-focus: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --background-modifier-border-hover: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --background-modifier-form-field: color-mix(in srgb, rgb(25, 11, 45) 80%, #000);
  --background-modifier-form-field-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, #000);
  --background-modifier-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --background-primary: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --background-primary-alt: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --background-secondary: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --background-secondary-alt: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --bases-cards-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --bases-cards-cover-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --bases-embed-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --bases-group-heading-property-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --bases-table-border-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --bases-table-cell-background-active: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --bases-table-cell-background-disabled: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --bases-table-group-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --bases-table-header-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --bases-table-header-background-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --bases-table-header-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --bases-table-summary-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --bases-table-summary-background-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --black: #000;
  --blue: #437cf3;
  --blue-violet: #6f51f4;
  --blur-background: color-mix(in srgb, color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) 65%, transparent) linear-gradient(color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)), color-mix(in srgb, color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) 65%, transparent));
  --canvas-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --canvas-card-label-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --canvas-dot-pattern: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --caret-color: #faf4ed;
  --checkbox-border-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --checkbox-border-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --checkbox-color: rgb(166, 139, 249);
  --checkbox-marker-color: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --checklist-done-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --code-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --code-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --code-bracket-background: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --code-comment: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --code-normal: #faf4ed;
  --code-punctuation: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --collapse-icon-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --color-base-00: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --color-base-05: color-mix(in srgb, rgb(25, 11, 45) 40%, #000);
  --color-base-10: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --color-base-100: color-mix(in srgb, rgb(25, 11, 45) 0%, rgb(196, 153, 255));
  --color-base-20: color-mix(in srgb, rgb(25, 11, 45) 80%, #000);
  --color-base-25: color-mix(in srgb, rgb(25, 11, 45) 80%, #000);
  --color-base-30: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --color-base-35: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --color-base-40: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --color-base-50: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --color-base-60: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --color-base-70: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --cool-cyan: #43cfea;
  --cool-gray: #515768;
  --cyan: #51e1e9;
  --divider-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --dropdown-background: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --dropdown-background-hover: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)), inset 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --file-header-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --file-header-background-focused: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --file-header-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --flair-color: #faf4ed;
  --font-callout-theme: "Computer Modern", "Sans-Serif";
  --font-interface: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Jetbrains Mono", "Inter", Sans-Serif;
  --font-mermaid: "Computer Modern", "Inter", Sans-Serif;
  --font-monospace: '??', "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Jetbrains Mono", "Source Code Pro", monospace;
  --font-text: "Computer Modern", "Inter", Sans-Serif;
  --footnote-divider-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --footnote-id-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --footnote-id-color-no-occurrences: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --footnote-input-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --foreground: rgb(196, 153, 255);
  --graph-line: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --graph-node: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --graph-node-unresolved: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --graph-text: #faf4ed;
  --h1-color: rgb(151, 77, 255);
  --h1-size: 24px;
  --h2-color: rgb(181, 128, 255);
  --h2-size: 22px;
  --h3-color: rgb(196, 153, 255);
  --h3-size: 20px;
  --h4-color: rgb(196, 153, 255);
  --h4-size: 18px;
  --h5-color: rgb(225, 204, 255);
  --h5-size: 17px;
  --h6-color: rgb(240, 229, 255);
  --h6-size: 16px;
  --header-title-color: rgb(151, 77, 255);
  --heading-formatting: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --hot-red: #e3365e;
  --hr-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --hue-bg: 265;
  --hue-fg: 265;
  --icon-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --icon-color-focused: #faf4ed;
  --icon-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --indentation-guide-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --indentation-guide-color-active: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --inline-title-color: rgb(151, 77, 255);
  --inline-title-size: 24px;
  --input-date-separator: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --input-placeholder-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --interactive-hover: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --interactive-normal: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --light-blue: #54b6f8;
  --list-marker-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --list-marker-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --lum: 11%;
  --magenta: #e54f9b;
  --menu-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --menu-border-color: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --metadata-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --metadata-divider-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --metadata-input-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --metadata-input-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #faf4ed;
  --metadata-label-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --metadata-label-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --metadata-label-text-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --metadata-property-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --mint: #52eea3;
  --modal-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --modal-border-color: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --nav-collapse-icon-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --nav-collapse-icon-color-collapsed: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --nav-heading-color: #faf4ed;
  --nav-heading-color-collapsed: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --nav-heading-color-collapsed-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --nav-heading-color-hover: #faf4ed;
  --nav-indentation-guide-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --nav-item-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --nav-item-background-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --nav-item-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --nav-item-color-active: #faf4ed;
  --nav-item-color-hover: #faf4ed;
  --nav-item-color-selected: #faf4ed;
  --nav-tag-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --nav-tag-color-active: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --nav-tag-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --pdf-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --pdf-page-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --pdf-sidebar-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --pill-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --pill-border-color-hover: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --pill-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --pill-color-hover: #faf4ed;
  --pill-color-remove: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --prompt-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --prompt-border-color: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --purple: #c952ed;
  --raised-background: color-mix(in srgb, color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) 65%, transparent) linear-gradient(color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)), color-mix(in srgb, color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) 65%, transparent));
  --ribbon-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --ribbon-background-collapsed: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --sat-bg: 60%;
  --sat-fg: 100%;
  --scrollbar-active-thumb-bg: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255));
  --scrollbar-thumb-bg: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --search-clear-button-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --search-icon-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --search-result-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --setting-group-heading-color: #faf4ed;
  --setting-items-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --setting-items-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --slider-thumb-border-color: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --slider-track-background: rgb(166, 139, 249);
  --status-bar-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --status-bar-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --status-bar-text-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --suggestion-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --tab-background-active: color-mix(in srgb, rgb(25, 11, 45) 25%, #000);
  --tab-container-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --tab-curve: 10px;
  --tab-divider-color: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255));
  --tab-font-size: 10pt;
  --tab-max-width: 300px;
  --tab-outline-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --tab-switcher-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, rgb(25, 11, 45) 50%, #000), transparent);
  --tab-text-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --tab-text-color-active: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --tab-text-color-focused: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --tab-text-color-focused-active: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --tab-text-color-focused-active-current: #faf4ed;
  --tab-width: 180px;
  --table-add-button-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --table-border-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --table-drag-handle-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --table-header-border-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --table-header-color: #faf4ed;
  --text-faint: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255));
  --text-highlight-bg: color-mix(in srgb, rgb(151, 77, 255) 25%, transparent);
  --text-highlight-bg-active: color-mix(in srgb, rgb(151, 77, 255) 25%, transparent);
  --text-muted: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --text-normal: #faf4ed;
  --title-color: rgb(151, 77, 255);
  --titlebar-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --titlebar-background-focused: color-mix(in srgb, rgb(25, 11, 45) 50%, #000);
  --titlebar-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255));
  --titlebar-text-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255));
  --titlebar-text-color-focused: #faf4ed;
  --unified-heading-space: 10px;
  --vault-profile-color: #faf4ed;
  --vault-profile-color-hover: #faf4ed;
  --violet: #9446f8;
  --white: #fff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(250, 244, 237);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: color(srgb 0.02475 0.011 0.044);
  color: rgb(250, 244, 237);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(250, 244, 237);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(250, 244, 237);
}

body div#quartz-root {
  background-color: color(srgb 0.0495 0.022 0.088);
  color: rgb(250, 244, 237);
}`,
    typography: `body .page article p > b, b {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body .page article p > em, em {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body .page article p > i, i {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body .page article p > strong, strong {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body .text-highlight {
  background-color: color(srgb 0.591667 0.3 1 / 0.25);
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body del {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: line-through rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body p {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.566367 0.4332 0.7528) none 0px;
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
  text-decoration-color: color(srgb 0.566367 0.4332 0.7528);
}`,
    links: `body a.external, footer a {
  font-family: "Computer Modern", Inter, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "Computer Modern", Inter, sans-serif;
}

body a.internal.broken {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    lists: `body dd {
  color: rgb(250, 244, 237);
}

body dl {
  margin-bottom: 18px;
  margin-top: 10px;
}

body dt {
  color: rgb(250, 244, 237);
}

body ol > li {
  color: rgb(250, 244, 237);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body ul > li {
  color: rgb(250, 244, 237);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    blockquotes: `body .data-footnote-backref {
  color: color(srgb 0.366067 0.2664 0.5056);
  text-decoration: color(srgb 0.366067 0.2664 0.5056);
}

body blockquote {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body table {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  margin-left: 215.969px;
  margin-right: 215.984px;
  width: 206.047px;
}

body td {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
}

body th {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-left-radius: 10px;
  color: rgb(250, 244, 237);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  color: rgb(250, 244, 237);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
}

body pre:has(> code) {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
}`,
    images: `body audio {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body figcaption {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
}

body figure {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body img {
  border-bottom-color: rgb(250, 244, 237);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(250, 244, 237);
  border-radius: 6px;
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body video {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
}

body .footnotes {
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

body .transclude {
  border-bottom-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body .transclude-inner {
  border-bottom-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Computer Modern", Inter, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "Computer Modern", Inter, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.566367 0.4332 0.7528);
  text-decoration: line-through color(srgb 0.566367 0.4332 0.7528);
  text-decoration-color: color(srgb 0.566367 0.4332 0.7528);
}

body input[type=checkbox] {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
}

body li.task-list-item[data-task='!'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='*'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.366067 0.2664 0.5056);
  text-decoration: line-through 1px color(srgb 0.366067 0.2664 0.5056);
  text-decoration-color: color(srgb 0.366067 0.2664 0.5056);
}

body li.task-list-item[data-task='/'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='>'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='?'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='I'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='S'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='b'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='c'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='d'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='f'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='i'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='k'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='l'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='p'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='u'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body li.task-list-item[data-task='w'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgba(168, 130, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(168, 130, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(168, 130, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(168, 130, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgba(251, 70, 76, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(251, 70, 76, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(251, 70, 76, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(251, 70, 76, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgba(68, 207, 110, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(68, 207, 110, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(68, 207, 110, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(68, 207, 110, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgba(83, 223, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(83, 223, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(83, 223, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(83, 223, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgba(233, 151, 63, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 151, 63, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 151, 63, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 151, 63, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: color(srgb 0.0792 0.0352 0.1408);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: color(srgb 0.02475 0.011 0.044);
  border-bottom-color: color(srgb 0.232533 0.1552 0.3408);
  border-left-color: color(srgb 0.232533 0.1552 0.3408);
  border-right-color: color(srgb 0.232533 0.1552 0.3408);
  border-top-color: color(srgb 0.232533 0.1552 0.3408);
}

body .search > .search-container > .search-space > * {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 244, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 244, 237);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  color: rgb(250, 244, 237);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.232533 0.1552 0.3408);
  border-left-color: color(srgb 0.232533 0.1552 0.3408);
  border-right-color: color(srgb 0.232533 0.1552 0.3408);
  border-top-color: color(srgb 0.232533 0.1552 0.3408);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.0495 0.022 0.088);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  color: rgb(250, 244, 237);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(151, 77, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

body h2 {
  color: rgb(181, 128, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(151, 77, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

body h3 {
  color: rgb(196, 153, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

body h4 {
  color: rgb(196, 153, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

body h5 {
  color: rgb(225, 204, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

body h6 {
  color: rgb(240, 230, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}

body ::-webkit-scrollbar-corner {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}

body ::-webkit-scrollbar-thumb {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb:active {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}

body ::-webkit-scrollbar-thumb:hover {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}

body ::-webkit-scrollbar-track {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  color: color(srgb 0.566367 0.4332 0.7528);
}`,
    footer: `body footer {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-width: 1px;
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-right-radius: 8px;
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: color(srgb 0.566367 0.4332 0.7528);
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.566367 0.4332 0.7528);
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body li.section-li > .section .meta {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.566367 0.4332 0.7528);
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

body ul.section-ul {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  color: color(srgb 0.566367 0.4332 0.7528);
}

body .darkmode svg {
  color: color(srgb 0.566367 0.4332 0.7528);
  stroke: color(srgb 0.566367 0.4332 0.7528);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(151, 77, 255);
  border-left-color: rgb(151, 77, 255);
  border-right-color: rgb(151, 77, 255);
  border-top-color: rgb(151, 77, 255);
  color: rgb(151, 77, 255);
}

body .breadcrumb-element p {
  color: color(srgb 0.366067 0.2664 0.5056);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

body .metadata {
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "Computer Modern", Inter, sans-serif;
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "Computer Modern", Inter, sans-serif;
}

body .navigation-progress {
  background-color: color(srgb 0.0495 0.022 0.088);
}

body .page-header h2.page-title {
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(250, 244, 237);
  text-decoration: underline dotted rgb(250, 244, 237);
}

body details {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  margin-bottom: 10px;
  margin-top: 10px;
}

body input[type=text] {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

body sub {
  color: rgb(250, 244, 237);
}

body summary {
  color: rgb(250, 244, 237);
}

body sup {
  color: rgb(250, 244, 237);
}`,
  },
  light: {
    base: `:root:root {
  --file-header-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-callout-theme: "Computer Modern", "Sans-Serif";
  --font-interface: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Jetbrains Mono", "Inter", Sans-Serif;
  --font-mermaid: "Computer Modern", "Inter", Sans-Serif;
  --font-monospace: '??', "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Jetbrains Mono", "Source Code Pro", monospace;
  --font-text: "Computer Modern", "Inter", Sans-Serif;
  --h1-size: 24px;
  --h2-size: 22px;
  --h3-size: 20px;
  --h4-size: 18px;
  --h5-size: 17px;
  --h6-size: 16px;
  --hue-bg: 265;
  --hue-fg: 265;
  --inline-title-size: 24px;
  --lum: 11%;
  --lum-bg: 95%;
  --lum-fg: 50%;
  --metadata-input-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --sat-bg: 60%;
  --sat-fg: 100%;
  --tab-curve: 10px;
  --tab-font-size: 10pt;
  --tab-max-width: 300px;
  --tab-width: 180px;
  --title-color: black;
  --unified-heading-space: 10px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(246, 246, 246);
}`,
    typography: `body .page article p > b, b {
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
}

body .page article p > em, em {
  font-family: "Computer Modern", Inter, sans-serif;
}

body .page article p > i, i {
  font-family: "Computer Modern", Inter, sans-serif;
}

body .page article p > strong, strong {
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
}

body .text-highlight {
  font-family: "Computer Modern", Inter, sans-serif;
}

body del {
  font-family: "Computer Modern", Inter, sans-serif;
}

body p {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "Computer Modern", Inter, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "Computer Modern", Inter, sans-serif;
}

body a.internal.broken {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    lists: `body dl {
  margin-bottom: 18px;
  margin-top: 10px;
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
}`,
    blockquotes: `body blockquote {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    tables: `body table {
  font-family: "Computer Modern", Inter, sans-serif;
  margin-left: 215.969px;
  margin-right: 215.984px;
  width: 206.047px;
}

body td {
  border-top-width: 0px;
}

body th {
  border-top-left-radius: 10px;
}`,
    code: `body code {
  font-family: "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `body figcaption {
  font-family: "Computer Modern", Inter, sans-serif;
}

body img {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Computer Modern", Inter, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "Computer Modern", Inter, sans-serif;
}

body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgba(120, 82, 238, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(120, 82, 238, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(120, 82, 238, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(120, 82, 238, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgba(233, 49, 71, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(233, 49, 71, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(233, 49, 71, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(233, 49, 71, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(158, 158, 158, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(158, 158, 158, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(158, 158, 158, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgba(8, 185, 78, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 185, 78, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 185, 78, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 185, 78, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgba(0, 191, 188, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 191, 188, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(0, 191, 188, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(0, 191, 188, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgba(236, 117, 0, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(236, 117, 0, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(236, 117, 0, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(236, 117, 0, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > * {
  font-family: "Computer Modern", Inter, sans-serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  font-family: "Computer Modern", Inter, sans-serif;
}

body h2 {
  font-family: "Computer Modern", Inter, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "Computer Modern", Inter, sans-serif;
}

body h3 {
  font-family: "Computer Modern", Inter, sans-serif;
}

body h4 {
  font-family: "Computer Modern", Inter, sans-serif;
}

body h5 {
  font-family: "Computer Modern", Inter, sans-serif;
}

body h6 {
  font-family: "Computer Modern", Inter, sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.3);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.3);
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.3);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-corner {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

body ::-webkit-scrollbar-track {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `body footer {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right-width: 1px;
  border-top-right-radius: 8px;
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

body .breadcrumb-element p {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "Computer Modern", Inter, sans-serif;
}

body .metadata-properties {
  font-family: "Computer Modern", Inter, sans-serif;
}

body .page-header h2.page-title {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body details {
  margin-bottom: 10px;
  margin-top: 10px;
}

body input[type=text] {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  font-family: "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
