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
  --background: hsl(265, 60%, 11%) !important;
  --background-modifier-border: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --background-modifier-border-focus: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --background-modifier-border-hover: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --background-modifier-form-field: color-mix(in srgb, hsl(265, 60%, 11%) 80%, #000) !important;
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(265, 60%, 11%) 80%, #000) !important;
  --background-modifier-hover: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --background-primary: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --background-primary-alt: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --background-secondary: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --background-secondary-alt: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --bases-cards-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --bases-cards-cover-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --bases-embed-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --bases-group-heading-property-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --bases-table-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --bases-table-cell-background-active: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --bases-table-cell-background-disabled: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --bases-table-group-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --bases-table-header-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --bases-table-header-background-hover: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --bases-table-header-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --bases-table-summary-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --bases-table-summary-background-hover: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --black: #000 !important;
  --blue: #437cf3 !important;
  --blue-violet: #6f51f4 !important;
  --blur-background: color-mix(in srgb, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)), color-mix(in srgb, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) 65%, transparent)) !important;
  --bodyFont: "Computer Modern", "Inter", Sans-Serif !important;
  --canvas-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --canvas-card-label-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --canvas-dot-pattern: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --caret-color: #faf4ed !important;
  --checkbox-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --checkbox-border-color-hover: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --checkbox-color: hsl(255, 89.76%, 75.9%) !important;
  --checkbox-marker-color: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --checklist-done-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --code-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --code-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --code-bracket-background: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --code-comment: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --code-normal: #faf4ed !important;
  --code-punctuation: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --codeFont: "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --color-base-00: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --color-base-05: color-mix(in srgb, hsl(265, 60%, 11%) 40%, #000) !important;
  --color-base-10: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --color-base-100: color-mix(in srgb, hsl(265, 60%, 11%) 0%, hsl(265, 100%, 80%)) !important;
  --color-base-20: color-mix(in srgb, hsl(265, 60%, 11%) 80%, #000) !important;
  --color-base-25: color-mix(in srgb, hsl(265, 60%, 11%) 80%, #000) !important;
  --color-base-30: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --color-base-35: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --color-base-40: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --color-base-50: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --color-base-60: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --color-base-70: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --cool-cyan: #43cfea !important;
  --cool-gray: #515768 !important;
  --cyan: #51e1e9 !important;
  --dark: #faf4ed !important;
  --darkgray: #faf4ed !important;
  --divider-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --dropdown-background: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --dropdown-background-hover: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --embed-block-shadow-hover: 0 0 0 1px color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)), inset 0 0 0 1px color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --file-header-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --file-header-background-focused: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --file-header-font: "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --flair-color: #faf4ed !important;
  --font-callout-theme: "Computer Modern", "Sans-Serif" !important;
  --font-interface: "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Jetbrains Mono", "Inter", Sans-Serif !important;
  --font-mermaid: "Computer Modern", "Inter", Sans-Serif !important;
  --font-monospace: "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Jetbrains Mono", "Source Code Pro", monospace !important;
  --font-text: "Computer Modern", "Inter", Sans-Serif !important;
  --footnote-divider-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --footnote-id-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --footnote-id-color-no-occurrences: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --footnote-input-background-active: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --foreground: hsl(265, 100%, 80%) !important;
  --graph-line: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --graph-node: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --graph-node-unresolved: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --graph-text: #faf4ed !important;
  --gray: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --h1-color: hsl(265, 100%, 65%) !important;
  --h1-size: 24px !important;
  --h2-color: hsl(265, 100%, 75%) !important;
  --h2-size: 22px !important;
  --h3-color: hsl(265, 100%, 80%) !important;
  --h3-size: 20px !important;
  --h4-color: hsl(265, 100%, 80%) !important;
  --h4-size: 18px !important;
  --h5-color: hsl(265, 100%, 90%) !important;
  --h5-size: 17px !important;
  --h6-color: hsl(265, 100%, 95%) !important;
  --h6-size: 16px !important;
  --header-title-color: hsl(265, 100%, 65%) !important;
  --headerFont: "Computer Modern", "Inter", Sans-Serif !important;
  --heading-formatting: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --highlight: color-mix(in srgb, hsl(265, 100%, 65%) 25%, transparent) !important;
  --hot-red: #e3365e !important;
  --hr-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --hue-bg: 265 !important;
  --hue-fg: 265 !important;
  --icon-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --icon-color-focused: #faf4ed !important;
  --icon-color-hover: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --indentation-guide-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --indentation-guide-color-active: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --inline-title-color: hsl(265, 100%, 65%) !important;
  --inline-title-size: 24px !important;
  --input-date-separator: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --input-placeholder-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --interactive-hover: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --interactive-normal: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --light: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --light-blue: #54b6f8 !important;
  --lightgray: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --list-marker-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --list-marker-color-hover: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --lum: 11% !important;
  --magenta: #e54f9b !important;
  --menu-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --menu-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --metadata-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --metadata-divider-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --metadata-input-background-active: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --metadata-input-font: "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #faf4ed !important;
  --metadata-label-background-active: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --metadata-label-font: "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --metadata-label-text-color-hover: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --metadata-property-background-active: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --mint: #52eea3 !important;
  --modal-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --modal-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --nav-collapse-icon-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --nav-collapse-icon-color-collapsed: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --nav-heading-color: #faf4ed !important;
  --nav-heading-color-collapsed: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --nav-heading-color-collapsed-hover: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --nav-heading-color-hover: #faf4ed !important;
  --nav-indentation-guide-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --nav-item-background-active: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --nav-item-background-hover: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --nav-item-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --nav-item-color-active: #faf4ed !important;
  --nav-item-color-hover: #faf4ed !important;
  --nav-item-color-selected: #faf4ed !important;
  --nav-tag-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --nav-tag-color-active: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --nav-tag-color-hover: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --pdf-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --pdf-page-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --pdf-sidebar-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --pill-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --pill-border-color-hover: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --pill-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --pill-color-hover: #faf4ed !important;
  --pill-color-remove: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --prompt-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --prompt-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --purple: #c952ed !important;
  --raised-background: color-mix(in srgb, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)), color-mix(in srgb, color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) 65%, transparent)) !important;
  --ribbon-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --ribbon-background-collapsed: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --sat-bg: 60% !important;
  --sat-fg: 100% !important;
  --scrollbar-active-thumb-bg: color-mix(in srgb, hsl(265, 60%, 11%) 80%, hsl(265, 100%, 80%)) !important;
  --scrollbar-thumb-bg: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --search-clear-button-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --search-icon-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --search-result-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --setting-group-heading-color: #faf4ed !important;
  --setting-items-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --setting-items-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --slider-thumb-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --slider-track-background: hsl(255, 89.76%, 75.9%) !important;
  --status-bar-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --status-bar-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --status-bar-text-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --suggestion-background: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --tab-background-active: color-mix(in srgb, hsl(265, 60%, 11%) 25%, #000) !important;
  --tab-container-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --tab-curve: 10px !important;
  --tab-divider-color: color-mix(in srgb, hsl(265, 60%, 11%) 95%, hsl(265, 100%, 80%)) !important;
  --tab-font-size: 10pt !important;
  --tab-max-width: 300px !important;
  --tab-outline-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --tab-switcher-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000), transparent) !important;
  --tab-text-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --tab-text-color-active: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --tab-text-color-focused: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --tab-text-color-focused-active: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --tab-text-color-focused-active-current: #faf4ed !important;
  --tab-width: 180px !important;
  --table-add-button-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --table-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --table-drag-handle-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --table-header-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --table-header-color: #faf4ed !important;
  --text-faint: color-mix(in srgb, hsl(265, 60%, 11%) 60%, hsl(265, 100%, 80%)) !important;
  --text-highlight-bg: color-mix(in srgb, hsl(265, 100%, 65%) 25%, transparent) !important;
  --text-highlight-bg-active: color-mix(in srgb, hsl(265, 100%, 65%) 25%, transparent) !important;
  --text-muted: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
  --text-normal: #faf4ed !important;
  --textHighlight: color-mix(in srgb, hsl(265, 100%, 65%) 25%, transparent) !important;
  --title-color: hsl(265, 100%, 65%) !important;
  --titleFont: "Computer Modern", "Inter", Sans-Serif !important;
  --titlebar-background: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --titlebar-background-focused: color-mix(in srgb, hsl(265, 60%, 11%) 50%, #000) !important;
  --titlebar-border-color: color-mix(in srgb, hsl(265, 60%, 11%) 90%, hsl(265, 100%, 80%)) !important;
  --titlebar-text-color: color-mix(in srgb, hsl(265, 60%, 11%) 30%, hsl(265, 100%, 80%)) !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: color(srgb 0.02475 0.011 0.044);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.366067 0.2664 0.5056);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: color(srgb 0.0495 0.022 0.088);
  border-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.165767 0.0996 0.2584);
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.566367 0.4332 0.7528);
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.566367 0.4332 0.7528);
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
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: color(srgb 0.591667 0.3 1 / 0.25);
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 244, 237);
  font-family: "Computer Modern", Inter, sans-serif;
  outline: rgb(250, 244, 237) none 0px;
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(166, 138, 249);
  border-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body p {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: color(srgb 0.566367 0.4332 0.7528) none 0px;
  text-decoration-color: color(srgb 0.566367 0.4332 0.7528);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
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
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: color(srgb 0.366067 0.2664 0.5056);
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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
  border-bottom-color: rgb(151, 77, 255);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(151, 77, 255);
  border-radius: 6px;
  border-right-color: rgb(151, 77, 255);
  border-top-color: rgb(151, 77, 255);
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
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.366067 0.2664 0.5056);
  border-left-color: color(srgb 0.366067 0.2664 0.5056);
  border-right-color: color(srgb 0.366067 0.2664 0.5056);
  border-top-color: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.366067 0.2664 0.5056);
  text-decoration: line-through 1px color(srgb 0.366067 0.2664 0.5056);
  text-decoration-color: color(srgb 0.366067 0.2664 0.5056);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 244, 237);
  text-decoration-color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(166, 138, 249);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(166, 138, 249);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 168, 130, 255;
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
  --callout-color: 251, 70, 76;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 68, 207, 110;
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
  --callout-color: 83, 223, 221;
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
  --callout-color: 2, 122, 255;
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
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  border-bottom-color: rgb(250, 244, 237);
  border-left-color: rgb(250, 244, 237);
  border-right-color: rgb(250, 244, 237);
  border-top-color: rgb(250, 244, 237);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: color(srgb 0.232533 0.1552 0.3408);
  color: rgb(250, 244, 237);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
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
  --callout-color: 2, 122, 255;
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.566367 0.4332 0.7528);
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: color(srgb 0.165767 0.0996 0.2584);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
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
  --codeFont: "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --file-header-font: "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-callout-theme: "Computer Modern", "Sans-Serif" !important;
  --font-interface: "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Jetbrains Mono", "Inter", Sans-Serif !important;
  --font-mermaid: "Computer Modern", "Inter", Sans-Serif !important;
  --font-monospace: "Jetbrains Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
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
  --metadata-input-font: "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: "Jetbrains Mono", "Inter", Sans-Serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
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
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "Computer Modern", Inter, sans-serif;
  font-weight: 900;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "Computer Modern", Inter, sans-serif;
}`,
    lists: `html[saved-theme="light"] body dl {
  margin-bottom: 18px;
  margin-top: 10px;
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(152, 115, 247);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='16' height='16'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(152, 115, 247);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 120, 82, 238;
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
  --callout-color: 233, 49, 71;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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
  --callout-color: 158, 158, 158;
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
  --callout-color: 8, 185, 78;
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
  --callout-color: 0, 191, 188;
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
  --callout-color: 8, 109, 221;
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
  --callout-color: 236, 117, 0;
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
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Jetbrains Mono", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body h2 {
  font-family: "Computer Modern", Inter, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
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
  --callout-color: 8, 109, 221;
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
