import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sqdthone",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cascadia-code", "source-sans-pro"],
    fontFiles: [
      {
        family: "Consolas",
        style: "normal",
        weight: "bold",
        file: "consolas.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Consolas",
        style: "italic",
        weight: "bold",
        file: "consolas-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Consolas",
        style: "italic",
        weight: "normal",
        file: "consolas-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Consolas",
        style: "normal",
        weight: "normal",
        file: "consolas-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Tahoma",
        style: "normal",
        weight: "normal",
        file: "tahoma.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Tahoma",
        style: "normal",
        weight: "bold",
        file: "tahoma-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Cascadia Code",
        style: "normal",
        weight: "normal",
        file: "cascadia-code.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "normal",
        weight: "200",
        file: "source-sans-pro.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "italic",
        weight: "bold",
        file: "source-sans-pro-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "normal",
        weight: "bold",
        file: "source-sans-pro-2.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "normal",
        weight: "900",
        file: "source-sans-pro-3.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "italic",
        weight: "normal",
        file: "source-sans-pro-4.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "italic",
        weight: "200",
        file: "source-sans-pro-5.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "italic",
        weight: "900",
        file: "source-sans-pro-6.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "italic",
        weight: "300",
        file: "source-sans-pro-7.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "normal",
        weight: "600",
        file: "source-sans-pro-8.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "normal",
        weight: "normal",
        file: "source-sans-pro-9.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "italic",
        weight: "600",
        file: "source-sans-pro-10.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Sans Pro",
        style: "normal",
        weight: "300",
        file: "source-sans-pro-11.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: hsl(226, 40%, 56%) !important;
  --background-modifier-error: 346, 50%, 36% !important;
  --background-modifier-error-hover: 346, 50%, 36% !important;
  --background-modifier-success: 108, 40%, 42% !important;
  --background-primary: hsl(300,  6%, 14%) !important;
  --background-primary-alt: hsl(300,  6%, 18%) !important;
  --background-secondary: hsl(300,  6%, 18%) !important;
  --background-secondary-alt: hsl(300,  6%, 22%) !important;
  --bases-cards-background: hsl(300,  6%, 14%) !important;
  --bases-cards-cover-background: hsl(300,  6%, 18%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(226, 40%, 56%) !important;
  --bases-embed-border-color: hsl(226, 40%, 56%) !important;
  --bases-group-heading-property-color: hsl(160, 50%, 46%) !important;
  --bases-table-border-color: hsl(226, 40%, 56%) !important;
  --bases-table-cell-background-active: hsl(300,  6%, 14%) !important;
  --bases-table-cell-background-disabled: hsl(300,  6%, 18%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(226, 40%, 56%) !important;
  --bases-table-group-background: hsl(300,  6%, 18%) !important;
  --bases-table-header-background: hsl(300,  6%, 14%) !important;
  --bases-table-header-color: hsl(160, 50%, 46%) !important;
  --bases-table-summary-background: hsl(300,  6%, 14%) !important;
  --blockquote-border-color: hsl(226, 40%, 56%) !important;
  --bodyFont: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: hsl(300,  6%, 14%) !important;
  --canvas-card-label-color: hsl(168, 50%, 54%) !important;
  --caret-color: hsl(160, 50%, 38%) !important;
  --checkbox-border-color: hsl(168, 50%, 54%) !important;
  --checkbox-border-color-hover: hsl(160, 50%, 46%) !important;
  --checkbox-color: hsl(226, 40%, 56%) !important;
  --checkbox-marker-color: hsl(300,  6%, 14%) !important;
  --checklist-done-color: hsl(160, 50%, 46%) !important;
  --code-background: hsl(300,  6%, 18%) !important;
  --code-border-color: hsl(226, 40%, 56%) !important;
  --code-comment: hsl(168, 50%, 54%) !important;
  --code-function: 45, 50%, 44% !important;
  --code-important: 21, 50%, 52% !important;
  --code-keyword: 316, 50%, 80% !important;
  --code-normal: hsl(160, 50%, 38%) !important;
  --code-operator: 346, 50%, 36% !important;
  --code-property: 189, 40%, 50% !important;
  --code-punctuation: hsl(160, 50%, 46%) !important;
  --code-string: 108, 40%, 42% !important;
  --code-tag: 346, 50%, 36% !important;
  --code-value: 270, 40%, 42% !important;
  --codeFont: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(168, 50%, 54%) !important;
  --color-alternate: 316, 50%, 80% !important;
  --color-base-0: 300,  6%, 10% !important;
  --color-base-1: 300,  6%, 14% !important;
  --color-base-2: 300,  6%, 18% !important;
  --color-base-3: 300,  6%, 22% !important;
  --color-base-4: 300,  6%, 26% !important;
  --color-base-5: 300,  6%, 30% !important;
  --color-black: 300,  6%, 22% !important;
  --color-blue: 226, 40%, 56% !important;
  --color-caution: 45, 50%, 44% !important;
  --color-checklist-empty: 346, 50%, 36% !important;
  --color-checklist-empty-border: 346, 50%, 36% !important;
  --color-checklist-full: 108, 40%, 42% !important;
  --color-checklist-full-border: 108, 40%, 42% !important;
  --color-code-comment: 168, 50%, 54% !important;
  --color-code-function: 45, 50%, 44% !important;
  --color-code-important: 21, 50%, 52% !important;
  --color-code-keyword: 316, 50%, 80% !important;
  --color-code-normal: 160, 50%, 46% !important;
  --color-code-property: 226, 40%, 56% !important;
  --color-code-punctuation: 160, 50%, 46% !important;
  --color-code-string: 108, 40%, 42% !important;
  --color-code-tag: 346, 50%, 36% !important;
  --color-code-value: 270, 40%, 42% !important;
  --color-confirmed: 108, 40%, 42% !important;
  --color-content: 160, 50%, 46% !important;
  --color-cyan: 189, 40%, 50% !important;
  --color-green: 108, 40%, 42% !important;
  --color-horizontal-rule: 316, 50%, 80% !important;
  --color-hovered: 270, 40%, 42% !important;
  --color-interactable: 226, 40%, 56% !important;
  --color-list-bullets: 316, 50%, 80% !important;
  --color-list-indentation-indicator: magenta !important;
  --color-list-indentation-indicator-hover: 316, 50%, 80% !important;
  --color-orange: 21, 50%, 52% !important;
  --color-pink: 316, 50%, 80% !important;
  --color-purple: 270, 40%, 42% !important;
  --color-red: 346, 50%, 36% !important;
  --color-selected: 21, 50%, 52% !important;
  --color-stop: 346, 50%, 36% !important;
  --color-tag: 45, 50%, 44% !important;
  --color-tag-hover: 45, 50%, 44% !important;
  --color-teal: 160, 50%, 46% !important;
  --color-text-bold: 189, 40%, 50% !important;
  --color-text-faint: 168, 50%, 54% !important;
  --color-text-h1: 21, 50%, 52% !important;
  --color-text-h2: 21, 50%, 52% !important;
  --color-text-h3: 226, 40%, 44% !important;
  --color-text-h4: 226, 40%, 44% !important;
  --color-text-h5: 226, 40%, 44% !important;
  --color-text-h6: 226, 40%, 44% !important;
  --color-text-highlight: 15, 20%, 84% !important;
  --color-text-highlight-active-background: 21, 50%, 52% !important;
  --color-text-highlight-background: 45, 50%, 44% !important;
  --color-text-italic: 108, 40%, 42% !important;
  --color-text-muted: 160, 50%, 46% !important;
  --color-text-normal: 160, 50%, 38% !important;
  --color-text-strikethrough: 346, 50%, 36% !important;
  --color-text-title: 316, 50%, 80% !important;
  --color-white: 15, 20%, 84% !important;
  --color-yellow: 45, 50%, 44% !important;
  --crimson0: 346, 50%, 40% !important;
  --crimson1: 346, 50%, 36% !important;
  --crimson2: 346, 50%, 32% !important;
  --crimson3: 346, 50%, 28% !important;
  --crimson4: 346, 50%, 24% !important;
  --crimson5: 346, 50%, 20% !important;
  --dark: hsl(160, 50%, 38%) !important;
  --darkgray: hsl(160, 50%, 38%) !important;
  --day0: 15, 20%, 96% !important;
  --day1: 15, 20%, 92% !important;
  --day2: 15, 20%, 88% !important;
  --day3: 15, 20%, 84% !important;
  --day4: 15, 20%, 80% !important;
  --day5: 15, 20%, 76% !important;
  --default-font: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif !important;
  --divider-color: hsl(226, 40%, 56%) !important;
  --divider-color-hover: hsl(226, 40%, 56%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(226, 40%, 56%), inset 0 0 0 1px hsl(226, 40%, 56%) !important;
  --embed-border-start: 2px solid hsl(226, 40%, 56%) !important;
  --file-header-background: hsl(300,  6%, 14%) !important;
  --file-header-background-focused: hsl(300,  6%, 14%) !important;
  --file-header-font: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: hsl(160, 50%, 38%) !important;
  --font-headings: 'Tahoma', serif !important;
  --font-interface: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-title: 'Jomhuria', 'Source Sans Pro', sans-serif !important;
  --footnote-divider-color: hsl(226, 40%, 56%) !important;
  --footnote-id-color: hsl(160, 50%, 46%) !important;
  --footnote-id-color-no-occurrences: hsl(168, 50%, 54%) !important;
  --frost0: 226, 40%, 44% !important;
  --frost1: 226, 40%, 48% !important;
  --frost2: 226, 40%, 52% !important;
  --frost3: 226, 40%, 56% !important;
  --frost4: 226, 40%, 60% !important;
  --frost5: 226, 40%, 64% !important;
  --graph-node: hsl(160, 50%, 46%) !important;
  --graph-node-attachment: 45, 50%, 44% !important;
  --graph-node-tag: 108, 40%, 42% !important;
  --graph-node-unresolved: hsl(168, 50%, 54%) !important;
  --graph-text: hsl(160, 50%, 38%) !important;
  --gray: hsl(160, 50%, 46%) !important;
  --green0: 108, 40%, 34% !important;
  --green1: 108, 40%, 38% !important;
  --green2: 108, 40%, 42% !important;
  --green3: 108, 40%, 46% !important;
  --green4: 108, 40%, 50% !important;
  --green5: 108, 40%, 54% !important;
  --headerFont: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(168, 50%, 54%) !important;
  --highlight: hsl(45, 50%, 44%) !important;
  --hr-color: hsl(226, 40%, 56%) !important;
  --icon-color: hsl(160, 50%, 46%) !important;
  --icon-color-focused: hsl(160, 50%, 38%) !important;
  --icon-color-hover: hsl(160, 50%, 46%) !important;
  --indigo0: 270, 40%, 30% !important;
  --indigo1: 270, 40%, 34% !important;
  --indigo2: 270, 40%, 38% !important;
  --indigo3: 270, 40%, 42% !important;
  --indigo4: 270, 40%, 46% !important;
  --indigo5: 270, 40%, 50% !important;
  --input-date-separator: hsl(168, 50%, 54%) !important;
  --input-placeholder-color: hsl(168, 50%, 54%) !important;
  --interactive-accent: hsl(226, 40%, 56%) !important;
  --letterspacing-text-headers: 1.2px !important;
  --letterspacing-text-p: 1px !important;
  --light: hsl(300,  6%, 14%) !important;
  --lightgray: hsl(300,  6%, 18%) !important;
  --link-color-hover: hsl(270, 40%, 42%) !important;
  --link-external-color-hover: hsl(270, 40%, 42%) !important;
  --list-marker-color: hsl(168, 50%, 54%) !important;
  --list-marker-color-hover: hsl(160, 50%, 46%) !important;
  --menu-background: hsl(300,  6%, 18%) !important;
  --metadata-border-color: hsl(226, 40%, 56%) !important;
  --metadata-divider-color: hsl(226, 40%, 56%) !important;
  --metadata-input-font: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(160, 50%, 38%) !important;
  --metadata-label-font: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(160, 50%, 46%) !important;
  --metadata-label-text-color-hover: hsl(160, 50%, 46%) !important;
  --modal-background: hsl(300,  6%, 14%) !important;
  --moonstone0: 189, 40%, 34% !important;
  --moonstone1: 189, 40%, 38% !important;
  --moonstone2: 189, 40%, 42% !important;
  --moonstone3: 189, 40%, 46% !important;
  --moonstone4: 189, 40%, 50% !important;
  --moonstone5: 189, 40%, 54% !important;
  --nav-collapse-icon-color: hsl(168, 50%, 54%) !important;
  --nav-collapse-icon-color-collapsed: hsl(168, 50%, 54%) !important;
  --nav-heading-color: hsl(160, 50%, 38%) !important;
  --nav-heading-color-collapsed: hsl(168, 50%, 54%) !important;
  --nav-heading-color-collapsed-hover: hsl(160, 50%, 46%) !important;
  --nav-heading-color-hover: hsl(160, 50%, 38%) !important;
  --nav-item-color: hsl(160, 50%, 46%) !important;
  --nav-item-color-active: hsl(160, 50%, 38%) !important;
  --nav-item-color-hover: hsl(160, 50%, 38%) !important;
  --nav-item-color-selected: hsl(160, 50%, 38%) !important;
  --nav-tag-color: hsl(168, 50%, 54%) !important;
  --nav-tag-color-active: hsl(160, 50%, 46%) !important;
  --nav-tag-color-hover: hsl(160, 50%, 46%) !important;
  --night0: 300,  6%, 10% !important;
  --night1: 300,  6%, 14% !important;
  --night2: 300,  6%, 18% !important;
  --night3: 300,  6%, 22% !important;
  --night4: 300,  6%, 26% !important;
  --night5: 300,  6%, 30% !important;
  --pdf-background: hsl(300,  6%, 14%) !important;
  --pdf-page-background: hsl(300,  6%, 14%) !important;
  --pdf-shadow: 0 0 0 1px hsl(226, 40%, 56%) !important;
  --pdf-sidebar-background: hsl(300,  6%, 14%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(226, 40%, 56%) !important;
  --peach0: 22, 50%, 40% !important;
  --peach1: 22, 50%, 44% !important;
  --peach2: 21, 50%, 48% !important;
  --peach3: 21, 50%, 52% !important;
  --peach4: 21, 50%, 56% !important;
  --peach5: 22, 50%, 60% !important;
  --pill-border-color: hsl(226, 40%, 56%) !important;
  --pill-color: hsl(160, 50%, 46%) !important;
  --pill-color-hover: hsl(160, 50%, 38%) !important;
  --pill-color-remove: hsl(168, 50%, 54%) !important;
  --pink0: 316, 50%, 60% !important;
  --pink1: 316, 50%, 64% !important;
  --pink2: 316, 50%, 68% !important;
  --pink3: 316, 50%, 72% !important;
  --pink4: 315, 50%, 76% !important;
  --pink5: 316, 50%, 80% !important;
  --prompt-background: hsl(300,  6%, 14%) !important;
  --ribbon-background: hsl(300,  6%, 18%) !important;
  --ribbon-background-collapsed: hsl(300,  6%, 14%) !important;
  --scrollbar-active-thumb-bg: hsl(270, 40%, 42%) !important;
  --search-clear-button-color: hsl(160, 50%, 46%) !important;
  --search-icon-color: hsl(160, 50%, 46%) !important;
  --search-result-background: hsl(300,  6%, 14%) !important;
  --secondary: hsl(226, 40%, 56%) !important;
  --setting-group-heading-color: hsl(160, 50%, 38%) !important;
  --setting-items-background: hsl(300,  6%, 18%) !important;
  --setting-items-border-color: hsl(226, 40%, 56%) !important;
  --size-icon: 15px !important;
  --size-text-h1: 3em !important;
  --size-text-h2: 30px !important;
  --size-text-h3: 27px !important;
  --size-text-h4: 24px !important;
  --size-text-h5: 21px !important;
  --size-text-h6: 18px !important;
  --size-text-p: 15px !important;
  --size-text-title: 5em !important;
  --slider-track-background: hsl(226, 40%, 56%) !important;
  --status-bar-background: hsl(300,  6%, 18%) !important;
  --status-bar-border-color: hsl(226, 40%, 56%) !important;
  --status-bar-text-color: hsl(160, 50%, 46%) !important;
  --suggestion-background: hsl(300,  6%, 14%) !important;
  --sync-avatar-color-1: 346, 50%, 36% !important;
  --sync-avatar-color-2: 21, 50%, 52% !important;
  --sync-avatar-color-3: 45, 50%, 44% !important;
  --sync-avatar-color-4: 108, 40%, 42% !important;
  --sync-avatar-color-5: 189, 40%, 50% !important;
  --sync-avatar-color-6: 226, 40%, 56% !important;
  --sync-avatar-color-7: 270, 40%, 42% !important;
  --sync-avatar-color-8: 316, 50%, 80% !important;
  --tab-background-active: hsl(300,  6%, 14%) !important;
  --tab-container-background: hsl(300,  6%, 18%) !important;
  --tab-outline-color: hsl(226, 40%, 56%) !important;
  --tab-switcher-background: hsl(300,  6%, 18%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(300,  6%, 18%), transparent) !important;
  --tab-text-color: hsl(168, 50%, 54%) !important;
  --tab-text-color-active: hsl(270, 40%, 42%) !important;
  --tab-text-color-focused: hsl(160, 50%, 46%) !important;
  --tab-text-color-focused-active: hsl(160, 50%, 46%) !important;
  --tab-text-color-focused-active-current: hsl(21, 50%, 52%) !important;
  --table-add-button-border-color: hsl(226, 40%, 56%) !important;
  --table-border-color: hsl(226, 40%, 56%) !important;
  --table-drag-handle-background-active: hsl(226, 40%, 56%) !important;
  --table-drag-handle-color: hsl(168, 50%, 54%) !important;
  --table-header-border-color: hsl(226, 40%, 56%) !important;
  --table-header-color: hsl(160, 50%, 38%) !important;
  --table-selection-border-color: hsl(226, 40%, 56%) !important;
  --teal0: 160, 50%, 34% !important;
  --teal1: 160, 50%, 38% !important;
  --teal2: 160, 50%, 42% !important;
  --teal3: 160, 50%, 46% !important;
  --teal4: 160, 50%, 50% !important;
  --teal5: 168, 50%, 54% !important;
  --tertiary: hsl(270, 40%, 42%) !important;
  --text-accent-hover: hsl(270, 40%, 42%) !important;
  --text-error: 346, 50%, 36% !important;
  --text-faint: hsl(168, 50%, 54%) !important;
  --text-highlight-bg: hsl(45, 50%, 44%) !important;
  --text-highlight-bg-active: hsl(21, 50%, 52%) !important;
  --text-muted: hsl(160, 50%, 46%) !important;
  --text-normal: hsl(160, 50%, 38%) !important;
  --text-selection: hsl(15, 20%, 84%) !important;
  --text-success: 108, 40%, 42% !important;
  --text-warning: 21, 50%, 52% !important;
  --textHighlight: hsl(45, 50%, 44%) !important;
  --titleFont: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(300,  6%, 22%) !important;
  --titlebar-background-focused: hsl(300,  6%, 18%) !important;
  --titlebar-border-color: hsl(226, 40%, 56%) !important;
  --titlebar-text-color: hsl(160, 50%, 46%) !important;
  --titlebar-text-color-focused: hsl(160, 50%, 38%) !important;
  --vault-profile-color: hsl(160, 50%, 38%) !important;
  --vault-profile-color-hover: hsl(160, 50%, 38%) !important;
  --weight-bold: 700 !important;
  --weight-extrabold: 800 !important;
  --weight-extralight: 200 !important;
  --weight-light: 300 !important;
  --weight-maxbold: 900 !important;
  --weight-medium: 500 !important;
  --weight-normal: 400 !important;
  --weight-semibold: 600 !important;
  --weight-thin: 100 !important;
  --yellow0: 45, 50%, 44% !important;
  --yellow1: 45, 50%, 48% !important;
  --yellow2: 45, 50%, 52% !important;
  --yellow3: 45, 50%, 56% !important;
  --yellow4: 45, 50%, 60% !important;
  --yellow5: 45, 50%, 64% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 43, 49);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(38, 34, 38);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(168, 140, 56);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(59, 53, 59);
  border-color: rgb(98, 119, 188) rgb(59, 176, 137) rgb(59, 176, 137) rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(49, 43, 49);
  border-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(168, 140, 56);
  border-radius: 25px;
  color: rgb(38, 34, 38);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 43, 49);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 43, 49);
  border-left-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(38, 34, 38);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body html {
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 250ms;
  --anim-duration-none: 0;
  --anim-duration-slow: 500ms;
  --anim-duration-superfast: 75ms;
  --crimson0: 346, 50%, 40%;
  --crimson1: 346, 50%, 36%;
  --crimson2: 346, 50%, 32%;
  --crimson3: 346, 50%, 28%;
  --crimson4: 346, 50%, 24%;
  --crimson5: 346, 50%, 20%;
  --day0: 15, 20%, 96%;
  --day1: 15, 20%, 92%;
  --day2: 15, 20%, 88%;
  --day3: 15, 20%, 84%;
  --day4: 15, 20%, 80%;
  --day5: 15, 20%, 76%;
  --default-font: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif;
  --font-default: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif;
  --font-headings: 'Tahoma', serif;
  --font-interface: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif;
  --font-title: 'Jomhuria', 'Source Sans Pro', sans-serif;
  --frost0: 226, 40%, 44%;
  --frost1: 226, 40%, 48%;
  --frost2: 226, 40%, 52%;
  --frost3: 226, 40%, 56%;
  --frost4: 226, 40%, 60%;
  --frost5: 226, 40%, 64%;
  --green0: 108, 40%, 34%;
  --green1: 108, 40%, 38%;
  --green2: 108, 40%, 42%;
  --green3: 108, 40%, 46%;
  --green4: 108, 40%, 50%;
  --green5: 108, 40%, 54%;
  --indigo0: 270, 40%, 30%;
  --indigo1: 270, 40%, 34%;
  --indigo2: 270, 40%, 38%;
  --indigo3: 270, 40%, 42%;
  --indigo4: 270, 40%, 46%;
  --indigo5: 270, 40%, 50%;
  --letterspacing-text-headers: 1.2px;
  --letterspacing-text-p: 1px;
  --moonstone0: 189, 40%, 34%;
  --moonstone1: 189, 40%, 38%;
  --moonstone2: 189, 40%, 42%;
  --moonstone3: 189, 40%, 46%;
  --moonstone4: 189, 40%, 50%;
  --moonstone5: 189, 40%, 54%;
  --night0: 300,  6%, 10%;
  --night1: 300,  6%, 14%;
  --night2: 300,  6%, 18%;
  --night3: 300,  6%, 22%;
  --night4: 300,  6%, 26%;
  --night5: 300,  6%, 30%;
  --peach0: 22, 50%, 40%;
  --peach1: 22, 50%, 44%;
  --peach2: 21, 50%, 48%;
  --peach3: 21, 50%, 52%;
  --peach4: 21, 50%, 56%;
  --peach5: 22, 50%, 60%;
  --pink0: 316, 50%, 60%;
  --pink1: 316, 50%, 64%;
  --pink2: 316, 50%, 68%;
  --pink3: 316, 50%, 72%;
  --pink4: 315, 50%, 76%;
  --pink5: 316, 50%, 80%;
  --size-icon: 15px;
  --size-text-h1: 3em;
  --size-text-h2: 30px;
  --size-text-h3: 27px;
  --size-text-h4: 24px;
  --size-text-h5: 21px;
  --size-text-h6: 18px;
  --size-text-p: 15px;
  --size-text-title: 5em;
  --teal0: 160, 50%, 34%;
  --teal1: 160, 50%, 38%;
  --teal2: 160, 50%, 42%;
  --teal3: 160, 50%, 46%;
  --teal4: 160, 50%, 50%;
  --teal5: 168, 50%, 54%;
  --weight-bold: 700;
  --weight-extrabold: 800;
  --weight-extralight: 200;
  --weight-light: 300;
  --weight-maxbold: 900;
  --weight-medium: 500;
  --weight-normal: 400;
  --weight-semibold: 600;
  --weight-thin: 100;
  --yellow0: 45, 50%, 44%;
  --yellow1: 45, 50%, 48%;
  --yellow2: 45, 50%, 52%;
  --yellow3: 45, 50%, 56%;
  --yellow4: 45, 50%, 60%;
  --yellow5: 45, 50%, 64%;
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(77, 163, 179);
  outline: rgb(77, 163, 179) none 0px;
  text-decoration-color: rgb(77, 163, 179);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration-color: rgb(81, 150, 64);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration-color: rgb(81, 150, 64);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(77, 163, 179);
  outline: rgb(77, 163, 179) none 0px;
  text-decoration-color: rgb(77, 163, 179);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(194, 114, 71);
  color: rgb(222, 210, 206);
  outline: rgb(222, 210, 206) none 0px;
  text-decoration-color: rgb(222, 210, 206);
}

html[saved-theme="dark"] body del {
  color: rgb(138, 46, 67);
  outline: rgb(138, 46, 67) none 0px;
  text-decoration-color: rgb(138, 46, 67);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(79, 196, 173);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(81, 150, 64);
}

html[saved-theme="dark"] body p {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(59, 176, 137) none 0px;
  text-decoration-color: rgb(59, 176, 137);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(230, 179, 216);
  outline: rgb(230, 179, 216) none 0px;
  text-decoration: underline rgb(230, 179, 216);
  text-decoration-color: rgb(230, 179, 216);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(230, 179, 216);
  outline: rgb(230, 179, 216) none 0px;
  text-decoration: underline rgb(230, 179, 216);
  text-decoration-color: rgb(230, 179, 216);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(138, 46, 67);
  outline: rgb(138, 46, 67) none 0px;
  text-decoration: underline rgb(138, 46, 67);
  text-decoration-color: rgb(138, 46, 67);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body dt {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(79, 196, 173);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(168, 140, 56, 0.1);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(168, 140, 56);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgb(168, 140, 56);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(168, 140, 56);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgb(168, 140, 56);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(48, 145, 113);
  width: 277.219px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(49, 43, 49);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(59, 53, 59);
  border-bottom-width: 0px;
  border-left-color: rgb(48, 145, 113);
  border-left-width: 0px;
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  border-top-width: 0px;
  color: rgb(48, 145, 113);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html[saved-theme="dark"] body th {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(48, 145, 113);
  border-left-width: 0px;
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(98, 119, 188);
  border-top-width: 0px;
  color: rgb(48, 145, 113);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html[saved-theme="dark"] body thead {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(59, 176, 137);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(59, 176, 137);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(48, 145, 113);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(194, 114, 71);
  border-left-color: rgb(194, 114, 71);
  border-right-color: rgb(194, 114, 71);
  border-top-color: rgb(194, 114, 71);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(230, 179, 216);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(230, 179, 216);
  border-right-color: rgb(230, 179, 216);
  border-top-color: rgb(230, 179, 216);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.3s;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(79, 196, 173);
  text-decoration: line-through 1px rgb(79, 196, 173);
  text-decoration-color: rgb(79, 196, 173);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(48, 145, 113);
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 14a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 14m0-1.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 14a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 14m0-1.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.29 15.29a1.58 1.58 0 0 0-.12.15a.76.76 0 0 0-.09.18a.64.64 0 0 0-.06.18a1.36 1.36 0 0 0 0 .2a.84.84 0 0 0 .08.38a.9.9 0 0 0 .54.54a.94.94 0 0 0 .76 0a.9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-.29-.71a1 1 0 0 0-1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-13a3 3 0 0 0-2.6 1.5a1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 0 1 0 2a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.29 15.29a1.58 1.58 0 0 0-.12.15a.76.76 0 0 0-.09.18a.64.64 0 0 0-.06.18a1.36 1.36 0 0 0 0 .2a.84.84 0 0 0 .08.38a.9.9 0 0 0 .54.54a.94.94 0 0 0 .76 0a.9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-.29-.71a1 1 0 0 0-1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-13a3 3 0 0 0-2.6 1.5a1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 0 1 0 2a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16L2.86 9a1 1 0 0 0-.81.68a1 1 0 0 0 .25 1l4.13 4l-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67l5.1 2.67a.93.93 0 0 0 .46.12a1 1 0 0 0 .59-.19a1 1 0 0 0 .4-1l-1-5.68l4.13-4A1 1 0 0 0 22 9.67m-6.15 4a1 1 0 0 0-.29.88l.72 4.2l-3.76-2a1.06 1.06 0 0 0-.94 0l-3.76 2l.72-4.2a1 1 0 0 0-.29-.88l-3-3l4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16L2.86 9a1 1 0 0 0-.81.68a1 1 0 0 0 .25 1l4.13 4l-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67l5.1 2.67a.93.93 0 0 0 .46.12a1 1 0 0 0 .59-.19a1 1 0 0 0 .4-1l-1-5.68l4.13-4A1 1 0 0 0 22 9.67m-6.15 4a1 1 0 0 0-.29.88l.72 4.2l-3.76-2a1.06 1.06 0 0 0-.94 0l-3.76 2l.72-4.2a1 1 0 0 0-.29-.88l-3-3l4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2m7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0M16 3a1 1 0 0 0 0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 0 0 2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2m7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0M16 3a1 1 0 0 0 0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 0 0 2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8.29 11.29a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.42-1.42L11.41 13H15a1 1 0 0 0 0-2h-3.59l1.3-1.29a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0ZM2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m18 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8.29 11.29a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.42-1.42L11.41 13H15a1 1 0 0 0 0-2h-3.59l1.3-1.29a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0ZM2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m18 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M15.71 12.71a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H9a1 1 0 0 0 0 2h3.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0ZM22 12a10 10 0 1 0-10 10a10 10 0 0 0 10-10M4 12a8 8 0 1 1 8 8a8 8 0 0 1-8-8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M15.71 12.71a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H9a1 1 0 0 0 0 2h3.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0ZM22 12a10 10 0 1 0-10 10a10 10 0 0 0 10-10M4 12a8 8 0 1 1 8 8a8 8 0 0 1-8-8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M16 2H8a3 3 0 0 0-3 3v16a1 1 0 0 0 .5.87a1 1 0 0 0 1 0l5.5-3.18l5.5 3.18a1 1 0 0 0 .5.13a1 1 0 0 0 .5-.13A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3m1 17.27l-4.5-2.6a1 1 0 0 0-1 0L7 19.27V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M16 2H8a3 3 0 0 0-3 3v16a1 1 0 0 0 .5.87a1 1 0 0 0 1 0l5.5-3.18l5.5 3.18a1 1 0 0 0 .5.13a1 1 0 0 0 .5-.13A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3m1 17.27l-4.5-2.6a1 1 0 0 0-1 0L7 19.27V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 2H6.27a3 3 0 0 0-2.95 2.46l-1.27 7A3 3 0 0 0 5 15h4.56L9 16.43A4.13 4.13 0 0 0 12.89 22a1 1 0 0 0 .91-.59L16.65 15H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-4 11.79l-2.72 6.12a2.13 2.13 0 0 1-1.38-2.78l.53-1.43A2 2 0 0 0 9.56 13H5a1 1 0 0 1-.77-.36a1 1 0 0 1-.23-.82l1.27-7a1 1 0 0 1 1-.82H15ZM20 12a1 1 0 0 1-1 1h-2V4h2a1 1 0 0 1 1 1Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 2H6.27a3 3 0 0 0-2.95 2.46l-1.27 7A3 3 0 0 0 5 15h4.56L9 16.43A4.13 4.13 0 0 0 12.89 22a1 1 0 0 0 .91-.59L16.65 15H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-4 11.79l-2.72 6.12a2.13 2.13 0 0 1-1.38-2.78l.53-1.43A2 2 0 0 0 9.56 13H5a1 1 0 0 1-.77-.36a1 1 0 0 1-.23-.82l1.27-7a1 1 0 0 1 1-.82H15ZM20 12a1 1 0 0 1-1 1h-2V4h2a1 1 0 0 1 1 1Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.29 15.71a1 1 0 0 0 .33.21a1 1 0 0 0 .76 0a1 1 0 0 0 .33-.21l3-3a1 1 0 0 0-1.42-1.42L13 12.59V9a1 1 0 0 0-2 0v3.59l-1.29-1.3a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.42ZM12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10m0-18a8 8 0 1 1-8 8a8 8 0 0 1 8-8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.29 15.71a1 1 0 0 0 .33.21a1 1 0 0 0 .76 0a1 1 0 0 0 .33-.21l3-3a1 1 0 0 0-1.42-1.42L13 12.59V9a1 1 0 0 0-2 0v3.59l-1.29-1.3a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.42ZM12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10m0-18a8 8 0 1 1-8 8a8 8 0 0 1 8-8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m8.468 8.395l-.002.001l-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175a1 1 0 0 0-1.4.411a5.782 5.782 0 0 1-1.398 1.778a8.664 8.664 0 0 0 .134-1.51a8.714 8.714 0 0 0-4.4-7.582a1 1 0 0 0-1.492.806a7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863a8.983 8.983 0 0 0 3.656 13.908a1 1 0 0 0 1.377-.926a1.05 1.05 0 0 0-.05-.312a6.977 6.977 0 0 1-.19-2.581a9.004 9.004 0 0 0 4.313 4.016a.997.997 0 0 0 .715.038a8.995 8.995 0 0 0 3.654-14.863m-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402a8.908 8.908 0 0 1-.18-.964a1 1 0 0 0-.799-.845a.982.982 0 0 0-.191-.018a1 1 0 0 0-.867.5a8.959 8.959 0 0 0-1.205 4.718a6.985 6.985 0 0 1-1.176-9.868a6.555 6.555 0 0 1 1.562-1.458a.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633a6.736 6.736 0 0 1 1.385 8.088a1 1 0 0 0 1.184 1.418a7.856 7.856 0 0 0 3.862-2.688a7 7 0 0 1-3.279 10.457'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m8.468 8.395l-.002.001l-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175a1 1 0 0 0-1.4.411a5.782 5.782 0 0 1-1.398 1.778a8.664 8.664 0 0 0 .134-1.51a8.714 8.714 0 0 0-4.4-7.582a1 1 0 0 0-1.492.806a7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863a8.983 8.983 0 0 0 3.656 13.908a1 1 0 0 0 1.377-.926a1.05 1.05 0 0 0-.05-.312a6.977 6.977 0 0 1-.19-2.581a9.004 9.004 0 0 0 4.313 4.016a.997.997 0 0 0 .715.038a8.995 8.995 0 0 0 3.654-14.863m-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402a8.908 8.908 0 0 1-.18-.964a1 1 0 0 0-.799-.845a.982.982 0 0 0-.191-.018a1 1 0 0 0-.867.5a8.959 8.959 0 0 0-1.205 4.718a6.985 6.985 0 0 1-1.176-9.868a6.555 6.555 0 0 1 1.562-1.458a.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633a6.736 6.736 0 0 1 1.385 8.088a1 1 0 0 0 1.184 1.418a7.856 7.856 0 0 0 3.862-2.688a7 7 0 0 1-3.279 10.457'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-8.5a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m0-4a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 7.5'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-8.5a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m0-4a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 7.5'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m21 4.41l.71-.7a1 1 0 1 0-1.42-1.42l-1.4 1.41l-2.83 2.83l-6.31 6.3a5 5 0 1 0 1.42 1.42l5.59-5.6l2.12 2.13a1 1 0 1 0 1.41-1.42l-2.12-2.12l1.42-1.41l.7.7a1 1 0 1 0 1.42-1.41ZM7 20a3 3 0 1 1 3-3a3 3 0 0 1-3 3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m21 4.41l.71-.7a1 1 0 1 0-1.42-1.42l-1.4 1.41l-2.83 2.83l-6.31 6.3a5 5 0 1 0 1.42 1.42l5.59-5.6l2.12 2.13a1 1 0 1 0 1.41-1.42l-2.12-2.12l1.42-1.41l.7.7a1 1 0 1 0 1.42-1.41ZM7 20a3 3 0 1 1 3-3a3 3 0 0 1-3 3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20.46 9.63A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83m-3.86 5.42l-4.6 4.6l-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0a6.57 6.57 0 0 1 2.89 4.81a6.49 6.49 0 0 1-1.87 5.24M12 6a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 12 6m0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 13'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20.46 9.63A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83m-3.86 5.42l-4.6 4.6l-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0a6.57 6.57 0 0 1 2.89 4.81a6.49 6.49 0 0 1-1.87 5.24M12 6a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 12 6m0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 13'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M14.36 14.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M14.36 14.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12.71 8.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V15a1 1 0 0 0 2 0v-3.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12.71 8.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V15a1 1 0 0 0 2 0v-3.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(48, 145, 113);
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
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(59, 53, 59);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(48, 145, 113);
  outline: rgb(48, 145, 113) none 0px;
  text-decoration-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(49, 43, 49);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(168, 140, 56);
  border-bottom-color: rgb(38, 34, 38);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(38, 34, 38);
}

html[saved-theme="dark"] body h1 {
  color: rgb(194, 114, 71);
  font-family: Tahoma, serif;
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(194, 114, 71);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(230, 179, 216);
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

html[saved-theme="dark"] body h3 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(67, 88, 157);
  font-family: Tahoma, serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(230, 179, 216);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(79, 196, 173);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 900;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(98, 119, 188);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(59, 53, 59);
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(48, 145, 113);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(98, 119, 188);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(98, 119, 188);
  stroke: rgb(98, 119, 188);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(79, 196, 173);
  border-left-color: rgb(79, 196, 173);
  border-right-color: rgb(79, 196, 173);
  border-top-color: rgb(79, 196, 173);
  color: rgb(79, 196, 173);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(79, 196, 173);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(98, 119, 188);
  border-left-color: rgb(98, 119, 188);
  border-right-color: rgb(98, 119, 188);
  border-top-color: rgb(98, 119, 188);
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
  color: rgb(59, 176, 137);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(59, 53, 59);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(48, 145, 113);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(59, 176, 137);
  border-left-color: rgb(59, 176, 137);
  border-right-color: rgb(59, 176, 137);
  border-top-color: rgb(59, 176, 137);
  color: rgb(59, 176, 137);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(49, 43, 49);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(48, 145, 113);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body sub {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body summary {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body sup {
  color: rgb(48, 145, 113);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(168, 140, 56);
  border-bottom-color: rgb(38, 34, 38);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  color: rgb(38, 34, 38);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: hsl(226, 40%, 52%) !important;
  --background-modifier-error: 346, 50%, 32% !important;
  --background-modifier-error-hover: 346, 50%, 32% !important;
  --background-modifier-success: 108, 40%, 42% !important;
  --background-primary: hsl(15, 20%, 92%) !important;
  --background-primary-alt: hsl(15, 20%, 88%) !important;
  --background-secondary: hsl(15, 20%, 88%) !important;
  --background-secondary-alt: hsl(15, 20%, 84%) !important;
  --bases-cards-background: hsl(15, 20%, 92%) !important;
  --bases-cards-cover-background: hsl(15, 20%, 88%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(226, 40%, 52%) !important;
  --bases-embed-border-color: hsl(226, 40%, 52%) !important;
  --bases-group-heading-property-color: hsl(300,  6%, 22%) !important;
  --bases-table-border-color: hsl(226, 40%, 52%) !important;
  --bases-table-cell-background-active: hsl(15, 20%, 92%) !important;
  --bases-table-cell-background-disabled: hsl(15, 20%, 88%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(226, 40%, 52%) !important;
  --bases-table-group-background: hsl(15, 20%, 88%) !important;
  --bases-table-header-background: hsl(15, 20%, 92%) !important;
  --bases-table-header-color: hsl(300,  6%, 22%) !important;
  --bases-table-summary-background: hsl(15, 20%, 92%) !important;
  --blockquote-border-color: hsl(226, 40%, 52%) !important;
  --blur-background: color-mix(in srgb, hsl(15, 20%, 92%) 65%, transparent) linear-gradient(hsl(15, 20%, 92%), color-mix(in srgb, hsl(15, 20%, 92%) 65%, transparent)) !important;
  --bodyFont: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: hsl(15, 20%, 92%) !important;
  --canvas-card-label-color: hsl(300,  6%, 30%) !important;
  --caret-color: hsl(300,  6%, 14%) !important;
  --checkbox-border-color: hsl(300,  6%, 30%) !important;
  --checkbox-border-color-hover: hsl(300,  6%, 22%) !important;
  --checkbox-color: hsl(226, 40%, 52%) !important;
  --checkbox-color-hover: hsl(270, 40%, 38%) !important;
  --checkbox-marker-color: hsl(15, 20%, 92%) !important;
  --checklist-done-color: hsl(300,  6%, 22%) !important;
  --code-background: hsl(15, 20%, 88%) !important;
  --code-border-color: hsl(226, 40%, 52%) !important;
  --code-comment: hsl(300,  6%, 30%) !important;
  --code-function: 45, 50%, 44% !important;
  --code-important: 22, 50%, 40% !important;
  --code-keyword: 316, 50%, 68% !important;
  --code-normal: hsl(300,  6%, 14%) !important;
  --code-operator: 346, 50%, 32% !important;
  --code-property: 189, 40%, 42% !important;
  --code-punctuation: hsl(300,  6%, 22%) !important;
  --code-string: 108, 40%, 42% !important;
  --code-tag: 346, 50%, 32% !important;
  --code-value: 270, 40%, 38% !important;
  --codeFont: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: hsl(300,  6%, 30%) !important;
  --collapse-icon-color-collapsed: hsl(226, 40%, 52%) !important;
  --color-alternate: 316, 50%, 68% !important;
  --color-base-0: 15, 20%, 96% !important;
  --color-base-1: 15, 20%, 92% !important;
  --color-base-2: 15, 20%, 88% !important;
  --color-base-3: 15, 20%, 84% !important;
  --color-base-4: 15, 20%, 80% !important;
  --color-base-5: 15, 20%, 76% !important;
  --color-black: 300,  6%, 18% !important;
  --color-blue: 226, 40%, 52% !important;
  --color-caution: 45, 50%, 44% !important;
  --color-checklist-empty: 346, 50%, 32% !important;
  --color-checklist-empty-border: 346, 50%, 32% !important;
  --color-checklist-full: 108, 40%, 42% !important;
  --color-checklist-full-border: 108, 40%, 42% !important;
  --color-code-comment: 300,  6%, 30% !important;
  --color-code-function: 45, 50%, 44% !important;
  --color-code-important: 22, 50%, 40% !important;
  --color-code-keyword: 316, 50%, 68% !important;
  --color-code-normal: 300,  6%, 22% !important;
  --color-code-property: 226, 40%, 52% !important;
  --color-code-punctuation: 300,  6%, 22% !important;
  --color-code-string: 108, 40%, 42% !important;
  --color-code-tag: 346, 50%, 32% !important;
  --color-code-value: 270, 40%, 38% !important;
  --color-confirmed: 108, 40%, 42% !important;
  --color-content: 160, 50%, 38% !important;
  --color-cyan: 189, 40%, 42% !important;
  --color-green: 108, 40%, 42% !important;
  --color-horizontal-rule: 316, 50%, 68% !important;
  --color-hovered: 270, 40%, 38% !important;
  --color-interactable: 226, 40%, 52% !important;
  --color-list-bullets: 316, 50%, 68% !important;
  --color-list-indentation-indicator: magenta !important;
  --color-list-indentation-indicator-hover: 316, 50%, 68% !important;
  --color-orange: 22, 50%, 40% !important;
  --color-pink: 316, 50%, 68% !important;
  --color-purple: 270, 40%, 38% !important;
  --color-red: 346, 50%, 32% !important;
  --color-selected: 22, 50%, 40% !important;
  --color-stop: 346, 50%, 32% !important;
  --color-tag: 45, 50%, 44% !important;
  --color-tag-hover: 45, 50%, 44% !important;
  --color-teal: 160, 50%, 38% !important;
  --color-text-bold: 189, 40%, 42% !important;
  --color-text-faint: 300,  6%, 30% !important;
  --color-text-h1: 189, 40%, 42% !important;
  --color-text-h2: 189, 40%, 42% !important;
  --color-text-h3: 226, 40%, 52% !important;
  --color-text-h4: 226, 40%, 52% !important;
  --color-text-h5: 226, 40%, 52% !important;
  --color-text-h6: 226, 40%, 52% !important;
  --color-text-highlight: 15, 20%, 88% !important;
  --color-text-highlight-active-background: 22, 50%, 40% !important;
  --color-text-highlight-background: 45, 50%, 44% !important;
  --color-text-italic: 108, 40%, 42% !important;
  --color-text-muted: 300,  6%, 22% !important;
  --color-text-normal: 300,  6%, 14% !important;
  --color-text-strikethrough: 346, 50%, 32% !important;
  --color-text-title: 270, 40%, 38% !important;
  --color-white: 15, 20%, 88% !important;
  --color-yellow: 45, 50%, 44% !important;
  --crimson0: 346, 50%, 40% !important;
  --crimson1: 346, 50%, 36% !important;
  --crimson2: 346, 50%, 32% !important;
  --crimson3: 346, 50%, 28% !important;
  --crimson4: 346, 50%, 24% !important;
  --crimson5: 346, 50%, 20% !important;
  --dark: hsl(300,  6%, 14%) !important;
  --darkgray: hsl(300,  6%, 14%) !important;
  --day0: 15, 20%, 96% !important;
  --day1: 15, 20%, 92% !important;
  --day2: 15, 20%, 88% !important;
  --day3: 15, 20%, 84% !important;
  --day4: 15, 20%, 80% !important;
  --day5: 15, 20%, 76% !important;
  --default-font: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif !important;
  --divider-color: hsl(226, 40%, 52%) !important;
  --divider-color-hover: hsl(226, 40%, 52%) !important;
  --dropdown-background: hsl(15, 20%, 84%) !important;
  --dropdown-background-hover: hsl(270, 40%, 38%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(226, 40%, 52%), inset 0 0 0 1px hsl(226, 40%, 52%) !important;
  --embed-border-start: 2px solid hsl(226, 40%, 52%) !important;
  --file-header-background: hsl(15, 20%, 92%) !important;
  --file-header-background-focused: hsl(15, 20%, 92%) !important;
  --file-header-font: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: hsl(15, 20%, 84%) !important;
  --flair-color: hsl(300,  6%, 14%) !important;
  --font-headings: 'Tahoma', serif !important;
  --font-interface: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-title: 'Jomhuria', 'Source Sans Pro', sans-serif !important;
  --footnote-divider-color: hsl(226, 40%, 52%) !important;
  --footnote-id-color: hsl(300,  6%, 22%) !important;
  --footnote-id-color-no-occurrences: hsl(300,  6%, 30%) !important;
  --frost0: 226, 40%, 44% !important;
  --frost1: 226, 40%, 48% !important;
  --frost2: 226, 40%, 52% !important;
  --frost3: 226, 40%, 56% !important;
  --frost4: 226, 40%, 60% !important;
  --frost5: 226, 40%, 64% !important;
  --graph-node: hsl(300,  6%, 22%) !important;
  --graph-node-attachment: 45, 50%, 44% !important;
  --graph-node-focused: hsl(226, 40%, 52%) !important;
  --graph-node-tag: 108, 40%, 42% !important;
  --graph-node-unresolved: hsl(300,  6%, 30%) !important;
  --graph-text: hsl(300,  6%, 14%) !important;
  --gray: hsl(300,  6%, 22%) !important;
  --green0: 108, 40%, 34% !important;
  --green1: 108, 40%, 38% !important;
  --green2: 108, 40%, 42% !important;
  --green3: 108, 40%, 46% !important;
  --green4: 108, 40%, 50% !important;
  --green5: 108, 40%, 54% !important;
  --headerFont: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(300,  6%, 30%) !important;
  --highlight: hsl(45, 50%, 44%) !important;
  --hr-color: hsl(226, 40%, 52%) !important;
  --icon-color: hsl(300,  6%, 22%) !important;
  --icon-color-active: hsl(226, 40%, 52%) !important;
  --icon-color-focused: hsl(300,  6%, 14%) !important;
  --icon-color-hover: hsl(300,  6%, 22%) !important;
  --indigo0: 270, 40%, 30% !important;
  --indigo1: 270, 40%, 34% !important;
  --indigo2: 270, 40%, 38% !important;
  --indigo3: 270, 40%, 42% !important;
  --indigo4: 270, 40%, 46% !important;
  --indigo5: 270, 40%, 50% !important;
  --input-date-separator: hsl(300,  6%, 30%) !important;
  --input-placeholder-color: hsl(300,  6%, 30%) !important;
  --interactive-accent: hsl(226, 40%, 52%) !important;
  --interactive-accent-hover: hsl(270, 40%, 38%) !important;
  --interactive-hover: hsl(270, 40%, 38%) !important;
  --interactive-normal: hsl(15, 20%, 84%) !important;
  --letterspacing-text-headers: 1.2px !important;
  --letterspacing-text-p: 1px !important;
  --light: hsl(15, 20%, 92%) !important;
  --lightgray: hsl(15, 20%, 88%) !important;
  --link-color: hsl(226, 40%, 52%) !important;
  --link-color-hover: hsl(270, 40%, 38%) !important;
  --link-external-color: hsl(226, 40%, 52%) !important;
  --link-external-color-hover: hsl(270, 40%, 38%) !important;
  --link-unresolved-color: hsl(226, 40%, 52%) !important;
  --list-marker-color: hsl(300,  6%, 30%) !important;
  --list-marker-color-collapsed: hsl(226, 40%, 52%) !important;
  --list-marker-color-hover: hsl(300,  6%, 22%) !important;
  --menu-background: hsl(15, 20%, 88%) !important;
  --metadata-border-color: hsl(226, 40%, 52%) !important;
  --metadata-divider-color: hsl(226, 40%, 52%) !important;
  --metadata-input-font: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(300,  6%, 14%) !important;
  --metadata-label-font: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(300,  6%, 22%) !important;
  --metadata-label-text-color-hover: hsl(300,  6%, 22%) !important;
  --modal-background: hsl(15, 20%, 92%) !important;
  --moonstone0: 189, 40%, 34% !important;
  --moonstone1: 189, 40%, 38% !important;
  --moonstone2: 189, 40%, 42% !important;
  --moonstone3: 189, 40%, 46% !important;
  --moonstone4: 189, 40%, 50% !important;
  --moonstone5: 189, 40%, 54% !important;
  --nav-collapse-icon-color: hsl(300,  6%, 30%) !important;
  --nav-collapse-icon-color-collapsed: hsl(300,  6%, 30%) !important;
  --nav-heading-color: hsl(300,  6%, 14%) !important;
  --nav-heading-color-collapsed: hsl(300,  6%, 30%) !important;
  --nav-heading-color-collapsed-hover: hsl(300,  6%, 22%) !important;
  --nav-heading-color-hover: hsl(300,  6%, 14%) !important;
  --nav-item-color: hsl(300,  6%, 22%) !important;
  --nav-item-color-active: hsl(300,  6%, 14%) !important;
  --nav-item-color-highlighted: hsl(226, 40%, 52%) !important;
  --nav-item-color-hover: hsl(300,  6%, 14%) !important;
  --nav-item-color-selected: hsl(300,  6%, 14%) !important;
  --nav-tag-color: hsl(300,  6%, 30%) !important;
  --nav-tag-color-active: hsl(300,  6%, 22%) !important;
  --nav-tag-color-hover: hsl(300,  6%, 22%) !important;
  --night0: 300,  6%, 10% !important;
  --night1: 300,  6%, 14% !important;
  --night2: 300,  6%, 18% !important;
  --night3: 300,  6%, 22% !important;
  --night4: 300,  6%, 26% !important;
  --night5: 300,  6%, 30% !important;
  --pdf-background: hsl(15, 20%, 92%) !important;
  --pdf-page-background: hsl(15, 20%, 92%) !important;
  --pdf-sidebar-background: hsl(15, 20%, 92%) !important;
  --peach0: 22, 50%, 40% !important;
  --peach1: 22, 50%, 44% !important;
  --peach2: 21, 50%, 48% !important;
  --peach3: 21, 50%, 52% !important;
  --peach4: 21, 50%, 56% !important;
  --peach5: 22, 50%, 60% !important;
  --pill-border-color: hsl(226, 40%, 52%) !important;
  --pill-color: hsl(300,  6%, 22%) !important;
  --pill-color-hover: hsl(300,  6%, 14%) !important;
  --pill-color-remove: hsl(300,  6%, 30%) !important;
  --pill-color-remove-hover: hsl(226, 40%, 52%) !important;
  --pink0: 316, 50%, 60% !important;
  --pink1: 316, 50%, 64% !important;
  --pink2: 316, 50%, 68% !important;
  --pink3: 316, 50%, 72% !important;
  --pink4: 315, 50%, 76% !important;
  --pink5: 316, 50%, 80% !important;
  --prompt-background: hsl(15, 20%, 92%) !important;
  --raised-background: color-mix(in srgb, hsl(15, 20%, 92%) 65%, transparent) linear-gradient(hsl(15, 20%, 92%), color-mix(in srgb, hsl(15, 20%, 92%) 65%, transparent)) !important;
  --ribbon-background: hsl(15, 20%, 88%) !important;
  --ribbon-background-collapsed: hsl(15, 20%, 92%) !important;
  --scrollbar-active-thumb-bg: hsl(270, 40%, 38%) !important;
  --search-clear-button-color: hsl(300,  6%, 22%) !important;
  --search-icon-color: hsl(300,  6%, 22%) !important;
  --search-result-background: hsl(15, 20%, 92%) !important;
  --secondary: hsl(226, 40%, 52%) !important;
  --setting-group-heading-color: hsl(300,  6%, 14%) !important;
  --setting-items-background: hsl(15, 20%, 88%) !important;
  --setting-items-border-color: hsl(226, 40%, 52%) !important;
  --size-icon: 15px !important;
  --size-text-h1: 3em !important;
  --size-text-h2: 30px !important;
  --size-text-h3: 27px !important;
  --size-text-h4: 24px !important;
  --size-text-h5: 21px !important;
  --size-text-h6: 18px !important;
  --size-text-p: 15px !important;
  --size-text-title: 5em !important;
  --slider-track-background: hsl(226, 40%, 52%) !important;
  --status-bar-background: hsl(15, 20%, 88%) !important;
  --status-bar-border-color: hsl(226, 40%, 52%) !important;
  --status-bar-text-color: hsl(300,  6%, 22%) !important;
  --suggestion-background: hsl(15, 20%, 92%) !important;
  --sync-avatar-color-1: 346, 50%, 32% !important;
  --sync-avatar-color-2: 22, 50%, 40% !important;
  --sync-avatar-color-3: 45, 50%, 44% !important;
  --sync-avatar-color-4: 108, 40%, 42% !important;
  --sync-avatar-color-5: 189, 40%, 42% !important;
  --sync-avatar-color-6: 226, 40%, 52% !important;
  --sync-avatar-color-7: 270, 40%, 38% !important;
  --sync-avatar-color-8: 316, 50%, 68% !important;
  --tab-background-active: hsl(15, 20%, 92%) !important;
  --tab-container-background: hsl(15, 20%, 88%) !important;
  --tab-outline-color: hsl(226, 40%, 52%) !important;
  --tab-switcher-background: hsl(15, 20%, 88%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(15, 20%, 88%), transparent) !important;
  --tab-text-color: hsl(300,  6%, 30%) !important;
  --tab-text-color-active: hsl(270, 40%, 38%) !important;
  --tab-text-color-focused: hsl(300,  6%, 22%) !important;
  --tab-text-color-focused-active: hsl(300,  6%, 22%) !important;
  --tab-text-color-focused-active-current: hsl(22, 50%, 40%) !important;
  --tab-text-color-focused-highlighted: hsl(226, 40%, 52%) !important;
  --table-add-button-border-color: hsl(226, 40%, 52%) !important;
  --table-border-color: hsl(226, 40%, 52%) !important;
  --table-drag-handle-background-active: hsl(226, 40%, 52%) !important;
  --table-drag-handle-color: hsl(300,  6%, 30%) !important;
  --table-header-border-color: hsl(226, 40%, 52%) !important;
  --table-header-color: hsl(300,  6%, 14%) !important;
  --table-selection-border-color: hsl(226, 40%, 52%) !important;
  --tag-color: hsl(226, 40%, 52%) !important;
  --tag-color-hover: hsl(226, 40%, 52%) !important;
  --teal0: 160, 50%, 34% !important;
  --teal1: 160, 50%, 38% !important;
  --teal2: 160, 50%, 42% !important;
  --teal3: 160, 50%, 46% !important;
  --teal4: 160, 50%, 50% !important;
  --teal5: 168, 50%, 54% !important;
  --tertiary: hsl(270, 40%, 38%) !important;
  --text-accent: hsl(226, 40%, 52%) !important;
  --text-accent-hover: hsl(270, 40%, 38%) !important;
  --text-error: 346, 50%, 32% !important;
  --text-faint: hsl(300,  6%, 30%) !important;
  --text-highlight-bg: hsl(45, 50%, 44%) !important;
  --text-highlight-bg-active: hsl(22, 50%, 40%) !important;
  --text-muted: hsl(300,  6%, 22%) !important;
  --text-normal: hsl(300,  6%, 14%) !important;
  --text-selection: hsl(45, 50%, 44%) !important;
  --text-success: 108, 40%, 42% !important;
  --text-warning: 22, 50%, 40% !important;
  --textHighlight: hsl(45, 50%, 44%) !important;
  --titleFont: Consolas, Source Sans Pro, Segoe UI Emoji, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(15, 20%, 84%) !important;
  --titlebar-background-focused: hsl(15, 20%, 88%) !important;
  --titlebar-border-color: hsl(226, 40%, 52%) !important;
  --titlebar-text-color: hsl(300,  6%, 22%) !important;
  --titlebar-text-color-focused: hsl(300,  6%, 14%) !important;
  --vault-profile-color: hsl(300,  6%, 14%) !important;
  --vault-profile-color-hover: hsl(300,  6%, 14%) !important;
  --weight-bold: 700 !important;
  --weight-extrabold: 800 !important;
  --weight-extralight: 200 !important;
  --weight-light: 300 !important;
  --weight-maxbold: 900 !important;
  --weight-medium: 500 !important;
  --weight-normal: 400 !important;
  --weight-semibold: 600 !important;
  --weight-thin: 100 !important;
  --yellow0: 45, 50%, 44% !important;
  --yellow1: 45, 50%, 48% !important;
  --yellow2: 45, 50%, 52% !important;
  --yellow3: 45, 50%, 56% !important;
  --yellow4: 45, 50%, 60% !important;
  --yellow5: 45, 50%, 64% !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(231, 221, 218);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 233, 231);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(168, 140, 56);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(222, 210, 206);
  border-color: rgb(84, 106, 182) rgb(48, 145, 113) rgb(48, 145, 113) rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(231, 221, 218);
  border-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(84, 106, 182);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(168, 140, 56);
  border-radius: 25px;
  color: rgb(239, 233, 231);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(231, 221, 218);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(84, 106, 182);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(231, 221, 218);
  border-left-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 233, 231);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body html {
  --anim-duration-fast: 150ms;
  --anim-duration-moderate: 250ms;
  --anim-duration-none: 0;
  --anim-duration-slow: 500ms;
  --anim-duration-superfast: 75ms;
  --crimson0: 346, 50%, 40%;
  --crimson1: 346, 50%, 36%;
  --crimson2: 346, 50%, 32%;
  --crimson3: 346, 50%, 28%;
  --crimson4: 346, 50%, 24%;
  --crimson5: 346, 50%, 20%;
  --day0: 15, 20%, 96%;
  --day1: 15, 20%, 92%;
  --day2: 15, 20%, 88%;
  --day3: 15, 20%, 84%;
  --day4: 15, 20%, 80%;
  --day5: 15, 20%, 76%;
  --default-font: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif;
  --font-default: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif;
  --font-headings: 'Tahoma', serif;
  --font-interface: 'Consolas', 'Source Sans Pro', 'Segoe UI Emoji', sans-serif;
  --font-title: 'Jomhuria', 'Source Sans Pro', sans-serif;
  --frost0: 226, 40%, 44%;
  --frost1: 226, 40%, 48%;
  --frost2: 226, 40%, 52%;
  --frost3: 226, 40%, 56%;
  --frost4: 226, 40%, 60%;
  --frost5: 226, 40%, 64%;
  --green0: 108, 40%, 34%;
  --green1: 108, 40%, 38%;
  --green2: 108, 40%, 42%;
  --green3: 108, 40%, 46%;
  --green4: 108, 40%, 50%;
  --green5: 108, 40%, 54%;
  --indigo0: 270, 40%, 30%;
  --indigo1: 270, 40%, 34%;
  --indigo2: 270, 40%, 38%;
  --indigo3: 270, 40%, 42%;
  --indigo4: 270, 40%, 46%;
  --indigo5: 270, 40%, 50%;
  --letterspacing-text-headers: 1.2px;
  --letterspacing-text-p: 1px;
  --moonstone0: 189, 40%, 34%;
  --moonstone1: 189, 40%, 38%;
  --moonstone2: 189, 40%, 42%;
  --moonstone3: 189, 40%, 46%;
  --moonstone4: 189, 40%, 50%;
  --moonstone5: 189, 40%, 54%;
  --night0: 300,  6%, 10%;
  --night1: 300,  6%, 14%;
  --night2: 300,  6%, 18%;
  --night3: 300,  6%, 22%;
  --night4: 300,  6%, 26%;
  --night5: 300,  6%, 30%;
  --peach0: 22, 50%, 40%;
  --peach1: 22, 50%, 44%;
  --peach2: 21, 50%, 48%;
  --peach3: 21, 50%, 52%;
  --peach4: 21, 50%, 56%;
  --peach5: 22, 50%, 60%;
  --pink0: 316, 50%, 60%;
  --pink1: 316, 50%, 64%;
  --pink2: 316, 50%, 68%;
  --pink3: 316, 50%, 72%;
  --pink4: 315, 50%, 76%;
  --pink5: 316, 50%, 80%;
  --size-icon: 15px;
  --size-text-h1: 3em;
  --size-text-h2: 30px;
  --size-text-h3: 27px;
  --size-text-h4: 24px;
  --size-text-h5: 21px;
  --size-text-h6: 18px;
  --size-text-p: 15px;
  --size-text-title: 5em;
  --teal0: 160, 50%, 34%;
  --teal1: 160, 50%, 38%;
  --teal2: 160, 50%, 42%;
  --teal3: 160, 50%, 46%;
  --teal4: 160, 50%, 50%;
  --teal5: 168, 50%, 54%;
  --weight-bold: 700;
  --weight-extrabold: 800;
  --weight-extralight: 200;
  --weight-light: 300;
  --weight-maxbold: 900;
  --weight-medium: 500;
  --weight-normal: 400;
  --weight-semibold: 600;
  --weight-thin: 100;
  --yellow0: 45, 50%, 44%;
  --yellow1: 45, 50%, 48%;
  --yellow2: 45, 50%, 52%;
  --yellow3: 45, 50%, 56%;
  --yellow4: 45, 50%, 60%;
  --yellow5: 45, 50%, 64%;
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(64, 137, 150);
  outline: rgb(64, 137, 150) none 0px;
  text-decoration-color: rgb(64, 137, 150);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration-color: rgb(81, 150, 64);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(81, 150, 64);
  outline: rgb(81, 150, 64) none 0px;
  text-decoration-color: rgb(81, 150, 64);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(64, 137, 150);
  outline: rgb(64, 137, 150) none 0px;
  text-decoration-color: rgb(64, 137, 150);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(153, 88, 51);
  color: rgb(231, 221, 218);
  outline: rgb(231, 221, 218) none 0px;
  text-decoration-color: rgb(231, 221, 218);
}

html[saved-theme="light"] body del {
  color: rgb(122, 41, 60);
  outline: rgb(122, 41, 60) none 0px;
  text-decoration-color: rgb(122, 41, 60);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(81, 72, 81);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(81, 150, 64);
}

html[saved-theme="light"] body p {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(59, 53, 59) none 0px;
  text-decoration-color: rgb(59, 53, 59);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(214, 133, 192);
  outline: rgb(214, 133, 192) none 0px;
  text-decoration: underline rgb(214, 133, 192);
  text-decoration-color: rgb(214, 133, 192);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 133, 192);
  outline: rgb(214, 133, 192) none 0px;
  text-decoration: underline rgb(214, 133, 192);
  text-decoration-color: rgb(214, 133, 192);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(122, 41, 60);
  outline: rgb(122, 41, 60) none 0px;
  text-decoration: underline rgb(122, 41, 60);
  text-decoration-color: rgb(122, 41, 60);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body dt {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(81, 72, 81);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(168, 140, 56, 0.1);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(168, 140, 56);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgb(168, 140, 56);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(168, 140, 56);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgb(168, 140, 56);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(38, 34, 38);
  width: 277.219px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(231, 221, 218);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(222, 210, 206);
  border-bottom-width: 0px;
  border-left-color: rgb(38, 34, 38);
  border-left-width: 0px;
  border-right-color: rgb(222, 210, 206);
  border-top-color: rgb(222, 210, 206);
  border-top-width: 0px;
  color: rgb(38, 34, 38);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html[saved-theme="light"] body th {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(38, 34, 38);
  border-left-width: 0px;
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(84, 106, 182);
  border-top-width: 0px;
  color: rgb(38, 34, 38);
  padding-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
}

html[saved-theme="light"] body thead {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(48, 145, 113);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(48, 145, 113);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(48, 145, 113);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(48, 145, 113);
  border-top-color: rgb(38, 34, 38);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(64, 137, 150);
  border-left-color: rgb(64, 137, 150);
  border-right-color: rgb(64, 137, 150);
  border-top-color: rgb(64, 137, 150);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(214, 133, 192);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(214, 133, 192);
  border-right-color: rgb(214, 133, 192);
  border-top-color: rgb(214, 133, 192);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  transition: 0.3s;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(81, 72, 81);
  text-decoration: line-through 1px rgb(81, 72, 81);
  text-decoration-color: rgb(81, 72, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 34, 38);
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 14a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 14m0-1.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 14a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 14m0-1.5a1 1 0 0 0 1-1v-3a1 1 0 0 0-2 0v3a1 1 0 0 0 1 1M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.29 15.29a1.58 1.58 0 0 0-.12.15a.76.76 0 0 0-.09.18a.64.64 0 0 0-.06.18a1.36 1.36 0 0 0 0 .2a.84.84 0 0 0 .08.38a.9.9 0 0 0 .54.54a.94.94 0 0 0 .76 0a.9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-.29-.71a1 1 0 0 0-1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-13a3 3 0 0 0-2.6 1.5a1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 0 1 0 2a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.29 15.29a1.58 1.58 0 0 0-.12.15a.76.76 0 0 0-.09.18a.64.64 0 0 0-.06.18a1.36 1.36 0 0 0 0 .2a.84.84 0 0 0 .08.38a.9.9 0 0 0 .54.54a.94.94 0 0 0 .76 0a.9.9 0 0 0 .54-.54A1 1 0 0 0 13 16a1 1 0 0 0-.29-.71a1 1 0 0 0-1.42 0M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-13a3 3 0 0 0-2.6 1.5a1 1 0 1 0 1.73 1A1 1 0 0 1 12 9a1 1 0 0 1 0 2a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0v-.18A3 3 0 0 0 12 7'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16L2.86 9a1 1 0 0 0-.81.68a1 1 0 0 0 .25 1l4.13 4l-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67l5.1 2.67a.93.93 0 0 0 .46.12a1 1 0 0 0 .59-.19a1 1 0 0 0 .4-1l-1-5.68l4.13-4A1 1 0 0 0 22 9.67m-6.15 4a1 1 0 0 0-.29.88l.72 4.2l-3.76-2a1.06 1.06 0 0 0-.94 0l-3.76 2l.72-4.2a1 1 0 0 0-.29-.88l-3-3l4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M22 9.67a1 1 0 0 0-.86-.67l-5.69-.83L12.9 3a1 1 0 0 0-1.8 0L8.55 8.16L2.86 9a1 1 0 0 0-.81.68a1 1 0 0 0 .25 1l4.13 4l-1 5.68a1 1 0 0 0 1.47 1.08l5.1-2.67l5.1 2.67a.93.93 0 0 0 .46.12a1 1 0 0 0 .59-.19a1 1 0 0 0 .4-1l-1-5.68l4.13-4A1 1 0 0 0 22 9.67m-6.15 4a1 1 0 0 0-.29.88l.72 4.2l-3.76-2a1.06 1.06 0 0 0-.94 0l-3.76 2l.72-4.2a1 1 0 0 0-.29-.88l-3-3l4.21-.61a1 1 0 0 0 .76-.55L12 5.7l1.88 3.82a1 1 0 0 0 .76.55l4.21.61Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2m7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0M16 3a1 1 0 0 0 0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 0 0 2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2m7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0M16 3a1 1 0 0 0 0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 0 0 2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8m4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8.29 11.29a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.42-1.42L11.41 13H15a1 1 0 0 0 0-2h-3.59l1.3-1.29a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0ZM2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m18 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M8.29 11.29a1 1 0 0 0-.21.33a1 1 0 0 0 0 .76a1 1 0 0 0 .21.33l3 3a1 1 0 0 0 1.42-1.42L11.41 13H15a1 1 0 0 0 0-2h-3.59l1.3-1.29a1 1 0 0 0 0-1.42a1 1 0 0 0-1.42 0ZM2 12A10 10 0 1 0 12 2A10 10 0 0 0 2 12m18 0a8 8 0 1 1-8-8a8 8 0 0 1 8 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M15.71 12.71a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H9a1 1 0 0 0 0 2h3.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0ZM22 12a10 10 0 1 0-10 10a10 10 0 0 0 10-10M4 12a8 8 0 1 1 8 8a8 8 0 0 1-8-8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M15.71 12.71a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-3-3a1 1 0 0 0-1.42 1.42l1.3 1.29H9a1 1 0 0 0 0 2h3.59l-1.3 1.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0ZM22 12a10 10 0 1 0-10 10a10 10 0 0 0 10-10M4 12a8 8 0 1 1 8 8a8 8 0 0 1-8-8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M16 2H8a3 3 0 0 0-3 3v16a1 1 0 0 0 .5.87a1 1 0 0 0 1 0l5.5-3.18l5.5 3.18a1 1 0 0 0 .5.13a1 1 0 0 0 .5-.13A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3m1 17.27l-4.5-2.6a1 1 0 0 0-1 0L7 19.27V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M16 2H8a3 3 0 0 0-3 3v16a1 1 0 0 0 .5.87a1 1 0 0 0 1 0l5.5-3.18l5.5 3.18a1 1 0 0 0 .5.13a1 1 0 0 0 .5-.13A1 1 0 0 0 19 21V5a3 3 0 0 0-3-3m1 17.27l-4.5-2.6a1 1 0 0 0-1 0L7 19.27V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 2H6.27a3 3 0 0 0-2.95 2.46l-1.27 7A3 3 0 0 0 5 15h4.56L9 16.43A4.13 4.13 0 0 0 12.89 22a1 1 0 0 0 .91-.59L16.65 15H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-4 11.79l-2.72 6.12a2.13 2.13 0 0 1-1.38-2.78l.53-1.43A2 2 0 0 0 9.56 13H5a1 1 0 0 1-.77-.36a1 1 0 0 1-.23-.82l1.27-7a1 1 0 0 1 1-.82H15ZM20 12a1 1 0 0 1-1 1h-2V4h2a1 1 0 0 1 1 1Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 2H6.27a3 3 0 0 0-2.95 2.46l-1.27 7A3 3 0 0 0 5 15h4.56L9 16.43A4.13 4.13 0 0 0 12.89 22a1 1 0 0 0 .91-.59L16.65 15H19a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-4 11.79l-2.72 6.12a2.13 2.13 0 0 1-1.38-2.78l.53-1.43A2 2 0 0 0 9.56 13H5a1 1 0 0 1-.77-.36a1 1 0 0 1-.23-.82l1.27-7a1 1 0 0 1 1-.82H15ZM20 12a1 1 0 0 1-1 1h-2V4h2a1 1 0 0 1 1 1Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.29 15.71a1 1 0 0 0 .33.21a1 1 0 0 0 .76 0a1 1 0 0 0 .33-.21l3-3a1 1 0 0 0-1.42-1.42L13 12.59V9a1 1 0 0 0-2 0v3.59l-1.29-1.3a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.42ZM12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10m0-18a8 8 0 1 1-8 8a8 8 0 0 1 8-8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M11.29 15.71a1 1 0 0 0 .33.21a1 1 0 0 0 .76 0a1 1 0 0 0 .33-.21l3-3a1 1 0 0 0-1.42-1.42L13 12.59V9a1 1 0 0 0-2 0v3.59l-1.29-1.3a1 1 0 0 0-1.42 0a1 1 0 0 0 0 1.42ZM12 22A10 10 0 1 0 2 12a10 10 0 0 0 10 10m0-18a8 8 0 1 1-8 8a8 8 0 0 1 8-8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m8.468 8.395l-.002.001l-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175a1 1 0 0 0-1.4.411a5.782 5.782 0 0 1-1.398 1.778a8.664 8.664 0 0 0 .134-1.51a8.714 8.714 0 0 0-4.4-7.582a1 1 0 0 0-1.492.806a7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863a8.983 8.983 0 0 0 3.656 13.908a1 1 0 0 0 1.377-.926a1.05 1.05 0 0 0-.05-.312a6.977 6.977 0 0 1-.19-2.581a9.004 9.004 0 0 0 4.313 4.016a.997.997 0 0 0 .715.038a8.995 8.995 0 0 0 3.654-14.863m-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402a8.908 8.908 0 0 1-.18-.964a1 1 0 0 0-.799-.845a.982.982 0 0 0-.191-.018a1 1 0 0 0-.867.5a8.959 8.959 0 0 0-1.205 4.718a6.985 6.985 0 0 1-1.176-9.868a6.555 6.555 0 0 1 1.562-1.458a.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633a6.736 6.736 0 0 1 1.385 8.088a1 1 0 0 0 1.184 1.418a7.856 7.856 0 0 0 3.862-2.688a7 7 0 0 1-3.279 10.457'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m8.468 8.395l-.002.001l-.003.002Zm9.954-.187a1.237 1.237 0 0 0-.23-.175a1 1 0 0 0-1.4.411a5.782 5.782 0 0 1-1.398 1.778a8.664 8.664 0 0 0 .134-1.51a8.714 8.714 0 0 0-4.4-7.582a1 1 0 0 0-1.492.806a7.017 7.017 0 0 1-2.471 4.942l-.23.187a8.513 8.513 0 0 0-1.988 1.863a8.983 8.983 0 0 0 3.656 13.908a1 1 0 0 0 1.377-.926a1.05 1.05 0 0 0-.05-.312a6.977 6.977 0 0 1-.19-2.581a9.004 9.004 0 0 0 4.313 4.016a.997.997 0 0 0 .715.038a8.995 8.995 0 0 0 3.654-14.863m-3.905 12.831a6.964 6.964 0 0 1-3.577-4.402a8.908 8.908 0 0 1-.18-.964a1 1 0 0 0-.799-.845a.982.982 0 0 0-.191-.018a1 1 0 0 0-.867.5a8.959 8.959 0 0 0-1.205 4.718a6.985 6.985 0 0 1-1.176-9.868a6.555 6.555 0 0 1 1.562-1.458a.745.745 0 0 0 .075-.055s.296-.245.306-.25a8.968 8.968 0 0 0 2.9-4.633a6.736 6.736 0 0 1 1.385 8.088a1 1 0 0 0 1.184 1.418a7.856 7.856 0 0 0 3.862-2.688a7 7 0 0 1-3.279 10.457'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-8.5a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m0-4a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 7.5'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-8.5a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0v-3a1 1 0 0 0-1-1m0-4a1.25 1.25 0 1 0 1.25 1.25A1.25 1.25 0 0 0 12 7.5'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m21 4.41l.71-.7a1 1 0 1 0-1.42-1.42l-1.4 1.41l-2.83 2.83l-6.31 6.3a5 5 0 1 0 1.42 1.42l5.59-5.6l2.12 2.13a1 1 0 1 0 1.41-1.42l-2.12-2.12l1.42-1.41l.7.7a1 1 0 1 0 1.42-1.41ZM7 20a3 3 0 1 1 3-3a3 3 0 0 1-3 3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m21 4.41l.71-.7a1 1 0 1 0-1.42-1.42l-1.4 1.41l-2.83 2.83l-6.31 6.3a5 5 0 1 0 1.42 1.42l5.59-5.6l2.12 2.13a1 1 0 1 0 1.41-1.42l-2.12-2.12l1.42-1.41l.7.7a1 1 0 1 0 1.42-1.41ZM7 20a3 3 0 1 1 3-3a3 3 0 0 1-3 3'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20.46 9.63A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83m-3.86 5.42l-4.6 4.6l-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0a6.57 6.57 0 0 1 2.89 4.81a6.49 6.49 0 0 1-1.87 5.24M12 6a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 12 6m0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 13'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M20.46 9.63A8.5 8.5 0 0 0 7.3 3.36a8.56 8.56 0 0 0-3.76 6.27A8.46 8.46 0 0 0 6 16.46l5.3 5.31a1 1 0 0 0 1.42 0L18 16.46a8.46 8.46 0 0 0 2.46-6.83m-3.86 5.42l-4.6 4.6l-4.6-4.6a6.49 6.49 0 0 1-1.87-5.22A6.57 6.57 0 0 1 8.42 5a6.47 6.47 0 0 1 7.16 0a6.57 6.57 0 0 1 2.89 4.81a6.49 6.49 0 0 1-1.87 5.24M12 6a4.5 4.5 0 1 0 4.5 4.5A4.51 4.51 0 0 0 12 6m0 7a2.5 2.5 0 1 1 2.5-2.5A2.5 2.5 0 0 1 12 13'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M21.3 10.08A3 3 0 0 0 19 9h-4.56L15 7.57A4.13 4.13 0 0 0 11.11 2a1 1 0 0 0-.91.59L7.35 9H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h12.73a3 3 0 0 0 2.95-2.46l1.27-7a3 3 0 0 0-.65-2.46M7 20H5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h2Zm13-7.82l-1.27 7a1 1 0 0 1-1 .82H9v-9.79l2.72-6.12a2.11 2.11 0 0 1 1.38 2.78l-.53 1.43a2 2 0 0 0 1.87 2.7H19a1 1 0 0 1 .77.36a1 1 0 0 1 .23.82'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M14.36 14.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M14.36 14.23a3.76 3.76 0 0 1-4.72 0a1 1 0 0 0-1.28 1.54a5.68 5.68 0 0 0 7.28 0a1 1 0 1 0-1.28-1.54M9 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m6-2a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-3-7a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12.71 8.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V15a1 1 0 0 0 2 0v-3.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M12.71 8.29a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-3 3a1 1 0 0 0 1.42 1.42l1.29-1.3V15a1 1 0 0 0 2 0v-3.59l1.29 1.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42ZM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8a8 8 0 0 1-8 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(38, 34, 38);
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
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(222, 210, 206);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(38, 34, 38);
  outline: rgb(38, 34, 38) none 0px;
  text-decoration-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(231, 221, 218);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(168, 140, 56);
  border-bottom-color: rgb(239, 233, 231);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgb(239, 233, 231);
  border-right-color: rgb(239, 233, 231);
  border-top-color: rgb(239, 233, 231);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(239, 233, 231);
}

html[saved-theme="light"] body h1 {
  color: rgb(64, 137, 150);
  font-family: Tahoma, serif;
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

html[saved-theme="light"] body h2 {
  color: rgb(64, 137, 150);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(97, 58, 136);
  text-shadow: rgba(0, 0, 0, 0.05) 1px 1px 0px, rgba(0, 0, 0, 0.05) 2px 2px 0px, rgba(0, 0, 0, 0.05) 3px 3px 0px, rgba(0, 0, 0, 0.05) 4px 4px 0px, rgba(0, 0, 0, 0.05) 5px 5px 0px, rgba(0, 0, 0, 0.05) 6px 6px 0px, rgba(0, 0, 0, 0.05) 7px 7px 0px, rgba(0, 0, 0, 0.05) 8px 8px 0px, rgba(0, 0, 0, 0.05) 9px 9px 0px;
}

html[saved-theme="light"] body h3 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(84, 106, 182);
  font-family: Tahoma, serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(214, 133, 192);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 900;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(81, 72, 81);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 900;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(84, 106, 182);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(222, 210, 206);
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(38, 34, 38);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 3px;
  color: rgb(84, 106, 182);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(84, 106, 182);
  stroke: rgb(84, 106, 182);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(81, 72, 81);
  border-left-color: rgb(81, 72, 81);
  border-right-color: rgb(81, 72, 81);
  border-top-color: rgb(81, 72, 81);
  color: rgb(81, 72, 81);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(81, 72, 81);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(84, 106, 182);
  border-left-color: rgb(84, 106, 182);
  border-right-color: rgb(84, 106, 182);
  border-top-color: rgb(84, 106, 182);
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  color: rgb(59, 53, 59);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(222, 210, 206);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(38, 34, 38);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(59, 53, 59);
  border-left-color: rgb(59, 53, 59);
  border-right-color: rgb(59, 53, 59);
  border-top-color: rgb(59, 53, 59);
  color: rgb(59, 53, 59);
  font-family: "??", "??", Consolas, "Source Sans Pro", "Segoe UI Emoji", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(231, 221, 218);
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 34, 38);
  border-left-color: rgb(38, 34, 38);
  border-right-color: rgb(38, 34, 38);
  border-top-color: rgb(38, 34, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 34, 38);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(168, 140, 56);
  border-bottom-color: rgb(239, 233, 231);
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-left-color: rgb(239, 233, 231);
  border-right-color: rgb(239, 233, 231);
  border-top-color: rgb(239, 233, 231);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  color: rgb(239, 233, 231);
}`,
  },
};
