import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "robsi",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
    styleSettingsId: "Appearance",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-h: 202;
  --accent-l: 75%;
  --accent-s: 100%;
  --background-modifier: rgba(var(--bg_highlight_x), 0.5);
  --background-modifier-active-hover: var(--bg_highlight, rgb(25, 25, 25));
  --background-modifier-border: var(--color-base-30, transparent);
  --background-modifier-border-hover: var(--color-base-35, transparent);
  --background-modifier-cover: rgba(var(--bg_dark_x), 0.8);
  --background-modifier-error: var(--color-red, rgb(255, 117, 127));
  --background-modifier-error-hover: var(--color-red, rgb(255, 117, 127));
  --background-modifier-form-field: var(--color-base-25, transparent);
  --background-modifier-form-field-highlighted: var(--bg_dark, rgb(8, 8, 8));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, transparent);
  --background-modifier-hover: rgba(var(--bg_highlight_x), 0.7);
  --background-modifier-hover-rgb: var(--bg_highlight_x, 25, 25, 25);
  --background-modifier-message: rgba(var(--bg_highlight_x), 0.9);
  --background-modifier-success: var(--color-green, rgb(158, 206, 106));
  --background-primary: var(--bg, #020202);
  --background-primary-alt: var(--bg, rgb(15, 15, 15));
  --background-primary-rgb: var(--bg_x, 15, 15, 15);
  --background-secondary: var(--bg_dark, #020202);
  --background-secondary-alt: var(--bg_dark, rgb(8, 8, 8));
  --background-secondary-rgb: var(--bg_dark_x, 8, 8, 8);
  --bases-cards-background: var(--background-primary, #020202);
  --bases-cards-cover-background: var(--background-primary-alt, rgb(15, 15, 15));
  --bases-embed-border-color: var(--background-modifier-border, transparent);
  --bases-embed-border-radius: var(--radius-s, 6px);
  --bases-group-heading-property-color: var(--text-muted, rgb(180, 180, 180));
  --bases-table-cell-background-active: var(--background-primary, #020202);
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(15, 15, 15));
  --bases-table-cell-background-selected: var(--table-selection, hsla(202, 100%, 75%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 6px);
  --bases-table-group-background: var(--background-primary-alt, rgb(15, 15, 15));
  --bases-table-header-background: var(--background-primary, #020202);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(25, 25, 25, 0.7));
  --bases-table-header-color: var(--text-muted, rgb(180, 180, 180));
  --bases-table-summary-background: var(--background-primary, #020202);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(25, 25, 25, 0.7));
  --bg: rgb(var(--bg_x));
  --bg-primary: #020202;
  --bg-primary-rgb: 2, 2, 2;
  --bg-secondary-rgb: 8, 8, 8;
  --bg_dark: rgb(var(--bg_dark_x));
  --bg_dark2: rgb(var(--bg_dark2_x));
  --bg_dark2_x: 2, 2, 2;
  --bg_dark_x: 8, 8, 8;
  --bg_highlight: rgb(var(--bg_highlight_x));
  --bg_highlight_dark: rgb(var(--bg_highlight_dark_x));
  --bg_highlight_dark_x: 18, 18, 18;
  --bg_highlight_x: 25, 25, 25;
  --bg_x: 15, 15, 15;
  --blockquote-background-color: rgba(var(--purple_x), 0.12);
  --blockquote-border-color: var(--interactive-accent, hsl(202, 100%, 75%));
  --blue: rgb(var(--blue_x));
  --blue0: rgb(var(--blue0_x));
  --blue0_x: 61, 89, 161;
  --blue_x: 122, 162, 247;
  --bold-color: var(--cyan, rgb(125, 207, 255));
  --border-radius: 8px;
  --bullet-new-color: var(--purple, rgb(187, 154, 247));
  --callout-bug: var(--red_x, 255, 117, 127);
  --callout-default: var(--blue_x, 122, 162, 247);
  --callout-error: var(--red1_x, 219, 75, 75);
  --callout-example: var(--magenta_x, 187, 154, 247);
  --callout-fail: var(--red1_x, 219, 75, 75);
  --callout-important: var(--green_x, 158, 206, 106);
  --callout-info: var(--blue_x, 122, 162, 247);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--yellow_x, 224, 175, 104);
  --callout-quote: var(--fg_dark_x, 180, 180, 180);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--teal_x, 26, 188, 156);
  --callout-summary: var(--cyan_x, 125, 207, 255);
  --callout-tip: var(--cyan_x, 125, 207, 255);
  --callout-todo: var(--cyan_x, 125, 207, 255);
  --callout-warning: var(--orange_x, 255, 158, 100);
  --canvas-background: var(--background-primary, #020202);
  --canvas-card-label-color: var(--text-faint, rgb(180, 180, 180));
  --canvas-controls-radius: var(--radius-s, 6px);
  --caret-color: var(--text-normal, rgb(220, 220, 220));
  --checkbox-border-color: var(--comment, rgb(120, 120, 120));
  --checkbox-border-color-hover: var(--comment, rgb(120, 120, 120));
  --checkbox-color: var(--green, rgb(158, 206, 106));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(199, 102%, 86.25%));
  --checkbox-marker-color: var(--background-primary, #020202);
  --checkbox-radius: var(--radius-s, 6px);
  --checklist-done-color: var(--text-muted, rgb(180, 180, 180));
  --clickable-icon-radius: var(--radius-s, 6px);
  --code-background: rgb(var(--purple_x), 0.05);
  --code-border-color: var(--background-modifier-border, transparent);
  --code-bracket-background: var(--background-modifier-hover, rgba(25, 25, 25, 0.7));
  --code-comment: rgb(var(--code-comment_x));
  --code-comment_x: 115, 125, 165;
  --code-function: var(--color-yellow, rgb(224, 175, 104));
  --code-important: var(--color-orange, rgb(255, 158, 100));
  --code-keyword: var(--color-pink, rgb(187, 154, 247));
  --code-normal: var(--fg_dark, rgb(180, 180, 180));
  --code-operator: var(--color-red, rgb(255, 117, 127));
  --code-property: var(--color-cyan, rgb(125, 207, 255));
  --code-punctuation: var(--text-muted, rgb(180, 180, 180));
  --code-radius: var(--radius-s, 6px);
  --code-string: var(--color-green, rgb(158, 206, 106));
  --code-tag: var(--color-red, rgb(255, 117, 127));
  --code-value: var(--color-purple, rgb(187, 154, 247));
  --collapse-icon-color: var(--text-faint, rgb(180, 180, 180));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(187, 154, 247));
  --color-blue: var(--blue, rgb(122, 162, 247));
  --color-cyan: var(--cyan, rgb(125, 207, 255));
  --color-green: var(--green, rgb(158, 206, 106));
  --color-orange: var(--orange, rgb(255, 158, 100));
  --color-pink: var(--magenta, rgb(187, 154, 247));
  --color-purple: var(--magenta, rgb(187, 154, 247));
  --color-red: var(--red, rgb(255, 117, 127));
  --color-yellow: var(--yellow, rgb(224, 175, 104));
  --comment: rgb(var(--comment_x));
  --comment_x: 120, 120, 120;
  --cyan: rgb(var(--cyan_x));
  --cyan_hsl: 202 100% 75%;
  --cyan_x: 125, 207, 255;
  --dark: var(--text-normal, var(--fg, rgb(220, 220, 220)));
  --darkgray: var(--text-normal, var(--fg, rgb(220, 220, 220)));
  --divider-color: var(--background-modifier-border, transparent);
  --divider-color-hover: var(--interactive-accent, hsl(202, 100%, 75%));
  --dropdown-background: var(--interactive-normal, rgb(8, 8, 8));
  --dropdown-background-hover: var(--interactive-hover, rgb(25, 25, 25));
  --fg: rgb(var(--fg_x));
  --fg_dark: rgb(var(--fg_dark_x));
  --fg_dark_x: 180, 180, 180;
  --fg_x: 220, 220, 220;
  --file-header-background: var(--background-primary, #020202);
  --file-header-background-focused: var(--background-primary, #020202);
  --file-margins: var(--file-margins-y) var(--file-margins-x, clamp(8px, 4vw, 24px));
  --flair-background: var(--interactive-normal, rgb(8, 8, 8));
  --flair-color: var(--text-normal, rgb(220, 220, 220));
  --folder-note-color: rgb(var(--folder-note-color_x));
  --folder-note-color_x: 200, 190, 250;
  --font-family-heading: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-monospace: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
  --font-family-theme: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-theme: 16px;
  --font-text-size: var(--font-size-theme, 16px);
  --footnote-divider-color: var(--metadata-divider-color, transparent);
  --footnote-gap: var(--size-4-1, 8px);
  --footnote-id-color: var(--text-muted, rgb(180, 180, 180));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(180, 180, 180));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(25, 25, 25, 0.7));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --footnote-radius: var(--radius-s, 6px);
  --frame-right-space: 80px;
  --graph-line: var(--comment, rgb(120, 120, 120));
  --graph-node: var(--fg, rgb(220, 220, 220));
  --graph-node-attachment: var(--blue, rgb(122, 162, 247));
  --graph-node-focused: var(--text-accent, rgb(187, 154, 247));
  --graph-node-tag: var(--orange, rgb(255, 158, 100));
  --graph-node-unresolved: var(--text-faint, rgb(180, 180, 180));
  --graph-text: var(--text-normal, rgb(220, 220, 220));
  --gray: var(--text-muted, var(--fg_dark, rgb(180, 180, 180)));
  --green: rgb(var(--green_x));
  --green-dark: rgb(var(--green-dark_x));
  --green-dark_x: 120, 156, 122;
  --green_x: 158, 206, 106;
  --h1-color: var(--red, rgb(255, 117, 127));
  --h2-color: var(--purple, rgb(187, 154, 247));
  --h3-color: var(--green, rgb(158, 206, 106));
  --h4-color: var(--cyan, rgb(125, 207, 255));
  --h5-color: var(--blue, rgb(122, 162, 247));
  --h5-line-height: var(--line-height-normal, 1.6);
  --h6-color: var(--yellow, rgb(224, 175, 104));
  --h6-line-height: var(--line-height-normal, 1.6);
  --heading-formatting: var(--text-faint, rgb(180, 180, 180));
  --highlight: var(--text-highlight-bg, rgba(var(--orange_x), 0.25));
  --hr-color: var(--background-modifier-border, transparent);
  --icon-color: var(--text-muted, rgb(180, 180, 180));
  --icon-color-active: var(--text-accent, rgb(187, 154, 247));
  --icon-color-focused: var(--text-normal, rgb(220, 220, 220));
  --icon-color-hover: var(--text-muted, rgb(180, 180, 180));
  --inline-title-color: var(--h1-color, rgb(255, 117, 127));
  --input-date-separator: var(--text-faint, rgb(180, 180, 180));
  --input-icon-inset: var(--size-4-1, 8px);
  --input-padding: var(--size-4-1) var(--size-4-2, 8px 10px);
  --input-placeholder-color: var(--text-faint, rgb(180, 180, 180));
  --insertion-color: var(--orange, rgb(255, 158, 100));
  --interactive-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --interactive-accent-hover: var(--color-accent-1, hsl(199, 102%, 86.25%));
  --interactive-accent-hsl: var(--color-accent-hsl, 202, 100%, 75%);
  --interactive-hover: var(--bg_highlight, rgb(25, 25, 25));
  --interactive-normal: var(--bg_dark, rgb(8, 8, 8));
  --interactive-success: var(--green, rgb(158, 206, 106));
  --internal-link-color: var(--green, rgb(158, 206, 106));
  --internal-link-color-hover: var(--blue, rgb(122, 162, 247));
  --italic-color: var(--blue, rgb(122, 162, 247));
  --light: var(--background-primary, var(--bg, #020202));
  --lightgray: var(--background-secondary, var(--bg_dark, #020202));
  --line-height-normal: var(--line-height-theme, 1.6);
  --line-height-theme: 1.6;
  --link-color: var(--purple, rgb(187, 154, 247));
  --link-color-hover: var(--cyan, rgb(125, 207, 255));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--purple, rgb(187, 154, 247));
  --link-external-color-hover: var(--cyan, rgb(125, 207, 255));
  --link-unresolved-color: var(--text-accent, rgb(187, 154, 247));
  --list-marker-color: var(--purple, rgb(187, 154, 247));
  --list-marker-color-collapsed: var(--text-muted, rgb(180, 180, 180));
  --list-marker-color-hover: var(--purple-light, rgb(210, 180, 255));
  --list-number-color: var(--magenta, rgb(187, 154, 247));
  --list-number-color-hover: var(--magenta-light, rgb(210, 190, 255));
  --list-spacing: 0;
  --magent_hsl: 261 85% 79%;
  --magenta: rgb(var(--magenta_x));
  --magenta-light: rgb(var(--magenta-light_x));
  --magenta-light_x: 210, 190, 255;
  --magenta_x: 187, 154, 247;
  --menu-background: var(--background-secondary, #020202);
  --menu-border-color: var(--background-modifier-border-hover, transparent);
  --menu-shadow: var(--shadow-s, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24));
  --metadata-border-color: var(--background-modifier-border, transparent);
  --metadata-divider-color: var(--background-modifier-border, transparent);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(25, 25, 25, 0.7));
  --metadata-input-padding: var(--size-4-1) var(--size-4-2, 8px 10px);
  --metadata-input-text-color: var(--text-normal, rgb(220, 220, 220));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(25, 25, 25, 0.7));
  --metadata-label-text-color: var(--text-muted, rgb(180, 180, 180));
  --metadata-label-text-color-hover: var(--text-muted, rgb(180, 180, 180));
  --metadata-padding: var(--size-4-2, 10px 0) 0;
  --metadata-property-background-active: var(--background-modifier-hover, rgba(25, 25, 25, 0.7));
  --modal-background: var(--background-primary, #020202);
  --motion-duration-fast: 0.15s;
  --motion-duration-medium: 0.25s;
  --motion-duration-slow: 0.35s;
  --motion-easing-accelerate: cubic-bezier(0.4, 0, 1, 1);
  --motion-easing-decelerate: cubic-bezier(0.0, 0, 0.2, 1);
  --motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(180, 180, 180));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(180, 180, 180));
  --nav-file-tag: rgba(var(--yellow_x), 0.9);
  --nav-heading-color: var(--text-normal, rgb(220, 220, 220));
  --nav-heading-color-collapsed: var(--text-faint, rgb(180, 180, 180));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(180, 180, 180));
  --nav-heading-color-hover: var(--text-normal, rgb(220, 220, 220));
  --nav-item-background-active: rgba(var(--bg_highlight), 0.2);
  --nav-item-background-hover: var(--bg_highlight, rgb(25, 25, 25));
  --nav-item-color: var(--text-muted, rgba(220, 220, 220, 0.9));
  --nav-item-color-active: var(--text-normal, rgb(220, 220, 220));
  --nav-item-color-highlighted: var(--text-accent, rgb(187, 154, 247));
  --nav-item-color-hover: var(--fg, rgb(220, 220, 220));
  --nav-item-color-selected: var(--text-normal, rgb(220, 220, 220));
  --nav-item-padding: var(--size-2-2) var(--size-4-1) var(--size-2-2) var(--size-4-6, 4px 8px 4px 18px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px 4px 18px);
  --nav-item-radius: var(--radius-s, 6px);
  --nav-tag-color: var(--text-faint, rgb(180, 180, 180));
  --nav-tag-color-active: var(--text-muted, rgb(180, 180, 180));
  --nav-tag-color-hover: var(--text-muted, rgb(180, 180, 180));
  --nav-tag-radius: var(--radius-s, 6px);
  --orange: rgb(var(--orange_x));
  --orange_x: 255, 158, 100;
  --pdf-background: var(--background-primary, #020202);
  --pdf-page-background: var(--background-primary, #020202);
  --pdf-sidebar-background: var(--background-primary, #020202);
  --pill-border-color: var(--background-modifier-border, transparent);
  --pill-border-color-hover: var(--background-modifier-border-hover, transparent);
  --pill-color: var(--text-muted, rgb(180, 180, 180));
  --pill-color-hover: var(--text-normal, rgb(220, 220, 220));
  --pill-color-remove: var(--text-faint, rgb(180, 180, 180));
  --pill-color-remove-hover: var(--text-accent, rgb(187, 154, 247));
  --pink: rgb(var(--pink_x));
  --pink_hsl: 331 100% 43%;
  --pink_x: 217, 0, 105;
  --popover-height: 500px;
  --popover-width: 500px;
  --prompt-background: var(--background-primary, #020202);
  --purple: rgb(var(--purple_x));
  --purple-light: rgb(var(--purple-light_x));
  --purple-light_x: 210, 180, 255;
  --purple_x: 187, 154, 247;
  --radius-s: 6px;
  --raised-background: var(--blur-background, color-mix(in srgb, rgb(8, 8, 8) 65%, transparent) linear-gradient(rgb(8, 8, 8), color-mix(in srgb, rgb(8, 8, 8) 65%, transparent)));
  --red: rgb(var(--red_x));
  --red-dark: rgb(var(--red_x));
  --red-dark_x: 155, 45, 45;
  --red1: rgb(var(--red1_x));
  --red1_x: 219, 75, 75;
  --red_x: 255, 117, 127;
  --ribbon-background: var(--background-secondary, #020202);
  --ribbon-background-collapsed: var(--background-primary, #020202);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 10px 8px 12px);
  --scrollbar-active-thumb-bg: rgba(var(--text-muted-rgb), 0.4);
  --scrollbar-thumb-bg: rgba(var(--text-muted-rgb), 0.2);
  --scrollbar-width: 10px;
  --search-clear-button-color: var(--text-muted, rgb(180, 180, 180));
  --search-icon-color: var(--text-muted, rgb(180, 180, 180));
  --search-result-background: var(--background-primary, #020202);
  --secondary: var(--text-accent, var(--magenta, rgb(187, 154, 247)));
  --setting-group-heading-color: var(--text-normal, rgb(220, 220, 220));
  --setting-items-background: var(--background-primary-alt, transparent);
  --setting-items-border-color: var(--background-modifier-border, transparent);
  --setting-items-padding: var(--size-4-5, 16px);
  --shadow-l: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  --shadow-m: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-xl: 0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(180, 180, 180));
  --shiki-code-background: var(--code-background, rgb(187, 154, 247, 0.05));
  --shiki-code-block-border-radius: var(--code-radius, 6px);
  --shiki-code-comment: var(--text-faint, rgb(180, 180, 180));
  --shiki-code-function: var(--color-green, rgb(158, 206, 106));
  --shiki-code-important: var(--color-orange, rgb(255, 158, 100));
  --shiki-code-keyword: var(--color-pink, rgb(187, 154, 247));
  --shiki-code-normal: var(--text-muted, rgb(180, 180, 180));
  --shiki-code-property: var(--color-cyan, rgb(125, 207, 255));
  --shiki-code-punctuation: var(--text-muted, rgb(180, 180, 180));
  --shiki-code-string: var(--color-yellow, rgb(224, 175, 104));
  --shiki-code-value: var(--color-purple, rgb(187, 154, 247));
  --shiki-gutter-border-color: var(--background-modifier-border, transparent);
  --shiki-gutter-text-color: var(--text-faint, rgb(180, 180, 180));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(180, 180, 180));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(180, 180, 180));
  --shiki-terminal-dots-color: var(--text-faint, rgb(180, 180, 180));
  --shiki-tooltip-background: var(--background-modifier-message, rgba(25, 25, 25, 0.9));
  --size-4-1: 8px;
  --size-4-2: 10px;
  --size-4-4: 14px;
  --size-4-5: 16px;
  --size-4-6: 18px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, transparent);
  --slider-track-background: var(--background-modifier-border, transparent);
  --spoiler-background: rgba(var(--bg_highlight_x), 0.3);
  --spoiler-background-hover: rgba(var(--bg_highlight_x), 0.5);
  --spoiler-pattern: radial-gradient(circle 1px at 10px 8px, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
        radial-gradient(circle 1px at 30px 2px, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 50px 12px, rgba(255, 255, 255, 0.9) 50%, transparent 50%),
        radial-gradient(circle 1px at 70px 6px, rgba(255, 255, 255, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 15px 24px, rgba(255, 255, 255, 0.8) 50%, transparent 50%),
        radial-gradient(circle 1px at 38px 28px, rgba(255, 255, 255, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 60px 36px, rgba(255, 255, 255, 0.9) 50%, transparent 50%),
        radial-gradient(circle 1px at 85px 22px, rgba(255, 255, 255, 0.7) 50%, transparent 50%);
  --status-bar-background: var(--background-secondary, #020202);
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-text-color: var(--text-muted, rgb(180, 180, 180));
  --suggestion-background: var(--background-primary, #020202);
  --sync-avatar-color-1: var(--color-red, rgb(255, 117, 127));
  --sync-avatar-color-2: var(--color-orange, rgb(255, 158, 100));
  --sync-avatar-color-3: var(--color-yellow, rgb(224, 175, 104));
  --sync-avatar-color-4: var(--color-green, rgb(158, 206, 106));
  --sync-avatar-color-5: var(--color-cyan, rgb(125, 207, 255));
  --sync-avatar-color-6: var(--color-blue, rgb(122, 162, 247));
  --sync-avatar-color-7: var(--color-purple, rgb(187, 154, 247));
  --sync-avatar-color-8: var(--color-pink, rgb(187, 154, 247));
  --tab-background: rgba(2, 2, 2, 0.9);
  --tab-background-active: var(--background-primary, rgba(25, 25, 25, 0.95));
  --tab-background-hover: rgba(18, 18, 18, 0.8);
  --tab-container-background: var(--background-primary, #020202);
  --tab-divider-color: var(--background-modifier-border-hover, rgba(40, 40, 40, 0.3));
  --tab-max-width: 200px;
  --tab-min-width: 40px;
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 6px);
  --tab-switcher-background: var(--background-secondary, #020202);
  --tab-text-color: var(--text-faint, rgb(180, 180, 180));
  --tab-text-color-active: var(--text-muted, rgb(180, 180, 180));
  --tab-text-color-focused: var(--text-muted, rgb(180, 180, 180));
  --tab-text-color-focused-active: var(--text-muted, rgb(180, 180, 180));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(220, 220, 220));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(187, 154, 247));
  --tab-width: 120px;
  --table-add-button-border-color: var(--background-modifier-border, transparent);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(202, 100%, 75%));
  --table-drag-handle-color: var(--text-faint, rgb(180, 180, 180));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(15, 15, 15));
  --table-header-background: var(--bg_dark2, rgb(2, 2, 2));
  --table-header-background-hover: var(--bg_dark2, rgb(2, 2, 2));
  --table-header-color: var(--text-normal, rgb(220, 220, 220));
  --table-selection-border-color: var(--interactive-accent, hsl(202, 100%, 75%));
  --tag-background: rgba(var(--magenta_x), 0.15);
  --tag-background-hover: rgba(var(--cyan_x), 0.15);
  --tag-color: var(--magenta, rgb(187, 154, 247));
  --tag-color-hover: var(--cyan, rgb(125, 207, 255));
  --teal: rgb(var(--teal_x));
  --teal_x: 26, 188, 156;
  --terminal_black: rgb(var(--terminal_black_x));
  --terminal_black_x: 65, 72, 104;
  --tertiary: var(--text-accent-hover, var(--cyan, rgb(125, 207, 255)));
  --text-accent: var(--magenta, rgb(187, 154, 247));
  --text-accent-hover: var(--cyan, rgb(125, 207, 255));
  --text-error: var(--red1, rgb(219, 75, 75));
  --text-error-hover: var(--red, rgb(255, 117, 127));
  --text-faint: var(--fg_dark, rgb(180, 180, 180));
  --text-highlight-bg: rgba(var(--orange_x), 0.25);
  --text-muted: var(--fg_dark, rgb(180, 180, 180));
  --text-muted-rgb: var(--fg_dark_x, 180, 180, 180);
  --text-normal: var(--fg, rgb(220, 220, 220));
  --text-on-accent: var(--bg, rgb(15, 15, 15));
  --text-success: var(--color-green, rgb(158, 206, 106));
  --text-warning: var(--color-orange, rgb(255, 158, 100));
  --textHighlight: var(--text-highlight-bg, rgba(var(--orange_x), 0.25));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, transparent);
  --titlebar-height: 40px;
  --titlebar-text-color: var(--text-muted, rgb(180, 180, 180));
  --titlebar-text-color-focused: var(--text-normal, rgb(220, 220, 220));
  --unknown: #ffffff;
  --vault-profile-color: var(--text-normal, rgb(220, 220, 220));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(220, 220, 220));
  --yellow: rgb(var(--yellow_x));
  --yellow_x: 224, 175, 104;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #020202);
  background-color: var(--tab-container-background, rgb(2, 2, 2));
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(2, 2, 2));
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(2, 2, 2));
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #020202);
  background-color: var(--tab-container-background, rgb(2, 2, 2));
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  color: rgb(220, 220, 220);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(125, 207, 255));
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(122, 162, 247));
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(122, 162, 247));
  outline: rgb(122, 162, 247) none 0px;
  text-decoration-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--orange, rgb(255, 158, 100));
  font-weight: 700;
  outline: rgb(255, 158, 100) none 0px;
  text-decoration-color: rgb(255, 158, 100);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(125, 207, 255));
  outline: rgb(125, 207, 255) none 0px;
  text-decoration-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 158, 100, 0.25));
  color: var(--text-normal, rgb(220, 220, 220));
  font-weight: 500;
  outline: rgb(220, 220, 220) none 0px;
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body del {
  color: var(--text-error, rgb(219, 75, 75));
  outline: rgb(219, 75, 75) none 0px;
  text-decoration-color: rgb(219, 75, 75);
}

