import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dawn", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 223 !important;
  --accent-l: 62% !important;
  --accent-s: 100% !important;
  --alpha-100: 0.1 !important;
  --alpha-200: 0.2 !important;
  --alpha-500: 0.5 !important;
  --background-modifier-active-hover: hsla(223, 100%, 62%, 0.15) !important;
  --background-modifier-border: rgba(255, 255, 255, 0.05) !important;
  --background-modifier-border-focus: #495057 !important;
  --background-modifier-border-hover: #979fa7 !important;
  --background-modifier-border-row: #212529 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.7) !important;
  --background-modifier-error: #fa5252 !important;
  --background-modifier-error-hover: #fa5252 !important;
  --background-modifier-error-rgb: 250, 82, 82 !important;
  --background-modifier-form-field: #343a40 !important;
  --background-modifier-form-field-hover: #343a40 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.1) !important;
  --background-modifier-success: #69db7c !important;
  --background-modifier-success-rgb: 105, 219, 124 !important;
  --background-primary: #212529 !important;
  --background-primary-alt: #646b73 !important;
  --background-primary-low: #15171a !important;
  --background-secondary: #343a40 !important;
  --background-secondary-alt: rgba(255, 255, 255, 0.08) !important;
  --bases-cards-background: #212529 !important;
  --bases-cards-border-width: 0.75x !important;
  --bases-cards-cover-background: #646b73 !important;
  --bases-cards-font-size: 0.875rem !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --bases-cards-shadow-hover: 0 0 0 1px #979fa7 !important;
  --bases-embed-border-color: rgba(255, 255, 255, 0.05) !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: #dee2e6 !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-group-heading-value-size: 0.875rem !important;
  --bases-header-border-width: 0 0 0.75x 0 !important;
  --bases-table-border-color: #212529 !important;
  --bases-table-cell-background-active: #212529 !important;
  --bases-table-cell-background-disabled: #646b73 !important;
  --bases-table-cell-background-selected: hsla(223, 100%, 62%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #495057 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(223, 100%, 62%) !important;
  --bases-table-column-border-width: 0.75x !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-container-border-width: 0.75x !important;
  --bases-table-font-size: 0.875rem !important;
  --bases-table-group-background: #646b73 !important;
  --bases-table-header-background: #212529 !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.1) !important;
  --bases-table-header-color: #dee2e6 !important;
  --bases-table-row-border-width: 0.75x !important;
  --bases-table-summary-background: #212529 !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.1) !important;
  --blockquote-border-color: hsl(223, 100%, 62%) !important;
  --blockquote-border-thickness: 1px !important;
  --blur-background: color-mix(in srgb, #343a40 65%, transparent) linear-gradient(#343a40, color-mix(in srgb, #343a40 65%, transparent)) !important;
  --bodyFont: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-background: rgba(0, 0, 0, 0.1) !important;
  --bold-weight: 600 !important;
  --border-width: 0.75x !important;
  --button-radius: 6px !important;
  --callout-border-opacity: 0.2;
  --callout-bug: 250, 82, 82;
  --callout-default: 255, 255, 255;
  --callout-error: 250, 82, 82;
  --callout-fail: 250, 82, 82;
  --callout-padding: 8px 20px 8px
    20px;
  --callout-question: 255, 228, 82;
  --callout-radius: 6px;
  --callout-success: 105, 219, 124;
  --callout-summary: 255, 255, 255;
  --callout-title-padding: 0px;
  --callout-title-size: 16px;
  --callout-warning: 255, 154, 103;
  --canvas-background: #212529 !important;
  --canvas-card-label-color: #adb5bd !important;
  --canvas-color-1: 250, 82, 82 !important;
  --canvas-color-2: 255, 154, 103 !important;
  --canvas-color-3: 255, 228, 82 !important;
  --canvas-color-4: 105, 219, 124 !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: #646b73 !important;
  --caret-color: #f1f3f5 !important;
  --checkbox-border-color: #adb5bd !important;
  --checkbox-border-color-hover: #dee2e6 !important;
  --checkbox-color: hsl(223, 100%, 62%) !important;
  --checkbox-color-hover: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --checkbox-marker-color: #212529 !important;
  --checkbox-radius: 6px !important;
  --checkbox-size: 17.6px !important;
  --checklist-done-color: #646b73 !important;
  --clickable-icon-radius: 6px !important;
  --code-background: rgba(255, 255, 255, 0.05) !important;
  --code-border-color: rgba(255, 255, 255, 0.05) !important;
  --code-bracket-background: rgba(255, 255, 255, 0.1) !important;
  --code-comment: #646b73 !important;
  --code-function: #ffe452 !important;
  --code-important: #ff9a67 !important;
  --code-keyword: #6a94fc !important;
  --code-normal: #dee2e6 !important;
  --code-operator: #fa5252 !important;
  --code-property: #59e8d4 !important;
  --code-punctuation: #dee2e6 !important;
  --code-radius: 2px !important;
  --code-size: 0.875rem !important;
  --code-string: #69db7c !important;
  --code-tag: #fa5252 !important;
  --code-value: #d0bfff !important;
  --codeFont: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #adb5bd !important;
  --collapse-icon-color-collapsed: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --color-accent: hsl(223, 100%, 62%) !important;
  --color-accent-1: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --color-accent-2: hsl(
    223,
    100%,
    65.8%
  ) !important;
  --color-accent-hsl: 223, 100%, 62% !important;
  --color-ash-100: #131311 !important;
  --color-ash-1000: #bebaa7 !important;
  --color-ash-200: #262521 !important;
  --color-ash-300: #393832 !important;
  --color-ash-400: #4c4a43 !important;
  --color-ash-500: #5f5d54 !important;
  --color-ash-600: #727064 !important;
  --color-ash-700: #858275 !important;
  --color-ash-800: #989586 !important;
  --color-ash-900: #aba796 !important;
  --color-base-00: #0e0e0f !important;
  --color-base-05: #15171a !important;
  --color-base-10: #212529 !important;
  --color-base-100: #fefefe !important;
  --color-base-20: #343a40 !important;
  --color-base-25: #495057 !important;
  --color-base-30: #646b73 !important;
  --color-base-35: #979fa7 !important;
  --color-base-40: #adb5bd !important;
  --color-base-50: #dee2e6 !important;
  --color-base-60: #f1f3f5 !important;
  --color-base-70: #f8f9fa !important;
  --color-blue: #6a94fc !important;
  --color-blue-100: #002c67 !important;
  --color-blue-200: #1e409b !important;
  --color-blue-300: #2c54cd !important;
  --color-blue-400: #3160e1 !important;
  --color-blue-500: #3d73ff !important;
  --color-blue-600: #6a94fc !important;
  --color-blue-700: #b0cdff !important;
  --color-blue-800: #d1e9ff !important;
  --color-blue-900: #e7f7ff !important;
  --color-blue-alpha-100: rgba(0, 102, 255, 0.2) !important;
  --color-blue-alpha-200: rgba(0, 102, 255, 0.3) !important;
  --color-cyan: #59e8d4 !important;
  --color-cyan-alpha-100: rgba(83, 223, 221, 0.1) !important;
  --color-gray-alpha-100: rgba(255, 255, 255, 0.1) !important;
  --color-gray-alpha-25: rgba(255, 255, 255, 0.03) !important;
  --color-gray-alpha-50: rgba(255, 255, 255, 0.05) !important;
  --color-gray-alpha-75: rgba(255, 255, 255, 0.08) !important;
  --color-green: #69db7c !important;
  --color-green-100: #0e2e15 !important;
  --color-green-200: #1c5928 !important;
  --color-green-300: #28803a !important;
  --color-green-400: #2f9e44 !important;
  --color-green-500: #40c057 !important;
  --color-green-600: #69db7c !important;
  --color-green-700: #b2f2bb !important;
  --color-green-800: #d3f9d8 !important;
  --color-green-900: #ebfbee !important;
  --color-green-alpha-100: rgba(64, 192, 87, 0.1) !important;
  --color-green-alpha-200: rgba(64, 192, 87, 0.2) !important;
  --color-green-rgb: 105, 219, 124 !important;
  --color-orange: #ff9a67 !important;
  --color-orange-100: #4f1905 !important;
  --color-orange-200: #8f300a !important;
  --color-orange-300: #d9480f !important;
  --color-orange-400: #e8590c !important;
  --color-orange-500: #fd7e14 !important;
  --color-orange-600: #ffa94d !important;
  --color-orange-700: #ffd8a8 !important;
  --color-orange-800: #ffe8cc !important;
  --color-orange-900: #fff4e6 !important;
  --color-orange-rgb: 255, 154, 103 !important;
  --color-pink: #ffc9c9 !important;
  --color-purple: #d0bfff !important;
  --color-purple-100: #2d1d5c !important;
  --color-purple-200: #482e94 !important;
  --color-purple-300: #5f3dc4 !important;
  --color-purple-400: #6741d9 !important;
  --color-purple-500: #7950f2 !important;
  --color-purple-600: #9775fa !important;
  --color-purple-700: #d0bfff !important;
  --color-purple-800: #e5dbff !important;
  --color-purple-900: #f3f0ff !important;
  --color-purple-alpha-100: rgba(149, 114, 255, 0.2) !important;
  --color-purple-alpha-200: rgba(149, 114, 255, 0.3) !important;
  --color-red: #fa5252 !important;
  --color-red-100: #700707 !important;
  --color-red-200: #9b0404 !important;
  --color-red-300: #c92a2a !important;
  --color-red-400: #e03131 !important;
  --color-red-500: #fa5252 !important;
  --color-red-600: #ff8787 !important;
  --color-red-700: #ffc9c9 !important;
  --color-red-800: #ffe3e3 !important;
  --color-red-900: #fff5f5 !important;
  --color-red-alpha-100: rgba(250, 82, 82, 0.1) !important;
  --color-red-alpha-200: rgba(250, 82, 82, 0.2) !important;
  --color-red-rgb: 250, 82, 82 !important;
  --color-yellow: #ffe452 !important;
  --color-yellow-alpha-100: rgba(255, 227, 78, 0.18) !important;
  --color-yellow-alpha-200: rgba(255, 227, 78, 0.3) !important;
  --color-yellow-alpha-50: rgba(255, 227, 78, 0.1) !important;
  --color-yellow-rgb: 255, 228, 82 !important;
  --cursor-action: pointer !important;
  --dark: #f1f3f5 !important;
  --darkgray: #f1f3f5 !important;
  --default-font: "Inter", sans-serif !important;
  --divider-color: rgba(255, 255, 255, 0.05) !important;
  --divider-color-hover: hsl(223, 100%, 62%) !important;
  --divider-width-hover: 2px !important;
  --dropdown-background: #343a40 !important;
  --dropdown-background-hover: #495057 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --embed-border-left: 2px solid hsl(223, 100%, 62%) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(223, 100%, 62%) !important;
  --file-header-background: #212529 !important;
  --file-header-background-focused: #212529 !important;
  --file-header-border: 0.75x solid transparent !important;
  --file-header-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-weight: 500 !important;
  --file-line-width: 640px !important;
  --file-margins: 32px !important;
  --flair-background: #343a40 !important;
  --flair-color: #f1f3f5 !important;
  --font-interface: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-small: 0.933rem !important;
  --font-smaller: 0.875rem !important;
  --font-smallest: 0.8rem !important;
  --font-ui-medium: 16px !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: rgba(255, 255, 255, 0.05) !important;
  --footnote-divider-width: 0.75x !important;
  --footnote-id-color: #dee2e6 !important;
  --footnote-id-color-no-occurrences: #adb5bd !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.1) !important;
  --footnote-radius: 2px !important;
  --footnote-size: 0.875rem !important;
  --graph-line: #979fa7 !important;
  --graph-node: #dee2e6 !important;
  --graph-node-attachment: #ffe452 !important;
  --graph-node-focused: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --graph-node-tag: #69db7c !important;
  --graph-node-unresolved: #adb5bd !important;
  --graph-text: #f1f3f5 !important;
  --gray: #dee2e6 !important;
  --h1-size: 1.375rem !important;
  --h1-weight: 600 !important;
  --h2-size: 1.25rem !important;
  --h2-weight: 600 !important;
  --h3-size: 1.125rem !important;
  --h3-weight: 600 !important;
  --h4-size: 1rem !important;
  --h4-weight: 600 !important;
  --h5-size: 0.875rem !important;
  --h5-style: small-caps !important;
  --h5-weight: 600 !important;
  --h6-size: 0.813rem !important;
  --h6-style: small-caps !important;
  --header-height: 42px !important;
  --headerFont: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #adb5bd !important;
  --highlight: rgba(255, 255, 255, 0.1) !important;
  --hr-color: rgba(255, 255, 255, 0.05) !important;
  --hr-thickness: 1px !important;
  --icon-color: #dee2e6 !important;
  --icon-color-active: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --icon-color-focused: #f1f3f5 !important;
  --icon-color-hover: #dee2e6 !important;
  --icon-opacity: 0.6 !important;
  --indentation-guide-color: rgba(255, 255, 255, 0.1) !important;
  --indentation-guide-width-active: 0.75x !important;
  --inline-title-size: 1.375rem !important;
  --inline-title-weight: 600 !important;
  --input-border-width: 0px !important;
  --input-date-separator: #adb5bd !important;
  --input-height: 32px !important;
  --input-placeholder-color: #adb5bd !important;
  --input-radius: 6px !important;
  --input-shadow: transparent !important;
  --input-shadow-hover: transparent !important;
  --interactive-accent: hsl(223, 100%, 62%) !important;
  --interactive-accent-hover: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --interactive-accent-hsl: 223, 100%, 62% !important;
  --interactive-hover: #495057 !important;
  --interactive-normal: #343a40 !important;
  --light: #212529 !important;
  --lightgray: #343a40 !important;
  --line-height-large: 1.6 !important;
  --link-color: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --link-color-hover: hsl(
    223,
    100%,
    65.8%
  ) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --link-external-color-hover: hsl(
    223,
    100%,
    65.8%
  ) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --link-unresolved-decoration-color: hsla(223, 100%, 62%, 0.3) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-bullet-size: 0.2rem !important;
  --list-indent: 1rem !important;
  --list-marker-color: #979fa7 !important;
  --list-marker-color-collapsed: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --list-marker-color-hover: #dee2e6 !important;
  --list-spacing: 0.14rem !important;
  --menu-background: #343a40 !important;
  --menu-border-color: #979fa7 !important;
  --menu-border-width: 0.75x !important;
  --menu-radius: 6px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --metadata-border-color: rgba(255, 255, 255, 0.05) !important;
  --metadata-divider-color: rgba(255, 255, 255, 0.05) !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.1) !important;
  --metadata-input-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.875rem !important;
  --metadata-input-text-color: #f1f3f5 !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.1) !important;
  --metadata-label-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.875rem !important;
  --metadata-label-text-color: #dee2e6 !important;
  --metadata-label-text-color-hover: #dee2e6 !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.1) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #495057 !important;
  --metadata-property-box-shadow-hover: 0 0 0 0.75x #979fa7 !important;
  --modal-background: #212529 !important;
  --modal-border-color: #adb5bd !important;
  --modal-border-width: 0.75x !important;
  --nav-collapse-icon-color: #adb5bd !important;
  --nav-collapse-icon-color-collapsed: #adb5bd !important;
  --nav-heading-color: #f1f3f5 !important;
  --nav-heading-color-collapsed: #adb5bd !important;
  --nav-heading-color-collapsed-hover: #dee2e6 !important;
  --nav-heading-color-hover: #f1f3f5 !important;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.1) !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.1) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.1) !important;
  --nav-item-background-selected: hsla(223, 100%, 62%, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 8px !important;
  --nav-item-color: #dee2e6 !important;
  --nav-item-color-active: #f1f3f5 !important;
  --nav-item-color-highlighted: hsl(
    223,
    100%,
    65.8%
  ) !important;
  --nav-item-color-hover: #f1f3f5 !important;
  --nav-item-color-selected: #f1f3f5 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 2px !important;
  --nav-item-weight-active: 600 !important;
  --nav-item-weight-hover: 600 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #adb5bd !important;
  --nav-tag-color-active: #dee2e6 !important;
  --nav-tag-color-hover: #dee2e6 !important;
  --nav-tag-radius: 2px !important;
  --pdf-background: #212529 !important;
  --pdf-page-background: #212529 !important;
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --pdf-sidebar-background: #212529 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --pill-border-color: rgba(255, 255, 255, 0.05) !important;
  --pill-border-color-hover: #979fa7 !important;
  --pill-border-width: 0.75x !important;
  --pill-color: #dee2e6 !important;
  --pill-color-hover: #f1f3f5 !important;
  --pill-color-remove: #adb5bd !important;
  --pill-color-remove-hover: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #212529 !important;
  --prompt-border-color: #adb5bd !important;
  --prompt-border-width: 0.75x !important;
  --prompt-max-width: 62vw !important;
  --radius-full: 9999px !important;
  --radius-m: 6px !important;
  --radius-s: 2px !important;
  --raised-background: color-mix(in srgb, #343a40 65%, transparent) linear-gradient(#343a40, color-mix(in srgb, #343a40 65%, transparent)) !important;
  --ribbon-background: #212529 !important;
  --ribbon-background-collapsed: #212529 !important;
  --ribbon-width: 48px !important;
  --scale-dimension-font-size-10: 10px !important;
  --scale-dimension-font-size-100: 14px !important;
  --scale-dimension-font-size-1000: 48px !important;
  --scale-dimension-font-size-1100: 54px !important;
  --scale-dimension-font-size-1200: 60px !important;
  --scale-dimension-font-size-1300: 72px !important;
  --scale-dimension-font-size-200: 16px !important;
  --scale-dimension-font-size-25: 11px !important;
  --scale-dimension-font-size-300: 18px !important;
  --scale-dimension-font-size-400: 20px !important;
  --scale-dimension-font-size-50: 12px !important;
  --scale-dimension-font-size-500: 24px !important;
  --scale-dimension-font-size-600: 28px !important;
  --scale-dimension-font-size-700: 32px !important;
  --scale-dimension-font-size-75: 13px !important;
  --scale-dimension-font-size-800: 36px !important;
  --scale-dimension-font-size-900: 42px !important;
  --scale-dimension-size-0: 0px !important;
  --scale-dimension-size-10: 1px !important;
  --scale-dimension-size-100: 8px !important;
  --scale-dimension-size-1000: 80px !important;
  --scale-dimension-size-125: 10px !important;
  --scale-dimension-size-150: 12px !important;
  --scale-dimension-size-1500: 100px !important;
  --scale-dimension-size-175: 14px !important;
  --scale-dimension-size-200: 16px !important;
  --scale-dimension-size-2000: 160px !important;
  --scale-dimension-size-225: 18px !important;
  --scale-dimension-size-25: 2px !important;
  --scale-dimension-size-250: 20px !important;
  --scale-dimension-size-300: 24px !important;
  --scale-dimension-size-3000: 240px !important;
  --scale-dimension-size-400: 32px !important;
  --scale-dimension-size-50: 4px !important;
  --scale-dimension-size-500: 40px !important;
  --scale-dimension-size-600: 48px !important;
  --scale-dimension-size-700: 56px !important;
  --scale-dimension-size-75: 6px !important;
  --scale-dimension-size-800: 64px !important;
  --scale-dimension-size-900: 72px !important;
  --scale-dimension-size-max: 9999px !important;
  --scale-radius-1: 2px !important;
  --scale-radius-2: 4px !important;
  --scale-radius-3: 6px !important;
  --scale-radius-4: 12px !important;
  --scale-radius-5: 16px !important;
  --scale-radius-6: 24px !important;
  --scale-radius-9999: 24px !important;
  --search-clear-button-color: #dee2e6 !important;
  --search-icon-color: #dee2e6 !important;
  --search-result-background: #212529 !important;
  --secondary: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --setting-group-heading-color: #f1f3f5 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #646b73 !important;
  --setting-items-border-color: rgba(255, 255, 255, 0.05) !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3) !important;
  --slider-thumb-border-color: #979fa7 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: rgba(255, 255, 255, 0.05) !important;
  --static-alpha-balck-100: rgba(0, 0, 0, 0.06) !important;
  --static-alpha-balck-150: rgba(0, 0, 0, 0.1) !important;
  --static-alpha-balck-200: rgba(0, 0, 0, 0.2) !important;
  --static-alpha-balck-500: rgba(0, 0, 0, 0.5) !important;
  --static-alpha-balck-700: rgba(0, 0, 0, 0.7) !important;
  --static-alpha-white-200: rgba(255, 255, 255, 0.2) !important;
  --static-alpha-white-500: rgba(255, 255, 255, 0.5) !important;
  --static-black: #000000 !important;
  --static-blue: #3d73ff !important;
  --static-large: 162% !important;
  --static-medium: 150% !important;
  --static-small: 132% !important;
  --static-white: #ffffff !important;
  --status-bar-background: #343a40 !important;
  --status-bar-border-color: rgba(255, 255, 255, 0.05) !important;
  --status-bar-font-size: 11px !important;
  --status-bar-radius: 6px !important;
  --status-bar-text-color: #dee2e6 !important;
  --suggestion-background: #212529 !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: #fa5252 !important;
  --sync-avatar-color-2: #ff9a67 !important;
  --sync-avatar-color-3: #ffe452 !important;
  --sync-avatar-color-4: #69db7c !important;
  --sync-avatar-color-5: #59e8d4 !important;
  --sync-avatar-color-6: #6a94fc !important;
  --sync-avatar-color-7: #d0bfff !important;
  --sync-avatar-color-8: #ffc9c9 !important;
  --tab-background-active: #212529 !important;
  --tab-container-background: #343a40 !important;
  --tab-divider-color: #979fa7 !important;
  --tab-outline-color: rgba(255, 255, 255, 0.05) !important;
  --tab-radius: 2px !important;
  --tab-stacked-header-width: 42px !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #343a40 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #343a40, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(223, 100%, 62%) !important;
  --tab-text-color: #adb5bd !important;
  --tab-text-color-active: #dee2e6 !important;
  --tab-text-color-focused: #dee2e6 !important;
  --tab-text-color-focused-active: #dee2e6 !important;
  --tab-text-color-focused-active-current: #f1f3f5 !important;
  --tab-text-color-focused-highlighted: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --table-add-button-border-color: rgba(255, 255, 255, 0.05) !important;
  --table-border-color: #212529 !important;
  --table-drag-handle-background-active: hsl(223, 100%, 62%) !important;
  --table-drag-handle-color: #adb5bd !important;
  --table-header-background: #343a40 !important;
  --table-header-border-color: #212529 !important;
  --table-header-color: #f1f3f5 !important;
  --table-header-size: 13px !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(223, 100%, 62%, 0.1) !important;
  --table-selection-border-color: hsl(223, 100%, 62%) !important;
  --table-white-space: normal !important;
  --tag-background: hsla(223, 100%, 62%, 0.1) !important;
  --tag-background-hover: hsla(223, 100%, 62%, 0.2) !important;
  --tag-border-color: hsla(223, 100%, 62%, 0.15) !important;
  --tag-border-color-hover: hsla(223, 100%, 62%, 0.15) !important;
  --tag-color: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --tag-color-hover: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --tag-padding-x: 0.65rem !important;
  --tag-padding-y: 0.25rem !important;
  --tag-radius: 6px !important;
  --tag-size: 0.875rem !important;
  --tertiary: hsl(
    223,
    100%,
    65.8%
  ) !important;
  --text-accent: hsl(
    223,
    100%,
    58.2%
  ) !important;
  --text-accent-hover: hsl(
    223,
    100%,
    65.8%
  ) !important;
  --text-error: #fa5252 !important;
  --text-fade: #646b73 !important;
  --text-faint: #adb5bd !important;
  --text-highlight-bg: rgba(255, 255, 255, 0.1) !important;
  --text-highlight-bg-active: rgba(255, 227, 78, 0.1) !important;
  --text-muted: #dee2e6 !important;
  --text-normal: #f1f3f5 !important;
  --text-selection: hsla(223, 100%, 62%, 0.25) !important;
  --text-success: #69db7c !important;
  --text-warning: #ff9a67 !important;
  --textHighlight: rgba(255, 255, 255, 0.1) !important;
  --titleFont: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #343a40 !important;
  --titlebar-background-focused: #343a40 !important;
  --titlebar-border-color: rgba(255, 255, 255, 0.05) !important;
  --titlebar-text-color: #dee2e6 !important;
  --titlebar-text-color-focused: #f1f3f5 !important;
  --traffic-lights-offset-x: 42px !important;
  --traffic-lights-offset-y: 42px !important;
  --vault-name-color: #f1f3f5 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #f1f3f5 !important;
  --vault-profile-color-hover: #f1f3f5 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(52, 58, 64);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(52, 58, 64);
  border-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(61, 116, 255, 0.1);
  border-radius: 6px;
  color: rgb(42, 102, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(52, 58, 64);
  border-left-color: rgba(255, 255, 255, 0.05);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body del {
  color: rgb(173, 181, 189);
  outline: rgb(173, 181, 189) none 0px;
  text-decoration-color: rgb(173, 181, 189);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(241, 243, 245);
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(173, 181, 189);
  border-radius: 6px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(61, 116, 255);
  border-color: rgb(61, 116, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 226, 230) none 0px;
  text-decoration-color: rgb(222, 226, 230);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(42, 102, 255);
  outline: rgb(42, 102, 255) none 0px;
  text-decoration-color: rgb(42, 102, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(42, 102, 255);
  outline: rgb(42, 102, 255) none 0px;
  text-decoration-color: rgb(42, 102, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(42, 102, 255);
  outline: rgb(42, 102, 255) none 0px;
  text-decoration: rgba(61, 116, 255, 0.3);
  text-decoration-color: rgba(61, 116, 255, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(61, 116, 255);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body table {
  background-color: rgba(255, 255, 255, 0.03);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
  width: 602px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(52, 58, 64);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(52, 58, 64);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(255, 228, 82);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 228, 82);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 228, 82);
  border-left-color: rgb(255, 228, 82);
  border-right-color: rgb(255, 228, 82);
  border-top-color: rgb(255, 228, 82);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-radius: 6px;
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-radius: 6px;
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(100, 107, 115);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(241, 243, 245);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(61, 116, 255);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(173, 181, 189);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(173, 181, 189);
  border-right-color: rgb(173, 181, 189);
  border-top-color: rgb(173, 181, 189);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-left: -26.4px;
  width: 17.5938px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(255, 255, 255);
  font-weight: 400;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 255, 255, 255;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-color: rgba(168, 130, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(168, 130, 255, 0.2);
  border-right-color: rgba(168, 130, 255, 0.2);
  border-top-color: rgba(168, 130, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(2, 122, 255, 0.2);
  border-right-color: rgba(2, 122, 255, 0.2);
  border-top-color: rgba(2, 122, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 255, 255, 255;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 255, 228, 82;
  background-color: rgba(255, 228, 82, 0.1);
  border-bottom-color: rgba(255, 228, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 228, 82, 0.2);
  border-right-color: rgba(255, 228, 82, 0.2);
  border-top-color: rgba(255, 228, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgba(158, 158, 158, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(158, 158, 158, 0.2);
  border-right-color: rgba(158, 158, 158, 0.2);
  border-top-color: rgba(158, 158, 158, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 105, 219, 124;
  background-color: rgba(105, 219, 124, 0.1);
  border-bottom-color: rgba(105, 219, 124, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(105, 219, 124, 0.2);
  border-right-color: rgba(105, 219, 124, 0.2);
  border-top-color: rgba(105, 219, 124, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgba(83, 223, 221, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(83, 223, 221, 0.2);
  border-right-color: rgba(83, 223, 221, 0.2);
  border-top-color: rgba(83, 223, 221, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(2, 122, 255, 0.2);
  border-right-color: rgba(2, 122, 255, 0.2);
  border-top-color: rgba(2, 122, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 255, 154, 103;
  background-color: rgba(255, 154, 103, 0.1);
  border-bottom-color: rgba(255, 154, 103, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 154, 103, 0.2);
  border-right-color: rgba(255, 154, 103, 0.2);
  border-top-color: rgba(255, 154, 103, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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
  background-color: rgb(52, 58, 64);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: rgb(241, 243, 245);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 37, 41);
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-left-width: 0px;
  border-right-color: rgb(241, 243, 245);
  border-right-width: 0px;
  border-top-color: rgb(241, 243, 245);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-left-width: 0px;
  border-right-color: rgb(241, 243, 245);
  border-right-width: 0px;
  border-top-color: rgb(241, 243, 245);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(61, 116, 255, 0.1);
  border-bottom-color: rgba(61, 116, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(61, 116, 255, 0.15);
  border-right-color: rgba(61, 116, 255, 0.15);
  border-top-color: rgba(61, 116, 255, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(42, 102, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body h2 {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body h3 {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body h4 {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body h5 {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body h6 {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(255, 255, 255, 0.1);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(222, 226, 230);
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(52, 58, 64);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(222, 226, 230);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(241, 243, 245);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(222, 226, 230);
  cursor: pointer;
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(222, 226, 230);
  stroke: rgb(222, 226, 230);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(173, 181, 189);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(173, 181, 189);
  border-right-color: rgb(173, 181, 189);
  border-top-color: rgb(173, 181, 189);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(173, 181, 189);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(173, 181, 189);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(222, 226, 230);
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(52, 58, 64);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(241, 243, 245);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(222, 226, 230);
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(61, 116, 255, 0.1);
  border-bottom-color: rgba(61, 116, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(61, 116, 255, 0.15);
  border-right-color: rgba(61, 116, 255, 0.15);
  border-top-color: rgba(61, 116, 255, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(42, 102, 255);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 223 !important;
  --accent-l: 62% !important;
  --accent-s: 100% !important;
  --alpha-100: 0.1 !important;
  --alpha-200: 0.2 !important;
  --alpha-500: 0.5 !important;
  --background-modifier-active-hover: hsla(223, 100%, 62%, 0.15) !important;
  --background-modifier-border: #e5e3dc !important;
  --background-modifier-border-focus: #d8d6ca !important;
  --background-modifier-border-hover: #868e96 !important;
  --background-modifier-border-row: #dfddd3 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.7) !important;
  --background-modifier-error-rgb: 250, 82, 82 !important;
  --background-modifier-form-field: #e5e3dc !important;
  --background-modifier-form-field-hover: #e5e3dc !important;
  --background-modifier-hover: rgba(0, 0, 0, 0.1) !important;
  --background-modifier-success: #40c057 !important;
  --background-primary: #f2f1ed !important;
  --background-primary-alt: #dfddd3 !important;
  --background-primary-low: #f9f8f6 !important;
  --background-secondary: #e5e3dc !important;
  --background-secondary-alt: #d8d6ca !important;
  --bases-cards-background: #f2f1ed !important;
  --bases-cards-border-width: 0.75x !important;
  --bases-cards-cover-background: #dfddd3 !important;
  --bases-cards-font-size: 0.875rem !important;
  --bases-cards-radius: 6px !important;
  --bases-cards-shadow: 0 0 0 1px #e5e3dc !important;
  --bases-cards-shadow-hover: 0 0 0 1px #868e96 !important;
  --bases-embed-border-color: #e5e3dc !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: #343a40 !important;
  --bases-group-heading-property-size: 11px !important;
  --bases-group-heading-value-size: 0.875rem !important;
  --bases-header-border-width: 0 0 0.75x 0 !important;
  --bases-table-border-color: #dfddd3 !important;
  --bases-table-cell-background-active: #f2f1ed !important;
  --bases-table-cell-background-disabled: #dfddd3 !important;
  --bases-table-cell-background-selected: hsla(223, 100%, 62%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #d8d6ca !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
    223,
    100%,
    64.5%
  ) !important;
  --bases-table-column-border-width: 0.75x !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-container-border-width: 0.75x !important;
  --bases-table-font-size: 0.875rem !important;
  --bases-table-group-background: #dfddd3 !important;
  --bases-table-header-background: #f2f1ed !important;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.1) !important;
  --bases-table-header-color: #343a40 !important;
  --bases-table-row-border-width: 0.75x !important;
  --bases-table-summary-background: #f2f1ed !important;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.1) !important;
  --blockquote-border-color: hsl(
    223,
    100%,
    64.5%
  ) !important;
  --blockquote-border-thickness: 1px !important;
  --blur-background: color-mix(in srgb, #f2f1ed 65%, transparent) linear-gradient(#f2f1ed, color-mix(in srgb, #f2f1ed 65%, transparent)) !important;
  --bodyFont: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-background: rgba(0, 0, 0, 0.1) !important;
  --bold-weight: 600 !important;
  --border-width: 0.75x !important;
  --button-radius: 6px !important;
  --callout-border-opacity: 0.2;
  --callout-bug: 250, 82, 82;
  --callout-default: 0, 0, 0;
  --callout-error: 250, 82, 82;
  --callout-example: 121, 80, 242;
  --callout-fail: 250, 82, 82;
  --callout-important: 40, 173, 202;
  --callout-info: 3, 105, 224;
  --callout-padding: 8px 20px 8px
    20px;
  --callout-question: 245, 162, 0;
  --callout-radius: 6px;
  --callout-summary: 0, 0, 0;
  --callout-tip: 40, 173, 202;
  --callout-title-padding: 0px;
  --callout-title-size: 16px;
  --callout-todo: 3, 105, 224;
  --callout-warning: 253, 126, 20;
  --canvas-background: #f2f1ed !important;
  --canvas-card-label-color: #495057 !important;
  --canvas-color-1: 250, 82, 82 !important;
  --canvas-color-2: 253, 126, 20 !important;
  --canvas-color-3: 245, 162, 0 !important;
  --canvas-color-5: 40, 173, 202 !important;
  --canvas-color-6: 121, 80, 242 !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: #adb5bd !important;
  --caret-color: #212529 !important;
  --checkbox-border-color: #495057 !important;
  --checkbox-border-color-hover: #343a40 !important;
  --checkbox-color: hsl(
    223,
    100%,
    64.5%
  ) !important;
  --checkbox-color-hover: hsl(
    223,
    100%,
    67%
  ) !important;
  --checkbox-marker-color: #f2f1ed !important;
  --checkbox-radius: 6px !important;
  --checkbox-size: 17.6px !important;
  --checklist-done-color: #adb5bd !important;
  --clickable-icon-radius: 6px !important;
  --code-background: rgba(0, 0, 0, 0.05) !important;
  --code-border-color: #e5e3dc !important;
  --code-bracket-background: rgba(0, 0, 0, 0.1) !important;
  --code-comment: #adb5bd !important;
  --code-function: #f5a200 !important;
  --code-important: #fd7e14 !important;
  --code-keyword: #3d73ff !important;
  --code-normal: #343a40 !important;
  --code-property: #28adca !important;
  --code-punctuation: #343a40 !important;
  --code-radius: 2px !important;
  --code-size: 0.875rem !important;
  --code-string: #40c057 !important;
  --code-value: #7950f2 !important;
  --codeFont: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #495057 !important;
  --collapse-icon-color-collapsed: hsl(223, 100%, 62%) !important;
  --color-accent: hsl(223, 100%, 62%) !important;
  --color-accent-1: hsl(
    223,
    100%,
    64.5%
  ) !important;
  --color-accent-2: hsl(
    223,
    100%,
    67%
  ) !important;
  --color-accent-hsl: 223, 100%, 62% !important;
  --color-ash-100: #f9f8f6 !important;
  --color-ash-1000: #bebaa7 !important;
  --color-ash-200: #f2f1ed !important;
  --color-ash-300: #eceae5 !important;
  --color-ash-400: #e5e3dc !important;
  --color-ash-500: #dfddd3 !important;
  --color-ash-600: #d8d6ca !important;
  --color-ash-700: #d2cfc1 !important;
  --color-ash-800: #cbc8b9 !important;
  --color-ash-900: #c5c1b0 !important;
  --color-base-05: #fefefe !important;
  --color-base-10: #f8f9fa !important;
  --color-base-100: #0e0e0f !important;
  --color-base-20: #f1f3f5 !important;
  --color-base-25: #dee2e6 !important;
  --color-base-30: #adb5bd !important;
  --color-base-35: #868e96 !important;
  --color-base-40: #495057 !important;
  --color-base-50: #343a40 !important;
  --color-base-60: #212529 !important;
  --color-base-70: #15171a !important;
  --color-blue: #3d73ff !important;
  --color-blue-100: #e7f7ff !important;
  --color-blue-200: #d1e9ff !important;
  --color-blue-300: #b0cdff !important;
  --color-blue-400: #6a94fc !important;
  --color-blue-500: #3d73ff !important;
  --color-blue-600: #3160e1 !important;
  --color-blue-700: #2c54cd !important;
  --color-blue-800: #1e409b !important;
  --color-blue-900: #002c67 !important;
  --color-blue-alpha-100: rgba(61, 174, 255, 0.1) !important;
  --color-blue-alpha-200: rgba(61, 174, 255, 0.2) !important;
  --color-blue-rgb: 3, 105, 224 !important;
  --color-cyan: #28adca !important;
  --color-cyan-alpha-100: rgba(70, 192, 192, 0.1) !important;
  --color-cyan-rgb: 40, 173, 202 !important;
  --color-gray-alpha-100: rgba(0, 0, 0, 0.1) !important;
  --color-gray-alpha-25: rgba(0, 0, 0, 0.03) !important;
  --color-gray-alpha-50: rgba(0, 0, 0, 0.05) !important;
  --color-gray-alpha-75: rgba(0, 0, 0, 0.08) !important;
  --color-green: #40c057 !important;
  --color-green-100: #ebfbee !important;
  --color-green-200: #d3f9d8 !important;
  --color-green-300: #b2f2bb !important;
  --color-green-400: #69db7c !important;
  --color-green-500: #40c057 !important;
  --color-green-600: #2f9e44 !important;
  --color-green-700: #28803a !important;
  --color-green-800: #1c5928 !important;
  --color-green-900: #0e2e15 !important;
  --color-green-alpha-100: rgba(64, 192, 87, 0.1) !important;
  --color-green-alpha-200: rgba(64, 192, 87, 0.2) !important;
  --color-orange: #fd7e14 !important;
  --color-orange-100: #fff4e6 !important;
  --color-orange-200: #ffe8cc !important;
  --color-orange-300: #ffd8a8 !important;
  --color-orange-400: #ffa94d !important;
  --color-orange-500: #fd7e14 !important;
  --color-orange-600: #e8590c !important;
  --color-orange-700: #d9480f !important;
  --color-orange-800: #8f300a !important;
  --color-orange-900: #4f1905 !important;
  --color-orange-rgb: 253, 126, 20 !important;
  --color-pink: #f558ad !important;
  --color-pink-rgb: 245, 88, 173 !important;
  --color-purple: #7950f2 !important;
  --color-purple-100: #f3f0ff !important;
  --color-purple-200: #e5dbff !important;
  --color-purple-300: #d0bfff !important;
  --color-purple-400: #9775fa !important;
  --color-purple-500: #7950f2 !important;
  --color-purple-600: #6741d9 !important;
  --color-purple-700: #5f3dc4 !important;
  --color-purple-800: #482e94 !important;
  --color-purple-900: #2d1d5c !important;
  --color-purple-alpha-100: rgba(121, 80, 242, 0.1) !important;
  --color-purple-alpha-200: rgba(121, 80, 242, 0.2) !important;
  --color-purple-rgb: 121, 80, 242 !important;
  --color-red-100: #fff5f5 !important;
  --color-red-200: #ffe3e3 !important;
  --color-red-300: #ffc9c9 !important;
  --color-red-400: #ff8787 !important;
  --color-red-500: #fa5252 !important;
  --color-red-600: #e03131 !important;
  --color-red-700: #c92a2a !important;
  --color-red-800: #9b0404 !important;
  --color-red-900: #700707 !important;
  --color-red-alpha-100: rgba(250, 82, 82, 0.1) !important;
  --color-red-alpha-200: rgba(250, 82, 82, 0.2) !important;
  --color-red-rgb: 250, 82, 82 !important;
  --color-yellow: #f5a200 !important;
  --color-yellow-alpha-100: rgba(255, 232, 23, 0.2) !important;
  --color-yellow-alpha-200: rgba(255, 232, 23, 0.3) !important;
  --color-yellow-alpha-50: rgba(255, 232, 23, 0.05) !important;
  --color-yellow-rgb: 245, 162, 0 !important;
  --cursor-action: pointer !important;
  --dark: #212529 !important;
  --darkgray: #212529 !important;
  --default-font: "Inter", sans-serif !important;
  --divider-color: #e5e3dc !important;
  --divider-color-hover: hsl(
    223,
    100%,
    64.5%
  ) !important;
  --divider-width-hover: 2px !important;
  --dropdown-background: #e5e3dc !important;
  --dropdown-background-hover: #dfddd3 !important;
  --embed-block-shadow-hover: 0 0 0 1px #e5e3dc,
    inset 0 0 0 1px #e5e3dc !important;
  --embed-border-left: 2px solid hsl(
    223,
    100%,
    64.5%
  ) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid hsl(
    223,
    100%,
    64.5%
  ) !important;
  --file-header-background: #f2f1ed !important;
  --file-header-background-focused: #f2f1ed !important;
  --file-header-border: 0.75x solid transparent !important;
  --file-header-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-weight: 500 !important;
  --file-line-width: 640px !important;
  --file-margins: 32px !important;
  --flair-background: #e5e3dc !important;
  --flair-color: #212529 !important;
  --font-interface: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-small: 0.933rem !important;
  --font-smaller: 0.875rem !important;
  --font-smallest: 0.8rem !important;
  --font-ui-medium: 16px !important;
  --font-ui-smaller: 11px !important;
  --footnote-divider-color: #e5e3dc !important;
  --footnote-divider-width: 0.75x !important;
  --footnote-id-color: #343a40 !important;
  --footnote-id-color-no-occurrences: #495057 !important;
  --footnote-input-background-active: rgba(0, 0, 0, 0.1) !important;
  --footnote-radius: 2px !important;
  --footnote-size: 0.875rem !important;
  --graph-line: #868e96 !important;
  --graph-node: #343a40 !important;
  --graph-node-attachment: #f5a200 !important;
  --graph-node-focused: hsl(223, 100%, 62%) !important;
  --graph-node-tag: #40c057 !important;
  --graph-node-unresolved: #495057 !important;
  --graph-text: #212529 !important;
  --gray: #343a40 !important;
  --h1-size: 1.375rem !important;
  --h1-weight: 600 !important;
  --h2-size: 1.25rem !important;
  --h2-weight: 600 !important;
  --h3-size: 1.125rem !important;
  --h3-weight: 600 !important;
  --h4-size: 1rem !important;
  --h4-weight: 600 !important;
  --h5-size: 0.875rem !important;
  --h5-style: small-caps !important;
  --h5-weight: 600 !important;
  --h6-size: 0.813rem !important;
  --h6-style: small-caps !important;
  --header-height: 42px !important;
  --headerFont: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #495057 !important;
  --highlight: #dfddd3 !important;
  --hr-color: #e5e3dc !important;
  --hr-thickness: 1px !important;
  --icon-color: #343a40 !important;
  --icon-color-active: hsl(223, 100%, 62%) !important;
  --icon-color-focused: #212529 !important;
  --icon-color-hover: #343a40 !important;
  --icon-opacity: 0.6 !important;
  --indentation-guide-color: rgba(0, 0, 0, 0.1) !important;
  --indentation-guide-width-active: 0.75x !important;
  --inline-title-size: 1.375rem !important;
  --inline-title-weight: 600 !important;
  --input-border-width: 0px !important;
  --input-date-separator: #495057 !important;
  --input-height: 32px !important;
  --input-placeholder-color: #495057 !important;
  --input-radius: 6px !important;
  --input-shadow: transparent !important;
  --input-shadow-hover: transparent !important;
  --interactive-accent: hsl(
    223,
    100%,
    64.5%
  ) !important;
  --interactive-accent-hover: hsl(
    223,
    100%,
    67%
  ) !important;
  --interactive-accent-hsl: 223, 100%, 62% !important;
  --interactive-hover: #dfddd3 !important;
  --interactive-normal: #e5e3dc !important;
  --light: #f2f1ed !important;
  --lightgray: #e5e3dc !important;
  --line-height-large: 1.6 !important;
  --link-color: hsl(223, 100%, 62%) !important;
  --link-color-hover: hsl(
    223,
    100%,
    67%
  ) !important;
  --link-decoration: none !important;
  --link-external-color: hsl(223, 100%, 62%) !important;
  --link-external-color-hover: hsl(
    223,
    100%,
    67%
  ) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: hsl(223, 100%, 62%) !important;
  --link-unresolved-decoration-color: hsla(223, 100%, 62%, 0.3) !important;
  --link-unresolved-opacity: 0.6 !important;
  --list-bullet-size: 0.2rem !important;
  --list-indent: 1rem !important;
  --list-marker-color: #868e96 !important;
  --list-marker-color-collapsed: hsl(223, 100%, 62%) !important;
  --list-marker-color-hover: #343a40 !important;
  --list-spacing: 0.14rem !important;
  --menu-background: #e5e3dc !important;
  --menu-border-color: #868e96 !important;
  --menu-border-width: 0.75x !important;
  --menu-radius: 6px !important;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --metadata-border-color: #e5e3dc !important;
  --metadata-divider-color: #e5e3dc !important;
  --metadata-input-background-active: rgba(0, 0, 0, 0.1) !important;
  --metadata-input-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-font-size: 0.875rem !important;
  --metadata-input-text-color: #212529 !important;
  --metadata-label-background-active: rgba(0, 0, 0, 0.1) !important;
  --metadata-label-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font-size: 0.875rem !important;
  --metadata-label-text-color: #343a40 !important;
  --metadata-label-text-color-hover: #343a40 !important;
  --metadata-property-background-active: rgba(0, 0, 0, 0.1) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #d8d6ca !important;
  --metadata-property-box-shadow-hover: 0 0 0 0.75x #868e96 !important;
  --modal-background: #f2f1ed !important;
  --modal-border-color: #495057 !important;
  --modal-border-width: 0.75x !important;
  --nav-collapse-icon-color: #495057 !important;
  --nav-collapse-icon-color-collapsed: #495057 !important;
  --nav-heading-color: #212529 !important;
  --nav-heading-color-collapsed: #495057 !important;
  --nav-heading-color-collapsed-hover: #343a40 !important;
  --nav-heading-color-hover: #212529 !important;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.1) !important;
  --nav-item-background-active: rgba(0, 0, 0, 0.1) !important;
  --nav-item-background-hover: rgba(0, 0, 0, 0.1) !important;
  --nav-item-background-selected: hsla(223, 100%, 62%, 0.2) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 8px !important;
  --nav-item-color: #343a40 !important;
  --nav-item-color-active: #212529 !important;
  --nav-item-color-highlighted: hsl(
    223,
    100%,
    67%
  ) !important;
  --nav-item-color-hover: #212529 !important;
  --nav-item-color-selected: #212529 !important;
  --nav-item-padding: 4px 8px !important;
  --nav-item-parent-padding: 4px 8px !important;
  --nav-item-radius: 2px !important;
  --nav-item-weight-active: 600 !important;
  --nav-item-weight-hover: 600 !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: #495057 !important;
  --nav-tag-color-active: #343a40 !important;
  --nav-tag-color-hover: #343a40 !important;
  --nav-tag-radius: 2px !important;
  --pdf-background: #f2f1ed !important;
  --pdf-page-background: #f2f1ed !important;
  --pdf-sidebar-background: #f2f1ed !important;
  --pill-border-color: #e5e3dc !important;
  --pill-border-color-hover: #868e96 !important;
  --pill-border-width: 0.75x !important;
  --pill-color: #343a40 !important;
  --pill-color-hover: #212529 !important;
  --pill-color-remove: #495057 !important;
  --pill-color-remove-hover: hsl(223, 100%, 62%) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: #f2f1ed !important;
  --prompt-border-color: #495057 !important;
  --prompt-border-width: 0.75x !important;
  --prompt-max-width: 62vw !important;
  --radius-full: 9999px !important;
  --radius-m: 6px !important;
  --radius-s: 2px !important;
  --raised-background: color-mix(in srgb, #f2f1ed 65%, transparent) linear-gradient(#f2f1ed, color-mix(in srgb, #f2f1ed 65%, transparent)) !important;
  --ribbon-background: #f2f1ed !important;
  --ribbon-background-collapsed: #f2f1ed !important;
  --ribbon-width: 48px !important;
  --scale-dimension-font-size-10: 10px !important;
  --scale-dimension-font-size-100: 14px !important;
  --scale-dimension-font-size-1000: 48px !important;
  --scale-dimension-font-size-1100: 54px !important;
  --scale-dimension-font-size-1200: 60px !important;
  --scale-dimension-font-size-1300: 72px !important;
  --scale-dimension-font-size-200: 16px !important;
  --scale-dimension-font-size-25: 11px !important;
  --scale-dimension-font-size-300: 18px !important;
  --scale-dimension-font-size-400: 20px !important;
  --scale-dimension-font-size-50: 12px !important;
  --scale-dimension-font-size-500: 24px !important;
  --scale-dimension-font-size-600: 28px !important;
  --scale-dimension-font-size-700: 32px !important;
  --scale-dimension-font-size-75: 13px !important;
  --scale-dimension-font-size-800: 36px !important;
  --scale-dimension-font-size-900: 42px !important;
  --scale-dimension-size-0: 0px !important;
  --scale-dimension-size-10: 1px !important;
  --scale-dimension-size-100: 8px !important;
  --scale-dimension-size-1000: 80px !important;
  --scale-dimension-size-125: 10px !important;
  --scale-dimension-size-150: 12px !important;
  --scale-dimension-size-1500: 100px !important;
  --scale-dimension-size-175: 14px !important;
  --scale-dimension-size-200: 16px !important;
  --scale-dimension-size-2000: 160px !important;
  --scale-dimension-size-225: 18px !important;
  --scale-dimension-size-25: 2px !important;
  --scale-dimension-size-250: 20px !important;
  --scale-dimension-size-300: 24px !important;
  --scale-dimension-size-3000: 240px !important;
  --scale-dimension-size-400: 32px !important;
  --scale-dimension-size-50: 4px !important;
  --scale-dimension-size-500: 40px !important;
  --scale-dimension-size-600: 48px !important;
  --scale-dimension-size-700: 56px !important;
  --scale-dimension-size-75: 6px !important;
  --scale-dimension-size-800: 64px !important;
  --scale-dimension-size-900: 72px !important;
  --scale-dimension-size-max: 9999px !important;
  --scale-radius-1: 2px !important;
  --scale-radius-2: 4px !important;
  --scale-radius-3: 6px !important;
  --scale-radius-4: 12px !important;
  --scale-radius-5: 16px !important;
  --scale-radius-6: 24px !important;
  --scale-radius-9999: 24px !important;
  --search-clear-button-color: #343a40 !important;
  --search-icon-color: #343a40 !important;
  --search-result-background: #f2f1ed !important;
  --secondary: hsl(223, 100%, 62%) !important;
  --setting-group-heading-color: #212529 !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: #dfddd3 !important;
  --setting-items-border-color: #e5e3dc !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07) !important;
  --slider-thumb-border-color: #868e96 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #e5e3dc !important;
  --static-alpha-balck-100: rgba(0, 0, 0, 0.06) !important;
  --static-alpha-balck-150: rgba(0, 0, 0, 0.1) !important;
  --static-alpha-balck-200: rgba(0, 0, 0, 0.2) !important;
  --static-alpha-balck-500: rgba(0, 0, 0, 0.5) !important;
  --static-alpha-balck-700: rgba(0, 0, 0, 0.7) !important;
  --static-alpha-white-200: rgba(255, 255, 255, 0.2) !important;
  --static-alpha-white-500: rgba(255, 255, 255, 0.5) !important;
  --static-black: #000000 !important;
  --static-blue: #3d73ff !important;
  --static-large: 162% !important;
  --static-medium: 150% !important;
  --static-small: 132% !important;
  --static-white: #ffffff !important;
  --status-bar-background: #e5e3dc !important;
  --status-bar-border-color: #e5e3dc !important;
  --status-bar-font-size: 11px !important;
  --status-bar-radius: 6px !important;
  --status-bar-text-color: #343a40 !important;
  --suggestion-background: #f2f1ed !important;
  --swatch-height: 24px !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-2: #fd7e14 !important;
  --sync-avatar-color-3: #f5a200 !important;
  --sync-avatar-color-4: #40c057 !important;
  --sync-avatar-color-5: #28adca !important;
  --sync-avatar-color-6: #3d73ff !important;
  --sync-avatar-color-7: #7950f2 !important;
  --sync-avatar-color-8: #f558ad !important;
  --tab-background-active: #f2f1ed !important;
  --tab-container-background: #e5e3dc !important;
  --tab-divider-color: #868e96 !important;
  --tab-outline-color: #e5e3dc !important;
  --tab-radius: 2px !important;
  --tab-stacked-header-width: 42px !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: #e5e3dc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e5e3dc, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(223, 100%, 62%) !important;
  --tab-text-color: #495057 !important;
  --tab-text-color-active: #343a40 !important;
  --tab-text-color-focused: #343a40 !important;
  --tab-text-color-focused-active: #343a40 !important;
  --tab-text-color-focused-active-current: #212529 !important;
  --tab-text-color-focused-highlighted: hsl(223, 100%, 62%) !important;
  --table-add-button-border-color: #e5e3dc !important;
  --table-border-color: #dfddd3 !important;
  --table-drag-handle-background-active: hsl(
    223,
    100%,
    64.5%
  ) !important;
  --table-drag-handle-color: #495057 !important;
  --table-header-background: #e5e3dc !important;
  --table-header-border-color: #dfddd3 !important;
  --table-header-color: #212529 !important;
  --table-header-size: 13px !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(223, 100%, 62%, 0.1) !important;
  --table-selection-border-color: hsl(
    223,
    100%,
    64.5%
  ) !important;
  --table-white-space: normal !important;
  --tag-background: hsla(223, 100%, 62%, 0.1) !important;
  --tag-background-hover: hsla(223, 100%, 62%, 0.2) !important;
  --tag-border-color: hsla(223, 100%, 62%, 0.15) !important;
  --tag-border-color-hover: hsla(223, 100%, 62%, 0.15) !important;
  --tag-color: hsl(223, 100%, 62%) !important;
  --tag-color-hover: hsl(223, 100%, 62%) !important;
  --tag-padding-x: 0.65rem !important;
  --tag-padding-y: 0.25rem !important;
  --tag-radius: 6px !important;
  --tag-size: 0.875rem !important;
  --tertiary: hsl(
    223,
    100%,
    67%
  ) !important;
  --text-accent: hsl(223, 100%, 62%) !important;
  --text-accent-hover: hsl(
    223,
    100%,
    67%
  ) !important;
  --text-fade: #adb5bd !important;
  --text-faint: #495057 !important;
  --text-highlight-bg: #dfddd3 !important;
  --text-highlight-bg-active: rgba(255, 232, 23, 0.2) !important;
  --text-muted: #343a40 !important;
  --text-normal: #212529 !important;
  --text-selection: hsla(223, 100%, 62%, 0.25) !important;
  --text-success: #40c057 !important;
  --text-warning: #fd7e14 !important;
  --textHighlight: #dfddd3 !important;
  --titleFont: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #e5e3dc !important;
  --titlebar-background-focused: #e5e3dc !important;
  --titlebar-border-color: #e5e3dc !important;
  --titlebar-text-color: #343a40 !important;
  --titlebar-text-color-focused: #212529 !important;
  --traffic-lights-offset-x: 42px !important;
  --traffic-lights-offset-y: 42px !important;
  --vault-name-color: #212529 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #212529 !important;
  --vault-profile-color-hover: #212529 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(229, 227, 220);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(242, 241, 237);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(223, 221, 211);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(242, 241, 237);
  border-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(229, 227, 220);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(61, 116, 255, 0.1);
  border-radius: 6px;
  color: rgb(61, 116, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 241, 237);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 227, 220);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(229, 227, 220);
  border-left-color: rgb(229, 227, 220);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(242, 241, 237);
  color: rgb(33, 37, 41);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(223, 221, 211);
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body del {
  color: rgb(73, 80, 87);
  outline: rgb(73, 80, 87) none 0px;
  text-decoration-color: rgb(73, 80, 87);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(33, 37, 41);
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(73, 80, 87);
  border-radius: 6px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(74, 125, 255);
  border-color: rgb(74, 125, 255);
}

html[saved-theme="light"] body p {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(52, 58, 64) none 0px;
  text-decoration-color: rgb(52, 58, 64);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(61, 116, 255);
  outline: rgb(61, 116, 255) none 0px;
  text-decoration-color: rgb(61, 116, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(61, 116, 255);
  outline: rgb(61, 116, 255) none 0px;
  text-decoration-color: rgb(61, 116, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(61, 116, 255);
  outline: rgb(61, 116, 255) none 0px;
  text-decoration: rgba(61, 116, 255, 0.3);
  text-decoration-color: rgba(61, 116, 255, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body dt {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ol > li {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ul > li {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(61, 116, 255);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body table {
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
  width: 602px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(229, 227, 220);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 221, 211);
  border-left-color: rgb(223, 221, 211);
  border-right-color: rgb(223, 221, 211);
  border-top-color: rgb(223, 221, 211);
  color: rgb(33, 37, 41);
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(223, 221, 211);
  border-left-color: rgb(223, 221, 211);
  border-right-color: rgb(223, 221, 211);
  border-top-color: rgb(223, 221, 211);
  color: rgb(33, 37, 41);
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(229, 227, 220);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(245, 162, 0);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(245, 162, 0);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(245, 162, 0);
  border-left-color: rgb(245, 162, 0);
  border-right-color: rgb(245, 162, 0);
  border-top-color: rgb(245, 162, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-radius: 6px;
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-radius: 6px;
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(223, 221, 211);
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(33, 37, 41);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(74, 125, 255);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(73, 80, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(73, 80, 87);
  border-right-color: rgb(73, 80, 87);
  border-top-color: rgb(73, 80, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-left: -26.4px;
  width: 17.5938px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
  font-weight: 400;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 0, 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 121, 80, 242;
  background-color: rgba(121, 80, 242, 0.1);
  border-bottom-color: rgba(121, 80, 242, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(121, 80, 242, 0.2);
  border-right-color: rgba(121, 80, 242, 0.2);
  border-top-color: rgba(121, 80, 242, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 3, 105, 224;
  background-color: rgba(3, 105, 224, 0.1);
  border-bottom-color: rgba(3, 105, 224, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(3, 105, 224, 0.2);
  border-right-color: rgba(3, 105, 224, 0.2);
  border-top-color: rgba(3, 105, 224, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 0, 0, 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 245, 162, 0;
  background-color: rgba(245, 162, 0, 0.1);
  border-bottom-color: rgba(245, 162, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(245, 162, 0, 0.2);
  border-right-color: rgba(245, 162, 0, 0.2);
  border-top-color: rgba(245, 162, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgba(158, 158, 158, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(158, 158, 158, 0.2);
  border-right-color: rgba(158, 158, 158, 0.2);
  border-top-color: rgba(158, 158, 158, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-color: rgba(8, 185, 78, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(8, 185, 78, 0.2);
  border-right-color: rgba(8, 185, 78, 0.2);
  border-top-color: rgba(8, 185, 78, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 40, 173, 202;
  background-color: rgba(40, 173, 202, 0.1);
  border-bottom-color: rgba(40, 173, 202, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(40, 173, 202, 0.2);
  border-right-color: rgba(40, 173, 202, 0.2);
  border-top-color: rgba(40, 173, 202, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 3, 105, 224;
  background-color: rgba(3, 105, 224, 0.1);
  border-bottom-color: rgba(3, 105, 224, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(3, 105, 224, 0.2);
  border-right-color: rgba(3, 105, 224, 0.2);
  border-top-color: rgba(3, 105, 224, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 253, 126, 20;
  background-color: rgba(253, 126, 20, 0.1);
  border-bottom-color: rgba(253, 126, 20, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(253, 126, 20, 0.2);
  border-right-color: rgba(253, 126, 20, 0.2);
  border-top-color: rgba(253, 126, 20, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
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
  background-color: rgb(229, 227, 220);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(229, 227, 220);
  border-left-width: 0px;
  border-right-color: rgb(229, 227, 220);
  border-right-width: 0px;
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: rgb(33, 37, 41);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 241, 237);
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-left-width: 0px;
  border-right-color: rgb(33, 37, 41);
  border-right-width: 0px;
  border-top-color: rgb(33, 37, 41);
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-left-width: 0px;
  border-right-color: rgb(33, 37, 41);
  border-right-width: 0px;
  border-top-color: rgb(33, 37, 41);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(61, 116, 255, 0.1);
  border-bottom-color: rgba(61, 116, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(61, 116, 255, 0.15);
  border-right-color: rgba(61, 116, 255, 0.15);
  border-top-color: rgba(61, 116, 255, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(61, 116, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body h2 {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body h3 {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body h4 {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body h5 {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body h6 {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(229, 227, 220);
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(0, 0, 0, 0.1);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 600;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(52, 58, 64);
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(229, 227, 220);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(52, 58, 64);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(33, 37, 41);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(52, 58, 64);
  cursor: pointer;
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(52, 58, 64);
  stroke: rgb(52, 58, 64);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(73, 80, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(73, 80, 87);
  border-right-color: rgb(73, 80, 87);
  border-top-color: rgb(73, 80, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(73, 80, 87);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(73, 80, 87);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(229, 227, 220);
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(52, 58, 64);
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(229, 227, 220);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(33, 37, 41);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(52, 58, 64);
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body sub {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body summary {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body sup {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(61, 116, 255, 0.1);
  border-bottom-color: rgba(61, 116, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(61, 116, 255, 0.15);
  border-right-color: rgba(61, 116, 255, 0.15);
  border-top-color: rgba(61, 116, 255, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(61, 116, 255);
}`,
  },
};
