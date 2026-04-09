import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "arcane", modes: ["dark"], variations: [], fonts: ["roboto"] },
  dark: {
    base: `:root:root {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: hsla(254, 80%, 68%, 0.15) !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.075) !important;
  --background-primary: hsl(250, 15%, 15%) !important;
  --background-primary-alt: hsl(230, 18%, 14%) !important;
  --background-secondary: hsl(250, 16%, 15%) !important;
  --bases-cards-background: hsl(250, 15%, 15%) !important;
  --bases-cards-cover-background: hsl(230, 18%, 14%) !important;
  --bases-group-heading-property-color: #6e6b7e !important;
  --bases-table-cell-background-active: hsl(250, 15%, 15%) !important;
  --bases-table-cell-background-disabled: hsl(230, 18%, 14%) !important;
  --bases-table-cell-background-selected: hsla(254, 80%, 68%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(254, 80%, 68%) !important;
  --bases-table-group-background: hsl(230, 18%, 14%) !important;
  --bases-table-header-background: hsl(250, 15%, 15%) !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075) !important;
  --bases-table-header-color: #6e6b7e !important;
  --bases-table-summary-background: hsl(250, 15%, 15%) !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075) !important;
  --blockquote-background-color: hsl(250, 16%, 20%) !important;
  --blockquote-border-color: #6272a4 !important;
  --blockquote-border-thickness: 5px !important;
  --blue-1: rgb(72, 54, 153) !important;
  --blue-2: #4d3ca6 !important;
  --bodyFont: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #ffb86c !important;
  --bold-weight: 600 !important;
  --callout-question: 224, 222, 113;
  --canvas-background: hsl(250, 15%, 15%) !important;
  --canvas-card-label-color: #6c6498 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color: #6c6498 !important;
  --checkbox-border-color-hover: #6e6b7e !important;
  --checkbox-color: hsl(254, 80%, 68%) !important;
  --checkbox-color-hover: hsl(251, 81.6%, 78.2%) !important;
  --checkbox-marker-color: hsl(250, 15%, 15%) !important;
  --checklist-done-color: #6e6b7e !important;
  --code-background: #282a36 !important;
  --code-bracket-background: rgba(255, 255, 255, 0.075) !important;
  --code-comment: #6272a4 !important;
  --code-function: #ff80bf !important;
  --code-important: #ff80bf !important;
  --code-keyword: #9580ff !important;
  --code-normal: #f8f8f2 !important;
  --code-operator: #ff80bf !important;
  --code-property: #80ffea !important;
  --code-punctuation: #6e6b7e !important;
  --code-string: #ffff80 !important;
  --code-tag: #ff80bf !important;
  --code-value: #8aff80 !important;
  --codeFont: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #6c6498 !important;
  --collapse-icon-color-collapsed: hsl(251, 81.6%, 78.2%) !important;
  --color-accent: hsl(254, 80%, 68%) !important;
  --color-accent-1: hsl(251, 81.6%, 78.2%) !important;
  --color-accent-2: hsl(249, 84%, 87.72%) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --color-highlight-text: #fef3ac !important;
  --cyan-1: #80ffea !important;
  --cyan-2: hsl(181, 97%, 76%) !important;
  --cyan-3: hsl(191, 54%, 64%) !important;
  --cyan-4: hsl(192, 46%, 62%) !important;
  --cyan-5: hsl(194, 50%, 47%) !important;
  --cyan-6: hsl(196, 27%, 41%) !important;
  --dark: #f8f8f2 !important;
  --dark-1: rgba(0, 0, 0, 0.05) !important;
  --dark-10: #2f2f2d !important;
  --dark-11: #303030 !important;
  --dark-12: hsl(230, 8%, 10%) !important;
  --dark-13: hsl(230, 18%, 14%) !important;
  --dark-14: hsl(250, 10%, 11%) !important;
  --dark-15: hsl(250, 15%, 15%) !important;
  --dark-16: hsl(250, 16%, 15%) !important;
  --dark-17: hsl(250, 16%, 20%) !important;
  --dark-18: hsl(231, 11%, 24%) !important;
  --dark-19: #363948 !important;
  --dark-2: rgba(0, 0, 0, 0.15) !important;
  --dark-20: rgba(0, 0, 0, 0.85) !important;
  --dark-21: rgba(0, 0, 0, 0.9) !important;
  --dark-22: black !important;
  --dark-3: rgba(0, 0, 0, 0.2) !important;
  --dark-4: rgba(0, 0, 0, 0.35) !important;
  --dark-5: hsla(254, 80%, 68%, 0.1) !important;
  --dark-6: rgba(54, 57, 72, 0.4) !important;
  --dark-7: #262626 !important;
  --dark-8: #282a36 !important;
  --dark-9: #2a2a2a !important;
  --darkgray: #f8f8f2 !important;
  --default-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --divider-color-hover: #6e6b7e !important;
  --embed-block-shadow-hover: 0 0 0 1px #363636,
        inset 0 0 0 1px #363636 !important;
  --embed-border-bottom: 2px solid #6272a4 !important;
  --embed-border-left: 2px solid #6272a4 !important;
  --embed-border-right: 2px solid #6272a4 !important;
  --embed-border-start: 2px solid hsl(254, 80%, 68%) !important;
  --embed-border-top: 2px solid #6272a4 !important;
  --file-header-background: hsl(250, 15%, 15%) !important;
  --file-header-background-focused: hsl(250, 15%, 15%) !important;
  --file-header-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 32px !important;
  --flair-color: #f8f8f2 !important;
  --font-interface: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-id-color: #6e6b7e !important;
  --footnote-id-color-no-occurrences: #6c6498 !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --graph-controls-settings-name: hsl(192, 46%, 62%) !important;
  --graph-line: hsl(196, 27%, 41%) !important;
  --graph-node: #6e6b7e !important;
  --graph-node-attachment: #6e6b7e !important;
  --graph-node-focused: hsl(317, 62%, 65%) !important;
  --graph-node-resolved: hsl(58, 86%, 66%) !important;
  --graph-node-tag: hsl(151, 72%, 65%) !important;
  --graph-node-unresolved: #6c6498 !important;
  --graph-text: hsl(224, 26%, 70%) !important;
  --gray: #6e6b7e !important;
  --gray-1: hsl(0, 0%, 60%) !important;
  --gray-2: hsl(224, 26%, 70%) !important;
  --gray-3: hsl(210, 2%, 84%) !important;
  --gray-4: #6e6b7e !important;
  --green-1: #8aff80 !important;
  --green-2: hsl(125, 84%, 65%) !important;
  --green-3: hsl(135, 94%, 65%) !important;
  --green-4: hsl(151, 72%, 65%) !important;
  --green-5: #50fa7b !important;
  --green-6: hsl(135, 65%, 65%) !important;
  --green-7: rgba(101, 230, 168, 0.7) !important;
  --h1-color: hsl(0, 100%, 67%) !important;
  --h1-size: 1.802em !important;
  --h2-color: hsl(255, 87%, 78%) !important;
  --h2-size: 1.602em !important;
  --h2-weight: 600 !important;
  --h3-color: hsl(125, 84%, 65%) !important;
  --h3-size: 1.424em !important;
  --h3-weight: 600 !important;
  --h4-color: hsl(21, 100%, 74%) !important;
  --h4-size: 1.266em !important;
  --h4-weight: 600 !important;
  --h5-color: hsl(55, 92%, 76%) !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --h6-color: hsl(181, 97%, 76%) !important;
  --headerFont: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #6c6498 !important;
  --highlight: rgba(255, 255, 255, 0.075) !important;
  --icon-color: #6e6b7e !important;
  --icon-color-active: hsl(0, 0%, 60%) !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: #6e6b7e !important;
  --inline-title-color: hsl(0, 100%, 67%) !important;
  --inline-title-size: 1.802em !important;
  --input-date-separator: #6c6498 !important;
  --input-placeholder-color: #6c6498 !important;
  --interactive-accent: hsl(254, 80%, 68%) !important;
  --interactive-accent-hover: hsl(251, 81.6%, 78.2%) !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-accent-rgb: rgb(72, 54, 153) !important;
  --italic-color: #ffff80 !important;
  --light: hsl(250, 15%, 15%) !important;
  --lightgray: hsl(250, 16%, 15%) !important;
  --link-color: #ff80bf !important;
  --link-color-hover: hsla(334, 64%, 66%, 0.9) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(135, 94%, 65%) !important;
  --link-external-color-hover: hsl(135, 65%, 65%) !important;
  --link-unresolved-color: hsl(334, 64%, 66%) !important;
  --link-unresolved-decoration-color: hsla(254, 80%, 68%, 0.3) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-indent: 2em !important;
  --list-marker-color: #6c6498 !important;
  --list-marker-color-collapsed: hsl(251, 81.6%, 78.2%) !important;
  --list-marker-color-hover: #6e6b7e !important;
  --menu-background: hsl(250, 16%, 15%) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-input-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075) !important;
  --metadata-label-font: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #6e6b7e !important;
  --metadata-label-text-color-hover: #6e6b7e !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075) !important;
  --modal-background: hsl(250, 15%, 15%) !important;
  --nav-collapse-icon-color: #6c6498 !important;
  --nav-collapse-icon-color-collapsed: #6c6498 !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed: #6c6498 !important;
  --nav-heading-color-collapsed-hover: #6e6b7e !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-background-active: hsl(231, 11%, 24%) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.075) !important;
  --nav-item-background-selected: hsla(254, 80%, 68%, 0.15) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: #6e6b7e !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: #6e6b7e !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #6c6498 !important;
  --nav-tag-color-active: #6e6b7e !important;
  --nav-tag-color-hover: #6e6b7e !important;
  --pdf-background: hsl(250, 15%, 15%) !important;
  --pdf-page-background: hsl(250, 15%, 15%) !important;
  --pdf-sidebar-background: hsl(250, 15%, 15%) !important;
  --pill-color: #6e6b7e !important;
  --pill-color-hover: #6e6b7e !important;
  --pill-color-remove: #6c6498 !important;
  --pill-color-remove-hover: hsl(251, 81.6%, 78.2%) !important;
  --pink-1: #ff80bf !important;
  --pink-2: hsl(317, 62%, 65%) !important;
  --pink-3: hsl(334, 64%, 66%) !important;
  --pink-3-transparent: hsla(334, 64%, 66%, 0.9) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: hsl(250, 15%, 15%) !important;
  --purple-1: #bd93f9 !important;
  --purple-2: hsl(255, 87%, 78%) !important;
  --purple-3: #9580ff !important;
  --purple-4: #6272a4 !important;
  --purple-5: #6c6498 !important;
  --red-1: red !important;
  --red-2: hsl(0, 100%, 67%) !important;
  --red-3: #ff5555 !important;
  --red-4: #FF6654 !important;
  --ribbon-background: hsl(250, 16%, 15%) !important;
  --ribbon-background-collapsed: hsl(250, 15%, 15%) !important;
  --search-clear-button-color: #6e6b7e !important;
  --search-icon-color: #6e6b7e !important;
  --search-result-background: hsl(250, 15%, 15%) !important;
  --search-result-text-color: #262626 !important;
  --secondary: hsl(251, 81.6%, 78.2%) !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: hsl(230, 18%, 14%) !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: hsl(250, 16%, 15%) !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: #6e6b7e !important;
  --suggestion-background: hsl(250, 15%, 15%) !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --tab-background-active: hsl(250, 15%, 15%) !important;
  --tab-container-background: hsl(250, 16%, 15%) !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: hsl(250, 16%, 15%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(250, 16%, 15%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(254, 80%, 68%) !important;
  --tab-text-color: #6c6498 !important;
  --tab-text-color-active: #f1b968 !important;
  --tab-text-color-focused: #6e6b7e !important;
  --tab-text-color-focused-active: #f1b968 !important;
  --tab-text-color-focused-active-current: #f1b968 !important;
  --tab-text-color-focused-highlighted: hsl(251, 81.6%, 78.2%) !important;
  --table-drag-handle-background-active: hsl(254, 80%, 68%) !important;
  --table-drag-handle-color: #6c6498 !important;
  --table-drag-handle-color-active: #f8f8f2 !important;
  --table-header-color: #f8f8f2 !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(254, 80%, 68%, 0.1) !important;
  --table-selection-border-color: hsl(254, 80%, 68%) !important;
  --table-white-space: normal !important;
  --tag-background: none !important;
  --tag-background-hover: none !important;
  --tag-border-color: hsla(254, 80%, 68%, 0.15) !important;
  --tag-border-color-hover: hsla(254, 80%, 68%, 0.15) !important;
  --tag-color: hsl(151, 72%, 65%) !important;
  --tag-color-hover: rgba(101, 230, 168, 0.7) !important;
  --tag-decoration-hover: underline !important;
  --tertiary: #6e6b7e !important;
  --text-accent: hsl(251, 81.6%, 78.2%) !important;
  --text-accent-hover: #6e6b7e !important;
  --text-faint: #6c6498 !important;
  --text-highlight-bg-active: rgba(54, 57, 72, 0.4) !important;
  --text-muted: #6e6b7e !important;
  --text-normal: #f8f8f2 !important;
  --text-on-accent: #f8f8f2 !important;
  --text-selection: hsla(254, 80%, 68%, 0.33) !important;
  --textHighlight: rgba(255, 255, 255, 0.075) !important;
  --titleFont: "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(250, 16%, 15%) !important;
  --titlebar-background-focused: hsl(250, 16%, 15%) !important;
  --titlebar-text-color: #6e6b7e !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --toggle-thumb-color: #f8f8f2 !important;
  --vault-name-color: #f8f8f2 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --white-1: #f8f8f2 !important;
  --white-2: #fff !important;
  --workspace-background-translucent: rgba(0, 0, 0, 0.) !important;
  --yellow-1: #fef3ac !important;
  --yellow-2: #ffff80 !important;
  --yellow-3: hsl(55, 92%, 76%) !important;
  --yellow-4: hsl(58, 86%, 66%) !important;
  --yellow-5: #ffb86c !important;
  --yellow-6: hsl(21, 100%, 74%) !important;
  --yellow-7: #f1b968 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 32, 44);
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(34, 33, 44);
  color: rgb(248, 248, 242);
}

html body .bases-table thead th {
  color: rgb(248, 248, 242);
}

html body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html body .canvas-sidebar {
  background-color: rgb(34, 32, 44);
  border-color: rgb(248, 248, 242);
}

html body .note-properties-key {
  color: rgb(110, 107, 126);
}

html body .note-properties-row {
  border-color: rgb(110, 107, 126);
}

html body .note-properties-tags {
  background-color: rgba(139, 108, 239, 0.1);
  border-radius: 12px;
  color: rgb(171, 154, 245);
}

html body .note-properties-value {
  color: rgb(110, 107, 126);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 32, 44);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 32, 44);
  color: rgb(248, 248, 242);
}

html body div#quartz-root {
  background-color: rgb(34, 33, 44);
  color: rgb(248, 248, 242);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 128);
  outline: rgb(255, 255, 128) none 0px;
  text-decoration-color: rgb(255, 255, 128);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 128);
  outline: rgb(255, 255, 128) none 0px;
  text-decoration-color: rgb(255, 255, 128);
}

html body .page article p > strong, html strong {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .text-highlight {
  background-color: rgb(254, 243, 172);
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html body del {
  color: rgb(108, 100, 152);
  outline: rgb(108, 100, 152) none 0px;
  text-decoration-color: rgb(108, 100, 152);
}

html body h1.article-title {
  color: rgb(110, 107, 126);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 100, 152);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(139, 108, 239);
  border-color: rgb(139, 108, 239);
}

html body p {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(110, 107, 126) none 0px;
  text-decoration-color: rgb(110, 107, 126);
}`,
    links: `html body a.external, html footer a {
  color: rgb(82, 250, 124);
  outline: rgb(82, 250, 124) none 0px;
  text-decoration-color: rgb(82, 250, 124);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 191);
  outline: rgb(255, 128, 191) none 0px;
  text-decoration-color: rgb(255, 128, 191);
}

html body a.internal.broken {
  color: rgb(224, 113, 161);
  outline: rgb(224, 113, 161) none 0px;
  text-decoration: rgba(139, 108, 239, 0.3);
  text-decoration-color: rgba(139, 108, 239, 0.3);
}`,
    lists: `html body dd {
  color: rgb(248, 248, 242);
}

html body dt {
  color: rgb(248, 248, 242);
}

html body ol > li {
  color: rgb(114, 195, 213);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul > li {
  color: rgb(114, 195, 213);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(108, 100, 152);
}

html body blockquote {
  background-color: rgb(46, 43, 59);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body table {
  color: rgb(248, 248, 242);
}

html body td {
  color: rgb(248, 248, 242);
}

html body th {
  color: rgb(248, 248, 242);
}`,
    code: `html body code {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: "SF Mono", Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(248, 248, 242);
  font-family: "SF Mono", Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

html body pre > code > [data-line] {
  border-left-color: rgb(138, 255, 128);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(138, 255, 128);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(138, 255, 128);
  border-left-color: rgb(138, 255, 128);
  border-right-color: rgb(138, 255, 128);
  border-top-color: rgb(138, 255, 128);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html body pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body figcaption {
  color: rgb(114, 195, 213);
}

html body figure {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body img {
  border-bottom-color: rgb(255, 87, 87);
  border-left-color: rgb(255, 87, 87);
  border-right-color: rgb(255, 87, 87);
  border-top-color: rgb(255, 87, 87);
}

html body video {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(29, 31, 42);
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
}

html body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .transclude {
  border-bottom-color: rgb(98, 114, 164);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(139, 108, 239);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(98, 114, 164);
  border-top-style: solid;
  border-top-width: 2px;
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-style: solid;
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-style: solid;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(108, 100, 152);
  border-left-color: rgb(108, 100, 152);
  border-right-color: rgb(108, 100, 152);
  border-top-color: rgb(108, 100, 152);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(114, 195, 213);
  text-decoration-color: rgb(114, 195, 213);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.25);
  border-left-color: rgba(224, 222, 113, 0.25);
  border-right-color: rgba(224, 222, 113, 0.25);
  border-top-color: rgba(224, 222, 113, 0.25);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  color: rgb(248, 248, 242);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 33, 44);
}

html body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(34, 32, 44);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(248, 248, 242);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(139, 108, 239, 0.1);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(171, 154, 245);
}

html body h1 {
  color: rgb(255, 87, 87);
}

html body h2 {
  color: rgb(174, 150, 248);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 87, 87);
}

html body h3 {
  color: rgb(91, 241, 103);
}

html body h4 {
  color: rgb(255, 169, 122);
}

html body h5 {
  color: rgb(250, 241, 137);
}

html body h6 {
  color: rgb(134, 251, 253);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 33, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 33, 44);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 214, 215);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 214, 215);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}`,
    footer: `html body footer {
  background-color: rgb(34, 32, 44);
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(110, 107, 126);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 107, 126);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body li.section-li > .section .meta {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 107, 126);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

html body .darkmode svg {
  color: rgb(110, 107, 126);
  stroke: rgb(110, 107, 126);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

html body .breadcrumb-element p {
  color: rgb(108, 100, 152);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
  color: rgb(114, 195, 213);
}

html body .metadata {
  color: rgb(110, 107, 126);
}

html body .metadata-properties {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
}

html body .navigation-progress {
  background-color: rgb(34, 32, 44);
}

html body .page-header h2.page-title {
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(114, 195, 213);
}

html body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body input[type=text] {
  border-bottom-color: rgb(110, 107, 126);
  border-left-color: rgb(110, 107, 126);
  border-right-color: rgb(110, 107, 126);
  border-top-color: rgb(110, 107, 126);
  color: rgb(110, 107, 126);
  font-family: "??", "??", "SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body progress {
  border-bottom-color: rgb(114, 195, 213);
  border-left-color: rgb(114, 195, 213);
  border-right-color: rgb(114, 195, 213);
  border-top-color: rgb(114, 195, 213);
}

html body sub {
  color: rgb(114, 195, 213);
}

html body summary {
  color: rgb(248, 248, 242);
}

html body sup {
  color: rgb(114, 195, 213);
}

html body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(139, 108, 239, 0.15);
  border-left-color: rgba(139, 108, 239, 0.15);
  border-right-color: rgba(139, 108, 239, 0.15);
  border-top-color: rgba(139, 108, 239, 0.15);
  color: rgb(101, 230, 168);
}`,
  },
  light: {},
};
