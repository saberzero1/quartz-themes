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
  --background-modifier-active-hover: rgba(188, 158, 224, 0.1) !important;
  --background-modifier-border: rgb(77, 77, 77) !important;
  --background-modifier-border-focus: rgb(132, 76, 184) !important;
  --background-modifier-border-hover: rgb(132, 76, 184) !important;
  --background-modifier-error: rgb(238, 146, 140) !important;
  --background-modifier-error-hover: rgb(238, 146, 140) !important;
  --background-modifier-form-field: rgb(20, 20, 20) !important;
  --background-modifier-form-field-hover: rgb(20, 20, 20) !important;
  --background-modifier-hover: rgba(54, 28, 79, 0.9) !important;
  --background-modifier-success: rgb(81, 194, 89) !important;
  --background-primary: rgb(46, 46, 46) !important;
  --background-primary-alt: rgb(77, 77, 77) !important;
  --background-primary-alt-hsl: 0, 0%, 30% !important;
  --background-primary-blur: rgb(46, 46, 46) !important;
  --background-primary-hsl: 0, 0%, 18% !important;
  --background-secondary: rgb(31, 31, 31) !important;
  --background-secondary-alt: rgb(20, 20, 20) !important;
  --background-secondary-alt-blur: rgba(20, 20, 20, 0.8) !important;
  --background-secondary-alt-hsl: 0, 0%, 8% !important;
  --background-secondary-blur: rgba(33, 33, 33, 0.8) !important;
  --background-secondary-blur-hsl: 0, 0%, 13% !important;
  --background-secondary-hsl: 0, 0%, 12% !important;
  --bases-cards-background: rgb(46, 46, 46) !important;
  --bases-cards-cover-background: rgb(77, 77, 77) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(77, 77, 77) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(132, 76, 184) !important;
  --bases-embed-border-color: rgb(77, 77, 77) !important;
  --bases-group-heading-property-color: rgb(219, 219, 219) !important;
  --bases-table-border-color: rgb(77, 77, 77) !important;
  --bases-table-cell-background-active: rgb(20, 20, 20) !important;
  --bases-table-cell-background-disabled: rgb(31, 31, 31) !important;
  --bases-table-cell-background-selected: rgba(188, 158, 224, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(132, 76, 184) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(132, 76, 184) !important;
  --bases-table-group-background: rgb(77, 77, 77) !important;
  --bases-table-header-background: rgb(20, 20, 20) !important;
  --bases-table-header-background-hover: rgba(54, 28, 79, 0.9) !important;
  --bases-table-header-color: rgb(219, 219, 219) !important;
  --bases-table-summary-background: rgb(46, 46, 46) !important;
  --bases-table-summary-background-hover: rgba(54, 28, 79, 0.9) !important;
  --blockquote-background-color: rgb(31, 31, 31) !important;
  --blockquote-border-color: rgb(77, 77, 77) !important;
  --blur-background: color-mix(in srgb, rgb(31, 31, 31) 65%, transparent) linear-gradient(rgb(31, 31, 31), color-mix(in srgb, rgb(31, 31, 31) 65%, transparent)) !important;
  --blur-intensity: 8px !important;
  --bodyFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(232, 232, 232) !important;
  --button-radius: 4px !important;
  --callout-background-alpha: 20%;
  --callout-padding: 4px;
  --callout-radius: 8px;
  --canvas-background: rgb(46, 46, 46) !important;
  --canvas-background-color: 0, 0%, 16% !important;
  --canvas-card-label-color: rgb(207, 207, 207) !important;
  --canvas-color: 0, 0%, 40% !important;
  --canvas-dot-pattern: rgba(77, 77, 77, 0.8) !important;
  --canvas-highlight-color: 0, 0%, 67% !important;
  --caret-color: rgb(232, 232, 232) !important;
  --cg-nt-tbar-bg-color: rgb(31, 31, 31) !important;
  --cg-nt-tbar-top-sticky-pos-desktop: -33px !important;
  --checkbox-border-color: rgb(77, 77, 77) !important;
  --checkbox-border-color-hover: rgb(132, 76, 184) !important;
  --checkbox-color: rgb(46, 46, 46) !important;
  --checkbox-color-hover: rgb(132, 76, 184) !important;
  --checkbox-marker-color: rgb(188, 158, 224) !important;
  --checklist-done-color: rgb(132, 76, 184) !important;
  --code-background: rgb(20, 20, 20) !important;
  --code-border-color: rgb(77, 77, 77) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: rgba(54, 28, 79, 0.9) !important;
  --code-comment: rgb(171, 171, 171) !important;
  --code-function: rgb(207, 169, 63) !important;
  --code-important: rgb(241, 150, 80) !important;
  --code-keyword: rgb(231, 146, 189) !important;
  --code-normal: rgb(232, 232, 232) !important;
  --code-operator: rgb(238, 146, 140) !important;
  --code-property: rgb(74, 185, 222) !important;
  --code-punctuation: rgb(219, 219, 219) !important;
  --code-string: rgb(81, 194, 89) !important;
  --code-tag: rgb(238, 146, 140) !important;
  --code-value: rgb(188, 158, 224) !important;
  --codeFont: "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(207, 207, 207) !important;
  --collapse-icon-color-collapsed: rgb(232, 232, 232) !important;
  --color-accent: rgb(188, 158, 224) !important;
  --color-accent-1: rgb(132, 76, 184) !important;
  --color-accent-2: rgb(54, 28, 79) !important;
  --color-accent-base-dt: 2, 55%, 19% !important;
  --color-accent-base-lt: 2, 55%, 19% !important;
  --color-accent-hsl: 267, 52%, 75% !important;
  --color-accent-text-dt: 4, 74%, 74% !important;
  --color-accent-text-lt: 4, 74%, 74% !important;
  --color-accent-tint-dt: 3, 49%, 46% !important;
  --color-accent-tint-lt: 3, 49%, 46% !important;
  --color-blue: rgb(152, 172, 230) !important;
  --color-blue-base: rgb(25, 38, 77) !important;
  --color-blue-base-hsl: 225, 50%, 20% !important;
  --color-blue-text: rgb(152, 172, 230) !important;
  --color-blue-text-hsl: 225, 61%, 75% !important;
  --color-blue-tint: rgb(70, 99, 180) !important;
  --color-blue-tint-hsl: 224, 44%, 49% !important;
  --color-cyan: rgb(74, 185, 222) !important;
  --color-cyan-base: rgb(12, 44, 55) !important;
  --color-cyan-base-hsl: 195, 65%, 13% !important;
  --color-cyan-text: rgb(74, 185, 222) !important;
  --color-cyan-text-hsl: 195, 69%, 58% !important;
  --color-cyan-tint: rgb(42, 109, 132) !important;
  --color-cyan-tint-hsl: 195, 52%, 34% !important;
  --color-green: rgb(81, 194, 89) !important;
  --color-green-base: rgb(14, 47, 16) !important;
  --color-green-base-hsl: 124, 54%, 12% !important;
  --color-green-text: rgb(81, 194, 89) !important;
  --color-green-text-hsl: 124, 48%, 54% !important;
  --color-green-tint: rgb(47, 117, 50) !important;
  --color-green-tint-hsl: 123, 43%, 32% !important;
  --color-grey-base: rgb(41, 41, 41) !important;
  --color-grey-base-hsl: 0, 0%, 16% !important;
  --color-grey-text: rgb(171, 171, 171) !important;
  --color-grey-text-hsl: 0, 0%, 67% !important;
  --color-grey-tint: rgb(102, 102, 102) !important;
  --color-grey-tint-hsl: 0, 0%, 40% !important;
  --color-mint-base: rgb(3, 48, 37) !important;
  --color-mint-base-hsl: 165, 88%, 10% !important;
  --color-mint-text: rgb(38, 192, 156) !important;
  --color-mint-text-hsl: 166, 67%, 45% !important;
  --color-mint-tint: rgb(18, 115, 92) !important;
  --color-mint-tint-hsl: 166, 73%, 26% !important;
  --color-orange: rgb(241, 150, 80) !important;
  --color-orange-base: rgb(63, 35, 13) !important;
  --color-orange-base-hsl: 26, 65%, 15% !important;
  --color-orange-text: rgb(241, 150, 80) !important;
  --color-orange-text-hsl: 26, 85%, 63% !important;
  --color-orange-tint: rgb(144, 89, 44) !important;
  --color-orange-tint-hsl: 27, 53%, 37% !important;
  --color-pink: rgb(231, 146, 189) !important;
  --color-pink-base: rgb(71, 21, 50) !important;
  --color-pink-base-hsl: 325, 55%, 18% !important;
  --color-pink-text: rgb(231, 146, 189) !important;
  --color-pink-text-hsl: 330, 64%, 74% !important;
  --color-pink-tint: rgb(169, 61, 124) !important;
  --color-pink-tint-hsl: 325, 47%, 45% !important;
  --color-purple: rgb(188, 158, 224) !important;
  --color-purple-base: rgb(54, 28, 79) !important;
  --color-purple-base-hsl: 271, 48%, 21% !important;
  --color-purple-text: rgb(188, 158, 224) !important;
  --color-purple-text-hsl: 267, 52%, 75% !important;
  --color-purple-tint: rgb(132, 76, 184) !important;
  --color-purple-tint-hsl: 271, 43%, 51% !important;
  --color-red: rgb(238, 146, 140) !important;
  --color-red-base: rgb(75, 24, 22) !important;
  --color-red-base-hsl: 2, 55%, 19% !important;
  --color-red-text: rgb(238, 146, 140) !important;
  --color-red-text-hsl: 4, 74%, 74% !important;
  --color-red-tint: rgb(175, 66, 60) !important;
  --color-red-tint-hsl: 3, 49%, 46% !important;
  --color-yellow: rgb(207, 169, 63) !important;
  --color-yellow-base: rgb(53, 40, 8) !important;
  --color-yellow-base-hsl: 43, 73%, 12% !important;
  --color-yellow-text: rgb(207, 169, 63) !important;
  --color-yellow-text-hsl: 44, 60%, 53% !important;
  --color-yellow-tint: rgb(126, 101, 32) !important;
  --color-yellow-tint-hsl: 44, 59%, 31% !important;
  --custom-vault-banner-icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='40' height='40'%0AviewBox='0 0 40 40'%0Astyle=' fill:%23000000'%3E%3Cpath fill='%23dbb065' d='M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z'%3E%3C/path%3E%3Cg%3E%3Cpath fill='%23f5ce85' d='M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") !important;
  --dark: rgb(232, 232, 232) !important;
  --darkgray: rgb(232, 232, 232) !important;
  --divider-color: rgb(77, 77, 77) !important;
  --divider-color-hover: rgb(132, 76, 184) !important;
  --drag-ghost-text-color: rgb(232, 232, 232) !important;
  --dropdown-background: rgb(31, 31, 31) !important;
  --dropdown-background-hover: rgb(46, 46, 46) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(77, 77, 77), inset 0 0 0 1px rgb(77, 77, 77) !important;
  --embed-border-bottom: 1px solid rgb(77, 77, 77) !important;
  --embed-border-end: 1px solid rgb(77, 77, 77) !important;
  --embed-border-start: 2px solid rgb(132, 76, 184) !important;
  --embed-border-top: 1px solid rgb(77, 77, 77) !important;
  --embed-max-height: 800px !important;
  --embed-padding: 8px 16px !important;
  --fade-away-delay: 850ms !important;
  --fade-away-opacity: 0.25 !important;
  --file-folding-offset: 20px !important;
  --file-header-background: rgb(46, 46, 46) !important;
  --file-header-background-focused: rgb(46, 46, 46) !important;
  --file-header-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 15px !important;
  --flair-background: rgb(31, 31, 31) !important;
  --flair-color: rgb(232, 232, 232) !important;
  --font-interface: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Source Sans 3" !important;
  --font-mermaid: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono" !important;
  --font-print: "Source Sans 3", Arial' !important;
  --font-text: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Source Sans 3" !important;
  --footnote-divider-color: rgb(77, 77, 77) !important;
  --footnote-id-color: rgb(219, 219, 219) !important;
  --footnote-id-color-no-occurrences: rgb(207, 207, 207) !important;
  --footnote-input-background-active: rgb(31, 31, 31) !important;
  --graph-attachment-color-dt: rgb(207, 169, 63) !important;
  --graph-controls-width: 150px !important;
  --graph-fill-color-dt: rgb(171, 171, 171) !important;
  --graph-fill-focused-color-dt: rgb(188, 158, 224) !important;
  --graph-line: rgb(77, 77, 77) !important;
  --graph-line-color-dt: rgb(77, 77, 77) !important;
  --graph-node: rgb(171, 171, 171) !important;
  --graph-node-attachment: rgb(207, 169, 63) !important;
  --graph-node-focused: rgb(188, 158, 224) !important;
  --graph-node-tag: rgb(152, 172, 230) !important;
  --graph-node-unresolved: rgb(238, 146, 140) !important;
  --graph-tag-color-dt: rgb(152, 172, 230) !important;
  --graph-text: rgb(232, 232, 232) !important;
  --graph-unresolved-color-dt: rgb(238, 146, 140) !important;
  --gray: rgb(219, 219, 219) !important;
  --h1-color: rgb(232, 232, 232) !important;
  --h1-line-height: 1.3 !important;
  --h1-size: 2.2em !important;
  --h1-text-color-dt: rgb(232, 232, 232) !important;
  --h1-weight: 800 !important;
  --h2-color: rgb(232, 232, 232) !important;
  --h2-line-height: 1.3 !important;
  --h2-size: 2em !important;
  --h2-text-color-dt: rgb(232, 232, 232) !important;
  --h2-weight: 800 !important;
  --h3-color: rgb(232, 232, 232) !important;
  --h3-line-height: 1.35 !important;
  --h3-size: 1.8em !important;
  --h3-text-color-dt: rgb(232, 232, 232) !important;
  --h3-weight: 800 !important;
  --h4-color: rgb(232, 232, 232) !important;
  --h4-size: 1.6em !important;
  --h4-text-color-dt: rgb(232, 232, 232) !important;
  --h4-weight: 800 !important;
  --h5-color: rgb(232, 232, 232) !important;
  --h5-size: 1.4em !important;
  --h5-text-color-dt: rgb(232, 232, 232) !important;
  --h5-weight: 800 !important;
  --h6-color: rgb(232, 232, 232) !important;
  --h6-size: 1.2em !important;
  --h6-text-color-dt: rgb(232, 232, 232) !important;
  --h6-weight: 800 !important;
  --header-height: 41px !important;
  --headerFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(207, 207, 207) !important;
  --heading-spacing: 1.25em !important;
  --highlight: rgb(54, 28, 79) !important;
  --highlight-text-normal: rgb(188, 158, 224) !important;
  --hr-color: rgb(77, 77, 77) !important;
  --icon-color: rgb(219, 219, 219) !important;
  --icon-color-active: rgb(132, 76, 184) !important;
  --icon-color-focused: rgb(188, 158, 224) !important;
  --icon-color-hover: rgb(188, 158, 224) !important;
  --indentation-guide-color: rgba(77, 77, 77, 0.8) !important;
  --indentation-guide-color-active: rgb(132, 76, 184) !important;
  --indentation-guide-reading-indent: -0.55em !important;
  --indentation-guide-source-indent: 0.85em !important;
  --inline-title-line-height: 1.3 !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 800 !important;
  --input-date-separator: rgb(207, 207, 207) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(207, 207, 207) !important;
  --input-radius: 4px !important;
  --interactive-accent: rgb(132, 76, 184) !important;
  --interactive-accent-base: rgb(54, 28, 79) !important;
  --interactive-accent-base-hsl: 271, 48%, 21% !important;
  --interactive-accent-hover: rgb(132, 76, 184) !important;
  --interactive-accent-hsl: 267, 52%, 75% !important;
  --interactive-accent-text: rgb(188, 158, 224) !important;
  --interactive-accent-text-hsl: 267, 52%, 75% !important;
  --interactive-accent-tint: rgb(132, 76, 184) !important;
  --interactive-accent-tint-hsl: 271, 43%, 51% !important;
  --interactive-hover: rgb(46, 46, 46) !important;
  --interactive-normal: rgb(31, 31, 31) !important;
  --italic-color: rgb(232, 232, 232) !important;
  --light: rgb(46, 46, 46) !important;
  --lightgray: rgb(31, 31, 31) !important;
  --link-color: rgb(188, 158, 224) !important;
  --link-color-hover: rgba(188, 158, 224, 0.6) !important;
  --link-external-color: rgb(188, 158, 224) !important;
  --link-external-color-dt: 267, 52%, 75% !important;
  --link-external-color-hover: rgba(188, 158, 224, 0.6) !important;
  --link-internal-color-dt: 267, 52%, 75% !important;
  --link-unresolved-color: rgb(188, 158, 224) !important;
  --link-unresolved-decoration-color: rgba(188, 158, 224, 0.3) !important;
  --list-bullet-end-padding: 3rem !important;
  --list-indent: 2em !important;
  --list-indent-source: 0.75em !important;
  --list-marker-color: rgb(207, 207, 207) !important;
  --list-marker-color-collapsed: rgb(132, 76, 184) !important;
  --list-marker-color-hover: rgb(219, 219, 219) !important;
  --mark-highlight-base: rgb(53, 40, 8) !important;
  --menu-background: rgb(31, 31, 31) !important;
  --menu-border-color: rgb(132, 76, 184) !important;
  --menu-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0 !important;
  --metadata-border-color: rgb(77, 77, 77) !important;
  --metadata-divider-color: rgb(77, 77, 77) !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: rgb(31, 31, 31) !important;
  --metadata-input-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(232, 232, 232) !important;
  --metadata-label-background-active: rgb(31, 31, 31) !important;
  --metadata-label-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(219, 219, 219) !important;
  --metadata-label-text-color-hover: rgb(219, 219, 219) !important;
  --metadata-property-background-active: rgba(54, 28, 79, 0.9) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(132, 76, 184) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(132, 76, 184) !important;
  --modal-background: rgb(20, 20, 20) !important;
  --modal-border-color: rgb(77, 77, 77) !important;
  --nav-collapse-icon-color: rgb(207, 207, 207) !important;
  --nav-collapse-icon-color-collapsed: rgb(207, 207, 207) !important;
  --nav-header-padding-bottom: 40px !important;
  --nav-heading-color: rgb(232, 232, 232) !important;
  --nav-heading-color-collapsed: rgb(207, 207, 207) !important;
  --nav-heading-color-collapsed-hover: rgb(219, 219, 219) !important;
  --nav-heading-color-hover: rgb(232, 232, 232) !important;
  --nav-indentation-guide-color: rgba(77, 77, 77, 0.8) !important;
  --nav-item-background-active: rgba(54, 28, 79, 0.9) !important;
  --nav-item-background-hover: rgba(54, 28, 79, 0.9) !important;
  --nav-item-background-selected: rgba(188, 158, 224, 0.15) !important;
  --nav-item-children-margin-left: 13px !important;
  --nav-item-color: rgb(219, 219, 219) !important;
  --nav-item-color-active: rgb(232, 232, 232) !important;
  --nav-item-color-highlighted: rgb(132, 76, 184) !important;
  --nav-item-color-hover: rgb(188, 158, 224) !important;
  --nav-item-color-selected: rgb(232, 232, 232) !important;
  --nav-item-padding: 2px 8px 2px 24px !important;
  --nav-item-parent-padding: 2px 8px 2px 24px !important;
  --nav-tag-color: rgb(207, 207, 207) !important;
  --nav-tag-color-active: rgb(219, 219, 219) !important;
  --nav-tag-color-hover: rgb(219, 219, 219) !important;
  --p-spacing: 0.5em !important;
  --pdf-background: rgb(20, 20, 20) !important;
  --pdf-page-background: rgb(46, 46, 46) !important;
  --pdf-shadow: 0 0 0 1px rgb(77, 77, 77) !important;
  --pdf-sidebar-background: rgb(20, 20, 20) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(77, 77, 77) !important;
  --pill-border-color: rgb(77, 77, 77) !important;
  --pill-border-color-hover: rgb(132, 76, 184) !important;
  --pill-color: rgb(219, 219, 219) !important;
  --pill-color-hover: rgb(232, 232, 232) !important;
  --pill-color-remove: rgb(207, 207, 207) !important;
  --pill-color-remove-hover: rgb(132, 76, 184) !important;
  --pill-radius: 4px !important;
  --prompt-background: rgb(46, 46, 46) !important;
  --prompt-border-color: rgb(77, 77, 77) !important;
  --raised-background: color-mix(in srgb, rgb(31, 31, 31) 65%, transparent) linear-gradient(rgb(31, 31, 31), color-mix(in srgb, rgb(31, 31, 31) 65%, transparent)) !important;
  --ribbon-background: rgb(31, 31, 31) !important;
  --ribbon-background-collapsed: rgb(31, 31, 31) !important;
  --scroll-bar-size: 12px !important;
  --scroll-button-background-color: rgb(46, 46, 46) !important;
  --scrollbar-active-thumb-bg: rgb(54, 28, 79) !important;
  --scrollbar-bg: rgb(31, 31, 31) !important;
  --scrollbar-thumb-bg: rgb(77, 77, 77) !important;
  --search-clear-button-color: rgb(219, 219, 219) !important;
  --search-icon-color: rgb(219, 219, 219) !important;
  --search-result-background: rgb(46, 46, 46) !important;
  --secondary: rgb(132, 76, 184) !important;
  --setting-group-heading-color: rgb(232, 232, 232) !important;
  --setting-items-background: rgb(20, 20, 20) !important;
  --setting-items-border-color: rgb(77, 77, 77) !important;
  --setting-items-padding: 8px !important;
  --shadow-color-hsl: 0, 0%, 0% !important;
  --shadow-l: rgba(0, 0, 0, 0.05) 0 1px 2px, rgba(0, 0, 0, 0.05) 0 2px 4px,
  	rgba(0, 0, 0, 0.05) 0 4px 8px, rgba(0, 0, 0, 0.05) 0 6px 12px !important;
  --shadow-s: rgba(0, 0, 0, 0.1) 0 1px 2px 0 !important;
  --slider-thumb-border-color: rgb(132, 76, 184) !important;
  --slider-thumb-radius: 4px !important;
  --slider-thumb-width: 10px !important;
  --slider-track-background: rgb(77, 77, 77) !important;
  --status-bar-background: rgb(31, 31, 31) !important;
  --status-bar-background-color-dt: #2b2b2b !important;
  --status-bar-background-color-lt: #ebecef !important;
  --status-bar-border-color: rgb(77, 77, 77) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: rgb(219, 219, 219) !important;
  --strikethrough-line-color: rgb(219, 219, 219) !important;
  --strikethrough-line-color-dt: rgb(219, 219, 219) !important;
  --strikethrough-text-color: rgb(219, 219, 219) !important;
  --strikethrough-text-color-dt: rgb(219, 219, 219) !important;
  --suggestion-background: rgb(46, 46, 46) !important;
  --sync-avatar-color-1: rgb(238, 146, 140) !important;
  --sync-avatar-color-2: rgb(241, 150, 80) !important;
  --sync-avatar-color-3: rgb(207, 169, 63) !important;
  --sync-avatar-color-4: rgb(81, 194, 89) !important;
  --sync-avatar-color-5: rgb(74, 185, 222) !important;
  --sync-avatar-color-6: rgb(152, 172, 230) !important;
  --sync-avatar-color-7: rgb(188, 158, 224) !important;
  --sync-avatar-color-8: rgb(231, 146, 189) !important;
  --tab-background-active: rgb(46, 46, 46) !important;
  --tab-container-background: rgb(31, 31, 31) !important;
  --tab-divider-color: rgb(132, 76, 184) !important;
  --tab-outline-color: rgb(77, 77, 77) !important;
  --tab-radius-active: 8px !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-header-width: 41px !important;
  --tab-stacked-shadow: 0 !important;
  --tab-switcher-background: rgb(31, 31, 31) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(31, 31, 31), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(188, 158, 224) !important;
  --tab-text-color: rgb(207, 207, 207) !important;
  --tab-text-color-active: rgb(219, 219, 219) !important;
  --tab-text-color-focused: rgb(219, 219, 219) !important;
  --tab-text-color-focused-active: rgb(219, 219, 219) !important;
  --tab-text-color-focused-active-current: rgb(232, 232, 232) !important;
  --tab-text-color-focused-highlighted: rgb(132, 76, 184) !important;
  --table-add-button-border-color: rgb(77, 77, 77) !important;
  --table-border-color: rgb(77, 77, 77) !important;
  --table-drag-handle-background-active: rgb(132, 76, 184) !important;
  --table-drag-handle-color: rgb(207, 207, 207) !important;
  --table-drag-handle-color-active: rgb(188, 158, 224) !important;
  --table-header-border-color: rgb(77, 77, 77) !important;
  --table-header-color: rgb(232, 232, 232) !important;
  --table-selection: rgba(188, 158, 224, 0.1) !important;
  --table-selection-border-color: rgb(132, 76, 184) !important;
  --tag-background: rgba(188, 158, 224, 0.1) !important;
  --tag-background-hover: rgba(188, 158, 224, 0.2) !important;
  --tag-border-color: rgba(188, 158, 224, 0.15) !important;
  --tag-border-color-hover: rgba(188, 158, 224, 0.15) !important;
  --tag-border-width: 2px !important;
  --tag-color: rgb(132, 76, 184) !important;
  --tag-color-hover: rgb(132, 76, 184) !important;
  --tag-padding-x: 0.75ch !important;
  --tag-padding-y: 0 !important;
  --tag-radius: 4px !important;
  --tag-size: 0.8em !important;
  --tertiary: rgb(132, 76, 184) !important;
  --text-accent: rgb(132, 76, 184) !important;
  --text-accent-hover: rgb(132, 76, 184) !important;
  --text-bold-color-dt: rgb(232, 232, 232) !important;
  --text-error: rgb(238, 146, 140) !important;
  --text-faint: rgb(207, 207, 207) !important;
  --text-faint-hsl: 0, 0%, 81% !important;
  --text-highlight-bg: rgb(54, 28, 79) !important;
  --text-italic-bold-color-dt: rgb(232, 232, 232) !important;
  --text-italic-color-dt: rgb(232, 232, 232) !important;
  --text-muted: rgb(219, 219, 219) !important;
  --text-muted-hsl: 0, 0%, 86% !important;
  --text-normal: rgb(232, 232, 232) !important;
  --text-normal-hsl: 0, 0%, 91% !important;
  --text-on-accent: rgb(188, 158, 224) !important;
  --text-on-accent-inverted: rgb(232, 232, 232) !important;
  --text-selection: rgba(132, 76, 184, 0.55) !important;
  --text-success: rgb(81, 194, 89) !important;
  --text-warning: rgb(241, 150, 80) !important;
  --textHighlight: rgb(54, 28, 79) !important;
  --titleFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(31, 31, 31) !important;
  --titlebar-background-focused: rgb(31, 31, 31) !important;
  --titlebar-border-color: rgb(77, 77, 77) !important;
  --titlebar-text-color: rgb(219, 219, 219) !important;
  --titlebar-text-color-focused: rgb(232, 232, 232) !important;
  --toggle-radius: 4px !important;
  --toggle-s-border-width: 1px !important;
  --toggle-s-thumb-height: 18px !important;
  --toggle-s-thumb-width: 18px !important;
  --toggle-s-width: 44px !important;
  --toggle-thumb-color: rgb(232, 232, 232) !important;
  --toggle-thumb-height: 20px !important;
  --toggle-thumb-radius: 3px !important;
  --toggle-thumb-width: 20px !important;
  --toggle-width: 42px !important;
  --traffic-lights-offset-x: 41px !important;
  --traffic-lights-offset-y: 41px !important;
  --underline-line-color: rgb(232, 232, 232) !important;
  --underline-line-color-dt: rgb(232, 232, 232) !important;
  --underline-text-color: rgb(232, 232, 232) !important;
  --underline-text-color-dt: rgb(232, 232, 232) !important;
  --vault-name-font-size: 15px !important;
  --vault-profile-color: rgb(232, 232, 232) !important;
  --vault-profile-color-hover: rgb(232, 232, 232) !important;
  --vault-profile-font-size: 15px !important;
  --window-border: 1px solid rgb(77, 77, 77) !important;
  --window-border-color: rgb(77, 77, 77) !important;
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
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(54, 28, 79);
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 232, 232) none 0px;
  text-decoration: rgb(232, 232, 232);
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

