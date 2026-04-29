import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "kurokula",
    modes: ["dark"],
    variations: [],
    fonts: ["atkinson-hyperlegible", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 260.488;
  --accent-l: 55.8824%;
  --accent-s: 18.2222%;
  --background-modifier-form-field: var(--color-base-00, #2a2a2a);
  --background-primary: var(--kuro-black-dark, #141515);
  --background-secondary: var(--color-base-20, #212121);
  --bases-cards-background: var(--background-primary, #141515);
  --bases-cards-border-width: var(--border-width, 2px);
  --bases-group-heading-property-color: var(--text-muted, rgba(255, 255, 255, 0.8));
  --bases-group-heading-property-size: var(--font-ui-smaller, 14px);
  --bases-table-cell-background-active: var(--background-primary, #141515);
  --bases-table-cell-background-selected: var(--table-selection, hsla(260.488, 18.2222%, 55.8824%, 0.1));
  --bases-table-column-border-width: var(--border-width, 2px);
  --bases-table-container-border-width: var(--border-width, 2px);
  --bases-table-header-background: var(--background-primary, #141515);
  --bases-table-header-color: var(--text-muted, rgba(255, 255, 255, 0.8));
  --bases-table-row-border-width: var(--border-width, 2px);
  --bases-table-summary-background: var(--background-primary, #141515);
  --blockquote-border-color: var(--kuro-black-light, #515151);
  --blockquote-border-thickness: 8px;
  --blockquote-color: var(--kuro-orange-light, #FFC663);
  --blockquote-font-style: italic;
  --bodyFont: var(--font-text-theme, "Atkinson Hyperlegible", "serif");
  --bold-color: var(--kuro-white-light, #FFFFFF);
  --bold-weight: var(--font-extrabold, 800);
  --border-width: 2px;
  --button-radius: var(--input-radius, 8px);
  --callout-border-opacity: 0.45;
  --callout-border-width: 1px;
  --callout-bug: var(--kuro-purple-normal-rgb, 158, 96, 236);
  --callout-default: var(--kuro-blue-dark-rgb, 104, 144, 215);
  --callout-error: var(--kuro-red-normal-rgb, 210, 62, 8);
  --callout-example: var(--kuro-magenta-dark-rgb, 204, 131, 189);
  --callout-fail: var(--kuro-red-dark-rgb, 182, 96, 86);
  --callout-important: var(--kuro-cyan-normal-rgb, 30, 249, 245);
  --callout-info: var(--kuro-blue-normal-rgb, 42, 185, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--kuro-orange-dark-rgb, 171, 123, 78);
  --callout-quote: var(--kuro-brown-normal-rgb, 157, 89, 24);
  --callout-radius: var(--radius-s, 8px);
  --callout-success: var(--kuro-green-normal-rgb, 84, 202, 116);
  --callout-summary: var(--kuro-purple-light-rgb, 169, 148, 255);
  --callout-tip: var(--kuro-cyan-dark-rgb, 96, 190, 190);
  --callout-todo: var(--kuro-blue-light-rgb, 161, 217, 255);
  --callout-warning: var(--kuro-orange-normal-rgb, 229, 150, 5);
  --canvas-background: var(--background-primary, #141515);
  --canvas-card-label-color: var(--text-faint, rgba(255, 255, 255, 0.6));
  --caret-color: var(--text-normal, rgb(255, 255, 255));
  --checkbox-border-color: var(--kuro-white-dark, #94959B);
  --checkbox-border-color-hover: var(--kuro-white-light, #FFFFFF);
  --checkbox-color: var(--kuro-black-light, #515151);
  --checkbox-color-hover: var(--kuro-green-dark, #85B1A9);
  --checkbox-marker-color: var(--kuro-white-dark, #94959B);
  --checkbox-size: var(--font-text-size, 24px);
  --checklist-done-color: var(--kuro-white-dark, #94959B);
  --code-background: var(--kuro-code-bg, #141515);
  --code-comment: var(--kuro-code-comment, #FCFFB8);
  --code-function: var(--kuro-code-function, #DBBB43);
  --code-important: var(--kuro-cyan-normal, #1EF9F5);
  --code-inline: var(--kuro-yellow-dark, #DBBB43);
  --code-keyword: var(--kuro-code-keyword, #6890D7);
  --code-normal: var(--kuro-code-fg, #FFFFFF);
  --code-operator: var(--kuro-code-operator, #94959B);
  --code-property: var(--kuro-code-variable, #CC83BD);
  --code-punctuation: var(--kuro-code-punctuation, #94959B);
  --code-radius: var(--radius-s, 12px);
  --code-string: var(--kuro-code-string, #85B1A9);
  --code-tag: var(--kuro-code-constant, #2AB9FF);
  --code-value: var(--kuro-code-variable-other, #9D5918);
  --collapse-icon-color: var(--kuro-white-normal, #DDD0C4);
  --collapse-icon-color-collapsed: var(--kuro-white-dark, #94959B);
  --dark: var(--text-normal, rgba(var(--kuro-white-light-rgb), 1));
  --darkgray: var(--text-normal, rgba(var(--kuro-white-light-rgb), 1));
  --divider-color: var(--kuro-black-light, #515151);
  --divider-color-hover: var(--kuro-white-light, #FFFFFF);
  --divider-width-hover: 2px;
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
		inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --file-header-background: var(--background-primary, #141515);
  --file-header-background-focused: var(--background-primary, #141515);
  --file-header-border: var(--border-width, 2px solid transparent) solid transparent;
  --file-header-font-size: var(--font-ui-small, 12px);
  --file-header-justify: left;
  --flair-color: var(--text-normal, rgb(255, 255, 255));
  --font-mermaid: var(--font-text, "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: "Atkinson Hyperlegible", "serif";
  --font-ui-medium: 18px;
  --font-ui-small: 16px;
  --font-ui-smaller: 14px;
  --footnote-divider-width: var(--border-width, 2px);
  --footnote-id-color: var(--text-muted, rgba(255, 255, 255, 0.8));
  --footnote-id-color-no-occurrences: var(--text-faint, rgba(255, 255, 255, 0.6));
  --graph-node: var(--text-muted, rgba(255, 255, 255, 0.8));
  --graph-node-focused: var(--text-accent, hsl(257.488, 18.58664%, 64.26476%));
  --graph-node-unresolved: var(--text-faint, rgba(255, 255, 255, 0.6));
  --graph-text: var(--text-normal, rgb(255, 255, 255));
  --gray: var(--text-muted, rgba(var(--kuro-white-light-rgb), 0.8));
  --h-font-style: oblique 10deg;
  --h-font-variant: proportional-nums;
  --h-weight: 900;
  --h1-color: var(--kuro-white-dark, #94959B);
  --h1-style: var(--h-font-style, oblique 10deg);
  --h1-variant: var(--h-font-variant, proportional-nums);
  --h1-weight: var(--h-weight, 900);
  --h2-color: var(--kuro-cyan-dark, #60BEBE);
  --h2-style: var(--h-font-style, oblique 10deg);
  --h2-variant: var(--h-font-variant, proportional-nums);
  --h2-weight: var(--h-weight, 900);
  --h3-color: var(--kuro-magenta-dark, #CC83BD);
  --h3-style: var(--h-font-style, oblique 10deg);
  --h3-variant: var(--h-font-variant, proportional-nums);
  --h3-weight: var(--h-weight, 900);
  --h4-color: var(--kuro-yellow-dark, #DBBB43);
  --h4-style: var(--h-font-style, oblique 10deg);
  --h4-variant: var(--h-font-variant, proportional-nums);
  --h4-weight: var(--h-weight, 900);
  --h5-color: var(--kuro-red-dark, #B66056);
  --h5-style: var(--h-font-style, oblique 10deg);
  --h5-variant: var(--h-font-variant, proportional-nums);
  --h5-weight: var(--h-weight, 900);
  --h6-color: var(--kuro-blue-dark, #6890D7);
  --h6-style: var(--h-font-style, oblique 10deg);
  --h6-variant: var(--h-font-variant, proportional-nums);
  --h6-weight: var(--h-weight, 900);
  --headerFont: var(--font-text-theme, "Atkinson Hyperlegible", "serif");
  --heading-formatting: var(--kuro-white-light, #FFFFFF);
  --hr-color: rgba(var(--kuro-white-dark-rgb), 0.3);
  --hr-thickness: 4px;
  --icon-color: var(--kuro-white-normal, #DDD0C4);
  --icon-color-active: var(--kuro-purple-light, #A994FF);
  --icon-color-focused: var(--kuro-purple-normal, #9E60EC);
  --icon-color-hover: var(--kuro-yellow-dark, #DBBB43);
  --icon-opacity: 0.75;
  --icon-opacity-hover: 0.9;
  --indentation-guide-width: var(--border-width, 2px);
  --indentation-guide-width-active: var(--border-width, 2px);
  --inline-title-color: var(--kuro-white-dark, #94959B);
  --inline-title-size: var(--h1-size, 28px);
  --inline-title-style: var(--h1-style, oblique 10deg);
  --inline-title-variant: var(--h1-variant, proportional-nums);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, rgba(255, 255, 255, 0.6));
  --input-placeholder-color: var(--text-faint, rgba(255, 255, 255, 0.6));
  --input-radius: 4px;
  --interactive-accent: var(--color-accent, hsl(260.488, 18.2222%, 55.8824%));
  --interactive-accent-hover: var(--color-accent-1, hsl(257.488, 18.58664%, 64.26476%));
  --interactive-accent-hsl: var(--color-accent-hsl, 260.488, 18.2222%, 55.8824%);
  --italic-color: var(--bold-color, #FFFFFF);
  --italic-weight: var(--font-light, 300);
  --kuro-black-dark: #141515;
  --kuro-black-dark-rgb: 20, 21, 21;
  --kuro-black-light: #515151;
  --kuro-black-light-rgb: 81, 81, 81;
  --kuro-black-normal: #333333;
  --kuro-black-normal-rgb: 51, 51, 51;
  --kuro-blue-dark: #6890D7;
  --kuro-blue-dark-rgb: 104, 144, 215;
  --kuro-blue-light: #A1D9FF;
  --kuro-blue-light-rgb: 161, 217, 255;
  --kuro-blue-normal: #2AB9FF;
  --kuro-blue-normal-rgb: 42, 185, 255;
  --kuro-brown-dark: #837369;
  --kuro-brown-dark-rgb: 131, 115, 105;
  --kuro-brown-light: #F9CFB9;
  --kuro-brown-light-rgb: 249, 207, 185;
  --kuro-brown-normal: #9D5918;
  --kuro-brown-normal-rgb: 157, 89, 24;
  --kuro-code-attribute: #FFF700;
  --kuro-code-bg: #141515;
  --kuro-code-comment: #FCFFB8;
  --kuro-code-constant: #2AB9FF;
  --kuro-code-constant-builtin: #2AB9FF;
  --kuro-code-constant-builtin-bg: #6890D7;
  --kuro-code-constant-character-escape: #F9CFB9;
  --kuro-code-constant-numeric: #60BEBE;
  --kuro-code-constructor: #1EF9F5;
  --kuro-code-fg: #FFFFFF;
  --kuro-code-function: #DBBB43;
  --kuro-code-function-macro: #A994FF;
  --kuro-code-keyword: #6890D7;
  --kuro-code-label: #FCFFB8;
  --kuro-code-namespace: #1EF9F5;
  --kuro-code-operator: #94959B;
  --kuro-code-punctuation: #94959B;
  --kuro-code-special: #C1FFAE;
  --kuro-code-string: #85B1A9;
  --kuro-code-type: #E59605;
  --kuro-code-type-builtin: #A1D9FF;
  --kuro-code-type-enum-variant: #FCFFB8;
  --kuro-code-variable: #CC83BD;
  --kuro-code-variable-other: #9D5918;
  --kuro-code-variable-other-member: #AB7B4E;
  --kuro-cyan-dark: #60BEBE;
  --kuro-cyan-dark-rgb: 96, 190, 190;
  --kuro-cyan-light: #8EFFF3;
  --kuro-cyan-light-rgb: 142, 255, 243;
  --kuro-cyan-normal: #1EF9F5;
  --kuro-cyan-normal-rgb: 30, 249, 245;
  --kuro-green-dark: #85B1A9;
  --kuro-green-dark-rgb: 133, 177, 169;
  --kuro-green-light: #C1FFAE;
  --kuro-green-light-rgb: 193, 255, 174;
  --kuro-green-normal: #54CA74;
  --kuro-green-normal-rgb: 84, 202, 116;
  --kuro-magenta-dark: #CC83BD;
  --kuro-magenta-dark-rgb: 204, 131, 189;
  --kuro-magenta-light: #FFA2ED;
  --kuro-magenta-light-rgb: 255, 162, 237;
  --kuro-magenta-normal: #FF50DA;
  --kuro-magenta-normal-rgb: 255, 80, 218;
  --kuro-monospace-default: "JetBrainsMono Nerd Font", ui-monospace, SFMono-Regular, "Cascadia Code", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --kuro-orange-dark: #AB7B4E;
  --kuro-orange-dark-rgb: 171, 123, 78;
  --kuro-orange-light: #FFC663;
  --kuro-orange-light-rgb: 255, 198, 99;
  --kuro-orange-normal: #E59605;
  --kuro-orange-normal-rgb: 229, 150, 5;
  --kuro-purple-dark: #887AA3;
  --kuro-purple-dark-rgb: 136, 122, 163;
  --kuro-purple-light: #A994FF;
  --kuro-purple-light-rgb: 169, 148, 255;
  --kuro-purple-normal: #9E60EC;
  --kuro-purple-normal-rgb: 158, 96, 236;
  --kuro-red-dark: #B66056;
  --kuro-red-dark-rgb: 182, 96, 86;
  --kuro-red-light: #FFB7B7;
  --kuro-red-light-rgb: 255, 183, 183;
  --kuro-red-normal: #D23E08;
  --kuro-red-normal-rgb: 210, 62, 8;
  --kuro-white-dark: #94959B;
  --kuro-white-dark-rgb: 148, 149, 155;
  --kuro-white-light: #FFFFFF;
  --kuro-white-light-rgb: 255, 255, 255;
  --kuro-white-normal: #DDD0C4;
  --kuro-white-normal-rgb: 221, 208, 196;
  --kuro-yellow-dark: #DBBB43;
  --kuro-yellow-dark-rgb: 219, 187, 67;
  --kuro-yellow-light: #FCFFB8;
  --kuro-yellow-light-rgb: 252, 255, 184;
  --kuro-yellow-normal: #FFF700;
  --kuro-yellow-normal-rgb: 255, 247, 0;
  --light: var(--background-primary, var(--kuro-black-dark, #141515));
  --lightgray: var(--background-secondary, var(--color-base-20, #212121));
  --link-color: var(--kuro-blue-normal, #2AB9FF);
  --link-color-hover: var(--kuro-blue-light, #A1D9FF);
  --link-external-color: var(--kuro-green-normal, #54CA74);
  --link-external-color-hover: var(--kuro-green-light, #C1FFAE);
  --link-unresolved-color: var(--text-accent, hsl(257.488, 18.58664%, 64.26476%));
  --list-bullet-size: 0.4em;
  --list-marker-color: var(--kuro-white-dark, #94959B);
  --list-marker-color-collapsed: var(--text-accent, hsl(257.488, 18.58664%, 64.26476%));
  --list-marker-color-hover: var(--text-muted, rgba(255, 255, 255, 0.8));
  --menu-background: var(--background-secondary, #212121);
  --menu-border-width: var(--border-width, 2px);
  --metadata-input-text-color: var(--text-normal, rgb(255, 255, 255));
  --metadata-label-text-color: var(--text-muted, rgba(255, 255, 255, 0.8));
  --metadata-label-text-color-hover: var(--text-muted, rgba(255, 255, 255, 0.8));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 16px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 16px);
  --modal-background: var(--background-primary, #141515);
  --modal-border-width: var(--border-width, 2px);
  --modal-radius: var(--radius-l, 16px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #DDD0C4);
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgba(255, 255, 255, 0.6));
  --nav-heading-color: var(--text-normal, rgb(255, 255, 255));
  --nav-heading-color-collapsed: var(--text-faint, rgba(255, 255, 255, 0.6));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgba(255, 255, 255, 0.8));
  --nav-heading-color-hover: var(--text-normal, rgb(255, 255, 255));
  --nav-indentation-guide-width: var(--indentation-guide-width, 2px);
  --nav-item-color: var(--text-muted, rgba(255, 255, 255, 0.8));
  --nav-item-color-active: var(--text-normal, rgb(255, 255, 255));
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(255.488, 19.13331%, 72.0883%));
  --nav-item-color-hover: var(--text-normal, rgb(255, 255, 255));
  --nav-item-color-selected: var(--text-normal, rgb(255, 255, 255));
  --nav-item-size: var(--font-ui-small, 16px);
  --nav-tag-color: var(--text-faint, rgba(255, 255, 255, 0.6));
  --nav-tag-color-active: var(--text-muted, rgba(255, 255, 255, 0.8));
  --nav-tag-color-hover: var(--text-muted, rgba(255, 255, 255, 0.8));
  --pdf-background: var(--background-primary, #141515);
  --pdf-page-background: var(--background-primary, #141515);
  --pdf-sidebar-background: var(--background-primary, #141515);
  --pill-border-width: var(--border-width, 2px);
  --pill-color: var(--text-muted, rgba(255, 255, 255, 0.8));
  --pill-color-hover: var(--text-normal, rgb(255, 255, 255));
  --pill-color-remove: var(--text-faint, rgba(255, 255, 255, 0.6));
  --pill-color-remove-hover: var(--text-accent, hsl(257.488, 18.58664%, 64.26476%));
  --prompt-background: var(--background-primary, #141515);
  --prompt-border-color: var(--kuro-purple-dark, #887AA3);
  --prompt-border-width: var(--border-width, 2px);
  --prompt-input-height: 48px;
  --prompt-width: 720px;
  --radius-l: 16px;
  --ribbon-background: var(--background-secondary, #212121);
  --ribbon-background-collapsed: var(--background-primary, #141515);
  --scrollbar-radius: var(--radius-l, 16px);
  --search-clear-button-color: var(--kuro-red-dark, #B66056);
  --search-icon-color: var(--kuro-purple-dark, #887AA3);
  --search-result-background: var(--background-primary, #141515);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(257.488, 18.58664%, 64.26476%)));
  --setting-group-heading-color: var(--text-normal, rgb(255, 255, 255));
  --setting-group-heading-size: var(--font-ui-medium, 18px);
  --setting-items-radius: var(--radius-l, 16px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgba(255, 255, 255, 0.8));
  --shiki-code-background: var(--code-background, #141515);
  --shiki-code-block-border-radius: var(--code-radius, 12px);
  --shiki-code-comment: var(--text-faint, rgba(255, 255, 255, 0.6));
  --shiki-code-normal: var(--text-muted, rgba(255, 255, 255, 0.8));
  --shiki-code-punctuation: var(--text-muted, rgba(255, 255, 255, 0.8));
  --shiki-gutter-border-width: var(--border-width, 2px);
  --shiki-gutter-text-color: var(--text-faint, rgba(255, 255, 255, 0.6));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgba(255, 255, 255, 0.8));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgba(255, 255, 255, 0.8));
  --shiki-terminal-dots-color: var(--text-faint, rgba(255, 255, 255, 0.6));
  --slider-thumb-border-width: var(--border-width, 2px);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-track-background: var(--kuro-white-dark, #94959B);
  --status-bar-background: var(--background-primary, #141515);
  --status-bar-border-color: var(--kuro-black-light, #515151);
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 2px 0 0 2px);
  --status-bar-font-size: var(--font-ui-smaller, 14px);
  --status-bar-text-color: var(--kuro-purple-dark, #887AA3);
  --suggestion-background: var(--background-primary, #141515);
  --tab-background-active: var(--background-primary, #141515);
  --tab-container-background: var(--background-secondary, #212121);
  --tab-font-size: var(--font-ui-small, 12px);
  --tab-outline-color: var(--divider-color, #515151);
  --tab-radius-active: 0px;
  --tab-stacked-font-size: var(--font-ui-small, 16px);
  --tab-switcher-background: var(--background-secondary, #212121);
  --tab-text-color: var(--text-faint, rgba(255, 255, 255, 0.6));
  --tab-text-color-active: var(--text-muted, rgba(255, 255, 255, 0.8));
  --tab-text-color-focused: var(--text-muted, rgba(255, 255, 255, 0.8));
  --tab-text-color-focused-active: var(--text-muted, rgba(255, 255, 255, 0.8));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(255, 255, 255));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(257.488, 18.58664%, 64.26476%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(260.488, 18.2222%, 55.8824%));
  --table-drag-handle-color: var(--text-faint, rgba(255, 255, 255, 0.6));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(255, 255, 255));
  --table-header-color: var(--text-normal, rgb(255, 255, 255));
  --table-header-weight: var(--bold-weight, 800);
  --table-selection-border-color: var(--interactive-accent, hsl(260.488, 18.2222%, 55.8824%));
  --tag-background: rgba(var(--kuro-purple-dark-rgb), 0.5);
  --tag-background-hover: rgba(var(--kuro-purple-dark-rgb), 0.8);
  --tag-color: var(--kuro-white-normal, #DDD0C4);
  --tag-color-hover: var(--kuro-white-light, #FFFFFF);
  --tag-weight: 100;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(255.488, 19.13331%, 72.0883%)));
  --text-accent: var(--color-accent-1, hsl(257.488, 18.58664%, 64.26476%));
  --text-accent-hover: var(--color-accent-2, hsl(255.488, 19.13331%, 72.0883%));
  --text-error: var(--kuro-red-light, #FFB7B7);
  --text-faint: rgba(var(--kuro-white-light-rgb), 0.6);
  --text-muted: rgba(var(--kuro-white-light-rgb), 0.8);
  --text-normal: rgba(var(--kuro-white-light-rgb), 1);
  --text-on-accent: var(--text-normal, rgb(255, 255, 255));
  --text-on-accent-inverted: var(--kuro-black-dark, #141515);
  --text-success: var(--kuro-green-normal, #54CA74);
  --text-warning: var(--kuro-orange-normal, #E59605);
  --titleFont: var(--font-text-theme, "Atkinson Hyperlegible", "serif");
  --titlebar-background: var(--background-secondary, #212121);
  --titlebar-text-color: var(--text-muted, rgba(255, 255, 255, 0.8));
  --titlebar-text-color-focused: var(--text-normal, rgb(255, 255, 255));
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-name-color: var(--text-normal, rgb(255, 255, 255));
  --vault-name-font-size: var(--font-ui-small, 16px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, rgb(255, 255, 255));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(255, 255, 255));
  --vault-profile-font-size: var(--font-ui-small, 16px);
  --quartz-icon-color: currentColor;
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(33, 33, 33));
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(20, 21, 21));
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(33, 33, 33));
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(81, 81, 81);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(33, 33, 33));
  border-left-color: rgb(81, 81, 81);
  color: rgb(255, 255, 255);
}

html body html {
  --kuro-black-dark: #141515;
  --kuro-black-dark-rgb: 20, 21, 21;
  --kuro-black-light: #515151;
  --kuro-black-light-rgb: 81, 81, 81;
  --kuro-black-normal: #333333;
  --kuro-black-normal-rgb: 51, 51, 51;
  --kuro-blue-dark: #6890D7;
  --kuro-blue-dark-rgb: 104, 144, 215;
  --kuro-blue-light: #A1D9FF;
  --kuro-blue-light-rgb: 161, 217, 255;
  --kuro-blue-normal: #2AB9FF;
  --kuro-blue-normal-rgb: 42, 185, 255;
  --kuro-brown-dark: #837369;
  --kuro-brown-dark-rgb: 131, 115, 105;
  --kuro-brown-light: #F9CFB9;
  --kuro-brown-light-rgb: 249, 207, 185;
  --kuro-brown-normal: #9D5918;
  --kuro-brown-normal-rgb: 157, 89, 24;
  --kuro-code-attribute: var(--kuro-yellow-normal, #FFF700);
  --kuro-code-bg: var(--kuro-black-dark, #141515);
  --kuro-code-comment: var(--kuro-yellow-light, #FCFFB8);
  --kuro-code-constant: var(--kuro-blue-normal, #2AB9FF);
  --kuro-code-constant-builtin: var(--kuro-blue-normal, #2AB9FF);
  --kuro-code-constant-builtin-bg: var(--kuro-blue-dark, #6890D7);
  --kuro-code-constant-character-escape: var(--kuro-brown-light, #F9CFB9);
  --kuro-code-constant-numeric: var(--kuro-cyan-dark, #60BEBE);
  --kuro-code-constructor: var(--kuro-cyan-normal, #1EF9F5);
  --kuro-code-fg: var(--kuro-white-light, #FFFFFF);
  --kuro-code-function: var(--kuro-yellow-dark, #DBBB43);
  --kuro-code-function-macro: var(--kuro-purple-light, #A994FF);
  --kuro-code-keyword: var(--kuro-blue-dark, #6890D7);
  --kuro-code-label: var(--kuro-yellow-light, #FCFFB8);
  --kuro-code-namespace: var(--kuro-cyan-normal, #1EF9F5);
  --kuro-code-operator: var(--kuro-white-dark, #94959B);
  --kuro-code-punctuation: var(--kuro-white-dark, #94959B);
  --kuro-code-special: var(--kuro-green-light, #C1FFAE);
  --kuro-code-string: var(--kuro-green-dark, #85B1A9);
  --kuro-code-type: var(--kuro-orange-normal, #E59605);
  --kuro-code-type-builtin: var(--kuro-blue-light, #A1D9FF);
  --kuro-code-type-enum-variant: var(--kuro-yellow-light, #FCFFB8);
  --kuro-code-variable: var(--kuro-magenta-dark, #CC83BD);
  --kuro-code-variable-other: var(--kuro-brown-normal, #9D5918);
  --kuro-code-variable-other-member: var(--kuro-orange-dark, #AB7B4E);
  --kuro-cyan-dark: #60BEBE;
  --kuro-cyan-dark-rgb: 96, 190, 190;
  --kuro-cyan-light: #8EFFF3;
  --kuro-cyan-light-rgb: 142, 255, 243;
  --kuro-cyan-normal: #1EF9F5;
  --kuro-cyan-normal-rgb: 30, 249, 245;
  --kuro-green-dark: #85B1A9;
  --kuro-green-dark-rgb: 133, 177, 169;
  --kuro-green-light: #C1FFAE;
  --kuro-green-light-rgb: 193, 255, 174;
  --kuro-green-normal: #54CA74;
  --kuro-green-normal-rgb: 84, 202, 116;
  --kuro-magenta-dark: #CC83BD;
  --kuro-magenta-dark-rgb: 204, 131, 189;
  --kuro-magenta-light: #FFA2ED;
  --kuro-magenta-light-rgb: 255, 162, 237;
  --kuro-magenta-normal: #FF50DA;
  --kuro-magenta-normal-rgb: 255, 80, 218;
  --kuro-monospace-default: "JetBrainsMono Nerd Font", ui-monospace, SFMono-Regular, "Cascadia Code", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --kuro-orange-dark: #AB7B4E;
  --kuro-orange-dark-rgb: 171, 123, 78;
  --kuro-orange-light: #FFC663;
  --kuro-orange-light-rgb: 255, 198, 99;
  --kuro-orange-normal: #E59605;
  --kuro-orange-normal-rgb: 229, 150, 5;
  --kuro-purple-dark: #887AA3;
  --kuro-purple-dark-rgb: 136, 122, 163;
  --kuro-purple-light: #A994FF;
  --kuro-purple-light-rgb: 169, 148, 255;
  --kuro-purple-normal: #9E60EC;
  --kuro-purple-normal-rgb: 158, 96, 236;
  --kuro-red-dark: #B66056;
  --kuro-red-dark-rgb: 182, 96, 86;
  --kuro-red-light: #FFB7B7;
  --kuro-red-light-rgb: 255, 183, 183;
  --kuro-red-normal: #D23E08;
  --kuro-red-normal-rgb: 210, 62, 8;
  --kuro-white-dark: #94959B;
  --kuro-white-dark-rgb: 148, 149, 155;
  --kuro-white-light: #FFFFFF;
  --kuro-white-light-rgb: 255, 255, 255;
  --kuro-white-normal: #DDD0C4;
  --kuro-white-normal-rgb: 221, 208, 196;
  --kuro-yellow-dark: #DBBB43;
  --kuro-yellow-dark-rgb: 219, 187, 67;
  --kuro-yellow-light: #FCFFB8;
  --kuro-yellow-light-rgb: 252, 255, 184;
  --kuro-yellow-normal: #FFF700;
  --kuro-yellow-normal-rgb: 255, 247, 0;
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(255, 255, 255));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .markdown-rendered p > em, html em {
  color: var(--bold-color, rgb(255, 255, 255));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .markdown-rendered p > i, html i {
  color: var(--bold-color, rgb(255, 255, 255));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(255, 255, 255));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: var(--kuro-yellow-dark, rgb(219, 187, 67));
  color: var(--kuro-black-dark, rgb(20, 21, 21));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(20, 21, 21) none 0px;
  text-decoration-color: rgb(20, 21, 21);
}

html body del {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body h1.article-title {
  color: var(--text-normal, rgb(255, 255, 255));
  font-size: 12px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(148, 149, 155);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(81, 81, 81));
  border-color: rgb(81, 81, 81);
}

html body p {
  color: var(--text-muted, rgba(255, 255, 255, 0.8));
  outline: rgba(255, 255, 255, 0.8) none 0px;
  text-decoration-color: rgba(255, 255, 255, 0.8);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(84, 202, 116));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(84, 202, 116) none 0px;
  text-decoration-color: rgb(84, 202, 116);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(42, 185, 255));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 185, 255) none 0px;
  text-decoration-color: rgb(42, 185, 255);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(157, 147, 181));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(157, 147, 181) none 0px;
  text-decoration: underline rgba(136, 122, 163, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(136, 122, 163, 0.3));
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
  color: var(--text-faint, rgba(255, 255, 255, 0.6));
}

html body blockquote {
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 224.656px;
}

html body td {
  color: var(--table-text-color, rgb(255, 255, 255));
}

html body th {
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 800);
}`,
    code: `html body code {
  background-color: var(--kuro-black-light, rgb(81, 81, 81));
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: var(--code-inline, rgb(219, 187, 67));
  font-family: var(--kuro-monospace-default, "JetBrainsMono Nerd Font", ui-monospace, SFMono-Regular, "Cascadia Code", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html body pre:has(> code) {
  background-color: var(--kuro-black-normal, rgb(20, 21, 21));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body img {
  border-bottom-color: rgb(148, 149, 155);
  border-left-color: rgb(148, 149, 155);
  border-right-color: rgb(148, 149, 155);
  border-top-color: rgb(148, 149, 155);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(136, 122, 163);
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
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(148, 149, 155);
  border-left-color: rgb(148, 149, 155);
  border-right-color: rgb(148, 149, 155);
  border-top-color: rgb(148, 149, 155);
  margin-left: -36px;
  width: var(--checkbox-size, 24px);
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
  color: rgb(148, 149, 155);
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
  color: rgb(148, 149, 155);
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
  background-color: rgb(148, 149, 155);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 149, 155);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
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
  background-color: rgb(251, 70, 76);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 169, 148, 255);
  background: rgba(169, 148, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(169, 148, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(169, 148, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(169, 148, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(169, 148, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 158, 96, 236);
  background: rgba(158, 96, 236, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(158, 96, 236, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 96, 236, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(158, 96, 236, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(158, 96, 236, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 210, 62, 8);
  background: rgba(210, 62, 8, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(210, 62, 8, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(210, 62, 8, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(210, 62, 8, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(210, 62, 8, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 204, 131, 189);
  background: rgba(204, 131, 189, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(204, 131, 189, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(204, 131, 189, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(204, 131, 189, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(204, 131, 189, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 182, 96, 86);
  background: rgba(182, 96, 86, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(182, 96, 86, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(182, 96, 86, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(182, 96, 86, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(182, 96, 86, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 42, 185, 255);
  background: rgba(42, 185, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(42, 185, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(42, 185, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(42, 185, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(42, 185, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 104, 144, 215);
  background: rgba(104, 144, 215, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(104, 144, 215, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(104, 144, 215, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(104, 144, 215, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(104, 144, 215, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 171, 123, 78);
  background: rgba(171, 123, 78, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(171, 123, 78, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(171, 123, 78, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(171, 123, 78, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(171, 123, 78, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 157, 89, 24);
  background: rgba(157, 89, 24, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(157, 89, 24, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(157, 89, 24, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(157, 89, 24, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(157, 89, 24, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 84, 202, 116);
  background: rgba(84, 202, 116, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(84, 202, 116, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(84, 202, 116, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(84, 202, 116, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(84, 202, 116, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 96, 190, 190);
  background: rgba(96, 190, 190, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(96, 190, 190, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(96, 190, 190, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(96, 190, 190, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(96, 190, 190, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 161, 217, 255);
  background: rgba(161, 217, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(161, 217, 255, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(161, 217, 255, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(161, 217, 255, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(161, 217, 255, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 229, 150, 5);
  background: rgba(229, 150, 5, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(229, 150, 5, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(229, 150, 5, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(229, 150, 5, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(229, 150, 5, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 104, 144, 215;
  border-bottom-color: rgb(104, 144, 215);
  border-left-color: rgb(104, 144, 215);
  border-right-color: rgb(104, 144, 215);
  border-top-color: rgb(104, 144, 215);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(104, 144, 215));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 255, 255);
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
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-normal, rgb(255, 255, 255));
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(20, 21, 21));
  border-bottom-color: rgb(136, 122, 163);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 2px;
  border-left-color: rgb(136, 122, 163);
  border-left-width: 2px;
  border-right-color: rgb(136, 122, 163);
  border-right-width: 2px;
  border-top-color: rgb(136, 122, 163);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(136, 122, 163);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-width: 2px;
  border-left-color: rgb(136, 122, 163);
  border-left-width: 2px;
  border-right-color: rgb(136, 122, 163);
  border-right-width: 2px;
  border-top-color: rgb(136, 122, 163);
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 33, 33);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(136, 122, 163, 0.5));
  border-bottom-color: rgba(136, 122, 163, 0.15);
  border-left-color: rgba(136, 122, 163, 0.15);
  border-right-color: rgba(136, 122, 163, 0.15);
  border-top-color: rgba(136, 122, 163, 0.15);
  font-weight: var(--pill-weight, 100);
}

html body a.internal-link.tag-link::before {
  color: rgb(221, 208, 196);
}

html body h1 {
  color: var(--h1-color, rgb(148, 149, 155));
  font-family: var(--h1-font, "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(148, 149, 155));
  font-size: var(--inline-title-size, 28px);
  font-weight: var(--inline-title-weight, 600);
}

html body h2 {
  color: var(--h2-color, rgb(96, 190, 190));
  font-family: var(--h2-font, "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h2.page-title, html h2.page-title a {
  color: var(--inline-title-color, rgb(148, 149, 155));
  font-family: var(--inline-title-font, "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h3 {
  color: var(--h3-color, rgb(204, 131, 189));
  font-family: var(--h3-font, "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h4 {
  color: var(--h4-color, rgb(219, 187, 67));
  font-family: var(--h4-font, "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h5 {
  color: var(--h5-color, rgb(182, 96, 86));
  font-family: var(--h5-font, "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body h6 {
  color: var(--h6-color, rgb(104, 144, 215));
  font-family: var(--h6-font, "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html body hr {
  border-bottom-color: rgb(81, 81, 81);
  border-left-color: rgb(81, 81, 81);
  border-right-color: rgb(81, 81, 81);
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 104, 144, 215);
  border-bottom-color: rgba(104, 144, 215, 0.45);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(104, 144, 215, 0.45);
  border-left-width: 1px;
  border-right-color: rgba(104, 144, 215, 0.45);
  border-right-width: 1px;
  border-top-color: rgba(104, 144, 215, 0.45);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html body .nav-files-container .tree-item-children {
  border-left-width: 2px;
}

html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgba(255, 255, 255, 0.8));
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgba(255, 255, 255, 0.8));
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(221, 208, 196);
  border-left-color: rgb(221, 208, 196);
  border-right-color: rgb(221, 208, 196);
  border-top-color: rgb(221, 208, 196);
  color: var(--icon-color, rgb(221, 208, 196));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(20, 21, 21));
  border-bottom-color: rgb(81, 81, 81);
  border-left-color: rgb(81, 81, 81);
  border-left-width: 2px;
  border-right-color: rgb(81, 81, 81);
  border-top-color: rgb(81, 81, 81);
  border-top-width: 2px;
  color: var(--status-bar-text-color, rgb(136, 122, 163));
}

html body footer ul li a {
  color: rgb(136, 122, 163);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgba(255, 255, 255, 0.8));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(255, 255, 255, 0.8);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  color: rgba(255, 255, 255, 0.8);
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgba(255, 255, 255, 0.8));
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(221, 208, 196);
  border-left-color: rgb(221, 208, 196);
  border-right-color: rgb(221, 208, 196);
  border-top-color: rgb(221, 208, 196);
  color: var(--icon-color, rgb(221, 208, 196));
}

html body .darkmode svg {
  color: rgb(221, 208, 196);
  stroke: rgb(221, 208, 196);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
}

html body .breadcrumb-element p {
  color: var(--text-faint, rgba(255, 255, 255, 0.6));
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
  background-color: var(--background-secondary, rgb(33, 33, 33));
  border-color: rgb(255, 255, 255);
}`,
    bases: `html body .bases-table thead th {
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 800);
}`,
    properties: `html body .metadata {
  color: var(--text-muted, rgba(255, 255, 255, 0.8));
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  font-family: "??", "Atkinson Hyperlegible", "serif", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .note-properties-key {
  color: rgba(255, 255, 255, 0.8);
}

html body .note-properties-row {
  border-color: rgba(255, 255, 255, 0.8);
}

html body .note-properties-tags {
  background-color: var(--pill-background, rgba(136, 122, 163, 0.5));
  color: var(--pill-color, rgb(221, 208, 196));
}

html body .note-properties-value {
  color: rgba(255, 255, 255, 0.8);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(20, 21, 21));
  color: var(--text-normal, rgb(255, 255, 255));
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(33, 33, 33));
  border-color: rgb(255, 255, 255);
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
  background-color: var(--status-bar-background, rgb(20, 21, 21));
}

html body .page-header h2.page-title {
  color: var(--text-normal, rgb(255, 255, 255));
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
  border-bottom-color: rgba(255, 255, 255, 0.8);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-right-color: rgba(255, 255, 255, 0.8);
  border-top-color: rgba(255, 255, 255, 0.8);
  color: var(--text-normal, rgba(255, 255, 255, 0.8));
}

html body kbd {
  background-color: var(--code-background, rgb(20, 21, 21));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--code-normal, rgb(255, 255, 255));
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
  background-color: var(--tag-background, rgba(136, 122, 163, 0.5));
  border-bottom-color: rgba(136, 122, 163, 0.15);
  border-left-color: rgba(136, 122, 163, 0.15);
  border-right-color: rgba(136, 122, 163, 0.15);
  border-top-color: rgba(136, 122, 163, 0.15);
  color: var(--tag-color, rgb(221, 208, 196));
}`,
  },
  light: {},
};
