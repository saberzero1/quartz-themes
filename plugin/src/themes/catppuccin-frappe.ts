import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "catppuccin.frappe",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["nunito-sans", "vollkorn"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: rgb(139, 108, 239) !important;
  --background-modifier-border: rgb(65, 69, 89) !important;
  --background-modifier-border-focus: rgb(115, 121, 148) !important;
  --background-modifier-border-hover: rgb(98, 104, 128) !important;
  --background-modifier-box-shadow: rgb(35, 38, 52, 30%) !important;
  --background-modifier-cover: rgb(35, 38, 52, 90%) !important;
  --background-modifier-error: rgb(231, 130, 132, 90%) !important;
  --background-modifier-error-hover: rgb(231, 130, 132, 100%) !important;
  --background-modifier-error-rgb: 231, 130, 132 !important;
  --background-modifier-form-field: rgb(35, 38, 52, 30%) !important;
  --background-modifier-form-field-highlighted: rgb(35, 38, 52, 22%) !important;
  --background-modifier-form-field-hover: rgb(35, 38, 52, 30%) !important;
  --background-modifier-hover: rgb(198, 208, 245, 7.5%) !important;
  --background-modifier-message: rgb(0, 0, 0, 90%) !important;
  --background-modifier-success: rgb(166, 209, 137, 90%) !important;
  --background-modifier-success-rgb: 166, 209, 137 !important;
  --background-primary: rgb(48, 52, 70) !important;
  --background-primary-alt: rgb(41, 44, 60) !important;
  --background-primary-rgb: 48, 52, 70 !important;
  --background-secondary: rgb(41, 44, 60) !important;
  --background-secondary-alt: rgb(35, 38, 52) !important;
  --bases-cards-background: rgb(48, 52, 70) !important;
  --bases-cards-cover-background: rgb(41, 44, 60) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(65, 69, 89) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(98, 104, 128) !important;
  --bases-embed-border-color: rgb(65, 69, 89) !important;
  --bases-group-heading-property-color: rgb(165, 173, 206) !important;
  --bases-table-border-color: rgb(65, 69, 89) !important;
  --bases-table-cell-background-active: rgb(48, 52, 70) !important;
  --bases-table-cell-background-disabled: rgb(41, 44, 60) !important;
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(115, 121, 148) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(186, 187, 241) !important;
  --bases-table-group-background: rgb(41, 44, 60) !important;
  --bases-table-header-background: rgb(48, 52, 70) !important;
  --bases-table-header-background-hover: rgb(198, 208, 245, 7.5%) !important;
  --bases-table-header-color: rgb(165, 173, 206) !important;
  --bases-table-summary-background: rgb(48, 52, 70) !important;
  --bases-table-summary-background-hover: rgb(198, 208, 245, 7.5%) !important;
  --blockquote-border-color: rgb(186, 187, 241) !important;
  --blur-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent)) !important;
  --bodyFont: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --callout-border-opacity: 0.2;
  --callout-border-width: 0.25px;
  --callout-bug: 231, 130, 132;
  --callout-default: 140, 170, 238;
  --callout-error: 231, 130, 132;
  --callout-example: 202, 158, 230;
  --callout-fail: 231, 130, 132;
  --callout-important: 133, 193, 220;
  --callout-info: 140, 170, 238;
  --callout-padding: 12px 12px
    12px 24px;
  --callout-question: 229, 200, 144;
  --callout-success: 166, 209, 137;
  --callout-summary: 133, 193, 220;
  --callout-tip: 133, 193, 220;
  --callout-todo: 140, 170, 238;
  --callout-warning: 239, 159, 118;
  --canvas-background: rgb(48, 52, 70) !important;
  --canvas-card-label-color: rgb(81, 87, 109) !important;
  --canvas-color-1: 231, 130, 132 !important;
  --canvas-color-2: 239, 159, 118 !important;
  --canvas-color-3: 229, 200, 144 !important;
  --canvas-color-4: 166, 209, 137 !important;
  --canvas-color-5: 133, 193, 220 !important;
  --canvas-color-6: 202, 158, 230 !important;
  --canvas-dot-pattern: rgb(81, 87, 109) !important;
  --caret-color: rgb(198, 208, 245) !important;
  --checkbox-border-color: rgb(81, 87, 109) !important;
  --checkbox-border-color-hover: rgb(165, 173, 206) !important;
  --checkbox-color: rgb(186, 187, 241) !important;
  --checkbox-color-hover: rgb(186, 187, 241) !important;
  --checkbox-marker-color: rgb(48, 52, 70) !important;
  --checklist-done-color: rgb(166, 209, 137) !important;
  --code-background: rgb(41, 44, 60) !important;
  --code-border-color: rgb(65, 69, 89) !important;
  --code-bracket-background: rgb(198, 208, 245, 7.5%) !important;
  --code-comment: rgb(81, 87, 109) !important;
  --code-function: rgb(229, 200, 144) !important;
  --code-important: rgb(239, 159, 118) !important;
  --code-keyword: rgb(244, 184, 228) !important;
  --code-normal: rgb(165, 173, 206) !important;
  --code-operator: rgb(231, 130, 132) !important;
  --code-property: rgb(153, 209, 219) !important;
  --code-punctuation: rgb(165, 173, 206) !important;
  --code-string: rgb(166, 209, 137) !important;
  --code-tag: rgb(231, 130, 132) !important;
  --code-value: rgb(186, 187, 241) !important;
  --codeFont: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(81, 87, 109) !important;
  --collapse-icon-color-collapsed: rgb(165, 173, 206) !important;
  --color-accent: rgb(186, 187, 241) !important;
  --color-accent-1: rgb(186, 187, 241) !important;
  --color-accent-2: rgb(186, 187, 241, 90%) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --color-base-00: rgb(35, 38, 52) !important;
  --color-base-10: rgb(41, 44, 60) !important;
  --color-base-100: rgb(198, 208, 245) !important;
  --color-base-20: rgb(48, 52, 70) !important;
  --color-base-25: rgb(65, 69, 89) !important;
  --color-base-30: rgb(81, 87, 109) !important;
  --color-base-35: rgb(98, 104, 128) !important;
  --color-base-40: rgb(115, 121, 148) !important;
  --color-base-50: rgb(131, 139, 167) !important;
  --color-base-60: rgb(148, 156, 187) !important;
  --color-base-70: rgb(165, 173, 206) !important;
  --color-blue: rgb(140, 170, 238) !important;
  --color-blue-rgb: 140, 170, 238 !important;
  --color-cyan: rgb(153, 209, 219) !important;
  --color-cyan-rgb: 133, 193, 220 !important;
  --color-green: rgb(166, 209, 137) !important;
  --color-green-rgb: 166, 209, 137 !important;
  --color-orange: rgb(239, 159, 118) !important;
  --color-orange-rgb: 239, 159, 118 !important;
  --color-pink: rgb(244, 184, 228) !important;
  --color-pink-rgb: 244, 184, 228 !important;
  --color-purple: rgb(186, 187, 241) !important;
  --color-purple-rgb: 202, 158, 230 !important;
  --color-red: rgb(231, 130, 132) !important;
  --color-red-rgb: 231, 130, 132 !important;
  --color-yellow: rgb(229, 200, 144) !important;
  --color-yellow-rgb: 229, 200, 144 !important;
  --ctp-accent: 186, 187, 241 !important;
  --ctp-base: 48, 52, 70 !important;
  --ctp-blockquote: 242, 213, 207 !important;
  --ctp-blue: 140, 170, 238 !important;
  --ctp-bold: 133, 193, 220 !important;
  --ctp-crust: 35, 38, 52 !important;
  --ctp-flamingo: 238, 190, 190 !important;
  --ctp-green: 166, 209, 137 !important;
  --ctp-h1: 186, 187, 241 !important;
  --ctp-h2: 186, 187, 241 !important;
  --ctp-h3: 186, 187, 241 !important;
  --ctp-h4: 186, 187, 241 !important;
  --ctp-h5: 186, 187, 241 !important;
  --ctp-h6: 186, 187, 241 !important;
  --ctp-italic: 166, 209, 137 !important;
  --ctp-lavender: 186, 187, 241 !important;
  --ctp-mantle: 41, 44, 60 !important;
  --ctp-maroon: 234, 153, 156 !important;
  --ctp-mauve: 202, 158, 230 !important;
  --ctp-overlay0: 115, 121, 148 !important;
  --ctp-overlay1: 131, 139, 167 !important;
  --ctp-overlay2: 148, 156, 187 !important;
  --ctp-page-title: 198, 208, 245 !important;
  --ctp-peach: 239, 159, 118 !important;
  --ctp-pink: 244, 184, 228 !important;
  --ctp-red: 231, 130, 132 !important;
  --ctp-rosewater: 242, 213, 207 !important;
  --ctp-sapphire: 133, 193, 220 !important;
  --ctp-sky: 153, 209, 219 !important;
  --ctp-strikethrough: 234, 153, 156 !important;
  --ctp-subtext0: 165, 173, 206 !important;
  --ctp-subtext1: 181, 191, 226 !important;
  --ctp-surface0: 65, 69, 89 !important;
  --ctp-surface1: 81, 87, 109 !important;
  --ctp-surface2: 98, 104, 128 !important;
  --ctp-tag-pill-color: 186, 187, 241 !important;
  --ctp-teal: 129, 200, 190 !important;
  --ctp-text: 198, 208, 245 !important;
  --ctp-yellow: 229, 200, 144 !important;
  --dark: rgb(198, 208, 245) !important;
  --darkgray: rgb(198, 208, 245) !important;
  --divider-color: rgb(65, 69, 89) !important;
  --divider-color-hover: rgb(140, 170, 238) !important;
  --divider-width-hover: 2px !important;
  --drag-ghost-background: rgb(0, 0, 0, 85%) !important;
  --drag-ghost-text-color: rgb(198, 208, 245) !important;
  --dropdown-background: rgb(65, 69, 89) !important;
  --dropdown-background-hover: rgb(81, 87, 109) !important;
  --embed-block-shadow-hover: 0 0 0 1px
    rgb(65, 69, 89),
    inset 0 0 0 1px rgb(65, 69, 89) !important;
  --embed-border-left: 2px solid rgb(186, 187, 241) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(186, 187, 241) !important;
  --file-header-background: rgb(48, 52, 70) !important;
  --file-header-background-focused: rgb(48, 52, 70) !important;
  --file-header-font: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 32px !important;
  --flair-background: rgb(65, 69, 89) !important;
  --flair-color: rgb(198, 208, 245) !important;
  --font-interface: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif !important;
  --font-mermaid: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, Arial' !important;
  --font-text: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif !important;
  --font-ui-medium: 16px !important;
  --footnote-divider-color: rgb(65, 69, 89) !important;
  --footnote-id-color: rgb(165, 173, 206) !important;
  --footnote-id-color-no-occurrences: rgb(81, 87, 109) !important;
  --footnote-input-background-active: rgb(198, 208, 245, 7.5%) !important;
  --graph-line: rgb(98, 104, 128) !important;
  --graph-node: rgb(165, 173, 206) !important;
  --graph-node-attachment: rgb(229, 200, 144) !important;
  --graph-node-focused: rgb(186, 187, 241) !important;
  --graph-node-tag: rgb(166, 209, 137) !important;
  --graph-node-unresolved: rgb(81, 87, 109) !important;
  --graph-text: rgb(198, 208, 245) !important;
  --gray: rgb(165, 173, 206) !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 2em !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.12em !important;
  --headerFont: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(81, 87, 109) !important;
  --hex-blue: #8caaee !important;
  --hex-green: #a6d189 !important;
  --hex-lavender: #babbf1 !important;
  --hex-mauve: #ca9ee6 !important;
  --hex-peach: #ef9f76 !important;
  --hex-pink: #f4b8e4 !important;
  --hex-red: #e78284 !important;
  --hex-sapphire: #85c1dc !important;
  --hex-sky: #99d1db !important;
  --hex-teal: #81c8be !important;
  --hex-yellow: #e5c890 !important;
  --highlight: rgb(242, 213, 207, 100%) !important;
  --hr-color: rgb(140, 170, 238) !important;
  --icon-color: rgb(165, 173, 206) !important;
  --icon-color-active: rgb(186, 187, 241) !important;
  --icon-color-focused: rgb(198, 208, 245) !important;
  --icon-color-hover: rgb(41, 44, 60) !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: rgb(81, 87, 109) !important;
  --indentation-guide-color-active: rgb(133, 193, 220, 70%) !important;
  --indentation-guide-width: 2px !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: rgb(81, 87, 109) !important;
  --input-placeholder-color: rgb(81, 87, 109) !important;
  --interactive-accent: rgb(186, 187, 241) !important;
  --interactive-accent-hover: rgb(186, 187, 241) !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-accent-rgb: 186, 187, 241 !important;
  --interactive-hover: rgb(81, 87, 109) !important;
  --interactive-normal: rgb(65, 69, 89) !important;
  --interactive-success: rgb(166, 209, 137) !important;
  --light: rgb(48, 52, 70) !important;
  --lightgray: rgb(41, 44, 60) !important;
  --line-height-tight: 1.25 !important;
  --link-color: rgb(140, 170, 238) !important;
  --link-color-hover: rgb(140, 170, 238) !important;
  --link-decoration: none !important;
  --link-decoration-thickness: 2px !important;
  --link-external-color: rgb(129, 200, 190) !important;
  --link-external-color-hover: rgb(129, 200, 190) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(234, 153, 156) !important;
  --link-unresolved-decoration-color: rgb(231, 130, 132) !important;
  --link-unresolved-opacity: 1 !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(133, 193, 220) !important;
  --list-marker-color-collapsed: rgb(186, 187, 241) !important;
  --list-marker-color-hover: rgb(165, 173, 206) !important;
  --list-spacing: 0.1em !important;
  --menu-background: rgb(41, 44, 60) !important;
  --menu-border-color: rgb(98, 104, 128) !important;
  --metadata-border-color: rgb(65, 69, 89) !important;
  --metadata-divider-color: rgb(65, 69, 89) !important;
  --metadata-input-background-active: rgb(198, 208, 245, 7.5%) !important;
  --metadata-input-font: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(198, 208, 245) !important;
  --metadata-label-background-active: rgb(198, 208, 245, 7.5%) !important;
  --metadata-label-font: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(165, 173, 206) !important;
  --metadata-label-text-color-hover: rgb(165, 173, 206) !important;
  --metadata-property-background-active: rgb(198, 208, 245, 7.5%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(115, 121, 148) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(98, 104, 128) !important;
  --modal-background: rgb(48, 52, 70) !important;
  --modal-border-color: rgb(115, 121, 148) !important;
  --modal-radius: 10px !important;
  --mono-rgb-0: 35, 38, 52 !important;
  --mono-rgb-100: 198, 208, 245 !important;
  --nav-collapse-icon-color: rgb(81, 87, 109) !important;
  --nav-collapse-icon-color-collapsed: rgb(81, 87, 109) !important;
  --nav-heading-color: rgb(198, 208, 245) !important;
  --nav-heading-color-collapsed: rgb(81, 87, 109) !important;
  --nav-heading-color-collapsed-hover: rgb(165, 173, 206) !important;
  --nav-heading-color-hover: rgb(198, 208, 245) !important;
  --nav-indentation-guide-color: rgb(81, 87, 109) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgb(198, 208, 245, 7.5%) !important;
  --nav-item-background-hover: rgb(198, 208, 245, 7.5%) !important;
  --nav-item-background-selected: rgb(139, 108, 239) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: rgb(165, 173, 206) !important;
  --nav-item-color-active: rgb(41, 44, 60) !important;
  --nav-item-color-highlighted: rgb(186, 187, 241) !important;
  --nav-item-color-hover: rgb(41, 44, 60) !important;
  --nav-item-color-selected: rgb(41, 44, 60) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(81, 87, 109) !important;
  --nav-tag-color-active: rgb(165, 173, 206) !important;
  --nav-tag-color-hover: rgb(165, 173, 206) !important;
  --pdf-background: rgb(48, 52, 70) !important;
  --pdf-page-background: rgb(48, 52, 70) !important;
  --pdf-shadow: 0 0 0 1px rgb(65, 69, 89) !important;
  --pdf-sidebar-background: rgb(48, 52, 70) !important;
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(65, 69, 89) !important;
  --pill-border-color: rgb(65, 69, 89) !important;
  --pill-border-color-hover: rgb(98, 104, 128) !important;
  --pill-color: rgb(165, 173, 206) !important;
  --pill-color-hover: rgb(198, 208, 245) !important;
  --pill-color-remove: rgb(81, 87, 109) !important;
  --pill-color-remove-hover: rgb(186, 187, 241) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgb(48, 52, 70) !important;
  --prompt-border-color: rgb(115, 121, 148) !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, rgb(65, 69, 89) 65%, transparent) linear-gradient(rgb(65, 69, 89), color-mix(in srgb, rgb(65, 69, 89) 65%, transparent)) !important;
  --ribbon-background: rgb(41, 44, 60) !important;
  --ribbon-background-collapsed: rgb(48, 52, 70) !important;
  --ribbon-padding: 8px 4px
    12px !important;
  --scrollbar-active-thumb-bg: rgb(198, 208, 245, 20%) !important;
  --scrollbar-bg: rgb(198, 208, 245, 5%) !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: rgb(198, 208, 245, 10%) !important;
  --search-clear-button-color: rgb(165, 173, 206) !important;
  --search-icon-color: rgb(165, 173, 206) !important;
  --search-result-background: rgb(48, 52, 70) !important;
  --secondary: rgb(186, 187, 241) !important;
  --setting-group-heading-color: rgb(198, 208, 245) !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: rgb(41, 44, 60) !important;
  --setting-items-border-color: rgb(65, 69, 89) !important;
  --setting-items-radius: 10px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: rgb(98, 104, 128) !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: rgb(65, 69, 89) !important;
  --status-bar-background: rgb(41, 44, 60) !important;
  --status-bar-border-color: rgb(65, 69, 89) !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: rgb(165, 173, 206) !important;
  --suggestion-background: rgb(48, 52, 70) !important;
  --swatch-height: 24px !important;
  --swatch-shadow: inset 0 0 0 1px
    rgb(198, 208, 245, 15%) !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: rgb(231, 130, 132) !important;
  --sync-avatar-color-2: rgb(239, 159, 118) !important;
  --sync-avatar-color-3: rgb(229, 200, 144) !important;
  --sync-avatar-color-4: rgb(166, 209, 137) !important;
  --sync-avatar-color-5: rgb(153, 209, 219) !important;
  --sync-avatar-color-6: rgb(140, 170, 238) !important;
  --sync-avatar-color-7: rgb(186, 187, 241) !important;
  --sync-avatar-color-8: rgb(244, 184, 228) !important;
  --tab-background-active: rgb(48, 52, 70) !important;
  --tab-container-background: rgb(41, 44, 60) !important;
  --tab-divider-color: rgb(98, 104, 128) !important;
  --tab-outline-color: rgb(65, 69, 89) !important;
  --tab-stacked-shadow: -8px 0 8px 0 rgb(0, 0, 0, 5%) !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: rgb(41, 44, 60) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(41, 44, 60), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(198, 208, 245, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(186, 187, 241) !important;
  --tab-text-color: rgb(81, 87, 109) !important;
  --tab-text-color-active: rgb(165, 173, 206) !important;
  --tab-text-color-focused: rgb(165, 173, 206) !important;
  --tab-text-color-focused-active: rgb(198, 208, 245) !important;
  --tab-text-color-focused-active-current: rgb(198, 208, 245) !important;
  --tab-text-color-focused-highlighted: rgb(186, 187, 241) !important;
  --table-add-button-border-color: rgb(65, 69, 89) !important;
  --table-border-color: rgb(65, 69, 89) !important;
  --table-drag-handle-background-active: rgb(186, 187, 241) !important;
  --table-drag-handle-color: rgb(81, 87, 109) !important;
  --table-drag-handle-color-active: rgb(41, 44, 60) !important;
  --table-header-border-color: rgb(65, 69, 89) !important;
  --table-header-color: rgb(165, 173, 206) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 400 !important;
  --table-line-height: 1.25 !important;
  --table-selection: rgba(139, 108, 239, 0.1) !important;
  --table-selection-border-color: rgb(186, 187, 241) !important;
  --table-white-space: normal !important;
  --tag-background: transparent !important;
  --tag-background-hover: 0 !important;
  --tag-border-color: rgb(139, 108, 239) !important;
  --tag-border-color-hover: hsl(
      254, 80%, 68%,
      15%
    ) !important;
  --tag-border-width: 0 !important;
  --tag-color: rgb(186, 187, 241) !important;
  --tag-color-hover: rgb(186, 187, 241) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0 !important;
  --tag-padding-y: 0 !important;
  --tag-radius: 0.8em !important;
  --tag-size: max(16px, 0.933em) !important;
  --tertiary: rgb(186, 187, 241) !important;
  --text-accent: rgb(186, 187, 241) !important;
  --text-accent-hover: rgb(186, 187, 241) !important;
  --text-error: rgb(231, 130, 132) !important;
  --text-error-hover: rgb(231, 130, 132, 80%) !important;
  --text-faint: rgb(81, 87, 109) !important;
  --text-highlight-bg: rgb(242, 213, 207, 100%) !important;
  --text-highlight-bg-active: rgb(242, 213, 207, 100%) !important;
  --text-muted: rgb(165, 173, 206) !important;
  --text-muted-rgb: 165, 173, 206 !important;
  --text-normal: rgb(198, 208, 245) !important;
  --text-on-accent: rgb(41, 44, 60) !important;
  --text-on-accent-inverted: rgb(41, 44, 60) !important;
  --text-selection: rgb(148, 156, 187, 30%) !important;
  --text-success: rgb(166, 209, 137) !important;
  --text-warning: rgb(239, 159, 118) !important;
  --textHighlight: rgb(242, 213, 207, 100%) !important;
  --titleFont: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(41, 44, 60) !important;
  --titlebar-background-focused: rgb(35, 38, 52) !important;
  --titlebar-border-color: rgb(65, 69, 89) !important;
  --titlebar-border-width: 0 !important;
  --titlebar-text-color: rgb(165, 173, 206) !important;
  --titlebar-text-color-focused: rgb(198, 208, 245) !important;
  --titlebar-text-color-highlighted: rgb(186, 187, 241) !important;
  --toggle-thumb-color: rgb(198, 208, 245) !important;
  --transition-hover-bg: background-color 0.3s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --transition-hover-box-shadow: box-shadow 0.3s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --transition-hover-color: color 0.3s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --transition-hover-color-fast: color 0.2s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --transition-text-decoration-color: text-decoration-color 0.3s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --vault-name-color: rgb(198, 208, 245) !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgb(198, 208, 245) !important;
  --vault-profile-color-hover: rgb(198, 208, 245) !important;
  --workspace-background-translucent: rgb(35, 38, 52, 60%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(41, 44, 60);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(48, 52, 70);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(41, 44, 60);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(41, 44, 60);
  border-left-color: rgb(65, 69, 89);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(48, 52, 70);
  color: rgb(198, 208, 245);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(133, 193, 220);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 193, 220) none 0px;
  text-decoration: rgb(133, 193, 220);
  text-decoration-color: rgb(133, 193, 220);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(166, 209, 137);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 209, 137) none 0px;
  text-decoration: rgb(166, 209, 137);
  text-decoration-color: rgb(166, 209, 137);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(166, 209, 137);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(166, 209, 137) none 0px;
  text-decoration: rgb(166, 209, 137);
  text-decoration-color: rgb(166, 209, 137);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(133, 193, 220);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 193, 220) none 0px;
  text-decoration: rgb(133, 193, 220);
  text-decoration-color: rgb(133, 193, 220);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(242, 213, 207);
  color: rgb(41, 44, 60);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(41, 44, 60) none 0px;
  text-decoration: rgb(41, 44, 60);
  text-decoration-color: rgb(41, 44, 60);
}