html[saved-theme="dark"] body p {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 219, 219) none 0px;
  text-decoration: rgb(219, 219, 219);
  text-decoration-color: rgb(219, 219, 219);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration: underline rgb(188, 158, 224);
  text-decoration-color: rgb(188, 158, 224);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(188, 158, 224);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(188, 158, 224) none 0px;
  text-decoration: underline rgb(188, 158, 224);
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
  text-decoration: rgb(207, 207, 207);
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
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(132, 76, 184);
  text-decoration: line-through rgb(132, 76, 184);
  text-decoration-color: rgb(132, 76, 184);
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
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(232, 232, 232);
  text-decoration: rgb(232, 232, 232);
  text-decoration-color: rgb(232, 232, 232);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(102, 102, 102);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(102, 102, 102);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgba(41, 41, 41, 0.2);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  text-decoration: rgb(232, 232, 232);
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
  text-decoration: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(232, 232, 232);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(219, 219, 219);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(219, 219, 219);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(54, 28, 79);
  border-bottom-color: rgb(132, 76, 184);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(132, 76, 184);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(132, 76, 184);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(132, 76, 184);
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(188, 158, 224);
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
  text-decoration: rgb(219, 219, 219);
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
  text-decoration: rgb(219, 219, 219);
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
  text-decoration: rgb(219, 219, 219);
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
  text-decoration: underline dotted rgb(232, 232, 232);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-border-width: 2px !important;
  --background-modifier-active-hover: rgba(132, 90, 231, 0.1) !important;
  --background-modifier-border: rgb(176, 176, 176) !important;
  --background-modifier-border-focus: rgb(190, 175, 248) !important;
  --background-modifier-border-hover: rgb(190, 175, 248) !important;
  --background-modifier-error: rgb(216, 58, 49) !important;
  --background-modifier-error-hover: rgb(216, 58, 49) !important;
  --background-modifier-form-field: rgb(255, 255, 255) !important;
  --background-modifier-form-field-hover: rgb(255, 255, 255) !important;
  --background-modifier-hover: rgba(231, 226, 253, 0.9) !important;
  --background-modifier-success: rgb(62, 138, 0) !important;
  --background-primary: rgb(255, 255, 255) !important;
  --background-primary-alt: rgb(245, 245, 245) !important;
  --background-primary-alt-hsl: 0, 0%, 96% !important;
  --background-primary-blur: rgb(255, 255, 255) !important;
  --background-primary-hsl: 0, 0%, 100% !important;
  --background-secondary: rgb(237, 237, 237) !important;
  --background-secondary-alt: rgb(176, 176, 176) !important;
  --background-secondary-alt-blur: rgba(176, 176, 176, 0.8) !important;
  --background-secondary-alt-hsl: 0, 0%, 69% !important;
  --background-secondary-blur: rgba(235, 235, 235, 0.8) !important;
  --background-secondary-blur-hsl: 0, 0%, 92% !important;
  --background-secondary-hsl: 0, 0%, 93% !important;
  --bases-cards-background: rgb(255, 255, 255) !important;
  --bases-cards-cover-background: rgb(245, 245, 245) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(176, 176, 176) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(190, 175, 248) !important;
  --bases-embed-border-color: rgb(176, 176, 176) !important;
  --bases-group-heading-property-color: rgb(51, 51, 51) !important;
  --bases-table-border-color: rgb(176, 176, 176) !important;
  --bases-table-cell-background-active: rgb(255, 255, 255) !important;
  --bases-table-cell-background-disabled: rgb(245, 245, 245) !important;
  --bases-table-cell-background-selected: rgba(132, 90, 231, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(190, 175, 248) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(190, 175, 248) !important;
  --bases-table-group-background: rgb(245, 245, 245) !important;
  --bases-table-header-background: rgb(255, 255, 255) !important;
  --bases-table-header-background-hover: rgba(231, 226, 253, 0.9) !important;
  --bases-table-header-color: rgb(51, 51, 51) !important;
  --bases-table-summary-background: rgb(255, 255, 255) !important;
  --bases-table-summary-background-hover: rgba(231, 226, 253, 0.9) !important;
  --blockquote-background-color: rgb(245, 245, 245) !important;
  --blockquote-border-color: rgb(176, 176, 176) !important;
  --blur-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --blur-intensity: 8px !important;
  --bodyFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(38, 38, 38) !important;
  --button-radius: 4px !important;
  --callout-background-alpha: 20%;
  --callout-padding: 4px;
  --callout-radius: 8px;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-background-color: 0, 0%, 90% !important;
  --canvas-card-label-color: rgb(89, 89, 89) !important;
  --canvas-color: 0, 0%, 73% !important;
  --canvas-dot-pattern: rgba(176, 176, 176, 0.75) !important;
  --canvas-highlight-color: 0, 0%, 47% !important;
  --caret-color: rgb(38, 38, 38) !important;
  --cg-nt-tbar-top-sticky-pos-desktop: -33px !important;
  --checkbox-border-color: rgb(176, 176, 176) !important;
  --checkbox-border-color-hover: rgb(190, 175, 248) !important;
  --checkbox-color: rgb(245, 245, 245) !important;
  --checkbox-color-hover: rgb(190, 175, 248) !important;
  --checkbox-marker-color: rgb(132, 90, 231) !important;
  --checklist-done-color: rgb(190, 175, 248) !important;
  --code-background: rgb(255, 255, 255) !important;
  --code-border-color: rgb(176, 176, 176) !important;
  --code-border-width: 1px !important;
  --code-bracket-background: rgba(231, 226, 253, 0.9) !important;
  --code-comment: rgb(120, 120, 120) !important;
  --code-function: rgb(153, 110, 36) !important;
  --code-important: rgb(184, 95, 0) !important;
  --code-keyword: rgb(204, 51, 153) !important;
  --code-normal: rgb(38, 38, 38) !important;
  --code-operator: rgb(216, 58, 49) !important;
  --code-property: rgb(0, 133, 143) !important;
  --code-punctuation: rgb(51, 51, 51) !important;
  --code-string: rgb(62, 138, 0) !important;
  --code-tag: rgb(216, 58, 49) !important;
  --code-value: rgb(132, 90, 231) !important;
  --codeFont: "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgb(89, 89, 89) !important;
  --collapse-icon-color-collapsed: rgb(38, 38, 38) !important;
  --color-accent: rgb(132, 90, 231) !important;
  --color-accent-1: rgb(190, 175, 248) !important;
  --color-accent-2: rgb(231, 226, 253) !important;
  --color-accent-base-dt: 7, 90%, 92% !important;
  --color-accent-base-lt: 7, 90%, 92% !important;
  --color-accent-hsl: 258, 75%, 63% !important;
  --color-accent-text-dt: 3, 68%, 52% !important;
  --color-accent-text-lt: 3, 68%, 52% !important;
  --color-accent-tint-dt: 7, 82%, 78% !important;
  --color-accent-tint-lt: 7, 82%, 78% !important;
  --color-blue: rgb(68, 115, 218) !important;
  --color-blue-base: rgb(219, 231, 250) !important;
  --color-blue-base-hsl: 217, 76%, 92% !important;
  --color-blue-text: rgb(68, 115, 218) !important;
  --color-blue-text-hsl: 221, 67%, 56% !important;
  --color-blue-tint: rgb(158, 187, 240) !important;
  --color-blue-tint-hsl: 219, 73%, 78% !important;
  --color-cyan: rgb(0, 133, 143) !important;
  --color-cyan-base: rgb(194, 237, 240) !important;
  --color-cyan-base-hsl: 184, 60%, 85% !important;
  --color-cyan-text: rgb(0, 133, 143) !important;
  --color-cyan-text-hsl: 184, 100%, 28% !important;
  --color-cyan-tint: rgb(74, 202, 211) !important;
  --color-cyan-tint-hsl: 184, 61%, 56% !important;
  --color-green: rgb(62, 138, 0) !important;
  --color-green-base: rgb(210, 235, 198) !important;
  --color-green-base-hsl: 101, 49%, 85% !important;
  --color-green-text: rgb(62, 138, 0) !important;
  --color-green-text-hsl: 93, 100%, 27% !important;
  --color-green-tint: rgb(135, 203, 98) !important;
  --color-green-tint-hsl: 99, 50%, 59% !important;
  --color-grey-base: rgb(230, 230, 230) !important;
  --color-grey-base-hsl: 0, 0%, 90% !important;
  --color-grey-text: rgb(120, 120, 120) !important;
  --color-grey-text-hsl: 0, 0%, 47% !important;
  --color-grey-tint: rgb(186, 186, 186) !important;
  --color-grey-tint-hsl: 0, 0%, 73% !important;
  --color-mint-base: rgb(193, 240, 218) !important;
  --color-mint-base-hsl: 152, 62%, 85% !important;
  --color-mint-text: rgb(0, 133, 91) !important;
  --color-mint-text-hsl: 161, 100%, 26% !important;
  --color-mint-tint: rgb(73, 208, 158) !important;
  --color-mint-tint-hsl: 158, 59%, 55% !important;
  --color-orange: rgb(184, 95, 0) !important;
  --color-orange-base: rgb(251, 224, 203) !important;
  --color-orange-base-hsl: 26, 85%, 89% !important;
  --color-orange-text: rgb(184, 95, 0) !important;
  --color-orange-text-hsl: 31, 100%, 36% !important;
  --color-orange-tint: rgb(239, 170, 113) !important;
  --color-orange-tint-hsl: 27, 80%, 69% !important;
  --color-pink: rgb(204, 51, 153) !important;
  --color-pink-base: rgb(251, 223, 238) !important;
  --color-pink-base-hsl: 328, 79%, 93% !important;
  --color-pink-text: rgb(204, 51, 153) !important;
  --color-pink-text-hsl: 320, 60%, 50% !important;
  --color-pink-tint: rgb(240, 163, 205) !important;
  --color-pink-tint-hsl: 327, 72%, 79% !important;
  --color-purple: rgb(132, 90, 231) !important;
  --color-purple-base: rgb(231, 226, 253) !important;
  --color-purple-base-hsl: 251, 87%, 94% !important;
  --color-purple-text: rgb(132, 90, 231) !important;
  --color-purple-text-hsl: 258, 75%, 63% !important;
  --color-purple-tint: rgb(190, 175, 248) !important;
  --color-purple-tint-hsl: 252, 84%, 83% !important;
  --color-red: rgb(216, 58, 49) !important;
  --color-red-base: rgb(253, 221, 216) !important;
  --color-red-base-hsl: 7, 90%, 92% !important;
  --color-red-text: rgb(216, 58, 49) !important;
  --color-red-text-hsl: 3, 68%, 52% !important;
  --color-red-tint: rgb(245, 164, 153) !important;
  --color-red-tint-hsl: 7, 82%, 78% !important;
  --color-yellow: rgb(153, 110, 36) !important;
  --color-yellow-base: rgb(250, 227, 174) !important;
  --color-yellow-base-hsl: 42, 88%, 83% !important;
  --color-yellow-text: rgb(153, 110, 36) !important;
  --color-yellow-text-hsl: 38, 62%, 37% !important;
  --color-yellow-tint: rgb(220, 181, 76) !important;
  --color-yellow-tint-hsl: 44, 67%, 58% !important;
  --custom-vault-banner-icon-url: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px'%0Awidth='40' height='40'%0AviewBox='0 0 40 40'%0Astyle=' fill:%23000000'%3E%3Cpath fill='%23dbb065' d='M1.5 35.5L1.5 4.5 11.793 4.5 14.793 7.5 35.5 7.5 35.5 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M11.586,5l2.707,2.707L14.586,8H15h20v27H2V5H11.586 M12,4H1v32h35V7H15L12,4L12,4z'%3E%3C/path%3E%3Cg%3E%3Cpath fill='%23f5ce85' d='M1.599 35.5L5.417 14.5 16.151 14.5 19.151 12.5 39.41 12.5 35.577 35.5z'%3E%3C/path%3E%3Cpath fill='%23967a44' d='M38.82,13l-3.667,22H2.198l3.636-20H16h0.303l0.252-0.168L19.303,13H38.82 M40,12H19l-3,2H5L1,36 h35L40,12L40,12z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E") !important;
  --dark: rgb(38, 38, 38) !important;
  --darkgray: rgb(38, 38, 38) !important;
  --divider-color: rgb(176, 176, 176) !important;
  --divider-color-hover: rgb(190, 175, 248) !important;
  --drag-ghost-text-color: rgb(38, 38, 38) !important;
  --dropdown-background: rgb(255, 255, 255) !important;
  --dropdown-background-hover: rgb(255, 255, 255) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(176, 176, 176), inset 0 0 0 1px rgb(176, 176, 176) !important;
  --embed-border-bottom: 1px solid rgb(176, 176, 176) !important;
  --embed-border-end: 1px solid rgb(176, 176, 176) !important;
  --embed-border-start: 2px solid rgb(190, 175, 248) !important;
  --embed-border-top: 1px solid rgb(176, 176, 176) !important;
  --embed-max-height: 800px !important;
  --embed-padding: 8px 16px !important;
  --fade-away-delay: 850ms !important;
  --fade-away-opacity: 0.25 !important;
  --file-folding-offset: 20px !important;
  --file-header-background: rgb(255, 255, 255) !important;
  --file-header-background-focused: rgb(255, 255, 255) !important;
  --file-header-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-font-size: 15px !important;
  --flair-background: rgb(255, 255, 255) !important;
  --flair-color: rgb(38, 38, 38) !important;
  --font-interface: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Source Sans 3" !important;
  --font-mermaid: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono" !important;
  --font-print: "Source Sans 3", Arial' !important;
  --font-text: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Source Sans 3" !important;
  --footnote-divider-color: rgb(176, 176, 176) !important;
  --footnote-id-color: rgb(51, 51, 51) !important;
  --footnote-id-color-no-occurrences: rgb(89, 89, 89) !important;
  --footnote-input-background-active: rgb(237, 237, 237) !important;
  --graph-attachment-color-lt: rgb(220, 181, 76) !important;
  --graph-controls-width: 150px !important;
  --graph-fill-color-lt: rgb(186, 186, 186) !important;
  --graph-fill-focused-color-lt: rgb(190, 175, 248) !important;
  --graph-line: rgb(176, 176, 176) !important;
  --graph-line-color-lt: rgb(176, 176, 176) !important;
  --graph-node: rgb(186, 186, 186) !important;
  --graph-node-attachment: rgb(220, 181, 76) !important;
  --graph-node-focused: rgb(190, 175, 248) !important;
  --graph-node-tag: rgb(158, 187, 240) !important;
  --graph-node-unresolved: rgb(245, 164, 153) !important;
  --graph-tag-color-lt: rgb(158, 187, 240) !important;
  --graph-text: rgb(38, 38, 38) !important;
  --graph-unresolved-color-lt: rgb(245, 164, 153) !important;
  --gray: rgb(51, 51, 51) !important;
  --h1-color: rgb(38, 38, 38) !important;
  --h1-line-height: 1.3 !important;
  --h1-size: 2.2em !important;
  --h1-text-color-lt: rgb(38, 38, 38) !important;
  --h1-weight: 800 !important;
  --h2-color: rgb(38, 38, 38) !important;
  --h2-line-height: 1.3 !important;
  --h2-size: 2em !important;
  --h2-text-color-lt: rgb(38, 38, 38) !important;
  --h2-weight: 800 !important;
  --h3-color: rgb(38, 38, 38) !important;
  --h3-line-height: 1.35 !important;
  --h3-size: 1.8em !important;
  --h3-text-color-lt: rgb(38, 38, 38) !important;
  --h3-weight: 800 !important;
  --h4-color: rgb(38, 38, 38) !important;
  --h4-size: 1.6em !important;
  --h4-text-color-lt: rgb(38, 38, 38) !important;
  --h4-weight: 800 !important;
  --h5-color: rgb(38, 38, 38) !important;
  --h5-size: 1.4em !important;
  --h5-text-color-lt: rgb(38, 38, 38) !important;
  --h5-weight: 800 !important;
  --h6-color: rgb(38, 38, 38) !important;
  --h6-size: 1.2em !important;
  --h6-text-color-lt: rgb(38, 38, 38) !important;
  --h6-weight: 800 !important;
  --header-height: 41px !important;
  --headerFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgb(89, 89, 89) !important;
  --heading-spacing: 1.25em !important;
  --highlight: rgb(231, 226, 253) !important;
  --highlight-text-normal: rgb(132, 90, 231) !important;
  --hr-color: rgb(176, 176, 176) !important;
  --icon-color: rgb(51, 51, 51) !important;
  --icon-color-active: rgb(132, 90, 231) !important;
  --icon-color-focused: rgb(132, 90, 231) !important;
  --icon-color-hover: rgb(132, 90, 231) !important;
  --indentation-guide-color: rgba(176, 176, 176, 0.75) !important;
  --indentation-guide-color-active: rgb(190, 175, 248) !important;
  --indentation-guide-reading-indent: -0.55em !important;
  --indentation-guide-source-indent: 0.85em !important;
  --inline-title-line-height: 1.3 !important;
  --inline-title-size: 2.2em !important;
  --inline-title-weight: 800 !important;
  --input-date-separator: rgb(89, 89, 89) !important;
  --input-height: 32px !important;
  --input-placeholder-color: rgb(89, 89, 89) !important;
  --input-radius: 4px !important;
  --interactive-accent: rgb(190, 175, 248) !important;
  --interactive-accent-base: rgb(231, 226, 253) !important;
  --interactive-accent-base-hsl: 251, 87%, 94% !important;
  --interactive-accent-hover: rgb(190, 175, 248) !important;
  --interactive-accent-hsl: 258, 75%, 63% !important;
  --interactive-accent-text: rgb(132, 90, 231) !important;
  --interactive-accent-text-hsl: 258, 75%, 63% !important;
  --interactive-accent-tint: rgb(190, 175, 248) !important;
  --interactive-accent-tint-hsl: 252, 84%, 83% !important;
  --interactive-hover: rgb(255, 255, 255) !important;
  --interactive-normal: rgb(255, 255, 255) !important;
  --italic-color: rgb(38, 38, 38) !important;
  --light: rgb(255, 255, 255) !important;
  --lightgray: rgb(237, 237, 237) !important;
  --link-color: rgb(132, 90, 231) !important;
  --link-color-hover: rgba(132, 90, 231, 0.6) !important;
  --link-external-color: rgb(132, 90, 231) !important;
  --link-external-color-hover: rgba(132, 90, 231, 0.6) !important;
  --link-external-color-lt: 258, 75%, 63% !important;
  --link-internal-color-lt: 258, 75%, 63% !important;
  --link-unresolved-color: rgb(132, 90, 231) !important;
  --link-unresolved-decoration-color: rgba(132, 90, 231, 0.3) !important;
  --list-bullet-end-padding: 3rem !important;
  --list-indent: 2em !important;
  --list-indent-source: 0.75em !important;
  --list-marker-color: rgb(89, 89, 89) !important;
  --list-marker-color-collapsed: rgb(132, 90, 231) !important;
  --list-marker-color-hover: rgb(51, 51, 51) !important;
  --mark-highlight-base: rgb(250, 227, 174) !important;
  --menu-background: rgb(237, 237, 237) !important;
  --menu-border-color: rgb(190, 175, 248) !important;
  --menu-shadow: rgba(0, 0, 0, 0.1) 0 1px 2px 0 !important;
  --metadata-border-color: rgb(176, 176, 176) !important;
  --metadata-divider-color: rgb(176, 176, 176) !important;
  --metadata-gap: 2px !important;
  --metadata-input-background-active: rgb(237, 237, 237) !important;
  --metadata-input-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(38, 38, 38) !important;
  --metadata-label-background-active: rgb(237, 237, 237) !important;
  --metadata-label-font: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(51, 51, 51) !important;
  --metadata-label-text-color-hover: rgb(51, 51, 51) !important;
  --metadata-property-background-active: rgba(231, 226, 253, 0.9) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(190, 175, 248) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(190, 175, 248) !important;
  --modal-background: rgb(255, 255, 255) !important;
  --modal-border-color: rgb(176, 176, 176) !important;
  --nav-collapse-icon-color: rgb(89, 89, 89) !important;
  --nav-collapse-icon-color-collapsed: rgb(89, 89, 89) !important;
  --nav-header-padding-bottom: 40px !important;
  --nav-heading-color: rgb(38, 38, 38) !important;
  --nav-heading-color-collapsed: rgb(89, 89, 89) !important;
  --nav-heading-color-collapsed-hover: rgb(51, 51, 51) !important;
  --nav-heading-color-hover: rgb(38, 38, 38) !important;
  --nav-indentation-guide-color: rgba(176, 176, 176, 0.75) !important;
  --nav-item-background-active: rgba(231, 226, 253, 0.9) !important;
  --nav-item-background-hover: rgba(231, 226, 253, 0.9) !important;
  --nav-item-background-selected: rgba(132, 90, 231, 0.15) !important;
  --nav-item-children-margin-left: 13px !important;
  --nav-item-color: rgb(51, 51, 51) !important;
  --nav-item-color-active: rgb(38, 38, 38) !important;
  --nav-item-color-highlighted: rgb(132, 90, 231) !important;
  --nav-item-color-hover: rgb(132, 90, 231) !important;
  --nav-item-color-selected: rgb(38, 38, 38) !important;
  --nav-item-padding: 2px 8px 2px 24px !important;
  --nav-item-parent-padding: 2px 8px 2px 24px !important;
  --nav-tag-color: rgb(89, 89, 89) !important;
  --nav-tag-color-active: rgb(51, 51, 51) !important;
  --nav-tag-color-hover: rgb(51, 51, 51) !important;
  --p-spacing: 0.5em !important;
  --pdf-background: rgb(255, 255, 255) !important;
  --pdf-page-background: rgb(255, 255, 255) !important;
  --pdf-sidebar-background: rgb(255, 255, 255) !important;
  --pill-border-color: rgb(176, 176, 176) !important;
  --pill-border-color-hover: rgb(190, 175, 248) !important;
  --pill-color: rgb(51, 51, 51) !important;
  --pill-color-hover: rgb(38, 38, 38) !important;
  --pill-color-remove: rgb(89, 89, 89) !important;
  --pill-color-remove-hover: rgb(132, 90, 231) !important;
  --pill-radius: 4px !important;
  --prompt-background: rgb(255, 255, 255) !important;
  --prompt-border-color: rgb(176, 176, 176) !important;
  --raised-background: color-mix(in srgb, rgb(255, 255, 255) 65%, transparent) linear-gradient(rgb(255, 255, 255), color-mix(in srgb, rgb(255, 255, 255) 65%, transparent)) !important;
  --ribbon-background: rgb(237, 237, 237) !important;
  --ribbon-background-collapsed: rgb(237, 237, 237) !important;
  --scroll-bar-size: 12px !important;
  --scroll-button-background-color: rgb(255, 255, 255) !important;
  --scrollbar-active-thumb-bg: rgb(231, 226, 253) !important;
  --scrollbar-bg: rgb(237, 237, 237) !important;
  --scrollbar-thumb-bg: rgb(245, 245, 245) !important;
  --search-clear-button-color: rgb(51, 51, 51) !important;
  --search-icon-color: rgb(51, 51, 51) !important;
  --search-result-background: rgb(255, 255, 255) !important;
  --secondary: rgb(132, 90, 231) !important;
  --setting-group-heading-color: rgb(38, 38, 38) !important;
  --setting-items-background: rgb(255, 255, 255) !important;
  --setting-items-border-color: rgb(176, 176, 176) !important;
  --setting-items-padding: 8px !important;
  --shadow-color-hsl: 0, 0%, 0% !important;
  --shadow-l: rgba(0, 0, 0, 0.03) 0 1px 2px, rgba(0, 0, 0, 0.03) 0 2px 4px,
  	rgba(0, 0, 0, 0.03) 0 4px 8px, rgba(0, 0, 0, 0.03) 0 6px 12px !important;
  --shadow-s: rgba(0, 0, 0, 0.1) 0 1px 2px 0 !important;
  --slider-thumb-border-color: rgb(190, 175, 248) !important;
  --slider-thumb-radius: 4px !important;
  --slider-thumb-width: 10px !important;
  --slider-track-background: rgb(176, 176, 176) !important;
  --status-bar-background: rgb(237, 237, 237) !important;
  --status-bar-background-color-dt: #2b2b2b !important;
  --status-bar-background-color-lt: #ebecef !important;
  --status-bar-border-color: rgb(176, 176, 176) !important;
  --status-bar-font-size: 13px !important;
  --status-bar-text-color: rgb(51, 51, 51) !important;
  --strikethrough-line-color: rgb(51, 51, 51) !important;
  --strikethrough-line-color-lt: rgb(51, 51, 51) !important;
  --strikethrough-text-color: rgb(51, 51, 51) !important;
  --strikethrough-text-color-lt: rgb(51, 51, 51) !important;
  --suggestion-background: rgb(255, 255, 255) !important;
  --sync-avatar-color-1: rgb(216, 58, 49) !important;
  --sync-avatar-color-2: rgb(184, 95, 0) !important;
  --sync-avatar-color-3: rgb(153, 110, 36) !important;
  --sync-avatar-color-4: rgb(62, 138, 0) !important;
  --sync-avatar-color-5: rgb(0, 133, 143) !important;
  --sync-avatar-color-6: rgb(68, 115, 218) !important;
  --sync-avatar-color-7: rgb(132, 90, 231) !important;
  --sync-avatar-color-8: rgb(204, 51, 153) !important;
  --tab-background-active: rgb(255, 255, 255) !important;
  --tab-container-background: rgb(237, 237, 237) !important;
  --tab-divider-color: rgb(190, 175, 248) !important;
  --tab-outline-color: rgb(176, 176, 176) !important;
  --tab-radius-active: 8px !important;
  --tab-stacked-font-size: 15px !important;
  --tab-stacked-header-width: 41px !important;
  --tab-stacked-shadow: 0 !important;
  --tab-switcher-background: rgb(237, 237, 237) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(237, 237, 237), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(132, 90, 231) !important;
  --tab-text-color: rgb(89, 89, 89) !important;
  --tab-text-color-active: rgb(51, 51, 51) !important;
  --tab-text-color-focused: rgb(51, 51, 51) !important;
  --tab-text-color-focused-active: rgb(51, 51, 51) !important;
  --tab-text-color-focused-active-current: rgb(38, 38, 38) !important;
  --tab-text-color-focused-highlighted: rgb(132, 90, 231) !important;
  --table-add-button-border-color: rgb(176, 176, 176) !important;
  --table-border-color: rgb(176, 176, 176) !important;
  --table-drag-handle-background-active: rgb(190, 175, 248) !important;
  --table-drag-handle-color: rgb(89, 89, 89) !important;
  --table-drag-handle-color-active: rgb(132, 90, 231) !important;
  --table-header-border-color: rgb(176, 176, 176) !important;
  --table-header-color: rgb(38, 38, 38) !important;
  --table-selection: rgba(132, 90, 231, 0.1) !important;
  --table-selection-border-color: rgb(190, 175, 248) !important;
  --tag-background: rgba(132, 90, 231, 0.1) !important;
  --tag-background-hover: rgba(132, 90, 231, 0.2) !important;
  --tag-border-color: rgba(132, 90, 231, 0.15) !important;
  --tag-border-color-hover: rgba(132, 90, 231, 0.15) !important;
  --tag-border-width: 2px !important;
  --tag-color: rgb(132, 90, 231) !important;
  --tag-color-hover: rgb(132, 90, 231) !important;
  --tag-padding-x: 0.75ch !important;
  --tag-padding-y: 0 !important;
  --tag-radius: 4px !important;
  --tag-size: 0.8em !important;
  --tertiary: rgb(190, 175, 248) !important;
  --text-accent: rgb(132, 90, 231) !important;
  --text-accent-hover: rgb(190, 175, 248) !important;
  --text-bold-color-lt: rgb(38, 38, 38) !important;
  --text-error: rgb(216, 58, 49) !important;
  --text-faint: rgb(89, 89, 89) !important;
  --text-faint-hsl: 0, 0%, 35% !important;
  --text-highlight-bg: rgb(231, 226, 253) !important;
  --text-italic-bold-color-lt: rgb(38, 38, 38) !important;
  --text-italic-color-lt: rgb(38, 38, 38) !important;
  --text-muted: rgb(51, 51, 51) !important;
  --text-muted-hsl: 0, 0%, 20% !important;
  --text-normal: rgb(38, 38, 38) !important;
  --text-normal-hsl: 0, 0%, 15% !important;
  --text-on-accent: rgb(132, 90, 231) !important;
  --text-on-accent-inverted: rgb(38, 38, 38) !important;
  --text-selection: rgba(190, 175, 248, 0.55) !important;
  --text-success: rgb(62, 138, 0) !important;
  --text-warning: rgb(184, 95, 0) !important;
  --textHighlight: rgb(231, 226, 253) !important;
  --titleFont: "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(237, 237, 237) !important;
  --titlebar-background-focused: rgb(237, 237, 237) !important;
  --titlebar-border-color: rgb(176, 176, 176) !important;
  --titlebar-text-color: rgb(51, 51, 51) !important;
  --titlebar-text-color-focused: rgb(38, 38, 38) !important;
  --toggle-radius: 4px !important;
  --toggle-s-border-width: 1px !important;
  --toggle-s-thumb-height: 18px !important;
  --toggle-s-thumb-width: 18px !important;
  --toggle-s-width: 44px !important;
  --toggle-thumb-color: rgb(255, 255, 255) !important;
  --toggle-thumb-height: 20px !important;
  --toggle-thumb-radius: 3px !important;
  --toggle-thumb-width: 20px !important;
  --toggle-width: 42px !important;
  --traffic-lights-offset-x: 41px !important;
  --traffic-lights-offset-y: 41px !important;
  --underline-line-color: rgb(38, 38, 38) !important;
  --underline-line-color-lt: rgb(38, 38, 38) !important;
  --underline-text-color: rgb(38, 38, 38) !important;
  --underline-text-color-lt: rgb(38, 38, 38) !important;
  --vault-name-font-size: 15px !important;
  --vault-profile-color: rgb(38, 38, 38) !important;
  --vault-profile-color-hover: rgb(38, 38, 38) !important;
  --vault-profile-font-size: 15px !important;
  --window-border: 1px solid rgb(176, 176, 176) !important;
  --window-border-color: rgb(176, 176, 176) !important;
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
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(231, 226, 253);
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
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

html[saved-theme="light"] body p {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration: underline rgb(132, 90, 231);
  text-decoration-color: rgb(132, 90, 231);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(132, 90, 231);
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(132, 90, 231) none 0px;
  text-decoration: underline rgb(132, 90, 231);
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
  text-decoration: rgb(89, 89, 89);
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
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Source Sans 3", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(190, 175, 248);
  text-decoration: line-through rgb(190, 175, 248);
  text-decoration-color: rgb(190, 175, 248);
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
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(186, 186, 186);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(186, 186, 186);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(186, 186, 186);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(186, 186, 186);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html[saved-theme="light"] body .callout > .callout-content {
  background-color: rgba(230, 230, 230, 0.2);
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  text-decoration: rgb(38, 38, 38);
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
  text-decoration: rgb(38, 38, 38);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(38, 38, 38);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(38, 38, 38);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(51, 51, 51);
  font-family: "??", "Source Sans 3", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(51, 51, 51);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(231, 226, 253);
  border-bottom-color: rgb(190, 175, 248);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(190, 175, 248);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(190, 175, 248);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(190, 175, 248);
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(132, 90, 231);
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
  text-decoration: rgb(51, 51, 51);
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
  text-decoration: rgb(51, 51, 51);
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
  text-decoration: rgb(51, 51, 51);
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
  text-decoration: underline dotted rgb(38, 38, 38);
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
}`,
  },
};
