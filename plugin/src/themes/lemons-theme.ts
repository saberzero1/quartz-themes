import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "lemons-theme", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 46deg;
  --accent-l: 65%;
  --accent-s: 95%;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-base-30, #404040);
  --background-modifier-border-focus: var(--color-base-50, #707070);
  --background-modifier-border-hover: var(--color-base-50, #707070);
  --background-modifier-error: var(--color-red, #ff6b81);
  --background-modifier-error-hover: var(--color-red, #ff6b81);
  --background-modifier-error-rgb: var(--color-red-rgb, 255,
    107,
    129);
  --background-modifier-form-field: var(--color-base-25, #383838);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #383838);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.075);
  --background-modifier-success: var(--color-green, #7bed9f);
  --background-modifier-success-rgb: var(--color-green-rgb, 123,
    237,
    159);
  --background-primary: var(--color-base-00, #202020);
  --background-primary-alt: var(--color-base-10, #282828);
  --background-secondary: var(--color-base-20, #303030);
  --background-secondary-alt: var(--color-base-25, #383838);
  --bases-cards-background: var(--background-primary, #202020);
  --bases-cards-cover-background: var(--background-primary-alt, #282828);
  --bases-embed-border-color: var(--background-modifier-border, #404040);
  --bases-group-heading-property-color: var(--text-muted, #a0a0a0);
  --bases-table-border-color: var(--table-border-color, #404040);
  --bases-table-cell-background-active: var(--background-primary, #202020);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #282828);
  --bases-table-cell-background-selected: var(--table-selection, hsla(46deg,
    95%,
    65%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #282828);
  --bases-table-header-background: var(--background-primary, #202020);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --bases-table-header-color: var(--text-muted, #a0a0a0);
  --bases-table-summary-background: var(--background-primary, #202020);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --blockquote-background-color: rgb(var(--callout-quote), 0.10);
  --blockquote-border-color: var(--interactive-accent, hsl(46deg, 95%, 65%));
  --blockquote-border-thickness: 0px;
  --bodyFont: var(--font-text, var(--font-text-override),
    var(--font-text-theme),
    var(--font-interface));
  --callout-bug: var(--color-red-rgb, 255,
    107,
    129);
  --callout-default: var(--color-blue-rgb, 83,
    82,
    237);
  --callout-error: var(--color-red-rgb, 255,
    107,
    129);
  --callout-example: var(--color-purple-rgb, 168,
    130,
    255);
  --callout-fail: var(--color-red-rgb, 255,
    107,
    129);
  --callout-important: var(--color-cyan-rgb, 112,
    161,
    255);
  --callout-info: var(--color-blue-rgb, 83,
    82,
    237);
  --callout-question: var(--color-orange-rgb, 255,
    127,
    80);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--color-green-rgb, 123,
    237,
    159);
  --callout-summary: var(--color-cyan-rgb, 112,
    161,
    255);
  --callout-tip: var(--color-cyan-rgb, 112,
    161,
    255);
  --callout-todo: var(--color-blue-rgb, 83,
    82,
    237);
  --callout-warning: var(--color-orange-rgb, 255,
    127,
    80);
  --canvas-background: var(--background-primary, #202020);
  --canvas-card-label-color: var(--text-faint, #707070);
  --canvas-color: 80,
    80,
    80;
  --canvas-color-1: var(--color-red-rgb, 255,
    107,
    129);
  --canvas-color-2: var(--color-orange-rgb, 255,
    127,
    80);
  --canvas-color-3: var(--color-yellow-rgb, 251,
    211,
    81);
  --canvas-color-4: var(--color-green-rgb, 123,
    237,
    159);
  --canvas-color-5: var(--color-cyan-rgb, 112,
    161,
    255);
  --canvas-color-6: var(--color-purple-rgb, 168,
    130,
    255);
  --canvas-dot-pattern: var(--color-base-30, #404040);
  --caret-color: var(--text-normal, #ffffff);
  --checkbox-border-color: var(--text-faint, #707070);
  --checkbox-border-color-hover: var(--text-muted, #a0a0a0);
  --checkbox-color: var(--interactive-accent, hsl(46deg, 95%, 65%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(46deg, 95%, 61.2%));
  --checkbox-marker-color: var(--background-primary, #202020);
  --checklist-done-color: var(--text-muted, #a0a0a0);
  --code-background: var(--background-primary-alt, #282828);
  --code-border-color: var(--background-modifier-border, #404040);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --code-comment: var(--text-faint, #707070);
  --code-function: var(--color-yellow, hsl(46deg, 95%, 65%));
  --code-important: var(--color-orange, #ff7f50);
  --code-normal: var(--text-normal, #ffffff);
  --code-operator: var(--color-red, #ff6b81);
  --code-property: var(--color-cyan, #70a1ff);
  --code-punctuation: var(--text-muted, #a0a0a0);
  --code-string: var(--color-green, #7bed9f);
  --code-tag: var(--color-red, #ff6b81);
  --codeFont: var(--font-monospace, var(--font-monospace-override),
    var(--font-monospace-theme),
    var(--font-monospace-default));
  --collapse-icon-color: var(--text-faint, #707070);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --color-accent-1: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 3.8%));
  --color-accent-2: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 3.8%));
  --color-accent-hsl: var(--accent-h),
    var(--accent-s),
    var(--accent-l);
  --color-base-00: #202020;
  --color-base-05: #242424;
  --color-base-10: #282828;
  --color-base-100: #ffffff;
  --color-base-15: #2b2b2b;
  --color-base-20: #303030;
  --color-base-25: #383838;
  --color-base-30: #404040;
  --color-base-35: #484848;
  --color-base-40: #505050;
  --color-base-50: #707070;
  --color-base-60: #909090;
  --color-base-70: #a0a0a0;
  --color-base-80: #c0c0c0;
  --color-base-90: #e0e0e0;
  --color-blue: #5352ed;
  --color-blue-rgb: 83,
    82,
    237;
  --color-cyan: #70a1ff;
  --color-cyan-rgb: 112,
    161,
    255;
  --color-green: #7bed9f;
  --color-green-rgb: 123,
    237,
    159;
  --color-orange: #ff7f50;
  --color-orange-rgb: 255,
    127,
    80;
  --color-pink-rgb: 250,
    153,
    205;
  --color-purple-rgb: 168,
    130,
    255;
  --color-red: #ff6b81;
  --color-red-rgb: 255,
    107,
    129;
  --color-yellow: hsl(46deg, 95%, 65%);
  --color-yellow-rgb: 251,
    211,
    81;
  --dark: var(--text-normal, var(--color-base-100, #ffffff));
  --darkgray: var(--text-normal, var(--color-base-100, #ffffff));
  --divider-color: var(--background-modifier-border, #404040);
  --divider-color-hover: var(--interactive-accent, hsl(46deg, 95%, 65%));
  --divider-width: 0px;
  --dropdown-background: var(--interactive-normal, #404040);
  --dropdown-background-hover: var(--interactive-hover, #484848);
  --embed-block-shadow-hover: 0 0 0 1px var(--color-accent);
  --file-header-background: var(--background-primary, #202020);
  --file-header-background-focused: var(--background-primary, #202020);
  --file-header-font: var(--font-interface, "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace);
  --flair-background: var(--interactive-normal, #404040);
  --flair-color: var(--text-normal, #ffffff);
  --font-default: var(--font-monospace, "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace);
  --font-interface: var(--font-interface-override),
    var(--font-interface-theme),
    var(--default-font, "??"),
    var(--font-default);
  --font-interface-override: "??";
  --font-interface-theme: "??";
  --font-mermaid: var(--font-text, "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace);
  --font-monospace: var(--font-monospace-override),
    var(--font-monospace-theme),
    var(--font-monospace-default);
  --font-monospace-default: Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace-override: "??";
  --font-monospace-theme: "??";
  --font-text: var(--font-text-override),
    var(--font-text-theme),
    var(--font-interface);
  --font-text-override: "??";
  --font-text-theme: "??";
  --footnote-divider-color: var(--metadata-divider-color, #404040);
  --footnote-id-color: var(--text-muted, #a0a0a0);
  --footnote-id-color-no-occurrences: var(--text-faint, #707070);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.075));
  --graph-node: var(--text-muted, #a0a0a0);
  --graph-node-attachment: var(--color-yellow, hsl(46deg, 95%, 65%));
  --graph-node-focused: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --graph-node-tag: var(--color-green, #7bed9f);
  --graph-node-unresolved: var(--text-faint, #707070);
  --graph-text: var(--text-normal, #ffffff);
  --gray: var(--text-muted, var(--color-base-70, #a0a0a0));
  --headerFont: var(--font-text, var(--font-text-override),
    var(--font-text-theme),
    var(--font-interface));
  --heading-formatting: var(--text-faint, #707070);
  --highlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --hr-color: var(--background-modifier-border, #404040);
  --icon-color: var(--text-muted, #a0a0a0);
  --icon-color-active: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --icon-color-focused: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --icon-color-hover: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --indentation-guide-color-active: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --input-date-separator: var(--text-faint, #707070);
  --input-placeholder-color: var(--text-faint, #707070);
  --input-shadow: 0 0 0 0 transparent;
  --input-shadow-hover: 0 0 0 0 transparent;
  --interactive-accent: var(--color-accent-1, hsl(46deg, 95%, 65%));
  --interactive-accent-hover: var(--color-accent-2, hsl(46deg, 95%, 61.2%));
  --interactive-accent-hsl: var(--color-accent-hsl, 46deg,
    95%,
    65%);
  --interactive-hover: var(--color-base-35, #484848);
  --interactive-normal: var(--color-base-30, #404040);
  --light: var(--background-primary, var(--color-base-00, #202020));
  --lightgray: var(--background-secondary, var(--color-base-20, #303030));
  --link-color: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --link-color-hover: var(--text-accent-hover, hsl(46deg, 95%, 68.8%));
  --link-external-color: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --link-external-color-hover: var(--text-accent-hover, hsl(46deg, 95%, 68.8%));
  --link-unresolved-color: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --list-bullet-border: 0px;
  --list-bullet-radius: 1px;
  --list-marker-color: var(--text-faint, #707070);
  --list-marker-color-collapsed: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --list-marker-color-hover: var(--text-muted, #a0a0a0);
  --lt-canvas-hover-color: 112,
    112,
    112;
  --lt-file-icon-color: var(--text-faint, #707070);
  --lt-gradient-gay: linear-gradient(to right, rgb(7, 141, 111), rgb(152, 202, 153), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(205, 208, 234), rgb(123, 173, 226) 70%, rgb(69, 76, 189), rgb(63, 26, 121));
  --lt-gradient-lesbian: linear-gradient(to right, rgb(213, 44, 0), rgb(226, 150, 136), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(210, 127, 164), rgb(162, 2, 98));
  --lt-gradient-non-bin: linear-gradient(to right, rgb(253, 219, 0), rgb(238, 212, 143), rgb(255, 255, 255) 30%, rgb(255, 255, 255), rgb(255, 255, 255) 36%, rgb(212, 181, 222), rgb(156, 92, 212), rgb(88, 50, 96), rgb(0, 0, 0));
  --lt-gradient-pride: linear-gradient(to right, rgb(237, 34, 36), rgb(243, 91, 34), rgb(249, 150, 33), rgb(245, 193, 30), rgb(241, 235, 27) 27%, rgb(241, 235, 27), rgb(241, 235, 27) 33%, rgb(99, 199, 32), rgb(12, 155, 73), rgb(33, 135, 141), rgb(57, 84, 165), rgb(97, 55, 155), rgb(147, 40, 142));
  --lt-gradient-trans: linear-gradient(to right, rgb(85, 205, 252), rgb(179, 157, 233), rgb(247, 168, 184), rgb(246, 216, 221), rgb(255, 255, 255) 45%, rgb(255, 255, 255), rgb(255, 255, 255) 55%, rgb(246, 216, 221), rgb(247, 168, 184), rgb(179, 157, 233), rgb(85, 205, 252));
  --lt-list-bullet-height: 2px;
  --lt-list-bullet-width: 6px;
  --menu-background: var(--background-secondary, #303030);
  --menu-border-color: var(--background-modifier-border-hover, #707070);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15));
  --metadata-border-color: var(--background-modifier-border, #404040);
  --metadata-divider-color: var(--background-modifier-border, #404040);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-input-font: var(--font-interface, "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace);
  --metadata-input-text-color: var(--text-normal, #ffffff);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --metadata-label-font: var(--font-interface, "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace);
  --metadata-label-text-color: var(--text-muted, #a0a0a0);
  --metadata-label-text-color-hover: var(--text-muted, #a0a0a0);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --modal-background: var(--background-primary, #202020);
  --modal-border-width: var(--border-width, 0px);
  --mono-rgb-0: 0,
    0,
    0;
  --mono-rgb-100: 255,
    255,
    255;
  --nav-collapse-icon-color: var(--collapse-icon-color, #707070);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #707070);
  --nav-heading-color: var(--text-normal, #ffffff);
  --nav-heading-color-collapsed: var(--text-faint, #707070);
  --nav-heading-color-collapsed-hover: var(--text-muted, #a0a0a0);
  --nav-heading-color-hover: var(--text-normal, #ffffff);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(255, 255, 255, 0.12));
  --nav-item-background-active: var(--color-accent, hsl(46deg, 95%, 65%));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  --nav-item-children-padding-left: var(--size-4-2, 8px);
  --nav-item-color: var(--text-muted, #a0a0a0);
  --nav-item-color-active: var(--text-on-accent, #202020);
  --nav-item-color-highlighted: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --nav-item-color-hover: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --nav-item-color-selected: var(--text-normal, #ffffff);
  --nav-tag-color: var(--text-faint, #707070);
  --nav-tag-color-active: var(--text-muted, #a0a0a0);
  --nav-tag-color-hover: var(--text-muted, #a0a0a0);
  --pdf-background: var(--background-primary, #202020);
  --pdf-page-background: var(--background-primary, #202020);
  --pdf-sidebar-background: var(--background-primary, #202020);
  --pill-border-color: var(--background-modifier-border, #404040);
  --pill-border-color-hover: var(--background-modifier-border-hover, #707070);
  --pill-color: var(--text-muted, #a0a0a0);
  --pill-color-hover: var(--text-normal, #ffffff);
  --pill-color-remove: var(--text-faint, #707070);
  --pill-color-remove-hover: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --prompt-background: var(--background-primary, #202020);
  --prompt-border-width: var(--border-width, 0px);
  --raised-background: var(--blur-background, color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent)));
  --ribbon-background: var(--background-secondary, #303030);
  --ribbon-background-collapsed: var(--background-primary, #202020);
  --search-clear-button-color: var(--text-muted, #a0a0a0);
  --search-icon-color: var(--text-muted, #a0a0a0);
  --search-result-background: var(--background-primary, #202020);
  --secondary: var(--text-accent, var(--color-accent, hsl(46deg, 95%, 61.2%)));
  --setting-group-heading-color: var(--text-normal, #ffffff);
  --setting-items-background: var(--background-primary-alt, #282828);
  --setting-items-border-color: var(--background-modifier-border, #404040);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.05),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.1),
    0px 30px 90px rgba(0, 0, 0, 0.15);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #a0a0a0);
  --shiki-code-background: var(--code-background, #282828);
  --shiki-code-comment: var(--text-faint, #707070);
  --shiki-code-function: var(--color-green, #7bed9f);
  --shiki-code-important: var(--color-orange, #ff7f50);
  --shiki-code-normal: var(--text-muted, #a0a0a0);
  --shiki-code-property: var(--color-cyan, #70a1ff);
  --shiki-code-punctuation: var(--text-muted, #a0a0a0);
  --shiki-code-string: var(--color-yellow, hsl(46deg, 95%, 65%));
  --shiki-gutter-border-color: var(--background-modifier-border, #404040);
  --shiki-gutter-text-color: var(--text-faint, #707070);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #a0a0a0);
  --shiki-highlight-neutral: var(--shiki-code-normal, #a0a0a0);
  --shiki-terminal-dots-color: var(--text-faint, #707070);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #707070);
  --slider-track-background: var(--background-modifier-border, #404040);
  --status-bar-background: var(--background-secondary-alt, #383838);
  --status-bar-border-color: var(--divider-color, #404040);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 0px);
  --status-bar-radius: var(--radius-m, 0px) 0 0 0;
  --status-bar-text-color: var(--text-muted, #a0a0a0);
  --suggestion-background: var(--background-primary, #202020);
  --sync-avatar-color-1: var(--color-red, #ff6b81);
  --sync-avatar-color-2: var(--color-orange, #ff7f50);
  --sync-avatar-color-3: var(--color-yellow, hsl(46deg, 95%, 65%));
  --sync-avatar-color-4: var(--color-green, #7bed9f);
  --sync-avatar-color-5: var(--color-cyan, #70a1ff);
  --sync-avatar-color-6: var(--color-blue, #5352ed);
  --tab-background-active: var(--background-primary, #202020);
  --tab-container-background: var(--background-secondary, #303030);
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-outline-color: var(--divider-color, #404040);
  --tab-outline-width: 0px;
  --tab-switcher-background: var(--background-secondary, #303030);
  --tab-text-color: var(--text-faint, #707070);
  --tab-text-color-active: var(--text-muted, #a0a0a0);
  --tab-text-color-focused: var(--text-muted, #a0a0a0);
  --tab-text-color-focused-active: var(--text-muted, #a0a0a0);
  --tab-text-color-focused-active-current: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --table-add-button-border-color: var(--background-modifier-border, #404040);
  --table-border-color: var(--background-modifier-border, #404040);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(46deg, 95%, 65%));
  --table-drag-handle-color: var(--text-faint, #707070);
  --table-drag-handle-color-active: var(--text-on-accent, #202020);
  --table-header-border-color: var(--table-border-color, #404040);
  --table-header-color: var(--text-normal, #ffffff);
  --table-selection-border-color: var(--interactive-accent, hsl(46deg, 95%, 65%));
  --table-selection-border-radius: var(--radius-m, 8px);
  --tag-color: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --tag-color-hover: var(--text-accent, hsl(46deg, 95%, 61.2%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(46deg, 95%, 68.8%)));
  --text-accent: var(--color-accent, hsl(46deg, 95%, 61.2%));
  --text-accent-hover: var(--color-accent-2, hsl(46deg, 95%, 68.8%));
  --text-error: var(--color-red, #ff6b81);
  --text-faint: var(--color-base-50, #707070);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: var(--color-base-70, #a0a0a0);
  --text-normal: var(--color-base-100, #ffffff);
  --text-on-accent: var(--color-base-00, #202020);
  --text-success: var(--color-green, #7bed9f);
  --text-warning: var(--color-orange, #ff7f50);
  --textHighlight: var(--background-modifier-hover, rgba(var(--mono-rgb-100), 0.075));
  --titleFont: var(--font-text, var(--font-text-override),
    var(--font-text-theme),
    var(--font-interface));
  --titlebar-background: var(--background-secondary-alt, #383838);
  --titlebar-background-focused: var(--background-secondary-alt, #383838);
  --titlebar-border-color: var(--background-modifier-border, #404040);
  --titlebar-text-color: var(--text-muted, #a0a0a0);
  --titlebar-text-color-focused: var(--text-normal, #ffffff);
  --vault-profile-color: var(--text-normal, #ffffff);
  --vault-profile-color-hover: var(--vault-profile-color, #ffffff);
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #303030);
  background-color: var(--tab-container-background, rgb(48, 48, 48));
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(32, 32, 32));
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(48, 48, 48));
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #303030);
  background-color: var(--tab-container-background, rgb(48, 48, 48));
  border-left-color: rgb(64, 64, 64);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .markdown-rendered > h1 {
  --background-modifier-active-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --background-modifier-border: #404040;
  --background-modifier-border-focus: #707070;
  --background-modifier-border-hover: #707070;
  --background-modifier-error: #ff6b81;
  --background-modifier-error-hover: #ff6b81;
  --background-modifier-error-rgb: 255,
    107,
    129;
  --background-modifier-form-field: #383838;
  --background-modifier-form-field-hover: #383838;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #7bed9f;
  --background-modifier-success-rgb: 123,
    237,
    159;
  --background-primary: #202020;
  --background-primary-alt: #282828;
  --background-secondary: #303030;
  --background-secondary-alt: #383838;
  --blockquote-background-color: rgb(158, 158, 158, 0.10);
  --blockquote-border-color: hsl(46deg, 95%, 65%);
  --blur-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255,
    107,
    129;
  --callout-default: 83,
    82,
    237;
  --callout-error: 255,
    107,
    129;
  --callout-example: 168,
    130,
    255;
  --callout-fail: 255,
    107,
    129;
  --callout-important: 112,
    161,
    255;
  --callout-info: 83,
    82,
    237;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255,
    127,
    80;
  --callout-radius: 8px;
  --callout-success: 123,
    237,
    159;
  --callout-summary: 112,
    161,
    255;
  --callout-tip: 112,
    161,
    255;
  --callout-title-weight: 600;
  --callout-todo: 83,
    82,
    237;
  --callout-warning: 255,
    127,
    80;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #404040;
  --caret-color: #ffffff;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #a0a0a0;
  --checkbox-color: hsl(46deg, 95%, 65%);
  --checkbox-color-hover: hsl(46deg, 95%, 61.2%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #a0a0a0;
  --clickable-icon-radius: 4px;
  --code-background: #282828;
  --code-border-color: #404040;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: hsl(46deg, 95%, 65%);
  --code-important: #ff7f50;
  --code-keyword: #fa99cd;
  --code-normal: #ffffff;
  --code-operator: #ff6b81;
  --code-property: #70a1ff;
  --code-punctuation: #a0a0a0;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #7bed9f;
  --code-tag: #ff6b81;
  --code-value: #a882ff;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(46deg, 95%, 61.2%);
  --color-accent: hsl(46deg, 95%, 65%);
  --color-accent-1: hsl(46deg, 95%, 61.2%);
  --color-accent-2: hsl(46deg, 95%, 68.8%);
  --color-accent-hsl: 46deg,
    95%,
    65%;
  --divider-color: #404040;
  --divider-color-hover: hsl(46deg, 95%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #404040;
  --dropdown-background-hover: #484848;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #404040;
  --flair-color: #ffffff;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-default: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-mermaid: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-print: '??', "??", "??", 'Arial';
  --font-text: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-weight: var(--h1-weight, 700);
  --graph-line: #484848;
  --graph-node: #a0a0a0;
  --graph-node-attachment: hsl(46deg, 95%, 65%);
  --graph-node-focused: hsl(46deg, 95%, 61.2%);
  --graph-node-tag: #7bed9f;
  --graph-node-unresolved: #707070;
  --graph-text: #ffffff;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #404040;
  --interactive-accent: hsl(46deg, 95%, 65%);
  --interactive-accent-hover: hsl(46deg, 95%, 61.2%);
  --interactive-accent-hsl: 46deg,
    95%,
    65%;
  --interactive-hover: #484848;
  --interactive-normal: #404040;
  --link-color: hsl(46deg, 95%, 61.2%);
  --link-color-hover: hsl(46deg, 95%, 68.8%);
  --link-external-color: hsl(46deg, 95%, 61.2%);
  --link-external-color-hover: hsl(46deg, 95%, 68.8%);
  --link-unresolved-color: hsl(46deg, 95%, 61.2%);
  --link-unresolved-decoration-color: hsla(46deg,
    95%,
    65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --lt-file-icon-color: #707070;
  --menu-background: #303030;
  --menu-border-color: #707070;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #a0a0a0;
  --search-icon-color: #a0a0a0;
  --search-result-background: #202020;
  --setting-group-heading-color: #ffffff;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #282828;
  --setting-items-border-color: #404040;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #a0a0a0;
  --shiki-code-background: #282828;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #7bed9f;
  --shiki-code-important: #ff7f50;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #a0a0a0;
  --shiki-code-property: #70a1ff;
  --shiki-code-punctuation: #a0a0a0;
  --shiki-code-string: hsl(46deg, 95%, 65%);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #404040;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #a0a0a0;
  --shiki-highlight-green: rgba(123, 237, 159, 0.5);
  --shiki-highlight-green-background: rgba(123, 237, 159, 0.1);
  --shiki-highlight-neutral: #a0a0a0;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 107, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 107, 129, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ff6b81;
  --sync-avatar-color-2: #ff7f50;
  --sync-avatar-color-3: hsl(46deg, 95%, 65%);
  --sync-avatar-color-4: #7bed9f;
  --sync-avatar-color-5: #70a1ff;
  --sync-avatar-color-6: #5352ed;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: transparent;
  --tab-font-size: 13px;
  --tab-outline-color: #404040;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #303030;
  --tab-switcher-menubar-background: linear-gradient(to top, #303030, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(46deg, 95%, 65%);
  --tab-text-color: #707070;
  --tab-text-color-active: #a0a0a0;
  --tab-text-color-focused: #a0a0a0;
  --tab-text-color-focused-active: #a0a0a0;
  --tab-text-color-focused-active-current: hsl(46deg, 95%, 61.2%);
  --tab-text-color-focused-highlighted: hsl(46deg, 95%, 61.2%);
  --table-add-button-border-color: #404040;
  --table-add-button-border-width: 1px;
  --table-border-color: #404040;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(46deg, 95%, 65%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #202020;
  --table-header-background: transparent;
  --table-header-border-color: #404040;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(46deg,
    95%,
    65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(46deg, 95%, 65%);
  --table-selection-border-radius: 8px;
  --table-text-size: 16px;
  --tag-background: hsla(46deg,
    95%,
    65%, 0.1);
  --tag-background-hover: hsla(46deg,
    95%,
    65%, 0.2);
  --tag-border-color: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-border-color-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-color: hsl(46deg, 95%, 61.2%);
  --tag-color-hover: hsl(46deg, 95%, 61.2%);
  --tag-size: 0.875em;
  --text-accent: hsl(46deg, 95%, 61.2%);
  --text-accent-hover: hsl(46deg, 95%, 68.8%);
  --text-error: #ff6b81;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #a0a0a0;
  --text-normal: #ffffff;
  --text-on-accent: #202020;
  --text-selection: rgba(255, 255, 255, 0.2);
  --text-success: #7bed9f;
  --text-warning: #ff7f50;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-right-width: 0px;
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(112, 112, 112));
  content: "# ";
  font-family: var(--h1-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  font-size: var(--h1-size, 25.888px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h1-letter-spacing, -0.38832px);
  line-height: var(--h1-line-height, 31.0656px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(255, 255, 255));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(255, 255, 255));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(255, 255, 255));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(255, 255, 255));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body h1.article-title {
  color: var(--text-normal, rgb(255, 255, 255));
}

html body h2 {
  --background-modifier-active-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --background-modifier-border: #404040;
  --background-modifier-border-focus: #707070;
  --background-modifier-border-hover: #707070;
  --background-modifier-error: #ff6b81;
  --background-modifier-error-hover: #ff6b81;
  --background-modifier-error-rgb: 255,
    107,
    129;
  --background-modifier-form-field: #383838;
  --background-modifier-form-field-hover: #383838;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #7bed9f;
  --background-modifier-success-rgb: 123,
    237,
    159;
  --background-primary: #202020;
  --background-primary-alt: #282828;
  --background-secondary: #303030;
  --background-secondary-alt: #383838;
  --blockquote-background-color: rgb(158, 158, 158, 0.10);
  --blockquote-border-color: hsl(46deg, 95%, 65%);
  --blur-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255,
    107,
    129;
  --callout-default: 83,
    82,
    237;
  --callout-error: 255,
    107,
    129;
  --callout-example: 168,
    130,
    255;
  --callout-fail: 255,
    107,
    129;
  --callout-important: 112,
    161,
    255;
  --callout-info: 83,
    82,
    237;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255,
    127,
    80;
  --callout-radius: 8px;
  --callout-success: 123,
    237,
    159;
  --callout-summary: 112,
    161,
    255;
  --callout-tip: 112,
    161,
    255;
  --callout-title-weight: 600;
  --callout-todo: 83,
    82,
    237;
  --callout-warning: 255,
    127,
    80;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #404040;
  --caret-color: #ffffff;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #a0a0a0;
  --checkbox-color: hsl(46deg, 95%, 65%);
  --checkbox-color-hover: hsl(46deg, 95%, 61.2%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #a0a0a0;
  --clickable-icon-radius: 4px;
  --code-background: #282828;
  --code-border-color: #404040;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: hsl(46deg, 95%, 65%);
  --code-important: #ff7f50;
  --code-keyword: #fa99cd;
  --code-normal: #ffffff;
  --code-operator: #ff6b81;
  --code-property: #70a1ff;
  --code-punctuation: #a0a0a0;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #7bed9f;
  --code-tag: #ff6b81;
  --code-value: #a882ff;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(46deg, 95%, 61.2%);
  --color-accent: hsl(46deg, 95%, 65%);
  --color-accent-1: hsl(46deg, 95%, 61.2%);
  --color-accent-2: hsl(46deg, 95%, 68.8%);
  --color-accent-hsl: 46deg,
    95%,
    65%;
  --divider-color: #404040;
  --divider-color-hover: hsl(46deg, 95%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #404040;
  --dropdown-background-hover: #484848;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #404040;
  --flair-color: #ffffff;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-default: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-mermaid: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-print: '??', "??", "??", 'Arial';
  --font-text: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-weight: var(--h2-weight, 680);
  --graph-line: #484848;
  --graph-node: #a0a0a0;
  --graph-node-attachment: hsl(46deg, 95%, 65%);
  --graph-node-focused: hsl(46deg, 95%, 61.2%);
  --graph-node-tag: #7bed9f;
  --graph-node-unresolved: #707070;
  --graph-text: #ffffff;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #404040;
  --interactive-accent: hsl(46deg, 95%, 65%);
  --interactive-accent-hover: hsl(46deg, 95%, 61.2%);
  --interactive-accent-hsl: 46deg,
    95%,
    65%;
  --interactive-hover: #484848;
  --interactive-normal: #404040;
  --link-color: hsl(46deg, 95%, 61.2%);
  --link-color-hover: hsl(46deg, 95%, 68.8%);
  --link-external-color: hsl(46deg, 95%, 61.2%);
  --link-external-color-hover: hsl(46deg, 95%, 68.8%);
  --link-unresolved-color: hsl(46deg, 95%, 61.2%);
  --link-unresolved-decoration-color: hsla(46deg,
    95%,
    65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --lt-file-icon-color: #707070;
  --menu-background: #303030;
  --menu-border-color: #707070;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #a0a0a0;
  --search-icon-color: #a0a0a0;
  --search-result-background: #202020;
  --setting-group-heading-color: #ffffff;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #282828;
  --setting-items-border-color: #404040;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #a0a0a0;
  --shiki-code-background: #282828;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #7bed9f;
  --shiki-code-important: #ff7f50;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #a0a0a0;
  --shiki-code-property: #70a1ff;
  --shiki-code-punctuation: #a0a0a0;
  --shiki-code-string: hsl(46deg, 95%, 65%);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #404040;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #a0a0a0;
  --shiki-highlight-green: rgba(123, 237, 159, 0.5);
  --shiki-highlight-green-background: rgba(123, 237, 159, 0.1);
  --shiki-highlight-neutral: #a0a0a0;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 107, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 107, 129, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ff6b81;
  --sync-avatar-color-2: #ff7f50;
  --sync-avatar-color-3: hsl(46deg, 95%, 65%);
  --sync-avatar-color-4: #7bed9f;
  --sync-avatar-color-5: #70a1ff;
  --sync-avatar-color-6: #5352ed;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: transparent;
  --tab-font-size: 13px;
  --tab-outline-color: #404040;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #303030;
  --tab-switcher-menubar-background: linear-gradient(to top, #303030, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(46deg, 95%, 65%);
  --tab-text-color: #707070;
  --tab-text-color-active: #a0a0a0;
  --tab-text-color-focused: #a0a0a0;
  --tab-text-color-focused-active: #a0a0a0;
  --tab-text-color-focused-active-current: hsl(46deg, 95%, 61.2%);
  --tab-text-color-focused-highlighted: hsl(46deg, 95%, 61.2%);
  --table-add-button-border-color: #404040;
  --table-add-button-border-width: 1px;
  --table-border-color: #404040;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(46deg, 95%, 65%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #202020;
  --table-header-background: transparent;
  --table-header-border-color: #404040;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(46deg,
    95%,
    65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(46deg, 95%, 65%);
  --table-selection-border-radius: 8px;
  --table-text-size: 16px;
  --tag-background: hsla(46deg,
    95%,
    65%, 0.1);
  --tag-background-hover: hsla(46deg,
    95%,
    65%, 0.2);
  --tag-border-color: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-border-color-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-color: hsl(46deg, 95%, 61.2%);
  --tag-color-hover: hsl(46deg, 95%, 61.2%);
  --tag-size: 0.875em;
  --text-accent: hsl(46deg, 95%, 61.2%);
  --text-accent-hover: hsl(46deg, 95%, 68.8%);
  --text-error: #ff6b81;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #a0a0a0;
  --text-normal: #ffffff;
  --text-on-accent: #202020;
  --text-selection: rgba(255, 255, 255, 0.2);
  --text-success: #7bed9f;
  --text-warning: #ff7f50;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-right-width: 0px;
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(112, 112, 112));
  content: "# ";
  font-family: var(--h2-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  font-size: var(--h2-size, 23.392px);
  font-weight: var(--font-weight, 680);
  letter-spacing: var(--h2-letter-spacing, -0.257312px);
  line-height: var(--h2-line-height, 28.0704px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body h3 {
  --background-modifier-active-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --background-modifier-border: #404040;
  --background-modifier-border-focus: #707070;
  --background-modifier-border-hover: #707070;
  --background-modifier-error: #ff6b81;
  --background-modifier-error-hover: #ff6b81;
  --background-modifier-error-rgb: 255,
    107,
    129;
  --background-modifier-form-field: #383838;
  --background-modifier-form-field-hover: #383838;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #7bed9f;
  --background-modifier-success-rgb: 123,
    237,
    159;
  --background-primary: #202020;
  --background-primary-alt: #282828;
  --background-secondary: #303030;
  --background-secondary-alt: #383838;
  --blockquote-background-color: rgb(158, 158, 158, 0.10);
  --blockquote-border-color: hsl(46deg, 95%, 65%);
  --blur-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255,
    107,
    129;
  --callout-default: 83,
    82,
    237;
  --callout-error: 255,
    107,
    129;
  --callout-example: 168,
    130,
    255;
  --callout-fail: 255,
    107,
    129;
  --callout-important: 112,
    161,
    255;
  --callout-info: 83,
    82,
    237;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255,
    127,
    80;
  --callout-radius: 8px;
  --callout-success: 123,
    237,
    159;
  --callout-summary: 112,
    161,
    255;
  --callout-tip: 112,
    161,
    255;
  --callout-title-weight: 600;
  --callout-todo: 83,
    82,
    237;
  --callout-warning: 255,
    127,
    80;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #404040;
  --caret-color: #ffffff;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #a0a0a0;
  --checkbox-color: hsl(46deg, 95%, 65%);
  --checkbox-color-hover: hsl(46deg, 95%, 61.2%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #a0a0a0;
  --clickable-icon-radius: 4px;
  --code-background: #282828;
  --code-border-color: #404040;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: hsl(46deg, 95%, 65%);
  --code-important: #ff7f50;
  --code-keyword: #fa99cd;
  --code-normal: #ffffff;
  --code-operator: #ff6b81;
  --code-property: #70a1ff;
  --code-punctuation: #a0a0a0;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #7bed9f;
  --code-tag: #ff6b81;
  --code-value: #a882ff;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(46deg, 95%, 61.2%);
  --color-accent: hsl(46deg, 95%, 65%);
  --color-accent-1: hsl(46deg, 95%, 61.2%);
  --color-accent-2: hsl(46deg, 95%, 68.8%);
  --color-accent-hsl: 46deg,
    95%,
    65%;
  --divider-color: #404040;
  --divider-color-hover: hsl(46deg, 95%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #404040;
  --dropdown-background-hover: #484848;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #404040;
  --flair-color: #ffffff;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-default: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-mermaid: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-print: '??', "??", "??", 'Arial';
  --font-text: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-weight: var(--h3-weight, 660);
  --graph-line: #484848;
  --graph-node: #a0a0a0;
  --graph-node-attachment: hsl(46deg, 95%, 65%);
  --graph-node-focused: hsl(46deg, 95%, 61.2%);
  --graph-node-tag: #7bed9f;
  --graph-node-unresolved: #707070;
  --graph-text: #ffffff;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #404040;
  --interactive-accent: hsl(46deg, 95%, 65%);
  --interactive-accent-hover: hsl(46deg, 95%, 61.2%);
  --interactive-accent-hsl: 46deg,
    95%,
    65%;
  --interactive-hover: #484848;
  --interactive-normal: #404040;
  --link-color: hsl(46deg, 95%, 61.2%);
  --link-color-hover: hsl(46deg, 95%, 68.8%);
  --link-external-color: hsl(46deg, 95%, 61.2%);
  --link-external-color-hover: hsl(46deg, 95%, 68.8%);
  --link-unresolved-color: hsl(46deg, 95%, 61.2%);
  --link-unresolved-decoration-color: hsla(46deg,
    95%,
    65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --lt-file-icon-color: #707070;
  --menu-background: #303030;
  --menu-border-color: #707070;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #a0a0a0;
  --search-icon-color: #a0a0a0;
  --search-result-background: #202020;
  --setting-group-heading-color: #ffffff;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #282828;
  --setting-items-border-color: #404040;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #a0a0a0;
  --shiki-code-background: #282828;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #7bed9f;
  --shiki-code-important: #ff7f50;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #a0a0a0;
  --shiki-code-property: #70a1ff;
  --shiki-code-punctuation: #a0a0a0;
  --shiki-code-string: hsl(46deg, 95%, 65%);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #404040;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #a0a0a0;
  --shiki-highlight-green: rgba(123, 237, 159, 0.5);
  --shiki-highlight-green-background: rgba(123, 237, 159, 0.1);
  --shiki-highlight-neutral: #a0a0a0;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 107, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 107, 129, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ff6b81;
  --sync-avatar-color-2: #ff7f50;
  --sync-avatar-color-3: hsl(46deg, 95%, 65%);
  --sync-avatar-color-4: #7bed9f;
  --sync-avatar-color-5: #70a1ff;
  --sync-avatar-color-6: #5352ed;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: transparent;
  --tab-font-size: 13px;
  --tab-outline-color: #404040;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #303030;
  --tab-switcher-menubar-background: linear-gradient(to top, #303030, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(46deg, 95%, 65%);
  --tab-text-color: #707070;
  --tab-text-color-active: #a0a0a0;
  --tab-text-color-focused: #a0a0a0;
  --tab-text-color-focused-active: #a0a0a0;
  --tab-text-color-focused-active-current: hsl(46deg, 95%, 61.2%);
  --tab-text-color-focused-highlighted: hsl(46deg, 95%, 61.2%);
  --table-add-button-border-color: #404040;
  --table-add-button-border-width: 1px;
  --table-border-color: #404040;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(46deg, 95%, 65%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #202020;
  --table-header-background: transparent;
  --table-header-border-color: #404040;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(46deg,
    95%,
    65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(46deg, 95%, 65%);
  --table-selection-border-radius: 8px;
  --table-text-size: 16px;
  --tag-background: hsla(46deg,
    95%,
    65%, 0.1);
  --tag-background-hover: hsla(46deg,
    95%,
    65%, 0.2);
  --tag-border-color: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-border-color-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-color: hsl(46deg, 95%, 61.2%);
  --tag-color-hover: hsl(46deg, 95%, 61.2%);
  --tag-size: 0.875em;
  --text-accent: hsl(46deg, 95%, 61.2%);
  --text-accent-hover: hsl(46deg, 95%, 68.8%);
  --text-error: #ff6b81;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #a0a0a0;
  --text-normal: #ffffff;
  --text-on-accent: #202020;
  --text-selection: rgba(255, 255, 255, 0.2);
  --text-success: #7bed9f;
  --text-warning: #ff7f50;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-right-width: 0px;
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(112, 112, 112));
  content: "# ";
  font-family: var(--h3-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  font-size: var(--h3-size, 21.088px);
  font-weight: var(--font-weight, 660);
  letter-spacing: var(--h3-letter-spacing, -0.168704px);
  line-height: var(--h3-line-height, 27.4144px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body h4 {
  --background-modifier-active-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --background-modifier-border: #404040;
  --background-modifier-border-focus: #707070;
  --background-modifier-border-hover: #707070;
  --background-modifier-error: #ff6b81;
  --background-modifier-error-hover: #ff6b81;
  --background-modifier-error-rgb: 255,
    107,
    129;
  --background-modifier-form-field: #383838;
  --background-modifier-form-field-hover: #383838;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #7bed9f;
  --background-modifier-success-rgb: 123,
    237,
    159;
  --background-primary: #202020;
  --background-primary-alt: #282828;
  --background-secondary: #303030;
  --background-secondary-alt: #383838;
  --blockquote-background-color: rgb(158, 158, 158, 0.10);
  --blockquote-border-color: hsl(46deg, 95%, 65%);
  --blur-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255,
    107,
    129;
  --callout-default: 83,
    82,
    237;
  --callout-error: 255,
    107,
    129;
  --callout-example: 168,
    130,
    255;
  --callout-fail: 255,
    107,
    129;
  --callout-important: 112,
    161,
    255;
  --callout-info: 83,
    82,
    237;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255,
    127,
    80;
  --callout-radius: 8px;
  --callout-success: 123,
    237,
    159;
  --callout-summary: 112,
    161,
    255;
  --callout-tip: 112,
    161,
    255;
  --callout-title-weight: 600;
  --callout-todo: 83,
    82,
    237;
  --callout-warning: 255,
    127,
    80;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #404040;
  --caret-color: #ffffff;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #a0a0a0;
  --checkbox-color: hsl(46deg, 95%, 65%);
  --checkbox-color-hover: hsl(46deg, 95%, 61.2%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #a0a0a0;
  --clickable-icon-radius: 4px;
  --code-background: #282828;
  --code-border-color: #404040;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: hsl(46deg, 95%, 65%);
  --code-important: #ff7f50;
  --code-keyword: #fa99cd;
  --code-normal: #ffffff;
  --code-operator: #ff6b81;
  --code-property: #70a1ff;
  --code-punctuation: #a0a0a0;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #7bed9f;
  --code-tag: #ff6b81;
  --code-value: #a882ff;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(46deg, 95%, 61.2%);
  --color-accent: hsl(46deg, 95%, 65%);
  --color-accent-1: hsl(46deg, 95%, 61.2%);
  --color-accent-2: hsl(46deg, 95%, 68.8%);
  --color-accent-hsl: 46deg,
    95%,
    65%;
  --divider-color: #404040;
  --divider-color-hover: hsl(46deg, 95%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #404040;
  --dropdown-background-hover: #484848;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #404040;
  --flair-color: #ffffff;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-default: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-mermaid: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-print: '??', "??", "??", 'Arial';
  --font-text: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-weight: var(--h4-weight, 640);
  --graph-line: #484848;
  --graph-node: #a0a0a0;
  --graph-node-attachment: hsl(46deg, 95%, 65%);
  --graph-node-focused: hsl(46deg, 95%, 61.2%);
  --graph-node-tag: #7bed9f;
  --graph-node-unresolved: #707070;
  --graph-text: #ffffff;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #404040;
  --interactive-accent: hsl(46deg, 95%, 65%);
  --interactive-accent-hover: hsl(46deg, 95%, 61.2%);
  --interactive-accent-hsl: 46deg,
    95%,
    65%;
  --interactive-hover: #484848;
  --interactive-normal: #404040;
  --link-color: hsl(46deg, 95%, 61.2%);
  --link-color-hover: hsl(46deg, 95%, 68.8%);
  --link-external-color: hsl(46deg, 95%, 61.2%);
  --link-external-color-hover: hsl(46deg, 95%, 68.8%);
  --link-unresolved-color: hsl(46deg, 95%, 61.2%);
  --link-unresolved-decoration-color: hsla(46deg,
    95%,
    65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --lt-file-icon-color: #707070;
  --menu-background: #303030;
  --menu-border-color: #707070;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #a0a0a0;
  --search-icon-color: #a0a0a0;
  --search-result-background: #202020;
  --setting-group-heading-color: #ffffff;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #282828;
  --setting-items-border-color: #404040;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #a0a0a0;
  --shiki-code-background: #282828;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #7bed9f;
  --shiki-code-important: #ff7f50;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #a0a0a0;
  --shiki-code-property: #70a1ff;
  --shiki-code-punctuation: #a0a0a0;
  --shiki-code-string: hsl(46deg, 95%, 65%);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #404040;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #a0a0a0;
  --shiki-highlight-green: rgba(123, 237, 159, 0.5);
  --shiki-highlight-green-background: rgba(123, 237, 159, 0.1);
  --shiki-highlight-neutral: #a0a0a0;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 107, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 107, 129, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ff6b81;
  --sync-avatar-color-2: #ff7f50;
  --sync-avatar-color-3: hsl(46deg, 95%, 65%);
  --sync-avatar-color-4: #7bed9f;
  --sync-avatar-color-5: #70a1ff;
  --sync-avatar-color-6: #5352ed;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: transparent;
  --tab-font-size: 13px;
  --tab-outline-color: #404040;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #303030;
  --tab-switcher-menubar-background: linear-gradient(to top, #303030, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(46deg, 95%, 65%);
  --tab-text-color: #707070;
  --tab-text-color-active: #a0a0a0;
  --tab-text-color-focused: #a0a0a0;
  --tab-text-color-focused-active: #a0a0a0;
  --tab-text-color-focused-active-current: hsl(46deg, 95%, 61.2%);
  --tab-text-color-focused-highlighted: hsl(46deg, 95%, 61.2%);
  --table-add-button-border-color: #404040;
  --table-add-button-border-width: 1px;
  --table-border-color: #404040;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(46deg, 95%, 65%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #202020;
  --table-header-background: transparent;
  --table-header-border-color: #404040;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(46deg,
    95%,
    65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(46deg, 95%, 65%);
  --table-selection-border-radius: 8px;
  --table-text-size: 16px;
  --tag-background: hsla(46deg,
    95%,
    65%, 0.1);
  --tag-background-hover: hsla(46deg,
    95%,
    65%, 0.2);
  --tag-border-color: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-border-color-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-color: hsl(46deg, 95%, 61.2%);
  --tag-color-hover: hsl(46deg, 95%, 61.2%);
  --tag-size: 0.875em;
  --text-accent: hsl(46deg, 95%, 61.2%);
  --text-accent-hover: hsl(46deg, 95%, 68.8%);
  --text-error: #ff6b81;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #a0a0a0;
  --text-normal: #ffffff;
  --text-on-accent: #202020;
  --text-selection: rgba(255, 255, 255, 0.2);
  --text-success: #7bed9f;
  --text-warning: #ff7f50;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-right-width: 0px;
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(112, 112, 112));
  content: "# ";
  font-family: var(--h4-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  font-size: var(--h4-size, 19.008px);
  font-weight: var(--font-weight, 640);
  letter-spacing: var(--h4-letter-spacing, -0.09504px);
  line-height: var(--h4-line-height, 26.6112px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body h5 {
  --background-modifier-active-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --background-modifier-border: #404040;
  --background-modifier-border-focus: #707070;
  --background-modifier-border-hover: #707070;
  --background-modifier-error: #ff6b81;
  --background-modifier-error-hover: #ff6b81;
  --background-modifier-error-rgb: 255,
    107,
    129;
  --background-modifier-form-field: #383838;
  --background-modifier-form-field-hover: #383838;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #7bed9f;
  --background-modifier-success-rgb: 123,
    237,
    159;
  --background-primary: #202020;
  --background-primary-alt: #282828;
  --background-secondary: #303030;
  --background-secondary-alt: #383838;
  --blockquote-background-color: rgb(158, 158, 158, 0.10);
  --blockquote-border-color: hsl(46deg, 95%, 65%);
  --blur-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255,
    107,
    129;
  --callout-default: 83,
    82,
    237;
  --callout-error: 255,
    107,
    129;
  --callout-example: 168,
    130,
    255;
  --callout-fail: 255,
    107,
    129;
  --callout-important: 112,
    161,
    255;
  --callout-info: 83,
    82,
    237;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255,
    127,
    80;
  --callout-radius: 8px;
  --callout-success: 123,
    237,
    159;
  --callout-summary: 112,
    161,
    255;
  --callout-tip: 112,
    161,
    255;
  --callout-title-weight: 600;
  --callout-todo: 83,
    82,
    237;
  --callout-warning: 255,
    127,
    80;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #404040;
  --caret-color: #ffffff;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #a0a0a0;
  --checkbox-color: hsl(46deg, 95%, 65%);
  --checkbox-color-hover: hsl(46deg, 95%, 61.2%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #a0a0a0;
  --clickable-icon-radius: 4px;
  --code-background: #282828;
  --code-border-color: #404040;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: hsl(46deg, 95%, 65%);
  --code-important: #ff7f50;
  --code-keyword: #fa99cd;
  --code-normal: #ffffff;
  --code-operator: #ff6b81;
  --code-property: #70a1ff;
  --code-punctuation: #a0a0a0;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #7bed9f;
  --code-tag: #ff6b81;
  --code-value: #a882ff;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(46deg, 95%, 61.2%);
  --color-accent: hsl(46deg, 95%, 65%);
  --color-accent-1: hsl(46deg, 95%, 61.2%);
  --color-accent-2: hsl(46deg, 95%, 68.8%);
  --color-accent-hsl: 46deg,
    95%,
    65%;
  --divider-color: #404040;
  --divider-color-hover: hsl(46deg, 95%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #404040;
  --dropdown-background-hover: #484848;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #404040;
  --flair-color: #ffffff;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-default: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-mermaid: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-print: '??', "??", "??", 'Arial';
  --font-text: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-weight: var(--h5-weight, 620);
  --graph-line: #484848;
  --graph-node: #a0a0a0;
  --graph-node-attachment: hsl(46deg, 95%, 65%);
  --graph-node-focused: hsl(46deg, 95%, 61.2%);
  --graph-node-tag: #7bed9f;
  --graph-node-unresolved: #707070;
  --graph-text: #ffffff;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #404040;
  --interactive-accent: hsl(46deg, 95%, 65%);
  --interactive-accent-hover: hsl(46deg, 95%, 61.2%);
  --interactive-accent-hsl: 46deg,
    95%,
    65%;
  --interactive-hover: #484848;
  --interactive-normal: #404040;
  --link-color: hsl(46deg, 95%, 61.2%);
  --link-color-hover: hsl(46deg, 95%, 68.8%);
  --link-external-color: hsl(46deg, 95%, 61.2%);
  --link-external-color-hover: hsl(46deg, 95%, 68.8%);
  --link-unresolved-color: hsl(46deg, 95%, 61.2%);
  --link-unresolved-decoration-color: hsla(46deg,
    95%,
    65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --lt-file-icon-color: #707070;
  --menu-background: #303030;
  --menu-border-color: #707070;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #a0a0a0;
  --search-icon-color: #a0a0a0;
  --search-result-background: #202020;
  --setting-group-heading-color: #ffffff;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #282828;
  --setting-items-border-color: #404040;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #a0a0a0;
  --shiki-code-background: #282828;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #7bed9f;
  --shiki-code-important: #ff7f50;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #a0a0a0;
  --shiki-code-property: #70a1ff;
  --shiki-code-punctuation: #a0a0a0;
  --shiki-code-string: hsl(46deg, 95%, 65%);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #404040;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #a0a0a0;
  --shiki-highlight-green: rgba(123, 237, 159, 0.5);
  --shiki-highlight-green-background: rgba(123, 237, 159, 0.1);
  --shiki-highlight-neutral: #a0a0a0;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 107, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 107, 129, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ff6b81;
  --sync-avatar-color-2: #ff7f50;
  --sync-avatar-color-3: hsl(46deg, 95%, 65%);
  --sync-avatar-color-4: #7bed9f;
  --sync-avatar-color-5: #70a1ff;
  --sync-avatar-color-6: #5352ed;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: transparent;
  --tab-font-size: 13px;
  --tab-outline-color: #404040;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #303030;
  --tab-switcher-menubar-background: linear-gradient(to top, #303030, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(46deg, 95%, 65%);
  --tab-text-color: #707070;
  --tab-text-color-active: #a0a0a0;
  --tab-text-color-focused: #a0a0a0;
  --tab-text-color-focused-active: #a0a0a0;
  --tab-text-color-focused-active-current: hsl(46deg, 95%, 61.2%);
  --tab-text-color-focused-highlighted: hsl(46deg, 95%, 61.2%);
  --table-add-button-border-color: #404040;
  --table-add-button-border-width: 1px;
  --table-border-color: #404040;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(46deg, 95%, 65%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #202020;
  --table-header-background: transparent;
  --table-header-border-color: #404040;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(46deg,
    95%,
    65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(46deg, 95%, 65%);
  --table-selection-border-radius: 8px;
  --table-text-size: 16px;
  --tag-background: hsla(46deg,
    95%,
    65%, 0.1);
  --tag-background-hover: hsla(46deg,
    95%,
    65%, 0.2);
  --tag-border-color: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-border-color-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-color: hsl(46deg, 95%, 61.2%);
  --tag-color-hover: hsl(46deg, 95%, 61.2%);
  --tag-size: 0.875em;
  --text-accent: hsl(46deg, 95%, 61.2%);
  --text-accent-hover: hsl(46deg, 95%, 68.8%);
  --text-error: #ff6b81;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #a0a0a0;
  --text-normal: #ffffff;
  --text-on-accent: #202020;
  --text-selection: rgba(255, 255, 255, 0.2);
  --text-success: #7bed9f;
  --text-warning: #ff7f50;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-right-width: 0px;
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(112, 112, 112));
  content: "# ";
  font-family: var(--h5-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  font-size: var(--h5-size, 17.216px);
  font-weight: var(--font-weight, 620);
  letter-spacing: var(--h5-letter-spacing, -0.034432px);
  line-height: var(--h5-line-height, 25.824px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body h6 {
  --background-modifier-active-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --background-modifier-border: #404040;
  --background-modifier-border-focus: #707070;
  --background-modifier-border-hover: #707070;
  --background-modifier-error: #ff6b81;
  --background-modifier-error-hover: #ff6b81;
  --background-modifier-error-rgb: 255,
    107,
    129;
  --background-modifier-form-field: #383838;
  --background-modifier-form-field-hover: #383838;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #7bed9f;
  --background-modifier-success-rgb: 123,
    237,
    159;
  --background-primary: #202020;
  --background-primary-alt: #282828;
  --background-secondary: #303030;
  --background-secondary-alt: #383838;
  --blockquote-background-color: rgb(158, 158, 158, 0.10);
  --blockquote-border-color: hsl(46deg, 95%, 65%);
  --blur-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 255,
    107,
    129;
  --callout-default: 83,
    82,
    237;
  --callout-error: 255,
    107,
    129;
  --callout-example: 168,
    130,
    255;
  --callout-fail: 255,
    107,
    129;
  --callout-important: 112,
    161,
    255;
  --callout-info: 83,
    82,
    237;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 255,
    127,
    80;
  --callout-radius: 8px;
  --callout-success: 123,
    237,
    159;
  --callout-summary: 112,
    161,
    255;
  --callout-tip: 112,
    161,
    255;
  --callout-title-weight: 600;
  --callout-todo: 83,
    82,
    237;
  --callout-warning: 255,
    127,
    80;
  --canvas-background: #202020;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: #404040;
  --caret-color: #ffffff;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #a0a0a0;
  --checkbox-color: hsl(46deg, 95%, 65%);
  --checkbox-color-hover: hsl(46deg, 95%, 61.2%);
  --checkbox-marker-color: #202020;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #a0a0a0;
  --clickable-icon-radius: 4px;
  --code-background: #282828;
  --code-border-color: #404040;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: hsl(46deg, 95%, 65%);
  --code-important: #ff7f50;
  --code-keyword: #fa99cd;
  --code-normal: #ffffff;
  --code-operator: #ff6b81;
  --code-property: #70a1ff;
  --code-punctuation: #a0a0a0;
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #7bed9f;
  --code-tag: #ff6b81;
  --code-value: #a882ff;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: hsl(46deg, 95%, 61.2%);
  --color-accent: hsl(46deg, 95%, 65%);
  --color-accent-1: hsl(46deg, 95%, 61.2%);
  --color-accent-2: hsl(46deg, 95%, 68.8%);
  --color-accent-hsl: 46deg,
    95%,
    65%;
  --divider-color: #404040;
  --divider-color-hover: hsl(46deg, 95%, 65%);
  --divider-vertical-height: 100%;
  --dropdown-background: #404040;
  --dropdown-background-hover: #484848;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #404040;
  --flair-color: #ffffff;
  --focus-ring-color: var(--csstools-light-dark-toggle--23, #0df);
  --font-default: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface: "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-mermaid: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-monospace: "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-print: '??', "??", "??", 'Arial';
  --font-text: "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    "??",
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-weight: var(--h6-weight, 600);
  --graph-line: #484848;
  --graph-node: #a0a0a0;
  --graph-node-attachment: hsl(46deg, 95%, 65%);
  --graph-node-focused: hsl(46deg, 95%, 61.2%);
  --graph-node-tag: #7bed9f;
  --graph-node-unresolved: #707070;
  --graph-text: #ffffff;
  --h5-line-height: 1.5;
  --h6-line-height: 1.5;
  --heading-formatting: #707070;
  --heading-spacing: 2.5rem;
  --hr-color: #404040;
  --interactive-accent: hsl(46deg, 95%, 65%);
  --interactive-accent-hover: hsl(46deg, 95%, 61.2%);
  --interactive-accent-hsl: 46deg,
    95%,
    65%;
  --interactive-hover: #484848;
  --interactive-normal: #404040;
  --link-color: hsl(46deg, 95%, 61.2%);
  --link-color-hover: hsl(46deg, 95%, 68.8%);
  --link-external-color: hsl(46deg, 95%, 61.2%);
  --link-external-color-hover: hsl(46deg, 95%, 68.8%);
  --link-unresolved-color: hsl(46deg, 95%, 61.2%);
  --link-unresolved-decoration-color: hsla(46deg,
    95%,
    65%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --lt-file-icon-color: #707070;
  --menu-background: #303030;
  --menu-border-color: #707070;
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #404040;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #404040;
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, #404040 65%, transparent) linear-gradient(#404040, color-mix(in srgb, #404040 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #a0a0a0;
  --search-icon-color: #a0a0a0;
  --search-result-background: #202020;
  --setting-group-heading-color: #ffffff;
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #282828;
  --setting-items-border-color: #404040;
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: #a0a0a0;
  --shiki-code-background: #282828;
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: #707070;
  --shiki-code-function: #7bed9f;
  --shiki-code-important: #ff7f50;
  --shiki-code-keyword: #fa99cd;
  --shiki-code-normal: #a0a0a0;
  --shiki-code-property: #70a1ff;
  --shiki-code-punctuation: #a0a0a0;
  --shiki-code-string: hsl(46deg, 95%, 65%);
  --shiki-code-value: #a882ff;
  --shiki-gutter-border-color: #404040;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #707070;
  --shiki-gutter-text-color-highlight: #a0a0a0;
  --shiki-highlight-green: rgba(123, 237, 159, 0.5);
  --shiki-highlight-green-background: rgba(123, 237, 159, 0.1);
  --shiki-highlight-neutral: #a0a0a0;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(255, 107, 129, 0.5);
  --shiki-highlight-red-background: rgba(255, 107, 129, 0.1);
  --shiki-terminal-dots-color: #707070;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #202020;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #ff6b81;
  --sync-avatar-color-2: #ff7f50;
  --sync-avatar-color-3: hsl(46deg, 95%, 65%);
  --sync-avatar-color-4: #7bed9f;
  --sync-avatar-color-5: #70a1ff;
  --sync-avatar-color-6: #5352ed;
  --sync-avatar-color-7: #a882ff;
  --sync-avatar-color-8: #fa99cd;
  --tab-background-active: #202020;
  --tab-divider-color: transparent;
  --tab-font-size: 13px;
  --tab-outline-color: #404040;
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: #303030;
  --tab-switcher-menubar-background: linear-gradient(to top, #303030, transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(46deg, 95%, 65%);
  --tab-text-color: #707070;
  --tab-text-color-active: #a0a0a0;
  --tab-text-color-focused: #a0a0a0;
  --tab-text-color-focused-active: #a0a0a0;
  --tab-text-color-focused-active-current: hsl(46deg, 95%, 61.2%);
  --tab-text-color-focused-highlighted: hsl(46deg, 95%, 61.2%);
  --table-add-button-border-color: #404040;
  --table-add-button-border-width: 1px;
  --table-border-color: #404040;
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(46deg, 95%, 65%);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #202020;
  --table-header-background: transparent;
  --table-header-border-color: #404040;
  --table-header-border-width: 1px;
  --table-header-color: #ffffff;
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(46deg,
    95%,
    65%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(46deg, 95%, 65%);
  --table-selection-border-radius: 8px;
  --table-text-size: 16px;
  --tag-background: hsla(46deg,
    95%,
    65%, 0.1);
  --tag-background-hover: hsla(46deg,
    95%,
    65%, 0.2);
  --tag-border-color: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-border-color-hover: hsla(46deg,
    95%,
    65%, 0.15);
  --tag-color: hsl(46deg, 95%, 61.2%);
  --tag-color-hover: hsl(46deg, 95%, 61.2%);
  --tag-size: 0.875em;
  --text-accent: hsl(46deg, 95%, 61.2%);
  --text-accent-hover: hsl(46deg, 95%, 68.8%);
  --text-error: #ff6b81;
  --text-faint: #707070;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #a0a0a0;
  --text-normal: #ffffff;
  --text-on-accent: #202020;
  --text-selection: rgba(255, 255, 255, 0.2);
  --text-success: #7bed9f;
  --text-warning: #ff7f50;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-right-width: 0px;
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(112, 112, 112));
  content: "# ";
  font-family: var(--h6-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
  font-size: var(--h6-size, 16px);
  font-weight: var(--font-weight, 600);
  line-height: var(--h6-line-height, 24px);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(112, 112, 112);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(251, 211, 81));
  border-color: rgb(251, 211, 81);
}

html body p {
  color: var(--text-muted, rgb(160, 160, 160));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(250, 206, 62));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration-color: rgb(250, 206, 62);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(250, 206, 62));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration-color: rgb(250, 206, 62);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(250, 206, 62));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(250, 206, 62) none 0px;
  text-decoration: underline rgba(251, 211, 81, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(251, 211, 81, 0.3));
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgb(112, 112, 112));
}

html body blockquote {
  background-color: var(--blockquote-background-color, rgba(158, 158, 158, 0.1));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  padding-bottom: 12px;
  padding-top: 12px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  width: 246.422px;
}

html body td {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(255, 255, 255));
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html body th {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 8px;
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(255, 255, 255));
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html body tr {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(40, 40, 40));
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: var(--code-normal, rgb(255, 255, 255));
  font-family: var(--font-monospace, "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(40, 40, 40));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body figure {
  --code-background: var(--ec-frm-edBg, #282828);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(40, 40, 40));
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(251, 211, 81);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

html body li.task-list-item[data-task="#"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(255, 255, 255);
}

html li.task-list-item[data-task="body"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="."] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="="] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="X"] {
  color: rgb(160, 160, 160);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="x"] {
  color: rgb(160, 160, 160);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 32, 32);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 127, 80);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 112, 112);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 211, 81);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 161, 255);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 82, 237);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 107, 129);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 107, 129);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 107, 129);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 107, 129);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 82, 237);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 211, 81);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 211, 81);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 107, 129);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(123, 237, 159);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(123, 237, 159);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(123, 237, 159);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 112,
    161,
    255);
  background: rgba(112, 161, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 161, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(112, 161, 255, 0.25);
  border-right-color: rgba(112, 161, 255, 0.25);
  border-top-color: rgba(112, 161, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255,
    107,
    129);
  background: rgba(255, 107, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255,
    107,
    129);
  background: rgba(255, 107, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168,
    130,
    255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255,
    107,
    129);
  background: rgba(255, 107, 129, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 107, 129, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 107, 129, 0.25);
  border-right-color: rgba(255, 107, 129, 0.25);
  border-top-color: rgba(255, 107, 129, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 83,
    82,
    237);
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 83,
    82,
    237);
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255,
    127,
    80);
  background: rgba(255, 127, 80, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 127, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 127, 80, 0.25);
  border-right-color: rgba(255, 127, 80, 0.25);
  border-top-color: rgba(255, 127, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 123,
    237,
    159);
  background: rgba(123, 237, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(123, 237, 159, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(123, 237, 159, 0.25);
  border-right-color: rgba(123, 237, 159, 0.25);
  border-top-color: rgba(123, 237, 159, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 112,
    161,
    255);
  background: rgba(112, 161, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 161, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(112, 161, 255, 0.25);
  border-right-color: rgba(112, 161, 255, 0.25);
  border-top-color: rgba(112, 161, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 83,
    82,
    237);
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255,
    127,
    80);
  background: rgba(255, 127, 80, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 127, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 127, 80, 0.25);
  border-right-color: rgba(255, 127, 80, 0.25);
  border-top-color: rgba(255, 127, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 83,
    82,
    237;
  background: rgba(83, 82, 237, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(83, 82, 237, 0.1);
  border-bottom-color: rgb(83, 82, 237);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(83, 82, 237);
  border-right-color: rgb(83, 82, 237);
  border-top-color: rgb(83, 82, 237);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(83, 82, 237));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 255, 255);
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(56, 56, 56);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(32, 32, 32));
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-width: 0px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.05) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.1) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.15) 0px 30px 90px 0px);
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--text-accent, rgb(250, 206, 62));
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 206, 62);
  border-left-color: rgb(250, 206, 62);
  border-right-color: rgb(250, 206, 62);
  border-top-color: rgb(250, 206, 62);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: var(--text-accent, rgb(250, 206, 62));
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  color: var(--text-accent, rgb(250, 206, 62));
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > input {
  background-color: var(--background-secondary, rgb(48, 48, 48));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  border-bottom-color: rgb(250, 206, 62);
  border-left-color: rgb(250, 206, 62);
  border-right-color: rgb(250, 206, 62);
  border-top-color: rgb(250, 206, 62);
  color: var(--text-accent, rgb(250, 206, 62));
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.075));
  color: var(--text-accent, rgb(250, 206, 62));
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(46deg,
    95%,
    65%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(46deg,
    95%,
    65%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(46deg,
    95%,
    65%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(46deg,
    95%,
    65%, 0.15));
  --pill-color: var(--tag-color, hsl(46deg, 95%, 61.2%));
  --pill-color-hover: var(--tag-color-hover, hsl(46deg, 95%, 61.2%));
  --pill-color-remove: var(--tag-color, hsl(46deg, 95%, 61.2%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(46deg, 95%, 61.2%));
  background-color: var(--pill-background, rgba(251, 211, 81, 0.1));
  border-bottom-color: rgba(251, 211, 81, 0.15);
  border-left-color: rgba(251, 211, 81, 0.15);
  border-right-color: rgba(251, 211, 81, 0.15);
  border-top-color: rgba(251, 211, 81, 0.15);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body a.internal-link.tag-link::before {
  color: rgb(250, 206, 62);
}

html body h1 {
  color: var(--h1-color, rgb(255, 255, 255));
  font-family: var(--h1-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(255, 255, 255));
}

html body h2 {
  color: var(--h2-color, rgb(255, 255, 255));
  font-family: var(--h2-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body h2.page-title, html h2.page-title a {
  color: var(--inline-title-color, rgb(255, 255, 255));
  font-family: var(--inline-title-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body h3 {
  color: var(--h3-color, rgb(255, 255, 255));
  font-family: var(--h3-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body h4 {
  color: var(--h4-color, rgb(255, 255, 255));
  font-family: var(--h4-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body h5 {
  color: var(--h5-color, rgb(255, 255, 255));
  font-family: var(--h5-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body h6 {
  color: var(--h6-color, rgb(255, 255, 255));
  font-family: var(--h6-font, "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body hr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 83,
    82,
    237);
  border-bottom-color: rgba(83, 82, 237, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(83, 82, 237, 0.25);
  border-right-color: rgba(83, 82, 237, 0.25);
  border-top-color: rgba(83, 82, 237, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(160, 160, 160));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(160, 160, 160));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: var(--icon-color, rgb(160, 160, 160));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(56, 56, 56));
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(160, 160, 160));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body footer ul li a {
  color: rgb(160, 160, 160);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(160, 160, 160));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  --lt-file-icon-color: var(--nav-item-color, #a0a0a0);
  color: var(--nav-item-color, rgb(160, 160, 160));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  --lt-file-icon-color: var(--nav-item-color, #a0a0a0);
  color: var(--nav-item-color, rgb(160, 160, 160));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(160, 160, 160));
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: var(--icon-color, rgb(160, 160, 160));
}

html body .darkmode svg {
  color: rgb(160, 160, 160);
  stroke: rgb(160, 160, 160);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgb(112, 112, 112));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(255, 255, 255));
}

html body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(48, 48, 48));
  border-color: rgb(255, 255, 255);
  box-shadow: var(--input-shadow, rgba(0, 0, 0, 0) 0px 0px 0px 0px);
}`,
    bases: `html body .bases-table thead th {
  border-color: rgb(255, 255, 255);
  color: var(--table-header-color, rgb(255, 255, 255));
}`,
    properties: `html body .metadata {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: var(--text-muted, rgb(160, 160, 160));
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .metadata-properties {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
  font-family: "??", "??", "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body .note-properties {
  border-color: rgb(64, 64, 64);
}

html body .note-properties-key {
  color: rgb(160, 160, 160);
}

html body .note-properties-row {
  border-color: rgb(160, 160, 160);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(46deg,
    95%,
    65%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(46deg,
    95%,
    65%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(46deg,
    95%,
    65%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(46deg,
    95%,
    65%, 0.15));
  --pill-color: var(--tag-color, hsl(46deg, 95%, 61.2%));
  --pill-color-hover: var(--tag-color-hover, hsl(46deg, 95%, 61.2%));
  --pill-color-remove: var(--tag-color, hsl(46deg, 95%, 61.2%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(46deg, 95%, 61.2%));
  background-color: var(--pill-background, rgba(251, 211, 81, 0.1));
  color: var(--pill-color, rgb(250, 206, 62));
}

html body .note-properties-value {
  color: rgb(160, 160, 160);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(32, 32, 32));
  color: var(--text-normal, rgb(255, 255, 255));
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(48, 48, 48));
  border-color: rgb(255, 255, 255);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(56, 56, 56));
}

html body .stacked-page.active {
  border-color: rgb(255, 255, 255);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(56, 56, 56));
}

html body .page-header h2.page-title {
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: var(--text-normal, rgb(160, 160, 160));
  font-family: "??", "??", "??", "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html body kbd {
  background-color: var(--code-background, rgb(40, 40, 40));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--code-normal, rgb(255, 255, 255));
  font-family: var(--font-monospace, "??", "??", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace);
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}

html body ul.tags > li {
  background-color: var(--tag-background, rgba(251, 211, 81, 0.1));
  border-bottom-color: rgba(251, 211, 81, 0.15);
  border-left-color: rgba(251, 211, 81, 0.15);
  border-right-color: rgba(251, 211, 81, 0.15);
  border-top-color: rgba(251, 211, 81, 0.15);
  color: var(--tag-color, rgb(250, 206, 62));
}`,
  },
  light: {},
};
