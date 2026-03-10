import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "prime", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-default-h: 237.45;
  --accent-default-l: 80%;
  --accent-default-s: 90%;
  --accent-h: 237.45;
  --accent-l: 80%;
  --accent-s: 90%;
  --background-modifier-active-hover: rgba(158, 162, 250, 0.1);
  --background-modifier-border: #2c394d;
  --background-modifier-border-focus: #1f2938;
  --background-modifier-border-hover: #324158;
  --background-modifier-error: #ff4140;
  --background-modifier-error-hover: #ff4140;
  --background-modifier-form-field: #263142;
  --background-modifier-form-field-hover: #263142;
  --background-modifier-hover: #19212d;
  --background-modifier-success: #9cfac7;
  --background-primary: #0d1117;
  --background-primary-alt: #0d1117;
  --background-secondary: #131922;
  --background-secondary-alt: #2c394d;
  --bases-cards-background: #0d1117;
  --bases-cards-cover-background: #0d1117;
  --bases-cards-shadow: 0 0 0 1px #2c394d;
  --bases-cards-shadow-hover: 0 0 0 1px #324158;
  --bases-embed-border-color: #2c394d;
  --bases-group-heading-property-color: #c0c0c0;
  --bases-table-border-color: #c0c0c0;
  --bases-table-cell-background-active: #0d1117;
  --bases-table-cell-background-disabled: #0d1117;
  --bases-table-cell-background-selected: rgba(158, 162, 250, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #1f2938;
  --bases-table-cell-shadow-focus: 0 0 0 2px #9ca0fa;
  --bases-table-group-background: #0d1117;
  --bases-table-header-background: #0d1117;
  --bases-table-header-background-hover: #19212d;
  --bases-table-header-color: #c0c0c0;
  --bases-table-summary-background: #0d1117;
  --bases-table-summary-background-hover: #19212d;
  --blockquote-background-color: #19212d;
  --blockquote-border-color: #fac79e;
  --blockquote-color: #c0c0c0;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, #2c394d 65%, transparent) linear-gradient(#2c394d, color-mix(in srgb, #2c394d 65%, transparent));
  --canvas-background: #0d1117;
  --canvas-card-label-color: #aea8ba;
  --canvas-dot-pattern: #2c394d;
  --caret-color: #fafbfc;
  --checkbox-border-color: #aea8ba;
  --checkbox-border-color-hover: #c0c0c0;
  --checkbox-color: #263142;
  --checkbox-color-hover: #263142;
  --checkbox-marker-color: #9cfac7;
  --checklist-done-color: #aea8ba;
  --code-background: #19212d;
  --code-border-color: #2c394d;
  --code-bracket-background: #19212d;
  --code-comment: #6272a4;
  --code-function: #50fa7b;
  --code-important: #ff5555;
  --code-keyword: #ff79c6;
  --code-normal: #f8f8f2;
  --code-operator: #f8f8f2;
  --code-property: #ffb86c;
  --code-punctuation: #c0c0c0;
  --code-string: #f1fa8c;
  --code-tag: #ff5555;
  --code-value: #bd93f9;
  --collapse-icon-color: #aea8ba;
  --collapse-icon-color-collapsed: #9ca0fa;
  --color-accent: rgb(158, 162, 250);
  --color-accent-1: rgb(216, 219, 253);
  --color-accent-2: hsl(232.45, 94.5%, 103.2%);
  --color-accent-hsl: 237.45, 90%, 80%;
  --color-base-00: #0d1117;
  --color-base-05: #131922;
  --color-base-10: #19212d;
  --color-base-100: #5d79a4;
  --color-base-20: #1f2938;
  --color-base-25: #263142;
  --color-base-30: #2c394d;
  --color-base-35: #324158;
  --color-base-40: #384963;
  --color-base-50: #3e516e;
  --color-base-60: #445979;
  --color-base-70: #4a6184;
  --color-blue: #9cfaf6;
  --color-ctp-frappe-background: #303446;
  --color-ctp-frappe-cyan: #81c8be;
  --color-ctp-frappe-faint: #949cbb;
  --color-ctp-frappe-foreground: #c6d0f5;
  --color-ctp-frappe-green: #a6d189;
  --color-ctp-frappe-muted: #838ba7;
  --color-ctp-frappe-orange: #ef9f76;
  --color-ctp-frappe-pink: #f4b8e4;
  --color-ctp-frappe-purple: #ca9ee6;
  --color-ctp-frappe-red: #e78284;
  --color-ctp-frappe-yellow: #e5c890;
  --color-ctp-latte-background: #eff1f5;
  --color-ctp-latte-cyan: #179299;
  --color-ctp-latte-faint: #8c8fa1;
  --color-ctp-latte-foreground: #4c4f69;
  --color-ctp-latte-green: #40a02b;
  --color-ctp-latte-muted: #7c7f93;
  --color-ctp-latte-orange: #fe640b;
  --color-ctp-latte-pink: #ea76cb;
  --color-ctp-latte-purple: #8839ef;
  --color-ctp-latte-red: #d20f39;
  --color-ctp-latte-yellow: #df8e1d;
  --color-ctp-macchiato-background: #24273a;
  --color-ctp-macchiato-cyan: #8bd5ca;
  --color-ctp-macchiato-faint: #8087a2;
  --color-ctp-macchiato-foreground: #cad3f5;
  --color-ctp-macchiato-green: #a6da95;
  --color-ctp-macchiato-muted: #939ab7;
  --color-ctp-macchiato-orange: #f5a97f;
  --color-ctp-macchiato-pink: #f5bde6;
  --color-ctp-macchiato-purple: #c6a0f6;
  --color-ctp-macchiato-red: #ed8796;
  --color-ctp-macchiato-yellow: #eed49f;
  --color-ctp-mocha-background: #1e1e2e;
  --color-ctp-mocha-cyan: #94e2d5;
  --color-ctp-mocha-faint: #7f849c;
  --color-ctp-mocha-foreground: #cdd6f4;
  --color-ctp-mocha-green: #a6e3a1;
  --color-ctp-mocha-muted: #9399b2;
  --color-ctp-mocha-orange: #fab387;
  --color-ctp-mocha-pink: #f5c2e7;
  --color-ctp-mocha-purple: #cba6f7;
  --color-ctp-mocha-red: #f38ba8;
  --color-ctp-mocha-yellow: #f9e2af;
  --color-dark-one-dark-aqua: #56b6c2;
  --color-dark-one-dark-background: #282c34;
  --color-dark-one-dark-blue: #61afef;
  --color-dark-one-dark-gray-1: #5c6370;
  --color-dark-one-dark-gray-2: #abb2bf;
  --color-dark-one-dark-green: #98c379;
  --color-dark-one-dark-orange: #d19a66;
  --color-dark-one-dark-purple: #c678dd;
  --color-dark-one-dark-red: #e06c75;
  --color-dark-one-dark-yellow: #e5c07b;
  --color-dracula-background: #19212d;
  --color-dracula-comment: #6272a4;
  --color-dracula-cyan: #8be9fd;
  --color-dracula-foreground: #f8f8f2;
  --color-dracula-green: #50fa7b;
  --color-dracula-orange: #ffb86c;
  --color-dracula-pink: #ff79c6;
  --color-dracula-purple: #bd93f9;
  --color-dracula-red: #ff5555;
  --color-dracula-yellow: #f1fa8c;
  --color-github-dark-background: #161b22;
  --color-github-dark-blue: #6cb6ff;
  --color-github-dark-cyan: #a5d6ff;
  --color-github-dark-green: #7ee787;
  --color-github-dark-orange: #ffa657;
  --color-github-dark-pink: #f778ba;
  --color-github-dark-purple: #d2a8ff;
  --color-github-dark-red: #f47067;
  --color-github-dark-yellow: #d29922;
  --color-github-light-background: #f6f8fa;
  --color-github-light-blue: #086ddd;
  --color-github-light-cyan: #2db7b5;
  --color-github-light-green: #0cb54f;
  --color-github-light-orange: #d96c00;
  --color-github-light-pink: #c32b74;
  --color-github-light-purple: #876be0;
  --color-github-light-red: #cf222e;
  --color-github-light-yellow: #bd8e37;
  --color-green: #9cfac7;
  --color-halcyon-background: #171c28;
  --color-halcyon-cyan: #5ccfe6;
  --color-halcyon-green: #bae67e;
  --color-halcyon-grey-dark: #6679a4;
  --color-halcyon-orange: #ffae57;
  --color-halcyon-purple: #c3a6ff;
  --color-halcyon-red: #ef6b73;
  --color-halcyon-yellow: #ffd580;
  --color-light-one-dark-aqua: #0084bc;
  --color-light-one-dark-background: #f0f1f3;
  --color-light-one-dark-blue: #3d74f6;
  --color-light-one-dark-gray-1: #383a42;
  --color-light-one-dark-gray-2: #383a42;
  --color-light-one-dark-green: #4ea24c;
  --color-light-one-dark-orange: #986800;
  --color-light-one-dark-purple: #a625a4;
  --color-light-one-dark-red: #e75545;
  --color-light-one-dark-yellow: #e35649;
  --color-material-background: #f5f7fa;
  --color-material-comment: #6c6f85;
  --color-material-cyan: #179299;
  --color-material-foreground: #4c4f69;
  --color-material-green: #40a02b;
  --color-material-orange: #df8e1d;
  --color-material-pink: #ea76cb;
  --color-material-purple: #7287fd;
  --color-material-red: #e64553;
  --color-material-selection: #5c5f77;
  --color-material-yellow: #dc8a78;
  --color-orange: #fac79e;
  --color-pink: #fa9ccf;
  --color-purple: #9ca0fa;
  --color-red: #ff4140;
  --color-tokyo-night-background: #1a1b26;
  --color-tokyo-night-cyan: #7dcfff;
  --color-tokyo-night-faint: #51597d;
  --color-tokyo-night-foreground: #a9b1d6;
  --color-tokyo-night-green: #9ece6a;
  --color-tokyo-night-light-background: #d5d6db;
  --color-tokyo-night-light-cyan: #166775;
  --color-tokyo-night-light-faint: #9699a3;
  --color-tokyo-night-light-foreground: #343b59;
  --color-tokyo-night-light-green: #33635c;
  --color-tokyo-night-light-orange: #965027;
  --color-tokyo-night-light-purple: #41315f;
  --color-tokyo-night-light-red: #8c4351;
  --color-tokyo-night-light-yellow: #8f5e15;
  --color-tokyo-night-orange: #ff9e64;
  --color-tokyo-night-purple: #9d7cd8;
  --color-tokyo-night-red: #f7768e;
  --color-tokyo-night-yellow: #e0af68;
  --color-yellow: #faf69c;
  --cursor: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #2c394d;
  --divider-color-hover: #9ca0fa;
  --dropdown-background: #2c394d;
  --dropdown-background-hover: #324158;
  --embed-block-shadow-hover: 0 0 0 1px #2c394d, inset 0 0 0 1px #2c394d;
  --embed-border-start: 2px solid #9ca0fa;
  --file-header-background: #0d1117;
  --file-header-background-focused: #0d1117;
  --flair-background: #2c394d;
  --flair-color: #fafbfc;
  --footnote-divider-color: #2c394d;
  --footnote-id-color: #c0c0c0;
  --footnote-id-color-no-occurrences: #aea8ba;
  --footnote-input-background-active: #19212d;
  --graph-line: #324158;
  --graph-node: #c0c0c0;
  --graph-node-attachment: #faf69c;
  --graph-node-focused: #9ca0fa;
  --graph-node-tag: #9cfac7;
  --graph-node-unresolved: #aea8ba;
  --graph-text: #fafbfc;
  --gray: var(--text-muted);
  --h1-color: #9ca0fa;
  --h2-color: #9cfaf6;
  --h3-color: #9cfac7;
  --h4-color: #faf69c;
  --h5-color: #fac79e;
  --h6-color: #fa9ccf;
  --heading-formatting: #aea8ba;
  --highlight: var(--background-modifier-hover);
  --highlight-background-color--active: rgba(250, 246, 156, 0.1);
  --highlight-background-color--active-dark: rgb(238, 232, 169, .1);
  --highlight-background-color--normal: rgba(255, 213, 0, 0.01);
  --highlight-background-color-underline: #f6c90e;
  --highlight-bg-blue: rgba(156, 250, 246, 0.45);
  --highlight-bg-green: rgba(156, 250, 199, 0.45);
  --highlight-bg-orange: rgba(250, 199, 158, 0.45);
  --highlight-bg-pink: rgba(250, 156, 207, 0.45);
  --highlight-bg-purple: rgba(156, 160, 250, 0.45);
  --highlight-bg-yellow: rgba(250, 246, 156, 0.45);
  --hr-color: #2c394d;
  --icon-color-active: #9ca0fa;
  --icon-color-focused: #fafbfc;
  --icon-color-hover: #c0c0c0;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #9ca0fa;
  --input-date-separator: #aea8ba;
  --input-placeholder-color: #aea8ba;
  --interactive-accent: #9ca0fa;
  --interactive-accent-hover: rgba(158, 162, 250, 0.85);
  --interactive-accent-hsl: 237.45, 90%, 80%;
  --interactive-hover: #324158;
  --interactive-normal: #2c394d;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #9ca0fa;
  --link-color-hover: rgba(158, 162, 250, 0.9);
  --link-decoration: none;
  --link-external-color: #9ca0fa;
  --link-external-color-hover: rgba(158, 162, 250, 0.9);
  --link-external-decoration: none;
  --link-unresolved-color: #9ca0fa;
  --link-unresolved-decoration-color: rgba(158, 162, 250, 0.3);
  --list-bullet-border: 1px solid #131922;
  --list-marker-color: #4a6184;
  --list-marker-color-collapsed: #445979;
  --list-marker-color-hover: #9ca0fa;
  --list-spacing: 2px;
  --menu-background: #131922;
  --menu-border-color: #324158;
  --metadata-border-color: #2c394d;
  --metadata-divider-color: #2c394d;
  --metadata-input-background-active: #19212d;
  --metadata-input-text-color: #fafbfc;
  --metadata-label-background-active: #19212d;
  --metadata-label-background-hover: #1f2938;
  --metadata-label-text-color: #c0c0c0;
  --metadata-label-text-color-hover: #c0c0c0;
  --metadata-property-background-active: #19212d;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1f2938;
  --metadata-property-box-shadow-hover: 0 0 0 1px #324158;
  --modal-background: #0d1117;
  --modal-border-color: #384963;
  --nav-collapse-icon-color: #aea8ba;
  --nav-collapse-icon-color-collapsed: #aea8ba;
  --nav-heading-color: #fafbfc;
  --nav-heading-color-collapsed: #aea8ba;
  --nav-heading-color-collapsed-hover: #c0c0c0;
  --nav-heading-color-hover: #fafbfc;
  --nav-indentation-guide-width: 2px;
  --nav-indetation-guide-color: #1f2938;
  --nav-item-background-active: rgba(158, 162, 250, 0.5);
  --nav-item-background-hover: rgba(158, 162, 250, 0.5);
  --nav-item-background-selected: rgba(158, 162, 250, 0.5);
  --nav-item-color: #c0c0c0;
  --nav-item-color-active: #fafbfc;
  --nav-item-color-highlighted: #9ca0fa;
  --nav-item-color-hover: #fafbfc;
  --nav-item-color-selected: #fafbfc;
  --nav-tag-color: #aea8ba;
  --nav-tag-color-active: #c0c0c0;
  --nav-tag-color-hover: #c0c0c0;
  --pdf-background: #0d1117;
  --pdf-page-background: #0d1117;
  --pdf-shadow: 0 0 0 1px #2c394d;
  --pdf-sidebar-background: #0d1117;
  --pdf-thumbnail-shadow: 0 0 0 1px #2c394d;
  --pill-border-color: #2c394d;
  --pill-border-color-hover: #324158;
  --pill-color: #c0c0c0;
  --pill-color-hover: #fafbfc;
  --pill-color-remove: #aea8ba;
  --pill-color-remove-hover: #9ca0fa;
  --prompt-background: #0d1117;
  --prompt-border-color: #384963;
  --raised-background: color-mix(in srgb, #2c394d 65%, transparent) linear-gradient(#2c394d, color-mix(in srgb, #2c394d 65%, transparent));
  --ribbon-background: #0d1117;
  --ribbon-background-collapsed: #0d1117;
  --scrollbar-active-thumb-bg: #0d1117;
  --scrollbar-bg: #0d1117;
  --scrollbar-thumb-bg: #0d1117;
  --search-clear-button-color: #c0c0c0;
  --search-icon-color: #c0c0c0;
  --search-result-background: #0d1117;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #fafbfc;
  --setting-items-background: #0d1117;
  --setting-items-border-color: #2c394d;
  --slider-thumb-border-color: #324158;
  --slider-track-background: #2c394d;
  --status-bar-background: #131922;
  --status-bar-border-color: #2c394d;
  --status-bar-text-color: #c0c0c0;
  --suggestion-background: #0d1117;
  --sync-avatar-color-1: #ff4140;
  --sync-avatar-color-2: #fac79e;
  --sync-avatar-color-3: #faf69c;
  --sync-avatar-color-4: #9cfac7;
  --sync-avatar-color-6: #9cfaf6;
  --sync-avatar-color-7: #9ca0fa;
  --sync-avatar-color-8: #fa9ccf;
  --tab-background-active: #19212d;
  --tab-container-background: #19212d;
  --tab-divider-color: #131922;
  --tab-outline-color: #19212d;
  --tab-switcher-background: #131922;
  --tab-switcher-menubar-background: linear-gradient(to top, #131922, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(158, 162, 250);
  --tab-text-color: #aea8ba;
  --tab-text-color-active: #c0c0c0;
  --tab-text-color-focused: #c0c0c0;
  --tab-text-color-focused-active: #c0c0c0;
  --tab-text-color-focused-active-current: #fafbfc;
  --tab-text-color-focused-highlighted: #9ca0fa;
  --table-add-button-border-color: #2c394d;
  --table-border-color: #c0c0c0;
  --table-drag-handle-background-active: #9ca0fa;
  --table-drag-handle-color: #aea8ba;
  --table-drag-handle-color-active: #0d1117;
  --table-header-border-color: #c0c0c0;
  --table-header-color: #fafbfc;
  --table-header-weight: 600;
  --table-selection: rgba(158, 162, 250, 0.1);
  --table-selection-border-color: #9ca0fa;
  --tag-background: rgba(156, 160, 250, 0.2);
  --tag-background-hover: rgba(158, 162, 250, 0.2);
  --tag-border-color: rgba(158, 162, 250, 0.15);
  --tag-border-color-hover: rgba(158, 162, 250, 0.15);
  --tag-color: #aea8ba;
  --tag-color-hover: #9ca0fa;
  --tag-radius: 18px;
  --tertiary: var(--text-accent-hover);
  --text-accent: #9ca0fa;
  --text-accent-hover: rgba(158, 162, 250, 0.9);
  --text-error: #ff4140;
  --text-faint: #aea8ba;
  --text-muted: #c0c0c0;
  --text-normal: #fafbfc;
  --text-on-accent: #0d1117;
  --text-selection: rgba(158, 162, 250, 0.33);
  --text-success: #9cfac7;
  --text-warning: #fac79e;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #131922;
  --titlebar-background-focused: #0d1117;
  --titlebar-border-color: #2c394d;
  --titlebar-text-color: #c0c0c0;
  --titlebar-text-color-focused: #fafbfc;
  --vault-profile-color: #fafbfc;
  --vault-profile-color-hover: #fafbfc;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 33, 45);
  color: rgb(250, 251, 252);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(13, 17, 23);
  color: rgb(250, 251, 252);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 25, 34);
  color: rgb(250, 251, 252);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 57, 77);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 33, 45);
  border-left-color: rgb(44, 57, 77);
  color: rgb(250, 251, 252);
}

