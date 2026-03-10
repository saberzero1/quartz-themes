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
  --background-modifier-active-hover: rgba(158, 162, 250, 0.1) !important;
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
  --bases-table-cell-background-selected: rgba(158, 162, 250, 0.1) !important;
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
  --color-accent: rgb(158, 162, 250) !important;
  --color-accent-1: rgb(216, 219, 253) !important;
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
  --interactive-accent-hover: rgba(158, 162, 250, 0.85) !important;
  --interactive-accent-hsl: 237.45, 90%, 80% !important;
  --interactive-hover: #324158 !important;
  --interactive-normal: #2c394d !important;
  --light: #0d1117 !important;
  --lightgray: #131922 !important;
  --link-color: #9ca0fa !important;
  --link-color-hover: rgba(158, 162, 250, 0.9) !important;
  --link-decoration: none !important;
  --link-external-color: #9ca0fa !important;
  --link-external-color-hover: rgba(158, 162, 250, 0.9) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #9ca0fa !important;
  --link-unresolved-decoration-color: rgba(158, 162, 250, 0.3) !important;
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
  --nav-item-background-active: rgba(158, 162, 250, 0.5) !important;
  --nav-item-background-hover: rgba(158, 162, 250, 0.5) !important;
  --nav-item-background-selected: rgba(158, 162, 250, 0.5) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(158, 162, 250) !important;
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
  --table-selection: rgba(158, 162, 250, 0.1) !important;
  --table-selection-border-color: #9ca0fa !important;
  --tag-background: rgba(156, 160, 250, 0.2) !important;
  --tag-background-hover: rgba(158, 162, 250, 0.2) !important;
  --tag-border-color: rgba(158, 162, 250, 0.15) !important;
  --tag-border-color-hover: rgba(158, 162, 250, 0.15) !important;
  --tag-color: #aea8ba !important;
  --tag-color-hover: #9ca0fa !important;
  --tag-radius: 18px !important;
  --tertiary: rgba(158, 162, 250, 0.9) !important;
  --text-accent: #9ca0fa !important;
  --text-accent-hover: rgba(158, 162, 250, 0.9) !important;
  --text-error: #ff4140 !important;
  --text-faint: #aea8ba !important;
  --text-muted: #c0c0c0 !important;
  --text-normal: #fafbfc !important;
  --text-on-accent: #0d1117 !important;
  --text-selection: rgba(158, 162, 250, 0.33) !important;
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
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: line-through rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body p {
  color: rgb(192, 192, 192);
  outline: rgb(192, 192, 192) none 0px;
  text-decoration: rgb(192, 192, 192);
  text-decoration-color: rgb(192, 192, 192);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(156, 160, 250);
  outline: rgb(156, 160, 250) none 0px;
  text-decoration: rgb(156, 160, 250);
  text-decoration-color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(156, 160, 250);
  outline: rgb(156, 160, 250) none 0px;
  text-decoration: rgb(156, 160, 250);
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
  text-decoration: rgb(174, 168, 186);
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
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
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
  border-left-color: rgb(156, 160, 250);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(174, 168, 186);
  text-decoration: line-through rgb(174, 168, 186);
  text-decoration-color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(174, 168, 186);
  border-left-color: rgb(174, 168, 186);
  border-right-color: rgb(174, 168, 186);
  border-top-color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(174, 168, 186);
  text-decoration: line-through 1px rgb(174, 168, 186);
  text-decoration-color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
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
  text-decoration: rgb(250, 251, 252);
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
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
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
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(192, 192, 192);
  cursor: pointer;
  text-decoration: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(192, 192, 192);
  cursor: pointer;
  text-decoration: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(192, 192, 192);
  cursor: pointer;
  text-decoration: rgb(192, 192, 192);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(158, 162, 250, 0.5);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
  cursor: pointer;
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
  text-decoration: rgb(192, 192, 192);
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
  text-decoration: rgb(192, 192, 192);
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
  text-decoration: rgb(192, 192, 192);
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
  text-decoration: underline dotted rgb(250, 251, 252);
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
  --background-modifier-active-hover: rgba(139, 143, 249, 0.1) !important;
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
  --bases-table-cell-background-selected: rgba(139, 143, 249, 0.1) !important;
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
  --color-accent: rgb(139, 143, 249) !important;
  --color-accent-1: rgb(167, 172, 251) !important;
  --color-accent-2: rgb(191, 197, 252) !important;
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
  --interactive-accent-hover: rgba(139, 143, 249, 0.85) !important;
  --interactive-accent-hsl: 237.80, 90%, 76% !important;
  --interactive-hover: #e5e8ee !important;
  --interactive-normal: #dadfe8 !important;
  --light: #f9fafc !important;
  --lightgray: #eff1f5 !important;
  --link-color: #8c90f9 !important;
  --link-color-hover: rgba(158, 162, 250, 0.9) !important;
  --link-decoration: none !important;
  --link-external-color: #8c90f9 !important;
  --link-external-color-hover: rgba(158, 162, 250, 0.9) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #8c90f9 !important;
  --link-unresolved-decoration-color: rgba(139, 143, 249, 0.3) !important;
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
  --nav-item-background-active: rgba(139, 143, 249, 0.5) !important;
  --nav-item-background-hover: rgba(139, 143, 249, 0.5) !important;
  --nav-item-background-selected: rgba(139, 143, 249, 0.5) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(139, 143, 249) !important;
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
  --table-selection: rgba(139, 143, 249, 0.1) !important;
  --table-selection-border-color: #8c90f9 !important;
  --tag-background: #e5e8ee !important;
  --tag-background-hover: rgba(139, 143, 249, 0.2) !important;
  --tag-border-color: rgba(139, 143, 249, 0.15) !important;
  --tag-border-color-hover: rgba(139, 143, 249, 0.15) !important;
  --tag-color: #8d8d8d !important;
  --tag-color-hover: #8c90f9 !important;
  --tag-radius: 18px !important;
  --tertiary: rgba(139, 143, 249, 0.9) !important;
  --text-accent: #8c90f9 !important;
  --text-accent-hover: rgba(139, 143, 249, 0.9) !important;
  --text-error: #f6535a !important;
  --text-faint: #8d8d8d !important;
  --text-muted: #747474 !important;
  --text-normal: #0d1117 !important;
  --text-on-accent: #f9fafc !important;
  --text-selection: rgba(139, 143, 249, 0.4) !important;
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
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body del {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: line-through rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body p {
  color: rgb(116, 116, 116);
  outline: rgb(116, 116, 116) none 0px;
  text-decoration: rgb(116, 116, 116);
  text-decoration-color: rgb(116, 116, 116);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(140, 144, 249);
  outline: rgb(140, 144, 249) none 0px;
  text-decoration: rgb(140, 144, 249);
  text-decoration-color: rgb(140, 144, 249);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(140, 144, 249);
  outline: rgb(140, 144, 249) none 0px;
  text-decoration: rgb(140, 144, 249);
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
  text-decoration: rgb(141, 141, 141);
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
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
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
  border-left-color: rgb(140, 144, 249);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 141, 141);
  text-decoration: line-through rgb(141, 141, 141);
  text-decoration-color: rgb(141, 141, 141);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(141, 141, 141);
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(141, 141, 141);
  text-decoration: line-through 1px rgb(141, 141, 141);
  text-decoration-color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
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
  text-decoration: rgb(13, 17, 23);
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
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
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
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(116, 116, 116);
  cursor: pointer;
  text-decoration: rgb(116, 116, 116);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(116, 116, 116);
  cursor: pointer;
  text-decoration: rgb(116, 116, 116);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(116, 116, 116);
  cursor: pointer;
  text-decoration: rgb(116, 116, 116);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(139, 143, 249, 0.5);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
  cursor: pointer;
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
  text-decoration: rgb(116, 116, 116);
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
  text-decoration: rgb(116, 116, 116);
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
  text-decoration: rgb(116, 116, 116);
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
  text-decoration: underline dotted rgb(13, 17, 23);
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
}`,
  },
};
