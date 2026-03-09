import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "arzaba",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["open-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-active-hover: #2c2c32;
  --background-modifier-border: #3b3b3e;
  --background-modifier-border-focus: #282828;
  --background-modifier-border-hover: #282828;
  --background-modifier-form-field: #1f2f3d;
  --background-modifier-form-field-hover: #1f2f3d;
  --background-modifier-hover: #1b3b45;
  --background-primary: #050606;
  --background-primary-alt: #101113;
  --background-secondary: #0a0a0b;
  --background-secondary-alt: #1a1d20;
  --bases-cards-background: #050606;
  --bases-cards-cover-background: #101113;
  --bases-cards-font-size: 0.8em;
  --bases-cards-radius: 10px;
  --bases-cards-shadow: 0 0 0 1px #3b3b3e;
  --bases-cards-shadow-hover: 0 0 0 1px #282828;
  --bases-embed-border-color: #3b3b3e;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: #6f7a88;
  --bases-group-heading-property-size: 13px;
  --bases-group-heading-value-size: 0.8em;
  --bases-table-border-color: #3a3a3a;
  --bases-table-cell-background-active: #050606;
  --bases-table-cell-background-disabled: #101113;
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.05);
  --bases-table-cell-shadow-active: 0 0 0 2px #282828;
  --bases-table-cell-shadow-focus: 0 0 0 2px #21431a;
  --bases-table-container-border-radius: 8px;
  --bases-table-font-size: 0.8em;
  --bases-table-group-background: #101113;
  --bases-table-header-background: #050606;
  --bases-table-header-background-hover: #1b3b45;
  --bases-table-header-color: #6f7a88;
  --bases-table-row-background-hover: #020807;
  --bases-table-summary-background: #050606;
  --bases-table-summary-background-hover: #1b3b45;
  --blockquote-background-color: #130f12;
  --blockquote-border-color: #bd95e6;
  --blockquote-border-thickness: 4px;
  --blockquote-color: #e4d8e3;
  --blur-background: color-mix(in srgb, #193755 65%, transparent) linear-gradient(#193755, color-mix(in srgb, #193755 65%, transparent));
  --bold-color: #dad79b;
  --bold-weight: 700;
  --button-radius: 0;
  --callout-radius: 8px;
  --canvas-background: #050606;
  --canvas-card-label-color: #798a8e;
  --canvas-controls-radius: 8px;
  --caret-color: #6cda6c;
  --checkbox-border-color: #798a8e;
  --checkbox-border-color-hover: #6f7a88;
  --checkbox-color: #6186ec;
  --checkbox-color-hover: #e9626d;
  --checkbox-margin-inline-start: 0;
  --checkbox-marker-color: #050606;
  --checkbox-radius: 25%;
  --checkbox-size: 1.2em;
  --checklist-done-color: #283f42;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 0;
  --code-background: #000000;
  --code-border-color: #3b3b3e;
  --code-bracket-background: #1b3b45;
  --code-comment: #8a8a8a;
  --code-function: #96cf70;
  --code-important: #e4d386;
  --code-keyword: #56B6C2;
  --code-normal: #fffcfe;
  --code-operator: #e9626d;
  --code-property: #6186ec;
  --code-punctuation: #e2e8ff;
  --code-radius: 12px;
  --code-size: 0.8em;
  --code-string: #E5C07B;
  --code-tag: #6186ec;
  --code-value: #d66af7;
  --collapse-icon-color: #798a8e;
  --collapse-icon-color-collapsed: #72c6ea;
  --color-accent: rgb(139, 108, 239);
  --color-accent-1: rgb(170, 153, 245);
  --color-accent-2: rgb(206, 199, 250);
  --color-accent-hsl: 254, 80%, 68%;
  --divider-color: #3b3b3e;
  --divider-color-hover: #21431a;
  --dropdown-background: #193755;
  --dropdown-background-hover: #2c0f23;
  --embed-block-shadow-hover: 0 0 0 1px #3b3b3e, inset 0 0 0 1px #3b3b3e;
  --embed-border-start: 2px solid #21431a;
  --file-header-background: #050606;
  --file-header-background-focused: #050606;
  --file-header-border: none;
  --file-header-font: '??', "Open Sans Light Obsidian", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 0.8rem;
  --file-header-font-weight: 100;
  --file-line-width: 1000px;
  --flair-background: #193755;
  --flair-color: #e1e1eb;
  --font-interface: '??', "Open Sans Light Obsidian", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Open Sans Light Obsidian", sans-serif;
  --font-mermaid: '??', "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
  --font-print: '??', '??', "Open Sans Light Obsidian", sans-serif, 'Arial';
  --font-smaller: 0.8em;
  --font-smallest: 0.65em;
  --font-text: '??', "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Open Sans Light Obsidian", sans-serif;
  --font-ui-larger: 18px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: #3b3b3e;
  --footnote-id-color: #6f7a88;
  --footnote-id-color-no-occurrences: #798a8e;
  --footnote-input-background-active: #1b3b45;
  --footnote-line-height: 1.61;
  --footnote-radius: 8px;
  --footnote-size: 0.8em;
  --graph-line: #2979ff;
  --graph-node: #9b8c06;
  --graph-node-attachment: #00e5ff;
  --graph-node-focused: #33ff57;
  --graph-node-tag: #c072a1;
  --graph-node-unresolved: #9f297b;
  --graph-text: #e1e1eb;
  --h1-color: #6f9fd6;
  --h1-font: "Open Sans Light Obsidian", sans-serif;
  --h1-size: 1.9em;
  --h1-weight: 400;
  --h2-color: #78c988;
  --h2-font: "Open Sans Light Obsidian", sans-serif;
  --h2-size: 1.75em;
  --h2-weight: 400;
  --h3-color: #a497f0;
  --h3-font: "Open Sans Light Obsidian", sans-serif;
  --h3-size: 1.61em;
  --h3-weight: 400;
  --h4-color: #c285b9;
  --h4-font: "Open Sans Light Obsidian", sans-serif;
  --h4-size: 1.45em;
  --h4-weight: 400;
  --h5-color: #e07a6e;
  --h5-font: "Open Sans Light Obsidian", sans-serif;
  --h5-line-height: 1.61;
  --h5-size: 1.33em;
  --h5-weight: 400;
  --h6-color: #d9c47a;
  --h6-font: "Open Sans Light Obsidian", sans-serif;
  --h6-line-height: 1.61;
  --h6-size: 1.23em;
  --h6-weight: 400;
  --heading-formatting: #798a8e;
  --hr-color: #637884;
  --hr-thickness: 1px;
  --icon-color: #58919a;
  --icon-color-active: #72c6ea;
  --icon-color-focused: #7ad67f;
  --icon-color-hover: #8bb188;
  --icon-opacity: 1;
  --indentation-guide-color: #245f5f;
  --indentation-guide-color-active: #5a245f;
  --indentation-guide-editing-indent: 1.1em;
  --indentation-guide-source-indent: 0.85em;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #d3dfe6;
  --inline-title-font: "Open Sans Light Obsidian", sans-serif;
  --inline-title-line-height: 1.61;
  --inline-title-size: 2.2em;
  --inline-title-weight: 300;
  --input-date-separator: #798a8e;
  --input-placeholder-color: #798a8e;
  --interactive-accent: #21431a;
  --interactive-accent-hover: #602e2e;
  --interactive-accent-hsl: 254, 80%, 68%;
  --interactive-hover: #2c0f23;
  --interactive-normal: #193755;
  --italic-color: #86b7f0;
  --line-height-normal: 1.61;
  --line-height-tight: 1.4;
  --link-color: #9ed2fd;
  --link-color-hover: #69d1d1;
  --link-decoration: none;
  --link-decoration-thickness: 1px;
  --link-external-color: #bfacf1;
  --link-external-color-hover: #d0839e;
  --link-unresolved-color: #f4b2b2;
  --link-unresolved-decoration-color: #9ed2fd;
  --link-unresolved-opacity: 0.9;
  --list-bullet-size: 0.31em;
  --list-indent: 2.8em;
  --list-indent-editing: 1em;
  --list-indent-source: 1em;
  --list-marker-color: #70b5d6;
  --list-marker-color-collapsed: #35b035;
  --list-marker-color-hover: #d43dca;
  --list-spacing: 0.12em;
  --menu-background: #0a0a0b;
  --menu-border-color: #282828;
  --menu-radius: 10px;
  --metadata-border-color: #3b3b3e;
  --metadata-divider-color: #3b3b3e;
  --metadata-gap: 1px;
  --metadata-input-background-active: #1b3b45;
  --metadata-input-font: '??', "Open Sans Light Obsidian", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.8em;
  --metadata-input-text-color: #e1e1eb;
  --metadata-label-background-active: #1b3b45;
  --metadata-label-font: '??', "Open Sans Light Obsidian", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.8em;
  --metadata-label-text-color: #e1e1eb;
  --metadata-label-text-color-hover: #6f7a88;
  --metadata-label-width: 8.5em;
  --metadata-property-background: #050606;
  --metadata-property-background-active: #1b3b45;
  --metadata-property-box-shadow-focus: 0 0 0 2px #282828;
  --metadata-property-box-shadow-hover: 0 0 0 1px #282828;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0px;
  --metadata-property-radius-hover: 0;
  --metadata-sidebar-input-font-size: 0.8em;
  --metadata-sidebar-label-font-size: 0.8em;
  --modal-background: #050606;
  --modal-border-color: #4fc0c0;
  --modal-border-width: 2px;
  --modal-community-sidebar-width: 290px;
  --modal-max-width: 1000px;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #408b39;
  --nav-collapse-icon-color-collapsed: #798a8e;
  --nav-heading-color: #e1e1eb;
  --nav-heading-color-collapsed: #798a8e;
  --nav-heading-color-collapsed-hover: #6f7a88;
  --nav-heading-color-hover: #e1e1eb;
  --nav-indentation-guide-color: #6386d2;
  --nav-item-background-active: #2d1d1d;
  --nav-item-background-hover: #1d2d1f;
  --nav-item-background-selected: rgba(139, 108, 239, 0.15);
  --nav-item-color: #dfdfe0;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #72c6ea;
  --nav-item-color-hover: #ffffff;
  --nav-item-color-selected: #e1e1eb;
  --nav-item-radius: 8px;
  --nav-item-size: 14px;
  --nav-tag-color: #798a8e;
  --nav-tag-color-active: #6f7a88;
  --nav-tag-color-hover: #6f7a88;
  --nav-tag-radius: 8px;
  --pdf-background: #050606;
  --pdf-page-background: #050606;
  --pdf-shadow: 0 0 0 1px #3b3b3e;
  --pdf-sidebar-background: #050606;
  --pdf-thumbnail-shadow: 0 0 0 1px #3b3b3e;
  --pill-border-color: #3b3b3e;
  --pill-border-color-hover: #282828;
  --pill-color: #6f7a88;
  --pill-color-hover: #e1e1eb;
  --pill-color-remove: #798a8e;
  --pill-color-remove-hover: #72c6ea;
  --popover-height: 600px;
  --popover-max-height: 100vh;
  --popover-pdf-height: 700px;
  --popover-pdf-width: 700px;
  --popover-width: 800px;
  --prompt-background: #050606;
  --prompt-border-color: #4fc0c0;
  --prompt-border-width: 2px;
  --prompt-width: 1000px;
  --radius-l: 14px;
  --radius-m: 10px;
  --radius-s: 8px;
  --raised-background: color-mix(in srgb, #193755 65%, transparent) linear-gradient(#193755, color-mix(in srgb, #193755 65%, transparent));
  --ribbon-background: #0a0a0b;
  --ribbon-background-collapsed: #050606;
  --scrollbar-radius: 14px;
  --search-clear-button-color: #f15b5b;
  --search-icon-color: #6f7a88;
  --search-result-background: #050606;
  --setting-group-heading-color: #e1e1eb;
  --setting-group-heading-size: 16px;
  --setting-items-background: #101113;
  --setting-items-border-color: #3b3b3e;
  --setting-items-radius: 14px;
  --slider-s-thumb-size: 18px;
  --slider-thumb-border-color: #da65bb;
  --slider-thumb-border-width: 3px;
  --slider-thumb-height: 14px;
  --slider-thumb-radius: 50%;
  --slider-thumb-width: 14px;
  --slider-thumb-y: -5px;
  --slider-track-background: #176b80;
  --status-bar-background: #0a0a0b;
  --status-bar-border-color: #3b3b3e;
  --status-bar-font-size: 13px;
  --status-bar-radius: 10px 0 0 0;
  --status-bar-text-color: #6f7a88;
  --suggestion-background: #050606;
  --swatch-height: 24px;
  --swatch-shadow: inset 0 0 0 2px #000001;
  --swatch-width: 24px;
  --tab-background-active: #050606;
  --tab-container-background: #080808;
  --tab-curve: 0;
  --tab-divider-color: #352121;
  --tab-font-size: 0.85em;
  --tab-max-width: 15em;
  --tab-outline-color: #1f1b32;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: #0a0a0b;
  --tab-switcher-menubar-background: linear-gradient(to top, #0a0a0b, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(139, 108, 239);
  --tab-text-color: #718183;
  --tab-text-color-active: #a9bfc2;
  --tab-text-color-focused: #8fa2a5;
  --tab-text-color-focused-active: #58919a;
  --tab-text-color-focused-active-current: #85bfc5;
  --tab-text-color-focused-highlighted: #2c0f23;
  --table-add-button-border-color: #3a3a3a;
  --table-add-button-border-width: 2px;
  --table-border-color: #3a3a3a;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #5fa4b0;
  --table-drag-handle-color: #c64e4e;
  --table-drag-handle-color-active: #ddff1b;
  --table-header-background: #0f0f0f;
  --table-header-background-hover: #1b0f17;
  --table-header-border-color: #171717;
  --table-header-color: #d6d7dc;
  --table-header-size: 0.8em;
  --table-line-height: 1.4;
  --table-row-alt-background-hover: #020807;
  --table-row-background-hover: #020807;
  --table-selection: rgba(139, 108, 239, 0.05);
  --table-selection-border-color: #5fa4b0;
  --table-text-size: 0.8em;
  --tag-background: rgba(139, 108, 239, 0.1);
  --tag-background-hover: #312c47;
  --tag-border-color: rgba(139, 108, 239, 0.15);
  --tag-border-color-hover: rgba(139, 108, 239, 0.15);
  --tag-color: #72c6ea;
  --tag-color-hover: #72c6ea;
  --tag-radius: 0;
  --tag-size: 0.8em;
  --text-accent: #72c6ea;
  --text-accent-hover: #66cccc;
  --text-faint: #798a8e;
  --text-highlight-bg: #246607;
  --text-muted: #6f7a88;
  --text-normal: #e1e1eb;
  --text-on-accent: #dadde4;
  --text-selection: #32537b;
  --titlebar-background: #0a0a0b;
  --titlebar-background-focused: #1a1d20;
  --titlebar-border-color: #3b3b3e;
  --titlebar-text-color: #6f7a88;
  --titlebar-text-color-focused: #e1e1eb;
  --vault-profile-color: #e1e1eb;
  --vault-profile-color-hover: #e1e1eb;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 8, 8);
  color: rgb(225, 225, 235);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(5, 6, 6);
  color: rgb(225, 225, 235);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(10, 10, 11);
  color: rgb(225, 225, 235);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(59, 59, 62);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 8, 8);
  border-left-color: rgb(59, 59, 62);
  color: rgb(225, 225, 235);
}

body div#quartz-root {
  background-color: rgb(5, 6, 6);
  color: rgb(225, 225, 235);
}`,
    typography: `body .page article p > b, b {
  color: rgb(218, 215, 155);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(218, 215, 155) none 0px;
  text-decoration: rgb(218, 215, 155);
  text-decoration-color: rgb(218, 215, 155);
}

