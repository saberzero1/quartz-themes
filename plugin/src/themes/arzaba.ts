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
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: #2c2c32 !important;
  --background-modifier-border: #3b3b3e !important;
  --background-modifier-border-focus: #282828 !important;
  --background-modifier-border-hover: #282828 !important;
  --background-modifier-form-field: #1f2f3d !important;
  --background-modifier-form-field-hover: #1f2f3d !important;
  --background-modifier-hover: #1b3b45 !important;
  --background-primary: #050606 !important;
  --background-primary-alt: #101113 !important;
  --background-secondary: #0a0a0b !important;
  --background-secondary-alt: #1a1d20 !important;
  --bases-cards-background: #050606 !important;
  --bases-cards-cover-background: #101113 !important;
  --bases-cards-font-size: 0.8em !important;
  --bases-cards-radius: 10px !important;
  --bases-cards-shadow: 0 0 0 1px #3b3b3e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #282828 !important;
  --bases-embed-border-color: #3b3b3e !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: #6f7a88 !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-group-heading-value-size: 0.8em !important;
  --bases-table-border-color: #3a3a3a !important;
  --bases-table-cell-background-active: #050606 !important;
  --bases-table-cell-background-disabled: #101113 !important;
  --bases-table-cell-background-selected: hsla(254, 80%, 68%, 0.05) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #282828 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #21431a !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-font-size: 0.8em !important;
  --bases-table-group-background: #101113 !important;
  --bases-table-header-background: #050606 !important;
  --bases-table-header-background-hover: #1b3b45 !important;
  --bases-table-header-color: #6f7a88 !important;
  --bases-table-row-background-hover: #020807 !important;
  --bases-table-summary-background: #050606 !important;
  --bases-table-summary-background-hover: #1b3b45 !important;
  --blockquote-background-color: #130f12 !important;
  --blockquote-border-color: #bd95e6 !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-color: #e4d8e3 !important;
  --blur-background: color-mix(in srgb, #193755 65%, transparent) linear-gradient(#193755, color-mix(in srgb, #193755 65%, transparent)) !important;
  --bodyFont: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #dad79b !important;
  --bold-weight: 700 !important;
  --button-radius: 0 !important;
  --callout-radius: 8px;
  --canvas-background: #050606 !important;
  --canvas-card-label-color: #798a8e !important;
  --canvas-controls-radius: 8px !important;
  --caret-color: #6cda6c !important;
  --checkbox-border-color: #798a8e !important;
  --checkbox-border-color-hover: #6f7a88 !important;
  --checkbox-color: #6186ec !important;
  --checkbox-color-hover: #e9626d !important;
  --checkbox-margin-inline-start: 0 !important;
  --checkbox-marker-color: #050606 !important;
  --checkbox-radius: 25% !important;
  --checkbox-size: 1.2em !important;
  --checklist-done-color: #283f42 !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #000000 !important;
  --code-border-color: #3b3b3e !important;
  --code-bracket-background: #1b3b45 !important;
  --code-comment: #8a8a8a !important;
  --code-function: #96cf70 !important;
  --code-important: #e4d386 !important;
  --code-keyword: #56B6C2 !important;
  --code-normal: #fffcfe !important;
  --code-operator: #e9626d !important;
  --code-property: #6186ec !important;
  --code-punctuation: #e2e8ff !important;
  --code-radius: 12px !important;
  --code-size: 0.8em !important;
  --code-string: #E5C07B !important;
  --code-tag: #6186ec !important;
  --code-value: #d66af7 !important;
  --codeFont: "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #798a8e !important;
  --collapse-icon-color-collapsed: #72c6ea !important;
  --color-accent: hsl(254, 80%, 68%) !important;
  --color-accent-1: hsl(251, 81.6%, 78.2%) !important;
  --color-accent-2: hsl(249, 84%, 87.72%) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --dark: #e1e1eb !important;
  --darkgray: #e1e1eb !important;
  --divider-color: #3b3b3e !important;
  --divider-color-hover: #21431a !important;
  --dropdown-background: #193755 !important;
  --dropdown-background-hover: #2c0f23 !important;
  --embed-block-shadow-hover: 0 0 0 1px #3b3b3e, inset 0 0 0 1px #3b3b3e !important;
  --embed-border-start: 2px solid #21431a !important;
  --file-header-background: #050606 !important;
  --file-header-background-focused: #050606 !important;
  --file-header-border: none !important;
  --file-header-font: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 0.8rem !important;
  --file-header-font-weight: 100 !important;
  --file-line-width: 1000px !important;
  --flair-background: #193755 !important;
  --flair-color: #e1e1eb !important;
  --font-interface: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Open Sans Light Obsidian", sans-serif !important;
  --font-mermaid: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Source Code Pro Medium Obsidian", monospace !important;
  --font-print: "Open Sans Light Obsidian", sans-serif, Arial' !important;
  --font-smaller: 0.8em !important;
  --font-smallest: 0.65em !important;
  --font-text: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Open Sans Light Obsidian", sans-serif !important;
  --font-ui-larger: 18px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: #3b3b3e !important;
  --footnote-id-color: #6f7a88 !important;
  --footnote-id-color-no-occurrences: #798a8e !important;
  --footnote-input-background-active: #1b3b45 !important;
  --footnote-line-height: 1.61 !important;
  --footnote-radius: 8px !important;
  --footnote-size: 0.8em !important;
  --graph-line: #2979ff !important;
  --graph-node: #9b8c06 !important;
  --graph-node-attachment: #00e5ff !important;
  --graph-node-focused: #33ff57 !important;
  --graph-node-tag: #c072a1 !important;
  --graph-node-unresolved: #9f297b !important;
  --graph-text: #e1e1eb !important;
  --gray: #6f7a88 !important;
  --h1-color: #6f9fd6 !important;
  --h1-font: "Open Sans Light Obsidian", sans-serif !important;
  --h1-size: 1.9em !important;
  --h1-weight: 400 !important;
  --h2-color: #78c988 !important;
  --h2-font: "Open Sans Light Obsidian", sans-serif !important;
  --h2-size: 1.75em !important;
  --h2-weight: 400 !important;
  --h3-color: #a497f0 !important;
  --h3-font: "Open Sans Light Obsidian", sans-serif !important;
  --h3-size: 1.61em !important;
  --h3-weight: 400 !important;
  --h4-color: #c285b9 !important;
  --h4-font: "Open Sans Light Obsidian", sans-serif !important;
  --h4-size: 1.45em !important;
  --h4-weight: 400 !important;
  --h5-color: #e07a6e !important;
  --h5-font: "Open Sans Light Obsidian", sans-serif !important;
  --h5-line-height: 1.61 !important;
  --h5-size: 1.33em !important;
  --h5-weight: 400 !important;
  --h6-color: #d9c47a !important;
  --h6-font: "Open Sans Light Obsidian", sans-serif !important;
  --h6-line-height: 1.61 !important;
  --h6-size: 1.23em !important;
  --h6-weight: 400 !important;
  --headerFont: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #798a8e !important;
  --highlight: #246607 !important;
  --hr-color: #637884 !important;
  --hr-thickness: 1px !important;
  --icon-color: #58919a !important;
  --icon-color-active: #72c6ea !important;
  --icon-color-focused: #7ad67f !important;
  --icon-color-hover: #8bb188 !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: #245f5f !important;
  --indentation-guide-color-active: #5a245f !important;
  --indentation-guide-editing-indent: 1.1em !important;
  --indentation-guide-source-indent: 0.85em !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #d3dfe6 !important;
  --inline-title-font: "Open Sans Light Obsidian", sans-serif !important;
  --inline-title-line-height: 1.61 !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 300 !important;
  --input-date-separator: #798a8e !important;
  --input-placeholder-color: #798a8e !important;
  --interactive-accent: #21431a !important;
  --interactive-accent-hover: #602e2e !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-hover: #2c0f23 !important;
  --interactive-normal: #193755 !important;
  --italic-color: #86b7f0 !important;
  --light: #050606 !important;
  --lightgray: #0a0a0b !important;
  --line-height-normal: 1.61 !important;
  --line-height-tight: 1.4 !important;
  --link-color: #9ed2fd !important;
  --link-color-hover: #69d1d1 !important;
  --link-decoration: none !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: #bfacf1 !important;
  --link-external-color-hover: #d0839e !important;
  --link-unresolved-color: #f4b2b2 !important;
  --link-unresolved-decoration-color: #9ed2fd !important;
  --link-unresolved-opacity: 0.9 !important;
  --list-bullet-size: 0.31em !important;
  --list-indent: 2.8em !important;
  --list-indent-editing: 1em !important;
  --list-indent-source: 1em !important;
  --list-marker-color: #70b5d6 !important;
  --list-marker-color-collapsed: #35b035 !important;
  --list-marker-color-hover: #d43dca !important;
  --list-spacing: 0.12em !important;
  --menu-background: #0a0a0b !important;
  --menu-border-color: #282828 !important;
  --menu-radius: 10px !important;
  --metadata-border-color: #3b3b3e !important;
  --metadata-divider-color: #3b3b3e !important;
  --metadata-gap: 1px !important;
  --metadata-input-background-active: #1b3b45 !important;
  --metadata-input-font: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.8em !important;
  --metadata-input-text-color: #e1e1eb !important;
  --metadata-label-background-active: #1b3b45 !important;
  --metadata-label-font: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.8em !important;
  --metadata-label-text-color: #e1e1eb !important;
  --metadata-label-text-color-hover: #6f7a88 !important;
  --metadata-label-width: 8.5em !important;
  --metadata-property-background: #050606 !important;
  --metadata-property-background-active: #1b3b45 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #282828 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #282828 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0px !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-sidebar-input-font-size: 0.8em !important;
  --metadata-sidebar-label-font-size: 0.8em !important;
  --modal-background: #050606 !important;
  --modal-border-color: #4fc0c0 !important;
  --modal-border-width: 2px !important;
  --modal-community-sidebar-width: 290px !important;
  --modal-max-width: 1000px !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #408b39 !important;
  --nav-collapse-icon-color-collapsed: #798a8e !important;
  --nav-heading-color: #e1e1eb !important;
  --nav-heading-color-collapsed: #798a8e !important;
  --nav-heading-color-collapsed-hover: #6f7a88 !important;
  --nav-heading-color-hover: #e1e1eb !important;
  --nav-indentation-guide-color: #6386d2 !important;
  --nav-item-background-active: #2d1d1d !important;
  --nav-item-background-hover: #1d2d1f !important;
  --nav-item-background-selected: hsla(254, 80%, 68%, 0.15) !important;
  --nav-item-color: #dfdfe0 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #72c6ea !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #e1e1eb !important;
  --nav-item-radius: 8px !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #798a8e !important;
  --nav-tag-color-active: #6f7a88 !important;
  --nav-tag-color-hover: #6f7a88 !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #050606 !important;
  --pdf-page-background: #050606 !important;
  --pdf-shadow: 0 0 0 1px #3b3b3e !important;
  --pdf-sidebar-background: #050606 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #3b3b3e !important;
  --pill-border-color: #3b3b3e !important;
  --pill-border-color-hover: #282828 !important;
  --pill-color: #6f7a88 !important;
  --pill-color-hover: #e1e1eb !important;
  --pill-color-remove: #798a8e !important;
  --pill-color-remove-hover: #72c6ea !important;
  --popover-height: 600px !important;
  --popover-max-height: 100vh !important;
  --popover-pdf-height: 700px !important;
  --popover-pdf-width: 700px !important;
  --popover-width: 800px !important;
  --prompt-background: #050606 !important;
  --prompt-border-color: #4fc0c0 !important;
  --prompt-border-width: 2px !important;
  --prompt-width: 1000px !important;
  --radius-l: 14px !important;
  --radius-m: 10px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #193755 65%, transparent) linear-gradient(#193755, color-mix(in srgb, #193755 65%, transparent)) !important;
  --ribbon-background: #0a0a0b !important;
  --ribbon-background-collapsed: #050606 !important;
  --scrollbar-radius: 14px !important;
  --search-clear-button-color: #f15b5b !important;
  --search-icon-color: #6f7a88 !important;
  --search-result-background: #050606 !important;
  --secondary: #72c6ea !important;
  --setting-group-heading-color: #e1e1eb !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #101113 !important;
  --setting-items-border-color: #3b3b3e !important;
  --setting-items-radius: 14px !important;
  --slider-s-thumb-size: 18px !important;
  --slider-thumb-border-color: #da65bb !important;
  --slider-thumb-border-width: 3px !important;
  --slider-thumb-height: 14px !important;
  --slider-thumb-radius: 50% !important;
  --slider-thumb-width: 14px !important;
  --slider-thumb-y: -5px !important;
  --slider-track-background: #176b80 !important;
  --status-bar-background: #0a0a0b !important;
  --status-bar-border-color: #3b3b3e !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 10px 0 0 0 !important;
  --status-bar-text-color: #6f7a88 !important;
  --suggestion-background: #050606 !important;
  --swatch-height: 24px !important;
  --swatch-shadow: inset 0 0 0 2px #000001 !important;
  --swatch-width: 24px !important;
  --tab-background-active: #050606 !important;
  --tab-container-background: #080808 !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #352121 !important;
  --tab-font-size: 0.85em !important;
  --tab-max-width: 15em !important;
  --tab-outline-color: #1f1b32 !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: #0a0a0b !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0a0a0b, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(254, 80%, 68%) !important;
  --tab-text-color: #718183 !important;
  --tab-text-color-active: #a9bfc2 !important;
  --tab-text-color-focused: #8fa2a5 !important;
  --tab-text-color-focused-active: #58919a !important;
  --tab-text-color-focused-active-current: #85bfc5 !important;
  --tab-text-color-focused-highlighted: #2c0f23 !important;
  --table-add-button-border-color: #3a3a3a !important;
  --table-add-button-border-width: 2px !important;
  --table-border-color: #3a3a3a !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #5fa4b0 !important;
  --table-drag-handle-color: #c64e4e !important;
  --table-drag-handle-color-active: #ddff1b !important;
  --table-header-background: #0f0f0f !important;
  --table-header-background-hover: #1b0f17 !important;
  --table-header-border-color: #171717 !important;
  --table-header-color: #d6d7dc !important;
  --table-header-size: 0.8em !important;
  --table-line-height: 1.4 !important;
  --table-row-alt-background-hover: #020807 !important;
  --table-row-background-hover: #020807 !important;
  --table-selection: hsla(254, 80%, 68%, 0.05) !important;
  --table-selection-border-color: #5fa4b0 !important;
  --table-text-size: 0.8em !important;
  --tag-background: hsla(254, 80%, 68%, 0.1) !important;
  --tag-background-hover: #312c47 !important;
  --tag-border-color: hsla(254, 80%, 68%, 0.15) !important;
  --tag-border-color-hover: hsla(254, 80%, 68%, 0.15) !important;
  --tag-color: #72c6ea !important;
  --tag-color-hover: #72c6ea !important;
  --tag-radius: 0 !important;
  --tag-size: 0.8em !important;
  --tertiary: #66cccc !important;
  --text-accent: #72c6ea !important;
  --text-accent-hover: #66cccc !important;
  --text-faint: #798a8e !important;
  --text-highlight-bg: #246607 !important;
  --text-muted: #6f7a88 !important;
  --text-normal: #e1e1eb !important;
  --text-on-accent: #dadde4 !important;
  --text-selection: #32537b !important;
  --textHighlight: #246607 !important;
  --titleFont: "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #0a0a0b !important;
  --titlebar-background-focused: #1a1d20 !important;
  --titlebar-border-color: #3b3b3e !important;
  --titlebar-text-color: #6f7a88 !important;
  --titlebar-text-color-focused: #e1e1eb !important;
  --vault-profile-color: #e1e1eb !important;
  --vault-profile-color-hover: #e1e1eb !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 8, 8);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(5, 6, 6);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(23, 23, 23);
  color: rgb(214, 215, 220);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(10, 10, 11);
  border-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(59, 59, 62);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(111, 122, 136);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(111, 122, 136);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(139, 108, 239, 0.1);
  border-radius: 0px;
  color: rgb(114, 198, 234);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(111, 122, 136);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(10, 10, 11);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(59, 59, 62);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 8, 8);
  border-left-color: rgb(59, 59, 62);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(5, 6, 6);
  color: rgb(225, 225, 235);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(218, 215, 155);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(218, 215, 155) none 0px;
  text-decoration-color: rgb(218, 215, 155);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(134, 183, 240);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(134, 183, 240) none 0px;
  text-decoration-color: rgb(134, 183, 240);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(134, 183, 240);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(134, 183, 240) none 0px;
  text-decoration-color: rgb(134, 183, 240);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(218, 215, 155);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(218, 215, 155) none 0px;
  text-decoration-color: rgb(218, 215, 155);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(36, 102, 7);
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body del {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(225, 225, 235);
  font-size: 12.8px;
  font-weight: 100;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(121, 138, 142);
  border-radius: 25%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(97, 134, 236);
  border-color: rgb(97, 134, 236);
}