html[saved-theme="dark"] body footer {
  opacity: 0.3;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(120, 120, 120);
  border-radius: 6px;
  border-width: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(158, 206, 106));
  border-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(180, 180, 180));
  outline: rgb(180, 180, 180) none 0px;
  text-decoration-color: rgb(180, 180, 180);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(187, 154, 247));
  outline: rgb(187, 154, 247) none 0px;
  text-decoration-color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--internal-link-color, rgb(158, 206, 106));
  outline: rgb(158, 206, 106) none 0px;
  text-decoration-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(187, 154, 247));
  outline: rgb(187, 154, 247) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(187, 154, 247));
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(220, 220, 220);
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 220, 220);
  margin-bottom: 0px;
  margin-left: 20.3594px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 220, 220);
  margin-bottom: 0px;
  margin-left: 20.3594px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(180, 180, 180));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(187, 154, 247, 0.12));
  color: var(--blockquote-color, rgb(220, 220, 220));
  line-height: 25.6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(220, 220, 220));
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(220, 220, 220));
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(2, 2, 2));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(187, 154, 247, 0.05));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(180, 180, 180));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(187, 154, 247, 0.05));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, rgb(187, 154, 247, 0.05));
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 117, 127);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 117, 127);
  border-left-width: 0px;
  border-right-color: rgb(255, 117, 127);
  border-right-width: 0px;
  border-top-color: rgb(255, 117, 127);
  border-top-width: 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(15, 15, 15));
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-width: 0px;
  border-left-color: rgb(180, 180, 180);
  border-left-width: 0px;
  border-right-color: rgb(180, 180, 180);
  border-right-width: 0px;
  border-top-color: rgb(180, 180, 180);
  border-top-width: 0px;
  color: var(--text-muted, rgb(180, 180, 180));
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgba(var(--background-primary-rgb), 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-radius: 12px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgba(var(--background-primary-rgb), 0.2);
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-radius: 12px;
  border-right-color: rgb(220, 220, 220);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}`,
    checkboxes: `html[saved-theme="dark"] body html {
  --font-family-heading: var(--font-family-theme, 'Inter', system-ui, -apple-system, sans-serif);
  --font-family-monospace: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
  --font-family-theme: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-theme: 16px;
  --line-height-theme: 1.6;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 3px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 3px;
  border-right-color: rgb(120, 120, 120);
  border-right-width: 3px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 3px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 220, 220);
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 2, 2);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 2, 2);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 158, 100);
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
  background-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(125, 207, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(122, 162, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 175, 104);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 117, 127);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 206, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 206, 106);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 125, 207, 255);
  background: rgba(125, 207, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(125, 207, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(125, 207, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(125, 207, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255, 117, 127);
  background: rgba(255, 117, 127, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 117, 127, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 117, 127, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(255, 117, 127, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 117, 127, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 219, 75, 75);
  background: rgba(219, 75, 75, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(219, 75, 75, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(219, 75, 75, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(219, 75, 75, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 187, 154, 247);
  background: rgba(187, 154, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(187, 154, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(187, 154, 247, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(187, 154, 247, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(187, 154, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 219, 75, 75);
  background: rgba(219, 75, 75, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(219, 75, 75, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(219, 75, 75, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(219, 75, 75, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(219, 75, 75, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 122, 162, 247);
  background: rgba(122, 162, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(122, 162, 247, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(122, 162, 247, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(122, 162, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 122, 162, 247);
  background: rgba(122, 162, 247, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(122, 162, 247, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(122, 162, 247, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(122, 162, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 224, 175, 104);
  background: rgba(224, 175, 104, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(224, 175, 104, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(224, 175, 104, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(224, 175, 104, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(224, 175, 104, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 180, 180, 180);
  background: rgba(180, 180, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 180, 180, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(180, 180, 180, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(180, 180, 180, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(180, 180, 180, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 26, 188, 156);
  background: rgba(26, 188, 156, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(26, 188, 156, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(26, 188, 156, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(26, 188, 156, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(26, 188, 156, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 125, 207, 255);
  background: rgba(125, 207, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(125, 207, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(125, 207, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(125, 207, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 125, 207, 255);
  background: rgba(125, 207, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(125, 207, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(125, 207, 255, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(125, 207, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(125, 207, 255, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 158, 100);
  background: rgba(255, 158, 100, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 158, 100, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 158, 100, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(255, 158, 100, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 158, 100, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 122, 162, 247;
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(122, 162, 247));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(220, 220, 220);
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
  background-color: var(--background-modifier-form-field, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(220, 220, 220));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(var(--background-primary-rgb), 0.25);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.4) 0px 25px 50px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 220, 220);
  outline: rgb(220, 220, 220) none 0px;
  text-decoration-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--accent-color, rgb(128, 208, 255));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(128, 208, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 208, 255);
  border-left-width: 0px;
  border-right-color: rgb(128, 208, 255);
  border-right-width: 0px;
  border-top-color: rgb(128, 208, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: var(--accent-color, rgb(128, 208, 255));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.15);
  color: var(--accent-color, rgb(128, 208, 255));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: var(--background-modifier-form-field, rgba(15, 15, 15, 0.5));
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.15);
  border-bottom-color: rgb(128, 208, 255);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(128, 208, 255);
  border-left-width: 0px;
  border-right-color: rgb(128, 208, 255);
  border-right-width: 0px;
  border-top-color: rgb(128, 208, 255);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--accent-color, rgb(128, 208, 255));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--accent-color, rgb(128, 208, 255));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(187, 154, 247, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(125, 207, 255, 0.15));
  --pill-border-color: var(--tag-border-color, hsla(202, 100%, 75%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(202, 100%, 75%, 0.15));
  --pill-color: var(--tag-color, rgb(187, 154, 247));
  --pill-color-hover: var(--tag-color-hover, rgb(125, 207, 255));
  --pill-color-remove: var(--tag-color, rgb(187, 154, 247));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(125, 207, 255));
  background-color: var(--pill-background, rgba(187, 154, 247, 0.15));
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(128, 208, 255, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(128, 208, 255, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(128, 208, 255, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(187, 154, 247));
  line-height: var(--line-height-tight, 22.4px);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(187, 154, 247);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(255, 117, 127);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 117, 127);
  border-left-width: 0px;
  border-right-color: rgb(255, 117, 127);
  border-right-width: 0px;
  border-top-color: rgb(255, 117, 127);
  border-top-width: 0px;
  color: var(--h1-color, rgb(255, 117, 127));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  margin-bottom: 12.944px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(255, 117, 127));
}

html[saved-theme="dark"] body h1::after {
  --font-weight: var(--h1-weight, 700);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(255, 117, 127) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(255, 117, 127) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(255, 117, 127);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 117, 127);
  border-left-width: 0px;
  border-right-color: rgb(255, 117, 127);
  border-right-width: 0px;
  border-top-color: rgb(255, 117, 127);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(255, 117, 127));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 700px;
}

html[saved-theme="dark"] body h1::before {
  --font-weight: var(--h1-weight, 700);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 117, 127);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 117, 127);
  border-left-width: 0px;
  border-right-color: rgb(255, 117, 127);
  border-right-width: 0px;
  border-top-color: rgb(255, 117, 127);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(255, 117, 127));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(187, 154, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(187, 154, 247);
  border-left-width: 0px;
  border-right-color: rgb(187, 154, 247);
  border-right-width: 0px;
  border-top-color: rgb(187, 154, 247);
  border-top-width: 0px;
  color: var(--h2-color, rgb(187, 154, 247));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  margin-bottom: 11.696px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(255, 117, 127);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 117, 127);
  border-left-width: 0px;
  border-right-color: rgb(255, 117, 127);
  border-right-width: 0px;
  border-top-color: rgb(255, 117, 127);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(255, 117, 127));
}

html[saved-theme="dark"] body h2::after {
  --font-weight: var(--h2-weight, 680);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(187, 154, 247) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(187, 154, 247) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(187, 154, 247);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(187, 154, 247);
  border-left-width: 0px;
  border-right-color: rgb(187, 154, 247);
  border-right-width: 0px;
  border-top-color: rgb(187, 154, 247);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(187, 154, 247));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 670px;
}

html[saved-theme="dark"] body h2::before {
  --font-weight: var(--h2-weight, 680);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(187, 154, 247);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(187, 154, 247);
  border-left-width: 0px;
  border-right-color: rgb(187, 154, 247);
  border-right-width: 0px;
  border-top-color: rgb(187, 154, 247);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(187, 154, 247));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(158, 206, 106);
  border-bottom-width: 0px;
  border-left-color: rgb(158, 206, 106);
  border-left-width: 0px;
  border-right-color: rgb(158, 206, 106);
  border-right-width: 0px;
  border-top-color: rgb(158, 206, 106);
  border-top-width: 0px;
  color: var(--h3-color, rgb(158, 206, 106));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  margin-bottom: 10.544px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 31.632px);
}

html[saved-theme="dark"] body h3::after {
  --font-weight: var(--h3-weight, 660);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(158, 206, 106) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(158, 206, 106) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(158, 206, 106);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(158, 206, 106);
  border-left-width: 0px;
  border-right-color: rgb(158, 206, 106);
  border-right-width: 0px;
  border-top-color: rgb(158, 206, 106);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(158, 206, 106));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 670px;
}

html[saved-theme="dark"] body h3::before {
  --font-weight: var(--h3-weight, 660);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(158, 206, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(158, 206, 106);
  border-left-width: 0px;
  border-right-color: rgb(158, 206, 106);
  border-right-width: 0px;
  border-top-color: rgb(158, 206, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(158, 206, 106));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(125, 207, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(125, 207, 255);
  border-left-width: 0px;
  border-right-color: rgb(125, 207, 255);
  border-right-width: 0px;
  border-top-color: rgb(125, 207, 255);
  border-top-width: 0px;
  color: var(--h4-color, rgb(125, 207, 255));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  margin-bottom: 9.504px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 28.512px);
}

html[saved-theme="dark"] body h4::after {
  --font-weight: var(--h4-weight, 640);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(125, 207, 255) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(125, 207, 255) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(125, 207, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(125, 207, 255);
  border-left-width: 0px;
  border-right-color: rgb(125, 207, 255);
  border-right-width: 0px;
  border-top-color: rgb(125, 207, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(125, 207, 255));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 670px;
}

html[saved-theme="dark"] body h4::before {
  --font-weight: var(--h4-weight, 640);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(125, 207, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(125, 207, 255);
  border-left-width: 0px;
  border-right-color: rgb(125, 207, 255);
  border-right-width: 0px;
  border-top-color: rgb(125, 207, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(125, 207, 255));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-width: 0px;
  color: var(--h5-color, rgb(122, 162, 247));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  line-height: var(--h5-line-height, 27.5456px);
  margin-bottom: 8.608px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 25.824px);
}

html[saved-theme="dark"] body h5::after {
  --font-weight: var(--h5-weight, 620);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(122, 162, 247) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(122, 162, 247) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(122, 162, 247));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 670px;
}

html[saved-theme="dark"] body h5::before {
  --font-weight: var(--h5-weight, 620);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(122, 162, 247);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(122, 162, 247);
  border-left-width: 0px;
  border-right-color: rgb(122, 162, 247);
  border-right-width: 0px;
  border-top-color: rgb(122, 162, 247);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(122, 162, 247));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(224, 175, 104);
  border-bottom-width: 0px;
  border-left-color: rgb(224, 175, 104);
  border-left-width: 0px;
  border-right-color: rgb(224, 175, 104);
  border-right-width: 0px;
  border-top-color: rgb(224, 175, 104);
  border-top-width: 0px;
  color: var(--h6-color, rgb(224, 175, 104));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  line-height: var(--h6-line-height, 25.6px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 24px;
}

html[saved-theme="dark"] body h6::after {
  --font-weight: var(--h6-weight, 600);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(224, 175, 104) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(224, 175, 104) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(224, 175, 104);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 175, 104);
  border-left-width: 0px;
  border-right-color: rgb(224, 175, 104);
  border-right-width: 0px;
  border-top-color: rgb(224, 175, 104);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(224, 175, 104));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 670px;
}

html[saved-theme="dark"] body h6::before {
  --font-weight: var(--h6-weight, 600);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(224, 175, 104);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(224, 175, 104);
  border-left-width: 0px;
  border-right-color: rgb(224, 175, 104);
  border-right-width: 0px;
  border-top-color: rgb(224, 175, 104);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(224, 175, 104));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 122, 162, 247);
  border-bottom-color: rgba(122, 162, 247, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(122, 162, 247, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(122, 162, 247, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(122, 162, 247, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgba(220, 220, 220, 0.9));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgba(220, 220, 220, 0.9));
}

html[saved-theme="dark"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="dark"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 220, 220);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(180, 180, 180);
  border-left-width: 0px;
  border-right-color: rgb(180, 180, 180);
  border-right-width: 0px;
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(180, 180, 180));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(2, 2, 2));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(180, 180, 180));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: var(--size-4-2, 10px);
  padding-top: 8px;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(180, 180, 180);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgba(220, 220, 220, 0.9));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(220, 220, 220, 0.9);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgba(220, 220, 220, 0.9);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgba(220, 220, 220, 0.9));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(180, 180, 180);
  border-left-width: 0px;
  border-right-color: rgb(180, 180, 180);
  border-right-width: 0px;
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(180, 180, 180));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(180, 180, 180);
  stroke: rgb(180, 180, 180);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(180, 180, 180);
  border-left-width: 0px;
  border-right-color: rgb(180, 180, 180);
  border-right-width: 0px;
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(180, 180, 180));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(220, 220, 220));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(2, 2, 2));
  border-color: rgb(220, 220, 220);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(220, 220, 220);
  color: var(--table-header-color, rgb(220, 220, 220));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: var(--text-muted, rgb(180, 180, 180));
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-width: 0px;
  border-left-color: rgb(180, 180, 180);
  border-left-width: 0px;
  border-right-color: rgb(180, 180, 180);
  border-right-width: 0px;
  border-top-color: rgb(180, 180, 180);
  border-top-width: 0px;
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-width: 0px;
  border-left-color: rgb(180, 180, 180);
  border-left-width: 0px;
  border-right-color: rgb(180, 180, 180);
  border-right-width: 0px;
  border-top-color: rgb(180, 180, 180);
  border-top-width: 0px;
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .metadata-property-value {
  --input-padding: var(--metadata-input-padding, 8px 10px);
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(187, 154, 247, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(125, 207, 255, 0.15));
  --pill-border-color: var(--tag-border-color, hsla(202, 100%, 75%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(202, 100%, 75%, 0.15));
  --pill-color: var(--tag-color, rgb(187, 154, 247));
  --pill-color-hover: var(--tag-color-hover, rgb(125, 207, 255));
  --pill-color-remove: var(--tag-color, rgb(187, 154, 247));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(125, 207, 255));
  background-color: var(--pill-background, rgba(187, 154, 247, 0.15));
  color: var(--pill-color, rgb(187, 154, 247));
}

html[saved-theme="dark"] body .note-properties-value {
  --input-padding: var(--metadata-input-padding, 8px 10px);
  color: rgb(180, 180, 180);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(2, 2, 2));
  color: var(--text-normal, rgb(220, 220, 220));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(2, 2, 2));
  border-color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(220, 220, 220);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(2, 2, 2));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
  color: var(--text-normal, rgb(220, 220, 220));
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  background-color: var(--background-modifier-form-field, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(220, 220, 220));
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(187, 154, 247, 0.05));
  border-bottom-color: rgb(180, 180, 180);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(180, 180, 180);
  border-left-width: 0px;
  border-right-color: rgb(180, 180, 180);
  border-right-width: 0px;
  border-top-color: rgb(180, 180, 180);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(180, 180, 180));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 220, 220);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 220, 220);
  border-left-width: 0px;
  border-right-color: rgb(220, 220, 220);
  border-right-width: 0px;
  border-top-color: rgb(220, 220, 220);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 220, 220);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(187, 154, 247, 0.15));
  border-bottom-color: rgba(128, 208, 255, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(128, 208, 255, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(128, 208, 255, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(128, 208, 255, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(187, 154, 247));
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --accent-h: 265;
  --accent-l: 55%;
  --accent-s: 60%;
  --background-modifier: rgba(var(--bg_highlight_x), 0.5);
  --background-modifier-active-hover: var(--bg_highlight, rgb(255, 255, 255));
  --background-modifier-border: var(--color-base-30, transparent);
  --background-modifier-border-hover: var(--color-base-35, transparent);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(var(--bg_dark_x), 0.8);
  --background-modifier-error: var(--color-red, rgb(200, 50, 70));
  --background-modifier-error-hover: var(--color-red, rgb(200, 50, 70));
  --background-modifier-form-field: var(--color-base-00, transparent);
  --background-modifier-form-field-highlighted: var(--bg_dark, rgb(240, 242, 246));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, transparent);
  --background-modifier-hover: rgba(var(--bg_highlight_x), 0.7);
  --background-modifier-hover-rgb: var(--bg_highlight_x, 255, 255, 255);
  --background-modifier-message: rgba(var(--bg_highlight_x), 0.9);
  --background-modifier-success: var(--color-green, rgb(20, 140, 80));
  --background-primary: var(--bg, #f8fafc);
  --background-primary-alt: var(--bg, rgb(248, 250, 252));
  --background-primary-rgb: var(--bg_x, 248, 250, 252);
  --background-secondary: var(--bg_dark, #f8fafc);
  --background-secondary-alt: var(--bg_dark, rgb(240, 242, 246));
  --background-secondary-rgb: var(--bg_dark_x, 240, 242, 246);
  --bases-cards-background: var(--background-primary, #f8fafc);
  --bases-cards-cover-background: var(--background-primary-alt, rgb(248, 250, 252));
  --bases-embed-border-color: var(--background-modifier-border, transparent);
  --bases-embed-border-radius: var(--radius-s, 6px);
  --bases-group-heading-property-color: var(--text-muted, rgb(75, 85, 95));
  --bases-table-cell-background-active: var(--background-primary, #f8fafc);
  --bases-table-cell-background-disabled: var(--background-primary-alt, rgb(248, 250, 252));
  --bases-table-cell-background-selected: var(--table-selection, hsla(265, 60%, 55%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 6px);
  --bases-table-group-background: var(--background-primary-alt, rgb(248, 250, 252));
  --bases-table-header-background: var(--background-primary, #f8fafc);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.7));
  --bases-table-header-color: var(--text-muted, rgb(75, 85, 95));
  --bases-table-summary-background: var(--background-primary, #f8fafc);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.7));
  --bg: rgb(var(--bg_x));
  --bg_dark: rgb(var(--bg_dark_x));
  --bg_dark2: rgb(var(--bg_dark2_x));
  --bg_dark2_x: 230, 232, 236;
  --bg_dark_x: 240, 242, 246;
  --bg_highlight: rgb(var(--bg_highlight_x));
  --bg_highlight_dark: rgb(var(--bg_highlight_dark_x));
  --bg_highlight_dark_x: 235, 238, 242;
  --bg_highlight_x: 255, 255, 255;
  --bg_x: 248, 250, 252;
  --blockquote-background-color: rgba(102, 63, 191, 0.08);
  --blockquote-border-color: var(--interactive-accent, hsl(265, 60%, 55%));
  --blue: rgb(var(--blue_x));
  --blue0: rgb(var(--blue0_x));
  --blue0_x: 25, 55, 100;
  --blue_x: 30, 70, 160;
  --bold-color: var(--cyan, rgb(0, 120, 180));
  --border-radius: 8px;
  --bullet-new-color: var(--purple, rgb(102, 63, 191));
  --callout-bug: var(--red_x, 200, 50, 70);
  --callout-default: var(--blue_x, 30, 70, 160);
  --callout-error: var(--red1_x, 180, 30, 50);
  --callout-example: var(--magenta_x, 160, 30, 140);
  --callout-fail: var(--red1_x, 180, 30, 50);
  --callout-important: var(--green_x, 20, 140, 80);
  --callout-info: var(--blue_x, 30, 70, 160);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--yellow_x, 180, 120, 0);
  --callout-quote: var(--fg_dark_x, 75, 85, 95);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--teal_x, 0, 140, 160);
  --callout-summary: var(--cyan_x, 0, 120, 180);
  --callout-tip: var(--cyan_x, 0, 120, 180);
  --callout-todo: var(--cyan_x, 0, 120, 180);
  --callout-warning: var(--orange_x, 220, 100, 20);
  --canvas-background: var(--background-primary, #f8fafc);
  --canvas-card-label-color: var(--text-faint, rgb(75, 85, 95));
  --canvas-controls-radius: var(--radius-s, 6px);
  --caret-color: var(--text-normal, rgb(30, 35, 42));
  --checkbox-border-color: var(--comment, rgb(120, 125, 135));
  --checkbox-border-color-hover: var(--comment, rgb(120, 125, 135));
  --checkbox-color: var(--green, rgb(20, 140, 80));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(262, 61.2%, 63.25%));
  --checkbox-marker-color: var(--background-primary, #f8fafc);
  --checkbox-radius: var(--radius-s, 6px);
  --checklist-done-color: var(--text-muted, rgb(75, 85, 95));
  --clickable-icon-radius: var(--radius-s, 6px);
  --code-background: var(--background-primary-alt, rgba(102, 63, 191, 0.06));
  --code-border-color: var(--background-modifier-border, transparent);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.7));
  --code-comment: rgb(var(--code-comment_x));
  --code-comment_x: 110, 115, 125;
  --code-function: var(--color-yellow, rgb(180, 120, 0));
  --code-important: var(--color-orange, rgb(220, 100, 20));
  --code-keyword: var(--color-pink, rgb(160, 30, 140));
  --code-normal: var(--text-normal, rgb(30, 35, 42));
  --code-operator: var(--color-red, rgb(200, 50, 70));
  --code-property: var(--color-cyan, rgb(0, 120, 180));
  --code-punctuation: var(--text-muted, rgb(75, 85, 95));
  --code-radius: var(--radius-s, 6px);
  --code-string: var(--color-green, rgb(20, 140, 80));
  --code-tag: var(--color-red, rgb(200, 50, 70));
  --code-value: var(--color-purple, rgb(160, 30, 140));
  --collapse-icon-color: var(--text-faint, rgb(75, 85, 95));
  --collapse-icon-color-collapsed: var(--text-accent, rgb(160, 30, 140));
  --color-blue: var(--blue, rgb(30, 70, 160));
  --color-cyan: var(--cyan, rgb(0, 120, 180));
  --color-green: var(--green, rgb(20, 140, 80));
  --color-orange: var(--orange, rgb(220, 100, 20));
  --color-pink: var(--magenta, rgb(160, 30, 140));
  --color-purple: var(--magenta, rgb(160, 30, 140));
  --color-red: var(--red, rgb(200, 50, 70));
  --color-yellow: var(--yellow, rgb(180, 120, 0));
  --comment: rgb(var(--comment_x));
  --comment_x: 120, 125, 135;
  --cyan: rgb(var(--cyan_x));
  --cyan_x: 0, 120, 180;
  --dark: var(--text-normal, var(--fg, rgb(30, 35, 42)));
  --darkgray: var(--text-normal, var(--fg, rgb(30, 35, 42)));
  --divider-color: var(--background-modifier-border, transparent);
  --divider-color-hover: var(--interactive-accent, hsl(265, 60%, 55%));
  --dropdown-background: var(--interactive-normal, #e2e8f0);
  --dropdown-background-hover: var(--interactive-hover, #cbd5e1);
  --fg: rgb(var(--fg_x));
  --fg_dark: rgb(var(--fg_dark_x));
  --fg_dark_x: 75, 85, 95;
  --fg_x: 30, 35, 42;
  --file-header-background: var(--background-primary, #f8fafc);
  --file-header-background-focused: var(--background-primary, #f8fafc);
  --file-margins: var(--file-margins-y) var(--file-margins-x, clamp(8px, 4vw, 24px));
  --flair-background: var(--interactive-normal, #e2e8f0);
  --flair-color: var(--text-normal, rgb(30, 35, 42));
  --folder-note-color: rgb(var(--folder-note-color_x));
  --folder-note-color_x: 120, 85, 200;
  --font-family-heading: 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-monospace: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
  --font-family-theme: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-theme: 16px;
  --font-text-size: var(--font-size-theme, 16px);
  --footnote-divider-color: var(--metadata-divider-color, transparent);
  --footnote-gap: var(--size-4-1, 8px);
  --footnote-id-color: var(--text-muted, rgb(75, 85, 95));
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(75, 85, 95));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.7));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --footnote-radius: var(--radius-s, 6px);
  --frame-right-space: 80px;
  --graph-line: var(--comment, rgb(120, 125, 135));
  --graph-node: var(--fg, rgb(30, 35, 42));
  --graph-node-attachment: var(--blue, rgb(30, 70, 160));
  --graph-node-focused: var(--text-accent, rgb(160, 30, 140));
  --graph-node-tag: var(--orange, rgb(220, 100, 20));
  --graph-node-unresolved: var(--text-faint, rgb(75, 85, 95));
  --graph-text: var(--text-normal, rgb(30, 35, 42));
  --gray: var(--text-muted, var(--fg_dark, rgb(75, 85, 95)));
  --green: rgb(var(--green_x));
  --green_x: 20, 140, 80;
  --h1-color: var(--red, rgb(200, 50, 70));
  --h2-color: var(--purple, rgb(102, 63, 191));
  --h3-color: var(--green, rgb(20, 140, 80));
  --h4-color: var(--cyan, rgb(0, 120, 180));
  --h5-color: var(--blue, rgb(30, 70, 160));
  --h5-line-height: var(--line-height-normal, 1.6);
  --h6-color: var(--yellow, rgb(180, 120, 0));
  --h6-line-height: var(--line-height-normal, 1.6);
  --heading-formatting: var(--text-faint, rgb(75, 85, 95));
  --highlight: var(--text-highlight-bg, rgba(var(--orange_x), 0.25));
  --hr-color: var(--background-modifier-border, transparent);
  --icon-color: var(--text-muted, rgb(75, 85, 95));
  --icon-color-active: var(--text-accent, rgb(160, 30, 140));
  --icon-color-focused: var(--text-normal, rgb(30, 35, 42));
  --icon-color-hover: var(--text-muted, rgb(75, 85, 95));
  --inline-title-color: var(--h1-color, rgb(200, 50, 70));
  --input-date-separator: var(--text-faint, rgb(75, 85, 95));
  --input-icon-inset: var(--size-4-1, 8px);
  --input-padding: var(--size-4-1) var(--size-4-2, 8px 10px);
  --input-placeholder-color: var(--text-faint, rgb(75, 85, 95));
  --insertion-color: var(--orange, rgb(220, 100, 20));
  --interactive-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --interactive-accent-hover: var(--color-accent-2, hsl(262, 61.2%, 63.25%));
  --interactive-accent-hsl: var(--color-accent-hsl, 265, 60%, 55%);
  --interactive-hover: var(--color-base-10, #cbd5e1);
  --interactive-normal: var(--color-base-00, #e2e8f0);
  --interactive-success: var(--green, rgb(20, 140, 80));
  --internal-link-color: var(--green, rgb(20, 140, 80));
  --internal-link-color-hover: var(--blue, rgb(30, 70, 160));
  --italic-color: var(--blue, rgb(30, 70, 160));
  --light: var(--background-primary, var(--bg, #f8fafc));
  --lightgray: var(--background-secondary, var(--bg_dark, #f8fafc));
  --line-height-normal: var(--line-height-theme, 1.6);
  --line-height-theme: 1.6;
  --link-color: var(--purple, rgb(102, 63, 191));
  --link-color-hover: var(--cyan, rgb(0, 120, 180));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--purple, rgb(102, 63, 191));
  --link-external-color-hover: var(--cyan, rgb(0, 120, 180));
  --link-unresolved-color: var(--text-accent, rgb(160, 30, 140));
  --list-marker-color: var(--purple, rgb(102, 63, 191));
  --list-marker-color-collapsed: var(--text-muted, rgb(75, 85, 95));
  --list-marker-color-hover: var(--purple-light, rgb(140, 100, 220));
  --list-number-color: var(--magenta, rgb(160, 30, 140));
  --list-number-color-hover: var(--magenta-light, rgb(180, 60, 200));
  --list-spacing: 0;
  --magent_hsl: 261 65% 50%;
  --magenta: rgb(var(--magenta_x));
  --magenta-light: rgb(var(--magenta-light_x));
  --magenta-light_x: 180, 60, 200;
  --magenta_x: 160, 30, 140;
  --menu-background: var(--background-secondary, #f8fafc);
  --menu-border-color: var(--background-modifier-border-hover, transparent);
  --menu-shadow: var(--shadow-s, 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24));
  --metadata-border-color: var(--background-modifier-border, transparent);
  --metadata-divider-color: var(--background-modifier-border, transparent);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.7));
  --metadata-input-padding: var(--size-4-1) var(--size-4-2, 8px 10px);
  --metadata-input-text-color: var(--text-normal, rgb(30, 35, 42));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.7));
  --metadata-label-text-color: var(--text-muted, rgb(75, 85, 95));
  --metadata-label-text-color-hover: var(--text-muted, rgb(75, 85, 95));
  --metadata-padding: var(--size-4-2, 10px 0) 0;
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.7));
  --modal-background: var(--background-primary, #f8fafc);
  --motion-duration-fast: 0.15s;
  --motion-duration-medium: 0.25s;
  --motion-duration-slow: 0.35s;
  --motion-easing-accelerate: cubic-bezier(0.4, 0, 1, 1);
  --motion-easing-decelerate: cubic-bezier(0.0, 0, 0.2, 1);
  --motion-easing-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(75, 85, 95));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(75, 85, 95));
  --nav-file-tag: rgba(var(--yellow_x), 0.9);
  --nav-heading-color: var(--text-normal, rgb(30, 35, 42));
  --nav-heading-color-collapsed: var(--text-faint, rgb(75, 85, 95));
  --nav-heading-color-collapsed-hover: var(--text-muted, rgb(75, 85, 95));
  --nav-heading-color-hover: var(--text-normal, rgb(30, 35, 42));
  --nav-item-background-active: rgba(var(--bg_highlight), 0.2);
  --nav-item-background-hover: var(--bg_highlight, rgb(255, 255, 255));
  --nav-item-color: var(--text-muted, rgba(30, 35, 42, 0.9));
  --nav-item-color-active: var(--text-normal, rgb(30, 35, 42));
  --nav-item-color-highlighted: var(--text-accent, rgb(160, 30, 140));
  --nav-item-color-hover: var(--fg, rgb(30, 35, 42));
  --nav-item-color-selected: var(--text-normal, rgb(30, 35, 42));
  --nav-item-padding: var(--size-2-2) var(--size-4-1) var(--size-2-2) var(--size-4-6, 4px 8px 4px 18px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px 4px 18px);
  --nav-item-radius: var(--radius-s, 6px);
  --nav-tag-color: var(--text-faint, rgb(75, 85, 95));
  --nav-tag-color-active: var(--text-muted, rgb(75, 85, 95));
  --nav-tag-color-hover: var(--text-muted, rgb(75, 85, 95));
  --nav-tag-radius: var(--radius-s, 6px);
  --orange: rgb(var(--orange_x));
  --orange_x: 220, 100, 20;
  --pdf-background: var(--background-primary, #f8fafc);
  --pdf-page-background: var(--background-primary, #f8fafc);
  --pdf-sidebar-background: var(--background-primary, #f8fafc);
  --pill-border-color: var(--background-modifier-border, transparent);
  --pill-border-color-hover: var(--background-modifier-border-hover, transparent);
  --pill-color: var(--text-muted, rgb(75, 85, 95));
  --pill-color-hover: var(--text-normal, rgb(30, 35, 42));
  --pill-color-remove: var(--text-faint, rgb(75, 85, 95));
  --pill-color-remove-hover: var(--text-accent, rgb(160, 30, 140));
  --pink: rgb(var(--pink_x));
  --pink_hsl: 320 65% 50%;
  --pink_x: 200, 30, 140;
  --popover-height: 500px;
  --popover-width: 500px;
  --prompt-background: var(--background-primary, #f8fafc);
  --purple: rgb(var(--purple_x));
  --purple-light: rgb(var(--purple-light_x));
  --purple-light_x: 140, 100, 220;
  --purple_x: 102, 63, 191;
  --radius-s: 6px;
  --raised-background: var(--blur-background, color-mix(in srgb, #f8fafc 65%, transparent) linear-gradient(#f8fafc, color-mix(in srgb, #f8fafc 65%, transparent)));
  --red: rgb(var(--red_x));
  --red1: rgb(var(--red1_x));
  --red1_x: 180, 30, 50;
  --red_x: 200, 50, 70;
  --ribbon-background: var(--background-secondary, #f8fafc);
  --ribbon-background-collapsed: var(--background-primary, #f8fafc);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 10px 8px 12px);
  --scrollbar-active-thumb-bg: rgba(var(--text-muted-rgb), 0.4);
  --scrollbar-thumb-bg: rgba(var(--text-muted-rgb), 0.2);
  --scrollbar-width: 10px;
  --search-clear-button-color: var(--text-muted, rgb(75, 85, 95));
  --search-icon-color: var(--text-muted, rgb(75, 85, 95));
  --search-result-background: var(--background-primary, #f8fafc);
  --secondary: var(--text-accent, var(--magenta, rgb(160, 30, 140)));
  --setting-group-heading-color: var(--text-normal, rgb(30, 35, 42));
  --setting-items-background: var(--background-primary-alt, transparent);
  --setting-items-border-color: var(--background-modifier-border, transparent);
  --setting-items-padding: var(--size-4-5, 16px);
  --shadow-l: 0 10px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.1);
  --shadow-m: 0 3px 6px rgba(0, 0, 0, 0.15), 0 2px 4px rgba(0, 0, 0, 0.12);
  --shadow-s: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  --shadow-xl: 0 15px 25px rgba(0, 0, 0, 0.15), 0 5px 10px rgba(0, 0, 0, 0.05);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, rgb(75, 85, 95));
  --shiki-code-background: var(--code-background, rgba(102, 63, 191, 0.06));
  --shiki-code-block-border-radius: var(--code-radius, 6px);
  --shiki-code-comment: var(--text-faint, rgb(75, 85, 95));
  --shiki-code-function: var(--color-green, rgb(20, 140, 80));
  --shiki-code-important: var(--color-orange, rgb(220, 100, 20));
  --shiki-code-keyword: var(--color-pink, rgb(160, 30, 140));
  --shiki-code-normal: var(--text-muted, rgb(75, 85, 95));
  --shiki-code-property: var(--color-cyan, rgb(0, 120, 180));
  --shiki-code-punctuation: var(--text-muted, rgb(75, 85, 95));
  --shiki-code-string: var(--color-yellow, rgb(180, 120, 0));
  --shiki-code-value: var(--color-purple, rgb(160, 30, 140));
  --shiki-gutter-border-color: var(--background-modifier-border, transparent);
  --shiki-gutter-text-color: var(--text-faint, rgb(75, 85, 95));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, rgb(75, 85, 95));
  --shiki-highlight-neutral: var(--shiki-code-normal, rgb(75, 85, 95));
  --shiki-terminal-dots-color: var(--text-faint, rgb(75, 85, 95));
  --shiki-tooltip-background: var(--background-modifier-message, rgba(255, 255, 255, 0.9));
  --size-4-1: 8px;
  --size-4-2: 10px;
  --size-4-4: 14px;
  --size-4-5: 16px;
  --size-4-6: 18px;
  --slider-thumb-border-color: var(--background-modifier-border-hover, transparent);
  --slider-track-background: var(--background-modifier-border, transparent);
  --spoiler-background: rgba(240, 242, 246, 0.5);
  --spoiler-background-hover: rgba(240, 242, 246, 0.7);
  --spoiler-pattern: radial-gradient(circle 1px at 10px 8px, rgba(100, 100, 100, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 30px 2px, rgba(100, 100, 100, 0.4) 50%, transparent 50%),
        radial-gradient(circle 1px at 50px 12px, rgba(100, 100, 100, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 70px 6px, rgba(100, 100, 100, 0.5) 50%, transparent 50%),
        radial-gradient(circle 1px at 15px 24px, rgba(100, 100, 100, 0.6) 50%, transparent 50%),
        radial-gradient(circle 1px at 38px 28px, rgba(100, 100, 100, 0.4) 50%, transparent 50%),
        radial-gradient(circle 1px at 60px 36px, rgba(100, 100, 100, 0.7) 50%, transparent 50%),
        radial-gradient(circle 1px at 85px 22px, rgba(100, 100, 100, 0.5) 50%, transparent 50%);
  --status-bar-background: var(--background-secondary, #f8fafc);
  --status-bar-border-color: var(--divider-color, transparent);
  --status-bar-text-color: var(--text-muted, rgb(75, 85, 95));
  --suggestion-background: var(--background-primary, #f8fafc);
  --sync-avatar-color-1: var(--color-red, rgb(200, 50, 70));
  --sync-avatar-color-2: var(--color-orange, rgb(220, 100, 20));
  --sync-avatar-color-3: var(--color-yellow, rgb(180, 120, 0));
  --sync-avatar-color-4: var(--color-green, rgb(20, 140, 80));
  --sync-avatar-color-5: var(--color-cyan, rgb(0, 120, 180));
  --sync-avatar-color-6: var(--color-blue, rgb(30, 70, 160));
  --sync-avatar-color-7: var(--color-purple, rgb(160, 30, 140));
  --sync-avatar-color-8: var(--color-pink, rgb(160, 30, 140));
  --tab-background: rgba(240, 242, 246, 0.9);
  --tab-background-active: var(--background-primary, rgba(255, 255, 255, 0.95));
  --tab-background-hover: rgba(248, 250, 252, 0.8);
  --tab-container-background: var(--background-primary, #f8fafc);
  --tab-divider-color: var(--background-modifier-border-hover, rgba(200, 205, 210, 0.4));
  --tab-max-width: 200px;
  --tab-min-width: 40px;
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 6px);
  --tab-switcher-background: var(--background-secondary, #f8fafc);
  --tab-text-color: var(--text-faint, rgb(75, 85, 95));
  --tab-text-color-active: var(--text-muted, rgb(75, 85, 95));
  --tab-text-color-focused: var(--text-muted, rgb(75, 85, 95));
  --tab-text-color-focused-active: var(--text-muted, rgb(75, 85, 95));
  --tab-text-color-focused-active-current: var(--text-normal, rgb(30, 35, 42));
  --tab-text-color-focused-highlighted: var(--text-accent, rgb(160, 30, 140));
  --tab-width: 120px;
  --table-add-button-border-color: var(--background-modifier-border, transparent);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(265, 60%, 55%));
  --table-drag-handle-color: var(--text-faint, rgb(75, 85, 95));
  --table-drag-handle-color-active: var(--text-on-accent, rgb(248, 250, 252));
  --table-header-background: var(--bg_dark2, rgb(230, 232, 236));
  --table-header-background-hover: var(--bg_dark2, rgb(230, 232, 236));
  --table-header-color: var(--text-normal, rgb(30, 35, 42));
  --table-selection-border-color: var(--interactive-accent, hsl(265, 60%, 55%));
  --tag-background: rgba(var(--magenta_x), 0.15);
  --tag-background-hover: rgba(var(--cyan_x), 0.15);
  --tag-color: var(--magenta, rgb(160, 30, 140));
  --tag-color-hover: var(--cyan, rgb(0, 120, 180));
  --teal: rgb(var(--teal_x));
  --teal_x: 0, 140, 160;
  --terminal_black: rgb(var(--terminal_black_x));
  --terminal_black_x: 15, 15, 20;
  --tertiary: var(--text-accent-hover, var(--cyan, rgb(0, 120, 180)));
  --text-accent: var(--magenta, rgb(160, 30, 140));
  --text-accent-hover: var(--cyan, rgb(0, 120, 180));
  --text-error: var(--red1, rgb(180, 30, 50));
  --text-error-hover: var(--red, rgb(200, 50, 70));
  --text-faint: var(--fg_dark, rgb(75, 85, 95));
  --text-highlight-bg: rgba(var(--orange_x), 0.25);
  --text-muted: var(--fg_dark, rgb(75, 85, 95));
  --text-muted-rgb: var(--fg_dark_x, 75, 85, 95);
  --text-normal: var(--fg, rgb(30, 35, 42));
  --text-on-accent: var(--bg, rgb(248, 250, 252));
  --text-success: var(--color-green, rgb(20, 140, 80));
  --text-warning: var(--color-orange, rgb(220, 100, 20));
  --textHighlight: var(--text-highlight-bg, rgba(var(--orange_x), 0.25));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, transparent);
  --titlebar-height: 40px;
  --titlebar-text-color: var(--text-muted, rgb(75, 85, 95));
  --titlebar-text-color-focused: var(--text-normal, rgb(30, 35, 42));
  --unknown: #000000;
  --vault-profile-color: var(--text-normal, rgb(30, 35, 42));
  --vault-profile-color-hover: var(--vault-profile-color, rgb(30, 35, 42));
  --yellow: rgb(var(--yellow_x));
  --yellow_x: 180, 120, 0;
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #f8fafc);
  background-color: var(--tab-container-background, rgb(248, 250, 252));
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(248, 250, 252));
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(248, 250, 252));
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #f8fafc);
  background-color: var(--tab-container-background, rgb(248, 250, 252));
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  color: rgb(30, 35, 42);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(0, 120, 180));
  outline: rgb(0, 120, 180) none 0px;
  text-decoration-color: rgb(0, 120, 180);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(30, 70, 160));
  outline: rgb(30, 70, 160) none 0px;
  text-decoration-color: rgb(30, 70, 160);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(30, 70, 160));
  outline: rgb(30, 70, 160) none 0px;
  text-decoration-color: rgb(30, 70, 160);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--orange, rgb(220, 100, 20));
  font-weight: 700;
  outline: rgb(220, 100, 20) none 0px;
  text-decoration-color: rgb(220, 100, 20);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(0, 120, 180));
  outline: rgb(0, 120, 180) none 0px;
  text-decoration-color: rgb(0, 120, 180);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(220, 100, 20, 0.25));
  color: var(--text-normal, rgb(30, 35, 42));
  font-weight: 500;
  outline: rgb(30, 35, 42) none 0px;
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body del {
  color: var(--text-error, rgb(180, 30, 50));
  outline: rgb(180, 30, 50) none 0px;
  text-decoration-color: rgb(180, 30, 50);
}

html[saved-theme="light"] body footer {
  opacity: 0.3;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(120, 125, 135);
  border-radius: 6px;
  border-width: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(20, 140, 80));
  border-color: rgb(20, 140, 80);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(75, 85, 95));
  outline: rgb(75, 85, 95) none 0px;
  text-decoration-color: rgb(75, 85, 95);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(102, 63, 191));
  outline: rgb(102, 63, 191) none 0px;
  text-decoration-color: rgb(102, 63, 191);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--internal-link-color, rgb(20, 140, 80));
  outline: rgb(20, 140, 80) none 0px;
  text-decoration-color: rgb(20, 140, 80);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(160, 30, 140));
  outline: rgb(160, 30, 140) none 0px;
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(160, 30, 140));
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(30, 35, 42);
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body ol > li {
  color: rgb(30, 35, 42);
  margin-bottom: 0px;
  margin-left: 20.3594px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="light"] body ul > li {
  color: rgb(30, 35, 42);
  margin-bottom: 0px;
  margin-left: 20.3594px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: var(--list-spacing, 0px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 0px);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(75, 85, 95));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(102, 63, 191, 0.08));
  color: var(--blockquote-color, rgb(30, 35, 42));
  line-height: 25.6px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}

html[saved-theme="light"] body table {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(30, 35, 42));
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(30, 35, 42));
  padding-bottom: 0px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 0px;
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(230, 232, 236));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(102, 63, 191, 0.06));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(30, 35, 42));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(102, 63, 191, 0.06));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, rgba(102, 63, 191, 0.06));
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(200, 50, 70);
  border-bottom-width: 0px;
  border-left-color: rgb(200, 50, 70);
  border-left-width: 0px;
  border-right-color: rgb(200, 50, 70);
  border-right-width: 0px;
  border-top-color: rgb(200, 50, 70);
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(248, 250, 252));
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-width: 0px;
  border-left-color: rgb(75, 85, 95);
  border-left-width: 0px;
  border-right-color: rgb(75, 85, 95);
  border-right-width: 0px;
  border-top-color: rgb(75, 85, 95);
  border-top-width: 0px;
  color: var(--text-muted, rgb(75, 85, 95));
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .transclude {
  background-color: rgba(var(--background-primary-rgb), 0.2);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-radius: 12px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgba(var(--background-primary-rgb), 0.2);
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-radius: 12px;
  border-right-color: rgb(30, 35, 42);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}`,
    checkboxes: `html[saved-theme="light"] body html {
  --font-family-heading: var(--font-family-theme, 'Inter', system-ui, -apple-system, sans-serif);
  --font-family-monospace: 'JetBrains Mono', 'Fira Code', 'SF Mono', Consolas, monospace;
  --font-family-theme: 'Inter', system-ui, -apple-system, sans-serif;
  --font-size-theme: 16px;
  --line-height-theme: 1.6;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(120, 125, 135);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 3px;
  border-left-color: rgb(120, 125, 135);
  border-left-width: 3px;
  border-right-color: rgb(120, 125, 135);
  border-right-width: 3px;
  border-top-color: rgb(120, 125, 135);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 3px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(30, 35, 42);
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 250, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 250, 252);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 100, 20);
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
  background-color: rgb(180, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 120, 180);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 70, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(200, 50, 70);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(200, 50, 70);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(200, 50, 70);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(200, 50, 70);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(30, 70, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(180, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(160, 30, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(200, 50, 70);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 140, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 140, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 140, 80);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 120, 180);
  background: rgba(0, 120, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 120, 180, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 120, 180, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 120, 180, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 120, 180, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 200, 50, 70);
  background: rgba(200, 50, 70, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(200, 50, 70, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(200, 50, 70, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(200, 50, 70, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(200, 50, 70, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 180, 30, 50);
  background: rgba(180, 30, 50, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 30, 50, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(180, 30, 50, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(180, 30, 50, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(180, 30, 50, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 160, 30, 140);
  background: rgba(160, 30, 140, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(160, 30, 140, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(160, 30, 140, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(160, 30, 140, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(160, 30, 140, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 180, 30, 50);
  background: rgba(180, 30, 50, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 30, 50, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(180, 30, 50, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(180, 30, 50, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(180, 30, 50, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 30, 70, 160);
  background: rgba(30, 70, 160, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(30, 70, 160, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(30, 70, 160, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(30, 70, 160, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(30, 70, 160, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 30, 70, 160);
  background: rgba(30, 70, 160, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(30, 70, 160, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(30, 70, 160, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(30, 70, 160, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(30, 70, 160, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 180, 120, 0);
  background: rgba(180, 120, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(180, 120, 0, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(180, 120, 0, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(180, 120, 0, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(180, 120, 0, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 75, 85, 95);
  background: rgba(75, 85, 95, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(75, 85, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(75, 85, 95, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(75, 85, 95, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(75, 85, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 0, 140, 160);
  background: rgba(0, 140, 160, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 140, 160, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 140, 160, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 140, 160, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 140, 160, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 120, 180);
  background: rgba(0, 120, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 120, 180, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 120, 180, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 120, 180, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 120, 180, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 120, 180);
  background: rgba(0, 120, 180, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 120, 180, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 120, 180, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(0, 120, 180, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 120, 180, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 220, 100, 20);
  background: rgba(220, 100, 20, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(220, 100, 20, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(220, 100, 20, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(220, 100, 20, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(220, 100, 20, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 30, 70, 160;
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(30, 70, 160));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(30, 35, 42);
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
  background-color: var(--background-modifier-form-field, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(30, 35, 42));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(var(--background-primary-rgb), 0.25);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.4) 0px 25px 50px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(30, 35, 42);
  outline: rgb(30, 35, 42) none 0px;
  text-decoration-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: var(--accent-color, rgb(129, 71, 209));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(129, 71, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(129, 71, 209);
  border-left-width: 0px;
  border-right-color: rgb(129, 71, 209);
  border-right-width: 0px;
  border-top-color: rgb(129, 71, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: var(--accent-color, rgb(129, 71, 209));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.15);
  color: var(--accent-color, rgb(129, 71, 209));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: var(--background-modifier-form-field, rgba(248, 250, 252, 0.5));
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(189, 189, 189);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(189, 189, 189);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(189, 189, 189);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.15);
  border-bottom-color: rgb(129, 71, 209);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(129, 71, 209);
  border-left-width: 0px;
  border-right-color: rgb(129, 71, 209);
  border-right-width: 0px;
  border-top-color: rgb(129, 71, 209);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: var(--accent-color, rgb(129, 71, 209));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: hsla(var(--accent-h), var(--accent-s), var(--accent-l), 0.15);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--accent-color, rgb(129, 71, 209));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, rgba(160, 30, 140, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(0, 120, 180, 0.15));
  --pill-border-color: var(--tag-border-color, hsla(265, 60%, 55%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(265, 60%, 55%, 0.15));
  --pill-color: var(--tag-color, rgb(160, 30, 140));
  --pill-color-hover: var(--tag-color-hover, rgb(0, 120, 180));
  --pill-color-remove: var(--tag-color, rgb(160, 30, 140));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(0, 120, 180));
  background-color: var(--pill-background, rgba(160, 30, 140, 0.15));
  border-bottom-color: rgba(129, 71, 209, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(129, 71, 209, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(129, 71, 209, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(129, 71, 209, 0.15);
  border-top-width: 0px;
  color: var(--pill-color, rgb(160, 30, 140));
  line-height: var(--line-height-tight, 22.4px);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(160, 30, 140);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(200, 50, 70);
  border-bottom-width: 0px;
  border-left-color: rgb(200, 50, 70);
  border-left-width: 0px;
  border-right-color: rgb(200, 50, 70);
  border-right-width: 0px;
  border-top-color: rgb(200, 50, 70);
  border-top-width: 0px;
  color: var(--h1-color, rgb(200, 50, 70));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  margin-bottom: 12.944px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(200, 50, 70));
}

html[saved-theme="light"] body h1::after {
  --font-weight: var(--h1-weight, 700);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(200, 50, 70) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(200, 50, 70) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(200, 50, 70);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(200, 50, 70);
  border-left-width: 0px;
  border-right-color: rgb(200, 50, 70);
  border-right-width: 0px;
  border-top-color: rgb(200, 50, 70);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(200, 50, 70));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 700px;
}

html[saved-theme="light"] body h1::before {
  --font-weight: var(--h1-weight, 700);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(200, 50, 70);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(200, 50, 70);
  border-left-width: 0px;
  border-right-color: rgb(200, 50, 70);
  border-right-width: 0px;
  border-top-color: rgb(200, 50, 70);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h1-color, rgb(200, 50, 70));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(102, 63, 191);
  border-bottom-width: 0px;
  border-left-color: rgb(102, 63, 191);
  border-left-width: 0px;
  border-right-color: rgb(102, 63, 191);
  border-right-width: 0px;
  border-top-color: rgb(102, 63, 191);
  border-top-width: 0px;
  color: var(--h2-color, rgb(102, 63, 191));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  margin-bottom: 11.696px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(200, 50, 70);
  border-bottom-width: 0px;
  border-left-color: rgb(200, 50, 70);
  border-left-width: 0px;
  border-right-color: rgb(200, 50, 70);
  border-right-width: 0px;
  border-top-color: rgb(200, 50, 70);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(200, 50, 70));
}

html[saved-theme="light"] body h2::after {
  --font-weight: var(--h2-weight, 680);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(102, 63, 191) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(102, 63, 191) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(102, 63, 191);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(102, 63, 191);
  border-left-width: 0px;
  border-right-color: rgb(102, 63, 191);
  border-right-width: 0px;
  border-top-color: rgb(102, 63, 191);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(102, 63, 191));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 670px;
}

html[saved-theme="light"] body h2::before {
  --font-weight: var(--h2-weight, 680);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(102, 63, 191);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(102, 63, 191);
  border-left-width: 0px;
  border-right-color: rgb(102, 63, 191);
  border-right-width: 0px;
  border-top-color: rgb(102, 63, 191);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgb(102, 63, 191));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(20, 140, 80);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 140, 80);
  border-left-width: 0px;
  border-right-color: rgb(20, 140, 80);
  border-right-width: 0px;
  border-top-color: rgb(20, 140, 80);
  border-top-width: 0px;
  color: var(--h3-color, rgb(20, 140, 80));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  margin-bottom: 10.544px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 31.632px);
}

html[saved-theme="light"] body h3::after {
  --font-weight: var(--h3-weight, 660);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(20, 140, 80) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(20, 140, 80) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(20, 140, 80);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(20, 140, 80);
  border-left-width: 0px;
  border-right-color: rgb(20, 140, 80);
  border-right-width: 0px;
  border-top-color: rgb(20, 140, 80);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(20, 140, 80));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 670px;
}

html[saved-theme="light"] body h3::before {
  --font-weight: var(--h3-weight, 660);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(20, 140, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(20, 140, 80);
  border-left-width: 0px;
  border-right-color: rgb(20, 140, 80);
  border-right-width: 0px;
  border-top-color: rgb(20, 140, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgb(20, 140, 80));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(0, 120, 180);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 120, 180);
  border-left-width: 0px;
  border-right-color: rgb(0, 120, 180);
  border-right-width: 0px;
  border-top-color: rgb(0, 120, 180);
  border-top-width: 0px;
  color: var(--h4-color, rgb(0, 120, 180));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  margin-bottom: 9.504px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 28.512px);
}

html[saved-theme="light"] body h4::after {
  --font-weight: var(--h4-weight, 640);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(0, 120, 180) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(0, 120, 180) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(0, 120, 180);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 120, 180);
  border-left-width: 0px;
  border-right-color: rgb(0, 120, 180);
  border-right-width: 0px;
  border-top-color: rgb(0, 120, 180);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(0, 120, 180));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 670px;
}

html[saved-theme="light"] body h4::before {
  --font-weight: var(--h4-weight, 640);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(0, 120, 180);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(0, 120, 180);
  border-left-width: 0px;
  border-right-color: rgb(0, 120, 180);
  border-right-width: 0px;
  border-top-color: rgb(0, 120, 180);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgb(0, 120, 180));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-width: 0px;
  color: var(--h5-color, rgb(30, 70, 160));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  line-height: var(--h5-line-height, 27.5456px);
  margin-bottom: 8.608px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 25.824px);
}

html[saved-theme="light"] body h5::after {
  --font-weight: var(--h5-weight, 620);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(30, 70, 160) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(30, 70, 160) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(30, 70, 160));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 670px;
}

html[saved-theme="light"] body h5::before {
  --font-weight: var(--h5-weight, 620);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(30, 70, 160);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(30, 70, 160);
  border-left-width: 0px;
  border-right-color: rgb(30, 70, 160);
  border-right-width: 0px;
  border-top-color: rgb(30, 70, 160);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgb(30, 70, 160));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: var(--heading-spacing, 0px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(180, 120, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(180, 120, 0);
  border-left-width: 0px;
  border-right-color: rgb(180, 120, 0);
  border-right-width: 0px;
  border-top-color: rgb(180, 120, 0);
  border-top-width: 0px;
  color: var(--h6-color, rgb(180, 120, 0));
  font-family: var(--font-family-heading, Inter, system-ui, -apple-system, sans-serif);
  font-weight: var(--font-weight, 400);
  line-height: var(--h6-line-height, 25.6px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 24px;
}

html[saved-theme="light"] body h6::after {
  --font-weight: var(--h6-weight, 600);
  background: rgba(0, 0, 0, 0) linear-gradient(to right, rgb(180, 120, 0) 30%, rgba(0, 0, 0, 0) 70%) repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  background-image: linear-gradient(to right, rgb(180, 120, 0) 30%, rgba(0, 0, 0, 0) 70%);
  border-bottom-color: rgb(180, 120, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(180, 120, 0);
  border-left-width: 0px;
  border-right-color: rgb(180, 120, 0);
  border-right-width: 0px;
  border-top-color: rgb(180, 120, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(180, 120, 0));
  content: "";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 670px;
}

html[saved-theme="light"] body h6::before {
  --font-weight: var(--h6-weight, 600);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(180, 120, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(180, 120, 0);
  border-left-width: 0px;
  border-right-color: rgb(180, 120, 0);
  border-right-width: 0px;
  border-top-color: rgb(180, 120, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgb(180, 120, 0));
  content: "▍";
  display: inline;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 6px;
  margin-top: 0px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 30, 70, 160);
  border-bottom-color: rgba(30, 70, 160, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(30, 70, 160, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(30, 70, 160, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(30, 70, 160, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgba(30, 35, 42, 0.9));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgba(30, 35, 42, 0.9));
}

html[saved-theme="light"] body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(30, 35, 42);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(75, 85, 95);
  border-left-width: 0px;
  border-right-color: rgb(75, 85, 95);
  border-right-width: 0px;
  border-top-color: rgb(75, 85, 95);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(75, 85, 95));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(248, 250, 252));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(226, 232, 240);
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(100, 116, 139));
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: var(--size-4-2, 10px);
  padding-top: 8px;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(100, 116, 139);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgba(30, 35, 42, 0.9));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgba(30, 35, 42, 0.9);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgba(30, 35, 42, 0.9);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgba(30, 35, 42, 0.9));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(75, 85, 95);
  border-left-width: 0px;
  border-right-color: rgb(75, 85, 95);
  border-right-width: 0px;
  border-top-color: rgb(75, 85, 95);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--icon-color, rgb(75, 85, 95));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(75, 85, 95);
  stroke: rgb(75, 85, 95);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(75, 85, 95);
  border-left-width: 0px;
  border-right-color: rgb(75, 85, 95);
  border-right-width: 0px;
  border-top-color: rgb(75, 85, 95);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(75, 85, 95));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(30, 35, 42));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(248, 250, 252));
  border-color: rgb(30, 35, 42);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(30, 35, 42);
  color: var(--table-header-color, rgb(30, 35, 42));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  color: var(--text-muted, rgb(75, 85, 95));
  padding-bottom: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 10px;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-width: 0px;
  border-left-color: rgb(75, 85, 95);
  border-left-width: 0px;
  border-right-color: rgb(75, 85, 95);
  border-right-width: 0px;
  border-top-color: rgb(75, 85, 95);
  border-top-width: 0px;
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(75, 85, 95);
  border-bottom-width: 0px;
  border-left-color: rgb(75, 85, 95);
  border-left-width: 0px;
  border-right-color: rgb(75, 85, 95);
  border-right-width: 0px;
  border-top-color: rgb(75, 85, 95);
  border-top-width: 0px;
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .metadata-property-value {
  --input-padding: var(--metadata-input-padding, 8px 10px);
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(75, 85, 95);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, rgba(160, 30, 140, 0.15));
  --pill-background-hover: var(--tag-background-hover, rgba(0, 120, 180, 0.15));
  --pill-border-color: var(--tag-border-color, hsla(265, 60%, 55%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(265, 60%, 55%, 0.15));
  --pill-color: var(--tag-color, rgb(160, 30, 140));
  --pill-color-hover: var(--tag-color-hover, rgb(0, 120, 180));
  --pill-color-remove: var(--tag-color, rgb(160, 30, 140));
  --pill-color-remove-hover: var(--tag-color-hover, rgb(0, 120, 180));
  background-color: var(--pill-background, rgba(160, 30, 140, 0.15));
  color: var(--pill-color, rgb(160, 30, 140));
}

html[saved-theme="light"] body .note-properties-value {
  --input-padding: var(--metadata-input-padding, 8px 10px);
  color: rgb(75, 85, 95);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(248, 250, 252));
  color: var(--text-normal, rgb(30, 35, 42));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(248, 250, 252));
  border-color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(30, 35, 42);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(248, 250, 252));
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
  color: var(--text-normal, rgb(30, 35, 42));
}

html[saved-theme="light"] body abbr {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}

html[saved-theme="light"] body input[type=text] {
  background-color: var(--background-modifier-form-field, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--text-normal, rgb(30, 35, 42));
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(102, 63, 191, 0.06));
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--code-normal, rgb(30, 35, 42));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(30, 35, 42);
  border-bottom-width: 0px;
  border-left-color: rgb(30, 35, 42);
  border-left-width: 0px;
  border-right-color: rgb(30, 35, 42);
  border-right-width: 0px;
  border-top-color: rgb(30, 35, 42);
  border-top-width: 0px;
}

html[saved-theme="light"] body sub {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body summary {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body sup {
  color: rgb(30, 35, 42);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(160, 30, 140, 0.15));
  border-bottom-color: rgba(129, 71, 209, 0.15);
  border-bottom-width: 0px;
  border-left-color: rgba(129, 71, 209, 0.15);
  border-left-width: 0px;
  border-right-color: rgba(129, 71, 209, 0.15);
  border-right-width: 0px;
  border-top-color: rgba(129, 71, 209, 0.15);
  border-top-width: 0px;
  color: var(--tag-color, rgb(160, 30, 140));
}`,
  },
  extras: `/* Snowfall particle effect on spoiler elements */
@keyframes snowfall {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 0 40px;
  }
}

.cm-spoiler::before,
.spoiler::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-image:
    radial-gradient(2px 2px at 20px 30px, white, transparent),
    radial-gradient(2px 2px at 40px 70px, white, transparent),
    radial-gradient(1px 1px at 90px 40px, white, transparent),
    radial-gradient(1px 1px at 130px 80px, white, transparent),
    radial-gradient(2px 2px at 160px 30px, white, transparent),
    radial-gradient(1px 1px at 200px 60px, white, transparent),
    radial-gradient(2px 2px at 50px 110px, white, transparent),
    radial-gradient(1px 1px at 100px 150px, white, transparent),
    radial-gradient(2px 2px at 180px 120px, white, transparent);
  background-size: 240px 180px;
  animation: snowfall 3s linear infinite;
}
`,
};