body .page article p > em, em {
  color: rgb(134, 183, 240);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(134, 183, 240) none 0px;
  text-decoration: rgb(134, 183, 240);
  text-decoration-color: rgb(134, 183, 240);
}

body .page article p > i, i {
  color: rgb(134, 183, 240);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(134, 183, 240) none 0px;
  text-decoration: rgb(134, 183, 240);
  text-decoration-color: rgb(134, 183, 240);
}

body .page article p > strong, strong {
  color: rgb(218, 215, 155);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(218, 215, 155) none 0px;
  text-decoration: rgb(218, 215, 155);
  text-decoration-color: rgb(218, 215, 155);
}

body .text-highlight {
  background-color: rgb(36, 102, 7);
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body del {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration: line-through rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body p {
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 122, 136) none 0px;
  text-decoration: rgb(111, 122, 136);
  text-decoration-color: rgb(111, 122, 136);
}`,
    links: `body a.external, footer a {
  color: rgb(191, 172, 241);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 172, 241) none 0px;
  text-decoration: underline 1px rgb(191, 172, 241);
  text-decoration-color: rgb(191, 172, 241);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(158, 210, 253);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(158, 210, 253) none 0px;
  text-decoration: 1px rgb(158, 210, 253);
  text-decoration-color: rgb(158, 210, 253);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(244, 178, 178);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 178, 178) none 0px;
  text-decoration: 1px rgb(158, 210, 253);
  text-decoration-color: rgb(158, 210, 253);
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgb(225, 225, 235);
}