html[saved-theme="dark"] body p {
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(111, 122, 136) none 0px;
  text-decoration-color: rgb(111, 122, 136);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(191, 172, 241);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 172, 241) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(191, 172, 241);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(158, 210, 253);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(158, 210, 253) none 0px;
  text-decoration: 1px;
  text-decoration-color: rgb(158, 210, 253);
  text-decoration-thickness: 1px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(244, 178, 178);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 178, 178) none 0px;
  text-decoration: 1px rgb(158, 210, 253);
  text-decoration-color: rgb(158, 210, 253);
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body dt {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(121, 138, 142);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(19, 15, 18);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body table {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 403.438px;
  margin-right: 403.438px;
  width: 155.125px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(58, 58, 58);
  border-left-color: rgb(58, 58, 58);
  border-right-color: rgb(58, 58, 58);
  border-top-color: rgb(58, 58, 58);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(23, 23, 23);
  border-left-color: rgb(23, 23, 23);
  border-right-color: rgb(23, 23, 23);
  border-top-color: rgb(23, 23, 23);
  color: rgb(214, 215, 220);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(15, 15, 15);
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(150, 207, 112);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(150, 207, 112);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(150, 207, 112);
  border-left-color: rgb(150, 207, 112);
  border-right-color: rgb(150, 207, 112);
  border-top-color: rgb(150, 207, 112);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(111, 159, 214);
  border-left-color: rgb(111, 159, 214);
  border-right-color: rgb(111, 159, 214);
  border-top-color: rgb(111, 159, 214);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
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

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(33, 67, 26);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(121, 138, 142);
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-left-color: rgb(121, 138, 142);
  border-right-color: rgb(121, 138, 142);
  border-top-color: rgb(121, 138, 142);
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(225, 225, 235);
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(5, 6, 6);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(5, 6, 6);
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
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgb(31, 47, 61);
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(225, 225, 235) none 0px;
  text-decoration-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 225, 235);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(27, 59, 69);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 10, 11);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(27, 59, 69);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(114, 198, 234);
}

