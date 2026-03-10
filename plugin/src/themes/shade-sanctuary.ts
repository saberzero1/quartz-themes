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
  --background: rgb(25, 11, 45) !important;
  --background-modifier-border: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --background-modifier-border-focus: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --background-modifier-border-hover: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --background-modifier-form-field: color-mix(in srgb, rgb(25, 11, 45) 80%, #000) !important;
  --background-modifier-form-field-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, #000) !important;
  --background-modifier-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --background-primary: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --background-primary-alt: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --background-secondary: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --background-secondary-alt: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --bases-cards-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --bases-cards-cover-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --bases-embed-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --bases-group-heading-property-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --bases-table-border-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --bases-table-cell-background-active: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --bases-table-cell-background-disabled: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --bases-table-group-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --bases-table-header-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --bases-table-header-background-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --bases-table-header-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --bases-table-summary-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --bases-table-summary-background-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --black: #000 !important;
  --blue: #437cf3 !important;
  --blue-violet: #6f51f4 !important;
  --blur-background: color-mix(in srgb, color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) 65%, transparent) linear-gradient(color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)), color-mix(in srgb, color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) 65%, transparent)) !important;
  --bodyFont: "Computer Modern", "Inter", Sans-Serif !important;
  --canvas-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --canvas-card-label-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --canvas-dot-pattern: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --caret-color: #faf4ed !important;
  --checkbox-border-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --checkbox-border-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --checkbox-color: rgb(166, 139, 249) !important;
  --checkbox-marker-color: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --checklist-done-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --code-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --code-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --code-bracket-background: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --code-comment: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --code-normal: #faf4ed !important;
  --code-punctuation: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --codeFont: '??', "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --color-base-00: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --color-base-05: color-mix(in srgb, rgb(25, 11, 45) 40%, #000) !important;
  --color-base-10: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --color-base-100: color-mix(in srgb, rgb(25, 11, 45) 0%, rgb(196, 153, 255)) !important;
  --color-base-20: color-mix(in srgb, rgb(25, 11, 45) 80%, #000) !important;
  --color-base-25: color-mix(in srgb, rgb(25, 11, 45) 80%, #000) !important;
  --color-base-30: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --color-base-35: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --color-base-40: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --color-base-50: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --color-base-60: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --color-base-70: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --cool-cyan: #43cfea !important;
  --cool-gray: #515768 !important;
  --cyan: #51e1e9 !important;
  --dark: #faf4ed !important;
  --darkgray: #faf4ed !important;
  --divider-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --dropdown-background: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --dropdown-background-hover: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)), inset 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --file-header-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --file-header-background-focused: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --file-header-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --flair-color: #faf4ed !important;
  --font-callout-theme: "Computer Modern", "Sans-Serif" !important;
  --font-interface: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Jetbrains Mono", "Inter", Sans-Serif !important;
  --font-mermaid: "Computer Modern", "Inter", Sans-Serif !important;
  --font-monospace: '??', "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Jetbrains Mono", "Source Code Pro", monospace !important;
  --font-text: "Computer Modern", "Inter", Sans-Serif !important;
  --footnote-divider-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --footnote-id-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --footnote-id-color-no-occurrences: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --footnote-input-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --foreground: rgb(196, 153, 255) !important;
  --graph-line: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --graph-node: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --graph-node-unresolved: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --graph-text: #faf4ed !important;
  --gray: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --h1-color: rgb(151, 77, 255) !important;
  --h1-size: 24px !important;
  --h2-color: rgb(181, 128, 255) !important;
  --h2-size: 22px !important;
  --h3-color: rgb(196, 153, 255) !important;
  --h3-size: 20px !important;
  --h4-color: rgb(196, 153, 255) !important;
  --h4-size: 18px !important;
  --h5-color: rgb(225, 204, 255) !important;
  --h5-size: 17px !important;
  --h6-color: rgb(240, 229, 255) !important;
  --h6-size: 16px !important;
  --header-title-color: rgb(151, 77, 255) !important;
  --headerFont: "Computer Modern", "Inter", Sans-Serif !important;
  --heading-formatting: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --highlight: color-mix(in srgb, rgb(151, 77, 255) 25%, transparent) !important;
  --hot-red: #e3365e !important;
  --hr-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --hue-bg: 265 !important;
  --hue-fg: 265 !important;
  --icon-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --icon-color-focused: #faf4ed !important;
  --icon-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --indentation-guide-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --indentation-guide-color-active: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --inline-title-color: rgb(151, 77, 255) !important;
  --inline-title-size: 24px !important;
  --input-date-separator: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --input-placeholder-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --interactive-hover: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --interactive-normal: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --light: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --light-blue: #54b6f8 !important;
  --lightgray: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --list-marker-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --list-marker-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --lum: 11% !important;
  --magenta: #e54f9b !important;
  --menu-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --menu-border-color: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --metadata-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --metadata-divider-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --metadata-input-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --metadata-input-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #faf4ed !important;
  --metadata-label-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --metadata-label-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --metadata-property-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --mint: #52eea3 !important;
  --modal-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --modal-border-color: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --nav-collapse-icon-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --nav-collapse-icon-color-collapsed: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --nav-heading-color: #faf4ed !important;
  --nav-heading-color-collapsed: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --nav-heading-color-hover: #faf4ed !important;
  --nav-indentation-guide-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --nav-item-background-active: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --nav-item-background-hover: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --nav-item-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --nav-item-color-active: #faf4ed !important;
  --nav-item-color-hover: #faf4ed !important;
  --nav-item-color-selected: #faf4ed !important;
  --nav-tag-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --nav-tag-color-active: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --nav-tag-color-hover: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --pdf-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --pdf-page-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --pdf-sidebar-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --pill-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --pill-border-color-hover: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --pill-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --pill-color-hover: #faf4ed !important;
  --pill-color-remove: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --prompt-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --prompt-border-color: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --purple: #c952ed !important;
  --raised-background: color-mix(in srgb, color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) 65%, transparent) linear-gradient(color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)), color-mix(in srgb, color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) 65%, transparent)) !important;
  --ribbon-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --ribbon-background-collapsed: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --sat-bg: 60% !important;
  --sat-fg: 100% !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, rgb(25, 11, 45) 80%, rgb(196, 153, 255)) !important;
  --scrollbar-thumb-bg: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --search-clear-button-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --search-icon-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --search-result-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --setting-group-heading-color: #faf4ed !important;
  --setting-items-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --setting-items-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --slider-thumb-border-color: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --slider-track-background: rgb(166, 139, 249) !important;
  --status-bar-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --status-bar-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --status-bar-text-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --suggestion-background: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --tab-background-active: color-mix(in srgb, rgb(25, 11, 45) 25%, #000) !important;
  --tab-container-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --tab-curve: 10px !important;
  --tab-divider-color: color-mix(in srgb, rgb(25, 11, 45) 95%, rgb(196, 153, 255)) !important;
  --tab-font-size: 10pt !important;
  --tab-max-width: 300px !important;
  --tab-outline-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --tab-switcher-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, rgb(25, 11, 45) 50%, #000), transparent) !important;
  --tab-text-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --tab-text-color-active: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --tab-text-color-focused: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --tab-text-color-focused-active: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --tab-text-color-focused-active-current: #faf4ed !important;
  --tab-width: 180px !important;
  --table-add-button-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --table-border-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --table-drag-handle-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --table-header-border-color: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --table-header-color: #faf4ed !important;
  --text-faint: color-mix(in srgb, rgb(25, 11, 45) 60%, rgb(196, 153, 255)) !important;
  --text-highlight-bg: color-mix(in srgb, rgb(151, 77, 255) 25%, transparent) !important;
  --text-highlight-bg-active: color-mix(in srgb, rgb(151, 77, 255) 25%, transparent) !important;
  --text-muted: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --text-normal: #faf4ed !important;
  --textHighlight: color-mix(in srgb, rgb(151, 77, 255) 25%, transparent) !important;
  --title-color: rgb(151, 77, 255) !important;
  --titleFont: "Computer Modern", "Inter", Sans-Serif !important;
  --titlebar-background: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --titlebar-background-focused: color-mix(in srgb, rgb(25, 11, 45) 50%, #000) !important;
  --titlebar-border-color: color-mix(in srgb, rgb(25, 11, 45) 90%, rgb(196, 153, 255)) !important;
  --titlebar-text-color: color-mix(in srgb, rgb(25, 11, 45) 30%, rgb(196, 153, 255)) !important;
  --titlebar-text-color-focused: #faf4ed !important;
  --unified-heading-space: 10px !important;
  --vault-profile-color: #faf4ed !important;
  --vault-profile-color-hover: #faf4ed !important;
  --violet: #9446f8 !important;
  --white: #fff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: color(srgb 0.02475 0.011 0.044);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: color(srgb 0.0495 0.022 0.088);
  color: rgb(250, 244, 237);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.591667 0.3 1 / 0.25);
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: line-through rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body p {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.566367 0.4332 0.7528) none 0px;
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
  text-decoration-color: color(srgb 0.566367 0.4332 0.7528);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 18px;
  margin-top: 10px;
}