body dt {
  color: rgb(225, 225, 235);
}

body ol > li {
  color: rgb(225, 225, 235);
}

body ol.overflow {
  background-color: rgb(5, 6, 6);
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body ul > li {
  color: rgb(225, 225, 235);
}

body ul.overflow {
  background-color: rgb(5, 6, 6);
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(121, 138, 142);
  text-decoration: rgb(121, 138, 142);
}

body blockquote {
  background-color: rgb(19, 15, 18);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body table {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 403.438px;
  margin-right: 403.438px;
  width: 155.125px;
}

body td {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(225, 225, 235);
}

body th {
  border-bottom-color: rgb(23, 23, 23);
  border-left-color: rgb(23, 23, 23);
  border-right-color: rgb(23, 23, 23);
  border-top-color: rgb(23, 23, 23);
  color: rgb(214, 215, 220);
}

body tr {
  background-color: rgb(15, 15, 15);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 252, 254);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 252, 254);
  border-right-color: rgb(255, 252, 254);
  border-top-color: rgb(255, 252, 254);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(255, 252, 254);
  font-family: "??", "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(59, 59, 62);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(59, 59, 62);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(225, 225, 235);
}

body pre > code > [data-line] {
  border-left-color: rgb(150, 207, 112);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(150, 207, 112);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(150, 207, 112);
  border-left-color: rgb(150, 207, 112);
  border-right-color: rgb(150, 207, 112);
  border-top-color: rgb(150, 207, 112);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(59, 59, 62);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(59, 59, 62);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `body audio {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body figcaption {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body img {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body video {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    embeds: `body .file-embed {
  background-color: rgb(16, 17, 19);
  border-bottom-color: rgb(111, 122, 136);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(111, 122, 136);
  border-right-color: rgb(111, 122, 136);
  border-top-color: rgb(111, 122, 136);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .footnotes {
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

body .transclude {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(33, 67, 26);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body .transclude-inner {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(33, 67, 26);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(40, 63, 66);
  text-decoration: rgb(40, 63, 66);
  text-decoration-color: rgb(40, 63, 66);
}

body input[type=checkbox] {
  border-bottom-color: rgb(121, 138, 142);
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-left-color: rgb(121, 138, 142);
  border-right-color: rgb(121, 138, 142);
  border-top-color: rgb(121, 138, 142);
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='*'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='-'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='/'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='>'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='?'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='I'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='S'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='b'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='c'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='d'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='f'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='i'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='k'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='l'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='p'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='u'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body li.task-list-item[data-task='w'] {
  color: rgb(225, 225, 235);
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(31, 47, 61);
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(5, 6, 6);
  border-bottom-color: rgb(79, 192, 192);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(79, 192, 192);
  border-left-width: 2px;
  border-right-color: rgb(79, 192, 192);
  border-right-width: 2px;
  border-top-color: rgb(79, 192, 192);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 225, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 225, 235);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(225, 225, 235);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(27, 59, 69);
  color: rgb(225, 225, 235);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(79, 192, 192);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(79, 192, 192);
  border-left-width: 2px;
  border-right-color: rgb(79, 192, 192);
  border-right-width: 2px;
  border-top-color: rgb(79, 192, 192);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 10, 11);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(27, 59, 69);
  border-bottom-color: rgb(225, 225, 235);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(27, 59, 69);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(114, 198, 234);
}

body h1 {
  color: rgb(111, 159, 214);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

body h2 {
  color: rgb(120, 201, 136);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(211, 223, 230);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

body h3 {
  color: rgb(164, 151, 240);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

body h4 {
  color: rgb(194, 133, 185);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

body h5 {
  color: rgb(224, 122, 110);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

body h6 {
  color: rgb(217, 196, 122);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

body hr {
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}

body ::-webkit-scrollbar-corner {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}

body ::-webkit-scrollbar-track {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(223, 223, 224);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(223, 223, 224);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(223, 223, 224);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(45, 29, 29);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(88, 145, 154);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 145, 154);
  border-right-color: rgb(88, 145, 154);
  border-top-color: rgb(88, 145, 154);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(88, 145, 154);
}`,
    footer: `body footer {
  background-color: rgb(10, 10, 11);
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  border-top-left-radius: 10px;
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(111, 122, 136);
  text-decoration: rgb(111, 122, 136);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(223, 223, 224);
  text-decoration: rgb(223, 223, 224);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body li.section-li > .section .meta {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(223, 223, 224);
  text-decoration: rgb(223, 223, 224);
}

body ul.section-ul {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(88, 145, 154);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(88, 145, 154);
  border-right-color: rgb(88, 145, 154);
  border-top-color: rgb(88, 145, 154);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(88, 145, 154);
}

body .darkmode svg {
  color: rgb(88, 145, 154);
  stroke: rgb(88, 145, 154);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(111, 122, 136);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(111, 122, 136);
  border-right-color: rgb(111, 122, 136);
  border-top-color: rgb(111, 122, 136);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(111, 122, 136);
}

body .breadcrumb-element p {
  color: rgb(121, 138, 142);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

body .metadata {
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(111, 122, 136);
  border-left-color: rgb(111, 122, 136);
  border-right-color: rgb(111, 122, 136);
  border-top-color: rgb(111, 122, 136);
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(10, 10, 11);
}

body .page-header h2.page-title {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(225, 225, 235);
  text-decoration: underline dotted rgb(225, 225, 235);
}

body details {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body input[type=text] {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 252, 254);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 252, 254);
  border-right-color: rgb(255, 252, 254);
  border-top-color: rgb(255, 252, 254);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 252, 254);
  font-family: "??", "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

body sub {
  color: rgb(225, 225, 235);
}

body summary {
  color: rgb(225, 225, 235);
}

body sup {
  color: rgb(225, 225, 235);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254;
  --accent-l: 68%;
  --accent-s: 80%;
  --background-modifier-active-hover: #ebebf2;
  --background-modifier-border: #c7c7ca;
  --background-modifier-border-focus: #8a8a8a;
  --background-modifier-border-hover: #a6a6a6;
  --background-modifier-form-field: #e3edf4;
  --background-modifier-form-field-hover: #e3edf4;
  --background-modifier-hover: #e6f3f6;
  --background-primary: #efefe7;
  --background-primary-alt: #f3f3f2;
  --background-secondary: #e6e6dd;
  --background-secondary-alt: #ececeb;
  --bases-cards-background: #efefe7;
  --bases-cards-border-width: 2px;
  --bases-cards-cover-background: #f3f3f2;
  --bases-cards-font-size: 0.8em;
  --bases-cards-radius: 10px;
  --bases-cards-shadow: 0 0 0 1px #c7c7ca;
  --bases-cards-shadow-hover: 0 0 0 1px #a6a6a6;
  --bases-embed-border-color: #c7c7ca;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-color: #5e6978;
  --bases-group-heading-property-size: 13px;
  --bases-group-heading-value-size: 0.8em;
  --bases-header-border-width: 0 0 2px 0;
  --bases-table-border-color: #c5c5c5;
  --bases-table-cell-background-active: #efefe7;
  --bases-table-cell-background-disabled: #f3f3f2;
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.05);
  --bases-table-cell-shadow-active: 0 0 0 2px #8a8a8a;
  --bases-table-cell-shadow-focus: 0 0 0 2px #9fc593;
  --bases-table-column-border-width: 2px;
  --bases-table-container-border-radius: 8px;
  --bases-table-container-border-width: 2px;
  --bases-table-font-size: 0.8em;
  --bases-table-group-background: #f3f3f2;
  --bases-table-header-background: #efefe7;
  --bases-table-header-background-hover: #e6f3f6;
  --bases-table-header-color: #5e6978;
  --bases-table-row-background-hover: #dae6d8;
  --bases-table-row-border-width: 2px;
  --bases-table-summary-background: #efefe7;
  --bases-table-summary-background-hover: #e6f3f6;
  --blockquote-background-color: #f6f2f6;
  --blockquote-border-color: #8b62b5;
  --blockquote-border-thickness: 4px;
  --blockquote-color: #4c4049;
  --blur-background: color-mix(in srgb, #efefe7 65%, transparent) linear-gradient(#efefe7, color-mix(in srgb, #efefe7 65%, transparent));
  --bold-color: #754b79;
  --bold-weight: 700;
  --border-width: 2px;
  --button-radius: 0;
  --callout-radius: 8px;
  --canvas-background: #efefe7;
  --canvas-card-label-color: #7b8b8f;
  --canvas-controls-radius: 8px;
  --caret-color: #1f7a1f;
  --checkbox-border-color: #7b8b8f;
  --checkbox-border-color-hover: #5e6978;
  --checkbox-color: #6186ec;
  --checkbox-color-hover: #e9626d;
  --checkbox-margin-inline-start: 0;
  --checkbox-marker-color: #efefe7;
  --checkbox-radius: 25%;
  --checkbox-size: 1.2em;
  --checklist-done-color: #283f42;
  --checklist-done-decoration: none;
  --clickable-icon-radius: 0;
  --code-background: #fefdf6;
  --code-border-color: #c7c7ca;
  --code-bracket-background: #e6f3f6;
  --code-comment: #091c00;
  --code-function: #23800b;
  --code-important: #7e6909;
  --code-keyword: #01818f;
  --code-normal: #0c0c0c;
  --code-operator: #950007;
  --code-property: #00339f;
  --code-punctuation: #1a1919;
  --code-radius: 0px;
  --code-size: 0.8em;
  --code-string: #845b02;
  --code-tag: #193164;
  --code-value: #4e1d5f;
  --collapse-icon-color: #7b8b8f;
  --collapse-icon-color-collapsed: #007ab3;
  --color-accent: rgb(139, 108, 239);
  --color-accent-1: rgb(155, 130, 242);
  --color-accent-2: rgb(170, 153, 245);
  --color-accent-hsl: 254, 80%, 68%;
  --divider-color: #c7c7ca;
  --divider-color-hover: #9fc593;
  --dropdown-background: #c6def5;
  --dropdown-background-hover: #f7d7e9;
  --embed-block-shadow-hover: 0 0 0 1px #c7c7ca, inset 0 0 0 1px #c7c7ca;
  --embed-border-start: 2px solid #9fc593;
  --file-header-background: #efefe7;
  --file-header-background-focused: #efefe7;
  --file-header-border: none;
  --file-header-font: '??', "Open Sans Regular Obsidian", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 0.8rem;
  --file-line-width: 1000px;
  --flair-background: #c6def5;
  --flair-color: #282828;
  --font-interface: '??', "Open Sans Regular Obsidian", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Open Sans Regular Obsidian", sans-serif;
  --font-mermaid: '??', "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Source Code Pro Medium Obsidian", monospace;
  --font-print: '??', '??', "Open Sans Regular Obsidian", sans-serif, 'Arial';
  --font-smaller: 0.8em;
  --font-smallest: 0.65em;
  --font-text: '??', "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Open Sans Regular Obsidian", sans-serif;
  --font-ui-larger: 18px;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: #c7c7ca;
  --footnote-divider-width: 2px;
  --footnote-id-color: #5e6978;
  --footnote-id-color-no-occurrences: #7b8b8f;
  --footnote-input-background-active: #e6f3f6;
  --footnote-line-height: 1.61;
  --footnote-radius: 8px;
  --footnote-size: 0.8em;
  --graph-line: #1560b3;
  --graph-node: #9a216e;
  --graph-node-attachment: #00b3cc;
  --graph-node-focused: #0ca332;
  --graph-node-tag: #a04a7d;
  --graph-node-unresolved: #e0d058;
  --graph-text: #282828;
  --h1-color: #2b69b1;
  --h1-font: "Open Sans Regular Obsidian", sans-serif;
  --h1-size: 1.9em;
  --h1-weight: 400;
  --h2-color: #349b60;
  --h2-font: "Open Sans Regular Obsidian", sans-serif;
  --h2-size: 1.75em;
  --h2-weight: 400;
  --h3-color: #6655c9;
  --h3-font: "Open Sans Regular Obsidian", sans-serif;
  --h3-size: 1.61em;
  --h3-weight: 400;
  --h4-color: #a44f8a;
  --h4-font: "Open Sans Regular Obsidian", sans-serif;
  --h4-size: 1.45em;
  --h4-weight: 400;
  --h5-color: #c64539;
  --h5-font: "Open Sans Regular Obsidian", sans-serif;
  --h5-line-height: 1.61;
  --h5-size: 1.33em;
  --h5-weight: 400;
  --h6-color: #a68a2d;
  --h6-font: "Open Sans Regular Obsidian", sans-serif;
  --h6-line-height: 1.61;
  --h6-size: 1.23em;
  --h6-weight: 400;
  --heading-formatting: #7b8b8f;
  --hr-color: #5e6b72;
  --hr-thickness: 1px;
  --icon-color: #075661;
  --icon-color-active: #007ab3;
  --icon-color-focused: #1ebbd3;
  --icon-color-hover: #32a732;
  --icon-opacity: 1;
  --indentation-guide-color: #2a8282;
  --indentation-guide-color-active: #7a3d87;
  --indentation-guide-editing-indent: 1.1em;
  --indentation-guide-source-indent: 0.85em;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #354247;
  --inline-title-font: "Open Sans Regular Obsidian", sans-serif;
  --inline-title-line-height: 1.61;
  --inline-title-size: 2.2em;
  --inline-title-weight: 400;
  --input-border-width: 2px;
  --input-date-separator: #7b8b8f;
  --input-placeholder-color: #7b8b8f;
  --interactive-accent: #9fc593;
  --interactive-accent-hover: #f5d7d7;
  --interactive-accent-hsl: 254, 80%, 68%;
  --interactive-hover: #f7d7e9;
  --interactive-normal: #c6def5;
  --italic-color: #1e4a7d;
  --line-height-normal: 1.61;
  --line-height-tight: 1.4;
  --link-color: #016bb8;
  --link-color-hover: #028e8e;
  --link-decoration: none;
  --link-decoration-thickness: 1px;
  --link-external-color: #bfacf1;
  --link-external-color-hover: #d0839e;
  --link-unresolved-color: #853232;
  --link-unresolved-decoration-color: #6aa6d8;
  --link-unresolved-opacity: 0.9;
  --list-bullet-size: 0.31em;
  --list-indent: 2.8em;
  --list-indent-editing: 1em;
  --list-indent-source: 1em;
  --list-marker-color: #3693c2;
  --list-marker-color-collapsed: #2a8f2a;
  --list-marker-color-hover: #b338a6;
  --list-spacing: 0.12em;
  --menu-background: #e6e6dd;
  --menu-border-color: #a6a6a6;
  --menu-border-width: 2px;
  --menu-radius: 10px;
  --metadata-border-color: #c7c7ca;
  --metadata-divider-color: #c7c7ca;
  --metadata-gap: 1px;
  --metadata-input-background-active: #e6f3f6;
  --metadata-input-font: '??', "Open Sans Regular Obsidian", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.8em;
  --metadata-input-text-color: #282828;
  --metadata-label-background-active: #e6f3f6;
  --metadata-label-font: '??', "Open Sans Regular Obsidian", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.8em;
  --metadata-label-text-color: #2f2f30;
  --metadata-label-text-color-hover: #5e6978;
  --metadata-label-width: 8.5em;
  --metadata-property-background: #eae9e0;
  --metadata-property-background-active: #e6f3f6;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8a8a8a;
  --metadata-property-box-shadow-hover: 0 0 0 2px #a6a6a6;
  --metadata-property-radius: 0;
  --metadata-property-radius-focus: 0px;
  --metadata-property-radius-hover: 0;
  --metadata-sidebar-input-font-size: 0.8em;
  --metadata-sidebar-label-font-size: 0.8em;
  --modal-background: #efefe7;
  --modal-border-color: #2a9191;
  --modal-border-width: 2px;
  --modal-community-sidebar-width: 290px;
  --modal-max-width: 1000px;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #2e6c28;
  --nav-collapse-icon-color-collapsed: #7b8b8f;
  --nav-heading-color: #282828;
  --nav-heading-color-collapsed: #7b8b8f;
  --nav-heading-color-collapsed-hover: #5e6978;
  --nav-heading-color-hover: #282828;
  --nav-indentation-guide-color: #4266a1;
  --nav-item-background-active: #f0e0e0;
  --nav-item-background-hover: #e0f0e3;
  --nav-item-background-selected: rgba(139, 108, 239, 0.15);
  --nav-item-color: #2c2c2d;
  --nav-item-color-active: #000000;
  --nav-item-color-highlighted: #007ab3;
  --nav-item-color-hover: #000000;
  --nav-item-color-selected: #282828;
  --nav-item-radius: 8px;
  --nav-item-size: 14px;
  --nav-tag-color: #7b8b8f;
  --nav-tag-color-active: #5e6978;
  --nav-tag-color-hover: #5e6978;
  --nav-tag-radius: 8px;
  --pdf-background: #efefe7;
  --pdf-page-background: #efefe7;
  --pdf-sidebar-background: #efefe7;
  --pill-border-color: #c7c7ca;
  --pill-border-color-hover: #a6a6a6;
  --pill-border-width: 2px;
  --pill-color: #5e6978;
  --pill-color-hover: #282828;
  --pill-color-remove: #7b8b8f;
  --pill-color-remove-hover: #007ab3;
  --popover-height: 600px;
  --popover-max-height: 100vh;
  --popover-pdf-height: 700px;
  --popover-pdf-width: 700px;
  --popover-width: 800px;
  --prompt-background: #efefe7;
  --prompt-border-color: #2a9191;
  --prompt-border-width: 2px;
  --prompt-width: 1000px;
  --radius-l: 14px;
  --radius-m: 10px;
  --radius-s: 8px;
  --raised-background: color-mix(in srgb, #efefe7 65%, transparent) linear-gradient(#efefe7, color-mix(in srgb, #efefe7 65%, transparent));
  --ribbon-background: #e6e6dd;
  --ribbon-background-collapsed: #efefe7;
  --scrollbar-radius: 14px;
  --search-clear-button-color: #d64c4c;
  --search-icon-color: #5e6978;
  --search-result-background: #efefe7;
  --setting-group-heading-color: #282828;
  --setting-group-heading-size: 16px;
  --setting-items-background: #f3f3f2;
  --setting-items-border-color: #c7c7ca;
  --setting-items-radius: 14px;
  --slider-s-thumb-size: 18px;
  --slider-thumb-border-color: #a43d82;
  --slider-thumb-border-width: 3px;
  --slider-thumb-height: 14px;
  --slider-thumb-radius: 50%;
  --slider-thumb-width: 14px;
  --slider-thumb-y: -5px;
  --slider-track-background: #4a98ac;
  --status-bar-background: #e6e6dd;
  --status-bar-border-color: #c7c7ca;
  --status-bar-border-width: 2px 0 0 2px;
  --status-bar-font-size: 13px;
  --status-bar-radius: 10px 0 0 0;
  --status-bar-text-color: #5e6978;
  --suggestion-background: #efefe7;
  --swatch-height: 24px;
  --swatch-shadow: inset 0 0 0 2px #000001;
  --swatch-width: 24px;
  --tab-background-active: #efefe7;
  --tab-container-background: #ebe7db;
  --tab-curve: 0;
  --tab-divider-color: #d8c9c9;
  --tab-font-size: 0.85em;
  --tab-max-width: 15em;
  --tab-outline-color: #c4bcd6;
  --tab-radius: 0;
  --tab-radius-active: 0;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: #e6e6dd;
  --tab-switcher-menubar-background: linear-gradient(to top, #e6e6dd, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(139, 108, 239);
  --tab-text-color: #6a7779;
  --tab-text-color-active: #2c3b3d;
  --tab-text-color-focused: #374547;
  --tab-text-color-focused-active: #14525a;
  --tab-text-color-focused-active-current: #1a6b73;
  --tab-text-color-focused-highlighted: #a13563;
  --table-add-button-border-color: #c5c5c5;
  --table-add-button-border-width: 2px;
  --table-border-color: #c5c5c5;
  --table-column-min-width: 3ch;
  --table-drag-handle-background-active: #2a91a1;
  --table-drag-handle-color: #aa3535;
  --table-drag-handle-color-active: #9eb000;
  --table-header-background: #e3e3e3;
  --table-header-background-hover: #f0e6ef;
  --table-header-border-color: #d9d9d9;
  --table-header-color: #2e2f33;
  --table-header-size: 0.8em;
  --table-line-height: 1.4;
  --table-row-alt-background-hover: #dae6d8;
  --table-row-background-hover: #dae6d8;
  --table-selection: rgba(139, 108, 239, 0.05);
  --table-selection-border-color: #2a91a1;
  --table-text-size: 0.8em;
  --tag-background: rgba(139, 108, 239, 0.1);
  --tag-background-hover: #d8d3e6;
  --tag-border-color: rgba(139, 108, 239, 0.15);
  --tag-border-color-hover: rgba(139, 108, 239, 0.15);
  --tag-color: #007ab3;
  --tag-color-hover: #007ab3;
  --tag-radius: 0;
  --tag-size: 0.8em;
  --text-accent: #007ab3;
  --text-accent-hover: #009999;
  --text-faint: #7b8b8f;
  --text-highlight-bg: #c2e7b4;
  --text-muted: #5e6978;
  --text-normal: #282828;
  --text-on-accent: #1c1f24;
  --text-selection: #b0cbe8;
  --titlebar-background: #e6e6dd;
  --titlebar-background-focused: #ececeb;
  --titlebar-border-color: #c7c7ca;
  --titlebar-text-color: #5e6978;
  --titlebar-text-color-focused: #282828;
  --vault-profile-color: #282828;
  --vault-profile-color-hover: #282828;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 231, 219);
  color: rgb(40, 40, 40);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(239, 239, 231);
  color: rgb(40, 40, 40);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 230, 221);
  color: rgb(40, 40, 40);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(199, 199, 202);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 231, 219);
  border-left-color: rgb(199, 199, 202);
  color: rgb(40, 40, 40);
}

body div#quartz-root {
  background-color: rgb(239, 239, 231);
  color: rgb(40, 40, 40);
}`,
    typography: `body .page article p > b, b {
  color: rgb(117, 75, 121);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 75, 121) none 0px;
  text-decoration: rgb(117, 75, 121);
  text-decoration-color: rgb(117, 75, 121);
}

body .page article p > em, em {
  color: rgb(30, 74, 125);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 74, 125) none 0px;
  text-decoration: rgb(30, 74, 125);
  text-decoration-color: rgb(30, 74, 125);
}

body .page article p > i, i {
  color: rgb(30, 74, 125);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 74, 125) none 0px;
  text-decoration: rgb(30, 74, 125);
  text-decoration-color: rgb(30, 74, 125);
}

body .page article p > strong, strong {
  color: rgb(117, 75, 121);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 75, 121) none 0px;
  text-decoration: rgb(117, 75, 121);
  text-decoration-color: rgb(117, 75, 121);
}

body .text-highlight {
  background-color: rgb(194, 231, 180);
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body del {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration: line-through rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body p {
  color: rgb(94, 105, 120);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(94, 105, 120) none 0px;
  text-decoration: rgb(94, 105, 120);
  text-decoration-color: rgb(94, 105, 120);
}`,
    links: `body a.external, footer a {
  color: rgb(191, 172, 241);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 172, 241) none 0px;
  text-decoration: underline 1px rgb(191, 172, 241);
  text-decoration-color: rgb(191, 172, 241);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(1, 107, 184);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(1, 107, 184) none 0px;
  text-decoration: 1px rgb(1, 107, 184);
  text-decoration-color: rgb(1, 107, 184);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(133, 50, 50);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 50, 50) none 0px;
  text-decoration: 1px rgb(106, 166, 216);
  text-decoration-color: rgb(106, 166, 216);
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgb(40, 40, 40);
}

body dt {
  color: rgb(40, 40, 40);
}

body ol > li {
  color: rgb(40, 40, 40);
}

body ol.overflow {
  background-color: rgb(239, 239, 231);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body ul > li {
  color: rgb(40, 40, 40);
}

body ul.overflow {
  background-color: rgb(239, 239, 231);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(123, 139, 143);
  text-decoration: rgb(123, 139, 143);
}

body blockquote {
  background-color: rgb(246, 242, 246);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body table {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 401.078px;
  margin-right: 401.094px;
  width: 159.828px;
}

body td {
  border-bottom-color: rgb(197, 197, 197);
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
  color: rgb(40, 40, 40);
}

body th {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(46, 47, 51);
}

body tr {
  background-color: rgb(227, 227, 227);
}`,
    code: `body code {
  border-bottom-color: rgb(12, 12, 12);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(12, 12, 12);
  border-right-color: rgb(12, 12, 12);
  border-top-color: rgb(12, 12, 12);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(12, 12, 12);
  font-family: "??", "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(199, 199, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(199, 199, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(40, 40, 40);
}

body pre > code > [data-line] {
  border-left-color: rgb(35, 128, 11);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(35, 128, 11);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(35, 128, 11);
  border-left-color: rgb(35, 128, 11);
  border-right-color: rgb(35, 128, 11);
  border-top-color: rgb(35, 128, 11);
}

body pre > code, pre:has(> code) {
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(199, 199, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(199, 199, 202);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body figcaption {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body img {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body video {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    embeds: `body .file-embed {
  background-color: rgb(243, 243, 242);
  border-bottom-color: rgb(94, 105, 120);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(94, 105, 120);
  border-right-color: rgb(94, 105, 120);
  border-top-color: rgb(94, 105, 120);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

body .footnotes {
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

body .transclude {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(159, 197, 147);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body .transclude-inner {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(159, 197, 147);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(40, 63, 66);
  text-decoration: rgb(40, 63, 66);
  text-decoration-color: rgb(40, 63, 66);
}

body input[type=checkbox] {
  border-bottom-color: rgb(123, 139, 143);
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-left-color: rgb(123, 139, 143);
  border-right-color: rgb(123, 139, 143);
  border-top-color: rgb(123, 139, 143);
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='*'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='-'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='/'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='>'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='?'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='I'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='S'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='b'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='c'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='d'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='f'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='i'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='k'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='l'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='p'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='u'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body li.task-list-item[data-task='w'] {
  color: rgb(40, 40, 40);
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(227, 237, 244);
  border-bottom-color: rgb(199, 199, 202);
  border-bottom-width: 2px;
  border-left-color: rgb(199, 199, 202);
  border-left-width: 2px;
  border-right-color: rgb(199, 199, 202);
  border-right-width: 2px;
  border-top-color: rgb(199, 199, 202);
  border-top-width: 2px;
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(239, 239, 231);
  border-bottom-color: rgb(42, 145, 145);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(42, 145, 145);
  border-left-width: 2px;
  border-right-color: rgb(42, 145, 145);
  border-right-width: 2px;
  border-top-color: rgb(42, 145, 145);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > * {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(230, 243, 246);
  color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(42, 145, 145);
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-width: 2px;
  border-left-color: rgb(42, 145, 145);
  border-left-width: 2px;
  border-right-color: rgb(42, 145, 145);
  border-right-width: 2px;
  border-top-color: rgb(42, 145, 145);
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 230, 221);
  border-bottom-width: 2px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(230, 243, 246);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(230, 243, 246);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 122, 179);
}

body h1 {
  color: rgb(43, 105, 177);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

body h2 {
  color: rgb(52, 155, 96);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(53, 66, 71);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

body h3 {
  color: rgb(102, 85, 201);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

body h4 {
  color: rgb(164, 79, 138);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

body h5 {
  color: rgb(198, 69, 57);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

body h6 {
  color: rgb(166, 138, 45);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

body hr {
  border-bottom-color: rgb(199, 199, 202);
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}

body ::-webkit-scrollbar-corner {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}

body ::-webkit-scrollbar-track {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(44, 44, 45);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(44, 44, 45);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(44, 44, 45);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(240, 224, 224);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(7, 86, 97);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 86, 97);
  border-right-color: rgb(7, 86, 97);
  border-top-color: rgb(7, 86, 97);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(7, 86, 97);
}`,
    footer: `body footer {
  background-color: rgb(230, 230, 221);
  border-bottom-color: rgb(199, 199, 202);
  border-left-color: rgb(199, 199, 202);
  border-left-width: 2px;
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  border-top-left-radius: 10px;
  border-top-width: 2px;
  color: rgb(94, 105, 120);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(94, 105, 120);
  text-decoration: rgb(94, 105, 120);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(44, 44, 45);
  text-decoration: rgb(44, 44, 45);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body li.section-li > .section .meta {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(44, 44, 45);
  text-decoration: rgb(44, 44, 45);
}

body ul.section-ul {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(7, 86, 97);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(7, 86, 97);
  border-right-color: rgb(7, 86, 97);
  border-top-color: rgb(7, 86, 97);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(7, 86, 97);
}

body .darkmode svg {
  color: rgb(7, 86, 97);
  stroke: rgb(7, 86, 97);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(94, 105, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(94, 105, 120);
  border-right-color: rgb(94, 105, 120);
  border-top-color: rgb(94, 105, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(94, 105, 120);
}

body .breadcrumb-element p {
  color: rgb(123, 139, 143);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

body .metadata {
  border-bottom-color: rgb(199, 199, 202);
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  color: rgb(94, 105, 120);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(94, 105, 120);
  border-left-color: rgb(94, 105, 120);
  border-right-color: rgb(94, 105, 120);
  border-top-color: rgb(94, 105, 120);
  color: rgb(94, 105, 120);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(230, 230, 221);
}

body .page-header h2.page-title {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(40, 40, 40);
  text-decoration: underline dotted rgb(40, 40, 40);
}

body details {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body input[type=text] {
  border-bottom-color: rgb(47, 47, 48);
  border-left-color: rgb(47, 47, 48);
  border-right-color: rgb(47, 47, 48);
  border-top-color: rgb(47, 47, 48);
  color: rgb(47, 47, 48);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(12, 12, 12);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(12, 12, 12);
  border-right-color: rgb(12, 12, 12);
  border-top-color: rgb(12, 12, 12);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(12, 12, 12);
  font-family: "??", "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 12.8px;
  padding-bottom: 1.28px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 1.28px;
}

body progress {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

body sub {
  color: rgb(40, 40, 40);
}

body summary {
  color: rgb(40, 40, 40);
}

body sup {
  color: rgb(40, 40, 40);
}`,
  },
};