html[saved-theme="dark"] body h1 {
  color: rgb(111, 159, 214);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(120, 201, 136);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(211, 223, 230);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(164, 151, 240);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(194, 133, 185);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(224, 122, 110);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(217, 196, 122);
  font-family: "Open Sans Light Obsidian", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(5, 6, 6) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 6, 6);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(99, 134, 210);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(225, 225, 235);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(10, 10, 11);
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  border-top-left-radius: 10px;
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(111, 122, 136);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(223, 223, 224);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(223, 223, 224);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(223, 223, 224);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(88, 145, 154);
  stroke: rgb(88, 145, 154);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(121, 138, 142);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(59, 59, 62);
  border-left-color: rgb(59, 59, 62);
  border-right-color: rgb(59, 59, 62);
  border-top-color: rgb(59, 59, 62);
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(111, 122, 136);
  border-left-color: rgb(111, 122, 136);
  border-right-color: rgb(111, 122, 136);
  border-top-color: rgb(111, 122, 136);
  color: rgb(111, 122, 136);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(10, 10, 11);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
  color: rgb(225, 225, 235);
  font-family: "??", "Open Sans Light Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(225, 225, 235);
  border-left-color: rgb(225, 225, 235);
  border-right-color: rgb(225, 225, 235);
  border-top-color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body sub {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body summary {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body sup {
  color: rgb(225, 225, 235);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(114, 198, 234);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: #ebebf2 !important;
  --background-modifier-border: #c7c7ca !important;
  --background-modifier-border-focus: #8a8a8a !important;
  --background-modifier-border-hover: #a6a6a6 !important;
  --background-modifier-form-field: #e3edf4 !important;
  --background-modifier-form-field-hover: #e3edf4 !important;
  --background-modifier-hover: #e6f3f6 !important;
  --background-primary: #efefe7 !important;
  --background-primary-alt: #f3f3f2 !important;
  --background-secondary: #e6e6dd !important;
  --background-secondary-alt: #ececeb !important;
  --bases-cards-background: #efefe7 !important;
  --bases-cards-border-width: 2px !important;
  --bases-cards-cover-background: #f3f3f2 !important;
  --bases-cards-font-size: 0.8em !important;
  --bases-cards-radius: 10px !important;
  --bases-cards-shadow: 0 0 0 1px #c7c7ca !important;
  --bases-cards-shadow-hover: 0 0 0 1px #a6a6a6 !important;
  --bases-embed-border-color: #c7c7ca !important;
  --bases-embed-border-radius: 8px !important;
  --bases-group-heading-property-color: #5e6978 !important;
  --bases-group-heading-property-size: 13px !important;
  --bases-group-heading-value-size: 0.8em !important;
  --bases-header-border-width: 0 0 2px 0 !important;
  --bases-table-border-color: #c5c5c5 !important;
  --bases-table-cell-background-active: #efefe7 !important;
  --bases-table-cell-background-disabled: #f3f3f2 !important;
  --bases-table-cell-background-selected: hsla(254, 80%, 68%, 0.05) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #8a8a8a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #9fc593 !important;
  --bases-table-column-border-width: 2px !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-container-border-width: 2px !important;
  --bases-table-font-size: 0.8em !important;
  --bases-table-group-background: #f3f3f2 !important;
  --bases-table-header-background: #efefe7 !important;
  --bases-table-header-background-hover: #e6f3f6 !important;
  --bases-table-header-color: #5e6978 !important;
  --bases-table-row-background-hover: #dae6d8 !important;
  --bases-table-row-border-width: 2px !important;
  --bases-table-summary-background: #efefe7 !important;
  --bases-table-summary-background-hover: #e6f3f6 !important;
  --blockquote-background-color: #f6f2f6 !important;
  --blockquote-border-color: #8b62b5 !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-color: #4c4049 !important;
  --blur-background: color-mix(in srgb, #efefe7 65%, transparent) linear-gradient(#efefe7, color-mix(in srgb, #efefe7 65%, transparent)) !important;
  --bodyFont: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #754b79 !important;
  --bold-weight: 700 !important;
  --border-width: 2px !important;
  --button-radius: 0 !important;
  --callout-radius: 8px;
  --canvas-background: #efefe7 !important;
  --canvas-card-label-color: #7b8b8f !important;
  --canvas-controls-radius: 8px !important;
  --caret-color: #1f7a1f !important;
  --checkbox-border-color: #7b8b8f !important;
  --checkbox-border-color-hover: #5e6978 !important;
  --checkbox-color: #6186ec !important;
  --checkbox-color-hover: #e9626d !important;
  --checkbox-margin-inline-start: 0 !important;
  --checkbox-marker-color: #efefe7 !important;
  --checkbox-radius: 25% !important;
  --checkbox-size: 1.2em !important;
  --checklist-done-color: #283f42 !important;
  --checklist-done-decoration: none !important;
  --clickable-icon-radius: 0 !important;
  --code-background: #fefdf6 !important;
  --code-border-color: #c7c7ca !important;
  --code-bracket-background: #e6f3f6 !important;
  --code-comment: #091c00 !important;
  --code-function: #23800b !important;
  --code-important: #7e6909 !important;
  --code-keyword: #01818f !important;
  --code-normal: #0c0c0c !important;
  --code-operator: #950007 !important;
  --code-property: #00339f !important;
  --code-punctuation: #1a1919 !important;
  --code-radius: 0px !important;
  --code-size: 0.8em !important;
  --code-string: #845b02 !important;
  --code-tag: #193164 !important;
  --code-value: #4e1d5f !important;
  --codeFont: "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #7b8b8f !important;
  --collapse-icon-color-collapsed: #007ab3 !important;
  --color-accent: hsl(254, 80%, 68%) !important;
  --color-accent-1: hsl(253, 80.8%, 73.1%) !important;
  --color-accent-2: hsl(251, 81.6%, 78.2%) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --dark: #282828 !important;
  --darkgray: #282828 !important;
  --divider-color: #c7c7ca !important;
  --divider-color-hover: #9fc593 !important;
  --dropdown-background: #c6def5 !important;
  --dropdown-background-hover: #f7d7e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #c7c7ca, inset 0 0 0 1px #c7c7ca !important;
  --embed-border-start: 2px solid #9fc593 !important;
  --file-header-background: #efefe7 !important;
  --file-header-background-focused: #efefe7 !important;
  --file-header-border: none !important;
  --file-header-font: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 0.8rem !important;
  --file-line-width: 1000px !important;
  --flair-background: #c6def5 !important;
  --flair-color: #282828 !important;
  --font-interface: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Open Sans Regular Obsidian", sans-serif !important;
  --font-mermaid: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Source Code Pro Medium Obsidian", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Source Code Pro Medium Obsidian", monospace !important;
  --font-print: "Open Sans Regular Obsidian", sans-serif, Arial' !important;
  --font-smaller: 0.8em !important;
  --font-smallest: 0.65em !important;
  --font-text: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Open Sans Regular Obsidian", sans-serif !important;
  --font-ui-larger: 18px !important;
  --font-ui-medium: 16px !important;
  --font-ui-small: 14px !important;
  --font-ui-smaller: 13px !important;
  --footnote-divider-color: #c7c7ca !important;
  --footnote-divider-width: 2px !important;
  --footnote-id-color: #5e6978 !important;
  --footnote-id-color-no-occurrences: #7b8b8f !important;
  --footnote-input-background-active: #e6f3f6 !important;
  --footnote-line-height: 1.61 !important;
  --footnote-radius: 8px !important;
  --footnote-size: 0.8em !important;
  --graph-line: #1560b3 !important;
  --graph-node: #9a216e !important;
  --graph-node-attachment: #00b3cc !important;
  --graph-node-focused: #0ca332 !important;
  --graph-node-tag: #a04a7d !important;
  --graph-node-unresolved: #e0d058 !important;
  --graph-text: #282828 !important;
  --gray: #5e6978 !important;
  --h1-color: #2b69b1 !important;
  --h1-font: "Open Sans Regular Obsidian", sans-serif !important;
  --h1-size: 1.9em !important;
  --h1-weight: 400 !important;
  --h2-color: #349b60 !important;
  --h2-font: "Open Sans Regular Obsidian", sans-serif !important;
  --h2-size: 1.75em !important;
  --h2-weight: 400 !important;
  --h3-color: #6655c9 !important;
  --h3-font: "Open Sans Regular Obsidian", sans-serif !important;
  --h3-size: 1.61em !important;
  --h3-weight: 400 !important;
  --h4-color: #a44f8a !important;
  --h4-font: "Open Sans Regular Obsidian", sans-serif !important;
  --h4-size: 1.45em !important;
  --h4-weight: 400 !important;
  --h5-color: #c64539 !important;
  --h5-font: "Open Sans Regular Obsidian", sans-serif !important;
  --h5-line-height: 1.61 !important;
  --h5-size: 1.33em !important;
  --h5-weight: 400 !important;
  --h6-color: #a68a2d !important;
  --h6-font: "Open Sans Regular Obsidian", sans-serif !important;
  --h6-line-height: 1.61 !important;
  --h6-size: 1.23em !important;
  --h6-weight: 400 !important;
  --headerFont: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #7b8b8f !important;
  --highlight: #c2e7b4 !important;
  --hr-color: #5e6b72 !important;
  --hr-thickness: 1px !important;
  --icon-color: #075661 !important;
  --icon-color-active: #007ab3 !important;
  --icon-color-focused: #1ebbd3 !important;
  --icon-color-hover: #32a732 !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: #2a8282 !important;
  --indentation-guide-color-active: #7a3d87 !important;
  --indentation-guide-editing-indent: 1.1em !important;
  --indentation-guide-source-indent: 0.85em !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #354247 !important;
  --inline-title-font: "Open Sans Regular Obsidian", sans-serif !important;
  --inline-title-line-height: 1.61 !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 400 !important;
  --input-border-width: 2px !important;
  --input-date-separator: #7b8b8f !important;
  --input-placeholder-color: #7b8b8f !important;
  --interactive-accent: #9fc593 !important;
  --interactive-accent-hover: #f5d7d7 !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-hover: #f7d7e9 !important;
  --interactive-normal: #c6def5 !important;
  --italic-color: #1e4a7d !important;
  --light: #efefe7 !important;
  --lightgray: #e6e6dd !important;
  --line-height-normal: 1.61 !important;
  --line-height-tight: 1.4 !important;
  --link-color: #016bb8 !important;
  --link-color-hover: #028e8e !important;
  --link-decoration: none !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: #bfacf1 !important;
  --link-external-color-hover: #d0839e !important;
  --link-unresolved-color: #853232 !important;
  --link-unresolved-decoration-color: #6aa6d8 !important;
  --link-unresolved-opacity: 0.9 !important;
  --list-bullet-size: 0.31em !important;
  --list-indent: 2.8em !important;
  --list-indent-editing: 1em !important;
  --list-indent-source: 1em !important;
  --list-marker-color: #3693c2 !important;
  --list-marker-color-collapsed: #2a8f2a !important;
  --list-marker-color-hover: #b338a6 !important;
  --list-spacing: 0.12em !important;
  --menu-background: #e6e6dd !important;
  --menu-border-color: #a6a6a6 !important;
  --menu-border-width: 2px !important;
  --menu-radius: 10px !important;
  --metadata-border-color: #c7c7ca !important;
  --metadata-divider-color: #c7c7ca !important;
  --metadata-gap: 1px !important;
  --metadata-input-background-active: #e6f3f6 !important;
  --metadata-input-font: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.8em !important;
  --metadata-input-text-color: #282828 !important;
  --metadata-label-background-active: #e6f3f6 !important;
  --metadata-label-font: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.8em !important;
  --metadata-label-text-color: #2f2f30 !important;
  --metadata-label-text-color-hover: #5e6978 !important;
  --metadata-label-width: 8.5em !important;
  --metadata-property-background: #eae9e0 !important;
  --metadata-property-background-active: #e6f3f6 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #8a8a8a !important;
  --metadata-property-box-shadow-hover: 0 0 0 2px #a6a6a6 !important;
  --metadata-property-radius: 0 !important;
  --metadata-property-radius-focus: 0px !important;
  --metadata-property-radius-hover: 0 !important;
  --metadata-sidebar-input-font-size: 0.8em !important;
  --metadata-sidebar-label-font-size: 0.8em !important;
  --modal-background: #efefe7 !important;
  --modal-border-color: #2a9191 !important;
  --modal-border-width: 2px !important;
  --modal-community-sidebar-width: 290px !important;
  --modal-max-width: 1000px !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #2e6c28 !important;
  --nav-collapse-icon-color-collapsed: #7b8b8f !important;
  --nav-heading-color: #282828 !important;
  --nav-heading-color-collapsed: #7b8b8f !important;
  --nav-heading-color-collapsed-hover: #5e6978 !important;
  --nav-heading-color-hover: #282828 !important;
  --nav-indentation-guide-color: #4266a1 !important;
  --nav-item-background-active: #f0e0e0 !important;
  --nav-item-background-hover: #e0f0e3 !important;
  --nav-item-background-selected: hsla(254, 80%, 68%, 0.15) !important;
  --nav-item-color: #2c2c2d !important;
  --nav-item-color-active: #000000 !important;
  --nav-item-color-highlighted: #007ab3 !important;
  --nav-item-color-hover: #000000 !important;
  --nav-item-color-selected: #282828 !important;
  --nav-item-radius: 8px !important;
  --nav-item-size: 14px !important;
  --nav-tag-color: #7b8b8f !important;
  --nav-tag-color-active: #5e6978 !important;
  --nav-tag-color-hover: #5e6978 !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #efefe7 !important;
  --pdf-page-background: #efefe7 !important;
  --pdf-sidebar-background: #efefe7 !important;
  --pill-border-color: #c7c7ca !important;
  --pill-border-color-hover: #a6a6a6 !important;
  --pill-border-width: 2px !important;
  --pill-color: #5e6978 !important;
  --pill-color-hover: #282828 !important;
  --pill-color-remove: #7b8b8f !important;
  --pill-color-remove-hover: #007ab3 !important;
  --popover-height: 600px !important;
  --popover-max-height: 100vh !important;
  --popover-pdf-height: 700px !important;
  --popover-pdf-width: 700px !important;
  --popover-width: 800px !important;
  --prompt-background: #efefe7 !important;
  --prompt-border-color: #2a9191 !important;
  --prompt-border-width: 2px !important;
  --prompt-width: 1000px !important;
  --radius-l: 14px !important;
  --radius-m: 10px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #efefe7 65%, transparent) linear-gradient(#efefe7, color-mix(in srgb, #efefe7 65%, transparent)) !important;
  --ribbon-background: #e6e6dd !important;
  --ribbon-background-collapsed: #efefe7 !important;
  --scrollbar-radius: 14px !important;
  --search-clear-button-color: #d64c4c !important;
  --search-icon-color: #5e6978 !important;
  --search-result-background: #efefe7 !important;
  --secondary: #007ab3 !important;
  --setting-group-heading-color: #282828 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #f3f3f2 !important;
  --setting-items-border-color: #c7c7ca !important;
  --setting-items-radius: 14px !important;
  --slider-s-thumb-size: 18px !important;
  --slider-thumb-border-color: #a43d82 !important;
  --slider-thumb-border-width: 3px !important;
  --slider-thumb-height: 14px !important;
  --slider-thumb-radius: 50% !important;
  --slider-thumb-width: 14px !important;
  --slider-thumb-y: -5px !important;
  --slider-track-background: #4a98ac !important;
  --status-bar-background: #e6e6dd !important;
  --status-bar-border-color: #c7c7ca !important;
  --status-bar-border-width: 2px 0 0 2px !important;
  --status-bar-font-size: 13px !important;
  --status-bar-radius: 10px 0 0 0 !important;
  --status-bar-text-color: #5e6978 !important;
  --suggestion-background: #efefe7 !important;
  --swatch-height: 24px !important;
  --swatch-shadow: inset 0 0 0 2px #000001 !important;
  --swatch-width: 24px !important;
  --tab-background-active: #efefe7 !important;
  --tab-container-background: #ebe7db !important;
  --tab-curve: 0 !important;
  --tab-divider-color: #d8c9c9 !important;
  --tab-font-size: 0.85em !important;
  --tab-max-width: 15em !important;
  --tab-outline-color: #c4bcd6 !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-stacked-font-size: 14px !important;
  --tab-switcher-background: #e6e6dd !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e6e6dd, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(254, 80%, 68%) !important;
  --tab-text-color: #6a7779 !important;
  --tab-text-color-active: #2c3b3d !important;
  --tab-text-color-focused: #374547 !important;
  --tab-text-color-focused-active: #14525a !important;
  --tab-text-color-focused-active-current: #1a6b73 !important;
  --tab-text-color-focused-highlighted: #a13563 !important;
  --table-add-button-border-color: #c5c5c5 !important;
  --table-add-button-border-width: 2px !important;
  --table-border-color: #c5c5c5 !important;
  --table-column-min-width: 3ch !important;
  --table-drag-handle-background-active: #2a91a1 !important;
  --table-drag-handle-color: #aa3535 !important;
  --table-drag-handle-color-active: #9eb000 !important;
  --table-header-background: #e3e3e3 !important;
  --table-header-background-hover: #f0e6ef !important;
  --table-header-border-color: #d9d9d9 !important;
  --table-header-color: #2e2f33 !important;
  --table-header-size: 0.8em !important;
  --table-line-height: 1.4 !important;
  --table-row-alt-background-hover: #dae6d8 !important;
  --table-row-background-hover: #dae6d8 !important;
  --table-selection: hsla(254, 80%, 68%, 0.05) !important;
  --table-selection-border-color: #2a91a1 !important;
  --table-text-size: 0.8em !important;
  --tag-background: hsla(254, 80%, 68%, 0.1) !important;
  --tag-background-hover: #d8d3e6 !important;
  --tag-border-color: hsla(254, 80%, 68%, 0.15) !important;
  --tag-border-color-hover: hsla(254, 80%, 68%, 0.15) !important;
  --tag-color: #007ab3 !important;
  --tag-color-hover: #007ab3 !important;
  --tag-radius: 0 !important;
  --tag-size: 0.8em !important;
  --tertiary: #009999 !important;
  --text-accent: #007ab3 !important;
  --text-accent-hover: #009999 !important;
  --text-faint: #7b8b8f !important;
  --text-highlight-bg: #c2e7b4 !important;
  --text-muted: #5e6978 !important;
  --text-normal: #282828 !important;
  --text-on-accent: #1c1f24 !important;
  --text-selection: #b0cbe8 !important;
  --textHighlight: #c2e7b4 !important;
  --titleFont: "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #e6e6dd !important;
  --titlebar-background-focused: #ececeb !important;
  --titlebar-border-color: #c7c7ca !important;
  --titlebar-text-color: #5e6978 !important;
  --titlebar-text-color-focused: #282828 !important;
  --vault-profile-color: #282828 !important;
  --vault-profile-color-hover: #282828 !important;
  --vault-profile-font-size: 14px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 231, 219);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 239, 231);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(217, 217, 217);
  color: rgb(46, 47, 51);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(239, 239, 231);
  border-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(199, 199, 202);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(94, 105, 120);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(94, 105, 120);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(139, 108, 239, 0.1);
  border-radius: 0px;
  color: rgb(0, 122, 179);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(94, 105, 120);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 230, 221);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(199, 199, 202);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 231, 219);
  border-left-color: rgb(199, 199, 202);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 239, 231);
  color: rgb(40, 40, 40);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(117, 75, 121);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 75, 121) none 0px;
  text-decoration-color: rgb(117, 75, 121);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(30, 74, 125);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 74, 125) none 0px;
  text-decoration-color: rgb(30, 74, 125);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(30, 74, 125);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 74, 125) none 0px;
  text-decoration-color: rgb(30, 74, 125);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(117, 75, 121);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(117, 75, 121) none 0px;
  text-decoration-color: rgb(117, 75, 121);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(194, 231, 180);
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body del {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(40, 40, 40);
  font-size: 12.8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(123, 139, 143);
  border-radius: 25%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(97, 134, 236);
  border-color: rgb(97, 134, 236);
}

