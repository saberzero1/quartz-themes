import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "prime", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-default-h: 237.45 !important;
  --accent-default-l: 80% !important;
  --accent-default-s: 90% !important;
  --accent-h: 237.45 !important;
  --accent-l: 80% !important;
  --accent-s: 90% !important;
  --background-modifier-active-hover: hsla(237.45, 90%, 80%, 0.1) !important;
  --background-modifier-border: #2c394d !important;
  --background-modifier-border-focus: #1f2938 !important;
  --background-modifier-border-hover: #324158 !important;
  --background-modifier-error: #ff4140 !important;
  --background-modifier-error-hover: #ff4140 !important;
  --background-modifier-form-field: #263142 !important;
  --background-modifier-form-field-hover: #263142 !important;
  --background-modifier-hover: #19212d !important;
  --background-modifier-success: #9cfac7 !important;
  --background-primary: #0d1117 !important;
  --background-primary-alt: #0d1117 !important;
  --background-secondary: #131922 !important;
  --background-secondary-alt: #2c394d !important;
  --bases-cards-background: #0d1117 !important;
  --bases-cards-cover-background: #0d1117 !important;
  --bases-cards-shadow: 0 0 0 1px #2c394d !important;
  --bases-cards-shadow-hover: 0 0 0 1px #324158 !important;
  --bases-embed-border-color: #2c394d !important;
  --bases-group-heading-property-color: #c0c0c0 !important;
  --bases-table-border-color: #c0c0c0 !important;
  --bases-table-cell-background-active: #0d1117 !important;
  --bases-table-cell-background-disabled: #0d1117 !important;
  --bases-table-cell-background-selected: hsla(237.45, 90%, 80%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #1f2938 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #9ca0fa !important;
  --bases-table-group-background: #0d1117 !important;
  --bases-table-header-background: #0d1117 !important;
  --bases-table-header-background-hover: #19212d !important;
  --bases-table-header-color: #c0c0c0 !important;
  --bases-table-summary-background: #0d1117 !important;
  --bases-table-summary-background-hover: #19212d !important;
  --blockquote-background-color: #19212d !important;
  --blockquote-border-color: #fac79e !important;
  --blockquote-color: #c0c0c0 !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, #2c394d 65%, transparent) linear-gradient(#2c394d, color-mix(in srgb, #2c394d 65%, transparent)) !important;
  --canvas-background: #0d1117 !important;
  --canvas-card-label-color: #aea8ba !important;
  --canvas-dot-pattern: #2c394d !important;
  --caret-color: #fafbfc !important;
  --checkbox-border-color: #aea8ba !important;
  --checkbox-border-color-hover: #c0c0c0 !important;
  --checkbox-color: #263142 !important;
  --checkbox-color-hover: #263142 !important;
  --checkbox-marker-color: #9cfac7 !important;
  --checklist-done-color: #aea8ba !important;
  --code-background: #19212d !important;
  --code-border-color: #2c394d !important;
  --code-bracket-background: #19212d !important;
  --code-comment: #6272a4 !important;
  --code-function: #50fa7b !important;
  --code-important: #ff5555 !important;
  --code-keyword: #ff79c6 !important;
  --code-normal: #f8f8f2 !important;
  --code-operator: #f8f8f2 !important;
  --code-property: #ffb86c !important;
  --code-punctuation: #c0c0c0 !important;
  --code-string: #f1fa8c !important;
  --code-tag: #ff5555 !important;
  --code-value: #bd93f9 !important;
  --collapse-icon-color: #aea8ba !important;
  --collapse-icon-color-collapsed: #9ca0fa !important;
  --color-accent: hsl(237.45, 90%, 80%) !important;
  --color-accent-1: hsl(234.45, 91.8%, 92%) !important;
  --color-accent-2: hsl(232.45, 94.5%, 103.2%) !important;
  --color-accent-hsl: 237.45, 90%, 80% !important;
  --color-base-00: #0d1117 !important;
  --color-base-05: #131922 !important;
  --color-base-10: #19212d !important;
  --color-base-100: #5d79a4 !important;
  --color-base-20: #1f2938 !important;
  --color-base-25: #263142 !important;
  --color-base-30: #2c394d !important;
  --color-base-35: #324158 !important;
  --color-base-40: #384963 !important;
  --color-base-50: #3e516e !important;
  --color-base-60: #445979 !important;
  --color-base-70: #4a6184 !important;
  --color-blue: #9cfaf6 !important;
  --color-ctp-frappe-background: #303446 !important;
  --color-ctp-frappe-cyan: #81c8be !important;
  --color-ctp-frappe-faint: #949cbb !important;
  --color-ctp-frappe-foreground: #c6d0f5 !important;
  --color-ctp-frappe-green: #a6d189 !important;
  --color-ctp-frappe-muted: #838ba7 !important;
  --color-ctp-frappe-orange: #ef9f76 !important;
  --color-ctp-frappe-pink: #f4b8e4 !important;
  --color-ctp-frappe-purple: #ca9ee6 !important;
  --color-ctp-frappe-red: #e78284 !important;
  --color-ctp-frappe-yellow: #e5c890 !important;
  --color-ctp-latte-background: #eff1f5 !important;
  --color-ctp-latte-cyan: #179299 !important;
  --color-ctp-latte-faint: #8c8fa1 !important;
  --color-ctp-latte-foreground: #4c4f69 !important;
  --color-ctp-latte-green: #40a02b !important;
  --color-ctp-latte-muted: #7c7f93 !important;
  --color-ctp-latte-orange: #fe640b !important;
  --color-ctp-latte-pink: #ea76cb !important;
  --color-ctp-latte-purple: #8839ef !important;
  --color-ctp-latte-red: #d20f39 !important;
  --color-ctp-latte-yellow: #df8e1d !important;
  --color-ctp-macchiato-background: #24273a !important;
  --color-ctp-macchiato-cyan: #8bd5ca !important;
  --color-ctp-macchiato-faint: #8087a2 !important;
  --color-ctp-macchiato-foreground: #cad3f5 !important;
  --color-ctp-macchiato-green: #a6da95 !important;
  --color-ctp-macchiato-muted: #939ab7 !important;
  --color-ctp-macchiato-orange: #f5a97f !important;
  --color-ctp-macchiato-pink: #f5bde6 !important;
  --color-ctp-macchiato-purple: #c6a0f6 !important;
  --color-ctp-macchiato-red: #ed8796 !important;
  --color-ctp-macchiato-yellow: #eed49f !important;
  --color-ctp-mocha-background: #1e1e2e !important;
  --color-ctp-mocha-cyan: #94e2d5 !important;
  --color-ctp-mocha-faint: #7f849c !important;
  --color-ctp-mocha-foreground: #cdd6f4 !important;
  --color-ctp-mocha-green: #a6e3a1 !important;
  --color-ctp-mocha-muted: #9399b2 !important;
  --color-ctp-mocha-orange: #fab387 !important;
  --color-ctp-mocha-pink: #f5c2e7 !important;
  --color-ctp-mocha-purple: #cba6f7 !important;
  --color-ctp-mocha-red: #f38ba8 !important;
  --color-ctp-mocha-yellow: #f9e2af !important;
  --color-dark-one-dark-aqua: #56b6c2 !important;
  --color-dark-one-dark-background: #282c34 !important;
  --color-dark-one-dark-blue: #61afef !important;
  --color-dark-one-dark-gray-1: #5c6370 !important;
  --color-dark-one-dark-gray-2: #abb2bf !important;
  --color-dark-one-dark-green: #98c379 !important;
  --color-dark-one-dark-orange: #d19a66 !important;
  --color-dark-one-dark-purple: #c678dd !important;
  --color-dark-one-dark-red: #e06c75 !important;
  --color-dark-one-dark-yellow: #e5c07b !important;
  --color-dracula-background: #19212d !important;
  --color-dracula-comment: #6272a4 !important;
  --color-dracula-cyan: #8be9fd !important;
  --color-dracula-foreground: #f8f8f2 !important;
  --color-dracula-green: #50fa7b !important;
  --color-dracula-orange: #ffb86c !important;
  --color-dracula-pink: #ff79c6 !important;
  --color-dracula-purple: #bd93f9 !important;
  --color-dracula-red: #ff5555 !important;
  --color-dracula-yellow: #f1fa8c !important;
  --color-github-dark-background: #161b22 !important;
  --color-github-dark-blue: #6cb6ff !important;
  --color-github-dark-cyan: #a5d6ff !important;
  --color-github-dark-green: #7ee787 !important;
  --color-github-dark-orange: #ffa657 !important;
  --color-github-dark-pink: #f778ba !important;
  --color-github-dark-purple: #d2a8ff !important;
  --color-github-dark-red: #f47067 !important;
  --color-github-dark-yellow: #d29922 !important;
  --color-github-light-background: #f6f8fa !important;
  --color-github-light-blue: #086ddd !important;
  --color-github-light-cyan: #2db7b5 !important;
  --color-github-light-green: #0cb54f !important;
  --color-github-light-orange: #d96c00 !important;
  --color-github-light-pink: #c32b74 !important;
  --color-github-light-purple: #876be0 !important;
  --color-github-light-red: #cf222e !important;
  --color-github-light-yellow: #bd8e37 !important;
  --color-green: #9cfac7 !important;
  --color-halcyon-background: #171c28 !important;
  --color-halcyon-cyan: #5ccfe6 !important;
  --color-halcyon-green: #bae67e !important;
  --color-halcyon-grey-dark: #6679a4 !important;
  --color-halcyon-orange: #ffae57 !important;
  --color-halcyon-purple: #c3a6ff !important;
  --color-halcyon-red: #ef6b73 !important;
  --color-halcyon-yellow: #ffd580 !important;
  --color-light-one-dark-aqua: #0084bc !important;
  --color-light-one-dark-background: #f0f1f3 !important;
  --color-light-one-dark-blue: #3d74f6 !important;
  --color-light-one-dark-gray-1: #383a42 !important;
  --color-light-one-dark-gray-2: #383a42 !important;
  --color-light-one-dark-green: #4ea24c !important;
  --color-light-one-dark-orange: #986800 !important;
  --color-light-one-dark-purple: #a625a4 !important;
  --color-light-one-dark-red: #e75545 !important;
  --color-light-one-dark-yellow: #e35649 !important;
  --color-material-background: #f5f7fa !important;
  --color-material-comment: #6c6f85 !important;
  --color-material-cyan: #179299 !important;
  --color-material-foreground: #4c4f69 !important;
  --color-material-green: #40a02b !important;
  --color-material-orange: #df8e1d !important;
  --color-material-pink: #ea76cb !important;
  --color-material-purple: #7287fd !important;
  --color-material-red: #e64553 !important;
  --color-material-selection: #5c5f77 !important;
  --color-material-yellow: #dc8a78 !important;
  --color-orange: #fac79e !important;
  --color-pink: #fa9ccf !important;
  --color-purple: #9ca0fa !important;
  --color-red: #ff4140 !important;
  --color-tokyo-night-background: #1a1b26 !important;
  --color-tokyo-night-cyan: #7dcfff !important;
  --color-tokyo-night-faint: #51597d !important;
  --color-tokyo-night-foreground: #a9b1d6 !important;
  --color-tokyo-night-green: #9ece6a !important;
  --color-tokyo-night-light-background: #d5d6db !important;
  --color-tokyo-night-light-cyan: #166775 !important;
  --color-tokyo-night-light-faint: #9699a3 !important;
  --color-tokyo-night-light-foreground: #343b59 !important;
  --color-tokyo-night-light-green: #33635c !important;
  --color-tokyo-night-light-orange: #965027 !important;
  --color-tokyo-night-light-purple: #41315f !important;
  --color-tokyo-night-light-red: #8c4351 !important;
  --color-tokyo-night-light-yellow: #8f5e15 !important;
  --color-tokyo-night-orange: #ff9e64 !important;
  --color-tokyo-night-purple: #9d7cd8 !important;
  --color-tokyo-night-red: #f7768e !important;
  --color-tokyo-night-yellow: #e0af68 !important;
  --color-yellow: #faf69c !important;
  --cursor: pointer !important;
  --dark: #fafbfc !important;
  --darkgray: #fafbfc !important;
  --divider-color: #2c394d !important;
  --divider-color-hover: #9ca0fa !important;
  --dropdown-background: #2c394d !important;
  --dropdown-background-hover: #324158 !important;
  --embed-block-shadow-hover: 0 0 0 1px #2c394d, inset 0 0 0 1px #2c394d !important;
  --embed-border-start: 2px solid #9ca0fa !important;
  --file-header-background: #0d1117 !important;
  --file-header-background-focused: #0d1117 !important;
  --flair-background: #2c394d !important;
  --flair-color: #fafbfc !important;
  --footnote-divider-color: #2c394d !important;
  --footnote-id-color: #c0c0c0 !important;
  --footnote-id-color-no-occurrences: #aea8ba !important;
  --footnote-input-background-active: #19212d !important;
  --graph-line: #324158 !important;
  --graph-node: #c0c0c0 !important;
  --graph-node-attachment: #faf69c !important;
  --graph-node-focused: #9ca0fa !important;
  --graph-node-tag: #9cfac7 !important;
  --graph-node-unresolved: #aea8ba !important;
  --graph-text: #fafbfc !important;
  --gray: #c0c0c0 !important;
  --h1-color: #9ca0fa !important;
  --h2-color: #9cfaf6 !important;
  --h3-color: #9cfac7 !important;
  --h4-color: #faf69c !important;
  --h5-color: #fac79e !important;
  --h6-color: #fa9ccf !important;
  --heading-formatting: #aea8ba !important;
  --highlight: #19212d !important;
  --highlight-background-color--active: rgba(250, 246, 156, 0.1) !important;
  --highlight-background-color--active-dark: rgb(238, 232, 169, .1) !important;
  --highlight-background-color--normal: rgba(255, 213, 0, 0.01) !important;
  --highlight-background-color-underline: #f6c90e !important;
  --highlight-bg-blue: rgba(156, 250, 246, 0.45) !important;
  --highlight-bg-green: rgba(156, 250, 199, 0.45) !important;
  --highlight-bg-orange: rgba(250, 199, 158, 0.45) !important;
  --highlight-bg-pink: rgba(250, 156, 207, 0.45) !important;
  --highlight-bg-purple: rgba(156, 160, 250, 0.45) !important;
  --highlight-bg-yellow: rgba(250, 246, 156, 0.45) !important;
  --hr-color: #2c394d !important;
  --icon-color-active: #9ca0fa !important;
  --icon-color-focused: #fafbfc !important;
  --icon-color-hover: #c0c0c0 !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #9ca0fa !important;
  --input-date-separator: #aea8ba !important;
  --input-placeholder-color: #aea8ba !important;
  --interactive-accent: #9ca0fa !important;
  --interactive-accent-hover: hsla(237.45, 90%, 80%, 0.85) !important;
  --interactive-accent-hsl: 237.45, 90%, 80% !important;
  --interactive-hover: #324158 !important;
  --interactive-normal: #2c394d !important;
  --light: #0d1117 !important;
  --lightgray: #131922 !important;
  --link-color: #9ca0fa !important;
  --link-color-hover: hsla(237.45, 90%, 80%, 0.9) !important;
  --link-decoration: none !important;
  --link-external-color: #9ca0fa !important;
  --link-external-color-hover: hsla(237.45, 90%, 80%, 0.9) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #9ca0fa !important;
  --link-unresolved-decoration-color: hsla(237.45, 90%, 80%, 0.3) !important;
  --list-bullet-border: 1px solid #131922 !important;
  --list-marker-color: #4a6184 !important;
  --list-marker-color-collapsed: #445979 !important;
  --list-marker-color-hover: #9ca0fa !important;
  --list-spacing: 2px !important;
  --menu-background: #131922 !important;
  --menu-border-color: #324158 !important;
  --metadata-border-color: #2c394d !important;
  --metadata-divider-color: #2c394d !important;
  --metadata-input-background-active: #19212d !important;
  --metadata-input-text-color: #fafbfc !important;
  --metadata-label-background-active: #19212d !important;
  --metadata-label-background-hover: #1f2938 !important;
  --metadata-label-text-color: #c0c0c0 !important;
  --metadata-label-text-color-hover: #c0c0c0 !important;
  --metadata-property-background-active: #19212d !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1f2938 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #324158 !important;
  --modal-background: #0d1117 !important;
  --modal-border-color: #384963 !important;
  --nav-collapse-icon-color: #aea8ba !important;
  --nav-collapse-icon-color-collapsed: #aea8ba !important;
  --nav-heading-color: #fafbfc !important;
  --nav-heading-color-collapsed: #aea8ba !important;
  --nav-heading-color-collapsed-hover: #c0c0c0 !important;
  --nav-heading-color-hover: #fafbfc !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-indetation-guide-color: #1f2938 !important;
  --nav-item-background-active: hsla(237.45, 90%, 80%, 0.5) !important;
  --nav-item-background-hover: hsla(237.45, 90%, 80%, 0.5) !important;
  --nav-item-background-selected: hsla(237.45, 90%, 80%, 0.5) !important;
  --nav-item-color: #c0c0c0 !important;
  --nav-item-color-active: #fafbfc !important;
  --nav-item-color-highlighted: #9ca0fa !important;
  --nav-item-color-hover: #fafbfc !important;
  --nav-item-color-selected: #fafbfc !important;
  --nav-tag-color: #aea8ba !important;
  --nav-tag-color-active: #c0c0c0 !important;
  --nav-tag-color-hover: #c0c0c0 !important;
  --pdf-background: #0d1117 !important;
  --pdf-page-background: #0d1117 !important;
  --pdf-shadow: 0 0 0 1px #2c394d !important;
  --pdf-sidebar-background: #0d1117 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #2c394d !important;
  --pill-border-color: #2c394d !important;
  --pill-border-color-hover: #324158 !important;
  --pill-color: #c0c0c0 !important;
  --pill-color-hover: #fafbfc !important;
  --pill-color-remove: #aea8ba !important;
  --pill-color-remove-hover: #9ca0fa !important;
  --prompt-background: #0d1117 !important;
  --prompt-border-color: #384963 !important;
  --raised-background: color-mix(in srgb, #2c394d 65%, transparent) linear-gradient(#2c394d, color-mix(in srgb, #2c394d 65%, transparent)) !important;
  --ribbon-background: #0d1117 !important;
  --ribbon-background-collapsed: #0d1117 !important;
  --scrollbar-active-thumb-bg: #0d1117 !important;
  --scrollbar-bg: #0d1117 !important;
  --scrollbar-thumb-bg: #0d1117 !important;
  --search-clear-button-color: #c0c0c0 !important;
  --search-icon-color: #c0c0c0 !important;
  --search-result-background: #0d1117 !important;
  --secondary: #9ca0fa !important;
  --setting-group-heading-color: #fafbfc !important;
  --setting-items-background: #0d1117 !important;
  --setting-items-border-color: #2c394d !important;
  --slider-thumb-border-color: #324158 !important;
  --slider-track-background: #2c394d !important;
  --status-bar-background: #131922 !important;
  --status-bar-border-color: #2c394d !important;
  --status-bar-text-color: #c0c0c0 !important;
  --suggestion-background: #0d1117 !important;
  --sync-avatar-color-1: #ff4140 !important;
  --sync-avatar-color-2: #fac79e !important;
  --sync-avatar-color-3: #faf69c !important;
  --sync-avatar-color-4: #9cfac7 !important;
  --sync-avatar-color-6: #9cfaf6 !important;
  --sync-avatar-color-7: #9ca0fa !important;
  --sync-avatar-color-8: #fa9ccf !important;
  --tab-background-active: #19212d !important;
  --tab-container-background: #19212d !important;
  --tab-divider-color: #131922 !important;
  --tab-outline-color: #19212d !important;
  --tab-switcher-background: #131922 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #131922, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(237.45, 90%, 80%) !important;
  --tab-text-color: #aea8ba !important;
  --tab-text-color-active: #c0c0c0 !important;
  --tab-text-color-focused: #c0c0c0 !important;
  --tab-text-color-focused-active: #c0c0c0 !important;
  --tab-text-color-focused-active-current: #fafbfc !important;
  --tab-text-color-focused-highlighted: #9ca0fa !important;
  --table-add-button-border-color: #2c394d !important;
  --table-border-color: #c0c0c0 !important;
  --table-drag-handle-background-active: #9ca0fa !important;
  --table-drag-handle-color: #aea8ba !important;
  --table-drag-handle-color-active: #0d1117 !important;
  --table-header-border-color: #c0c0c0 !important;
  --table-header-color: #fafbfc !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(237.45, 90%, 80%, 0.1) !important;
  --table-selection-border-color: #9ca0fa !important;
  --tag-background: rgba(156, 160, 250, 0.2) !important;
  --tag-background-hover: hsla(237.45, 90%, 80%, 0.2) !important;
  --tag-border-color: hsla(237.45, 90%, 80%, 0.15) !important;
  --tag-border-color-hover: hsla(237.45, 90%, 80%, 0.15) !important;
  --tag-color: #aea8ba !important;
  --tag-color-hover: #9ca0fa !important;
  --tag-radius: 18px !important;
  --tertiary: hsla(237.45, 90%, 80%, 0.9) !important;
  --text-accent: #9ca0fa !important;
  --text-accent-hover: hsla(237.45, 90%, 80%, 0.9) !important;
  --text-error: #ff4140 !important;
  --text-faint: #aea8ba !important;
  --text-muted: #c0c0c0 !important;
  --text-normal: #fafbfc !important;
  --text-on-accent: #0d1117 !important;
  --text-selection: hsla(237.45, 90%, 80%, 0.33) !important;
  --text-success: #9cfac7 !important;
  --text-warning: #fac79e !important;
  --textHighlight: #19212d !important;
  --titlebar-background: #131922 !important;
  --titlebar-background-focused: #0d1117 !important;
  --titlebar-border-color: #2c394d !important;
  --titlebar-text-color: #c0c0c0 !important;
  --titlebar-text-color-focused: #fafbfc !important;
  --vault-profile-color: #fafbfc !important;
  --vault-profile-color-hover: #fafbfc !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 33, 45);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(192, 192, 192);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(19, 25, 34);
  border-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(44, 57, 77);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(156, 160, 250, 0.2);
  border-radius: 18px;
  color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 25, 34);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 57, 77);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 33, 45);
  border-left-color: rgb(44, 57, 77);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(250, 251, 252);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(38, 49, 66);
  border-color: rgb(38, 49, 66);
}