html[saved-theme="dark"] body dt {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: color(srgb 0.366067 0.2664 0.5056);
  text-decoration: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body blockquote {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body table {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  margin-left: 215.969px;
  margin-right: 215.984px;
  width: 206.047px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-width: 0px;
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-left-radius: 10px;
  color: rgb(250, 244, 237);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body img {
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

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.566367 0.4332 0.7528);
  text-decoration: line-through color(srgb 0.566367 0.4332 0.7528);
  text-decoration-color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.366067 0.2664 0.5056);
  text-decoration: line-through 1px color(srgb 0.366067 0.2664 0.5056);
  text-decoration-color: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 244, 237);
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
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
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: color(srgb 0.0792 0.0352 0.1408);
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: color(srgb 0.02475 0.011 0.044);
  border-bottom-color: color(srgb 0.232533 0.1552 0.3408);
  border-left-color: color(srgb 0.232533 0.1552 0.3408);
  border-right-color: color(srgb 0.232533 0.1552 0.3408);
  border-top-color: color(srgb 0.232533 0.1552 0.3408);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.232533 0.1552 0.3408);
  border-left-color: color(srgb 0.232533 0.1552 0.3408);
  border-right-color: color(srgb 0.232533 0.1552 0.3408);
  border-top-color: color(srgb 0.232533 0.1552 0.3408);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.0495 0.022 0.088);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1 {
  color: rgb(151, 77, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(181, 128, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(151, 77, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(196, 153, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(196, 153, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(225, 204, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(240, 230, 255);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: color(srgb 0.0495 0.022 0.088) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.0495 0.022 0.088);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  color: color(srgb 0.566367 0.4332 0.7528);
}`,
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.566367 0.4332 0.7528);
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.566367 0.4332 0.7528);
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.566367 0.4332 0.7528);
  text-decoration: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.566367 0.4332 0.7528);
  stroke: color(srgb 0.566367 0.4332 0.7528);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(151, 77, 255);
  border-left-color: rgb(151, 77, 255);
  border-right-color: rgb(151, 77, 255);
  border-top-color: rgb(151, 77, 255);
  color: rgb(151, 77, 255);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: color(srgb 0.366067 0.2664 0.5056);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.165767 0.0996 0.2584);
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
  border-right-color: color(srgb 0.165767 0.0996 0.2584);
  border-top-color: color(srgb 0.165767 0.0996 0.2584);
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: color(srgb 0.0495 0.022 0.088);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(250, 244, 237);
  text-decoration: underline dotted rgb(250, 244, 237);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  margin-bottom: 10px;
  margin-top: 10px;
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: color(srgb 0.566367 0.4332 0.7528);
  border-left-color: color(srgb 0.566367 0.4332 0.7528);
  border-right-color: color(srgb 0.566367 0.4332 0.7528);
  border-top-color: color(srgb 0.566367 0.4332 0.7528);
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
  font-family: "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body sub {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body summary {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body sup {
  color: rgb(250, 244, 237);
}`,
  },
  light: {
    base: `:root:root {
  --bodyFont: "Computer Modern", "Inter", Sans-Serif !important;
  --codeFont: '??', "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --file-header-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-callout-theme: "Computer Modern", "Sans-Serif" !important;
  --font-interface: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Jetbrains Mono", "Inter", Sans-Serif !important;
  --font-mermaid: "Computer Modern", "Inter", Sans-Serif !important;
  --font-monospace: '??', "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Jetbrains Mono", "Source Code Pro", monospace !important;
  --font-text: "Computer Modern", "Inter", Sans-Serif !important;
  --h1-size: 24px !important;
  --h2-size: 22px !important;
  --h3-size: 20px !important;
  --h4-size: 18px !important;
  --h5-size: 17px !important;
  --h6-size: 16px !important;
  --headerFont: "Computer Modern", "Inter", Sans-Serif !important;
  --hue-bg: 265 !important;
  --hue-fg: 265 !important;
  --inline-title-size: 24px !important;
  --lum: 11% !important;
  --lum-bg: 95% !important;
  --lum-fg: 50% !important;
  --metadata-input-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: '??', "Jetbrains Mono", "Inter", Sans-Serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --sat-bg: 60% !important;
  --sat-fg: 100% !important;
  --tab-curve: 10px !important;
  --tab-font-size: 10pt !important;
  --tab-max-width: 300px !important;
  --tab-width: 180px !important;
  --title-color: black !important;
  --titleFont: "Computer Modern", "Inter", Sans-Serif !important;
  --unified-heading-space: 10px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 246, 246);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
}

html[saved-theme="light"] body .page article p > em, em {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .page article p > i, i {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .page article p > strong, strong {
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
}

html[saved-theme="light"] body .text-highlight {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body p {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    lists: `html[saved-theme="light"] body dl {
  margin-bottom: 18px;
  margin-top: 10px;
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "Computer Modern", Inter, sans-serif;
  margin-left: 215.969px;
  margin-right: 215.984px;
  width: 206.047px;
}

html[saved-theme="light"] body td {
  border-top-width: 0px;
}

html[saved-theme="light"] body th {
  border-top-left-radius: 10px;
}`,
    code: `html[saved-theme="light"] body code {
  font-family: "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body img {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
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

html[saved-theme="light"] body .callout[data-callout="example"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
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

html[saved-theme="light"] body .callout[data-callout="info"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
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

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
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

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
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
    search: `html[saved-theme="light"] body .search > .search-button {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body h2 {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body h3 {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body h4 {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body h5 {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body h6 {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
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

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `html[saved-theme="light"] body footer {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-right-width: 1px;
  border-top-right-radius: 8px;
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body details {
  margin-bottom: 10px;
  margin-top: 10px;
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  font-family: "??", "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