body div#quartz-root {
  background-color: rgb(13, 17, 23);
  color: rgb(250, 251, 252);
}`,
    typography: `body .page article p > b, b {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body .page article p > em, em {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body .page article p > i, i {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body .page article p > strong, strong {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body del {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: line-through rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body p {
  color: rgb(192, 192, 192);
  outline: rgb(192, 192, 192) none 0px;
  text-decoration: rgb(192, 192, 192);
  text-decoration-color: rgb(192, 192, 192);
}`,
    links: `body a.external, footer a {
  color: rgb(156, 160, 250);
  outline: rgb(156, 160, 250) none 0px;
  text-decoration: rgb(156, 160, 250);
  text-decoration-color: rgb(156, 160, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(156, 160, 250);
  outline: rgb(156, 160, 250) none 0px;
  text-decoration: rgb(156, 160, 250);
  text-decoration-color: rgb(156, 160, 250);
}

body a.internal.broken {
  color: rgb(156, 160, 250);
  outline: rgb(156, 160, 250) none 0px;
  text-decoration: rgba(158, 162, 250, 0.3);
  text-decoration-color: rgba(158, 162, 250, 0.3);
}`,
    lists: `body dd {
  color: rgb(250, 251, 252);
}

body dt {
  color: rgb(250, 251, 252);
}

body ol > li {
  color: rgb(250, 251, 252);
}

body ol.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body ul > li {
  color: rgb(250, 251, 252);
}

body ul.overflow {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(174, 168, 186);
  text-decoration: rgb(174, 168, 186);
}

body blockquote {
  background-color: rgb(25, 33, 45);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body table {
  color: rgb(250, 251, 252);
}

body td {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(250, 251, 252);
}

body th {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(250, 251, 252);
}`,
    code: `body code {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: rgb(250, 251, 252);
}

body pre > code > [data-line] {
  border-left-color: rgb(80, 250, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(80, 250, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(80, 250, 123);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(80, 250, 123);
  border-top-color: rgb(80, 250, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
}

body pre:has(> code) {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
}`,
    images: `body audio {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body figcaption {
  color: rgb(250, 251, 252);
}

body figure {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body img {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body video {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    embeds: `body .file-embed {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
}

body .footnotes {
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

body .transclude {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(156, 160, 250);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body .transclude-inner {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(156, 160, 250);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(174, 168, 186);
  text-decoration: line-through rgb(174, 168, 186);
  text-decoration-color: rgb(174, 168, 186);
}

body input[type=checkbox] {
  border-bottom-color: rgb(174, 168, 186);
  border-left-color: rgb(174, 168, 186);
  border-right-color: rgb(174, 168, 186);
  border-top-color: rgb(174, 168, 186);
}

body li.task-list-item[data-task='!'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='*'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='-'] {
  color: rgb(174, 168, 186);
  text-decoration: line-through 1px rgb(174, 168, 186);
  text-decoration-color: rgb(174, 168, 186);
}

body li.task-list-item[data-task='/'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='>'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='?'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='I'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='S'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='b'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='c'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='d'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='f'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='i'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='k'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='l'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='p'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='u'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body li.task-list-item[data-task='w'] {
  color: rgb(250, 251, 252);
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}`,
    search: `body .search > .search-button {
  background-color: rgb(38, 49, 66);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: rgb(250, 251, 252);
}

body .search > .search-container > .search-space {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(56, 73, 99);
  border-left-color: rgb(56, 73, 99);
  border-right-color: rgb(56, 73, 99);
  border-top-color: rgb(56, 73, 99);
}

body .search > .search-container > .search-space > * {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration: rgb(250, 251, 252);
  text-decoration-color: rgb(250, 251, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 251, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 251, 252);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(25, 33, 45);
  color: rgb(250, 251, 252);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 73, 99);
  border-left-color: rgb(56, 73, 99);
  border-right-color: rgb(56, 73, 99);
  border-top-color: rgb(56, 73, 99);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 25, 34);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(25, 33, 45);
  color: rgb(250, 251, 252);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(174, 168, 186);
}

body h1 {
  color: rgb(156, 160, 250);
}

body h2 {
  color: rgb(156, 250, 246);
}

body h2.page-title, h2.page-title a {
  color: rgb(156, 160, 250);
}

body h3 {
  color: rgb(156, 250, 199);
}

body h4 {
  color: rgb(250, 246, 156);
}

body h5 {
  color: rgb(250, 199, 158);
}

body h6 {
  color: rgb(250, 156, 207);
}

body hr {
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(13, 17, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(13, 17, 23);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(192, 192, 192);
  cursor: pointer;
  text-decoration: rgb(192, 192, 192);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(192, 192, 192);
  cursor: pointer;
  text-decoration: rgb(192, 192, 192);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(192, 192, 192);
  cursor: pointer;
  text-decoration: rgb(192, 192, 192);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(158, 162, 250, 0.5);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(19, 25, 34);
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: rgb(192, 192, 192);
}

body footer ul li a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(250, 251, 252);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(192, 192, 192);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body li.section-li > .section .meta {
  color: rgb(192, 192, 192);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(192, 192, 192);
  text-decoration: rgb(192, 192, 192);
}

body ul.section-ul {
  background-color: rgb(13, 17, 23);
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(192, 192, 192);
  stroke: rgb(192, 192, 192);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

body .breadcrumb-element p {
  color: rgb(174, 168, 186);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

body .metadata {
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: rgb(192, 192, 192);
}

body .metadata-properties {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

body .navigation-progress {
  background-color: rgb(19, 25, 34);
}

body .page-header h2.page-title {
  color: rgb(250, 251, 252);
}

body abbr {
  color: rgb(250, 251, 252);
  text-decoration: underline dotted rgb(250, 251, 252);
}

body details {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body input[type=text] {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
}

body kbd {
  background-color: rgb(25, 33, 45);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body progress {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}

body sub {
  color: rgb(250, 251, 252);
}

body summary {
  color: rgb(250, 251, 252);
}

body sup {
  color: rgb(250, 251, 252);
}`,
  },
  light: {
    base: `:root:root {
  --accent-default-h: 237.45;
  --accent-default-l: 80%;
  --accent-default-s: 90%;
  --accent-h: 237.80;
  --accent-l: 76%;
  --accent-s: 90%;
  --background-modifier-active-hover: rgba(139, 143, 249, 0.1);
  --background-modifier-border: #c5ccdB;
  --background-modifier-border-focus: #dadfe8;
  --background-modifier-error: #f6535a;
  --background-modifier-error-hover: #f6535a;
  --background-modifier-form-field: #f9fafc;
  --background-modifier-form-field-hover: #f9fafc;
  --background-modifier-hover: #e5e8ee;
  --background-modifier-success: #0bd065;
  --background-primary: #f9fafc;
  --background-primary-alt: #f9fafc;
  --background-secondary: #eff1f5;
  --background-secondary-alt: #eff1f5;
  --bases-cards-background: #f9fafc;
  --bases-cards-cover-background: #f9fafc;
  --bases-cards-shadow: 0 0 0 1px #c5ccdB;
  --bases-embed-border-color: #c5ccdB;
  --bases-group-heading-property-color: #747474;
  --bases-table-border-color: #747474;
  --bases-table-cell-background-active: #f9fafc;
  --bases-table-cell-background-disabled: #f9fafc;
  --bases-table-cell-background-selected: rgba(139, 143, 249, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #dadfe8;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8c90f9;
  --bases-table-group-background: #f9fafc;
  --bases-table-header-background: #f9fafc;
  --bases-table-header-background-hover: #e5e8ee;
  --bases-table-header-color: #747474;
  --bases-table-summary-background: #f9fafc;
  --bases-table-summary-background-hover: #e5e8ee;
  --blockquote-background-color: #eff1f5;
  --blockquote-border-color: #f37c1d;
  --blockquote-color: #747474;
  --blockquote-font-style: italic;
  --blur-background: color-mix(in srgb, #f9fafc 65%, transparent) linear-gradient(#f9fafc, color-mix(in srgb, #f9fafc 65%, transparent));
  --canvas-background: #f9fafc;
  --canvas-card-label-color: #8d8d8d;
  --canvas-dot-pattern: #c5ccdB;
  --caret-color: #0d1117;
  --checkbox-border-color: #8d8d8d;
  --checkbox-border-color-hover: #747474;
  --checkbox-color: #d0d6e1;
  --checkbox-color-hover: #d0d6e1;
  --checkbox-marker-color: #0bd065;
  --checklist-done-color: #8d8d8d;
  --code-background: #f9fafc;
  --code-border-color: #c5ccdB;
  --code-bracket-background: #e5e8ee;
  --code-comment: #8d8d8d;
  --code-function: #c0b90a;
  --code-important: #f37c1d;
  --code-keyword: #fa9ccf;
  --code-normal: #0d1117;
  --code-operator: #f6535a;
  --code-punctuation: #747474;
  --code-string: #0bd065;
  --code-tag: #f6535a;
  --code-value: #8c90f9;
  --collapse-icon-color: #8d8d8d;
  --collapse-icon-color-collapsed: #8c90f9;
  --color-accent: rgb(139, 143, 249);
  --color-accent-1: rgb(167, 172, 251);
  --color-accent-2: rgb(191, 197, 252);
  --color-accent-hsl: 237.80, 90%, 76%;
  --color-base-00: #f9fafc;
  --color-base-05: #eff1f5;
  --color-base-10: #e5e8ee;
  --color-base-20: #dadfe8;
  --color-base-25: #d0d6e1;
  --color-base-30: #c5ccdB;
  --color-base-40: #bbc3d4;
  --color-base-50: #b0bace;
  --color-base-60: #a6b1c7;
  --color-base-70: #9ba8c1;
  --color-blue: #0bd0c8;
  --color-ctp-frappe-background: #303446;
  --color-ctp-frappe-cyan: #81c8be;
  --color-ctp-frappe-faint: #949cbb;
  --color-ctp-frappe-foreground: #c6d0f5;
  --color-ctp-frappe-green: #a6d189;
  --color-ctp-frappe-muted: #838ba7;
  --color-ctp-frappe-orange: #ef9f76;
  --color-ctp-frappe-pink: #f4b8e4;
  --color-ctp-frappe-purple: #ca9ee6;
  --color-ctp-frappe-red: #e78284;
  --color-ctp-frappe-yellow: #e5c890;
  --color-ctp-latte-background: #eff1f5;
  --color-ctp-latte-cyan: #179299;
  --color-ctp-latte-faint: #8c8fa1;
  --color-ctp-latte-foreground: #4c4f69;
  --color-ctp-latte-green: #40a02b;
  --color-ctp-latte-muted: #7c7f93;
  --color-ctp-latte-orange: #fe640b;
  --color-ctp-latte-pink: #ea76cb;
  --color-ctp-latte-purple: #8839ef;
  --color-ctp-latte-red: #d20f39;
  --color-ctp-latte-yellow: #df8e1d;
  --color-ctp-macchiato-background: #24273a;
  --color-ctp-macchiato-cyan: #8bd5ca;
  --color-ctp-macchiato-faint: #8087a2;
  --color-ctp-macchiato-foreground: #cad3f5;
  --color-ctp-macchiato-green: #a6da95;
  --color-ctp-macchiato-muted: #939ab7;
  --color-ctp-macchiato-orange: #f5a97f;
  --color-ctp-macchiato-pink: #f5bde6;
  --color-ctp-macchiato-purple: #c6a0f6;
  --color-ctp-macchiato-red: #ed8796;
  --color-ctp-macchiato-yellow: #eed49f;
  --color-ctp-mocha-background: #1e1e2e;
  --color-ctp-mocha-cyan: #94e2d5;
  --color-ctp-mocha-faint: #7f849c;
  --color-ctp-mocha-foreground: #cdd6f4;
  --color-ctp-mocha-green: #a6e3a1;
  --color-ctp-mocha-muted: #9399b2;
  --color-ctp-mocha-orange: #fab387;
  --color-ctp-mocha-pink: #f5c2e7;
  --color-ctp-mocha-purple: #cba6f7;
  --color-ctp-mocha-red: #f38ba8;
  --color-ctp-mocha-yellow: #f9e2af;
  --color-dark-one-dark-aqua: #56b6c2;
  --color-dark-one-dark-background: #282c34;
  --color-dark-one-dark-blue: #61afef;
  --color-dark-one-dark-gray-1: #5c6370;
  --color-dark-one-dark-gray-2: #abb2bf;
  --color-dark-one-dark-green: #98c379;
  --color-dark-one-dark-orange: #d19a66;
  --color-dark-one-dark-purple: #c678dd;
  --color-dark-one-dark-red: #e06c75;
  --color-dark-one-dark-yellow: #e5c07b;
  --color-dracula-background: #19212d;
  --color-dracula-comment: #6272a4;
  --color-dracula-cyan: #8be9fd;
  --color-dracula-foreground: #f8f8f2;
  --color-dracula-green: #50fa7b;
  --color-dracula-orange: #ffb86c;
  --color-dracula-pink: #ff79c6;
  --color-dracula-purple: #bd93f9;
  --color-dracula-red: #ff5555;
  --color-dracula-yellow: #f1fa8c;
  --color-github-dark-background: #161b22;
  --color-github-dark-blue: #6cb6ff;
  --color-github-dark-cyan: #a5d6ff;
  --color-github-dark-green: #7ee787;
  --color-github-dark-orange: #ffa657;
  --color-github-dark-pink: #f778ba;
  --color-github-dark-purple: #d2a8ff;
  --color-github-dark-red: #f47067;
  --color-github-dark-yellow: #d29922;
  --color-github-light-background: #f6f8fa;
  --color-github-light-blue: #086ddd;
  --color-github-light-cyan: #2db7b5;
  --color-github-light-green: #0cb54f;
  --color-github-light-orange: #d96c00;
  --color-github-light-pink: #c32b74;
  --color-github-light-purple: #876be0;
  --color-github-light-red: #cf222e;
  --color-github-light-yellow: #bd8e37;
  --color-green: #0bd065;
  --color-halcyon-background: #171c28;
  --color-halcyon-cyan: #5ccfe6;
  --color-halcyon-green: #bae67e;
  --color-halcyon-grey-dark: #6679a4;
  --color-halcyon-orange: #ffae57;
  --color-halcyon-purple: #c3a6ff;
  --color-halcyon-red: #ef6b73;
  --color-halcyon-yellow: #ffd580;
  --color-light-one-dark-aqua: #0084bc;
  --color-light-one-dark-background: #f0f1f3;
  --color-light-one-dark-blue: #3d74f6;
  --color-light-one-dark-gray-1: #383a42;
  --color-light-one-dark-gray-2: #383a42;
  --color-light-one-dark-green: #4ea24c;
  --color-light-one-dark-orange: #986800;
  --color-light-one-dark-purple: #a625a4;
  --color-light-one-dark-red: #e75545;
  --color-light-one-dark-yellow: #e35649;
  --color-material-background: #f5f7fa;
  --color-material-comment: #6c6f85;
  --color-material-cyan: #179299;
  --color-material-foreground: #4c4f69;
  --color-material-green: #40a02b;
  --color-material-orange: #df8e1d;
  --color-material-pink: #ea76cb;
  --color-material-purple: #7287fd;
  --color-material-red: #e64553;
  --color-material-selection: #5c5f77;
  --color-material-yellow: #dc8a78;
  --color-orange: #f37c1d;
  --color-pink: #fa9ccf;
  --color-purple: #8c90f9;
  --color-red: #f6535a;
  --color-tokyo-night-background: #1a1b26;
  --color-tokyo-night-cyan: #7dcfff;
  --color-tokyo-night-faint: #51597d;
  --color-tokyo-night-foreground: #a9b1d6;
  --color-tokyo-night-green: #9ece6a;
  --color-tokyo-night-light-background: #d5d6db;
  --color-tokyo-night-light-cyan: #166775;
  --color-tokyo-night-light-faint: #9699a3;
  --color-tokyo-night-light-foreground: #343b59;
  --color-tokyo-night-light-green: #33635c;
  --color-tokyo-night-light-orange: #965027;
  --color-tokyo-night-light-purple: #41315f;
  --color-tokyo-night-light-red: #8c4351;
  --color-tokyo-night-light-yellow: #8f5e15;
  --color-tokyo-night-orange: #ff9e64;
  --color-tokyo-night-purple: #9d7cd8;
  --color-tokyo-night-red: #f7768e;
  --color-tokyo-night-yellow: #e0af68;
  --color-yellow: #c0b90a;
  --cursor: pointer;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #c5ccdB;
  --divider-color-hover: #8c90f9;
  --dropdown-background: #dadfe8;
  --dropdown-background-hover: #e5e8ee;
  --embed-block-shadow-hover: 0 0 0 1px #c5ccdB, inset 0 0 0 1px #c5ccdB;
  --embed-border-start: 2px solid #8c90f9;
  --file-header-background: #f9fafc;
  --file-header-background-focused: #f9fafc;
  --flair-background: #dadfe8;
  --flair-color: #0d1117;
  --footnote-divider-color: #c5ccdB;
  --footnote-id-color: #747474;
  --footnote-id-color-no-occurrences: #8d8d8d;
  --footnote-input-background-active: #e5e8ee;
  --graph-node: #747474;
  --graph-node-attachment: #c0b90a;
  --graph-node-focused: #8c90f9;
  --graph-node-tag: #0bd065;
  --graph-node-unresolved: #8d8d8d;
  --graph-text: #0d1117;
  --gray: var(--text-muted);
  --h1-color: #8c90f9;
  --h2-color: #0bd0c8;
  --h3-color: #0bd065;
  --h4-color: #c0b90a;
  --h5-color: #f37c1d;
  --h6-color: #fa9ccf;
  --heading-formatting: #8d8d8d;
  --highlight: var(--background-modifier-hover);
  --highlight-background-color--active: rgba(250, 246, 156, 0.2);
  --highlight-background-color--active-dark: rgb(238, 232, 169, .1);
  --highlight-background-color--normal: rgba(255, 213, 0, 0.15);
  --highlight-background-color-underline: #ffd500;
  --highlight-bg-blue: rgba(11, 208, 200, 0.45);
  --highlight-bg-green: rgba(11, 208, 101, 0.45);
  --highlight-bg-orange: rgba(243, 124, 29, 0.45);
  --highlight-bg-pink: rgba(250, 156, 207, 0.45);
  --highlight-bg-purple: rgba(140, 144, 249, 0.45);
  --highlight-bg-yellow: rgba(192, 185, 10, 0.45);
  --hr-color: #c5ccdB;
  --icon-color-active: #8c90f9;
  --icon-color-focused: #0d1117;
  --icon-color-hover: #747474;
  --indentation-guide-width: 2px;
  --indentation-guide-width-active: 2px;
  --inline-title-color: #8c90f9;
  --input-date-separator: #8d8d8d;
  --input-placeholder-color: #8d8d8d;
  --interactive-accent: #8c90f9;
  --interactive-accent-hover: rgba(139, 143, 249, 0.85);
  --interactive-accent-hsl: 237.80, 90%, 76%;
  --interactive-hover: #e5e8ee;
  --interactive-normal: #dadfe8;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #8c90f9;
  --link-color-hover: rgba(158, 162, 250, 0.9);
  --link-decoration: none;
  --link-external-color: #8c90f9;
  --link-external-color-hover: rgba(158, 162, 250, 0.9);
  --link-external-decoration: none;
  --link-unresolved-color: #8c90f9;
  --link-unresolved-decoration-color: rgba(139, 143, 249, 0.3);
  --list-bullet-border: 1px solid #eff1f5;
  --list-marker-color: #9ba8c1;
  --list-marker-color-collapsed: #a6b1c7;
  --list-marker-color-hover: #8c90f9;
  --list-spacing: 2px;
  --menu-background: #eff1f5;
  --metadata-border-color: #c5ccdB;
  --metadata-divider-color: #c5ccdB;
  --metadata-input-background-active: #e5e8ee;
  --metadata-input-text-color: #0d1117;
  --metadata-label-background-active: #e5e8ee;
  --metadata-label-background-hover: #dadfe8;
  --metadata-label-text-color: #747474;
  --metadata-label-text-color-hover: #747474;
  --metadata-property-background-active: #e5e8ee;
  --metadata-property-box-shadow-focus: 0 0 0 2px #dadfe8;
  --modal-background: #f9fafc;
  --modal-border-color: #bbc3d4;
  --nav-collapse-icon-color: #8d8d8d;
  --nav-collapse-icon-color-collapsed: #8d8d8d;
  --nav-heading-color: #0d1117;
  --nav-heading-color-collapsed: #8d8d8d;
  --nav-heading-color-collapsed-hover: #747474;
  --nav-heading-color-hover: #0d1117;
  --nav-indentation-guide-width: 2px;
  --nav-indetation-guide-color: #dadfe8;
  --nav-item-background-active: rgba(139, 143, 249, 0.5);
  --nav-item-background-hover: rgba(139, 143, 249, 0.5);
  --nav-item-background-selected: rgba(139, 143, 249, 0.5);
  --nav-item-color: #747474;
  --nav-item-color-active: #0d1117;
  --nav-item-color-highlighted: #8c90f9;
  --nav-item-color-hover: #0d1117;
  --nav-item-color-selected: #0d1117;
  --nav-tag-color: #8d8d8d;
  --nav-tag-color-active: #747474;
  --nav-tag-color-hover: #747474;
  --pdf-background: #f9fafc;
  --pdf-page-background: #f9fafc;
  --pdf-sidebar-background: #f9fafc;
  --pill-border-color: #c5ccdB;
  --pill-color: #747474;
  --pill-color-hover: #0d1117;
  --pill-color-remove: #8d8d8d;
  --pill-color-remove-hover: #8c90f9;
  --prompt-background: #f9fafc;
  --prompt-border-color: #bbc3d4;
  --raised-background: color-mix(in srgb, #f9fafc 65%, transparent) linear-gradient(#f9fafc, color-mix(in srgb, #f9fafc 65%, transparent));
  --ribbon-background: #f9fafc;
  --ribbon-background-collapsed: #f9fafc;
  --scrollbar-active-thumb-bg: #f9fafc;
  --scrollbar-bg: #f9fafc;
  --scrollbar-thumb-bg: #f9fafc;
  --search-clear-button-color: #747474;
  --search-icon-color: #747474;
  --search-result-background: #f9fafc;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #0d1117;
  --setting-items-background: #f9fafc;
  --setting-items-border-color: #c5ccdB;
  --slider-track-background: #c5ccdB;
  --status-bar-background: #eff1f5;
  --status-bar-border-color: #c5ccdB;
  --status-bar-text-color: #747474;
  --suggestion-background: #f9fafc;
  --sync-avatar-color-1: #f6535a;
  --sync-avatar-color-2: #f37c1d;
  --sync-avatar-color-3: #c0b90a;
  --sync-avatar-color-4: #0bd065;
  --sync-avatar-color-6: #0bd0c8;
  --sync-avatar-color-7: #8c90f9;
  --sync-avatar-color-8: #fa9ccf;
  --tab-background-active: #eff1f5;
  --tab-container-background: #e5e8ee;
  --tab-divider-color: #eff1f5;
  --tab-outline-color: #e5e8ee;
  --tab-switcher-background: #eff1f5;
  --tab-switcher-menubar-background: linear-gradient(to top, #eff1f5, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(139, 143, 249);
  --tab-text-color: #8d8d8d;
  --tab-text-color-active: #747474;
  --tab-text-color-focused: #747474;
  --tab-text-color-focused-active: #747474;
  --tab-text-color-focused-active-current: #0d1117;
  --tab-text-color-focused-highlighted: #8c90f9;
  --table-add-button-border-color: #c5ccdB;
  --table-border-color: #747474;
  --table-drag-handle-background-active: #8c90f9;
  --table-drag-handle-color: #8d8d8d;
  --table-drag-handle-color-active: #f9fafc;
  --table-header-border-color: #747474;
  --table-header-color: #0d1117;
  --table-header-weight: 600;
  --table-selection: rgba(139, 143, 249, 0.1);
  --table-selection-border-color: #8c90f9;
  --tag-background: #e5e8ee;
  --tag-background-hover: rgba(139, 143, 249, 0.2);
  --tag-border-color: rgba(139, 143, 249, 0.15);
  --tag-border-color-hover: rgba(139, 143, 249, 0.15);
  --tag-color: #8d8d8d;
  --tag-color-hover: #8c90f9;
  --tag-radius: 18px;
  --tertiary: var(--text-accent-hover);
  --text-accent: #8c90f9;
  --text-accent-hover: rgba(139, 143, 249, 0.9);
  --text-error: #f6535a;
  --text-faint: #8d8d8d;
  --text-muted: #747474;
  --text-normal: #0d1117;
  --text-on-accent: #f9fafc;
  --text-selection: rgba(139, 143, 249, 0.4);
  --text-success: #0bd065;
  --text-warning: #f37c1d;
  --textHighlight: var(--background-modifier-hover);
  --titlebar-background: #eff1f5;
  --titlebar-background-focused: #f9fafc;
  --titlebar-border-color: #c5ccdB;
  --titlebar-text-color: #747474;
  --titlebar-text-color-focused: #0d1117;
  --vault-profile-color: #0d1117;
  --vault-profile-color-hover: #0d1117;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(229, 232, 238);
  color: rgb(13, 17, 23);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(249, 250, 252);
  color: rgb(13, 17, 23);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(239, 241, 245);
  color: rgb(13, 17, 23);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(197, 204, 219);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(229, 232, 238);
  border-left-color: rgb(197, 204, 219);
  color: rgb(13, 17, 23);
}

body div#quartz-root {
  background-color: rgb(249, 250, 252);
  color: rgb(13, 17, 23);
}`,
    typography: `body .page article p > b, b {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body .page article p > em, em {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body .page article p > i, i {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body .page article p > strong, strong {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body del {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: line-through rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body p {
  color: rgb(116, 116, 116);
  outline: rgb(116, 116, 116) none 0px;
  text-decoration: rgb(116, 116, 116);
  text-decoration-color: rgb(116, 116, 116);
}`,
    links: `body a.external, footer a {
  color: rgb(140, 144, 249);
  outline: rgb(140, 144, 249) none 0px;
  text-decoration: rgb(140, 144, 249);
  text-decoration-color: rgb(140, 144, 249);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(140, 144, 249);
  outline: rgb(140, 144, 249) none 0px;
  text-decoration: rgb(140, 144, 249);
  text-decoration-color: rgb(140, 144, 249);
}

body a.internal.broken {
  color: rgb(140, 144, 249);
  outline: rgb(140, 144, 249) none 0px;
  text-decoration: rgba(139, 143, 249, 0.3);
  text-decoration-color: rgba(139, 143, 249, 0.3);
}`,
    lists: `body dd {
  color: rgb(13, 17, 23);
}

body dt {
  color: rgb(13, 17, 23);
}

body ol > li {
  color: rgb(13, 17, 23);
}

body ol.overflow {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body ul > li {
  color: rgb(13, 17, 23);
}

body ul.overflow {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(141, 141, 141);
  text-decoration: rgb(141, 141, 141);
}

body blockquote {
  background-color: rgb(239, 241, 245);
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body table {
  color: rgb(13, 17, 23);
}

body td {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(13, 17, 23);
}

body th {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(13, 17, 23);
}`,
    code: `body code {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: rgb(13, 17, 23);
}

body pre > code > [data-line] {
  border-left-color: rgb(192, 185, 10);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(192, 185, 10);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(192, 185, 10);
  border-left-color: rgb(192, 185, 10);
  border-right-color: rgb(192, 185, 10);
  border-top-color: rgb(192, 185, 10);
}

body pre > code, pre:has(> code) {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
}

body pre:has(> code) {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
}`,
    images: `body audio {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body figcaption {
  color: rgb(13, 17, 23);
}

body figure {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body img {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body video {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    embeds: `body .file-embed {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
}

body .footnotes {
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

body .transclude {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(140, 144, 249);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body .transclude-inner {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(140, 144, 249);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(141, 141, 141);
  text-decoration: line-through rgb(141, 141, 141);
  text-decoration-color: rgb(141, 141, 141);
}

body input[type=checkbox] {
  border-bottom-color: rgb(141, 141, 141);
  border-left-color: rgb(141, 141, 141);
  border-right-color: rgb(141, 141, 141);
  border-top-color: rgb(141, 141, 141);
}

body li.task-list-item[data-task='!'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='*'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='-'] {
  color: rgb(141, 141, 141);
  text-decoration: line-through 1px rgb(141, 141, 141);
  text-decoration-color: rgb(141, 141, 141);
}

body li.task-list-item[data-task='/'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='>'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='?'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='I'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='S'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='b'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='c'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='d'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='f'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='i'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='k'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='l'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='p'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='u'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body li.task-list-item[data-task='w'] {
  color: rgb(13, 17, 23);
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}`,
    search: `body .search > .search-button {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: rgb(13, 17, 23);
}

body .search > .search-container > .search-space {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(187, 195, 212);
  border-left-color: rgb(187, 195, 212);
  border-right-color: rgb(187, 195, 212);
  border-top-color: rgb(187, 195, 212);
}

body .search > .search-container > .search-space > * {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration: rgb(13, 17, 23);
  text-decoration-color: rgb(13, 17, 23);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(13, 17, 23);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(13, 17, 23);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(229, 232, 238);
  color: rgb(13, 17, 23);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(187, 195, 212);
  border-left-color: rgb(187, 195, 212);
  border-right-color: rgb(187, 195, 212);
  border-top-color: rgb(187, 195, 212);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(239, 241, 245);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(229, 232, 238);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(229, 232, 238);
  color: rgb(13, 17, 23);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(141, 141, 141);
}

body h1 {
  color: rgb(140, 144, 249);
}

body h2 {
  color: rgb(11, 208, 200);
}

body h2.page-title, h2.page-title a {
  color: rgb(140, 144, 249);
}

body h3 {
  color: rgb(11, 208, 101);
}

body h4 {
  color: rgb(192, 185, 10);
}

body h5 {
  color: rgb(243, 124, 29);
}

body h6 {
  color: rgb(250, 156, 207);
}

body hr {
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}

body ::-webkit-scrollbar-corner {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}

body ::-webkit-scrollbar-track {
  background: rgb(249, 250, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 250, 252);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(116, 116, 116);
  cursor: pointer;
  text-decoration: rgb(116, 116, 116);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(116, 116, 116);
  cursor: pointer;
  text-decoration: rgb(116, 116, 116);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(116, 116, 116);
  cursor: pointer;
  text-decoration: rgb(116, 116, 116);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(139, 143, 249, 0.5);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
  cursor: pointer;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(239, 241, 245);
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: rgb(116, 116, 116);
}

body footer ul li a {
  color: rgb(116, 116, 116);
  text-decoration: rgb(116, 116, 116);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(13, 17, 23);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(116, 116, 116);
  text-decoration: rgb(116, 116, 116);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(116, 116, 116);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body li.section-li > .section .meta {
  color: rgb(116, 116, 116);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(116, 116, 116);
  text-decoration: rgb(116, 116, 116);
}

body ul.section-ul {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(116, 116, 116);
  stroke: rgb(116, 116, 116);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
}

body .breadcrumb-element p {
  color: rgb(141, 141, 141);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

body .metadata {
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: rgb(116, 116, 116);
}

body .metadata-properties {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
}

body .navigation-progress {
  background-color: rgb(239, 241, 245);
}

body .page-header h2.page-title {
  color: rgb(13, 17, 23);
}

body abbr {
  color: rgb(13, 17, 23);
  text-decoration: underline dotted rgb(13, 17, 23);
}

body details {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body input[type=text] {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
}

body kbd {
  background-color: rgb(249, 250, 252);
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

body progress {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}

body sub {
  color: rgb(13, 17, 23);
}

body summary {
  color: rgb(13, 17, 23);
}

body sup {
  color: rgb(13, 17, 23);
}`,
  },
};