html[saved-theme="light"] body p {
  color: rgb(94, 105, 120);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(94, 105, 120) none 0px;
  text-decoration-color: rgb(94, 105, 120);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(191, 172, 241);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 172, 241) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(191, 172, 241);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(1, 107, 184);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(1, 107, 184) none 0px;
  text-decoration: 1px;
  text-decoration-color: rgb(1, 107, 184);
  text-decoration-thickness: 1px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(133, 50, 50);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 50, 50) none 0px;
  text-decoration: 1px rgb(106, 166, 216);
  text-decoration-color: rgb(106, 166, 216);
  text-decoration-thickness: 1px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body dt {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ol > li {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul > li {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(123, 139, 143);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(246, 242, 246);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body table {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-left: 401.078px;
  margin-right: 401.094px;
  width: 159.828px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(197, 197, 197);
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(46, 47, 51);
}

html[saved-theme="light"] body tr {
  background-color: rgb(227, 227, 227);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(35, 128, 11);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(35, 128, 11);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(35, 128, 11);
  border-left-color: rgb(35, 128, 11);
  border-right-color: rgb(35, 128, 11);
  border-top-color: rgb(35, 128, 11);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body figcaption {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(43, 105, 177);
  border-left-color: rgb(43, 105, 177);
  border-right-color: rgb(43, 105, 177);
  border-top-color: rgb(43, 105, 177);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(159, 197, 147);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(123, 139, 143);
  border-bottom-left-radius: 25%;
  border-bottom-right-radius: 25%;
  border-left-color: rgb(123, 139, 143);
  border-right-color: rgb(123, 139, 143);
  border-top-color: rgb(123, 139, 143);
  border-top-left-radius: 25%;
  border-top-right-radius: 25%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(40, 40, 40);
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 239, 231);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 239, 231);
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
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(40, 40, 40) none 0px;
  text-decoration-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(230, 243, 246);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 230, 221);
  border-bottom-width: 2px;
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(230, 243, 246);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(0, 122, 179);
}

html[saved-theme="light"] body h1 {
  color: rgb(43, 105, 177);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(52, 155, 96);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(53, 66, 71);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(102, 85, 201);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(164, 79, 138);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(198, 69, 57);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(166, 138, 45);
  font-family: "Open Sans Regular Obsidian", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(199, 199, 202);
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 239, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 239, 231);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(66, 102, 161);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(40, 40, 40);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
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

html[saved-theme="light"] body footer ul li a {
  color: rgb(94, 105, 120);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(44, 44, 45);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(44, 44, 45);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(44, 44, 45);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(7, 86, 97);
  stroke: rgb(7, 86, 97);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
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

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(123, 139, 143);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(199, 199, 202);
  border-left-color: rgb(199, 199, 202);
  border-right-color: rgb(199, 199, 202);
  border-top-color: rgb(199, 199, 202);
  color: rgb(94, 105, 120);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(94, 105, 120);
  border-left-color: rgb(94, 105, 120);
  border-right-color: rgb(94, 105, 120);
  border-top-color: rgb(94, 105, 120);
  color: rgb(94, 105, 120);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(230, 230, 221);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(40, 40, 40);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(47, 47, 48);
  border-left-color: rgb(47, 47, 48);
  border-right-color: rgb(47, 47, 48);
  border-top-color: rgb(47, 47, 48);
  color: rgb(47, 47, 48);
  font-family: "??", "Open Sans Regular Obsidian", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(40, 40, 40);
  border-right-color: rgb(40, 40, 40);
  border-top-color: rgb(40, 40, 40);
}

html[saved-theme="light"] body sub {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body summary {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body sup {
  color: rgb(40, 40, 40);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 122, 179);
}`,
  },
};
