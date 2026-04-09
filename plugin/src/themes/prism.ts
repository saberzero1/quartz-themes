import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "prism",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono", "source-sans-3"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-border-width: 2px !important;
  --background-modifier-active-hover: hsla(267, 52%, 75%, 0.1) !important;
  --background-modifier-border: hsl(0, 0%, 30%) !important;
  --background-modifier-border-focus: hsl(271, 43%, 51%) !important;
  --background-modifier-border-hover: hsl(271, 43%, 51%) !important;
  --background-modifier-error: hsl(4, 74%, 74%) !important;
  --background-modifier-error-hover: hsl(4, 74%, 74%) !important;
  --background-modifier-form-field: hsl(0, 0%, 8%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 8%) !important;
  --background-modifier-hover: hsla(271, 48%, 21%, 90%) !important;
  --background-modifier-success: hsl(124, 48%, 54%) !important;
  --background-primary: hsl(0, 0%, 18%) !important;
  --background-primary-alt: hsl(0, 0%, 30%) !important;
  --background-primary-alt-hsl: 0, 0%, 30% !important;
  --background-primary-blur: hsl(0, 0%, 18%, 80%) !important;
  --background-primary-hsl: 0, 0%, 18% !important;
  --background-secondary: hsl(0, 0%, 12%) !important;
  --background-secondary-alt: hsl(0, 0%, 8%) !important;
  --background-secondary-alt-blur: hsla(0, 0%, 8%, 80%) !important;
  --background-secondary-alt-hsl: 0, 0%, 8% !important;
  --background-secondary-blur: hsla(0, 0%, 13%, 80%) !important;
  --background-secondary-blur-hsl: 0, 0%, 13% !important;
  --background-secondary-hsl: 0, 0%, 12% !important;
  --bases-cards-background: hsl(0, 0%, 18%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 30%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 0%, 30%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(271, 43%, 51%) !important;
  --bases-embed-border-color: hsl(0, 0%, 30%) !important;
  --bases-group-heading-property-color: hsl(0, 0%, 86%) !important;
  --bases-table-border-color: hsl(0, 0%, 30%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 8%) !important;
  --bases-table-cell-background-disabled: hsl(0, 0%, 12%) !important;
  --bases-table-cell-background-selected: hsla(267, 52%, 75%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(271, 43%, 51%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(271, 43%, 51%) !important;
  --bases-table-group-background: hsl(0, 0%, 30%) !important;
  --bases-table-header-background: hsl(0, 0%, 8%) !important;
  --bases-table-header-background-hover: hsla(271, 48%, 21%, 90%) !important;
  --bases-table-header-color: hsl(0, 0%, 86%) !important;
  --bases-table-summary-background: hsl(0, 0%, 18%) !important;
  --bases-table-summary-background-hover: hsla(271, 48%, 21%, 90%) !important;
  --blockquote-background-color: hsl(0, 0%, 12%) !important;
  --blockquote-border-color: hsl(0, 0%, 30%) !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent) linear-gradient(hsl(0, 0%, 12%), color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent)) !important;
  --blur-intensity: 8px !important;
  --bodyFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(0, 0%, 91%) !important;
  --button-radius: 4px !important;
  --callout-background-alpha: 20%;
  --callout-padding: 4px;
  --callout-radius: 8px;
  --canvas-background: hsl(0, 0%, 18%) !important;
  --canvas-background-color: 0, 0%, 16% !important;
  --canvas-card-label-color: hsl(0, 0%, 81%) !important;
  --canvas-color: 0, 0%, 40% !important;
  --canvas-dot-pattern: hsla(0, 0%, 30%, 80%) !important;
  --canvas-highlight-color: 0, 0%, 67% !important;
  --caret-color: hsl(0, 0%, 91%) !important;
  --cg-nt-tbar-bg-color: hsl(0, 0%, 12%) !important;
  --cg-nt-tbar-top-sticky-pos-desktop: -33px !important;
  --checkbox-border-color: hsl(0, 0%, 30%) !important;
  --checkbox-border-color-hover: hsl(271, 43%, 51%) !important;
  --checkbox-color: hsl(0, 0%, 18%) !important;
  --checkbox-color-hover: hsl(271, 43%, 51%) !important;
  --checkbox-marker-color: hsl(267, 52%, 75%) !important;
  --checklist-done-color: hsl(271, 43%, 51%) !important;
  --code-background: hsl(0, 0%, 8%) !important;
  --code-border-color: hsl(0, 0%, 30%) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsla(271, 48%, 21%, 90%) !important;
  --code-comment: hsl(0, 0%, 67%) !important;
  --code-function: hsl(44, 60%, 53%) !important;
  --code-important: hsl(26, 85%, 63%) !important;
  --code-keyword: hsl(330, 64%, 74%) !important;
  --code-normal: hsl(0, 0%, 91%) !important;
  --code-operator: hsl(4, 74%, 74%) !important;
  --code-property: hsl(195, 69%, 58%) !important;
  --code-punctuation: hsl(0, 0%, 86%) !important;
  --code-string: hsl(124, 48%, 54%) !important;
  --code-tag: hsl(4, 74%, 74%) !important;
  --code-value: hsl(267, 52%, 75%) !important;
  --codeFont: "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(0, 0%, 81%) !important;
  --collapse-icon-color-collapsed: hsl(0, 0%, 91%) !important;
  --color-accent: hsl(267, 52%, 75%) !important;
  --color-accent-1: hsl(271, 43%, 51%) !important;
  --color-accent-2: hsl(271, 48%, 21%) !important;
  --color-accent-base-dt: 2, 55%, 19% !important;
  --color-accent-base-lt: 2, 55%, 19% !important;
  --color-accent-hsl: 267, 52%, 75% !important;
  --color-accent-text-dt: 4, 74%, 74% !important;
  --color-accent-text-lt: 4, 74%, 74% !important;
  --color-accent-tint-dt: 3, 49%, 46% !important;
  --color-accent-tint-lt: 3, 49%, 46% !important;
  --color-blue: hsl(225, 61%, 75%) !important;
  --color-blue-base: hsl(225, 50%, 20%) !important;
  --color-blue-base-hsl: 225, 50%, 20% !important;
  --color-blue-text: hsl(225, 61%, 75%) !important;
  --color-blue-text-hsl: 225, 61%, 75% !important;
  --color-blue-tint: hsl(224, 44%, 49%) !important;
  --color-blue-tint-hsl: 224, 44%, 49% !important;
  --color-cyan: hsl(195, 69%, 58%) !important;
  --color-cyan-base: hsl(195, 65%, 13%) !important;
  --color-cyan-base-hsl: 195, 65%, 13% !important;
  --color-cyan-text: hsl(195, 69%, 58%) !important;
  --color-cyan-text-hsl: 195, 69%, 58% !important;
  --color-cyan-tint: hsl(195, 52%, 34%) !important;
  --color-cyan-tint-hsl: 195, 52%, 34% !important;
  --color-green: hsl(124, 48%, 54%) !important;
  --color-green-base: hsl(124, 54%, 12%) !important;
  --color-green-base-hsl: 124, 54%, 12% !important;
  --color-green-text: hsl(124, 48%, 54%) !important;
  --color-green-text-hsl: 124, 48%, 54% !important;
  --color-green-tint: hsl(123, 43%, 32%) !important;
  --color-green-tint-hsl: 123, 43%, 32% !important;
  --color-grey-base: hsl(0, 0%, 16%) !important;
  --color-grey-base-hsl: 0, 0%, 16% !important;
  --color-grey-text: hsl(0, 0%, 67%) !important;
  --color-grey-text-hsl: 0, 0%, 67% !important;
  --color-grey-tint: hsl(0, 0%, 40%) !important;
  --color-grey-tint-hsl: 0, 0%, 40% !important;
  --color-mint-base: hsl(165, 88%, 10%) !important;
  --color-mint-base-hsl: 165, 88%, 10% !important;
  --color-mint-text: hsl(166, 67%, 45%) !important;
  --color-mint-text-hsl: 166, 67%, 45% !important;
  --color-mint-tint: hsl(166, 73%, 26%) !important;
  --color-mint-tint-hsl: 166, 73%, 26% !important;
  --color-orange: hsl(26, 85%, 63%) !important;
  --color-orange-base: hsl(26, 65%, 15%) !important;
  --color-orange-base-hsl: 26, 65%, 15% !important;
  --color-orange-text: hsl(26, 85%, 63%) !important;
  --color-orange-text-hsl: 26, 85%, 63% !important;
  --color-orange-tint: hsl(27, 53%, 37%) !important;
  --color-orange-tint-hsl: 27, 53%, 37% !important;
  --color-pink: hsl(330, 64%, 74%) !important;
  --color-pink-base: hsl(325, 55%, 18%) !important;
  --color-pink-base-hsl: 325, 55%, 18% !important;
  --color-pink-text: hsl(330, 64%, 74%) !important;
  --color-pink-text-hsl: 330, 64%, 74% !important;
  --color-pink-tint: hsl(325, 47%, 45%) !important;
  --color-pink-tint-hsl: 325, 47%, 45% !important;
  --color-purple: hsl(267, 52%, 75%) !important;
  --color-purple-base: hsl(271, 48%, 21%) !important;
  --color-purple-base-hsl: 271, 48%, 21% !important;
  --color-purple-text: hsl(267, 52%, 75%) !important;
  --color-purple-text-hsl: 267, 52%, 75% !important;
  --color-purple-tint: hsl(271, 43%, 51%) !important;
  --color-purple-tint-hsl: 271, 43%, 51% !important;
  --color-red: hsl(4, 74%, 74%) !important;
  --color-red-base: hsl(2, 55%, 19%) !important;
  --color-red-base-hsl: 2, 55%, 19% !important;
  --color-red-text: hsl(4, 74%, 74%) !important;
  --color-red-text-hsl: 4, 74%, 74% !important;
  --color-red-tint: hsl(3, 49%, 46%) !important;
  --color-red-tint-hsl: 3, 49%, 46% !important;
  --color-yellow: hsl(44, 60%, 53%) !important;
  --color-yellow-base: hsl(43, 73%, 12%) !important;
  --color-yellow-base-hsl: 43, 73%, 12% !important;
  --color-yellow-text: hsl(44, 60%, 53%) !important;
  --color-yellow-text-hsl: 44, 60%, 53% !important;
  --color-yellow-tint: hsl(44, 59%, 31%) !important;
  --color-yellow-tint-hsl: 44, 59%, 31% !important;
  --custom-vault-banner-icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='40' height='40'%0AviewBox='0 0 40 40'%0Astyle=' fill:%23000000'%3E%3Cpath fill='%23dbb065' d='M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z'%3E%3C/path%3E%3Cg%3E%3Cpath fill='%23f5ce85' d='M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") !important;
  --dark: hsl(0, 0%, 91%) !important;
  --darkgray: hsl(0, 0%, 91%) !important;
  --divider-color: hsl(0, 0%, 30%) !important;
  --divider-color-hover: hsl(271, 43%, 51%) !important;
  --drag-ghost-text-color: hsl(0, 0%, 91%) !important;
  --dropdown-background: hsl(0, 0%, 12%) !important;
  --dropdown-background-hover: hsl(0, 0%, 18%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0, 0%, 30%), inset 0 0 0 1px hsl(0, 0%, 30%) !important;
  --embed-border-bottom: 1px solid hsl(0, 0%, 30%) !important;
  --embed-border-end: 1px solid hsl(0, 0%, 30%) !important;
  --embed-border-start: 2px solid hsl(271, 43%, 51%) !important;
  --embed-border-top: 1px solid hsl(0, 0%, 30%) !important;
  --embed-max-height: 800px !important;
  --embed-padding: 8px 16px !important;
  --fade-away-delay: 850ms !important;
  --fade-away-opacity: 0.25 !important;
  --file-folding-offset: 20px !important;
  --file-header-background: hsl(0, 0%, 18%) !important;
  --file-header-background-focused: hsl(0, 0%, 18%) !important;
  --file-header-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 15px !important;
  --flair-background: hsl(0, 0%, 12%) !important;
  --flair-color: hsl(0, 0%, 91%) !important;
  --font-interface: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Source Sans 3" !important;
  --font-mermaid: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono" !important;
  --font-print: "Source Sans 3", Arial' !important;
  --font-text: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Source Sans 3" !important;
  --footnote-divider-color: hsl(0, 0%, 30%) !important;
  --footnote-id-color: hsl(0, 0%, 86%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 81%) !important;
  --footnote-input-background-active: hsl(0, 0%, 12%) !important;
  --graph-attachment-color-dt: hsl(44, 60%, 53%) !important;
  --graph-controls-width: 150px !important;
  --graph-fill-color-dt: hsl(0, 0%, 67%) !important;
  --graph-fill-focused-color-dt: hsl(267, 52%, 75%) !important;
  --graph-line: hsl(0, 0%, 30%) !important;
  --graph-line-color-dt: hsl(0, 0%, 30%) !important;
  --graph-node: hsl(0, 0%, 67%) !important;
  --graph-node-attachment: hsl(44, 60%, 53%) !important;
  --graph-node-focused: hsl(267, 52%, 75%) !important;
  --graph-node-tag: hsl(225, 61%, 75%) !important;
  --graph-node-unresolved: hsl(4, 74%, 74%) !important;
  --graph-tag-color-dt: hsl(225, 61%, 75%) !important;
  --graph-text: hsl(0, 0%, 91%) !important;
  --graph-unresolved-color-dt: hsl(4, 74%, 74%) !important;
  --gray: hsl(0, 0%, 86%) !important;
  --h1-color: hsl(0, 0%, 91%) !important;
  --h1-line-height: 1.3 !important;
  --h1-size: 2.2em !important;
  --h1-text-color-dt: hsl(0, 0%, 91%) !important;
  --h1-weight: 800 !important;
  --h2-color: hsl(0, 0%, 91%) !important;
  --h2-line-height: 1.3 !important;
  --h2-size: 2em !important;
  --h2-text-color-dt: hsl(0, 0%, 91%) !important;
  --h2-weight: 800 !important;
  --h3-color: hsl(0, 0%, 91%) !important;
  --h3-line-height: 1.35 !important;
  --h3-size: 1.8em !important;
  --h3-text-color-dt: hsl(0, 0%, 91%) !important;
  --h3-weight: 800 !important;
  --h4-color: hsl(0, 0%, 91%) !important;
  --h4-size: 1.6em !important;
  --h4-text-color-dt: hsl(0, 0%, 91%) !important;
  --h4-weight: 800 !important;
  --h5-color: hsl(0, 0%, 91%) !important;
  --h5-size: 1.4em !important;
  --h5-text-color-dt: hsl(0, 0%, 91%) !important;
  --h5-weight: 800 !important;
  --h6-color: hsl(0, 0%, 91%) !important;
  --h6-size: 1.2em !important;
  --h6-text-color-dt: hsl(0, 0%, 91%) !important;
  --h6-weight: 800 !important;
  --header-height: 41px !important;
  --headerFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, 0%, 81%) !important;
  --heading-spacing: 1.25em !important;
  --highlight: hsl(271, 48%, 21%) !important;
  --highlight-text-normal: hsl(267, 52%, 75%) !important;
  --hr-color: hsl(0, 0%, 30%) !important;
  --icon-color: hsl(0, 0%, 86%) !important;
  --icon-color-active: hsl(271, 43%, 51%) !important;
  --icon-color-focused: hsl(267, 52%, 75%) !important;
  --icon-color-hover: hsl(267, 52%, 75%) !important;
  --indentation-guide-color: hsla(0, 0%, 30%, 80%) !important;
  --indentation-guide-color-active: hsl(271, 43%, 51%) !important;
  --indentation-guide-reading-indent: -0.55em !important;
  --indentation-guide-source-indent: 0.85em !important;
  --inline-title-line-height: 1.3 !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 800 !important;
  --input-date-separator: hsl(0, 0%, 81%) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl(0, 0%, 81%) !important;
  --input-radius: 4px !important;
  --interactive-accent: hsl(271, 43%, 51%) !important;
  --interactive-accent-base: hsl(271, 48%, 21%) !important;
  --interactive-accent-base-hsl: 271, 48%, 21% !important;
  --interactive-accent-hover: hsl(271, 43%, 51%) !important;
  --interactive-accent-hsl: 267, 52%, 75% !important;
  --interactive-accent-text: hsl(267, 52%, 75%) !important;
  --interactive-accent-text-hsl: 267, 52%, 75% !important;
  --interactive-accent-tint: hsl(271, 43%, 51%) !important;
  --interactive-accent-tint-hsl: 271, 43%, 51% !important;
  --interactive-hover: hsl(0, 0%, 18%) !important;
  --interactive-normal: hsl(0, 0%, 12%) !important;
  --italic-color: hsl(0, 0%, 91%) !important;
  --light: hsl(0, 0%, 18%) !important;
  --lightgray: hsl(0, 0%, 12%) !important;
  --link-color: hsl(267, 52%, 75%) !important;
  --link-color-hover: hsla(267, 52%, 75%, 60%) !important;
  --link-external-color: hsl(267, 52%, 75%) !important;
  --link-external-color-dt: 267, 52%, 75% !important;
  --link-external-color-hover: hsla(267, 52%, 75%, 60%) !important;
  --link-internal-color-dt: 267, 52%, 75% !important;
  --link-unresolved-color: hsl(267, 52%, 75%) !important;
  --link-unresolved-decoration-color: hsla(267, 52%, 75%, 0.3) !important;
  --list-bullet-end-padding: 3rem !important;
  --list-indent: 2em !important;
  --list-indent-source: 0.75em !important;
  --list-marker-color: hsl(0, 0%, 81%) !important;
  --list-marker-color-collapsed: hsl(271, 43%, 51%) !important;
  --list-marker-color-hover: hsl(0, 0%, 86%) !important;
  --mark-highlight-base: hsl(43, 73%, 12%) !important;
  --menu-background: hsl(0, 0%, 12%) !important;
  --menu-border-color: hsl(271, 43%, 51%) !important;
  --menu-shadow: hsla(0, 0%, 0%, 10%) 0 1px 2px 0 !important;
  --metadata-border-color: hsl(0, 0%, 30%) !important;
  --metadata-divider-color: hsl(0, 0%, 30%) !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: hsl(0, 0%, 12%) !important;
  --metadata-input-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(0, 0%, 91%) !important;
  --metadata-label-background-active: hsl(0, 0%, 12%) !important;
  --metadata-label-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(0, 0%, 86%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 86%) !important;
  --metadata-property-background-active: hsla(271, 48%, 21%, 90%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(271, 43%, 51%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(271, 43%, 51%) !important;
  --modal-background: hsl(0, 0%, 8%) !important;
  --modal-border-color: hsl(0, 0%, 30%) !important;
  --nav-collapse-icon-color: hsl(0, 0%, 81%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 81%) !important;
  --nav-header-padding-bottom: 40px !important;
  --nav-heading-color: hsl(0, 0%, 91%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 81%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 86%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 91%) !important;
  --nav-indentation-guide-color: hsla(0, 0%, 30%, 80%) !important;
  --nav-item-background-active: hsla(271, 48%, 21%, 90%) !important;
  --nav-item-background-hover: hsla(271, 48%, 21%, 90%) !important;
  --nav-item-background-selected: hsla(267, 52%, 75%, 0.15) !important;
  --nav-item-children-margin-left: 13px !important;
  --nav-item-color: hsl(0, 0%, 86%) !important;
  --nav-item-color-active: hsl(0, 0%, 91%) !important;
  --nav-item-color-highlighted: hsl(271, 43%, 51%) !important;
  --nav-item-color-hover: hsl(267, 52%, 75%) !important;
  --nav-item-color-selected: hsl(0, 0%, 91%) !important;
  --nav-item-padding: 2px 8px 2px 24px !important;
  --nav-item-parent-padding: 2px 8px 2px 24px !important;
  --nav-tag-color: hsl(0, 0%, 81%) !important;
  --nav-tag-color-active: hsl(0, 0%, 86%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 86%) !important;
  --p-spacing: 0.5em !important;
  --pdf-background: hsl(0, 0%, 8%) !important;
  --pdf-page-background: hsl(0, 0%, 18%) !important;
  --pdf-shadow: 0 0 0 1px hsl(0, 0%, 30%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 8%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(0, 0%, 30%) !important;
  --pill-border-color: hsl(0, 0%, 30%) !important;
  --pill-border-color-hover: hsl(271, 43%, 51%) !important;
  --pill-color: hsl(0, 0%, 86%) !important;
  --pill-color-hover: hsl(0, 0%, 91%) !important;
  --pill-color-remove: hsl(0, 0%, 81%) !important;
  --pill-color-remove-hover: hsl(271, 43%, 51%) !important;
  --pill-radius: 4px !important;
  --prompt-background: hsl(0, 0%, 18%) !important;
  --prompt-border-color: hsl(0, 0%, 30%) !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent) linear-gradient(hsl(0, 0%, 12%), color-mix(in srgb, hsl(0, 0%, 12%) 65%, transparent)) !important;
  --ribbon-background: hsl(0, 0%, 12%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 12%) !important;
  --scroll-bar-size: 12px !important;
  --scroll-button-background-color: hsl(0, 0%, 18%) !important;
  --scrollbar-active-thumb-bg: hsl(271, 48%, 21%) !important;
  --scrollbar-bg: hsl(0, 0%, 12%) !important;
  --scrollbar-thumb-bg: hsl(0, 0%, 30%) !important;
  --search-clear-button-color: hsl(0, 0%, 86%) !important;
  --search-icon-color: hsl(0, 0%, 86%) !important;
  --search-result-background: hsl(0, 0%, 18%) !important;
  --secondary: hsl(271, 43%, 51%) !important;
  --setting-group-heading-color: hsl(0, 0%, 91%) !important;
  --setting-items-background: hsl(0, 0%, 8%) !important;
  --setting-items-border-color: hsl(0, 0%, 30%) !important;
  --setting-items-padding: 8px !important;
  --shadow-color-hsl: 0, 0%, 0% !important;
  --shadow-l: hsla(0, 0%, 0%, 5%) 0 1px 2px, hsla(0, 0%, 0%, 5%) 0 2px 4px,
  	hsla(0, 0%, 0%, 5%) 0 4px 8px, hsla(0, 0%, 0%, 5%) 0 6px 12px !important;
  --shadow-s: hsla(0, 0%, 0%, 10%) 0 1px 2px 0 !important;
  --slider-thumb-border-color: hsl(271, 43%, 51%) !important;
  --slider-thumb-radius: 4px !important;
  --slider-thumb-width: 10px !important;
  --slider-track-background: hsl(0, 0%, 30%) !important;
  --status-bar-background: hsl(0, 0%, 12%) !important;
  --status-bar-background-color-dt: #2b2b2b !important;
  --status-bar-background-color-lt: #ebecef !important;
  --status-bar-border-color: hsl(0, 0%, 30%) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: hsl(0, 0%, 86%) !important;
  --strikethrough-line-color: hsl(0, 0%, 86%) !important;
  --strikethrough-line-color-dt: hsl(0, 0%, 86%) !important;
  --strikethrough-text-color: hsl(0, 0%, 86%) !important;
  --strikethrough-text-color-dt: hsl(0, 0%, 86%) !important;
  --suggestion-background: hsl(0, 0%, 18%) !important;
  --sync-avatar-color-1: hsl(4, 74%, 74%) !important;
  --sync-avatar-color-2: hsl(26, 85%, 63%) !important;
  --sync-avatar-color-3: hsl(44, 60%, 53%) !important;
  --sync-avatar-color-4: hsl(124, 48%, 54%) !important;
  --sync-avatar-color-5: hsl(195, 69%, 58%) !important;
  --sync-avatar-color-6: hsl(225, 61%, 75%) !important;
  --sync-avatar-color-7: hsl(267, 52%, 75%) !important;
  --sync-avatar-color-8: hsl(330, 64%, 74%) !important;
  --tab-background-active: hsl(0, 0%, 18%) !important;
  --tab-container-background: hsl(0, 0%, 12%) !important;
  --tab-divider-color: hsl(271, 43%, 51%) !important;
  --tab-outline-color: hsl(0, 0%, 30%) !important;
  --tab-radius-active: 8px !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-header-width: 41px !important;
  --tab-stacked-shadow: 0 !important;
  --tab-switcher-background: hsl(0, 0%, 12%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 12%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(267, 52%, 75%) !important;
  --tab-text-color: hsl(0, 0%, 81%) !important;
  --tab-text-color-active: hsl(0, 0%, 86%) !important;
  --tab-text-color-focused: hsl(0, 0%, 86%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 86%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 91%) !important;
  --tab-text-color-focused-highlighted: hsl(271, 43%, 51%) !important;
  --table-add-button-border-color: hsl(0, 0%, 30%) !important;
  --table-border-color: hsl(0, 0%, 30%) !important;
  --table-drag-handle-background-active: hsl(271, 43%, 51%) !important;
  --table-drag-handle-color: hsl(0, 0%, 81%) !important;
  --table-drag-handle-color-active: hsl(267, 52%, 75%) !important;
  --table-header-border-color: hsl(0, 0%, 30%) !important;
  --table-header-color: hsl(0, 0%, 91%) !important;
  --table-selection: hsla(267, 52%, 75%, 0.1) !important;
  --table-selection-border-color: hsl(271, 43%, 51%) !important;
  --tag-background: hsla(267, 52%, 75%, 0.1) !important;
  --tag-background-hover: hsla(267, 52%, 75%, 0.2) !important;
  --tag-border-color: hsla(267, 52%, 75%, 0.15) !important;
  --tag-border-color-hover: hsla(267, 52%, 75%, 0.15) !important;
  --tag-border-width: 2px !important;
  --tag-color: hsl(271, 43%, 51%) !important;
  --tag-color-hover: hsl(271, 43%, 51%) !important;
  --tag-padding-x: 0.75ch !important;
  --tag-padding-y: 0 !important;
  --tag-radius: 4px !important;
  --tag-size: 0.8em !important;
  --tertiary: hsl(271, 43%, 51%) !important;
  --text-accent: hsl(271, 43%, 51%) !important;
  --text-accent-hover: hsl(271, 43%, 51%) !important;
  --text-bold-color-dt: hsl(0, 0%, 91%) !important;
  --text-error: hsl(4, 74%, 74%) !important;
  --text-faint: hsl(0, 0%, 81%) !important;
  --text-faint-hsl: 0, 0%, 81% !important;
  --text-highlight-bg: hsl(271, 48%, 21%) !important;
  --text-italic-bold-color-dt: hsl(0, 0%, 91%) !important;
  --text-italic-color-dt: hsl(0, 0%, 91%) !important;
  --text-muted: hsl(0, 0%, 86%) !important;
  --text-muted-hsl: 0, 0%, 86% !important;
  --text-normal: hsl(0, 0%, 91%) !important;
  --text-normal-hsl: 0, 0%, 91% !important;
  --text-on-accent: hsl(267, 52%, 75%) !important;
  --text-on-accent-inverted: hsl(0, 0%, 91%) !important;
  --text-selection: hsla(271, 43%, 51%, 55%) !important;
  --text-success: hsl(124, 48%, 54%) !important;
  --text-warning: hsl(26, 85%, 63%) !important;
  --textHighlight: hsl(271, 48%, 21%) !important;
  --titleFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(0, 0%, 12%) !important;
  --titlebar-background-focused: hsl(0, 0%, 12%) !important;
  --titlebar-border-color: hsl(0, 0%, 30%) !important;
  --titlebar-text-color: hsl(0, 0%, 86%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 91%) !important;
  --toggle-radius: 4px !important;
  --toggle-s-border-width: 1px !important;
  --toggle-s-thumb-height: 18px !important;
  --toggle-s-thumb-width: 18px !important;
  --toggle-s-width: 44px !important;
  --toggle-thumb-color: hsl(0, 0%, 91%) !important;
  --toggle-thumb-height: 20px !important;
  --toggle-thumb-radius: 3px !important;
  --toggle-thumb-width: 20px !important;
  --toggle-width: 42px !important;
  --traffic-lights-offset-x: 41px !important;
  --traffic-lights-offset-y: 41px !important;
  --underline-line-color: hsl(0, 0%, 91%) !important;
  --underline-line-color-dt: hsl(0, 0%, 91%) !important;
  --underline-text-color: hsl(0, 0%, 91%) !important;
  --underline-text-color-dt: hsl(0, 0%, 91%) !important;
  --vault-name-font-size: 15px !important;
  --vault-profile-color: hsl(0, 0%, 91%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 91%) !important;
  --vault-profile-font-size: 15px !important;
  --window-border: 1px solid hsl(0, 0%, 30%) !important;
  --window-border-color: hsl(0, 0%, 30%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 31, 31);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(20, 20, 20);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(77, 77, 77);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgba(33, 33, 33, 0.8);
  border-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(188, 158, 224, 0.1);
  border-radius: 4px;
  color: rgb(132, 76, 184);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 31, 31);
  border-left-color: rgb(77, 77, 77);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(46, 46, 46);
  color: rgb(232, 232, 232);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(54, 28, 79);
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body del {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration: line-through 2px rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
  text-decoration-thickness: 2px;
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(188, 158, 224);
  font-size: 15px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(77, 77, 77);
  border-width: 2px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(46, 46, 46);
  border-color: rgb(132, 76, 184);
}

html[saved-theme="dark"] body p {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration-color: rgb(219, 219, 219);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration: underline rgba(188, 158, 224, 0.3);
  text-decoration-color: rgba(188, 158, 224, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body dt {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(207, 207, 207);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(31, 31, 31);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body table {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 178.25px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(232, 232, 232);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
  font-family: "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(207, 169, 63);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(207, 169, 63);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(207, 169, 63);
  border-left-color: rgb(207, 169, 63);
  border-right-color: rgb(207, 169, 63);
  border-top-color: rgb(207, 169, 63);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(77, 77, 77);
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(132, 76, 184);
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(41, 41, 41, 0.2);
  border-bottom-color: rgb(232, 232, 232);
  border-bottom-style: solid;
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-right-style: solid;
  border-top-color: rgb(232, 232, 232);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-width: 2px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 2px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 2px;
  border-top-color: rgb(77, 77, 77);
  border-top-width: 2px;
  margin-left: -18.4px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
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

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px, rgba(0, 0, 0, 0.05) 0px 2px 4px 0px, rgba(0, 0, 0, 0.05) 0px 4px 8px 0px, rgba(0, 0, 0, 0.05) 0px 6px 12px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: rgb(20, 20, 20);
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(188, 158, 224);
  border-left-color: rgb(188, 158, 224);
  border-right-color: rgb(188, 158, 224);
  border-top-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(54, 28, 79);
  color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(77, 77, 77);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(54, 28, 79);
  border-bottom-color: rgb(188, 158, 224);
  border-left-color: rgb(188, 158, 224);
  border-right-color: rgb(188, 158, 224);
  border-top-color: rgb(188, 158, 224);
  color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(54, 28, 79);
  color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(188, 158, 224, 0.1);
  border-bottom-color: rgba(188, 158, 224, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgba(188, 158, 224, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(188, 158, 224, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(188, 158, 224, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(132, 76, 184);
}

html[saved-theme="dark"] body h1 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgba(77, 77, 77, 0.8);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(232, 232, 232);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(33, 33, 33, 0.8);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(219, 219, 219);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(188, 158, 224);
  stroke: rgb(188, 158, 224);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(207, 207, 207);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(33, 33, 33, 0.8);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(219, 219, 219);
  border-left-color: rgb(219, 219, 219);
  border-right-color: rgb(219, 219, 219);
  border-top-color: rgb(219, 219, 219);
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(77, 77, 77);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(77, 77, 77);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(77, 77, 77);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(232, 232, 232);
  font-family: "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body sub {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body summary {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body sup {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(77, 77, 77);
  border-left-width: 2px;
  border-right-color: rgb(77, 77, 77);
  border-right-width: 2px;
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: rgb(132, 76, 184);
}`,
  },
  light: {
    base: `:root:root {
  --accent-border-width: 2px !important;
  --background-modifier-active-hover: hsla(258, 75%, 63%, 0.1) !important;
  --background-modifier-border: hsl(0, 0%, 69%) !important;
  --background-modifier-border-focus: hsl(252, 84%, 83%) !important;
  --background-modifier-border-hover: hsl(252, 84%, 83%) !important;
  --background-modifier-error: hsl(3, 68%, 52%) !important;
  --background-modifier-error-hover: hsl(3, 68%, 52%) !important;
  --background-modifier-form-field: hsl(0, 0%, 100%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 100%) !important;
  --background-modifier-hover: hsla(251, 87%, 94%, 90%) !important;
  --background-modifier-success: hsl(93, 100%, 27%) !important;
  --background-primary: hsl(0, 0%, 100%) !important;
  --background-primary-alt: hsl(0, 0%, 96%) !important;
  --background-primary-alt-hsl: 0, 0%, 96% !important;
  --background-primary-blur: hsl(0, 0%, 100%, 80%) !important;
  --background-primary-hsl: 0, 0%, 100% !important;
  --background-secondary: hsl(0, 0%, 93%) !important;
  --background-secondary-alt: hsl(0, 0%, 69%) !important;
  --background-secondary-alt-blur: hsla(0, 0%, 69%, 80%) !important;
  --background-secondary-alt-hsl: 0, 0%, 69% !important;
  --background-secondary-blur: hsla(0, 0%, 92%, 80%) !important;
  --background-secondary-blur-hsl: 0, 0%, 92% !important;
  --background-secondary-hsl: 0, 0%, 93% !important;
  --bases-cards-background: hsl(0, 0%, 100%) !important;
  --bases-cards-cover-background: hsl(0, 0%, 96%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0, 0%, 69%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(252, 84%, 83%) !important;
  --bases-embed-border-color: hsl(0, 0%, 69%) !important;
  --bases-group-heading-property-color: hsl(0, 0%, 20%) !important;
  --bases-table-border-color: hsl(0, 0%, 69%) !important;
  --bases-table-cell-background-active: hsl(0, 0%, 100%) !important;
  --bases-table-cell-background-disabled: hsl(0, 0%, 96%) !important;
  --bases-table-cell-background-selected: hsla(258, 75%, 63%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(252, 84%, 83%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(252, 84%, 83%) !important;
  --bases-table-group-background: hsl(0, 0%, 96%) !important;
  --bases-table-header-background: hsl(0, 0%, 100%) !important;
  --bases-table-header-background-hover: hsla(251, 87%, 94%, 90%) !important;
  --bases-table-header-color: hsl(0, 0%, 20%) !important;
  --bases-table-summary-background: hsl(0, 0%, 100%) !important;
  --bases-table-summary-background-hover: hsla(251, 87%, 94%, 90%) !important;
  --blockquote-background-color: hsl(0, 0%, 96%) !important;
  --blockquote-border-color: hsl(0, 0%, 69%) !important;
  --blur-background: color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent) linear-gradient(hsl(0, 0%, 100%), color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent)) !important;
  --blur-intensity: 8px !important;
  --bodyFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: hsl(0, 0%, 15%) !important;
  --button-radius: 4px !important;
  --callout-background-alpha: 20%;
  --callout-padding: 4px;
  --callout-radius: 8px;
  --canvas-background: hsl(0, 0%, 100%) !important;
  --canvas-background-color: 0, 0%, 90% !important;
  --canvas-card-label-color: hsl(0, 0%, 35%) !important;
  --canvas-color: 0, 0%, 73% !important;
  --canvas-dot-pattern: hsla(0, 0%, 69%, 75%) !important;
  --canvas-highlight-color: 0, 0%, 47% !important;
  --caret-color: hsl(0, 0%, 15%) !important;
  --cg-nt-tbar-top-sticky-pos-desktop: -33px !important;
  --checkbox-border-color: hsl(0, 0%, 69%) !important;
  --checkbox-border-color-hover: hsl(252, 84%, 83%) !important;
  --checkbox-color: hsl(0, 0%, 96%) !important;
  --checkbox-color-hover: hsl(252, 84%, 83%) !important;
  --checkbox-marker-color: hsl(258, 75%, 63%) !important;
  --checklist-done-color: hsl(252, 84%, 83%) !important;
  --code-background: hsl(0, 0%, 100%) !important;
  --code-border-color: hsl(0, 0%, 69%) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: hsla(251, 87%, 94%, 90%) !important;
  --code-comment: hsl(0, 0%, 47%) !important;
  --code-function: hsl(38, 62%, 37%) !important;
  --code-important: hsl(31, 100%, 36%) !important;
  --code-keyword: hsl(320, 60%, 50%) !important;
  --code-normal: hsl(0, 0%, 15%) !important;
  --code-operator: hsl(3, 68%, 52%) !important;
  --code-property: hsl(184, 100%, 28%) !important;
  --code-punctuation: hsl(0, 0%, 20%) !important;
  --code-string: hsl(93, 100%, 27%) !important;
  --code-tag: hsl(3, 68%, 52%) !important;
  --code-value: hsl(258, 75%, 63%) !important;
  --codeFont: "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: hsl(0, 0%, 35%) !important;
  --collapse-icon-color-collapsed: hsl(0, 0%, 15%) !important;
  --color-accent: hsl(258, 75%, 63%) !important;
  --color-accent-1: hsl(252, 84%, 83%) !important;
  --color-accent-2: hsl(251, 87%, 94%) !important;
  --color-accent-base-dt: 7, 90%, 92% !important;
  --color-accent-base-lt: 7, 90%, 92% !important;
  --color-accent-hsl: 258, 75%, 63% !important;
  --color-accent-text-dt: 3, 68%, 52% !important;
  --color-accent-text-lt: 3, 68%, 52% !important;
  --color-accent-tint-dt: 7, 82%, 78% !important;
  --color-accent-tint-lt: 7, 82%, 78% !important;
  --color-blue: hsl(221, 67%, 56%) !important;
  --color-blue-base: hsl(217, 76%, 92%) !important;
  --color-blue-base-hsl: 217, 76%, 92% !important;
  --color-blue-text: hsl(221, 67%, 56%) !important;
  --color-blue-text-hsl: 221, 67%, 56% !important;
  --color-blue-tint: hsl(219, 73%, 78%) !important;
  --color-blue-tint-hsl: 219, 73%, 78% !important;
  --color-cyan: hsl(184, 100%, 28%) !important;
  --color-cyan-base: hsl(184, 60%, 85%) !important;
  --color-cyan-base-hsl: 184, 60%, 85% !important;
  --color-cyan-text: hsl(184, 100%, 28%) !important;
  --color-cyan-text-hsl: 184, 100%, 28% !important;
  --color-cyan-tint: hsl(184, 61%, 56%) !important;
  --color-cyan-tint-hsl: 184, 61%, 56% !important;
  --color-green: hsl(93, 100%, 27%) !important;
  --color-green-base: hsl(101, 49%, 85%) !important;
  --color-green-base-hsl: 101, 49%, 85% !important;
  --color-green-text: hsl(93, 100%, 27%) !important;
  --color-green-text-hsl: 93, 100%, 27% !important;
  --color-green-tint: hsl(99, 50%, 59%) !important;
  --color-green-tint-hsl: 99, 50%, 59% !important;
  --color-grey-base: hsl(0, 0%, 90%) !important;
  --color-grey-base-hsl: 0, 0%, 90% !important;
  --color-grey-text: hsl(0, 0%, 47%) !important;
  --color-grey-text-hsl: 0, 0%, 47% !important;
  --color-grey-tint: hsl(0, 0%, 73%) !important;
  --color-grey-tint-hsl: 0, 0%, 73% !important;
  --color-mint-base: hsl(152, 62%, 85%) !important;
  --color-mint-base-hsl: 152, 62%, 85% !important;
  --color-mint-text: hsl(161, 100%, 26%) !important;
  --color-mint-text-hsl: 161, 100%, 26% !important;
  --color-mint-tint: hsl(158, 59%, 55%) !important;
  --color-mint-tint-hsl: 158, 59%, 55% !important;
  --color-orange: hsl(31, 100%, 36%) !important;
  --color-orange-base: hsl(26, 85%, 89%) !important;
  --color-orange-base-hsl: 26, 85%, 89% !important;
  --color-orange-text: hsl(31, 100%, 36%) !important;
  --color-orange-text-hsl: 31, 100%, 36% !important;
  --color-orange-tint: hsl(27, 80%, 69%) !important;
  --color-orange-tint-hsl: 27, 80%, 69% !important;
  --color-pink: hsl(320, 60%, 50%) !important;
  --color-pink-base: hsl(328, 79%, 93%) !important;
  --color-pink-base-hsl: 328, 79%, 93% !important;
  --color-pink-text: hsl(320, 60%, 50%) !important;
  --color-pink-text-hsl: 320, 60%, 50% !important;
  --color-pink-tint: hsl(327, 72%, 79%) !important;
  --color-pink-tint-hsl: 327, 72%, 79% !important;
  --color-purple: hsl(258, 75%, 63%) !important;
  --color-purple-base: hsl(251, 87%, 94%) !important;
  --color-purple-base-hsl: 251, 87%, 94% !important;
  --color-purple-text: hsl(258, 75%, 63%) !important;
  --color-purple-text-hsl: 258, 75%, 63% !important;
  --color-purple-tint: hsl(252, 84%, 83%) !important;
  --color-purple-tint-hsl: 252, 84%, 83% !important;
  --color-red: hsl(3, 68%, 52%) !important;
  --color-red-base: hsl(7, 90%, 92%) !important;
  --color-red-base-hsl: 7, 90%, 92% !important;
  --color-red-text: hsl(3, 68%, 52%) !important;
  --color-red-text-hsl: 3, 68%, 52% !important;
  --color-red-tint: hsl(7, 82%, 78%) !important;
  --color-red-tint-hsl: 7, 82%, 78% !important;
  --color-yellow: hsl(38, 62%, 37%) !important;
  --color-yellow-base: hsl(42, 88%, 83%) !important;
  --color-yellow-base-hsl: 42, 88%, 83% !important;
  --color-yellow-text: hsl(38, 62%, 37%) !important;
  --color-yellow-text-hsl: 38, 62%, 37% !important;
  --color-yellow-tint: hsl(44, 67%, 58%) !important;
  --color-yellow-tint-hsl: 44, 67%, 58% !important;
  --custom-vault-banner-icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='40' height='40'%0AviewBox='0 0 40 40'%0Astyle=' fill:%23000000'%3E%3Cpath fill='%23dbb065' d='M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z'%3E%3C/path%3E%3Cg%3E%3Cpath fill='%23f5ce85' d='M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") !important;
  --dark: hsl(0, 0%, 15%) !important;
  --darkgray: hsl(0, 0%, 15%) !important;
  --divider-color: hsl(0, 0%, 69%) !important;
  --divider-color-hover: hsl(252, 84%, 83%) !important;
  --drag-ghost-text-color: hsl(0, 0%, 15%) !important;
  --dropdown-background: hsl(0, 0%, 100%) !important;
  --dropdown-background-hover: hsl(0, 0%, 100%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0, 0%, 69%), inset 0 0 0 1px hsl(0, 0%, 69%) !important;
  --embed-border-bottom: 1px solid hsl(0, 0%, 69%) !important;
  --embed-border-end: 1px solid hsl(0, 0%, 69%) !important;
  --embed-border-start: 2px solid hsl(252, 84%, 83%) !important;
  --embed-border-top: 1px solid hsl(0, 0%, 69%) !important;
  --embed-max-height: 800px !important;
  --embed-padding: 8px 16px !important;
  --fade-away-delay: 850ms !important;
  --fade-away-opacity: 0.25 !important;
  --file-folding-offset: 20px !important;
  --file-header-background: hsl(0, 0%, 100%) !important;
  --file-header-background-focused: hsl(0, 0%, 100%) !important;
  --file-header-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 15px !important;
  --flair-background: hsl(0, 0%, 100%) !important;
  --flair-color: hsl(0, 0%, 15%) !important;
  --font-interface: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Source Sans 3" !important;
  --font-mermaid: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono" !important;
  --font-print: "Source Sans 3", Arial' !important;
  --font-text: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Source Sans 3" !important;
  --footnote-divider-color: hsl(0, 0%, 69%) !important;
  --footnote-id-color: hsl(0, 0%, 20%) !important;
  --footnote-id-color-no-occurrences: hsl(0, 0%, 35%) !important;
  --footnote-input-background-active: hsl(0, 0%, 93%) !important;
  --graph-attachment-color-lt: hsl(44, 67%, 58%) !important;
  --graph-controls-width: 150px !important;
  --graph-fill-color-lt: hsl(0, 0%, 73%) !important;
  --graph-fill-focused-color-lt: hsl(252, 84%, 83%) !important;
  --graph-line: hsl(0, 0%, 69%) !important;
  --graph-line-color-lt: hsl(0, 0%, 69%) !important;
  --graph-node: hsl(0, 0%, 73%) !important;
  --graph-node-attachment: hsl(44, 67%, 58%) !important;
  --graph-node-focused: hsl(252, 84%, 83%) !important;
  --graph-node-tag: hsl(219, 73%, 78%) !important;
  --graph-node-unresolved: hsl(7, 82%, 78%) !important;
  --graph-tag-color-lt: hsl(219, 73%, 78%) !important;
  --graph-text: hsl(0, 0%, 15%) !important;
  --graph-unresolved-color-lt: hsl(7, 82%, 78%) !important;
  --gray: hsl(0, 0%, 20%) !important;
  --h1-color: hsl(0, 0%, 15%) !important;
  --h1-line-height: 1.3 !important;
  --h1-size: 2.2em !important;
  --h1-text-color-lt: hsl(0, 0%, 15%) !important;
  --h1-weight: 800 !important;
  --h2-color: hsl(0, 0%, 15%) !important;
  --h2-line-height: 1.3 !important;
  --h2-size: 2em !important;
  --h2-text-color-lt: hsl(0, 0%, 15%) !important;
  --h2-weight: 800 !important;
  --h3-color: hsl(0, 0%, 15%) !important;
  --h3-line-height: 1.35 !important;
  --h3-size: 1.8em !important;
  --h3-text-color-lt: hsl(0, 0%, 15%) !important;
  --h3-weight: 800 !important;
  --h4-color: hsl(0, 0%, 15%) !important;
  --h4-size: 1.6em !important;
  --h4-text-color-lt: hsl(0, 0%, 15%) !important;
  --h4-weight: 800 !important;
  --h5-color: hsl(0, 0%, 15%) !important;
  --h5-size: 1.4em !important;
  --h5-text-color-lt: hsl(0, 0%, 15%) !important;
  --h5-weight: 800 !important;
  --h6-color: hsl(0, 0%, 15%) !important;
  --h6-size: 1.2em !important;
  --h6-text-color-lt: hsl(0, 0%, 15%) !important;
  --h6-weight: 800 !important;
  --header-height: 41px !important;
  --headerFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: hsl(0, 0%, 35%) !important;
  --heading-spacing: 1.25em !important;
  --highlight: hsl(251, 87%, 94%) !important;
  --highlight-text-normal: hsl(258, 75%, 63%) !important;
  --hr-color: hsl(0, 0%, 69%) !important;
  --icon-color: hsl(0, 0%, 20%) !important;
  --icon-color-active: hsl(258, 75%, 63%) !important;
  --icon-color-focused: hsl(258, 75%, 63%) !important;
  --icon-color-hover: hsl(258, 75%, 63%) !important;
  --indentation-guide-color: hsla(0, 0%, 69%, 75%) !important;
  --indentation-guide-color-active: hsl(252, 84%, 83%) !important;
  --indentation-guide-reading-indent: -0.55em !important;
  --indentation-guide-source-indent: 0.85em !important;
  --inline-title-line-height: 1.3 !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 800 !important;
  --input-date-separator: hsl(0, 0%, 35%) !important;
  --input-height: 32px !important;
  --input-placeholder-color: hsl(0, 0%, 35%) !important;
  --input-radius: 4px !important;
  --interactive-accent: hsl(252, 84%, 83%) !important;
  --interactive-accent-base: hsl(251, 87%, 94%) !important;
  --interactive-accent-base-hsl: 251, 87%, 94% !important;
  --interactive-accent-hover: hsl(252, 84%, 83%) !important;
  --interactive-accent-hsl: 258, 75%, 63% !important;
  --interactive-accent-text: hsl(258, 75%, 63%) !important;
  --interactive-accent-text-hsl: 258, 75%, 63% !important;
  --interactive-accent-tint: hsl(252, 84%, 83%) !important;
  --interactive-accent-tint-hsl: 252, 84%, 83% !important;
  --interactive-hover: hsl(0, 0%, 100%) !important;
  --interactive-normal: hsl(0, 0%, 100%) !important;
  --italic-color: hsl(0, 0%, 15%) !important;
  --light: hsl(0, 0%, 100%) !important;
  --lightgray: hsl(0, 0%, 93%) !important;
  --link-color: hsl(258, 75%, 63%) !important;
  --link-color-hover: hsla(258, 75%, 63%, 60%) !important;
  --link-external-color: hsl(258, 75%, 63%) !important;
  --link-external-color-hover: hsla(258, 75%, 63%, 60%) !important;
  --link-external-color-lt: 258, 75%, 63% !important;
  --link-internal-color-lt: 258, 75%, 63% !important;
  --link-unresolved-color: hsl(258, 75%, 63%) !important;
  --link-unresolved-decoration-color: hsla(258, 75%, 63%, 0.3) !important;
  --list-bullet-end-padding: 3rem !important;
  --list-indent: 2em !important;
  --list-indent-source: 0.75em !important;
  --list-marker-color: hsl(0, 0%, 35%) !important;
  --list-marker-color-collapsed: hsl(258, 75%, 63%) !important;
  --list-marker-color-hover: hsl(0, 0%, 20%) !important;
  --mark-highlight-base: hsl(42, 88%, 83%) !important;
  --menu-background: hsl(0, 0%, 93%) !important;
  --menu-border-color: hsl(252, 84%, 83%) !important;
  --menu-shadow: hsla(0, 0%, 0%, 10%) 0 1px 2px 0 !important;
  --metadata-border-color: hsl(0, 0%, 69%) !important;
  --metadata-divider-color: hsl(0, 0%, 69%) !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: hsl(0, 0%, 93%) !important;
  --metadata-input-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: hsl(0, 0%, 15%) !important;
  --metadata-label-background-active: hsl(0, 0%, 93%) !important;
  --metadata-label-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: hsl(0, 0%, 20%) !important;
  --metadata-label-text-color-hover: hsl(0, 0%, 20%) !important;
  --metadata-property-background-active: hsla(251, 87%, 94%, 90%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(252, 84%, 83%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(252, 84%, 83%) !important;
  --modal-background: hsl(0, 0%, 100%) !important;
  --modal-border-color: hsl(0, 0%, 69%) !important;
  --nav-collapse-icon-color: hsl(0, 0%, 35%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0, 0%, 35%) !important;
  --nav-header-padding-bottom: 40px !important;
  --nav-heading-color: hsl(0, 0%, 15%) !important;
  --nav-heading-color-collapsed: hsl(0, 0%, 35%) !important;
  --nav-heading-color-collapsed-hover: hsl(0, 0%, 20%) !important;
  --nav-heading-color-hover: hsl(0, 0%, 15%) !important;
  --nav-indentation-guide-color: hsla(0, 0%, 69%, 75%) !important;
  --nav-item-background-active: hsla(251, 87%, 94%, 90%) !important;
  --nav-item-background-hover: hsla(251, 87%, 94%, 90%) !important;
  --nav-item-background-selected: hsla(258, 75%, 63%, 0.15) !important;
  --nav-item-children-margin-left: 13px !important;
  --nav-item-color: hsl(0, 0%, 20%) !important;
  --nav-item-color-active: hsl(0, 0%, 15%) !important;
  --nav-item-color-highlighted: hsl(258, 75%, 63%) !important;
  --nav-item-color-hover: hsl(258, 75%, 63%) !important;
  --nav-item-color-selected: hsl(0, 0%, 15%) !important;
  --nav-item-padding: 2px 8px 2px 24px !important;
  --nav-item-parent-padding: 2px 8px 2px 24px !important;
  --nav-tag-color: hsl(0, 0%, 35%) !important;
  --nav-tag-color-active: hsl(0, 0%, 20%) !important;
  --nav-tag-color-hover: hsl(0, 0%, 20%) !important;
  --p-spacing: 0.5em !important;
  --pdf-background: hsl(0, 0%, 100%) !important;
  --pdf-page-background: hsl(0, 0%, 100%) !important;
  --pdf-sidebar-background: hsl(0, 0%, 100%) !important;
  --pill-border-color: hsl(0, 0%, 69%) !important;
  --pill-border-color-hover: hsl(252, 84%, 83%) !important;
  --pill-color: hsl(0, 0%, 20%) !important;
  --pill-color-hover: hsl(0, 0%, 15%) !important;
  --pill-color-remove: hsl(0, 0%, 35%) !important;
  --pill-color-remove-hover: hsl(258, 75%, 63%) !important;
  --pill-radius: 4px !important;
  --prompt-background: hsl(0, 0%, 100%) !important;
  --prompt-border-color: hsl(0, 0%, 69%) !important;
  --raised-background: color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent) linear-gradient(hsl(0, 0%, 100%), color-mix(in srgb, hsl(0, 0%, 100%) 65%, transparent)) !important;
  --ribbon-background: hsl(0, 0%, 93%) !important;
  --ribbon-background-collapsed: hsl(0, 0%, 93%) !important;
  --scroll-bar-size: 12px !important;
  --scroll-button-background-color: hsl(0, 0%, 100%) !important;
  --scrollbar-active-thumb-bg: hsl(251, 87%, 94%) !important;
  --scrollbar-bg: hsl(0, 0%, 93%) !important;
  --scrollbar-thumb-bg: hsl(0, 0%, 96%) !important;
  --search-clear-button-color: hsl(0, 0%, 20%) !important;
  --search-icon-color: hsl(0, 0%, 20%) !important;
  --search-result-background: hsl(0, 0%, 100%) !important;
  --secondary: hsl(258, 75%, 63%) !important;
  --setting-group-heading-color: hsl(0, 0%, 15%) !important;
  --setting-items-background: hsl(0, 0%, 100%) !important;
  --setting-items-border-color: hsl(0, 0%, 69%) !important;
  --setting-items-padding: 8px !important;
  --shadow-color-hsl: 0, 0%, 0% !important;
  --shadow-l: hsla(0, 0%, 0%, 3%) 0 1px 2px, hsla(0, 0%, 0%, 3%) 0 2px 4px,
  	hsla(0, 0%, 0%, 3%) 0 4px 8px, hsla(0, 0%, 0%, 3%) 0 6px 12px !important;
  --shadow-s: hsla(0, 0%, 0%, 10%) 0 1px 2px 0 !important;
  --slider-thumb-border-color: hsl(252, 84%, 83%) !important;
  --slider-thumb-radius: 4px !important;
  --slider-thumb-width: 10px !important;
  --slider-track-background: hsl(0, 0%, 69%) !important;
  --status-bar-background: hsl(0, 0%, 93%) !important;
  --status-bar-background-color-dt: #2b2b2b !important;
  --status-bar-background-color-lt: #ebecef !important;
  --status-bar-border-color: hsl(0, 0%, 69%) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: hsl(0, 0%, 20%) !important;
  --strikethrough-line-color: hsl(0, 0%, 20%) !important;
  --strikethrough-line-color-lt: hsl(0, 0%, 20%) !important;
  --strikethrough-text-color: hsl(0, 0%, 20%) !important;
  --strikethrough-text-color-lt: hsl(0, 0%, 20%) !important;
  --suggestion-background: hsl(0, 0%, 100%) !important;
  --sync-avatar-color-1: hsl(3, 68%, 52%) !important;
  --sync-avatar-color-2: hsl(31, 100%, 36%) !important;
  --sync-avatar-color-3: hsl(38, 62%, 37%) !important;
  --sync-avatar-color-4: hsl(93, 100%, 27%) !important;
  --sync-avatar-color-5: hsl(184, 100%, 28%) !important;
  --sync-avatar-color-6: hsl(221, 67%, 56%) !important;
  --sync-avatar-color-7: hsl(258, 75%, 63%) !important;
  --sync-avatar-color-8: hsl(320, 60%, 50%) !important;
  --tab-background-active: hsl(0, 0%, 100%) !important;
  --tab-container-background: hsl(0, 0%, 93%) !important;
  --tab-divider-color: hsl(252, 84%, 83%) !important;
  --tab-outline-color: hsl(0, 0%, 69%) !important;
  --tab-radius-active: 8px !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-header-width: 41px !important;
  --tab-stacked-shadow: 0 !important;
  --tab-switcher-background: hsl(0, 0%, 93%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0, 0%, 93%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 75%, 63%) !important;
  --tab-text-color: hsl(0, 0%, 35%) !important;
  --tab-text-color-active: hsl(0, 0%, 20%) !important;
  --tab-text-color-focused: hsl(0, 0%, 20%) !important;
  --tab-text-color-focused-active: hsl(0, 0%, 20%) !important;
  --tab-text-color-focused-active-current: hsl(0, 0%, 15%) !important;
  --tab-text-color-focused-highlighted: hsl(258, 75%, 63%) !important;
  --table-add-button-border-color: hsl(0, 0%, 69%) !important;
  --table-border-color: hsl(0, 0%, 69%) !important;
  --table-drag-handle-background-active: hsl(252, 84%, 83%) !important;
  --table-drag-handle-color: hsl(0, 0%, 35%) !important;
  --table-drag-handle-color-active: hsl(258, 75%, 63%) !important;
  --table-header-border-color: hsl(0, 0%, 69%) !important;
  --table-header-color: hsl(0, 0%, 15%) !important;
  --table-selection: hsla(258, 75%, 63%, 0.1) !important;
  --table-selection-border-color: hsl(252, 84%, 83%) !important;
  --tag-background: hsla(258, 75%, 63%, 0.1) !important;
  --tag-background-hover: hsla(258, 75%, 63%, 0.2) !important;
  --tag-border-color: hsla(258, 75%, 63%, 0.15) !important;
  --tag-border-color-hover: hsla(258, 75%, 63%, 0.15) !important;
  --tag-border-width: 2px !important;
  --tag-color: hsl(258, 75%, 63%) !important;
  --tag-color-hover: hsl(258, 75%, 63%) !important;
  --tag-padding-x: 0.75ch !important;
  --tag-padding-y: 0 !important;
  --tag-radius: 4px !important;
  --tag-size: 0.8em !important;
  --tertiary: hsl(252, 84%, 83%) !important;
  --text-accent: hsl(258, 75%, 63%) !important;
  --text-accent-hover: hsl(252, 84%, 83%) !important;
  --text-bold-color-lt: hsl(0, 0%, 15%) !important;
  --text-error: hsl(3, 68%, 52%) !important;
  --text-faint: hsl(0, 0%, 35%) !important;
  --text-faint-hsl: 0, 0%, 35% !important;
  --text-highlight-bg: hsl(251, 87%, 94%) !important;
  --text-italic-bold-color-lt: hsl(0, 0%, 15%) !important;
  --text-italic-color-lt: hsl(0, 0%, 15%) !important;
  --text-muted: hsl(0, 0%, 20%) !important;
  --text-muted-hsl: 0, 0%, 20% !important;
  --text-normal: hsl(0, 0%, 15%) !important;
  --text-normal-hsl: 0, 0%, 15% !important;
  --text-on-accent: hsl(258, 75%, 63%) !important;
  --text-on-accent-inverted: hsl(0, 0%, 15%) !important;
  --text-selection: hsla(252, 84%, 83%, 55%) !important;
  --text-success: hsl(93, 100%, 27%) !important;
  --text-warning: hsl(31, 100%, 36%) !important;
  --textHighlight: hsl(251, 87%, 94%) !important;
  --titleFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: hsl(0, 0%, 93%) !important;
  --titlebar-background-focused: hsl(0, 0%, 93%) !important;
  --titlebar-border-color: hsl(0, 0%, 69%) !important;
  --titlebar-text-color: hsl(0, 0%, 20%) !important;
  --titlebar-text-color-focused: hsl(0, 0%, 15%) !important;
  --toggle-radius: 4px !important;
  --toggle-s-border-width: 1px !important;
  --toggle-s-thumb-height: 18px !important;
  --toggle-s-thumb-width: 18px !important;
  --toggle-s-width: 44px !important;
  --toggle-thumb-color: hsl(0, 0%, 100%) !important;
  --toggle-thumb-height: 20px !important;
  --toggle-thumb-radius: 3px !important;
  --toggle-thumb-width: 20px !important;
  --toggle-width: 42px !important;
  --traffic-lights-offset-x: 41px !important;
  --traffic-lights-offset-y: 41px !important;
  --underline-line-color: hsl(0, 0%, 15%) !important;
  --underline-line-color-lt: hsl(0, 0%, 15%) !important;
  --underline-text-color: hsl(0, 0%, 15%) !important;
  --underline-text-color-lt: hsl(0, 0%, 15%) !important;
  --vault-name-font-size: 15px !important;
  --vault-profile-color: hsl(0, 0%, 15%) !important;
  --vault-profile-color-hover: hsl(0, 0%, 15%) !important;
  --vault-profile-font-size: 15px !important;
  --window-border: 1px solid hsl(0, 0%, 69%) !important;
  --window-border-color: hsl(0, 0%, 69%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(237, 237, 237);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(176, 176, 176);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgba(235, 235, 235, 0.8);
  border-color: rgb(176, 176, 176);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(176, 176, 176);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(132, 90, 231, 0.1);
  border-radius: 4px;
  color: rgb(132, 90, 231);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(176, 176, 176);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(237, 237, 237);
  border-left-color: rgb(176, 176, 176);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(231, 226, 253);
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: line-through 2px rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
  text-decoration-thickness: 2px;
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(132, 90, 231);
  font-size: 15px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(176, 176, 176);
  border-width: 2px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(245, 245, 245);
  border-color: rgb(190, 175, 248);
}

html[saved-theme="light"] body p {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration: underline rgba(132, 90, 231, 0.3);
  text-decoration-color: rgba(132, 90, 231, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body dt {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(89, 89, 89);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(245, 245, 245);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body table {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 8px;
  width: 178.25px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(38, 38, 38);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
  font-family: "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(153, 110, 36);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(153, 110, 36);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(153, 110, 36);
  border-left-color: rgb(153, 110, 36);
  border-right-color: rgb(153, 110, 36);
  border-top-color: rgb(153, 110, 36);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(190, 175, 248);
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(230, 230, 230, 0.2);
  border-bottom-color: rgb(38, 38, 38);
  border-bottom-style: solid;
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-right-style: solid;
  border-top-color: rgb(38, 38, 38);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-width: 2px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 2px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 2px;
  border-top-color: rgb(176, 176, 176);
  border-top-width: 2px;
  margin-left: -18.4px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(0, 0, 0, 0);
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

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  box-shadow: rgba(0, 0, 0, 0.03) 0px 1px 2px 0px, rgba(0, 0, 0, 0.03) 0px 2px 4px 0px, rgba(0, 0, 0, 0.03) 0px 4px 8px 0px, rgba(0, 0, 0, 0.03) 0px 6px 12px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(132, 90, 231);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(132, 90, 231);
  border-left-color: rgb(132, 90, 231);
  border-right-color: rgb(132, 90, 231);
  border-top-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(132, 90, 231);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(231, 226, 253);
  color: rgb(132, 90, 231);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(176, 176, 176);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(231, 226, 253);
  border-bottom-color: rgb(132, 90, 231);
  border-left-color: rgb(132, 90, 231);
  border-right-color: rgb(132, 90, 231);
  border-top-color: rgb(132, 90, 231);
  color: rgb(132, 90, 231);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(231, 226, 253);
  color: rgb(132, 90, 231);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(132, 90, 231, 0.1);
  border-bottom-color: rgba(132, 90, 231, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgba(132, 90, 231, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(132, 90, 231, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(132, 90, 231, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(132, 90, 231);
}

html[saved-theme="light"] body h1 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgba(176, 176, 176, 0.75);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(38, 38, 38);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(235, 235, 235, 0.8);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(51, 51, 51);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(132, 90, 231);
  stroke: rgb(132, 90, 231);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(89, 89, 89);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(235, 235, 235, 0.8);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(176, 176, 176);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(176, 176, 176);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(176, 176, 176);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(38, 38, 38);
  font-family: "??", "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(176, 176, 176);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 2px;
  border-left-color: rgb(176, 176, 176);
  border-left-width: 2px;
  border-right-color: rgb(176, 176, 176);
  border-right-width: 2px;
  border-top-color: rgb(176, 176, 176);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 2px;
  color: rgb(132, 90, 231);
}`,
  },
};