html[saved-theme="dark"] body del {
  color: rgb(234, 153, 156);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(234, 153, 156) none 0px;
  text-decoration: line-through rgb(234, 153, 156);
  text-decoration-color: rgb(234, 153, 156);
}

html[saved-theme="dark"] body p {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(165, 173, 206) none 0px;
  text-decoration: rgb(165, 173, 206);
  text-decoration-color: rgb(165, 173, 206);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(129, 200, 190);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(129, 200, 190) none 0px;
  text-decoration: 2px rgb(129, 200, 190);
  text-decoration-color: rgb(129, 200, 190);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(140, 170, 238);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(140, 170, 238) none 0px;
  text-decoration: 2px rgb(140, 170, 238);
  text-decoration-color: rgb(140, 170, 238);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(234, 153, 156);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(234, 153, 156) none 0px;
  text-decoration: 2px rgb(231, 130, 132);
  text-decoration-color: rgb(231, 130, 132);
  text-decoration-thickness: 2px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(81, 87, 109);
  text-decoration: rgb(81, 87, 109);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 208, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 163.453px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(165, 173, 206);
  font-weight: 400;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(229, 200, 144);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 200, 144);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 200, 144);
  border-left-color: rgb(229, 200, 144);
  border-right-color: rgb(229, 200, 144);
  border-top-color: rgb(229, 200, 144);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 208, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(186, 187, 241);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(186, 187, 241);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(166, 209, 137);
  text-decoration: line-through rgb(166, 209, 137);
  text-decoration-color: rgb(166, 209, 137);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(234, 153, 156);
  border-left-color: rgb(234, 153, 156);
  border-right-color: rgb(234, 153, 156);
  border-top-color: rgb(234, 153, 156);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(81, 87, 109);
  text-decoration: line-through 1px rgb(81, 87, 109);
  text-decoration-color: rgb(81, 87, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 208, 245);
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(140, 170, 238);
  border-left-color: rgb(140, 170, 238);
  border-right-color: rgb(140, 170, 238);
  border-top-color: rgb(140, 170, 238);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 133, 193, 220;
  background-color: rgba(133, 193, 220, 0.1);
  border-bottom-color: rgba(133, 193, 220, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(133, 193, 220, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(133, 193, 220, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(133, 193, 220, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 231, 130, 132;
  background-color: rgba(231, 130, 132, 0.1);
  border-bottom-color: rgba(231, 130, 132, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(231, 130, 132, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(231, 130, 132, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(231, 130, 132, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 231, 130, 132;
  background-color: rgba(231, 130, 132, 0.1);
  border-bottom-color: rgba(231, 130, 132, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(231, 130, 132, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(231, 130, 132, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(231, 130, 132, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 202, 158, 230;
  background-color: rgba(202, 158, 230, 0.1);
  border-bottom-color: rgba(202, 158, 230, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(202, 158, 230, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(202, 158, 230, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(202, 158, 230, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 231, 130, 132;
  background-color: rgba(231, 130, 132, 0.1);
  border-bottom-color: rgba(231, 130, 132, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(231, 130, 132, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(231, 130, 132, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(231, 130, 132, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 140, 170, 238;
  background-color: rgba(140, 170, 238, 0.1);
  border-bottom-color: rgba(140, 170, 238, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(140, 170, 238, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(140, 170, 238, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(140, 170, 238, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 140, 170, 238;
  background-color: rgba(140, 170, 238, 0.1);
  border-bottom-color: rgba(140, 170, 238, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(140, 170, 238, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(140, 170, 238, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(140, 170, 238, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 229, 200, 144;
  background-color: rgba(229, 200, 144, 0.1);
  border-bottom-color: rgba(229, 200, 144, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(229, 200, 144, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(229, 200, 144, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(229, 200, 144, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 166, 209, 137;
  background-color: rgba(166, 209, 137, 0.1);
  border-bottom-color: rgba(166, 209, 137, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(166, 209, 137, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(166, 209, 137, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(166, 209, 137, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 133, 193, 220;
  background-color: rgba(133, 193, 220, 0.1);
  border-bottom-color: rgba(133, 193, 220, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(133, 193, 220, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(133, 193, 220, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(133, 193, 220, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 140, 170, 238;
  background-color: rgba(140, 170, 238, 0.1);
  border-bottom-color: rgba(140, 170, 238, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(140, 170, 238, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(140, 170, 238, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(140, 170, 238, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 239, 159, 118;
  background-color: rgba(239, 159, 118, 0.1);
  border-bottom-color: rgba(239, 159, 118, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(239, 159, 118, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(239, 159, 118, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(239, 159, 118, 0.6);
  border-top-width: 1px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(35, 38, 52, 0.3);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(198, 208, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(48, 52, 70);
  border-bottom-color: rgb(81, 87, 109);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: rgb(41, 44, 60);
  color: rgb(198, 208, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 208, 245) none 0px;
  text-decoration: rgb(198, 208, 245);
  text-decoration-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(41, 44, 60);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(41, 44, 60);
  border-left-color: rgb(41, 44, 60);
  border-right-color: rgb(41, 44, 60);
  border-top-color: rgb(41, 44, 60);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(41, 44, 60);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(186, 187, 241);
  color: rgb(41, 44, 60);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(81, 87, 109);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(81, 87, 109);
  border-right-color: rgb(81, 87, 109);
  border-top-color: rgb(81, 87, 109);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(198, 208, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(186, 187, 241);
  border-bottom-color: rgb(41, 44, 60);
  border-left-color: rgb(41, 44, 60);
  border-right-color: rgb(41, 44, 60);
  border-top-color: rgb(41, 44, 60);
  color: rgb(41, 44, 60);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(186, 187, 241);
  color: rgb(41, 44, 60);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(139, 108, 239, 0.1);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-left-color: rgba(139, 108, 239, 0.1);
  border-right-color: rgba(139, 108, 239, 0.1);
  border-top-color: rgba(139, 108, 239, 0.1);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(186, 187, 241);
}

html[saved-theme="dark"] body h1 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(198, 208, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(186, 187, 241);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 140, 170, 238;
  border-bottom-color: rgba(140, 170, 238, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(140, 170, 238, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(140, 170, 238, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(140, 170, 238, 0.6);
  border-top-width: 1px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(48, 52, 70) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 52, 70);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 206);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 206);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(165, 173, 206);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(202, 158, 230);
  border-bottom-color: rgb(41, 44, 60);
  border-left-color: rgb(41, 44, 60);
  border-right-color: rgb(41, 44, 60);
  border-top-color: rgb(41, 44, 60);
  color: rgb(41, 44, 60);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(165, 173, 206);
  text-decoration: rgb(165, 173, 206);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 208, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(165, 173, 206);
  text-decoration: rgb(165, 173, 206);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(165, 173, 206);
  text-decoration: rgb(165, 173, 206);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(165, 173, 206);
  stroke: rgb(165, 173, 206);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(81, 87, 109);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(65, 69, 89);
  border-left-color: rgb(65, 69, 89);
  border-right-color: rgb(65, 69, 89);
  border-top-color: rgb(65, 69, 89);
  color: rgb(165, 173, 206);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(41, 44, 60);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(198, 208, 245);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 208, 245);
  text-decoration: underline dotted rgb(198, 208, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(41, 44, 60);
  border-bottom-color: rgb(165, 173, 206);
  border-left-color: rgb(165, 173, 206);
  border-right-color: rgb(165, 173, 206);
  border-top-color: rgb(165, 173, 206);
  color: rgb(165, 173, 206);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 208, 245);
  border-left-color: rgb(198, 208, 245);
  border-right-color: rgb(198, 208, 245);
  border-top-color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 208, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 208, 245);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 254 !important;
  --accent-l: 68% !important;
  --accent-s: 80% !important;
  --background-modifier-active-hover: rgb(139, 108, 239) !important;
  --background-modifier-border: rgb(204, 208, 218) !important;
  --background-modifier-border-focus: rgb(156, 160, 176) !important;
  --background-modifier-border-hover: rgb(172, 176, 190) !important;
  --background-modifier-box-shadow: rgb(220, 224, 232, 30%) !important;
  --background-modifier-cover: rgb(220, 224, 232, 90%) !important;
  --background-modifier-error: rgb(210, 15, 57, 90%) !important;
  --background-modifier-error-hover: rgb(210, 15, 57, 100%) !important;
  --background-modifier-error-rgb: 210, 15, 57 !important;
  --background-modifier-form-field: rgb(220, 224, 232, 30%) !important;
  --background-modifier-form-field-highlighted: rgb(220, 224, 232, 22%) !important;
  --background-modifier-form-field-hover: rgb(220, 224, 232, 30%) !important;
  --background-modifier-hover: rgb(76, 79, 105, 7.5%) !important;
  --background-modifier-message: rgb(0, 0, 0, 90%) !important;
  --background-modifier-success: rgb(64, 160, 43, 90%) !important;
  --background-modifier-success-rgb: 64, 160, 43 !important;
  --background-primary: rgb(239, 241, 245) !important;
  --background-primary-alt: rgb(230, 233, 239) !important;
  --background-primary-rgb: 239, 241, 245 !important;
  --background-secondary: rgb(230, 233, 239) !important;
  --background-secondary-alt: rgb(220, 224, 232) !important;
  --bases-cards-background: rgb(239, 241, 245) !important;
  --bases-cards-cover-background: rgb(230, 233, 239) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(204, 208, 218) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(172, 176, 190) !important;
  --bases-embed-border-color: rgb(204, 208, 218) !important;
  --bases-group-heading-property-color: rgb(108, 111, 133) !important;
  --bases-table-border-color: rgb(204, 208, 218) !important;
  --bases-table-cell-background-active: rgb(239, 241, 245) !important;
  --bases-table-cell-background-disabled: rgb(230, 233, 239) !important;
  --bases-table-cell-background-selected: rgba(139, 108, 239, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(156, 160, 176) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(114, 135, 253) !important;
  --bases-table-group-background: rgb(230, 233, 239) !important;
  --bases-table-header-background: rgb(239, 241, 245) !important;
  --bases-table-header-background-hover: rgb(76, 79, 105, 7.5%) !important;
  --bases-table-header-color: rgb(108, 111, 133) !important;
  --bases-table-summary-background: rgb(239, 241, 245) !important;
  --bases-table-summary-background-hover: rgb(76, 79, 105, 7.5%) !important;
  --blockquote-border-color: rgb(114, 135, 253) !important;
  --blur-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent)) !important;
  --bodyFont: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --callout-border-opacity: 0.2;
  --callout-border-width: 0.25px;
  --callout-bug: 210, 15, 57;
  --callout-default: 30, 102, 245;
  --callout-error: 210, 15, 57;
  --callout-example: 136, 57, 239;
  --callout-fail: 210, 15, 57;
  --callout-important: 32, 159, 181;
  --callout-info: 30, 102, 245;
  --callout-padding: 12px 12px
    12px 24px;
  --callout-question: 223, 142, 29;
  --callout-success: 64, 160, 43;
  --callout-summary: 32, 159, 181;
  --callout-tip: 32, 159, 181;
  --callout-todo: 30, 102, 245;
  --callout-warning: 254, 100, 11;
  --canvas-background: rgb(239, 241, 245) !important;
  --canvas-card-label-color: rgb(188, 192, 204) !important;
  --canvas-color-1: 210, 15, 57 !important;
  --canvas-color-2: 254, 100, 11 !important;
  --canvas-color-3: 223, 142, 29 !important;
  --canvas-color-4: 64, 160, 43 !important;
  --canvas-color-5: 32, 159, 181 !important;
  --canvas-color-6: 136, 57, 239 !important;
  --canvas-dot-pattern: rgb(188, 192, 204) !important;
  --caret-color: rgb(76, 79, 105) !important;
  --checkbox-border-color: rgb(188, 192, 204) !important;
  --checkbox-border-color-hover: rgb(108, 111, 133) !important;
  --checkbox-color: rgb(114, 135, 253) !important;
  --checkbox-color-hover: rgb(114, 135, 253) !important;
  --checkbox-marker-color: rgb(239, 241, 245) !important;
  --checklist-done-color: rgb(64, 160, 43) !important;
  --code-background: rgb(230, 233, 239) !important;
  --code-border-color: rgb(204, 208, 218) !important;
  --code-bracket-background: rgb(76, 79, 105, 7.5%) !important;
  --code-comment: rgb(188, 192, 204) !important;
  --code-function: rgb(223, 142, 29) !important;
  --code-important: rgb(254, 100, 11) !important;
  --code-keyword: rgb(234, 118, 203) !important;
  --code-normal: rgb(108, 111, 133) !important;
  --code-operator: rgb(210, 15, 57) !important;
  --code-property: rgb(4, 165, 229) !important;
  --code-punctuation: rgb(108, 111, 133) !important;
  --code-string: rgb(64, 160, 43) !important;
  --code-tag: rgb(210, 15, 57) !important;
  --code-value: rgb(114, 135, 253) !important;
  --codeFont: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: rgb(188, 192, 204) !important;
  --collapse-icon-color-collapsed: rgb(108, 111, 133) !important;
  --color-accent: rgb(114, 135, 253) !important;
  --color-accent-1: rgb(114, 135, 253) !important;
  --color-accent-2: rgb(114, 135, 253, 90%) !important;
  --color-accent-hsl: 254, 80%, 68% !important;
  --color-base-00: rgb(220, 224, 232) !important;
  --color-base-10: rgb(230, 233, 239) !important;
  --color-base-100: rgb(76, 79, 105) !important;
  --color-base-20: rgb(239, 241, 245) !important;
  --color-base-25: rgb(204, 208, 218) !important;
  --color-base-30: rgb(188, 192, 204) !important;
  --color-base-35: rgb(172, 176, 190) !important;
  --color-base-40: rgb(156, 160, 176) !important;
  --color-base-50: rgb(140, 143, 161) !important;
  --color-base-60: rgb(124, 127, 147) !important;
  --color-base-70: rgb(108, 111, 133) !important;
  --color-blue: rgb(30, 102, 245) !important;
  --color-blue-rgb: 30, 102, 245 !important;
  --color-cyan: rgb(4, 165, 229) !important;
  --color-cyan-rgb: 32, 159, 181 !important;
  --color-green: rgb(64, 160, 43) !important;
  --color-green-rgb: 64, 160, 43 !important;
  --color-orange: rgb(254, 100, 11) !important;
  --color-orange-rgb: 254, 100, 11 !important;
  --color-pink: rgb(234, 118, 203) !important;
  --color-pink-rgb: 234, 118, 203 !important;
  --color-purple: rgb(114, 135, 253) !important;
  --color-purple-rgb: 136, 57, 239 !important;
  --color-red: rgb(210, 15, 57) !important;
  --color-red-rgb: 210, 15, 57 !important;
  --color-yellow: rgb(223, 142, 29) !important;
  --color-yellow-rgb: 223, 142, 29 !important;
  --ctp-accent: 114, 135, 253 !important;
  --ctp-base: 239, 241, 245 !important;
  --ctp-blockquote: 220, 138, 120 !important;
  --ctp-blue: 30, 102, 245 !important;
  --ctp-bold: 32, 159, 181 !important;
  --ctp-crust: 220, 224, 232 !important;
  --ctp-flamingo: 221, 120, 120 !important;
  --ctp-green: 64, 160, 43 !important;
  --ctp-h1: 114, 135, 253 !important;
  --ctp-h2: 114, 135, 253 !important;
  --ctp-h3: 114, 135, 253 !important;
  --ctp-h4: 114, 135, 253 !important;
  --ctp-h5: 114, 135, 253 !important;
  --ctp-h6: 114, 135, 253 !important;
  --ctp-italic: 64, 160, 43 !important;
  --ctp-lavender: 114, 135, 253 !important;
  --ctp-mantle: 230, 233, 239 !important;
  --ctp-maroon: 230, 69, 83 !important;
  --ctp-mauve: 136, 57, 239 !important;
  --ctp-overlay0: 156, 160, 176 !important;
  --ctp-overlay1: 140, 143, 161 !important;
  --ctp-overlay2: 124, 127, 147 !important;
  --ctp-page-title: 76, 79, 105 !important;
  --ctp-peach: 254, 100, 11 !important;
  --ctp-pink: 234, 118, 203 !important;
  --ctp-red: 210, 15, 57 !important;
  --ctp-rosewater: 220, 138, 120 !important;
  --ctp-sapphire: 32, 159, 181 !important;
  --ctp-sky: 4, 165, 229 !important;
  --ctp-strikethrough: 230, 69, 83 !important;
  --ctp-subtext0: 108, 111, 133 !important;
  --ctp-subtext1: 92, 95, 119 !important;
  --ctp-surface0: 204, 208, 218 !important;
  --ctp-surface1: 188, 192, 204 !important;
  --ctp-surface2: 172, 176, 190 !important;
  --ctp-tag-pill-color: 114, 135, 253 !important;
  --ctp-teal: 23, 146, 153 !important;
  --ctp-text: 76, 79, 105 !important;
  --ctp-yellow: 223, 142, 29 !important;
  --dark: rgb(76, 79, 105) !important;
  --darkgray: rgb(76, 79, 105) !important;
  --divider-color: rgb(204, 208, 218) !important;
  --divider-color-hover: rgb(30, 102, 245) !important;
  --divider-width-hover: 2px !important;
  --drag-ghost-background: rgb(0, 0, 0, 85%) !important;
  --drag-ghost-text-color: rgb(76, 79, 105) !important;
  --dropdown-background: rgb(204, 208, 218) !important;
  --dropdown-background-hover: rgb(188, 192, 204) !important;
  --embed-block-shadow-hover: 0 0 0 1px
    rgb(204, 208, 218),
    inset 0 0 0 1px rgb(204, 208, 218) !important;
  --embed-border-left: 2px solid rgb(114, 135, 253) !important;
  --embed-border-right: none !important;
  --embed-border-start: 2px solid rgb(114, 135, 253) !important;
  --file-header-background: rgb(239, 241, 245) !important;
  --file-header-background-focused: rgb(239, 241, 245) !important;
  --file-header-font: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 32px !important;
  --flair-background: rgb(204, 208, 218) !important;
  --flair-color: rgb(76, 79, 105) !important;
  --font-interface: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif !important;
  --font-mermaid: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, Arial' !important;
  --font-text: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif !important;
  --font-ui-medium: 16px !important;
  --footnote-divider-color: rgb(204, 208, 218) !important;
  --footnote-id-color: rgb(108, 111, 133) !important;
  --footnote-id-color-no-occurrences: rgb(188, 192, 204) !important;
  --footnote-input-background-active: rgb(76, 79, 105, 7.5%) !important;
  --graph-line: rgb(172, 176, 190) !important;
  --graph-node: rgb(108, 111, 133) !important;
  --graph-node-attachment: rgb(223, 142, 29) !important;
  --graph-node-focused: rgb(114, 135, 253) !important;
  --graph-node-tag: rgb(64, 160, 43) !important;
  --graph-node-unresolved: rgb(188, 192, 204) !important;
  --graph-text: rgb(76, 79, 105) !important;
  --gray: rgb(108, 111, 133) !important;
  --h1-line-height: 1.5 !important;
  --h1-size: 2em !important;
  --h2-line-height: 1.5 !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-line-height: 1.5 !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-line-height: 1.5 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.12em !important;
  --headerFont: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(188, 192, 204) !important;
  --hex-blue: #1e66f5 !important;
  --hex-green: #40a02b !important;
  --hex-lavender: #7287fd !important;
  --hex-mauve: #8839ef !important;
  --hex-peach: #fe640b !important;
  --hex-pink: #ea76cb !important;
  --hex-red: #d20f39 !important;
  --hex-sapphire: #209fb5 !important;
  --hex-sky: #04a5e5 !important;
  --hex-teal: #179299 !important;
  --hex-yellow: #df8e1d !important;
  --highlight: rgb(220, 138, 120, 100%) !important;
  --hr-color: rgb(30, 102, 245) !important;
  --icon-color: rgb(108, 111, 133) !important;
  --icon-color-active: rgb(114, 135, 253) !important;
  --icon-color-focused: rgb(76, 79, 105) !important;
  --icon-color-hover: rgb(230, 233, 239) !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: rgb(188, 192, 204) !important;
  --indentation-guide-color-active: rgb(32, 159, 181, 70%) !important;
  --indentation-guide-width: 2px !important;
  --inline-title-line-height: 1.5 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: rgb(188, 192, 204) !important;
  --input-placeholder-color: rgb(188, 192, 204) !important;
  --interactive-accent: rgb(114, 135, 253) !important;
  --interactive-accent-hover: rgb(114, 135, 253) !important;
  --interactive-accent-hsl: 254, 80%, 68% !important;
  --interactive-accent-rgb: 114, 135, 253 !important;
  --interactive-hover: rgb(188, 192, 204) !important;
  --interactive-normal: rgb(204, 208, 218) !important;
  --interactive-success: rgb(64, 160, 43) !important;
  --light: rgb(239, 241, 245) !important;
  --lightgray: rgb(230, 233, 239) !important;
  --line-height-tight: 1.25 !important;
  --link-color: rgb(30, 102, 245) !important;
  --link-color-hover: rgb(30, 102, 245) !important;
  --link-decoration: none !important;
  --link-decoration-thickness: 2px !important;
  --link-external-color: rgb(23, 146, 153) !important;
  --link-external-color-hover: rgb(23, 146, 153) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: rgb(230, 69, 83) !important;
  --link-unresolved-decoration-color: rgb(210, 15, 57) !important;
  --link-unresolved-opacity: 1 !important;
  --list-indent: 2em !important;
  --list-marker-color: rgb(32, 159, 181) !important;
  --list-marker-color-collapsed: rgb(114, 135, 253) !important;
  --list-marker-color-hover: rgb(108, 111, 133) !important;
  --list-spacing: 0.1em !important;
  --menu-background: rgb(230, 233, 239) !important;
  --menu-border-color: rgb(172, 176, 190) !important;
  --metadata-border-color: rgb(204, 208, 218) !important;
  --metadata-divider-color: rgb(204, 208, 218) !important;
  --metadata-input-background-active: rgb(76, 79, 105, 7.5%) !important;
  --metadata-input-font: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(76, 79, 105) !important;
  --metadata-label-background-active: rgb(76, 79, 105, 7.5%) !important;
  --metadata-label-font: "Nunito Sans",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(108, 111, 133) !important;
  --metadata-label-text-color-hover: rgb(108, 111, 133) !important;
  --metadata-property-background-active: rgb(76, 79, 105, 7.5%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(156, 160, 176) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(172, 176, 190) !important;
  --modal-background: rgb(239, 241, 245) !important;
  --modal-border-color: rgb(156, 160, 176) !important;
  --modal-radius: 10px !important;
  --mono-rgb-0: 220, 224, 232 !important;
  --mono-rgb-100: 76, 79, 105 !important;
  --nav-collapse-icon-color: rgb(188, 192, 204) !important;
  --nav-collapse-icon-color-collapsed: rgb(188, 192, 204) !important;
  --nav-heading-color: rgb(76, 79, 105) !important;
  --nav-heading-color-collapsed: rgb(188, 192, 204) !important;
  --nav-heading-color-collapsed-hover: rgb(108, 111, 133) !important;
  --nav-heading-color-hover: rgb(76, 79, 105) !important;
  --nav-indentation-guide-color: rgb(188, 192, 204) !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-item-background-active: rgb(76, 79, 105, 7.5%) !important;
  --nav-item-background-hover: rgb(76, 79, 105, 7.5%) !important;
  --nav-item-background-selected: rgb(139, 108, 239) !important;
  --nav-item-children-margin-left: 12px !important;
  --nav-item-children-padding-left: 4px !important;
  --nav-item-color: rgb(108, 111, 133) !important;
  --nav-item-color-active: rgb(230, 233, 239) !important;
  --nav-item-color-highlighted: rgb(114, 135, 253) !important;
  --nav-item-color-hover: rgb(230, 233, 239) !important;
  --nav-item-color-selected: rgb(230, 233, 239) !important;
  --nav-item-white-space: nowrap !important;
  --nav-tag-color: rgb(188, 192, 204) !important;
  --nav-tag-color-active: rgb(108, 111, 133) !important;
  --nav-tag-color-hover: rgb(108, 111, 133) !important;
  --pdf-background: rgb(239, 241, 245) !important;
  --pdf-page-background: rgb(239, 241, 245) !important;
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 8px rgba(0, 0, 0, 0.1) !important;
  --pdf-sidebar-background: rgb(239, 241, 245) !important;
  --pdf-spread-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.2) !important;
  --pill-border-color: rgb(204, 208, 218) !important;
  --pill-border-color-hover: rgb(172, 176, 190) !important;
  --pill-color: rgb(108, 111, 133) !important;
  --pill-color-hover: rgb(76, 79, 105) !important;
  --pill-color-remove: rgb(188, 192, 204) !important;
  --pill-color-remove-hover: rgb(114, 135, 253) !important;
  --popover-max-height: 70vh !important;
  --popover-pdf-height: 800px !important;
  --popover-pdf-width: 600px !important;
  --prompt-background: rgb(239, 241, 245) !important;
  --prompt-border-color: rgb(156, 160, 176) !important;
  --radius-l: 10px !important;
  --raised-background: color-mix(in srgb, rgb(239, 241, 245) 65%, transparent) linear-gradient(rgb(239, 241, 245), color-mix(in srgb, rgb(239, 241, 245) 65%, transparent)) !important;
  --ribbon-background: rgb(230, 233, 239) !important;
  --ribbon-background-collapsed: rgb(239, 241, 245) !important;
  --ribbon-padding: 8px 4px
    12px !important;
  --scrollbar-active-thumb-bg: rgb(76, 79, 105, 20%) !important;
  --scrollbar-bg: rgb(76, 79, 105, 5%) !important;
  --scrollbar-radius: 10px !important;
  --scrollbar-thumb-bg: rgb(76, 79, 105, 10%) !important;
  --search-clear-button-color: rgb(108, 111, 133) !important;
  --search-icon-color: rgb(108, 111, 133) !important;
  --search-result-background: rgb(239, 241, 245) !important;
  --secondary: rgb(114, 135, 253) !important;
  --setting-group-heading-color: rgb(76, 79, 105) !important;
  --setting-group-heading-size: 16px !important;
  --setting-items-background: rgb(230, 233, 239) !important;
  --setting-items-border-color: rgb(204, 208, 218) !important;
  --setting-items-radius: 10px !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --slider-thumb-border-color: rgb(172, 176, 190) !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: rgb(204, 208, 218) !important;
  --status-bar-background: rgb(230, 233, 239) !important;
  --status-bar-border-color: rgb(204, 208, 218) !important;
  --status-bar-scroll-padding: 30px !important;
  --status-bar-text-color: rgb(108, 111, 133) !important;
  --suggestion-background: rgb(239, 241, 245) !important;
  --swatch-height: 24px !important;
  --swatch-shadow: inset 0 0 0 1px
    rgb(76, 79, 105, 15%) !important;
  --swatch-width: 24px !important;
  --sync-avatar-color-1: rgb(210, 15, 57) !important;
  --sync-avatar-color-2: rgb(254, 100, 11) !important;
  --sync-avatar-color-3: rgb(223, 142, 29) !important;
  --sync-avatar-color-4: rgb(64, 160, 43) !important;
  --sync-avatar-color-5: rgb(4, 165, 229) !important;
  --sync-avatar-color-6: rgb(30, 102, 245) !important;
  --sync-avatar-color-7: rgb(114, 135, 253) !important;
  --sync-avatar-color-8: rgb(234, 118, 203) !important;
  --tab-background-active: rgb(239, 241, 245) !important;
  --tab-container-background: rgb(230, 233, 239) !important;
  --tab-divider-color: rgb(172, 176, 190) !important;
  --tab-outline-color: rgb(204, 208, 218) !important;
  --tab-stacked-shadow: -8px 0 8px 0 rgb(0, 0, 0, 5%) !important;
  --tab-stacked-text-align: left !important;
  --tab-switcher-background: rgb(230, 233, 239) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(230, 233, 239), transparent) !important;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(76, 79, 105, 0.05) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(114, 135, 253) !important;
  --tab-text-color: rgb(188, 192, 204) !important;
  --tab-text-color-active: rgb(108, 111, 133) !important;
  --tab-text-color-focused: rgb(108, 111, 133) !important;
  --tab-text-color-focused-active: rgb(76, 79, 105) !important;
  --tab-text-color-focused-active-current: rgb(76, 79, 105) !important;
  --tab-text-color-focused-highlighted: rgb(114, 135, 253) !important;
  --table-add-button-border-color: rgb(204, 208, 218) !important;
  --table-border-color: rgb(204, 208, 218) !important;
  --table-drag-handle-background-active: rgb(114, 135, 253) !important;
  --table-drag-handle-color: rgb(188, 192, 204) !important;
  --table-drag-handle-color-active: rgb(230, 233, 239) !important;
  --table-header-border-color: rgb(204, 208, 218) !important;
  --table-header-color: rgb(108, 111, 133) !important;
  --table-header-size: 0.875em !important;
  --table-header-weight: 400 !important;
  --table-line-height: 1.25 !important;
  --table-selection: rgba(139, 108, 239, 0.1) !important;
  --table-selection-border-color: rgb(114, 135, 253) !important;
  --table-white-space: normal !important;
  --tag-background: transparent !important;
  --tag-background-hover: 0 !important;
  --tag-border-color: rgb(139, 108, 239) !important;
  --tag-border-color-hover: hsl(
      254, 80%, 68%,
      15%
    ) !important;
  --tag-border-width: 0 !important;
  --tag-color: rgb(114, 135, 253) !important;
  --tag-color-hover: rgb(114, 135, 253) !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: 0 !important;
  --tag-padding-y: 0 !important;
  --tag-radius: 0.8em !important;
  --tag-size: max(16px, 0.933em) !important;
  --tertiary: rgb(114, 135, 253) !important;
  --text-accent: rgb(114, 135, 253) !important;
  --text-accent-hover: rgb(114, 135, 253) !important;
  --text-error: rgb(210, 15, 57) !important;
  --text-error-hover: rgb(210, 15, 57, 80%) !important;
  --text-faint: rgb(188, 192, 204) !important;
  --text-highlight-bg: rgb(220, 138, 120, 100%) !important;
  --text-highlight-bg-active: rgb(220, 138, 120, 100%) !important;
  --text-muted: rgb(108, 111, 133) !important;
  --text-muted-rgb: 108, 111, 133 !important;
  --text-normal: rgb(76, 79, 105) !important;
  --text-on-accent: rgb(230, 233, 239) !important;
  --text-on-accent-inverted: rgb(230, 233, 239) !important;
  --text-selection: rgb(124, 127, 147, 30%) !important;
  --text-success: rgb(64, 160, 43) !important;
  --text-warning: rgb(254, 100, 11) !important;
  --textHighlight: rgb(220, 138, 120, 100%) !important;
  --titleFont: "Vollkorn",
    -apple-system,
    blinkmacsystemfont,
    "Segoe UI",
    "Microsoft YaHei Light",
    roboto,
    inter,
    sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(230, 233, 239) !important;
  --titlebar-background-focused: rgb(220, 224, 232) !important;
  --titlebar-border-color: rgb(204, 208, 218) !important;
  --titlebar-border-width: 0 !important;
  --titlebar-text-color: rgb(108, 111, 133) !important;
  --titlebar-text-color-focused: rgb(76, 79, 105) !important;
  --titlebar-text-color-highlighted: rgb(114, 135, 253) !important;
  --toggle-thumb-color: rgb(76, 79, 105) !important;
  --transition-hover-bg: background-color 0.3s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --transition-hover-box-shadow: box-shadow 0.3s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --transition-hover-color: color 0.3s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --transition-hover-color-fast: color 0.2s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --transition-text-decoration-color: text-decoration-color 0.3s cubic-bezier(0.44, 0.21, 0, 1) !important;
  --vault-name-color: rgb(76, 79, 105) !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: rgb(76, 79, 105) !important;
  --vault-profile-color-hover: rgb(76, 79, 105) !important;
  --workspace-background-translucent: rgb(220, 224, 232, 60%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 233, 239);
  border-left-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 241, 245);
  color: rgb(76, 79, 105);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(32, 159, 181);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(32, 159, 181) none 0px;
  text-decoration: rgb(32, 159, 181);
  text-decoration-color: rgb(32, 159, 181);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(64, 160, 43);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 160, 43) none 0px;
  text-decoration: rgb(64, 160, 43);
  text-decoration-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(64, 160, 43);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(64, 160, 43) none 0px;
  text-decoration: rgb(64, 160, 43);
  text-decoration-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(32, 159, 181);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(32, 159, 181) none 0px;
  text-decoration: rgb(32, 159, 181);
  text-decoration-color: rgb(32, 159, 181);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(220, 138, 120);
  color: rgb(230, 233, 239);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 233, 239) none 0px;
  text-decoration: rgb(230, 233, 239);
  text-decoration-color: rgb(230, 233, 239);
}

html[saved-theme="light"] body del {
  color: rgb(230, 69, 83);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 69, 83) none 0px;
  text-decoration: line-through rgb(230, 69, 83);
  text-decoration-color: rgb(230, 69, 83);
}

html[saved-theme="light"] body p {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(108, 111, 133) none 0px;
  text-decoration: rgb(108, 111, 133);
  text-decoration-color: rgb(108, 111, 133);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(23, 146, 153);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(23, 146, 153) none 0px;
  text-decoration: 2px rgb(23, 146, 153);
  text-decoration-color: rgb(23, 146, 153);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(30, 102, 245);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 102, 245) none 0px;
  text-decoration: 2px rgb(30, 102, 245);
  text-decoration-color: rgb(30, 102, 245);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(230, 69, 83);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 69, 83) none 0px;
  text-decoration: 2px rgb(210, 15, 57);
  text-decoration-color: rgb(210, 15, 57);
  text-decoration-thickness: 2px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(188, 192, 204);
  text-decoration: rgb(188, 192, 204);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body table {
  color: rgb(76, 79, 105);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 163.453px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(108, 111, 133);
  font-weight: 400;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(223, 142, 29);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(223, 142, 29);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(223, 142, 29);
  border-left-color: rgb(223, 142, 29);
  border-right-color: rgb(223, 142, 29);
  border-top-color: rgb(223, 142, 29);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 79, 105);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(114, 135, 253);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(114, 135, 253);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(64, 160, 43);
  text-decoration: line-through rgb(64, 160, 43);
  text-decoration-color: rgb(64, 160, 43);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(230, 69, 83);
  border-left-color: rgb(230, 69, 83);
  border-right-color: rgb(230, 69, 83);
  border-top-color: rgb(230, 69, 83);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(188, 192, 204);
  text-decoration: line-through 1px rgb(188, 192, 204);
  text-decoration-color: rgb(188, 192, 204);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 79, 105);
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(30, 102, 245);
  border-left-color: rgb(30, 102, 245);
  border-right-color: rgb(30, 102, 245);
  border-top-color: rgb(30, 102, 245);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 32, 159, 181;
  background-color: rgba(32, 159, 181, 0.1);
  border-bottom-color: rgba(32, 159, 181, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(32, 159, 181, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(32, 159, 181, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(32, 159, 181, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(210, 15, 57, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(210, 15, 57, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(210, 15, 57, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(210, 15, 57, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(210, 15, 57, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(210, 15, 57, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 136, 57, 239;
  background-color: rgba(136, 57, 239, 0.1);
  border-bottom-color: rgba(136, 57, 239, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(136, 57, 239, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(136, 57, 239, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(136, 57, 239, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 210, 15, 57;
  background-color: rgba(210, 15, 57, 0.1);
  border-bottom-color: rgba(210, 15, 57, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(210, 15, 57, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(210, 15, 57, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(210, 15, 57, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 30, 102, 245;
  background-color: rgba(30, 102, 245, 0.1);
  border-bottom-color: rgba(30, 102, 245, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(30, 102, 245, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(30, 102, 245, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(30, 102, 245, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 30, 102, 245;
  background-color: rgba(30, 102, 245, 0.1);
  border-bottom-color: rgba(30, 102, 245, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(30, 102, 245, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(30, 102, 245, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(30, 102, 245, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 223, 142, 29;
  background-color: rgba(223, 142, 29, 0.1);
  border-bottom-color: rgba(223, 142, 29, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(223, 142, 29, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(223, 142, 29, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(223, 142, 29, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 64, 160, 43;
  background-color: rgba(64, 160, 43, 0.1);
  border-bottom-color: rgba(64, 160, 43, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(64, 160, 43, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(64, 160, 43, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(64, 160, 43, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 32, 159, 181;
  background-color: rgba(32, 159, 181, 0.1);
  border-bottom-color: rgba(32, 159, 181, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(32, 159, 181, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(32, 159, 181, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(32, 159, 181, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 30, 102, 245;
  background-color: rgba(30, 102, 245, 0.1);
  border-bottom-color: rgba(30, 102, 245, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(30, 102, 245, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(30, 102, 245, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(30, 102, 245, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 254, 100, 11;
  background-color: rgba(254, 100, 11, 0.1);
  border-bottom-color: rgba(254, 100, 11, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(254, 100, 11, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(254, 100, 11, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(254, 100, 11, 0.6);
  border-top-width: 1px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgba(220, 224, 232, 0.3);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(76, 79, 105);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(188, 192, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: rgb(230, 233, 239);
  color: rgb(76, 79, 105);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 79, 105) none 0px;
  text-decoration: rgb(76, 79, 105);
  text-decoration-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(230, 233, 239);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(230, 233, 239);
  border-right-color: rgb(230, 233, 239);
  border-top-color: rgb(230, 233, 239);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(230, 233, 239);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(114, 135, 253);
  color: rgb(230, 233, 239);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(188, 192, 204);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(188, 192, 204);
  border-right-color: rgb(188, 192, 204);
  border-top-color: rgb(188, 192, 204);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(76, 79, 105);
  border-bottom-width: 0px;
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(114, 135, 253);
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(230, 233, 239);
  border-right-color: rgb(230, 233, 239);
  border-top-color: rgb(230, 233, 239);
  color: rgb(230, 233, 239);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(114, 135, 253);
  color: rgb(230, 233, 239);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(139, 108, 239, 0.1);
  border-bottom-left-radius: 11.2px;
  border-bottom-right-radius: 11.2px;
  border-left-color: rgba(139, 108, 239, 0.1);
  border-right-color: rgba(139, 108, 239, 0.1);
  border-top-color: rgba(139, 108, 239, 0.1);
  border-top-left-radius: 11.2px;
  border-top-right-radius: 11.2px;
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(114, 135, 253);
}

html[saved-theme="light"] body h1 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(76, 79, 105);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(114, 135, 253);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 30, 102, 245;
  border-bottom-color: rgba(30, 102, 245, 0.6);
  border-bottom-width: 1px;
  border-left-color: rgba(30, 102, 245, 0.6);
  border-left-width: 1px;
  border-right-color: rgba(30, 102, 245, 0.6);
  border-right-width: 1px;
  border-top-color: rgba(30, 102, 245, 0.6);
  border-top-width: 1px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 241, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 241, 245);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 111, 133);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 111, 133);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 111, 133);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(136, 57, 239);
  border-bottom-color: rgb(230, 233, 239);
  border-left-color: rgb(230, 233, 239);
  border-right-color: rgb(230, 233, 239);
  border-top-color: rgb(230, 233, 239);
  color: rgb(230, 233, 239);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(108, 111, 133);
  text-decoration: rgb(108, 111, 133);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 79, 105);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 111, 133);
  text-decoration: rgb(108, 111, 133);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 111, 133);
  text-decoration: rgb(108, 111, 133);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(108, 111, 133);
  stroke: rgb(108, 111, 133);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(188, 192, 204);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(204, 208, 218);
  border-left-color: rgb(204, 208, 218);
  border-right-color: rgb(204, 208, 218);
  border-top-color: rgb(204, 208, 218);
  color: rgb(108, 111, 133);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
  font-family: "??", Vollkorn, -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(230, 233, 239);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(76, 79, 105);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 79, 105);
  text-decoration: underline dotted rgb(76, 79, 105);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
  font-family: "??", "Nunito Sans", -apple-system, blinkmacsystemfont, "Segoe UI", "Microsoft YaHei Light", roboto, inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(230, 233, 239);
  border-bottom-color: rgb(108, 111, 133);
  border-left-color: rgb(108, 111, 133);
  border-right-color: rgb(108, 111, 133);
  border-top-color: rgb(108, 111, 133);
  color: rgb(108, 111, 133);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 79, 105);
  border-left-color: rgb(76, 79, 105);
  border-right-color: rgb(76, 79, 105);
  border-top-color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 79, 105);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 79, 105);
}`,
  },
};