html[saved-theme="dark"] body p {
  color: rgb(192, 192, 192);
  outline: rgb(192, 192, 192) none 0px;
  text-decoration-color: rgb(192, 192, 192);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(156, 160, 250);
  outline: rgb(156, 160, 250) none 0px;
  text-decoration-color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(156, 160, 250);
  outline: rgb(156, 160, 250) none 0px;
  text-decoration-color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(156, 160, 250);
  outline: rgb(156, 160, 250) none 0px;
  text-decoration: rgba(158, 162, 250, 0.3);
  text-decoration-color: rgba(158, 162, 250, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body dt {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(25, 33, 45);
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body table {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(250, 251, 252);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(80, 250, 123);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(80, 250, 123);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(80, 250, 123);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(80, 250, 123);
  border-top-color: rgb(80, 250, 123);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(156, 160, 250);
  border-left-color: rgb(156, 160, 250);
  border-right-color: rgb(156, 160, 250);
  border-top-color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(156, 160, 250);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(174, 168, 186);
  border-left-color: rgb(174, 168, 186);
  border-right-color: rgb(174, 168, 186);
  border-top-color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(174, 168, 186);
  text-decoration: line-through 1px rgb(174, 168, 186);
  text-decoration-color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
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
  color: rgb(174, 168, 186);
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
  color: rgb(250, 199, 158);
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
  color: rgb(250, 246, 156);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(158, 162, 250);
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
  color: rgb(174, 168, 186);
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
  color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M8 6.984c.59-.533 1.204-1.066 1.825-1.493.797-.548 1.7-.991 2.675-.991C14.414 4.5 16 6.086 16 8s-1.586 3.5-3.5 3.5c-.975 0-1.878-.444-2.675-.991-.621-.427-1.235-.96-1.825-1.493-.59.533-1.204 1.066-1.825 1.493-.797.547-1.7.991-2.675.991C1.586 11.5 0 9.914 0 8s1.586-3.5 3.5-3.5c.975 0 1.878.443 2.675.991.621.427 1.235.96 1.825 1.493ZM9.114 8c.536.483 1.052.922 1.56 1.273.704.483 1.3.727 1.826.727 1.086 0 2-.914 2-2 0-1.086-.914-2-2-2-.525 0-1.122.244-1.825.727-.51.35-1.025.79-1.561 1.273ZM3.5 6c-1.086 0-2 .914-2 2 0 1.086.914 2 2 2 .525 0 1.122-.244 1.825-.727.51-.35 1.025-.79 1.561-1.273-.536-.483-1.052-.922-1.56-1.273C4.621 6.244 4.025 6 3.5 6Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M8 6.984c.59-.533 1.204-1.066 1.825-1.493.797-.548 1.7-.991 2.675-.991C14.414 4.5 16 6.086 16 8s-1.586 3.5-3.5 3.5c-.975 0-1.878-.444-2.675-.991-.621-.427-1.235-.96-1.825-1.493-.59.533-1.204 1.066-1.825 1.493-.797.547-1.7.991-2.675.991C1.586 11.5 0 9.914 0 8s1.586-3.5 3.5-3.5c.975 0 1.878.443 2.675.991.621.427 1.235.96 1.825 1.493ZM9.114 8c.536.483 1.052.922 1.56 1.273.704.483 1.3.727 1.826.727 1.086 0 2-.914 2-2 0-1.086-.914-2-2-2-.525 0-1.122.244-1.825.727-.51.35-1.025.79-1.561 1.273ZM3.5 6c-1.086 0-2 .914-2 2 0 1.086.914 2 2 2 .525 0 1.122-.244 1.825-.727.51-.35 1.025-.79 1.561-1.273-.536-.483-1.052-.922-1.56-1.273C4.621 6.244 4.025 6 3.5 6Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' d='M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z' clip-rule='evenodd'/%3E%3Cpath d='M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' d='M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z' clip-rule='evenodd'/%3E%3Cpath d='M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(250, 199, 158);
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
  color: rgb(250, 199, 158);
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
  color: rgb(250, 199, 158);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(255, 65, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(62, 81, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'/%3E%3Cpath stroke='currentColor' stroke-width='2' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'/%3E%3Cpath stroke='currentColor' stroke-width='2' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(250, 246, 156);
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
  color: rgb(255, 65, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M13.637 2.363h-.001l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z'%3E%3C/path%3E%3Cpath d='M2 8a6 6 0 1 0 11.769-1.656.751.751 0 1 1 1.442-.413 7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8Z'%3E%3C/path%3E%3Cpath d='M5 8a3.002 3.002 0 0 0 4.699 2.476 3 3 0 0 0 1.28-2.827.748.748 0 0 1 1.045-.782.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M13.637 2.363h-.001l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z'%3E%3C/path%3E%3Cpath d='M2 8a6 6 0 1 0 11.769-1.656.751.751 0 1 1 1.442-.413 7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8Z'%3E%3C/path%3E%3Cpath d='M5 8a3.002 3.002 0 0 0 4.699 2.476 3 3 0 0 0 1.28-2.827.748.748 0 0 1 1.045-.782.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  color: rgb(250, 156, 207);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M7.655 14.916v-.001h-.002l-.006-.003-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414 7.152 7.152 0 0 1-.31.17l-.018.01-.008.004a.75.75 0 0 1-.69 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M7.655 14.916v-.001h-.002l-.006-.003-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414 7.152 7.152 0 0 1-.31.17l-.018.01-.008.004a.75.75 0 0 1-.69 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  color: rgb(255, 65, 64);
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
  color: rgb(250, 246, 156);
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
  color: rgb(250, 246, 156);
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
  color: rgb(255, 65, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  color: rgb(156, 250, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(156, 160, 250);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(156, 250, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(156, 250, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(255, 65, 64);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(156, 250, 246);
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
  color: rgb(156, 250, 199);
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
  color: rgb(156, 160, 250);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  background-color: rgb(38, 49, 66);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(56, 73, 99);
  border-left-color: rgb(56, 73, 99);
  border-right-color: rgb(56, 73, 99);
  border-top-color: rgb(56, 73, 99);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(25, 33, 45);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 73, 99);
  border-left-color: rgb(56, 73, 99);
  border-right-color: rgb(56, 73, 99);
  border-top-color: rgb(56, 73, 99);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 25, 34);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(25, 33, 45);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(156, 160, 250, 0.2);
  border-bottom-color: rgba(158, 162, 250, 0.15);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgba(158, 162, 250, 0.15);
  border-right-color: rgba(158, 162, 250, 0.15);
  border-top-color: rgba(158, 162, 250, 0.15);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body h1 {
  color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body h2 {
  color: rgb(156, 250, 246);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body h3 {
  color: rgb(156, 250, 199);
}

html[saved-theme="dark"] body h4 {
  color: rgb(250, 246, 156);
}

html[saved-theme="dark"] body h5 {
  color: rgb(250, 199, 158);
}

html[saved-theme="dark"] body h6 {
  color: rgb(250, 156, 207);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}`,
    explorer: `html[saved-theme="dark"] body .explorer {
  background-color: rgb(13, 17, 23);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(192, 192, 192);
  cursor: pointer;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(192, 192, 192);
  cursor: pointer;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(250, 251, 252);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
  cursor: pointer;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(19, 25, 34);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(192, 192, 192);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(192, 192, 192);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
  cursor: pointer;
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(192, 192, 192);
  stroke: rgb(192, 192, 192);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(174, 168, 186);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(19, 25, 34);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body abbr {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body sub {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body summary {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body sup {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(156, 160, 250, 0.2);
  border-bottom-color: rgba(158, 162, 250, 0.15);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgba(158, 162, 250, 0.15);
  border-right-color: rgba(158, 162, 250, 0.15);
  border-top-color: rgba(158, 162, 250, 0.15);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  color: rgb(174, 168, 186);
}`,
  },
  light: {
    base: `:root:root {
  --accent-default-h: 237.45 !important;
  --accent-default-l: 80% !important;
  --accent-default-s: 90% !important;
  --accent-h: 237.80 !important;
  --accent-l: 76% !important;
  --accent-s: 90% !important;
  --background-modifier-active-hover: hsla(237.80, 90%, 76%, 0.1) !important;
  --background-modifier-border: #c5ccdB !important;
  --background-modifier-border-focus: #dadfe8 !important;
  --background-modifier-error: #f6535a !important;
  --background-modifier-error-hover: #f6535a !important;
  --background-modifier-form-field: #f9fafc !important;
  --background-modifier-form-field-hover: #f9fafc !important;
  --background-modifier-hover: #e5e8ee !important;
  --background-modifier-success: #0bd065 !important;
  --background-primary: #f9fafc !important;
  --background-primary-alt: #f9fafc !important;
  --background-secondary: #eff1f5 !important;
  --background-secondary-alt: #eff1f5 !important;
  --bases-cards-background: #f9fafc !important;
  --bases-cards-cover-background: #f9fafc !important;
  --bases-cards-shadow: 0 0 0 1px #c5ccdB !important;
  --bases-embed-border-color: #c5ccdB !important;
  --bases-group-heading-property-color: #747474 !important;
  --bases-table-border-color: #747474 !important;
  --bases-table-cell-background-active: #f9fafc !important;
  --bases-table-cell-background-disabled: #f9fafc !important;
  --bases-table-cell-background-selected: hsla(237.80, 90%, 76%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #dadfe8 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8c90f9 !important;
  --bases-table-group-background: #f9fafc !important;
  --bases-table-header-background: #f9fafc !important;
  --bases-table-header-background-hover: #e5e8ee !important;
  --bases-table-header-color: #747474 !important;
  --bases-table-summary-background: #f9fafc !important;
  --bases-table-summary-background-hover: #e5e8ee !important;
  --blockquote-background-color: #eff1f5 !important;
  --blockquote-border-color: #f37c1d !important;
  --blockquote-color: #747474 !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, #f9fafc 65%, transparent) linear-gradient(#f9fafc, color-mix(in srgb, #f9fafc 65%, transparent)) !important;
  --canvas-background: #f9fafc !important;
  --canvas-card-label-color: #8d8d8d !important;
  --canvas-dot-pattern: #c5ccdB !important;
  --caret-color: #0d1117 !important;
  --checkbox-border-color: #8d8d8d !important;
  --checkbox-border-color-hover: #747474 !important;
  --checkbox-color: #d0d6e1 !important;
  --checkbox-color-hover: #d0d6e1 !important;
  --checkbox-marker-color: #0bd065 !important;
  --checklist-done-color: #8d8d8d !important;
  --code-background: #f9fafc !important;
  --code-border-color: #c5ccdB !important;
  --code-bracket-background: #e5e8ee !important;
  --code-comment: #8d8d8d !important;
  --code-function: #c0b90a !important;
  --code-important: #f37c1d !important;
  --code-keyword: #fa9ccf !important;
  --code-normal: #0d1117 !important;
  --code-operator: #f6535a !important;
  --code-punctuation: #747474 !important;
  --code-string: #0bd065 !important;
  --code-tag: #f6535a !important;
  --code-value: #8c90f9 !important;
  --collapse-icon-color: #8d8d8d !important;
  --collapse-icon-color-collapsed: #8c90f9 !important;
  --color-accent: hsl(237.80, 90%, 76%) !important;
  --color-accent-1: hsl(236.8, 90.9%, 81.7%) !important;
  --color-accent-2: hsl(234.8, 91.8%, 87.4%) !important;
  --color-accent-hsl: 237.80, 90%, 76% !important;
  --color-base-00: #f9fafc !important;
  --color-base-05: #eff1f5 !important;
  --color-base-10: #e5e8ee !important;
  --color-base-20: #dadfe8 !important;
  --color-base-25: #d0d6e1 !important;
  --color-base-30: #c5ccdB !important;
  --color-base-40: #bbc3d4 !important;
  --color-base-50: #b0bace !important;
  --color-base-60: #a6b1c7 !important;
  --color-base-70: #9ba8c1 !important;
  --color-blue: #0bd0c8 !important;
  --color-ctp-frappe-background: #303446 !important;
  --color-ctp-frappe-cyan: #81c8be !important;
  --color-ctp-frappe-faint: #949cbb !important;
  --color-ctp-frappe-foreground: #c6d0f5 !important;
  --color-ctp-frappe-green: #a6d189 !important;
  --color-ctp-frappe-muted: #838ba7 !important;
  --color-ctp-frappe-orange: #ef9f76 !important;
  --color-ctp-frappe-pink: #f4b8e4 !important;
  --color-ctp-frappe-purple: #ca9ee6 !important;
  --color-ctp-frappe-red: #e78284 !important;
  --color-ctp-frappe-yellow: #e5c890 !important;
  --color-ctp-latte-background: #eff1f5 !important;
  --color-ctp-latte-cyan: #179299 !important;
  --color-ctp-latte-faint: #8c8fa1 !important;
  --color-ctp-latte-foreground: #4c4f69 !important;
  --color-ctp-latte-green: #40a02b !important;
  --color-ctp-latte-muted: #7c7f93 !important;
  --color-ctp-latte-orange: #fe640b !important;
  --color-ctp-latte-pink: #ea76cb !important;
  --color-ctp-latte-purple: #8839ef !important;
  --color-ctp-latte-red: #d20f39 !important;
  --color-ctp-latte-yellow: #df8e1d !important;
  --color-ctp-macchiato-background: #24273a !important;
  --color-ctp-macchiato-cyan: #8bd5ca !important;
  --color-ctp-macchiato-faint: #8087a2 !important;
  --color-ctp-macchiato-foreground: #cad3f5 !important;
  --color-ctp-macchiato-green: #a6da95 !important;
  --color-ctp-macchiato-muted: #939ab7 !important;
  --color-ctp-macchiato-orange: #f5a97f !important;
  --color-ctp-macchiato-pink: #f5bde6 !important;
  --color-ctp-macchiato-purple: #c6a0f6 !important;
  --color-ctp-macchiato-red: #ed8796 !important;
  --color-ctp-macchiato-yellow: #eed49f !important;
  --color-ctp-mocha-background: #1e1e2e !important;
  --color-ctp-mocha-cyan: #94e2d5 !important;
  --color-ctp-mocha-faint: #7f849c !important;
  --color-ctp-mocha-foreground: #cdd6f4 !important;
  --color-ctp-mocha-green: #a6e3a1 !important;
  --color-ctp-mocha-muted: #9399b2 !important;
  --color-ctp-mocha-orange: #fab387 !important;
  --color-ctp-mocha-pink: #f5c2e7 !important;
  --color-ctp-mocha-purple: #cba6f7 !important;
  --color-ctp-mocha-red: #f38ba8 !important;
  --color-ctp-mocha-yellow: #f9e2af !important;
  --color-dark-one-dark-aqua: #56b6c2 !important;
  --color-dark-one-dark-background: #282c34 !important;
  --color-dark-one-dark-blue: #61afef !important;
  --color-dark-one-dark-gray-1: #5c6370 !important;
  --color-dark-one-dark-gray-2: #abb2bf !important;
  --color-dark-one-dark-green: #98c379 !important;
  --color-dark-one-dark-orange: #d19a66 !important;
  --color-dark-one-dark-purple: #c678dd !important;
  --color-dark-one-dark-red: #e06c75 !important;
  --color-dark-one-dark-yellow: #e5c07b !important;
  --color-dracula-background: #19212d !important;
  --color-dracula-comment: #6272a4 !important;
  --color-dracula-cyan: #8be9fd !important;
  --color-dracula-foreground: #f8f8f2 !important;
  --color-dracula-green: #50fa7b !important;
  --color-dracula-orange: #ffb86c !important;
  --color-dracula-pink: #ff79c6 !important;
  --color-dracula-purple: #bd93f9 !important;
  --color-dracula-red: #ff5555 !important;
  --color-dracula-yellow: #f1fa8c !important;
  --color-github-dark-background: #161b22 !important;
  --color-github-dark-blue: #6cb6ff !important;
  --color-github-dark-cyan: #a5d6ff !important;
  --color-github-dark-green: #7ee787 !important;
  --color-github-dark-orange: #ffa657 !important;
  --color-github-dark-pink: #f778ba !important;
  --color-github-dark-purple: #d2a8ff !important;
  --color-github-dark-red: #f47067 !important;
  --color-github-dark-yellow: #d29922 !important;
  --color-github-light-background: #f6f8fa !important;
  --color-github-light-blue: #086ddd !important;
  --color-github-light-cyan: #2db7b5 !important;
  --color-github-light-green: #0cb54f !important;
  --color-github-light-orange: #d96c00 !important;
  --color-github-light-pink: #c32b74 !important;
  --color-github-light-purple: #876be0 !important;
  --color-github-light-red: #cf222e !important;
  --color-github-light-yellow: #bd8e37 !important;
  --color-green: #0bd065 !important;
  --color-halcyon-background: #171c28 !important;
  --color-halcyon-cyan: #5ccfe6 !important;
  --color-halcyon-green: #bae67e !important;
  --color-halcyon-grey-dark: #6679a4 !important;
  --color-halcyon-orange: #ffae57 !important;
  --color-halcyon-purple: #c3a6ff !important;
  --color-halcyon-red: #ef6b73 !important;
  --color-halcyon-yellow: #ffd580 !important;
  --color-light-one-dark-aqua: #0084bc !important;
  --color-light-one-dark-background: #f0f1f3 !important;
  --color-light-one-dark-blue: #3d74f6 !important;
  --color-light-one-dark-gray-1: #383a42 !important;
  --color-light-one-dark-gray-2: #383a42 !important;
  --color-light-one-dark-green: #4ea24c !important;
  --color-light-one-dark-orange: #986800 !important;
  --color-light-one-dark-purple: #a625a4 !important;
  --color-light-one-dark-red: #e75545 !important;
  --color-light-one-dark-yellow: #e35649 !important;
  --color-material-background: #f5f7fa !important;
  --color-material-comment: #6c6f85 !important;
  --color-material-cyan: #179299 !important;
  --color-material-foreground: #4c4f69 !important;
  --color-material-green: #40a02b !important;
  --color-material-orange: #df8e1d !important;
  --color-material-pink: #ea76cb !important;
  --color-material-purple: #7287fd !important;
  --color-material-red: #e64553 !important;
  --color-material-selection: #5c5f77 !important;
  --color-material-yellow: #dc8a78 !important;
  --color-orange: #f37c1d !important;
  --color-pink: #fa9ccf !important;
  --color-purple: #8c90f9 !important;
  --color-red: #f6535a !important;
  --color-tokyo-night-background: #1a1b26 !important;
  --color-tokyo-night-cyan: #7dcfff !important;
  --color-tokyo-night-faint: #51597d !important;
  --color-tokyo-night-foreground: #a9b1d6 !important;
  --color-tokyo-night-green: #9ece6a !important;
  --color-tokyo-night-light-background: #d5d6db !important;
  --color-tokyo-night-light-cyan: #166775 !important;
  --color-tokyo-night-light-faint: #9699a3 !important;
  --color-tokyo-night-light-foreground: #343b59 !important;
  --color-tokyo-night-light-green: #33635c !important;
  --color-tokyo-night-light-orange: #965027 !important;
  --color-tokyo-night-light-purple: #41315f !important;
  --color-tokyo-night-light-red: #8c4351 !important;
  --color-tokyo-night-light-yellow: #8f5e15 !important;
  --color-tokyo-night-orange: #ff9e64 !important;
  --color-tokyo-night-purple: #9d7cd8 !important;
  --color-tokyo-night-red: #f7768e !important;
  --color-tokyo-night-yellow: #e0af68 !important;
  --color-yellow: #c0b90a !important;
  --cursor: pointer !important;
  --dark: #0d1117 !important;
  --darkgray: #0d1117 !important;
  --divider-color: #c5ccdB !important;
  --divider-color-hover: #8c90f9 !important;
  --dropdown-background: #dadfe8 !important;
  --dropdown-background-hover: #e5e8ee !important;
  --embed-block-shadow-hover: 0 0 0 1px #c5ccdB, inset 0 0 0 1px #c5ccdB !important;
  --embed-border-start: 2px solid #8c90f9 !important;
  --file-header-background: #f9fafc !important;
  --file-header-background-focused: #f9fafc !important;
  --flair-background: #dadfe8 !important;
  --flair-color: #0d1117 !important;
  --footnote-divider-color: #c5ccdB !important;
  --footnote-id-color: #747474 !important;
  --footnote-id-color-no-occurrences: #8d8d8d !important;
  --footnote-input-background-active: #e5e8ee !important;
  --graph-node: #747474 !important;
  --graph-node-attachment: #c0b90a !important;
  --graph-node-focused: #8c90f9 !important;
  --graph-node-tag: #0bd065 !important;
  --graph-node-unresolved: #8d8d8d !important;
  --graph-text: #0d1117 !important;
  --gray: #747474 !important;
  --h1-color: #8c90f9 !important;
  --h2-color: #0bd0c8 !important;
  --h3-color: #0bd065 !important;
  --h4-color: #c0b90a !important;
  --h5-color: #f37c1d !important;
  --h6-color: #fa9ccf !important;
  --heading-formatting: #8d8d8d !important;
  --highlight: #e5e8ee !important;
  --highlight-background-color--active: rgba(250, 246, 156, 0.2) !important;
  --highlight-background-color--active-dark: rgb(238, 232, 169, .1) !important;
  --highlight-background-color--normal: rgba(255, 213, 0, 0.15) !important;
  --highlight-background-color-underline: #ffd500 !important;
  --highlight-bg-blue: rgba(11, 208, 200, 0.45) !important;
  --highlight-bg-green: rgba(11, 208, 101, 0.45) !important;
  --highlight-bg-orange: rgba(243, 124, 29, 0.45) !important;
  --highlight-bg-pink: rgba(250, 156, 207, 0.45) !important;
  --highlight-bg-purple: rgba(140, 144, 249, 0.45) !important;
  --highlight-bg-yellow: rgba(192, 185, 10, 0.45) !important;
  --hr-color: #c5ccdB !important;
  --icon-color-active: #8c90f9 !important;
  --icon-color-focused: #0d1117 !important;
  --icon-color-hover: #747474 !important;
  --indentation-guide-width: 2px !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #8c90f9 !important;
  --input-date-separator: #8d8d8d !important;
  --input-placeholder-color: #8d8d8d !important;
  --interactive-accent: #8c90f9 !important;
  --interactive-accent-hover: hsla(237.80, 90%, 76%, 0.85) !important;
  --interactive-accent-hsl: 237.80, 90%, 76% !important;
  --interactive-hover: #e5e8ee !important;
  --interactive-normal: #dadfe8 !important;
  --light: #f9fafc !important;
  --lightgray: #eff1f5 !important;
  --link-color: #8c90f9 !important;
  --link-color-hover: hsla(237.45, 90%, 80%, 0.9) !important;
  --link-decoration: none !important;
  --link-external-color: #8c90f9 !important;
  --link-external-color-hover: hsla(237.45, 90%, 80%, 0.9) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #8c90f9 !important;
  --link-unresolved-decoration-color: hsla(237.80, 90%, 76%, 0.3) !important;
  --list-bullet-border: 1px solid #eff1f5 !important;
  --list-marker-color: #9ba8c1 !important;
  --list-marker-color-collapsed: #a6b1c7 !important;
  --list-marker-color-hover: #8c90f9 !important;
  --list-spacing: 2px !important;
  --menu-background: #eff1f5 !important;
  --metadata-border-color: #c5ccdB !important;
  --metadata-divider-color: #c5ccdB !important;
  --metadata-input-background-active: #e5e8ee !important;
  --metadata-input-text-color: #0d1117 !important;
  --metadata-label-background-active: #e5e8ee !important;
  --metadata-label-background-hover: #dadfe8 !important;
  --metadata-label-text-color: #747474 !important;
  --metadata-label-text-color-hover: #747474 !important;
  --metadata-property-background-active: #e5e8ee !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #dadfe8 !important;
  --modal-background: #f9fafc !important;
  --modal-border-color: #bbc3d4 !important;
  --nav-collapse-icon-color: #8d8d8d !important;
  --nav-collapse-icon-color-collapsed: #8d8d8d !important;
  --nav-heading-color: #0d1117 !important;
  --nav-heading-color-collapsed: #8d8d8d !important;
  --nav-heading-color-collapsed-hover: #747474 !important;
  --nav-heading-color-hover: #0d1117 !important;
  --nav-indentation-guide-width: 2px !important;
  --nav-indetation-guide-color: #dadfe8 !important;
  --nav-item-background-active: hsla(237.80, 90%, 76%, 0.5) !important;
  --nav-item-background-hover: hsla(237.80, 90%, 76%, 0.5) !important;
  --nav-item-background-selected: hsla(237.80, 90%, 76%, 0.5) !important;
  --nav-item-color: #747474 !important;
  --nav-item-color-active: #0d1117 !important;
  --nav-item-color-highlighted: #8c90f9 !important;
  --nav-item-color-hover: #0d1117 !important;
  --nav-item-color-selected: #0d1117 !important;
  --nav-tag-color: #8d8d8d !important;
  --nav-tag-color-active: #747474 !important;
  --nav-tag-color-hover: #747474 !important;
  --pdf-background: #f9fafc !important;
  --pdf-page-background: #f9fafc !important;
  --pdf-sidebar-background: #f9fafc !important;
  --pill-border-color: #c5ccdB !important;
  --pill-color: #747474 !important;
  --pill-color-hover: #0d1117 !important;
  --pill-color-remove: #8d8d8d !important;
  --pill-color-remove-hover: #8c90f9 !important;
  --prompt-background: #f9fafc !important;
  --prompt-border-color: #bbc3d4 !important;
  --raised-background: color-mix(in srgb, #f9fafc 65%, transparent) linear-gradient(#f9fafc, color-mix(in srgb, #f9fafc 65%, transparent)) !important;
  --ribbon-background: #f9fafc !important;
  --ribbon-background-collapsed: #f9fafc !important;
  --scrollbar-active-thumb-bg: #f9fafc !important;
  --scrollbar-bg: #f9fafc !important;
  --scrollbar-thumb-bg: #f9fafc !important;
  --search-clear-button-color: #747474 !important;
  --search-icon-color: #747474 !important;
  --search-result-background: #f9fafc !important;
  --secondary: #8c90f9 !important;
  --setting-group-heading-color: #0d1117 !important;
  --setting-items-background: #f9fafc !important;
  --setting-items-border-color: #c5ccdB !important;
  --slider-track-background: #c5ccdB !important;
  --status-bar-background: #eff1f5 !important;
  --status-bar-border-color: #c5ccdB !important;
  --status-bar-text-color: #747474 !important;
  --suggestion-background: #f9fafc !important;
  --sync-avatar-color-1: #f6535a !important;
  --sync-avatar-color-2: #f37c1d !important;
  --sync-avatar-color-3: #c0b90a !important;
  --sync-avatar-color-4: #0bd065 !important;
  --sync-avatar-color-6: #0bd0c8 !important;
  --sync-avatar-color-7: #8c90f9 !important;
  --sync-avatar-color-8: #fa9ccf !important;
  --tab-background-active: #eff1f5 !important;
  --tab-container-background: #e5e8ee !important;
  --tab-divider-color: #eff1f5 !important;
  --tab-outline-color: #e5e8ee !important;
  --tab-switcher-background: #eff1f5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #eff1f5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(237.80, 90%, 76%) !important;
  --tab-text-color: #8d8d8d !important;
  --tab-text-color-active: #747474 !important;
  --tab-text-color-focused: #747474 !important;
  --tab-text-color-focused-active: #747474 !important;
  --tab-text-color-focused-active-current: #0d1117 !important;
  --tab-text-color-focused-highlighted: #8c90f9 !important;
  --table-add-button-border-color: #c5ccdB !important;
  --table-border-color: #747474 !important;
  --table-drag-handle-background-active: #8c90f9 !important;
  --table-drag-handle-color: #8d8d8d !important;
  --table-drag-handle-color-active: #f9fafc !important;
  --table-header-border-color: #747474 !important;
  --table-header-color: #0d1117 !important;
  --table-header-weight: 600 !important;
  --table-selection: hsla(237.80, 90%, 76%, 0.1) !important;
  --table-selection-border-color: #8c90f9 !important;
  --tag-background: #e5e8ee !important;
  --tag-background-hover: hsla(237.80, 90%, 76%, 0.2) !important;
  --tag-border-color: hsla(237.80, 90%, 76%, 0.15) !important;
  --tag-border-color-hover: hsla(237.80, 90%, 76%, 0.15) !important;
  --tag-color: #8d8d8d !important;
  --tag-color-hover: #8c90f9 !important;
  --tag-radius: 18px !important;
  --tertiary: hsla(237.80, 90%, 76%, 0.9) !important;
  --text-accent: #8c90f9 !important;
  --text-accent-hover: hsla(237.80, 90%, 76%, 0.9) !important;
  --text-error: #f6535a !important;
  --text-faint: #8d8d8d !important;
  --text-muted: #747474 !important;
  --text-normal: #0d1117 !important;
  --text-on-accent: #f9fafc !important;
  --text-selection: hsla(237.80, 90%, 76%, 0.4) !important;
  --text-success: #0bd065 !important;
  --text-warning: #f37c1d !important;
  --textHighlight: #e5e8ee !important;
  --titlebar-background: #eff1f5 !important;
  --titlebar-background-focused: #f9fafc !important;
  --titlebar-border-color: #c5ccdB !important;
  --titlebar-text-color: #747474 !important;
  --titlebar-text-color-focused: #0d1117 !important;
  --vault-profile-color: #0d1117 !important;
  --vault-profile-color-hover: #0d1117 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(229, 232, 238);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(249, 250, 252);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(116, 116, 116);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(249, 250, 252);
  border-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(197, 204, 219);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(116, 116, 116);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(229, 232, 238);
  border-radius: 18px;
  color: rgb(141, 141, 141);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 241, 245);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(197, 204, 219);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(229, 232, 238);
  border-left-color: rgb(197, 204, 219);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(249, 250, 252);
  color: rgb(13, 17, 23);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body del {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(208, 214, 225);
  border-color: rgb(208, 214, 225);
}

html[saved-theme="light"] body p {
  color: rgb(116, 116, 116);
  outline: rgb(116, 116, 116) none 0px;
  text-decoration-color: rgb(116, 116, 116);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(140, 144, 249);
  outline: rgb(140, 144, 249) none 0px;
  text-decoration-color: rgb(140, 144, 249);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(140, 144, 249);
  outline: rgb(140, 144, 249) none 0px;
  text-decoration-color: rgb(140, 144, 249);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(140, 144, 249);
  outline: rgb(140, 144, 249) none 0px;
  text-decoration: rgba(139, 143, 249, 0.3);
  text-decoration-color: rgba(139, 143, 249, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body dt {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body ol > li {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body ul > li {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(141, 141, 141);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(239, 241, 245);
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body table {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(13, 17, 23);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(192, 185, 10);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(192, 185, 10);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(192, 185, 10);
  border-left-color: rgb(192, 185, 10);
  border-right-color: rgb(192, 185, 10);
  border-top-color: rgb(192, 185, 10);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body figcaption {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(140, 144, 249);
  border-left-color: rgb(140, 144, 249);
  border-right-color: rgb(140, 144, 249);
  border-top-color: rgb(140, 144, 249);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(140, 144, 249);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(141, 141, 141);
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(141, 141, 141);
  text-decoration: line-through 1px rgb(141, 141, 141);
  text-decoration-color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
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
  color: rgb(141, 141, 141);
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
  color: rgb(243, 124, 29);
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
  color: rgb(192, 185, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(139, 143, 249);
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
  color: rgb(141, 141, 141);
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
  color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M8 6.984c.59-.533 1.204-1.066 1.825-1.493.797-.548 1.7-.991 2.675-.991C14.414 4.5 16 6.086 16 8s-1.586 3.5-3.5 3.5c-.975 0-1.878-.444-2.675-.991-.621-.427-1.235-.96-1.825-1.493-.59.533-1.204 1.066-1.825 1.493-.797.547-1.7.991-2.675.991C1.586 11.5 0 9.914 0 8s1.586-3.5 3.5-3.5c.975 0 1.878.443 2.675.991.621.427 1.235.96 1.825 1.493ZM9.114 8c.536.483 1.052.922 1.56 1.273.704.483 1.3.727 1.826.727 1.086 0 2-.914 2-2 0-1.086-.914-2-2-2-.525 0-1.122.244-1.825.727-.51.35-1.025.79-1.561 1.273ZM3.5 6c-1.086 0-2 .914-2 2 0 1.086.914 2 2 2 .525 0 1.122-.244 1.825-.727.51-.35 1.025-.79 1.561-1.273-.536-.483-1.052-.922-1.56-1.273C4.621 6.244 4.025 6 3.5 6Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M8 6.984c.59-.533 1.204-1.066 1.825-1.493.797-.548 1.7-.991 2.675-.991C14.414 4.5 16 6.086 16 8s-1.586 3.5-3.5 3.5c-.975 0-1.878-.444-2.675-.991-.621-.427-1.235-.96-1.825-1.493-.59.533-1.204 1.066-1.825 1.493-.797.547-1.7.991-2.675.991C1.586 11.5 0 9.914 0 8s1.586-3.5 3.5-3.5c.975 0 1.878.443 2.675.991.621.427 1.235.96 1.825 1.493ZM9.114 8c.536.483 1.052.922 1.56 1.273.704.483 1.3.727 1.826.727 1.086 0 2-.914 2-2 0-1.086-.914-2-2-2-.525 0-1.122.244-1.825.727-.51.35-1.025.79-1.561 1.273ZM3.5 6c-1.086 0-2 .914-2 2 0 1.086.914 2 2 2 .525 0 1.122-.244 1.825-.727.51-.35 1.025-.79 1.561-1.273-.536-.483-1.052-.922-1.56-1.273C4.621 6.244 4.025 6 3.5 6Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  color: rgb(140, 144, 249);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' d='M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z' clip-rule='evenodd'/%3E%3Cpath d='M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' d='M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z' clip-rule='evenodd'/%3E%3Cpath d='M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(243, 124, 29);
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
  color: rgb(243, 124, 29);
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
  color: rgb(243, 124, 29);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  color: rgb(246, 83, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  color: rgb(176, 186, 206);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'/%3E%3Cpath stroke='currentColor' stroke-width='2' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'/%3E%3Cpath stroke='currentColor' stroke-width='2' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  color: rgb(192, 185, 10);
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
  color: rgb(246, 83, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M13.637 2.363h-.001l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z'%3E%3C/path%3E%3Cpath d='M2 8a6 6 0 1 0 11.769-1.656.751.751 0 1 1 1.442-.413 7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8Z'%3E%3C/path%3E%3Cpath d='M5 8a3.002 3.002 0 0 0 4.699 2.476 3 3 0 0 0 1.28-2.827.748.748 0 0 1 1.045-.782.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M13.637 2.363h-.001l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z'%3E%3C/path%3E%3Cpath d='M2 8a6 6 0 1 0 11.769-1.656.751.751 0 1 1 1.442-.413 7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8Z'%3E%3C/path%3E%3Cpath d='M5 8a3.002 3.002 0 0 0 4.699 2.476 3 3 0 0 0 1.28-2.827.748.748 0 0 1 1.045-.782.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  color: rgb(250, 156, 207);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M7.655 14.916v-.001h-.002l-.006-.003-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414 7.152 7.152 0 0 1-.31.17l-.018.01-.008.004a.75.75 0 0 1-.69 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M7.655 14.916v-.001h-.002l-.006-.003-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414 7.152 7.152 0 0 1-.31.17l-.018.01-.008.004a.75.75 0 0 1-.69 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  color: rgb(246, 83, 90);
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
  color: rgb(192, 185, 10);
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
  color: rgb(192, 185, 10);
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
  color: rgb(246, 83, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  color: rgb(11, 208, 200);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  color: rgb(140, 144, 249);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  color: rgb(11, 208, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(11, 208, 101);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  color: rgb(246, 83, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  color: rgb(11, 208, 200);
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
  color: rgb(11, 208, 101);
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
  color: rgb(140, 144, 249);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(187, 195, 212);
  border-left-color: rgb(187, 195, 212);
  border-right-color: rgb(187, 195, 212);
  border-top-color: rgb(187, 195, 212);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(229, 232, 238);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(187, 195, 212);
  border-left-color: rgb(187, 195, 212);
  border-right-color: rgb(187, 195, 212);
  border-top-color: rgb(187, 195, 212);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(229, 232, 238);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(229, 232, 238);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(229, 232, 238);
  border-bottom-color: rgba(139, 143, 249, 0.15);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgba(139, 143, 249, 0.15);
  border-right-color: rgba(139, 143, 249, 0.15);
  border-top-color: rgba(139, 143, 249, 0.15);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(141, 141, 141);
}

html[saved-theme="light"] body h1 {
  color: rgb(140, 144, 249);
}

html[saved-theme="light"] body h2 {
  color: rgb(11, 208, 200);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(140, 144, 249);
}

html[saved-theme="light"] body h3 {
  color: rgb(11, 208, 101);
}

html[saved-theme="light"] body h4 {
  color: rgb(192, 185, 10);
}

html[saved-theme="light"] body h5 {
  color: rgb(243, 124, 29);
}

html[saved-theme="light"] body h6 {
  color: rgb(250, 156, 207);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer {
  background-color: rgb(249, 250, 252);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(116, 116, 116);
  cursor: pointer;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(116, 116, 116);
  cursor: pointer;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-width: 2px;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(13, 17, 23);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
  cursor: pointer;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(116, 116, 116);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(116, 116, 116);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
  cursor: pointer;
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(116, 116, 116);
  stroke: rgb(116, 116, 116);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(141, 141, 141);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(239, 241, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body abbr {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body sub {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body summary {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body sup {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(229, 232, 238);
  border-bottom-color: rgba(139, 143, 249, 0.15);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgba(139, 143, 249, 0.15);
  border-right-color: rgba(139, 143, 249, 0.15);
  border-top-color: rgba(139, 143, 249, 0.15);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  color: rgb(141, 141, 141);
}`,
  },
};
