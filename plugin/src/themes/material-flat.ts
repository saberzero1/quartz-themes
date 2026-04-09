import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-flat",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto", "roboto-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background: hsl(258, 5.28%, 11.5%) !important;
  --background-modifier-border: hsl(258, 8.8%, 15%) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #9c2b2b !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: hsl(258, 5.28%, 11.5%) !important;
  --background-primary-alt: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --background-secondary: hsl(258, 7.04%, 28%) !important;
  --background-secondary-alt: rgb(
    47.14,
    44.93,
    54.75
    ) !important;
  --bases-cards-background: hsl(258, 5.28%, 11.5%) !important;
  --bases-cards-cover-background: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(258, 8.8%, 15%) !important;
  --bases-embed-border-color: hsl(258, 8.8%, 15%) !important;
  --bases-group-heading-property-color: hsl(258, 27.28%, 80%) !important;
  --bases-table-border-color: hsl(258, 8.8%, 15%) !important;
  --bases-table-cell-background-active: hsl(258, 5.28%, 11.5%) !important;
  --bases-table-cell-background-disabled: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 66%, 80%) !important;
  --bases-table-group-background: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --bases-table-header-background: hsl(258, 5.28%, 11.5%) !important;
  --bases-table-header-color: hsl(258, 27.28%, 80%) !important;
  --bases-table-summary-background: hsl(258, 5.28%, 11.5%) !important;
  --big-radius: 24px !important;
  --blockquote-border-color: hsl(258, 66%, 80%) !important;
  --blur-background: color-mix(in srgb, hsl(258, 7.04%, 28%) 65%, transparent) linear-gradient(hsl(258, 7.04%, 28%), color-mix(in srgb, hsl(258, 7.04%, 28%) 65%, transparent)) !important;
  --bodyFont: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold: 650 !important;
  --canvas-background: hsl(258, 5.28%, 11.5%) !important;
  --caret-color: #E5E1E5 !important;
  --checkbox-border-color-hover: hsl(258, 27.28%, 80%) !important;
  --checkbox-color: hsl(258, 66%, 80%) !important;
  --checkbox-color-hover: hsl(258, 66%, 80%) !important;
  --checkbox-marker-color: hsl(258, 5.28%, 11.5%) !important;
  --checklist-done-color: hsl(258, 27.28%, 80%) !important;
  --code-background: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --code-border-color: hsl(258, 8.8%, 15%) !important;
  --code-normal: #E5E1E5 !important;
  --code-punctuation: hsl(258, 27.28%, 80%) !important;
  --codeFont: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: hsl(258, 35.2%, 90%) !important;
  --color-accent: hsl(258, 52.8%, 70%) !important;
  --color-accent-1: hsl(258, 61.6%, 80%) !important;
  --color-accent-2: hsl(258, 70.4%, 90%) !important;
  --dark: #E5E1E5 !important;
  --darkgray: #E5E1E5 !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(258, 66%, 80%) !important;
  --dropdown-background: hsl(258, 7.04%, 28%) !important;
  --dropdown-background-hover: hsl(258, 7.04%, 28%) !important;
  --elevation1: 0.05 !important;
  --elevation2: 0.08 !important;
  --elevation3: 0.11 !important;
  --elevation4: 0.12 !important;
  --elevation5: 0.14 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(258, 8.8%, 15%), inset 0 0 0 1px hsl(258, 8.8%, 15%) !important;
  --embed-border-start: 2px solid hsl(258, 66%, 80%) !important;
  --error: #9c2b2b !important;
  --error-container: #930006 !important;
  --errorContainer: #930006 !important;
  --file-header-background: hsl(258, 5.28%, 11.5%) !important;
  --file-header-background-focused: hsl(258, 5.28%, 11.5%) !important;
  --file-header-font: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(258, 7.04%, 28%) !important;
  --flair-color: #E5E1E5 !important;
  --focus: rgb(
    48.88,
    46.56,
    57
    ) !important;
  --font-interface: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif !important;
  --font-mermaid: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas !important;
  --font-print: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, Arial' !important;
  --font-text: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --footnote-divider-color: hsl(258, 8.8%, 15%) !important;
  --footnote-id-color: hsl(258, 27.28%, 80%) !important;
  --graph-node: hsl(258, 27.28%, 80%) !important;
  --graph-node-focused: hsl(258, 35.2%, 90%) !important;
  --graph-text: #E5E1E5 !important;
  --gray: hsl(258, 27.28%, 80%) !important;
  --h1: 2.25em !important;
  --h2: 20pt !important;
  --h3: 16pt !important;
  --h4: 15pt !important;
  --h5: 14pt !important;
  --h6: 12pt !important;
  --headerFont: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: hsl(258, 7.04%, 28%) !important;
  --hover: rgb(
    41.92,
    40.04,
    48
    ) !important;
  --hr-color: hsl(258, 7.04%, 28%) !important;
  --icon-color: hsl(258, 27.28%, 80%) !important;
  --icon-color-active: hsl(258, 35.2%, 90%) !important;
  --icon-color-focused: #E5E1E5 !important;
  --icon-color-hover: hsl(258, 27.28%, 80%) !important;
  --input-height: 32px !important;
  --input-shadow-hover: inset 0 1000px 0 0 #FFFFFF20 !important;
  --interactive-accent: hsl(258, 66%, 80%) !important;
  --interactive-accent-hover: hsl(258, 66%, 80%) !important;
  --interactive-accent-rgb: hsl(258, 66%, 80%) !important;
  --interactive-hover: hsl(258, 7.04%, 28%) !important;
  --interactive-normal: hsl(258, 7.04%, 28%) !important;
  --interactive-success: #197300 !important;
  --inverse-on-surface: #1C1B1E !important;
  --inverse-surface: #E5E1E5 !important;
  --light: 350 !important;
  --lightgray: hsl(258, 7.04%, 28%) !important;
  --link-color: hsl(258, 35.2%, 90%) !important;
  --link-color-hover: hsl(258, 61.6%, 80%) !important;
  --link-external-color: hsl(258, 35.2%, 90%) !important;
  --link-external-color-hover: hsl(258, 61.6%, 80%) !important;
  --link-unresolved-color: hsl(258, 35.2%, 90%) !important;
  --list-marker-color-collapsed: hsl(258, 35.2%, 90%) !important;
  --list-marker-color-hover: hsl(258, 27.28%, 80%) !important;
  --medium: 500 !important;
  --medium-radius: 16px !important;
  --menu-background: hsl(258, 7.04%, 28%) !important;
  --metadata-border-color: hsl(258, 8.8%, 15%) !important;
  --metadata-divider-color: hsl(258, 8.8%, 15%) !important;
  --metadata-input-font: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #E5E1E5 !important;
  --metadata-label-font: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(258, 27.28%, 80%) !important;
  --metadata-label-text-color-hover: hsl(258, 27.28%, 80%) !important;
  --modal-background: hsl(258, 5.28%, 11.5%) !important;
  --nav-heading-color: #E5E1E5 !important;
  --nav-heading-color-collapsed-hover: hsl(258, 27.28%, 80%) !important;
  --nav-heading-color-hover: #E5E1E5 !important;
  --nav-item-color: hsl(258, 27.28%, 80%) !important;
  --nav-item-color-active: #E5E1E5 !important;
  --nav-item-color-highlighted: hsl(258, 35.2%, 90%) !important;
  --nav-item-color-hover: #E5E1E5 !important;
  --nav-item-color-selected: #E5E1E5 !important;
  --nav-tag-color-active: hsl(258, 27.28%, 80%) !important;
  --nav-tag-color-hover: hsl(258, 27.28%, 80%) !important;
  --on-accent: hsl(258, 5.28%, 11.5%) !important;
  --on-background: #E5E1E5 !important;
  --on-error: #680003 !important;
  --on-error-container: #FFDAD4 !important;
  --on-primary: hsl(258, 5.28%, 11.5%) !important;
  --on-primary-container: hsl(258, 70.4%, 90%) !important;
  --on-secondary: hsl(258, 5.28%, 11.5%) !important;
  --on-secondary-container: hsl(258, 61.6%, 80%) !important;
  --on-surface-variant: hsl(258, 27.28%, 80%) !important;
  --on-tertiary: #482535 !important;
  --on-tertiary-container: hsl(258, 44%, 78%) !important;
  --onError: #680003 !important;
  --onErrorContainer: #FFDAD4 !important;
  --onTertiary: #482535 !important;
  --outline: hsl(258, 44%, 25%) !important;
  --pane-separation: 6px !important;
  --pdf-background: hsl(258, 5.28%, 11.5%) !important;
  --pdf-page-background: hsl(258, 5.28%, 11.5%) !important;
  --pdf-shadow: 0 0 0 1px hsl(258, 8.8%, 15%) !important;
  --pdf-sidebar-background: hsl(258, 5.28%, 11.5%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(258, 8.8%, 15%) !important;
  --pill-border-color: hsl(258, 8.8%, 15%) !important;
  --pill-color: hsl(258, 27.28%, 80%) !important;
  --pill-color-hover: #E5E1E5 !important;
  --pill-color-remove-hover: hsl(258, 35.2%, 90%) !important;
  --primary: hsl(258, 66%, 80%) !important;
  --primary-b: 255 !important;
  --primary-container: hsl(258, 61.6%, 80%) !important;
  --primary-g: 190 !important;
  --primary-inverse: #5F4BBD !important;
  --primary-r: 202 !important;
  --primaryInverse: #5F4BBD !important;
  --prompt-background: hsl(258, 5.28%, 11.5%) !important;
  --raised-background: color-mix(in srgb, hsl(258, 7.04%, 28%) 65%, transparent) linear-gradient(hsl(258, 7.04%, 28%), color-mix(in srgb, hsl(258, 7.04%, 28%) 65%, transparent)) !important;
  --regular: 400 !important;
  --ribbon-background: hsl(258, 7.04%, 28%) !important;
  --ribbon-background-collapsed: hsl(258, 5.28%, 11.5%) !important;
  --search-clear-button-color: hsl(258, 27.28%, 80%) !important;
  --search-icon-color: hsl(258, 27.28%, 80%) !important;
  --search-result-background: hsl(258, 5.28%, 11.5%) !important;
  --secondary: hsl(258, 35.2%, 70%) !important;
  --secondary-container: hsl(258, 5.28%, 11.5%) !important;
  --setting-group-heading-color: #E5E1E5 !important;
  --setting-items-background: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --setting-items-border-color: hsl(258, 8.8%, 15%) !important;
  --slider-track-background: hsl(258, 7.04%, 28%) !important;
  --small-radius: 8px !important;
  --smaller: 0.875em !important;
  --smallest: 0.75em !important;
  --status-bar-background: hsl(258, 7.04%, 28%) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: hsl(258, 27.28%, 80%) !important;
  --suggestion-background: hsl(258, 5.28%, 11.5%) !important;
  --surface: hsl(258, 8.8%, 15%) !important;
  --surface-b: 30 !important;
  --surface-g: 27 !important;
  --surface-mid: hsl(258, 7.92%, 19%) !important;
  --surface-r: 28 !important;
  --surface-variant: hsl(258, 7.04%, 28%) !important;
  --surface1: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --surface2: rgb(
    41.92,
    40.04,
    48
    ) !important;
  --surface3: rgb(
    47.14,
    44.93,
    54.75
    ) !important;
  --surface4: rgb(
    48.88,
    46.56,
    57
    ) !important;
  --surface5: rgb(
    52.36,
    49.82,
    61.5
    ) !important;
  --tab-background-active: hsl(258, 8.8%, 15%) !important;
  --tab-container-background: hsl(258, 7.04%, 28%) !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: hsl(258, 7.04%, 28%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 7.04%, 28%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 52.8%, 70%) !important;
  --tab-text-color-active: hsl(258, 27.28%, 80%) !important;
  --tab-text-color-focused: hsl(258, 27.28%, 80%) !important;
  --tab-text-color-focused-active: hsl(258, 27.28%, 80%) !important;
  --tab-text-color-focused-active-current: #E5E1E5 !important;
  --tab-text-color-focused-highlighted: hsl(258, 35.2%, 90%) !important;
  --table-add-button-border-color: hsl(258, 8.8%, 15%) !important;
  --table-border-color: hsl(258, 8.8%, 15%) !important;
  --table-drag-handle-background-active: hsl(258, 66%, 80%) !important;
  --table-drag-handle-color-active: hsl(258, 5.28%, 11.5%) !important;
  --table-header-border-color: hsl(258, 8.8%, 15%) !important;
  --table-header-color: #E5E1E5 !important;
  --table-selection-border-color: hsl(258, 66%, 80%) !important;
  --tag-color: hsl(258, 35.2%, 90%) !important;
  --tag-color-hover: hsl(258, 35.2%, 90%) !important;
  --tertiary: #EDB8CD !important;
  --tertiary-container: hsl(258, 44%, 18%) !important;
  --text-accent: hsl(258, 35.2%, 90%) !important;
  --text-accent-hover: hsl(258, 61.6%, 80%) !important;
  --text-error: #cf6679 !important;
  --text-error-hover: #990000 !important;
  --text-highlight-bg: hsl(258, 7.04%, 28%) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(258, 27.28%, 80%) !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: #E5E1E5 !important;
  --text-on-accent: hsl(258, 5.28%, 11.5%) !important;
  --text-selection: hsl(258, 26.4%, 20%) !important;
  --textHighlight: hsl(258, 7.04%, 28%) !important;
  --titleFont: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(258, 7.04%, 28%) !important;
  --titlebar-background-focused: rgb(
    47.14,
    44.93,
    54.75
    ) !important;
  --titlebar-border-color: hsl(258, 8.8%, 15%) !important;
  --titlebar-text-color: hsl(258, 27.28%, 80%) !important;
  --titlebar-text-color-focused: #E5E1E5 !important;
  --tooltip-color: hsl(258, 7.04%, 28%) !important;
  --vault-profile-color: #E5E1E5 !important;
  --vault-profile-color-hover: #E5E1E5 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(69, 66, 76);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(229, 225, 229);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.376) 0px 3px 5px 0px;
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(69, 66, 76);
  border-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(37, 35, 42);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(229, 225, 229);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(69, 66, 76);
  color: rgb(198, 190, 218);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 190, 218) none 0px;
  text-decoration-color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body del {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body footer {
  opacity: 0.1;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(229, 225, 229);
  font-size: 16px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(191, 170, 238);
  border-color: rgb(191, 170, 238);
}

html[saved-theme="dark"] body p {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 190, 218) none 0px;
  text-decoration-color: rgb(198, 190, 218);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration-color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration-color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration-color: rgb(226, 221, 238);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body dt {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(69, 66, 76);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body table {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 132.125px;
}

html[saved-theme="dark"] body td {
  background-color: rgb(37, 35, 42);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 3px;
  color: rgb(229, 225, 229);
  padding-bottom: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-width: 3px;
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body tr {
  border-top-color: rgb(47, 45, 55);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(168, 152, 205);
  border-left-color: rgb(168, 152, 205);
  border-right-color: rgb(168, 152, 205);
  border-top-color: rgb(168, 152, 205);
  color: rgb(168, 152, 205);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(198, 190, 218);
  font-family: "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(69, 66, 76);
  border-bottom-color: rgb(37, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(229, 225, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(229, 225, 229);
  border-radius: 8px;
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(37, 35, 41);
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(229, 225, 229);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(229, 225, 229);
  border-left-width: 0px;
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(37, 35, 42);
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  color: rgb(229, 225, 229);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(29, 28, 31);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(69, 66, 76);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(222, 212, 247);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(222, 212, 247);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(229, 225, 229);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(198, 190, 218);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(229, 225, 229);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(198, 190, 218);
  stroke: rgb(198, 190, 218);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(37, 35, 42);
  border-left-color: rgb(37, 35, 42);
  border-right-color: rgb(37, 35, 42);
  border-top-color: rgb(37, 35, 42);
  color: rgb(198, 190, 218);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(229, 225, 229);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(198, 190, 218);
  border-left-color: rgb(198, 190, 218);
  border-right-color: rgb(198, 190, 218);
  border-top-color: rgb(198, 190, 218);
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(37, 35, 41);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
  font-family: "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body sub {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body summary {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body sup {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(38, 26, 66);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(189, 174, 224);
}`,
  },
  light: {
    base: `:root:root {
  --background: #fff !important;
  --background-modifier-border: #fff !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #BA1B1B !important;
  --background-modifier-error-hover: #b00020 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-form-field: #fff !important;
  --background-modifier-form-field-highlighted: #fff !important;
  --background-modifier-form-field-hover: #fff !important;
  --background-modifier-success: #a4e7c3 !important;
  --background-primary: #fff !important;
  --background-primary-alt: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --background-secondary: hsl(258, 66%, 93%) !important;
  --background-secondary-alt: rgb(
    237.4,
    231.64,
    247.74
    ) !important;
  --bases-cards-background: #fff !important;
  --bases-cards-cover-background: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --bases-cards-shadow: 0 0 0 1px #fff !important;
  --bases-embed-border-color: #fff !important;
  --bases-group-heading-property-color: hsl(258, 26.4%, 20%) !important;
  --bases-table-border-color: #fff !important;
  --bases-table-cell-background-active: #fff !important;
  --bases-table-cell-background-disabled: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 75.68%, 73%) !important;
  --bases-table-group-background: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --bases-table-header-background: #fff !important;
  --bases-table-header-color: hsl(258, 26.4%, 20%) !important;
  --bases-table-summary-background: #fff !important;
  --big-radius: 24px !important;
  --blockquote-border-color: hsl(258, 75.68%, 73%) !important;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --bodyFont: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold: 650 !important;
  --canvas-background: #fff !important;
  --canvas-card-label-color: hsl(258, 26.4%, 20%) !important;
  --caret-color: #111 !important;
  --checkbox-border-color: hsl(258, 26.4%, 20%) !important;
  --checkbox-border-color-hover: hsl(258, 26.4%, 20%) !important;
  --checkbox-color: hsl(258, 75.68%, 73%) !important;
  --checkbox-color-hover: hsl(258, 75.68%, 73%) !important;
  --checkbox-marker-color: #fff !important;
  --checklist-done-color: hsl(258, 26.4%, 20%) !important;
  --code-background: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --code-border-color: #fff !important;
  --code-comment: hsl(258, 26.4%, 20%) !important;
  --code-normal: #111 !important;
  --code-punctuation: hsl(258, 26.4%, 20%) !important;
  --codeFont: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(258, 26.4%, 20%) !important;
  --collapse-icon-color-collapsed: hsl(258, 52.8%, 50%) !important;
  --color-accent: hsl(258, 70.4%, 75%) !important;
  --color-accent-1: hsl(258, 61.6%, 80%) !important;
  --color-accent-2: hsl(258, 52.8%, 85%) !important;
  --dark: #111 !important;
  --darkgray: #111 !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(258, 75.68%, 73%) !important;
  --dropdown-background: hsl(258, 66%, 93%) !important;
  --dropdown-background-hover: hsl(258, 15%, 85%) !important;
  --elevation1: 0.05 !important;
  --elevation2: 0.08 !important;
  --elevation3: 0.11 !important;
  --elevation4: 0.12 !important;
  --elevation5: 0.14 !important;
  --embed-block-shadow-hover: 0 0 0 1px #fff, inset 0 0 0 1px #fff !important;
  --embed-border-start: 2px solid hsl(258, 75.68%, 73%) !important;
  --error: #BA1B1B !important;
  --errorContainer: #FFDAD4 !important;
  --file-header-background: #fff !important;
  --file-header-background-focused: #fff !important;
  --file-header-font: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(258, 66%, 93%) !important;
  --flair-color: #111 !important;
  --focus: rgb(
    235.8,
    229.88,
    247.08
    ) !important;
  --font-interface: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif !important;
  --font-mermaid: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas !important;
  --font-print: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, Arial' !important;
  --font-text: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --footnote-divider-color: #fff !important;
  --footnote-id-color: hsl(258, 26.4%, 20%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 26.4%, 20%) !important;
  --graph-node: hsl(258, 26.4%, 20%) !important;
  --graph-node-focused: hsl(258, 52.8%, 50%) !important;
  --graph-node-unresolved: hsl(258, 26.4%, 20%) !important;
  --graph-text: #111 !important;
  --gray: hsl(258, 26.4%, 20%) !important;
  --h1: 2.25em !important;
  --h2: 20pt !important;
  --h3: 16pt !important;
  --h4: 15pt !important;
  --h5: 14pt !important;
  --h6: 12pt !important;
  --headerFont: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(258, 26.4%, 20%) !important;
  --highlight: hsl(258, 66%, 93%) !important;
  --hover: rgb(
    242.2,
    236.92,
    249.72
    ) !important;
  --hr-color: hsl(258, 66%, 93%) !important;
  --icon-color: hsl(258, 26.4%, 20%) !important;
  --icon-color-active: hsl(258, 52.8%, 50%) !important;
  --icon-color-focused: #111 !important;
  --icon-color-hover: hsl(258, 26.4%, 20%) !important;
  --input-date-separator: hsl(258, 26.4%, 20%) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl(258, 26.4%, 20%) !important;
  --input-shadow-hover: inset 0 1000px 0 0 #FFFFFF20 !important;
  --interactive-accent: hsl(258, 75.68%, 73%) !important;
  --interactive-accent-hover: hsl(258, 75.68%, 73%) !important;
  --interactive-accent-rgb: hsl(258, 75.68%, 73%) !important;
  --interactive-hover: hsl(258, 15%, 85%) !important;
  --interactive-normal: hsl(258, 66%, 93%) !important;
  --interactive-success: #197300 !important;
  --inverse-on-surface: #EEE !important;
  --inverse-surface: #111 !important;
  --light: 350 !important;
  --lightgray: hsl(258, 66%, 93%) !important;
  --link-color: hsl(258, 52.8%, 50%) !important;
  --link-color-hover: hsl(258, 61.6%, 80%) !important;
  --link-external-color: hsl(258, 52.8%, 50%) !important;
  --link-external-color-hover: hsl(258, 61.6%, 80%) !important;
  --link-unresolved-color: hsl(258, 52.8%, 50%) !important;
  --list-marker-color: hsl(258, 26.4%, 20%) !important;
  --list-marker-color-collapsed: hsl(258, 52.8%, 50%) !important;
  --list-marker-color-hover: hsl(258, 26.4%, 20%) !important;
  --medium: 500 !important;
  --medium-radius: 16px !important;
  --menu-background: hsl(258, 66%, 93%) !important;
  --metadata-border-color: #fff !important;
  --metadata-divider-color: #fff !important;
  --metadata-input-font: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #111 !important;
  --metadata-label-font: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(258, 26.4%, 20%) !important;
  --metadata-label-text-color-hover: hsl(258, 26.4%, 20%) !important;
  --modal-background: #fff !important;
  --nav-collapse-icon-color: hsl(258, 26.4%, 20%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 26.4%, 20%) !important;
  --nav-heading-color: #111 !important;
  --nav-heading-color-collapsed: hsl(258, 26.4%, 20%) !important;
  --nav-heading-color-collapsed-hover: hsl(258, 26.4%, 20%) !important;
  --nav-heading-color-hover: #111 !important;
  --nav-item-color: hsl(258, 26.4%, 20%) !important;
  --nav-item-color-active: #111 !important;
  --nav-item-color-highlighted: hsl(258, 52.8%, 50%) !important;
  --nav-item-color-hover: #111 !important;
  --nav-item-color-selected: #111 !important;
  --nav-tag-color: hsl(258, 26.4%, 20%) !important;
  --nav-tag-color-active: hsl(258, 26.4%, 20%) !important;
  --nav-tag-color-hover: hsl(258, 26.4%, 20%) !important;
  --on-accent: hsl(258, 26.4%, 20%) !important;
  --on-background: #111 !important;
  --on-primary: #FFFFFF !important;
  --on-primary-container: hsl(258, 70.4%, 75%) !important;
  --on-secondary: hsl(258, 26.4%, 20%) !important;
  --on-secondary-container: hsl(258, 61.6%, 80%) !important;
  --on-surface: #1C1B1E !important;
  --on-surface-variant: hsl(258, 26.4%, 20%) !important;
  --on-tertiary-container: hsl(258, 17.6%, 12%) !important;
  --onError: #FFFFFF !important;
  --onErrorContainer: #410001 !important;
  --onTertiary: #FFFFFF !important;
  --outline: hsl(258, 44%, 85%) !important;
  --pane-separation: 6px !important;
  --pdf-background: #fff !important;
  --pdf-page-background: #fff !important;
  --pdf-sidebar-background: #fff !important;
  --pill-border-color: #fff !important;
  --pill-color: hsl(258, 26.4%, 20%) !important;
  --pill-color-hover: #111 !important;
  --pill-color-remove: hsl(258, 26.4%, 20%) !important;
  --pill-color-remove-hover: hsl(258, 52.8%, 50%) !important;
  --primary: hsl(258, 75.68%, 73%) !important;
  --primary-b: 189 !important;
  --primary-container: hsl(258, 61.6%, 80%) !important;
  --primary-g: 75 !important;
  --primary-r: 95 !important;
  --primaryInverse: #CABEFF !important;
  --prompt-background: #fff !important;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --regular: 400 !important;
  --ribbon-background: hsl(258, 66%, 93%) !important;
  --ribbon-background-collapsed: #fff !important;
  --search-clear-button-color: hsl(258, 26.4%, 20%) !important;
  --search-icon-color: hsl(258, 26.4%, 20%) !important;
  --search-result-background: #fff !important;
  --secondary: hsl(258, 52.8%, 70%) !important;
  --secondary-container: hsl(258, 26.4%, 20%) !important;
  --setting-group-heading-color: #111 !important;
  --setting-items-background: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --setting-items-border-color: #fff !important;
  --slider-track-background: hsl(258, 66%, 93%) !important;
  --small-radius: 8px !important;
  --smaller: 0.875em !important;
  --smallest: 0.75em !important;
  --status-bar-background: hsl(258, 66%, 93%) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: hsl(258, 26.4%, 20%) !important;
  --suggestion-background: #fff !important;
  --surface: #FFF !important;
  --surface-b: 255 !important;
  --surface-g: 251 !important;
  --surface-mid: hsl(258, 30.8%, 93%) !important;
  --surface-r: 255 !important;
  --surface-variant: hsl(258, 66%, 93%) !important;
  --surface1: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --surface2: rgb(
    242.2,
    236.92,
    249.72
    ) !important;
  --surface3: rgb(
    237.4,
    231.64,
    247.74
    ) !important;
  --surface4: rgb(
    235.8,
    229.88,
    247.08
    ) !important;
  --surface5: rgb(
    232.6,
    226.36,
    245.76
    ) !important;
  --tab-background-active: #fff !important;
  --tab-container-background: hsl(258, 66%, 93%) !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: hsl(258, 66%, 93%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 66%, 93%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 70.4%, 75%) !important;
  --tab-text-color: hsl(258, 26.4%, 20%) !important;
  --tab-text-color-active: hsl(258, 26.4%, 20%) !important;
  --tab-text-color-focused: hsl(258, 26.4%, 20%) !important;
  --tab-text-color-focused-active: hsl(258, 26.4%, 20%) !important;
  --tab-text-color-focused-active-current: #111 !important;
  --tab-text-color-focused-highlighted: hsl(258, 52.8%, 50%) !important;
  --table-add-button-border-color: #fff !important;
  --table-border-color: #fff !important;
  --table-drag-handle-background-active: hsl(258, 75.68%, 73%) !important;
  --table-drag-handle-color: hsl(258, 26.4%, 20%) !important;
  --table-drag-handle-color-active: hsl(258, 26.4%, 20%) !important;
  --table-header-border-color: #fff !important;
  --table-header-color: #111 !important;
  --table-selection-border-color: hsl(258, 75.68%, 73%) !important;
  --tag-color: hsl(258, 52.8%, 50%) !important;
  --tag-color-hover: hsl(258, 52.8%, 50%) !important;
  --tertiary: #7C5264 !important;
  --tertiary-container: hsl(258, 52.8%, 66%) !important;
  --text-accent: hsl(258, 52.8%, 50%) !important;
  --text-accent-hover: hsl(258, 61.6%, 80%) !important;
  --text-error: #800000 !important;
  --text-error-hover: #990000 !important;
  --text-faint: hsl(258, 26.4%, 20%) !important;
  --text-highlight-bg: hsl(258, 66%, 93%) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: hsl(258, 26.4%, 20%) !important;
  --text-muted-rgb: 136, 136, 136 !important;
  --text-normal: #111 !important;
  --text-on-accent: hsl(258, 26.4%, 20%) !important;
  --text-selection: hsl(258, 44%, 80%) !important;
  --textHighlight: hsl(258, 66%, 93%) !important;
  --titleFont: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(258, 66%, 93%) !important;
  --titlebar-background-focused: rgb(
    237.4,
    231.64,
    247.74
    ) !important;
  --titlebar-border-color: #fff !important;
  --titlebar-text-color: hsl(258, 26.4%, 20%) !important;
  --titlebar-text-color-focused: #111 !important;
  --tooltip-color: white !important;
  --vault-profile-color: #111 !important;
  --vault-profile-color-hover: #111 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(232, 225, 249);
  border-color: rgba(0, 0, 0, 0);
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(17, 17, 17);
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 3px 10px 0px;
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(101, 60, 195);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(232, 225, 249);
  color: rgb(17, 17, 17);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(232, 225, 249);
  color: rgb(46, 38, 64);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 38, 64) none 0px;
  text-decoration-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body del {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body footer {
  opacity: 0.1;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(17, 17, 17);
  font-size: 16px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(165, 134, 238);
  border-color: rgb(165, 134, 238);
}

html[saved-theme="light"] body p {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 38, 64) none 0px;
  text-decoration-color: rgb(46, 38, 64);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration-color: rgb(101, 60, 195);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration-color: rgb(101, 60, 195);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration-color: rgb(101, 60, 195);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body dt {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ol > li {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ul > li {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(232, 225, 249);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body table {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 132.125px;
}

html[saved-theme="light"] body td {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 3px;
  color: rgb(28, 27, 30);
  padding-bottom: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body th {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-width: 3px;
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body tr {
  border-top-color: rgb(237, 232, 248);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(162, 138, 219);
  border-left-color: rgb(162, 138, 219);
  border-right-color: rgb(162, 138, 219);
  border-top-color: rgb(162, 138, 219);
  color: rgb(162, 138, 219);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(46, 38, 64);
  font-family: "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body figcaption {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(17, 17, 17);
  border-radius: 8px;
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(247, 242, 252);
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(17, 17, 17);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(17, 17, 17);
  border-left-width: 0px;
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(17, 17, 17);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 225, 249);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(101, 60, 195);
}

html[saved-theme="light"] body h1 {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(209, 197, 237);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(209, 197, 237);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(232, 225, 249) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(232, 225, 249);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(17, 17, 17);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(46, 38, 64);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(17, 17, 17);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(46, 38, 64);
  stroke: rgb(46, 38, 64);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(46, 38, 64);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(17, 17, 17);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(247, 242, 252);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
  font-family: "??", "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body sub {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body summary {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body sup {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(150, 123, 214);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: rgb(28, 25, 36);
}`,
  },
};
