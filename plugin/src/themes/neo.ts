import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "neo",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
    styleSettingsId: "neo-style",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 250;
  --accent-l: 75%;
  --accent-s: 80%;
  --anim-duration-moderate: 250ms;
  --anim-duration-slow: 400ms;
  --background-modifier-border: var(--base-45, hsl(230, 10%, 19%));
  --background-modifier-border-focus: var(--base-35, hsl(230, 7%, 35%));
  --background-modifier-border-hover: var(--base-40, hsl(230, 8%, 25%));
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: var(--color-red, rgb(219 75 75));
  --background-modifier-error-hover: var(--color-red, rgb(219 75 75));
  --background-modifier-error-rgb: var(--color-red-rgb, 219, 75, 75);
  --background-modifier-form-field: var(--color-base-25, rgba(0, 0, 0, 0.2));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(0, 0, 0, 0.2));
  --background-modifier-hover: hsla(var(--base-hue), 50%, 80%, 0.05);
  --background-modifier-success: var(--color-green, rgb(34 208 162));
  --background-modifier-success-rgb: var(--color-green-rgb, 34, 208, 162);
  --background-primary: var(--base-60, hsl(230, 16%, 9%));
  --background-primary-alt: var(--base-55, hsl(230, 12%, 12%));
  --background-secondary: var(--base-55, hsl(230, 12%, 12%));
  --background-secondary-alt: var(--base-55, hsl(230, 12%, 12%));
  --base-05: hsl(var(--base-hue), var(--base-sat, 2%), 93%);
  --base-10: hsl(var(--base-hue), var(--base-sat, 3%), 82%);
  --base-15: hsl(var(--base-hue), var(--base-sat, 4%), 75%);
  --base-20: hsl(var(--base-hue), var(--base-sat, 5%), 65%);
  --base-25: hsl(var(--base-hue), var(--base-sat, 6%), 56%);
  --base-30: hsl(var(--base-hue), var(--base-sat, 6%), 46%);
  --base-35: hsl(var(--base-hue), var(--base-sat, 7%), 35%);
  --base-40: hsl(var(--base-hue), var(--base-sat, 8%), 25%);
  --base-45: hsl(var(--base-hue), var(--base-sat, 10%), 19%);
  --base-50: hsl(var(--base-hue), var(--base-sat, 11%), 15%);
  --base-55: hsl(var(--base-hue), var(--base-sat, 12%), 12%);
  --base-60: hsl(var(--base-hue), var(--base-sat, 16%), 9%);
  --base-hue: 230;
  --bases-cards-background: var(--background-primary, hsl(230, 16%, 9%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(230, 12%, 12%));
  --bases-cards-radius: var(--radius-m, 6px);
  --bases-embed-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --bases-group-heading-property-color: var(--text-muted, hsl(230, 5%, 65%));
  --bases-table-border-color: var(--table-border-color, hsl(230, 10%, 19%));
  --bases-table-cell-background-active: var(--background-primary, hsl(230, 16%, 9%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(230, 12%, 12%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(250, 80%, 70%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(230, 12%, 12%));
  --bases-table-header-background: var(--background-primary, hsl(230, 16%, 9%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(230, 50%, 80%, 0.05));
  --bases-table-header-color: var(--text-muted, hsl(230, 5%, 65%));
  --bases-table-summary-background: var(--background-primary, hsl(230, 16%, 9%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(230, 50%, 80%, 0.05));
  --blockquote-border-color: var(--interactive-accent, hsl(250, 80%, 70%));
  --bodyFont: var(--font-text-theme, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  --bold-color: var(--base-10, hsl(230, 3%, 82%));
  --callout-border-opacity: 0.15;
  --callout-border-width: 1px;
  --callout-bug: var(--color-red-rgb, 219, 75, 75);
  --callout-default: var(--color-purple-rgb, 149, 128, 255);
  --callout-error: var(--color-red-rgb, 219, 75, 75);
  --callout-example: var(--color-purple-rgb, 149, 128, 255);
  --callout-fail: var(--color-red-rgb, 219, 75, 75);
  --callout-important: var(--color-cyan-rgb, 82, 183, 213);
  --callout-info: var(--color-blue-rgb, 122, 162, 247);
  --callout-padding: var(--size-4-4) var(--size-4-4) var(--size-4-4) var(--size-4-6, 16px 16px 16px 24px);
  --callout-question: var(--color-yellow-rgb, 224, 222, 113);
  --callout-quote: var(--color-muted-rgb, 139, 148, 158);
  --callout-success: var(--color-green-rgb, 34, 208, 162);
  --callout-summary: var(--color-cyan-rgb, 82, 183, 213);
  --callout-tip: var(--color-cyan-rgb, 82, 183, 213);
  --callout-todo: var(--color-blue-rgb, 122, 162, 247);
  --callout-warning: var(--color-orange-rgb, 237, 139, 79);
  --canvas-background: var(--background-primary, hsl(230, 16%, 9%));
  --canvas-card-label-color: var(--text-faint, hsl(230, 7%, 35%));
  --canvas-color-1: var(--color-red-rgb, 219, 75, 75);
  --canvas-color-2: var(--color-orange-rgb, 237, 139, 79);
  --canvas-color-4: var(--color-green-rgb, 34, 208, 162);
  --canvas-color-5: var(--color-cyan-rgb, 82, 183, 213);
  --canvas-color-6: var(--color-purple-rgb, 149, 128, 255);
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 150px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, hsl(230, 4%, 75%));
  --checkbox-border-color: var(--text-faint, hsl(230, 7%, 35%));
  --checkbox-border-color-hover: var(--text-muted, hsl(230, 5%, 65%));
  --checkbox-color: var(--interactive-accent, hsl(250, 80%, 70%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(250, 80%, 75%));
  --checkbox-marker-color: var(--background-primary, hsl(230, 16%, 9%));
  --checkbox-progress-width: 32px;
  --checklist-done-color: var(--text-faint, hsl(230, 7%, 35%));
  --checklist-done-decoration: none;
  --clickable-icon-radius: var(--radius-s, 6px);
  --code-background: var(--background-secondary, hsl(230, 12%, 12%));
  --code-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --code-bracket-background: var(--background-modifier-hover, hsla(230, 50%, 80%, 0.05));
  --code-comment: var(--text-faint, hsl(230, 7%, 35%));
  --code-function: var(--color-cyan, rgb(82 183 213));
  --code-important: var(--color-red, rgb(219 75 75));
  --code-keyword: var(--color-purple, rgb(149, 128, 255));
  --code-normal: var(--text-normal, hsl(230, 4%, 75%));
  --code-operator: var(--color-orange, rgb(237 139 79));
  --code-property: var(--color-blue, rgb(122 176 247));
  --code-punctuation: var(--color-pink, rgb(255 151 207));
  --code-string: var(--color-green, rgb(34 208 162));
  --code-tag: var(--color-yellow, rgb(230 232 118));
  --code-value: var(--color-cyan, rgb(82 183 213));
  --collapse-icon-color: var(--text-faint, hsl(230, 7%, 35%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(250, 85%, 75%));
  --color-accent: hsl(var(--color-accent-hsl));
  --color-accent-1: hsl(var(--accent-h), var(--accent-s), 70%);
  --color-accent-2: hsl(var(--accent-h), var(--accent-s), 75%);
  --color-accent-hsl: var(--accent-h), var(--accent-s), 70%;
  --color-black: rgb(14 19 25);
  --color-black-rgb: 14, 19, 25;
  --color-blue: rgb(122 176 247);
  --color-blue-rgb: 122, 162, 247;
  --color-cyan: rgb(82 183 213);
  --color-cyan-rgb: 82, 183, 213;
  --color-green: rgb(34 208 162);
  --color-green-rgb: 34, 208, 162;
  --color-muted: rgb(139 148 158);
  --color-muted-rgb: 139, 148, 158;
  --color-orange: rgb(237 139 79);
  --color-orange-rgb: 237, 139, 79;
  --color-pink: rgb(255 151 207);
  --color-purple: rgb(149, 128, 255);
  --color-purple-rgb: 149, 128, 255;
  --color-red: rgb(219 75 75);
  --color-red-rgb: 219, 75, 75;
  --color-teal: rgb(62 180 191);
  --color-teal-rgb: 62, 180, 191;
  --color-white: rgb(230 230 230);
  --color-white-rgb: 230, 230, 230;
  --color-yellow: rgb(230 232 118);
  --cursor: pointer;
  --dark: var(--text-normal, var(--base-15, hsl(230, 4%, 75%)));
  --darkgray: var(--text-normal, var(--base-15, hsl(230, 4%, 75%)));
  --divider-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --divider-color-hover: var(--interactive-accent, hsl(250, 80%, 70%));
  --dropdown-background: var(--interactive-normal, hsl(230, 10%, 19%));
  --dropdown-background-hover: var(--interactive-hover, hsl(230, 8%, 25%));
  --file-header-background: var(--background-primary, hsl(230, 16%, 9%));
  --file-header-background-focused: var(--background-primary, hsl(230, 16%, 9%));
  --file-header-font: var(--font-interface, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(230, 10%, 19%));
  --flair-color: var(--text-normal, hsl(230, 4%, 75%));
  --font-editor-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-interface-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mermaid: var(--font-text, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace;
  --font-text-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, hsl(230, 10%, 19%));
  --footnote-id-color: var(--text-muted, hsl(230, 5%, 65%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(230, 7%, 35%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(230, 50%, 80%, 0.05));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --frame-left-space: 6px;
  --frame-right-space: 132px;
  --graph-node: var(--text-muted, hsl(230, 5%, 65%));
  --graph-node-attachment: var(--color-yellow, rgb(230 232 118));
  --graph-node-focused: var(--text-accent, hsl(250, 85%, 75%));
  --graph-node-tag: var(--color-green, rgb(34 208 162));
  --graph-node-unresolved: var(--text-faint, hsl(230, 7%, 35%));
  --graph-text: var(--text-normal, hsl(230, 4%, 75%));
  --gray: var(--text-muted, var(--base-20, hsl(230, 5%, 65%)));
  --h1-color: hsl(var(--accent-h), 52%, 72%);
  --h1-size: 1.8rem;
  --h2-color: hsl(var(--accent-h), 52%, 68%);
  --h2-size: 1.5rem;
  --h2-weight: 600;
  --h3-color: hsl(var(--accent-h), 52%, 64%);
  --h3-size: 1.45rem;
  --h3-weight: 600;
  --h4-color: hsl(var(--accent-h), 50%, 60%);
  --h4-size: 1.25rem;
  --h4-weight: 600;
  --h5-color: hsl(var(--accent-h), 40%, 52%);
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1.125rem;
  --h5-weight: 600;
  --h6-color: hsl(var(--accent-h), 38%, 46%);
  --h6-line-height: var(--line-height-normal, 1.6);
  --h6-size: 1rem;
  --headerFont: var(--font-text-theme, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  --heading-formatting: var(--text-faint, hsl(230, 7%, 35%));
  --highlight: var(--text-highlight-bg, var(--base-40, hsl(230, 8%, 25%)));
  --hr-color: hsla(var(--accent-h), 50%, 75%, 0.1);
  --icon-color: var(--text-muted, hsl(230, 5%, 65%));
  --icon-color-active: var(--text-accent, hsl(250, 85%, 75%));
  --icon-color-focused: var(--text-normal, hsl(230, 4%, 75%));
  --icon-color-hover: var(--text-muted, hsl(230, 5%, 65%));
  --indentation-guide-color: var(--base-45, hsl(230, 10%, 19%));
  --indentation-guide-color-active: var(--base-35, hsl(230, 7%, 35%));
  --inline-title-color: var(--base-05, hsl(230, 2%, 93%));
  --inline-title-size: var(--h1-size, 2rem);
  --input-date-separator: var(--text-faint, hsl(230, 7%, 35%));
  --input-placeholder-color: var(--text-faint, hsl(230, 7%, 35%));
  --interactive-accent: var(--color-accent-1, hsl(250, 80%, 70%));
  --interactive-accent-hover: var(--color-accent-2, hsl(250, 80%, 75%));
  --interactive-accent-hsl: var(--color-accent-hsl, 250, 80%, 70%);
  --interactive-hover: var(--base-40, hsl(230, 8%, 25%));
  --interactive-normal: var(--base-45, hsl(230, 10%, 19%));
  --light: var(--background-primary, var(--base-60, hsl(230, 16%, 9%)));
  --lightgray: var(--background-secondary, var(--base-55, hsl(230, 12%, 12%)));
  --line-height-normal: 1.6;
  --link-color: var(--text-accent, hsl(250, 85%, 75%));
  --link-color-hover: var(--text-accent-hover, hsl(250, 90%, 84%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, hsl(250, 85%, 75%));
  --link-external-color-hover: var(--text-accent-hover, hsl(250, 90%, 84%));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-accent, hsl(250, 85%, 75%));
  --list-marker-color: var(--base-30, hsl(230, 6%, 46%));
  --list-marker-color-collapsed: var(--text-accent, hsl(250, 85%, 75%));
  --list-marker-color-hover: var(--text-muted, hsl(230, 5%, 65%));
  --menu-background: var(--background-secondary, hsl(230, 12%, 12%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(230, 8%, 25%));
  --menu-radius: var(--radius-m, 6px);
  --metadata-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --metadata-divider-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --metadata-input-background-active: var(--background-modifier-hover, hsla(230, 50%, 80%, 0.05));
  --metadata-input-font: var(--font-interface, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(230, 4%, 75%));
  --metadata-label-background-active: var(--background-modifier-hover, hsla(230, 50%, 80%, 0.05));
  --metadata-label-font: var(--font-interface, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(230, 5%, 65%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(230, 5%, 65%));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(230, 50%, 80%, 0.05));
  --modal-background: var(--background-primary, hsl(230, 16%, 9%));
  --modal-border-color: var(--base-45, hsl(230, 10%, 19%));
  --modal-radius: var(--radius-l, 10px);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(230, 7%, 35%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(230, 7%, 35%));
  --nav-heading-color: var(--text-normal, hsl(230, 4%, 75%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(230, 7%, 35%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(230, 5%, 65%));
  --nav-heading-color-hover: var(--text-normal, hsl(230, 4%, 75%));
  --nav-indentation-guide-color: var(--indentation-guide-color, hsl(230, 10%, 19%));
  --nav-item-background-active: var(--background-modifier-hover, hsla(230, 50%, 80%, 0.05));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(230, 50%, 80%, 0.05));
  --nav-item-color: var(--text-muted, hsl(230, 5%, 65%));
  --nav-item-color-active: var(--text-normal, hsl(230, 4%, 75%));
  --nav-item-color-highlighted: var(--text-accent, hsl(250, 85%, 75%));
  --nav-item-color-hover: var(--text-normal, hsl(230, 4%, 75%));
  --nav-item-color-selected: var(--text-normal, hsl(230, 4%, 75%));
  --nav-tag-color: var(--text-faint, hsl(230, 7%, 35%));
  --nav-tag-color-active: var(--text-muted, hsl(230, 5%, 65%));
  --nav-tag-color-hover: var(--text-muted, hsl(230, 5%, 65%));
  --pdf-background: var(--background-primary, hsl(230, 16%, 9%));
  --pdf-page-background: var(--background-primary, hsl(230, 16%, 9%));
  --pdf-sidebar-background: var(--background-primary, hsl(230, 16%, 9%));
  --pill-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(230, 8%, 25%));
  --pill-color: var(--text-muted, hsl(230, 5%, 65%));
  --pill-color-hover: var(--text-normal, hsl(230, 4%, 75%));
  --pill-color-remove: var(--text-faint, hsl(230, 7%, 35%));
  --pill-color-remove-hover: var(--text-accent, hsl(250, 85%, 75%));
  --prompt-background: var(--background-primary, hsl(230, 16%, 9%));
  --prompt-border-color: var(--base-50, hsl(230, 11%, 15%));
  --radius-l: 10px;
  --radius-m: 6px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(230, 10%, 19%) 65%, transparent) linear-gradient(hsl(230, 10%, 19%), color-mix(in srgb, hsl(230, 10%, 19%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(230, 12%, 12%));
  --ribbon-background-collapsed: var(--background-secondary, hsl(230, 12%, 12%));
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 0px);
  --ribbon-width: 40px;
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.15);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0);
  --scrollbar-opacity: 0;
  --scrollbar-radius: var(--radius-l, 10px);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.08);
  --search-clear-button-color: var(--text-muted, hsl(230, 5%, 65%));
  --search-icon-color: var(--text-muted, hsl(230, 5%, 65%));
  --search-result-background: var(--background-primary, hsl(230, 16%, 9%));
  --secondary: var(--text-accent, hsl(var(--accent-h), 85%, 75%));
  --setting-group-heading-color: var(--text-normal, hsl(230, 4%, 75%));
  --setting-items-background: var(--background-primary-alt, hsl(230, 12%, 12%));
  --setting-items-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --setting-items-radius: var(--radius-l, 10px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(230, 5%, 65%));
  --shiki-code-background: var(--code-background, hsl(230, 12%, 12%));
  --shiki-code-comment: var(--text-faint, hsl(230, 7%, 35%));
  --shiki-code-function: var(--color-green, rgb(34 208 162));
  --shiki-code-important: var(--color-orange, rgb(237 139 79));
  --shiki-code-keyword: var(--color-pink, rgb(255 151 207));
  --shiki-code-normal: var(--text-muted, hsl(230, 5%, 65%));
  --shiki-code-property: var(--color-cyan, rgb(82 183 213));
  --shiki-code-punctuation: var(--text-muted, hsl(230, 5%, 65%));
  --shiki-code-string: var(--color-yellow, rgb(230 232 118));
  --shiki-code-value: var(--color-purple, rgb(149, 128, 255));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --shiki-gutter-text-color: var(--text-faint, hsl(230, 7%, 35%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(230, 5%, 65%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(230, 5%, 65%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(230, 7%, 35%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(230, 8%, 25%));
  --slider-track-background: var(--background-modifier-border, hsl(230, 10%, 19%));
  --status-bar-background: var(--background-secondary, hsl(230, 12%, 12%));
  --status-bar-border-color: var(--divider-color, hsl(230, 10%, 19%));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 1px 0 0 0px);
  --status-bar-height: 24px;
  --status-bar-radius: var(--radius-m, 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, hsl(230, 5%, 65%));
  --suggestion-background: var(--background-primary, hsl(230, 16%, 9%));
  --sync-avatar-color-1: var(--color-red, rgb(219 75 75));
  --sync-avatar-color-2: var(--color-orange, rgb(237 139 79));
  --sync-avatar-color-3: var(--color-yellow, rgb(230 232 118));
  --sync-avatar-color-4: var(--color-green, rgb(34 208 162));
  --sync-avatar-color-5: var(--color-cyan, rgb(82 183 213));
  --sync-avatar-color-6: var(--color-blue, rgb(122 176 247));
  --sync-avatar-color-7: var(--color-purple, rgb(149, 128, 255));
  --sync-avatar-color-8: var(--color-pink, rgb(255 151 207));
  --tab-active-color: var(--base-45, hsl(230, 10%, 19%));
  --tab-background-active: var(--background-primary, hsl(230, 16%, 9%));
  --tab-container-background: var(--background-secondary, hsl(230, 12%, 12%));
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-min-width: 92px;
  --tab-outline-color: var(--divider-color, hsl(230, 10%, 19%));
  --tab-switcher-background: var(--background-secondary, hsl(230, 12%, 12%));
  --tab-text-color: var(--text-faint, hsl(230, 7%, 35%));
  --tab-text-color-active: var(--text-muted, hsl(230, 5%, 65%));
  --tab-text-color-focused: var(--text-muted, hsl(230, 5%, 65%));
  --tab-text-color-focused-active: var(--text-muted, hsl(230, 5%, 65%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(230, 4%, 75%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(250, 85%, 75%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --table-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(250, 80%, 70%));
  --table-drag-handle-color: var(--text-faint, hsl(230, 7%, 35%));
  --table-header-background: var(--background-secondary, hsl(230, 12%, 12%));
  --table-header-background-hover: var(--background-secondary, hsl(230, 12%, 12%));
  --table-header-border-color: var(--table-border-color, hsl(230, 10%, 19%));
  --table-header-color: var(--text-normal, hsl(230, 4%, 75%));
  --table-selection-border-color: var(--interactive-accent, hsl(250, 80%, 70%));
  --tag-color: var(--text-accent, hsl(250, 85%, 75%));
  --tag-color-hover: var(--text-accent, hsl(250, 85%, 75%));
  --tag-radius: var(--radius-m, 6px);
  --tertiary: var(--text-accent-hover, hsl(var(--accent-h), 90%, 84%));
  --text-accent: hsl(var(--accent-h), 85%, 75%);
  --text-accent-hover: hsl(var(--accent-h), 90%, 84%);
  --text-error: var(--color-red, rgb(219 75 75));
  --text-faint: var(--base-35, hsl(230, 7%, 35%));
  --text-highlight-bg: var(--base-40, hsl(230, 8%, 25%));
  --text-muted: var(--base-20, hsl(230, 5%, 65%));
  --text-normal: var(--base-15, hsl(230, 4%, 75%));
  --text-selection: var(--base-50, hsl(230, 11%, 15%));
  --text-success: var(--color-green, rgb(34 208 162));
  --text-warning: var(--color-orange, rgb(237 139 79));
  --textHighlight: var(--text-highlight-bg, var(--base-40, hsl(230, 8%, 25%)));
  --titleFont: var(--font-text-theme, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  --titlebar-background: var(--background-secondary, hsl(230, 12%, 12%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(230, 12%, 12%));
  --titlebar-border-color: var(--background-modifier-border, hsl(230, 10%, 19%));
  --titlebar-text-color: var(--text-muted, hsl(230, 5%, 65%));
  --titlebar-text-color-focused: var(--text-normal, hsl(230, 4%, 75%));
  --vault-profile-color: var(--text-normal, hsl(230, 4%, 75%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(230, 4%, 75%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(27, 28, 34));
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(19, 21, 27));
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(27, 28, 34));
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(44, 45, 53);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(27, 28, 34));
  border-left-color: rgb(44, 45, 53);
  color: rgb(189, 190, 194);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(208, 208, 210));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 208, 210) none 0px;
  text-decoration-color: rgb(208, 208, 210);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(189, 190, 194));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(189, 190, 194));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(208, 208, 210));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 208, 210) none 0px;
  text-decoration-color: rgb(208, 208, 210);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(59, 60, 69));
  color: var(--text-normal, rgb(189, 190, 194));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body del {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(189, 190, 194));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(138, 117, 240));
  border-color: rgb(138, 117, 240);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(161, 163, 170));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(161, 163, 170) none 0px;
  text-decoration-color: rgb(161, 163, 170);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(155, 137, 245));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration-color: rgb(155, 137, 245);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(155, 137, 245));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration-color: rgb(155, 137, 245);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(155, 137, 245));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(155, 137, 245) none 0px;
  text-decoration: rgba(138, 117, 240, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(138, 117, 240, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body dt {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(83, 85, 95));
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body table {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 216.406px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: var(--table-text-color, rgb(189, 190, 194));
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: var(--table-header-color, rgb(189, 190, 194));
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(27, 28, 34));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(27, 28, 34));
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: var(--code-normal, rgb(189, 190, 194));
  font-family: var(--font-monospace, "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(27, 28, 34));
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
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(159, 146, 221);
  border-left-color: rgb(159, 146, 221);
  border-right-color: rgb(159, 146, 221);
  border-top-color: rgb(159, 146, 221);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(27, 28, 34));
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(138, 117, 240);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(83, 85, 95);
  border-left-color: rgb(83, 85, 95);
  border-right-color: rgb(83, 85, 95);
  border-top-color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(83, 85, 95);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(83, 85, 95);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(83, 85, 95);
  text-decoration: line-through 1px rgb(83, 85, 95);
  text-decoration-color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(189, 190, 194);
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1%2010a1%201%200%200%201%201-1h16a1%201%200%201%201%200%202H2a1%201%200%200%201-1-1Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1%2010a1%201%200%200%201%201-1h16a1%201%200%201%201%200%202H2a1%201%200%200%201-1-1Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
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
  color: rgb(83, 85, 95);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%20512%20512%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M449.07%20399.08L278.64%2082.58c-12.08-22.44-44.26-22.44-56.35%200L51.87%20399.08A32%2032%200%200%200%2080%20446.25h340.89a32%2032%200%200%200%2028.18-47.17Zm-198.6-1.83a20%2020%200%201%201%2020-20a20%2020%200%200%201-20%2020Zm21.72-201.15l-5.74%20122a16%2016%200%200%201-32%200l-5.74-121.95a21.73%2021.73%200%200%201%2021.5-22.69h.21a21.74%2021.74%200%200%201%2021.73%2022.7Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%20512%20512%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M449.07%20399.08L278.64%2082.58c-12.08-22.44-44.26-22.44-56.35%200L51.87%20399.08A32%2032%200%200%200%2080%20446.25h340.89a32%2032%200%200%200%2028.18-47.17Zm-198.6-1.83a20%2020%200%201%201%2020-20a20%2020%200%200%201-20%2020Zm21.72-201.15l-5.74%20122a16%2016%200%200%201-32%200l-5.74-121.95a21.73%2021.73%200%200%201%2021.5-22.69h.21a21.74%2021.74%200%200%201%2021.73%2022.7Z%22/%3E%3C/svg%3E");
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
  color: rgb(237, 139, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2216\\%22 height=\\%2216\\%22 viewBox=\\%220 0 20 20\\%22%3E%3Cg fill=\\%22currentColor\\%22%3E%3Cpath d=\\%22M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2216\\%22 height=\\%2216\\%22 viewBox=\\%220 0 20 20\\%22%3E%3Cg fill=\\%22currentColor\\%22%3E%3Cpath d=\\%22M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 139, 79);
  color: rgb(230, 232, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22m7%206l1-2H6C3.79%204%202%206.79%202%209v7h7V9H5c0-3%202-3%202-3zm7%203c0-3%202-3%202-3l1-2h-2c-2.21%200-4%202.79-4%205v7h7V9z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22m7%206l1-2H6C3.79%204%202%206.79%202%209v7h7V9H5c0-3%202-3%202-3zm7%203c0-3%202-3%202-3l1-2h-2c-2.21%200-4%202.79-4%205v7h7V9z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M9.153%205.408C10.42%203.136%2011.053%202%2012%202c.947%200%201.58%201.136%202.847%203.408l.328.588c.36.646.54.969.82%201.182c.28.213.63.292%201.33.45l.636.144c2.46.557%203.689.835%203.982%201.776c.292.94-.546%201.921-2.223%203.882l-.434.507c-.476.557-.715.836-.822%201.18c-.107.345-.071.717.001%201.46l.066.677c.253%202.617.38%203.925-.386%204.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347%200-.674.15-1.329.452l-.595.274c-2.303%201.06-3.455%201.59-4.22%201.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116%200-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941%201.523-1.22%203.983-1.776l.636-.144c.699-.158%201.048-.237%201.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M9.153%205.408C10.42%203.136%2011.053%202%2012%202c.947%200%201.58%201.136%202.847%203.408l.328.588c.36.646.54.969.82%201.182c.28.213.63.292%201.33.45l.636.144c2.46.557%203.689.835%203.982%201.776c.292.94-.546%201.921-2.223%203.882l-.434.507c-.476.557-.715.836-.822%201.18c-.107.345-.071.717.001%201.46l.066.677c.253%202.617.38%203.925-.386%204.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347%200-.674.15-1.329.452l-.595.274c-2.303%201.06-3.455%201.59-4.22%201.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116%200-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941%201.523-1.22%203.983-1.776l.636-.144c.699-.158%201.048-.237%201.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(230, 232, 118);
  color: rgb(230, 232, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(102, 102, 102);
  color: rgba(0, 0, 0, 0);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(82, 183, 213);
  color: rgb(122, 176, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(122, 176, 247);
  color: rgb(34, 208, 162);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(138, 117, 240);
  content: " ";
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
  background-color: rgb(219, 75, 75);
  color: rgb(237, 139, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
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
  background-color: rgb(219, 75, 75);
  color: rgb(237, 139, 79);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m3%207l6%206l4-4l8%208%22/%3E%3Cpath%20d=%22M17%2017h4v-4%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m3%207l6%206l4-4l8%208%22/%3E%3Cpath%20d=%22M17%2017h4v-4%22/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(219, 75, 75);
  color: rgb(219, 75, 75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M12.963%202.286a.75.75%200%200%200-1.071-.136a9.742%209.742%200%200%200-3.539%206.177A7.547%207.547%200%200%201%206.648%206.61a.75.75%200%200%200-1.152-.082A9%209%200%201%200%2015.68%204.534a7.46%207.46%200%200%201-2.717-2.248ZM15.75%2014.25a3.75%203.75%200%201%201-7.313-1.172c.628.465%201.35.81%202.133%201a5.99%205.99%200%200%201%201.925-3.545a3.75%203.75%200%200%201%203.255%203.717Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M12.963%202.286a.75.75%200%200%200-1.071-.136a9.742%209.742%200%200%200-3.539%206.177A7.547%207.547%200%200%201%206.648%206.61a.75.75%200%200%200-1.152-.082A9%209%200%201%200%2015.68%204.534a7.46%207.46%200%200%201-2.717-2.248ZM15.75%2014.25a3.75%203.75%200%201%201-7.313-1.172c.628.465%201.35.81%202.133%201a5.99%205.99%200%200%201%201.925-3.545a3.75%203.75%200%200%201%203.255%203.717Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
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
  background-color: rgb(219, 75, 75);
  color: rgb(219, 75, 75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2036%2036%22%3E%3Ccircle%20cx=%2220.75%22%20cy=%226%22%20r=%224%22%20fill=%22currentColor%22%20class=%22clr-i-solid%20clr-i-solid-path-1%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M24.84%2026.23a1%201%200%200%200-1.4.29a16.6%2016.6%200%200%201-3.51%203.77c-.33.25-1.56%201.2-2.08%201c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64%204.05-12%204.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58%201.09-8.72%201.1a1%201%200%200%200%20.13%202s3-.39%203.33-.42a.88.88%200%200%201%20.85.44a2.47%202.47%200%200%201-.07%201.71c-.26%201-4.37%2012.58-4.5%2013.25a2.78%202.78%200%200%200%201.18%203a5%205%200%200%200%203.08.83a8.53%208.53%200%200%200%203.09-.62c2.49-1%205.09-3.66%206.46-5.75a1%201%200%200%200-.28-1.29Z%22%20class=%22clr-i-solid%20clr-i-solid-path-2%22/%3E%3Cpath%20fill=%22none%22%20d=%22M0%200h36v36H0z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2036%2036%22%3E%3Ccircle%20cx=%2220.75%22%20cy=%226%22%20r=%224%22%20fill=%22currentColor%22%20class=%22clr-i-solid%20clr-i-solid-path-1%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M24.84%2026.23a1%201%200%200%200-1.4.29a16.6%2016.6%200%200%201-3.51%203.77c-.33.25-1.56%201.2-2.08%201c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64%204.05-12%204.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58%201.09-8.72%201.1a1%201%200%200%200%20.13%202s3-.39%203.33-.42a.88.88%200%200%201%20.85.44a2.47%202.47%200%200%201-.07%201.71c-.26%201-4.37%2012.58-4.5%2013.25a2.78%202.78%200%200%200%201.18%203a5%205%200%200%200%203.08.83a8.53%208.53%200%200%200%203.09-.62c2.49-1%205.09-3.66%206.46-5.75a1%201%200%200%200-.28-1.29Z%22%20class=%22clr-i-solid%20clr-i-solid-path-2%22/%3E%3Cpath%20fill=%22none%22%20d=%22M0%200h36v36H0z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M0%200h24v24H0z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm8-9a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm9%209a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM4.893%204.893a1%201%200%200%201%201.32-.083l.094.083l.7.7a1%201%200%200%201-1.32%201.497l-.094-.083l-.7-.7a1%201%200%200%201%200-1.414zm12.8%200a1%201%200%200%201%201.497%201.32l-.083.094l-.7.7a1%201%200%200%201-1.497-1.32l.083-.094l.7-.7zM14%2018a1%201%200%200%201%201%201a3%203%200%200%201-6%200a1%201%200%200%201%20.883-.993L10%2018h4zM12%206a6%206%200%200%201%203.6%2010.8a1%201%200%200%201-.471.192L15%2017H9a1%201%200%200%201-.6-.2A6%206%200%200%201%2012%206z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M0%200h24v24H0z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm8-9a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm9%209a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM4.893%204.893a1%201%200%200%201%201.32-.083l.094.083l.7.7a1%201%200%200%201-1.32%201.497l-.094-.083l-.7-.7a1%201%200%200%201%200-1.414zm12.8%200a1%201%200%200%201%201.497%201.32l-.083.094l-.7.7a1%201%200%200%201-1.497-1.32l.083-.094l.7-.7zM14%2018a1%201%200%200%201%201%201a3%203%200%200%201-6%200a1%201%200%200%201%20.883-.993L10%2018h4zM12%206a6%206%200%200%201%203.6%2010.8a1%201%200%200%201-.471.192L15%2017H9a1%201%200%200%201-.6-.2A6%206%200%200%201%2012%206z%22/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(122, 176, 247);
  color: rgb(82, 183, 213);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 232, 118);
  color: rgb(230, 232, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1.25%2012a5.75%205.75%200%200%201%2010.8-2.75H21c.966%200%201.75.784%201.75%201.75v2.5a.75.75%200%200%201-.75.75h-2.25V16a.75.75%200%200%201-.75.75h-2.5a.75.75%200%200%201-.75-.75v-1.75h-3.457A5.751%205.751%200%200%201%201.25%2012ZM7%2010a2%202%200%201%200%200%204a2%202%200%200%200%200-4Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1.25%2012a5.75%205.75%200%200%201%2010.8-2.75H21c.966%200%201.75.784%201.75%201.75v2.5a.75.75%200%200%201-.75.75h-2.25V16a.75.75%200%200%201-.75.75h-2.5a.75.75%200%200%201-.75-.75v-1.75h-3.457A5.751%205.751%200%200%201%201.25%2012ZM7%2010a2%202%200%201%200%200%204a2%202%200%200%200%200-4Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
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
  background-color: rgb(230, 232, 118);
  color: rgb(230, 232, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2028%2028%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M14%202.25A9.75%209.75%200%200%201%2023.75%2012c0%204.12-2.895%208.61-8.61%2013.518a1.75%201.75%200%200%201-2.283-.002l-.378-.328C7.017%2020.408%204.25%2016.028%204.25%2012A9.75%209.75%200%200%201%2014%202.25Zm0%206a3.75%203.75%200%201%200%200%207.5a3.75%203.75%200%200%200%200-7.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2028%2028%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M14%202.25A9.75%209.75%200%200%201%2023.75%2012c0%204.12-2.895%208.61-8.61%2013.518a1.75%201.75%200%200%201-2.283-.002l-.378-.328C7.017%2020.408%204.25%2016.028%204.25%2012A9.75%209.75%200%200%201%2014%202.25Zm0%206a3.75%203.75%200%201%200%200%207.5a3.75%203.75%200%200%200%200-7.5Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(149, 128, 255);
  color: rgb(219, 75, 75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M24%200v24H0V0h24ZM12.593%2023.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023%200%20.029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023%200%200%200-.027.006l-.006.014l-.034.614c0%20.012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M12%202v6.5a1.5%201.5%200%200%200%201.356%201.493L13.5%2010H20v10a2%202%200%200%201-1.85%201.995L18%2022H6a2%202%200%200%201-1.995-1.85L4%2020V4a2%202%200%200%201%201.85-1.995L6%202h6Zm0%209.5a1%201%200%200%200-.993.883L11%2012.5V14H9.5a1%201%200%200%200-.117%201.993L9.5%2016H11v1.5a1%201%200%200%200%201.993.117L13%2017.5V16h1.5a1%201%200%200%200%20.117-1.993L14.5%2014H13v-1.5a1%201%200%200%200-1-1Zm2-9.457a2%202%200%200%201%20.877.43l.123.113L19.414%207a2%202%200%200%201%20.502.84l.04.16H14V2.043Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M24%200v24H0V0h24ZM12.593%2023.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023%200%20.029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023%200%200%200-.027.006l-.006.014l-.034.614c0%20.012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M12%202v6.5a1.5%201.5%200%200%200%201.356%201.493L13.5%2010H20v10a2%202%200%200%201-1.85%201.995L18%2022H6a2%202%200%200%201-1.995-1.85L4%2020V4a2%202%200%200%201%201.85-1.995L6%202h6Zm0%209.5a1%201%200%200%200-.993.883L11%2012.5V14H9.5a1%201%200%200%200-.117%201.993L9.5%2016H11v1.5a1%201%200%200%200%201.993.117L13%2017.5V16h1.5a1%201%200%200%200%20.117-1.993L14.5%2014H13v-1.5a1%201%200%200%200-1-1Zm2-9.457a2%202%200%200%201%20.877.43l.123.113L19.414%207a2%202%200%200%201%20.502.84l.04.16H14V2.043Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 75, 75);
  color: rgb(122, 176, 247);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
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
  background-color: rgb(34, 208, 162);
  color: rgb(34, 208, 162);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%223%22%20d=%22M16.7%208A3%203%200%200%200%2014%206h-4a3%203%200%200%200%200%206h4a3%203%200%200%201%200%206h-4a3%203%200%200%201-2.7-2M12%203v3m0%2012v3%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%223%22%20d=%22M16.7%208A3%203%200%200%200%2014%206h-4a3%203%200%200%200%200%206h4a3%203%200%200%201%200%206h-4a3%203%200%200%201-2.7-2M12%203v3m0%2012v3%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(34, 208, 162);
  color: rgb(34, 208, 162);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22m3%2017l6-6l4%204l8-8%22/%3E%3Cpath%20d=%22M17%207h4v4%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22m3%2017l6-6l4%204l8-8%22/%3E%3Cpath%20d=%22M17%207h4v4%22/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(34, 208, 162);
  color: rgb(34, 208, 162);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2022q-.425%200-.713-.288T3%2021v-4q0-.825.588-1.413T5%2015h14q.825%200%201.413.588T21%2017v4q0%20.425-.288.713T20%2022H4Zm1-9v-3q0-.825.588-1.413T7%208h4V6.55q-.45-.3-.725-.725T10%204.8q0-.375.15-.738t.45-.662L12%202l1.4%201.4q.3.3.45.662T14%204.8q0%20.6-.275%201.025T13%206.55V8h4q.825%200%201.413.587T19%2010v3H5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2022q-.425%200-.713-.288T3%2021v-4q0-.825.588-1.413T5%2015h14q.825%200%201.413.588T21%2017v4q0%20.425-.288.713T20%2022H4Zm1-9v-3q0-.825.588-1.413T7%208h4V6.55q-.45-.3-.725-.725T10%204.8q0-.375.15-.738t.45-.662L12%202l1.4%201.4q.3.3.45.662T14%204.8q0%20.6-.275%201.025T13%206.55V8h4q.825%200%201.413.587T19%2010v3H5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(122, 176, 247);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 82, 183, 213);
  background: rgba(82, 183, 213, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(82, 183, 213, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(82, 183, 213, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(82, 183, 213, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(82, 183, 213, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 219, 75, 75);
  background: rgba(219, 75, 75, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 219, 75, 75);
  background: rgba(219, 75, 75, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 149, 128, 255);
  background: rgba(149, 128, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 219, 75, 75);
  background: rgba(219, 75, 75, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(219, 75, 75, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(219, 75, 75, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(219, 75, 75, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(219, 75, 75, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 122, 162, 247);
  background: rgba(122, 162, 247, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(122, 162, 247, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(122, 162, 247, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(122, 162, 247, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(122, 162, 247, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 149, 128, 255);
  background: rgba(149, 128, 255, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 224, 222, 113);
  background: rgba(224, 222, 113, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(224, 222, 113, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(224, 222, 113, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(224, 222, 113, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(224, 222, 113, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 139, 148, 158);
  background: rgba(139, 148, 158, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(139, 148, 158, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(139, 148, 158, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(139, 148, 158, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(139, 148, 158, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 34, 208, 162);
  background: rgba(34, 208, 162, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(34, 208, 162, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(34, 208, 162, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(34, 208, 162, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(34, 208, 162, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 82, 183, 213);
  background: rgba(82, 183, 213, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(82, 183, 213, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(82, 183, 213, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(82, 183, 213, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(82, 183, 213, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 122, 162, 247);
  background: rgba(122, 162, 247, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(122, 162, 247, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(122, 162, 247, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(122, 162, 247, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(122, 162, 247, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 237, 139, 79);
  background: rgba(237, 139, 79, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(237, 139, 79, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(237, 139, 79, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(237, 139, 79, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(237, 139, 79, 0.15);
  border-top-width: 1px;
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 149, 128, 255;
  border-bottom-color: rgb(149, 128, 255);
  border-left-color: rgb(149, 128, 255);
  border-right-color: rgb(149, 128, 255);
  border-top-color: rgb(149, 128, 255);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(149, 128, 255));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(189, 190, 194);
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
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: var(--text-normal, rgb(189, 190, 194));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--base-50, rgb(34, 35, 42));
  border-bottom-color: rgb(34, 35, 42);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 190, 194) none 0px;
  text-decoration-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(179, 187, 230, 0.05));
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(34, 35, 42);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 28, 34);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(179, 187, 230, 0.05));
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(179, 187, 230, 0.05));
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(138, 117, 240, 0.1));
  border-bottom-color: rgba(138, 117, 240, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(138, 117, 240, 0.15);
  border-right-color: rgba(138, 117, 240, 0.15);
  border-top-color: rgba(138, 117, 240, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(155, 137, 245);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(159, 146, 221));
  font-family: var(--h1-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(237, 237, 238));
  font-size: var(--inline-title-size, 32px);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(145, 131, 216));
  font-family: var(--h2-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(237, 237, 238));
  font-family: var(--inline-title-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(131, 115, 211));
  font-family: var(--h3-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(119, 102, 204));
  font-family: var(--h4-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(100, 84, 182));
  font-family: var(--h5-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(88, 73, 162));
  font-family: var(--h6-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 149, 128, 255);
  border-bottom-color: rgba(149, 128, 255, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(149, 128, 255, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(149, 128, 255, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(149, 128, 255, 0.15);
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(44, 45, 53);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(161, 163, 170));
  cursor: var(--cursor, pointer);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(161, 163, 170));
  cursor: var(--cursor, pointer);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(189, 190, 194);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(161, 163, 170));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(27, 28, 34));
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-left-width: 0px;
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(161, 163, 170));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(161, 163, 170);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(189, 190, 194);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(161, 163, 170));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(161, 163, 170));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(161, 163, 170);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(161, 163, 170));
  cursor: var(--cursor, pointer);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(161, 163, 170);
  stroke: rgb(161, 163, 170);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(83, 85, 95));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(189, 190, 194));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(27, 28, 34));
  border-color: rgb(189, 190, 194);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(44, 45, 53);
  color: var(--table-header-color, rgb(189, 190, 194));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: var(--text-muted, rgb(161, 163, 170));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: rgb(161, 163, 170);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(44, 45, 53);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(138, 117, 240, 0.1));
  border-radius: 6px;
  color: var(--pill-color, rgb(155, 137, 245));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(161, 163, 170);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(19, 21, 27));
  color: var(--text-normal, rgb(189, 190, 194));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(27, 28, 34));
  border-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(27, 28, 34));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(189, 190, 194);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(27, 28, 34));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(189, 190, 194));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(161, 163, 170);
  border-left-color: rgb(161, 163, 170);
  border-right-color: rgb(161, 163, 170);
  border-top-color: rgb(161, 163, 170);
  color: var(--text-normal, rgb(161, 163, 170));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(27, 28, 34));
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
  color: var(--code-normal, rgb(189, 190, 194));
  font-family: var(--font-monospace, "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(189, 190, 194);
  border-left-color: rgb(189, 190, 194);
  border-right-color: rgb(189, 190, 194);
  border-top-color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body sub {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body summary {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body sup {
  color: rgb(189, 190, 194);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(138, 117, 240, 0.1));
  border-bottom-color: rgba(138, 117, 240, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(138, 117, 240, 0.15);
  border-right-color: rgba(138, 117, 240, 0.15);
  border-top-color: rgba(138, 117, 240, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--tag-color, rgb(155, 137, 245));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 250;
  --accent-l: 75%;
  --accent-s: 80%;
  --anim-duration-moderate: 250ms;
  --anim-duration-slow: 400ms;
  --background-modifier-border: var(--base-45, hsl(230, 20%, 86%));
  --background-modifier-border-focus: var(--base-35, hsl(230, 10%, 62%));
  --background-modifier-border-hover: var(--base-40, hsl(230, 15%, 78%));
  --background-modifier-cover: rgba(0, 0, 0, 0.5);
  --background-modifier-error: var(--color-red, rgb(250, 55, 62));
  --background-modifier-error-hover: var(--color-red, rgb(250, 55, 62));
  --background-modifier-error-rgb: var(--color-red-rgb, 250, 55, 62);
  --background-modifier-form-field: var(--color-base-00, rgba(255, 255, 255, 0.5));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, rgba(255, 255, 255, 0.5));
  --background-modifier-hover: hsla(var(--base-hue), 40%, 90%, 0.8);
  --background-modifier-success: var(--color-green, rgb(14, 192, 67));
  --background-modifier-success-rgb: var(--color-green-rgb, 14, 192, 67);
  --background-primary: var(--base-60, hsl(230, 15%, 98%));
  --background-primary-alt: var(--base-55, hsl(230, 25%, 96%));
  --background-secondary: var(--base-55, hsl(230, 25%, 96%));
  --background-secondary-alt: var(--base-55, hsl(230, 25%, 96%));
  --base-05: hsl(var(--base-hue), var(--base-sat, 14%), 8%);
  --base-10: hsl(var(--base-hue), var(--base-sat, 12%), 12%);
  --base-15: hsl(var(--base-hue), var(--base-sat, 11%), 15%);
  --base-20: hsl(var(--base-hue), var(--base-sat, 10%), 19%);
  --base-25: hsl(var(--base-hue), var(--base-sat, 10%), 25%);
  --base-30: hsl(var(--base-hue), var(--base-sat, 10%), 35%);
  --base-35: hsl(var(--base-hue), var(--base-sat, 10%), 62%);
  --base-40: hsl(var(--base-hue), var(--base-sat, 15%), 78%);
  --base-45: hsl(var(--base-hue), var(--base-sat, 20%), 86%);
  --base-50: hsl(var(--base-hue), var(--base-sat, 30%), 92%);
  --base-55: hsl(var(--base-hue), var(--base-sat, 25%), 96%);
  --base-60: hsl(var(--base-hue), var(--base-sat, 15%), 98%);
  --base-hue: 230;
  --bases-cards-background: var(--background-primary, hsl(230, 15%, 98%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(230, 25%, 96%));
  --bases-cards-radius: var(--radius-m, 6px);
  --bases-embed-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --bases-group-heading-property-color: var(--text-muted, hsl(230, 10%, 19%));
  --bases-table-border-color: var(--table-border-color, hsl(230, 20%, 86%));
  --bases-table-cell-background-active: var(--background-primary, hsl(230, 15%, 98%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(230, 25%, 96%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(250, 80%, 75%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(230, 25%, 96%));
  --bases-table-header-background: var(--background-primary, hsl(230, 15%, 98%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla(230, 40%, 90%, 0.8));
  --bases-table-header-color: var(--text-muted, hsl(230, 10%, 19%));
  --bases-table-summary-background: var(--background-primary, hsl(230, 15%, 98%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla(230, 40%, 90%, 0.8));
  --blockquote-border-color: var(--interactive-accent, hsl(250, 80%, 75%));
  --bodyFont: var(--font-text-theme, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  --bold-color: var(--base-10, hsl(230, 12%, 12%));
  --callout-border-opacity: 0.15;
  --callout-border-width: 1px;
  --callout-bug: var(--color-red-rgb, 250, 55, 62);
  --callout-default: var(--color-purple-rgb, 111, 85, 241);
  --callout-error: var(--color-red-rgb, 250, 55, 62);
  --callout-example: var(--color-purple-rgb, 111, 85, 241);
  --callout-fail: var(--color-red-rgb, 250, 55, 62);
  --callout-important: var(--color-cyan-rgb, 61, 155, 184);
  --callout-info: var(--color-blue-rgb, 86, 128, 219);
  --callout-padding: var(--size-4-4) var(--size-4-4) var(--size-4-4) var(--size-4-6, 16px 16px 16px 24px);
  --callout-question: var(--color-yellow-rgb, 229, 199, 0);
  --callout-quote: var(--color-muted-rgb, 138, 147, 158);
  --callout-success: var(--color-green-rgb, 14, 192, 67);
  --callout-summary: var(--color-cyan-rgb, 61, 155, 184);
  --callout-tip: var(--color-cyan-rgb, 61, 155, 184);
  --callout-todo: var(--color-blue-rgb, 86, 128, 219);
  --callout-warning: var(--color-orange-rgb, 248, 119, 33);
  --canvas-background: var(--background-primary, hsl(230, 15%, 98%));
  --canvas-card-label-color: var(--text-faint, hsl(230, 10%, 62%));
  --canvas-color-1: var(--color-red-rgb, 250, 55, 62);
  --canvas-color-2: var(--color-orange-rgb, 248, 119, 33);
  --canvas-color-3: var(--color-yellow-rgb, 229, 199, 0);
  --canvas-color-4: var(--color-green-rgb, 14, 192, 67);
  --canvas-color-5: var(--color-cyan-rgb, 61, 155, 184);
  --canvas-color-6: var(--color-purple-rgb, 111, 85, 241);
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 150px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, hsl(230, 11%, 15%));
  --checkbox-border-color: var(--text-faint, hsl(230, 10%, 62%));
  --checkbox-border-color-hover: var(--text-muted, hsl(230, 10%, 19%));
  --checkbox-color: var(--interactive-accent, hsl(250, 80%, 75%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(250, 80%, 70%));
  --checkbox-marker-color: var(--background-primary, hsl(230, 15%, 98%));
  --checkbox-progress-width: 32px;
  --checklist-done-color: var(--text-faint, hsl(230, 10%, 62%));
  --checklist-done-decoration: none;
  --clickable-icon-radius: var(--radius-s, 6px);
  --code-background: var(--background-secondary, hsl(230, 25%, 96%));
  --code-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --code-bracket-background: var(--background-modifier-hover, hsla(230, 40%, 90%, 0.8));
  --code-comment: var(--text-faint, hsl(230, 10%, 62%));
  --code-function: var(--color-cyan, rgb(61 155 184));
  --code-important: var(--color-red, rgb(250, 55, 62));
  --code-keyword: var(--color-purple, rgb(111, 85, 241));
  --code-normal: var(--text-normal, hsl(230, 11%, 15%));
  --code-operator: var(--color-orange, rgb(248, 119, 33));
  --code-property: var(--color-blue, rgb(86 128 219));
  --code-punctuation: var(--color-pink, rgb(212, 73, 147));
  --code-string: var(--color-green, rgb(14, 192, 67));
  --code-tag: var(--color-yellow, rgb(229, 199, 0));
  --code-value: var(--color-cyan, rgb(61 155 184));
  --collapse-icon-color: var(--text-faint, hsl(230, 10%, 62%));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(250, 85%, 65%));
  --color-accent: hsl(var(--color-accent-hsl));
  --color-accent-1: hsl(var(--accent-h), var(--accent-s), 75%);
  --color-accent-2: hsl(var(--accent-h), var(--accent-s), 70%);
  --color-accent-hsl: var(--accent-h), var(--accent-s), 75%;
  --color-black: rgb(15, 20, 26);
  --color-black-rgb: 15, 20, 26;
  --color-blue: rgb(86 128 219);
  --color-blue-rgb: 86, 128, 219;
  --color-cyan: rgb(61 155 184);
  --color-cyan-rgb: 61, 155, 184;
  --color-green: rgb(14, 192, 67);
  --color-green-rgb: 14, 192, 67;
  --color-muted: rgb(138, 147, 158);
  --color-muted-rgb: 138, 147, 158;
  --color-orange: rgb(248, 119, 33);
  --color-orange-rgb: 248, 119, 33;
  --color-pink: rgb(212, 73, 147);
  --color-pink-rgb: 212, 73, 147;
  --color-purple: rgb(111, 85, 241);
  --color-purple-rgb: 111, 85, 241;
  --color-red: rgb(250, 55, 62);
  --color-red-rgb: 250, 55, 62;
  --color-teal: rgb(44, 174, 186);
  --color-teal-rgb: 44, 174, 186;
  --color-white: rgb(222, 222, 222);
  --color-white-rgb: 222, 222, 222;
  --color-yellow: rgb(229, 199, 0);
  --color-yellow-rgb: 229, 199, 0;
  --cursor: pointer;
  --dark: var(--text-normal, var(--base-15, hsl(230, 11%, 15%)));
  --darkgray: var(--text-normal, var(--base-15, hsl(230, 11%, 15%)));
  --divider-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --divider-color-hover: var(--interactive-accent, hsl(250, 80%, 75%));
  --dropdown-background: var(--interactive-normal, hsl(230, 25%, 96%));
  --dropdown-background-hover: var(--interactive-hover, hsl(230, 30%, 92%));
  --file-header-background: var(--background-primary, hsl(230, 15%, 98%));
  --file-header-background-focused: var(--background-primary, hsl(230, 15%, 98%));
  --file-header-font: var(--font-interface, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --flair-background: var(--interactive-normal, hsl(230, 25%, 96%));
  --flair-color: var(--text-normal, hsl(230, 11%, 15%));
  --font-editor-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-interface-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mermaid: var(--font-text, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-monospace-theme: "JetBrains Mono", "FiraCode", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace;
  --font-text-theme: Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --footnote-divider-color: var(--metadata-divider-color, hsl(230, 20%, 86%));
  --footnote-id-color: var(--text-muted, hsl(230, 10%, 19%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(230, 10%, 62%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla(230, 40%, 90%, 0.8));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --frame-left-space: 6px;
  --frame-right-space: 132px;
  --graph-node: var(--text-muted, hsl(230, 10%, 19%));
  --graph-node-attachment: var(--color-yellow, rgb(229, 199, 0));
  --graph-node-focused: var(--text-accent, hsl(250, 85%, 65%));
  --graph-node-tag: var(--color-green, rgb(14, 192, 67));
  --graph-node-unresolved: var(--text-faint, hsl(230, 10%, 62%));
  --graph-text: var(--text-normal, hsl(230, 11%, 15%));
  --gray: var(--text-muted, var(--base-20, hsl(230, 10%, 19%)));
  --h1-color: hsl(var(--accent-h), 52%, 72%);
  --h1-size: 1.8rem;
  --h2-color: hsl(var(--accent-h), 52%, 68%);
  --h2-size: 1.5rem;
  --h2-weight: 600;
  --h3-color: hsl(var(--accent-h), 52%, 64%);
  --h3-size: 1.45rem;
  --h3-weight: 600;
  --h4-color: hsl(var(--accent-h), 50%, 60%);
  --h4-size: 1.25rem;
  --h4-weight: 600;
  --h5-color: hsl(var(--accent-h), 40%, 52%);
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1.125rem;
  --h5-weight: 600;
  --h6-color: hsl(var(--accent-h), 38%, 46%);
  --h6-line-height: var(--line-height-normal, 1.6);
  --h6-size: 1rem;
  --headerFont: var(--font-text-theme, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  --heading-formatting: var(--text-faint, hsl(230, 10%, 62%));
  --highlight: var(--text-highlight-bg, var(--base-45, hsl(230, 20%, 86%)));
  --hr-color: hsla(var(--accent-h), 50%, 75%, 0.1);
  --icon-color: var(--text-muted, hsl(230, 10%, 19%));
  --icon-color-active: var(--text-accent, hsl(250, 85%, 65%));
  --icon-color-focused: var(--text-normal, hsl(230, 11%, 15%));
  --icon-color-hover: var(--text-muted, hsl(230, 10%, 19%));
  --indentation-guide-color: var(--base-45, hsl(230, 20%, 86%));
  --indentation-guide-color-active: var(--base-35, hsl(230, 10%, 62%));
  --inline-title-color: var(--base-05, hsl(230, 14%, 8%));
  --inline-title-size: var(--h1-size, 2rem);
  --input-date-separator: var(--text-faint, hsl(230, 10%, 62%));
  --input-placeholder-color: var(--text-faint, hsl(230, 10%, 62%));
  --interactive-accent: var(--color-accent-1, hsl(250, 80%, 75%));
  --interactive-accent-hover: var(--color-accent-2, hsl(250, 80%, 70%));
  --interactive-accent-hsl: var(--color-accent-hsl, 250, 80%, 75%);
  --interactive-hover: var(--base-50, hsl(230, 30%, 92%));
  --interactive-normal: var(--base-55, hsl(230, 25%, 96%));
  --light: var(--background-primary, var(--base-60, hsl(230, 15%, 98%)));
  --lightgray: var(--background-secondary, var(--base-55, hsl(230, 25%, 96%)));
  --line-height-normal: 1.6;
  --link-color: var(--text-accent, hsl(250, 85%, 65%));
  --link-color-hover: var(--text-accent-hover, hsl(250, 60%, 45%));
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: var(--text-accent, hsl(250, 85%, 65%));
  --link-external-color-hover: var(--text-accent-hover, hsl(250, 60%, 45%));
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: var(--text-accent, hsl(250, 85%, 65%));
  --list-marker-color: var(--base-30, hsl(230, 10%, 35%));
  --list-marker-color-collapsed: var(--text-accent, hsl(250, 85%, 65%));
  --list-marker-color-hover: var(--text-muted, hsl(230, 10%, 19%));
  --menu-background: var(--background-secondary, hsl(230, 25%, 96%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(230, 15%, 78%));
  --menu-radius: var(--radius-m, 6px);
  --metadata-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --metadata-divider-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --metadata-input-background-active: var(--background-modifier-hover, hsla(230, 40%, 90%, 0.8));
  --metadata-input-font: var(--font-interface, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, hsl(230, 11%, 15%));
  --metadata-label-background-active: var(--background-modifier-hover, hsla(230, 40%, 90%, 0.8));
  --metadata-label-font: var(--font-interface, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, hsl(230, 10%, 19%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(230, 10%, 19%));
  --metadata-property-background-active: var(--background-modifier-hover, hsla(230, 40%, 90%, 0.8));
  --modal-background: var(--background-primary, hsl(230, 15%, 98%));
  --modal-border-color: var(--base-45, hsl(230, 20%, 86%));
  --modal-radius: var(--radius-l, 10px);
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(230, 10%, 62%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(230, 10%, 62%));
  --nav-heading-color: var(--text-normal, hsl(230, 11%, 15%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(230, 10%, 62%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(230, 10%, 19%));
  --nav-heading-color-hover: var(--text-normal, hsl(230, 11%, 15%));
  --nav-indentation-guide-color: var(--indentation-guide-color, hsl(230, 20%, 86%));
  --nav-item-background-active: var(--background-modifier-hover, hsla(230, 40%, 90%, 0.8));
  --nav-item-background-hover: var(--background-modifier-hover, hsla(230, 40%, 90%, 0.8));
  --nav-item-color: var(--text-muted, hsl(230, 10%, 19%));
  --nav-item-color-active: var(--text-normal, hsl(230, 11%, 15%));
  --nav-item-color-highlighted: var(--text-accent, hsl(250, 85%, 65%));
  --nav-item-color-hover: var(--text-normal, hsl(230, 11%, 15%));
  --nav-item-color-selected: var(--text-normal, hsl(230, 11%, 15%));
  --nav-tag-color: var(--text-faint, hsl(230, 10%, 62%));
  --nav-tag-color-active: var(--text-muted, hsl(230, 10%, 19%));
  --nav-tag-color-hover: var(--text-muted, hsl(230, 10%, 19%));
  --pdf-background: var(--background-primary, hsl(230, 15%, 98%));
  --pdf-page-background: var(--background-primary, hsl(230, 15%, 98%));
  --pdf-sidebar-background: var(--background-primary, hsl(230, 15%, 98%));
  --pill-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(230, 15%, 78%));
  --pill-color: var(--text-muted, hsl(230, 10%, 19%));
  --pill-color-hover: var(--text-normal, hsl(230, 11%, 15%));
  --pill-color-remove: var(--text-faint, hsl(230, 10%, 62%));
  --pill-color-remove-hover: var(--text-accent, hsl(250, 85%, 65%));
  --prompt-background: var(--background-primary, hsl(230, 15%, 98%));
  --prompt-border-color: var(--base-50, hsl(230, 30%, 92%));
  --radius-l: 10px;
  --radius-m: 6px;
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(230, 15%, 98%) 65%, transparent) linear-gradient(hsl(230, 15%, 98%), color-mix(in srgb, hsl(230, 15%, 98%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(230, 25%, 96%));
  --ribbon-background-collapsed: var(--background-secondary, hsl(230, 25%, 96%));
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 0px);
  --ribbon-width: 40px;
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.15);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0);
  --scrollbar-opacity: 0;
  --scrollbar-radius: var(--radius-l, 10px);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.08);
  --search-clear-button-color: var(--text-muted, hsl(230, 10%, 19%));
  --search-icon-color: var(--text-muted, hsl(230, 10%, 19%));
  --search-result-background: var(--background-primary, hsl(230, 15%, 98%));
  --secondary: var(--text-accent, hsl(var(--accent-h), 85%, 65%));
  --setting-group-heading-color: var(--text-normal, hsl(230, 11%, 15%));
  --setting-items-background: var(--background-primary-alt, hsl(230, 25%, 96%));
  --setting-items-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --setting-items-radius: var(--radius-l, 10px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(230, 10%, 19%));
  --shiki-code-background: var(--code-background, hsl(230, 25%, 96%));
  --shiki-code-comment: var(--text-faint, hsl(230, 10%, 62%));
  --shiki-code-function: var(--color-green, rgb(14, 192, 67));
  --shiki-code-important: var(--color-orange, rgb(248, 119, 33));
  --shiki-code-keyword: var(--color-pink, rgb(212, 73, 147));
  --shiki-code-normal: var(--text-muted, hsl(230, 10%, 19%));
  --shiki-code-property: var(--color-cyan, rgb(61 155 184));
  --shiki-code-punctuation: var(--text-muted, hsl(230, 10%, 19%));
  --shiki-code-string: var(--color-yellow, rgb(229, 199, 0));
  --shiki-code-value: var(--color-purple, rgb(111, 85, 241));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --shiki-gutter-text-color: var(--text-faint, hsl(230, 10%, 62%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(230, 10%, 19%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(230, 10%, 19%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(230, 10%, 62%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(230, 15%, 78%));
  --slider-track-background: var(--background-modifier-border, hsl(230, 20%, 86%));
  --status-bar-background: var(--background-secondary, hsl(230, 25%, 96%));
  --status-bar-border-color: var(--divider-color, hsl(230, 20%, 86%));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 1px 0 0 0px);
  --status-bar-height: 24px;
  --status-bar-radius: var(--radius-m, 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, hsl(230, 10%, 19%));
  --suggestion-background: var(--background-primary, hsl(230, 15%, 98%));
  --sync-avatar-color-1: var(--color-red, rgb(250, 55, 62));
  --sync-avatar-color-2: var(--color-orange, rgb(248, 119, 33));
  --sync-avatar-color-3: var(--color-yellow, rgb(229, 199, 0));
  --sync-avatar-color-4: var(--color-green, rgb(14, 192, 67));
  --sync-avatar-color-5: var(--color-cyan, rgb(61 155 184));
  --sync-avatar-color-6: var(--color-blue, rgb(86 128 219));
  --sync-avatar-color-7: var(--color-purple, rgb(111, 85, 241));
  --sync-avatar-color-8: var(--color-pink, rgb(212, 73, 147));
  --tab-active-color: var(--base-60, hsl(230, 15%, 98%));
  --tab-active-shadow: inset 0 0 0 1px var(--background-modifier-border);
  --tab-background-active: var(--background-primary, hsl(230, 15%, 98%));
  --tab-container-background: var(--background-secondary, hsl(230, 25%, 96%));
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-min-width: 92px;
  --tab-outline-color: var(--divider-color, hsl(230, 20%, 86%));
  --tab-switcher-background: var(--background-secondary, hsl(230, 25%, 96%));
  --tab-text-color: var(--text-faint, hsl(230, 10%, 62%));
  --tab-text-color-active: var(--text-muted, hsl(230, 10%, 19%));
  --tab-text-color-focused: var(--text-muted, hsl(230, 10%, 19%));
  --tab-text-color-focused-active: var(--text-muted, hsl(230, 10%, 19%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(230, 11%, 15%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(250, 85%, 65%));
  --table-add-button-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --table-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(250, 80%, 75%));
  --table-drag-handle-color: var(--text-faint, hsl(230, 10%, 62%));
  --table-header-background: var(--background-secondary, hsl(230, 25%, 96%));
  --table-header-background-hover: var(--background-secondary, hsl(230, 25%, 96%));
  --table-header-border-color: var(--table-border-color, hsl(230, 20%, 86%));
  --table-header-color: var(--text-normal, hsl(230, 11%, 15%));
  --table-selection-border-color: var(--interactive-accent, hsl(250, 80%, 75%));
  --tag-color: var(--text-accent, hsl(250, 85%, 65%));
  --tag-color-hover: var(--text-accent, hsl(250, 85%, 65%));
  --tag-radius: var(--radius-m, 6px);
  --tertiary: var(--text-accent-hover, hsl(var(--accent-h), 60%, 45%));
  --text-accent: hsl(var(--accent-h), 85%, 65%);
  --text-accent-hover: hsl(var(--accent-h), 60%, 45%);
  --text-error: var(--color-red, rgb(250, 55, 62));
  --text-faint: var(--base-35, hsl(230, 10%, 62%));
  --text-highlight-bg: var(--base-45, hsl(230, 20%, 86%));
  --text-muted: var(--base-20, hsl(230, 10%, 19%));
  --text-normal: var(--base-15, hsl(230, 11%, 15%));
  --text-selection: var(--base-50, hsl(230, 30%, 92%));
  --text-success: var(--color-green, rgb(14, 192, 67));
  --text-warning: var(--color-orange, rgb(248, 119, 33));
  --textHighlight: var(--text-highlight-bg, var(--base-45, hsl(230, 20%, 86%)));
  --titleFont: var(--font-text-theme, Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif);
  --titlebar-background: var(--background-secondary, hsl(230, 25%, 96%));
  --titlebar-background-focused: var(--background-secondary-alt, hsl(230, 25%, 96%));
  --titlebar-border-color: var(--background-modifier-border, hsl(230, 20%, 86%));
  --titlebar-text-color: var(--text-muted, hsl(230, 10%, 19%));
  --titlebar-text-color-focused: var(--text-normal, hsl(230, 11%, 15%));
  --vault-profile-color: var(--text-normal, hsl(230, 11%, 15%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(230, 11%, 15%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(242, 243, 247));
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(249, 249, 251));
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(242, 243, 247));
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(212, 215, 226);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(242, 243, 247));
  border-left-color: rgb(212, 215, 226);
  color: rgb(34, 35, 42);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(27, 28, 34));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(27, 28, 34) none 0px;
  text-decoration-color: rgb(27, 28, 34);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(34, 35, 42));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(34, 35, 42));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(27, 28, 34));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(27, 28, 34) none 0px;
  text-decoration-color: rgb(27, 28, 34);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(212, 215, 226));
  color: var(--text-normal, rgb(34, 35, 42));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body del {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(34, 35, 42));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(148, 152, 168);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(157, 140, 242));
  border-color: rgb(157, 140, 242);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(44, 45, 53));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(44, 45, 53) none 0px;
  text-decoration-color: rgb(44, 45, 53);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(115, 90, 242));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration-color: rgb(115, 90, 242);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(115, 90, 242));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration-color: rgb(115, 90, 242);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(115, 90, 242));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(115, 90, 242) none 0px;
  text-decoration: rgba(157, 140, 242, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(157, 140, 242, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body dt {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ol > li {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ul > li {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(148, 152, 168));
}

html[saved-theme="light"] body blockquote {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body table {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 216.406px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: var(--table-text-color, rgb(34, 35, 42));
  padding-bottom: 6px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 6px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: var(--table-header-color, rgb(34, 35, 42));
  padding-bottom: 10px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 10px;
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(242, 243, 247));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(242, 243, 247));
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: var(--code-normal, rgb(34, 35, 42));
  font-family: var(--font-monospace, "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(242, 243, 247));
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
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body figcaption {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(159, 146, 221);
  border-left-color: rgb(159, 146, 221);
  border-right-color: rgb(159, 146, 221);
  border-top-color: rgb(159, 146, 221);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(242, 243, 247));
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(157, 140, 242);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(148, 152, 168);
  border-left-color: rgb(148, 152, 168);
  border-right-color: rgb(148, 152, 168);
  border-top-color: rgb(148, 152, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(148, 152, 168);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(148, 152, 168);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(148, 152, 168);
  text-decoration: line-through 1px rgb(148, 152, 168);
  text-decoration-color: rgb(148, 152, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(34, 35, 42);
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1%2010a1%201%200%200%201%201-1h16a1%201%200%201%201%200%202H2a1%201%200%200%201-1-1Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1%2010a1%201%200%200%201%201-1h16a1%201%200%201%201%200%202H2a1%201%200%200%201-1-1Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
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
  color: rgb(148, 152, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%20512%20512%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M449.07%20399.08L278.64%2082.58c-12.08-22.44-44.26-22.44-56.35%200L51.87%20399.08A32%2032%200%200%200%2080%20446.25h340.89a32%2032%200%200%200%2028.18-47.17Zm-198.6-1.83a20%2020%200%201%201%2020-20a20%2020%200%200%201-20%2020Zm21.72-201.15l-5.74%20122a16%2016%200%200%201-32%200l-5.74-121.95a21.73%2021.73%200%200%201%2021.5-22.69h.21a21.74%2021.74%200%200%201%2021.73%2022.7Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%20512%20512%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M449.07%20399.08L278.64%2082.58c-12.08-22.44-44.26-22.44-56.35%200L51.87%20399.08A32%2032%200%200%200%2080%20446.25h340.89a32%2032%200%200%200%2028.18-47.17Zm-198.6-1.83a20%2020%200%201%201%2020-20a20%2020%200%200%201-20%2020Zm21.72-201.15l-5.74%20122a16%2016%200%200%201-32%200l-5.74-121.95a21.73%2021.73%200%200%201%2021.5-22.69h.21a21.74%2021.74%200%200%201%2021.73%2022.7Z%22/%3E%3C/svg%3E");
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
  color: rgb(248, 119, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2216\\%22 height=\\%2216\\%22 viewBox=\\%220 0 20 20\\%22%3E%3Cg fill=\\%22currentColor\\%22%3E%3Cpath d=\\%22M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\\%22 width=\\%2216\\%22 height=\\%2216\\%22 viewBox=\\%220 0 20 20\\%22%3E%3Cg fill=\\%22currentColor\\%22%3E%3Cpath d=\\%22M11.739 16.213a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 4.765c-.67 0-1.245.2-1.65.486c-.39.276-.583.597-.639.874a1.45 1.45 0 0 1-2.842-.574c.227-1.126.925-2.045 1.809-2.67c.92-.65 2.086-1.016 3.322-1.016c2.557 0 5.208 1.71 5.208 4.456c0 1.59-.945 2.876-2.169 3.626a1.45 1.45 0 0 1-1.514-2.474c.57-.349.783-.794.783-1.152c0-.574-.715-1.556-2.308-1.556Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M9.71 8.63c.8 0 1.45.648 1.45 1.45v1.502a1.45 1.45 0 1 1-2.9 0V10.08c0-.8.649-1.45 1.45-1.45Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3Cpath fill-rule=\\%22evenodd\\%22 d=\\%22M13.239 7.966a1.45 1.45 0 0 1-.5 1.99l-2.284 1.367a1.45 1.45 0 0 1-1.49-2.488l2.285-1.368a1.45 1.45 0 0 1 1.989.5Z\\%22 clip-rule=\\%22evenodd\\%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
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
  background-color: rgb(248, 119, 33);
  color: rgb(229, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22m7%206l1-2H6C3.79%204%202%206.79%202%209v7h7V9H5c0-3%202-3%202-3zm7%203c0-3%202-3%202-3l1-2h-2c-2.21%200-4%202.79-4%205v7h7V9z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2020%2020%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22m7%206l1-2H6C3.79%204%202%206.79%202%209v7h7V9H5c0-3%202-3%202-3zm7%203c0-3%202-3%202-3l1-2h-2c-2.21%200-4%202.79-4%205v7h7V9z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M9.153%205.408C10.42%203.136%2011.053%202%2012%202c.947%200%201.58%201.136%202.847%203.408l.328.588c.36.646.54.969.82%201.182c.28.213.63.292%201.33.45l.636.144c2.46.557%203.689.835%203.982%201.776c.292.94-.546%201.921-2.223%203.882l-.434.507c-.476.557-.715.836-.822%201.18c-.107.345-.071.717.001%201.46l.066.677c.253%202.617.38%203.925-.386%204.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347%200-.674.15-1.329.452l-.595.274c-2.303%201.06-3.455%201.59-4.22%201.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116%200-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941%201.523-1.22%203.983-1.776l.636-.144c.699-.158%201.048-.237%201.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M9.153%205.408C10.42%203.136%2011.053%202%2012%202c.947%200%201.58%201.136%202.847%203.408l.328.588c.36.646.54.969.82%201.182c.28.213.63.292%201.33.45l.636.144c2.46.557%203.689.835%203.982%201.776c.292.94-.546%201.921-2.223%203.882l-.434.507c-.476.557-.715.836-.822%201.18c-.107.345-.071.717.001%201.46l.066.677c.253%202.617.38%203.925-.386%204.506c-.766.582-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452c-.347%200-.674.15-1.329.452l-.595.274c-2.303%201.06-3.455%201.59-4.22%201.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116%200-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882c.293-.941%201.523-1.22%203.983-1.776l.636-.144c.699-.158%201.048-.237%201.329-.45c.28-.213.46-.536.82-1.182l.328-.588Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(229, 199, 0);
  color: rgb(229, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(171, 171, 171);
  color: rgba(0, 0, 0, 0);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M2.75,15.5H13.25c.83,0,1.5-.67,1.5-1.5V3.5c0-.83-.67-1.5-1.5-1.5h-1.5V.5h-1.5v1.5H5.75V.5h-1.5v1.5h-1.5c-.83,0-1.5,.67-1.5,1.5V14c0,.83,.67,1.5,1.5,1.5Zm0-11.25H13.25v1.5H2.75v-1.5Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(61, 155, 184);
  color: rgb(86, 128, 219);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20id=%22svg0%22%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2016%2016%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1{fill:none}%3C/style%3E%3C/defs%3E%3Crect%20class=%22cls-1%22%20width=%2216%22%20height=%2216%22/%3E%3Cpath%20d=%22M1.72,1.05c-.08-.04-.18-.06-.27-.05-.09,0-.18,.04-.26,.1-.07,.06-.13,.13-.16,.22-.03,.09-.04,.18-.02,.27l1.4,4.85c.03,.09,.08,.17,.15,.23,.07,.06,.16,.1,.25,.12l5.69,.95c.27,.05,.27,.44,0,.49l-5.69,.95c-.09,.02-.18,.06-.25,.12s-.12,.14-.15,.23l-1.4,4.85c-.02,.09-.01,.19,.02,.27,.03,.09,.09,.16,.16,.22,.07,.06,.16,.09,.26,.1,.09,0,.19,0,.27-.05l13-6.5c.08-.04,.15-.11,.2-.18,.05-.08,.07-.17,.07-.26s-.03-.18-.07-.26c-.05-.08-.12-.14-.2-.18L1.72,1.05Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(86, 128, 219);
  color: rgb(14, 192, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(157, 140, 242);
  content: " ";
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
  background-color: rgb(250, 55, 62);
  color: rgb(248, 119, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
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
  background-color: rgb(250, 55, 62);
  color: rgb(248, 119, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m3%207l6%206l4-4l8%208%22/%3E%3Cpath%20d=%22M17%2017h4v-4%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22m3%207l6%206l4-4l8%208%22/%3E%3Cpath%20d=%22M17%2017h4v-4%22/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(250, 55, 62);
  color: rgb(250, 55, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M12.963%202.286a.75.75%200%200%200-1.071-.136a9.742%209.742%200%200%200-3.539%206.177A7.547%207.547%200%200%201%206.648%206.61a.75.75%200%200%200-1.152-.082A9%209%200%201%200%2015.68%204.534a7.46%207.46%200%200%201-2.717-2.248ZM15.75%2014.25a3.75%203.75%200%201%201-7.313-1.172c.628.465%201.35.81%202.133%201a5.99%205.99%200%200%201%201.925-3.545a3.75%203.75%200%200%201%203.255%203.717Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M12.963%202.286a.75.75%200%200%200-1.071-.136a9.742%209.742%200%200%200-3.539%206.177A7.547%207.547%200%200%201%206.648%206.61a.75.75%200%200%200-1.152-.082A9%209%200%201%200%2015.68%204.534a7.46%207.46%200%200%201-2.717-2.248ZM15.75%2014.25a3.75%203.75%200%201%201-7.313-1.172c.628.465%201.35.81%202.133%201a5.99%205.99%200%200%201%201.925-3.545a3.75%203.75%200%200%201%203.255%203.717Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
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
  background-color: rgb(250, 55, 62);
  color: rgb(250, 55, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2036%2036%22%3E%3Ccircle%20cx=%2220.75%22%20cy=%226%22%20r=%224%22%20fill=%22currentColor%22%20class=%22clr-i-solid%20clr-i-solid-path-1%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M24.84%2026.23a1%201%200%200%200-1.4.29a16.6%2016.6%200%200%201-3.51%203.77c-.33.25-1.56%201.2-2.08%201c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64%204.05-12%204.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58%201.09-8.72%201.1a1%201%200%200%200%20.13%202s3-.39%203.33-.42a.88.88%200%200%201%20.85.44a2.47%202.47%200%200%201-.07%201.71c-.26%201-4.37%2012.58-4.5%2013.25a2.78%202.78%200%200%200%201.18%203a5%205%200%200%200%203.08.83a8.53%208.53%200%200%200%203.09-.62c2.49-1%205.09-3.66%206.46-5.75a1%201%200%200%200-.28-1.29Z%22%20class=%22clr-i-solid%20clr-i-solid-path-2%22/%3E%3Cpath%20fill=%22none%22%20d=%22M0%200h36v36H0z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2036%2036%22%3E%3Ccircle%20cx=%2220.75%22%20cy=%226%22%20r=%224%22%20fill=%22currentColor%22%20class=%22clr-i-solid%20clr-i-solid-path-1%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M24.84%2026.23a1%201%200%200%200-1.4.29a16.6%2016.6%200%200%201-3.51%203.77c-.33.25-1.56%201.2-2.08%201c-.36-.11-.15-.82-.08-1.12l.53-1.57c.22-.64%204.05-12%204.47-13.3c.62-1.9.35-3.77-2.48-3.32c-.77.08-8.58%201.09-8.72%201.1a1%201%200%200%200%20.13%202s3-.39%203.33-.42a.88.88%200%200%201%20.85.44a2.47%202.47%200%200%201-.07%201.71c-.26%201-4.37%2012.58-4.5%2013.25a2.78%202.78%200%200%200%201.18%203a5%205%200%200%200%203.08.83a8.53%208.53%200%200%200%203.09-.62c2.49-1%205.09-3.66%206.46-5.75a1%201%200%200%200-.28-1.29Z%22%20class=%22clr-i-solid%20clr-i-solid-path-2%22/%3E%3Cpath%20fill=%22none%22%20d=%22M0%200h36v36H0z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M0%200h24v24H0z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm8-9a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm9%209a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM4.893%204.893a1%201%200%200%201%201.32-.083l.094.083l.7.7a1%201%200%200%201-1.32%201.497l-.094-.083l-.7-.7a1%201%200%200%201%200-1.414zm12.8%200a1%201%200%200%201%201.497%201.32l-.083.094l-.7.7a1%201%200%200%201-1.497-1.32l.083-.094l.7-.7zM14%2018a1%201%200%200%201%201%201a3%203%200%200%201-6%200a1%201%200%200%201%20.883-.993L10%2018h4zM12%206a6%206%200%200%201%203.6%2010.8a1%201%200%200%201-.471.192L15%2017H9a1%201%200%200%201-.6-.2A6%206%200%200%201%2012%206z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M0%200h24v24H0z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2011a1%201%200%200%201%20.117%201.993L4%2013H3a1%201%200%200%201-.117-1.993L3%2011h1zm8-9a1%201%200%200%201%20.993.883L13%203v1a1%201%200%200%201-1.993.117L11%204V3a1%201%200%200%201%201-1zm9%209a1%201%200%200%201%20.117%201.993L21%2013h-1a1%201%200%200%201-.117-1.993L20%2011h1zM4.893%204.893a1%201%200%200%201%201.32-.083l.094.083l.7.7a1%201%200%200%201-1.32%201.497l-.094-.083l-.7-.7a1%201%200%200%201%200-1.414zm12.8%200a1%201%200%200%201%201.497%201.32l-.083.094l-.7.7a1%201%200%200%201-1.497-1.32l.083-.094l.7-.7zM14%2018a1%201%200%200%201%201%201a3%203%200%200%201-6%200a1%201%200%200%201%20.883-.993L10%2018h4zM12%206a6%206%200%200%201%203.6%2010.8a1%201%200%200%201-.471.192L15%2017H9a1%201%200%200%201-.6-.2A6%206%200%200%201%2012%206z%22/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(86, 128, 219);
  color: rgb(61, 155, 184);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 199, 0);
  color: rgb(229, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1.25%2012a5.75%205.75%200%200%201%2010.8-2.75H21c.966%200%201.75.784%201.75%201.75v2.5a.75.75%200%200%201-.75.75h-2.25V16a.75.75%200%200%201-.75.75h-2.5a.75.75%200%200%201-.75-.75v-1.75h-3.457A5.751%205.751%200%200%201%201.25%2012ZM7%2010a2%202%200%201%200%200%204a2%202%200%200%200%200-4Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20fill-rule=%22evenodd%22%20d=%22M1.25%2012a5.75%205.75%200%200%201%2010.8-2.75H21c.966%200%201.75.784%201.75%201.75v2.5a.75.75%200%200%201-.75.75h-2.25V16a.75.75%200%200%201-.75.75h-2.5a.75.75%200%200%201-.75-.75v-1.75h-3.457A5.751%205.751%200%200%201%201.25%2012ZM7%2010a2%202%200%201%200%200%204a2%202%200%200%200%200-4Z%22%20clip-rule=%22evenodd%22/%3E%3C/svg%3E");
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
  background-color: rgb(229, 199, 0);
  color: rgb(229, 199, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2028%2028%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M14%202.25A9.75%209.75%200%200%201%2023.75%2012c0%204.12-2.895%208.61-8.61%2013.518a1.75%201.75%200%200%201-2.283-.002l-.378-.328C7.017%2020.408%204.25%2016.028%204.25%2012A9.75%209.75%200%200%201%2014%202.25Zm0%206a3.75%203.75%200%201%200%200%207.5a3.75%203.75%200%200%200%200-7.5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2028%2028%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M14%202.25A9.75%209.75%200%200%201%2023.75%2012c0%204.12-2.895%208.61-8.61%2013.518a1.75%201.75%200%200%201-2.283-.002l-.378-.328C7.017%2020.408%204.25%2016.028%204.25%2012A9.75%209.75%200%200%201%2014%202.25Zm0%206a3.75%203.75%200%201%200%200%207.5a3.75%203.75%200%200%200%200-7.5Z%22/%3E%3C/svg%3E");
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
  background-color: rgb(111, 85, 241);
  color: rgb(250, 55, 62);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M24%200v24H0V0h24ZM12.593%2023.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023%200%20.029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023%200%200%200-.027.006l-.006.014l-.034.614c0%20.012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M12%202v6.5a1.5%201.5%200%200%200%201.356%201.493L13.5%2010H20v10a2%202%200%200%201-1.85%201.995L18%2022H6a2%202%200%200%201-1.995-1.85L4%2020V4a2%202%200%200%201%201.85-1.995L6%202h6Zm0%209.5a1%201%200%200%200-.993.883L11%2012.5V14H9.5a1%201%200%200%200-.117%201.993L9.5%2016H11v1.5a1%201%200%200%200%201.993.117L13%2017.5V16h1.5a1%201%200%200%200%20.117-1.993L14.5%2014H13v-1.5a1%201%200%200%200-1-1Zm2-9.457a2%202%200%200%201%20.877.43l.123.113L19.414%207a2%202%200%200%201%20.502.84l.04.16H14V2.043Z%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cpath%20d=%22M24%200v24H0V0h24ZM12.593%2023.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023%200%20.029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023%200%200%200-.027.006l-.006.014l-.034.614c0%20.012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z%22/%3E%3Cpath%20fill=%22currentColor%22%20d=%22M12%202v6.5a1.5%201.5%200%200%200%201.356%201.493L13.5%2010H20v10a2%202%200%200%201-1.85%201.995L18%2022H6a2%202%200%200%201-1.995-1.85L4%2020V4a2%202%200%200%201%201.85-1.995L6%202h6Zm0%209.5a1%201%200%200%200-.993.883L11%2012.5V14H9.5a1%201%200%200%200-.117%201.993L9.5%2016H11v1.5a1%201%200%200%200%201.993.117L13%2017.5V16h1.5a1%201%200%200%200%20.117-1.993L14.5%2014H13v-1.5a1%201%200%200%200-1-1Zm2-9.457a2%202%200%200%201%20.877.43l.123.113L19.414%207a2%202%200%200%201%20.502.84l.04.16H14V2.043Z%22/%3E%3C/g%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 55, 62);
  color: rgb(86, 128, 219);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
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
  background-color: rgb(14, 192, 67);
  color: rgb(14, 192, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%223%22%20d=%22M16.7%208A3%203%200%200%200%2014%206h-4a3%203%200%200%200%200%206h4a3%203%200%200%201%200%206h-4a3%203%200%200%201-2.7-2M12%203v3m0%2012v3%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%223%22%20d=%22M16.7%208A3%203%200%200%200%2014%206h-4a3%203%200%200%200%200%206h4a3%203%200%200%201%200%206h-4a3%203%200%200%201-2.7-2M12%203v3m0%2012v3%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(14, 192, 67);
  color: rgb(14, 192, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22m3%2017l6-6l4%204l8-8%22/%3E%3Cpath%20d=%22M17%207h4v4%22/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cg%20fill=%22none%22%20stroke=%22currentColor%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22%20stroke-width=%222.5%22%3E%3Cpath%20d=%22m3%2017l6-6l4%204l8-8%22/%3E%3Cpath%20d=%22M17%207h4v4%22/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(14, 192, 67);
  color: rgb(14, 192, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2022q-.425%200-.713-.288T3%2021v-4q0-.825.588-1.413T5%2015h14q.825%200%201.413.588T21%2017v4q0%20.425-.288.713T20%2022H4Zm1-9v-3q0-.825.588-1.413T7%208h4V6.55q-.45-.3-.725-.725T10%204.8q0-.375.15-.738t.45-.662L12%202l1.4%201.4q.3.3.45.662T14%204.8q0%20.6-.275%201.025T13%206.55V8h4q.825%200%201.413.587T19%2010v3H5Z%22/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,<?xml%20version=%221.0%22%20encoding=%22UTF-8%22?%3E%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20width=%2216%22%20height=%2216%22%20viewBox=%220%200%2024%2024%22%3E%3Cpath%20fill=%22currentColor%22%20d=%22M4%2022q-.425%200-.713-.288T3%2021v-4q0-.825.588-1.413T5%2015h14q.825%200%201.413.588T21%2017v4q0%20.425-.288.713T20%2022H4Zm1-9v-3q0-.825.588-1.413T7%208h4V6.55q-.45-.3-.725-.725T10%204.8q0-.375.15-.738t.45-.662L12%202l1.4%201.4q.3.3.45.662T14%204.8q0%20.6-.275%201.025T13%206.55V8h4q.825%200%201.413.587T19%2010v3H5Z%22/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(86, 128, 219);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 61, 155, 184);
  background: rgba(61, 155, 184, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(61, 155, 184, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(61, 155, 184, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(61, 155, 184, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(61, 155, 184, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 250, 55, 62);
  background: rgba(250, 55, 62, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 250, 55, 62);
  background: rgba(250, 55, 62, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 111, 85, 241);
  background: rgba(111, 85, 241, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 250, 55, 62);
  background: rgba(250, 55, 62, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(250, 55, 62, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(250, 55, 62, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(250, 55, 62, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(250, 55, 62, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 86, 128, 219);
  background: rgba(86, 128, 219, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(86, 128, 219, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(86, 128, 219, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(86, 128, 219, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(86, 128, 219, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 111, 85, 241);
  background: rgba(111, 85, 241, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 229, 199, 0);
  background: rgba(229, 199, 0, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(229, 199, 0, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(229, 199, 0, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(229, 199, 0, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(229, 199, 0, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 138, 147, 158);
  background: rgba(138, 147, 158, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(138, 147, 158, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(138, 147, 158, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(138, 147, 158, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(138, 147, 158, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 14, 192, 67);
  background: rgba(14, 192, 67, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(14, 192, 67, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(14, 192, 67, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(14, 192, 67, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(14, 192, 67, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 61, 155, 184);
  background: rgba(61, 155, 184, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(61, 155, 184, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(61, 155, 184, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(61, 155, 184, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(61, 155, 184, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 86, 128, 219);
  background: rgba(86, 128, 219, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(86, 128, 219, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(86, 128, 219, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(86, 128, 219, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(86, 128, 219, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 248, 119, 33);
  background: rgba(248, 119, 33, 0.07) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.07);
  border-bottom-color: rgba(248, 119, 33, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(248, 119, 33, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(248, 119, 33, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(248, 119, 33, 0.15);
  border-top-width: 1px;
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 111, 85, 241;
  border-bottom-color: rgb(111, 85, 241);
  border-left-color: rgb(111, 85, 241);
  border-right-color: rgb(111, 85, 241);
  border-top-color: rgb(111, 85, 241);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(111, 85, 241));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(34, 35, 42);
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
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: var(--text-normal, rgb(34, 35, 42));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--base-50, rgb(228, 231, 241));
  border-bottom-color: rgb(228, 231, 241);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(228, 231, 241);
  border-right-color: rgb(228, 231, 241);
  border-top-color: rgb(228, 231, 241);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 35, 42) none 0px;
  text-decoration-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(219, 223, 240, 0.8));
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(228, 231, 241);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(228, 231, 241);
  border-right-color: rgb(228, 231, 241);
  border-top-color: rgb(228, 231, 241);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 247);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(219, 223, 240, 0.8));
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(219, 223, 240, 0.8));
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(157, 140, 242, 0.1));
  border-bottom-color: rgba(157, 140, 242, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(157, 140, 242, 0.15);
  border-right-color: rgba(157, 140, 242, 0.15);
  border-top-color: rgba(157, 140, 242, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(115, 90, 242);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(159, 146, 221));
  font-family: var(--h1-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(18, 18, 23));
  font-size: var(--inline-title-size, 32px);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(145, 131, 216));
  font-family: var(--h2-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(18, 18, 23));
  font-family: var(--inline-title-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(131, 115, 211));
  font-family: var(--h3-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(119, 102, 204));
  font-family: var(--h4-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(100, 84, 182));
  font-family: var(--h5-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(88, 73, 162));
  font-family: var(--h6-font, "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 111, 85, 241);
  border-bottom-color: rgba(111, 85, 241, 0.15);
  border-bottom-width: 1px;
  border-left-color: rgba(111, 85, 241, 0.15);
  border-left-width: 1px;
  border-right-color: rgba(111, 85, 241, 0.15);
  border-right-width: 1px;
  border-top-color: rgba(111, 85, 241, 0.15);
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(212, 215, 226);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(44, 45, 53));
  cursor: var(--cursor, pointer);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(44, 45, 53));
  cursor: var(--cursor, pointer);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(34, 35, 42);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(44, 45, 53));
  cursor: var(--cursor, pointer);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(242, 243, 247));
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-left-width: 0px;
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  border-top-left-radius: 0px;
  color: var(--status-bar-text-color, rgb(44, 45, 53));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(44, 45, 53);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(34, 35, 42);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(44, 45, 53));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(44, 45, 53));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(44, 45, 53);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(44, 45, 53));
  cursor: var(--cursor, pointer);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(44, 45, 53);
  stroke: rgb(44, 45, 53);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(148, 152, 168));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(34, 35, 42));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(249, 249, 251));
  border-color: rgb(34, 35, 42);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(212, 215, 226);
  color: var(--table-header-color, rgb(34, 35, 42));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(212, 215, 226);
  border-left-color: rgb(212, 215, 226);
  border-right-color: rgb(212, 215, 226);
  border-top-color: rgb(212, 215, 226);
  color: var(--text-muted, rgb(44, 45, 53));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: rgb(44, 45, 53);
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(212, 215, 226);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(44, 45, 53);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(157, 140, 242, 0.1));
  border-radius: 6px;
  color: var(--pill-color, rgb(115, 90, 242));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(44, 45, 53);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(249, 249, 251));
  color: var(--text-normal, rgb(34, 35, 42));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(242, 243, 247));
  border-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(242, 243, 247));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(34, 35, 42);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(242, 243, 247));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(34, 35, 42));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(44, 45, 53);
  border-left-color: rgb(44, 45, 53);
  border-right-color: rgb(44, 45, 53);
  border-top-color: rgb(44, 45, 53);
  color: var(--text-normal, rgb(44, 45, 53));
  font-family: "??", Inter, Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(242, 243, 247));
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
  color: var(--code-normal, rgb(34, 35, 42));
  font-family: var(--font-monospace, "??", "JetBrains Mono", FiraCode, Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(34, 35, 42);
  border-left-color: rgb(34, 35, 42);
  border-right-color: rgb(34, 35, 42);
  border-top-color: rgb(34, 35, 42);
}

html[saved-theme="light"] body sub {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body summary {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body sup {
  color: rgb(34, 35, 42);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(157, 140, 242, 0.1));
  border-bottom-color: rgba(157, 140, 242, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(157, 140, 242, 0.15);
  border-right-color: rgba(157, 140, 242, 0.15);
  border-top-color: rgba(157, 140, 242, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--tag-color, rgb(115, 90, 242));
}`,
  },
  classSettings: {
    "dark-theme-midnight": `.dark-theme-midnight {
--base-05: hsl(var(--base-hue), var(--base-sat, 16%), 90%);
--base-10: hsl(var(--base-hue), var(--base-sat, 14%), 79%);
--base-15: hsl(var(--base-hue), var(--base-sat, 12%), 70%);
--base-20: hsl(var(--base-hue), var(--base-sat, 12%), 60%);
--base-25: hsl(var(--base-hue), var(--base-sat, 10%), 49%);
--base-30: hsl(var(--base-hue), var(--base-sat, 10%), 37%);
--base-35: hsl(var(--base-hue), var(--base-sat, 12%), 26%);
--base-40: hsl(var(--base-hue), var(--base-sat, 13%), 19%);
--base-45: hsl(var(--base-hue), var(--base-sat, 12%), 15%);
--base-50: hsl(var(--base-hue), var(--base-sat, 10%), 12%);
--base-55: hsl(var(--base-hue), var(--base-sat, 8%), 8%);
--base-60: hsl(var(--base-hue), var(--base-sat, 8%), 5%);
--text-accent: hsl(var(--accent-h), 82%, 78%);
--text-accent-hover: hsl(var(--accent-h), 90%, 84%);
}`,
    "headings-color-white": `body.headings-color-white {
--h1-color: initial;
--h2-color: initial;
--h3-color: initial;
--h4-color: initial;
--h5-color: initial;
--h6-color: initial;
}`,
    "headings-color-colorful": `body.headings-color-colorful {
--h1-color: hsl(
    mod(var(--accent-h, 0), 360),
    min(var(--accent-s), 72%),
    min(var(--accent-l), 72%)
  );
--h2-color: hsl(
    mod(calc(var(--accent-h, 0) - 30), 360),
    min(var(--accent-s), 66%),
    min(var(--accent-l), 64%)
  );
--h3-color: hsl(
    mod(calc(var(--accent-h, 0) - 60), 360),
    min(var(--accent-s), 52%),
    min(var(--accent-l), 62%)
  );
--h4-color: hsl(
    mod(calc(var(--accent-h, 0) - 90), 360),
    min(var(--accent-s), 50%),
    min(var(--accent-l), 60%)
  );
--h5-color: hsl(
    mod(calc(var(--accent-h, 0) - 120), 360),
    min(var(--accent-s), 50%),
    min(var(--accent-l), 64%)
  );
--h6-color: hsl(
    mod(calc(var(--accent-h, 0) - 150), 360),
    min(var(--accent-s), 48%),
    min(var(--accent-l), 62%)
  );
}`,
    "accent-affect-bg": `.accent-affect-bg {
--base-hue: var(--accent-h);
}`,
    "neutral-bg": `.neutral-bg {
--base-sat: 0%;
}`,
  },
};
