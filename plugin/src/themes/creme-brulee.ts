import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "creme-brulee",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["merriweather-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 9;
  --accent-l: 60%;
  --accent-s: 60%;
  --background-modifier-border: var(--color-creme-4, hsl(34, 24%, 30%));
  --background-modifier-border-focus: var(--color-creme-5, hsl(34, 36%, 30%));
  --background-modifier-cover: var(--color-creme-fade, rgba(10, 10, 10, 0.4));
  --background-modifier-error: var(--color-red, #c25757);
  --background-modifier-error-hover: var(--color-red, #c25757);
  --background-modifier-error-rgb: var(--color-red-rgb, 194, 87, 87);
  --background-modifier-form-field: var(--background-secondary-alt, hsl(27, 20%, 17%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(27, 20%, 17%));
  --background-modifier-hover: var(--background-secondary-alt, hsl(27, 20%, 17%));
  --background-modifier-success: var(--color-green, #8aac6c);
  --background-modifier-success-rgb: var(--color-green-rgb, 138, 172, 108);
  --background-primary: var(--color-creme-1, hsl(31, 20%, 10%));
  --background-primary-alt: var(--color-creme-2, hsl(27, 17%, 12%));
  --background-secondary: var(--color-creme-2, hsl(27, 17%, 12%));
  --background-secondary-alt: var(--color-creme-3, hsl(27, 20%, 17%));
  --bases-cards-background: var(--background-primary, hsl(31, 20%, 10%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(27, 17%, 12%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --bases-group-heading-property-color: var(--text-muted, hsl(35, 27%, 55%));
  --bases-group-heading-value-weight: var(--font-semibold, 700);
  --bases-table-border-color: var(--table-border-color, hsl(34, 24%, 30%));
  --bases-table-cell-background-active: var(--background-primary, hsl(31, 20%, 10%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(27, 17%, 12%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(9, 60%, 60%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(27, 17%, 12%));
  --bases-table-header-background: var(--background-primary, hsl(31, 20%, 10%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(27, 20%, 17%));
  --bases-table-header-color: var(--text-muted, hsl(35, 27%, 55%));
  --bases-table-row-background-hover: var(--table-row-background-hover, hsl(27, 17%, 12%));
  --bases-table-summary-background: var(--background-primary, hsl(31, 20%, 10%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(27, 20%, 17%));
  --blockquote-accent-color-rgb: var(--color-purple-rgb, 135, 125, 181);
  --blockquote-background-color: var(--background-primary-alt, hsl(27, 17%, 12%));
  --blockquote-border-color: rgba(var(--blockquote-accent-color-rgb), 0.3);
  --blockquote-border-radius: 7px;
  --blockquote-border-thickness: 7px;
  --blockquote-padding: var(--blockquote-padding-top) var(--blockquote-padding-right) var(--blockquote-padding-bottom) var(--blockquote-padding-left, 6px 8px 6px 16px);
  --blockquote-padding-bottom: 6px;
  --blockquote-padding-left: 16px;
  --blockquote-padding-right: 8px;
  --blockquote-padding-top: 6px;
  --bold-color: var(--color-orange, #cf864a);
  --bold-italic-color: var(--color-green, #8aac6c);
  --button-background: var(--color-creme-0, hsl(30, 20%, 10%));
  --button-background-hover: var(--background-primary-alt, hsl(27, 17%, 12%));
  --button-border: var(--background-modifier-border, hsl(34, 24%, 30%));
  --button-size: 0.8em;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-bug: var(--color-red-rgb, 194, 87, 87);
  --callout-content-padding: 0px 12px;
  --callout-default: var(--color-blue-rgb, 102, 140, 179);
  --callout-error: var(--color-red-rgb, 194, 87, 87);
  --callout-example: var(--color-green-rgb, 138, 172, 108);
  --callout-fail: var(--color-red-rgb, 194, 87, 87);
  --callout-important: var(--color-red-rgb, 194, 87, 87);
  --callout-info: var(--color-cyan-rgb, 91, 168, 190);
  --callout-margin: 0 0 1em 0;
  --callout-opacity: 0.01;
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-yellow-rgb, 225, 177, 81);
  --callout-quote: var(--color-purple-rgb, 135, 125, 181);
  --callout-success: var(--color-green-rgb, 138, 172, 108);
  --callout-summary: var(--color-cyan-rgb, 91, 168, 190);
  --callout-tip: var(--color-cyan-rgb, 91, 168, 190);
  --callout-title-opacity: 0.1;
  --callout-title-padding: 6px 12px;
  --callout-todo: var(--color-blue-rgb, 102, 140, 179);
  --callout-warning: var(--color-orange-rgb, 207, 134, 74);
  --canvas-background: var(--background-primary, hsl(31, 20%, 10%));
  --canvas-card-label-color: var(--text-faint, hsl(34, 24%, 30%));
  --canvas-color-1: var(--color-red-rgb, 194, 87, 87);
  --canvas-color-2: var(--color-orange-rgb, 207, 134, 74);
  --canvas-color-3: var(--color-yellow-rgb, 225, 177, 81);
  --canvas-color-4: var(--color-green-rgb, 138, 172, 108);
  --canvas-color-5: var(--color-cyan-rgb, 91, 168, 190);
  --canvas-color-6: var(--color-purple-rgb, 135, 125, 181);
  --canvas-dot-pattern: var(--color-base-30, transparent);
  --caret-color: var(--text-normal, hsl(34, 50%, 70%));
  --checkbox-border-color: var(--text-faint, hsl(34, 24%, 30%));
  --checkbox-border-color-hover: var(--text-muted, hsl(35, 27%, 55%));
  --checkbox-color: var(--interactive-accent, hsl(9, 60%, 60%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(6, 61.2%, 69%));
  --checkbox-marker-color: var(--background-primary, hsl(31, 20%, 10%));
  --checkbox-radius: var(--radius-s, 50%);
  --checklist-done-color: var(--text-normal, hsl(34, 50%, 70%));
  --checklist-done-decoration: none;
  --code-background: var(--background-primary-alt, hsl(27, 17%, 12%));
  --code-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --code-bracket-background: var(--background-modifier-hover, hsl(27, 20%, 17%));
  --code-comment: var(--text-faint, hsl(34, 24%, 30%));
  --code-function: var(--color-yellow, #e1b151);
  --code-important: var(--color-orange, #cf864a);
  --code-keyword: var(--color-pink, #bb77af);
  --code-normal: var(--text-normal, hsl(34, 50%, 70%));
  --code-operator: var(--color-red, #c25757);
  --code-property: var(--color-cyan, #5ba8be);
  --code-punctuation: var(--text-muted, hsl(35, 27%, 55%));
  --code-string: var(--color-green, #8aac6c);
  --code-tag: var(--color-red, #c25757);
  --code-value: var(--color-purple, #877db5);
  --collapse-icon-color: var(--text-faint, hsl(34, 24%, 30%));
  --collapse-icon-color-collapsed: var(--text-faint, hsl(34, 24%, 30%));
  --color-blue: #668cb3;
  --color-blue-rgb: 102, 140, 179;
  --color-creme-0: hsl(30, 20%, 10%);
  --color-creme-1: hsl(31, 20%, 10%);
  --color-creme-2: hsl(27, 17%, 12%);
  --color-creme-3: hsl(27, 20%, 17%);
  --color-creme-4: hsl(34, 24%, 30%);
  --color-creme-5: hsl(34, 36%, 30%);
  --color-creme-6: hsl(31, 30%, 50%);
  --color-creme-7: hsl(35, 27%, 55%);
  --color-creme-8: hsl(34, 50%, 70%);
  --color-creme-fade: hsla(32, 8%, 67%, 0.5);
  --color-creme-gray-1: hsl(35, 20%, 13%);
  --color-creme-gray-2: hsl(35, 20%, 17%);
  --color-cyan: #5ba8be;
  --color-cyan-rgb: 91, 168, 190;
  --color-green: #8aac6c;
  --color-green-rgb: 138, 172, 108;
  --color-orange: #cf864a;
  --color-orange-rgb: 207, 134, 74;
  --color-pink: #bb77af;
  --color-pink-rgb: 187, 119, 175;
  --color-purple: #877db5;
  --color-purple-rgb: 135, 125, 181;
  --color-red: #c25757;
  --color-red-rgb: 194, 87, 87;
  --color-shadow: hsla(33, 90%, 5%, 0.8);
  --color-yellow: #e1b151;
  --color-yellow-rgb: 225, 177, 81;
  --dark: var(--text-normal, var(--color-creme-8, hsl(34, 50%, 70%)));
  --darkgray: var(--text-normal, var(--color-creme-8, hsl(34, 50%, 70%)));
  --divider-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --divider-color-hover: var(--interactive-accent, hsl(9, 60%, 60%));
  --dropdown-background: var(--color-creme-0, #363636);
  --dropdown-background-hover: var(--background-primary-alt, #3f3f3f);
  --file-bottom-margin: var(--size-4-8, 32px);
  --file-bottom-margin-mobile: 0;
  --file-header-background: var(--background-primary, hsl(31, 20%, 10%));
  --file-header-background-focused: var(--background-primary, hsl(31, 20%, 10%));
  --file-header-justify: left;
  --file-left-margin: calc(var(--file-right-margin) + var(--scrollbar-width));
  --file-left-margin-mobile: 30px;
  --file-margins: var(--file-top-margin) var(--file-right-margin) var(--file-bottom-margin) var(--file-left-margin, 16px 64px 32px 74px);
  --file-right-margin: var(--size-4-16, 64px);
  --file-right-margin-mobile: 30px;
  --file-top-margin: var(--size-4-4, 16px);
  --file-top-margin-mobile: 0px;
  --flair-color: var(--text-normal, hsl(34, 50%, 70%));
  --font-semibold: 700;
  --footnote-divider-color: var(--metadata-divider-color, hsl(34, 24%, 30%));
  --footnote-id-color: var(--text-muted, hsl(35, 27%, 55%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(34, 24%, 30%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(27, 20%, 17%));
  --graph-circle-color: var(--color-creme-6, hsl(31, 30%, 50%));
  --graph-node: var(--text-muted, hsl(35, 27%, 55%));
  --graph-node-attachment: var(--color-yellow, #e1b151);
  --graph-node-focused: var(--text-accent, hsl(6, 61.2%, 69%));
  --graph-node-tag: var(--color-green, #8aac6c);
  --graph-node-unresolved: var(--text-faint, hsl(34, 24%, 30%));
  --graph-tag-color: rgba(var(--color-purple-rgb), 0.7);
  --graph-text: var(--text-normal, hsl(34, 50%, 70%));
  --gray: var(--text-muted, var(--color-creme-7, hsl(35, 27%, 55%)));
  --h1-font: Merriweather, Lucida Bright, Georgia, serif;
  --h1-size: 1.3em;
  --h2-font: Merriweather, Lucida Bright, Georgia, serif;
  --h2-size: 1.05em;
  --h2-weight: 700;
  --h3-font: Merriweather, Lucida Bright, Georgia, serif;
  --h3-size: 1em;
  --h3-weight: 700;
  --h4-size: 1em;
  --h4-weight: 700;
  --h5-size: 1em;
  --h5-style: italic;
  --h5-weight: 700;
  --h6-style: italic;
  --h6-weight: 400;
  --heading-formatting: var(--text-faint, hsl(34, 24%, 30%));
  --heading-line: var(--background-modifier-border, hsl(34, 24%, 30%));
  --heading-line-spacing: var(--size-4-1, 4px);
  --highlight: var(--text-highlight-bg, rgba(var(--color-orange-rgb), 0.2));
  --highlight-bold-background: rgba(var(--color-green-rgb), 0.2);
  --highlight-bold-italic-background: rgba(var(--color-red-rgb), 0.2);
  --highlight-italic-background: rgba(var(--color-purple-rgb), 0.2);
  --hr-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, hsl(35, 27%, 55%));
  --icon-color-active: var(--text-accent, hsl(6, 61.2%, 69%));
  --icon-color-focused: var(--text-normal, hsl(34, 50%, 70%));
  --icon-color-hover: var(--text-muted, hsl(35, 27%, 55%));
  --inline-title-font: var(--h1-font, Merriweather, Lucida Bright, Georgia, serif);
  --inline-title-size: var(--h1-size, 1.3em);
  --input-date-separator: var(--text-faint, hsl(34, 24%, 30%));
  --input-placeholder-color: var(--text-faint, hsl(34, 24%, 30%));
  --interactive-accent: var(--color-accent, hsl(9, 60%, 60%));
  --interactive-accent-hover: var(--color-accent-1, hsl(6, 61.2%, 69%));
  --interactive-accent-hsl: var(--color-accent-hsl, 9, 60%, 60%);
  --italic-color: var(--color-cyan, #5ba8be);
  --light: var(--background-primary, var(--color-creme-1, hsl(31, 20%, 10%)));
  --lightgray: var(--background-secondary, var(--color-creme-2, hsl(27, 17%, 12%)));
  --link-color: var(--text-accent, hsl(6, 61.2%, 69%));
  --link-color-hover: var(--text-accent-hover, hsl(4, 63%, 77.4%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(6, 61.2%, 69%));
  --link-external-color-hover: var(--text-accent-hover, hsl(4, 63%, 77.4%));
  --link-external-decoration: none;
  --link-formatting-color: hsla(var(--interactive-accent-hsl), 0.5);
  --link-unresolved-color: var(--text-accent, hsl(6, 61.2%, 69%));
  --list-marker-color: var(--text-faint, hsl(34, 24%, 30%));
  --list-marker-color-collapsed: var(--text-accent, hsl(6, 61.2%, 69%));
  --list-marker-color-hover: var(--text-muted, hsl(35, 27%, 55%));
  --media-max-width: 750px;
  --menu-background: var(--background-secondary, hsl(27, 17%, 12%));
  --metadata-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --metadata-divider-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --metadata-gap: 0px;
  --metadata-input-background-active: var(--background-modifier-hover, hsl(27, 20%, 17%));
  --metadata-input-text-color: var(--text-normal, hsl(34, 50%, 70%));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(27, 20%, 17%));
  --metadata-label-text-color: var(--text-muted, hsl(35, 27%, 55%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(35, 27%, 55%));
  --metadata-padding: var(--size-4-2, 0 0 8px 0) 0;
  --metadata-property-background-active: var(--background-modifier-hover, hsl(27, 20%, 17%));
  --modal-background: var(--background-primary, hsl(31, 20%, 10%));
  --modal-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(34, 24%, 30%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(34, 24%, 30%));
  --nav-heading-color: var(--text-normal, hsl(34, 50%, 70%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(34, 24%, 30%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(35, 27%, 55%));
  --nav-heading-color-hover: var(--text-normal, hsl(34, 50%, 70%));
  --nav-item-background-active: var(--background-modifier-hover, hsl(27, 20%, 17%));
  --nav-item-background-hover: var(--background-modifier-hover, hsl(27, 20%, 17%));
  --nav-item-color: var(--text-muted, hsl(35, 27%, 55%));
  --nav-item-color-active: var(--text-normal, hsl(34, 50%, 70%));
  --nav-item-color-highlighted: var(--text-accent, hsl(6, 61.2%, 69%));
  --nav-item-color-hover: var(--text-normal, hsl(34, 50%, 70%));
  --nav-item-color-selected: var(--text-normal, hsl(34, 50%, 70%));
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, hsl(34, 24%, 30%));
  --nav-tag-color-active: var(--text-muted, hsl(35, 27%, 55%));
  --nav-tag-color-hover: var(--text-muted, hsl(35, 27%, 55%));
  --nav-tag-weight: var(--font-semibold, 700);
  --pdf-background: var(--background-primary, hsl(31, 20%, 10%));
  --pdf-page-background: var(--background-primary, hsl(31, 20%, 10%));
  --pdf-sidebar-background: var(--background-primary, hsl(31, 20%, 10%));
  --pill-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --pill-color: var(--text-muted, hsl(35, 27%, 55%));
  --pill-color-hover: var(--text-normal, hsl(34, 50%, 70%));
  --pill-color-remove: var(--text-faint, hsl(34, 24%, 30%));
  --pill-color-remove-hover: var(--text-accent, hsl(6, 61.2%, 69%));
  --prompt-background: var(--background-primary, hsl(31, 20%, 10%));
  --ribbon-background: var(--background-secondary, hsl(27, 17%, 12%));
  --ribbon-background-collapsed: var(--background-primary, hsl(31, 20%, 10%));
  --scrollbar-thumb-bg: var(--background-primary-alt, hsl(27, 17%, 12%));
  --scrollbar-width: 10px;
  --search-clear-button-color: var(--text-muted, hsl(35, 27%, 55%));
  --search-icon-color: var(--text-muted, hsl(35, 27%, 55%));
  --search-result-background: var(--background-primary, hsl(31, 20%, 10%));
  --secondary: var(--text-accent, var(--color-accent-1, hsl(6, 61.2%, 69%)));
  --setting-group-heading-color: var(--text-normal, hsl(34, 50%, 70%));
  --setting-group-heading-weight: var(--font-semibold, 700);
  --setting-items-background: var(--background-primary-alt, hsl(27, 17%, 12%));
  --setting-items-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(35, 27%, 55%));
  --shiki-code-background: var(--code-background, hsl(27, 17%, 12%));
  --shiki-code-comment: var(--text-faint, hsl(34, 24%, 30%));
  --shiki-code-function: var(--color-green, #8aac6c);
  --shiki-code-important: var(--color-orange, #cf864a);
  --shiki-code-keyword: var(--color-pink, #bb77af);
  --shiki-code-normal: var(--text-muted, hsl(35, 27%, 55%));
  --shiki-code-property: var(--color-cyan, #5ba8be);
  --shiki-code-punctuation: var(--text-muted, hsl(35, 27%, 55%));
  --shiki-code-string: var(--color-yellow, #e1b151);
  --shiki-code-value: var(--color-purple, #877db5);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --shiki-gutter-text-color: var(--text-faint, hsl(34, 24%, 30%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(35, 27%, 55%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(35, 27%, 55%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(34, 24%, 30%));
  --sidebar-markdown-font-size: var(--nav-item-size, 14px);
  --slider-track-background: var(--background-modifier-border, hsl(34, 24%, 30%));
  --status-bar-background: var(--background-secondary, hsl(27, 17%, 12%));
  --status-bar-border-color: var(--divider-color, hsl(34, 24%, 30%));
  --status-bar-text-color: var(--text-muted, hsl(35, 27%, 55%));
  --suggestion-background: var(--background-primary, hsl(31, 20%, 10%));
  --sync-avatar-color-1: var(--color-red, #c25757);
  --sync-avatar-color-2: var(--color-orange, #cf864a);
  --sync-avatar-color-3: var(--color-yellow, #e1b151);
  --sync-avatar-color-4: var(--color-green, #8aac6c);
  --sync-avatar-color-5: var(--color-cyan, #5ba8be);
  --sync-avatar-color-6: var(--color-blue, #668cb3);
  --sync-avatar-color-7: var(--color-purple, #877db5);
  --sync-avatar-color-8: var(--color-pink, #bb77af);
  --tab-background-active: var(--background-primary, hsl(31, 20%, 10%));
  --tab-container-background: var(--background-secondary, hsl(27, 17%, 12%));
  --tab-outline-color: var(--divider-color, hsl(34, 24%, 30%));
  --tab-switcher-background: var(--background-secondary, hsl(27, 17%, 12%));
  --tab-text-color: var(--text-faint, hsl(34, 24%, 30%));
  --tab-text-color-active: var(--text-muted, hsl(35, 27%, 55%));
  --tab-text-color-focused: var(--text-muted, hsl(35, 27%, 55%));
  --tab-text-color-focused-active: var(--text-muted, hsl(35, 27%, 55%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(34, 50%, 70%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(6, 61.2%, 69%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --table-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --table-column-min-width: 2.5em;
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(9, 60%, 60%));
  --table-drag-handle-color: var(--text-faint, hsl(34, 24%, 30%));
  --table-header-border-color: var(--table-border-color, hsl(34, 24%, 30%));
  --table-header-color: var(--text-normal, hsl(34, 50%, 70%));
  --table-header-size: var(--table-text-size, 0.9em);
  --table-row-background-hover: var(--background-primary-alt, hsl(27, 17%, 12%));
  --table-selection-border-color: var(--interactive-accent, hsl(9, 60%, 60%));
  --table-text-size: var(--font-text-size, 0.9em);
  --tag-color: var(--text-accent, hsl(6, 61.2%, 69%));
  --tag-color-hover: var(--text-accent, hsl(6, 61.2%, 69%));
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.15em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(4, 63%, 77.4%)));
  --text-accent: var(--color-accent-1, hsl(6, 61.2%, 69%));
  --text-accent-hover: var(--color-accent-2, hsl(4, 63%, 77.4%));
  --text-error: var(--color-red, #c25757);
  --text-faint: var(--color-creme-4, hsl(34, 24%, 30%));
  --text-highlight-bg: rgba(var(--color-orange-rgb), 0.2);
  --text-muted: var(--color-creme-7, hsl(35, 27%, 55%));
  --text-normal: var(--color-creme-8, hsl(34, 50%, 70%));
  --text-selection: var(--background-secondary-alt, hsl(27, 20%, 17%));
  --text-success: var(--color-green, #8aac6c);
  --text-warning: var(--color-orange, #cf864a);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-orange-rgb), 0.2));
  --titlebar-background: var(--background-secondary, hsl(27, 17%, 12%));
  --titlebar-background-focused: var(--background-secondary, hsl(27, 17%, 12%));
  --titlebar-border-color: var(--background-modifier-border, hsl(34, 24%, 30%));
  --titlebar-text-color: var(--text-muted, hsl(35, 27%, 55%));
  --titlebar-text-color-focused: var(--text-normal, hsl(34, 50%, 70%));
  --vault-profile-color: var(--text-muted, hsl(35, 27%, 55%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(35, 27%, 55%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(27, 17%, 12%));
  --button-background: var(--background-primary, hsl(31, 20%, 10%));
  --button-background-hover: var(--background-secondary-alt, hsl(27, 20%, 17%));
  background-color: var(--tab-container-background, rgb(36, 30, 25));
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(31, 26, 20));
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(36, 30, 25));
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(27, 17%, 12%));
  --button-background: var(--background-primary, hsl(31, 20%, 10%));
  --button-background-hover: var(--background-secondary-alt, hsl(27, 20%, 17%));
  background-color: var(--tab-container-background, rgb(36, 30, 25));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(217, 184, 140);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(207, 134, 74));
  outline: rgb(207, 134, 74) none 0px;
  text-decoration-color: rgb(207, 134, 74);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(91, 168, 190));
  outline: rgb(91, 168, 190) none 0px;
  text-decoration-color: rgb(91, 168, 190);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(91, 168, 190));
  outline: rgb(91, 168, 190) none 0px;
  text-decoration-color: rgb(91, 168, 190);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(207, 134, 74));
  outline: rgb(207, 134, 74) none 0px;
  text-decoration-color: rgb(207, 134, 74);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(207, 134, 74, 0.2));
  color: var(--text-normal, rgb(217, 184, 140));
  outline: rgb(217, 184, 140) none 0px;
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body del {
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(95, 79, 58);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(214, 110, 92));
  border-color: rgb(214, 110, 92);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(171, 145, 109));
  outline: rgb(171, 145, 109) none 0px;
  text-decoration-color: rgb(171, 145, 109);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(224, 137, 128));
  outline: rgb(224, 137, 128) none 0px;
  text-decoration-color: rgb(224, 137, 128);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(224, 137, 128));
  outline: rgb(224, 137, 128) none 0px;
  text-decoration-color: rgb(224, 137, 128);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(224, 137, 128));
  outline: rgb(224, 137, 128) none 0px;
  text-decoration: rgba(214, 110, 92, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(214, 110, 92, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body dt {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(95, 79, 58));
}

html[saved-theme="dark"] body blockquote {
  --link-color: rgba(var(--blockquote-accent-color-rgb), 1);
  --link-color-hover: rgba(var(--blockquote-accent-color-rgb), 0.8);
  --link-unresolved-color: rgba(var(--blockquote-accent-color-rgb), 0.8);
  background-color: var(--blockquote-background-color, rgb(36, 30, 25));
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body table {
  color: rgb(217, 184, 140);
  width: 206.078px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: var(--table-text-color, rgb(217, 184, 140));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: var(--table-header-color, rgb(217, 184, 140));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(36, 30, 25));
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: var(--code-normal, rgb(217, 184, 140));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(36, 30, 25));
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(27, 17%, 12%));
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(36, 30, 25));
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(214, 110, 92);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(95, 79, 58);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -20.6px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(217, 184, 140);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(217, 184, 140);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(217, 184, 140);
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 26, 20);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(31, 26, 20);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 134, 74);
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
  background-color: rgb(225, 177, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(91, 168, 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 140, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 140, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 177, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 177, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 125, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 172, 108);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 172, 108);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 172, 108);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 91, 168, 190);
  background: rgba(91, 168, 190, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 194, 87, 87);
  background: rgba(194, 87, 87, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 194, 87, 87);
  background: rgba(194, 87, 87, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 138, 172, 108);
  background: rgba(138, 172, 108, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 194, 87, 87);
  background: rgba(194, 87, 87, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 91, 168, 190);
  background: rgba(91, 168, 190, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 102, 140, 179);
  background: rgba(102, 140, 179, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 225, 177, 81);
  background: rgba(225, 177, 81, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(225, 177, 81, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(225, 177, 81, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(225, 177, 81, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(225, 177, 81, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 135, 125, 181);
  background: rgba(135, 125, 181, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(135, 125, 181, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(135, 125, 181, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(135, 125, 181, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(135, 125, 181, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 138, 172, 108);
  background: rgba(138, 172, 108, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 91, 168, 190);
  background: rgba(91, 168, 190, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 102, 140, 179);
  background: rgba(102, 140, 179, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 207, 134, 74);
  background: rgba(207, 134, 74, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(207, 134, 74, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(207, 134, 74, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(207, 134, 74, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(207, 134, 74, 0.5);
  border-top-width: 1px;
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(217, 184, 140);
  padding-left: 12px;
  padding-right: 12px;
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
  background-color: rgb(52, 42, 35);
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: var(--text-normal, rgb(217, 184, 140));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(31, 26, 20));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(217, 184, 140);
  outline: rgb(217, 184, 140) none 0px;
  text-decoration-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(52, 42, 35));
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 30, 25);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(52, 42, 35));
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(52, 42, 35));
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(9, 60%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(9, 60%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(9, 60%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(9, 60%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(6, 61.2%, 69%));
  --pill-color-hover: var(--tag-color-hover, hsl(6, 61.2%, 69%));
  --pill-color-remove: var(--tag-color, hsl(6, 61.2%, 69%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(6, 61.2%, 69%));
  background-color: var(--pill-background, rgba(214, 110, 92, 0.1));
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(224, 137, 128);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(217, 184, 140));
  font-family: var(--h1-font, Merriweather, "Lucida Bright", Georgia, serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(217, 184, 140));
  font-size: var(--inline-title-size, 20.8px);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 700);
  color: var(--h2-color, rgb(217, 184, 140));
  font-family: var(--h2-font, Merriweather, "Lucida Bright", Georgia, serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(217, 184, 140));
  font-family: var(--inline-title-font, Merriweather, "Lucida Bright", Georgia, serif);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 700);
  color: var(--h3-color, rgb(217, 184, 140));
  font-family: var(--h3-font, Merriweather, "Lucida Bright", Georgia, serif);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 700);
  color: var(--h4-color, rgb(217, 184, 140));
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 700);
  color: var(--h5-color, rgb(217, 184, 140));
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 400);
  color: var(--h6-color, rgb(217, 184, 140));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 102, 140, 179);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(171, 145, 109));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(171, 145, 109));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(217, 184, 140);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: var(--icon-color, rgb(171, 145, 109));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(36, 30, 25));
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: var(--status-bar-text-color, rgb(171, 145, 109));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(171, 145, 109);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(171, 145, 109));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(171, 145, 109);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(171, 145, 109));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: var(--icon-color, rgb(171, 145, 109));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(171, 145, 109);
  stroke: rgb(171, 145, 109);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(95, 79, 58));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(217, 184, 140));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(36, 30, 25));
  border-color: rgb(95, 79, 58);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(95, 79, 58);
  color: var(--table-header-color, rgb(217, 184, 140));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(95, 79, 58);
  border-left-color: rgb(95, 79, 58);
  border-right-color: rgb(95, 79, 58);
  border-top-color: rgb(95, 79, 58);
  color: var(--text-muted, rgb(171, 145, 109));
  margin-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(95, 79, 58);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .note-properties-row {
  --pill-background: var(--color-creme-gray-1, hsl(35, 20%, 13%));
  --pill-background-hover: var(--color-creme-gray-2, hsl(35, 20%, 17%));
  --pill-color-hover: var(--text-muted, hsl(35, 27%, 55%));
  --pill-color-remove: var(--pill-color, hsl(35, 27%, 55%));
  --pill-color-remove-hover: var(--pill-color, hsl(35, 27%, 55%));
  border-color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(9, 60%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(9, 60%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(9, 60%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(9, 60%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(6, 61.2%, 69%));
  --pill-color-hover: var(--tag-color-hover, hsl(6, 61.2%, 69%));
  --pill-color-remove: var(--tag-color, hsl(6, 61.2%, 69%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(6, 61.2%, 69%));
  background-color: var(--pill-background, rgba(214, 110, 92, 0.1));
  border-radius: 22.4px;
  color: var(--pill-color, rgb(224, 137, 128));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(171, 145, 109);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(31, 26, 20));
  color: var(--text-normal, rgb(217, 184, 140));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(36, 30, 25));
  border-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(36, 30, 25));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(217, 184, 140);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(36, 30, 25));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(217, 184, 140));
}

html[saved-theme="dark"] body abbr {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(171, 145, 109);
  border-left-color: rgb(171, 145, 109);
  border-right-color: rgb(171, 145, 109);
  border-top-color: rgb(171, 145, 109);
  color: var(--text-normal, rgb(171, 145, 109));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(36, 30, 25));
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
  color: var(--code-normal, rgb(217, 184, 140));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(217, 184, 140);
  border-left-color: rgb(217, 184, 140);
  border-right-color: rgb(217, 184, 140);
  border-top-color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body sub {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body summary {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body sup {
  color: rgb(217, 184, 140);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(214, 110, 92, 0.1));
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  color: var(--tag-color, rgb(224, 137, 128));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 9;
  --accent-l: 60%;
  --accent-s: 60%;
  --background-modifier-border: var(--color-creme-4, hsl(34, 37%, 70%));
  --background-modifier-border-focus: var(--color-creme-5, hsl(34, 25%, 70%));
  --background-modifier-cover: var(--color-creme-fade, rgba(220, 220, 220, 0.4));
  --background-modifier-error: var(--color-red, #c25757);
  --background-modifier-error-hover: var(--color-red, #c25757);
  --background-modifier-error-rgb: var(--color-red-rgb, 194, 87, 87);
  --background-modifier-form-field: var(--background-secondary-alt, hsl(35, 35%, 90%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(35, 35%, 90%));
  --background-modifier-hover: var(--background-secondary-alt, hsl(35, 35%, 90%));
  --background-modifier-success: var(--color-green, #8aac6c);
  --background-modifier-success-rgb: var(--color-green-rgb, 138, 172, 108);
  --background-primary: var(--color-creme-1, hsl(34, 33%, 98%));
  --background-primary-alt: var(--color-creme-2, hsl(35, 36%, 95%));
  --background-secondary: var(--color-creme-2, hsl(35, 36%, 95%));
  --background-secondary-alt: var(--color-creme-3, hsl(35, 35%, 90%));
  --bases-cards-background: var(--background-primary, hsl(34, 33%, 98%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(35, 36%, 95%));
  --bases-embed-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --bases-group-heading-property-color: var(--text-muted, hsl(31, 35%, 40%));
  --bases-group-heading-value-weight: var(--font-semibold, 700);
  --bases-table-border-color: var(--table-border-color, hsl(34, 37%, 70%));
  --bases-table-cell-background-active: var(--background-primary, hsl(34, 33%, 98%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(35, 36%, 95%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(9, 60%, 60%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(35, 36%, 95%));
  --bases-table-header-background: var(--background-primary, hsl(34, 33%, 98%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(35, 35%, 90%));
  --bases-table-header-color: var(--text-muted, hsl(31, 35%, 40%));
  --bases-table-row-background-hover: var(--table-row-background-hover, hsl(35, 36%, 95%));
  --bases-table-summary-background: var(--background-primary, hsl(34, 33%, 98%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(35, 35%, 90%));
  --blockquote-accent-color-rgb: var(--color-purple-rgb, 135, 125, 181);
  --blockquote-background-color: var(--background-primary-alt, hsl(35, 36%, 95%));
  --blockquote-border-color: rgba(var(--blockquote-accent-color-rgb), 0.3);
  --blockquote-border-radius: 7px;
  --blockquote-border-thickness: 7px;
  --blockquote-padding: var(--blockquote-padding-top) var(--blockquote-padding-right) var(--blockquote-padding-bottom) var(--blockquote-padding-left, 6px 8px 6px 16px);
  --blockquote-padding-bottom: 6px;
  --blockquote-padding-left: 16px;
  --blockquote-padding-right: 8px;
  --blockquote-padding-top: 6px;
  --bold-color: var(--color-orange, #cf864a);
  --bold-italic-color: var(--color-green, #8aac6c);
  --button-background: var(--color-creme-0, white);
  --button-background-hover: var(--background-primary-alt, hsl(35, 36%, 95%));
  --button-border: var(--background-modifier-border, hsl(34, 37%, 70%));
  --button-size: 0.8em;
  --callout-border-opacity: 1;
  --callout-border-width: 1px;
  --callout-bug: var(--color-red-rgb, 194, 87, 87);
  --callout-content-padding: 0px 12px;
  --callout-default: var(--color-blue-rgb, 102, 140, 179);
  --callout-error: var(--color-red-rgb, 194, 87, 87);
  --callout-example: var(--color-green-rgb, 138, 172, 108);
  --callout-fail: var(--color-red-rgb, 194, 87, 87);
  --callout-important: var(--color-red-rgb, 194, 87, 87);
  --callout-info: var(--color-cyan-rgb, 91, 168, 190);
  --callout-margin: 0 0 1em 0;
  --callout-opacity: 0.01;
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-question: var(--color-yellow-rgb, 225, 177, 81);
  --callout-quote: var(--color-purple-rgb, 135, 125, 181);
  --callout-success: var(--color-green-rgb, 138, 172, 108);
  --callout-summary: var(--color-cyan-rgb, 91, 168, 190);
  --callout-tip: var(--color-cyan-rgb, 91, 168, 190);
  --callout-title-opacity: 0.1;
  --callout-title-padding: 6px 12px;
  --callout-todo: var(--color-blue-rgb, 102, 140, 179);
  --callout-warning: var(--color-orange-rgb, 207, 134, 74);
  --canvas-background: var(--background-primary, hsl(34, 33%, 98%));
  --canvas-card-label-color: var(--text-faint, hsl(34, 37%, 70%));
  --canvas-color-1: var(--color-red-rgb, 194, 87, 87);
  --canvas-color-2: var(--color-orange-rgb, 207, 134, 74);
  --canvas-color-3: var(--color-yellow-rgb, 225, 177, 81);
  --canvas-color-4: var(--color-green-rgb, 138, 172, 108);
  --canvas-color-5: var(--color-cyan-rgb, 91, 168, 190);
  --canvas-color-6: var(--color-purple-rgb, 135, 125, 181);
  --canvas-dot-pattern: var(--color-base-30, transparent);
  --caret-color: var(--text-normal, hsl(31, 45%, 20%));
  --checkbox-border-color: var(--text-faint, hsl(34, 37%, 70%));
  --checkbox-border-color-hover: var(--text-muted, hsl(31, 35%, 40%));
  --checkbox-color: var(--interactive-accent, hsl(8, 60.6%, 64.5%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(6, 61.2%, 69%));
  --checkbox-marker-color: var(--background-primary, hsl(34, 33%, 98%));
  --checkbox-radius: var(--radius-s, 50%);
  --checklist-done-color: var(--text-normal, hsl(31, 45%, 20%));
  --checklist-done-decoration: none;
  --code-background: var(--background-primary-alt, hsl(35, 36%, 95%));
  --code-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --code-bracket-background: var(--background-modifier-hover, hsl(35, 35%, 90%));
  --code-comment: var(--text-faint, hsl(34, 37%, 70%));
  --code-function: var(--color-yellow, #e1b151);
  --code-important: var(--color-orange, #cf864a);
  --code-keyword: var(--color-pink, #bb77af);
  --code-normal: var(--text-normal, hsl(31, 45%, 20%));
  --code-operator: var(--color-red, #c25757);
  --code-property: var(--color-cyan, #5ba8be);
  --code-punctuation: var(--text-muted, hsl(31, 35%, 40%));
  --code-string: var(--color-green, #8aac6c);
  --code-tag: var(--color-red, #c25757);
  --code-value: var(--color-purple, #877db5);
  --collapse-icon-color: var(--text-faint, hsl(34, 37%, 70%));
  --collapse-icon-color-collapsed: var(--text-faint, hsl(34, 37%, 70%));
  --color-blue: #668cb3;
  --color-blue-rgb: 102, 140, 179;
  --color-creme-0: white;
  --color-creme-1: hsl(34, 33%, 98%);
  --color-creme-2: hsl(35, 36%, 95%);
  --color-creme-3: hsl(35, 35%, 90%);
  --color-creme-4: hsl(34, 37%, 70%);
  --color-creme-5: hsl(34, 25%, 70%);
  --color-creme-6: hsl(31, 30%, 50%);
  --color-creme-7: hsl(31, 35%, 40%);
  --color-creme-8: hsl(31, 45%, 20%);
  --color-creme-fade: hsla(32, 8%, 67%, 0.5);
  --color-creme-gray-1: hsl(35, 20%, 94%);
  --color-creme-gray-2: hsl(35, 20%, 90%);
  --color-cyan: #5ba8be;
  --color-cyan-rgb: 91, 168, 190;
  --color-green: #8aac6c;
  --color-green-rgb: 138, 172, 108;
  --color-orange: #cf864a;
  --color-orange-rgb: 207, 134, 74;
  --color-pink: #bb77af;
  --color-pink-rgb: 187, 119, 175;
  --color-purple: #877db5;
  --color-purple-rgb: 135, 125, 181;
  --color-red: #c25757;
  --color-red-rgb: 194, 87, 87;
  --color-shadow: hsla(0, 0%, 0%, 0.4);
  --color-yellow: #e1b151;
  --color-yellow-rgb: 225, 177, 81;
  --dark: var(--text-normal, var(--color-creme-8, hsl(31, 45%, 20%)));
  --darkgray: var(--text-normal, var(--color-creme-8, hsl(31, 45%, 20%)));
  --divider-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --divider-color-hover: var(--interactive-accent, hsl(8, 60.6%, 64.5%));
  --dropdown-background: var(--color-creme-0, #ffffff);
  --dropdown-background-hover: var(--background-primary-alt, #fafafa);
  --file-bottom-margin: var(--size-4-8, 32px);
  --file-bottom-margin-mobile: 0;
  --file-header-background: var(--background-primary, hsl(34, 33%, 98%));
  --file-header-background-focused: var(--background-primary, hsl(34, 33%, 98%));
  --file-header-justify: left;
  --file-left-margin: calc(var(--file-right-margin) + var(--scrollbar-width));
  --file-left-margin-mobile: 30px;
  --file-margins: var(--file-top-margin) var(--file-right-margin) var(--file-bottom-margin) var(--file-left-margin, 16px 64px 32px 74px);
  --file-right-margin: var(--size-4-16, 64px);
  --file-right-margin-mobile: 30px;
  --file-top-margin: var(--size-4-4, 16px);
  --file-top-margin-mobile: 0px;
  --flair-color: var(--text-normal, hsl(31, 45%, 20%));
  --font-semibold: 700;
  --footnote-divider-color: var(--metadata-divider-color, hsl(34, 37%, 70%));
  --footnote-id-color: var(--text-muted, hsl(31, 35%, 40%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(34, 37%, 70%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(35, 35%, 90%));
  --graph-circle-color: var(--color-creme-6, hsl(31, 30%, 50%));
  --graph-node: var(--text-muted, hsl(31, 35%, 40%));
  --graph-node-attachment: var(--color-yellow, #e1b151);
  --graph-node-focused: var(--text-accent, hsl(9, 60%, 60%));
  --graph-node-tag: var(--color-green, #8aac6c);
  --graph-node-unresolved: var(--text-faint, hsl(34, 37%, 70%));
  --graph-tag-color: rgba(var(--color-purple-rgb), 0.7);
  --graph-text: var(--text-normal, hsl(31, 45%, 20%));
  --gray: var(--text-muted, var(--color-creme-7, hsl(31, 35%, 40%)));
  --h1-font: Merriweather, Lucida Bright, Georgia, serif;
  --h1-size: 1.3em;
  --h2-font: Merriweather, Lucida Bright, Georgia, serif;
  --h2-size: 1.05em;
  --h2-weight: 700;
  --h3-font: Merriweather, Lucida Bright, Georgia, serif;
  --h3-size: 1em;
  --h3-weight: 700;
  --h4-size: 1em;
  --h4-weight: 700;
  --h5-size: 1em;
  --h5-style: italic;
  --h5-weight: 700;
  --h6-style: italic;
  --h6-weight: 400;
  --heading-formatting: var(--text-faint, hsl(34, 37%, 70%));
  --heading-line: var(--background-modifier-border, hsl(34, 37%, 70%));
  --heading-line-spacing: var(--size-4-1, 4px);
  --highlight: var(--text-highlight-bg, rgba(var(--color-orange-rgb), 0.2));
  --highlight-bold-background: rgba(var(--color-green-rgb), 0.2);
  --highlight-bold-italic-background: rgba(var(--color-red-rgb), 0.2);
  --highlight-italic-background: rgba(var(--color-purple-rgb), 0.2);
  --hr-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, hsl(31, 35%, 40%));
  --icon-color-active: var(--text-accent, hsl(9, 60%, 60%));
  --icon-color-focused: var(--text-normal, hsl(31, 45%, 20%));
  --icon-color-hover: var(--text-muted, hsl(31, 35%, 40%));
  --inline-title-font: var(--h1-font, Merriweather, Lucida Bright, Georgia, serif);
  --inline-title-size: var(--h1-size, 1.3em);
  --input-date-separator: var(--text-faint, hsl(34, 37%, 70%));
  --input-placeholder-color: var(--text-faint, hsl(34, 37%, 70%));
  --interactive-accent: var(--color-accent-1, hsl(8, 60.6%, 64.5%));
  --interactive-accent-hover: var(--color-accent-2, hsl(6, 61.2%, 69%));
  --interactive-accent-hsl: var(--color-accent-hsl, 9, 60%, 60%);
  --italic-color: var(--color-cyan, #5ba8be);
  --light: var(--background-primary, var(--color-creme-1, hsl(34, 33%, 98%)));
  --lightgray: var(--background-secondary, var(--color-creme-2, hsl(35, 36%, 95%)));
  --link-color: var(--text-accent, hsl(9, 60%, 60%));
  --link-color-hover: var(--text-accent-hover, hsl(6, 61.2%, 69%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(9, 60%, 60%));
  --link-external-color-hover: var(--text-accent-hover, hsl(6, 61.2%, 69%));
  --link-external-decoration: none;
  --link-formatting-color: hsla(var(--interactive-accent-hsl), 0.5);
  --link-unresolved-color: var(--text-accent, hsl(9, 60%, 60%));
  --list-marker-color: var(--text-faint, hsl(34, 37%, 70%));
  --list-marker-color-collapsed: var(--text-accent, hsl(9, 60%, 60%));
  --list-marker-color-hover: var(--text-muted, hsl(31, 35%, 40%));
  --media-max-width: 750px;
  --menu-background: var(--background-secondary, hsl(35, 36%, 95%));
  --metadata-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --metadata-divider-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --metadata-gap: 0px;
  --metadata-input-background-active: var(--background-modifier-hover, hsl(35, 35%, 90%));
  --metadata-input-text-color: var(--text-normal, hsl(31, 45%, 20%));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(35, 35%, 90%));
  --metadata-label-text-color: var(--text-muted, hsl(31, 35%, 40%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(31, 35%, 40%));
  --metadata-padding: var(--size-4-2, 0 0 8px 0) 0;
  --metadata-property-background-active: var(--background-modifier-hover, hsl(35, 35%, 90%));
  --modal-background: var(--background-primary, hsl(34, 33%, 98%));
  --modal-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(34, 37%, 70%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(34, 37%, 70%));
  --nav-heading-color: var(--text-normal, hsl(31, 45%, 20%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(34, 37%, 70%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(31, 35%, 40%));
  --nav-heading-color-hover: var(--text-normal, hsl(31, 45%, 20%));
  --nav-item-background-active: var(--background-modifier-hover, hsl(35, 35%, 90%));
  --nav-item-background-hover: var(--background-modifier-hover, hsl(35, 35%, 90%));
  --nav-item-color: var(--text-muted, hsl(31, 35%, 40%));
  --nav-item-color-active: var(--text-normal, hsl(31, 45%, 20%));
  --nav-item-color-highlighted: var(--text-accent, hsl(9, 60%, 60%));
  --nav-item-color-hover: var(--text-normal, hsl(31, 45%, 20%));
  --nav-item-color-selected: var(--text-normal, hsl(31, 45%, 20%));
  --nav-item-size: var(--font-ui-small, 14px);
  --nav-tag-color: var(--text-faint, hsl(34, 37%, 70%));
  --nav-tag-color-active: var(--text-muted, hsl(31, 35%, 40%));
  --nav-tag-color-hover: var(--text-muted, hsl(31, 35%, 40%));
  --nav-tag-weight: var(--font-semibold, 700);
  --pdf-background: var(--background-primary, hsl(34, 33%, 98%));
  --pdf-page-background: var(--background-primary, hsl(34, 33%, 98%));
  --pdf-sidebar-background: var(--background-primary, hsl(34, 33%, 98%));
  --pill-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --pill-color: var(--text-muted, hsl(31, 35%, 40%));
  --pill-color-hover: var(--text-normal, hsl(31, 45%, 20%));
  --pill-color-remove: var(--text-faint, hsl(34, 37%, 70%));
  --pill-color-remove-hover: var(--text-accent, hsl(9, 60%, 60%));
  --prompt-background: var(--background-primary, hsl(34, 33%, 98%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(34, 33%, 98%) 65%, transparent) linear-gradient(hsl(34, 33%, 98%), color-mix(in srgb, hsl(34, 33%, 98%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(35, 36%, 95%));
  --ribbon-background-collapsed: var(--background-primary, hsl(34, 33%, 98%));
  --scrollbar-thumb-bg: var(--background-primary-alt, hsl(35, 36%, 95%));
  --scrollbar-width: 10px;
  --search-clear-button-color: var(--text-muted, hsl(31, 35%, 40%));
  --search-icon-color: var(--text-muted, hsl(31, 35%, 40%));
  --search-result-background: var(--background-primary, hsl(34, 33%, 98%));
  --secondary: var(--text-accent, var(--color-accent, hsl(9, 60%, 60%)));
  --setting-group-heading-color: var(--text-normal, hsl(31, 45%, 20%));
  --setting-group-heading-weight: var(--font-semibold, 700);
  --setting-items-background: var(--background-primary-alt, hsl(35, 36%, 95%));
  --setting-items-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(31, 35%, 40%));
  --shiki-code-background: var(--code-background, hsl(35, 36%, 95%));
  --shiki-code-comment: var(--text-faint, hsl(34, 37%, 70%));
  --shiki-code-function: var(--color-green, #8aac6c);
  --shiki-code-important: var(--color-orange, #cf864a);
  --shiki-code-keyword: var(--color-pink, #bb77af);
  --shiki-code-normal: var(--text-muted, hsl(31, 35%, 40%));
  --shiki-code-property: var(--color-cyan, #5ba8be);
  --shiki-code-punctuation: var(--text-muted, hsl(31, 35%, 40%));
  --shiki-code-string: var(--color-yellow, #e1b151);
  --shiki-code-value: var(--color-purple, #877db5);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --shiki-gutter-text-color: var(--text-faint, hsl(34, 37%, 70%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(31, 35%, 40%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(31, 35%, 40%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(34, 37%, 70%));
  --sidebar-markdown-font-size: var(--nav-item-size, 14px);
  --slider-track-background: var(--background-modifier-border, hsl(34, 37%, 70%));
  --status-bar-background: var(--background-secondary, hsl(35, 36%, 95%));
  --status-bar-border-color: var(--divider-color, hsl(34, 37%, 70%));
  --status-bar-text-color: var(--text-muted, hsl(31, 35%, 40%));
  --suggestion-background: var(--background-primary, hsl(34, 33%, 98%));
  --sync-avatar-color-1: var(--color-red, #c25757);
  --sync-avatar-color-2: var(--color-orange, #cf864a);
  --sync-avatar-color-3: var(--color-yellow, #e1b151);
  --sync-avatar-color-4: var(--color-green, #8aac6c);
  --sync-avatar-color-5: var(--color-cyan, #5ba8be);
  --sync-avatar-color-6: var(--color-blue, #668cb3);
  --sync-avatar-color-7: var(--color-purple, #877db5);
  --sync-avatar-color-8: var(--color-pink, #bb77af);
  --tab-background-active: var(--background-primary, hsl(34, 33%, 98%));
  --tab-container-background: var(--background-secondary, hsl(35, 36%, 95%));
  --tab-outline-color: var(--divider-color, hsl(34, 37%, 70%));
  --tab-switcher-background: var(--background-secondary, hsl(35, 36%, 95%));
  --tab-text-color: var(--text-faint, hsl(34, 37%, 70%));
  --tab-text-color-active: var(--text-muted, hsl(31, 35%, 40%));
  --tab-text-color-focused: var(--text-muted, hsl(31, 35%, 40%));
  --tab-text-color-focused-active: var(--text-muted, hsl(31, 35%, 40%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(31, 45%, 20%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(9, 60%, 60%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --table-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --table-column-min-width: 2.5em;
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(8, 60.6%, 64.5%));
  --table-drag-handle-color: var(--text-faint, hsl(34, 37%, 70%));
  --table-header-border-color: var(--table-border-color, hsl(34, 37%, 70%));
  --table-header-color: var(--text-normal, hsl(31, 45%, 20%));
  --table-header-size: var(--table-text-size, 0.9em);
  --table-row-background-hover: var(--background-primary-alt, hsl(35, 36%, 95%));
  --table-selection-border-color: var(--interactive-accent, hsl(8, 60.6%, 64.5%));
  --table-text-size: var(--font-text-size, 0.9em);
  --tag-color: var(--text-accent, hsl(9, 60%, 60%));
  --tag-color-hover: var(--text-accent, hsl(9, 60%, 60%));
  --tag-padding-x: 0.5em;
  --tag-padding-y: 0.15em;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(6, 61.2%, 69%)));
  --text-accent: var(--color-accent, hsl(9, 60%, 60%));
  --text-accent-hover: var(--color-accent-2, hsl(6, 61.2%, 69%));
  --text-error: var(--color-red, #c25757);
  --text-faint: var(--color-creme-4, hsl(34, 37%, 70%));
  --text-highlight-bg: rgba(var(--color-orange-rgb), 0.2);
  --text-muted: var(--color-creme-7, hsl(31, 35%, 40%));
  --text-normal: var(--color-creme-8, hsl(31, 45%, 20%));
  --text-selection: var(--background-secondary-alt, hsl(35, 35%, 90%));
  --text-success: var(--color-green, #8aac6c);
  --text-warning: var(--color-orange, #cf864a);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-orange-rgb), 0.2));
  --titlebar-background: var(--background-secondary, hsl(35, 36%, 95%));
  --titlebar-background-focused: var(--background-secondary, hsl(35, 36%, 95%));
  --titlebar-border-color: var(--background-modifier-border, hsl(34, 37%, 70%));
  --titlebar-text-color: var(--text-muted, hsl(31, 35%, 40%));
  --titlebar-text-color-focused: var(--text-normal, hsl(31, 45%, 20%));
  --vault-profile-color: var(--text-muted, hsl(31, 35%, 40%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(31, 35%, 40%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(35, 36%, 95%));
  --button-background: var(--background-primary, hsl(34, 33%, 98%));
  --button-background-hover: var(--background-secondary-alt, hsl(35, 35%, 90%));
  background-color: var(--tab-container-background, rgb(247, 243, 238));
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(252, 250, 248));
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(247, 243, 238));
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(35, 36%, 95%));
  --button-background: var(--background-primary, hsl(34, 33%, 98%));
  --button-background-hover: var(--background-secondary-alt, hsl(35, 35%, 90%));
  background-color: var(--tab-container-background, rgb(247, 243, 238));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(74, 52, 28);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(207, 134, 74));
  outline: rgb(207, 134, 74) none 0px;
  text-decoration-color: rgb(207, 134, 74);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(91, 168, 190));
  outline: rgb(91, 168, 190) none 0px;
  text-decoration-color: rgb(91, 168, 190);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(91, 168, 190));
  outline: rgb(91, 168, 190) none 0px;
  text-decoration-color: rgb(91, 168, 190);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(207, 134, 74));
  outline: rgb(207, 134, 74) none 0px;
  text-decoration-color: rgb(207, 134, 74);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(207, 134, 74, 0.2));
  color: var(--text-normal, rgb(74, 52, 28));
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body del {
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(207, 182, 150);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(219, 124, 110));
  border-color: rgb(219, 124, 110);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(138, 103, 66));
  outline: rgb(138, 103, 66) none 0px;
  text-decoration-color: rgb(138, 103, 66);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(214, 110, 92));
  outline: rgb(214, 110, 92) none 0px;
  text-decoration-color: rgb(214, 110, 92);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(214, 110, 92));
  outline: rgb(214, 110, 92) none 0px;
  text-decoration-color: rgb(214, 110, 92);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(214, 110, 92));
  outline: rgb(214, 110, 92) none 0px;
  text-decoration: rgba(214, 110, 92, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(214, 110, 92, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body dt {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ol > li {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul > li {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(207, 182, 150));
}

html[saved-theme="light"] body blockquote {
  --link-color: rgba(var(--blockquote-accent-color-rgb), 1);
  --link-color-hover: rgba(var(--blockquote-accent-color-rgb), 0.8);
  --link-unresolved-color: rgba(var(--blockquote-accent-color-rgb), 0.8);
  background-color: var(--blockquote-background-color, rgb(247, 243, 238));
  padding-bottom: 6px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body table {
  color: rgb(74, 52, 28);
  width: 206.078px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: var(--table-text-color, rgb(74, 52, 28));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: var(--table-header-color, rgb(74, 52, 28));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(247, 243, 238));
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: var(--code-normal, rgb(74, 52, 28));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(247, 243, 238));
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body figcaption {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(35, 36%, 95%));
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(247, 243, 238));
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(219, 124, 110);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(207, 182, 150);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -20.6px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(74, 52, 28);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(74, 52, 28);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(74, 52, 28);
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(252, 250, 248);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(207, 134, 74);
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
  background-color: rgb(225, 177, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(91, 168, 190);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 140, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 140, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 177, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 177, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 125, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(194, 87, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 172, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 172, 108);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 172, 108);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 91, 168, 190);
  background: rgba(91, 168, 190, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 194, 87, 87);
  background: rgba(194, 87, 87, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 194, 87, 87);
  background: rgba(194, 87, 87, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 138, 172, 108);
  background: rgba(138, 172, 108, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 194, 87, 87);
  background: rgba(194, 87, 87, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(194, 87, 87, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(194, 87, 87, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(194, 87, 87, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(194, 87, 87, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 91, 168, 190);
  background: rgba(91, 168, 190, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 102, 140, 179);
  background: rgba(102, 140, 179, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 225, 177, 81);
  background: rgba(225, 177, 81, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(225, 177, 81, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(225, 177, 81, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(225, 177, 81, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(225, 177, 81, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 135, 125, 181);
  background: rgba(135, 125, 181, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(135, 125, 181, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(135, 125, 181, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(135, 125, 181, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(135, 125, 181, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 138, 172, 108);
  background: rgba(138, 172, 108, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(138, 172, 108, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 172, 108, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(138, 172, 108, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(138, 172, 108, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 91, 168, 190);
  background: rgba(91, 168, 190, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(91, 168, 190, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(91, 168, 190, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(91, 168, 190, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(91, 168, 190, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 102, 140, 179);
  background: rgba(102, 140, 179, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 207, 134, 74);
  background: rgba(207, 134, 74, 0.01) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-opacity));
  border-bottom-color: rgba(207, 134, 74, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(207, 134, 74, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(207, 134, 74, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(207, 134, 74, 0.5);
  border-top-width: 1px;
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 102, 140, 179;
  background: rgba(102, 140, 179, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), var(--callout-title-opacity));
  border-bottom-color: rgb(102, 140, 179);
  border-left-color: rgb(102, 140, 179);
  border-right-color: rgb(102, 140, 179);
  border-top-color: rgb(102, 140, 179);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(102, 140, 179));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(74, 52, 28);
  padding-left: 12px;
  padding-right: 12px;
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
  background-color: rgb(238, 231, 221);
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: var(--text-normal, rgb(74, 52, 28));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(252, 250, 248));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(74, 52, 28);
  outline: rgb(74, 52, 28) none 0px;
  text-decoration-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(238, 231, 221));
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 243, 238);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(238, 231, 221));
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(238, 231, 221));
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(9, 60%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(9, 60%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(9, 60%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(9, 60%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(9, 60%, 60%));
  --pill-color-hover: var(--tag-color-hover, hsl(9, 60%, 60%));
  --pill-color-remove: var(--tag-color, hsl(9, 60%, 60%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(9, 60%, 60%));
  background-color: var(--pill-background, rgba(214, 110, 92, 0.1));
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(214, 110, 92);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(74, 52, 28));
  font-family: var(--h1-font, Merriweather, "Lucida Bright", Georgia, serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(74, 52, 28));
  font-size: var(--inline-title-size, 20.8px);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 700);
  color: var(--h2-color, rgb(74, 52, 28));
  font-family: var(--h2-font, Merriweather, "Lucida Bright", Georgia, serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(74, 52, 28));
  font-family: var(--inline-title-font, Merriweather, "Lucida Bright", Georgia, serif);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 700);
  color: var(--h3-color, rgb(74, 52, 28));
  font-family: var(--h3-font, Merriweather, "Lucida Bright", Georgia, serif);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 700);
  color: var(--h4-color, rgb(74, 52, 28));
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 700);
  color: var(--h5-color, rgb(74, 52, 28));
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 400);
  color: var(--h6-color, rgb(74, 52, 28));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 102, 140, 179);
  border-bottom-color: rgba(102, 140, 179, 0.5);
  border-bottom-width: 1px;
  border-left-color: rgba(102, 140, 179, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(102, 140, 179, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(102, 140, 179, 0.5);
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(138, 103, 66));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(138, 103, 66));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(74, 52, 28);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: var(--icon-color, rgb(138, 103, 66));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(247, 243, 238));
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: var(--status-bar-text-color, rgb(138, 103, 66));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(138, 103, 66);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(138, 103, 66));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(138, 103, 66);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(138, 103, 66));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: var(--icon-color, rgb(138, 103, 66));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(138, 103, 66);
  stroke: rgb(138, 103, 66);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(207, 182, 150));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(74, 52, 28));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--interactive-normal, rgb(255, 255, 255));
  border-color: rgb(207, 182, 150);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(207, 182, 150);
  color: var(--table-header-color, rgb(74, 52, 28));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(207, 182, 150);
  border-left-color: rgb(207, 182, 150);
  border-right-color: rgb(207, 182, 150);
  border-top-color: rgb(207, 182, 150);
  color: var(--text-muted, rgb(138, 103, 66));
  margin-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(207, 182, 150);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .note-properties-row {
  --pill-background: var(--color-creme-gray-1, hsl(35, 20%, 94%));
  --pill-background-hover: var(--color-creme-gray-2, hsl(35, 20%, 90%));
  --pill-color-hover: var(--text-muted, hsl(31, 35%, 40%));
  --pill-color-remove: var(--pill-color, hsl(31, 35%, 40%));
  --pill-color-remove-hover: var(--pill-color, hsl(31, 35%, 40%));
  border-color: rgb(138, 103, 66);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(9, 60%, 60%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(9, 60%, 60%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(9, 60%, 60%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(9, 60%, 60%, 0.15));
  --pill-color: var(--tag-color, hsl(9, 60%, 60%));
  --pill-color-hover: var(--tag-color-hover, hsl(9, 60%, 60%));
  --pill-color-remove: var(--tag-color, hsl(9, 60%, 60%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(9, 60%, 60%));
  background-color: var(--pill-background, rgba(214, 110, 92, 0.1));
  border-radius: 22.4px;
  color: var(--pill-color, rgb(214, 110, 92));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(138, 103, 66);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(252, 250, 248));
  color: var(--text-normal, rgb(74, 52, 28));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(247, 243, 238));
  border-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(247, 243, 238));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(74, 52, 28);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(247, 243, 238));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(74, 52, 28));
}

html[saved-theme="light"] body abbr {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(138, 103, 66);
  border-left-color: rgb(138, 103, 66);
  border-right-color: rgb(138, 103, 66);
  border-top-color: rgb(138, 103, 66);
  color: var(--text-normal, rgb(138, 103, 66));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(247, 243, 238));
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
  color: var(--code-normal, rgb(74, 52, 28));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(74, 52, 28);
  border-left-color: rgb(74, 52, 28);
  border-right-color: rgb(74, 52, 28);
  border-top-color: rgb(74, 52, 28);
}

html[saved-theme="light"] body sub {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body summary {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body sup {
  color: rgb(74, 52, 28);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(214, 110, 92, 0.1));
  border-bottom-color: rgba(214, 110, 92, 0.15);
  border-left-color: rgba(214, 110, 92, 0.15);
  border-right-color: rgba(214, 110, 92, 0.15);
  border-top-color: rgba(214, 110, 92, 0.15);
  color: var(--tag-color, rgb(214, 110, 92));
}`,
  },
};
