import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "material-gruvbox",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "gruvbox-material-theme-override",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 166;
  --accent-l: 58%;
  --accent-s: 23%;
  --background-accent: var(--dark0-soft, rgb(50, 48, 47));
  --background-modifier-border: var(--dark1, rgb(60, 56, 54));
  --background-modifier-error: var(--color-red, rgb(234, 105, 98));
  --background-modifier-error-hover: var(--color-red, rgb(234, 105, 98));
  --background-modifier-error-rgb: var(--color-red-rgb, 234,105,98);
  --background-modifier-success: var(--color-green, rgb(169, 182, 101));
  --background-modifier-success-rgb: var(--color-green-rgb, 169,182,101);
  --background-primary: var(--dark0, rgb(40, 40, 40));
  --background-primary-alt: var(--dark0-soft, rgb(50, 48, 47));
  --background-secondary: var(--dark0-hard, rgb(29, 32, 33));
  --background-secondary-alt: var(--dark1, rgb(60, 56, 54));
  --bases-cards-background: var(--background-primary, rgb(40, 40, 40));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(50, 48, 47));
  --bases-embed-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --bases-group-heading-property-color: var(--text-muted, rgb(213, 196, 161));
  --bases-table-border-color: var(--table-border-color, rgb(60, 56, 54));
  --bases-table-cell-background-active: var(--background-primary, rgb(40, 40, 40));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(50, 48, 47));
  --bases-table-cell-background-selected: var(--table-selection, hsla(166, 23%, 58%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, rgb(50, 48, 47));
  --bases-table-header-background: var(--background-primary, rgb(40, 40, 40));
  --bases-table-header-color: var(--text-muted, rgb(213, 196, 161));
  --bases-table-row-background-hover: var(--table-row-background-hover, rgb(80, 73, 69));
  --bases-table-summary-background: var(--background-primary, rgb(40, 40, 40));
  --blockquote-border-color: var(--interactive-accent, hsl(166, 23%, 58%));
  --bold-color: var(--neutral-yellow, rgb(231, 138, 78));
  --calendar-background-hover: var(--dark1, rgb(60, 56, 54));
  --calendar-hover: var(--neutral-red, rgb(234, 105, 98));
  --callout-bug: var(--color-red-rgb, 234,105,98);
  --callout-default: var(--color-blue-rgb, 69,112,122);
  --callout-error: var(--color-red-rgb, 234,105,98);
  --callout-example: var(--color-purple-rgb, 211,134,155);
  --callout-fail: var(--color-red-rgb, 234,105,98);
  --callout-important: var(--color-cyan-rgb, 125,174,163);
  --callout-info: var(--color-blue-rgb, 69,112,122);
  --callout-question: var(--color-orange-rgb, 195,94,10);
  --callout-success: var(--color-green-rgb, 169,182,101);
  --callout-summary: var(--color-cyan-rgb, 125,174,163);
  --callout-tip: var(--color-cyan-rgb, 125,174,163);
  --callout-todo: var(--color-blue-rgb, 69,112,122);
  --callout-warning: var(--color-orange-rgb, 195,94,10);
  --canvas-background: var(--background-primary, rgb(40, 40, 40));
  --canvas-card-label-color: var(--text-faint, rgb(235, 219, 178));
  --canvas-color-1: var(--color-red-rgb, 234,105,98);
  --canvas-color-2: var(--color-orange-rgb, 195,94,10);
  --canvas-color-3: var(--color-yellow-rgb, 231,138,78);
  --canvas-color-4: var(--color-green-rgb, 169,182,101);
  --canvas-color-5: var(--color-cyan-rgb, 125,174,163);
  --canvas-color-6: var(--color-purple-rgb, 211,134,155);
  --caret-color: var(--text-normal, rgb(212, 190, 152));
  --checkbox-border-color: var(--light4, rgb(168, 153, 132));
  --checkbox-border-color-hover: var(--light4, rgb(168, 153, 132));
  --checkbox-color: var(--light4, rgb(168, 153, 132));
  --checkbox-color-hover: var(--light4, rgb(168, 153, 132));
  --checkbox-marker-color: var(--background-primary, rgb(40, 40, 40));
  --checkbox-radius: var(--radius-s, 0);
  --checklist-done-color: rgba(var(--light2-x), 0.5);
  --code-background: var(--dark1, rgb(60, 56, 54));
  --code-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --code-comment: var(--text-faint, rgb(235, 219, 178));
  --code-function: var(--color-yellow, rgb(231, 138, 78));
  --code-important: var(--color-orange, rgb(195, 94, 10));
  --code-keyword: var(--color-pink, rgb(211, 134, 155));
  --code-normal: var(--neutral-blue, rgb(125, 174, 163));
  --code-operator: var(--color-red, rgb(234, 105, 98));
  --code-property: var(--color-cyan, rgb(125, 174, 163));
  --code-punctuation: var(--text-muted, rgb(213, 196, 161));
  --code-string: var(--color-green, rgb(169, 182, 101));
  --code-tag: var(--color-red, rgb(234, 105, 98));
  --code-value: var(--color-purple, rgb(211, 134, 155));
  --collapse-icon-color: var(--text-faint, rgb(235, 219, 178));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(231, 138, 78));
  --color-blue: var(--faded-blue, rgb(69, 112, 122));
  --color-blue-rgb: var(--faded-blue-x, 69,112,122);
  --color-cyan: var(--neutral-blue, rgb(125, 174, 163));
  --color-cyan-rgb: var(--neutral-blue-x, 125,174,163);
  --color-green: var(--neutral-green, rgb(169, 182, 101));
  --color-green-rgb: var(--neutral-green-x, 169,182,101);
  --color-orange: var(--faded-yellow, rgb(195, 94, 10));
  --color-orange-rgb: var(--faded-yellow-x, 195,94,10);
  --color-pink: var(--neutral-purple, rgb(211, 134, 155));
  --color-pink-rgb: var(--neutral-purple-x, 211,134,155);
  --color-purple: var(--neutral-purple, rgb(211, 134, 155));
  --color-purple-rgb: var(--neutral-purple-x, 211,134,155);
  --color-red: var(--neutral-red, rgb(234, 105, 98));
  --color-red-rgb: var(--neutral-red-x, 234,105,98);
  --color-yellow: var(--neutral-yellow, rgb(231, 138, 78));
  --color-yellow-rgb: var(--neutral-yellow-x, 231,138,78);
  --cursor-line-background: rgba(var(--dark1-x), 0.5);
  --dark: var(--text-normal, var(--light-text, rgb(212, 190, 152)));
  --dark-text: rgb(101, 71, 53);
  --dark-text-faint: rgb(179, 126, 93);
  --dark-text-faint-x: 179,126,93;
  --dark-text-muted: rgb(115, 81, 69);
  --dark-text-muted-x: 115,81,69;
  --dark-text-x: 101,71,53;
  --dark0: rgb(40, 40, 40);
  --dark0-hard: rgb(29, 32, 33);
  --dark0-hard-x: 29,32,33;
  --dark0-soft: rgb(50, 48, 47);
  --dark0-soft-x: 50,48,47;
  --dark0-x: 40,40,40;
  --dark1: rgb(60, 56, 54);
  --dark1-x: 60,56,54;
  --dark2: rgb(80, 73, 69);
  --dark2-x: 80,73,69;
  --dark3: rgb(102, 92, 84);
  --dark3-x: 102,92,84;
  --dark4: rgb(124, 111, 100);
  --dark4-x: 124,111,100;
  --darkgray: var(--text-normal, var(--light-text, rgb(212, 190, 152)));
  --dataview-key: var(--text-faint, rgb(235, 219, 178));
  --dataview-key-background: rgba(var(--faded-red-x), 0.5);
  --dataview-value: var(--text-faint, rgb(235, 219, 178));
  --dataview-value-background: rgba(var(--neutral-green-x), 0.3);
  --divider-color: var(--background-modifier-border, rgb(60, 56, 54));
  --divider-color-hover: var(--interactive-accent, hsl(166, 23%, 58%));
  --embed-border-left: 6px double var(--interactive-accent);
  --faded-aqua: rgb(76, 122, 93);
  --faded-aqua-x: 76,122,93;
  --faded-blue: rgb(69, 112, 122);
  --faded-blue-x: 69,112,122;
  --faded-green: rgb(108, 120, 46);
  --faded-green-x: 108,120,46;
  --faded-purple: rgb(148, 94, 128);
  --faded-purple-x: 148,94,128;
  --faded-red: rgb(193, 74, 74);
  --faded-red-x: 193,74,74;
  --faded-yellow: rgb(195, 94, 10);
  --faded-yellow-x: 195,94,10;
  --file-header-background: var(--background-primary, rgb(40, 40, 40));
  --file-header-background-focused: var(--background-primary, rgb(40, 40, 40));
  --flair-color: var(--text-normal, rgb(212, 190, 152));
  --flashing-background: rgba(var(--neutral-red-x), 0.3);
  --footnote-divider-color: var(--metadata-divider-color, rgb(60, 56, 54));
  --footnote-id-color: var(--text-muted, rgb(213, 196, 161));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(235, 219, 178));
  --graph-line: var(--dark2, rgb(80, 73, 69));
  --graph-node: var(--light3, rgb(189, 174, 147));
  --graph-node-attachment: var(--neutral-green, rgb(169, 182, 101));
  --graph-node-focused: var(--text-accent, rgb(231, 138, 78));
  --graph-node-tag: var(--neutral-red, rgb(234, 105, 98));
  --graph-node-unresolved: var(--text-faint, rgb(235, 219, 178));
  --graph-text: var(--text-normal, rgb(212, 190, 152));
  --gray: rgb(146, 131, 116);
  --gray-x: 146,131,116;
  --h1-color: var(--neutral-red, rgb(234, 105, 98));
  --h2-color: var(--neutral-yellow, rgb(231, 138, 78));
  --h3-color: var(--neutral-green, rgb(169, 182, 101));
  --h4-color: var(--neutral-aqua, rgb(137, 180, 130));
  --h5-color: var(--neutral-blue, rgb(125, 174, 163));
  --h6-color: var(--neutral-purple, rgb(211, 134, 155));
  --heading-formatting: var(--text-faint, rgb(235, 219, 178));
  --highlight: var(--text-highlight-bg, var(--neutral-yellow, rgb(231, 138, 78)));
  --hr-color: var(--background-modifier-border, rgb(60, 56, 54));
  --icon-color: var(--text-muted, rgb(213, 196, 161));
  --icon-color-active: var(--text-accent, rgb(231, 138, 78));
  --icon-color-focused: var(--neutral-blue, rgb(125, 174, 163));
  --icon-color-hover: var(--neutral-red, rgb(234, 105, 98));
  --inline-title-color: var(--neutral-yellow, rgb(231, 138, 78));
  --input-date-separator: var(--text-faint, rgb(235, 219, 178));
  --input-placeholder-color: var(--text-faint, rgb(235, 219, 178));
  --interactive-accent: var(--color-accent, hsl(166, 23%, 58%));
  --interactive-accent-hover: var(--color-accent-1, hsl(163, 23.46%, 66.7%));
  --interactive-accent-hsl: var(--color-accent-hsl, 166, 23%, 58%);
  --italic-color: var(--neutral-yellow, rgb(231, 138, 78));
  --light: var(--background-primary, var(--dark0, rgb(40, 40, 40)));
  --light-text: rgb(212, 190, 152);
  --light-text-x: 212,190,152;
  --light0: rgb(251, 241, 199);
  --light0-hard: rgb(249, 245, 215);
  --light0-hard-x: 249,245,215;
  --light0-soft: rgb(242, 229, 188);
  --light0-soft-x: 242,229,188;
  --light0-x: 251,241,199;
  --light1: rgb(235, 219, 178);
  --light1-x: 235,219,178;
  --light2: rgb(213, 196, 161);
  --light2-x: 213,196,161;
  --light3: rgb(189, 174, 147);
  --light3-x: 189,174,147;
  --light4: rgb(168, 153, 132);
  --light4-x: 168,153,132;
  --lightgray: var(--background-secondary, var(--dark0-hard, rgb(29, 32, 33)));
  --link-color: var(--text-accent, rgb(231, 138, 78));
  --link-color-hover: var(--text-accent-hover, rgb(195, 94, 10));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, rgb(231, 138, 78));
  --link-external-color-hover: var(--text-accent-hover, rgb(195, 94, 10));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-accent, rgb(231, 138, 78));
  --list-marker-color: var(--text-faint, rgb(235, 219, 178));
  --list-marker-color-collapsed: var(--text-accent, rgb(231, 138, 78));
  --list-marker-color-hover: var(--text-muted, rgb(213, 196, 161));
  --menu-background: var(--background-secondary, rgb(29, 32, 33));
  --mermaid-actor: var(--dark2, rgb(80, 73, 69));
  --mermaid-loopline: var(--neutral-blue, rgb(125, 174, 163));
  --mermaid-note: var(--neutral-blue, rgb(125, 174, 163));
  --metadata-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --metadata-divider-color: var(--background-modifier-border, rgb(60, 56, 54));
  --metadata-input-text-color: var(--text-normal, rgb(212, 190, 152));
  --metadata-label-text-color: var(--text-muted, rgb(213, 196, 161));
  --metadata-label-text-color-hover: var(--text-muted, rgb(213, 196, 161));
  --modal-background: var(--background-primary, rgb(40, 40, 40));
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(235, 219, 178));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(235, 219, 178));
  --nav-file-tag: rgba(var(--neutral-yellow-x), 0.9);
  --nav-heading-color: var(--text-normal, rgb(212, 190, 152));
  --nav-heading-color-collapsed: var(--text-faint, rgb(235, 219, 178));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(213, 196, 161));
  --nav-heading-color-hover: var(--text-normal, rgb(212, 190, 152));
  --nav-item-color: var(--text-muted, rgb(213, 196, 161));
  --nav-item-color-active: var(--neutral-aqua, rgb(137, 180, 130));
  --nav-item-color-highlighted: var(--text-accent, rgb(231, 138, 78));
  --nav-item-color-hover: var(--neutral-red, rgb(234, 105, 98));
  --nav-item-color-selected: var(--text-normal, rgb(212, 190, 152));
  --nav-tag-color: var(--text-faint, rgb(235, 219, 178));
  --nav-tag-color-active: var(--text-muted, rgb(213, 196, 161));
  --nav-tag-color-hover: var(--text-muted, rgb(213, 196, 161));
  --neutral-aqua: rgb(137, 180, 130);
  --neutral-aqua-x: 137,180,130;
  --neutral-blue: rgb(125, 174, 163);
  --neutral-blue-x: 125,174,163;
  --neutral-green: rgb(169, 182, 101);
  --neutral-green-x: 169,182,101;
  --neutral-purple: rgb(211, 134, 155);
  --neutral-purple-x: 211,134,155;
  --neutral-red: rgb(234, 105, 98);
  --neutral-red-x: 234,105,98;
  --neutral-yellow: rgb(231, 138, 78);
  --neutral-yellow-x: 231,138,78;
  --pdf-background: var(--background-primary, rgb(40, 40, 40));
  --pdf-page-background: var(--background-primary, rgb(40, 40, 40));
  --pdf-sidebar-background: var(--background-primary, rgb(40, 40, 40));
  --pill-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --pill-color: var(--text-muted, rgb(213, 196, 161));
  --pill-color-hover: var(--text-normal, rgb(212, 190, 152));
  --pill-color-remove: var(--text-faint, rgb(235, 219, 178));
  --pill-color-remove-hover: var(--text-accent, rgb(231, 138, 78));
  --prompt-background: var(--background-primary, rgb(40, 40, 40));
  --ribbon-background: var(--background-secondary, rgb(29, 32, 33));
  --ribbon-background-collapsed: var(--background-primary, rgb(40, 40, 40));
  --search-clear-button-color: var(--text-muted, rgb(213, 196, 161));
  --search-icon-color: var(--text-muted, rgb(213, 196, 161));
  --search-result-background: var(--background-primary, rgb(40, 40, 40));
  --secondary: var(--text-accent, var(--neutral-yellow, rgb(231, 138, 78)));
  --setting-group-heading-color: var(--text-normal, rgb(212, 190, 152));
  --setting-items-background: var(--background-primary-alt, rgb(50, 48, 47));
  --setting-items-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(213, 196, 161));
  --shiki-code-background: var(--code-background, rgb(60, 56, 54));
  --shiki-code-comment: var(--text-faint, rgb(235, 219, 178));
  --shiki-code-function: var(--color-green, rgb(169, 182, 101));
  --shiki-code-important: var(--color-orange, rgb(195, 94, 10));
  --shiki-code-keyword: var(--color-pink, rgb(211, 134, 155));
  --shiki-code-normal: var(--text-muted, rgb(213, 196, 161));
  --shiki-code-property: var(--color-cyan, rgb(125, 174, 163));
  --shiki-code-punctuation: var(--text-muted, rgb(213, 196, 161));
  --shiki-code-string: var(--color-yellow, rgb(231, 138, 78));
  --shiki-code-value: var(--color-purple, rgb(211, 134, 155));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --shiki-gutter-text-color: var(--text-faint, rgb(235, 219, 178));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(213, 196, 161));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(213, 196, 161));
  --shiki-terminal-dots-color: var(--text-faint, rgb(235, 219, 178));
  --slider-track-background: var(--background-modifier-border, rgb(60, 56, 54));
  --status-bar-background: var(--background-secondary, rgb(29, 32, 33));
  --status-bar-border-color: var(--divider-color, rgb(60, 56, 54));
  --status-bar-text-color: var(--text-muted, rgb(213, 196, 161));
  --suggestion-background: var(--background-primary, rgb(40, 40, 40));
  --sync-avatar-color-1: var(--color-red, rgb(234, 105, 98));
  --sync-avatar-color-2: var(--color-orange, rgb(195, 94, 10));
  --sync-avatar-color-3: var(--color-yellow, rgb(231, 138, 78));
  --sync-avatar-color-4: var(--color-green, rgb(169, 182, 101));
  --sync-avatar-color-5: var(--color-cyan, rgb(125, 174, 163));
  --sync-avatar-color-6: var(--color-blue, rgb(69, 112, 122));
  --sync-avatar-color-7: var(--color-purple, rgb(211, 134, 155));
  --sync-avatar-color-8: var(--color-pink, rgb(211, 134, 155));
  --tab-background-active: var(--background-primary, rgb(40, 40, 40));
  --tab-container-background: var(--background-secondary, rgb(29, 32, 33));
  --tab-font-weight: 600;
  --tab-outline-color: var(--divider-color, rgb(60, 56, 54));
  --tab-switcher-background: var(--background-secondary, rgb(29, 32, 33));
  --tab-text-color: var(--text-faint, rgb(235, 219, 178));
  --tab-text-color-active: var(--text-muted, rgb(213, 196, 161));
  --tab-text-color-focused: var(--text-muted, rgb(213, 196, 161));
  --tab-text-color-focused-active: var(--neutral-yellow, rgb(231, 138, 78));
  --tab-text-color-focused-active-current: var(--neutral-red, rgb(234, 105, 98));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(231, 138, 78));
  --table-add-button-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --table-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(166, 23%, 58%));
  --table-drag-handle-color: var(--text-faint, rgb(235, 219, 178));
  --table-header-background: rgba(var(--dark0-x), 0.2);
  --table-header-background-hover: var(--dark2, rgb(80, 73, 69));
  --table-header-border-color: var(--table-border-color, rgb(60, 56, 54));
  --table-header-color: var(--text-normal, rgb(212, 190, 152));
  --table-row-background-hover: var(--dark2, rgb(80, 73, 69));
  --table-row-even-background: rgba(var(--dark2-x), 0.2);
  --table-row-odd-background: rgba(var(--dark2-x), 0.4);
  --table-selection-border-color: var(--interactive-accent, hsl(166, 23%, 58%));
  --tag-background: var(--dark2, rgb(80, 73, 69));
  --tag-background-hover: var(--dark1, rgb(60, 56, 54));
  --tag-color: var(--neutral-aqua, rgb(137, 180, 130));
  --tag-color-hover: var(--text-accent, rgb(231, 138, 78));
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --tertiary: var(--text-accent-hover, var(--faded-yellow, rgb(195, 94, 10)));
  --text-accent: var(--neutral-yellow, rgb(231, 138, 78));
  --text-accent-hover: var(--faded-yellow, rgb(195, 94, 10));
  --text-error: var(--color-red, rgb(234, 105, 98));
  --text-faint: var(--light1, rgb(235, 219, 178));
  --text-highlight-bg: var(--neutral-yellow, rgb(231, 138, 78));
  --text-highlight-fg: var(--dark0-hard, rgb(29, 32, 33));
  --text-muted: var(--light2, rgb(213, 196, 161));
  --text-normal: var(--light-text, rgb(212, 190, 152));
  --text-selection: rgba(var(--neutral-red-x), 0.6);
  --text-success: var(--color-green, rgb(169, 182, 101));
  --text-warning: var(--color-orange, rgb(195, 94, 10));
  --textHighlight: var(--text-highlight-bg, var(--neutral-yellow, rgb(231, 138, 78)));
  --titlebar-background: var(--background-secondary, rgb(29, 32, 33));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(60, 56, 54));
  --titlebar-border-color: var(--background-modifier-border, rgb(60, 56, 54));
  --titlebar-text-color: var(--text-muted, rgb(213, 196, 161));
  --titlebar-text-color-focused: var(--neutral-red, rgb(234, 105, 98));
  --vault-profile-color: var(--text-normal, rgb(212, 190, 152));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(212, 190, 152));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(29, 32, 33));
  background-color: var(--tab-container-background, rgb(29, 32, 33));
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(40, 40, 40));
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(29, 32, 33));
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(60, 56, 54);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(29, 32, 33));
  background-color: var(--tab-container-background, rgb(29, 32, 33));
  border-left-color: rgb(60, 56, 54);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body html {
  --dark-text: rgb(var(--dark-text-x));
  --dark-text-faint: rgb(var(--dark-text-faint-x));
  --dark-text-faint-x: 179,126,93;
  --dark-text-muted: rgb(var(--dark-text-muted-x));
  --dark-text-muted-x: 115,81,69;
  --dark-text-x: 101,71,53;
  --dark0: rgb(var(--dark0-x));
  --dark0-hard: rgb(var(--dark0-hard-x));
  --dark0-hard-x: 29,32,33;
  --dark0-soft: rgb(var(--dark0-soft-x));
  --dark0-soft-x: 50,48,47;
  --dark0-x: 40,40,40;
  --dark1: rgb(var(--dark1-x));
  --dark1-x: 60,56,54;
  --dark2: rgb(var(--dark2-x));
  --dark2-x: 80,73,69;
  --dark3: rgb(var(--dark3-x));
  --dark3-x: 102,92,84;
  --dark4: rgb(var(--dark4-x));
  --dark4-x: 124,111,100;
  --faded-aqua: rgb(var(--faded-aqua-x));
  --faded-aqua-x: 76,122,93;
  --faded-blue: rgb(var(--faded-blue-x));
  --faded-blue-x: 69,112,122;
  --faded-green: rgb(var(--faded-green-x));
  --faded-green-x: 108,120,46;
  --faded-purple: rgb(var(--faded-purple-x));
  --faded-purple-x: 148,94,128;
  --faded-red: rgb(var(--faded-red-x));
  --faded-red-x: 193,74,74;
  --faded-yellow: rgb(var(--faded-yellow-x));
  --faded-yellow-x: 195,94,10;
  --gray: rgb(var(--gray-x));
  --gray-x: 146,131,116;
  --light-text: rgb(var(--light-text-x));
  --light-text-x: 212,190,152;
  --light0: rgb(var(--light0-x));
  --light0-hard: rgb(var(--light0-hard-x));
  --light0-hard-x: 249,245,215;
  --light0-soft: rgb(var(--light0-soft-x));
  --light0-soft-x: 242,229,188;
  --light0-x: 251,241,199;
  --light1: rgb(var(--light1-x));
  --light1-x: 235,219,178;
  --light2: rgb(var(--light2-x));
  --light2-x: 213,196,161;
  --light3: rgb(var(--light3-x));
  --light3-x: 189,174,147;
  --light4: rgb(var(--light4-x));
  --light4-x: 168,153,132;
  --neutral-aqua: rgb(var(--neutral-aqua-x));
  --neutral-aqua-x: 137,180,130;
  --neutral-blue: rgb(var(--neutral-blue-x));
  --neutral-blue-x: 125,174,163;
  --neutral-green: rgb(var(--neutral-green-x));
  --neutral-green-x: 169,182,101;
  --neutral-purple: rgb(var(--neutral-purple-x));
  --neutral-purple-x: 211,134,155;
  --neutral-red: rgb(var(--neutral-red-x));
  --neutral-red-x: 234,105,98;
  --neutral-yellow: rgb(var(--neutral-yellow-x));
  --neutral-yellow-x: 231,138,78;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(231, 138, 78));
  color: var(--text-highlight-fg, rgb(29, 32, 33));
  outline: rgb(29, 32, 33) none 0px;
  text-decoration-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body del {
  color: rgb(212, 190, 152);
  outline: rgb(212, 190, 152) none 0px;
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(212, 190, 152));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(168, 153, 132);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(168, 153, 132));
  border-color: rgb(168, 153, 132);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(213, 196, 161));
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgba(123, 173, 161, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(123, 173, 161, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body dt {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(235, 219, 178));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(29, 32, 33);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(29, 32, 33);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(29, 32, 33);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(29, 32, 33);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--table-row-even-background, rgba(80, 73, 69, 0.2));
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-odd-background, rgba(80, 73, 69, 0.4));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(60, 56, 54);
  color: var(--table-text-color, rgb(212, 190, 152));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
  color: var(--table-header-color, rgb(212, 190, 152));
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(60, 56, 54);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgba(40, 40, 40, 0.2));
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(29, 32, 33);
  border-right-color: rgb(29, 32, 33);
  border-top-color: rgb(29, 32, 33);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(60, 56, 54));
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: var(--code-normal, rgb(125, 174, 163));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(60, 56, 54));
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(60, 56, 54));
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(234, 105, 98);
  border-left-color: rgb(234, 105, 98);
  border-right-color: rgb(234, 105, 98);
  border-top-color: rgb(234, 105, 98);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(50, 48, 47));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(123, 173, 161);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(168, 153, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 153, 132);
  border-right-color: rgb(168, 153, 132);
  border-top-color: rgb(168, 153, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgba(213, 196, 161, 0.5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgba(213, 196, 161, 0.5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(212, 190, 152);
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 94, 10);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(125, 174, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 105, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 105, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 105, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 105, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(231, 138, 78);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(211, 134, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(234, 105, 98);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(169, 182, 101);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(169, 182, 101);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(169, 182, 101);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 125,174,163);
  background: rgba(125, 174, 163, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 234,105,98);
  background: rgba(234, 105, 98, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 234,105,98);
  background: rgba(234, 105, 98, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 211,134,155);
  background: rgba(211, 134, 155, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(211, 134, 155, 0.25);
  border-left-color: rgba(211, 134, 155, 0.25);
  border-right-color: rgba(211, 134, 155, 0.25);
  border-top-color: rgba(211, 134, 155, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 234,105,98);
  background: rgba(234, 105, 98, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(234, 105, 98, 0.25);
  border-left-color: rgba(234, 105, 98, 0.25);
  border-right-color: rgba(234, 105, 98, 0.25);
  border-top-color: rgba(234, 105, 98, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 69,112,122);
  background: rgba(69, 112, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 69,112,122);
  background: rgba(69, 112, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 195,94,10);
  background: rgba(195, 94, 10, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 169,182,101);
  background: rgba(169, 182, 101, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(169, 182, 101, 0.25);
  border-left-color: rgba(169, 182, 101, 0.25);
  border-right-color: rgba(169, 182, 101, 0.25);
  border-top-color: rgba(169, 182, 101, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 125,174,163);
  background: rgba(125, 174, 163, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 69,112,122);
  background: rgba(69, 112, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 195,94,10);
  background: rgba(195, 94, 10, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(212, 190, 152);
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
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: var(--text-normal, rgb(212, 190, 152));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(40, 40, 40));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(212, 190, 152);
  outline: rgb(212, 190, 152) none 0px;
  text-decoration-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgb(80, 73, 69));
  --pill-background-hover: var(--tag-background-hover, rgb(60, 56, 54));
  --pill-border-color: var(--tag-border-color, hsla(166, 23%, 58%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(166, 23%, 58%, 0.15));
  --pill-color: var(--tag-color, rgb(137, 180, 130));
  --pill-color-hover: var(--tag-color-hover, rgb(231, 138, 78));
  --pill-color-remove: var(--tag-color, rgb(137, 180, 130));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(231, 138, 78));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, .5em);
  --pill-padding-y: var(--tag-padding-y, .2em);
  --pill-radius: var(--tag-radius, .5em);
  background-color: var(--pill-background, rgb(80, 73, 69));
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(137, 180, 130);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(234, 105, 98));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(231, 138, 78));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(231, 138, 78));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(231, 138, 78));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(169, 182, 101));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(137, 180, 130));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(125, 174, 163));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(211, 134, 155));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 69,112,122);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(213, 196, 161));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(213, 196, 161));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(212, 190, 152);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--icon-color, rgb(213, 196, 161));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(29, 32, 33));
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: var(--status-bar-text-color, rgb(213, 196, 161));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(213, 196, 161);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(213, 196, 161));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(213, 196, 161));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--icon-color, rgb(213, 196, 161));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(213, 196, 161);
  stroke: rgb(213, 196, 161);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(235, 219, 178));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(212, 190, 152));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(29, 32, 33));
  border-color: rgb(212, 190, 152);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(29, 32, 33);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-odd-background, rgba(80, 73, 69, 0.4));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(29, 32, 33);
  color: var(--table-header-color, rgb(212, 190, 152));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: var(--text-muted, rgb(213, 196, 161));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgb(80, 73, 69));
  --pill-background-hover: var(--tag-background-hover, rgb(60, 56, 54));
  --pill-border-color: var(--tag-border-color, hsla(166, 23%, 58%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(166, 23%, 58%, 0.15));
  --pill-color: var(--tag-color, rgb(137, 180, 130));
  --pill-color-hover: var(--tag-color-hover, rgb(231, 138, 78));
  --pill-color-remove: var(--tag-color, rgb(137, 180, 130));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(231, 138, 78));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, .5em);
  --pill-padding-y: var(--tag-padding-y, .2em);
  --pill-radius: var(--tag-radius, .5em);
  background-color: var(--pill-background, rgb(80, 73, 69));
  border-radius: 7px;
  color: var(--pill-color, rgb(137, 180, 130));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(213, 196, 161);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(40, 40, 40));
  color: var(--text-normal, rgb(212, 190, 152));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(29, 32, 33));
  border-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(60, 56, 54));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(212, 190, 152);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(29, 32, 33));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(212, 190, 152));
}

