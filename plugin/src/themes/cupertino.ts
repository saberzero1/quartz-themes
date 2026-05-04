import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cupertino",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-pro-display"],
    styleSettingsId: "cupertino",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anim-duration-fast: calc(160ms*var(--anim-speed-modifier));
  --anim-duration-moderate: calc(320ms*var(--anim-speed-modifier));
  --anim-duration-slow: calc(480ms*var(--anim-speed-modifier));
  --anim-duration-superfast: calc(80ms*var(--anim-speed-modifier));
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1);
  --anim-speed-modifier: 1;
  --background-modifier-border: color-mix(in srgb, var(--background-secondary), var(--text-normal) 15%);
  --background-modifier-border-focus: var(--color-base-40, #77767b);
  --background-modifier-border-hover: var(--color-base-35, #6b6970);
  --background-modifier-cover: rgba(0, 0, 0, 0.35);
  --background-modifier-error: var(--color-red, rgb(224, 27, 36));
  --background-modifier-error-hover: var(--color-red, rgb(224, 27, 36));
  --background-modifier-error-rgb: var(--color-red-rgb, 224, 27, 36);
  --background-modifier-form-field: var(--interactive-normal, color-mix(in srgb, #2e2e32, #fff 10%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, #2e2e32, #fff 10%));
  --background-modifier-success: var(--color-green, rgb(38, 162, 105));
  --background-modifier-success-rgb: var(--color-green-rgb, 38, 162, 105);
  --background-primary: var(--color-base-00, #1d1d20);
  --background-primary-alt: var(--color-base-10, #2e2e32);
  --background-secondary: var(--color-base-20, #2e2e32);
  --background-secondary-alt: var(--color-base-30, #28282c);
  --banner-fade-height: 80px;
  --banner-icon-size: 3rem;
  --banner-image-height: 320px;
  --banner-image-height-s: 240px;
  --banner-image-inset: 8px;
  --banner-image-object-fit: cover;
  --banner-image-radius: var(--radius-s, 9px);
  --banner-mobile-offset: 0px;
  --bases-cards-background: var(--background-primary, #1d1d20);
  --bases-cards-corner-shape: var(--corner-shape, superellipse(1.1));
  --bases-cards-cover-background: var(--background-primary-alt, #2e2e32);
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --bases-embed-border-radius: var(--radius-s, 9px);
  --bases-group-heading-property-color: var(--text-muted, #d2d2d2);
  --bases-group-heading-property-size: var(--font-ui-smaller, 9.02px);
  --bases-table-border-color: var(--table-border-color, color-mix(in srgb, #2e2e32, #fff 15%));
  --bases-table-cell-background-active: var(--background-primary, #1d1d20);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #2e2e32);
  --bases-table-container-border-radius: var(--radius-s, 9px);
  --bases-table-group-background: var(--background-primary-alt, #2e2e32);
  --bases-table-header-background: var(--background-primary, #1d1d20);
  --bases-table-header-color: var(--text-faint, #99999b);
  --bases-table-summary-background: var(--background-primary, #1d1d20);
  --block-width-max: calc(100cqw - var(--file-margins-x)*2);
  --block-width-offset: calc(var(--file-margins-x)*-1);
  --block-width-wide: min(100cqw, var(--line-width-wide));
  --blockquote-background-color: var(--background-primary-alt, #2e2e32);
  --blockquote-border-color: var(--color-base-50, #9a9996);
  --blockquote-size: var(--font-text-size, 16px);
  --bodyFont: var(--font-text-theme, "Adwaita Sans", "Adwaita Sans Text");
  --bold-modifier: 300;
  --button-corner-shape: var(--corner-shape, superellipse(1.1));
  --button-radius: var(--radius-s, 9px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-width: var(--divider-width, 1px);
  --callout-bug: var(--color-red-rgb, 224, 27, 36);
  --callout-default: var(--color-blue-rgb, 53, 132, 228);
  --callout-error: var(--color-red-rgb, 224, 27, 36);
  --callout-example: var(--color-purple-rgb, 145, 65, 172);
  --callout-fail: var(--color-red-rgb, 224, 27, 36);
  --callout-important: var(--color-cyan-rgb, 33, 144, 164);
  --callout-info: var(--color-blue-rgb, 53, 132, 228);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--color-orange-rgb, 230, 97, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 9px);
  --callout-size: var(--font-text-size, 16px);
  --callout-success: var(--color-green-rgb, 38, 162, 105);
  --callout-summary: var(--color-cyan-rgb, 33, 144, 164);
  --callout-tip: var(--color-cyan-rgb, 33, 144, 164);
  --callout-todo: var(--color-blue-rgb, 53, 132, 228);
  --callout-warning: var(--color-orange-rgb, 230, 97, 0);
  --canvas-background: var(--background-primary, #1d1d20);
  --canvas-card-label-color: var(--text-faint, #99999b);
  --canvas-color-1: var(--color-red-rgb, 224, 27, 36);
  --canvas-color-2: var(--color-orange-rgb, 230, 97, 0);
  --canvas-color-3: var(--color-yellow-rgb, 245, 194, 17);
  --canvas-color-4: var(--color-green-rgb, 38, 162, 105);
  --canvas-color-5: var(--color-cyan-rgb, 33, 144, 164);
  --canvas-color-6: var(--color-purple-rgb, 145, 65, 172);
  --canvas-controls-icon-size: var(--icon-s, 16px);
  --canvas-controls-icon-stroke: var(--icon-s-stroke-width, 2px);
  --canvas-controls-radius: var(--radius-s, 9px);
  --canvas-dot-pattern: var(--color-base-30, #5e5c64);
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-background-hover: transparent;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 160px;
  --cards-mobile-width: 120px;
  --cards-padding: 4px;
  --caret-color: var(--text-normal, #fff);
  --checkbox-border-color: var(--text-faint, #99999b);
  --checkbox-border-color-hover: var(--text-muted, #d2d2d2);
  --checkbox-marker-color: var(--background-primary, #1d1d20);
  --checkbox-radius: var(--radius-s, 100px);
  --checklist-done-color: var(--text-muted, #d2d2d2);
  --clickable-icon-radius: var(--radius-s, 9px);
  --code-background: var(--background-primary-alt, #2e2e32);
  --code-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --code-border-width: 1px;
  --code-comment: var(--text-faint, #5c6370);
  --code-function: var(--color-yellow, #d19a66);
  --code-important: var(--color-orange, #d19a66);
  --code-keyword: var(--color-pink, #e16d76);
  --code-normal: var(--text-normal, #abb2bf);
  --code-operator: var(--color-red, rgb(224, 27, 36));
  --code-property: var(--color-cyan, #62afef);
  --code-punctuation: var(--text-muted, #abb2bf);
  --code-radius: var(--radius-s, 9px);
  --code-size: var(--font-smallest, 0.8em);
  --code-string: var(--color-green, #58b6c2);
  --code-tag: var(--color-red, #e16d76);
  --code-value: var(--color-purple, #c678de);
  --collapse-icon-color: var(--text-faint, #99999b);
  --color-base-00: #000000;
  --color-base-05: #121019;
  --color-base-10: #241f31;
  --color-base-100: #ffffff;
  --color-base-20: #3d3846;
  --color-base-25: #4e4a55;
  --color-base-30: #5e5c64;
  --color-base-35: #6b6970;
  --color-base-40: #77767b;
  --color-base-50: #9a9996;
  --color-base-60: #c0bfbc;
  --color-base-70: #e6e5e3;
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 53, 132, 228;
  --color-cyan: rgb(var(--color-cyan-rgb));
  --color-cyan-rgb: 33, 144, 164;
  --color-green: rgb(var(--color-green-rgb));
  --color-green-rgb: 38, 162, 105;
  --color-orange: rgb(var(--color-orange-rgb));
  --color-orange-rgb: 230, 97, 0;
  --color-pink: rgb(var(--color-pink-rgb));
  --color-pink-rgb: 213, 97, 170;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 145, 65, 172;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 224, 27, 36;
  --color-yellow: rgb(var(--color-yellow-rgb));
  --color-yellow-rgb: 245, 194, 17;
  --corner-shape: superellipse(1.1);
  --dark: var(--text-normal, var(--color-base-100, #fff));
  --darkgray: var(--text-normal, var(--color-base-100, #fff));
  --density-modifier: 1;
  --divider-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --divider-color-alt: rgba(0, 0, 6, 0.36);
  --divider-color-hover: var(--color-base-50, #9a9996);
  --dropdown-background: var(--interactive-normal, color-mix(in srgb, #2e2e32, #fff 10%));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in srgb, #2e2e32, #fff 15%));
  --dropdown-padding-end: 2.4em;
  --embed-background: var(--background-primary-alt, #2e2e32);
  --embed-border-start: var(--embed-border-thickness, 2px) solid var(--embed-border-color, var(--color-base-50));
  --embed-max-height: none;
  --file-header-background: var(--background-primary, #1d1d20);
  --file-header-background-focused: var(--background-primary, #1d1d20);
  --file-header-border: var(--border-width, none) solid transparent;
  --file-header-font: var(--font-interface, "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 11px);
  --file-line-width: var(--line-width, 700px);
  --flair-background: var(--interactive-normal, color-mix(in srgb, #2e2e32, #fff 10%));
  --flair-color: var(--text-normal, #fff);
  --font-interface-theme: "Adwaita Sans", "Adwaita Sans Text";
  --font-mermaid: var(--font-text, "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: "Adwaita Sans", "Adwaita Sans Text";
  --font-ui-large: calc(var(--font-ui-medium)*1.36 + var(--font-ui-modifier));
  --font-ui-medium: calc(11px + var(--font-ui-modifier));
  --font-ui-modifier: 0px;
  --font-ui-small: calc(11px + var(--font-ui-modifier));
  --font-ui-smaller: calc(var(--font-ui-medium)*0.82 + var(--font-ui-modifier));
  --footnote-divider-color: var(--metadata-divider-color, color-mix(in srgb, #2e2e32, #fff 15%));
  --footnote-id-color: var(--text-muted, #d2d2d2);
  --footnote-id-color-no-occurrences: var(--text-faint, #99999b);
  --footnote-line-height: var(--line-height-normal, 1.6);
  --footnote-radius: var(--radius-s, 9px);
  --frame-right-space: 124px;
  --graph-node: var(--text-muted, #d2d2d2);
  --graph-node-attachment: var(--color-yellow, rgb(245, 194, 17));
  --graph-node-tag: var(--color-green, rgb(38, 162, 105));
  --graph-node-unresolved: var(--text-faint, #99999b);
  --graph-text: var(--text-normal, #fff);
  --gray: var(--text-muted, var(--color-base-70, #d2d2d2));
  --h1-size: 1.5em;
  --h2-size: 1.25em;
  --h3-size: 1.125em;
  --h4-size: 1em;
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1em;
  --h6-line-height: var(--line-height-normal, 1.6);
  --h6-size: 0.875em;
  --header-height: 48px;
  --headerFont: var(--font-text-theme, "Adwaita Sans", "Adwaita Sans Text");
  --heading-formatting: var(--text-faint, #99999b);
  --hover-sidedock-delay: 160ms;
  --hover-sidedock-trigger-area: 4px;
  --hover-sidedock-width: 320px;
  --hr-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --icon-color: var(--text-muted, #d2d2d2);
  --icon-color-focused: var(--text-normal, #fff);
  --icon-color-hover: var(--text-muted, #d2d2d2);
  --icon-l: calc(18px*var(--radius-modifier));
  --icon-l-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-m: calc(18px*var(--radius-modifier));
  --icon-m-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-opacity: 1;
  --icon-s: calc(16px + var(--icon-size-modifier));
  --icon-s-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-size: var(--icon-m, 18px);
  --icon-size-modifier: 0px;
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --icon-stroke-modifier: 1;
  --icon-xl: calc(32px + var(--icon-size-modifier));
  --icon-xl-stroke-width: calc(1.25px*var(--icon-stroke-modifier));
  --icon-xs: calc(14px + var(--icon-size-modifier));
  --icon-xs-stroke-width: calc(2.25px*var(--icon-stroke-modifier));
  --indentation-guide-width: var(--border-width, 0px);
  --inline-title-margin-bottom: calc(0.5em*var(--readable-spacing-modifier, 1));
  --inline-title-size: var(--h1-size, 1.5em);
  --input-border-width: var(--border-width, 0);
  --input-corner-shape: var(--corner-shape, superellipse(1.1));
  --input-date-separator: var(--text-faint, #99999b);
  --input-font-weight: calc(var(--font-weight) + var(--bold-modifier));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, #99999b);
  --input-radius: var(--radius-s, 9px);
  --input-shadow: inset 0 0 0 var(--input-border-width) var(--background-modifier-border);
  --input-shadow-hover: inset 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --interactive-hover: color-mix(in srgb, var(--background-secondary), var(--text-normal) 15%);
  --interactive-normal: color-mix(in srgb, var(--background-secondary), var(--text-normal) 10%);
  --light: var(--background-primary, var(--color-base-00, #1d1d20));
  --lightgray: var(--background-secondary, var(--color-base-20, #2e2e32));
  --line-height-normal: 1.6;
  --line-width: 700px;
  --line-width-wide: 50rem;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-marker-color: var(--text-faint, #99999b);
  --list-marker-color-hover: var(--text-muted, #d2d2d2);
  --list-spacing: 0.175em;
  --media-radius: var(--radius-s, 9px);
  --menu-background: var(--background-secondary, #36363a);
  --menu-border-color: color-mix(in srgb, var(--background-secondary), var(--text-normal) 10%);
  --menu-corner-shape: var(--corner-shape, superellipse(1.1));
  --menu-radius: var(--radius-m, 12px);
  --menu-shadow: var(--shadow-s, 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03));
  --metadata-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --metadata-divider-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --metadata-gap: 8px;
  --metadata-input-font: var(--font-interface, "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #fff);
  --metadata-label-font: var(--font-interface, "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #d2d2d2);
  --metadata-label-text-color-hover: var(--text-muted, #d2d2d2);
  --metadata-label-width: calc(9em*var(--metadata-label-width-modifier, 1));
  --metadata-property-corner-shape: var(--corner-shape, superellipse(1.1));
  --metadata-property-corner-shape-focus: var(--corner-shape, superellipse(1.1));
  --metadata-property-corner-shape-hover: var(--corner-shape, superellipse(1.1));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 11px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 11px);
  --modal-background: var(--background-primary, #222226);
  --modal-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --modal-radius: var(--radius-l, 15px);
  --mono-rgb-adwaita: 255, 255, 255;
  --nav-collapse-icon-color: var(--collapse-icon-color, #99999b);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #99999b);
  --nav-heading-color: var(--text-normal, #fff);
  --nav-heading-color-collapsed: var(--text-faint, #99999b);
  --nav-heading-color-collapsed-hover: var(--text-muted, #d2d2d2);
  --nav-heading-color-hover: var(--text-normal, #fff);
  --nav-indentation-guide-width: var(--indentation-guide-width, 0px);
  --nav-item-children-margin-start: calc(20px - var(--nav-indentation-guide-width)/2);
  --nav-item-color: var(--text-muted, #d2d2d2);
  --nav-item-color-active: var(--text-normal, #fff);
  --nav-item-color-hover: var(--text-normal, #fff);
  --nav-item-color-selected: var(--text-normal, #fff);
  --nav-item-padding: calc(8px*var(--density-modifier)) 16px calc(8px*var(--density-modifier)) 32px;
  --nav-item-parent-padding: var(--nav-item-padding, 8px 16px 8px 32px);
  --nav-item-radius: var(--radius-s, 9px);
  --nav-item-size: var(--font-ui-small, 11px);
  --nav-tag-color: var(--text-faint, #99999b);
  --nav-tag-color-active: var(--text-muted, #d2d2d2);
  --nav-tag-color-hover: var(--text-muted, #d2d2d2);
  --nav-tag-radius: var(--radius-s, 9px);
  --nn-theme-file-border-radius: var(--radius-m, 12px);
  --nn-theme-file-tag-bg: var(--tag-background, hsla(258, 88%, 66%, 0.1));
  --nn-theme-file-tag-color: var(--tag-color, hsl(255, 89.76%, 75.9%));
  --nn-theme-list-bg: transparent;
  --nn-theme-list-header-bg: transparent;
  --nn-theme-mobile-list-header-link-color: var(--text-normal, #fff);
  --nn-theme-mobile-nav-bg: transparent;
  --nn-theme-mobile-toolbar-button-active-bg: var(--interactive-accent, hsl(258, 88%, 66%));
  --nn-theme-mobile-toolbar-button-active-icon-color: var(--text-on-accent, white);
  --nn-theme-mobile-toolbar-button-icon-color: var(--text-normal, #fff);
  --nn-theme-nav-bg: transparent;
  --nn-theme-nav-header-bg: transparent;
  --nn-theme-navitem-border-radius: var(--radius-m, 12px);
  --nn-theme-navitem-selected-bg: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nn-theme-navitem-selected-inactive-bg: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --p-spacing: 1.75rem;
  --pdf-background: var(--background-primary, #1d1d20);
  --pdf-page-background: var(--background-primary, #1d1d20);
  --pdf-sidebar-background: var(--background-primary, #1d1d20);
  --pill-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --pill-border-color-hover: var(--background-modifier-border-hover, #6b6970);
  --pill-color: var(--text-muted, #d2d2d2);
  --pill-color-hover: var(--text-normal, #fff);
  --pill-color-remove: var(--text-faint, #99999b);
  --prompt-background: var(--background-primary, #1d1d20);
  --prompt-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --prompt-input-height: 64px;
  --radius-l: calc(15px*var(--radius-modifier));
  --radius-m: calc(12px*var(--radius-modifier));
  --radius-modifier: 1;
  --radius-s: calc(9px*var(--radius-modifier));
  --radius-xl: calc(18px*var(--radius-modifier));
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--ribbon-background, transparent);
  --scrollbar-radius: var(--radius-l, 15px);
  --search-clear-button-color: var(--text-muted, #d2d2d2);
  --search-icon-color: var(--text-muted, #d2d2d2);
  --search-result-background: var(--background-primary, #1d1d20);
  --setting-group-heading-color: var(--text-normal, #fff);
  --setting-group-heading-size: var(--font-ui-medium, 11px);
  --setting-group-heading-weight: calc(var(--font-weight) + var(--bold-modifier));
  --setting-items-background: var(--background-primary-alt, #2e2e32);
  --setting-items-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --setting-items-padding: calc(16px*var(--density-modifier)) 16px;
  --setting-items-radius: var(--radius-m, 12px);
  --setting-items-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --shadow-l: 0 0 14px 5px rgba(0, 0, 0, 0.15), 0 0 5px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
  --shadow-s: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(var(--mono-rgb-100), 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #d2d2d2);
  --shiki-code-background: var(--code-background, #2e2e32);
  --shiki-code-block-border-radius: var(--code-radius, 9px);
  --shiki-code-block-spacing: var(--p-spacing, 1.75rem);
  --shiki-code-comment: var(--text-faint, #99999b);
  --shiki-code-function: var(--color-green, rgb(38, 162, 105));
  --shiki-code-important: var(--color-orange, rgb(230, 97, 0));
  --shiki-code-keyword: var(--color-pink, rgb(213, 97, 170));
  --shiki-code-normal: var(--text-muted, #d2d2d2);
  --shiki-code-property: var(--color-cyan, rgb(33, 144, 164));
  --shiki-code-punctuation: var(--text-muted, #d2d2d2);
  --shiki-code-string: var(--color-yellow, rgb(245, 194, 17));
  --shiki-code-value: var(--color-purple, rgb(145, 65, 172));
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --shiki-gutter-text-color: var(--text-faint, #99999b);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #d2d2d2);
  --shiki-highlight-neutral: var(--shiki-code-normal, #d2d2d2);
  --shiki-terminal-dots-color: var(--text-faint, #99999b);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #6b6970);
  --slider-thumb-border-width: var(--border-width, 0);
  --slider-thumb-height: var(--toggle-thumb-height, 20px);
  --slider-thumb-radius: var(--toggle-thumb-radius, 18px);
  --slider-thumb-width: var(--toggle-thumb-width, 20px);
  --slider-thumb-y: -8px;
  --slider-track-background: rgb(from var(--text-normal) r g b / 15%);
  --slider-track-background-active: rgb(from var(--text-normal) r g b / 25%);
  --slider-track-background-hover: rgb(from var(--text-normal) r g b / 20%);
  --slider-track-height: 4px;
  --status-bar-background: var(--background-secondary, #2e2e32);
  --status-bar-border-color: var(--divider-color, color-mix(in srgb, #2e2e32, #fff 15%));
  --status-bar-font-size: var(--font-ui-smaller, 9.02px);
  --status-bar-radius: var(--radius-m, 12px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #d2d2d2);
  --suggestion-background: var(--background-primary, #1d1d20);
  --sync-avatar-color-1: var(--color-red, rgb(224, 27, 36));
  --sync-avatar-color-2: var(--color-orange, rgb(230, 97, 0));
  --sync-avatar-color-3: var(--color-yellow, rgb(245, 194, 17));
  --sync-avatar-color-4: var(--color-green, rgb(38, 162, 105));
  --sync-avatar-color-5: var(--color-cyan, rgb(33, 144, 164));
  --sync-avatar-color-6: var(--color-blue, rgb(53, 132, 228));
  --sync-avatar-color-7: var(--color-purple, rgb(145, 65, 172));
  --sync-avatar-color-8: var(--color-pink, rgb(213, 97, 170));
  --tab-action-width: 32px;
  --tab-background-active: var(--background-primary, #1d1d20);
  --tab-container-background: var(--background-secondary, #2e2e32);
  --tab-curve: calc(var(--tab-radius) + 4px);
  --tab-divider-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --tab-font-size: var(--font-ui-small, 11px);
  --tab-max-width: var(--tab-width, 200px);
  --tab-outline-color: var(--divider-color, color-mix(in srgb, #2e2e32, #fff 15%));
  --tab-radius: var(--radius-s, 9px);
  --tab-radius-active: var(--tab-radius) var(--tab-radius, 9px 9px 0 0) 0 0;
  --tab-stacked-font-size: var(--font-ui-small, 11px);
  --tab-stacked-header-width: var(--header-height, 48px);
  --tab-switcher-background: var(--background-secondary, #2e2e32);
  --tab-switcher-preview-radius: var(--radius-xl, 18px);
  --tab-text-align: left;
  --tab-text-color: var(--text-faint, #99999b);
  --tab-text-color-active: var(--text-muted, #d2d2d2);
  --tab-text-color-focused: var(--text-muted, #d2d2d2);
  --tab-text-color-focused-active: var(--text-normal, #fff);
  --table-add-button-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --table-add-button-border-width: var(--table-border-width, 0);
  --table-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --table-drag-handle-color: var(--text-faint, #99999b);
  --table-header-border-color: var(--table-border-color, transparent);
  --table-header-color: var(--text-normal, #fff);
  --table-header-size: var(--table-text-size, 0.933em);
  --table-text-size: var(--font-small, 0.933em);
  --tag-padding-x: 8px;
  --tag-padding-y: 4px;
  --tag-radius: 8px;
  --tag-weight: var(--font-medium, 500);
  --text-error: var(--color-red, rgb(224, 27, 36));
  --text-faint: var(--color-base-50, #99999b);
  --text-muted: var(--color-base-70, #d2d2d2);
  --text-normal: var(--color-base-100, #fff);
  --text-success: var(--color-green, rgb(38, 162, 105));
  --text-warning: var(--color-orange, rgb(230, 97, 0));
  --titleFont: var(--font-text-theme, "Adwaita Sans", "Adwaita Sans Text");
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, color-mix(in srgb, #2e2e32, #fff 15%));
  --titlebar-border-width: 1px;
  --titlebar-text-color: var(--text-muted, #d2d2d2);
  --titlebar-text-color-focused: var(--text-normal, #fff);
  --toggle-border-width: 3px;
  --toggle-s-border-width: var(--toggle-border-width, 3px);
  --toggle-s-thumb-height: var(--toggle-thumb-height, 20px);
  --toggle-s-thumb-width: var(--toggle-thumb-width, 20px);
  --toggle-s-width: var(--toggle-width, 46px);
  --toggle-thumb-color: color-mix(in srgb, white 80%, var(--background-primary));
  --toggle-thumb-height: 20px;
  --toggle-thumb-width: 20px;
  --toggle-width: 46px;
  --traffic-lights-offset-x: var(--header-height, 48px);
  --traffic-lights-offset-y: var(--header-height, 48px);
  --translucent-dark-opacity: 0%;
  --translucent-light-opacity: 0%;
  --vault-profile-color: var(--text-normal, #fff);
  --vault-profile-color-hover: var(--vault-profile-color, #fff);
  --vault-profile-font-size: var(--font-ui-small, 11px);
  --view-top-spacing-markdown: 0px;
  --workspace-background-translucent: rgb(from var(--background-secondary) r g b / var(--translucent-dark-opacity));
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #2e2e32);
  --metadata-property-radius: var(--radius-m, 12px);
  --metadata-property-radius-focus: var(--radius-m, 12px);
  --metadata-property-radius-hover: var(--radius-m, 12px);
  background-color: var(--background-secondary, rgb(46, 46, 50));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(29, 29, 32));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 6, 0.36);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #2e2e32);
  --metadata-property-radius: var(--radius-m, 12px);
  --metadata-property-radius-focus: var(--radius-m, 12px);
  --metadata-property-radius-hover: var(--radius-m, 12px);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 6, 0.36);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(255, 255, 255));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(255, 255, 255));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(255, 255, 255));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgb(255, 255, 255));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(255, 255, 255));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-highlight, var(--text-normal));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-medium, 500);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body footer {
  --status-bar-border-width: var(--border-width, 1px);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 155);
  border-radius: 100px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(210, 210, 210));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(210, 210, 210) none 0px;
  text-decoration-color: rgb(210, 210, 210);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
  padding-bottom: var(--list-spacing, 2.8px);
  padding-top: var(--list-spacing, 2.8px);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
  padding-bottom: var(--list-spacing, 2.8px);
  padding-top: var(--list-spacing, 2.8px);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(153, 153, 155));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(46, 46, 50));
  color: var(--blockquote-color, rgb(255, 255, 255));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 25.6px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="dark"] body tbody {
  background-color: rgb(46, 46, 50);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  color: var(--table-text-color, rgb(255, 255, 255));
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: var(--table-text-align-body, start);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: var(--table-text-align-header, start);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(46, 46, 50));
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-width: 1px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-width: 1px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: var(--code-normal, rgb(171, 178, 191));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(46, 46, 50));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #2e2e32);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-radius: 9px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-radius: 9px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(46, 46, 50));
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-radius: 9px;
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: var(--text-muted, rgb(210, 210, 210));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, rgb(46, 46, 50));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-radius: 0px 9px 9px 0px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgb(46, 46, 50));
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 155);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(153, 153, 155);
  border-right-color: rgb(153, 153, 155);
  border-top-color: rgb(153, 153, 155);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(210, 210, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(210, 210, 210);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(153, 153, 155);
  text-decoration: line-through;
  text-decoration-color: rgb(153, 153, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M6.025 9.121c-.595 0-.966.313-.966.86 0 .537.39.84.966.84h7.891c.566 0 .947-.303.947-.84 0-.547-.361-.86-.947-.86h-7.89Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M6.025 9.121c-.595 0-.966.313-.966.86 0 .537.39.84.966.84h7.891c.566 0 .947-.303.947-.84 0-.547-.361-.86-.947-.86h-7.89Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.867 14.004c0 .576.508 1.045 1.094 1.045.586 0 1.094-.46 1.094-1.045 0-.586-.498-1.055-1.094-1.055-.596 0-1.094.479-1.094 1.055Zm.166-8.35.127 5.323c.01.517.293.8.8.8.49 0 .772-.273.782-.8l.137-5.313c.01-.518-.39-.898-.928-.898-.547 0-.928.37-.918.888Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.867 14.004c0 .576.508 1.045 1.094 1.045.586 0 1.094-.46 1.094-1.045 0-.586-.498-1.055-1.094-1.055-.596 0-1.094.479-1.094 1.055Zm.166-8.35.127 5.323c.01.517.293.8.8.8.49 0 .772-.273.782-.8l.137-5.313c.01-.518-.39-.898-.928-.898-.547 0-.928.37-.918.888Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.643 14.004c0 .576.507 1.045 1.093 1.045s1.094-.46 1.094-1.045c0-.586-.498-1.055-1.094-1.055-.595 0-1.093.479-1.093 1.055ZM6.924 6.553a1.665 1.665 0 0 0-.088.498c0 .449.361.693.693.693.342 0 .567-.166.752-.4l.176-.244c.361-.586.879-.918 1.553-.918.908 0 1.504.517 1.504 1.279 0 .684-.42 1.016-1.3 1.63-.722.509-1.269 1.036-1.269 2.032v.127c0 .527.293.8.81.8.509 0 .821-.322.821-.722v-.117c0-.566.322-.928 1.026-1.387.976-.644 1.68-1.23 1.68-2.441 0-1.68-1.495-2.569-3.214-2.569-1.738 0-2.87.811-3.144 1.739Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.643 14.004c0 .576.507 1.045 1.093 1.045s1.094-.46 1.094-1.045c0-.586-.498-1.055-1.094-1.055-.595 0-1.093.479-1.093 1.055ZM6.924 6.553a1.665 1.665 0 0 0-.088.498c0 .449.361.693.693.693.342 0 .567-.166.752-.4l.176-.244c.361-.586.879-.918 1.553-.918.908 0 1.504.517 1.504 1.279 0 .684-.42 1.016-1.3 1.63-.722.509-1.269 1.036-1.269 2.032v.127c0 .527.293.8.81.8.509 0 .821-.322.821-.722v-.117c0-.566.322-.928 1.026-1.387.976-.644 1.68-1.23 1.68-2.441 0-1.68-1.495-2.569-3.214-2.569-1.738 0-2.87.811-3.144 1.739Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 97, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M21.523 4.473v7.48c0 2.861-1.562 4.463-4.472 4.463h-6.602l-3.525 3.223c-.46.43-.742.625-1.123.625-.557 0-.87-.4-.87-1.006v-2.842h-.458C1.563 16.416 0 14.824 0 11.953v-7.48C0 1.602 1.563 0 4.473 0H17.05c2.91 0 4.472 1.611 4.472 4.473ZM5.898 7.148c0 1.143.713 2.032 1.856 2.032.42 0 .84-.069 1.103-.4h.079a2.863 2.863 0 0 1-1.797 1.542c-.381.098-.489.254-.489.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.879-2.413-2.187-2.413-1.211 0-2.12.84-2.12 2.041Zm5.44 0c0 1.143.713 2.032 1.846 2.032.43 0 .85-.069 1.113-.4h.078a2.855 2.855 0 0 1-1.807 1.542c-.361.098-.478.254-.478.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.89-2.413-2.198-2.413-1.21 0-2.11.84-2.11 2.041Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M21.523 4.473v7.48c0 2.861-1.562 4.463-4.472 4.463h-6.602l-3.525 3.223c-.46.43-.742.625-1.123.625-.557 0-.87-.4-.87-1.006v-2.842h-.458C1.563 16.416 0 14.824 0 11.953v-7.48C0 1.602 1.563 0 4.473 0H17.05c2.91 0 4.472 1.611 4.472 4.473ZM5.898 7.148c0 1.143.713 2.032 1.856 2.032.42 0 .84-.069 1.103-.4h.079a2.863 2.863 0 0 1-1.797 1.542c-.381.098-.489.254-.489.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.879-2.413-2.187-2.413-1.211 0-2.12.84-2.12 2.041Zm5.44 0c0 1.143.713 2.032 1.846 2.032.43 0 .85-.069 1.113-.4h.078a2.855 2.855 0 0 1-1.807 1.542c-.361.098-.478.254-.478.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.89-2.413-2.198-2.413-1.21 0-2.11.84-2.11 2.041Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(145, 65, 172);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M4.161 20.547c.4.312.908.205 1.514-.235l5.166-3.798 5.176 3.799c.605.439 1.103.546 1.513.234.4-.303.488-.8.244-1.514l-2.04-6.074 5.214-3.75c.606-.43.85-.879.694-1.367-.157-.469-.616-.694-1.368-.694h-6.396l-1.944-6.064C11.7.361 11.35 0 10.841 0c-.498 0-.85.361-1.084 1.084L7.813 7.148H1.417c-.752 0-1.211.225-1.367.694-.166.488.088.937.693 1.367l5.215 3.75-2.041 6.074c-.244.713-.156 1.211.244 1.514Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M4.161 20.547c.4.312.908.205 1.514-.235l5.166-3.798 5.176 3.799c.605.439 1.103.546 1.513.234.4-.303.488-.8.244-1.514l-2.04-6.074 5.214-3.75c.606-.43.85-.879.694-1.367-.157-.469-.616-.694-1.368-.694h-6.396l-1.944-6.064C11.7.361 11.35 0 10.841 0c-.498 0-.85.361-1.084 1.084L7.813 7.148H1.417c-.752 0-1.211.225-1.367.694-.166.488.088.937.693 1.367l5.215 3.75-2.041 6.074c-.244.713-.156 1.211.244 1.514Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 194, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3e%3cpath fill='black' d='M8.154 5.172v2.963H5.192c-.509 0-.86.352-.86.86 0 .499.351.831.86.831h2.962V12.8c0 .498.342.86.841.86.509 0 .86-.352.86-.86V9.826h2.973c.498 0 .86-.332.86-.83 0-.51-.362-.861-.86-.861H9.856V5.172c0-.508-.352-.87-.86-.87-.5 0-.842.362-.842.87Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3e%3cpath fill='black' d='M8.154 5.172v2.963H5.192c-.509 0-.86.352-.86.86 0 .499.351.831.86.831h2.962V12.8c0 .498.342.86.841.86.509 0 .86-.352.86-.86V9.826h2.973c.498 0 .86-.332.86-.83 0-.51-.362-.861-.86-.861H9.856V5.172c0-.508-.352-.87-.86-.87-.5 0-.842.362-.842.87Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='18' fill='none' viewBox='0 0 20 18'%3e%3cpath fill='black' d='M3.066 17.979h13.34c2.041 0 3.057-1.016 3.057-3.028V3.027C19.463 1.016 18.447 0 16.406 0H3.066C1.026 0 0 1.006 0 3.027v11.924c0 2.022 1.025 3.027 3.066 3.027Zm-.146-1.573c-.87 0-1.348-.459-1.348-1.367V5.83c0-.898.479-1.367 1.348-1.367h13.613c.87 0 1.358.469 1.358 1.367v9.21c0 .907-.489 1.366-1.358 1.366H2.92ZM7.832 7.97h.576c.342 0 .45-.098.45-.44v-.576c0-.342-.108-.45-.45-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.341 0-.449.108-.449.45v.576c0 .342.108.44.45.44ZM4.59 11.162h.566c.352 0 .46-.098.46-.44v-.575c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .341.108.44.46.44Zm3.242 0h.576c.342 0 .45-.098.45-.44v-.575c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.341 0-.449.098-.449.44v.576c0 .341.108.44.45.44ZM4.59 14.365h.566c.352 0 .46-.107.46-.449v-.576c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .342.108.45.46.45Zm3.242 0h.576c.342 0 .45-.107.45-.449v-.576c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.459.45Zm3.242 0h.576c.342 0 .46-.107.46-.449v-.576c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.46.45Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='18' fill='none' viewBox='0 0 20 18'%3e%3cpath fill='black' d='M3.066 17.979h13.34c2.041 0 3.057-1.016 3.057-3.028V3.027C19.463 1.016 18.447 0 16.406 0H3.066C1.026 0 0 1.006 0 3.027v11.924c0 2.022 1.025 3.027 3.066 3.027Zm-.146-1.573c-.87 0-1.348-.459-1.348-1.367V5.83c0-.898.479-1.367 1.348-1.367h13.613c.87 0 1.358.469 1.358 1.367v9.21c0 .907-.489 1.366-1.358 1.366H2.92ZM7.832 7.97h.576c.342 0 .45-.098.45-.44v-.576c0-.342-.108-.45-.45-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.341 0-.449.108-.449.45v.576c0 .342.108.44.45.44ZM4.59 11.162h.566c.352 0 .46-.098.46-.44v-.575c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .341.108.44.46.44Zm3.242 0h.576c.342 0 .45-.098.45-.44v-.575c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.341 0-.449.098-.449.44v.576c0 .341.108.44.45.44ZM4.59 14.365h.566c.352 0 .46-.107.46-.449v-.576c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .342.108.45.46.45Zm3.242 0h.576c.342 0 .45-.107.45-.449v-.576c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.459.45Zm3.242 0h.576c.342 0 .46-.107.46-.449v-.576c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.46.45Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 132, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cpath fill='black' d='M11.533 0c.479 0 .801.205 1.319.693L20.557 7.9c.38.362.498.723.498 1.055 0 .322-.127.693-.498 1.045l-7.705 7.275c-.47.44-.86.635-1.338.635-.664 0-1.153-.488-1.153-1.142v-3.73h-.283c-3.78 0-6.172.956-7.871 4.15-.342.625-.791.722-1.201.722C.479 17.91 0 17.441 0 16.602c0-7.217 3.057-11.72 10.078-11.72h.283v-3.69C10.361.536 10.85 0 11.533 0Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cpath fill='black' d='M11.533 0c.479 0 .801.205 1.319.693L20.557 7.9c.38.362.498.723.498 1.055 0 .322-.127.693-.498 1.045l-7.705 7.275c-.47.44-.86.635-1.338.635-.664 0-1.153-.488-1.153-1.142v-3.73h-.283c-3.78 0-6.172.956-7.871 4.15-.342.625-.791.722-1.201.722C.479 17.91 0 17.441 0 16.602c0-7.217 3.057-11.72 10.078-11.72h.283v-3.69C10.361.536 10.85 0 11.533 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 144, 164);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M9.336 20.254a9.336 9.336 0 0 0 9.336-9.336c0-5.156-4.18-9.346-9.336-9.346C4.18 1.572 0 5.762 0 10.918a9.336 9.336 0 0 0 9.336 9.336Zm-4.443-8.262a.663.663 0 0 1-.674-.674c0-.38.293-.683.674-.683h3.76V5.4a.68.68 0 1 1 1.357 0v5.918a.672.672 0 0 1-.684.674H4.893Zm-3.575-7.91c.147 0 .254-.02.391-.127l3.271-2.47c.157-.118.245-.274.245-.44 0-.205-.098-.371-.264-.527C4.59.186 3.926 0 3.34 0A2.734 2.734 0 0 0 .596 2.744c0 .361.058.723.166.947.107.245.312.391.556.391Zm16.035 0c.245 0 .45-.156.567-.39.098-.215.156-.587.156-.948A2.728 2.728 0 0 0 15.332 0c-.586 0-1.25.186-1.621.518-.166.156-.264.322-.264.527 0 .166.088.322.254.44l3.262 2.47a.568.568 0 0 0 .39.127ZM1.172 19.971a.74.74 0 0 0 1.074-.01l1.846-1.836-1.055-1.045-1.855 1.836a.743.743 0 0 0-.01 1.055Zm16.328 0a.734.734 0 0 0-.01-1.055l-1.855-1.836-1.045 1.045 1.836 1.836a.74.74 0 0 0 1.074.01Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.033v21.924H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M9.336 20.254a9.336 9.336 0 0 0 9.336-9.336c0-5.156-4.18-9.346-9.336-9.346C4.18 1.572 0 5.762 0 10.918a9.336 9.336 0 0 0 9.336 9.336Zm-4.443-8.262a.663.663 0 0 1-.674-.674c0-.38.293-.683.674-.683h3.76V5.4a.68.68 0 1 1 1.357 0v5.918a.672.672 0 0 1-.684.674H4.893Zm-3.575-7.91c.147 0 .254-.02.391-.127l3.271-2.47c.157-.118.245-.274.245-.44 0-.205-.098-.371-.264-.527C4.59.186 3.926 0 3.34 0A2.734 2.734 0 0 0 .596 2.744c0 .361.058.723.166.947.107.245.312.391.556.391Zm16.035 0c.245 0 .45-.156.567-.39.098-.215.156-.587.156-.948A2.728 2.728 0 0 0 15.332 0c-.586 0-1.25.186-1.621.518-.166.156-.264.322-.264.527 0 .166.088.322.254.44l3.262 2.47a.568.568 0 0 0 .39.127ZM1.172 19.971a.74.74 0 0 0 1.074-.01l1.846-1.836-1.055-1.045-1.855 1.836a.743.743 0 0 0-.01 1.055Zm16.328 0a.734.734 0 0 0-.01-1.055l-1.855-1.836-1.045 1.045 1.836 1.836a.74.74 0 0 0 1.074.01Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.033v21.924H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 97, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='21' fill='none' viewBox='0 0 14 21'%3e%3cpath fill='black' d='M1.035 20.947c.479 0 .762-.273 1.64-1.123l3.82-3.76c.048-.048.136-.048.175 0l3.818 3.76c.88.85 1.162 1.123 1.64 1.123.655 0 1.036-.43 1.036-1.191V2.803C13.164.947 12.236 0 10.4 0H2.764C.928 0 0 .947 0 2.803v16.953c0 .762.38 1.191 1.035 1.191Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='21' fill='none' viewBox='0 0 14 21'%3e%3cpath fill='black' d='M1.035 20.947c.479 0 .762-.273 1.64-1.123l3.82-3.76c.048-.048.136-.048.175 0l3.818 3.76c.88.85 1.162 1.123 1.64 1.123.655 0 1.036-.43 1.036-1.191V2.803C13.164.947 12.236 0 10.4 0H2.764C.928 0 0 .947 0 2.803v16.953c0 .762.38 1.191 1.035 1.191Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 97, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' fill='none' viewBox='0 0 22 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M14.023 19.365a3.261 3.261 0 0 0 3.262-3.261 3.263 3.263 0 0 0-3.262-3.272 3.263 3.263 0 0 0-3.261 3.271 3.261 3.261 0 0 0 3.261 3.262Zm-7.177 0a3.261 3.261 0 0 0 3.261-3.261 3.263 3.263 0 0 0-3.261-3.272 3.263 3.263 0 0 0-3.262 3.271 3.261 3.261 0 0 0 3.262 3.262Zm10.761-6.425a3.255 3.255 0 0 0 3.262-3.262 3.255 3.255 0 0 0-3.262-3.262 3.263 3.263 0 0 0-3.271 3.262 3.263 3.263 0 0 0 3.271 3.261Zm-14.345 0a3.263 3.263 0 0 0 3.271-3.262 3.263 3.263 0 0 0-3.271-3.262 3.261 3.261 0 1 0 0 6.524Zm10.761-6.417a3.255 3.255 0 0 0 3.262-3.261A3.255 3.255 0 0 0 14.023 0a3.255 3.255 0 0 0-3.261 3.262 3.255 3.255 0 0 0 3.261 3.261Zm-7.177 0a3.255 3.255 0 0 0 3.261-3.261A3.255 3.255 0 0 0 6.846 0a3.255 3.255 0 0 0-3.262 3.262 3.255 3.255 0 0 0 3.262 3.261Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.23v19.365H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' fill='none' viewBox='0 0 22 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M14.023 19.365a3.261 3.261 0 0 0 3.262-3.261 3.263 3.263 0 0 0-3.262-3.272 3.263 3.263 0 0 0-3.261 3.271 3.261 3.261 0 0 0 3.261 3.262Zm-7.177 0a3.261 3.261 0 0 0 3.261-3.261 3.263 3.263 0 0 0-3.261-3.272 3.263 3.263 0 0 0-3.262 3.271 3.261 3.261 0 0 0 3.262 3.262Zm10.761-6.425a3.255 3.255 0 0 0 3.262-3.262 3.255 3.255 0 0 0-3.262-3.262 3.263 3.263 0 0 0-3.271 3.262 3.263 3.263 0 0 0 3.271 3.261Zm-14.345 0a3.263 3.263 0 0 0 3.271-3.262 3.263 3.263 0 0 0-3.271-3.262 3.261 3.261 0 1 0 0 6.524Zm10.761-6.417a3.255 3.255 0 0 0 3.262-3.261A3.255 3.255 0 0 0 14.023 0a3.255 3.255 0 0 0-3.261 3.262 3.255 3.255 0 0 0 3.261 3.261Zm-7.177 0a3.255 3.255 0 0 0 3.261-3.261A3.255 3.255 0 0 0 6.846 0a3.255 3.255 0 0 0-3.262 3.262 3.255 3.255 0 0 0 3.262 3.261Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.23v19.365H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 97, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M19.238 6.24c0-2.89-1.816-5.312-4.228-5.312h-1.72c1.758 1.28 2.54 3.213 2.5 5.41-.03 2.442-.976 4.19-1.826 5.245h1.406c2.178 0 3.867-2.344 3.867-5.342Zm-4.756.07C14.541 2.744 11.65.05 7.11.01L5.791 0c-1.27-.01-2.207.09-2.734.236-.762.185-1.494.644-1.494 1.571 0 .371.097.655.214.86.078.117.069.224-.058.273-.596.244-1.104.82-1.104 1.582 0 .45.127.83.352 1.104.107.146.088.273-.088.38-.44.254-.752.801-.752 1.436 0 .46.146.938.4 1.172.166.137.137.234-.029.38C.195 9.25 0 9.689 0 10.245a1.69 1.69 0 0 0 1.7 1.71h3.437c.869 0 1.445.449 1.445 1.172 0 1.299-1.621 3.691-1.621 5.41 0 .918.576 1.445 1.348 1.445.693 0 1.035-.478 1.406-1.21 1.455-2.823 3.389-5.108 4.863-7.071 1.25-1.66 1.865-3.086 1.904-5.39Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M19.238 6.24c0-2.89-1.816-5.312-4.228-5.312h-1.72c1.758 1.28 2.54 3.213 2.5 5.41-.03 2.442-.976 4.19-1.826 5.245h1.406c2.178 0 3.867-2.344 3.867-5.342Zm-4.756.07C14.541 2.744 11.65.05 7.11.01L5.791 0c-1.27-.01-2.207.09-2.734.236-.762.185-1.494.644-1.494 1.571 0 .371.097.655.214.86.078.117.069.224-.058.273-.596.244-1.104.82-1.104 1.582 0 .45.127.83.352 1.104.107.146.088.273-.088.38-.44.254-.752.801-.752 1.436 0 .46.146.938.4 1.172.166.137.137.234-.029.38C.195 9.25 0 9.689 0 10.245a1.69 1.69 0 0 0 1.7 1.71h3.437c.869 0 1.445.449 1.445 1.172 0 1.299-1.621 3.691-1.621 5.41 0 .918.576 1.445 1.348 1.445.693 0 1.035-.478 1.406-1.21 1.455-2.823 3.389-5.108 4.863-7.071 1.25-1.66 1.865-3.086 1.904-5.39Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M7.402 18.447a.885.885 0 0 0 .655-.293l6.484-6.494a.879.879 0 0 0 .264-.635c0-.478-.352-.85-.84-.85a.863.863 0 0 0-.615.235l-2.227 2.188-3.73 4.082-3.711-4.082-2.227-2.188c-.146-.156-.38-.234-.615-.234-.488 0-.84.37-.84.85 0 .234.088.439.273.634l6.475 6.494c.186.196.41.293.654.293Zm0-1.045c.46 0 .772-.312.772-.771l.097-2.91V.859c0-.507-.36-.859-.869-.859-.507 0-.869.352-.869.86v12.86l.098 2.91c0 .46.312.772.771.772Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M7.402 18.447a.885.885 0 0 0 .655-.293l6.484-6.494a.879.879 0 0 0 .264-.635c0-.478-.352-.85-.84-.85a.863.863 0 0 0-.615.235l-2.227 2.188-3.73 4.082-3.711-4.082-2.227-2.188c-.146-.156-.38-.234-.615-.234-.488 0-.84.37-.84.85 0 .234.088.439.273.634l6.475 6.494c.186.196.41.293.654.293Zm0-1.045c.46 0 .772-.312.772-.771l.097-2.91V.859c0-.507-.36-.859-.869-.859-.507 0-.869.352-.869.86v12.86l.098 2.91c0 .46.312.772.771.772Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 132, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='17' height='22' fill='none' viewBox='0 0 17 22'%3e%3cpath fill='black' d='M7.676 21.123c5.156 0 8.594-3.486 8.594-8.74C16.27 3.643 8.828 0 3.662 0c-.918 0-1.504.322-1.504.947 0 .244.108.498.313.733 1.162 1.386 2.324 3.037 2.343 4.96 0 .44-.048.83-.36 1.378l.487-.098c-.439-1.436-1.62-2.451-2.656-2.451-.4 0-.674.293-.674.732 0 .254.069.85.069 1.28C1.68 9.667 0 10.946 0 14.472c0 3.994 3.057 6.65 7.676 6.65Zm.224-2.744c-1.826 0-3.037-1.104-3.037-2.744 0-1.719 1.221-2.334 1.377-3.438.02-.088.078-.117.147-.058.449.4.742.888.986 1.455.518-.703.762-2.188.596-3.79-.01-.087.049-.136.136-.107 2.14 1.006 3.252 3.135 3.252 5.04 0 1.933-1.132 3.642-3.457 3.642Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='17' height='22' fill='none' viewBox='0 0 17 22'%3e%3cpath fill='black' d='M7.676 21.123c5.156 0 8.594-3.486 8.594-8.74C16.27 3.643 8.828 0 3.662 0c-.918 0-1.504.322-1.504.947 0 .244.108.498.313.733 1.162 1.386 2.324 3.037 2.343 4.96 0 .44-.048.83-.36 1.378l.487-.098c-.439-1.436-1.62-2.451-2.656-2.451-.4 0-.674.293-.674.732 0 .254.069.85.069 1.28C1.68 9.667 0 10.946 0 14.472c0 3.994 3.057 6.65 7.676 6.65Zm.224-2.744c-1.826 0-3.037-1.104-3.037-2.744 0-1.719 1.221-2.334 1.377-3.438.02-.088.078-.117.147-.058.449.4.742.888.986 1.455.518-.703.762-2.188.596-3.79-.01-.087.049-.136.136-.107 2.14 1.006 3.252 3.135 3.252 5.04 0 1.933-1.132 3.642-3.457 3.642Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 97, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.37 8.154a.721.721 0 0 0-.733.713c0 .42.322.723.732.723h1.074v4.59h-1.24a.724.724 0 0 0-.742.713c0 .42.322.722.742.722h4.092c.42 0 .742-.303.742-.722a.724.724 0 0 0-.742-.713h-1.24V9.072c0-.547-.274-.918-.791-.918H8.369Zm.185-2.988c0 .742.586 1.328 1.318 1.328.732 0 1.309-.586 1.309-1.328 0-.742-.577-1.328-1.309-1.328s-1.318.586-1.318 1.328Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.37 8.154a.721.721 0 0 0-.733.713c0 .42.322.723.732.723h1.074v4.59h-1.24a.724.724 0 0 0-.742.713c0 .42.322.722.742.722h4.092c.42 0 .742-.303.742-.722a.724.724 0 0 0-.742-.713h-1.24V9.072c0-.547-.274-.918-.791-.918H8.369Zm.185-2.988c0 .742.586 1.328 1.318 1.328.732 0 1.309-.586 1.309-1.328 0-.742-.577-1.328-1.309-1.328s-1.318.586-1.318 1.328Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 132, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='22' fill='none' viewBox='0 0 21 22'%3e%3cpath fill='black' d='M4.346 12.48c-.215 0-.362.137-.381.362-.371 3.017-.518 3.095-3.574 3.594-.254.029-.391.156-.391.38 0 .215.137.342.342.372 3.086.595 3.252.576 3.623 3.584.02.234.166.37.38.37.206 0 .362-.136.382-.36.39-3.057.507-3.145 3.613-3.595.195-.019.342-.156.342-.37 0-.215-.147-.352-.342-.381-3.106-.596-3.213-.596-3.613-3.614a.367.367 0 0 0-.381-.341ZM11.982 0c-.283 0-.507.205-.546.508-.85 6.181-1.7 7.002-7.793 7.812-.313.03-.538.254-.538.547 0 .303.225.537.538.567 6.113.664 6.992 1.62 7.792 7.793.04.302.264.517.547.517.293 0 .508-.215.557-.517.81-6.172 1.68-7.13 7.793-7.793a.552.552 0 0 0 .527-.567c0-.293-.205-.517-.527-.547-6.113-.683-6.982-1.63-7.793-7.812C12.49.205 12.275 0 11.982 0Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='22' fill='none' viewBox='0 0 21 22'%3e%3cpath fill='black' d='M4.346 12.48c-.215 0-.362.137-.381.362-.371 3.017-.518 3.095-3.574 3.594-.254.029-.391.156-.391.38 0 .215.137.342.342.372 3.086.595 3.252.576 3.623 3.584.02.234.166.37.38.37.206 0 .362-.136.382-.36.39-3.057.507-3.145 3.613-3.595.195-.019.342-.156.342-.37 0-.215-.147-.352-.342-.381-3.106-.596-3.213-.596-3.613-3.614a.367.367 0 0 0-.381-.341ZM11.982 0c-.283 0-.507.205-.546.508-.85 6.181-1.7 7.002-7.793 7.812-.313.03-.538.254-.538.547 0 .303.225.537.538.567 6.113.664 6.992 1.62 7.792 7.793.04.302.264.517.547.517.293 0 .508-.215.557-.517.81-6.172 1.68-7.13 7.793-7.793a.552.552 0 0 0 .527-.567c0-.293-.205-.517-.527-.547-6.113-.683-6.982-1.63-7.793-7.812C12.49.205 12.275 0 11.982 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 194, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='25' fill='none' viewBox='0 0 13 25'%3e%3cpath fill='black' d='M6.24 0C2.764 0 0 2.764 0 6.22c0 2.608 1.563 4.913 4.004 5.84v9.64a.83.83 0 0 0 .254.614l1.63 1.641c.167.166.499.215.704.01l3.096-3.096a.487.487 0 0 0 0-.703l-1.924-1.895 2.636-2.627c.186-.195.186-.478-.02-.693l-2.607-2.627c3.018-1.201 4.698-3.428 4.698-6.103A6.22 6.22 0 0 0 6.24 0Zm0 5.723c-.908 0-1.63-.733-1.63-1.631 0-.908.712-1.631 1.63-1.631.899 0 1.631.723 1.631 1.63 0 .9-.732 1.632-1.63 1.632Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='25' fill='none' viewBox='0 0 13 25'%3e%3cpath fill='black' d='M6.24 0C2.764 0 0 2.764 0 6.22c0 2.608 1.563 4.913 4.004 5.84v9.64a.83.83 0 0 0 .254.614l1.63 1.641c.167.166.499.215.704.01l3.096-3.096a.487.487 0 0 0 0-.703l-1.924-1.895 2.636-2.627c.186-.195.186-.478-.02-.693l-2.607-2.627c3.018-1.201 4.698-3.428 4.698-6.103A6.22 6.22 0 0 0 6.24 0Zm0 5.723c-.908 0-1.63-.733-1.63-1.631 0-.908.712-1.631 1.63-1.631.899 0 1.631.723 1.631 1.63 0 .9-.732 1.632-1.63 1.632Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 194, 17);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='21' fill='none' viewBox='0 0 8 21'%3e%3cpath fill='black' d='M7.334 3.682A3.65 3.65 0 0 1 4.57 7.236V16.3c0 2.89-.508 4.453-.908 4.453-.39 0-.908-1.572-.908-4.453V7.236A3.65 3.65 0 0 1 0 3.682C0 1.66 1.63 0 3.662 0a3.676 3.676 0 0 1 3.672 3.682ZM1.357 2.617c0 .684.586 1.27 1.26 1.27.684 0 1.25-.586 1.25-1.27 0-.674-.566-1.25-1.25-1.25-.674 0-1.26.576-1.26 1.25Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='21' fill='none' viewBox='0 0 8 21'%3e%3cpath fill='black' d='M7.334 3.682A3.65 3.65 0 0 1 4.57 7.236V16.3c0 2.89-.508 4.453-.908 4.453-.39 0-.908-1.572-.908-4.453V7.236A3.65 3.65 0 0 1 0 3.682C0 1.66 1.63 0 3.662 0a3.676 3.676 0 0 1 3.672 3.682ZM1.357 2.617c0 .684.586 1.27 1.26 1.27.684 0 1.25-.586 1.25-1.27 0-.674-.566-1.25-1.25-1.25-.674 0-1.26.576-1.26 1.25Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 27, 36);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' fill='none' viewBox='0 0 20 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M9.697 18.525c.205 0 .498-.136.713-.263 5.498-3.516 8.985-7.608 8.985-11.768 0-3.457-2.373-5.898-5.44-5.898-1.904 0-3.37 1.054-4.258 2.666C8.828 1.66 7.344.596 5.44.596 2.373.596 0 3.037 0 6.494c0 4.16 3.486 8.252 8.994 11.768.205.127.498.263.703.263Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.756v18.525H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' fill='none' viewBox='0 0 20 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M9.697 18.525c.205 0 .498-.136.713-.263 5.498-3.516 8.985-7.608 8.985-11.768 0-3.457-2.373-5.898-5.44-5.898-1.904 0-3.37 1.054-4.258 2.666C8.828 1.66 7.344.596 5.44.596 2.373.596 0 3.037 0 6.494c0 4.16 3.486 8.252 8.994 11.768.205.127.498.263.703.263Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.756v18.525H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 97, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M2.668 14.63 13.322 3.985l-1.709-1.719L.95 12.911l-.928 2.178c-.097.234.157.508.391.41l2.256-.87ZM14.182 3.145l.986-.966c.498-.499.527-1.036.078-1.485l-.332-.332c-.44-.44-.976-.4-1.475.088l-.986.977 1.729 1.718Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h15.932v15.52H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M2.668 14.63 13.322 3.985l-1.709-1.719L.95 12.911l-.928 2.178c-.097.234.157.508.391.41l2.256-.87ZM14.182 3.145l.986-.966c.498-.499.527-1.036.078-1.485l-.332-.332c-.44-.44-.976-.4-1.475.088l-.986.977 1.729 1.718Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h15.932v15.52H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(53, 132, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M0 13.74c0 2.89 1.807 5.313 4.229 5.313h1.718c-1.758-1.28-2.48-3.213-2.48-5.41.01-2.442.957-4.19 1.797-5.245H3.867C1.69 8.398 0 10.742 0 13.74Zm4.814-.078c0 3.565 2.784 6.318 7.325 6.318h1.328c1.26 0 2.197-.087 2.724-.234.762-.185 1.495-.654 1.495-1.572 0-.381-.098-.654-.215-.86-.078-.127-.059-.224.058-.273.606-.254 1.104-.82 1.104-1.592 0-.44-.127-.83-.342-1.094-.107-.146-.098-.283.088-.38.43-.254.742-.801.742-1.436 0-.459-.146-.937-.4-1.172-.157-.137-.127-.234.029-.38.303-.255.498-.694.498-1.25a1.69 1.69 0 0 0-1.7-1.71h-3.437c-.869 0-1.445-.449-1.445-1.172 0-1.298 1.63-3.7 1.63-5.42C14.297.528 13.712 0 12.95 0c-.703 0-1.045.479-1.416 1.21-1.455 2.823-3.388 5.108-4.863 7.061-1.25 1.66-1.856 3.096-1.856 5.391Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M0 13.74c0 2.89 1.807 5.313 4.229 5.313h1.718c-1.758-1.28-2.48-3.213-2.48-5.41.01-2.442.957-4.19 1.797-5.245H3.867C1.69 8.398 0 10.742 0 13.74Zm4.814-.078c0 3.565 2.784 6.318 7.325 6.318h1.328c1.26 0 2.197-.087 2.724-.234.762-.185 1.495-.654 1.495-1.572 0-.381-.098-.654-.215-.86-.078-.127-.059-.224.058-.273.606-.254 1.104-.82 1.104-1.592 0-.44-.127-.83-.342-1.094-.107-.146-.098-.283.088-.38.43-.254.742-.801.742-1.436 0-.459-.146-.937-.4-1.172-.157-.137-.127-.234.029-.38.303-.255.498-.694.498-1.25a1.69 1.69 0 0 0-1.7-1.71h-3.437c-.869 0-1.445-.449-1.445-1.172 0-1.298 1.63-3.7 1.63-5.42C14.297.528 13.712 0 12.95 0c-.703 0-1.045.479-1.416 1.21-1.455 2.823-3.388 5.108-4.863 7.061-1.25 1.66-1.856 3.096-1.856 5.391Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 162, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' fill='none' viewBox='0 0 19 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M5 13.154c2.871 2.881 6.309 5.069 9.072 5.069 1.3 0 2.432-.518 3.174-1.348.713-.8.957-1.396.957-1.924 0-.41-.254-.79-.898-1.24l-2.383-1.709c-.596-.42-.86-.498-1.211-.498-.303 0-.557.059-1.065.332l-1.562.86c-.186.107-.264.126-.4.126-.186 0-.313-.049-.498-.127-.743-.341-1.788-1.162-2.715-2.09-.928-.927-1.65-1.875-2.022-2.607a.971.971 0 0 1-.107-.41c0-.127.068-.234.146-.371l.918-1.572c.254-.43.323-.665.323-.997 0-.38-.127-.79-.489-1.308L4.6 1.055C4.13.4 3.78 0 3.252 0 2.598 0 1.807.498 1.24 1.045.43 1.826 0 2.92 0 4.15c0 2.784 2.139 6.153 5 9.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h18.564v18.232H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' fill='none' viewBox='0 0 19 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M5 13.154c2.871 2.881 6.309 5.069 9.072 5.069 1.3 0 2.432-.518 3.174-1.348.713-.8.957-1.396.957-1.924 0-.41-.254-.79-.898-1.24l-2.383-1.709c-.596-.42-.86-.498-1.211-.498-.303 0-.557.059-1.065.332l-1.562.86c-.186.107-.264.126-.4.126-.186 0-.313-.049-.498-.127-.743-.341-1.788-1.162-2.715-2.09-.928-.927-1.65-1.875-2.022-2.607a.971.971 0 0 1-.107-.41c0-.127.068-.234.146-.371l.918-1.572c.254-.43.323-.665.323-.997 0-.38-.127-.79-.489-1.308L4.6 1.055C4.13.4 3.78 0 3.252 0 2.598 0 1.807.498 1.24 1.045.43 1.826 0 2.92 0 4.15c0 2.784 2.139 6.153 5 9.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h18.564v18.232H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 162, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M8.652 16.777v-6.181c0-.4-.224-.616-.625-.616a.803.803 0 0 0-.507.176l-3.692 3.057c-.303.264-.322.664 0 .928l3.692 3.066a.812.812 0 0 0 .507.186c.4 0 .625-.225.625-.616ZM20.02 8.36a.81.81 0 0 0-.82.83v.928c0 1.67-1.163 2.764-2.93 2.764H7.216c-.45 0-.82.371-.82.81 0 .45.37.82.82.82h8.896c2.91 0 4.727-1.65 4.727-4.277V9.19a.81.81 0 0 0-.82-.83ZM12.188.635v6.181c0 .391.224.616.624.616a.812.812 0 0 0 .508-.186l3.692-3.057c.312-.253.332-.654 0-.927L13.32.195a.803.803 0 0 0-.508-.175c-.4 0-.624.214-.624.615ZM.82 9.053c.47 0 .83-.362.83-.83v-.928c0-1.67 1.153-2.774 2.92-2.774h9.063c.44 0 .81-.36.81-.81a.82.82 0 0 0-.81-.81H4.727C1.827 2.9 0 4.54 0 7.177v1.045c0 .468.361.83.82.83Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.201v17.393H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M8.652 16.777v-6.181c0-.4-.224-.616-.625-.616a.803.803 0 0 0-.507.176l-3.692 3.057c-.303.264-.322.664 0 .928l3.692 3.066a.812.812 0 0 0 .507.186c.4 0 .625-.225.625-.616ZM20.02 8.36a.81.81 0 0 0-.82.83v.928c0 1.67-1.163 2.764-2.93 2.764H7.216c-.45 0-.82.371-.82.81 0 .45.37.82.82.82h8.896c2.91 0 4.727-1.65 4.727-4.277V9.19a.81.81 0 0 0-.82-.83ZM12.188.635v6.181c0 .391.224.616.624.616a.812.812 0 0 0 .508-.186l3.692-3.057c.312-.253.332-.654 0-.927L13.32.195a.803.803 0 0 0-.508-.175c-.4 0-.624.214-.624.615ZM.82 9.053c.47 0 .83-.362.83-.83v-.928c0-1.67 1.153-2.774 2.92-2.774h9.063c.44 0 .81-.36.81-.81a.82.82 0 0 0-.81-.81H4.727C1.827 2.9 0 4.54 0 7.177v1.045c0 .468.361.83.82.83Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.201v17.393H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 144, 164);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='23' fill='none' viewBox='0 0 13 23'%3e%3cpath fill='black' d='M6.24 19.639c3.301 0 6.143-1.66 6.143-4.824 0-2.93-2.295-3.975-5.02-4.63l-1.875-.458c-1.777-.43-3.252-1.202-3.252-2.891 0-1.895 2.022-2.861 3.994-2.861 2.022 0 3.487.947 4.024 2.685.156.46.459.772.967.772s.879-.352.879-.87c0-.78-.518-1.835-1.192-2.51-1.191-1.19-2.9-1.747-4.678-1.747-3.056 0-5.869 1.62-5.869 4.677 0 2.705 2.305 3.926 4.815 4.502l1.885.44c1.875.44 3.457 1.123 3.457 3.037 0 2.148-1.973 3.018-4.258 3.018-2.158 0-3.906-.87-4.424-2.813-.147-.479-.43-.752-.928-.752-.547 0-.908.371-.908.86 0 .908.596 1.962 1.27 2.607 1.318 1.24 3.173 1.758 4.97 1.758Zm-.049 2.373a.642.642 0 0 0 .635-.645V.635A.64.64 0 0 0 6.191 0a.64.64 0 0 0-.634.635v20.732c0 .352.283.645.634.645Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='23' fill='none' viewBox='0 0 13 23'%3e%3cpath fill='black' d='M6.24 19.639c3.301 0 6.143-1.66 6.143-4.824 0-2.93-2.295-3.975-5.02-4.63l-1.875-.458c-1.777-.43-3.252-1.202-3.252-2.891 0-1.895 2.022-2.861 3.994-2.861 2.022 0 3.487.947 4.024 2.685.156.46.459.772.967.772s.879-.352.879-.87c0-.78-.518-1.835-1.192-2.51-1.191-1.19-2.9-1.747-4.678-1.747-3.056 0-5.869 1.62-5.869 4.677 0 2.705 2.305 3.926 4.815 4.502l1.885.44c1.875.44 3.457 1.123 3.457 3.037 0 2.148-1.973 3.018-4.258 3.018-2.158 0-3.906-.87-4.424-2.813-.147-.479-.43-.752-.928-.752-.547 0-.908.371-.908.86 0 .908.596 1.962 1.27 2.607 1.318 1.24 3.173 1.758 4.97 1.758Zm-.049 2.373a.642.642 0 0 0 .635-.645V.635A.64.64 0 0 0 6.191 0a.64.64 0 0 0-.634.635v20.732c0 .352.283.645.634.645Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(38, 162, 105);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M4.854 11.016a.667.667 0 0 1-.684-.684c0-.38.293-.674.684-.674h4.423V3.75c0-.38.293-.674.674-.674.381 0 .684.293.684.674v6.582c0 .39-.303.684-.684.684H4.854Zm5.107 8.906c5.498 0 9.96-4.473 9.96-9.961C19.922 4.463 15.46 0 9.962 0 4.473 0 0 4.463 0 9.96c0 5.49 4.473 9.962 9.96 9.962Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20.283v19.932H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M4.854 11.016a.667.667 0 0 1-.684-.684c0-.38.293-.674.684-.674h4.423V3.75c0-.38.293-.674.674-.674.381 0 .684.293.684.674v6.582c0 .39-.303.684-.684.684H4.854Zm5.107 8.906c5.498 0 9.96-4.473 9.96-9.961C19.922 4.463 15.46 0 9.962 0 4.473 0 0 4.463 0 9.96c0 5.49 4.473 9.962 9.96 9.962Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20.283v19.932H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 97, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M.84 8.271c.234 0 .469-.078.615-.234L3.682 5.85l3.71-4.082 3.731 4.082 2.227 2.187c.156.156.38.234.615.234.488 0 .84-.37.84-.85a.879.879 0 0 0-.264-.634L8.057.293A.885.885 0 0 0 7.402 0a.885.885 0 0 0-.654.293L.273 6.787c-.185.195-.273.4-.273.635 0 .478.352.85.84.85Zm6.562 10.176c.508 0 .87-.351.87-.86V4.728l-.098-2.91c0-.46-.313-.772-.772-.772s-.771.312-.771.771l-.098 2.91v12.862c0 .508.362.86.87.86Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M.84 8.271c.234 0 .469-.078.615-.234L3.682 5.85l3.71-4.082 3.731 4.082 2.227 2.187c.156.156.38.234.615.234.488 0 .84-.37.84-.85a.879.879 0 0 0-.264-.634L8.057.293A.885.885 0 0 0 7.402 0a.885.885 0 0 0-.654.293L.273 6.787c-.185.195-.273.4-.273.635 0 .478.352.85.84.85Zm6.562 10.176c.508 0 .87-.351.87-.86V4.728l-.098-2.91c0-.46-.313-.772-.772-.772s-.771.312-.771.771l-.098 2.91v12.862c0 .508.362.86.87.86Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 97, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cpath fill='black' d='M0 3.223c0 4.033 1.934 6.552 5.791 7.734a8.289 8.289 0 0 0 1.953 1.758v4.248H6.211c-1.377 0-2.09.79-2.09 2.09v1.611c0 .44.342.742.752.742h9.356c.41 0 .752-.302.752-.742v-1.611c0-1.3-.723-2.09-2.1-2.09h-1.524v-4.248a8.07 8.07 0 0 0 1.944-1.758c3.867-1.182 5.8-3.701 5.8-7.734 0-1.006-.624-1.621-1.67-1.621h-1.894C15.381.605 14.677 0 13.497 0H5.604C4.433 0 3.72.596 3.564 1.602H1.67C.625 1.602 0 2.217 0 3.222Zm1.396.136c0-.156.118-.283.284-.283h1.836V4.99c0 1.494.39 2.881.996 4.082C2.47 8.037 1.396 6.142 1.396 3.36ZM14.58 9.072a8.947 8.947 0 0 0 1.006-4.082V3.076h1.836c.166 0 .283.127.283.283 0 2.784-1.074 4.678-3.125 5.713Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cpath fill='black' d='M0 3.223c0 4.033 1.934 6.552 5.791 7.734a8.289 8.289 0 0 0 1.953 1.758v4.248H6.211c-1.377 0-2.09.79-2.09 2.09v1.611c0 .44.342.742.752.742h9.356c.41 0 .752-.302.752-.742v-1.611c0-1.3-.723-2.09-2.1-2.09h-1.524v-4.248a8.07 8.07 0 0 0 1.944-1.758c3.867-1.182 5.8-3.701 5.8-7.734 0-1.006-.624-1.621-1.67-1.621h-1.894C15.381.605 14.677 0 13.497 0H5.604C4.433 0 3.72.596 3.564 1.602H1.67C.625 1.602 0 2.217 0 3.222Zm1.396.136c0-.156.118-.283.284-.283h1.836V4.99c0 1.494.39 2.881.996 4.082C2.47 8.037 1.396 6.142 1.396 3.36ZM14.58 9.072a8.947 8.947 0 0 0 1.006-4.082V3.076h1.836c.166 0 .283.127.283.283 0 2.784-1.074 4.678-3.125 5.713Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(230, 97, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 29, 32);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 33, 144, 164);
  background: rgba(33, 144, 164, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(33, 144, 164, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(33, 144, 164, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(33, 144, 164, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(33, 144, 164, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="banner-icon"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: color-mix(in srgb, #2e2e32, #fff 15%);
  --background-modifier-border-focus: #77767b;
  --background-modifier-border-hover: #6b6970;
  --background-modifier-error: rgb(224, 27, 36);
  --background-modifier-error-hover: rgb(224, 27, 36);
  --background-modifier-error-rgb: 224, 27, 36;
  --background-modifier-form-field: color-mix(in srgb, #2e2e32, #fff 10%);
  --background-modifier-form-field-hover: color-mix(in srgb, #2e2e32, #fff 10%);
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: rgb(38, 162, 105);
  --background-modifier-success-rgb: 38, 162, 105;
  --background-primary: #1d1d20;
  --background-primary-alt: #2e2e32;
  --background-secondary: #2e2e32;
  --background-secondary-alt: #28282c;
  --banner-fade-height: 0px;
  --banner-icon-size: 0px;
  --banner-image-height: 0px;
  --banner-image-radius: 9px;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #2e2e32;
  --blockquote-border-color: #9a9996;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: 9px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 224, 27, 36;
  --callout-color: var(--callout-default, 53, 132, 228);
  --callout-default: 53, 132, 228;
  --callout-error: 224, 27, 36;
  --callout-example: 145, 65, 172;
  --callout-fail: 224, 27, 36;
  --callout-important: 33, 144, 164;
  --callout-info: 53, 132, 228;
  --callout-padding: 16px;
  --callout-question: 230, 97, 0;
  --callout-radius: 9px;
  --callout-size: 16px;
  --callout-success: 38, 162, 105;
  --callout-summary: 33, 144, 164;
  --callout-tip: 33, 144, 164;
  --callout-title-weight: 700;
  --callout-todo: 53, 132, 228;
  --callout-warning: 230, 97, 0;
  --canvas-background: #1d1d20;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 9px;
  --canvas-dot-pattern: #5e5c64;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --caret-color: #fff;
  --checkbox-border-color: #99999b;
  --checkbox-border-color-hover: #d2d2d2;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1d1d20;
  --checkbox-radius: 100px;
  --checkbox-size: 16px;
  --checklist-done-color: #d2d2d2;
  --clickable-icon-radius: 9px;
  --code-background: #2e2e32;
  --code-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5c6370;
  --code-function: #d19a66;
  --code-important: #d19a66;
  --code-keyword: #e16d76;
  --code-normal: #abb2bf;
  --code-operator: rgb(224, 27, 36);
  --code-property: #62afef;
  --code-punctuation: #abb2bf;
  --code-radius: 9px;
  --code-size: 0.8em;
  --code-string: #58b6c2;
  --code-tag: #e16d76;
  --code-value: #c678de;
  --collapse-icon-color: #99999b;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: rgb(53, 132, 228);
  --color-cyan: rgb(33, 144, 164);
  --color-green: rgb(38, 162, 105);
  --color-orange: rgb(230, 97, 0);
  --color-pink: rgb(213, 97, 170);
  --color-purple: rgb(145, 65, 172);
  --color-red: rgb(224, 27, 36);
  --color-yellow: rgb(245, 194, 17);
  --divider-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --divider-color-hover: #9a9996;
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, #2e2e32, #fff 10%);
  --dropdown-background-hover: color-mix(in srgb, #2e2e32, #fff 15%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 2.4em 0 0.8em;
  --flair-background: color-mix(in srgb, #2e2e32, #fff 10%);
  --flair-color: #fff;
  --font-interface: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', "Adwaita Sans", "Adwaita Sans Text", 'Arial';
  --font-text: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-ui-large: 14.96px;
  --font-ui-medium: 11px;
  --font-ui-small: 11px;
  --font-ui-smaller: 9.02px;
  --font-weight: 400;
  --graph-line: #6b6970;
  --graph-node: #d2d2d2;
  --graph-node-attachment: rgb(245, 194, 17);
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: rgb(38, 162, 105);
  --graph-node-unresolved: #99999b;
  --graph-text: #fff;
  --h5-line-height: 1.6;
  --h6-line-height: 1.6;
  --heading-formatting: #99999b;
  --heading-spacing: 2em;
  --hr-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: color-mix(in srgb, #2e2e32, #fff 15%);
  --interactive-normal: color-mix(in srgb, #2e2e32, #fff 10%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --media-radius: 9px;
  --menu-background: #36363a;
  --menu-border-color: color-mix(in srgb, #2e2e32, #fff 10%);
  --menu-border-width: 1px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 6px;
  --menu-radius: 12px;
  --menu-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1);
  --nn-theme-file-tag-color: hsl(255, 89.76%, 75.9%);
  --nn-theme-mobile-list-header-link-color: #fff;
  --nn-theme-mobile-toolbar-button-active-bg: hsl(258, 88%, 66%);
  --nn-theme-mobile-toolbar-button-active-icon-color: white;
  --nn-theme-mobile-toolbar-button-icon-color: #fff;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(255, 255, 255, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(255, 255, 255, 0.067);
  --pdf-background: #1d1d20;
  --pdf-page-background: #1d1d20;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%);
  --pdf-sidebar-background: #1d1d20;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%);
  --popover-font-size: 16px;
  --radius-l: 15px;
  --radius-m: 12px;
  --radius-s: 9px;
  --radius-xl: 18px;
  --raised-background: color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #d2d2d2;
  --search-icon-color: #d2d2d2;
  --search-result-background: #1d1d20;
  --setting-group-heading-color: #fff;
  --setting-group-heading-size: 11px;
  --setting-group-heading-weight: 700;
  --setting-items-background: #2e2e32;
  --setting-items-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --setting-items-padding: 0px;
  --setting-items-radius: 12px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: #d2d2d2;
  --shiki-code-background: #2e2e32;
  --shiki-code-block-border-radius: 9px;
  --shiki-code-block-spacing: 1.75rem;
  --shiki-code-comment: #99999b;
  --shiki-code-function: rgb(38, 162, 105);
  --shiki-code-important: rgb(230, 97, 0);
  --shiki-code-keyword: rgb(213, 97, 170);
  --shiki-code-normal: #d2d2d2;
  --shiki-code-property: rgb(33, 144, 164);
  --shiki-code-punctuation: #d2d2d2;
  --shiki-code-string: rgb(245, 194, 17);
  --shiki-code-value: rgb(145, 65, 172);
  --shiki-gutter-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #99999b;
  --shiki-gutter-text-color-highlight: #d2d2d2;
  --shiki-highlight-green: rgba(38, 162, 105, 0.5);
  --shiki-highlight-green-background: rgba(38, 162, 105, 0.1);
  --shiki-highlight-neutral: #d2d2d2;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(224, 27, 36, 0.5);
  --shiki-highlight-red-background: rgba(224, 27, 36, 0.1);
  --shiki-terminal-dots-color: #99999b;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1d1d20;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(224, 27, 36);
  --sync-avatar-color-2: rgb(230, 97, 0);
  --sync-avatar-color-3: rgb(245, 194, 17);
  --sync-avatar-color-4: rgb(38, 162, 105);
  --sync-avatar-color-5: rgb(33, 144, 164);
  --sync-avatar-color-6: rgb(53, 132, 228);
  --sync-avatar-color-7: rgb(145, 65, 172);
  --sync-avatar-color-8: rgb(213, 97, 170);
  --tab-background-active: #1d1d20;
  --tab-curve: 0;
  --tab-divider-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --tab-font-size: 11px;
  --tab-max-width: 200px;
  --tab-outline-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --tab-radius: 9px;
  --tab-radius-active: 9px;
  --tab-stacked-font-size: 11px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #2e2e32;
  --tab-switcher-menubar-background: linear-gradient(to top, #2e2e32, transparent);
  --tab-switcher-preview-radius: 18px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #99999b;
  --tab-text-color-active: #d2d2d2;
  --tab-text-color-focused: #d2d2d2;
  --tab-text-color-focused-active: #fff;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #99999b;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: transparent;
  --table-header-border-width: 1px;
  --table-header-color: #fff;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 0.933em;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --tag-weight: 500;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: rgb(224, 27, 36);
  --text-faint: #99999b;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #d2d2d2;
  --text-normal: #fff;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: rgb(38, 162, 105);
  --text-warning: rgb(230, 97, 0);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--callout-size, 16px);
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 224, 27, 36);
  background: rgba(224, 27, 36, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(224, 27, 36, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 224, 27, 36);
  background: rgba(224, 27, 36, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(224, 27, 36, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 145, 65, 172);
  background: rgba(145, 65, 172, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(145, 65, 172, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(145, 65, 172, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(145, 65, 172, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(145, 65, 172, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 224, 27, 36);
  background: rgba(224, 27, 36, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(224, 27, 36, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 27, 36, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(224, 27, 36, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(224, 27, 36, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 53, 132, 228);
  background: rgba(53, 132, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 53, 132, 228);
  background: rgba(53, 132, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: color-mix(in srgb, #2e2e32, #fff 15%);
  --background-modifier-border-focus: #77767b;
  --background-modifier-border-hover: #6b6970;
  --background-modifier-error: rgb(224, 27, 36);
  --background-modifier-error-hover: rgb(224, 27, 36);
  --background-modifier-error-rgb: 224, 27, 36;
  --background-modifier-form-field: color-mix(in srgb, #2e2e32, #fff 10%);
  --background-modifier-form-field-hover: color-mix(in srgb, #2e2e32, #fff 10%);
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: rgb(38, 162, 105);
  --background-modifier-success-rgb: 38, 162, 105;
  --background-primary: #1d1d20;
  --background-primary-alt: #2e2e32;
  --background-secondary: #2e2e32;
  --background-secondary-alt: #28282c;
  --banner-fade-height: 0px;
  --banner-icon-size: 0px;
  --banner-image-height: 0px;
  --banner-image-radius: 9px;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #2e2e32;
  --blockquote-border-color: #9a9996;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: 9px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 224, 27, 36;
  --callout-color: var(--callout-default, 53, 132, 228);
  --callout-default: 53, 132, 228;
  --callout-error: 224, 27, 36;
  --callout-example: 145, 65, 172;
  --callout-fail: 224, 27, 36;
  --callout-important: 33, 144, 164;
  --callout-info: 53, 132, 228;
  --callout-padding: 16px;
  --callout-question: 230, 97, 0;
  --callout-radius: 9px;
  --callout-size: 16px;
  --callout-success: 38, 162, 105;
  --callout-summary: 33, 144, 164;
  --callout-tip: 33, 144, 164;
  --callout-title-weight: 700;
  --callout-todo: 53, 132, 228;
  --callout-warning: 230, 97, 0;
  --canvas-background: #1d1d20;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 9px;
  --canvas-dot-pattern: #5e5c64;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --caret-color: #fff;
  --checkbox-border-color: #99999b;
  --checkbox-border-color-hover: #d2d2d2;
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #1d1d20;
  --checkbox-radius: 100px;
  --checkbox-size: 16px;
  --checklist-done-color: #d2d2d2;
  --clickable-icon-radius: 9px;
  --code-background: #2e2e32;
  --code-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5c6370;
  --code-function: #d19a66;
  --code-important: #d19a66;
  --code-keyword: #e16d76;
  --code-normal: #abb2bf;
  --code-operator: rgb(224, 27, 36);
  --code-property: #62afef;
  --code-punctuation: #abb2bf;
  --code-radius: 9px;
  --code-size: 0.8em;
  --code-string: #58b6c2;
  --code-tag: #e16d76;
  --code-value: #c678de;
  --collapse-icon-color: #99999b;
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: rgb(53, 132, 228);
  --color-cyan: rgb(33, 144, 164);
  --color-green: rgb(38, 162, 105);
  --color-orange: rgb(230, 97, 0);
  --color-pink: rgb(213, 97, 170);
  --color-purple: rgb(145, 65, 172);
  --color-red: rgb(224, 27, 36);
  --color-yellow: rgb(245, 194, 17);
  --divider-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --divider-color-hover: #9a9996;
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, #2e2e32, #fff 10%);
  --dropdown-background-hover: color-mix(in srgb, #2e2e32, #fff 15%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 2.4em 0 0.8em;
  --flair-background: color-mix(in srgb, #2e2e32, #fff 10%);
  --flair-color: #fff;
  --font-interface: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', "Adwaita Sans", "Adwaita Sans Text", 'Arial';
  --font-text: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-ui-large: 14.96px;
  --font-ui-medium: 11px;
  --font-ui-small: 11px;
  --font-ui-smaller: 9.02px;
  --font-weight: 400;
  --graph-line: #6b6970;
  --graph-node: #d2d2d2;
  --graph-node-attachment: rgb(245, 194, 17);
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: rgb(38, 162, 105);
  --graph-node-unresolved: #99999b;
  --graph-text: #fff;
  --h5-line-height: 1.6;
  --h6-line-height: 1.6;
  --heading-formatting: #99999b;
  --heading-spacing: 2em;
  --hr-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: color-mix(in srgb, #2e2e32, #fff 15%);
  --interactive-normal: color-mix(in srgb, #2e2e32, #fff 10%);
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --media-radius: 9px;
  --menu-background: #36363a;
  --menu-border-color: color-mix(in srgb, #2e2e32, #fff 10%);
  --menu-border-width: 1px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 6px;
  --menu-radius: 12px;
  --menu-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1);
  --nn-theme-file-tag-color: hsl(255, 89.76%, 75.9%);
  --nn-theme-mobile-list-header-link-color: #fff;
  --nn-theme-mobile-toolbar-button-active-bg: hsl(258, 88%, 66%);
  --nn-theme-mobile-toolbar-button-active-icon-color: white;
  --nn-theme-mobile-toolbar-button-icon-color: #fff;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(255, 255, 255, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(255, 255, 255, 0.067);
  --pdf-background: #1d1d20;
  --pdf-page-background: #1d1d20;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%);
  --pdf-sidebar-background: #1d1d20;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%);
  --popover-font-size: 16px;
  --radius-l: 15px;
  --radius-m: 12px;
  --radius-s: 9px;
  --radius-xl: 18px;
  --raised-background: color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #d2d2d2;
  --search-icon-color: #d2d2d2;
  --search-result-background: #1d1d20;
  --setting-group-heading-color: #fff;
  --setting-group-heading-size: 11px;
  --setting-group-heading-weight: 700;
  --setting-items-background: #2e2e32;
  --setting-items-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --setting-items-padding: 0px;
  --setting-items-radius: 12px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: #d2d2d2;
  --shiki-code-background: #2e2e32;
  --shiki-code-block-border-radius: 9px;
  --shiki-code-block-spacing: 1.75rem;
  --shiki-code-comment: #99999b;
  --shiki-code-function: rgb(38, 162, 105);
  --shiki-code-important: rgb(230, 97, 0);
  --shiki-code-keyword: rgb(213, 97, 170);
  --shiki-code-normal: #d2d2d2;
  --shiki-code-property: rgb(33, 144, 164);
  --shiki-code-punctuation: #d2d2d2;
  --shiki-code-string: rgb(245, 194, 17);
  --shiki-code-value: rgb(145, 65, 172);
  --shiki-gutter-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #99999b;
  --shiki-gutter-text-color-highlight: #d2d2d2;
  --shiki-highlight-green: rgba(38, 162, 105, 0.5);
  --shiki-highlight-green-background: rgba(38, 162, 105, 0.1);
  --shiki-highlight-neutral: #d2d2d2;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(224, 27, 36, 0.5);
  --shiki-highlight-red-background: rgba(224, 27, 36, 0.1);
  --shiki-terminal-dots-color: #99999b;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1d1d20;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(224, 27, 36);
  --sync-avatar-color-2: rgb(230, 97, 0);
  --sync-avatar-color-3: rgb(245, 194, 17);
  --sync-avatar-color-4: rgb(38, 162, 105);
  --sync-avatar-color-5: rgb(33, 144, 164);
  --sync-avatar-color-6: rgb(53, 132, 228);
  --sync-avatar-color-7: rgb(145, 65, 172);
  --sync-avatar-color-8: rgb(213, 97, 170);
  --tab-background-active: #1d1d20;
  --tab-curve: 0;
  --tab-divider-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --tab-font-size: 11px;
  --tab-max-width: 200px;
  --tab-outline-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --tab-radius: 9px;
  --tab-radius-active: 9px;
  --tab-stacked-font-size: 11px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #2e2e32;
  --tab-switcher-menubar-background: linear-gradient(to top, #2e2e32, transparent);
  --tab-switcher-preview-radius: 18px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #99999b;
  --tab-text-color-active: #d2d2d2;
  --tab-text-color-focused: #d2d2d2;
  --tab-text-color-focused-active: #fff;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: #99999b;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: transparent;
  --table-header-border-width: 1px;
  --table-header-color: #fff;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 0.933em;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --tag-weight: 500;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: rgb(224, 27, 36);
  --text-faint: #99999b;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #d2d2d2;
  --text-normal: #fff;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: rgb(38, 162, 105);
  --text-warning: rgb(230, 97, 0);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 230, 97, 0);
  background: rgba(230, 97, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(230, 97, 0, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 97, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(230, 97, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(230, 97, 0, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 38, 162, 105);
  background: rgba(38, 162, 105, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(38, 162, 105, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(38, 162, 105, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(38, 162, 105, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(38, 162, 105, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 33, 144, 164);
  background: rgba(33, 144, 164, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(33, 144, 164, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(33, 144, 164, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(33, 144, 164, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(33, 144, 164, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 53, 132, 228);
  background: rgba(53, 132, 228, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 230, 97, 0);
  background: rgba(230, 97, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(230, 97, 0, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(230, 97, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(230, 97, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(230, 97, 0, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 53, 132, 228;
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="banner-icon"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: color(srgb 0.262353 0.262353 0.276471);
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-width: 0px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-width: 0px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgb(46, 46, 50));
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-top-width: 0px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.15) 0px 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px 0px 5px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  background-color: rgb(40, 40, 44);
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: var(--divider-color, rgb(255, 255, 255));
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-size: var(--icon-xs, 14px);
  --icon-stroke: var(--icon-xs-stroke-width, 2.25px);
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 4px);
  --pill-radius: var(--tag-radius, 8px);
  --pill-weight: var(--tag-weight, 500);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
  line-height: var(--line-height-tight, 18.2px);
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--h1-color, rgb(255, 255, 255));
  font-family: var(--h1-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 24px);
  line-height: var(--h1-line-height, 28.8px);
  margin-bottom: 28px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(255, 255, 255));
  font-size: var(--inline-title-size, 24px);
}

html[saved-theme="dark"] body h2 {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--h2-color, rgb(255, 255, 255));
  font-family: var(--h2-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 20px);
  line-height: var(--h2-line-height, 24px);
  margin-bottom: 28px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--inline-title-color, rgb(255, 255, 255));
  font-family: var(--inline-title-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 24px);
  line-height: var(--inline-title-line-height, 28.8px);
  margin-bottom: 12px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a::before {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--inline-title-color, rgb(255, 255, 255));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 714px;
}

html[saved-theme="dark"] body h3 {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--h3-color, rgb(255, 255, 255));
  font-family: var(--h3-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 18px);
  line-height: var(--h3-line-height, 23.4px);
  margin-bottom: 28px;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="dark"] body h4 {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--h4-color, rgb(255, 255, 255));
  font-family: var(--h4-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 16px);
  line-height: var(--h4-line-height, 22.4px);
  margin-bottom: 28px;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="dark"] body h5 {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--h5-color, rgb(255, 255, 255));
  font-family: var(--h5-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 16px);
  line-height: var(--h5-line-height, 25.6px);
  margin-bottom: 28px;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--h6-color, rgb(255, 255, 255));
  font-family: var(--h6-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 14px);
  line-height: var(--h6-line-height, 22.4px);
  margin-bottom: 28px;
  margin-top: 28px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 6, 0.36);
  border-left-color: rgba(0, 0, 6, 0.36);
  border-right-color: rgba(0, 0, 6, 0.36);
  border-top-color: rgba(0, 0, 6, 0.36);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 53, 132, 228);
  border-bottom-color: rgba(53, 132, 228, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(53, 132, 228, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(53, 132, 228, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(53, 132, 228, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(210, 210, 210));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(210, 210, 210));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="dark"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: var(--icon-color, rgb(210, 210, 210));
}`,
    footer: `html[saved-theme="dark"] body footer {
  --status-bar-border-width: var(--border-width, 1px);
  background-color: rgba(var(--mono-rgb-100), 0.2);
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 1380px;
  border-bottom-right-radius: 1380px;
  border-left-color: rgb(210, 210, 210);
  border-left-width: 0px;
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 1380px;
  border-top-right-radius: 1380px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(210, 210, 210));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--status-bar-font-size, 9.02px);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(210, 210, 210);
  font-size: 9.02px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(210, 210, 210));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(210, 210, 210));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: var(--icon-color, rgb(210, 210, 210));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(210, 210, 210);
  stroke: rgb(210, 210, 210);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 155);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(153, 153, 155);
  border-right-color: rgb(153, 153, 155);
  border-top-color: rgb(153, 153, 155);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(153, 153, 155);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(153, 153, 155));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--background-primary-alt, rgba(0, 0, 0, 0));
  color: var(--text-normal-editor, var(--text-normal));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(46, 46, 50));
  border-color: rgb(255, 255, 255);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0) rgb(255, 255, 255) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  color: var(--table-header-color, rgb(255, 255, 255));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  color: var(--text-muted, rgb(210, 210, 210));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: var(--background-primary-alt, rgb(46, 46, 50));
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-property-key {
  color: rgb(210, 210, 210);
  font-family: var(--metadata-label-font, "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .metadata-property-value {
  color: rgb(210, 210, 210);
  font-family: var(--metadata-input-font, "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.303333 0.303333 0.316667);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(210, 210, 210);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(210, 210, 210);
}

html[saved-theme="dark"] body .note-properties-tags {
  --icon-size: var(--icon-xs, 14px);
  --icon-stroke: var(--icon-xs-stroke-width, 2.25px);
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 4px);
  --pill-radius: var(--tag-radius, 8px);
  --pill-weight: var(--tag-weight, 500);
  border-radius: 8px;
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(210, 210, 210);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-secondary, rgb(29, 29, 32));
  color: var(--text-normal, rgb(255, 255, 255));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(255, 255, 255);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .navigation-progress {
  --status-bar-border-width: var(--border-width, 1px);
  background-color: rgba(var(--mono-rgb-100), 0.2);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 11px;
  font-weight: max(var(--file-header-font-weight),var(--font-medium));
  line-height: 14.3px;
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(210, 210, 210);
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  color: var(--text-normal, rgb(210, 210, 210));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--background-secondary, rgb(46, 46, 50));
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: var(--shadow-tactile, rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px);
  color: var(--text-muted, rgb(210, 210, 210));
  font-family: var(--font-text, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--code-size, 12.8px);
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
  },
  light: {
    base: `:root:root {
  --anim-duration-fast: calc(160ms*var(--anim-speed-modifier));
  --anim-duration-moderate: calc(320ms*var(--anim-speed-modifier));
  --anim-duration-slow: calc(480ms*var(--anim-speed-modifier));
  --anim-duration-superfast: calc(80ms*var(--anim-speed-modifier));
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1);
  --anim-speed-modifier: 1;
  --background-modifier-border: color-mix(in srgb, var(--background-secondary), var(--text-normal) 15%);
  --background-modifier-border-focus: var(--color-base-40, #c0bfbc);
  --background-modifier-border-hover: var(--color-base-35, #deddda);
  --background-modifier-cover: rgba(0, 0, 0, 0.35);
  --background-modifier-error: var(--color-red, rgb(237, 51, 59));
  --background-modifier-error-hover: var(--color-red, rgb(237, 51, 59));
  --background-modifier-error-rgb: var(--color-red-rgb, 237, 51, 59);
  --background-modifier-form-field: var(--interactive-normal, color-mix(in srgb, #ebebed, #333338 10%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, #ebebed, #333338 10%));
  --background-modifier-success: var(--color-green, rgb(46, 194, 126));
  --background-modifier-success-rgb: var(--color-green-rgb, 46, 194, 126);
  --background-primary: var(--color-base-00, #fff);
  --background-primary-alt: var(--color-base-10, #fff);
  --background-secondary: var(--color-base-20, #ebebed);
  --background-secondary-alt: var(--color-base-05, #f3f3f5);
  --banner-fade-height: 80px;
  --banner-icon-size: 3rem;
  --banner-image-height: 320px;
  --banner-image-height-s: 240px;
  --banner-image-inset: 8px;
  --banner-image-object-fit: cover;
  --banner-image-radius: var(--radius-s, 9px);
  --banner-mobile-offset: 0px;
  --bases-cards-background: var(--background-primary, #fff);
  --bases-cards-corner-shape: var(--corner-shape, superellipse(1.1));
  --bases-cards-cover-background: var(--background-primary-alt, #fff);
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --bases-embed-border-radius: var(--radius-s, 9px);
  --bases-group-heading-property-color: var(--text-muted, #5c5c60);
  --bases-group-heading-property-size: var(--font-ui-smaller, 9.02px);
  --bases-table-border-color: var(--table-border-color, color-mix(in srgb, #ebebed, #333338 15%));
  --bases-table-cell-background-active: var(--background-primary, #fff);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #fff);
  --bases-table-container-border-radius: var(--radius-s, 9px);
  --bases-table-group-background: var(--background-primary-alt, #fff);
  --bases-table-header-background: var(--background-primary, #fff);
  --bases-table-header-color: var(--text-faint, #858587);
  --bases-table-summary-background: var(--background-primary, #fff);
  --block-width-max: calc(100cqw - var(--file-margins-x)*2);
  --block-width-offset: calc(var(--file-margins-x)*-1);
  --block-width-wide: min(100cqw, var(--line-width-wide));
  --blockquote-background-color: var(--background-secondary-alt, #f3f3f5);
  --blockquote-border-color: var(--color-base-50, #9a9996);
  --blockquote-size: var(--font-text-size, 16px);
  --bodyFont: var(--font-text-theme, "Adwaita Sans", "Adwaita Sans Text");
  --bold-modifier: 300;
  --button-corner-shape: var(--corner-shape, superellipse(1.1));
  --button-radius: var(--radius-s, 9px);
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-width: var(--divider-width, 1px);
  --callout-bug: var(--color-red-rgb, 237, 51, 59);
  --callout-default: var(--color-blue-rgb, 98, 160, 234);
  --callout-error: var(--color-red-rgb, 237, 51, 59);
  --callout-example: var(--color-purple-rgb, 192, 97, 203);
  --callout-fail: var(--color-red-rgb, 237, 51, 59);
  --callout-important: var(--color-cyan-rgb, 35, 164, 173);
  --callout-info: var(--color-blue-rgb, 98, 160, 234);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--color-orange-rgb, 255, 120, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 9px);
  --callout-size: var(--font-text-size, 16px);
  --callout-success: var(--color-green-rgb, 46, 194, 126);
  --callout-summary: var(--color-cyan-rgb, 35, 164, 173);
  --callout-tip: var(--color-cyan-rgb, 35, 164, 173);
  --callout-todo: var(--color-blue-rgb, 98, 160, 234);
  --callout-warning: var(--color-orange-rgb, 255, 120, 0);
  --canvas-background: var(--background-primary, #fff);
  --canvas-card-label-color: var(--text-faint, #858587);
  --canvas-color-1: var(--color-red-rgb, 237, 51, 59);
  --canvas-color-2: var(--color-orange-rgb, 255, 120, 0);
  --canvas-color-3: var(--color-yellow-rgb, 246, 211, 45);
  --canvas-color-4: var(--color-green-rgb, 46, 194, 126);
  --canvas-color-5: var(--color-cyan-rgb, 35, 164, 173);
  --canvas-color-6: var(--color-purple-rgb, 192, 97, 203);
  --canvas-controls-icon-size: var(--icon-s, 16px);
  --canvas-controls-icon-stroke: var(--icon-s-stroke-width, 2px);
  --canvas-controls-radius: var(--radius-s, 9px);
  --canvas-dot-pattern: var(--color-base-30, #e6e5e3);
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-background-hover: transparent;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 160px;
  --cards-mobile-width: 120px;
  --cards-padding: 4px;
  --caret-color: var(--text-normal, #333338);
  --checkbox-border-color: var(--text-faint, #858587);
  --checkbox-border-color-hover: var(--text-muted, #5c5c60);
  --checkbox-marker-color: var(--background-primary, #fff);
  --checkbox-radius: var(--radius-s, 100px);
  --checklist-done-color: var(--text-muted, #5c5c60);
  --clickable-icon-radius: var(--radius-s, 9px);
  --code-background: var(--background-secondary-alt, #f3f3f5);
  --code-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --code-border-width: 1px;
  --code-comment: var(--text-faint, #b6b9c5);
  --code-function: var(--color-yellow, #b76b02);
  --code-important: var(--color-orange, #b76b02);
  --code-keyword: var(--color-pink, #e45749);
  --code-normal: var(--text-normal, #383a42);
  --code-operator: var(--color-red, rgb(237, 51, 59));
  --code-property: var(--color-cyan, #62afef);
  --code-punctuation: var(--text-muted, #383a42);
  --code-radius: var(--radius-s, 9px);
  --code-size: var(--font-smallest, 0.8em);
  --code-string: var(--color-green, #0d97b3);
  --code-tag: var(--color-red, #e45749);
  --code-value: var(--color-purple, #a626a4);
  --collapse-icon-color: var(--text-faint, #858587);
  --color-base-05: #fdfdfc;
  --color-base-10: #fbfafa;
  --color-base-100: #000000;
  --color-base-20: #f6f5f4;
  --color-base-25: #eeedeb;
  --color-base-30: #e6e5e3;
  --color-base-35: #deddda;
  --color-base-40: #c0bfbc;
  --color-base-50: #9a9996;
  --color-base-60: #77767b;
  --color-base-70: #5e5c64;
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 98, 160, 234;
  --color-cyan: rgb(var(--color-cyan-rgb));
  --color-cyan-rgb: 35, 164, 173;
  --color-green: rgb(var(--color-green-rgb));
  --color-green-rgb: 46, 194, 126;
  --color-orange: rgb(var(--color-orange-rgb));
  --color-orange-rgb: 255, 120, 0;
  --color-pink: rgb(var(--color-pink-rgb));
  --color-pink-rgb: 224, 97, 178;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 192, 97, 203;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 237, 51, 59;
  --color-yellow: rgb(var(--color-yellow-rgb));
  --color-yellow-rgb: 246, 211, 45;
  --corner-shape: superellipse(1.1);
  --dark: var(--text-normal, var(--color-base-100, #333338));
  --darkgray: var(--text-normal, var(--color-base-100, #333338));
  --density-modifier: 1;
  --divider-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --divider-color-alt: rgba(0, 0, 6, 0.07);
  --divider-color-hover: var(--color-base-50, #9a9996);
  --dropdown-background: var(--interactive-normal, color-mix(in srgb, #ebebed, #333338 10%));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in srgb, #ebebed, #333338 15%));
  --dropdown-padding-end: 2.4em;
  --embed-background: var(--background-primary-alt, #fff);
  --embed-background-color: var(--background-secondary-alt, #f3f3f5);
  --embed-border-start: var(--embed-border-thickness, 2px) solid var(--embed-border-color, var(--color-base-50));
  --embed-max-height: none;
  --file-header-background: var(--background-primary, #fff);
  --file-header-background-focused: var(--background-primary, #fff);
  --file-header-border: var(--border-width, none) solid transparent;
  --file-header-font: var(--font-interface, "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 11px);
  --file-line-width: var(--line-width, 700px);
  --flair-background: var(--interactive-normal, color-mix(in srgb, #ebebed, #333338 10%));
  --flair-color: var(--text-normal, #333338);
  --font-interface-theme: "Adwaita Sans", "Adwaita Sans Text";
  --font-mermaid: var(--font-text, "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: "Adwaita Sans", "Adwaita Sans Text";
  --font-ui-large: calc(var(--font-ui-medium)*1.36 + var(--font-ui-modifier));
  --font-ui-medium: calc(11px + var(--font-ui-modifier));
  --font-ui-modifier: 0px;
  --font-ui-small: calc(11px + var(--font-ui-modifier));
  --font-ui-smaller: calc(var(--font-ui-medium)*0.82 + var(--font-ui-modifier));
  --footnote-divider-color: var(--metadata-divider-color, color-mix(in srgb, #ebebed, #333338 15%));
  --footnote-id-color: var(--text-muted, #5c5c60);
  --footnote-id-color-no-occurrences: var(--text-faint, #858587);
  --footnote-line-height: var(--line-height-normal, 1.6);
  --footnote-radius: var(--radius-s, 9px);
  --frame-right-space: 124px;
  --graph-node: var(--text-muted, #5c5c60);
  --graph-node-attachment: var(--color-yellow, rgb(246, 211, 45));
  --graph-node-tag: var(--color-green, rgb(46, 194, 126));
  --graph-node-unresolved: var(--text-faint, #858587);
  --graph-text: var(--text-normal, #333338);
  --gray: var(--text-muted, var(--color-base-70, #5c5c60));
  --h1-size: 1.5em;
  --h2-size: 1.25em;
  --h3-size: 1.125em;
  --h4-size: 1em;
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1em;
  --h6-line-height: var(--line-height-normal, 1.6);
  --h6-size: 0.875em;
  --header-height: 48px;
  --headerFont: var(--font-text-theme, "Adwaita Sans", "Adwaita Sans Text");
  --heading-formatting: var(--text-faint, #858587);
  --hover-sidedock-delay: 160ms;
  --hover-sidedock-trigger-area: 4px;
  --hover-sidedock-width: 320px;
  --hr-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --icon-color: var(--text-muted, #5c5c60);
  --icon-color-focused: var(--text-normal, #333338);
  --icon-color-hover: var(--text-muted, #5c5c60);
  --icon-l: calc(18px*var(--radius-modifier));
  --icon-l-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-m: calc(18px*var(--radius-modifier));
  --icon-m-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-opacity: 1;
  --icon-s: calc(16px + var(--icon-size-modifier));
  --icon-s-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-size: var(--icon-m, 18px);
  --icon-size-modifier: 0px;
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --icon-stroke-modifier: 1;
  --icon-xl: calc(32px + var(--icon-size-modifier));
  --icon-xl-stroke-width: calc(1.25px*var(--icon-stroke-modifier));
  --icon-xs: calc(14px + var(--icon-size-modifier));
  --icon-xs-stroke-width: calc(2.25px*var(--icon-stroke-modifier));
  --indentation-guide-width: var(--border-width, 0px);
  --inline-title-margin-bottom: calc(0.5em*var(--readable-spacing-modifier, 1));
  --inline-title-size: var(--h1-size, 1.5em);
  --input-border-width: var(--border-width, 0);
  --input-corner-shape: var(--corner-shape, superellipse(1.1));
  --input-date-separator: var(--text-faint, #858587);
  --input-font-weight: calc(var(--font-weight) + var(--bold-modifier));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, #858587);
  --input-radius: var(--radius-s, 9px);
  --input-shadow: inset 0 0 0 var(--input-border-width) var(--background-modifier-border);
  --input-shadow-hover: inset 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --interactive-hover: color-mix(in srgb, var(--background-secondary), var(--text-normal) 15%);
  --interactive-normal: color-mix(in srgb, var(--background-secondary), var(--text-normal) 10%);
  --light: var(--background-primary, var(--color-base-00, #fff));
  --lightgray: var(--background-secondary, var(--color-base-20, #ebebed));
  --line-height-normal: 1.6;
  --line-width: 700px;
  --line-width-wide: 50rem;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-marker-color: var(--text-faint, #858587);
  --list-marker-color-hover: var(--text-muted, #5c5c60);
  --list-spacing: 0.175em;
  --media-radius: var(--radius-s, 9px);
  --menu-background: var(--background-secondary, #fff);
  --menu-border-color: color-mix(in srgb, var(--background-secondary), var(--text-normal) 10%);
  --menu-corner-shape: var(--corner-shape, superellipse(1.1));
  --menu-radius: var(--radius-m, 12px);
  --menu-shadow: var(--shadow-s, 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03));
  --metadata-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --metadata-divider-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --metadata-gap: 8px;
  --metadata-input-font: var(--font-interface, "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-text-color: var(--text-normal, #333338);
  --metadata-label-font: var(--font-interface, "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-text-color: var(--text-muted, #5c5c60);
  --metadata-label-text-color-hover: var(--text-muted, #5c5c60);
  --metadata-label-width: calc(9em*var(--metadata-label-width-modifier, 1));
  --metadata-property-corner-shape: var(--corner-shape, superellipse(1.1));
  --metadata-property-corner-shape-focus: var(--corner-shape, superellipse(1.1));
  --metadata-property-corner-shape-hover: var(--corner-shape, superellipse(1.1));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 11px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 11px);
  --modal-background: var(--background-primary, #fafafb);
  --modal-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --modal-radius: var(--radius-l, 15px);
  --mono-rgb-adwaita: 0, 0, 6;
  --nav-collapse-icon-color: var(--collapse-icon-color, #858587);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #858587);
  --nav-heading-color: var(--text-normal, #333338);
  --nav-heading-color-collapsed: var(--text-faint, #858587);
  --nav-heading-color-collapsed-hover: var(--text-muted, #5c5c60);
  --nav-heading-color-hover: var(--text-normal, #333338);
  --nav-indentation-guide-width: var(--indentation-guide-width, 0px);
  --nav-item-children-margin-start: calc(20px - var(--nav-indentation-guide-width)/2);
  --nav-item-color: var(--text-muted, #5c5c60);
  --nav-item-color-active: var(--text-normal, #333338);
  --nav-item-color-hover: var(--text-normal, #333338);
  --nav-item-color-selected: var(--text-normal, #333338);
  --nav-item-padding: calc(8px*var(--density-modifier)) 16px calc(8px*var(--density-modifier)) 32px;
  --nav-item-parent-padding: var(--nav-item-padding, 8px 16px 8px 32px);
  --nav-item-radius: var(--radius-s, 9px);
  --nav-item-size: var(--font-ui-small, 11px);
  --nav-tag-color: var(--text-faint, #858587);
  --nav-tag-color-active: var(--text-muted, #5c5c60);
  --nav-tag-color-hover: var(--text-muted, #5c5c60);
  --nav-tag-radius: var(--radius-s, 9px);
  --nn-theme-file-border-radius: var(--radius-m, 12px);
  --nn-theme-file-tag-bg: var(--tag-background, hsla(258, 88%, 66%, 0.1));
  --nn-theme-file-tag-color: var(--tag-color, hsl(258, 88%, 66%));
  --nn-theme-list-bg: transparent;
  --nn-theme-list-header-bg: transparent;
  --nn-theme-mobile-list-header-link-color: var(--text-normal, #333338);
  --nn-theme-mobile-nav-bg: transparent;
  --nn-theme-mobile-toolbar-button-active-bg: var(--interactive-accent, hsl(257, 88.88%, 70.95%));
  --nn-theme-mobile-toolbar-button-active-icon-color: var(--text-on-accent, white);
  --nn-theme-mobile-toolbar-button-icon-color: var(--text-normal, #333338);
  --nn-theme-nav-bg: transparent;
  --nn-theme-nav-header-bg: transparent;
  --nn-theme-navitem-border-radius: var(--radius-m, 12px);
  --nn-theme-navitem-selected-bg: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nn-theme-navitem-selected-inactive-bg: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --p-spacing: 1.75rem;
  --pdf-background: var(--background-primary, #fff);
  --pdf-page-background: var(--background-primary, #fff);
  --pdf-sidebar-background: var(--background-primary, #fff);
  --pill-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --pill-border-color-hover: var(--background-modifier-border-hover, #deddda);
  --pill-color: var(--text-muted, #5c5c60);
  --pill-color-hover: var(--text-normal, #333338);
  --pill-color-remove: var(--text-faint, #858587);
  --prompt-background: var(--background-primary, #fff);
  --prompt-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --prompt-input-height: 64px;
  --radius-l: calc(15px*var(--radius-modifier));
  --radius-m: calc(12px*var(--radius-modifier));
  --radius-modifier: 1;
  --radius-s: calc(9px*var(--radius-modifier));
  --radius-xl: calc(18px*var(--radius-modifier));
  --raised-background: var(--blur-background, color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent)));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--ribbon-background, transparent);
  --scrollbar-radius: var(--radius-l, 15px);
  --search-clear-button-color: var(--text-muted, #5c5c60);
  --search-icon-color: var(--text-muted, #5c5c60);
  --search-result-background: var(--background-primary, #fff);
  --setting-group-heading-color: var(--text-normal, #333338);
  --setting-group-heading-size: var(--font-ui-medium, 11px);
  --setting-group-heading-weight: calc(var(--font-weight) + var(--bold-modifier));
  --setting-items-background: var(--background-primary-alt, #fff);
  --setting-items-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --setting-items-padding: calc(16px*var(--density-modifier)) 16px;
  --setting-items-radius: var(--radius-m, 12px);
  --setting-items-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --shadow-l: 0 0 14px 5px rgba(0, 0, 0, 0.15), 0 0 5px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
  --shadow-s: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(var(--mono-rgb-100), 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #5c5c60);
  --shiki-code-background: var(--code-background, #f3f3f5);
  --shiki-code-block-border-radius: var(--code-radius, 9px);
  --shiki-code-block-spacing: var(--p-spacing, 1.75rem);
  --shiki-code-comment: var(--text-faint, #858587);
  --shiki-code-function: var(--color-green, rgb(46, 194, 126));
  --shiki-code-important: var(--color-orange, rgb(255, 120, 0));
  --shiki-code-keyword: var(--color-pink, rgb(224, 97, 178));
  --shiki-code-normal: var(--text-muted, #5c5c60);
  --shiki-code-property: var(--color-cyan, rgb(35, 164, 173));
  --shiki-code-punctuation: var(--text-muted, #5c5c60);
  --shiki-code-string: var(--color-yellow, rgb(246, 211, 45));
  --shiki-code-value: var(--color-purple, rgb(192, 97, 203));
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --shiki-gutter-text-color: var(--text-faint, #858587);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #5c5c60);
  --shiki-highlight-neutral: var(--shiki-code-normal, #5c5c60);
  --shiki-terminal-dots-color: var(--text-faint, #858587);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #deddda);
  --slider-thumb-border-width: var(--border-width, 0);
  --slider-thumb-height: var(--toggle-thumb-height, 20px);
  --slider-thumb-radius: var(--toggle-thumb-radius, 18px);
  --slider-thumb-width: var(--toggle-thumb-width, 20px);
  --slider-thumb-y: -8px;
  --slider-track-background: rgb(from var(--text-normal) r g b / 15%);
  --slider-track-background-active: rgb(from var(--text-normal) r g b / 25%);
  --slider-track-background-hover: rgb(from var(--text-normal) r g b / 20%);
  --slider-track-height: 4px;
  --status-bar-background: var(--background-secondary, #ebebed);
  --status-bar-border-color: var(--divider-color, color-mix(in srgb, #ebebed, #333338 15%));
  --status-bar-font-size: var(--font-ui-smaller, 9.02px);
  --status-bar-radius: var(--radius-m, 12px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #5c5c60);
  --suggestion-background: var(--background-primary, #fff);
  --sync-avatar-color-1: var(--color-red, rgb(237, 51, 59));
  --sync-avatar-color-2: var(--color-orange, rgb(255, 120, 0));
  --sync-avatar-color-3: var(--color-yellow, rgb(246, 211, 45));
  --sync-avatar-color-4: var(--color-green, rgb(46, 194, 126));
  --sync-avatar-color-5: var(--color-cyan, rgb(35, 164, 173));
  --sync-avatar-color-6: var(--color-blue, rgb(98, 160, 234));
  --sync-avatar-color-7: var(--color-purple, rgb(192, 97, 203));
  --sync-avatar-color-8: var(--color-pink, rgb(224, 97, 178));
  --tab-action-width: 32px;
  --tab-background-active: var(--background-primary, #fff);
  --tab-container-background: var(--background-secondary, #ebebed);
  --tab-curve: calc(var(--tab-radius) + 4px);
  --tab-divider-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --tab-font-size: var(--font-ui-small, 11px);
  --tab-max-width: var(--tab-width, 200px);
  --tab-outline-color: var(--divider-color, color-mix(in srgb, #ebebed, #333338 15%));
  --tab-radius: var(--radius-s, 9px);
  --tab-radius-active: var(--tab-radius) var(--tab-radius, 9px 9px 0 0) 0 0;
  --tab-stacked-font-size: var(--font-ui-small, 11px);
  --tab-stacked-header-width: var(--header-height, 48px);
  --tab-switcher-background: var(--background-secondary, #ebebed);
  --tab-switcher-preview-radius: var(--radius-xl, 18px);
  --tab-text-align: left;
  --tab-text-color: var(--text-faint, #858587);
  --tab-text-color-active: var(--text-muted, #5c5c60);
  --tab-text-color-focused: var(--text-muted, #5c5c60);
  --tab-text-color-focused-active: var(--text-normal, #333338);
  --table-add-button-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --table-add-button-border-width: var(--table-border-width, 0);
  --table-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --table-drag-handle-color: var(--text-faint, #858587);
  --table-header-border-color: var(--table-border-color, transparent);
  --table-header-color: var(--text-normal, #333338);
  --table-header-size: var(--table-text-size, 0.933em);
  --table-text-size: var(--font-small, 0.933em);
  --tag-padding-x: 8px;
  --tag-padding-y: 4px;
  --tag-radius: 8px;
  --tag-weight: var(--font-medium, 500);
  --text-error: var(--color-red, rgb(237, 51, 59));
  --text-faint: var(--color-base-50, #858587);
  --text-muted: var(--color-base-70, #5c5c60);
  --text-normal: var(--color-base-100, #333338);
  --text-success: var(--color-green, rgb(46, 194, 126));
  --text-warning: var(--color-orange, rgb(255, 120, 0));
  --titleFont: var(--font-text-theme, "Adwaita Sans", "Adwaita Sans Text");
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, color-mix(in srgb, #ebebed, #333338 15%));
  --titlebar-border-width: 1px;
  --titlebar-text-color: var(--text-muted, #5c5c60);
  --titlebar-text-color-focused: var(--text-normal, #333338);
  --toggle-border-width: 3px;
  --toggle-s-border-width: var(--toggle-border-width, 3px);
  --toggle-s-thumb-height: var(--toggle-thumb-height, 20px);
  --toggle-s-thumb-width: var(--toggle-thumb-width, 20px);
  --toggle-s-width: var(--toggle-width, 46px);
  --toggle-thumb-color: color-mix(in srgb, white 80%, var(--background-primary));
  --toggle-thumb-height: 20px;
  --toggle-thumb-width: 20px;
  --toggle-width: 46px;
  --traffic-lights-offset-x: var(--header-height, 48px);
  --traffic-lights-offset-y: var(--header-height, 48px);
  --translucent-dark-opacity: 0%;
  --translucent-light-opacity: 0%;
  --vault-profile-color: var(--text-normal, #333338);
  --vault-profile-color-hover: var(--vault-profile-color, #333338);
  --vault-profile-font-size: var(--font-ui-small, 11px);
  --view-top-spacing-markdown: 0px;
  --workspace-background-translucent: var(--background-secondary, #ebebed);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #ebebed);
  --metadata-property-radius: var(--radius-m, 12px);
  --metadata-property-radius-focus: var(--radius-m, 12px);
  --metadata-property-radius-hover: var(--radius-m, 12px);
  background-color: var(--background-secondary, rgb(235, 235, 237));
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 6, 0.07);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #ebebed);
  --metadata-property-radius: var(--radius-m, 12px);
  --metadata-property-radius-focus: var(--radius-m, 12px);
  --metadata-property-radius-hover: var(--radius-m, 12px);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 6, 0.07);
  color: rgb(51, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(51, 51, 56));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(51, 51, 56));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(51, 51, 56));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  color: var(--italic-color, rgb(51, 51, 56));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(51, 51, 56));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-highlight, var(--text-normal));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-medium, 500);
  outline: rgb(51, 51, 56) none 0px;
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body del {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body footer {
  --status-bar-border-width: var(--border-width, 1px);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(133, 133, 135);
  border-radius: 100px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(92, 92, 96));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 92, 96) none 0px;
  text-decoration-color: rgb(92, 92, 96);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal-link.broken {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `html[saved-theme="light"] body dd {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body dt {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 51, 56);
  padding-bottom: var(--list-spacing, 2.8px);
  padding-top: var(--list-spacing, 2.8px);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 51, 56);
  padding-bottom: var(--list-spacing, 2.8px);
  padding-top: var(--list-spacing, 2.8px);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(133, 133, 135));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(243, 243, 245));
  color: var(--blockquote-color, rgb(51, 51, 56));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 25.6px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body table {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="light"] body tbody {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  color: var(--table-text-color, rgb(51, 51, 56));
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: var(--table-text-align-body, start);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: var(--table-header-color, rgb(51, 51, 56));
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: var(--table-text-align-header, start);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(243, 243, 245));
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-width: 1px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-width: 1px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: var(--code-normal, rgb(56, 58, 66));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(243, 243, 245));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #f3f3f5);
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-radius: 9px;
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-radius: 9px;
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(255, 255, 255));
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-radius: 9px;
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: var(--text-muted, rgb(92, 92, 96));
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, rgb(255, 255, 255));
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-radius: 0px 9px 9px 0px;
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgb(255, 255, 255));
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(133, 133, 135);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(133, 133, 135);
  border-right-color: rgb(133, 133, 135);
  border-top-color: rgb(133, 133, 135);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(92, 92, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(92, 92, 96);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(133, 133, 135);
  text-decoration: line-through;
  text-decoration-color: rgb(133, 133, 135);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M6.025 9.121c-.595 0-.966.313-.966.86 0 .537.39.84.966.84h7.891c.566 0 .947-.303.947-.84 0-.547-.361-.86-.947-.86h-7.89Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M6.025 9.121c-.595 0-.966.313-.966.86 0 .537.39.84.966.84h7.891c.566 0 .947-.303.947-.84 0-.547-.361-.86-.947-.86h-7.89Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.867 14.004c0 .576.508 1.045 1.094 1.045.586 0 1.094-.46 1.094-1.045 0-.586-.498-1.055-1.094-1.055-.596 0-1.094.479-1.094 1.055Zm.166-8.35.127 5.323c.01.517.293.8.8.8.49 0 .772-.273.782-.8l.137-5.313c.01-.518-.39-.898-.928-.898-.547 0-.928.37-.918.888Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.867 14.004c0 .576.508 1.045 1.094 1.045.586 0 1.094-.46 1.094-1.045 0-.586-.498-1.055-1.094-1.055-.596 0-1.094.479-1.094 1.055Zm.166-8.35.127 5.323c.01.517.293.8.8.8.49 0 .772-.273.782-.8l.137-5.313c.01-.518-.39-.898-.928-.898-.547 0-.928.37-.918.888Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.643 14.004c0 .576.507 1.045 1.093 1.045s1.094-.46 1.094-1.045c0-.586-.498-1.055-1.094-1.055-.595 0-1.093.479-1.093 1.055ZM6.924 6.553a1.665 1.665 0 0 0-.088.498c0 .449.361.693.693.693.342 0 .567-.166.752-.4l.176-.244c.361-.586.879-.918 1.553-.918.908 0 1.504.517 1.504 1.279 0 .684-.42 1.016-1.3 1.63-.722.509-1.269 1.036-1.269 2.032v.127c0 .527.293.8.81.8.509 0 .821-.322.821-.722v-.117c0-.566.322-.928 1.026-1.387.976-.644 1.68-1.23 1.68-2.441 0-1.68-1.495-2.569-3.214-2.569-1.738 0-2.87.811-3.144 1.739Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.643 14.004c0 .576.507 1.045 1.093 1.045s1.094-.46 1.094-1.045c0-.586-.498-1.055-1.094-1.055-.595 0-1.093.479-1.093 1.055ZM6.924 6.553a1.665 1.665 0 0 0-.088.498c0 .449.361.693.693.693.342 0 .567-.166.752-.4l.176-.244c.361-.586.879-.918 1.553-.918.908 0 1.504.517 1.504 1.279 0 .684-.42 1.016-1.3 1.63-.722.509-1.269 1.036-1.269 2.032v.127c0 .527.293.8.81.8.509 0 .821-.322.821-.722v-.117c0-.566.322-.928 1.026-1.387.976-.644 1.68-1.23 1.68-2.441 0-1.68-1.495-2.569-3.214-2.569-1.738 0-2.87.811-3.144 1.739Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M21.523 4.473v7.48c0 2.861-1.562 4.463-4.472 4.463h-6.602l-3.525 3.223c-.46.43-.742.625-1.123.625-.557 0-.87-.4-.87-1.006v-2.842h-.458C1.563 16.416 0 14.824 0 11.953v-7.48C0 1.602 1.563 0 4.473 0H17.05c2.91 0 4.472 1.611 4.472 4.473ZM5.898 7.148c0 1.143.713 2.032 1.856 2.032.42 0 .84-.069 1.103-.4h.079a2.863 2.863 0 0 1-1.797 1.542c-.381.098-.489.254-.489.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.879-2.413-2.187-2.413-1.211 0-2.12.84-2.12 2.041Zm5.44 0c0 1.143.713 2.032 1.846 2.032.43 0 .85-.069 1.113-.4h.078a2.855 2.855 0 0 1-1.807 1.542c-.361.098-.478.254-.478.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.89-2.413-2.198-2.413-1.21 0-2.11.84-2.11 2.041Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M21.523 4.473v7.48c0 2.861-1.562 4.463-4.472 4.463h-6.602l-3.525 3.223c-.46.43-.742.625-1.123.625-.557 0-.87-.4-.87-1.006v-2.842h-.458C1.563 16.416 0 14.824 0 11.953v-7.48C0 1.602 1.563 0 4.473 0H17.05c2.91 0 4.472 1.611 4.472 4.473ZM5.898 7.148c0 1.143.713 2.032 1.856 2.032.42 0 .84-.069 1.103-.4h.079a2.863 2.863 0 0 1-1.797 1.542c-.381.098-.489.254-.489.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.879-2.413-2.187-2.413-1.211 0-2.12.84-2.12 2.041Zm5.44 0c0 1.143.713 2.032 1.846 2.032.43 0 .85-.069 1.113-.4h.078a2.855 2.855 0 0 1-1.807 1.542c-.361.098-.478.254-.478.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.89-2.413-2.198-2.413-1.21 0-2.11.84-2.11 2.041Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(192, 97, 203);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M4.161 20.547c.4.312.908.205 1.514-.235l5.166-3.798 5.176 3.799c.605.439 1.103.546 1.513.234.4-.303.488-.8.244-1.514l-2.04-6.074 5.214-3.75c.606-.43.85-.879.694-1.367-.157-.469-.616-.694-1.368-.694h-6.396l-1.944-6.064C11.7.361 11.35 0 10.841 0c-.498 0-.85.361-1.084 1.084L7.813 7.148H1.417c-.752 0-1.211.225-1.367.694-.166.488.088.937.693 1.367l5.215 3.75-2.041 6.074c-.244.713-.156 1.211.244 1.514Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M4.161 20.547c.4.312.908.205 1.514-.235l5.166-3.798 5.176 3.799c.605.439 1.103.546 1.513.234.4-.303.488-.8.244-1.514l-2.04-6.074 5.214-3.75c.606-.43.85-.879.694-1.367-.157-.469-.616-.694-1.368-.694h-6.396l-1.944-6.064C11.7.361 11.35 0 10.841 0c-.498 0-.85.361-1.084 1.084L7.813 7.148H1.417c-.752 0-1.211.225-1.367.694-.166.488.088.937.693 1.367l5.215 3.75-2.041 6.074c-.244.713-.156 1.211.244 1.514Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 211, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3e%3cpath fill='black' d='M8.154 5.172v2.963H5.192c-.509 0-.86.352-.86.86 0 .499.351.831.86.831h2.962V12.8c0 .498.342.86.841.86.509 0 .86-.352.86-.86V9.826h2.973c.498 0 .86-.332.86-.83 0-.51-.362-.861-.86-.861H9.856V5.172c0-.508-.352-.87-.86-.87-.5 0-.842.362-.842.87Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3e%3cpath fill='black' d='M8.154 5.172v2.963H5.192c-.509 0-.86.352-.86.86 0 .499.351.831.86.831h2.962V12.8c0 .498.342.86.841.86.509 0 .86-.352.86-.86V9.826h2.973c.498 0 .86-.332.86-.83 0-.51-.362-.861-.86-.861H9.856V5.172c0-.508-.352-.87-.86-.87-.5 0-.842.362-.842.87Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='18' fill='none' viewBox='0 0 20 18'%3e%3cpath fill='black' d='M3.066 17.979h13.34c2.041 0 3.057-1.016 3.057-3.028V3.027C19.463 1.016 18.447 0 16.406 0H3.066C1.026 0 0 1.006 0 3.027v11.924c0 2.022 1.025 3.027 3.066 3.027Zm-.146-1.573c-.87 0-1.348-.459-1.348-1.367V5.83c0-.898.479-1.367 1.348-1.367h13.613c.87 0 1.358.469 1.358 1.367v9.21c0 .907-.489 1.366-1.358 1.366H2.92ZM7.832 7.97h.576c.342 0 .45-.098.45-.44v-.576c0-.342-.108-.45-.45-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.341 0-.449.108-.449.45v.576c0 .342.108.44.45.44ZM4.59 11.162h.566c.352 0 .46-.098.46-.44v-.575c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .341.108.44.46.44Zm3.242 0h.576c.342 0 .45-.098.45-.44v-.575c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.341 0-.449.098-.449.44v.576c0 .341.108.44.45.44ZM4.59 14.365h.566c.352 0 .46-.107.46-.449v-.576c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .342.108.45.46.45Zm3.242 0h.576c.342 0 .45-.107.45-.449v-.576c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.459.45Zm3.242 0h.576c.342 0 .46-.107.46-.449v-.576c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.46.45Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='18' fill='none' viewBox='0 0 20 18'%3e%3cpath fill='black' d='M3.066 17.979h13.34c2.041 0 3.057-1.016 3.057-3.028V3.027C19.463 1.016 18.447 0 16.406 0H3.066C1.026 0 0 1.006 0 3.027v11.924c0 2.022 1.025 3.027 3.066 3.027Zm-.146-1.573c-.87 0-1.348-.459-1.348-1.367V5.83c0-.898.479-1.367 1.348-1.367h13.613c.87 0 1.358.469 1.358 1.367v9.21c0 .907-.489 1.366-1.358 1.366H2.92ZM7.832 7.97h.576c.342 0 .45-.098.45-.44v-.576c0-.342-.108-.45-.45-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.341 0-.449.108-.449.45v.576c0 .342.108.44.45.44ZM4.59 11.162h.566c.352 0 .46-.098.46-.44v-.575c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .341.108.44.46.44Zm3.242 0h.576c.342 0 .45-.098.45-.44v-.575c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.341 0-.449.098-.449.44v.576c0 .341.108.44.45.44ZM4.59 14.365h.566c.352 0 .46-.107.46-.449v-.576c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .342.108.45.46.45Zm3.242 0h.576c.342 0 .45-.107.45-.449v-.576c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.459.45Zm3.242 0h.576c.342 0 .46-.107.46-.449v-.576c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.46.45Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(98, 160, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cpath fill='black' d='M11.533 0c.479 0 .801.205 1.319.693L20.557 7.9c.38.362.498.723.498 1.055 0 .322-.127.693-.498 1.045l-7.705 7.275c-.47.44-.86.635-1.338.635-.664 0-1.153-.488-1.153-1.142v-3.73h-.283c-3.78 0-6.172.956-7.871 4.15-.342.625-.791.722-1.201.722C.479 17.91 0 17.441 0 16.602c0-7.217 3.057-11.72 10.078-11.72h.283v-3.69C10.361.536 10.85 0 11.533 0Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cpath fill='black' d='M11.533 0c.479 0 .801.205 1.319.693L20.557 7.9c.38.362.498.723.498 1.055 0 .322-.127.693-.498 1.045l-7.705 7.275c-.47.44-.86.635-1.338.635-.664 0-1.153-.488-1.153-1.142v-3.73h-.283c-3.78 0-6.172.956-7.871 4.15-.342.625-.791.722-1.201.722C.479 17.91 0 17.441 0 16.602c0-7.217 3.057-11.72 10.078-11.72h.283v-3.69C10.361.536 10.85 0 11.533 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(35, 164, 173);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M9.336 20.254a9.336 9.336 0 0 0 9.336-9.336c0-5.156-4.18-9.346-9.336-9.346C4.18 1.572 0 5.762 0 10.918a9.336 9.336 0 0 0 9.336 9.336Zm-4.443-8.262a.663.663 0 0 1-.674-.674c0-.38.293-.683.674-.683h3.76V5.4a.68.68 0 1 1 1.357 0v5.918a.672.672 0 0 1-.684.674H4.893Zm-3.575-7.91c.147 0 .254-.02.391-.127l3.271-2.47c.157-.118.245-.274.245-.44 0-.205-.098-.371-.264-.527C4.59.186 3.926 0 3.34 0A2.734 2.734 0 0 0 .596 2.744c0 .361.058.723.166.947.107.245.312.391.556.391Zm16.035 0c.245 0 .45-.156.567-.39.098-.215.156-.587.156-.948A2.728 2.728 0 0 0 15.332 0c-.586 0-1.25.186-1.621.518-.166.156-.264.322-.264.527 0 .166.088.322.254.44l3.262 2.47a.568.568 0 0 0 .39.127ZM1.172 19.971a.74.74 0 0 0 1.074-.01l1.846-1.836-1.055-1.045-1.855 1.836a.743.743 0 0 0-.01 1.055Zm16.328 0a.734.734 0 0 0-.01-1.055l-1.855-1.836-1.045 1.045 1.836 1.836a.74.74 0 0 0 1.074.01Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.033v21.924H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M9.336 20.254a9.336 9.336 0 0 0 9.336-9.336c0-5.156-4.18-9.346-9.336-9.346C4.18 1.572 0 5.762 0 10.918a9.336 9.336 0 0 0 9.336 9.336Zm-4.443-8.262a.663.663 0 0 1-.674-.674c0-.38.293-.683.674-.683h3.76V5.4a.68.68 0 1 1 1.357 0v5.918a.672.672 0 0 1-.684.674H4.893Zm-3.575-7.91c.147 0 .254-.02.391-.127l3.271-2.47c.157-.118.245-.274.245-.44 0-.205-.098-.371-.264-.527C4.59.186 3.926 0 3.34 0A2.734 2.734 0 0 0 .596 2.744c0 .361.058.723.166.947.107.245.312.391.556.391Zm16.035 0c.245 0 .45-.156.567-.39.098-.215.156-.587.156-.948A2.728 2.728 0 0 0 15.332 0c-.586 0-1.25.186-1.621.518-.166.156-.264.322-.264.527 0 .166.088.322.254.44l3.262 2.47a.568.568 0 0 0 .39.127ZM1.172 19.971a.74.74 0 0 0 1.074-.01l1.846-1.836-1.055-1.045-1.855 1.836a.743.743 0 0 0-.01 1.055Zm16.328 0a.734.734 0 0 0-.01-1.055l-1.855-1.836-1.045 1.045 1.836 1.836a.74.74 0 0 0 1.074.01Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.033v21.924H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 97, 178);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='21' fill='none' viewBox='0 0 14 21'%3e%3cpath fill='black' d='M1.035 20.947c.479 0 .762-.273 1.64-1.123l3.82-3.76c.048-.048.136-.048.175 0l3.818 3.76c.88.85 1.162 1.123 1.64 1.123.655 0 1.036-.43 1.036-1.191V2.803C13.164.947 12.236 0 10.4 0H2.764C.928 0 0 .947 0 2.803v16.953c0 .762.38 1.191 1.035 1.191Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='21' fill='none' viewBox='0 0 14 21'%3e%3cpath fill='black' d='M1.035 20.947c.479 0 .762-.273 1.64-1.123l3.82-3.76c.048-.048.136-.048.175 0l3.818 3.76c.88.85 1.162 1.123 1.64 1.123.655 0 1.036-.43 1.036-1.191V2.803C13.164.947 12.236 0 10.4 0H2.764C.928 0 0 .947 0 2.803v16.953c0 .762.38 1.191 1.035 1.191Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' fill='none' viewBox='0 0 22 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M14.023 19.365a3.261 3.261 0 0 0 3.262-3.261 3.263 3.263 0 0 0-3.262-3.272 3.263 3.263 0 0 0-3.261 3.271 3.261 3.261 0 0 0 3.261 3.262Zm-7.177 0a3.261 3.261 0 0 0 3.261-3.261 3.263 3.263 0 0 0-3.261-3.272 3.263 3.263 0 0 0-3.262 3.271 3.261 3.261 0 0 0 3.262 3.262Zm10.761-6.425a3.255 3.255 0 0 0 3.262-3.262 3.255 3.255 0 0 0-3.262-3.262 3.263 3.263 0 0 0-3.271 3.262 3.263 3.263 0 0 0 3.271 3.261Zm-14.345 0a3.263 3.263 0 0 0 3.271-3.262 3.263 3.263 0 0 0-3.271-3.262 3.261 3.261 0 1 0 0 6.524Zm10.761-6.417a3.255 3.255 0 0 0 3.262-3.261A3.255 3.255 0 0 0 14.023 0a3.255 3.255 0 0 0-3.261 3.262 3.255 3.255 0 0 0 3.261 3.261Zm-7.177 0a3.255 3.255 0 0 0 3.261-3.261A3.255 3.255 0 0 0 6.846 0a3.255 3.255 0 0 0-3.262 3.262 3.255 3.255 0 0 0 3.262 3.261Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.23v19.365H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' fill='none' viewBox='0 0 22 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M14.023 19.365a3.261 3.261 0 0 0 3.262-3.261 3.263 3.263 0 0 0-3.262-3.272 3.263 3.263 0 0 0-3.261 3.271 3.261 3.261 0 0 0 3.261 3.262Zm-7.177 0a3.261 3.261 0 0 0 3.261-3.261 3.263 3.263 0 0 0-3.261-3.272 3.263 3.263 0 0 0-3.262 3.271 3.261 3.261 0 0 0 3.262 3.262Zm10.761-6.425a3.255 3.255 0 0 0 3.262-3.262 3.255 3.255 0 0 0-3.262-3.262 3.263 3.263 0 0 0-3.271 3.262 3.263 3.263 0 0 0 3.271 3.261Zm-14.345 0a3.263 3.263 0 0 0 3.271-3.262 3.263 3.263 0 0 0-3.271-3.262 3.261 3.261 0 1 0 0 6.524Zm10.761-6.417a3.255 3.255 0 0 0 3.262-3.261A3.255 3.255 0 0 0 14.023 0a3.255 3.255 0 0 0-3.261 3.262 3.255 3.255 0 0 0 3.261 3.261Zm-7.177 0a3.255 3.255 0 0 0 3.261-3.261A3.255 3.255 0 0 0 6.846 0a3.255 3.255 0 0 0-3.262 3.262 3.255 3.255 0 0 0 3.262 3.261Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.23v19.365H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 97, 178);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M19.238 6.24c0-2.89-1.816-5.312-4.228-5.312h-1.72c1.758 1.28 2.54 3.213 2.5 5.41-.03 2.442-.976 4.19-1.826 5.245h1.406c2.178 0 3.867-2.344 3.867-5.342Zm-4.756.07C14.541 2.744 11.65.05 7.11.01L5.791 0c-1.27-.01-2.207.09-2.734.236-.762.185-1.494.644-1.494 1.571 0 .371.097.655.214.86.078.117.069.224-.058.273-.596.244-1.104.82-1.104 1.582 0 .45.127.83.352 1.104.107.146.088.273-.088.38-.44.254-.752.801-.752 1.436 0 .46.146.938.4 1.172.166.137.137.234-.029.38C.195 9.25 0 9.689 0 10.245a1.69 1.69 0 0 0 1.7 1.71h3.437c.869 0 1.445.449 1.445 1.172 0 1.299-1.621 3.691-1.621 5.41 0 .918.576 1.445 1.348 1.445.693 0 1.035-.478 1.406-1.21 1.455-2.823 3.389-5.108 4.863-7.071 1.25-1.66 1.865-3.086 1.904-5.39Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M19.238 6.24c0-2.89-1.816-5.312-4.228-5.312h-1.72c1.758 1.28 2.54 3.213 2.5 5.41-.03 2.442-.976 4.19-1.826 5.245h1.406c2.178 0 3.867-2.344 3.867-5.342Zm-4.756.07C14.541 2.744 11.65.05 7.11.01L5.791 0c-1.27-.01-2.207.09-2.734.236-.762.185-1.494.644-1.494 1.571 0 .371.097.655.214.86.078.117.069.224-.058.273-.596.244-1.104.82-1.104 1.582 0 .45.127.83.352 1.104.107.146.088.273-.088.38-.44.254-.752.801-.752 1.436 0 .46.146.938.4 1.172.166.137.137.234-.029.38C.195 9.25 0 9.689 0 10.245a1.69 1.69 0 0 0 1.7 1.71h3.437c.869 0 1.445.449 1.445 1.172 0 1.299-1.621 3.691-1.621 5.41 0 .918.576 1.445 1.348 1.445.693 0 1.035-.478 1.406-1.21 1.455-2.823 3.389-5.108 4.863-7.071 1.25-1.66 1.865-3.086 1.904-5.39Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 51, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M7.402 18.447a.885.885 0 0 0 .655-.293l6.484-6.494a.879.879 0 0 0 .264-.635c0-.478-.352-.85-.84-.85a.863.863 0 0 0-.615.235l-2.227 2.188-3.73 4.082-3.711-4.082-2.227-2.188c-.146-.156-.38-.234-.615-.234-.488 0-.84.37-.84.85 0 .234.088.439.273.634l6.475 6.494c.186.196.41.293.654.293Zm0-1.045c.46 0 .772-.312.772-.771l.097-2.91V.859c0-.507-.36-.859-.869-.859-.507 0-.869.352-.869.86v12.86l.098 2.91c0 .46.312.772.771.772Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M7.402 18.447a.885.885 0 0 0 .655-.293l6.484-6.494a.879.879 0 0 0 .264-.635c0-.478-.352-.85-.84-.85a.863.863 0 0 0-.615.235l-2.227 2.188-3.73 4.082-3.711-4.082-2.227-2.188c-.146-.156-.38-.234-.615-.234-.488 0-.84.37-.84.85 0 .234.088.439.273.634l6.475 6.494c.186.196.41.293.654.293Zm0-1.045c.46 0 .772-.312.772-.771l.097-2.91V.859c0-.507-.36-.859-.869-.859-.507 0-.869.352-.869.86v12.86l.098 2.91c0 .46.312.772.771.772Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(98, 160, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='17' height='22' fill='none' viewBox='0 0 17 22'%3e%3cpath fill='black' d='M7.676 21.123c5.156 0 8.594-3.486 8.594-8.74C16.27 3.643 8.828 0 3.662 0c-.918 0-1.504.322-1.504.947 0 .244.108.498.313.733 1.162 1.386 2.324 3.037 2.343 4.96 0 .44-.048.83-.36 1.378l.487-.098c-.439-1.436-1.62-2.451-2.656-2.451-.4 0-.674.293-.674.732 0 .254.069.85.069 1.28C1.68 9.667 0 10.946 0 14.472c0 3.994 3.057 6.65 7.676 6.65Zm.224-2.744c-1.826 0-3.037-1.104-3.037-2.744 0-1.719 1.221-2.334 1.377-3.438.02-.088.078-.117.147-.058.449.4.742.888.986 1.455.518-.703.762-2.188.596-3.79-.01-.087.049-.136.136-.107 2.14 1.006 3.252 3.135 3.252 5.04 0 1.933-1.132 3.642-3.457 3.642Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='17' height='22' fill='none' viewBox='0 0 17 22'%3e%3cpath fill='black' d='M7.676 21.123c5.156 0 8.594-3.486 8.594-8.74C16.27 3.643 8.828 0 3.662 0c-.918 0-1.504.322-1.504.947 0 .244.108.498.313.733 1.162 1.386 2.324 3.037 2.343 4.96 0 .44-.048.83-.36 1.378l.487-.098c-.439-1.436-1.62-2.451-2.656-2.451-.4 0-.674.293-.674.732 0 .254.069.85.069 1.28C1.68 9.667 0 10.946 0 14.472c0 3.994 3.057 6.65 7.676 6.65Zm.224-2.744c-1.826 0-3.037-1.104-3.037-2.744 0-1.719 1.221-2.334 1.377-3.438.02-.088.078-.117.147-.058.449.4.742.888.986 1.455.518-.703.762-2.188.596-3.79-.01-.087.049-.136.136-.107 2.14 1.006 3.252 3.135 3.252 5.04 0 1.933-1.132 3.642-3.457 3.642Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.37 8.154a.721.721 0 0 0-.733.713c0 .42.322.723.732.723h1.074v4.59h-1.24a.724.724 0 0 0-.742.713c0 .42.322.722.742.722h4.092c.42 0 .742-.303.742-.722a.724.724 0 0 0-.742-.713h-1.24V9.072c0-.547-.274-.918-.791-.918H8.369Zm.185-2.988c0 .742.586 1.328 1.318 1.328.732 0 1.309-.586 1.309-1.328 0-.742-.577-1.328-1.309-1.328s-1.318.586-1.318 1.328Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.37 8.154a.721.721 0 0 0-.733.713c0 .42.322.723.732.723h1.074v4.59h-1.24a.724.724 0 0 0-.742.713c0 .42.322.722.742.722h4.092c.42 0 .742-.303.742-.722a.724.724 0 0 0-.742-.713h-1.24V9.072c0-.547-.274-.918-.791-.918H8.369Zm.185-2.988c0 .742.586 1.328 1.318 1.328.732 0 1.309-.586 1.309-1.328 0-.742-.577-1.328-1.309-1.328s-1.318.586-1.318 1.328Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(98, 160, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='22' fill='none' viewBox='0 0 21 22'%3e%3cpath fill='black' d='M4.346 12.48c-.215 0-.362.137-.381.362-.371 3.017-.518 3.095-3.574 3.594-.254.029-.391.156-.391.38 0 .215.137.342.342.372 3.086.595 3.252.576 3.623 3.584.02.234.166.37.38.37.206 0 .362-.136.382-.36.39-3.057.507-3.145 3.613-3.595.195-.019.342-.156.342-.37 0-.215-.147-.352-.342-.381-3.106-.596-3.213-.596-3.613-3.614a.367.367 0 0 0-.381-.341ZM11.982 0c-.283 0-.507.205-.546.508-.85 6.181-1.7 7.002-7.793 7.812-.313.03-.538.254-.538.547 0 .303.225.537.538.567 6.113.664 6.992 1.62 7.792 7.793.04.302.264.517.547.517.293 0 .508-.215.557-.517.81-6.172 1.68-7.13 7.793-7.793a.552.552 0 0 0 .527-.567c0-.293-.205-.517-.527-.547-6.113-.683-6.982-1.63-7.793-7.812C12.49.205 12.275 0 11.982 0Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='22' fill='none' viewBox='0 0 21 22'%3e%3cpath fill='black' d='M4.346 12.48c-.215 0-.362.137-.381.362-.371 3.017-.518 3.095-3.574 3.594-.254.029-.391.156-.391.38 0 .215.137.342.342.372 3.086.595 3.252.576 3.623 3.584.02.234.166.37.38.37.206 0 .362-.136.382-.36.39-3.057.507-3.145 3.613-3.595.195-.019.342-.156.342-.37 0-.215-.147-.352-.342-.381-3.106-.596-3.213-.596-3.613-3.614a.367.367 0 0 0-.381-.341ZM11.982 0c-.283 0-.507.205-.546.508-.85 6.181-1.7 7.002-7.793 7.812-.313.03-.538.254-.538.547 0 .303.225.537.538.567 6.113.664 6.992 1.62 7.792 7.793.04.302.264.517.547.517.293 0 .508-.215.557-.517.81-6.172 1.68-7.13 7.793-7.793a.552.552 0 0 0 .527-.567c0-.293-.205-.517-.527-.547-6.113-.683-6.982-1.63-7.793-7.812C12.49.205 12.275 0 11.982 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 211, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='25' fill='none' viewBox='0 0 13 25'%3e%3cpath fill='black' d='M6.24 0C2.764 0 0 2.764 0 6.22c0 2.608 1.563 4.913 4.004 5.84v9.64a.83.83 0 0 0 .254.614l1.63 1.641c.167.166.499.215.704.01l3.096-3.096a.487.487 0 0 0 0-.703l-1.924-1.895 2.636-2.627c.186-.195.186-.478-.02-.693l-2.607-2.627c3.018-1.201 4.698-3.428 4.698-6.103A6.22 6.22 0 0 0 6.24 0Zm0 5.723c-.908 0-1.63-.733-1.63-1.631 0-.908.712-1.631 1.63-1.631.899 0 1.631.723 1.631 1.63 0 .9-.732 1.632-1.63 1.632Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='25' fill='none' viewBox='0 0 13 25'%3e%3cpath fill='black' d='M6.24 0C2.764 0 0 2.764 0 6.22c0 2.608 1.563 4.913 4.004 5.84v9.64a.83.83 0 0 0 .254.614l1.63 1.641c.167.166.499.215.704.01l3.096-3.096a.487.487 0 0 0 0-.703l-1.924-1.895 2.636-2.627c.186-.195.186-.478-.02-.693l-2.607-2.627c3.018-1.201 4.698-3.428 4.698-6.103A6.22 6.22 0 0 0 6.24 0Zm0 5.723c-.908 0-1.63-.733-1.63-1.631 0-.908.712-1.631 1.63-1.631.899 0 1.631.723 1.631 1.63 0 .9-.732 1.632-1.63 1.632Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 211, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='21' fill='none' viewBox='0 0 8 21'%3e%3cpath fill='black' d='M7.334 3.682A3.65 3.65 0 0 1 4.57 7.236V16.3c0 2.89-.508 4.453-.908 4.453-.39 0-.908-1.572-.908-4.453V7.236A3.65 3.65 0 0 1 0 3.682C0 1.66 1.63 0 3.662 0a3.676 3.676 0 0 1 3.672 3.682ZM1.357 2.617c0 .684.586 1.27 1.26 1.27.684 0 1.25-.586 1.25-1.27 0-.674-.566-1.25-1.25-1.25-.674 0-1.26.576-1.26 1.25Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='21' fill='none' viewBox='0 0 8 21'%3e%3cpath fill='black' d='M7.334 3.682A3.65 3.65 0 0 1 4.57 7.236V16.3c0 2.89-.508 4.453-.908 4.453-.39 0-.908-1.572-.908-4.453V7.236A3.65 3.65 0 0 1 0 3.682C0 1.66 1.63 0 3.662 0a3.676 3.676 0 0 1 3.672 3.682ZM1.357 2.617c0 .684.586 1.27 1.26 1.27.684 0 1.25-.586 1.25-1.27 0-.674-.566-1.25-1.25-1.25-.674 0-1.26.576-1.26 1.25Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 51, 59);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' fill='none' viewBox='0 0 20 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M9.697 18.525c.205 0 .498-.136.713-.263 5.498-3.516 8.985-7.608 8.985-11.768 0-3.457-2.373-5.898-5.44-5.898-1.904 0-3.37 1.054-4.258 2.666C8.828 1.66 7.344.596 5.44.596 2.373.596 0 3.037 0 6.494c0 4.16 3.486 8.252 8.994 11.768.205.127.498.263.703.263Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.756v18.525H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' fill='none' viewBox='0 0 20 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M9.697 18.525c.205 0 .498-.136.713-.263 5.498-3.516 8.985-7.608 8.985-11.768 0-3.457-2.373-5.898-5.44-5.898-1.904 0-3.37 1.054-4.258 2.666C8.828 1.66 7.344.596 5.44.596 2.373.596 0 3.037 0 6.494c0 4.16 3.486 8.252 8.994 11.768.205.127.498.263.703.263Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.756v18.525H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 97, 178);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M2.668 14.63 13.322 3.985l-1.709-1.719L.95 12.911l-.928 2.178c-.097.234.157.508.391.41l2.256-.87ZM14.182 3.145l.986-.966c.498-.499.527-1.036.078-1.485l-.332-.332c-.44-.44-.976-.4-1.475.088l-.986.977 1.729 1.718Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h15.932v15.52H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M2.668 14.63 13.322 3.985l-1.709-1.719L.95 12.911l-.928 2.178c-.097.234.157.508.391.41l2.256-.87ZM14.182 3.145l.986-.966c.498-.499.527-1.036.078-1.485l-.332-.332c-.44-.44-.976-.4-1.475.088l-.986.977 1.729 1.718Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h15.932v15.52H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(98, 160, 234);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M0 13.74c0 2.89 1.807 5.313 4.229 5.313h1.718c-1.758-1.28-2.48-3.213-2.48-5.41.01-2.442.957-4.19 1.797-5.245H3.867C1.69 8.398 0 10.742 0 13.74Zm4.814-.078c0 3.565 2.784 6.318 7.325 6.318h1.328c1.26 0 2.197-.087 2.724-.234.762-.185 1.495-.654 1.495-1.572 0-.381-.098-.654-.215-.86-.078-.127-.059-.224.058-.273.606-.254 1.104-.82 1.104-1.592 0-.44-.127-.83-.342-1.094-.107-.146-.098-.283.088-.38.43-.254.742-.801.742-1.436 0-.459-.146-.937-.4-1.172-.157-.137-.127-.234.029-.38.303-.255.498-.694.498-1.25a1.69 1.69 0 0 0-1.7-1.71h-3.437c-.869 0-1.445-.449-1.445-1.172 0-1.298 1.63-3.7 1.63-5.42C14.297.528 13.712 0 12.95 0c-.703 0-1.045.479-1.416 1.21-1.455 2.823-3.388 5.108-4.863 7.061-1.25 1.66-1.856 3.096-1.856 5.391Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M0 13.74c0 2.89 1.807 5.313 4.229 5.313h1.718c-1.758-1.28-2.48-3.213-2.48-5.41.01-2.442.957-4.19 1.797-5.245H3.867C1.69 8.398 0 10.742 0 13.74Zm4.814-.078c0 3.565 2.784 6.318 7.325 6.318h1.328c1.26 0 2.197-.087 2.724-.234.762-.185 1.495-.654 1.495-1.572 0-.381-.098-.654-.215-.86-.078-.127-.059-.224.058-.273.606-.254 1.104-.82 1.104-1.592 0-.44-.127-.83-.342-1.094-.107-.146-.098-.283.088-.38.43-.254.742-.801.742-1.436 0-.459-.146-.937-.4-1.172-.157-.137-.127-.234.029-.38.303-.255.498-.694.498-1.25a1.69 1.69 0 0 0-1.7-1.71h-3.437c-.869 0-1.445-.449-1.445-1.172 0-1.298 1.63-3.7 1.63-5.42C14.297.528 13.712 0 12.95 0c-.703 0-1.045.479-1.416 1.21-1.455 2.823-3.388 5.108-4.863 7.061-1.25 1.66-1.856 3.096-1.856 5.391Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(46, 194, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' fill='none' viewBox='0 0 19 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M5 13.154c2.871 2.881 6.309 5.069 9.072 5.069 1.3 0 2.432-.518 3.174-1.348.713-.8.957-1.396.957-1.924 0-.41-.254-.79-.898-1.24l-2.383-1.709c-.596-.42-.86-.498-1.211-.498-.303 0-.557.059-1.065.332l-1.562.86c-.186.107-.264.126-.4.126-.186 0-.313-.049-.498-.127-.743-.341-1.788-1.162-2.715-2.09-.928-.927-1.65-1.875-2.022-2.607a.971.971 0 0 1-.107-.41c0-.127.068-.234.146-.371l.918-1.572c.254-.43.323-.665.323-.997 0-.38-.127-.79-.489-1.308L4.6 1.055C4.13.4 3.78 0 3.252 0 2.598 0 1.807.498 1.24 1.045.43 1.826 0 2.92 0 4.15c0 2.784 2.139 6.153 5 9.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h18.564v18.232H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' fill='none' viewBox='0 0 19 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M5 13.154c2.871 2.881 6.309 5.069 9.072 5.069 1.3 0 2.432-.518 3.174-1.348.713-.8.957-1.396.957-1.924 0-.41-.254-.79-.898-1.24l-2.383-1.709c-.596-.42-.86-.498-1.211-.498-.303 0-.557.059-1.065.332l-1.562.86c-.186.107-.264.126-.4.126-.186 0-.313-.049-.498-.127-.743-.341-1.788-1.162-2.715-2.09-.928-.927-1.65-1.875-2.022-2.607a.971.971 0 0 1-.107-.41c0-.127.068-.234.146-.371l.918-1.572c.254-.43.323-.665.323-.997 0-.38-.127-.79-.489-1.308L4.6 1.055C4.13.4 3.78 0 3.252 0 2.598 0 1.807.498 1.24 1.045.43 1.826 0 2.92 0 4.15c0 2.784 2.139 6.153 5 9.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h18.564v18.232H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(46, 194, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M8.652 16.777v-6.181c0-.4-.224-.616-.625-.616a.803.803 0 0 0-.507.176l-3.692 3.057c-.303.264-.322.664 0 .928l3.692 3.066a.812.812 0 0 0 .507.186c.4 0 .625-.225.625-.616ZM20.02 8.36a.81.81 0 0 0-.82.83v.928c0 1.67-1.163 2.764-2.93 2.764H7.216c-.45 0-.82.371-.82.81 0 .45.37.82.82.82h8.896c2.91 0 4.727-1.65 4.727-4.277V9.19a.81.81 0 0 0-.82-.83ZM12.188.635v6.181c0 .391.224.616.624.616a.812.812 0 0 0 .508-.186l3.692-3.057c.312-.253.332-.654 0-.927L13.32.195a.803.803 0 0 0-.508-.175c-.4 0-.624.214-.624.615ZM.82 9.053c.47 0 .83-.362.83-.83v-.928c0-1.67 1.153-2.774 2.92-2.774h9.063c.44 0 .81-.36.81-.81a.82.82 0 0 0-.81-.81H4.727C1.827 2.9 0 4.54 0 7.177v1.045c0 .468.361.83.82.83Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.201v17.393H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M8.652 16.777v-6.181c0-.4-.224-.616-.625-.616a.803.803 0 0 0-.507.176l-3.692 3.057c-.303.264-.322.664 0 .928l3.692 3.066a.812.812 0 0 0 .507.186c.4 0 .625-.225.625-.616ZM20.02 8.36a.81.81 0 0 0-.82.83v.928c0 1.67-1.163 2.764-2.93 2.764H7.216c-.45 0-.82.371-.82.81 0 .45.37.82.82.82h8.896c2.91 0 4.727-1.65 4.727-4.277V9.19a.81.81 0 0 0-.82-.83ZM12.188.635v6.181c0 .391.224.616.624.616a.812.812 0 0 0 .508-.186l3.692-3.057c.312-.253.332-.654 0-.927L13.32.195a.803.803 0 0 0-.508-.175c-.4 0-.624.214-.624.615ZM.82 9.053c.47 0 .83-.362.83-.83v-.928c0-1.67 1.153-2.774 2.92-2.774h9.063c.44 0 .81-.36.81-.81a.82.82 0 0 0-.81-.81H4.727C1.827 2.9 0 4.54 0 7.177v1.045c0 .468.361.83.82.83Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.201v17.393H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(35, 164, 173);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='23' fill='none' viewBox='0 0 13 23'%3e%3cpath fill='black' d='M6.24 19.639c3.301 0 6.143-1.66 6.143-4.824 0-2.93-2.295-3.975-5.02-4.63l-1.875-.458c-1.777-.43-3.252-1.202-3.252-2.891 0-1.895 2.022-2.861 3.994-2.861 2.022 0 3.487.947 4.024 2.685.156.46.459.772.967.772s.879-.352.879-.87c0-.78-.518-1.835-1.192-2.51-1.191-1.19-2.9-1.747-4.678-1.747-3.056 0-5.869 1.62-5.869 4.677 0 2.705 2.305 3.926 4.815 4.502l1.885.44c1.875.44 3.457 1.123 3.457 3.037 0 2.148-1.973 3.018-4.258 3.018-2.158 0-3.906-.87-4.424-2.813-.147-.479-.43-.752-.928-.752-.547 0-.908.371-.908.86 0 .908.596 1.962 1.27 2.607 1.318 1.24 3.173 1.758 4.97 1.758Zm-.049 2.373a.642.642 0 0 0 .635-.645V.635A.64.64 0 0 0 6.191 0a.64.64 0 0 0-.634.635v20.732c0 .352.283.645.634.645Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='23' fill='none' viewBox='0 0 13 23'%3e%3cpath fill='black' d='M6.24 19.639c3.301 0 6.143-1.66 6.143-4.824 0-2.93-2.295-3.975-5.02-4.63l-1.875-.458c-1.777-.43-3.252-1.202-3.252-2.891 0-1.895 2.022-2.861 3.994-2.861 2.022 0 3.487.947 4.024 2.685.156.46.459.772.967.772s.879-.352.879-.87c0-.78-.518-1.835-1.192-2.51-1.191-1.19-2.9-1.747-4.678-1.747-3.056 0-5.869 1.62-5.869 4.677 0 2.705 2.305 3.926 4.815 4.502l1.885.44c1.875.44 3.457 1.123 3.457 3.037 0 2.148-1.973 3.018-4.258 3.018-2.158 0-3.906-.87-4.424-2.813-.147-.479-.43-.752-.928-.752-.547 0-.908.371-.908.86 0 .908.596 1.962 1.27 2.607 1.318 1.24 3.173 1.758 4.97 1.758Zm-.049 2.373a.642.642 0 0 0 .635-.645V.635A.64.64 0 0 0 6.191 0a.64.64 0 0 0-.634.635v20.732c0 .352.283.645.634.645Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(46, 194, 126);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M4.854 11.016a.667.667 0 0 1-.684-.684c0-.38.293-.674.684-.674h4.423V3.75c0-.38.293-.674.674-.674.381 0 .684.293.684.674v6.582c0 .39-.303.684-.684.684H4.854Zm5.107 8.906c5.498 0 9.96-4.473 9.96-9.961C19.922 4.463 15.46 0 9.962 0 4.473 0 0 4.463 0 9.96c0 5.49 4.473 9.962 9.96 9.962Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20.283v19.932H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M4.854 11.016a.667.667 0 0 1-.684-.684c0-.38.293-.674.684-.674h4.423V3.75c0-.38.293-.674.674-.674.381 0 .684.293.684.674v6.582c0 .39-.303.684-.684.684H4.854Zm5.107 8.906c5.498 0 9.96-4.473 9.96-9.961C19.922 4.463 15.46 0 9.962 0 4.473 0 0 4.463 0 9.96c0 5.49 4.473 9.962 9.96 9.962Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20.283v19.932H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M.84 8.271c.234 0 .469-.078.615-.234L3.682 5.85l3.71-4.082 3.731 4.082 2.227 2.187c.156.156.38.234.615.234.488 0 .84-.37.84-.85a.879.879 0 0 0-.264-.634L8.057.293A.885.885 0 0 0 7.402 0a.885.885 0 0 0-.654.293L.273 6.787c-.185.195-.273.4-.273.635 0 .478.352.85.84.85Zm6.562 10.176c.508 0 .87-.351.87-.86V4.728l-.098-2.91c0-.46-.313-.772-.772-.772s-.771.312-.771.771l-.098 2.91v12.862c0 .508.362.86.87.86Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M.84 8.271c.234 0 .469-.078.615-.234L3.682 5.85l3.71-4.082 3.731 4.082 2.227 2.187c.156.156.38.234.615.234.488 0 .84-.37.84-.85a.879.879 0 0 0-.264-.634L8.057.293A.885.885 0 0 0 7.402 0a.885.885 0 0 0-.654.293L.273 6.787c-.185.195-.273.4-.273.635 0 .478.352.85.84.85Zm6.562 10.176c.508 0 .87-.351.87-.86V4.728l-.098-2.91c0-.46-.313-.772-.772-.772s-.771.312-.771.771l-.098 2.91v12.862c0 .508.362.86.87.86Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cpath fill='black' d='M0 3.223c0 4.033 1.934 6.552 5.791 7.734a8.289 8.289 0 0 0 1.953 1.758v4.248H6.211c-1.377 0-2.09.79-2.09 2.09v1.611c0 .44.342.742.752.742h9.356c.41 0 .752-.302.752-.742v-1.611c0-1.3-.723-2.09-2.1-2.09h-1.524v-4.248a8.07 8.07 0 0 0 1.944-1.758c3.867-1.182 5.8-3.701 5.8-7.734 0-1.006-.624-1.621-1.67-1.621h-1.894C15.381.605 14.677 0 13.497 0H5.604C4.433 0 3.72.596 3.564 1.602H1.67C.625 1.602 0 2.217 0 3.222Zm1.396.136c0-.156.118-.283.284-.283h1.836V4.99c0 1.494.39 2.881.996 4.082C2.47 8.037 1.396 6.142 1.396 3.36ZM14.58 9.072a8.947 8.947 0 0 0 1.006-4.082V3.076h1.836c.166 0 .283.127.283.283 0 2.784-1.074 4.678-3.125 5.713Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cpath fill='black' d='M0 3.223c0 4.033 1.934 6.552 5.791 7.734a8.289 8.289 0 0 0 1.953 1.758v4.248H6.211c-1.377 0-2.09.79-2.09 2.09v1.611c0 .44.342.742.752.742h9.356c.41 0 .752-.302.752-.742v-1.611c0-1.3-.723-2.09-2.1-2.09h-1.524v-4.248a8.07 8.07 0 0 0 1.944-1.758c3.867-1.182 5.8-3.701 5.8-7.734 0-1.006-.624-1.621-1.67-1.621h-1.894C15.381.605 14.677 0 13.497 0H5.604C4.433 0 3.72.596 3.564 1.602H1.67C.625 1.602 0 2.217 0 3.222Zm1.396.136c0-.156.118-.283.284-.283h1.836V4.99c0 1.494.39 2.881.996 4.082C2.47 8.037 1.396 6.142 1.396 3.36ZM14.58 9.072a8.947 8.947 0 0 0 1.006-4.082V3.076h1.836c.166 0 .283.127.283.283 0 2.784-1.074 4.678-3.125 5.713Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 120, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 35, 164, 173);
  background: rgba(35, 164, 173, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(35, 164, 173, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(35, 164, 173, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(35, 164, 173, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(35, 164, 173, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="banner-icon"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: color-mix(in srgb, #ebebed, #333338 15%);
  --background-modifier-border-focus: #c0bfbc;
  --background-modifier-border-hover: #deddda;
  --background-modifier-error: rgb(237, 51, 59);
  --background-modifier-error-hover: rgb(237, 51, 59);
  --background-modifier-error-rgb: 237, 51, 59;
  --background-modifier-form-field: color-mix(in srgb, #ebebed, #333338 10%);
  --background-modifier-form-field-hover: color-mix(in srgb, #ebebed, #333338 10%);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: rgb(46, 194, 126);
  --background-modifier-success-rgb: 46, 194, 126;
  --background-primary: #fff;
  --background-primary-alt: #fff;
  --background-secondary: #ebebed;
  --background-secondary-alt: #f3f3f5;
  --banner-fade-height: 0px;
  --banner-icon-size: 0px;
  --banner-image-height: 0px;
  --banner-image-radius: 9px;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #f3f3f5;
  --blockquote-border-color: #9a9996;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: 9px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 237, 51, 59;
  --callout-color: var(--callout-default, 98, 160, 234);
  --callout-default: 98, 160, 234;
  --callout-error: 237, 51, 59;
  --callout-example: 192, 97, 203;
  --callout-fail: 237, 51, 59;
  --callout-important: 35, 164, 173;
  --callout-info: 98, 160, 234;
  --callout-padding: 16px;
  --callout-question: 255, 120, 0;
  --callout-radius: 9px;
  --callout-size: 16px;
  --callout-success: 46, 194, 126;
  --callout-summary: 35, 164, 173;
  --callout-tip: 35, 164, 173;
  --callout-title-weight: 700;
  --callout-todo: 98, 160, 234;
  --callout-warning: 255, 120, 0;
  --canvas-background: #fff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 9px;
  --canvas-dot-pattern: #e6e5e3;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --caret-color: #333338;
  --checkbox-border-color: #858587;
  --checkbox-border-color-hover: #5c5c60;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #fff;
  --checkbox-radius: 100px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c60;
  --clickable-icon-radius: 9px;
  --code-background: #f3f3f5;
  --code-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #b6b9c5;
  --code-function: #b76b02;
  --code-important: #b76b02;
  --code-keyword: #e45749;
  --code-normal: #383a42;
  --code-operator: rgb(237, 51, 59);
  --code-property: #62afef;
  --code-punctuation: #383a42;
  --code-radius: 9px;
  --code-size: 0.8em;
  --code-string: #0d97b3;
  --code-tag: #e45749;
  --code-value: #a626a4;
  --collapse-icon-color: #858587;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: rgb(98, 160, 234);
  --color-cyan: rgb(35, 164, 173);
  --color-green: rgb(46, 194, 126);
  --color-orange: rgb(255, 120, 0);
  --color-pink: rgb(224, 97, 178);
  --color-purple: rgb(192, 97, 203);
  --color-red: rgb(237, 51, 59);
  --color-yellow: rgb(246, 211, 45);
  --divider-color: color-mix(in srgb, #ebebed, #333338 15%);
  --divider-color-hover: #9a9996;
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, #ebebed, #333338 10%);
  --dropdown-background-hover: color-mix(in srgb, #ebebed, #333338 15%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 2.4em 0 0.8em;
  --flair-background: color-mix(in srgb, #ebebed, #333338 10%);
  --flair-color: #333338;
  --font-interface: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', "Adwaita Sans", "Adwaita Sans Text", 'Arial';
  --font-text: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-ui-large: 14.96px;
  --font-ui-medium: 11px;
  --font-ui-small: 11px;
  --font-ui-smaller: 9.02px;
  --font-weight: 400;
  --graph-line: #deddda;
  --graph-node: #5c5c60;
  --graph-node-attachment: rgb(246, 211, 45);
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: rgb(46, 194, 126);
  --graph-node-unresolved: #858587;
  --graph-text: #333338;
  --h5-line-height: 1.6;
  --h6-line-height: 1.6;
  --heading-formatting: #858587;
  --heading-spacing: 2em;
  --hr-color: color-mix(in srgb, #ebebed, #333338 15%);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: color-mix(in srgb, #ebebed, #333338 15%);
  --interactive-normal: color-mix(in srgb, #ebebed, #333338 10%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --media-radius: 9px;
  --menu-background: #fff;
  --menu-border-color: color-mix(in srgb, #ebebed, #333338 10%);
  --menu-border-width: 1px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 6px;
  --menu-radius: 12px;
  --menu-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1);
  --nn-theme-file-tag-color: hsl(258, 88%, 66%);
  --nn-theme-mobile-list-header-link-color: #333338;
  --nn-theme-mobile-toolbar-button-active-bg: hsl(257, 88.88%, 70.95%);
  --nn-theme-mobile-toolbar-button-active-icon-color: white;
  --nn-theme-mobile-toolbar-button-icon-color: #333338;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(0, 0, 0, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(0, 0, 0, 0.067);
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --popover-font-size: 16px;
  --radius-l: 15px;
  --radius-m: 12px;
  --radius-s: 9px;
  --radius-xl: 18px;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c60;
  --search-icon-color: #5c5c60;
  --search-result-background: #fff;
  --setting-group-heading-color: #333338;
  --setting-group-heading-size: 11px;
  --setting-group-heading-weight: 700;
  --setting-items-background: #fff;
  --setting-items-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --setting-items-padding: 0px;
  --setting-items-radius: 12px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: #5c5c60;
  --shiki-code-background: #f3f3f5;
  --shiki-code-block-border-radius: 9px;
  --shiki-code-block-spacing: 1.75rem;
  --shiki-code-comment: #858587;
  --shiki-code-function: rgb(46, 194, 126);
  --shiki-code-important: rgb(255, 120, 0);
  --shiki-code-keyword: rgb(224, 97, 178);
  --shiki-code-normal: #5c5c60;
  --shiki-code-property: rgb(35, 164, 173);
  --shiki-code-punctuation: #5c5c60;
  --shiki-code-string: rgb(246, 211, 45);
  --shiki-code-value: rgb(192, 97, 203);
  --shiki-gutter-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #858587;
  --shiki-gutter-text-color-highlight: #5c5c60;
  --shiki-highlight-green: rgba(46, 194, 126, 0.5);
  --shiki-highlight-green-background: rgba(46, 194, 126, 0.1);
  --shiki-highlight-neutral: #5c5c60;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(237, 51, 59, 0.5);
  --shiki-highlight-red-background: rgba(237, 51, 59, 0.1);
  --shiki-terminal-dots-color: #858587;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #fff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(237, 51, 59);
  --sync-avatar-color-2: rgb(255, 120, 0);
  --sync-avatar-color-3: rgb(246, 211, 45);
  --sync-avatar-color-4: rgb(46, 194, 126);
  --sync-avatar-color-5: rgb(35, 164, 173);
  --sync-avatar-color-6: rgb(98, 160, 234);
  --sync-avatar-color-7: rgb(192, 97, 203);
  --sync-avatar-color-8: rgb(224, 97, 178);
  --tab-background-active: #fff;
  --tab-curve: 0;
  --tab-divider-color: color-mix(in srgb, #ebebed, #333338 15%);
  --tab-font-size: 11px;
  --tab-max-width: 200px;
  --tab-outline-color: color-mix(in srgb, #ebebed, #333338 15%);
  --tab-radius: 9px;
  --tab-radius-active: 9px;
  --tab-stacked-font-size: 11px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #ebebed;
  --tab-switcher-menubar-background: linear-gradient(to top, #ebebed, transparent);
  --tab-switcher-preview-radius: 18px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #858587;
  --tab-text-color-active: #5c5c60;
  --tab-text-color-focused: #5c5c60;
  --tab-text-color-focused-active: #333338;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #858587;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: transparent;
  --table-header-border-width: 1px;
  --table-header-color: #333338;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 0.933em;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --tag-weight: 500;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: rgb(237, 51, 59);
  --text-faint: #858587;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c60;
  --text-normal: #333338;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: rgb(46, 194, 126);
  --text-warning: rgb(255, 120, 0);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--callout-size, 16px);
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 237, 51, 59);
  background: rgba(237, 51, 59, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(237, 51, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 237, 51, 59);
  background: rgba(237, 51, 59, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(237, 51, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 192, 97, 203);
  background: rgba(192, 97, 203, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(192, 97, 203, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(192, 97, 203, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(192, 97, 203, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(192, 97, 203, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 237, 51, 59);
  background: rgba(237, 51, 59, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(237, 51, 59, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(237, 51, 59, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(237, 51, 59, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(237, 51, 59, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 98, 160, 234);
  background: rgba(98, 160, 234, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 98, 160, 234);
  background: rgba(98, 160, 234, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: color-mix(in srgb, #ebebed, #333338 15%);
  --background-modifier-border-focus: #c0bfbc;
  --background-modifier-border-hover: #deddda;
  --background-modifier-error: rgb(237, 51, 59);
  --background-modifier-error-hover: rgb(237, 51, 59);
  --background-modifier-error-rgb: 237, 51, 59;
  --background-modifier-form-field: color-mix(in srgb, #ebebed, #333338 10%);
  --background-modifier-form-field-hover: color-mix(in srgb, #ebebed, #333338 10%);
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: rgb(46, 194, 126);
  --background-modifier-success-rgb: 46, 194, 126;
  --background-primary: #fff;
  --background-primary-alt: #fff;
  --background-secondary: #ebebed;
  --background-secondary-alt: #f3f3f5;
  --banner-fade-height: 0px;
  --banner-icon-size: 0px;
  --banner-image-height: 0px;
  --banner-image-radius: 9px;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #f3f3f5;
  --blockquote-border-color: #9a9996;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: 9px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 237, 51, 59;
  --callout-color: var(--callout-default, 98, 160, 234);
  --callout-default: 98, 160, 234;
  --callout-error: 237, 51, 59;
  --callout-example: 192, 97, 203;
  --callout-fail: 237, 51, 59;
  --callout-important: 35, 164, 173;
  --callout-info: 98, 160, 234;
  --callout-padding: 16px;
  --callout-question: 255, 120, 0;
  --callout-radius: 9px;
  --callout-size: 16px;
  --callout-success: 46, 194, 126;
  --callout-summary: 35, 164, 173;
  --callout-tip: 35, 164, 173;
  --callout-title-weight: 700;
  --callout-todo: 98, 160, 234;
  --callout-warning: 255, 120, 0;
  --canvas-background: #fff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 9px;
  --canvas-dot-pattern: #e6e5e3;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --caret-color: #333338;
  --checkbox-border-color: #858587;
  --checkbox-border-color-hover: #5c5c60;
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: #fff;
  --checkbox-radius: 100px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c60;
  --clickable-icon-radius: 9px;
  --code-background: #f3f3f5;
  --code-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #b6b9c5;
  --code-function: #b76b02;
  --code-important: #b76b02;
  --code-keyword: #e45749;
  --code-normal: #383a42;
  --code-operator: rgb(237, 51, 59);
  --code-property: #62afef;
  --code-punctuation: #383a42;
  --code-radius: 9px;
  --code-size: 0.8em;
  --code-string: #0d97b3;
  --code-tag: #e45749;
  --code-value: #a626a4;
  --collapse-icon-color: #858587;
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: rgb(98, 160, 234);
  --color-cyan: rgb(35, 164, 173);
  --color-green: rgb(46, 194, 126);
  --color-orange: rgb(255, 120, 0);
  --color-pink: rgb(224, 97, 178);
  --color-purple: rgb(192, 97, 203);
  --color-red: rgb(237, 51, 59);
  --color-yellow: rgb(246, 211, 45);
  --divider-color: color-mix(in srgb, #ebebed, #333338 15%);
  --divider-color-hover: #9a9996;
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, #ebebed, #333338 10%);
  --dropdown-background-hover: color-mix(in srgb, #ebebed, #333338 15%);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 2.4em 0 0.8em;
  --flair-background: color-mix(in srgb, #ebebed, #333338 10%);
  --flair-color: #333338;
  --font-interface: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', "Adwaita Sans", "Adwaita Sans Text", 'Arial';
  --font-text: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-ui-large: 14.96px;
  --font-ui-medium: 11px;
  --font-ui-small: 11px;
  --font-ui-smaller: 9.02px;
  --font-weight: 400;
  --graph-line: #deddda;
  --graph-node: #5c5c60;
  --graph-node-attachment: rgb(246, 211, 45);
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: rgb(46, 194, 126);
  --graph-node-unresolved: #858587;
  --graph-text: #333338;
  --h5-line-height: 1.6;
  --h6-line-height: 1.6;
  --heading-formatting: #858587;
  --heading-spacing: 2em;
  --hr-color: color-mix(in srgb, #ebebed, #333338 15%);
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: color-mix(in srgb, #ebebed, #333338 15%);
  --interactive-normal: color-mix(in srgb, #ebebed, #333338 10%);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --media-radius: 9px;
  --menu-background: #fff;
  --menu-border-color: color-mix(in srgb, #ebebed, #333338 10%);
  --menu-border-width: 1px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 6px;
  --menu-radius: 12px;
  --menu-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1);
  --nn-theme-file-tag-color: hsl(258, 88%, 66%);
  --nn-theme-mobile-list-header-link-color: #333338;
  --nn-theme-mobile-toolbar-button-active-bg: hsl(257, 88.88%, 70.95%);
  --nn-theme-mobile-toolbar-button-active-icon-color: white;
  --nn-theme-mobile-toolbar-button-icon-color: #333338;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(0, 0, 0, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(0, 0, 0, 0.067);
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --popover-font-size: 16px;
  --radius-l: 15px;
  --radius-m: 12px;
  --radius-s: 9px;
  --radius-xl: 18px;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 15px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c60;
  --search-icon-color: #5c5c60;
  --search-result-background: #fff;
  --setting-group-heading-color: #333338;
  --setting-group-heading-size: 11px;
  --setting-group-heading-weight: 700;
  --setting-items-background: #fff;
  --setting-items-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --setting-items-padding: 0px;
  --setting-items-radius: 12px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: #5c5c60;
  --shiki-code-background: #f3f3f5;
  --shiki-code-block-border-radius: 9px;
  --shiki-code-block-spacing: 1.75rem;
  --shiki-code-comment: #858587;
  --shiki-code-function: rgb(46, 194, 126);
  --shiki-code-important: rgb(255, 120, 0);
  --shiki-code-keyword: rgb(224, 97, 178);
  --shiki-code-normal: #5c5c60;
  --shiki-code-property: rgb(35, 164, 173);
  --shiki-code-punctuation: #5c5c60;
  --shiki-code-string: rgb(246, 211, 45);
  --shiki-code-value: rgb(192, 97, 203);
  --shiki-gutter-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #858587;
  --shiki-gutter-text-color-highlight: #5c5c60;
  --shiki-highlight-green: rgba(46, 194, 126, 0.5);
  --shiki-highlight-green-background: rgba(46, 194, 126, 0.1);
  --shiki-highlight-neutral: #5c5c60;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(237, 51, 59, 0.5);
  --shiki-highlight-red-background: rgba(237, 51, 59, 0.1);
  --shiki-terminal-dots-color: #858587;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #fff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(237, 51, 59);
  --sync-avatar-color-2: rgb(255, 120, 0);
  --sync-avatar-color-3: rgb(246, 211, 45);
  --sync-avatar-color-4: rgb(46, 194, 126);
  --sync-avatar-color-5: rgb(35, 164, 173);
  --sync-avatar-color-6: rgb(98, 160, 234);
  --sync-avatar-color-7: rgb(192, 97, 203);
  --sync-avatar-color-8: rgb(224, 97, 178);
  --tab-background-active: #fff;
  --tab-curve: 0;
  --tab-divider-color: color-mix(in srgb, #ebebed, #333338 15%);
  --tab-font-size: 11px;
  --tab-max-width: 200px;
  --tab-outline-color: color-mix(in srgb, #ebebed, #333338 15%);
  --tab-radius: 9px;
  --tab-radius-active: 9px;
  --tab-stacked-font-size: 11px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #ebebed;
  --tab-switcher-menubar-background: linear-gradient(to top, #ebebed, transparent);
  --tab-switcher-preview-radius: 18px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #858587;
  --tab-text-color-active: #5c5c60;
  --tab-text-color-focused: #5c5c60;
  --tab-text-color-focused-active: #333338;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: #858587;
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: transparent;
  --table-header-border-width: 1px;
  --table-header-color: #333338;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 0.933em;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --tag-weight: 500;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: rgb(237, 51, 59);
  --text-faint: #858587;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c60;
  --text-normal: #333338;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: rgb(46, 194, 126);
  --text-warning: rgb(255, 120, 0);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 16px;
  line-height: 25.6px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 120, 0);
  background: rgba(255, 120, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 120, 0, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 120, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 120, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 120, 0, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 46, 194, 126);
  background: rgba(46, 194, 126, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(46, 194, 126, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(46, 194, 126, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(46, 194, 126, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(46, 194, 126, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 35, 164, 173);
  background: rgba(35, 164, 173, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(35, 164, 173, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(35, 164, 173, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(35, 164, 173, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(35, 164, 173, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 98, 160, 234);
  background: rgba(98, 160, 234, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 120, 0);
  background: rgba(255, 120, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 120, 0, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 120, 0, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(255, 120, 0, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(255, 120, 0, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 98, 160, 234;
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="banner-icon"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: color(srgb 0.849412 0.849412 0.858431);
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-width: 0px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-width: 0px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(51, 51, 56));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgb(235, 235, 237));
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-width: 0px;
  border-left-color: rgb(51, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-top-width: 0px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.15) 0px 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px 0px 5px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  background-color: rgb(243, 243, 245);
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-bottom-width: 0px;
  border-left-color: rgb(51, 51, 56);
  border-left-width: 0px;
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: var(--divider-color, rgb(51, 51, 56));
  border-bottom-width: 0px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --icon-size: var(--icon-xs, 14px);
  --icon-stroke: var(--icon-xs-stroke-width, 2.25px);
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 4px);
  --pill-radius: var(--tag-radius, 8px);
  --pill-weight: var(--tag-weight, 500);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
  line-height: var(--line-height-tight, 18.2px);
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: var(--h1-color, rgb(51, 51, 56));
  font-family: var(--h1-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h1-size, 24px);
  line-height: var(--h1-line-height, 28.8px);
  margin-bottom: 28px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(51, 51, 56));
  font-size: var(--inline-title-size, 24px);
}

html[saved-theme="light"] body h2 {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: var(--h2-color, rgb(51, 51, 56));
  font-family: var(--h2-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h2-size, 20px);
  line-height: var(--h2-line-height, 24px);
  margin-bottom: 28px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: var(--inline-title-color, rgb(51, 51, 56));
  font-family: var(--inline-title-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--inline-title-size, 24px);
  line-height: var(--inline-title-line-height, 28.8px);
  margin-bottom: 12px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a::before {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  color: var(--inline-title-color, rgb(51, 51, 56));
  content: "";
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 714px;
}

html[saved-theme="light"] body h3 {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: var(--h3-color, rgb(51, 51, 56));
  font-family: var(--h3-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h3-size, 18px);
  line-height: var(--h3-line-height, 23.4px);
  margin-bottom: 28px;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="light"] body h4 {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: var(--h4-color, rgb(51, 51, 56));
  font-family: var(--h4-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h4-size, 16px);
  line-height: var(--h4-line-height, 22.4px);
  margin-bottom: 28px;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="light"] body h5 {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: var(--h5-color, rgb(51, 51, 56));
  font-family: var(--h5-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h5-size, 16px);
  line-height: var(--h5-line-height, 25.6px);
  margin-bottom: 28px;
  margin-top: var(--heading-spacing, 28px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: var(--h6-color, rgb(51, 51, 56));
  font-family: var(--h6-font, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--h6-size, 14px);
  line-height: var(--h6-line-height, 22.4px);
  margin-bottom: 28px;
  margin-top: 28px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 6, 0.07);
  border-left-color: rgba(0, 0, 6, 0.07);
  border-right-color: rgba(0, 0, 6, 0.07);
  border-top-color: rgba(0, 0, 6, 0.07);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 98, 160, 234);
  border-bottom-color: rgba(98, 160, 234, 0.25);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-color: rgba(98, 160, 234, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(98, 160, 234, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(98, 160, 234, 0.25);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(92, 92, 96));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(92, 92, 96));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="light"] body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(51, 51, 56);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: var(--icon-color, rgb(92, 92, 96));
}`,
    footer: `html[saved-theme="light"] body footer {
  --status-bar-border-width: var(--border-width, 1px);
  background-color: rgba(var(--mono-rgb-100), 0.2);
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 1380px;
  border-bottom-right-radius: 1380px;
  border-left-color: rgb(92, 92, 96);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 1380px;
  border-top-right-radius: 1380px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, rgb(92, 92, 96));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: var(--status-bar-font-size, 9.02px);
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(92, 92, 96);
  font-size: 9.02px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(92, 92, 96));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(92, 92, 96));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: var(--icon-color, rgb(92, 92, 96));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(92, 92, 96);
  stroke: rgb(92, 92, 96);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(133, 133, 135);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(133, 133, 135);
  border-right-color: rgb(133, 133, 135);
  border-top-color: rgb(133, 133, 135);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(133, 133, 135);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(133, 133, 135));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--background-primary-alt, rgba(0, 0, 0, 0));
  color: var(--text-normal-editor, var(--text-normal));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(51, 51, 56);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0) rgb(51, 51, 56) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  color: var(--table-header-color, rgb(51, 51, 56));
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  color: var(--text-muted, rgb(92, 92, 96));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-container .metadata-property {
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  background-color: var(--background-primary-alt, rgb(255, 255, 255));
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-property-key {
  color: rgb(92, 92, 96);
  font-family: var(--metadata-label-font, "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .metadata-property-value {
  color: rgb(92, 92, 96);
  font-family: var(--metadata-input-font, "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .note-properties {
  border-color: color(srgb 0.813333 0.813333 0.822941);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(92, 92, 96);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(92, 92, 96);
}

html[saved-theme="light"] body .note-properties-tags {
  --icon-size: var(--icon-xs, 14px);
  --icon-stroke: var(--icon-xs-stroke-width, 2.25px);
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 4px);
  --pill-radius: var(--tag-radius, 8px);
  --pill-weight: var(--tag-weight, 500);
  border-radius: 8px;
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(92, 92, 96);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-secondary, rgb(255, 255, 255));
  color: var(--text-normal, rgb(51, 51, 56));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(51, 51, 56);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body .navigation-progress {
  --status-bar-border-width: var(--border-width, 1px);
  background-color: rgba(var(--mono-rgb-100), 0.2);
}

html[saved-theme="light"] body .page-header h2.page-title {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: var(--text-normal, rgb(51, 51, 56));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 11px;
  font-weight: max(var(--file-header-font-weight),var(--font-medium));
  line-height: 14.3px;
}

html[saved-theme="light"] body abbr {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(92, 92, 96);
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  color: var(--text-normal, rgb(92, 92, 96));
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--background-secondary, rgb(235, 235, 237));
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: var(--shadow-tactile, rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px);
  color: var(--text-muted, rgb(92, 92, 96));
  font-family: var(--font-text, "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--code-size, 12.8px);
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body summary {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 51, 56);
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
  },
};
