import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "yue",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-alpha: 20%;
  --accent-h: 210;
  --accent-l: 44%;
  --accent-s: 100%;
  --atom-aqua: #00A7AA;
  --atom-blue: #0e86ff;
  --atom-gray-1: #5c5c5c;
  --atom-gray-2: #ababab;
  --atom-green: #98E342;
  --atom-orange: #F39B35;
  --atom-purple: #A06FCA;
  --atom-red: #FC4384;
  --atom-white: #d4d4d4;
  --atom-yellow: #E6DB74;
  --background-modifier-active-hover: rgba(0, 112, 224, 0.1);
  --background-modifier-border: #272727;
  --background-modifier-border-focus: #555;
  --background-modifier-border-hover: #272727;
  --background-modifier-form-field: #1c1c1c;
  --background-modifier-form-field-hover: #1c1c1c;
  --background-modifier-success: #6ea82c;
  --background-primary: #1c1c1c;
  --background-primary-alt: #272727;
  --background-secondary: #1c1c1c;
  --background-secondary-alt: #272727;
  --base-d: 20%;
  --base-h: 0;
  --base-l: 97%;
  --base-s: 0%;
  --bases-cards-background: #1c1c1c;
  --bases-cards-cover-background: #272727;
  --bases-cards-shadow: 0 0 0 1px #272727;
  --bases-cards-shadow-hover: 0 0 0 1px #272727;
  --bases-embed-border-color: #272727;
  --bases-group-heading-property-color: rgb(217, 217, 217);
  --bases-table-border-color: #272727;
  --bases-table-cell-background-active: #1c1c1c;
  --bases-table-cell-background-disabled: #272727;
  --bases-table-cell-background-selected: rgba(0, 112, 224, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #555;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 112, 224);
  --bases-table-group-background: #272727;
  --bases-table-header-background: #1c1c1c;
  --bases-table-header-color: rgb(217, 217, 217);
  --bases-table-summary-background: #1c1c1c;
  --blockquote-border-color: rgb(0, 112, 224);
  --blue: #2e80f2;
  --blur-background: color-mix(in srgb, #272727 65%, transparent) linear-gradient(#272727, color-mix(in srgb, #272727 65%, transparent));
  --canvas-background: #1c1c1c;
  --canvas-card-label-color: rgb(153, 153, 153);
  --canvas-dot-pattern: #272727;
  --checkbox-border-color: rgb(153, 153, 153);
  --checkbox-border-color-hover: rgb(217, 217, 217);
  --checkbox-color: rgb(0, 112, 224);
  --checkbox-color-hover: rgb(0, 120, 240);
  --checkbox-marker-color: #1c1c1c;
  --checkbox-radius: 30%;
  --checklist-done-color: rgb(217, 217, 217);
  --code-background: #272727;
  --code-border-color: #272727;
  --code-comment: rgb(153, 153, 153);
  --code-function: #ffda34;
  --code-important: #F39B35;
  --code-punctuation: rgb(217, 217, 217);
  --code-string: #6ea82c;
  --code-value: #A06FCA;
  --collapse-icon-color: rgb(153, 153, 153);
  --collapse-icon-color-collapsed: rgb(0, 112, 224);
  --color-accent: rgb(0, 112, 224);
  --color-accent-1: rgb(0, 120, 240);
  --color-accent-2: rgb(0, 125, 250);
  --color-accent-hsl: 210, 100%, 44%;
  --color-base-00: #1c1c1c;
  --color-base-10: #272727;
  --color-base-20: #1c1c1c;
  --color-base-25: #1c1c1c;
  --color-base-30: #272727;
  --color-base-35: #272727;
  --color-base-40: #555;
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bababa;
  --color-blue: #0e86ff;
  --color-green: #6ea82c;
  --color-orange: #F39B35;
  --color-purple: #A06FCA;
  --color-yellow: #ffda34;
  --divider-color: #272727;
  --divider-color-hover: rgb(0, 112, 224);
  --dropdown-background: #272727;
  --dropdown-background-hover: #272727;
  --embed-block-shadow-hover: 0 0 0 1px #272727, inset 0 0 0 1px #272727;
  --embed-border-start: 2px solid rgb(0, 112, 224);
  --file-header-background: #1c1c1c;
  --file-header-background-focused: #1c1c1c;
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #272727;
  --folding-offset: 10px;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --footnote-divider-color: #272727;
  --footnote-id-color: rgb(217, 217, 217);
  --footnote-id-color-no-occurrences: rgb(153, 153, 153);
  --graph-line: #272727;
  --graph-node: rgb(217, 217, 217);
  --graph-node-attachment: #ffda34;
  --graph-node-focused: rgb(0, 112, 224);
  --graph-node-tag: #6ea82c;
  --graph-node-unresolved: rgb(153, 153, 153);
  --green: #00A7AA;
  --h1-color: rgb(0, 112, 224);
  --h1-size: 1.7rem;
  --h1-text-color-dt: rgb(0, 112, 224);
  --h2-color: rgb(0, 112, 224);
  --h2-size: 1.5rem;
  --h2-text-color-dt: rgb(0, 112, 224);
  --h3-color: rgb(0, 112, 224);
  --h3-size: 1.2rem;
  --h3-text-color-dt: rgb(0, 112, 224);
  --h4-color: rgb(0, 112, 224);
  --h4-size: 1.1rem;
  --h4-text-color-dt: rgb(0, 112, 224);
  --h5-color: rgb(0, 112, 224);
  --h5-size: 1rem;
  --h5-text-color-dt: rgb(0, 112, 224);
  --h6-color: rgb(0, 112, 224);
  --h6-size: 0.9rem;
  --h6-text-color-dt: rgb(0, 112, 224);
  --heading-formatting: rgb(153, 153, 153);
  --hr-color: #272727;
  --icon-color: rgb(217, 217, 217);
  --icon-color-active: rgb(0, 112, 224);
  --icon-color-hover: rgb(217, 217, 217);
  --icon-muted: 0.5;
  --inline-title-color: rgb(0, 112, 224);
  --inline-title-size: 1.7rem;
  --input-date-separator: rgb(153, 153, 153);
  --input-placeholder-color: rgb(153, 153, 153);
  --input-shadow: inset 0 0.5px 0.5px 0.5px rgba(255, 255, 255, 0.09),
    0 2px 4px 0 rgba(0, 0, 0, 0.15), 0 1px 1.5px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0.5px 1px 0.5px rgba(255, 255, 255, 0.16),
    0 2px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 1.5px 0 rgba(0, 0, 0, 0.2),
    0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 0 transparent;
  --interactive-accent: rgb(0, 112, 224);
  --interactive-accent-hover: rgb(0, 120, 240);
  --interactive-accent-hsl: 210, 100%, 44%;
  --interactive-hover: #272727;
  --interactive-normal: #272727;
  --line-height: 1.5;
  --line-width: 40rem;
  --line-width-adaptive: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: rgb(0, 112, 224);
  --link-color-hover: rgb(71, 163, 255);
  --link-external-color: rgb(0, 112, 224);
  --link-external-color-hover: rgb(71, 163, 255);
  --link-unresolved-color: rgb(0, 112, 224);
  --link-unresolved-decoration-color: rgba(0, 112, 224, 0.3);
  --list-marker-color: rgb(153, 153, 153);
  --list-marker-color-collapsed: rgb(0, 112, 224);
  --list-marker-color-hover: rgb(217, 217, 217);
  --max-col-width: 18em;
  --max-width: 90%;
  --menu-background: #1c1c1c;
  --menu-border-color: #272727;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --metadata-border-color: #272727;
  --metadata-divider-color: #272727;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(217, 217, 217);
  --metadata-label-text-color-hover: rgb(217, 217, 217);
  --metadata-property-box-shadow-focus: 0 0 0 2px #555;
  --metadata-property-box-shadow-hover: 0 0 0 1px #272727;
  --modal-background: #1c1c1c;
  --modal-border-color: #555;
  --modal-radius: 10px;
  --nav-collapse-icon-color: rgb(153, 153, 153);
  --nav-collapse-icon-color-collapsed: rgb(153, 153, 153);
  --nav-heading-color-collapsed: rgb(153, 153, 153);
  --nav-heading-color-collapsed-hover: rgb(217, 217, 217);
  --nav-item-background-selected: rgba(0, 112, 224, 0.15);
  --nav-item-color: rgb(217, 217, 217);
  --nav-item-color-highlighted: rgb(0, 112, 224);
  --nav-tag-color: rgb(153, 153, 153);
  --nav-tag-color-active: rgb(217, 217, 217);
  --nav-tag-color-hover: rgb(217, 217, 217);
  --nested-padding: 1.1em;
  --orange: #F39B35;
  --pdf-background: #1c1c1c;
  --pdf-page-background: #1c1c1c;
  --pdf-shadow: 0 0 0 1px #272727;
  --pdf-sidebar-background: #1c1c1c;
  --pdf-thumbnail-shadow: 0 0 0 1px #272727;
  --pill-border-color: #272727;
  --pill-border-color-hover: #272727;
  --pill-color: rgb(217, 217, 217);
  --pill-color-remove: rgb(153, 153, 153);
  --pill-color-remove-hover: rgb(0, 112, 224);
  --pink: #da7dae;
  --prompt-background: #1c1c1c;
  --prompt-border-color: #555;
  --purple: #A06FCA;
  --radius-l: 10px;
  --raised-background: color-mix(in srgb, #272727 65%, transparent) linear-gradient(#272727, color-mix(in srgb, #272727 65%, transparent));
  --red: #FC4384;
  --ribbon-background: #1c1c1c;
  --ribbon-background-collapsed: #1c1c1c;
  --scrollbar-radius: 10px;
  --search-clear-button-color: rgb(217, 217, 217);
  --search-icon-color: rgb(217, 217, 217);
  --search-result-background: #1c1c1c;
  --setting-items-background: #272727;
  --setting-items-border-color: #272727;
  --setting-items-radius: 10px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --slider-thumb-border-color: #272727;
  --slider-track-background: #272727;
  --status-bar-background: #1c1c1c;
  --status-bar-border-color: #272727;
  --status-bar-text-color: rgb(217, 217, 217);
  --suggestion-background: #1c1c1c;
  --sync-avatar-color-2: #F39B35;
  --sync-avatar-color-3: #ffda34;
  --sync-avatar-color-4: #6ea82c;
  --sync-avatar-color-6: #0e86ff;
  --sync-avatar-color-7: #A06FCA;
  --tab-background-active: #1c1c1c;
  --tab-container-background: #1c1c1c;
  --tab-divider-color: #272727;
  --tab-outline-color: #272727;
  --tab-switcher-background: #1c1c1c;
  --tab-switcher-menubar-background: linear-gradient(to top, #1c1c1c, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 112, 224);
  --tab-text-color: rgb(153, 153, 153);
  --tab-text-color-active: rgb(217, 217, 217);
  --tab-text-color-focused: rgb(217, 217, 217);
  --tab-text-color-focused-active: rgb(217, 217, 217);
  --tab-text-color-focused-highlighted: rgb(0, 112, 224);
  --table-add-button-border-color: #272727;
  --table-border-color: #272727;
  --table-drag-handle-background-active: rgb(0, 112, 224);
  --table-drag-handle-color: rgb(153, 153, 153);
  --table-header-border-color: #272727;
  --table-selection: rgba(0, 112, 224, 0.1);
  --table-selection-border-color: rgb(0, 112, 224);
  --tag-background: rgba(0, 112, 224, 0.2);
  --tag-background-color: rgba(0, 112, 224, 0.2);
  --tag-background-hover: rgba(0, 112, 224, 0.2);
  --tag-border-color: rgba(0, 112, 224, 0.15);
  --tag-border-color-hover: rgba(0, 112, 224, 0.15);
  --tag-color: rgb(46, 150, 255);
  --tag-color-hover: rgb(0, 112, 224);
  --tag-font-color-d: rgb(46, 150, 255);
  --tag-font-color-l: rgb(0, 74, 148);
  --text-accent: rgb(0, 112, 224);
  --text-accent-hover: rgb(71, 163, 255);
  --text-faint: rgb(153, 153, 153);
  --text-formatted: rgb(179, 179, 179);
  --text-highlight-bg: rgba(0, 112, 224, 0.5);
  --text-highlight-bg-active: rgba(0, 112, 224, 0.7);
  --text-muted: rgb(217, 217, 217);
  --text-selection: rgba(0, 112, 224, 0.25);
  --text-success: #6ea82c;
  --text-warning: #F39B35;
  --titlebar-background: #1c1c1c;
  --titlebar-background-focused: #272727;
  --titlebar-border-color: #272727;
  --titlebar-text-color: rgb(217, 217, 217);
  --white: #ffffff;
  --yellow: #E6DB74;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 28, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 28, 28);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(39, 39, 39);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 28, 28);
  border-left-color: rgb(39, 39, 39);
}

body div#quartz-root {
  background-color: rgb(28, 28, 28);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  background-color: rgba(0, 112, 224, 0.5);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(217, 217, 217) none 0px;
  text-decoration: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgb(0, 112, 224);
  text-decoration-color: rgb(0, 112, 224);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgb(0, 112, 224);
  text-decoration-color: rgb(0, 112, 224);
}

body a.internal.broken {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgba(0, 112, 224, 0.3);
  text-decoration-color: rgba(0, 112, 224, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(28, 28, 28);
}

body ul.overflow {
  background-color: rgb(28, 28, 28);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

body th {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}`,
    code: `body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

body pre > code > [data-line] {
  border-left-color: rgb(230, 219, 116);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 219, 116);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 219, 116);
  border-left-color: rgb(230, 219, 116);
  border-right-color: rgb(230, 219, 116);
  border-top-color: rgb(230, 219, 116);
}

body pre > code, pre:has(> code) {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(39, 39, 39);
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

body .transclude {
  border-left-color: rgb(0, 112, 224);
}

body .transclude-inner {
  border-left-color: rgb(0, 112, 224);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

body li.task-list-item[data-task='-'] {
  color: rgb(153, 153, 153);
  text-decoration: line-through 1px rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    search: `body .search > .search-button {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 28, 28);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 112, 224, 0.2);
  border-bottom-color: rgba(0, 112, 224, 0.15);
  border-left-color: rgba(0, 112, 224, 0.15);
  border-right-color: rgba(0, 112, 224, 0.15);
  border-top-color: rgba(0, 112, 224, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(46, 150, 255);
}

body h1 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(217, 217, 217);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(217, 217, 217);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(217, 217, 217);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}`,
    footer: `body footer {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(217, 217, 217);
  text-decoration: rgb(217, 217, 217);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .darkmode svg {
  color: rgb(217, 217, 217);
  stroke: rgb(217, 217, 217);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(28, 28, 28);
}

body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(39, 39, 39);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --accent-alpha: 20%;
  --accent-h: 210;
  --accent-l: 44%;
  --accent-s: 100%;
  --atom-aqua: #00A7AA;
  --atom-blue: #0e86ff;
  --atom-gray-1: #383838;
  --atom-gray-2: #383838;
  --atom-green: #98E342;
  --atom-orange: #F39B35;
  --atom-purple: #A06FCA;
  --atom-red: #FC4384;
  --atom-white: #464646;
  --atom-yellow: #E6DB74;
  --background-modifier-active-hover: rgba(0, 112, 224, 0.1);
  --background-modifier-border: #ebedf0;
  --background-modifier-error: #fb464c;
  --background-modifier-error-hover: #fb464c;
  --background-modifier-error-rgb: 228, 55, 75;
  --background-modifier-hover: #e2e5e9;
  --background-modifier-success: #6ea82c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary-alt: #f6f7f8;
  --background-secondary: #f6f7f8;
  --base-d: 20%;
  --base-h: 0;
  --base-l: 97%;
  --base-s: 0%;
  --bases-cards-cover-background: #f6f7f8;
  --bases-cards-shadow: 0 0 0 1px #ebedf0;
  --bases-embed-border-color: #ebedf0;
  --bases-group-heading-property-color: hsl(0, -5%, 37%);
  --bases-table-border-color: #ebedf0;
  --bases-table-cell-background-disabled: #f6f7f8;
  --bases-table-cell-background-selected: rgba(0, 112, 224, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 120, 240);
  --bases-table-group-background: #f6f7f8;
  --bases-table-header-background-hover: #e2e5e9;
  --bases-table-header-color: hsl(0, -5%, 37%);
  --bases-table-summary-background-hover: #e2e5e9;
  --blockquote-border-color: rgb(0, 120, 240);
  --blue: #2e80f2;
  --callout-bug: 228, 55, 75;
  --callout-error: 228, 55, 75;
  --callout-fail: 228, 55, 75;
  --callout-success: 68, 207, 110;
  --canvas-card-label-color: hsl(0, -5%, 57%);
  --canvas-color-1: 228, 55, 75;
  --canvas-color-4: 68, 207, 110;
  --canvas-dot-pattern: #ebedf0;
  --checkbox-border-color: hsl(0, -5%, 57%);
  --checkbox-border-color-hover: hsl(0, -5%, 37%);
  --checkbox-color: rgb(0, 120, 240);
  --checkbox-color-hover: rgb(0, 125, 250);
  --checkbox-radius: 30%;
  --checklist-done-color: hsl(0, -5%, 37%);
  --code-background: #f6f7f8;
  --code-border-color: #ebedf0;
  --code-bracket-background: #e2e5e9;
  --code-comment: hsl(0, -5%, 57%);
  --code-function: #ffda34;
  --code-important: #F39B35;
  --code-keyword: #ec7db9;
  --code-operator: #fb464c;
  --code-property: #53dfdd;
  --code-punctuation: hsl(0, -5%, 37%);
  --code-string: #6ea82c;
  --code-tag: #fb464c;
  --code-value: #A06FCA;
  --collapse-icon-color: hsl(0, -5%, 57%);
  --collapse-icon-color-collapsed: rgb(0, 112, 224);
  --color-accent: rgb(0, 112, 224);
  --color-accent-1: rgb(0, 120, 240);
  --color-accent-2: rgb(0, 125, 250);
  --color-accent-hsl: 210, 100%, 44%;
  --color-base-10: #f6f7f8;
  --color-base-20: #f6f7f8;
  --color-base-25: #f0f0f0;
  --color-base-30: #ebedf0;
  --color-base-70: #5a5a5a;
  --color-blue: #0e86ff;
  --color-cyan: #53dfdd;
  --color-green: #6ea82c;
  --color-green-rgb: 68, 207, 110;
  --color-orange: #F39B35;
  --color-pink: #ec7db9;
  --color-purple: #A06FCA;
  --color-red: #fb464c;
  --color-red-rgb: 228, 55, 75;
  --color-yellow: #ffda34;
  --divider-color: #ebedf0;
  --divider-color-hover: rgb(0, 120, 240);
  --dropdown-background-hover: #f6f7f8;
  --embed-block-shadow-hover: 0 0 0 1px #ebedf0, inset 0 0 0 1px #ebedf0;
  --embed-border-start: 2px solid rgb(0, 120, 240);
  --file-header-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --folding-offset: 10px;
  --font-editor-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --font-interface: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular,
    Consolas, 'Roboto Mono', monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif;
  --footnote-divider-color: #ebedf0;
  --footnote-id-color: hsl(0, -5%, 37%);
  --footnote-id-color-no-occurrences: hsl(0, -5%, 57%);
  --footnote-input-background-active: #e2e5e9;
  --graph-node: hsl(0, -5%, 37%);
  --graph-node-attachment: #ffda34;
  --graph-node-focused: rgb(0, 112, 224);
  --graph-node-tag: #6ea82c;
  --graph-node-unresolved: hsl(0, -5%, 57%);
  --green: #00A7AA;
  --h1-color: rgb(0, 112, 224);
  --h1-size: 1.7rem;
  --h1-text-color-lt: rgb(0, 112, 224);
  --h2-color: rgb(0, 112, 224);
  --h2-size: 1.5rem;
  --h2-text-color-lt: rgb(0, 112, 224);
  --h3-color: rgb(0, 112, 224);
  --h3-size: 1.2rem;
  --h3-text-color-lt: rgb(0, 112, 224);
  --h4-color: rgb(0, 112, 224);
  --h4-size: 1.1rem;
  --h4-text-color-lt: rgb(0, 112, 224);
  --h5-color: rgb(0, 112, 224);
  --h5-size: 1rem;
  --h5-text-color-lt: rgb(0, 112, 224);
  --h6-color: rgb(0, 112, 224);
  --h6-size: 0.9rem;
  --h6-text-color-lt: rgb(0, 112, 224);
  --heading-formatting: hsl(0, -5%, 57%);
  --hr-color: #ebedf0;
  --icon-color: hsl(0, -5%, 37%);
  --icon-color-active: rgb(0, 112, 224);
  --icon-color-hover: hsl(0, -5%, 37%);
  --icon-muted: 0.5;
  --inline-title-color: rgb(0, 112, 224);
  --inline-title-size: 1.7rem;
  --input-date-separator: hsl(0, -5%, 57%);
  --input-placeholder-color: hsl(0, -5%, 57%);
  --input-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12),
    0 2px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --input-shadow-hover: inset 0 0 0 1px rgba(0, 0, 0, 0.17),
    0 2px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 1.5px 0 rgba(0, 0, 0, 0.03),
    0 1px 2px 0 rgba(0, 0, 0, 0.04), 0 0 0 0 transparent;
  --interactive-accent: rgb(0, 120, 240);
  --interactive-accent-hover: rgb(0, 125, 250);
  --interactive-accent-hsl: 210, 100%, 44%;
  --interactive-hover: #f6f7f8;
  --line-height: 1.5;
  --line-width: 40rem;
  --line-width-adaptive: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: rgb(0, 112, 224);
  --link-color-hover: rgb(0, 61, 122);
  --link-external-color: rgb(0, 112, 224);
  --link-external-color-hover: rgb(0, 61, 122);
  --link-unresolved-color: rgb(0, 112, 224);
  --link-unresolved-decoration-color: rgba(0, 112, 224, 0.3);
  --list-marker-color: hsl(0, -5%, 57%);
  --list-marker-color-collapsed: rgb(0, 112, 224);
  --list-marker-color-hover: hsl(0, -5%, 37%);
  --max-col-width: 18em;
  --max-width: 90%;
  --menu-background: #f6f7f8;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-border-color: #ebedf0;
  --metadata-divider-color: #ebedf0;
  --metadata-input-background-active: #e2e5e9;
  --metadata-input-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-background-active: #e2e5e9;
  --metadata-label-font: '??', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: hsl(0, -5%, 37%);
  --metadata-label-text-color-hover: hsl(0, -5%, 37%);
  --metadata-property-background-active: #e2e5e9;
  --modal-radius: 10px;
  --nav-collapse-icon-color: hsl(0, -5%, 57%);
  --nav-collapse-icon-color-collapsed: hsl(0, -5%, 57%);
  --nav-heading-color-collapsed: hsl(0, -5%, 57%);
  --nav-heading-color-collapsed-hover: hsl(0, -5%, 37%);
  --nav-item-background-active: #e2e5e9;
  --nav-item-background-hover: #e2e5e9;
  --nav-item-background-selected: rgba(0, 112, 224, 0.15);
  --nav-item-color: hsl(0, -5%, 37%);
  --nav-item-color-highlighted: rgb(0, 112, 224);
  --nav-tag-color: hsl(0, -5%, 57%);
  --nav-tag-color-active: hsl(0, -5%, 37%);
  --nav-tag-color-hover: hsl(0, -5%, 37%);
  --nested-padding: 1.1em;
  --orange: #F39B35;
  --pill-border-color: #ebedf0;
  --pill-color: hsl(0, -5%, 37%);
  --pill-color-remove: hsl(0, -5%, 57%);
  --pill-color-remove-hover: rgb(0, 112, 224);
  --pink: #da7dae;
  --purple: #A06FCA;
  --radius-l: 10px;
  --red: #FC4384;
  --ribbon-background: #f6f7f8;
  --scrollbar-radius: 10px;
  --search-clear-button-color: hsl(0, -5%, 37%);
  --search-icon-color: hsl(0, -5%, 37%);
  --setting-items-background: #f6f7f8;
  --setting-items-border-color: #ebedf0;
  --setting-items-radius: 10px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --slider-track-background: #ebedf0;
  --status-bar-background: #f6f7f8;
  --status-bar-border-color: #ebedf0;
  --status-bar-text-color: hsl(0, -5%, 37%);
  --sync-avatar-color-1: #fb464c;
  --sync-avatar-color-2: #F39B35;
  --sync-avatar-color-3: #ffda34;
  --sync-avatar-color-4: #6ea82c;
  --sync-avatar-color-5: #53dfdd;
  --sync-avatar-color-6: #0e86ff;
  --sync-avatar-color-7: #A06FCA;
  --sync-avatar-color-8: #ec7db9;
  --tab-container-background: #f6f7f8;
  --tab-outline-color: #ebedf0;
  --tab-switcher-background: #f6f7f8;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f7f8, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 112, 224);
  --tab-text-color: hsl(0, -5%, 57%);
  --tab-text-color-active: hsl(0, -5%, 37%);
  --tab-text-color-focused: hsl(0, -5%, 37%);
  --tab-text-color-focused-active: hsl(0, -5%, 37%);
  --tab-text-color-focused-highlighted: rgb(0, 112, 224);
  --table-add-button-border-color: #ebedf0;
  --table-border-color: #ebedf0;
  --table-drag-handle-background-active: rgb(0, 120, 240);
  --table-drag-handle-color: hsl(0, -5%, 57%);
  --table-header-border-color: #ebedf0;
  --table-selection: rgba(0, 112, 224, 0.1);
  --table-selection-border-color: rgb(0, 120, 240);
  --tag-background: rgba(0, 112, 224, 0.2);
  --tag-background-color: rgba(0, 112, 224, 0.2);
  --tag-background-hover: rgba(0, 112, 224, 0.2);
  --tag-border-color: rgba(0, 112, 224, 0.15);
  --tag-border-color-hover: rgba(0, 112, 224, 0.15);
  --tag-color: rgb(0, 74, 148);
  --tag-color-hover: rgb(0, 112, 224);
  --tag-font-color-d: rgb(46, 150, 255);
  --tag-font-color-l: rgb(0, 74, 148);
  --text-accent: rgb(0, 112, 224);
  --text-accent-hover: rgb(0, 61, 122);
  --text-error: #fb464c;
  --text-faint: hsl(0, -5%, 57%);
  --text-highlight-bg: rgba(0, 112, 224, 0.5);
  --text-highlight-bg-active: rgba(0, 112, 224, 0.7);
  --text-muted: hsl(0, -5%, 37%);
  --text-selection: rgba(0, 112, 224, 0.2);
  --text-success: #6ea82c;
  --text-warning: #F39B35;
  --titlebar-background: #f6f7f8;
  --titlebar-border-color: #ebedf0;
  --titlebar-text-color: hsl(0, -5%, 37%);
  --white: #ffffff;
  --yellow: #E6DB74;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 247, 248);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 247, 248);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(235, 237, 240);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 247, 248);
  border-left-color: rgb(235, 237, 240);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  background-color: rgba(0, 112, 224, 0.5);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(94, 94, 94) none 0px;
  text-decoration: rgb(94, 94, 94);
  text-decoration-color: rgb(94, 94, 94);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgb(0, 112, 224);
  text-decoration-color: rgb(0, 112, 224);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgb(0, 112, 224);
  text-decoration-color: rgb(0, 112, 224);
}

body a.internal.broken {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 112, 224) none 0px;
  text-decoration: underline rgba(0, 112, 224, 0.3);
  text-decoration-color: rgba(0, 112, 224, 0.3);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(145, 145, 145);
  text-decoration: rgb(145, 145, 145);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body table {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body th {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}`,
    code: `body code {
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
}

body pre > code > [data-line] {
  border-left-color: rgb(230, 219, 116);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 219, 116);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 219, 116);
  border-left-color: rgb(230, 219, 116);
  border-right-color: rgb(230, 219, 116);
  border-top-color: rgb(230, 219, 116);
}

body pre > code, pre:has(> code) {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body figcaption {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
}

body .transclude {
  border-left-color: rgb(0, 119, 237);
}

body .transclude-inner {
  border-left-color: rgb(0, 119, 237);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(145, 145, 145);
  text-decoration: line-through rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}

body input[type=checkbox] {
  border-bottom-color: rgb(145, 145, 145);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-left-color: rgb(145, 145, 145);
  border-right-color: rgb(145, 145, 145);
  border-top-color: rgb(145, 145, 145);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
}

body li.task-list-item[data-task='-'] {
  color: rgb(145, 145, 145);
  text-decoration: line-through 1px rgb(145, 145, 145);
  text-decoration-color: rgb(145, 145, 145);
}`,
    callouts: `body .callout[data-callout="bug"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 228, 55, 75;
  background-color: rgba(228, 55, 75, 0.1);
  border-bottom-color: rgba(228, 55, 75, 0.25);
  border-left-color: rgba(228, 55, 75, 0.25);
  border-right-color: rgba(228, 55, 75, 0.25);
  border-top-color: rgba(228, 55, 75, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-left-color: rgba(68, 207, 110, 0.25);
  border-right-color: rgba(68, 207, 110, 0.25);
  border-top-color: rgba(68, 207, 110, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 247, 248);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(226, 229, 233);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(226, 229, 233);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 112, 224, 0.2);
  border-bottom-color: rgba(0, 112, 224, 0.15);
  border-left-color: rgba(0, 112, 224, 0.15);
  border-right-color: rgba(0, 112, 224, 0.15);
  border-top-color: rgba(0, 112, 224, 0.15);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 74, 148);
}

body h1 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 112, 224);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(94, 94, 94);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(94, 94, 94);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(94, 94, 94);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(226, 229, 233);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}`,
    footer: `body footer {
  background-color: rgb(246, 247, 248);
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(94, 94, 94);
  text-decoration: rgb(94, 94, 94);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(94, 94, 94);
  text-decoration: rgb(94, 94, 94);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(94, 94, 94);
  text-decoration: rgb(94, 94, 94);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}

body .darkmode svg {
  color: rgb(94, 94, 94);
  stroke: rgb(94, 94, 94);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
}

body .breadcrumb-element p {
  color: rgb(145, 145, 145);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(235, 237, 240);
  border-left-color: rgb(235, 237, 240);
  border-right-color: rgb(235, 237, 240);
  border-top-color: rgb(235, 237, 240);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(246, 247, 248);
}

body .page-header h2.page-title {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(94, 94, 94);
  border-left-color: rgb(94, 94, 94);
  border-right-color: rgb(94, 94, 94);
  border-top-color: rgb(94, 94, 94);
  color: rgb(94, 94, 94);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(246, 247, 248);
  font-family: "??", "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
