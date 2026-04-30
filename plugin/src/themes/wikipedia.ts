import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "wikipedia",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["archivo", "linux-libertine"],
    fontFiles: [
      {
        family: "Linux Libertine",
        style: "normal",
        weight: "normal",
        file: "linux-libertine.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Linux Libertine",
        style: "normal",
        weight: "bold",
        file: "linux-libertine-1.woff",
        format: "woff",
        unicodeRange: null,
      },
      {
        family: "Linux Libertine",
        style: "italic",
        weight: "normal",
        file: "linux-libertine-2.woff",
        format: "woff",
        unicodeRange: null,
      },
    ],
    styleSettingsId: "wikipedia-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 215;
  --accent-l: 50%;
  --accent-s: 79%;
  --background-modifier-border: var(--color-base-30, #dae1ea31);
  --background-modifier-border-focus: var(--color-base-40, rgb(50, 52, 60));
  --background-modifier-border-hover: var(--color-base-35, #313539);
  --background-modifier-error: var(--color-red, rgb(232, 41, 41));
  --background-modifier-error-hover: var(--color-red, rgb(232, 41, 41));
  --background-modifier-error-rgb: var(--color-red-rgb, 232, 51,51);
  --background-modifier-form-field: var(--color-base-25, #2f3135);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #2f3135);
  --background-modifier-success: var(--color-green, rgb(82, 163, 0));
  --background-modifier-success-rgb: var(--color-green-rgb, 97, 194, 0);
  --background-primary: var(--color-base-00, #1e1f21);
  --background-primary-alt: var(--color-base-10, #242629);
  --background-secondary: var(--color-base-20, #27282b);
  --background-secondary-alt: var(--color-base-10, #242629);
  --bases-cards-background: var(--background-primary, #1e1f21);
  --bases-cards-cover-background: var(--background-primary-alt, #242629);
  --bases-cards-radius: var(--radius-m, 0px);
  --bases-embed-border-color: var(--background-modifier-border, #dae1ea31);
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, #d0d4d9);
  --bases-table-border-color: var(--table-border-color, #dae1ea31);
  --bases-table-cell-background-active: var(--background-primary, #1e1f21);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #242629);
  --bases-table-cell-background-selected: var(--table-selection, hsla(215, 79%, 50%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-group-background: var(--background-primary-alt, #242629);
  --bases-table-header-background: var(--background-primary, #1e1f21);
  --bases-table-header-color: var(--text-muted, #d0d4d9);
  --bases-table-summary-background: var(--background-primary, #1e1f21);
  --blockquote-border-color: var(--interactive-accent, hsl(215, 79%, 50%));
  --button-radius: var(--input-radius, 0px);
  --callout-bug: var(--color-red-rgb, 232, 51,51);
  --callout-default: var(--color-blue-rgb, 0, 105, 224);
  --callout-error: var(--color-red-rgb, 232, 51,51);
  --callout-example: var(--color-purple-rgb, 81, 0, 194);
  --callout-fail: var(--color-red-rgb, 232, 51,51);
  --callout-important: var(--color-cyan-rgb, 0, 194, 97);
  --callout-info: var(--color-blue-rgb, 0, 105, 224);
  --callout-question: var(--color-orange-rgb, 230, 111, 0);
  --callout-quote: 110, 110, 110;
  --callout-radius: var(--radius-s, 0px);
  --callout-success: var(--color-green-rgb, 97, 194, 0);
  --callout-summary: var(--color-cyan-rgb, 0, 194, 97);
  --callout-tip: var(--color-cyan-rgb, 0, 194, 97);
  --callout-todo: var(--color-blue-rgb, 0, 105, 224);
  --callout-warning: var(--color-orange-rgb, 230, 111, 0);
  --canvas-background: var(--background-primary, #1e1f21);
  --canvas-card-label-color: var(--text-faint, rgb(142, 148, 157));
  --canvas-color-1: var(--color-red-rgb, 232, 51,51);
  --canvas-color-2: var(--color-orange-rgb, 230, 111, 0);
  --canvas-color-3: var(--color-yellow-rgb, 204, 204, 0);
  --canvas-color-4: var(--color-green-rgb, 97, 194, 0);
  --canvas-color-5: var(--color-cyan-rgb, 0, 194, 97);
  --canvas-color-6: var(--color-purple-rgb, 81, 0, 194);
  --canvas-controls-radius: var(--radius-s, 0px);
  --canvas-dot-pattern: var(--color-base-30, #35383d);
  --caret-color: var(--text-normal, #d8dce3);
  --checkbox-border-color: var(--text-faint, rgb(142, 148, 157));
  --checkbox-border-color-hover: var(--text-muted, #d0d4d9);
  --checkbox-color: var(--interactive-accent, hsl(215, 79%, 50%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(215, 79%, 53.5%));
  --checkbox-marker-color: var(--background-primary, #1e1f21);
  --checkbox-radius: var(--radius-s, 0px);
  --checklist-done-color: var(--text-muted, #d0d4d9);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-secondary-alt, #242629);
  --code-border-color: var(--background-modifier-border, #dae1ea31);
  --code-comment: var(--text-faint, rgb(142, 148, 157));
  --code-function: var(--color-yellow, rgb(163, 163, 0));
  --code-important: var(--color-orange, rgb(230, 111, 0));
  --code-keyword: var(--color-pink, rgb(194, 0, 81));
  --code-normal: var(--text-normal, #d8dce3);
  --code-operator: var(--color-red, rgb(232, 41, 41));
  --code-property: var(--color-cyan, rgb(0, 163, 81));
  --code-punctuation: var(--text-muted, #d0d4d9);
  --code-radius: var(--radius-s, 0px);
  --code-string: var(--color-green, rgb(82, 163, 0));
  --code-tag: var(--color-red, rgb(232, 41, 41));
  --code-value: var(--color-purple, rgb(140, 63, 247));
  --collapse-icon-color: var(--text-faint, rgb(142, 148, 157));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(215, 79%, 53.5%));
  --color-accent-1: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) + 3.5%));
  --color-accent-2: hsl(calc(var(--accent-h) - 2), var(--accent-s), calc(var(--accent-l) - 4%));
  --color-accent-3: hsla(calc(var(--accent-h) - 10), var(--accent-s), var(--accent-l), 20%);
  --color-base-00: #1e1f21;
  --color-base-10: #242629;
  --color-base-100: #d8dce3;
  --color-base-20: #27282b;
  --color-base-25: #2f3135;
  --color-base-30: #35383d;
  --color-base-35: #313539;
  --color-base-40: rgb(50, 52, 60);
  --color-base-50: rgb(142, 148, 157);
  --color-base-60: rgb(179, 181, 193);
  --color-base-70: #d0d4d9;
  --color-blue: rgb(0, 105, 224);
  --color-blue-rgb: 0, 105, 224;
  --color-cyan: rgb(0, 163, 81);
  --color-cyan-rgb: 0, 194, 97;
  --color-green: rgb(82, 163, 0);
  --color-green-rgb: 97, 194, 0;
  --color-orange: rgb(230, 111, 0);
  --color-orange-rgb: 230, 111, 0;
  --color-pink: rgb(194, 0, 81);
  --color-pink-rgb: 194, 0, 81;
  --color-purple: rgb(140, 63, 247);
  --color-purple-rgb: 81, 0, 194;
  --color-red: rgb(232, 41, 41);
  --color-red-rgb: 232, 51,51;
  --color-yellow: rgb(163, 163, 0);
  --color-yellow-rgb: 204, 204, 0;
  --dark: var(--text-normal, var(--color-base-100, #d8dce3));
  --darkgray: var(--text-normal, var(--color-base-100, #d8dce3));
  --divider-color: var(--background-modifier-border, #dae1ea31);
  --divider-color-hover: var(--interactive-accent, hsl(215, 79%, 50%));
  --dropdown-background: var(--interactive-normal, #35383d);
  --dropdown-background-hover: var(--interactive-hover, #313539);
  --embed-border-left: none;
  --file-header-background: var(--background-primary, #1e1f21);
  --file-header-background-focused: var(--background-primary, #1e1f21);
  --file-header-font: var(--font-interface, Arial, Archivo, sans-serif);
  --file-line-width: 100%;
  --flair-background: var(--interactive-normal, #35383d);
  --flair-color: var(--text-normal, #d8dce3);
  --font-default: Arial, 'Archivo', sans-serif;
  --font-mermaid: var(--font-text, Arial, Archivo, sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, #dae1ea31);
  --footnote-id-color: var(--text-muted, #d0d4d9);
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(142, 148, 157));
  --footnote-radius: var(--radius-s, 0px);
  --graph-node: var(--text-muted, #d0d4d9);
  --graph-node-attachment: var(--color-yellow, rgb(163, 163, 0));
  --graph-node-focused: var(--text-accent, hsl(215, 79%, 53.5%));
  --graph-node-tag: var(--color-green, rgb(82, 163, 0));
  --graph-node-unresolved: var(--text-faint, rgb(142, 148, 157));
  --graph-text: var(--text-normal, #d8dce3);
  --gray: var(--text-muted, var(--color-base-70, #d0d4d9));
  --h1-font: 'Linux Libertine','Georgia','Times',serif;
  --h1-size: 1.7em;
  --h1-weight: 500;
  --h2-size: 1.25em;
  --h2-weight: bold;
  --h3-size: 1.17em;
  --h3-weight: bold;
  --h4-size: 1.12em;
  --h4-weight: bold;
  --h5-size: 1em;
  --h5-weight: bold;
  --h6-background: hsla(var(--accent-h), 35%, calc(var(--accent-l) + 10%), 15%);
  --h6-size: 0.99em;
  --h6-weight: bold;
  --heading-formatting: var(--text-faint, rgb(142, 148, 157));
  --hr-color: var(--background-modifier-border, #dae1ea31);
  --icon-color: var(--text-muted, #d0d4d9);
  --icon-color-active: var(--text-accent, hsl(215, 79%, 53.5%));
  --icon-color-focused: var(--text-normal, #d8dce3);
  --icon-color-hover: var(--text-muted, #d0d4d9);
  --icon-l: 16.5px;
  --icon-size: var(--icon-s, 16px);
  --image-width: var(--infobox-width, 25%);
  --img-max-width: 55%;
  --indentation-guide-width: var(--border-width, 0px);
  --infobox-margin: 1em 0px 1em 1em;
  --infobox-margin-left: 1em 1em 1em 0px;
  --infobox-position: right;
  --infobox-width: 25%;
  --inline-title-font: var(--h1-font, 'Linux Libertine','Georgia','Times',serif);
  --inline-title-size: var(--h1-size, 1.7em);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, rgb(142, 148, 157));
  --input-placeholder-color: var(--text-faint, rgb(142, 148, 157));
  --input-radius: 0px;
  --interactive-accent: var(--color-accent, hsl(215, 79%, 50%));
  --interactive-accent-hover: var(--color-accent-1, hsl(215, 79%, 53.5%));
  --interactive-accent-hsl: var(--color-accent-hsl, 215, 79%, 50%);
  --interactive-hover: var(--color-base-35, #313539);
  --interactive-normal: var(--color-base-30, #35383d);
  --light: var(--background-primary, var(--color-base-00, #1e1f21));
  --lightgray: var(--background-secondary, var(--color-base-20, #27282b));
  --link-color: hsl(calc(var(--accent-h) + 5), var(--accent-s), calc(var(--accent-l) + 15%));
  --link-color-hover: var(--text-accent-hover, hsl(213, 79%, 46%));
  --link-decoration: none;
  --link-external-color: hsl(calc(var(--accent-h) + 20), var(--accent-s), calc(var(--accent-l) + 20%));
  --link-external-color-hover: hsl(calc(var(--accent-h) + 10), var(--accent-s), calc(var(--accent-l) + 3%));
  --link-external-decoration: none;
  --link-unresolved-color: hsl(calc(var(--accent-h) - 5), var(--accent-s), calc(var(--accent-l) + 15%));
  --link-unresolved-opacity: 0.85;
  --list-bullet-size: 0.35em;
  --list-marker-color: var(--text-normal, #d8dce3);
  --list-marker-color-collapsed: var(--text-accent, hsl(215, 79%, 53.5%));
  --list-marker-color-hover: var(--text-muted, #d0d4d9);
  --menu-background: var(--background-secondary, #27282b);
  --menu-border-color: var(--background-modifier-border-hover, #313539);
  --menu-radius: var(--radius-m, 0px);
  --metadata-border-color: var(--background-modifier-border, #dae1ea31);
  --metadata-divider-color: var(--background-modifier-border, #dae1ea31);
  --metadata-input-font: var(--font-interface, Arial, Archivo, sans-serif);
  --metadata-input-text-color: var(--text-normal, #d8dce3);
  --metadata-label-font: var(--font-interface, Arial, Archivo, sans-serif);
  --metadata-label-text-color: var(--text-muted, #d0d4d9);
  --metadata-label-text-color-hover: var(--text-muted, #d0d4d9);
  --modal-background: var(--background-primary, #1e1f21);
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--text-muted, #d0d4d9);
  --nav-collapse-icon-color-collapsed: var(--text-muted, #d0d4d9);
  --nav-heading-color: var(--text-normal, #d8dce3);
  --nav-heading-color-collapsed: var(--text-faint, rgb(142, 148, 157));
  --nav-heading-color-collapsed-hover: var(--text-muted, #d0d4d9);
  --nav-heading-color-hover: var(--text-normal, #d8dce3);
  --nav-indentation-guide-width: var(--indentation-guide-width, 0px);
  --nav-item-children-padding-left: 0px;
  --nav-item-color: var(--text-muted, #d0d4d9);
  --nav-item-color-active: var(--text-normal, #d8dce3);
  --nav-item-color-highlighted: var(--text-accent, hsl(215, 79%, 53.5%));
  --nav-item-color-hover: var(--text-normal, #d8dce3);
  --nav-item-color-selected: var(--text-normal, #d8dce3);
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, rgb(142, 148, 157));
  --nav-tag-color-active: var(--text-muted, #d0d4d9);
  --nav-tag-color-hover: var(--text-muted, #d0d4d9);
  --nav-tag-radius: var(--radius-s, 0px);
  --pdf-background: var(--background-primary, #1e1f21);
  --pdf-page-background: var(--background-primary, #1e1f21);
  --pdf-sidebar-background: var(--background-primary, #1e1f21);
  --pill-border-color: var(--background-modifier-border, #dae1ea31);
  --pill-border-color-hover: var(--background-modifier-border-hover, #313539);
  --pill-color: var(--text-muted, #d0d4d9);
  --pill-color-hover: var(--text-normal, #d8dce3);
  --pill-color-remove: var(--text-faint, rgb(142, 148, 157));
  --pill-color-remove-hover: var(--text-accent, hsl(215, 79%, 53.5%));
  --prompt-background: var(--background-primary, #1e1f21);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --raised-background: var(--blur-background, color-mix(in srgb, #35383d 65%, transparent) linear-gradient(#35383d, color-mix(in srgb, #35383d 65%, transparent)));
  --ribbon-background: var(--background-primary, #1e1f21);
  --ribbon-background-collapsed: var(--background-primary, #1e1f21);
  --ribbon-width: 35px;
  --scrollbar-radius: var(--radius-l, 0px);
  --search-clear-button-color: var(--text-muted, #d0d4d9);
  --search-icon-color: var(--text-muted, #d0d4d9);
  --search-result-background: var(--background-primary, #1e1f21);
  --secondary: var(--text-accent, var(--color-accent-1, hsl(215, 79%, 53.5%)));
  --setting-group-heading-color: var(--text-normal, #d8dce3);
  --setting-items-background: var(--background-primary-alt, #242629);
  --setting-items-border-color: var(--background-modifier-border, #dae1ea31);
  --setting-items-radius: var(--radius-l, 0px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #d0d4d9);
  --shiki-code-background: var(--code-background, #242629);
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, rgb(142, 148, 157));
  --shiki-code-function: var(--color-green, rgb(82, 163, 0));
  --shiki-code-important: var(--color-orange, rgb(230, 111, 0));
  --shiki-code-keyword: var(--color-pink, rgb(194, 0, 81));
  --shiki-code-normal: var(--text-muted, #d0d4d9);
  --shiki-code-property: var(--color-cyan, rgb(0, 163, 81));
  --shiki-code-punctuation: var(--text-muted, #d0d4d9);
  --shiki-code-string: var(--color-yellow, rgb(163, 163, 0));
  --shiki-code-value: var(--color-purple, rgb(140, 63, 247));
  --shiki-gutter-border-color: var(--background-modifier-border, #dae1ea31);
  --shiki-gutter-text-color: var(--text-faint, rgb(142, 148, 157));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #d0d4d9);
  --shiki-highlight-neutral: var(--shiki-code-normal, #d0d4d9);
  --shiki-terminal-dots-color: var(--text-faint, rgb(142, 148, 157));
  --slider-thumb-border-color: var(--background-modifier-border-hover, #313539);
  --slider-track-background: var(--background-modifier-border, #dae1ea31);
  --status-bar-background: var(--background-secondary, #27282b);
  --status-bar-border-color: var(--divider-color, #dae1ea31);
  --status-bar-radius: var(--radius-m, 0px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #d0d4d9);
  --suggestion-background: var(--background-primary, #1e1f21);
  --sync-avatar-color-1: var(--color-red, rgb(232, 41, 41));
  --sync-avatar-color-2: var(--color-orange, rgb(230, 111, 0));
  --sync-avatar-color-3: var(--color-yellow, rgb(163, 163, 0));
  --sync-avatar-color-4: var(--color-green, rgb(82, 163, 0));
  --sync-avatar-color-5: var(--color-cyan, rgb(0, 163, 81));
  --sync-avatar-color-6: var(--color-blue, rgb(0, 105, 224));
  --sync-avatar-color-7: var(--color-purple, rgb(140, 63, 247));
  --sync-avatar-color-8: var(--color-pink, rgb(194, 0, 81));
  --tab-background-active: var(--background-primary, #1e1f21);
  --tab-container-background: var(--background-secondary, #27282b);
  --tab-curve: 0px;
  --tab-divider-color: var(--tab-outline-color, hsl(205, 79%, 50%, 55%));
  --tab-gradient: linear-gradient(to top,var(--color-accent-2) 0px,  var(--color-accent-3) 0px, var(--background-primary) 100%);
  --tab-outline-color: hsl(calc(var(--accent-h) - 10), var(--accent-s), var(--accent-l), 55%);
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px 0px 0 0;
  --tab-switcher-background: var(--background-secondary, #27282b);
  --tab-switcher-preview-radius: var(--radius-xl, 0px);
  --tab-text-color: var(--text-faint, rgb(142, 148, 157));
  --tab-text-color-active: var(--text-muted, #d0d4d9);
  --tab-text-color-focused: var(--text-muted, #d0d4d9);
  --tab-text-color-focused-active: var(--text-muted, #d0d4d9);
  --tab-text-color-focused-active-current: var(--text-normal, #d8dce3);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(215, 79%, 53.5%));
  --table-add-button-border-color: var(--background-modifier-border, #dae1ea31);
  --table-add-button-border-width: var(--table-border-width, 0.06em);
  --table-border-color: var(--background-modifier-border, #dae1ea31);
  --table-border-width: 0.06em;
  --table-column-first-border-width: var(--table-border-width, 0.06em);
  --table-column-last-border-width: var(--table-border-width, 0.06em);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(215, 79%, 50%));
  --table-drag-handle-color: var(--text-faint, rgb(142, 148, 157));
  --table-header-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --table-header-border-color: var(--table-border-color, #dae1ea31);
  --table-header-border-width: var(--table-border-width, 0.06em);
  --table-header-color: var(--text-normal, #d8dce3);
  --table-header-size: var(--table-text-size, 0.9em);
  --table-row-last-border-width: var(--table-border-width, 0.06em);
  --table-selection-border-color: var(--interactive-accent, hsl(215, 79%, 50%));
  --tag-color: var(--link-color, hsl(220, 79%, 65%));
  --tag-color-hover: var(--link-color-hover, hsl(213, 79%, 46%));
  --tag-decoration-hover: underline;
  --tag-padding-x: 0px;
  --tag-padding-y: 0px;
  --tag-radius: 0px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(213, 79%, 46%)));
  --text-accent: var(--color-accent-1, hsl(215, 79%, 53.5%));
  --text-accent-hover: var(--color-accent-2, hsl(213, 79%, 46%));
  --text-error: var(--color-red, rgb(232, 41, 41));
  --text-faint: var(--color-base-50, rgb(142, 148, 157));
  --text-muted: var(--color-base-70, #d0d4d9);
  --text-normal: var(--color-base-100, #d8dce3);
  --text-success: var(--color-green, rgb(82, 163, 0));
  --text-warning: var(--color-orange, rgb(230, 111, 0));
  --titlebar-background: var(--background-secondary, #27282b);
  --titlebar-background-focused: var(--background-secondary-alt, #242629);
  --titlebar-border-color: var(--background-modifier-border, #dae1ea31);
  --titlebar-text-color: var(--text-muted, #d0d4d9);
  --titlebar-text-color-focused: var(--text-normal, #d8dce3);
  --vault-name-font-size: 1.4em;
  --vault-name-font-weight: 500;
  --vault-profile-color: var(--text-normal, #d8dce3);
  --vault-profile-color-hover: var(--vault-profile-color, #d8dce3);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #27282b);
  background-color: var(--tab-container-background, rgb(39, 40, 43));
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(30, 31, 33));
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(39, 40, 43));
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #27282b);
  background-color: var(--tab-container-background, rgb(39, 40, 43));
  border-left-color: rgba(218, 225, 234, 0.192);
  color: rgb(216, 220, 227);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(216, 220, 227));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(216, 220, 227));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(216, 220, 227));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(216, 220, 227));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(216, 220, 227));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body del {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(142, 148, 157);
  border-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(27, 111, 228));
  border-color: rgb(27, 111, 228);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(208, 212, 217));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(208, 212, 217) none 0px;
  text-decoration-color: rgb(208, 212, 217);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(118, 128, 239));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(118, 128, 239) none 0px;
  text-decoration-color: rgb(118, 128, 239);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(95, 142, 236));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(95, 142, 236) none 0px;
  text-decoration-color: rgb(95, 142, 236);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(95, 166, 236));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(95, 166, 236) none 0px;
  text-decoration: rgba(27, 111, 228, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(27, 111, 228, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body dt {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(142, 148, 157));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", Arial, Archivo, sans-serif;
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: var(--background-primary, rgb(30, 31, 33));
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body table {
  background-color: var(--background-secondary-alt, rgb(36, 38, 41));
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  width: 204.531px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: var(--table-text-color, rgb(216, 220, 227));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: var(--table-header-color, rgb(216, 220, 227));
  padding-bottom: 11.52px;
  padding-left: 14.4px;
  padding-right: 14.4px;
  padding-top: 11.52px;
  text-align: center;
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgba(255, 255, 255, 0.067));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(36, 38, 41));
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: var(--code-normal, rgb(216, 220, 227));
  padding-bottom: 1px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(36, 38, 41));
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(216, 220, 227);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #242629);
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(36, 38, 41));
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(27, 111, 228);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(142, 148, 157);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(142, 148, 157);
  border-right-color: rgb(142, 148, 157);
  border-top-color: rgb(142, 148, 157);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(216, 220, 227);
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 31, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 111, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(142, 148, 157);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 163, 81);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 105, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 105, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 63, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 194, 97);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(0, 194, 97, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 232, 51,51);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(232, 51, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 232, 51,51);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(232, 51, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 81, 0, 194);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(81, 0, 194, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(81, 0, 194, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(81, 0, 194, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(81, 0, 194, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(81, 0, 194, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 232, 51,51);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(232, 51, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 105, 224);
  background: rgb(36, 38, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary-alt, rgb(36, 38, 41));
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-left-width: 1px;
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 1px;
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 0, 105, 224);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(0, 105, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 230, 111, 0);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(230, 111, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 110, 110, 110);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(110, 110, 110, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(110, 110, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(110, 110, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(110, 110, 110, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 97, 194, 0);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(97, 194, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(97, 194, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 194, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(97, 194, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(97, 194, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 194, 97);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(0, 194, 97, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 105, 224);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(0, 105, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 230, 111, 0);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(230, 111, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(255, 255, 255, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(216, 220, 227));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(216, 220, 227);
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
  background-color: rgb(47, 49, 53);
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(216, 220, 227));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(30, 31, 33));
  border-bottom-color: rgb(50, 52, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 52, 60);
  border-right-color: rgb(50, 52, 60);
  border-top-color: rgb(50, 52, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(216, 220, 227);
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(216, 220, 227) none 0px;
  text-decoration-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(50, 52, 60);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 52, 60);
  border-right-color: rgb(50, 52, 60);
  border-top-color: rgb(50, 52, 60);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(39, 40, 43);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-border-color: var(--tag-border-color, hsla(215, 79%, 50%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(215, 79%, 50%, 0.15));
  --pill-color: var(--tag-color, hsl(220, 79%, 65%));
  --pill-color-hover: var(--tag-color-hover, hsl(213, 79%, 46%));
  --pill-color-remove: var(--tag-color, hsl(220, 79%, 65%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(213, 79%, 46%));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, 0px);
  --pill-padding-y: var(--tag-padding-y, 0px);
  --pill-radius: var(--tag-radius, 0px);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(95, 142, 236);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 500);
  color: var(--h1-color, rgb(216, 220, 227));
  font-family: var(--h1-font, "Linux Libertine", Georgia, Times, serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(216, 220, 227));
  font-size: var(--inline-title-size, 27.2px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, bold);
  color: var(--h2-color, rgb(216, 220, 227));
  font-family: var(--h2-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(216, 220, 227));
  font-family: var(--inline-title-font, "Linux Libertine", Georgia, Times, serif);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, bold);
  color: var(--h3-color, rgb(216, 220, 227));
  font-family: var(--h3-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, bold);
  color: var(--h4-color, rgb(216, 220, 227));
  font-family: var(--h4-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, bold);
  color: var(--h5-color, rgb(216, 220, 227));
  font-family: var(--h5-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, bold);
  color: var(--h6-color, rgb(216, 220, 227));
  font-family: var(--h6-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-right-width: 0px;
  border-top-color: rgba(218, 225, 234, 0.192);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 0, 105, 224);
  --h6-background: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 3.2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(208, 212, 217));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(208, 212, 217));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(216, 220, 227);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(208, 212, 217));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(39, 40, 43));
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(208, 212, 217));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(208, 212, 217);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(216, 220, 227);
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(208, 212, 217));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--link-color, rgb(95, 142, 236));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: var(--link-color, rgb(95, 142, 236));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(208, 212, 217));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(208, 212, 217));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(208, 212, 217);
  stroke: rgb(208, 212, 217);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(208, 212, 217);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(142, 148, 157));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(39, 40, 43));
  border-color: rgb(216, 220, 227);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(218, 225, 234, 0.192);
  color: var(--table-header-color, rgb(216, 220, 227));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(218, 225, 234, 0.192);
  border-left-color: rgba(218, 225, 234, 0.192);
  border-right-color: rgba(218, 225, 234, 0.192);
  border-top-color: rgba(218, 225, 234, 0.192);
  color: var(--text-muted, rgb(208, 212, 217));
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(208, 212, 217);
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  color: rgb(208, 212, 217);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(218, 225, 234, 0.192);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-border-color: var(--tag-border-color, hsla(215, 79%, 50%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(215, 79%, 50%, 0.15));
  --pill-color: var(--tag-color, hsl(220, 79%, 65%));
  --pill-color-hover: var(--tag-color-hover, hsl(213, 79%, 46%));
  --pill-color-remove: var(--tag-color, hsl(220, 79%, 65%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(213, 79%, 46%));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, 0px);
  --pill-padding-y: var(--tag-padding-y, 0px);
  --pill-radius: var(--tag-radius, 0px);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 0px;
  color: var(--pill-color, rgb(95, 142, 236));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(208, 212, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(30, 31, 33));
  color: var(--text-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(39, 40, 43));
  border-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(36, 38, 41));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(216, 220, 227);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(39, 40, 43));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(216, 220, 227));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(208, 212, 217);
  border-left-color: rgb(208, 212, 217);
  border-right-color: rgb(208, 212, 217);
  border-top-color: rgb(208, 212, 217);
  color: var(--text-normal, rgb(208, 212, 217));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(36, 38, 41));
  border-bottom-color: rgb(216, 220, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--code-normal, rgb(216, 220, 227));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(216, 220, 227);
  border-left-color: rgb(216, 220, 227);
  border-right-color: rgb(216, 220, 227);
  border-top-color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body sub {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body summary {
  color: rgb(216, 220, 227);
}

html[saved-theme="dark"] body sup {
  color: var(--link-color, rgb(95, 142, 236));
  font-size: 11.84px;
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--link-color, rgb(95, 142, 236));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 215;
  --accent-l: 50%;
  --accent-s: 79%;
  --background-modifier-border: var(--color-base-30, #a2a9b1);
  --background-modifier-error: var(--color-red, rgb(232, 41, 41));
  --background-modifier-error-hover: var(--color-red, rgb(232, 41, 41));
  --background-modifier-error-rgb: var(--color-red-rgb, 232, 51,51);
  --background-modifier-success: var(--color-green, rgb(82, 163, 0));
  --background-modifier-success-rgb: var(--color-green-rgb, 97, 194, 0);
  --background-secondary-alt: var(--color-base-05, #f8f9fa);
  --bases-cards-radius: var(--radius-m, 0px);
  --bases-embed-border-color: var(--background-modifier-border, #a2a9b1);
  --bases-embed-border-radius: var(--radius-s, 0px);
  --bases-group-heading-property-color: var(--text-muted, #5a5a5a);
  --bases-table-border-color: var(--table-border-color, #a2a9b1);
  --bases-table-cell-background-selected: var(--table-selection, hsla(215, 79%, 50%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 0px);
  --bases-table-header-color: var(--text-muted, #5a5a5a);
  --blockquote-border-color: var(--interactive-accent, hsl(215, 79%, 47.5%));
  --button-radius: var(--input-radius, 0px);
  --callout-bug: var(--color-red-rgb, 232, 51,51);
  --callout-default: var(--color-blue-rgb, 0, 105, 224);
  --callout-error: var(--color-red-rgb, 232, 51,51);
  --callout-example: var(--color-purple-rgb, 81, 0, 194);
  --callout-fail: var(--color-red-rgb, 232, 51,51);
  --callout-important: var(--color-cyan-rgb, 0, 194, 97);
  --callout-info: var(--color-blue-rgb, 0, 105, 224);
  --callout-question: var(--color-orange-rgb, 230, 111, 0);
  --callout-quote: 110, 110, 110;
  --callout-radius: var(--radius-s, 0px);
  --callout-success: var(--color-green-rgb, 97, 194, 0);
  --callout-summary: var(--color-cyan-rgb, 0, 194, 97);
  --callout-tip: var(--color-cyan-rgb, 0, 194, 97);
  --callout-todo: var(--color-blue-rgb, 0, 105, 224);
  --callout-warning: var(--color-orange-rgb, 230, 111, 0);
  --canvas-card-label-color: var(--text-faint, #989898);
  --canvas-color-1: var(--color-red-rgb, 232, 51,51);
  --canvas-color-2: var(--color-orange-rgb, 230, 111, 0);
  --canvas-color-3: var(--color-yellow-rgb, 204, 204, 0);
  --canvas-color-4: var(--color-green-rgb, 97, 194, 0);
  --canvas-color-5: var(--color-cyan-rgb, 0, 194, 97);
  --canvas-color-6: var(--color-purple-rgb, 81, 0, 194);
  --canvas-controls-radius: var(--radius-s, 0px);
  --checkbox-border-color: var(--text-faint, #989898);
  --checkbox-border-color-hover: var(--text-muted, #5a5a5a);
  --checkbox-color: var(--interactive-accent, hsl(215, 79%, 47.5%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(213, 79%, 60%));
  --checkbox-radius: var(--radius-s, 0px);
  --checklist-done-color: var(--text-muted, #5a5a5a);
  --clickable-icon-radius: var(--radius-s, 0px);
  --code-background: var(--background-secondary-alt, #f8f9fa);
  --code-border-color: var(--background-modifier-border, #a2a9b1);
  --code-comment: var(--text-faint, #989898);
  --code-function: var(--color-yellow, rgb(163, 163, 0));
  --code-important: var(--color-orange, rgb(230, 111, 0));
  --code-keyword: var(--color-pink, rgb(194, 0, 81));
  --code-operator: var(--color-red, rgb(232, 41, 41));
  --code-property: var(--color-cyan, rgb(0, 163, 81));
  --code-punctuation: var(--text-muted, #5a5a5a);
  --code-radius: var(--radius-s, 0px);
  --code-string: var(--color-green, rgb(82, 163, 0));
  --code-tag: var(--color-red, rgb(232, 41, 41));
  --code-value: var(--color-purple, rgb(140, 63, 247));
  --collapse-icon-color: var(--text-faint, #989898);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(215, 79%, 50%));
  --color-accent-1: hsl(var(--accent-h), var(--accent-s), calc(var(--accent-l) - 2.5%));
  --color-accent-2: hsl(calc(var(--accent-h) - 2), var(--accent-s), calc(var(--accent-l) + 10%));
  --color-accent-3: hsl(calc(var(--accent-h) - 10), var(--accent-s), var(--accent-l), 20%);
  --color-base-05: #f8f9fa;
  --color-base-50: #989898;
  --color-base-70: #5a5a5a;
  --color-blue: rgb(0, 105, 224);
  --color-blue-rgb: 0, 105, 224;
  --color-cyan: rgb(0, 163, 81);
  --color-cyan-rgb: 0, 194, 97;
  --color-green: rgb(82, 163, 0);
  --color-green-rgb: 97, 194, 0;
  --color-orange: rgb(230, 111, 0);
  --color-orange-rgb: 230, 111, 0;
  --color-pink: rgb(194, 0, 81);
  --color-pink-rgb: 194, 0, 81;
  --color-purple: rgb(140, 63, 247);
  --color-purple-rgb: 81, 0, 194;
  --color-red: rgb(232, 41, 41);
  --color-red-rgb: 232, 51,51;
  --color-yellow: rgb(163, 163, 0);
  --color-yellow-rgb: 204, 204, 0;
  --dark: var(--text-muted, var(--color-base-70, #5a5a5a));
  --darkgray: var(--text-muted, var(--color-base-70, #5a5a5a));
  --divider-color: var(--background-modifier-border, #a2a9b1);
  --divider-color-hover: var(--interactive-accent, hsl(215, 79%, 47.5%));
  --embed-border-left: none;
  --file-header-font: var(--font-interface, Arial, Archivo, sans-serif);
  --file-line-width: 100%;
  --font-default: Arial, 'Archivo', sans-serif;
  --font-mermaid: var(--font-text, Arial, Archivo, sans-serif);
  --footnote-divider-color: var(--metadata-divider-color, #a2a9b1);
  --footnote-id-color: var(--text-muted, #5a5a5a);
  --footnote-id-color-no-occurrences: var(--text-faint, #989898);
  --footnote-radius: var(--radius-s, 0px);
  --graph-node: var(--text-muted, #5a5a5a);
  --graph-node-attachment: var(--color-yellow, rgb(163, 163, 0));
  --graph-node-focused: var(--text-accent, hsl(215, 79%, 50%));
  --graph-node-tag: var(--color-green, rgb(82, 163, 0));
  --graph-node-unresolved: var(--text-faint, #989898);
  --gray: var(--text-muted, var(--color-base-70, #5a5a5a));
  --h1-font: 'Linux Libertine','Georgia','Times',serif;
  --h1-size: 1.7em;
  --h1-weight: 500;
  --h2-size: 1.25em;
  --h2-weight: bold;
  --h3-size: 1.17em;
  --h3-weight: bold;
  --h4-size: 1.12em;
  --h4-weight: bold;
  --h5-size: 1em;
  --h5-weight: bold;
  --h6-background: rgb(235, 235, 210);
  --h6-size: 0.99em;
  --h6-weight: bold;
  --heading-formatting: var(--text-faint, #989898);
  --hr-color: var(--background-modifier-border, #a2a9b1);
  --icon-color: var(--text-muted, #5a5a5a);
  --icon-color-active: var(--text-accent, hsl(215, 79%, 50%));
  --icon-color-hover: var(--text-muted, #5a5a5a);
  --icon-l: 16.5px;
  --icon-size: var(--icon-s, 16px);
  --image-width: var(--infobox-width, 25%);
  --img-max-width: 55%;
  --indentation-guide-width: var(--border-width, 0px);
  --infobox-margin: 1em 0px 1em 1em;
  --infobox-margin-left: 1em 1em 1em 0px;
  --infobox-position: right;
  --infobox-width: 25%;
  --inline-title-font: var(--h1-font, 'Linux Libertine','Georgia','Times',serif);
  --inline-title-size: var(--h1-size, 1.7em);
  --inline-title-weight: var(--h1-weight, 500);
  --input-date-separator: var(--text-faint, #989898);
  --input-placeholder-color: var(--text-faint, #989898);
  --input-radius: 0px;
  --interactive-accent: var(--color-accent-1, hsl(215, 79%, 47.5%));
  --interactive-accent-hover: var(--color-accent-2, hsl(213, 79%, 60%));
  --interactive-accent-hsl: var(--color-accent-hsl, 215, 79%, 50%);
  --lightgray: var(--background-secondary-alt, var(--color-base-05, #f8f9fa));
  --link-color: hsl(calc(var(--accent-h) + 5), var(--accent-s), calc(var(--accent-l) - 5%));
  --link-color-hover: var(--text-accent-hover, hsl(213, 79%, 60%));
  --link-decoration: none;
  --link-external-color: hsl(calc(var(--accent-h) + 20), var(--accent-s), calc(var(--accent-l) - 5%));
  --link-external-color-hover: hsl(calc(var(--accent-h) + 10), var(--accent-s), calc(var(--accent-l) + 3%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--color-accent-1, hsl(215, 79%, 47.5%));
  --link-unresolved-opacity: 0.85;
  --list-bullet-size: 0.35em;
  --list-marker-color: var(--text-normal, #222222);
  --list-marker-color-collapsed: var(--text-accent, hsl(215, 79%, 50%));
  --list-marker-color-hover: var(--text-muted, #5a5a5a);
  --menu-radius: var(--radius-m, 0px);
  --metadata-border-color: var(--background-modifier-border, #a2a9b1);
  --metadata-divider-color: var(--background-modifier-border, #a2a9b1);
  --metadata-input-font: var(--font-interface, Arial, Archivo, sans-serif);
  --metadata-label-font: var(--font-interface, Arial, Archivo, sans-serif);
  --metadata-label-text-color: var(--text-muted, #5a5a5a);
  --metadata-label-text-color-hover: var(--text-muted, #5a5a5a);
  --modal-radius: var(--radius-l, 0px);
  --nav-collapse-icon-color: var(--text-muted, #5a5a5a);
  --nav-collapse-icon-color-collapsed: var(--text-muted, #5a5a5a);
  --nav-heading-color-collapsed: var(--text-faint, #989898);
  --nav-heading-color-collapsed-hover: var(--text-muted, #5a5a5a);
  --nav-indentation-guide-width: var(--indentation-guide-width, 0px);
  --nav-item-children-padding-left: 0px;
  --nav-item-color: var(--text-muted, #5a5a5a);
  --nav-item-color-highlighted: var(--text-accent, hsl(215, 79%, 50%));
  --nav-item-radius: var(--radius-s, 0px);
  --nav-tag-color: var(--text-faint, #989898);
  --nav-tag-color-active: var(--text-muted, #5a5a5a);
  --nav-tag-color-hover: var(--text-muted, #5a5a5a);
  --nav-tag-radius: var(--radius-s, 0px);
  --pill-border-color: var(--background-modifier-border, #a2a9b1);
  --pill-color: var(--text-muted, #5a5a5a);
  --pill-color-remove: var(--text-faint, #989898);
  --pill-color-remove-hover: var(--text-accent, hsl(215, 79%, 50%));
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --ribbon-background: var(--background-primary, #ffffff);
  --ribbon-width: 35px;
  --scrollbar-radius: var(--radius-l, 0px);
  --search-clear-button-color: var(--text-muted, #5a5a5a);
  --search-icon-color: var(--text-muted, #5a5a5a);
  --secondary: var(--text-accent, var(--color-accent, hsl(215, 79%, 50%)));
  --setting-items-border-color: var(--background-modifier-border, #a2a9b1);
  --setting-items-radius: var(--radius-l, 0px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #5a5a5a);
  --shiki-code-background: var(--code-background, #f8f9fa);
  --shiki-code-block-border-radius: var(--code-radius, 0px);
  --shiki-code-comment: var(--text-faint, #989898);
  --shiki-code-function: var(--color-green, rgb(82, 163, 0));
  --shiki-code-important: var(--color-orange, rgb(230, 111, 0));
  --shiki-code-keyword: var(--color-pink, rgb(194, 0, 81));
  --shiki-code-normal: var(--text-muted, #5a5a5a);
  --shiki-code-property: var(--color-cyan, rgb(0, 163, 81));
  --shiki-code-punctuation: var(--text-muted, #5a5a5a);
  --shiki-code-string: var(--color-yellow, rgb(163, 163, 0));
  --shiki-code-value: var(--color-purple, rgb(140, 63, 247));
  --shiki-gutter-border-color: var(--background-modifier-border, #a2a9b1);
  --shiki-gutter-text-color: var(--text-faint, #989898);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #5a5a5a);
  --shiki-highlight-neutral: var(--shiki-code-normal, #5a5a5a);
  --shiki-terminal-dots-color: var(--text-faint, #989898);
  --slider-track-background: var(--background-modifier-border, #a2a9b1);
  --status-bar-border-color: var(--divider-color, #a2a9b1);
  --status-bar-radius: var(--radius-m, 0px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #5a5a5a);
  --sync-avatar-color-1: var(--color-red, rgb(232, 41, 41));
  --sync-avatar-color-2: var(--color-orange, rgb(230, 111, 0));
  --sync-avatar-color-3: var(--color-yellow, rgb(163, 163, 0));
  --sync-avatar-color-4: var(--color-green, rgb(82, 163, 0));
  --sync-avatar-color-5: var(--color-cyan, rgb(0, 163, 81));
  --sync-avatar-color-6: var(--color-blue, rgb(0, 105, 224));
  --sync-avatar-color-7: var(--color-purple, rgb(140, 63, 247));
  --sync-avatar-color-8: var(--color-pink, rgb(194, 0, 81));
  --tab-curve: 0px;
  --tab-divider-color: var(--tab-outline-color, hsl(205, 79%, 50%, 40%));
  --tab-gradient: linear-gradient(to top,var(--color-accent-2) 0px,  var(--color-accent-3) 0px, var(--background-primary) 100%);
  --tab-outline-color: hsl(calc(var(--accent-h) - 10), var(--accent-s), var(--accent-l), 40%);
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px 0px 0 0;
  --tab-switcher-preview-radius: var(--radius-xl, 0px);
  --tab-text-color: var(--text-faint, #989898);
  --tab-text-color-active: var(--text-muted, #5a5a5a);
  --tab-text-color-focused: var(--text-muted, #5a5a5a);
  --tab-text-color-focused-active: var(--text-muted, #5a5a5a);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(215, 79%, 50%));
  --table-add-button-border-color: var(--background-modifier-border, #a2a9b1);
  --table-add-button-border-width: var(--table-border-width, 0.06em);
  --table-border-color: var(--background-modifier-border, #a2a9b1);
  --table-border-width: 0.06em;
  --table-column-first-border-width: var(--table-border-width, 0.06em);
  --table-column-last-border-width: var(--table-border-width, 0.06em);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(215, 79%, 47.5%));
  --table-drag-handle-color: var(--text-faint, #989898);
  --table-header-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --table-header-border-color: var(--table-border-color, #a2a9b1);
  --table-header-border-width: var(--table-border-width, 0.06em);
  --table-header-size: var(--table-text-size, 0.9em);
  --table-row-last-border-width: var(--table-border-width, 0.06em);
  --table-selection-border-color: var(--interactive-accent, hsl(215, 79%, 47.5%));
  --tag-color: var(--link-color, hsl(220, 79%, 45%));
  --tag-color-hover: var(--link-color-hover, hsl(213, 79%, 60%));
  --tag-decoration-hover: underline;
  --tag-padding-x: 0px;
  --tag-padding-y: 0px;
  --tag-radius: 0px;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(213, 79%, 60%)));
  --text-accent: var(--color-accent, hsl(215, 79%, 50%));
  --text-accent-hover: var(--color-accent-2, hsl(213, 79%, 60%));
  --text-error: var(--color-red, rgb(232, 41, 41));
  --text-faint: var(--color-base-50, #989898);
  --text-muted: var(--color-base-70, #5a5a5a);
  --text-success: var(--color-green, rgb(82, 163, 0));
  --text-warning: var(--color-orange, rgb(230, 111, 0));
  --titlebar-background-focused: var(--background-secondary-alt, #f8f9fa);
  --titlebar-border-color: var(--background-modifier-border, #a2a9b1);
  --titlebar-text-color: var(--text-muted, #5a5a5a);
  --vault-name-font-size: 1.4em;
  --vault-name-font-weight: 500;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(162, 169, 177);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(162, 169, 177);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 152, 152);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(25, 105, 217));
  border-color: rgb(25, 105, 217);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(90, 90, 90));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(24, 39, 205));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(24, 39, 205) none 0px;
  text-decoration-color: rgb(24, 39, 205);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(24, 85, 205));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(24, 85, 205) none 0px;
  text-decoration-color: rgb(24, 85, 205);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(25, 105, 217));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  outline: rgb(25, 105, 217) none 0px;
  text-decoration: rgba(27, 111, 228, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(27, 111, 228, 0.3));
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(152, 152, 152));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", Arial, Archivo, sans-serif;
  font-style: var(--blockquote-font-style, italic);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: var(--background-primary, rgb(255, 255, 255));
}

html[saved-theme="light"] body table {
  background-color: var(--background-secondary-alt, rgb(248, 249, 250));
  font-family: "??", "??", Arial, Archivo, sans-serif;
  width: 204.531px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  padding-bottom: 11.52px;
  padding-left: 14.4px;
  padding-right: 14.4px;
  padding-top: 11.52px;
  text-align: center;
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgba(0, 0, 0, 0.067));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(248, 249, 250));
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-bottom: 1px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(248, 249, 250));
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #f8f9fa);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .transclude {
  border-left-color: rgb(25, 105, 217);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 152, 152);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(152, 152, 152);
  border-right-color: rgb(152, 152, 152);
  border-top-color: rgb(152, 152, 152);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
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
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 111, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 152, 152);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 163, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 105, 224);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 105, 224);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(140, 63, 247);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(232, 41, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 163, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 194, 97);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(0, 194, 97, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 232, 51,51);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(232, 51, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 232, 51,51);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(232, 51, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 81, 0, 194);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(81, 0, 194, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(81, 0, 194, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(81, 0, 194, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(81, 0, 194, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(81, 0, 194, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 232, 51,51);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(232, 51, 51, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(232, 51, 51, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 51, 51, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(232, 51, 51, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(232, 51, 51, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 105, 224);
  background: rgb(248, 249, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: var(--background-secondary-alt, rgb(248, 249, 250));
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgb(162, 169, 177);
  border-left-width: 1px;
  border-right-color: rgb(162, 169, 177);
  border-right-width: 1px;
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 0, 105, 224);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(0, 105, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 230, 111, 0);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(230, 111, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 110, 110, 110);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(110, 110, 110, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(110, 110, 110, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(110, 110, 110, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(110, 110, 110, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(110, 110, 110, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 97, 194, 0);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(97, 194, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(97, 194, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(97, 194, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(97, 194, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(97, 194, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 194, 97);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(0, 194, 97, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(0, 194, 97, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 194, 97, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 194, 97, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 194, 97, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 105, 224);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(0, 105, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 230, 111, 0);
  --h6-background: rgba(var(--callout-color), 20%);
  background: rgba(230, 111, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 10%);
  border-bottom-color: rgba(230, 111, 0, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 111, 0, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(230, 111, 0, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(230, 111, 0, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(34, 34, 34));
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 105, 224;
  background: rgba(0, 105, 224, 0.2) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 0, 0, 0.067);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.067);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.067);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.067);
  border-top-style: solid;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 6.4px;
  padding-right: 6.4px;
  padding-top: 3.2px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--text-normal, rgb(34, 34, 34));
  font-weight: var(--bold-weight, 600);
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
  border-bottom-color: rgb(162, 169, 177);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-border-color: var(--tag-border-color, hsla(215, 79%, 50%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(215, 79%, 50%, 0.15));
  --pill-color: var(--tag-color, hsl(220, 79%, 45%));
  --pill-color-hover: var(--tag-color-hover, hsl(213, 79%, 60%));
  --pill-color-remove: var(--tag-color, hsl(220, 79%, 45%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(213, 79%, 60%));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, 0px);
  --pill-padding-y: var(--tag-padding-y, 0px);
  --pill-radius: var(--tag-radius, 0px);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(24, 85, 205);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 500);
  font-family: var(--h1-font, "Linux Libertine", Georgia, Times, serif);
}

html[saved-theme="light"] body h1.article-title {
  font-size: var(--inline-title-size, 27.2px);
  font-weight: var(--inline-title-weight, 500);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, bold);
  font-family: var(--h2-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: var(--inline-title-font, "Linux Libertine", Georgia, Times, serif);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, bold);
  font-family: var(--h3-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, bold);
  font-family: var(--h4-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, bold);
  font-family: var(--h5-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, bold);
  font-family: var(--h6-font, "??", "??", Arial, Archivo, sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-right-width: 0px;
  border-top-color: rgb(162, 169, 177);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 0, 105, 224);
  --h6-background: rgba(var(--callout-color), 20%);
  border-bottom-color: rgba(0, 105, 224, 0.3);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 105, 224, 0.3);
  border-left-width: 1px;
  border-right-color: rgba(0, 105, 224, 0.3);
  border-right-width: 1px;
  border-top-color: rgba(0, 105, 224, 0.3);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
  padding-bottom: 3.2px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 3.2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(90, 90, 90));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(90, 90, 90));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(90, 90, 90));
}`,
    footer: `html[saved-theme="light"] body footer {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(90, 90, 90));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(90, 90, 90);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(90, 90, 90));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: var(--link-color, rgb(24, 85, 205));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: var(--link-color, rgb(24, 85, 205));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(90, 90, 90));
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, rgb(90, 90, 90));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(90, 90, 90);
  stroke: rgb(90, 90, 90);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(152, 152, 152));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(162, 169, 177);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(162, 169, 177);
  border-left-color: rgb(162, 169, 177);
  border-right-color: rgb(162, 169, 177);
  border-top-color: rgb(162, 169, 177);
  color: var(--text-muted, rgb(90, 90, 90));
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
  font-family: "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(162, 169, 177);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-border-color: var(--tag-border-color, hsla(215, 79%, 50%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(215, 79%, 50%, 0.15));
  --pill-color: var(--tag-color, hsl(220, 79%, 45%));
  --pill-color-hover: var(--tag-color-hover, hsl(213, 79%, 60%));
  --pill-color-remove: var(--tag-color, hsl(220, 79%, 45%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(213, 79%, 60%));
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  --pill-padding-x: var(--tag-padding-x, 0px);
  --pill-padding-y: var(--tag-padding-y, 0px);
  --pill-radius: var(--tag-radius, 0px);
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 0px;
  color: var(--pill-color, rgb(24, 85, 205));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(90, 90, 90);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(248, 249, 250));
}`,
    misc: `html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: var(--text-normal, rgb(90, 90, 90));
  font-family: "??", "??", "??", Arial, Archivo, sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(248, 249, 250));
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body sup {
  color: var(--link-color, rgb(24, 85, 205));
  font-size: 11.84px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(27, 111, 228, 0.15);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgba(27, 111, 228, 0.15);
  border-right-color: rgba(27, 111, 228, 0.15);
  border-top-color: rgba(27, 111, 228, 0.15);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--link-color, rgb(24, 85, 205));
}`,
  },
  classSettings: {
    "ribbon-default": {
      general: `.ribbon-default .workspace-ribbon.mod-left.is-collapsed:not(:hover) {
opacity: 1;
max-width: unset;
min-width: unset;
}`,
    },
    "ribbon-hover": {
      general: `.ribbon-hover .workspace-ribbon.mod-left.is-collapsed:not(:hover) {
opacity: 0;
max-width: 0.1px;
min-width: 0px;
padding: 0px;
}

.ribbon-hover .workspace-ribbon.mod-left {
transition: 0.25s;
}`,
    },
    "ribbon-hide": {
      general: `.ribbon-hide .workspace-ribbon.mod-left.is-collapsed {
display: none;
}`,
    },
    "hide-frontmatter": {
      general: `.hide-frontmatter .frontmatter-container {
display: none;
}`,
    },
    "frontmatter-blockquote": {
      general: `.frontmatter-blockquote .frontmatter-container.is-collapsed .frontmatter-container-header {
width: fit-content;
color: var(--text-faint);
}

.frontmatter-blockquote .frontmatter-container .frontmatter-container-header {
border-bottom: none;
padding: 0.2em 0.4em;
}

.frontmatter-blockquote .frontmatter-container .frontmatter-section-label {
padding-right: 0.5em;
padding-left: 2em;
}

.frontmatter-blockquote .frontmatter-container .frontmatter-section-label:after {
content: ":";
}

.frontmatter-blockquote .frontmatter-container .frontmatter-section > * {
font-size: var(--font-ui-medium) !important;
color: var(--text-normal);
font-style: italic;
}`,
    },
    "special-h6": {
      general: `.special-h6 h6, .special-h6 .HyperMD-header-6 {
background-color: var(--h6-background);
text-align: center;
margin-bottom: 0.2;
padding:0.2em;
}`,
    },
    "hide-callout-icons": {
      general: `.hide-callout-icons .callout-icon .svg-icon {
display: none;
}`,
    },
    "hide-callout-title": {
      general: `.hide-callout-title .callout[data-callout="info"] .callout-content p:first-of-type {
margin: 0px;
/* close gaps in infobox when info callout title is hidden */
}

.hide-callout-title .callout[data-callout="info"] .callout-title {
display: none;
}`,
    },
    "info-normal": {
      general: `.info-normal .callout[data-callout="info"] {
--h6-background: rgba(var(--callout-color), 20%);
/* make header 6 match callout color */
}`,
    },
    "no-float": {
      general: `.no-float .markdown-rendered img, .no-float img ~ img {
float: none;
clear: none;
width: revert;
margin: 1em 0px;
}`,
    },
    "float-left": {
      general: `.float-left .markdown-rendered img {
float: left;
clear: left;
margin: var(--infobox-margin-left);
}

.float-left .markdown-rendered img ~ img {
float: right;
clear: right;
margin: var(--infobox-margin);
}`,
    },
    "float-center": {
      general: `.float-center .markdown-rendered img, .float-center .markdown-rendered img ~ img {
float: none;
clear: none;
display: block;
width: revert;
margin: 1em auto;
}`,
    },
  },
};