html[saved-theme="dark"] body abbr {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--text-normal, rgb(213, 196, 161));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(60, 56, 54));
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: var(--code-normal, rgb(125, 174, 163));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(212, 190, 152);
  border-left-color: rgb(212, 190, 152);
  border-right-color: rgb(212, 190, 152);
  border-top-color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body sub {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body summary {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body sup {
  color: rgb(212, 190, 152);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgb(80, 73, 69));
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: var(--tag-color, rgb(137, 180, 130));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 166;
  --accent-l: 58%;
  --accent-s: 23%;
  --background-accent: var(--light0-soft, rgb(242, 229, 188));
  --background-modifier-border: var(--light2, rgb(213, 196, 161));
  --background-modifier-error: var(--color-red, rgb(193, 74, 74));
  --background-modifier-error-hover: var(--color-red, rgb(193, 74, 74));
  --background-modifier-error-rgb: var(--color-red-rgb, 193,74,74);
  --background-modifier-success: var(--color-green, rgb(108, 120, 46));
  --background-modifier-success-rgb: var(--color-green-rgb, 108,120,46);
  --background-primary: var(--light0-hard, rgb(249, 245, 215));
  --background-primary-alt: var(--light0-hard, rgb(249, 245, 215));
  --background-secondary: var(--light1, rgb(235, 219, 178));
  --background-secondary-alt: var(--light1, rgb(235, 219, 178));
  --bases-cards-background: var(--background-primary, rgb(249, 245, 215));
  --bases-cards-cover-background: var(--background-primary-alt, rgb(249, 245, 215));
  --bases-embed-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --bases-group-heading-property-color: var(--text-muted, rgb(115, 81, 69));
  --bases-table-border-color: var(--table-border-color, rgb(213, 196, 161));
  --bases-table-cell-background-active: var(--background-primary, rgb(249, 245, 215));
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(249, 245, 215));
  --bases-table-cell-background-selected: var(--table-selection, hsla(166, 23%, 58%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, rgb(249, 245, 215));
  --bases-table-header-background: var(--background-primary, rgb(249, 245, 215));
  --bases-table-header-color: var(--text-muted, rgb(115, 81, 69));
  --bases-table-row-background-hover: var(--table-row-background-hover, rgb(213, 196, 161));
  --bases-table-summary-background: var(--background-primary, rgb(249, 245, 215));
  --blockquote-border-color: var(--interactive-accent, hsl(165, 23.23%, 62.35%));
  --bold-color: var(--faded-yellow, rgb(195, 94, 10));
  --calendar-background-hover: var(--light1, rgb(235, 219, 178));
  --calendar-hover: var(--neutral-red, rgb(234, 105, 98));
  --calendar-today: var(--neutral-red, rgb(234, 105, 98));
  --calendar-week: var(--neutral-red, rgb(234, 105, 98));
  --callout-bug: var(--color-red-rgb, 193,74,74);
  --callout-default: var(--color-blue-rgb, 69,112,122);
  --callout-error: var(--color-red-rgb, 193,74,74);
  --callout-example: var(--color-purple-rgb, 148,94,128);
  --callout-fail: var(--color-red-rgb, 193,74,74);
  --callout-important: var(--color-cyan-rgb, 125,174,163);
  --callout-info: var(--color-blue-rgb, 69,112,122);
  --callout-question: var(--color-orange-rgb, 195,94,10);
  --callout-success: var(--color-green-rgb, 108,120,46);
  --callout-summary: var(--color-cyan-rgb, 125,174,163);
  --callout-tip: var(--color-cyan-rgb, 125,174,163);
  --callout-todo: var(--color-blue-rgb, 69,112,122);
  --callout-warning: var(--color-orange-rgb, 195,94,10);
  --canvas-background: var(--background-primary, rgb(249, 245, 215));
  --canvas-card-label-color: var(--text-faint, rgb(179, 126, 93));
  --canvas-color-1: var(--color-red-rgb, 193,74,74);
  --canvas-color-2: var(--color-orange-rgb, 195,94,10);
  --canvas-color-3: var(--color-yellow-rgb, 231,138,78);
  --canvas-color-4: var(--color-green-rgb, 108,120,46);
  --canvas-color-5: var(--color-cyan-rgb, 125,174,163);
  --canvas-color-6: var(--color-purple-rgb, 148,94,128);
  --caret-color: var(--text-normal, rgb(101, 71, 53));
  --checkbox-border-color: var(--light4, rgb(168, 153, 132));
  --checkbox-border-color-hover: var(--light4, rgb(168, 153, 132));
  --checkbox-color: var(--light4, rgb(168, 153, 132));
  --checkbox-color-hover: var(--light4, rgb(168, 153, 132));
  --checkbox-marker-color: var(--background-primary, rgb(249, 245, 215));
  --checkbox-radius: var(--radius-s, 0);
  --checklist-done-color: rgba(var(--dark2-x), 0.4);
  --code-background: var(--light1, rgb(235, 219, 178));
  --code-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --code-comment: var(--text-faint, rgb(179, 126, 93));
  --code-function: var(--color-yellow, rgb(231, 138, 78));
  --code-important: var(--color-orange, rgb(195, 94, 10));
  --code-keyword: var(--color-pink, rgb(148, 94, 128));
  --code-normal: var(--neutral-blue, rgb(125, 174, 163));
  --code-operator: var(--color-red, rgb(193, 74, 74));
  --code-property: var(--color-cyan, rgb(125, 174, 163));
  --code-punctuation: var(--text-muted, rgb(115, 81, 69));
  --code-string: var(--color-green, rgb(108, 120, 46));
  --code-tag: var(--color-red, rgb(193, 74, 74));
  --code-value: var(--color-purple, rgb(148, 94, 128));
  --collapse-icon-color: var(--text-faint, rgb(179, 126, 93));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(231, 138, 78));
  --color-blue: var(--faded-blue, rgb(69, 112, 122));
  --color-blue-rgb: var(--faded-blue-x, 69,112,122);
  --color-cyan: var(--neutral-blue, rgb(125, 174, 163));
  --color-cyan-rgb: var(--neutral-blue-x, 125,174,163);
  --color-green: var(--faded-green, rgb(108, 120, 46));
  --color-green-rgb: var(--faded-green-x, 108,120,46);
  --color-orange: var(--faded-yellow, rgb(195, 94, 10));
  --color-orange-rgb: var(--faded-yellow-x, 195,94,10);
  --color-pink: var(--faded-purple, rgb(148, 94, 128));
  --color-pink-rgb: var(--faded-purple-x, 148,94,128);
  --color-purple: var(--faded-purple, rgb(148, 94, 128));
  --color-purple-rgb: var(--faded-purple-x, 148,94,128);
  --color-red: var(--faded-red, rgb(193, 74, 74));
  --color-red-rgb: var(--faded-red-x, 193,74,74);
  --color-yellow: var(--neutral-yellow, rgb(231, 138, 78));
  --color-yellow-rgb: var(--neutral-yellow-x, 231,138,78);
  --cursor-line-background: rgba(var(--light1-x), 0.5);
  --dark: var(--text-normal, var(--dark-text, rgb(101, 71, 53)));
  --dark-text: rgb(101, 71, 53);
  --dark-text-faint: rgb(179, 126, 93);
  --dark-text-faint-x: 179,126,93;
  --dark-text-muted: rgb(115, 81, 69);
  --dark-text-muted-x: 115,81,69;
  --dark-text-x: 101,71,53;
  --dark0: rgb(40, 40, 40);
  --dark0-hard: rgb(29, 32, 33);
  --dark0-hard-x: 29,32,33;
  --dark0-soft: rgb(50, 48, 47);
  --dark0-soft-x: 50,48,47;
  --dark0-x: 40,40,40;
  --dark1: rgb(60, 56, 54);
  --dark1-x: 60,56,54;
  --dark2: rgb(80, 73, 69);
  --dark2-x: 80,73,69;
  --dark3: rgb(102, 92, 84);
  --dark3-x: 102,92,84;
  --dark4: rgb(124, 111, 100);
  --dark4-x: 124,111,100;
  --darkgray: var(--text-normal, var(--dark-text, rgb(101, 71, 53)));
  --dataview-key: var(--text-faint, rgb(179, 126, 93));
  --dataview-key-background: rgba(var(--faded-red-x), 0.3);
  --dataview-value: var(--text-faint, rgb(179, 126, 93));
  --dataview-value-background: rgba(var(--neutral-green-x), 0.2);
  --divider-color: var(--background-modifier-border, rgb(213, 196, 161));
  --divider-color-hover: var(--interactive-accent, hsl(165, 23.23%, 62.35%));
  --embed-border-left: 6px double var(--interactive-accent);
  --faded-aqua: rgb(76, 122, 93);
  --faded-aqua-x: 76,122,93;
  --faded-blue: rgb(69, 112, 122);
  --faded-blue-x: 69,112,122;
  --faded-green: rgb(108, 120, 46);
  --faded-green-x: 108,120,46;
  --faded-purple: rgb(148, 94, 128);
  --faded-purple-x: 148,94,128;
  --faded-red: rgb(193, 74, 74);
  --faded-red-x: 193,74,74;
  --faded-yellow: rgb(195, 94, 10);
  --faded-yellow-x: 195,94,10;
  --file-header-background: var(--background-primary, rgb(249, 245, 215));
  --file-header-background-focused: var(--background-primary, rgb(249, 245, 215));
  --flair-color: var(--text-normal, rgb(101, 71, 53));
  --flashing-background: rgba(var(--neutral-red-x), 0.3);
  --footnote-divider-color: var(--metadata-divider-color, rgb(213, 196, 161));
  --footnote-id-color: var(--text-muted, rgb(115, 81, 69));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(179, 126, 93));
  --graph-line: var(--light3, rgb(189, 174, 147));
  --graph-node: var(--gray, rgb(146, 131, 116));
  --graph-node-attachment: var(--neutral-green, rgb(169, 182, 101));
  --graph-node-focused: var(--text-accent, rgb(231, 138, 78));
  --graph-node-tag: var(--faded-red, rgb(193, 74, 74));
  --graph-node-unresolved: var(--text-faint, rgb(179, 126, 93));
  --graph-text: var(--text-normal, rgb(101, 71, 53));
  --gray: rgb(146, 131, 116);
  --gray-x: 146,131,116;
  --h1-color: var(--faded-red, rgb(193, 74, 74));
  --h2-color: var(--faded-yellow, rgb(195, 94, 10));
  --h3-color: var(--faded-green, rgb(108, 120, 46));
  --h4-color: var(--faded-aqua, rgb(76, 122, 93));
  --h5-color: var(--faded-blue, rgb(69, 112, 122));
  --h6-color: var(--faded-purple, rgb(148, 94, 128));
  --heading-formatting: var(--text-faint, rgb(179, 126, 93));
  --highlight: var(--text-highlight-bg, var(--faded-yellow, rgb(195, 94, 10)));
  --hr-color: var(--background-modifier-border, rgb(213, 196, 161));
  --icon-color: var(--text-muted, rgb(115, 81, 69));
  --icon-color-active: var(--text-accent, rgb(231, 138, 78));
  --icon-color-focused: var(--neutral-blue, rgb(125, 174, 163));
  --icon-color-hover: var(--neutral-red, rgb(234, 105, 98));
  --inline-title-color: var(--neutral-yellow, rgb(231, 138, 78));
  --input-date-separator: var(--text-faint, rgb(179, 126, 93));
  --input-placeholder-color: var(--text-faint, rgb(179, 126, 93));
  --interactive-accent: var(--color-accent-1, hsl(165, 23.23%, 62.35%));
  --interactive-accent-hover: var(--color-accent-2, hsl(163, 23.46%, 66.7%));
  --interactive-accent-hsl: var(--color-accent-hsl, 166, 23%, 58%);
  --italic-color: var(--faded-yellow, rgb(195, 94, 10));
  --light: var(--background-primary, var(--light0-hard, rgb(249, 245, 215)));
  --light-text: rgb(212, 190, 152);
  --light-text-x: 212,190,152;
  --light0: rgb(251, 241, 199);
  --light0-hard: rgb(249, 245, 215);
  --light0-hard-x: 249,245,215;
  --light0-soft: rgb(242, 229, 188);
  --light0-soft-x: 242,229,188;
  --light0-x: 251,241,199;
  --light1: rgb(235, 219, 178);
  --light1-x: 235,219,178;
  --light2: rgb(213, 196, 161);
  --light2-x: 213,196,161;
  --light3: rgb(189, 174, 147);
  --light3-x: 189,174,147;
  --light4: rgb(168, 153, 132);
  --light4-x: 168,153,132;
  --lightgray: var(--background-secondary, var(--light1, rgb(235, 219, 178)));
  --link-color: var(--text-accent, rgb(231, 138, 78));
  --link-color-hover: var(--text-accent-hover, rgb(195, 94, 10));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, rgb(231, 138, 78));
  --link-external-color-hover: var(--text-accent-hover, rgb(195, 94, 10));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-accent, rgb(231, 138, 78));
  --list-marker-color: var(--text-faint, rgb(179, 126, 93));
  --list-marker-color-collapsed: var(--text-accent, rgb(231, 138, 78));
  --list-marker-color-hover: var(--text-muted, rgb(115, 81, 69));
  --menu-background: var(--background-secondary, rgb(235, 219, 178));
  --mermaid-actor: var(--light3, rgb(189, 174, 147));
  --mermaid-loopline: var(--faded-blue, rgb(69, 112, 122));
  --mermaid-note: var(--neutral-blue, rgb(125, 174, 163));
  --metadata-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --metadata-divider-color: var(--background-modifier-border, rgb(213, 196, 161));
  --metadata-input-text-color: var(--text-normal, rgb(101, 71, 53));
  --metadata-label-text-color: var(--text-muted, rgb(115, 81, 69));
  --metadata-label-text-color-hover: var(--text-muted, rgb(115, 81, 69));
  --modal-background: var(--background-primary, rgb(249, 245, 215));
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(179, 126, 93));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(179, 126, 93));
  --nav-file-tag: rgba(var(--faded-blue-x), 0.9);
  --nav-heading-color: var(--text-normal, rgb(101, 71, 53));
  --nav-heading-color-collapsed: var(--text-faint, rgb(179, 126, 93));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(115, 81, 69));
  --nav-heading-color-hover: var(--text-normal, rgb(101, 71, 53));
  --nav-item-color: var(--text-muted, rgb(115, 81, 69));
  --nav-item-color-active: var(--faded-blue, rgb(69, 112, 122));
  --nav-item-color-highlighted: var(--text-accent, rgb(231, 138, 78));
  --nav-item-color-hover: var(--neutral-red, rgb(234, 105, 98));
  --nav-item-color-selected: var(--text-normal, rgb(101, 71, 53));
  --nav-tag-color: var(--text-faint, rgb(179, 126, 93));
  --nav-tag-color-active: var(--text-muted, rgb(115, 81, 69));
  --nav-tag-color-hover: var(--text-muted, rgb(115, 81, 69));
  --neutral-aqua: rgb(137, 180, 130);
  --neutral-aqua-x: 137,180,130;
  --neutral-blue: rgb(125, 174, 163);
  --neutral-blue-x: 125,174,163;
  --neutral-green: rgb(169, 182, 101);
  --neutral-green-x: 169,182,101;
  --neutral-purple: rgb(211, 134, 155);
  --neutral-purple-x: 211,134,155;
  --neutral-red: rgb(234, 105, 98);
  --neutral-red-x: 234,105,98;
  --neutral-yellow: rgb(231, 138, 78);
  --neutral-yellow-x: 231,138,78;
  --pdf-background: var(--background-primary, rgb(249, 245, 215));
  --pdf-page-background: var(--background-primary, rgb(249, 245, 215));
  --pdf-sidebar-background: var(--background-primary, rgb(249, 245, 215));
  --pill-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --pill-color: var(--text-muted, rgb(115, 81, 69));
  --pill-color-hover: var(--text-normal, rgb(101, 71, 53));
  --pill-color-remove: var(--text-faint, rgb(179, 126, 93));
  --pill-color-remove-hover: var(--text-accent, rgb(231, 138, 78));
  --prompt-background: var(--background-primary, rgb(249, 245, 215));
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(249, 245, 215) 65%, transparent) linear-gradient(rgb(249, 245, 215), color-mix(in srgb, rgb(249, 245, 215) 65%, transparent)));
  --ribbon-background: var(--background-secondary, rgb(235, 219, 178));
  --ribbon-background-collapsed: var(--background-primary, rgb(249, 245, 215));
  --search-clear-button-color: var(--text-muted, rgb(115, 81, 69));
  --search-icon-color: var(--text-muted, rgb(115, 81, 69));
  --search-result-background: var(--background-primary, rgb(249, 245, 215));
  --secondary: var(--text-accent, var(--neutral-yellow, rgb(231, 138, 78)));
  --setting-group-heading-color: var(--text-normal, rgb(101, 71, 53));
  --setting-items-background: var(--background-primary-alt, rgb(249, 245, 215));
  --setting-items-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(115, 81, 69));
  --shiki-code-background: var(--code-background, rgb(235, 219, 178));
  --shiki-code-comment: var(--text-faint, rgb(179, 126, 93));
  --shiki-code-function: var(--color-green, rgb(108, 120, 46));
  --shiki-code-important: var(--color-orange, rgb(195, 94, 10));
  --shiki-code-keyword: var(--color-pink, rgb(148, 94, 128));
  --shiki-code-normal: var(--text-muted, rgb(115, 81, 69));
  --shiki-code-property: var(--color-cyan, rgb(125, 174, 163));
  --shiki-code-punctuation: var(--text-muted, rgb(115, 81, 69));
  --shiki-code-string: var(--color-yellow, rgb(231, 138, 78));
  --shiki-code-value: var(--color-purple, rgb(148, 94, 128));
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --shiki-gutter-text-color: var(--text-faint, rgb(179, 126, 93));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(115, 81, 69));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(115, 81, 69));
  --shiki-terminal-dots-color: var(--text-faint, rgb(179, 126, 93));
  --slider-track-background: var(--background-modifier-border, rgb(213, 196, 161));
  --status-bar-background: var(--background-secondary, rgb(235, 219, 178));
  --status-bar-border-color: var(--divider-color, rgb(213, 196, 161));
  --status-bar-text-color: var(--text-muted, rgb(115, 81, 69));
  --suggestion-background: var(--background-primary, rgb(249, 245, 215));
  --sync-avatar-color-1: var(--color-red, rgb(193, 74, 74));
  --sync-avatar-color-2: var(--color-orange, rgb(195, 94, 10));
  --sync-avatar-color-3: var(--color-yellow, rgb(231, 138, 78));
  --sync-avatar-color-4: var(--color-green, rgb(108, 120, 46));
  --sync-avatar-color-5: var(--color-cyan, rgb(125, 174, 163));
  --sync-avatar-color-6: var(--color-blue, rgb(69, 112, 122));
  --sync-avatar-color-7: var(--color-purple, rgb(148, 94, 128));
  --sync-avatar-color-8: var(--color-pink, rgb(148, 94, 128));
  --tab-background-active: var(--background-primary, rgb(249, 245, 215));
  --tab-container-background: var(--background-secondary, rgb(235, 219, 178));
  --tab-font-weight: 600;
  --tab-outline-color: var(--divider-color, rgb(213, 196, 161));
  --tab-switcher-background: var(--background-secondary, rgb(235, 219, 178));
  --tab-text-color: var(--text-faint, rgb(179, 126, 93));
  --tab-text-color-active: var(--text-muted, rgb(115, 81, 69));
  --tab-text-color-focused: var(--text-muted, rgb(115, 81, 69));
  --tab-text-color-focused-active: var(--neutral-yellow, rgb(231, 138, 78));
  --tab-text-color-focused-active-current: var(--neutral-red, rgb(234, 105, 98));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(231, 138, 78));
  --table-add-button-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --table-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(165, 23.23%, 62.35%));
  --table-drag-handle-color: var(--text-faint, rgb(179, 126, 93));
  --table-header-background: rgba(var(--light3-x), 0.4);
  --table-header-background-hover: var(--light2, rgb(213, 196, 161));
  --table-header-border-color: var(--table-border-color, rgb(213, 196, 161));
  --table-header-color: var(--text-normal, rgb(101, 71, 53));
  --table-row-background-hover: var(--light2, rgb(213, 196, 161));
  --table-row-even-background: rgba(var(--light1-x), 0.2);
  --table-row-odd-background: rgba(var(--light1-x), 0.7);
  --table-selection-border-color: var(--interactive-accent, hsl(165, 23.23%, 62.35%));
  --tag-background: var(--light1, rgb(235, 219, 178));
  --tag-background-hover: rgba(var(--light1-x), 0.6);
  --tag-color: var(--faded-aqua, rgb(76, 122, 93));
  --tag-color-hover: var(--text-accent, rgb(231, 138, 78));
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --tertiary: var(--text-accent-hover, var(--faded-yellow, rgb(195, 94, 10)));
  --text-accent: var(--neutral-yellow, rgb(231, 138, 78));
  --text-accent-hover: var(--faded-yellow, rgb(195, 94, 10));
  --text-error: var(--color-red, rgb(193, 74, 74));
  --text-faint: var(--dark-text-faint, rgb(179, 126, 93));
  --text-highlight-bg: var(--faded-yellow, rgb(195, 94, 10));
  --text-highlight-fg: var(--light0-hard, rgb(249, 245, 215));
  --text-muted: var(--dark-text-muted, rgb(115, 81, 69));
  --text-normal: var(--dark-text, rgb(101, 71, 53));
  --text-selection: rgba(var(--neutral-red-x), 0.6);
  --text-success: var(--color-green, rgb(108, 120, 46));
  --text-warning: var(--color-orange, rgb(195, 94, 10));
  --textHighlight: var(--text-highlight-bg, var(--faded-yellow, rgb(195, 94, 10)));
  --titlebar-background: var(--background-secondary, rgb(235, 219, 178));
  --titlebar-background-focused: var(--background-secondary-alt, rgb(235, 219, 178));
  --titlebar-border-color: var(--background-modifier-border, rgb(213, 196, 161));
  --titlebar-text-color: var(--text-muted, rgb(115, 81, 69));
  --vault-profile-color: var(--text-normal, rgb(101, 71, 53));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(101, 71, 53));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, rgb(235, 219, 178));
  background-color: var(--tab-container-background, rgb(235, 219, 178));
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(249, 245, 215));
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(235, 219, 178));
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, rgb(235, 219, 178));
  background-color: var(--tab-container-background, rgb(235, 219, 178));
  border-left-color: rgb(213, 196, 161);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body html {
  --dark-text: rgb(var(--dark-text-x));
  --dark-text-faint: rgb(var(--dark-text-faint-x));
  --dark-text-faint-x: 179,126,93;
  --dark-text-muted: rgb(var(--dark-text-muted-x));
  --dark-text-muted-x: 115,81,69;
  --dark-text-x: 101,71,53;
  --dark0: rgb(var(--dark0-x));
  --dark0-hard: rgb(var(--dark0-hard-x));
  --dark0-hard-x: 29,32,33;
  --dark0-soft: rgb(var(--dark0-soft-x));
  --dark0-soft-x: 50,48,47;
  --dark0-x: 40,40,40;
  --dark1: rgb(var(--dark1-x));
  --dark1-x: 60,56,54;
  --dark2: rgb(var(--dark2-x));
  --dark2-x: 80,73,69;
  --dark3: rgb(var(--dark3-x));
  --dark3-x: 102,92,84;
  --dark4: rgb(var(--dark4-x));
  --dark4-x: 124,111,100;
  --faded-aqua: rgb(var(--faded-aqua-x));
  --faded-aqua-x: 76,122,93;
  --faded-blue: rgb(var(--faded-blue-x));
  --faded-blue-x: 69,112,122;
  --faded-green: rgb(var(--faded-green-x));
  --faded-green-x: 108,120,46;
  --faded-purple: rgb(var(--faded-purple-x));
  --faded-purple-x: 148,94,128;
  --faded-red: rgb(var(--faded-red-x));
  --faded-red-x: 193,74,74;
  --faded-yellow: rgb(var(--faded-yellow-x));
  --faded-yellow-x: 195,94,10;
  --gray: rgb(var(--gray-x));
  --gray-x: 146,131,116;
  --light-text: rgb(var(--light-text-x));
  --light-text-x: 212,190,152;
  --light0: rgb(var(--light0-x));
  --light0-hard: rgb(var(--light0-hard-x));
  --light0-hard-x: 249,245,215;
  --light0-soft: rgb(var(--light0-soft-x));
  --light0-soft-x: 242,229,188;
  --light0-x: 251,241,199;
  --light1: rgb(var(--light1-x));
  --light1-x: 235,219,178;
  --light2: rgb(var(--light2-x));
  --light2-x: 213,196,161;
  --light3: rgb(var(--light3-x));
  --light3-x: 189,174,147;
  --light4: rgb(var(--light4-x));
  --light4-x: 168,153,132;
  --neutral-aqua: rgb(var(--neutral-aqua-x));
  --neutral-aqua-x: 137,180,130;
  --neutral-blue: rgb(var(--neutral-blue-x));
  --neutral-blue-x: 125,174,163;
  --neutral-green: rgb(var(--neutral-green-x));
  --neutral-green-x: 169,182,101;
  --neutral-purple: rgb(var(--neutral-purple-x));
  --neutral-purple-x: 211,134,155;
  --neutral-red: rgb(var(--neutral-red-x));
  --neutral-red-x: 234,105,98;
  --neutral-yellow: rgb(var(--neutral-yellow-x));
  --neutral-yellow-x: 231,138,78;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(195, 94, 10));
  outline: rgb(195, 94, 10) none 0px;
  text-decoration-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(195, 94, 10));
  outline: rgb(195, 94, 10) none 0px;
  text-decoration-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(195, 94, 10));
  outline: rgb(195, 94, 10) none 0px;
  text-decoration-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(195, 94, 10));
  outline: rgb(195, 94, 10) none 0px;
  text-decoration-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(195, 94, 10));
  color: var(--text-highlight-fg, rgb(249, 245, 215));
  outline: rgb(249, 245, 215) none 0px;
  text-decoration-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body del {
  color: rgb(101, 71, 53);
  outline: rgb(101, 71, 53) none 0px;
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(101, 71, 53));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(168, 153, 132);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(168, 153, 132));
  border-color: rgb(168, 153, 132);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(115, 81, 69));
  outline: rgb(115, 81, 69) none 0px;
  text-decoration-color: rgb(115, 81, 69);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(231, 138, 78));
  outline: rgb(231, 138, 78) none 0px;
  text-decoration: rgba(123, 173, 161, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(123, 173, 161, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body dt {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ol > li {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ul > li {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(179, 126, 93));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(235, 219, 178);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(235, 219, 178);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(235, 219, 178);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--table-row-even-background, rgba(235, 219, 178, 0.2));
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-odd-background, rgba(235, 219, 178, 0.7));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(213, 196, 161);
  color: var(--table-text-color, rgb(101, 71, 53));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: var(--table-header-color, rgb(101, 71, 53));
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(213, 196, 161);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgba(189, 174, 147, 0.4));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(235, 219, 178));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--code-normal, rgb(125, 174, 163));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(235, 219, 178));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body figcaption {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(235, 219, 178));
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(193, 74, 74);
  border-left-color: rgb(193, 74, 74);
  border-right-color: rgb(193, 74, 74);
  border-top-color: rgb(193, 74, 74);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(249, 245, 215));
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(137, 181, 170);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(168, 153, 132);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(168, 153, 132);
  border-right-color: rgb(168, 153, 132);
  border-top-color: rgb(168, 153, 132);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgba(80, 73, 69, 0.4);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgba(80, 73, 69, 0.4);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(101, 71, 53);
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 245, 215);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 94, 10);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(125, 174, 163);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(193, 74, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(193, 74, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(193, 74, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(193, 74, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(231, 138, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 94, 128);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(193, 74, 74);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 120, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 120, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 120, 46);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 125,174,163);
  background: rgba(125, 174, 163, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 193,74,74);
  background: rgba(193, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 193,74,74);
  background: rgba(193, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 148,94,128);
  background: rgba(148, 94, 128, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(148, 94, 128, 0.25);
  border-left-color: rgba(148, 94, 128, 0.25);
  border-right-color: rgba(148, 94, 128, 0.25);
  border-top-color: rgba(148, 94, 128, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 193,74,74);
  background: rgba(193, 74, 74, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(193, 74, 74, 0.25);
  border-left-color: rgba(193, 74, 74, 0.25);
  border-right-color: rgba(193, 74, 74, 0.25);
  border-top-color: rgba(193, 74, 74, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 69,112,122);
  background: rgba(69, 112, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 69,112,122);
  background: rgba(69, 112, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 195,94,10);
  background: rgba(195, 94, 10, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 108,120,46);
  background: rgba(108, 120, 46, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(108, 120, 46, 0.25);
  border-left-color: rgba(108, 120, 46, 0.25);
  border-right-color: rgba(108, 120, 46, 0.25);
  border-top-color: rgba(108, 120, 46, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 125,174,163);
  background: rgba(125, 174, 163, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 174, 163, 0.25);
  border-left-color: rgba(125, 174, 163, 0.25);
  border-right-color: rgba(125, 174, 163, 0.25);
  border-top-color: rgba(125, 174, 163, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 69,112,122);
  background: rgba(69, 112, 122, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 195,94,10);
  background: rgba(195, 94, 10, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(195, 94, 10, 0.25);
  border-left-color: rgba(195, 94, 10, 0.25);
  border-right-color: rgba(195, 94, 10, 0.25);
  border-top-color: rgba(195, 94, 10, 0.25);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 69,112,122;
  border-bottom-color: rgb(69, 112, 122);
  border-left-color: rgb(69, 112, 122);
  border-right-color: rgb(69, 112, 122);
  border-top-color: rgb(69, 112, 122);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(101, 71, 53);
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
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--text-normal, rgb(101, 71, 53));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(249, 245, 215));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(101, 71, 53);
  outline: rgb(101, 71, 53) none 0px;
  text-decoration-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgb(235, 219, 178));
  --pill-background-hover: var(--tag-background-hover, rgba(235, 219, 178, 0.6));
  --pill-border-color: var(--tag-border-color, hsla(166, 23%, 58%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(166, 23%, 58%, 0.15));
  --pill-color: var(--tag-color, rgb(76, 122, 93));
  --pill-color-hover: var(--tag-color-hover, rgb(231, 138, 78));
  --pill-color-remove: var(--tag-color, rgb(76, 122, 93));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(231, 138, 78));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, .5em);
  --pill-padding-y: var(--tag-padding-y, .2em);
  --pill-radius: var(--tag-radius, .5em);
  background-color: var(--pill-background, rgb(235, 219, 178));
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(76, 122, 93);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(193, 74, 74));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(231, 138, 78));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(195, 94, 10));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(231, 138, 78));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(108, 120, 46));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(76, 122, 93));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(69, 112, 122));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(148, 94, 128));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 69,112,122);
  border-bottom-color: rgba(69, 112, 122, 0.25);
  border-left-color: rgba(69, 112, 122, 0.25);
  border-right-color: rgba(69, 112, 122, 0.25);
  border-top-color: rgba(69, 112, 122, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(115, 81, 69));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(115, 81, 69));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(101, 71, 53);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: var(--icon-color, rgb(115, 81, 69));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(235, 219, 178));
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--status-bar-text-color, rgb(115, 81, 69));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(115, 81, 69);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(115, 81, 69));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(115, 81, 69);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(115, 81, 69));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: var(--icon-color, rgb(115, 81, 69));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(115, 81, 69);
  stroke: rgb(115, 81, 69);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(179, 126, 93));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(101, 71, 53));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(249, 245, 215));
  border-color: rgb(101, 71, 53);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-odd-background, rgba(235, 219, 178, 0.7));
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(235, 219, 178);
  color: var(--table-header-color, rgb(101, 71, 53));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: var(--text-muted, rgb(115, 81, 69));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(115, 81, 69);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgb(235, 219, 178));
  --pill-background-hover: var(--tag-background-hover, rgba(235, 219, 178, 0.6));
  --pill-border-color: var(--tag-border-color, hsla(166, 23%, 58%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(166, 23%, 58%, 0.15));
  --pill-color: var(--tag-color, rgb(76, 122, 93));
  --pill-color-hover: var(--tag-color-hover, rgb(231, 138, 78));
  --pill-color-remove: var(--tag-color, rgb(76, 122, 93));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(231, 138, 78));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, .5em);
  --pill-padding-y: var(--tag-padding-y, .2em);
  --pill-radius: var(--tag-radius, .5em);
  background-color: var(--pill-background, rgb(235, 219, 178));
  border-radius: 7px;
  color: var(--pill-color, rgb(76, 122, 93));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(115, 81, 69);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(249, 245, 215));
  color: var(--text-normal, rgb(101, 71, 53));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(235, 219, 178));
  border-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(235, 219, 178));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(101, 71, 53);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(235, 219, 178));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(101, 71, 53));
}

html[saved-theme="light"] body abbr {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(115, 81, 69);
  border-left-color: rgb(115, 81, 69);
  border-right-color: rgb(115, 81, 69);
  border-top-color: rgb(115, 81, 69);
  color: var(--text-normal, rgb(115, 81, 69));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(235, 219, 178));
  border-bottom-color: rgb(125, 174, 163);
  border-left-color: rgb(125, 174, 163);
  border-right-color: rgb(125, 174, 163);
  border-top-color: rgb(125, 174, 163);
  color: var(--code-normal, rgb(125, 174, 163));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(101, 71, 53);
  border-left-color: rgb(101, 71, 53);
  border-right-color: rgb(101, 71, 53);
  border-top-color: rgb(101, 71, 53);
}

html[saved-theme="light"] body sub {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body summary {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body sup {
  color: rgb(101, 71, 53);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgb(235, 219, 178));
  border-bottom-color: rgba(123, 173, 161, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(123, 173, 161, 0.15);
  border-right-color: rgba(123, 173, 161, 0.15);
  border-top-color: rgba(123, 173, 161, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: var(--tag-color, rgb(76, 122, 93));
}`,
  },
};
