import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "prime",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "prime",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-default-h: 237.45;
  --accent-default-l: 80%;
  --accent-default-s: 90%;
  --accent-h: 237.45;
  --accent-l: 80%;
  --accent-s: 90%;
  --background-modifier-border: var(--color-base-30, #2c394d);
  --background-modifier-border-focus: var(--color-base-20, #1f2938);
  --background-modifier-border-hover: var(--color-base-35, #324158);
  --background-modifier-error: var(--color-red, #ff4140);
  --background-modifier-error-hover: var(--color-red, #ff4140);
  --background-modifier-form-field: var(--color-base-25, #263142);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #263142);
  --background-modifier-hover: var(--color-base-10, #19212d);
  --background-modifier-success: var(--color-green, #9cfac7);
  --background-primary: var(--color-base-00, #0d1117);
  --background-primary-alt: var(--color-base-00, #0d1117);
  --background-secondary: var(--color-base-05, #131922);
  --background-secondary-alt: var(--color-base-05, #2c394d);
  --bases-cards-background: var(--background-primary, #0d1117);
  --bases-cards-cover-background: var(--background-primary-alt, #0d1117);
  --bases-embed-border-color: var(--background-modifier-border, #2c394d);
  --bases-group-heading-property-color: var(--text-muted, #c0c0c0);
  --bases-table-border-color: var(--table-border-color, #c0c0c0);
  --bases-table-cell-background-active: var(--background-primary, #0d1117);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #0d1117);
  --bases-table-cell-background-selected: var(--table-selection, hsla(237.45, 90%, 80%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #0d1117);
  --bases-table-header-background: var(--background-primary, #0d1117);
  --bases-table-header-background-hover: var(--background-modifier-hover, #19212d);
  --bases-table-header-color: var(--text-muted, #c0c0c0);
  --bases-table-summary-background: var(--background-primary, #0d1117);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #19212d);
  --blockquote-background-color: var(--color-base-10, #19212d);
  --blockquote-border-color: var(--color-orange, #fac79e);
  --blockquote-color: var(--text-muted, #c0c0c0);
  --blockquote-font-style: italic;
  --canvas-background: var(--background-primary, #0d1117);
  --canvas-card-label-color: var(--text-faint, #aea8ba);
  --canvas-dot-pattern: var(--color-base-30, #2c394d);
  --caret-color: var(--text-normal, #fafbfc);
  --checkbox-border-color: var(--text-faint, #aea8ba);
  --checkbox-border-color-hover: var(--text-muted, #c0c0c0);
  --checkbox-color: var(--color-base-25, #263142);
  --checkbox-color-hover: var(--color-base-25, #263142);
  --checkbox-marker-color: var(--color-green, #9cfac7);
  --checklist-done-color: var(--text-faint, #aea8ba);
  --code-background: var(--color-dracula-background, #19212d);
  --code-border-color: var(--background-modifier-border, #2c394d);
  --code-bracket-background: var(--background-modifier-hover, #19212d);
  --code-comment: var(--color-dracula-comment, #6272a4);
  --code-function: var(--color-dracula-green, #50fa7b);
  --code-important: var(--color-dracula-red, #ff5555);
  --code-keyword: var(--color-dracula-pink, #ff79c6);
  --code-normal: var(--color-dracula-foreground, #f8f8f2);
  --code-operator: var(--color-dracula-foreground, #f8f8f2);
  --code-property: var(--color-dracula-orange, #ffb86c);
  --code-punctuation: var(--text-muted, #c0c0c0);
  --code-string: var(--color-dracula-yellow, #f1fa8c);
  --code-tag: var(--color-dracula-red, #ff5555);
  --code-value: var(--color-dracula-purple, #bd93f9);
  --collapse-icon-color: var(--text-faint, #aea8ba);
  --collapse-icon-color-collapsed: var(--text-accent, #9ca0fa);
  --color-accent: var(--color-purple, hsl(237.45, 90%, 80%));
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
  --dark: var(--text-normal, var(--color-base-100, #fafbfc));
  --darkgray: var(--text-normal, var(--color-base-100, #fafbfc));
  --divider-color: var(--background-modifier-border, #2c394d);
  --divider-color-hover: var(--interactive-accent, #9ca0fa);
  --dropdown-background: var(--interactive-normal, #2c394d);
  --dropdown-background-hover: var(--interactive-hover, #324158);
  --file-header-background: var(--background-primary, #0d1117);
  --file-header-background-focused: var(--background-primary, #0d1117);
  --flair-background: var(--interactive-normal, #2c394d);
  --flair-color: var(--text-normal, #fafbfc);
  --footnote-divider-color: var(--metadata-divider-color, #2c394d);
  --footnote-id-color: var(--text-muted, #c0c0c0);
  --footnote-id-color-no-occurrences: var(--text-faint, #aea8ba);
  --footnote-input-background-active: var(--metadata-input-background-active, #19212d);
  --graph-node: var(--text-muted, #c0c0c0);
  --graph-node-attachment: var(--color-yellow, #faf69c);
  --graph-node-focused: var(--text-accent, #9ca0fa);
  --graph-node-tag: var(--color-green, #9cfac7);
  --graph-node-unresolved: var(--text-faint, #aea8ba);
  --graph-text: var(--text-normal, #fafbfc);
  --gray: var(--text-muted, var(--color-base-70, #c0c0c0));
  --h1-color: var(--color-purple, #9ca0fa);
  --h2-color: var(--color-blue, #9cfaf6);
  --h3-color: var(--color-green, #9cfac7);
  --h4-color: var(--color-yellow, #faf69c);
  --h5-color: var(--color-orange, #fac79e);
  --h6-color: var(--color-pink, #fa9ccf);
  --heading-formatting: var(--text-faint, #aea8ba);
  --highlight: var(--background-modifier-hover, var(--color-base-10, #19212d));
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
  --hr-color: var(--background-modifier-border, #2c394d);
  --icon-color-active: var(--text-accent, #9ca0fa);
  --icon-color-focused: var(--text-normal, #fafbfc);
  --icon-color-hover: var(--text-muted, #c0c0c0);
  --indentation-guide-width: var(--border-width, 2px);
  --indentation-guide-width-active: var(--border-width, 2px);
  --inline-title-color: var(--h1-color, #9ca0fa);
  --input-date-separator: var(--text-faint, #aea8ba);
  --input-placeholder-color: var(--text-faint, #aea8ba);
  --interactive-accent: var(--color-purple, #9ca0fa);
  --interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85);
  --interactive-accent-hsl: var(--color-accent-hsl, 237.45, 90%, 80%);
  --interactive-hover: var(--color-base-35, #324158);
  --interactive-normal: var(--color-base-20, #2c394d);
  --light: var(--background-primary, var(--color-base-00, #0d1117));
  --lightgray: var(--background-secondary, var(--color-base-05, #131922));
  --link-color: var(--color-purple, #9ca0fa);
  --link-color-hover: hsla(var(--accent-default-h), var(--accent-default-s), var(--accent-default-l), 0.9);
  --link-decoration: none;
  --link-external-color: var(--color-purple, #9ca0fa);
  --link-external-color-hover: hsla(var(--accent-default-h), var(--accent-default-s), var(--accent-default-l), 0.9);
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, #9ca0fa);
  --list-bullet-border: 1px solid var(--color-base-05);
  --list-marker-color: var(--color-base-70, #4a6184);
  --list-marker-color-collapsed: var(--color-base-60, #445979);
  --list-marker-color-hover: var(--color-purple, #9ca0fa);
  --list-spacing: 2px;
  --menu-background: var(--background-secondary, #131922);
  --menu-border-color: var(--background-modifier-border-hover, #324158);
  --metadata-border-color: var(--background-modifier-border, #2c394d);
  --metadata-divider-color: var(--background-modifier-border, #2c394d);
  --metadata-input-background-active: var(--background-modifier-hover, #19212d);
  --metadata-input-text-color: var(--text-normal, #fafbfc);
  --metadata-label-background-active: var(--color-base-10, #19212d);
  --metadata-label-background-hover: var(--color-base-20, #1f2938);
  --metadata-label-text-color: var(--text-muted, #c0c0c0);
  --metadata-label-text-color-hover: var(--text-muted, #c0c0c0);
  --metadata-property-background-active: var(--color-base-10, #19212d);
  --modal-background: var(--background-primary, #0d1117);
  --nav-collapse-icon-color: var(--collapse-icon-color, #aea8ba);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #aea8ba);
  --nav-heading-color: var(--text-normal, #fafbfc);
  --nav-heading-color-collapsed: var(--text-faint, #aea8ba);
  --nav-heading-color-collapsed-hover: var(--text-muted, #c0c0c0);
  --nav-heading-color-hover: var(--text-normal, #fafbfc);
  --nav-indentation-guide-width: var(--indentation-guide-width, 2px);
  --nav-indetation-guide-color: var(--color-base-20, #1f2938);
  --nav-item-background-active: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --nav-item-background-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --nav-item-background-selected: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --nav-item-color: var(--text-muted, #c0c0c0);
  --nav-item-color-active: var(--text-normal, #fafbfc);
  --nav-item-color-highlighted: var(--text-accent, #9ca0fa);
  --nav-item-color-hover: var(--text-normal, #fafbfc);
  --nav-item-color-selected: var(--text-normal, #fafbfc);
  --nav-tag-color: var(--text-faint, #aea8ba);
  --nav-tag-color-active: var(--text-muted, #c0c0c0);
  --nav-tag-color-hover: var(--text-muted, #c0c0c0);
  --pdf-background: var(--background-primary, #0d1117);
  --pdf-page-background: var(--background-primary, #0d1117);
  --pdf-sidebar-background: var(--background-primary, #0d1117);
  --pill-border-color: var(--background-modifier-border, #2c394d);
  --pill-border-color-hover: var(--background-modifier-border-hover, #324158);
  --pill-color: var(--text-muted, #c0c0c0);
  --pill-color-hover: var(--text-normal, #fafbfc);
  --pill-color-remove: var(--text-faint, #aea8ba);
  --pill-color-remove-hover: var(--text-accent, #9ca0fa);
  --prompt-background: var(--background-primary, #0d1117);
  --raised-background: var(--blur-background, color-mix(in srgb, #2c394d 65%, transparent) linear-gradient(#2c394d, color-mix(in srgb, #2c394d 65%, transparent)));
  --ribbon-background: var(--color-base-00, #0d1117);
  --ribbon-background-collapsed: var(--background-primary, #0d1117);
  --scrollbar-active-thumb-bg: var(--color-base-00, #0d1117);
  --scrollbar-bg: var(--color-base-00, #0d1117);
  --scrollbar-thumb-bg: var(--color-base-00, #0d1117);
  --search-clear-button-color: var(--text-muted, #c0c0c0);
  --search-icon-color: var(--text-muted, #c0c0c0);
  --search-result-background: var(--background-primary, #0d1117);
  --secondary: var(--text-accent, var(--color-purple, #9ca0fa));
  --setting-group-heading-color: var(--text-normal, #fafbfc);
  --setting-items-background: var(--background-primary-alt, #0d1117);
  --setting-items-border-color: var(--background-modifier-border, #2c394d);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #c0c0c0);
  --shiki-code-background: var(--code-background, #19212d);
  --shiki-code-comment: var(--text-faint, #aea8ba);
  --shiki-code-function: var(--color-green, #9cfac7);
  --shiki-code-important: var(--color-orange, #fac79e);
  --shiki-code-keyword: var(--color-pink, #fa9ccf);
  --shiki-code-normal: var(--text-muted, #c0c0c0);
  --shiki-code-punctuation: var(--text-muted, #c0c0c0);
  --shiki-code-string: var(--color-yellow, #faf69c);
  --shiki-code-value: var(--color-purple, #9ca0fa);
  --shiki-gutter-border-color: var(--background-modifier-border, #2c394d);
  --shiki-gutter-text-color: var(--text-faint, #aea8ba);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #c0c0c0);
  --shiki-highlight-neutral: var(--shiki-code-normal, #c0c0c0);
  --shiki-terminal-dots-color: var(--text-faint, #aea8ba);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #324158);
  --slider-track-background: var(--background-modifier-border, #2c394d);
  --status-bar-background: var(--background-secondary, #131922);
  --status-bar-border-color: var(--divider-color, #2c394d);
  --status-bar-text-color: var(--text-muted, #c0c0c0);
  --suggestion-background: var(--background-primary, #0d1117);
  --sync-avatar-color-1: var(--color-red, #ff4140);
  --sync-avatar-color-2: var(--color-orange, #fac79e);
  --sync-avatar-color-3: var(--color-yellow, #faf69c);
  --sync-avatar-color-4: var(--color-green, #9cfac7);
  --sync-avatar-color-6: var(--color-blue, #9cfaf6);
  --sync-avatar-color-7: var(--color-purple, #9ca0fa);
  --sync-avatar-color-8: var(--color-pink, #fa9ccf);
  --tab-background-active: var(--color-base-10, #19212d);
  --tab-container-background: var(--color-base-10, #19212d);
  --tab-divider-color: var(--background-secondary, #131922);
  --tab-outline-color: var(--color-base-10, #19212d);
  --tab-switcher-background: var(--background-secondary, #131922);
  --tab-text-color: var(--text-faint, #aea8ba);
  --tab-text-color-active: var(--text-muted, #c0c0c0);
  --tab-text-color-focused: var(--text-muted, #c0c0c0);
  --tab-text-color-focused-active: var(--text-muted, #c0c0c0);
  --tab-text-color-focused-active-current: var(--text-normal, #fafbfc);
  --tab-text-color-focused-highlighted: var(--text-accent, #9ca0fa);
  --table-add-button-border-color: var(--background-modifier-border, #2c394d);
  --table-border-color: var(--text-muted, #c0c0c0);
  --table-drag-handle-background-active: var(--table-selection-border-color, #9ca0fa);
  --table-drag-handle-color: var(--text-faint, #aea8ba);
  --table-drag-handle-color-active: var(--text-on-accent, #0d1117);
  --table-header-border-color: var(--table-border-color, #c0c0c0);
  --table-header-color: var(--text-normal, #fafbfc);
  --table-selection-border-color: var(--interactive-accent, #9ca0fa);
  --tag-color: var(--text-faint, #aea8ba);
  --tag-color-hover: var(--text-accent, #9ca0fa);
  --tag-radius: 18px;
  --tertiary: var(--text-accent-hover, hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.9));
  --text-accent: var(--color-purple, #9ca0fa);
  --text-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.9);
  --text-error: var(--color-red, #ff4140);
  --text-faint: var(--color-base-50, #aea8ba);
  --text-muted: var(--color-base-70, #c0c0c0);
  --text-normal: var(--color-base-100, #fafbfc);
  --text-on-accent: var(--color-base-00, #0d1117);
  --text-selection: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.4);
  --text-success: var(--color-green, #9cfac7);
  --text-warning: var(--color-orange, #fac79e);
  --textHighlight: var(--background-modifier-hover, var(--color-base-10, #19212d));
  --titlebar-background: var(--background-secondary, #131922);
  --titlebar-background-focused: var(--color-base-00, #0d1117);
  --titlebar-border-color: var(--background-modifier-border, #2c394d);
  --titlebar-text-color: var(--text-muted, #c0c0c0);
  --titlebar-text-color-focused: var(--text-normal, #fafbfc);
  --vault-profile-color: var(--text-normal, #fafbfc);
  --vault-profile-color-hover: var(--vault-profile-color, #fafbfc);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(25, 33, 45));
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(13, 17, 23));
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(19, 25, 34));
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 57, 77);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(25, 33, 45));
  border-left-color: rgb(44, 57, 77);
  color: rgb(250, 251, 252);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(250, 251, 252));
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(250, 251, 252));
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(250, 251, 252));
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(250, 251, 252));
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(250, 251, 252));
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 251, 252);
  outline: rgb(250, 251, 252) none 0px;
  text-decoration-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(250, 251, 252));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(38, 49, 66));
  border-color: rgb(38, 49, 66);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(192, 192, 192));
  outline: rgb(192, 192, 192) none 0px;
  text-decoration-color: rgb(192, 192, 192);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(156, 160, 250));
  outline: rgb(156, 160, 250) none 0px;
  text-decoration-color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(156, 160, 250));
  outline: rgb(156, 160, 250) none 0px;
  text-decoration-color: rgb(156, 160, 250);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(156, 160, 250));
  outline: rgb(156, 160, 250) none 0px;
  text-decoration: rgba(158, 162, 250, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(158, 162, 250, 0.3));
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
  color: var(--text-faint, rgb(174, 168, 186));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(25, 33, 45));
  font-style: var(--blockquote-font-style, italic);
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
  color: var(--table-text-color, rgb(250, 251, 252));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: var(--table-header-color, rgb(250, 251, 252));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(25, 33, 45));
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: var(--code-normal, rgb(248, 248, 242));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(25, 33, 45));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  background-color: var(--background-primary-alt, rgb(13, 17, 23));
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(250, 251, 252);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(250, 199, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 199, 158);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(62, 81, 110);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 246, 156);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 250, 246);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 65, 64);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 65, 64);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 65, 64);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 65, 64);
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

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 250, 246);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 246, 156);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 246, 156);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 160, 250);
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

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 65, 64);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 250, 199);
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

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 250, 199);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(156, 250, 199);
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
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(250, 251, 252);
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
  color: var(--text-normal, rgb(250, 251, 252));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(13, 17, 23));
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
  background-color: var(--background-modifier-hover, rgb(25, 33, 45));
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
  background-color: var(--background-modifier-hover, rgb(25, 33, 45));
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(25, 33, 45));
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(156, 160, 250, 0.2));
  border-bottom-color: rgba(158, 162, 250, 0.15);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgba(158, 162, 250, 0.15);
  border-right-color: rgba(158, 162, 250, 0.15);
  border-top-color: rgba(158, 162, 250, 0.15);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(174, 168, 186);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(156, 160, 250));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(156, 160, 250));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(156, 250, 246));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(156, 160, 250));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(156, 250, 199));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(250, 246, 156));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(250, 199, 158));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(250, 156, 207));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container {
  background-color: var(--background-primary, rgb(13, 17, 23));
}

html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-width: 2px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(192, 192, 192));
  cursor: var(--cursor, pointer);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(192, 192, 192));
  cursor: var(--cursor, pointer);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(250, 251, 252);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: var(--icon-color, rgb(250, 251, 252));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(19, 25, 34));
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: var(--status-bar-text-color, rgb(192, 192, 192));
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
  color: var(--nav-item-color, rgb(192, 192, 192));
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
  color: var(--nav-item-color, rgb(192, 192, 192));
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: var(--background-primary, rgb(13, 17, 23));
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
  color: var(--icon-color, rgb(192, 192, 192));
  cursor: var(--cursor, pointer);
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
  color: var(--text-faint, rgb(174, 168, 186));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(250, 251, 252));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(19, 25, 34));
  border-color: rgb(250, 251, 252);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(192, 192, 192);
  color: var(--table-header-color, rgb(250, 251, 252));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(44, 57, 77);
  border-left-color: rgb(44, 57, 77);
  border-right-color: rgb(44, 57, 77);
  border-top-color: rgb(44, 57, 77);
  color: var(--text-muted, rgb(192, 192, 192));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(192, 192, 192);
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
  background-color: var(--pill-background, rgba(156, 160, 250, 0.2));
  border-radius: 18px;
  color: var(--pill-color, rgb(174, 168, 186));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(192, 192, 192);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(13, 17, 23));
  color: var(--text-normal, rgb(250, 251, 252));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(19, 25, 34));
  border-color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--background-primary, rgb(13, 17, 23));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(250, 251, 252);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 251, 252);
  border-left-color: rgb(250, 251, 252);
  border-right-color: rgb(250, 251, 252);
  border-top-color: rgb(250, 251, 252);
  color: rgb(250, 251, 252);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(19, 25, 34));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(250, 251, 252));
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
  color: var(--text-normal, rgb(192, 192, 192));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(25, 33, 45));
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: var(--code-normal, rgb(248, 248, 242));
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
  background-color: var(--tag-background, rgba(156, 160, 250, 0.2));
  border-bottom-color: rgba(158, 162, 250, 0.15);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgba(158, 162, 250, 0.15);
  border-right-color: rgba(158, 162, 250, 0.15);
  border-top-color: rgba(158, 162, 250, 0.15);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  color: var(--tag-color, rgb(174, 168, 186));
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
  --background-modifier-border: var(--color-base-30, #c5ccdB);
  --background-modifier-border-focus: var(--color-base-20, #dadfe8);
  --background-modifier-error: var(--color-red, #f6535a);
  --background-modifier-error-hover: var(--color-red, #f6535a);
  --background-modifier-form-field: var(--color-base-00, #f9fafc);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f9fafc);
  --background-modifier-hover: var(--color-base-10, #e5e8ee);
  --background-modifier-success: var(--color-green, #0bd065);
  --background-primary: var(--color-base-00, #f9fafc);
  --background-primary-alt: var(--color-base-00, #f9fafc);
  --background-secondary: var(--color-base-05, #eff1f5);
  --background-secondary-alt: var(--color-base-05, #eff1f5);
  --bases-cards-background: var(--background-primary, #f9fafc);
  --bases-cards-cover-background: var(--background-primary-alt, #f9fafc);
  --bases-embed-border-color: var(--background-modifier-border, #c5ccdB);
  --bases-group-heading-property-color: var(--text-muted, #747474);
  --bases-table-border-color: var(--table-border-color, #747474);
  --bases-table-cell-background-active: var(--background-primary, #f9fafc);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f9fafc);
  --bases-table-cell-background-selected: var(--table-selection, hsla(237.80, 90%, 76%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #f9fafc);
  --bases-table-header-background: var(--background-primary, #f9fafc);
  --bases-table-header-background-hover: var(--background-modifier-hover, #e5e8ee);
  --bases-table-header-color: var(--text-muted, #747474);
  --bases-table-summary-background: var(--background-primary, #f9fafc);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #e5e8ee);
  --blockquote-background-color: var(--color-base-05, #eff1f5);
  --blockquote-border-color: var(--color-orange, #f37c1d);
  --blockquote-color: var(--text-muted, #747474);
  --blockquote-font-style: italic;
  --canvas-background: var(--background-primary, #f9fafc);
  --canvas-card-label-color: var(--text-faint, #8d8d8d);
  --canvas-dot-pattern: var(--color-base-30, #c5ccdB);
  --caret-color: var(--text-normal, #0d1117);
  --checkbox-border-color: var(--text-faint, #8d8d8d);
  --checkbox-border-color-hover: var(--text-muted, #747474);
  --checkbox-color: var(--color-base-25, #d0d6e1);
  --checkbox-color-hover: var(--color-base-25, #d0d6e1);
  --checkbox-marker-color: var(--color-green, #0bd065);
  --checklist-done-color: var(--text-faint, #8d8d8d);
  --code-background: var(--background-primary-alt, #f9fafc);
  --code-border-color: var(--background-modifier-border, #c5ccdB);
  --code-bracket-background: var(--background-modifier-hover, #e5e8ee);
  --code-comment: var(--text-faint, #8d8d8d);
  --code-function: var(--color-yellow, #c0b90a);
  --code-important: var(--color-orange, #f37c1d);
  --code-keyword: var(--color-pink, #fa9ccf);
  --code-normal: var(--text-normal, #0d1117);
  --code-operator: var(--color-red, #f6535a);
  --code-punctuation: var(--text-muted, #747474);
  --code-string: var(--color-green, #0bd065);
  --code-tag: var(--color-red, #f6535a);
  --code-value: var(--color-purple, #8c90f9);
  --collapse-icon-color: var(--text-faint, #8d8d8d);
  --collapse-icon-color-collapsed: var(--text-accent, #8c90f9);
  --color-accent: var(--color-purple, hsl(237.80, 90%, 76%));
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
  --dark: var(--text-normal, var(--color-base-100, #0d1117));
  --darkgray: var(--text-normal, var(--color-base-100, #0d1117));
  --divider-color: var(--background-modifier-border, #c5ccdB);
  --divider-color-hover: var(--interactive-accent, #8c90f9);
  --dropdown-background: var(--interactive-normal, #dadfe8);
  --dropdown-background-hover: var(--interactive-hover, #e5e8ee);
  --file-header-background: var(--background-primary, #f9fafc);
  --file-header-background-focused: var(--background-primary, #f9fafc);
  --flair-background: var(--interactive-normal, #dadfe8);
  --flair-color: var(--text-normal, #0d1117);
  --footnote-divider-color: var(--metadata-divider-color, #c5ccdB);
  --footnote-id-color: var(--text-muted, #747474);
  --footnote-id-color-no-occurrences: var(--text-faint, #8d8d8d);
  --footnote-input-background-active: var(--metadata-input-background-active, #e5e8ee);
  --graph-node: var(--text-muted, #747474);
  --graph-node-attachment: var(--color-yellow, #c0b90a);
  --graph-node-focused: var(--text-accent, #8c90f9);
  --graph-node-tag: var(--color-green, #0bd065);
  --graph-node-unresolved: var(--text-faint, #8d8d8d);
  --graph-text: var(--text-normal, #0d1117);
  --gray: var(--text-muted, var(--color-base-70, #747474));
  --h1-color: var(--color-purple, #8c90f9);
  --h2-color: var(--color-blue, #0bd0c8);
  --h3-color: var(--color-green, #0bd065);
  --h4-color: var(--color-yellow, #c0b90a);
  --h5-color: var(--color-orange, #f37c1d);
  --h6-color: var(--color-pink, #fa9ccf);
  --heading-formatting: var(--text-faint, #8d8d8d);
  --highlight: var(--background-modifier-hover, var(--color-base-10, #e5e8ee));
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
  --hr-color: var(--background-modifier-border, #c5ccdB);
  --icon-color-active: var(--text-accent, #8c90f9);
  --icon-color-focused: var(--text-normal, #0d1117);
  --icon-color-hover: var(--text-muted, #747474);
  --indentation-guide-width: var(--border-width, 2px);
  --indentation-guide-width-active: var(--border-width, 2px);
  --inline-title-color: var(--h1-color, #8c90f9);
  --input-date-separator: var(--text-faint, #8d8d8d);
  --input-placeholder-color: var(--text-faint, #8d8d8d);
  --interactive-accent: var(--color-purple, #8c90f9);
  --interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85);
  --interactive-accent-hsl: var(--color-accent-hsl, 237.80, 90%, 76%);
  --interactive-hover: var(--color-base-10, #e5e8ee);
  --interactive-normal: var(--color-base-20, #dadfe8);
  --light: var(--background-primary, var(--color-base-00, #f9fafc));
  --lightgray: var(--background-secondary, var(--color-base-05, #eff1f5));
  --link-color: var(--color-purple, #8c90f9);
  --link-color-hover: hsla(var(--accent-default-h), var(--accent-default-s), var(--accent-default-l), 0.9);
  --link-decoration: none;
  --link-external-color: var(--color-purple, #8c90f9);
  --link-external-color-hover: hsla(var(--accent-default-h), var(--accent-default-s), var(--accent-default-l), 0.9);
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, #8c90f9);
  --list-bullet-border: 1px solid var(--color-base-05);
  --list-marker-color: var(--color-base-70, #9ba8c1);
  --list-marker-color-collapsed: var(--color-base-60, #a6b1c7);
  --list-marker-color-hover: var(--color-purple, #8c90f9);
  --list-spacing: 2px;
  --menu-background: var(--background-secondary, #eff1f5);
  --metadata-border-color: var(--background-modifier-border, #c5ccdB);
  --metadata-divider-color: var(--background-modifier-border, #c5ccdB);
  --metadata-input-background-active: var(--background-modifier-hover, #e5e8ee);
  --metadata-input-text-color: var(--text-normal, #0d1117);
  --metadata-label-background-active: var(--color-base-10, #e5e8ee);
  --metadata-label-background-hover: var(--color-base-20, #dadfe8);
  --metadata-label-text-color: var(--text-muted, #747474);
  --metadata-label-text-color-hover: var(--text-muted, #747474);
  --metadata-property-background-active: var(--color-base-10, #e5e8ee);
  --modal-background: var(--background-primary, #f9fafc);
  --nav-collapse-icon-color: var(--collapse-icon-color, #8d8d8d);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #8d8d8d);
  --nav-heading-color: var(--text-normal, #0d1117);
  --nav-heading-color-collapsed: var(--text-faint, #8d8d8d);
  --nav-heading-color-collapsed-hover: var(--text-muted, #747474);
  --nav-heading-color-hover: var(--text-normal, #0d1117);
  --nav-indentation-guide-width: var(--indentation-guide-width, 2px);
  --nav-indetation-guide-color: var(--color-base-20, #dadfe8);
  --nav-item-background-active: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --nav-item-background-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --nav-item-background-selected: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.5);
  --nav-item-color: var(--text-muted, #747474);
  --nav-item-color-active: var(--text-normal, #0d1117);
  --nav-item-color-highlighted: var(--text-accent, #8c90f9);
  --nav-item-color-hover: var(--text-normal, #0d1117);
  --nav-item-color-selected: var(--text-normal, #0d1117);
  --nav-tag-color: var(--text-faint, #8d8d8d);
  --nav-tag-color-active: var(--text-muted, #747474);
  --nav-tag-color-hover: var(--text-muted, #747474);
  --pdf-background: var(--background-primary, #f9fafc);
  --pdf-page-background: var(--background-primary, #f9fafc);
  --pdf-sidebar-background: var(--background-primary, #f9fafc);
  --pill-border-color: var(--background-modifier-border, #c5ccdB);
  --pill-color: var(--text-muted, #747474);
  --pill-color-hover: var(--text-normal, #0d1117);
  --pill-color-remove: var(--text-faint, #8d8d8d);
  --pill-color-remove-hover: var(--text-accent, #8c90f9);
  --prompt-background: var(--background-primary, #f9fafc);
  --raised-background: var(--blur-background, color-mix(in srgb, #f9fafc 65%, transparent) linear-gradient(#f9fafc, color-mix(in srgb, #f9fafc 65%, transparent)));
  --ribbon-background: var(--color-base-00, #f9fafc);
  --ribbon-background-collapsed: var(--background-primary, #f9fafc);
  --scrollbar-active-thumb-bg: var(--color-base-00, #f9fafc);
  --scrollbar-bg: var(--color-base-00, #f9fafc);
  --scrollbar-thumb-bg: var(--color-base-00, #f9fafc);
  --search-clear-button-color: var(--text-muted, #747474);
  --search-icon-color: var(--text-muted, #747474);
  --search-result-background: var(--background-primary, #f9fafc);
  --secondary: var(--text-accent, var(--color-purple, #8c90f9));
  --setting-group-heading-color: var(--text-normal, #0d1117);
  --setting-items-background: var(--background-primary-alt, #f9fafc);
  --setting-items-border-color: var(--background-modifier-border, #c5ccdB);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #747474);
  --shiki-code-background: var(--code-background, #f9fafc);
  --shiki-code-comment: var(--text-faint, #8d8d8d);
  --shiki-code-function: var(--color-green, #0bd065);
  --shiki-code-important: var(--color-orange, #f37c1d);
  --shiki-code-keyword: var(--color-pink, #fa9ccf);
  --shiki-code-normal: var(--text-muted, #747474);
  --shiki-code-punctuation: var(--text-muted, #747474);
  --shiki-code-string: var(--color-yellow, #c0b90a);
  --shiki-code-value: var(--color-purple, #8c90f9);
  --shiki-gutter-border-color: var(--background-modifier-border, #c5ccdB);
  --shiki-gutter-text-color: var(--text-faint, #8d8d8d);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #747474);
  --shiki-highlight-neutral: var(--shiki-code-normal, #747474);
  --shiki-terminal-dots-color: var(--text-faint, #8d8d8d);
  --slider-track-background: var(--background-modifier-border, #c5ccdB);
  --status-bar-background: var(--background-secondary, #eff1f5);
  --status-bar-border-color: var(--divider-color, #c5ccdB);
  --status-bar-text-color: var(--text-muted, #747474);
  --suggestion-background: var(--background-primary, #f9fafc);
  --sync-avatar-color-1: var(--color-red, #f6535a);
  --sync-avatar-color-2: var(--color-orange, #f37c1d);
  --sync-avatar-color-3: var(--color-yellow, #c0b90a);
  --sync-avatar-color-4: var(--color-green, #0bd065);
  --sync-avatar-color-6: var(--color-blue, #0bd0c8);
  --sync-avatar-color-7: var(--color-purple, #8c90f9);
  --sync-avatar-color-8: var(--color-pink, #fa9ccf);
  --tab-background-active: var(--color-base-05, #eff1f5);
  --tab-container-background: var(--color-base-10, #e5e8ee);
  --tab-divider-color: var(--background-secondary, #eff1f5);
  --tab-outline-color: var(--color-base-10, #e5e8ee);
  --tab-switcher-background: var(--background-secondary, #eff1f5);
  --tab-text-color: var(--text-faint, #8d8d8d);
  --tab-text-color-active: var(--text-muted, #747474);
  --tab-text-color-focused: var(--text-muted, #747474);
  --tab-text-color-focused-active: var(--text-muted, #747474);
  --tab-text-color-focused-active-current: var(--text-normal, #0d1117);
  --tab-text-color-focused-highlighted: var(--text-accent, #8c90f9);
  --table-add-button-border-color: var(--background-modifier-border, #c5ccdB);
  --table-border-color: var(--text-muted, #747474);
  --table-drag-handle-background-active: var(--table-selection-border-color, #8c90f9);
  --table-drag-handle-color: var(--text-faint, #8d8d8d);
  --table-drag-handle-color-active: var(--text-on-accent, #f9fafc);
  --table-header-border-color: var(--table-border-color, #747474);
  --table-header-color: var(--text-normal, #0d1117);
  --table-selection-border-color: var(--interactive-accent, #8c90f9);
  --tag-background: var(--color-base-10, #e5e8ee);
  --tag-color: var(--text-faint, #8d8d8d);
  --tag-color-hover: var(--text-accent, #8c90f9);
  --tag-radius: 18px;
  --tertiary: var(--text-accent-hover, hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.9));
  --text-accent: var(--color-purple, #8c90f9);
  --text-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.9);
  --text-error: var(--color-red, #f6535a);
  --text-faint: var(--color-base-50, #8d8d8d);
  --text-muted: var(--color-base-70, #747474);
  --text-normal: var(--color-base-100, #0d1117);
  --text-on-accent: var(--color-base-00, #f9fafc);
  --text-selection: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.4);
  --text-success: var(--color-green, #0bd065);
  --text-warning: var(--color-orange, #f37c1d);
  --textHighlight: var(--background-modifier-hover, var(--color-base-10, #e5e8ee));
  --titlebar-background: var(--background-secondary, #eff1f5);
  --titlebar-background-focused: var(--color-base-00, #f9fafc);
  --titlebar-border-color: var(--background-modifier-border, #c5ccdB);
  --titlebar-text-color: var(--text-muted, #747474);
  --titlebar-text-color-focused: var(--text-normal, #0d1117);
  --vault-profile-color: var(--text-normal, #0d1117);
  --vault-profile-color-hover: var(--vault-profile-color, #0d1117);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(229, 232, 238));
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(249, 250, 252));
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(239, 241, 245));
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(197, 204, 219);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(229, 232, 238));
  border-left-color: rgb(197, 204, 219);
  color: rgb(13, 17, 23);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(13, 17, 23));
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(13, 17, 23));
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(13, 17, 23));
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(13, 17, 23));
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgb(13, 17, 23));
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body del {
  color: rgb(13, 17, 23);
  outline: rgb(13, 17, 23) none 0px;
  text-decoration-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(13, 17, 23));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(208, 214, 225));
  border-color: rgb(208, 214, 225);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(116, 116, 116));
  outline: rgb(116, 116, 116) none 0px;
  text-decoration-color: rgb(116, 116, 116);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(140, 144, 249));
  outline: rgb(140, 144, 249) none 0px;
  text-decoration-color: rgb(140, 144, 249);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(140, 144, 249));
  outline: rgb(140, 144, 249) none 0px;
  text-decoration-color: rgb(140, 144, 249);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(140, 144, 249));
  outline: rgb(140, 144, 249) none 0px;
  text-decoration: rgba(139, 143, 249, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(139, 143, 249, 0.3));
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
  color: var(--text-faint, rgb(141, 141, 141));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(239, 241, 245));
  font-style: var(--blockquote-font-style, italic);
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
  color: var(--table-text-color, rgb(13, 17, 23));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: var(--table-header-color, rgb(13, 17, 23));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(249, 250, 252));
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: var(--code-normal, rgb(13, 17, 23));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(249, 250, 252));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
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
  background-color: var(--background-primary-alt, rgb(249, 250, 252));
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(141, 141, 141);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(13, 17, 23);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(243, 124, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 124, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(176, 186, 206);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 185, 10);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 208, 200);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 83, 90);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 83, 90);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 83, 90);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 83, 90);
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

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 208, 200);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 185, 10);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 185, 10);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 144, 249);
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

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 83, 90);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 208, 101);
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

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 208, 101);
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
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(11, 208, 101);
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
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(13, 17, 23);
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
  color: var(--text-normal, rgb(13, 17, 23));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(249, 250, 252));
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
  background-color: var(--background-modifier-hover, rgb(229, 232, 238));
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
  background-color: var(--background-modifier-hover, rgb(229, 232, 238));
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(229, 232, 238));
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgb(229, 232, 238));
  border-bottom-color: rgba(139, 143, 249, 0.15);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgba(139, 143, 249, 0.15);
  border-right-color: rgba(139, 143, 249, 0.15);
  border-top-color: rgba(139, 143, 249, 0.15);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(141, 141, 141);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(140, 144, 249));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(140, 144, 249));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(11, 208, 200));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(140, 144, 249));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(11, 208, 101));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(192, 185, 10));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(243, 124, 29));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(250, 156, 207));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container {
  background-color: var(--background-primary, rgb(249, 250, 252));
}

html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-width: 2px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(116, 116, 116));
  cursor: var(--cursor, pointer);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(116, 116, 116));
  cursor: var(--cursor, pointer);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(13, 17, 23);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: var(--icon-color, rgb(13, 17, 23));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(239, 241, 245));
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: var(--status-bar-text-color, rgb(116, 116, 116));
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
  color: var(--nav-item-color, rgb(116, 116, 116));
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
  color: var(--nav-item-color, rgb(116, 116, 116));
}

html[saved-theme="light"] body ul.section-ul {
  background-color: var(--background-primary, rgb(249, 250, 252));
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
  color: var(--icon-color, rgb(116, 116, 116));
  cursor: var(--cursor, pointer);
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
  color: var(--text-faint, rgb(141, 141, 141));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(13, 17, 23));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(249, 250, 252));
  border-color: rgb(13, 17, 23);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(116, 116, 116);
  color: var(--table-header-color, rgb(13, 17, 23));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(197, 204, 219);
  border-left-color: rgb(197, 204, 219);
  border-right-color: rgb(197, 204, 219);
  border-top-color: rgb(197, 204, 219);
  color: var(--text-muted, rgb(116, 116, 116));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(116, 116, 116);
  border-left-color: rgb(116, 116, 116);
  border-right-color: rgb(116, 116, 116);
  border-top-color: rgb(116, 116, 116);
  color: rgb(116, 116, 116);
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
  background-color: var(--pill-background, rgb(229, 232, 238));
  border-radius: 18px;
  color: var(--pill-color, rgb(141, 141, 141));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(116, 116, 116);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(249, 250, 252));
  color: var(--text-normal, rgb(13, 17, 23));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(239, 241, 245));
  border-color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--background-primary, rgb(249, 250, 252));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(13, 17, 23);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: rgb(13, 17, 23);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(239, 241, 245));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(13, 17, 23));
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
  color: var(--text-normal, rgb(116, 116, 116));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(249, 250, 252));
  border-bottom-color: rgb(13, 17, 23);
  border-left-color: rgb(13, 17, 23);
  border-right-color: rgb(13, 17, 23);
  border-top-color: rgb(13, 17, 23);
  color: var(--code-normal, rgb(13, 17, 23));
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
  background-color: var(--tag-background, rgb(229, 232, 238));
  border-bottom-color: rgba(139, 143, 249, 0.15);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-left-color: rgba(139, 143, 249, 0.15);
  border-right-color: rgba(139, 143, 249, 0.15);
  border-top-color: rgba(139, 143, 249, 0.15);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  color: var(--tag-color, rgb(141, 141, 141));
}`,
  },
  classSettings: {
    "icon-default": {
      general: `body.icon-default {
--icon-color: var(--icon-color);
}`,
    },
    "icon-purple": {
      general: `body.icon-purple {
--icon-color: var(--color-purple);
}`,
    },
    "icon-yellow": {
      general: `body.icon-yellow {
--icon-color: var(--color-yellow);
}`,
    },
    "icon-pink": {
      general: `body.icon-pink {
--icon-color: var(--color-pink);
}`,
    },
    "icon-green": {
      general: `body.icon-green {
--icon-color: var(--color-green);
}`,
    },
    "icon-orange": {
      general: `body.icon-orange {
--icon-color: var(--color-orange);
}`,
    },
    "icon-blue": {
      general: `body.icon-blue {
--icon-color: var(--color-blue);
}`,
    },
    "heading-no-color": {
      general: `.heading-no-color {
--h1-color: var(--text-normal) !important;
--h2-color: var(--text-normal) !important;
--h3-color: var(--text-normal) !important;
--h4-color: var(--text-normal) !important;
--h5-color: var(--text-normal) !important;
--h6-color: var(--text-normal) !important;
}`,
    },
    "disable-file-and-folder-icons": {
      general: `body.disable-file-and-folder-icons .nav-folder-title > .nav-folder-title-content::before {
content: '';
padding: 0;
}

body.disable-file-and-folder-icons .nav-file-title > .nav-file-title-content::before {
content: '';
padding: 0;
}`,
    },
    "hide-header-title": {
      general: `body.hide-header-title .view-header-title-container {
display: none;
}`,
    },
    "hide-status-bar": {
      general: `body.hide-status-bar .status-bar {
display: none;
}`,
    },
    "highlight-active-line": {
      general: `body.highlight-active-line .markdown-source-view .cm-active.cm-line {
background-color: var(--color-base-05);
border-left: 2px solid var(--color-purple);
}`,
    },
    "h1-color-default-none": {
      general: `body.h1-color-default-none {
--h1-color: var(--h1-color-custom);
}`,
    },
    "h1-purple": {
      general: `body.h1-purple {
--h1-color: var(--color-purple);
}`,
    },
    "h1-blue": {
      general: `body.h1-blue {
--h1-color: var(--color-blue);
}`,
    },
    "h1-green": {
      general: `body.h1-green {
--h1-color: var(--color-green);
}`,
    },
    "h1-yellow": {
      general: `body.h1-yellow {
--h1-color: var(--color-yellow);
}`,
    },
    "h1-orange": {
      general: `body.h1-orange {
--h1-color: var(--color-orange);
}`,
    },
    "h1-pink": {
      general: `body.h1-pink {
--h1-color: var(--color-pink);
}`,
    },
    "h2-color-default-none": {
      general: `body.h2-color-default-none {
--h2-color: var(--h2-color-custom);
}`,
    },
    "h2-purple": {
      general: `body.h2-purple {
--h2-color: var(--color-purple);
}`,
    },
    "h2-blue": {
      general: `body.h2-blue {
--h2-color: var(--color-blue);
}`,
    },
    "h2-green": {
      general: `body.h2-green {
--h2-color: var(--color-green);
}`,
    },
    "h2-yellow": {
      general: `body.h2-yellow {
--h2-color: var(--color-yellow);
}`,
    },
    "h2-orange": {
      general: `body.h2-orange {
--h2-color: var(--color-orange);
}`,
    },
    "h2-pink": {
      general: `body.h2-pink {
--h2-color: var(--color-pink);
}`,
    },
    "h3-color-default-none": {
      general: `body.h3-color-default-none {
--h3-color: var(--h3-color-custom);
}`,
    },
    "h3-purple": {
      general: `body.h3-purple {
--h3-color: var(--color-purple);
}`,
    },
    "h3-blue": {
      general: `body.h3-blue {
--h3-color: var(--color-blue);
}`,
    },
    "h3-green": {
      general: `body.h3-green {
--h3-color: var(--color-green);
}`,
    },
    "h3-yellow": {
      general: `body.h3-yellow {
--h3-color: var(--color-yellow);
}`,
    },
    "h3-orange": {
      general: `body.h3-orange {
--h3-color: var(--color-orange);
}`,
    },
    "h3-pink": {
      general: `body.h3-pink {
--h3-color: var(--color-pink);
}`,
    },
    "h4-color-default-none": {
      general: `body.h4-color-default-none {
--h4-color: var(--h4-color-custom);
}`,
    },
    "h4-purple": {
      general: `body.h4-purple {
--h4-color: var(--color-purple);
}`,
    },
    "h4-blue": {
      general: `body.h4-blue {
--h4-color: var(--color-blue);
}`,
    },
    "h4-green": {
      general: `body.h4-green {
--h4-color: var(--color-green);
}`,
    },
    "h4-yellow": {
      general: `body.h4-yellow {
--h4-color: var(--color-yellow);
}`,
    },
    "h4-orange": {
      general: `body.h4-orange {
--h4-color: var(--color-orange);
}`,
    },
    "h4-pink": {
      general: `body.h4-pink {
--h4-color: var(--color-pink);
}`,
    },
    "h5-color-default-none": {
      general: `body.h5-color-default-none {
--h5-color: var(--h5-color-custom);
}`,
    },
    "h5-purple": {
      general: `body.h5-purple {
--h5-color: var(--color-purple);
}`,
    },
    "h5-blue": {
      general: `body.h5-blue {
--h5-color: var(--color-blue);
}`,
    },
    "h5-green": {
      general: `body.h5-green {
--h5-color: var(--color-green);
}`,
    },
    "h5-yellow": {
      general: `body.h5-yellow {
--h5-color: var(--color-yellow);
}`,
    },
    "h5-orange": {
      general: `body.h5-orange {
--h5-color: var(--color-orange);
}`,
    },
    "h5-pink": {
      general: `body.h5-pink {
--h5-color: var(--color-pink);
}`,
    },
    "h6-color-default-none": {
      general: `body.h6-color-default-none {
--h6-color: var(--h6-color-custom);
}`,
    },
    "h6-purple": {
      general: `body.h6-purple {
--h6-color: var(--color-purple);
}`,
    },
    "h6-blue": {
      general: `body.h6-blue {
--h6-color: var(--color-blue);
}`,
    },
    "h6-green": {
      general: `body.h6-green {
--h6-color: var(--color-green);
}`,
    },
    "h6-yellow": {
      general: `body.h6-yellow {
--h6-color: var(--color-yellow);
}`,
    },
    "h6-orange": {
      general: `body.h6-orange {
--h6-color: var(--color-orange);
}`,
    },
    "h6-pink": {
      general: `body.h6-pink {
--h6-color: var(--color-pink);
}`,
    },
    "bold-color-default-none": {
      general: `body.bold-color-default-none {
--bold-color: var(--bold-color-custom);
}`,
    },
    "bold-purple": {
      general: `body.bold-purple {
--bold-color: var(--color-purple);
}`,
    },
    "bold-blue": {
      general: `body.bold-blue {
--bold-color: var(--color-blue);
}`,
    },
    "bold-green": {
      general: `body.bold-green {
--bold-color: var(--color-green);
}`,
    },
    "bold-yellow": {
      general: `body.bold-yellow {
--bold-color: var(--color-yellow);
}`,
    },
    "bold-orange": {
      general: `body.bold-orange {
--bold-color: var(--color-orange);
}`,
    },
    "bold-pink": {
      general: `body.bold-pink {
--bold-color: var(--color-pink);
}`,
    },
    "italic-color-default-none": {
      general: `body.italic-color-default-none {
--italic-color: var(--italic-color-custom);
}`,
    },
    "italic-purple": {
      general: `body.italic-purple {
--italic-color: var(--color-purple);
}`,
    },
    "italic-blue": {
      general: `body.italic-blue {
--italic-color: var(--color-blue);
}`,
    },
    "italic-green": {
      general: `body.italic-green {
--italic-color: var(--color-green);
}`,
    },
    "italic-yellow": {
      general: `body.italic-yellow {
--italic-color: var(--color-yellow);
}`,
    },
    "italic-orange": {
      general: `body.italic-orange {
--italic-color: var(--color-orange);
}`,
    },
    "italic-pink": {
      general: `body.italic-pink {
--italic-color: var(--color-pink);
}`,
    },
    "highlight-color-default-none": {
      general: `.highlight-color-default-none .cm-s-obsidian span.cm-formatting-highlight, .highlight-color-default-none .cm-s-obsidian span.cm-highlight {
background: linear-gradient(0deg, var(--highlight-background-color-underline) 0, var(--highlight-background-color-underline) 2px, var(--highlight-background-color--active) 2px, var(--highlight-background-color--active) 100%);
color: var(--text-normal);
}`,
    },
    "highlight-bg-purple": {
      general: `body.highlight-bg-purple .cm-s-obsidian span.cm-formatting-highlight, body.highlight-bg-purple .cm-s-obsidian span.cm-highlight {
--text-highlight-bg: var(--highlight-bg-purple);
}`,
    },
    "highlight-bg-blue": {
      general: `body.highlight-bg-blue .cm-s-obsidian span.cm-formatting-highlight, body.highlight-bg-blue .cm-s-obsidian span.cm-highlight {
--text-highlight-bg: var(--highlight-bg-blue);
}`,
    },
    "highlight-bg-green": {
      general: `body.highlight-bg-green .cm-s-obsidian span.cm-formatting-highlight, body.highlight-bg-green .cm-s-obsidian span.cm-highlight {
--text-highlight-bg: var(--highlight-bg-green);
}`,
    },
    "highlight-bg-yellow": {
      general: `body.highlight-bg-yellow .cm-s-obsidian span.cm-formatting-highlight, body.highlight-bg-yellow .cm-s-obsidian span.cm-highlight {
--text-highlight-bg: var(--highlight-bg-yellow);
}`,
    },
    "highlight-bg-orange": {
      general: `body.highlight-bg-orange .cm-s-obsidian span.cm-formatting-highlight, body.highlight-bg-orange .cm-s-obsidian span.cm-highlight {
--text-highlight-bg: var(--highlight-bg-orange);
}`,
    },
    "highlight-bg-pink": {
      general: `body.highlight-bg-pink .cm-s-obsidian span.cm-formatting-highlight, body.highlight-bg-pink .cm-s-obsidian span.cm-highlight {
--text-highlight-bg: var(--highlight-bg-pink);
}`,
    },
    "highlight-enable-color-custom": {
      general: `body.highlight-enable-color-custom .cm-s-obsidian span.cm-formatting-highlight, body.highlight-enable-color-custom .cm-s-obsidian span.cm-highlight {
background: var(--highlight-color-custom-bg);
color: var(--highlight-color-custom-text);
}`,
    },
    dracula: {
      dark: `body.dracula {
--code-background: var(--color-dracula-background);
--code-normal: var(--color-dracula-foreground);
--code-comment: var(--color-dracula-comment);
--code-function: var(--color-dracula-green);
--code-important: var(--color-dracula-red);
--code-keyword: var(--color-dracula-pink);
--code-operator: var(--color-dracula-foreground);
--code-property: var(--color-dracula-orange);
--code-punctuation: var(--text-muted);
--code-string: var(--color-dracula-yellow);
--code-tag: var(--color-dracula-red);
--code-value: var(--color-dracula-purple);
}`,
    },
    "one-dark-dark": {
      dark: `body.one-dark-dark {
--code-background: var(--color-dark-one-dark-background);
--code-comment: var(--color-dark-one-dark-gray-1);
--code-function: var(--color-dark-one-dark-blue);
--code-important: var(--color-dark-one-dark-red);
--code-keyword: var(--color-dark-one-dark-purple);
--code-operator: var(--color-dark-one-dark-aqua);
--code-property: var(--color-dark-one-dark-orange);
--code-punctuation: var(--color-dark-one-dark-gray-2);
--code-string: var(--color-dark-one-dark-green);
--code-tag: var(--color-dark-one-dark-yellow);
--code-value: var(--color-dark-one-dark-blue);
}`,
    },
    "catppuccin-frappe-for-dark": {
      dark: `body.catppuccin-frappe-for-dark {
--code-background: var(--color-ctp-frappe-background);
--code-normal: var(--color-ctp-frappe-foreground);
--code-comment: var(--color-ctp-frappe-faint);
--code-function: var(--color-ctp-frappe-yellow);
--code-important: var(--color-ctp-frappe-orange);
--code-keyword: var(--color-ctp-frappe-pink);
--code-property: var(--color-ctp-frappe-cyan);
--code-punctuation: var(--color-ctp-frappe-muted);
--code-string: var(--color-ctp-frappe-green);
--code-tag: var(--color-ctp-frappe-red);
--code-value: var(--color-ctp-frappe-purple);
}`,
    },
    "catppuccin-macchiato": {
      dark: `body.catppuccin-macchiato {
--code-background: var(--color-ctp-macchiato-background);
--code-normal: var(--color-ctp-macchiato-foreground);
--code-comment: var(--color-ctp-macchiato-faint);
--code-function: var(--color-ctp-macchiato-yellow);
--code-important: var(--color-ctp-macchiato-orange);
--code-keyword: var(--color-ctp-macchiato-pink);
--code-property: var(--color-ctp-macchiato-cyan);
--code-punctuation: var(--color-ctp-macchiato-muted);
--code-string: var(--color-ctp-macchiato-green);
--code-tag: var(--color-ctp-macchiato-red);
--code-value: var(--color-ctp-macchiato-purple);
}`,
    },
    "catppuccin-mocha": {
      dark: `body.catppuccin-mocha {
--code-background: var(--color-ctp-mocha-background);
--code-normal: var(--color-ctp-mocha-foreground);
--code-comment: var(--color-ctp-mocha-faint);
--code-function: var(--color-ctp-mocha-yellow);
--code-important: var(--color-ctp-mocha-orange);
--code-keyword: var(--color-ctp-mocha-pink);
--code-property: var(--color-ctp-mocha-cyan);
--code-punctuation: var(--color-ctp-mocha-muted);
--code-string: var(--color-ctp-mocha-green);
--code-tag: var(--color-ctp-mocha-red);
--code-value: var(--color-ctp-mocha-purple);
}`,
    },
    halcyon: {
      dark: `body.halcyon {
--code-background: var(--color-halcyon-background);
--code-normal: var(--color-halcyon-cyan);
--code-comment: var(--text-faint);
--code-function: var(--color-halcyon-yellow);
--code-important: var(--color-halcyon-red);
--code-keyword: var(--color-halcyon-purple);
--code-operator: var(--color-halcyon-orange);
--code-property: var(--text-muted);
--code-punctuation: var(--color-halcyon-purple);
--code-string: var(--color-halcyon-green);
--code-tag: var(--color-halcyon-grey-dark);
--code-value: var(--color-halcyon-grey-dark);
}`,
    },
    "github-dark": {
      dark: `body.github-dark {
--code-background: var(--color-github-dark-background);
--code-normal: var(--text-muted);
--code-comment: var(--text-faint);
--code-function: var(--color-github-dark-orange);
--code-important: var(--color-github-dark-orange);
--code-keyword: var(--color-github-dark-red);
--code-property: var(--color-github-dark-blue);
--code-punctuation: var(--text-muted);
--code-string: var(--color-github-dark-cyan);
--code-tag: var(--color-github-dark-red);
--code-value: var(--color-github-dark-purple);
}`,
    },
    "tokyo-night": {
      dark: `body.tokyo-night {
--code-background: var(--color-tokyo-night-background);
--code-normal: var(--color-tokyo-night-foreground);
--code-comment: var(--color-tokyo-night-faint);
--code-function: var(--color-tokyo-night-yellow);
--code-important: var(--color-tokyo-night-orange);
--code-keyword: var(--color-tokyo-night-purple);
--code-operator: var(--color-tokyo-night-red);
--code-property: var(--color-tokyo-night-cyan);
--code-punctuation: var(--text-muted);
--code-string: var(--color-tokyo-night-green);
--code-tag: var(--color-tokyo-night-red);
--code-value: var(--color-tokyo-night-purple);
}`,
      light: `body.tokyo-night-light {
--code-background: var(--color-tokyo-night-light-background);
--code-normal: var(--color-tokyo-night-light-foreground);
--code-comment: var(--color-tokyo-night-light-faint);
--code-function: var(--color-tokyo-night-light-yellow);
--code-important: var(--color-tokyo-night-light-orange);
--code-keyword: var(--color-tokyo-night-light-purple);
--code-operator: var(--color-tokyo-night-light-red);
--code-property: var(--color-tokyo-night-light-cyan);
--code-punctuation: var(--text-muted);
--code-string: var(--color-tokyo-night-light-green);
--code-tag: var(--color-tokyo-night-light-red);
--code-value: var(--color-tokyo-night-light-purple);
}`,
    },
    "one-dark-light": {
      light: `body.one-dark-light {
--code-background: var(--color-light-one-dark-background);
--code-normal: var(--color-light-one-dark-gray-2);
--code-comment: var(--text-muted);
--code-function: var(--color-light-one-dark-blue);
--code-important: var(--color-light-one-dark-red);
--code-keyword: var(--color-light-one-dark-purple);
--code-operator: var(--color-light-one-dark-aqua);
--code-property: var(--color-light-one-dark-orange);
--code-punctuation: var(--color-light-one-dark-gray-2);
--code-string: var(--color-light-one-dark-green);
--code-tag: var(--color-light-one-dark-yellow);
--code-value: var(--color-light-one-dark-blue);
}`,
    },
    "catppuccin-frappe-for-light": {
      light: `body.catppuccin-frappe-for-light {
--code-background: var(--color-ctp-frappe-background);
--code-normal: var(--color-ctp-frappe-foreground);
--code-comment: var(--color-ctp-frappe-faint);
--code-function: var(--color-ctp-frappe-yellow);
--code-important: var(--color-ctp-frappe-orange);
--code-keyword: var(--color-ctp-frappe-pink);
--code-property: var(--color-ctp-frappe-cyan);
--code-punctuation: var(--color-ctp-frappe-muted);
--code-string: var(--color-ctp-frappe-green);
--code-tag: var(--color-ctp-frappe-red);
--code-value: var(--color-ctp-frappe-purple);
}`,
    },
    "catppuccin-latte": {
      light: `body.catppuccin-latte {
--code-background: var(--color-ctp-latte-background);
--code-normal: var(--color-ctp-latte-foreground);
--code-comment: var(--color-ctp-latte-faint);
--code-function: var(--color-ctp-latte-yellow);
--code-important: var(--color-ctp-latte-orange);
--code-keyword: var(--color-ctp-latte-pink);
--code-property: var(--color-ctp-latte-cyan);
--code-punctuation: var(--color-ctp-latte-muted);
--code-string: var(--color-ctp-latte-green);
--code-tag: var(--color-ctp-latte-red);
--code-value: var(--color-ctp-latte-purple);
}`,
    },
    "github-light": {
      light: `body.github-light {
--code-background: var(--color-github-light-background);
--code-normal: var(--text-muted);
--code-comment: var(--text-faint);
--code-function: var(--color-github-light-orange);
--code-important: var(--color-github-light-orange);
--code-keyword: var(--color-github-light-red);
--code-property: var(--color-github-light-blue);
--code-punctuation: var(--text-muted);
--code-string: var(--color-github-light-cyan);
--code-tag: var(--color-github-light-red);
--code-value: var(--color-github-light-purple);
}`,
    },
    "tokyo-night-light": {
      light: `body.tokyo-night-light {
--code-background: var(--color-tokyo-night-light-background);
--code-normal: var(--color-tokyo-night-light-foreground);
--code-comment: var(--color-tokyo-night-light-faint);
--code-function: var(--color-tokyo-night-light-yellow);
--code-important: var(--color-tokyo-night-light-orange);
--code-keyword: var(--color-tokyo-night-light-purple);
--code-operator: var(--color-tokyo-night-light-red);
--code-property: var(--color-tokyo-night-light-cyan);
--code-punctuation: var(--text-muted);
--code-string: var(--color-tokyo-night-light-green);
--code-tag: var(--color-tokyo-night-light-red);
--code-value: var(--color-tokyo-night-light-purple);
}`,
    },
    "accent-default": {
      dark: `body.accent-default {
--accent-h: 237.45;
--accent-s: 90%;
--accent-l: 80%;
--interactive-accent: var(--color-purple) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-purple);
--link-external-color: var(--color-purple);
}`,
      light: `body.accent-default {
--accent-h: 237.80;
--accent-s: 90%;
--accent-l: 76%;
--interactive-accent: var(--color-purple) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-purple);
--link-external-color: var(--color-purple);
}`,
    },
    "accent-yellow": {
      dark: `body.accent-yellow {
--accent-h: 57.45;
--accent-s: 90%;
--accent-l: 80%;
--interactive-accent: var(--color-yellow) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-yellow);
--link-external-color: var(--color-yellow);
}`,
      light: `body.accent-yellow {
--accent-h: 57.45;
--accent-s: 90%;
--accent-l: 40%;
--interactive-accent: var(--color-yellow) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-yellow);
--link-external-color: var(--color-yellow);
}`,
    },
    "accent-pink": {
      dark: `body.accent-pink {
--accent-h: 327.45;
--accent-s: 90%;
--accent-l: 80%;
--interactive-accent: var(--color-pink) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-pink);
--link-external-color: var(--color-pink);
}`,
      light: `body.accent-pink {
--accent-h: 327.45;
--accent-s: 90%;
--accent-l: 40%;
--interactive-accent: var(--color-pink) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.45) !important;
--link-color: var(--color-pink);
--link-external-color: var(--color-pink);
}`,
    },
    "accent-green": {
      dark: `body.accent-green {
--accent-h: 147.45;
--accent-s: 90%;
--accent-l: 80%;
--interactive-accent: var(--color-green) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-green);
--link-external-color: var(--color-green);
}`,
      light: `body.accent-green {
--accent-h: 147.45;
--accent-s: 90%;
--accent-l: 40%;
--interactive-accent: var(--color-green) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.80) !important;
--link-color: var(--color-green);
--link-external-color: var(--color-green);
}`,
    },
    "accent-orange": {
      dark: `body.accent-orange {
--accent-h: 26.74;
--accent-s: 90%;
--accent-l: 80%;
--interactive-accent: var(--color-orange) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-orange);
--link-external-color: var(--color-orange);
}`,
      light: `body.accent-orange {
--accent-h: 26.74;
--accent-s: 90%;
--accent-l: 50%;
--interactive-accent: var(--color-orange) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.80) !important;
--link-color: var(--color-orange);
--link-external-color: var(--color-orange);
}`,
    },
    "accent-blue": {
      dark: `body.accent-blue {
--accent-h: 177.45;
--accent-s: 90%;
--accent-l: 80%;
--interactive-accent: var(--color-blue) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-blue);
--link-external-color: var(--color-blue);
}`,
      light: `body.accent-blue {
--accent-h: 177.45;
--accent-s: 90%;
--accent-l: 40%;
--interactive-accent: var(--color-blue) !important;
--interactive-accent-hover: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.85) !important;
--link-color: var(--color-blue);
--link-external-color: var(--color-blue);
}`,
    },
    "preserve-link-color-on-accent-change": {
      general: `.preserve-link-color-on-accent-change {
--accent-default-h: 237.45 !important;
--accent-default-s: 90% !important;
--accent-default-l: 80% !important;
--link-color: var(--color-purple) !important;
--link-external-color: var(--color-purple) !important;
--link-color-hover: hsla(var(--accent-default-h), var(--accent-default-s), var(--accent-default-l), 0.9);
--link-external-color-hover: hsla(var(--accent-default-h), var(--accent-default-s), var(--accent-default-l), 0.9);
}`,
    },
    "blockquote-italic": {
      general: `body.blockquote-italic {
--blockquote-style: italic;
}`,
    },
    "green-alternative-color": {
      dark: `body.green-alternative-color {
--color-green: #a0fa9c;
}`,
    },
    "styled-scrollbars": {
      general: `body:not(.hider-scrollbars).styled-scrollbars ::-webkit-scrollbar {
width: 12px;
background-color: transparent;
}

body:not(.hider-scrollbars).styled-scrollbars ::-webkit-scrollbar:horizontal {
height: 12px;
}

body:not(.hider-scrollbars).styled-scrollbars ::-webkit-scrollbar-corner {
background-color: transparent;
}

body:not(.hider-scrollbars).styled-scrollbars ::-webkit-scrollbar-track {
background-color: transparent;
}

body:not(.hider-scrollbars).styled-scrollbars ::-webkit-scrollbar-thumb {
background-clip: padding-box;
border-radius: 20px;
border: 3px solid transparent;
background-color: var(--color-base-30);
border-width: 3px 3px 3px 3px;
min-height: 45px;
}

body:not(.hider-scrollbars).styled-scrollbars .modal .vertical-tab-header::-webkit-scrollbar-thumb:hover, body:not(.hider-scrollbars).styled-scrollbars .mod-left-split .workspace-tabs ::-webkit-scrollbar-thumb:hover, body:not(.hider-scrollbars).styled-scrollbars ::-webkit-scrollbar-thumb:hover {
background-color: var(--color-base-40);
}

body:not(.hider-scrollbars).styled-scrollbars .modal .vertical-tab-header::-webkit-scrollbar-thumb:active, body:not(.hider-scrollbars).styled-scrollbars .mod-left-split .workspace-tabs ::-webkit-scrollbar-thumb:active, body:not(.hider-scrollbars).styled-scrollbars ::-webkit-scrollbar-thumb:active {
background-color: var(--color-base-40);
}`,
    },
    "alternative-checkboxes": {
      general: `body.alternative-checkboxes input[data-task='!']:checked, body.alternative-checkboxes input[data-task='*']:checked, body.alternative-checkboxes input[data-task='-']:checked, body.alternative-checkboxes input[data-task='<']:checked, body.alternative-checkboxes input[data-task='>']:checked, body.alternative-checkboxes input[data-task='I']:checked, body.alternative-checkboxes input[data-task='b']:checked, body.alternative-checkboxes input[data-task='c']:checked, body.alternative-checkboxes input[data-task='d']:checked, body.alternative-checkboxes input[data-task='f']:checked, body.alternative-checkboxes input[data-task='k']:checked, body.alternative-checkboxes input[data-task='l']:checked, body.alternative-checkboxes input[data-task='p']:checked, body.alternative-checkboxes input[data-task='u']:checked, body.alternative-checkboxes input[data-task='w']:checked, body.alternative-checkboxes input[data-task='P']:checked, body.alternative-checkboxes input[data-task='M']:checked, body.alternative-checkboxes input[data-task='D']:checked, body.alternative-checkboxes input[data-task='m']:checked, body.alternative-checkboxes input[data-task='h']:checked, body.alternative-checkboxes input[data-task='a']:checked, body.alternative-checkboxes input[data-task='e']:checked, body.alternative-checkboxes input[data-task='s']:checked, body.alternative-checkboxes input[data-task='r']:checked, body.alternative-checkboxes input[data-task='8']:checked, body.alternative-checkboxes input[data-task='+']:checked, body.alternative-checkboxes input[data-task='n']:checked, body.alternative-checkboxes input[data-task='g']:checked, body.alternative-checkboxes li[data-task='!'] > input:checked, body.alternative-checkboxes li[data-task='!'] > p > input:checked, body.alternative-checkboxes li[data-task='*'] > input:checked, body.alternative-checkboxes li[data-task='*'] > p > input:checked, body.alternative-checkboxes li[data-task='-'] > input:checked, body.alternative-checkboxes li[data-task='-'] > p > input:checked, body.alternative-checkboxes li[data-task='<'] > input:checked, body.alternative-checkboxes li[data-task='<'] > p > input:checked, body.alternative-checkboxes li[data-task='>'] > input:checked, body.alternative-checkboxes li[data-task='>'] > p > input:checked, body.alternative-checkboxes li[data-task='I'] > input:checked, body.alternative-checkboxes li[data-task='I'] > p > input:checked, body.alternative-checkboxes li[data-task='b'] > input:checked, body.alternative-checkboxes li[data-task='b'] > p > input:checked, body.alternative-checkboxes li[data-task='c'] > input:checked, body.alternative-checkboxes li[data-task='c'] > p > input:checked, body.alternative-checkboxes li[data-task='d'] > input:checked, body.alternative-checkboxes li[data-task='d'] > p > input:checked, body.alternative-checkboxes li[data-task='f'] > input:checked, body.alternative-checkboxes li[data-task='f'] > p > input:checked, body.alternative-checkboxes li[data-task='k'] > input:checked, body.alternative-checkboxes li[data-task='k'] > p > input:checked, body.alternative-checkboxes li[data-task='l'] > input:checked, body.alternative-checkboxes li[data-task='l'] > p > input:checked, body.alternative-checkboxes li[data-task='p'] > input:checked, body.alternative-checkboxes li[data-task='p'] > p > input:checked, body.alternative-checkboxes li[data-task='u'] > input:checked, body.alternative-checkboxes li[data-task='u'] > p > input:checked, body.alternative-checkboxes li[data-task='w'] > input:checked, body.alternative-checkboxes li[data-task='w'] > p > input:checked, body.alternative-checkboxes li[data-task='P'] > input:checked, body.alternative-checkboxes li[data-task='P'] > p > input:checked, body.alternative-checkboxes li[data-task='M'] > input:checked, body.alternative-checkboxes li[data-task='M'] > p > input:checked, body.alternative-checkboxes li[data-task='D'] > input:checked, body.alternative-checkboxes li[data-task='D'] > p > input:checked, body.alternative-checkboxes li[data-task='m'] > input:checked, body.alternative-checkboxes li[data-task='m'] > p > input:checked, body.alternative-checkboxes li[data-task='h'] > input:checked, body.alternative-checkboxes li[data-task='h'] > p > input:checked, body.alternative-checkboxes li[data-task='a'] > input:checked, body.alternative-checkboxes li[data-task='a'] > p > input:checked, body.alternative-checkboxes li[data-task='e'] > input:checked, body.alternative-checkboxes li[data-task='e'] > p > input:checked, body.alternative-checkboxes li[data-task='s'] > input:checked, body.alternative-checkboxes li[data-task='s'] > p > input:checked, body.alternative-checkboxes li[data-task='r'] > input:checked, body.alternative-checkboxes li[data-task='r'] > p > input:checked, body.alternative-checkboxes li[data-task='8'] > input:checked, body.alternative-checkboxes li[data-task='8'] > p > input:checked, body.alternative-checkboxes li[data-task='+'] > input:checked, body.alternative-checkboxes li[data-task='+'] > p > input:checked, body.alternative-checkboxes li[data-task='n'] > input:checked, body.alternative-checkboxes li[data-task='n'] > p > input:checked, body.alternative-checkboxes li[data-task='g'] > input:checked, body.alternative-checkboxes li[data-task='g'] > p > input:checked {
--checkbox-marker-color: transparent;
border: none;
border-radius: 0;
background-image: none;
background-color: currentColor;
-webkit-mask-size: var(--checkbox-icon);
-webkit-mask-position: 50% 50%;
mask-size: var(--checkbox-icon);
mask-position: 50% 50%;
}

body.alternative-checkboxes input[data-task='>']:checked, body.alternative-checkboxes li[data-task='>'] > input:checked, body.alternative-checkboxes li[data-task='>'] > p > input:checked {
color: var(--text-faint);
transform: rotate(90deg);
-webkit-mask-position: 50% 100%;
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
mask-position: 50% 100%;
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='<']:checked, body.alternative-checkboxes li[data-task='<'] > input:checked, body.alternative-checkboxes li[data-task='<'] > p > input:checked {
color: var(--text-faint);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clip-rule='evenodd' /%3E%3C/svg%3E");
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='?']:checked, body.alternative-checkboxes li[data-task='?'] > input:checked, body.alternative-checkboxes li[data-task='?'] > p > input:checked {
--checkbox-marker-color: transparent;
background-color: var(--color-yellow);
border-color: var(--color-yellow);
background-position: 50% 50%;
background-size: 200% 90%;
background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"%3E%3Cpath fill="white" fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"%2F%3E%3C%2Fsvg%3E');
}

body.alternative-checkboxes input[data-task='/']:checked, body.alternative-checkboxes li[data-task='/'] > input:checked, body.alternative-checkboxes li[data-task='/'] > p > input:checked {
background-image: none;
background-color: transparent;
position: relative;
overflow: hidden;
}

body.alternative-checkboxes input[data-task='/']:checked:after, body.alternative-checkboxes li[data-task='/'] > input:checked:after, body.alternative-checkboxes li[data-task='/'] > p > input:checked:after {
top: 0;
left: 0;
content: ' ';
display: block;
position: absolute;
background-color: var(--color-accent);
width: calc(50% - 0.5px);
height: 100%;
-webkit-mask-image: none;
mask-image: none;
}

body.alternative-checkboxes input[data-task='!']:checked, body.alternative-checkboxes li[data-task='!'] > input:checked, body.alternative-checkboxes li[data-task='!'] > p > input:checked {
color: var(--color-orange);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='"']:checked, body.alternative-checkboxes input[data-task='“']:checked, body.alternative-checkboxes li[data-task='"'] > input:checked, body.alternative-checkboxes li[data-task='"'] > p > input:checked, body.alternative-checkboxes li[data-task='“'] > input:checked, body.alternative-checkboxes li[data-task='“'] > p > input:checked {
--checkbox-marker-color: transparent;
background-position: 50% 50%;
background-color: var(--color-cyan);
border-color: var(--color-cyan);
background-size: 75%;
background-repeat: no-repeat;
background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cpath fill="white" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"%2F%3E%3C%2Fsvg%3E');
}

body.alternative-checkboxes input[data-task='-']:checked, body.alternative-checkboxes li[data-task='-'] > input:checked, body.alternative-checkboxes li[data-task='-'] > p > input:checked {
color: var(--text-faint);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes:not(.tasks) .markdown-preview-view ul li[data-task='-'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) .markdown-source-view.mod-cm6 .HyperMD-task-line[data-task]:is([data-task='-']), body.alternative-checkboxes:not(.tasks) li[data-task='-'].task-list-item.is-checked {
color: var(--text-faint);
text-decoration: line-through solid var(--text-faint) 1px;
}

body.alternative-checkboxes input[data-task='*']:checked, body.alternative-checkboxes li[data-task='*'] > input:checked, body.alternative-checkboxes li[data-task='*'] > p > input:checked {
color: var(--color-yellow);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='l']:checked, body.alternative-checkboxes li[data-task='l'] > input:checked, body.alternative-checkboxes li[data-task='l'] > p > input:checked {
color: var(--color-red);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='i']:checked, body.alternative-checkboxes li[data-task='i'] > input:checked, body.alternative-checkboxes li[data-task='i'] > p > input:checked {
--checkbox-marker-color: transparent;
background-color: var(--color-blue);
border-color: var(--color-blue);
background-position: 50%;
background-size: 100%;
background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"%3E%3Cpath fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M196 220h64v172"%2F%3E%3Cpath fill="none" stroke="white" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M187 396h138"%2F%3E%3Cpath fill="white" d="M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"%2F%3E%3C%2Fsvg%3E');
}

body.alternative-checkboxes input[data-task='S']:checked, body.alternative-checkboxes li[data-task='S'] > input:checked, body.alternative-checkboxes li[data-task='S'] > p > input:checked {
--checkbox-marker-color: transparent;
border-color: var(--color-green);
background-color: var(--color-green);
background-size: 100%;
background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"%3E%3Cpath fill="white" fill-rule="evenodd" d="M26 8a2 2 0 1 0-4 0v2a8 8 0 1 0 0 16v8a4.002 4.002 0 0 1-3.773-2.666a2 2 0 0 0-3.771 1.332A8.003 8.003 0 0 0 22 38v2a2 2 0 1 0 4 0v-2a8 8 0 1 0 0-16v-8a4.002 4.002 0 0 1 3.773 2.666a2 2 0 0 0 3.771-1.332A8.003 8.003 0 0 0 26 10V8Zm-4 6a4 4 0 0 0 0 8v-8Zm4 12v8a4 4 0 0 0 0-8Z" clip-rule="evenodd"%2F%3E%3C%2Fsvg%3E');
}

body.alternative-checkboxes input[data-task='I']:checked, body.alternative-checkboxes li[data-task='I'] > input:checked, body.alternative-checkboxes li[data-task='I'] > p > input:checked {
color: var(--color-yellow);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='f']:checked, body.alternative-checkboxes li[data-task='f'] > input:checked, body.alternative-checkboxes li[data-task='f'] > p > input:checked {
color: var(--color-red);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='k']:checked, body.alternative-checkboxes li[data-task='k'] > input:checked, body.alternative-checkboxes li[data-task='k'] > p > input:checked {
color: var(--color-yellow);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='u']:checked, body.alternative-checkboxes li[data-task='u'] > input:checked, body.alternative-checkboxes li[data-task='u'] > p > input:checked {
color: var(--color-green);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='d']:checked, body.alternative-checkboxes li[data-task='d'] > input:checked, body.alternative-checkboxes li[data-task='d'] > p > input:checked {
color: var(--color-red);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='w']:checked, body.alternative-checkboxes li[data-task='w'] > input:checked, body.alternative-checkboxes li[data-task='w'] > p > input:checked {
color: var(--color-purple);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='p']:checked, body.alternative-checkboxes li[data-task='p'] > input:checked, body.alternative-checkboxes li[data-task='p'] > p > input:checked {
color: var(--color-green);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='c']:checked, body.alternative-checkboxes li[data-task='c'] > input:checked, body.alternative-checkboxes li[data-task='c'] > p > input:checked {
color: var(--color-orange);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='b']:checked, body.alternative-checkboxes li[data-task='b'] > input:checked, body.alternative-checkboxes li[data-task='b'] > p > input:checked {
color: var(--color-orange);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='P']:checked, body.alternative-checkboxes li[data-task='P'] > input:checked, body.alternative-checkboxes li[data-task='P'] > p > input:checked {
color: var(--color-green);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.5 3.25a2.25 2.25 0 1 1 3 2.122v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.25 2.25 0 0 1 1.5 3.25Zm5.677-.177L9.573.677A.25.25 0 0 1 10 .854V2.5h1A2.5 2.5 0 0 1 13.5 5v5.628a2.251 2.251 0 1 1-1.5 0V5a1 1 0 0 0-1-1h-1v1.646a.25.25 0 0 1-.427.177L7.177 3.427a.25.25 0 0 1 0-.354ZM3.75 2.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm0 9.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm8.25.75a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='M']:checked, body.alternative-checkboxes li[data-task='M'] > input:checked, body.alternative-checkboxes li[data-task='M'] > p > input:checked {
color: var(--color-purple);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M5.45 5.154A4.25 4.25 0 0 0 9.25 7.5h1.378a2.251 2.251 0 1 1 0 1.5H9.25A5.734 5.734 0 0 1 5 7.123v3.505a2.25 2.25 0 1 1-1.5 0V5.372a2.25 2.25 0 1 1 1.95-.218ZM4.25 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm8.5-4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM5 3.25a.75.75 0 1 0 0 .005V3.25Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='D']:checked, body.alternative-checkboxes li[data-task='D'] > input:checked, body.alternative-checkboxes li[data-task='D'] > p > input:checked {
color: var(--color-base-50);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M3.25 1A2.25 2.25 0 0 1 4 5.372v5.256a2.251 2.251 0 1 1-1.5 0V5.372A2.251 2.251 0 0 1 3.25 1Zm9.5 14a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM2.5 3.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0ZM3.25 12a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm9.5 0a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM14 7.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm0-4.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='m']:checked, body.alternative-checkboxes li[data-task='m'] > input:checked, body.alternative-checkboxes li[data-task='m'] > p > input:checked {
color: var(--color-blue);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-8.181v-.32a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25v.32L8 7.88Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='h']:checked, body.alternative-checkboxes li[data-task='h'] > input:checked, body.alternative-checkboxes li[data-task='h'] > p > input:checked {
color: var(--color-red);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M7.655 14.916v-.001h-.002l-.006-.003-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414 7.152 7.152 0 0 1-.31.17l-.018.01-.008.004a.75.75 0 0 1-.69 0Z'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M7.655 14.916v-.001h-.002l-.006-.003-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414 7.152 7.152 0 0 1-.31.17l-.018.01-.008.004a.75.75 0 0 1-.69 0Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='a']:checked, body.alternative-checkboxes li[data-task='a'] > input:checked, body.alternative-checkboxes li[data-task='a'] > p > input:checked {
color: var(--color-orange);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' d='M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z' clip-rule='evenodd'/%3E%3Cpath d='M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z'/%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24'%3E%3Cpath fill-rule='evenodd' d='M20 10H4v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8ZM9 13v-1h6v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z' clip-rule='evenodd'/%3E%3Cpath d='M2 6a2 2 0 0 1 2-2h16a2 2 0 1 1 0 4H4a2 2 0 0 1-2-2Z'/%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='e']:checked, body.alternative-checkboxes li[data-task='e'] > input:checked, body.alternative-checkboxes li[data-task='e'] > p > input:checked {
color: var(--color-yellow);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'/%3E%3Cpath stroke='currentColor' stroke-width='2' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-width='2' d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'/%3E%3Cpath stroke='currentColor' stroke-width='2' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'/%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='s']:checked, body.alternative-checkboxes li[data-task='s'] > input:checked, body.alternative-checkboxes li[data-task='s'] > p > input:checked {
color: var(--color-blue);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-width='2' d='m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z'/%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='r']:checked, body.alternative-checkboxes li[data-task='r'] > input:checked, body.alternative-checkboxes li[data-task='r'] > p > input:checked {
color: var(--color-red);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M14.064 0h.186C15.216 0 16 .784 16 1.75v.186a8.752 8.752 0 0 1-2.564 6.186l-.458.459c-.314.314-.641.616-.979.904v3.207c0 .608-.315 1.172-.833 1.49l-2.774 1.707a.749.749 0 0 1-1.11-.418l-.954-3.102a1.214 1.214 0 0 1-.145-.125L3.754 9.816a1.218 1.218 0 0 1-.124-.145L.528 8.717a.749.749 0 0 1-.418-1.11l1.71-2.774A1.748 1.748 0 0 1 3.31 4h3.204c.288-.338.59-.665.904-.979l.459-.458A8.749 8.749 0 0 1 14.064 0ZM8.938 3.623h-.002l-.458.458c-.76.76-1.437 1.598-2.02 2.5l-1.5 2.317 2.143 2.143 2.317-1.5c.902-.583 1.74-1.26 2.499-2.02l.459-.458a7.25 7.25 0 0 0 2.123-5.127V1.75a.25.25 0 0 0-.25-.25h-.186a7.249 7.249 0 0 0-5.125 2.123ZM3.56 14.56c-.732.732-2.334 1.045-3.005 1.148a.234.234 0 0 1-.201-.064.234.234 0 0 1-.064-.201c.103-.671.416-2.273 1.15-3.003a1.502 1.502 0 1 1 2.12 2.12Zm6.94-3.935c-.088.06-.177.118-.266.175l-2.35 1.521.548 1.783 1.949-1.2a.25.25 0 0 0 .119-.213ZM3.678 8.116 5.2 5.766c.058-.09.117-.178.176-.266H3.309a.25.25 0 0 0-.213.119l-1.2 1.95ZM12 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='8']:checked, body.alternative-checkboxes li[data-task='8'] > input:checked, body.alternative-checkboxes li[data-task='8'] > p > input:checked {
color: var(--color-purple);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M8 6.984c.59-.533 1.204-1.066 1.825-1.493.797-.548 1.7-.991 2.675-.991C14.414 4.5 16 6.086 16 8s-1.586 3.5-3.5 3.5c-.975 0-1.878-.444-2.675-.991-.621-.427-1.235-.96-1.825-1.493-.59.533-1.204 1.066-1.825 1.493-.797.547-1.7.991-2.675.991C1.586 11.5 0 9.914 0 8s1.586-3.5 3.5-3.5c.975 0 1.878.443 2.675.991.621.427 1.235.96 1.825 1.493ZM9.114 8c.536.483 1.052.922 1.56 1.273.704.483 1.3.727 1.826.727 1.086 0 2-.914 2-2 0-1.086-.914-2-2-2-.525 0-1.122.244-1.825.727-.51.35-1.025.79-1.561 1.273ZM3.5 6c-1.086 0-2 .914-2 2 0 1.086.914 2 2 2 .525 0 1.122-.244 1.825-.727.51-.35 1.025-.79 1.561-1.273-.536-.483-1.052-.922-1.56-1.273C4.621 6.244 4.025 6 3.5 6Z'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M8 6.984c.59-.533 1.204-1.066 1.825-1.493.797-.548 1.7-.991 2.675-.991C14.414 4.5 16 6.086 16 8s-1.586 3.5-3.5 3.5c-.975 0-1.878-.444-2.675-.991-.621-.427-1.235-.96-1.825-1.493-.59.533-1.204 1.066-1.825 1.493-.797.547-1.7.991-2.675.991C1.586 11.5 0 9.914 0 8s1.586-3.5 3.5-3.5c.975 0 1.878.443 2.675.991.621.427 1.235.96 1.825 1.493ZM9.114 8c.536.483 1.052.922 1.56 1.273.704.483 1.3.727 1.826.727 1.086 0 2-.914 2-2 0-1.086-.914-2-2-2-.525 0-1.122.244-1.825.727-.51.35-1.025.79-1.561 1.273ZM3.5 6c-1.086 0-2 .914-2 2 0 1.086.914 2 2 2 .525 0 1.122-.244 1.825-.727.51-.35 1.025-.79 1.561-1.273-.536-.483-1.052-.922-1.56-1.273C4.621 6.244 4.025 6 3.5 6Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='g']:checked, body.alternative-checkboxes li[data-task='g'] > input:checked, body.alternative-checkboxes li[data-task='g'] > p > input:checked {
color: var(--color-pink);
-webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M13.637 2.363h-.001l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z'%3E%3C/path%3E%3Cpath d='M2 8a6 6 0 1 0 11.769-1.656.751.751 0 1 1 1.442-.413 7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8Z'%3E%3C/path%3E%3Cpath d='M5 8a3.002 3.002 0 0 0 4.699 2.476 3 3 0 0 0 1.28-2.827.748.748 0 0 1 1.045-.782.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8Z'%3E%3C/path%3E%3C/svg%3E");
mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3E%3Cpath d='M13.637 2.363h-.001l1.676.335c.09.018.164.084.19.173a.25.25 0 0 1-.062.249l-1.373 1.374a.876.876 0 0 1-.619.256H12.31L9.45 7.611A1.5 1.5 0 1 1 6.5 8a1.501 1.501 0 0 1 1.889-1.449l2.861-2.862V2.552c0-.232.092-.455.256-.619L12.88.559a.25.25 0 0 1 .249-.062c.089.026.155.1.173.19Z'%3E%3C/path%3E%3Cpath d='M2 8a6 6 0 1 0 11.769-1.656.751.751 0 1 1 1.442-.413 7.502 7.502 0 0 1-12.513 7.371A7.501 7.501 0 0 1 10.069.789a.75.75 0 0 1-.413 1.442A6.001 6.001 0 0 0 2 8Z'%3E%3C/path%3E%3Cpath d='M5 8a3.002 3.002 0 0 0 4.699 2.476 3 3 0 0 0 1.28-2.827.748.748 0 0 1 1.045-.782.75.75 0 0 1 .445.61A4.5 4.5 0 1 1 8.516 3.53a.75.75 0 1 1-.17 1.49A3 3 0 0 0 5 8Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='+']:checked, body.alternative-checkboxes li[data-task='+'] > input:checked, body.alternative-checkboxes li[data-task='+'] > p > input:checked {
--checkbox-marker-color: transparent;
border-color: var(--color-green);
background-color: var(--color-green);
background-size: 100%;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath d='M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z'%3E%3C/path%3E%3C/svg%3E");
}

body.alternative-checkboxes input[data-task='n']:checked, body.alternative-checkboxes li[data-task='n'] > input:checked, body.alternative-checkboxes li[data-task='n'] > p > input:checked {
--checkbox-marker-color: transparent;
border-color: var(--color-red);
background-color: var(--color-red);
background-size: 100%;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 12h14'/%3E%3C/svg%3E");
}

body.alternative-checkboxes:not(.tasks) li[data-task='>'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='<'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='b'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='i'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='*'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='!'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='S'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='?'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='/'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='"'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='l'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='I'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='p'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='c'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='f'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='k'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='w'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='u'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='d'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='P'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='M'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='D'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='m'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='h'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='a'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='e'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='s'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='r'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='8'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='+'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='n'].task-list-item.is-checked, body.alternative-checkboxes:not(.tasks) li[data-task='g'].task-list-item.is-checked {
color: var(--text-normal);
}`,
      dark: `body.theme-dark input[data-task='?']:checked, body.theme-dark li[data-task='?'] > input:checked, body.theme-dark li[data-task='?'] > p > input:checked {
background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"%3E%3Cpath fill="black" fill-opacity="0.8" fill-rule="evenodd" d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14Z"%2F%3E%3C%2Fsvg%3E');
}

body.theme-dark input[data-task='"']:checked, body.theme-dark input[data-task='“']:checked, body.theme-dark li[data-task='"'] > input:checked, body.theme-dark li[data-task='"'] > p > input:checked, body.theme-dark li[data-task='“'] > input:checked, body.theme-dark li[data-task='“'] > p > input:checked {
background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"%3E%3Cpath fill="black" fill-opacity="0.7" d="M6.5 10c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.318.142-.686.238-1.028.466c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.945c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065c.069-.232.14-.468.254-.68c.114-.308.292-.575.469-.844c.148-.291.409-.488.601-.737c.201-.242.475-.403.692-.604c.213-.21.492-.315.714-.463c.232-.133.434-.28.65-.35l.539-.222l.474-.197l-.485-1.938l-.597.144c-.191.048-.424.104-.689.171c-.271.05-.56.187-.882.312c-.317.143-.686.238-1.028.467c-.344.218-.741.4-1.091.692c-.339.301-.748.562-1.05.944c-.33.358-.656.734-.909 1.162c-.293.408-.492.856-.702 1.299c-.19.443-.343.896-.468 1.336c-.237.882-.343 1.72-.384 2.437c-.034.718-.014 1.315.028 1.747c.015.204.043.402.063.539l.025.168l.026-.006A4.5 4.5 0 1 0 17.5 10z"%2F%3E%3C%2Fsvg%3E');
}

body.theme-dark input[data-task='i']:checked, body.theme-dark li[data-task='i'] > input:checked, body.theme-dark li[data-task='i'] > p > input:checked {
background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"%3E%3Cpath fill="none" stroke="black" stroke-opacity="0.8" stroke-linecap="round" stroke-linejoin="round" stroke-width="40" d="M196 220h64v172"%2F%3E%3Cpath fill="none" stroke="black" stroke-opacity="0.8" stroke-linecap="round" stroke-miterlimit="10" stroke-width="40" d="M187 396h138"%2F%3E%3Cpath fill="black" fill-opacity="0.8" d="M256 160a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"%2F%3E%3C%2Fsvg%3E');
}

body.theme-dark input[data-task='S']:checked, body.theme-dark li[data-task='S'] > input:checked, body.theme-dark li[data-task='S'] > p > input:checked {
background-image: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"%3E%3Cpath fill-opacity="0.8" fill="black" fill-rule="evenodd" d="M26 8a2 2 0 1 0-4 0v2a8 8 0 1 0 0 16v8a4.002 4.002 0 0 1-3.773-2.666a2 2 0 0 0-3.771 1.332A8.003 8.003 0 0 0 22 38v2a2 2 0 1 0 4 0v-2a8 8 0 1 0 0-16v-8a4.002 4.002 0 0 1 3.773 2.666a2 2 0 0 0 3.771-1.332A8.003 8.003 0 0 0 26 10V8Zm-4 6a4 4 0 0 0 0 8v-8Zm4 12v8a4 4 0 0 0 0-8Z" clip-rule="evenodd"%2F%3E%3C%2Fsvg%3E');
}`,
    },
  },
};
