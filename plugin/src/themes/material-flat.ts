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
  --background: rgb(30, 29, 32) !important;
  --background-modifier-border: rgb(37, 35, 42) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #9c2b2b !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: rgb(30, 29, 32) !important;
  --background-primary-alt: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --background-secondary: rgb(69, 66, 76) !important;
  --background-secondary-alt: rgb(
    47.14,
    44.93,
    54.75
    ) !important;
  --bases-cards-background: rgb(30, 29, 32) !important;
  --bases-cards-cover-background: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(37, 35, 42) !important;
  --bases-embed-border-color: rgb(37, 35, 42) !important;
  --bases-group-heading-property-color: rgb(198, 190, 218) !important;
  --bases-table-border-color: rgb(37, 35, 42) !important;
  --bases-table-cell-background-active: rgb(30, 29, 32) !important;
  --bases-table-cell-background-disabled: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(191, 170, 238) !important;
  --bases-table-group-background: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --bases-table-header-background: rgb(30, 29, 32) !important;
  --bases-table-header-color: rgb(198, 190, 218) !important;
  --bases-table-summary-background: rgb(30, 29, 32) !important;
  --big-radius: 24px !important;
  --blockquote-border-color: rgb(191, 170, 238) !important;
  --blur-background: color-mix(in srgb, rgb(69, 66, 76) 65%, transparent) linear-gradient(rgb(69, 66, 76), color-mix(in srgb, rgb(69, 66, 76) 65%, transparent)) !important;
  --bodyFont: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold: 650 !important;
  --canvas-background: rgb(30, 29, 32) !important;
  --caret-color: #E5E1E5 !important;
  --checkbox-border-color-hover: rgb(198, 190, 218) !important;
  --checkbox-color: rgb(191, 170, 238) !important;
  --checkbox-color-hover: rgb(191, 170, 238) !important;
  --checkbox-marker-color: rgb(30, 29, 32) !important;
  --checklist-done-color: rgb(198, 190, 218) !important;
  --code-background: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --code-border-color: rgb(37, 35, 42) !important;
  --code-normal: #E5E1E5 !important;
  --code-punctuation: rgb(198, 190, 218) !important;
  --codeFont: '??', "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(226, 221, 238) !important;
  --color-accent: rgb(162, 138, 219) !important;
  --color-accent-1: rgb(191, 172, 236) !important;
  --color-accent-2: rgb(222, 212, 247) !important;
  --dark: #E5E1E5 !important;
  --darkgray: #E5E1E5 !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(191, 170, 238) !important;
  --dropdown-background: rgb(69, 66, 76) !important;
  --dropdown-background-hover: rgb(69, 66, 76) !important;
  --elevation1: 0.05 !important;
  --elevation2: 0.08 !important;
  --elevation3: 0.11 !important;
  --elevation4: 0.12 !important;
  --elevation5: 0.14 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(37, 35, 42), inset 0 0 0 1px rgb(37, 35, 42) !important;
  --embed-border-start: 2px solid rgb(191, 170, 238) !important;
  --error: #9c2b2b !important;
  --error-container: #930006 !important;
  --errorContainer: #930006 !important;
  --file-header-background: rgb(30, 29, 32) !important;
  --file-header-background-focused: rgb(30, 29, 32) !important;
  --file-header-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(69, 66, 76) !important;
  --flair-color: #E5E1E5 !important;
  --focus: rgb(
    48.88,
    46.56,
    57
    ) !important;
  --font-interface: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif !important;
  --font-mermaid: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas !important;
  --font-print: '??', '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, 'Arial' !important;
  --font-text: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --footnote-divider-color: rgb(37, 35, 42) !important;
  --footnote-id-color: rgb(198, 190, 218) !important;
  --graph-node: rgb(198, 190, 218) !important;
  --graph-node-focused: rgb(226, 221, 238) !important;
  --graph-text: #E5E1E5 !important;
  --gray: rgb(198, 190, 218) !important;
  --h1: 2.25em !important;
  --h2: 20pt !important;
  --h3: 16pt !important;
  --h4: 15pt !important;
  --h5: 14pt !important;
  --h6: 12pt !important;
  --headerFont: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: rgb(69, 66, 76) !important;
  --hover: rgb(
    41.92,
    40.04,
    48
    ) !important;
  --hr-color: rgb(69, 66, 76) !important;
  --icon-color: rgb(198, 190, 218) !important;
  --icon-color-active: rgb(226, 221, 238) !important;
  --icon-color-focused: #E5E1E5 !important;
  --icon-color-hover: rgb(198, 190, 218) !important;
  --input-height: 32px !important;
  --input-shadow-hover: inset 0 1000px 0 0 #FFFFFF20 !important;
  --interactive-accent: rgb(191, 170, 238) !important;
  --interactive-accent-hover: rgb(191, 170, 238) !important;
  --interactive-accent-rgb: rgb(191, 170, 238) !important;
  --interactive-hover: rgb(69, 66, 76) !important;
  --interactive-normal: rgb(69, 66, 76) !important;
  --interactive-success: #197300 !important;
  --inverse-on-surface: #1C1B1E !important;
  --inverse-surface: #E5E1E5 !important;
  --light: 350 !important;
  --lightgray: rgb(69, 66, 76) !important;
  --link-color: rgb(226, 221, 238) !important;
  --link-color-hover: rgb(191, 172, 236) !important;
  --link-external-color: rgb(226, 221, 238) !important;
  --link-external-color-hover: rgb(191, 172, 236) !important;
  --link-unresolved-color: rgb(226, 221, 238) !important;
  --list-marker-color-collapsed: rgb(226, 221, 238) !important;
  --list-marker-color-hover: rgb(198, 190, 218) !important;
  --medium: 500 !important;
  --medium-radius: 16px !important;
  --menu-background: rgb(69, 66, 76) !important;
  --metadata-border-color: rgb(37, 35, 42) !important;
  --metadata-divider-color: rgb(37, 35, 42) !important;
  --metadata-input-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #E5E1E5 !important;
  --metadata-label-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(198, 190, 218) !important;
  --metadata-label-text-color-hover: rgb(198, 190, 218) !important;
  --modal-background: rgb(30, 29, 32) !important;
  --nav-heading-color: #E5E1E5 !important;
  --nav-heading-color-collapsed-hover: rgb(198, 190, 218) !important;
  --nav-heading-color-hover: #E5E1E5 !important;
  --nav-item-color: rgb(198, 190, 218) !important;
  --nav-item-color-active: #E5E1E5 !important;
  --nav-item-color-highlighted: rgb(226, 221, 238) !important;
  --nav-item-color-hover: #E5E1E5 !important;
  --nav-item-color-selected: #E5E1E5 !important;
  --nav-tag-color-active: rgb(198, 190, 218) !important;
  --nav-tag-color-hover: rgb(198, 190, 218) !important;
  --on-accent: rgb(30, 29, 32) !important;
  --on-background: #E5E1E5 !important;
  --on-error: #680003 !important;
  --on-error-container: #FFDAD4 !important;
  --on-primary: rgb(30, 29, 32) !important;
  --on-primary-container: rgb(222, 212, 247) !important;
  --on-secondary: rgb(30, 29, 32) !important;
  --on-secondary-container: rgb(191, 172, 236) !important;
  --on-surface-variant: rgb(198, 190, 218) !important;
  --on-tertiary: #482535 !important;
  --on-tertiary-container: rgb(189, 174, 224) !important;
  --onError: #680003 !important;
  --onErrorContainer: #FFDAD4 !important;
  --onTertiary: #482535 !important;
  --outline: rgb(53, 36, 92) !important;
  --pane-separation: 6px !important;
  --pdf-background: rgb(30, 29, 32) !important;
  --pdf-page-background: rgb(30, 29, 32) !important;
  --pdf-shadow: 0 0 0 1px rgb(37, 35, 42) !important;
  --pdf-sidebar-background: rgb(30, 29, 32) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(37, 35, 42) !important;
  --pill-border-color: rgb(37, 35, 42) !important;
  --pill-color: rgb(198, 190, 218) !important;
  --pill-color-hover: #E5E1E5 !important;
  --pill-color-remove-hover: rgb(226, 221, 238) !important;
  --primary: rgb(191, 170, 238) !important;
  --primary-b: 255 !important;
  --primary-container: rgb(191, 172, 236) !important;
  --primary-g: 190 !important;
  --primary-inverse: #5F4BBD !important;
  --primary-r: 202 !important;
  --primaryInverse: #5F4BBD !important;
  --prompt-background: rgb(30, 29, 32) !important;
  --raised-background: color-mix(in srgb, rgb(69, 66, 76) 65%, transparent) linear-gradient(rgb(69, 66, 76), color-mix(in srgb, rgb(69, 66, 76) 65%, transparent)) !important;
  --regular: 400 !important;
  --ribbon-background: rgb(69, 66, 76) !important;
  --ribbon-background-collapsed: rgb(30, 29, 32) !important;
  --search-clear-button-color: rgb(198, 190, 218) !important;
  --search-icon-color: rgb(198, 190, 218) !important;
  --search-result-background: rgb(30, 29, 32) !important;
  --secondary: rgb(168, 152, 205) !important;
  --secondary-container: rgb(30, 29, 32) !important;
  --setting-group-heading-color: #E5E1E5 !important;
  --setting-items-background: rgb(
    36.7,
    35.15,
    41.25
    ) !important;
  --setting-items-border-color: rgb(37, 35, 42) !important;
  --slider-track-background: rgb(69, 66, 76) !important;
  --small-radius: 8px !important;
  --smaller: 0.875em !important;
  --smallest: 0.75em !important;
  --status-bar-background: rgb(69, 66, 76) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: rgb(198, 190, 218) !important;
  --suggestion-background: rgb(30, 29, 32) !important;
  --surface: rgb(37, 35, 42) !important;
  --surface-b: 30 !important;
  --surface-g: 27 !important;
  --surface-mid: rgb(47, 45, 52) !important;
  --surface-r: 28 !important;
  --surface-variant: rgb(69, 66, 76) !important;
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
  --tab-background-active: rgb(37, 35, 42) !important;
  --tab-container-background: rgb(69, 66, 76) !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: rgb(69, 66, 76) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(69, 66, 76), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(162, 138, 219) !important;
  --tab-text-color-active: rgb(198, 190, 218) !important;
  --tab-text-color-focused: rgb(198, 190, 218) !important;
  --tab-text-color-focused-active: rgb(198, 190, 218) !important;
  --tab-text-color-focused-active-current: #E5E1E5 !important;
  --tab-text-color-focused-highlighted: rgb(226, 221, 238) !important;
  --table-add-button-border-color: rgb(37, 35, 42) !important;
  --table-border-color: rgb(37, 35, 42) !important;
  --table-drag-handle-background-active: rgb(191, 170, 238) !important;
  --table-drag-handle-color-active: rgb(30, 29, 32) !important;
  --table-header-border-color: rgb(37, 35, 42) !important;
  --table-header-color: #E5E1E5 !important;
  --table-selection-border-color: rgb(191, 170, 238) !important;
  --tag-color: rgb(226, 221, 238) !important;
  --tag-color-hover: rgb(226, 221, 238) !important;
  --tertiary: #EDB8CD !important;
  --tertiary-container: rgb(38, 26, 66) !important;
  --text-accent: rgb(226, 221, 238) !important;
  --text-accent-hover: rgb(191, 172, 236) !important;
  --text-error: #cf6679 !important;
  --text-error-hover: #990000 !important;
  --text-highlight-bg: rgb(69, 66, 76) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: rgb(198, 190, 218) !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: #E5E1E5 !important;
  --text-on-accent: rgb(30, 29, 32) !important;
  --text-selection: rgb(46, 38, 64) !important;
  --textHighlight: rgb(69, 66, 76) !important;
  --titleFont: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(69, 66, 76) !important;
  --titlebar-background-focused: rgb(
    47.14,
    44.93,
    54.75
    ) !important;
  --titlebar-border-color: rgb(37, 35, 42) !important;
  --titlebar-text-color: rgb(198, 190, 218) !important;
  --titlebar-text-color-focused: #E5E1E5 !important;
  --tooltip-color: rgb(69, 66, 76) !important;
  --vault-profile-color: #E5E1E5 !important;
  --vault-profile-color-hover: #E5E1E5 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 225, 229);
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
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(69, 66, 76);
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body del {
  color: rgb(229, 225, 229);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(229, 225, 229) none 0px;
  text-decoration: line-through rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body p {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 190, 218) none 0px;
  text-decoration: rgb(198, 190, 218);
  text-decoration-color: rgb(198, 190, 218);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration: underline rgb(226, 221, 238);
  text-decoration-color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration: rgb(226, 221, 238);
  text-decoration-color: rgb(226, 221, 238);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(226, 221, 238);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(226, 221, 238) none 0px;
  text-decoration: rgb(226, 221, 238);
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
  background-color: rgb(29, 28, 31);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(29, 28, 31);
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

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(229, 225, 229);
  border-left-width: 0px;
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(198, 190, 218);
  text-decoration: line-through rgb(198, 190, 218);
  text-decoration-color: rgb(198, 190, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(229, 225, 229);
  text-decoration: rgb(229, 225, 229);
  text-decoration-color: rgb(229, 225, 229);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
  text-decoration: rgb(229, 225, 229);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(69, 66, 76);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(229, 225, 229);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
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
  text-decoration: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(198, 190, 218);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(198, 190, 218);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(37, 35, 42);
  border-bottom-color: rgb(229, 225, 229);
  border-left-color: rgb(229, 225, 229);
  border-right-color: rgb(229, 225, 229);
  border-top-color: rgb(229, 225, 229);
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
  text-decoration: rgb(198, 190, 218);
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
  text-decoration: rgb(198, 190, 218);
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
  text-decoration: rgb(198, 190, 218);
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
  text-decoration: underline dotted rgb(229, 225, 229);
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
  --background-secondary: rgb(232, 225, 249) !important;
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
  --bases-group-heading-property-color: rgb(46, 38, 64) !important;
  --bases-table-border-color: #fff !important;
  --bases-table-cell-background-active: #fff !important;
  --bases-table-cell-background-disabled: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(165, 134, 238) !important;
  --bases-table-group-background: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --bases-table-header-background: #fff !important;
  --bases-table-header-color: rgb(46, 38, 64) !important;
  --bases-table-summary-background: #fff !important;
  --big-radius: 24px !important;
  --blockquote-border-color: rgb(165, 134, 238) !important;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --bodyFont: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold: 650 !important;
  --canvas-background: #fff !important;
  --canvas-card-label-color: rgb(46, 38, 64) !important;
  --caret-color: #111 !important;
  --checkbox-border-color: rgb(46, 38, 64) !important;
  --checkbox-border-color-hover: rgb(46, 38, 64) !important;
  --checkbox-color: rgb(165, 134, 238) !important;
  --checkbox-color-hover: rgb(165, 134, 238) !important;
  --checkbox-marker-color: #fff !important;
  --checklist-done-color: rgb(46, 38, 64) !important;
  --code-background: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --code-border-color: #fff !important;
  --code-comment: rgb(46, 38, 64) !important;
  --code-normal: #111 !important;
  --code-punctuation: rgb(46, 38, 64) !important;
  --codeFont: '??', "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(46, 38, 64) !important;
  --collapse-icon-color-collapsed: rgb(100, 60, 195) !important;
  --color-accent: rgb(173, 147, 236) !important;
  --color-accent-1: rgb(191, 172, 236) !important;
  --color-accent-2: rgb(209, 196, 237) !important;
  --dark: #111 !important;
  --darkgray: #111 !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(165, 134, 238) !important;
  --dropdown-background: rgb(232, 225, 249) !important;
  --dropdown-background-hover: rgb(214, 211, 222) !important;
  --elevation1: 0.05 !important;
  --elevation2: 0.08 !important;
  --elevation3: 0.11 !important;
  --elevation4: 0.12 !important;
  --elevation5: 0.14 !important;
  --embed-block-shadow-hover: 0 0 0 1px #fff, inset 0 0 0 1px #fff !important;
  --embed-border-start: 2px solid rgb(165, 134, 238) !important;
  --error: #BA1B1B !important;
  --errorContainer: #FFDAD4 !important;
  --file-header-background: #fff !important;
  --file-header-background-focused: #fff !important;
  --file-header-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: rgb(232, 225, 249) !important;
  --flair-color: #111 !important;
  --focus: rgb(
    235.8,
    229.88,
    247.08
    ) !important;
  --font-interface: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif !important;
  --font-mermaid: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Roboto Mono", monospace, Menlo, SFMono-Regular, Consolas !important;
  --font-print: '??', '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, 'Arial' !important;
  --font-text: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --footnote-divider-color: #fff !important;
  --footnote-id-color: rgb(46, 38, 64) !important;
  --footnote-id-color-no-occurrences: rgb(46, 38, 64) !important;
  --graph-node: rgb(46, 38, 64) !important;
  --graph-node-focused: rgb(100, 60, 195) !important;
  --graph-node-unresolved: rgb(46, 38, 64) !important;
  --graph-text: #111 !important;
  --gray: rgb(46, 38, 64) !important;
  --h1: 2.25em !important;
  --h2: 20pt !important;
  --h3: 16pt !important;
  --h4: 15pt !important;
  --h5: 14pt !important;
  --h6: 12pt !important;
  --headerFont: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(46, 38, 64) !important;
  --highlight: rgb(232, 225, 249) !important;
  --hover: rgb(
    242.2,
    236.92,
    249.72
    ) !important;
  --hr-color: rgb(232, 225, 249) !important;
  --icon-color: rgb(46, 38, 64) !important;
  --icon-color-active: rgb(100, 60, 195) !important;
  --icon-color-focused: #111 !important;
  --icon-color-hover: rgb(46, 38, 64) !important;
  --input-date-separator: rgb(46, 38, 64) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(46, 38, 64) !important;
  --input-shadow-hover: inset 0 1000px 0 0 #FFFFFF20 !important;
  --interactive-accent: rgb(165, 134, 238) !important;
  --interactive-accent-hover: rgb(165, 134, 238) !important;
  --interactive-accent-rgb: rgb(165, 134, 238) !important;
  --interactive-hover: rgb(214, 211, 222) !important;
  --interactive-normal: rgb(232, 225, 249) !important;
  --interactive-success: #197300 !important;
  --inverse-on-surface: #EEE !important;
  --inverse-surface: #111 !important;
  --light: 350 !important;
  --lightgray: rgb(232, 225, 249) !important;
  --link-color: rgb(100, 60, 195) !important;
  --link-color-hover: rgb(191, 172, 236) !important;
  --link-external-color: rgb(100, 60, 195) !important;
  --link-external-color-hover: rgb(191, 172, 236) !important;
  --link-unresolved-color: rgb(100, 60, 195) !important;
  --list-marker-color: rgb(46, 38, 64) !important;
  --list-marker-color-collapsed: rgb(100, 60, 195) !important;
  --list-marker-color-hover: rgb(46, 38, 64) !important;
  --medium: 500 !important;
  --medium-radius: 16px !important;
  --menu-background: rgb(232, 225, 249) !important;
  --metadata-border-color: #fff !important;
  --metadata-divider-color: #fff !important;
  --metadata-input-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #111 !important;
  --metadata-label-font: '??', "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(46, 38, 64) !important;
  --metadata-label-text-color-hover: rgb(46, 38, 64) !important;
  --modal-background: #fff !important;
  --nav-collapse-icon-color: rgb(46, 38, 64) !important;
  --nav-collapse-icon-color-collapsed: rgb(46, 38, 64) !important;
  --nav-heading-color: #111 !important;
  --nav-heading-color-collapsed: rgb(46, 38, 64) !important;
  --nav-heading-color-collapsed-hover: rgb(46, 38, 64) !important;
  --nav-heading-color-hover: #111 !important;
  --nav-item-color: rgb(46, 38, 64) !important;
  --nav-item-color-active: #111 !important;
  --nav-item-color-highlighted: rgb(100, 60, 195) !important;
  --nav-item-color-hover: #111 !important;
  --nav-item-color-selected: #111 !important;
  --nav-tag-color: rgb(46, 38, 64) !important;
  --nav-tag-color-active: rgb(46, 38, 64) !important;
  --nav-tag-color-hover: rgb(46, 38, 64) !important;
  --on-accent: rgb(46, 38, 64) !important;
  --on-background: #111 !important;
  --on-primary: #FFFFFF !important;
  --on-primary-container: rgb(173, 147, 236) !important;
  --on-secondary: rgb(46, 38, 64) !important;
  --on-secondary-container: rgb(191, 172, 236) !important;
  --on-surface: #1C1B1E !important;
  --on-surface-variant: rgb(46, 38, 64) !important;
  --on-tertiary-container: rgb(28, 25, 36) !important;
  --onError: #FFFFFF !important;
  --onErrorContainer: #410001 !important;
  --onTertiary: #FFFFFF !important;
  --outline: rgb(210, 200, 234) !important;
  --pane-separation: 6px !important;
  --pdf-background: #fff !important;
  --pdf-page-background: #fff !important;
  --pdf-sidebar-background: #fff !important;
  --pill-border-color: #fff !important;
  --pill-color: rgb(46, 38, 64) !important;
  --pill-color-hover: #111 !important;
  --pill-color-remove: rgb(46, 38, 64) !important;
  --pill-color-remove-hover: rgb(100, 60, 195) !important;
  --primary: rgb(165, 134, 238) !important;
  --primary-b: 189 !important;
  --primary-container: rgb(191, 172, 236) !important;
  --primary-g: 75 !important;
  --primary-r: 95 !important;
  --primaryInverse: #CABEFF !important;
  --prompt-background: #fff !important;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)) !important;
  --regular: 400 !important;
  --ribbon-background: rgb(232, 225, 249) !important;
  --ribbon-background-collapsed: #fff !important;
  --search-clear-button-color: rgb(46, 38, 64) !important;
  --search-icon-color: rgb(46, 38, 64) !important;
  --search-result-background: #fff !important;
  --secondary: rgb(162, 138, 219) !important;
  --secondary-container: rgb(46, 38, 64) !important;
  --setting-group-heading-color: #111 !important;
  --setting-items-background: rgb(
    247,
    242.2,
    251.7
    ) !important;
  --setting-items-border-color: #fff !important;
  --slider-track-background: rgb(232, 225, 249) !important;
  --small-radius: 8px !important;
  --smaller: 0.875em !important;
  --smallest: 0.75em !important;
  --status-bar-background: rgb(232, 225, 249) !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: rgb(46, 38, 64) !important;
  --suggestion-background: #fff !important;
  --surface: #FFF !important;
  --surface-b: 255 !important;
  --surface-g: 251 !important;
  --surface-mid: rgb(235, 232, 243) !important;
  --surface-r: 255 !important;
  --surface-variant: rgb(232, 225, 249) !important;
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
  --tab-container-background: rgb(232, 225, 249) !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: rgb(232, 225, 249) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(232, 225, 249), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(173, 147, 236) !important;
  --tab-text-color: rgb(46, 38, 64) !important;
  --tab-text-color-active: rgb(46, 38, 64) !important;
  --tab-text-color-focused: rgb(46, 38, 64) !important;
  --tab-text-color-focused-active: rgb(46, 38, 64) !important;
  --tab-text-color-focused-active-current: #111 !important;
  --tab-text-color-focused-highlighted: rgb(100, 60, 195) !important;
  --table-add-button-border-color: #fff !important;
  --table-border-color: #fff !important;
  --table-drag-handle-background-active: rgb(165, 134, 238) !important;
  --table-drag-handle-color: rgb(46, 38, 64) !important;
  --table-drag-handle-color-active: rgb(46, 38, 64) !important;
  --table-header-border-color: #fff !important;
  --table-header-color: #111 !important;
  --table-selection-border-color: rgb(165, 134, 238) !important;
  --tag-color: rgb(100, 60, 195) !important;
  --tag-color-hover: rgb(100, 60, 195) !important;
  --tertiary: #7C5264 !important;
  --tertiary-container: rgb(150, 122, 214) !important;
  --text-accent: rgb(100, 60, 195) !important;
  --text-accent-hover: rgb(191, 172, 236) !important;
  --text-error: #800000 !important;
  --text-error-hover: #990000 !important;
  --text-faint: rgb(46, 38, 64) !important;
  --text-highlight-bg: rgb(232, 225, 249) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: rgb(46, 38, 64) !important;
  --text-muted-rgb: 136, 136, 136 !important;
  --text-normal: #111 !important;
  --text-on-accent: rgb(46, 38, 64) !important;
  --text-selection: rgb(195, 182, 226) !important;
  --textHighlight: rgb(232, 225, 249) !important;
  --titleFont: '??', "Inter", Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI",
    Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(232, 225, 249) !important;
  --titlebar-background-focused: rgb(
    237.4,
    231.64,
    247.74
    ) !important;
  --titlebar-border-color: #fff !important;
  --titlebar-text-color: rgb(46, 38, 64) !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(17, 17, 17);
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
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(232, 225, 249);
  color: rgb(17, 17, 17);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(17, 17, 17) none 0px;
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body del {
  color: rgb(28, 27, 30);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(28, 27, 30) none 0px;
  text-decoration: line-through rgb(28, 27, 30);
  text-decoration-color: rgb(28, 27, 30);
}

html[saved-theme="light"] body p {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 38, 64) none 0px;
  text-decoration: rgb(46, 38, 64);
  text-decoration-color: rgb(46, 38, 64);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration: underline rgb(101, 60, 195);
  text-decoration-color: rgb(101, 60, 195);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration: rgb(101, 60, 195);
  text-decoration-color: rgb(101, 60, 195);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(101, 60, 195);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(101, 60, 195) none 0px;
  text-decoration: rgb(101, 60, 195);
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
  text-decoration: rgb(46, 38, 64);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(17, 17, 17);
  border-left-width: 0px;
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(46, 38, 64);
  text-decoration: line-through rgb(46, 38, 64);
  text-decoration-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(46, 38, 64);
  border-left-color: rgb(46, 38, 64);
  border-right-color: rgb(46, 38, 64);
  border-top-color: rgb(46, 38, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(17, 17, 17);
  text-decoration: rgb(17, 17, 17);
  text-decoration-color: rgb(17, 17, 17);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
  text-decoration: rgb(17, 17, 17);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 225, 249);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(17, 17, 17);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, h2.page-title a {
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
  text-decoration: rgb(46, 38, 64);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(46, 38, 64);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(46, 38, 64);
  font-family: "??", "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(46, 38, 64);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(17, 17, 17);
  border-right-color: rgb(17, 17, 17);
  border-top-color: rgb(17, 17, 17);
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
  text-decoration: rgb(46, 38, 64);
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
  text-decoration: rgb(46, 38, 64);
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
  text-decoration: rgb(46, 38, 64);
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
  text-decoration: underline dotted rgb(17, 17, 17);
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
}`,
  },
};
