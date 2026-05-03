import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "baseline",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    fontFiles: [
      {
        family: "Instrument Serif",
        style: "italic",
        weight: "100 1000",
        file: "instrument-serif.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Instrument Serif",
        style: "normal",
        weight: "100 1000",
        file: "instrument-serif-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anim-duration-fast: calc(160ms*var(--anim-speed-modifier));
  --anim-duration-moderate: calc(320ms*var(--anim-speed-modifier));
  --anim-duration-slow: calc(480ms*var(--anim-speed-modifier));
  --anim-duration-superfast: calc(80ms*var(--anim-speed-modifier));
  --anim-motion-baseline: cubic-bezier(0.1, 0, 0.1, 1.25);
  --anim-speed-modifier: 1;
  --background-modifier-cover: rgba(0, 0, 0, 0.35);
  --background-modifier-error: var(--color-red, rgb(217, 90, 95));
  --background-modifier-error-hover: var(--color-red, rgb(217, 90, 95));
  --background-modifier-error-rgb: var(--color-red-rgb, 217, 90, 95);
  --background-modifier-form-field: var(--interactive-normal, #363636);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #363636);
  --background-modifier-success: var(--color-green, rgb(72, 196, 90));
  --background-modifier-success-rgb: var(--color-green-rgb, 72, 196, 90);
  --banner-fade-height: 80px;
  --banner-icon-size: 3rem;
  --banner-image-height: 320px;
  --banner-image-height-s: 240px;
  --banner-image-inset: 8px;
  --banner-image-object-fit: cover;
  --banner-image-radius: var(--radius-s, 8px);
  --banner-mobile-offset: 0px;
  --bases-cards-corner-shape: var(--corner-shape, superellipse(1.1));
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-radius: var(--radius-s, 8px);
  --bases-group-heading-property-size: var(--font-ui-smaller, 12px);
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-header-color: var(--text-faint, #666666);
  --block-width-max: calc(100cqw - var(--file-margins-x)*2);
  --block-width-offset: calc(var(--file-margins-x)*-1);
  --block-width-wide: min(100cqw, var(--line-width-wide));
  --blockquote-background-color: var(--background-primary-alt, #242424);
  --blockquote-border-color: var(--color-base-50, #666666);
  --blockquote-size: var(--font-text-size, 16px);
  --bodyFont: var(--font-text-theme, Inter);
  --bold-modifier: 300;
  --button-corner-shape: var(--corner-shape, superellipse(1.1));
  --button-radius: calc((8px*var(--radius-modifier))*(1 - var(--radius-modifier-check)) + 100vh*var(--radius-modifier-check));
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-width: var(--divider-width, 1px);
  --callout-bug: var(--color-red-rgb, 217, 90, 95);
  --callout-default: var(--color-blue-rgb, 86, 148, 218);
  --callout-error: var(--color-red-rgb, 217, 90, 95);
  --callout-example: var(--color-purple-rgb, 142, 125, 194);
  --callout-fail: var(--color-red-rgb, 217, 90, 95);
  --callout-important: var(--color-cyan-rgb, 63, 186, 182);
  --callout-info: var(--color-blue-rgb, 86, 148, 218);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--color-orange-rgb, 219, 134, 80);
  --callout-radius: var(--radius-s, 8px);
  --callout-size: var(--font-text-size, 16px);
  --callout-success: var(--color-green-rgb, 72, 196, 90);
  --callout-summary: var(--color-cyan-rgb, 63, 186, 182);
  --callout-tip: var(--color-cyan-rgb, 63, 186, 182);
  --callout-todo: var(--color-blue-rgb, 86, 148, 218);
  --callout-warning: var(--color-orange-rgb, 219, 134, 80);
  --canvas-color-1: var(--color-red-rgb, 217, 90, 95);
  --canvas-color-2: var(--color-orange-rgb, 219, 134, 80);
  --canvas-color-3: var(--color-yellow-rgb, 196, 180, 94);
  --canvas-color-4: var(--color-green-rgb, 72, 196, 90);
  --canvas-color-5: var(--color-cyan-rgb, 63, 186, 182);
  --canvas-color-6: var(--color-purple-rgb, 142, 125, 194);
  --canvas-controls-icon-size: var(--icon-s, 16px);
  --canvas-controls-icon-stroke: var(--icon-s-stroke-width, 2px);
  --canvas-controls-radius: var(--radius-s, 8px);
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
  --checkbox-color: var(--interactive-accent, #dadada);
  --checkbox-color-hover: var(--interactive-accent-hover, rgb(from #dadada r g b / 80%));
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-border-width: 1px;
  --code-comment: var(--text-faint, #5c6370);
  --code-function: var(--color-yellow, #d19a66);
  --code-important: var(--color-orange, #d19a66);
  --code-keyword: var(--color-pink, #e16d76);
  --code-normal: var(--text-normal, #abb2bf);
  --code-operator: var(--color-red, rgb(217, 90, 95));
  --code-property: var(--color-cyan, #62afef);
  --code-punctuation: var(--text-muted, #abb2bf);
  --code-radius: var(--radius-s, 8px);
  --code-size: var(--font-smallest, 0.8em);
  --code-string: var(--color-green, #58b6c2);
  --code-tag: var(--color-red, #e16d76);
  --code-value: var(--color-purple, #c678de);
  --collapse-icon-color-collapsed: var(--text-muted, #b3b3b3);
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 86, 148, 218;
  --color-cyan: rgb(var(--color-cyan-rgb));
  --color-cyan-rgb: 63, 186, 182;
  --color-green: rgb(var(--color-green-rgb));
  --color-green-rgb: 72, 196, 90;
  --color-orange: rgb(var(--color-orange-rgb));
  --color-orange-rgb: 219, 134, 80;
  --color-pink: rgb(var(--color-pink-rgb));
  --color-pink-rgb: 222, 103, 147;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 142, 125, 194;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 217, 90, 95;
  --color-yellow: rgb(var(--color-yellow-rgb));
  --color-yellow-rgb: 196, 180, 94;
  --corner-shape: superellipse(1.1);
  --density-modifier: 1;
  --divider-color-hover: var(--color-base-50, #666666);
  --embed-background: var(--background-primary-alt, #242424);
  --embed-border-start: var(--embed-border-thickness, 2px) solid var(--embed-border-color, var(--color-base-50));
  --embed-max-height: none;
  --file-header-border: var(--border-width, none) solid transparent;
  --file-header-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 13px);
  --file-line-width: var(--line-width, 700px);
  --font-interface-theme: Inter;
  --font-mermaid: var(--font-text, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: Inter;
  --font-ui-large: calc(20px + var(--font-ui-modifier));
  --font-ui-medium: calc(15px + var(--font-ui-modifier));
  --font-ui-modifier: 0px;
  --font-ui-small: calc(13px + var(--font-ui-modifier));
  --font-ui-smaller: calc(12px + var(--font-ui-modifier));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --footnote-radius: var(--radius-s, 8px);
  --frame-right-space: 144px;
  --graph-node-attachment: var(--color-yellow, rgb(196, 180, 94));
  --graph-node-tag: var(--color-green, rgb(72, 196, 90));
  --h1-font: var(--font-text-override), "Instrument Serif";
  --h2-font: var(--font-text-override), "Instrument Serif";
  --h3-font: var(--font-text-override), "Instrument Serif";
  --h4-font: var(--font-text-override), "Instrument Serif";
  --h5-font: var(--font-text-override), "Instrument Serif";
  --h5-line-height: var(--line-height-normal, 1.6);
  --h6-font: var(--font-text-override), "Instrument Serif";
  --h6-line-height: var(--line-height-normal, 1.6);
  --header-height: 48px;
  --headerFont: var(--font-text-theme, Inter);
  --hover-sidedock-delay: 160ms;
  --hover-sidedock-trigger-area: 4px;
  --hover-sidedock-width: 320px;
  --hr-align: center;
  --hr-dashed-size: 1em;
  --hr-dashed-spacing: 0.5em;
  --hr-width: 100%;
  --icon-l: calc(16px + var(--icon-size-modifier));
  --icon-l-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-m: calc(16px + var(--icon-size-modifier));
  --icon-m-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-opacity: 1;
  --icon-s: calc(16px + var(--icon-size-modifier));
  --icon-s-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-size: var(--icon-m, 16px);
  --icon-size-modifier: 0px;
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --icon-stroke-modifier: 1;
  --icon-xl: calc(32px + var(--icon-size-modifier));
  --icon-xl-stroke-width: calc(1.25px*var(--icon-stroke-modifier));
  --icon-xs: calc(14px + var(--icon-size-modifier));
  --icon-xs-stroke-width: calc(2.25px*var(--icon-stroke-modifier));
  --indentation-guide-width: var(--border-width, 0px);
  --inline-title-font: var(--font-text-override), "Instrument Serif";
  --inline-title-margin-bottom: calc(0.5em*var(--readable-spacing-modifier, 1));
  --input-corner-shape: var(--corner-shape, superellipse(1.1));
  --input-font-weight: var(--font-medium, 500);
  --input-height: 32px;
  --input-radius: var(--radius-s, 8px);
  --input-shadow: inset 0 0 0 var(--input-border-width) var(--interactive-accent);
  --input-shadow-hover: inset 0 0 0 var(--input-border-width) var(--interactive-accent-hover);
  --interactive-accent: var(--color-base-100, #dadada);
  --interactive-accent-hover: rgb(from var(--color-base-100) r g b / 80%);
  --line-height-normal: 1.6;
  --line-width: 700px;
  --line-width-wide: 50rem;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-spacing: 0.175em;
  --media-radius: var(--radius-s, 8px);
  --menu-border-color: var(--background-modifier-border, #363636);
  --menu-corner-shape: var(--corner-shape, superellipse(1.1));
  --menu-padding: var(--size-2-3, 4px);
  --menu-radius: var(--radius-m, 12px);
  --menu-shadow: var(--shadow-s, rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px);
  --metadata-gap: 8px;
  --metadata-input-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-width: calc(9em*var(--metadata-label-width-modifier, 1));
  --metadata-property-corner-shape: var(--corner-shape, superellipse(1.1));
  --metadata-property-corner-shape-focus: var(--corner-shape, superellipse(1.1));
  --metadata-property-corner-shape-hover: var(--corner-shape, superellipse(1.1));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 13px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 13px);
  --modal-background: var(--background-secondary, #262626);
  --modal-border-color: var(--background-modifier-border, #363636);
  --modal-radius: var(--radius-l, 20px);
  --nav-indentation-guide-width: var(--indentation-guide-width, 0px);
  --nav-item-children-margin-start: calc(20px - var(--nav-indentation-guide-width)/2);
  --nav-item-padding: calc(8px*var(--density-modifier)) 16px calc(8px*var(--density-modifier)) 32px;
  --nav-item-parent-padding: var(--nav-item-padding, 8px 16px 8px 32px);
  --nav-item-radius: var(--radius-s, 8px);
  --nav-item-size: var(--font-ui-small, 13px);
  --nav-tag-radius: var(--radius-s, 8px);
  --nn-theme-file-border-radius: var(--radius-m, 12px);
  --nn-theme-file-tag-bg: var(--tag-background, hsla(258, 88%, 66%, 0.1));
  --nn-theme-file-tag-color: var(--tag-color, hsl(255, 89.76%, 75.9%));
  --nn-theme-list-bg: transparent;
  --nn-theme-list-header-bg: transparent;
  --nn-theme-mobile-list-header-link-color: var(--text-normal, #dadada);
  --nn-theme-mobile-nav-bg: transparent;
  --nn-theme-mobile-toolbar-button-active-bg: var(--interactive-accent, #dadada);
  --nn-theme-mobile-toolbar-button-active-icon-color: var(--text-on-accent, #1e1e1e);
  --nn-theme-mobile-toolbar-button-icon-color: var(--text-normal, #dadada);
  --nn-theme-nav-bg: transparent;
  --nn-theme-nav-header-bg: transparent;
  --nn-theme-navitem-border-radius: var(--radius-m, 12px);
  --nn-theme-navitem-selected-bg: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nn-theme-navitem-selected-inactive-bg: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --p-spacing: 1.75rem;
  --prompt-border-color: var(--background-modifier-border, #363636);
  --prompt-input-height: 64px;
  --radius-l: calc(20px*var(--radius-modifier));
  --radius-m: calc(12px*var(--radius-modifier));
  --radius-modifier: 1;
  --radius-modifier-check: clamp(0, (var(--radius-modifier) - 1) * 10000 + 1, 1);
  --radius-s: calc(8px*var(--radius-modifier));
  --radius-xl: calc(28px*var(--radius-modifier));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--ribbon-background, transparent);
  --scrollbar-radius: var(--radius-l, 20px);
  --secondary: var(--interactive-accent, var(--color-base-100, #dadada));
  --setting-group-heading-color: var(--text-faint, #666666);
  --setting-group-heading-size: var(--font-ui-small, 13px);
  --setting-items-padding: calc(16px*var(--density-modifier)) 16px;
  --setting-items-radius: var(--radius-m, 12px);
  --shadow-l: 0 14px 62px #00000040;
  --shadow-s: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(var(--mono-rgb-100), 0.04) 0px 2px 4px -2px;
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-block-spacing: var(--p-spacing, 1.75rem);
  --shiki-code-function: var(--color-green, rgb(72, 196, 90));
  --shiki-code-important: var(--color-orange, rgb(219, 134, 80));
  --shiki-code-keyword: var(--color-pink, rgb(222, 103, 147));
  --shiki-code-property: var(--color-cyan, rgb(63, 186, 182));
  --shiki-code-string: var(--color-yellow, rgb(196, 180, 94));
  --shiki-code-value: var(--color-purple, rgb(142, 125, 194));
  --status-bar-font-size: var(--font-ui-smaller, 12px);
  --status-bar-radius: var(--radius-m, 12px 0 0 0) 0 0 0;
  --sync-avatar-color-1: var(--color-red, rgb(217, 90, 95));
  --sync-avatar-color-2: var(--color-orange, rgb(219, 134, 80));
  --sync-avatar-color-3: var(--color-yellow, rgb(196, 180, 94));
  --sync-avatar-color-4: var(--color-green, rgb(72, 196, 90));
  --sync-avatar-color-5: var(--color-cyan, rgb(63, 186, 182));
  --sync-avatar-color-6: var(--color-blue, rgb(86, 148, 218));
  --sync-avatar-color-7: var(--color-purple, rgb(142, 125, 194));
  --sync-avatar-color-8: var(--color-pink, rgb(222, 103, 147));
  --tab-action-width: 32px;
  --tab-curve: calc(var(--tab-radius) + 4px);
  --tab-divider-color: var(--background-modifier-border, #363636);
  --tab-font-size: var(--font-ui-small, 13px);
  --tab-max-width: var(--tab-width, 200px);
  --tab-outline-width: 0px;
  --tab-radius: var(--radius-s, 8px);
  --tab-radius-active: var(--tab-radius) var(--tab-radius, 8px 8px 0 0) 0 0;
  --tab-stacked-font-size: var(--font-ui-small, 13px);
  --tab-stacked-header-width: var(--header-height, 48px);
  --tab-switcher-preview-radius: var(--radius-xl, 28px);
  --tab-text-align: left;
  --tab-text-color-focused-active: var(--text-normal, #dadada);
  --table-add-button-border-width: var(--table-border-width, 0);
  --table-drag-handle-background-active: var(--table-selection-border-color, #dadada);
  --table-drag-handle-color-active: var(--text-on-accent, #1e1e1e);
  --table-header-border-color: var(--table-border-color, transparent);
  --table-header-size: var(--table-text-size, 0.933em);
  --table-selection-border-color: var(--interactive-accent, #dadada);
  --table-text-size: var(--font-small, 0.933em);
  --tag-padding-x: 8px;
  --tag-padding-y: 4px;
  --tag-radius: 8px;
  --tag-weight: var(--font-medium, 500);
  --tertiary: var(--interactive-accent-hover, rgb(from var(--color-base-100) r g b / 80%));
  --text-error: var(--color-red, rgb(217, 90, 95));
  --text-on-accent: var(--color-base-00, #1e1e1e);
  --text-on-accent-inverted: var(--color-base-00, #1e1e1e);
  --text-success: var(--color-green, rgb(72, 196, 90));
  --text-warning: var(--color-orange, rgb(219, 134, 80));
  --titleFont: var(--font-text-theme, Inter);
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --traffic-lights-offset-x: var(--header-height, 48px);
  --traffic-lights-offset-y: var(--header-height, 48px);
  --translucent-dark-opacity: 50%;
  --translucent-light-opacity: 50%;
  --vault-profile-font-size: var(--font-ui-small, 13px);
  --view-top-spacing-markdown: 0px;
  --workspace-background-translucent: rgb(from var(--background-secondary) r g b / var(--translucent-dark-opacity));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.1);
  --background-modifier-border: rgb(var(--gray-80));
  --background-modifier-border-focus: rgb(var(--gray-70));
  --background-modifier-border-hover: rgb(var(--gray-80));
  --background-modifier-hover: rgba(var(--gray-50), 0.16);
  --background-primary: rgb(var(--gray-100));
  --background-primary-alt: rgb(var(--gray-90));
  --background-secondary: rgb(var(--gray-90));
  --background-secondary-alt: rgb(var(--gray-80));
  --bases-cards-background: var(--background-primary, #1e1e1e);
  --bases-cards-cover-background: var(--background-primary-alt, #242424);
  --bases-embed-border-color: var(--background-modifier-border, #363636);
  --bases-group-heading-property-color: var(--text-muted, #b3b3b3);
  --bases-table-border-color: var(--table-border-color, #363636);
  --bases-table-cell-background-active: var(--background-primary, #1e1e1e);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #242424);
  --bases-table-cell-background-selected: var(--table-selection, hsla(258, 88%, 66%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #242424);
  --bases-table-header-background: var(--background-primary, #262626);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --bases-table-header-color: var(--text-muted, #666666);
  --bases-table-row-background-hover: var(--table-row-background-hover, transparent);
  --bases-table-summary-background: var(--background-primary, #1e1e1e);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --canvas-background: var(--background-primary, #1e1e1e);
  --canvas-card-label-color: var(--text-faint, #666666);
  --canvas-dot-pattern: var(--color-base-30, #363636);
  --caret-color: var(--text-normal, #dadada);
  --checkbox-border-color: var(--text-faint, #666666);
  --checkbox-border-color-hover: var(--text-muted, #b3b3b3);
  --checkbox-marker-color: var(--background-primary, #1e1e1e);
  --checklist-done-color: var(--text-muted, #b3b3b3);
  --code-background: var(--background-primary-alt, #242424);
  --code-border-color: var(--background-modifier-border, #363636);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --collapse-icon-color: var(--text-faint, #666666);
  --collapse-icon-color-collapsed: var(--text-accent, #b3b3b3);
  --color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --color-accent-1: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15));
  --color-accent-2: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29));
  --color-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --divider-color: var(--background-modifier-border, #363636);
  --flair-background: var(--interactive-normal, #363636);
  --flair-color: var(--text-normal, #dadada);
  --footnote-divider-color: var(--metadata-divider-color, #363636);
  --footnote-divider-color-active: var(--metadata-divider-color-focus, transparent);
  --footnote-id-color: var(--text-muted, #b3b3b3);
  --footnote-id-color-no-occurrences: var(--text-faint, #666666);
  --footnote-input-background: var(--metadata-input-background, transparent);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.067));
  --graph-line: var(--color-base-35, var(--background-modifier-border-focus));
  --graph-node: var(--text-muted, #b3b3b3);
  --graph-node-focused: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --graph-node-unresolved: var(--text-faint, #666666);
  --graph-text: var(--text-normal, #dadada);
  --heading-formatting: var(--text-faint, #666666);
  --hr-color: var(--background-modifier-border, #363636);
  --icon-color: var(--text-muted, #b3b3b3);
  --icon-color-active: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --icon-color-focused: var(--text-normal, #dadada);
  --icon-color-hover: var(--text-muted, #b3b3b3);
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
  --indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
  --input-date-separator: var(--text-faint, #666666);
  --input-placeholder-color: var(--text-faint, #666666);
  --input-shadow: 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --input-shadow-hover: 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --interactive-accent-hsl: var(--color-accent-hsl, 258, 88%, 66%);
  --interactive-hover: rgba(var(--gray-80), 0.5);
  --interactive-normal: rgb(var(--gray-90));
  --list-marker-color: var(--text-faint, #666666);
  --list-marker-color-collapsed: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --list-marker-color-hover: var(--text-muted, #b3b3b3);
  --menu-background: var(--background-secondary, #262626);
  --metadata-border-color: var(--background-modifier-border, #363636);
  --metadata-divider-color: var(--background-modifier-border, #363636);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --metadata-input-text-color: var(--text-normal, #dadada);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --metadata-label-text-color: var(--text-muted, #b3b3b3);
  --metadata-label-text-color-hover: var(--text-muted, #b3b3b3);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nav-collapse-icon-color: var(--collapse-icon-color, #666666);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #666666);
  --nav-heading-color: var(--text-normal, #dadada);
  --nav-heading-color-collapsed: var(--text-faint, #666666);
  --nav-heading-color-collapsed-hover: var(--text-muted, #b3b3b3);
  --nav-heading-color-hover: var(--text-normal, #dadada);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(255, 255, 255, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nav-item-color: var(--text-muted, #b3b3b3);
  --nav-item-color-active: var(--text-normal, #dadada);
  --nav-item-color-highlighted: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --nav-item-color-hover: var(--text-normal, #dadada);
  --nav-item-color-selected: var(--text-normal, #dadada);
  --nav-tag-color: var(--text-faint, #666666);
  --nav-tag-color-active: var(--text-muted, #b3b3b3);
  --nav-tag-color-hover: var(--text-muted, #b3b3b3);
  --pdf-background: var(--background-primary, #1e1e1e);
  --pdf-page-background: var(--background-primary, #1e1e1e);
  --pdf-sidebar-background: var(--background-primary, #1e1e1e);
  --pill-color: var(--text-muted, #b3b3b3);
  --pill-color-hover: var(--text-normal, #dadada);
  --pill-color-remove: var(--text-faint, #666666);
  --pill-color-remove-hover: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.2);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0.05);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.1);
  --search-clear-button-color: var(--text-muted, #b3b3b3);
  --search-icon-color: var(--text-muted, #b3b3b3);
  --search-result-background: var(--background-primary, #1e1e1e);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #3f3f3f);
  --slider-track-background: var(--background-modifier-border, #363636);
  --status-bar-background: var(--background-secondary, #262626);
  --status-bar-border-color: var(--divider-color, #363636);
  --status-bar-text-color: var(--text-muted, #b3b3b3);
  --tab-background-active: var(--background-primary, #1e1e1e);
  --tab-outline-color: var(--divider-color, #363636);
  --tab-switcher-background: var(--background-secondary, #262626);
  --tab-switcher-menubar-background: var(--mobile-sidebar-background, linear-gradient(to top, #262626, transparent));
  --tab-text-color: var(--text-faint, #666666);
  --tab-text-color-active: var(--text-muted, #b3b3b3);
  --tab-text-color-focused: var(--text-muted, #b3b3b3);
  --tab-text-color-focused-active: var(--text-muted, #dadada);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --table-add-button-border-color: var(--background-modifier-border, #363636);
  --table-border-color: var(--background-modifier-border, #363636);
  --table-column-alt-background: var(--table-background, transparent);
  --table-drag-handle-color: var(--text-faint, #666666);
  --table-header-background: var(--table-background, transparent);
  --table-header-color: var(--text-normal, #dadada);
  --table-row-alt-background: var(--table-background, transparent);
  --table-row-alt-background-hover: var(--table-background, transparent);
  --table-row-background-hover: var(--table-background, transparent);
  --table-selection: hsla(var(--color-accent-hsl), 0.1);
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, lighten);
  --tag-background: hsla(var(--interactive-accent-hsl), 0.1);
  --tag-background-hover: hsla(var(--interactive-accent-hsl), 0.2);
  --tag-border-color: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-border-color-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --tag-color-hover: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --text-accent: var(--color-accent-1, hsl(255, 89.76%, 75.9%));
  --text-accent-hover: var(--color-accent-2, hsl(253, 92.4%, 85.14%));
  --text-faint: rgb(var(--gray-60));
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb), 0.4);
  --text-muted: rgb(var(--gray-30));
  --text-normal: rgb(var(--gray-10));
  --titlebar-border-color: var(--background-modifier-border, #363636);
  --titlebar-text-color: var(--text-muted, #b3b3b3);
  --titlebar-text-color-focused: var(--text-normal, #dadada);
  --vault-profile-color: var(--text-normal, #dadada);
  --vault-profile-color-hover: var(--vault-profile-color, #dadada);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.1);
  --background-modifier-border: rgb(var(--gray-80));
  --background-modifier-border-focus: rgb(var(--gray-70));
  --background-modifier-border-hover: rgb(var(--gray-80));
  --background-modifier-hover: rgba(var(--gray-50), 0.16);
  --background-primary: rgb(var(--gray-100));
  --background-primary-alt: rgb(var(--gray-90));
  --background-secondary: rgb(var(--gray-90));
  --background-secondary-alt: rgb(var(--gray-80));
  --bases-cards-background: var(--background-primary, #1e1e1e);
  --bases-cards-cover-background: var(--background-primary-alt, #242424);
  --bases-embed-border-color: var(--background-modifier-border, #363636);
  --bases-group-heading-property-color: var(--text-muted, #b3b3b3);
  --bases-table-border-color: var(--table-border-color, #363636);
  --bases-table-cell-background-active: var(--background-primary, #1e1e1e);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #242424);
  --bases-table-cell-background-selected: var(--table-selection, hsla(258, 88%, 66%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #242424);
  --bases-table-header-background: var(--background-primary, #262626);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --bases-table-header-color: var(--text-muted, #666666);
  --bases-table-row-background-hover: var(--table-row-background-hover, transparent);
  --bases-table-summary-background: var(--background-primary, #1e1e1e);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --canvas-background: var(--background-primary, #1e1e1e);
  --canvas-card-label-color: var(--text-faint, #666666);
  --canvas-dot-pattern: var(--color-base-30, #363636);
  --caret-color: var(--text-normal, #dadada);
  --checkbox-border-color: var(--text-faint, #666666);
  --checkbox-border-color-hover: var(--text-muted, #b3b3b3);
  --checkbox-marker-color: var(--background-primary, #1e1e1e);
  --checklist-done-color: var(--text-muted, #b3b3b3);
  --code-background: var(--background-primary-alt, #242424);
  --code-border-color: var(--background-modifier-border, #363636);
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --collapse-icon-color: var(--text-faint, #666666);
  --collapse-icon-color-collapsed: var(--text-accent, #b3b3b3);
  --color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --color-accent-1: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15));
  --color-accent-2: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29));
  --color-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --divider-color: var(--background-modifier-border, #363636);
  --flair-background: var(--interactive-normal, #363636);
  --flair-color: var(--text-normal, #dadada);
  --footnote-divider-color: var(--metadata-divider-color, #363636);
  --footnote-divider-color-active: var(--metadata-divider-color-focus, transparent);
  --footnote-id-color: var(--text-muted, #b3b3b3);
  --footnote-id-color-no-occurrences: var(--text-faint, #666666);
  --footnote-input-background: var(--metadata-input-background, transparent);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.067));
  --graph-line: var(--color-base-35, var(--background-modifier-border-focus));
  --graph-node: var(--text-muted, #b3b3b3);
  --graph-node-focused: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --graph-node-unresolved: var(--text-faint, #666666);
  --graph-text: var(--text-normal, #dadada);
  --heading-formatting: var(--text-faint, #666666);
  --hr-color: var(--background-modifier-border, #363636);
  --icon-color: var(--text-muted, #b3b3b3);
  --icon-color-active: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --icon-color-focused: var(--text-normal, #dadada);
  --icon-color-hover: var(--text-muted, #b3b3b3);
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
  --indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
  --input-date-separator: var(--text-faint, #666666);
  --input-placeholder-color: var(--text-faint, #666666);
  --input-shadow: 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --input-shadow-hover: 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --interactive-accent-hsl: var(--color-accent-hsl, 258, 88%, 66%);
  --interactive-hover: rgba(var(--gray-80), 0.5);
  --interactive-normal: rgb(var(--gray-90));
  --list-marker-color: var(--text-faint, #666666);
  --list-marker-color-collapsed: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --list-marker-color-hover: var(--text-muted, #b3b3b3);
  --menu-background: var(--background-secondary, #262626);
  --metadata-border-color: var(--background-modifier-border, #363636);
  --metadata-divider-color: var(--background-modifier-border, #363636);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --metadata-input-text-color: var(--text-normal, #dadada);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --metadata-label-text-color: var(--text-muted, #b3b3b3);
  --metadata-label-text-color-hover: var(--text-muted, #b3b3b3);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nav-collapse-icon-color: var(--collapse-icon-color, #666666);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #666666);
  --nav-heading-color: var(--text-normal, #dadada);
  --nav-heading-color-collapsed: var(--text-faint, #666666);
  --nav-heading-color-collapsed-hover: var(--text-muted, #b3b3b3);
  --nav-heading-color-hover: var(--text-normal, #dadada);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(255, 255, 255, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.067));
  --nav-item-color: var(--text-muted, #b3b3b3);
  --nav-item-color-active: var(--text-normal, #dadada);
  --nav-item-color-highlighted: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --nav-item-color-hover: var(--text-normal, #dadada);
  --nav-item-color-selected: var(--text-normal, #dadada);
  --nav-tag-color: var(--text-faint, #666666);
  --nav-tag-color-active: var(--text-muted, #b3b3b3);
  --nav-tag-color-hover: var(--text-muted, #b3b3b3);
  --pdf-background: var(--background-primary, #1e1e1e);
  --pdf-page-background: var(--background-primary, #1e1e1e);
  --pdf-sidebar-background: var(--background-primary, #1e1e1e);
  --pill-color: var(--text-muted, #b3b3b3);
  --pill-color-hover: var(--text-normal, #dadada);
  --pill-color-remove: var(--text-faint, #666666);
  --pill-color-remove-hover: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.2);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0.05);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.1);
  --search-clear-button-color: var(--text-muted, #b3b3b3);
  --search-icon-color: var(--text-muted, #b3b3b3);
  --search-result-background: var(--background-primary, #1e1e1e);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #3f3f3f);
  --slider-track-background: var(--background-modifier-border, #363636);
  --status-bar-background: var(--background-secondary, #262626);
  --status-bar-border-color: var(--divider-color, #363636);
  --status-bar-text-color: var(--text-muted, #b3b3b3);
  --tab-background-active: var(--background-primary, #1e1e1e);
  --tab-outline-color: var(--divider-color, #363636);
  --tab-switcher-background: var(--background-secondary, #262626);
  --tab-switcher-menubar-background: var(--mobile-sidebar-background, linear-gradient(to top, #262626, transparent));
  --tab-text-color: var(--text-faint, #666666);
  --tab-text-color-active: var(--text-muted, #b3b3b3);
  --tab-text-color-focused: var(--text-muted, #b3b3b3);
  --tab-text-color-focused-active: var(--text-muted, #dadada);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --table-add-button-border-color: var(--background-modifier-border, #363636);
  --table-border-color: var(--background-modifier-border, #363636);
  --table-column-alt-background: var(--table-background, transparent);
  --table-drag-handle-color: var(--text-faint, #666666);
  --table-header-background: var(--table-background, transparent);
  --table-header-color: var(--text-normal, #dadada);
  --table-row-alt-background: var(--table-background, transparent);
  --table-row-alt-background-hover: var(--table-background, transparent);
  --table-row-background-hover: var(--table-background, transparent);
  --table-selection: hsla(var(--color-accent-hsl), 0.1);
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, lighten);
  --tag-background: hsla(var(--interactive-accent-hsl), 0.1);
  --tag-background-hover: hsla(var(--interactive-accent-hsl), 0.2);
  --tag-border-color: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-border-color-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --tag-color-hover: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --text-accent: var(--color-accent-1, hsl(255, 89.76%, 75.9%));
  --text-accent-hover: var(--color-accent-2, hsl(253, 92.4%, 85.14%));
  --text-faint: rgb(var(--gray-60));
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb), 0.4);
  --text-muted: rgb(var(--gray-30));
  --text-normal: rgb(var(--gray-10));
  --titlebar-border-color: var(--background-modifier-border, #363636);
  --titlebar-text-color: var(--text-muted, #b3b3b3);
  --titlebar-text-color-focused: var(--text-normal, #dadada);
  --vault-profile-color: var(--text-normal, #dadada);
  --vault-profile-color-hover: var(--vault-profile-color, #dadada);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-highlight, var(--text-normal));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-medium, 500);
}

html[saved-theme="dark"] body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer {
  opacity: 0.5;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(218, 218, 218));
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="dark"] body a.internal-link.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(36, 36, 36));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="dark"] body table {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 28px);
  width: 654px;
}

html[saved-theme="dark"] body tbody {
  background-color: rgb(36, 36, 36);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-left-radius: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: var(--table-text-align-body, start);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: var(--table-text-align-header, start);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--code-normal, rgb(171, 178, 191));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body img {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body video {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, rgb(36, 36, 36));
  border-bottom-right-radius: 8px;
  border-left-color: rgb(102, 102, 102);
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgb(36, 36, 36));
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through;
  text-decoration-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M6.025 9.121c-.595 0-.966.313-.966.86 0 .537.39.84.966.84h7.891c.566 0 .947-.303.947-.84 0-.547-.361-.86-.947-.86h-7.89Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M6.025 9.121c-.595 0-.966.313-.966.86 0 .537.39.84.966.84h7.891c.566 0 .947-.303.947-.84 0-.547-.361-.86-.947-.86h-7.89Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.867 14.004c0 .576.508 1.045 1.094 1.045.586 0 1.094-.46 1.094-1.045 0-.586-.498-1.055-1.094-1.055-.596 0-1.094.479-1.094 1.055Zm.166-8.35.127 5.323c.01.517.293.8.8.8.49 0 .772-.273.782-.8l.137-5.313c.01-.518-.39-.898-.928-.898-.547 0-.928.37-.918.888Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.867 14.004c0 .576.508 1.045 1.094 1.045.586 0 1.094-.46 1.094-1.045 0-.586-.498-1.055-1.094-1.055-.596 0-1.094.479-1.094 1.055Zm.166-8.35.127 5.323c.01.517.293.8.8.8.49 0 .772-.273.782-.8l.137-5.313c.01-.518-.39-.898-.928-.898-.547 0-.928.37-.918.888Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.643 14.004c0 .576.507 1.045 1.093 1.045s1.094-.46 1.094-1.045c0-.586-.498-1.055-1.094-1.055-.595 0-1.093.479-1.093 1.055ZM6.924 6.553a1.665 1.665 0 0 0-.088.498c0 .449.361.693.693.693.342 0 .567-.166.752-.4l.176-.244c.361-.586.879-.918 1.553-.918.908 0 1.504.517 1.504 1.279 0 .684-.42 1.016-1.3 1.63-.722.509-1.269 1.036-1.269 2.032v.127c0 .527.293.8.81.8.509 0 .821-.322.821-.722v-.117c0-.566.322-.928 1.026-1.387.976-.644 1.68-1.23 1.68-2.441 0-1.68-1.495-2.569-3.214-2.569-1.738 0-2.87.811-3.144 1.739Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.643 14.004c0 .576.507 1.045 1.093 1.045s1.094-.46 1.094-1.045c0-.586-.498-1.055-1.094-1.055-.595 0-1.093.479-1.093 1.055ZM6.924 6.553a1.665 1.665 0 0 0-.088.498c0 .449.361.693.693.693.342 0 .567-.166.752-.4l.176-.244c.361-.586.879-.918 1.553-.918.908 0 1.504.517 1.504 1.279 0 .684-.42 1.016-1.3 1.63-.722.509-1.269 1.036-1.269 2.032v.127c0 .527.293.8.81.8.509 0 .821-.322.821-.722v-.117c0-.566.322-.928 1.026-1.387.976-.644 1.68-1.23 1.68-2.441 0-1.68-1.495-2.569-3.214-2.569-1.738 0-2.87.811-3.144 1.739Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 134, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M21.523 4.473v7.48c0 2.861-1.562 4.463-4.472 4.463h-6.602l-3.525 3.223c-.46.43-.742.625-1.123.625-.557 0-.87-.4-.87-1.006v-2.842h-.458C1.563 16.416 0 14.824 0 11.953v-7.48C0 1.602 1.563 0 4.473 0H17.05c2.91 0 4.472 1.611 4.472 4.473ZM5.898 7.148c0 1.143.713 2.032 1.856 2.032.42 0 .84-.069 1.103-.4h.079a2.863 2.863 0 0 1-1.797 1.542c-.381.098-.489.254-.489.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.879-2.413-2.187-2.413-1.211 0-2.12.84-2.12 2.041Zm5.44 0c0 1.143.713 2.032 1.846 2.032.43 0 .85-.069 1.113-.4h.078a2.855 2.855 0 0 1-1.807 1.542c-.361.098-.478.254-.478.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.89-2.413-2.198-2.413-1.21 0-2.11.84-2.11 2.041Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M21.523 4.473v7.48c0 2.861-1.562 4.463-4.472 4.463h-6.602l-3.525 3.223c-.46.43-.742.625-1.123.625-.557 0-.87-.4-.87-1.006v-2.842h-.458C1.563 16.416 0 14.824 0 11.953v-7.48C0 1.602 1.563 0 4.473 0H17.05c2.91 0 4.472 1.611 4.472 4.473ZM5.898 7.148c0 1.143.713 2.032 1.856 2.032.42 0 .84-.069 1.103-.4h.079a2.863 2.863 0 0 1-1.797 1.542c-.381.098-.489.254-.489.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.879-2.413-2.187-2.413-1.211 0-2.12.84-2.12 2.041Zm5.44 0c0 1.143.713 2.032 1.846 2.032.43 0 .85-.069 1.113-.4h.078a2.855 2.855 0 0 1-1.807 1.542c-.361.098-.478.254-.478.498 0 .254.215.47.498.47 1.016 0 3.057-1.212 3.057-3.77 0-1.368-.89-2.413-2.198-2.413-1.21 0-2.11.84-2.11 2.041Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(142, 125, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M4.161 20.547c.4.312.908.205 1.514-.235l5.166-3.798 5.176 3.799c.605.439 1.103.546 1.513.234.4-.303.488-.8.244-1.514l-2.04-6.074 5.214-3.75c.606-.43.85-.879.694-1.367-.157-.469-.616-.694-1.368-.694h-6.396l-1.944-6.064C11.7.361 11.35 0 10.841 0c-.498 0-.85.361-1.084 1.084L7.813 7.148H1.417c-.752 0-1.211.225-1.367.694-.166.488.088.937.693 1.367l5.215 3.75-2.041 6.074c-.244.713-.156 1.211.244 1.514Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='21' fill='none' viewBox='0 0 22 21'%3e%3cpath fill='black' d='M4.161 20.547c.4.312.908.205 1.514-.235l5.166-3.798 5.176 3.799c.605.439 1.103.546 1.513.234.4-.303.488-.8.244-1.514l-2.04-6.074 5.214-3.75c.606-.43.85-.879.694-1.367-.157-.469-.616-.694-1.368-.694h-6.396l-1.944-6.064C11.7.361 11.35 0 10.841 0c-.498 0-.85.361-1.084 1.084L7.813 7.148H1.417c-.752 0-1.211.225-1.367.694-.166.488.088.937.693 1.367l5.215 3.75-2.041 6.074c-.244.713-.156 1.211.244 1.514Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 180, 94);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3e%3cpath fill='black' d='M8.154 5.172v2.963H5.192c-.509 0-.86.352-.86.86 0 .499.351.831.86.831h2.962V12.8c0 .498.342.86.841.86.509 0 .86-.352.86-.86V9.826h2.973c.498 0 .86-.332.86-.83 0-.51-.362-.861-.86-.861H9.856V5.172c0-.508-.352-.87-.86-.87-.5 0-.842.362-.842.87Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='none' viewBox='0 0 18 18'%3e%3cpath fill='black' d='M8.154 5.172v2.963H5.192c-.509 0-.86.352-.86.86 0 .499.351.831.86.831h2.962V12.8c0 .498.342.86.841.86.509 0 .86-.352.86-.86V9.826h2.973c.498 0 .86-.332.86-.83 0-.51-.362-.861-.86-.861H9.856V5.172c0-.508-.352-.87-.86-.87-.5 0-.842.362-.842.87Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='18' fill='none' viewBox='0 0 20 18'%3e%3cpath fill='black' d='M3.066 17.979h13.34c2.041 0 3.057-1.016 3.057-3.028V3.027C19.463 1.016 18.447 0 16.406 0H3.066C1.026 0 0 1.006 0 3.027v11.924c0 2.022 1.025 3.027 3.066 3.027Zm-.146-1.573c-.87 0-1.348-.459-1.348-1.367V5.83c0-.898.479-1.367 1.348-1.367h13.613c.87 0 1.358.469 1.358 1.367v9.21c0 .907-.489 1.366-1.358 1.366H2.92ZM7.832 7.97h.576c.342 0 .45-.098.45-.44v-.576c0-.342-.108-.45-.45-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.341 0-.449.108-.449.45v.576c0 .342.108.44.45.44ZM4.59 11.162h.566c.352 0 .46-.098.46-.44v-.575c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .341.108.44.46.44Zm3.242 0h.576c.342 0 .45-.098.45-.44v-.575c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.341 0-.449.098-.449.44v.576c0 .341.108.44.45.44ZM4.59 14.365h.566c.352 0 .46-.107.46-.449v-.576c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .342.108.45.46.45Zm3.242 0h.576c.342 0 .45-.107.45-.449v-.576c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.459.45Zm3.242 0h.576c.342 0 .46-.107.46-.449v-.576c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.46.45Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='18' fill='none' viewBox='0 0 20 18'%3e%3cpath fill='black' d='M3.066 17.979h13.34c2.041 0 3.057-1.016 3.057-3.028V3.027C19.463 1.016 18.447 0 16.406 0H3.066C1.026 0 0 1.006 0 3.027v11.924c0 2.022 1.025 3.027 3.066 3.027Zm-.146-1.573c-.87 0-1.348-.459-1.348-1.367V5.83c0-.898.479-1.367 1.348-1.367h13.613c.87 0 1.358.469 1.358 1.367v9.21c0 .907-.489 1.366-1.358 1.366H2.92ZM7.832 7.97h.576c.342 0 .45-.098.45-.44v-.576c0-.342-.108-.45-.45-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.342 0-.459.108-.459.45v.576c0 .342.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.576c0-.342-.118-.45-.46-.45h-.576c-.341 0-.449.108-.449.45v.576c0 .342.108.44.45.44ZM4.59 11.162h.566c.352 0 .46-.098.46-.44v-.575c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .341.108.44.46.44Zm3.242 0h.576c.342 0 .45-.098.45-.44v-.575c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.459.44Zm3.242 0h.576c.342 0 .46-.098.46-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .341.117.44.46.44Zm3.242 0h.577c.341 0 .459-.098.459-.44v-.575c0-.342-.118-.44-.46-.44h-.576c-.341 0-.449.098-.449.44v.576c0 .341.108.44.45.44ZM4.59 14.365h.566c.352 0 .46-.107.46-.449v-.576c0-.342-.108-.44-.46-.44H4.59c-.352 0-.46.098-.46.44v.576c0 .342.108.45.46.45Zm3.242 0h.576c.342 0 .45-.107.45-.449v-.576c0-.342-.108-.44-.45-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.459.45Zm3.242 0h.576c.342 0 .46-.107.46-.449v-.576c0-.342-.118-.44-.46-.44h-.576c-.342 0-.459.098-.459.44v.576c0 .342.117.45.46.45Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cpath fill='black' d='M11.533 0c.479 0 .801.205 1.319.693L20.557 7.9c.38.362.498.723.498 1.055 0 .322-.127.693-.498 1.045l-7.705 7.275c-.47.44-.86.635-1.338.635-.664 0-1.153-.488-1.153-1.142v-3.73h-.283c-3.78 0-6.172.956-7.871 4.15-.342.625-.791.722-1.201.722C.479 17.91 0 17.441 0 16.602c0-7.217 3.057-11.72 10.078-11.72h.283v-3.69C10.361.536 10.85 0 11.533 0Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cpath fill='black' d='M11.533 0c.479 0 .801.205 1.319.693L20.557 7.9c.38.362.498.723.498 1.055 0 .322-.127.693-.498 1.045l-7.705 7.275c-.47.44-.86.635-1.338.635-.664 0-1.153-.488-1.153-1.142v-3.73h-.283c-3.78 0-6.172.956-7.871 4.15-.342.625-.791.722-1.201.722C.479 17.91 0 17.441 0 16.602c0-7.217 3.057-11.72 10.078-11.72h.283v-3.69C10.361.536 10.85 0 11.533 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(63, 186, 182);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M9.336 20.254a9.336 9.336 0 0 0 9.336-9.336c0-5.156-4.18-9.346-9.336-9.346C4.18 1.572 0 5.762 0 10.918a9.336 9.336 0 0 0 9.336 9.336Zm-4.443-8.262a.663.663 0 0 1-.674-.674c0-.38.293-.683.674-.683h3.76V5.4a.68.68 0 1 1 1.357 0v5.918a.672.672 0 0 1-.684.674H4.893Zm-3.575-7.91c.147 0 .254-.02.391-.127l3.271-2.47c.157-.118.245-.274.245-.44 0-.205-.098-.371-.264-.527C4.59.186 3.926 0 3.34 0A2.734 2.734 0 0 0 .596 2.744c0 .361.058.723.166.947.107.245.312.391.556.391Zm16.035 0c.245 0 .45-.156.567-.39.098-.215.156-.587.156-.948A2.728 2.728 0 0 0 15.332 0c-.586 0-1.25.186-1.621.518-.166.156-.264.322-.264.527 0 .166.088.322.254.44l3.262 2.47a.568.568 0 0 0 .39.127ZM1.172 19.971a.74.74 0 0 0 1.074-.01l1.846-1.836-1.055-1.045-1.855 1.836a.743.743 0 0 0-.01 1.055Zm16.328 0a.734.734 0 0 0-.01-1.055l-1.855-1.836-1.045 1.045 1.836 1.836a.74.74 0 0 0 1.074.01Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.033v21.924H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M9.336 20.254a9.336 9.336 0 0 0 9.336-9.336c0-5.156-4.18-9.346-9.336-9.346C4.18 1.572 0 5.762 0 10.918a9.336 9.336 0 0 0 9.336 9.336Zm-4.443-8.262a.663.663 0 0 1-.674-.674c0-.38.293-.683.674-.683h3.76V5.4a.68.68 0 1 1 1.357 0v5.918a.672.672 0 0 1-.684.674H4.893Zm-3.575-7.91c.147 0 .254-.02.391-.127l3.271-2.47c.157-.118.245-.274.245-.44 0-.205-.098-.371-.264-.527C4.59.186 3.926 0 3.34 0A2.734 2.734 0 0 0 .596 2.744c0 .361.058.723.166.947.107.245.312.391.556.391Zm16.035 0c.245 0 .45-.156.567-.39.098-.215.156-.587.156-.948A2.728 2.728 0 0 0 15.332 0c-.586 0-1.25.186-1.621.518-.166.156-.264.322-.264.527 0 .166.088.322.254.44l3.262 2.47a.568.568 0 0 0 .39.127ZM1.172 19.971a.74.74 0 0 0 1.074-.01l1.846-1.836-1.055-1.045-1.855 1.836a.743.743 0 0 0-.01 1.055Zm16.328 0a.734.734 0 0 0-.01-1.055l-1.855-1.836-1.045 1.045 1.836 1.836a.74.74 0 0 0 1.074.01Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.033v21.924H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 103, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='21' fill='none' viewBox='0 0 14 21'%3e%3cpath fill='black' d='M1.035 20.947c.479 0 .762-.273 1.64-1.123l3.82-3.76c.048-.048.136-.048.175 0l3.818 3.76c.88.85 1.162 1.123 1.64 1.123.655 0 1.036-.43 1.036-1.191V2.803C13.164.947 12.236 0 10.4 0H2.764C.928 0 0 .947 0 2.803v16.953c0 .762.38 1.191 1.035 1.191Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='14' height='21' fill='none' viewBox='0 0 14 21'%3e%3cpath fill='black' d='M1.035 20.947c.479 0 .762-.273 1.64-1.123l3.82-3.76c.048-.048.136-.048.175 0l3.818 3.76c.88.85 1.162 1.123 1.64 1.123.655 0 1.036-.43 1.036-1.191V2.803C13.164.947 12.236 0 10.4 0H2.764C.928 0 0 .947 0 2.803v16.953c0 .762.38 1.191 1.035 1.191Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 134, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' fill='none' viewBox='0 0 22 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M14.023 19.365a3.261 3.261 0 0 0 3.262-3.261 3.263 3.263 0 0 0-3.262-3.272 3.263 3.263 0 0 0-3.261 3.271 3.261 3.261 0 0 0 3.261 3.262Zm-7.177 0a3.261 3.261 0 0 0 3.261-3.261 3.263 3.263 0 0 0-3.261-3.272 3.263 3.263 0 0 0-3.262 3.271 3.261 3.261 0 0 0 3.262 3.262Zm10.761-6.425a3.255 3.255 0 0 0 3.262-3.262 3.255 3.255 0 0 0-3.262-3.262 3.263 3.263 0 0 0-3.271 3.262 3.263 3.263 0 0 0 3.271 3.261Zm-14.345 0a3.263 3.263 0 0 0 3.271-3.262 3.263 3.263 0 0 0-3.271-3.262 3.261 3.261 0 1 0 0 6.524Zm10.761-6.417a3.255 3.255 0 0 0 3.262-3.261A3.255 3.255 0 0 0 14.023 0a3.255 3.255 0 0 0-3.261 3.262 3.255 3.255 0 0 0 3.261 3.261Zm-7.177 0a3.255 3.255 0 0 0 3.261-3.261A3.255 3.255 0 0 0 6.846 0a3.255 3.255 0 0 0-3.262 3.262 3.255 3.255 0 0 0 3.262 3.261Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.23v19.365H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' fill='none' viewBox='0 0 22 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M14.023 19.365a3.261 3.261 0 0 0 3.262-3.261 3.263 3.263 0 0 0-3.262-3.272 3.263 3.263 0 0 0-3.261 3.271 3.261 3.261 0 0 0 3.261 3.262Zm-7.177 0a3.261 3.261 0 0 0 3.261-3.261 3.263 3.263 0 0 0-3.261-3.272 3.263 3.263 0 0 0-3.262 3.271 3.261 3.261 0 0 0 3.262 3.262Zm10.761-6.425a3.255 3.255 0 0 0 3.262-3.262 3.255 3.255 0 0 0-3.262-3.262 3.263 3.263 0 0 0-3.271 3.262 3.263 3.263 0 0 0 3.271 3.261Zm-14.345 0a3.263 3.263 0 0 0 3.271-3.262 3.263 3.263 0 0 0-3.271-3.262 3.261 3.261 0 1 0 0 6.524Zm10.761-6.417a3.255 3.255 0 0 0 3.262-3.261A3.255 3.255 0 0 0 14.023 0a3.255 3.255 0 0 0-3.261 3.262 3.255 3.255 0 0 0 3.261 3.261Zm-7.177 0a3.255 3.255 0 0 0 3.261-3.261A3.255 3.255 0 0 0 6.846 0a3.255 3.255 0 0 0-3.262 3.262 3.255 3.255 0 0 0 3.262 3.261Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.23v19.365H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 103, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M19.238 6.24c0-2.89-1.816-5.312-4.228-5.312h-1.72c1.758 1.28 2.54 3.213 2.5 5.41-.03 2.442-.976 4.19-1.826 5.245h1.406c2.178 0 3.867-2.344 3.867-5.342Zm-4.756.07C14.541 2.744 11.65.05 7.11.01L5.791 0c-1.27-.01-2.207.09-2.734.236-.762.185-1.494.644-1.494 1.571 0 .371.097.655.214.86.078.117.069.224-.058.273-.596.244-1.104.82-1.104 1.582 0 .45.127.83.352 1.104.107.146.088.273-.088.38-.44.254-.752.801-.752 1.436 0 .46.146.938.4 1.172.166.137.137.234-.029.38C.195 9.25 0 9.689 0 10.245a1.69 1.69 0 0 0 1.7 1.71h3.437c.869 0 1.445.449 1.445 1.172 0 1.299-1.621 3.691-1.621 5.41 0 .918.576 1.445 1.348 1.445.693 0 1.035-.478 1.406-1.21 1.455-2.823 3.389-5.108 4.863-7.071 1.25-1.66 1.865-3.086 1.904-5.39Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M19.238 6.24c0-2.89-1.816-5.312-4.228-5.312h-1.72c1.758 1.28 2.54 3.213 2.5 5.41-.03 2.442-.976 4.19-1.826 5.245h1.406c2.178 0 3.867-2.344 3.867-5.342Zm-4.756.07C14.541 2.744 11.65.05 7.11.01L5.791 0c-1.27-.01-2.207.09-2.734.236-.762.185-1.494.644-1.494 1.571 0 .371.097.655.214.86.078.117.069.224-.058.273-.596.244-1.104.82-1.104 1.582 0 .45.127.83.352 1.104.107.146.088.273-.088.38-.44.254-.752.801-.752 1.436 0 .46.146.938.4 1.172.166.137.137.234-.029.38C.195 9.25 0 9.689 0 10.245a1.69 1.69 0 0 0 1.7 1.71h3.437c.869 0 1.445.449 1.445 1.172 0 1.299-1.621 3.691-1.621 5.41 0 .918.576 1.445 1.348 1.445.693 0 1.035-.478 1.406-1.21 1.455-2.823 3.389-5.108 4.863-7.071 1.25-1.66 1.865-3.086 1.904-5.39Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(217, 90, 95);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M7.402 18.447a.885.885 0 0 0 .655-.293l6.484-6.494a.879.879 0 0 0 .264-.635c0-.478-.352-.85-.84-.85a.863.863 0 0 0-.615.235l-2.227 2.188-3.73 4.082-3.711-4.082-2.227-2.188c-.146-.156-.38-.234-.615-.234-.488 0-.84.37-.84.85 0 .234.088.439.273.634l6.475 6.494c.186.196.41.293.654.293Zm0-1.045c.46 0 .772-.312.772-.771l.097-2.91V.859c0-.507-.36-.859-.869-.859-.507 0-.869.352-.869.86v12.86l.098 2.91c0 .46.312.772.771.772Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M7.402 18.447a.885.885 0 0 0 .655-.293l6.484-6.494a.879.879 0 0 0 .264-.635c0-.478-.352-.85-.84-.85a.863.863 0 0 0-.615.235l-2.227 2.188-3.73 4.082-3.711-4.082-2.227-2.188c-.146-.156-.38-.234-.615-.234-.488 0-.84.37-.84.85 0 .234.088.439.273.634l6.475 6.494c.186.196.41.293.654.293Zm0-1.045c.46 0 .772-.312.772-.771l.097-2.91V.859c0-.507-.36-.859-.869-.859-.507 0-.869.352-.869.86v12.86l.098 2.91c0 .46.312.772.771.772Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='17' height='22' fill='none' viewBox='0 0 17 22'%3e%3cpath fill='black' d='M7.676 21.123c5.156 0 8.594-3.486 8.594-8.74C16.27 3.643 8.828 0 3.662 0c-.918 0-1.504.322-1.504.947 0 .244.108.498.313.733 1.162 1.386 2.324 3.037 2.343 4.96 0 .44-.048.83-.36 1.378l.487-.098c-.439-1.436-1.62-2.451-2.656-2.451-.4 0-.674.293-.674.732 0 .254.069.85.069 1.28C1.68 9.667 0 10.946 0 14.472c0 3.994 3.057 6.65 7.676 6.65Zm.224-2.744c-1.826 0-3.037-1.104-3.037-2.744 0-1.719 1.221-2.334 1.377-3.438.02-.088.078-.117.147-.058.449.4.742.888.986 1.455.518-.703.762-2.188.596-3.79-.01-.087.049-.136.136-.107 2.14 1.006 3.252 3.135 3.252 5.04 0 1.933-1.132 3.642-3.457 3.642Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='17' height='22' fill='none' viewBox='0 0 17 22'%3e%3cpath fill='black' d='M7.676 21.123c5.156 0 8.594-3.486 8.594-8.74C16.27 3.643 8.828 0 3.662 0c-.918 0-1.504.322-1.504.947 0 .244.108.498.313.733 1.162 1.386 2.324 3.037 2.343 4.96 0 .44-.048.83-.36 1.378l.487-.098c-.439-1.436-1.62-2.451-2.656-2.451-.4 0-.674.293-.674.732 0 .254.069.85.069 1.28C1.68 9.667 0 10.946 0 14.472c0 3.994 3.057 6.65 7.676 6.65Zm.224-2.744c-1.826 0-3.037-1.104-3.037-2.744 0-1.719 1.221-2.334 1.377-3.438.02-.088.078-.117.147-.058.449.4.742.888.986 1.455.518-.703.762-2.188.596-3.79-.01-.087.049-.136.136-.107 2.14 1.006 3.252 3.135 3.252 5.04 0 1.933-1.132 3.642-3.457 3.642Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 134, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.37 8.154a.721.721 0 0 0-.733.713c0 .42.322.723.732.723h1.074v4.59h-1.24a.724.724 0 0 0-.742.713c0 .42.322.722.742.722h4.092c.42 0 .742-.303.742-.722a.724.724 0 0 0-.742-.713h-1.24V9.072c0-.547-.274-.918-.791-.918H8.369Zm.185-2.988c0 .742.586 1.328 1.318 1.328.732 0 1.309-.586 1.309-1.328 0-.742-.577-1.328-1.309-1.328s-1.318.586-1.318 1.328Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M8.37 8.154a.721.721 0 0 0-.733.713c0 .42.322.723.732.723h1.074v4.59h-1.24a.724.724 0 0 0-.742.713c0 .42.322.722.742.722h4.092c.42 0 .742-.303.742-.722a.724.724 0 0 0-.742-.713h-1.24V9.072c0-.547-.274-.918-.791-.918H8.369Zm.185-2.988c0 .742.586 1.328 1.318 1.328.732 0 1.309-.586 1.309-1.328 0-.742-.577-1.328-1.309-1.328s-1.318.586-1.318 1.328Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='22' fill='none' viewBox='0 0 21 22'%3e%3cpath fill='black' d='M4.346 12.48c-.215 0-.362.137-.381.362-.371 3.017-.518 3.095-3.574 3.594-.254.029-.391.156-.391.38 0 .215.137.342.342.372 3.086.595 3.252.576 3.623 3.584.02.234.166.37.38.37.206 0 .362-.136.382-.36.39-3.057.507-3.145 3.613-3.595.195-.019.342-.156.342-.37 0-.215-.147-.352-.342-.381-3.106-.596-3.213-.596-3.613-3.614a.367.367 0 0 0-.381-.341ZM11.982 0c-.283 0-.507.205-.546.508-.85 6.181-1.7 7.002-7.793 7.812-.313.03-.538.254-.538.547 0 .303.225.537.538.567 6.113.664 6.992 1.62 7.792 7.793.04.302.264.517.547.517.293 0 .508-.215.557-.517.81-6.172 1.68-7.13 7.793-7.793a.552.552 0 0 0 .527-.567c0-.293-.205-.517-.527-.547-6.113-.683-6.982-1.63-7.793-7.812C12.49.205 12.275 0 11.982 0Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='22' fill='none' viewBox='0 0 21 22'%3e%3cpath fill='black' d='M4.346 12.48c-.215 0-.362.137-.381.362-.371 3.017-.518 3.095-3.574 3.594-.254.029-.391.156-.391.38 0 .215.137.342.342.372 3.086.595 3.252.576 3.623 3.584.02.234.166.37.38.37.206 0 .362-.136.382-.36.39-3.057.507-3.145 3.613-3.595.195-.019.342-.156.342-.37 0-.215-.147-.352-.342-.381-3.106-.596-3.213-.596-3.613-3.614a.367.367 0 0 0-.381-.341ZM11.982 0c-.283 0-.507.205-.546.508-.85 6.181-1.7 7.002-7.793 7.812-.313.03-.538.254-.538.547 0 .303.225.537.538.567 6.113.664 6.992 1.62 7.792 7.793.04.302.264.517.547.517.293 0 .508-.215.557-.517.81-6.172 1.68-7.13 7.793-7.793a.552.552 0 0 0 .527-.567c0-.293-.205-.517-.527-.547-6.113-.683-6.982-1.63-7.793-7.812C12.49.205 12.275 0 11.982 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 180, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='25' fill='none' viewBox='0 0 13 25'%3e%3cpath fill='black' d='M6.24 0C2.764 0 0 2.764 0 6.22c0 2.608 1.563 4.913 4.004 5.84v9.64a.83.83 0 0 0 .254.614l1.63 1.641c.167.166.499.215.704.01l3.096-3.096a.487.487 0 0 0 0-.703l-1.924-1.895 2.636-2.627c.186-.195.186-.478-.02-.693l-2.607-2.627c3.018-1.201 4.698-3.428 4.698-6.103A6.22 6.22 0 0 0 6.24 0Zm0 5.723c-.908 0-1.63-.733-1.63-1.631 0-.908.712-1.631 1.63-1.631.899 0 1.631.723 1.631 1.63 0 .9-.732 1.632-1.63 1.632Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='25' fill='none' viewBox='0 0 13 25'%3e%3cpath fill='black' d='M6.24 0C2.764 0 0 2.764 0 6.22c0 2.608 1.563 4.913 4.004 5.84v9.64a.83.83 0 0 0 .254.614l1.63 1.641c.167.166.499.215.704.01l3.096-3.096a.487.487 0 0 0 0-.703l-1.924-1.895 2.636-2.627c.186-.195.186-.478-.02-.693l-2.607-2.627c3.018-1.201 4.698-3.428 4.698-6.103A6.22 6.22 0 0 0 6.24 0Zm0 5.723c-.908 0-1.63-.733-1.63-1.631 0-.908.712-1.631 1.63-1.631.899 0 1.631.723 1.631 1.63 0 .9-.732 1.632-1.63 1.632Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(196, 180, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='21' fill='none' viewBox='0 0 8 21'%3e%3cpath fill='black' d='M7.334 3.682A3.65 3.65 0 0 1 4.57 7.236V16.3c0 2.89-.508 4.453-.908 4.453-.39 0-.908-1.572-.908-4.453V7.236A3.65 3.65 0 0 1 0 3.682C0 1.66 1.63 0 3.662 0a3.676 3.676 0 0 1 3.672 3.682ZM1.357 2.617c0 .684.586 1.27 1.26 1.27.684 0 1.25-.586 1.25-1.27 0-.674-.566-1.25-1.25-1.25-.674 0-1.26.576-1.26 1.25Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='21' fill='none' viewBox='0 0 8 21'%3e%3cpath fill='black' d='M7.334 3.682A3.65 3.65 0 0 1 4.57 7.236V16.3c0 2.89-.508 4.453-.908 4.453-.39 0-.908-1.572-.908-4.453V7.236A3.65 3.65 0 0 1 0 3.682C0 1.66 1.63 0 3.662 0a3.676 3.676 0 0 1 3.672 3.682ZM1.357 2.617c0 .684.586 1.27 1.26 1.27.684 0 1.25-.586 1.25-1.27 0-.674-.566-1.25-1.25-1.25-.674 0-1.26.576-1.26 1.25Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(217, 90, 95);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' fill='none' viewBox='0 0 20 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M9.697 18.525c.205 0 .498-.136.713-.263 5.498-3.516 8.985-7.608 8.985-11.768 0-3.457-2.373-5.898-5.44-5.898-1.904 0-3.37 1.054-4.258 2.666C8.828 1.66 7.344.596 5.44.596 2.373.596 0 3.037 0 6.494c0 4.16 3.486 8.252 8.994 11.768.205.127.498.263.703.263Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.756v18.525H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' fill='none' viewBox='0 0 20 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M9.697 18.525c.205 0 .498-.136.713-.263 5.498-3.516 8.985-7.608 8.985-11.768 0-3.457-2.373-5.898-5.44-5.898-1.904 0-3.37 1.054-4.258 2.666C8.828 1.66 7.344.596 5.44.596 2.373.596 0 3.037 0 6.494c0 4.16 3.486 8.252 8.994 11.768.205.127.498.263.703.263Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.756v18.525H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 103, 147);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M2.668 14.63 13.322 3.985l-1.709-1.719L.95 12.911l-.928 2.178c-.097.234.157.508.391.41l2.256-.87ZM14.182 3.145l.986-.966c.498-.499.527-1.036.078-1.485l-.332-.332c-.44-.44-.976-.4-1.475.088l-.986.977 1.729 1.718Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h15.932v15.52H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none' viewBox='0 0 16 16'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M2.668 14.63 13.322 3.985l-1.709-1.719L.95 12.911l-.928 2.178c-.097.234.157.508.391.41l2.256-.87ZM14.182 3.145l.986-.966c.498-.499.527-1.036.078-1.485l-.332-.332c-.44-.44-.976-.4-1.475.088l-.986.977 1.729 1.718Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h15.932v15.52H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(86, 148, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M0 13.74c0 2.89 1.807 5.313 4.229 5.313h1.718c-1.758-1.28-2.48-3.213-2.48-5.41.01-2.442.957-4.19 1.797-5.245H3.867C1.69 8.398 0 10.742 0 13.74Zm4.814-.078c0 3.565 2.784 6.318 7.325 6.318h1.328c1.26 0 2.197-.087 2.724-.234.762-.185 1.495-.654 1.495-1.572 0-.381-.098-.654-.215-.86-.078-.127-.059-.224.058-.273.606-.254 1.104-.82 1.104-1.592 0-.44-.127-.83-.342-1.094-.107-.146-.098-.283.088-.38.43-.254.742-.801.742-1.436 0-.459-.146-.937-.4-1.172-.157-.137-.127-.234.029-.38.303-.255.498-.694.498-1.25a1.69 1.69 0 0 0-1.7-1.71h-3.437c-.869 0-1.445-.449-1.445-1.172 0-1.298 1.63-3.7 1.63-5.42C14.297.528 13.712 0 12.95 0c-.703 0-1.045.479-1.416 1.21-1.455 2.823-3.388 5.108-4.863 7.061-1.25 1.66-1.856 3.096-1.856 5.391Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M0 13.74c0 2.89 1.807 5.313 4.229 5.313h1.718c-1.758-1.28-2.48-3.213-2.48-5.41.01-2.442.957-4.19 1.797-5.245H3.867C1.69 8.398 0 10.742 0 13.74Zm4.814-.078c0 3.565 2.784 6.318 7.325 6.318h1.328c1.26 0 2.197-.087 2.724-.234.762-.185 1.495-.654 1.495-1.572 0-.381-.098-.654-.215-.86-.078-.127-.059-.224.058-.273.606-.254 1.104-.82 1.104-1.592 0-.44-.127-.83-.342-1.094-.107-.146-.098-.283.088-.38.43-.254.742-.801.742-1.436 0-.459-.146-.937-.4-1.172-.157-.137-.127-.234.029-.38.303-.255.498-.694.498-1.25a1.69 1.69 0 0 0-1.7-1.71h-3.437c-.869 0-1.445-.449-1.445-1.172 0-1.298 1.63-3.7 1.63-5.42C14.297.528 13.712 0 12.95 0c-.703 0-1.045.479-1.416 1.21-1.455 2.823-3.388 5.108-4.863 7.061-1.25 1.66-1.856 3.096-1.856 5.391Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(72, 196, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' fill='none' viewBox='0 0 19 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M5 13.154c2.871 2.881 6.309 5.069 9.072 5.069 1.3 0 2.432-.518 3.174-1.348.713-.8.957-1.396.957-1.924 0-.41-.254-.79-.898-1.24l-2.383-1.709c-.596-.42-.86-.498-1.211-.498-.303 0-.557.059-1.065.332l-1.562.86c-.186.107-.264.126-.4.126-.186 0-.313-.049-.498-.127-.743-.341-1.788-1.162-2.715-2.09-.928-.927-1.65-1.875-2.022-2.607a.971.971 0 0 1-.107-.41c0-.127.068-.234.146-.371l.918-1.572c.254-.43.323-.665.323-.997 0-.38-.127-.79-.489-1.308L4.6 1.055C4.13.4 3.78 0 3.252 0 2.598 0 1.807.498 1.24 1.045.43 1.826 0 2.92 0 4.15c0 2.784 2.139 6.153 5 9.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h18.564v18.232H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' fill='none' viewBox='0 0 19 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M5 13.154c2.871 2.881 6.309 5.069 9.072 5.069 1.3 0 2.432-.518 3.174-1.348.713-.8.957-1.396.957-1.924 0-.41-.254-.79-.898-1.24l-2.383-1.709c-.596-.42-.86-.498-1.211-.498-.303 0-.557.059-1.065.332l-1.562.86c-.186.107-.264.126-.4.126-.186 0-.313-.049-.498-.127-.743-.341-1.788-1.162-2.715-2.09-.928-.927-1.65-1.875-2.022-2.607a.971.971 0 0 1-.107-.41c0-.127.068-.234.146-.371l.918-1.572c.254-.43.323-.665.323-.997 0-.38-.127-.79-.489-1.308L4.6 1.055C4.13.4 3.78 0 3.252 0 2.598 0 1.807.498 1.24 1.045.43 1.826 0 2.92 0 4.15c0 2.784 2.139 6.153 5 9.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h18.564v18.232H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(72, 196, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M8.652 16.777v-6.181c0-.4-.224-.616-.625-.616a.803.803 0 0 0-.507.176l-3.692 3.057c-.303.264-.322.664 0 .928l3.692 3.066a.812.812 0 0 0 .507.186c.4 0 .625-.225.625-.616ZM20.02 8.36a.81.81 0 0 0-.82.83v.928c0 1.67-1.163 2.764-2.93 2.764H7.216c-.45 0-.82.371-.82.81 0 .45.37.82.82.82h8.896c2.91 0 4.727-1.65 4.727-4.277V9.19a.81.81 0 0 0-.82-.83ZM12.188.635v6.181c0 .391.224.616.624.616a.812.812 0 0 0 .508-.186l3.692-3.057c.312-.253.332-.654 0-.927L13.32.195a.803.803 0 0 0-.508-.175c-.4 0-.624.214-.624.615ZM.82 9.053c.47 0 .83-.362.83-.83v-.928c0-1.67 1.153-2.774 2.92-2.774h9.063c.44 0 .81-.36.81-.81a.82.82 0 0 0-.81-.81H4.727C1.827 2.9 0 4.54 0 7.177v1.045c0 .468.361.83.82.83Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.201v17.393H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='18' fill='none' viewBox='0 0 22 18'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black'  d='M8.652 16.777v-6.181c0-.4-.224-.616-.625-.616a.803.803 0 0 0-.507.176l-3.692 3.057c-.303.264-.322.664 0 .928l3.692 3.066a.812.812 0 0 0 .507.186c.4 0 .625-.225.625-.616ZM20.02 8.36a.81.81 0 0 0-.82.83v.928c0 1.67-1.163 2.764-2.93 2.764H7.216c-.45 0-.82.371-.82.81 0 .45.37.82.82.82h8.896c2.91 0 4.727-1.65 4.727-4.277V9.19a.81.81 0 0 0-.82-.83ZM12.188.635v6.181c0 .391.224.616.624.616a.812.812 0 0 0 .508-.186l3.692-3.057c.312-.253.332-.654 0-.927L13.32.195a.803.803 0 0 0-.508-.175c-.4 0-.624.214-.624.615ZM.82 9.053c.47 0 .83-.362.83-.83v-.928c0-1.67 1.153-2.774 2.92-2.774h9.063c.44 0 .81-.36.81-.81a.82.82 0 0 0-.81-.81H4.727C1.827 2.9 0 4.54 0 7.177v1.045c0 .468.361.83.82.83Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.201v17.393H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(63, 186, 182);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='23' fill='none' viewBox='0 0 13 23'%3e%3cpath fill='black' d='M6.24 19.639c3.301 0 6.143-1.66 6.143-4.824 0-2.93-2.295-3.975-5.02-4.63l-1.875-.458c-1.777-.43-3.252-1.202-3.252-2.891 0-1.895 2.022-2.861 3.994-2.861 2.022 0 3.487.947 4.024 2.685.156.46.459.772.967.772s.879-.352.879-.87c0-.78-.518-1.835-1.192-2.51-1.191-1.19-2.9-1.747-4.678-1.747-3.056 0-5.869 1.62-5.869 4.677 0 2.705 2.305 3.926 4.815 4.502l1.885.44c1.875.44 3.457 1.123 3.457 3.037 0 2.148-1.973 3.018-4.258 3.018-2.158 0-3.906-.87-4.424-2.813-.147-.479-.43-.752-.928-.752-.547 0-.908.371-.908.86 0 .908.596 1.962 1.27 2.607 1.318 1.24 3.173 1.758 4.97 1.758Zm-.049 2.373a.642.642 0 0 0 .635-.645V.635A.64.64 0 0 0 6.191 0a.64.64 0 0 0-.634.635v20.732c0 .352.283.645.634.645Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='13' height='23' fill='none' viewBox='0 0 13 23'%3e%3cpath fill='black' d='M6.24 19.639c3.301 0 6.143-1.66 6.143-4.824 0-2.93-2.295-3.975-5.02-4.63l-1.875-.458c-1.777-.43-3.252-1.202-3.252-2.891 0-1.895 2.022-2.861 3.994-2.861 2.022 0 3.487.947 4.024 2.685.156.46.459.772.967.772s.879-.352.879-.87c0-.78-.518-1.835-1.192-2.51-1.191-1.19-2.9-1.747-4.678-1.747-3.056 0-5.869 1.62-5.869 4.677 0 2.705 2.305 3.926 4.815 4.502l1.885.44c1.875.44 3.457 1.123 3.457 3.037 0 2.148-1.973 3.018-4.258 3.018-2.158 0-3.906-.87-4.424-2.813-.147-.479-.43-.752-.928-.752-.547 0-.908.371-.908.86 0 .908.596 1.962 1.27 2.607 1.318 1.24 3.173 1.758 4.97 1.758Zm-.049 2.373a.642.642 0 0 0 .635-.645V.635A.64.64 0 0 0 6.191 0a.64.64 0 0 0-.634.635v20.732c0 .352.283.645.634.645Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(72, 196, 90);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M4.854 11.016a.667.667 0 0 1-.684-.684c0-.38.293-.674.684-.674h4.423V3.75c0-.38.293-.674.674-.674.381 0 .684.293.684.674v6.582c0 .39-.303.684-.684.684H4.854Zm5.107 8.906c5.498 0 9.96-4.473 9.96-9.961C19.922 4.463 15.46 0 9.962 0 4.473 0 0 4.463 0 9.96c0 5.49 4.473 9.962 9.96 9.962Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20.283v19.932H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M4.854 11.016a.667.667 0 0 1-.684-.684c0-.38.293-.674.684-.674h4.423V3.75c0-.38.293-.674.674-.674.381 0 .684.293.684.674v6.582c0 .39-.303.684-.684.684H4.854Zm5.107 8.906c5.498 0 9.96-4.473 9.96-9.961C19.922 4.463 15.46 0 9.962 0 4.473 0 0 4.463 0 9.96c0 5.49 4.473 9.962 9.96 9.962Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20.283v19.932H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 134, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M.84 8.271c.234 0 .469-.078.615-.234L3.682 5.85l3.71-4.082 3.731 4.082 2.227 2.187c.156.156.38.234.615.234.488 0 .84-.37.84-.85a.879.879 0 0 0-.264-.634L8.057.293A.885.885 0 0 0 7.402 0a.885.885 0 0 0-.654.293L.273 6.787c-.185.195-.273.4-.273.635 0 .478.352.85.84.85Zm6.562 10.176c.508 0 .87-.351.87-.86V4.728l-.098-2.91c0-.46-.313-.772-.772-.772s-.771.312-.771.771l-.098 2.91v12.862c0 .508.362.86.87.86Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='15' height='19' fill='none' viewBox='0 0 15 19'%3e%3cpath fill='black' d='M.84 8.271c.234 0 .469-.078.615-.234L3.682 5.85l3.71-4.082 3.731 4.082 2.227 2.187c.156.156.38.234.615.234.488 0 .84-.37.84-.85a.879.879 0 0 0-.264-.634L8.057.293A.885.885 0 0 0 7.402 0a.885.885 0 0 0-.654.293L.273 6.787c-.185.195-.273.4-.273.635 0 .478.352.85.84.85Zm6.562 10.176c.508 0 .87-.351.87-.86V4.728l-.098-2.91c0-.46-.313-.772-.772-.772s-.771.312-.771.771l-.098 2.91v12.862c0 .508.362.86.87.86Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 134, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cpath fill='black' d='M0 3.223c0 4.033 1.934 6.552 5.791 7.734a8.289 8.289 0 0 0 1.953 1.758v4.248H6.211c-1.377 0-2.09.79-2.09 2.09v1.611c0 .44.342.742.752.742h9.356c.41 0 .752-.302.752-.742v-1.611c0-1.3-.723-2.09-2.1-2.09h-1.524v-4.248a8.07 8.07 0 0 0 1.944-1.758c3.867-1.182 5.8-3.701 5.8-7.734 0-1.006-.624-1.621-1.67-1.621h-1.894C15.381.605 14.677 0 13.497 0H5.604C4.433 0 3.72.596 3.564 1.602H1.67C.625 1.602 0 2.217 0 3.222Zm1.396.136c0-.156.118-.283.284-.283h1.836V4.99c0 1.494.39 2.881.996 4.082C2.47 8.037 1.396 6.142 1.396 3.36ZM14.58 9.072a8.947 8.947 0 0 0 1.006-4.082V3.076h1.836c.166 0 .283.127.283.283 0 2.784-1.074 4.678-3.125 5.713Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='22' fill='none' viewBox='0 0 20 22'%3e%3cpath fill='black' d='M0 3.223c0 4.033 1.934 6.552 5.791 7.734a8.289 8.289 0 0 0 1.953 1.758v4.248H6.211c-1.377 0-2.09.79-2.09 2.09v1.611c0 .44.342.742.752.742h9.356c.41 0 .752-.302.752-.742v-1.611c0-1.3-.723-2.09-2.1-2.09h-1.524v-4.248a8.07 8.07 0 0 0 1.944-1.758c3.867-1.182 5.8-3.701 5.8-7.734 0-1.006-.624-1.621-1.67-1.621h-1.894C15.381.605 14.677 0 13.497 0H5.604C4.433 0 3.72.596 3.564 1.602H1.67C.625 1.602 0 2.217 0 3.222Zm1.396.136c0-.156.118-.283.284-.283h1.836V4.99c0 1.494.39 2.881.996 4.082C2.47 8.037 1.396 6.142 1.396 3.36ZM14.58 9.072a8.947 8.947 0 0 0 1.006-4.082V3.076h1.836c.166 0 .283.127.283.283 0 2.784-1.074 4.678-3.125 5.713Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(219, 134, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='m12.998 6.084-4.17 6.7-1.982-2.56c-.244-.322-.46-.41-.742-.41a.788.788 0 0 0-.782.801c0 .225.088.44.235.635l2.45 3.008c.255.342.528.478.86.478.332 0 .615-.156.82-.478l4.59-7.227c.118-.205.245-.43.245-.644 0-.46-.4-.752-.83-.752-.255 0-.508.156-.694.449Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 63, 186, 182);
  background: rgba(63, 186, 182, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(63, 186, 182, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(63, 186, 182, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(63, 186, 182, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(63, 186, 182, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="banner-icon"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: rgb(217, 90, 95);
  --background-modifier-error-hover: rgb(217, 90, 95);
  --background-modifier-error-rgb: 217, 90, 95;
  --background-modifier-form-field: #363636;
  --background-modifier-form-field-hover: #363636;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: rgb(72, 196, 90);
  --background-modifier-success-rgb: 72, 196, 90;
  --background-primary: #1e1e1e;
  --background-primary-alt: #242424;
  --background-secondary: #262626;
  --background-secondary-alt: #363636;
  --banner-fade-height: 0px;
  --banner-icon-size: 0px;
  --banner-image-height: 0px;
  --banner-image-radius: 8px;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #242424;
  --blockquote-border-color: #666666;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: calc(8px*(1 - clamp(0, (1 - 1) * 10000 + 1, 1)) + 100vh*clamp(0, (1 - 1) * 10000 + 1, 1));
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 217, 90, 95;
  --callout-color: var(--callout-default, 86, 148, 218);
  --callout-default: 86, 148, 218;
  --callout-error: 217, 90, 95;
  --callout-example: 142, 125, 194;
  --callout-fail: 217, 90, 95;
  --callout-important: 63, 186, 182;
  --callout-info: 86, 148, 218;
  --callout-padding: 16px;
  --callout-question: 219, 134, 80;
  --callout-radius: 8px;
  --callout-size: 16px;
  --callout-success: 72, 196, 90;
  --callout-summary: 63, 186, 182;
  --callout-tip: 63, 186, 182;
  --callout-title-weight: 700;
  --callout-todo: 86, 148, 218;
  --callout-warning: 219, 134, 80;
  --canvas-background: #1e1e1e;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: #dadada;
  --checkbox-color-hover: rgb(from #dadada r g b / 80%);
  --checkbox-marker-color: #1e1e1e;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 8px;
  --code-background: #242424;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5c6370;
  --code-function: #d19a66;
  --code-important: #d19a66;
  --code-keyword: #e16d76;
  --code-normal: #abb2bf;
  --code-operator: rgb(217, 90, 95);
  --code-property: #62afef;
  --code-punctuation: #abb2bf;
  --code-radius: 8px;
  --code-size: 0.8em;
  --code-string: #58b6c2;
  --code-tag: #e16d76;
  --code-value: #c678de;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: #b3b3b3;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: rgb(86, 148, 218);
  --color-cyan: rgb(63, 186, 182);
  --color-green: rgb(72, 196, 90);
  --color-orange: rgb(219, 134, 80);
  --color-pink: rgb(222, 103, 147);
  --color-purple: rgb(142, 125, 194);
  --color-red: rgb(217, 90, 95);
  --color-yellow: rgb(196, 180, 94);
  --divider-color: #363636;
  --divider-color-hover: #666666;
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Inter, 'Arial';
  --font-text: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: rgb(196, 180, 94);
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: rgb(72, 196, 90);
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h1-font: '??', "Instrument Serif";
  --h2-font: '??', "Instrument Serif";
  --h3-font: '??', "Instrument Serif";
  --h4-font: '??', "Instrument Serif";
  --h5-font: '??', "Instrument Serif";
  --h5-line-height: 1.6;
  --h6-font: '??', "Instrument Serif";
  --h6-line-height: 1.6;
  --heading-formatting: #666666;
  --heading-spacing: 2em;
  --hr-color: #363636;
  --interactive-accent: #dadada;
  --interactive-accent-hover: rgb(from #dadada r g b / 80%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --media-radius: 8px;
  --menu-background: #262626;
  --menu-border-color: #363636;
  --menu-border-width: 1px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 4px;
  --menu-radius: 12px;
  --menu-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1);
  --nn-theme-file-tag-color: hsl(255, 89.76%, 75.9%);
  --nn-theme-mobile-list-header-link-color: #dadada;
  --nn-theme-mobile-toolbar-button-active-bg: #dadada;
  --nn-theme-mobile-toolbar-button-active-icon-color: #1e1e1e;
  --nn-theme-mobile-toolbar-button-icon-color: #dadada;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(255, 255, 255, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(255, 255, 255, 0.067);
  --pdf-background: #1e1e1e;
  --pdf-page-background: #1e1e1e;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1e1e1e;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --radius-l: 20px;
  --radius-m: 12px;
  --radius-modifier-check: clamp(0, (1 - 1) * 10000 + 1, 1);
  --radius-s: 8px;
  --radius-xl: 28px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 20px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #1e1e1e;
  --setting-group-heading-color: #666666;
  --setting-group-heading-size: 13px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: #363636;
  --setting-items-padding: 16px 16px;
  --setting-items-radius: 12px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #242424;
  --shiki-code-block-border-radius: 8px;
  --shiki-code-block-spacing: 1.75rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: rgb(72, 196, 90);
  --shiki-code-important: rgb(219, 134, 80);
  --shiki-code-keyword: rgb(222, 103, 147);
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: rgb(63, 186, 182);
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: rgb(196, 180, 94);
  --shiki-code-value: rgb(142, 125, 194);
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(72, 196, 90, 0.5);
  --shiki-highlight-green-background: rgba(72, 196, 90, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(217, 90, 95, 0.5);
  --shiki-highlight-red-background: rgba(217, 90, 95, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1e1e1e;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(217, 90, 95);
  --sync-avatar-color-2: rgb(219, 134, 80);
  --sync-avatar-color-3: rgb(196, 180, 94);
  --sync-avatar-color-4: rgb(72, 196, 90);
  --sync-avatar-color-5: rgb(63, 186, 182);
  --sync-avatar-color-6: rgb(86, 148, 218);
  --sync-avatar-color-7: rgb(142, 125, 194);
  --sync-avatar-color-8: rgb(222, 103, 147);
  --tab-background-active: #1e1e1e;
  --tab-curve: 12px;
  --tab-divider-color: #363636;
  --tab-font-size: 13px;
  --tab-max-width: 200px;
  --tab-outline-color: #363636;
  --tab-radius: 8px;
  --tab-radius-active: 8px 8px 0 0;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 28px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #dadada;
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: #1e1e1e;
  --table-header-background: transparent;
  --table-header-border-color: transparent;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #dadada;
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
  --text-error: rgb(217, 90, 95);
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-on-accent: #1e1e1e;
  --text-on-accent-inverted: #1e1e1e;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: rgb(72, 196, 90);
  --text-warning: rgb(219, 134, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(218, 218, 218);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --callout-color: var(--callout-bug, 217, 90, 95);
  background: rgba(217, 90, 95, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(217, 90, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(217, 90, 95, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(217, 90, 95, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(217, 90, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 217, 90, 95);
  background: rgba(217, 90, 95, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(217, 90, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(217, 90, 95, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(217, 90, 95, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(217, 90, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 142, 125, 194);
  background: rgba(142, 125, 194, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(142, 125, 194, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(142, 125, 194, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(142, 125, 194, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(142, 125, 194, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 217, 90, 95);
  background: rgba(217, 90, 95, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(217, 90, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(217, 90, 95, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(217, 90, 95, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(217, 90, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 86, 148, 218);
  background: rgba(86, 148, 218, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 86, 148, 218);
  background: rgba(86, 148, 218, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #363636;
  --background-modifier-border-focus: #555555;
  --background-modifier-border-hover: #3f3f3f;
  --background-modifier-error: rgb(217, 90, 95);
  --background-modifier-error-hover: rgb(217, 90, 95);
  --background-modifier-error-rgb: 217, 90, 95;
  --background-modifier-form-field: #363636;
  --background-modifier-form-field-hover: #363636;
  --background-modifier-hover: rgba(255, 255, 255, 0.067);
  --background-modifier-success: rgb(72, 196, 90);
  --background-modifier-success-rgb: 72, 196, 90;
  --background-primary: #1e1e1e;
  --background-primary-alt: #242424;
  --background-secondary: #262626;
  --background-secondary-alt: #363636;
  --banner-fade-height: 0px;
  --banner-icon-size: 0px;
  --banner-image-height: 0px;
  --banner-image-radius: 8px;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #242424;
  --blockquote-border-color: #666666;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: calc(8px*(1 - clamp(0, (1 - 1) * 10000 + 1, 1)) + 100vh*clamp(0, (1 - 1) * 10000 + 1, 1));
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 217, 90, 95;
  --callout-color: var(--callout-default, 86, 148, 218);
  --callout-default: 86, 148, 218;
  --callout-error: 217, 90, 95;
  --callout-example: 142, 125, 194;
  --callout-fail: 217, 90, 95;
  --callout-important: 63, 186, 182;
  --callout-info: 86, 148, 218;
  --callout-padding: 16px;
  --callout-question: 219, 134, 80;
  --callout-radius: 8px;
  --callout-size: 16px;
  --callout-success: 72, 196, 90;
  --callout-summary: 63, 186, 182;
  --callout-tip: 63, 186, 182;
  --callout-title-weight: 700;
  --callout-todo: 86, 148, 218;
  --callout-warning: 219, 134, 80;
  --canvas-background: #1e1e1e;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #363636;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --caret-color: #dadada;
  --checkbox-border-color: #666666;
  --checkbox-border-color-hover: #b3b3b3;
  --checkbox-color: #dadada;
  --checkbox-color-hover: rgb(from #dadada r g b / 80%);
  --checkbox-marker-color: #1e1e1e;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #b3b3b3;
  --clickable-icon-radius: 8px;
  --code-background: #242424;
  --code-border-color: #363636;
  --code-bracket-background: rgba(255, 255, 255, 0.067);
  --code-comment: #5c6370;
  --code-function: #d19a66;
  --code-important: #d19a66;
  --code-keyword: #e16d76;
  --code-normal: #abb2bf;
  --code-operator: rgb(217, 90, 95);
  --code-property: #62afef;
  --code-punctuation: #abb2bf;
  --code-radius: 8px;
  --code-size: 0.8em;
  --code-string: #58b6c2;
  --code-tag: #e16d76;
  --code-value: #c678de;
  --collapse-icon-color: #666666;
  --collapse-icon-color-collapsed: #b3b3b3;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: rgb(86, 148, 218);
  --color-cyan: rgb(63, 186, 182);
  --color-green: rgb(72, 196, 90);
  --color-orange: rgb(219, 134, 80);
  --color-pink: rgb(222, 103, 147);
  --color-purple: rgb(142, 125, 194);
  --color-red: rgb(217, 90, 95);
  --color-yellow: rgb(196, 180, 94);
  --divider-color: #363636;
  --divider-color-hover: #666666;
  --divider-vertical-height: 100%;
  --dropdown-background: #363636;
  --dropdown-background-hover: #3f3f3f;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #363636;
  --flair-color: #dadada;
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Inter, 'Arial';
  --font-text: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --font-weight: 400;
  --graph-line: #3f3f3f;
  --graph-node: #b3b3b3;
  --graph-node-attachment: rgb(196, 180, 94);
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: rgb(72, 196, 90);
  --graph-node-unresolved: #666666;
  --graph-text: #dadada;
  --h1-font: '??', "Instrument Serif";
  --h2-font: '??', "Instrument Serif";
  --h3-font: '??', "Instrument Serif";
  --h4-font: '??', "Instrument Serif";
  --h5-font: '??', "Instrument Serif";
  --h5-line-height: 1.6;
  --h6-font: '??', "Instrument Serif";
  --h6-line-height: 1.6;
  --heading-formatting: #666666;
  --heading-spacing: 2em;
  --hr-color: #363636;
  --interactive-accent: #dadada;
  --interactive-accent-hover: rgb(from #dadada r g b / 80%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #3f3f3f;
  --interactive-normal: #363636;
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --media-radius: 8px;
  --menu-background: #262626;
  --menu-border-color: #363636;
  --menu-border-width: 1px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 4px;
  --menu-radius: 12px;
  --menu-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1);
  --nn-theme-file-tag-color: hsl(255, 89.76%, 75.9%);
  --nn-theme-mobile-list-header-link-color: #dadada;
  --nn-theme-mobile-toolbar-button-active-bg: #dadada;
  --nn-theme-mobile-toolbar-button-active-icon-color: #1e1e1e;
  --nn-theme-mobile-toolbar-button-icon-color: #dadada;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(255, 255, 255, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(255, 255, 255, 0.067);
  --pdf-background: #1e1e1e;
  --pdf-page-background: #1e1e1e;
  --pdf-shadow: 0 0 0 1px #363636;
  --pdf-sidebar-background: #1e1e1e;
  --pdf-thumbnail-shadow: 0 0 0 1px #363636;
  --popover-font-size: 16px;
  --radius-l: 20px;
  --radius-m: 12px;
  --radius-modifier-check: clamp(0, (1 - 1) * 10000 + 1, 1);
  --radius-s: 8px;
  --radius-xl: 28px;
  --raised-background: color-mix(in srgb, #363636 65%, transparent) linear-gradient(#363636, color-mix(in srgb, #363636 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 20px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #b3b3b3;
  --search-icon-color: #b3b3b3;
  --search-result-background: #1e1e1e;
  --setting-group-heading-color: #666666;
  --setting-group-heading-size: 13px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #242424;
  --setting-items-border-color: #363636;
  --setting-items-padding: 16px 16px;
  --setting-items-radius: 12px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: #b3b3b3;
  --shiki-code-background: #242424;
  --shiki-code-block-border-radius: 8px;
  --shiki-code-block-spacing: 1.75rem;
  --shiki-code-comment: #666666;
  --shiki-code-function: rgb(72, 196, 90);
  --shiki-code-important: rgb(219, 134, 80);
  --shiki-code-keyword: rgb(222, 103, 147);
  --shiki-code-normal: #b3b3b3;
  --shiki-code-property: rgb(63, 186, 182);
  --shiki-code-punctuation: #b3b3b3;
  --shiki-code-string: rgb(196, 180, 94);
  --shiki-code-value: rgb(142, 125, 194);
  --shiki-gutter-border-color: #363636;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #666666;
  --shiki-gutter-text-color-highlight: #b3b3b3;
  --shiki-highlight-green: rgba(72, 196, 90, 0.5);
  --shiki-highlight-green-background: rgba(72, 196, 90, 0.1);
  --shiki-highlight-neutral: #b3b3b3;
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(217, 90, 95, 0.5);
  --shiki-highlight-red-background: rgba(217, 90, 95, 0.1);
  --shiki-terminal-dots-color: #666666;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #1e1e1e;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: rgb(217, 90, 95);
  --sync-avatar-color-2: rgb(219, 134, 80);
  --sync-avatar-color-3: rgb(196, 180, 94);
  --sync-avatar-color-4: rgb(72, 196, 90);
  --sync-avatar-color-5: rgb(63, 186, 182);
  --sync-avatar-color-6: rgb(86, 148, 218);
  --sync-avatar-color-7: rgb(142, 125, 194);
  --sync-avatar-color-8: rgb(222, 103, 147);
  --tab-background-active: #1e1e1e;
  --tab-curve: 12px;
  --tab-divider-color: #363636;
  --tab-font-size: 13px;
  --tab-max-width: 200px;
  --tab-outline-color: #363636;
  --tab-radius: 8px;
  --tab-radius-active: 8px 8px 0 0;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #262626;
  --tab-switcher-menubar-background: linear-gradient(to top, #262626, transparent);
  --tab-switcher-preview-radius: 28px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #666666;
  --tab-text-color-active: #b3b3b3;
  --tab-text-color-focused: #b3b3b3;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: #363636;
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #dadada;
  --table-drag-handle-color: #666666;
  --table-drag-handle-color-active: #1e1e1e;
  --table-header-background: transparent;
  --table-header-border-color: transparent;
  --table-header-border-width: 1px;
  --table-header-color: #dadada;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: #dadada;
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
  --text-error: rgb(217, 90, 95);
  --text-faint: #666666;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #b3b3b3;
  --text-normal: #dadada;
  --text-on-accent: #1e1e1e;
  --text-on-accent-inverted: #1e1e1e;
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: rgb(72, 196, 90);
  --text-warning: rgb(219, 134, 80);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(218, 218, 218);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --callout-color: var(--callout-question, 219, 134, 80);
  background: rgba(219, 134, 80, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(219, 134, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(219, 134, 80, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(219, 134, 80, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(219, 134, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 72, 196, 90);
  background: rgba(72, 196, 90, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(72, 196, 90, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(72, 196, 90, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(72, 196, 90, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(72, 196, 90, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 63, 186, 182);
  background: rgba(63, 186, 182, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(63, 186, 182, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(63, 186, 182, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(63, 186, 182, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(63, 186, 182, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 86, 148, 218);
  background: rgba(86, 148, 218, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 219, 134, 80);
  background: rgba(219, 134, 80, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(219, 134, 80, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(219, 134, 80, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(219, 134, 80, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(219, 134, 80, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 86, 148, 218;
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
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
  background-color: rgb(54, 54, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgb(38, 38, 38));
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.25) 0px 14px 62px 0px);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(54, 54, 54);
  border-right-color: rgb(54, 54, 54);
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: var(--divider-color, rgb(54, 54, 54));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
}

html[saved-theme="dark"] body h1 {
  font-family: var(--h1-font, "??", "Instrument Serif");
}

html[saved-theme="dark"] body h2 {
  font-family: var(--h2-font, "??", "Instrument Serif");
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: var(--inline-title-font, "??", "Instrument Serif");
}

html[saved-theme="dark"] body h3 {
  font-family: var(--h3-font, "??", "Instrument Serif");
}

html[saved-theme="dark"] body h4 {
  font-family: var(--h4-font, "??", "Instrument Serif");
}

html[saved-theme="dark"] body h5 {
  font-family: var(--h5-font, "??", "Instrument Serif");
}

html[saved-theme="dark"] body h6 {
  font-family: var(--h6-font, "??", "Instrument Serif");
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 86, 148, 218);
  border-bottom-color: rgba(86, 148, 218, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(86, 148, 218, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(86, 148, 218, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(86, 148, 218, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 12px;
  border-top-width: 0px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node-file {
  background-color: var(--background-primary-alt, rgba(0, 0, 0, 0));
  color: var(--text-normal-editor, var(--text-normal));
}

html[saved-theme="dark"] body .canvas-sidebar {
  box-shadow: var(--input-shadow, rgb(54, 54, 54) 0px 0px 0px 1px inset);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0) rgb(218, 218, 218) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-modifier-hover, rgb(30, 30, 30));
  color: var(--text-faint, rgb(218, 218, 218));
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--background-secondary, rgb(38, 38, 38));
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: var(--shadow-tactile, rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px);
  color: var(--text-muted, rgb(179, 179, 179));
  font-family: var(--font-text, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--code-size, 12.8px);
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
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
  --anim-motion-baseline: cubic-bezier(0.1, 0, 0.1, 1.25);
  --anim-speed-modifier: 1;
  --background-modifier-cover: rgba(0, 0, 0, 0.35);
  --background-modifier-error: var(--color-red, rgb(254, 112, 112));
  --background-modifier-error-hover: var(--color-red, rgb(254, 112, 112));
  --background-modifier-error-rgb: var(--color-red-rgb, 254, 112, 112);
  --background-modifier-form-field: var(--interactive-normal, #ffffff);
  --background-modifier-success: var(--color-green, rgb(74, 213, 95));
  --background-modifier-success-rgb: var(--color-green-rgb, 74, 213, 95);
  --banner-fade-height: 80px;
  --banner-icon-size: 3rem;
  --banner-image-height: 320px;
  --banner-image-height-s: 240px;
  --banner-image-inset: 8px;
  --banner-image-object-fit: cover;
  --banner-image-radius: var(--radius-s, 8px);
  --banner-mobile-offset: 0px;
  --bases-cards-corner-shape: var(--corner-shape, superellipse(1.1));
  --bases-cards-radius: var(--radius-m, 12px);
  --bases-embed-border-radius: var(--radius-s, 8px);
  --bases-group-heading-property-size: var(--font-ui-smaller, 12px);
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-header-color: var(--text-faint, #ababab);
  --block-width-max: calc(100cqw - var(--file-margins-x)*2);
  --block-width-offset: calc(var(--file-margins-x)*-1);
  --block-width-wide: min(100cqw, var(--line-width-wide));
  --blockquote-background-color: var(--background-primary-alt, #fafafa);
  --blockquote-border-color: var(--color-base-50, #ababab);
  --blockquote-size: var(--font-text-size, 16px);
  --bodyFont: var(--font-text-theme, Inter);
  --bold-modifier: 300;
  --button-corner-shape: var(--corner-shape, superellipse(1.1));
  --button-radius: calc((8px*var(--radius-modifier))*(1 - var(--radius-modifier-check)) + 100vh*var(--radius-modifier-check));
  --callout-blend-mode: var(--highlight-mix-blend-mode, normal);
  --callout-border-width: var(--divider-width, 1px);
  --callout-bug: var(--color-red-rgb, 254, 112, 112);
  --callout-default: var(--color-blue-rgb, 106, 173, 250);
  --callout-error: var(--color-red-rgb, 254, 112, 112);
  --callout-example: var(--color-purple-rgb, 187, 158, 245);
  --callout-fail: var(--color-red-rgb, 254, 112, 112);
  --callout-important: var(--color-cyan-rgb, 56, 219, 214);
  --callout-info: var(--color-blue-rgb, 106, 173, 250);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--color-orange-rgb, 242, 154, 100);
  --callout-radius: var(--radius-s, 8px);
  --callout-size: var(--font-text-size, 16px);
  --callout-success: var(--color-green-rgb, 74, 213, 95);
  --callout-summary: var(--color-cyan-rgb, 56, 219, 214);
  --callout-tip: var(--color-cyan-rgb, 56, 219, 214);
  --callout-todo: var(--color-blue-rgb, 106, 173, 250);
  --callout-warning: var(--color-orange-rgb, 242, 154, 100);
  --canvas-color-1: var(--color-red-rgb, 254, 112, 112);
  --canvas-color-2: var(--color-orange-rgb, 242, 154, 100);
  --canvas-color-3: var(--color-yellow-rgb, 224, 205, 99);
  --canvas-color-4: var(--color-green-rgb, 74, 213, 95);
  --canvas-color-5: var(--color-cyan-rgb, 56, 219, 214);
  --canvas-color-6: var(--color-purple-rgb, 187, 158, 245);
  --canvas-controls-icon-size: var(--icon-s, 16px);
  --canvas-controls-icon-stroke: var(--icon-s-stroke-width, 2px);
  --canvas-controls-radius: var(--radius-s, 8px);
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
  --checkbox-color: var(--interactive-accent, #222222);
  --checkbox-color-hover: var(--interactive-accent-hover, rgb(from #222222 r g b / 80%));
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-border-width: 1px;
  --code-comment: var(--text-faint, #b6b9c5);
  --code-function: var(--color-yellow, #b76b02);
  --code-important: var(--color-orange, #b76b02);
  --code-keyword: var(--color-pink, #e45749);
  --code-normal: var(--text-normal, #383a42);
  --code-operator: var(--color-red, rgb(254, 112, 112));
  --code-property: var(--color-cyan, #62afef);
  --code-punctuation: var(--text-muted, #383a42);
  --code-radius: var(--radius-s, 8px);
  --code-size: var(--font-smallest, 0.8em);
  --code-string: var(--color-green, #0d97b3);
  --code-tag: var(--color-red, #e45749);
  --code-value: var(--color-purple, #a626a4);
  --collapse-icon-color-collapsed: var(--text-muted, #5c5c5c);
  --color-blue: rgb(var(--color-blue-rgb));
  --color-blue-rgb: 106, 173, 250;
  --color-cyan: rgb(var(--color-cyan-rgb));
  --color-cyan-rgb: 56, 219, 214;
  --color-green: rgb(var(--color-green-rgb));
  --color-green-rgb: 74, 213, 95;
  --color-orange: rgb(var(--color-orange-rgb));
  --color-orange-rgb: 242, 154, 100;
  --color-pink: rgb(var(--color-pink-rgb));
  --color-pink-rgb: 243, 125, 183;
  --color-purple: rgb(var(--color-purple-rgb));
  --color-purple-rgb: 187, 158, 245;
  --color-red: rgb(var(--color-red-rgb));
  --color-red-rgb: 254, 112, 112;
  --color-yellow: rgb(var(--color-yellow-rgb));
  --color-yellow-rgb: 224, 205, 99;
  --corner-shape: superellipse(1.1);
  --density-modifier: 1;
  --divider-color-hover: var(--color-base-50, #ababab);
  --embed-background: var(--background-primary-alt, #fafafa);
  --embed-border-start: var(--embed-border-thickness, 2px) solid var(--embed-border-color, var(--color-base-50));
  --embed-max-height: none;
  --file-header-border: var(--border-width, none) solid transparent;
  --file-header-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-size: var(--font-ui-small, 13px);
  --file-line-width: var(--line-width, 700px);
  --font-interface-theme: Inter;
  --font-mermaid: var(--font-text, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --font-text-theme: Inter;
  --font-ui-large: calc(20px + var(--font-ui-modifier));
  --font-ui-medium: calc(15px + var(--font-ui-modifier));
  --font-ui-modifier: 0px;
  --font-ui-small: calc(13px + var(--font-ui-modifier));
  --font-ui-smaller: calc(12px + var(--font-ui-modifier));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --footnote-radius: var(--radius-s, 8px);
  --frame-right-space: 144px;
  --graph-node-attachment: var(--color-yellow, rgb(224, 205, 99));
  --graph-node-tag: var(--color-green, rgb(74, 213, 95));
  --h1-font: var(--font-text-override), "Instrument Serif";
  --h2-font: var(--font-text-override), "Instrument Serif";
  --h3-font: var(--font-text-override), "Instrument Serif";
  --h4-font: var(--font-text-override), "Instrument Serif";
  --h5-font: var(--font-text-override), "Instrument Serif";
  --h5-line-height: var(--line-height-normal, 1.6);
  --h6-font: var(--font-text-override), "Instrument Serif";
  --h6-line-height: var(--line-height-normal, 1.6);
  --header-height: 48px;
  --headerFont: var(--font-text-theme, Inter);
  --hover-sidedock-delay: 160ms;
  --hover-sidedock-trigger-area: 4px;
  --hover-sidedock-width: 320px;
  --hr-align: center;
  --hr-dashed-size: 1em;
  --hr-dashed-spacing: 0.5em;
  --hr-width: 100%;
  --icon-l: calc(16px + var(--icon-size-modifier));
  --icon-l-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-m: calc(16px + var(--icon-size-modifier));
  --icon-m-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-opacity: 1;
  --icon-s: calc(16px + var(--icon-size-modifier));
  --icon-s-stroke-width: calc(2px*var(--icon-stroke-modifier));
  --icon-size: var(--icon-m, 16px);
  --icon-size-modifier: 0px;
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --icon-stroke-modifier: 1;
  --icon-xl: calc(32px + var(--icon-size-modifier));
  --icon-xl-stroke-width: calc(1.25px*var(--icon-stroke-modifier));
  --icon-xs: calc(14px + var(--icon-size-modifier));
  --icon-xs-stroke-width: calc(2.25px*var(--icon-stroke-modifier));
  --indentation-guide-width: var(--border-width, 0px);
  --inline-title-font: var(--font-text-override), "Instrument Serif";
  --inline-title-margin-bottom: calc(0.5em*var(--readable-spacing-modifier, 1));
  --input-corner-shape: var(--corner-shape, superellipse(1.1));
  --input-font-weight: var(--font-medium, 500);
  --input-height: 32px;
  --input-radius: var(--radius-s, 8px);
  --input-shadow: inset 0 0 0 var(--input-border-width) var(--interactive-accent);
  --input-shadow-hover: inset 0 0 0 var(--input-border-width) var(--interactive-accent-hover);
  --interactive-accent: var(--color-base-100, #222222);
  --interactive-accent-hover: rgb(from var(--color-base-100) r g b / 80%);
  --line-height-normal: 1.6;
  --line-width: 700px;
  --line-width-wide: 50rem;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-spacing: 0.175em;
  --media-radius: var(--radius-s, 8px);
  --menu-border-color: var(--background-modifier-border, #e0e0e0);
  --menu-corner-shape: var(--corner-shape, superellipse(1.1));
  --menu-padding: var(--size-2-3, 4px);
  --menu-radius: var(--radius-m, 12px);
  --menu-shadow: var(--shadow-s, rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px);
  --metadata-gap: 8px;
  --metadata-input-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font: var(--font-interface, Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-width: calc(9em*var(--metadata-label-width-modifier, 1));
  --metadata-property-corner-shape: var(--corner-shape, superellipse(1.1));
  --metadata-property-corner-shape-focus: var(--corner-shape, superellipse(1.1));
  --metadata-property-corner-shape-hover: var(--corner-shape, superellipse(1.1));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 13px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 13px);
  --modal-background: var(--background-secondary, #f6f6f6);
  --modal-border-color: var(--background-modifier-border, #e0e0e0);
  --modal-radius: var(--radius-l, 20px);
  --nav-indentation-guide-width: var(--indentation-guide-width, 0px);
  --nav-item-children-margin-start: calc(20px - var(--nav-indentation-guide-width)/2);
  --nav-item-padding: calc(8px*var(--density-modifier)) 16px calc(8px*var(--density-modifier)) 32px;
  --nav-item-parent-padding: var(--nav-item-padding, 8px 16px 8px 32px);
  --nav-item-radius: var(--radius-s, 8px);
  --nav-item-size: var(--font-ui-small, 13px);
  --nav-tag-radius: var(--radius-s, 8px);
  --nn-theme-file-border-radius: var(--radius-m, 12px);
  --nn-theme-file-tag-bg: var(--tag-background, hsla(258, 88%, 66%, 0.1));
  --nn-theme-file-tag-color: var(--tag-color, hsl(258, 88%, 66%));
  --nn-theme-list-bg: transparent;
  --nn-theme-list-header-bg: transparent;
  --nn-theme-mobile-list-header-link-color: var(--text-normal, #222222);
  --nn-theme-mobile-nav-bg: transparent;
  --nn-theme-mobile-toolbar-button-active-bg: var(--interactive-accent, #222222);
  --nn-theme-mobile-toolbar-button-active-icon-color: var(--text-on-accent, #ffffff);
  --nn-theme-mobile-toolbar-button-icon-color: var(--text-normal, #222222);
  --nn-theme-nav-bg: transparent;
  --nn-theme-nav-header-bg: transparent;
  --nn-theme-navitem-border-radius: var(--radius-m, 12px);
  --nn-theme-navitem-selected-bg: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nn-theme-navitem-selected-inactive-bg: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --p-spacing: 1.75rem;
  --prompt-border-color: var(--background-modifier-border, #e0e0e0);
  --prompt-input-height: 64px;
  --radius-l: calc(20px*var(--radius-modifier));
  --radius-m: calc(12px*var(--radius-modifier));
  --radius-modifier: 1;
  --radius-modifier-check: clamp(0, (var(--radius-modifier) - 1) * 10000 + 1, 1);
  --radius-s: calc(8px*var(--radius-modifier));
  --radius-xl: calc(28px*var(--radius-modifier));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--ribbon-background, transparent);
  --scrollbar-radius: var(--radius-l, 20px);
  --secondary: var(--interactive-accent, var(--color-base-100, #222222));
  --setting-group-heading-color: var(--text-faint, #ababab);
  --setting-group-heading-size: var(--font-ui-small, 13px);
  --setting-items-padding: calc(16px*var(--density-modifier)) 16px;
  --setting-items-radius: var(--radius-m, 12px);
  --shadow-l: 0 14px 62px #00000040;
  --shadow-s: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(var(--mono-rgb-100), 0.04) 0px 2px 4px -2px;
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-block-spacing: var(--p-spacing, 1.75rem);
  --shiki-code-function: var(--color-green, rgb(74, 213, 95));
  --shiki-code-important: var(--color-orange, rgb(242, 154, 100));
  --shiki-code-keyword: var(--color-pink, rgb(243, 125, 183));
  --shiki-code-property: var(--color-cyan, rgb(56, 219, 214));
  --shiki-code-string: var(--color-yellow, rgb(224, 205, 99));
  --shiki-code-value: var(--color-purple, rgb(187, 158, 245));
  --status-bar-font-size: var(--font-ui-smaller, 12px);
  --status-bar-radius: var(--radius-m, 12px 0 0 0) 0 0 0;
  --sync-avatar-color-1: var(--color-red, rgb(254, 112, 112));
  --sync-avatar-color-2: var(--color-orange, rgb(242, 154, 100));
  --sync-avatar-color-3: var(--color-yellow, rgb(224, 205, 99));
  --sync-avatar-color-4: var(--color-green, rgb(74, 213, 95));
  --sync-avatar-color-5: var(--color-cyan, rgb(56, 219, 214));
  --sync-avatar-color-6: var(--color-blue, rgb(106, 173, 250));
  --sync-avatar-color-7: var(--color-purple, rgb(187, 158, 245));
  --sync-avatar-color-8: var(--color-pink, rgb(243, 125, 183));
  --tab-action-width: 32px;
  --tab-curve: calc(var(--tab-radius) + 4px);
  --tab-divider-color: var(--background-modifier-border, #e0e0e0);
  --tab-font-size: var(--font-ui-small, 13px);
  --tab-max-width: var(--tab-width, 200px);
  --tab-outline-width: 0px;
  --tab-radius: var(--radius-s, 8px);
  --tab-radius-active: var(--tab-radius) var(--tab-radius, 8px 8px 0 0) 0 0;
  --tab-stacked-font-size: var(--font-ui-small, 13px);
  --tab-stacked-header-width: var(--header-height, 48px);
  --tab-switcher-preview-radius: var(--radius-xl, 28px);
  --tab-text-align: left;
  --tab-text-color-focused-active: var(--text-normal, #222222);
  --table-add-button-border-width: var(--table-border-width, 0);
  --table-drag-handle-background-active: var(--table-selection-border-color, #222222);
  --table-drag-handle-color-active: var(--text-on-accent, #ffffff);
  --table-header-border-color: var(--table-border-color, transparent);
  --table-header-size: var(--table-text-size, 0.933em);
  --table-selection-border-color: var(--interactive-accent, #222222);
  --table-text-size: var(--font-small, 0.933em);
  --tag-padding-x: 8px;
  --tag-padding-y: 4px;
  --tag-radius: 8px;
  --tag-weight: var(--font-medium, 500);
  --tertiary: var(--interactive-accent-hover, rgb(from var(--color-base-100) r g b / 80%));
  --text-error: var(--color-red, rgb(254, 112, 112));
  --text-on-accent: var(--color-base-00, #ffffff);
  --text-on-accent-inverted: var(--color-base-00, #ffffff);
  --text-success: var(--color-green, rgb(74, 213, 95));
  --text-warning: var(--color-orange, rgb(242, 154, 100));
  --titleFont: var(--font-text-theme, Inter);
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --traffic-lights-offset-x: var(--header-height, 48px);
  --traffic-lights-offset-y: var(--header-height, 48px);
  --translucent-dark-opacity: 50%;
  --translucent-light-opacity: 50%;
  --vault-profile-font-size: var(--font-ui-small, 13px);
  --view-top-spacing-markdown: 0px;
  --workspace-background-translucent: var(--background-secondary, #f6f6f6);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.1);
  --background-modifier-border: rgb(var(--gray-80));
  --background-modifier-border-focus: rgb(var(--gray-70));
  --background-modifier-border-hover: rgb(var(--gray-80));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #ffffff);
  --background-modifier-hover: rgba(var(--gray-50), 0.16);
  --background-primary: rgb(var(--gray-100));
  --background-primary-alt: rgb(var(--gray-90));
  --background-secondary: rgb(var(--gray-90));
  --background-secondary-alt: rgb(var(--gray-80));
  --bases-cards-background: var(--background-primary, #ffffff);
  --bases-cards-cover-background: var(--background-primary-alt, #fafafa);
  --bases-embed-border-color: var(--background-modifier-border, #e0e0e0);
  --bases-group-heading-property-color: var(--text-muted, #5c5c5c);
  --bases-table-border-color: var(--table-border-color, #e0e0e0);
  --bases-table-cell-background-active: var(--background-primary, #ffffff);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #fafafa);
  --bases-table-cell-background-selected: var(--table-selection, hsla(258, 88%, 66%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #fafafa);
  --bases-table-header-background: var(--background-primary, #f6f6f6);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --bases-table-header-color: var(--text-muted, #ababab);
  --bases-table-row-background-hover: var(--table-row-background-hover, transparent);
  --bases-table-summary-background: var(--background-primary, #ffffff);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --canvas-background: var(--background-primary, #ffffff);
  --canvas-card-label-color: var(--text-faint, #ababab);
  --canvas-dot-pattern: var(--color-base-30, #e0e0e0);
  --caret-color: var(--text-normal, #222222);
  --checkbox-border-color: var(--text-faint, #ababab);
  --checkbox-border-color-hover: var(--text-muted, #5c5c5c);
  --checkbox-marker-color: var(--background-primary, #ffffff);
  --checklist-done-color: var(--text-muted, #5c5c5c);
  --code-background: var(--background-primary-alt, #fafafa);
  --code-border-color: var(--background-modifier-border, #e0e0e0);
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --collapse-icon-color: var(--text-faint, #ababab);
  --collapse-icon-color-collapsed: var(--text-accent, #5c5c5c);
  --color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --color-accent-1: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15));
  --color-accent-2: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29));
  --color-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --divider-color: var(--background-modifier-border, #e0e0e0);
  --flair-background: var(--interactive-normal, #ffffff);
  --flair-color: var(--text-normal, #222222);
  --footnote-divider-color: var(--metadata-divider-color, #e0e0e0);
  --footnote-divider-color-active: var(--metadata-divider-color-focus, transparent);
  --footnote-id-color: var(--text-muted, #5c5c5c);
  --footnote-id-color-no-occurrences: var(--text-faint, #ababab);
  --footnote-input-background: var(--metadata-input-background, transparent);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.067));
  --graph-line: var(--color-base-35, var(--background-modifier-border-focus));
  --graph-node: var(--text-muted, #5c5c5c);
  --graph-node-focused: var(--text-accent, hsl(258, 88%, 66%));
  --graph-node-unresolved: var(--text-faint, #ababab);
  --graph-text: var(--text-normal, #222222);
  --heading-formatting: var(--text-faint, #ababab);
  --hr-color: var(--background-modifier-border, #e0e0e0);
  --icon-color: var(--text-muted, #5c5c5c);
  --icon-color-active: var(--text-accent, hsl(258, 88%, 66%));
  --icon-color-focused: var(--text-normal, #222222);
  --icon-color-hover: var(--text-muted, #5c5c5c);
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
  --indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
  --input-date-separator: var(--text-faint, #ababab);
  --input-placeholder-color: var(--text-faint, #ababab);
  --input-shadow: 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --input-shadow-hover: 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --interactive-accent-hsl: var(--color-accent-hsl, 258, 88%, 66%);
  --interactive-hover: rgba(var(--gray-80), 0.5);
  --interactive-normal: rgb(var(--gray-90));
  --list-marker-color: var(--text-faint, #ababab);
  --list-marker-color-collapsed: var(--text-accent, hsl(258, 88%, 66%));
  --list-marker-color-hover: var(--text-muted, #5c5c5c);
  --menu-background: var(--background-secondary, #f6f6f6);
  --metadata-border-color: var(--background-modifier-border, #e0e0e0);
  --metadata-divider-color: var(--background-modifier-border, #e0e0e0);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --metadata-input-text-color: var(--text-normal, #222222);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --metadata-label-text-color: var(--text-muted, #5c5c5c);
  --metadata-label-text-color-hover: var(--text-muted, #5c5c5c);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nav-collapse-icon-color: var(--collapse-icon-color, #ababab);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #ababab);
  --nav-heading-color: var(--text-normal, #222222);
  --nav-heading-color-collapsed: var(--text-faint, #ababab);
  --nav-heading-color-collapsed-hover: var(--text-muted, #5c5c5c);
  --nav-heading-color-hover: var(--text-normal, #222222);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(0, 0, 0, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nav-item-color: var(--text-muted, #5c5c5c);
  --nav-item-color-active: var(--text-normal, #222222);
  --nav-item-color-highlighted: var(--text-accent, hsl(258, 88%, 66%));
  --nav-item-color-hover: var(--text-normal, #222222);
  --nav-item-color-selected: var(--text-normal, #222222);
  --nav-tag-color: var(--text-faint, #ababab);
  --nav-tag-color-active: var(--text-muted, #5c5c5c);
  --nav-tag-color-hover: var(--text-muted, #5c5c5c);
  --pdf-background: var(--background-primary, #ffffff);
  --pdf-page-background: var(--background-primary, #ffffff);
  --pdf-sidebar-background: var(--background-primary, #ffffff);
  --pill-color: var(--text-muted, #5c5c5c);
  --pill-color-hover: var(--text-normal, #222222);
  --pill-color-remove: var(--text-faint, #ababab);
  --pill-color-remove-hover: var(--text-accent, hsl(258, 88%, 66%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.2);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0.05);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.1);
  --search-clear-button-color: var(--text-muted, #5c5c5c);
  --search-icon-color: var(--text-muted, #5c5c5c);
  --search-result-background: var(--background-primary, #ffffff);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #d4d4d4);
  --slider-track-background: var(--background-modifier-border, #e0e0e0);
  --status-bar-background: var(--background-secondary, #f6f6f6);
  --status-bar-border-color: var(--divider-color, #e0e0e0);
  --status-bar-text-color: var(--text-muted, #5c5c5c);
  --tab-background-active: var(--background-primary, #ffffff);
  --tab-outline-color: var(--divider-color, #e0e0e0);
  --tab-switcher-background: var(--background-secondary, #f6f6f6);
  --tab-switcher-menubar-background: var(--mobile-sidebar-background, linear-gradient(to top, #f6f6f6, transparent));
  --tab-text-color: var(--text-faint, #ababab);
  --tab-text-color-active: var(--text-muted, #5c5c5c);
  --tab-text-color-focused: var(--text-muted, #5c5c5c);
  --tab-text-color-focused-active: var(--text-muted, #222222);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(258, 88%, 66%));
  --table-add-button-border-color: var(--background-modifier-border, #e0e0e0);
  --table-border-color: var(--background-modifier-border, #e0e0e0);
  --table-column-alt-background: var(--table-background, transparent);
  --table-drag-handle-color: var(--text-faint, #ababab);
  --table-header-background: var(--table-background, transparent);
  --table-header-color: var(--text-normal, #222222);
  --table-row-alt-background: var(--table-background, transparent);
  --table-row-alt-background-hover: var(--table-background, transparent);
  --table-row-background-hover: var(--table-background, transparent);
  --table-selection: hsla(var(--color-accent-hsl), 0.1);
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, darken);
  --tag-background: hsla(var(--interactive-accent-hsl), 0.1);
  --tag-background-hover: hsla(var(--interactive-accent-hsl), 0.2);
  --tag-border-color: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-border-color-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-color: var(--text-accent, hsl(258, 88%, 66%));
  --tag-color-hover: var(--text-accent, hsl(258, 88%, 66%));
  --text-accent: var(--color-accent-1, hsl(258, 88%, 66%));
  --text-accent-hover: var(--color-accent-2, hsl(255, 89.76%, 75.9%));
  --text-faint: rgb(var(--gray-60));
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb), 0.4);
  --text-muted: rgb(var(--gray-30));
  --text-normal: rgb(var(--gray-10));
  --titlebar-border-color: var(--background-modifier-border, #e0e0e0);
  --titlebar-text-color: var(--text-muted, #5c5c5c);
  --titlebar-text-color-focused: var(--text-normal, #222222);
  --vault-profile-color: var(--text-normal, #222222);
  --vault-profile-color-hover: var(--vault-profile-color, #222222);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.1);
  --background-modifier-border: rgb(var(--gray-80));
  --background-modifier-border-focus: rgb(var(--gray-70));
  --background-modifier-border-hover: rgb(var(--gray-80));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #ffffff);
  --background-modifier-hover: rgba(var(--gray-50), 0.16);
  --background-primary: rgb(var(--gray-100));
  --background-primary-alt: rgb(var(--gray-90));
  --background-secondary: rgb(var(--gray-90));
  --background-secondary-alt: rgb(var(--gray-80));
  --bases-cards-background: var(--background-primary, #ffffff);
  --bases-cards-cover-background: var(--background-primary-alt, #fafafa);
  --bases-embed-border-color: var(--background-modifier-border, #e0e0e0);
  --bases-group-heading-property-color: var(--text-muted, #5c5c5c);
  --bases-table-border-color: var(--table-border-color, #e0e0e0);
  --bases-table-cell-background-active: var(--background-primary, #ffffff);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #fafafa);
  --bases-table-cell-background-selected: var(--table-selection, hsla(258, 88%, 66%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, #fafafa);
  --bases-table-header-background: var(--background-primary, #f6f6f6);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --bases-table-header-color: var(--text-muted, #ababab);
  --bases-table-row-background-hover: var(--table-row-background-hover, transparent);
  --bases-table-summary-background: var(--background-primary, #ffffff);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --canvas-background: var(--background-primary, #ffffff);
  --canvas-card-label-color: var(--text-faint, #ababab);
  --canvas-dot-pattern: var(--color-base-30, #e0e0e0);
  --caret-color: var(--text-normal, #222222);
  --checkbox-border-color: var(--text-faint, #ababab);
  --checkbox-border-color-hover: var(--text-muted, #5c5c5c);
  --checkbox-marker-color: var(--background-primary, #ffffff);
  --checklist-done-color: var(--text-muted, #5c5c5c);
  --code-background: var(--background-primary-alt, #fafafa);
  --code-border-color: var(--background-modifier-border, #e0e0e0);
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --collapse-icon-color: var(--text-faint, #ababab);
  --collapse-icon-color-collapsed: var(--text-accent, #5c5c5c);
  --color-accent: hsl(var(--accent-h), var(--accent-s), var(--accent-l));
  --color-accent-1: hsl(calc(var(--accent-h) - 3), calc(var(--accent-s)*1.02), calc(var(--accent-l)*1.15));
  --color-accent-2: hsl(calc(var(--accent-h) - 5), calc(var(--accent-s)*1.05), calc(var(--accent-l)*1.29));
  --color-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --divider-color: var(--background-modifier-border, #e0e0e0);
  --flair-background: var(--interactive-normal, #ffffff);
  --flair-color: var(--text-normal, #222222);
  --footnote-divider-color: var(--metadata-divider-color, #e0e0e0);
  --footnote-divider-color-active: var(--metadata-divider-color-focus, transparent);
  --footnote-id-color: var(--text-muted, #5c5c5c);
  --footnote-id-color-no-occurrences: var(--text-faint, #ababab);
  --footnote-input-background: var(--metadata-input-background, transparent);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.067));
  --graph-line: var(--color-base-35, var(--background-modifier-border-focus));
  --graph-node: var(--text-muted, #5c5c5c);
  --graph-node-focused: var(--text-accent, hsl(258, 88%, 66%));
  --graph-node-unresolved: var(--text-faint, #ababab);
  --graph-text: var(--text-normal, #222222);
  --heading-formatting: var(--text-faint, #ababab);
  --hr-color: var(--background-modifier-border, #e0e0e0);
  --icon-color: var(--text-muted, #5c5c5c);
  --icon-color-active: var(--text-accent, hsl(258, 88%, 66%));
  --icon-color-focused: var(--text-normal, #222222);
  --icon-color-hover: var(--text-muted, #5c5c5c);
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.12);
  --indentation-guide-color-active: rgba(var(--mono-rgb-100), 0.3);
  --input-date-separator: var(--text-faint, #ababab);
  --input-placeholder-color: var(--text-faint, #ababab);
  --input-shadow: 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --input-shadow-hover: 0 0 0 var(--input-border-width) var(--background-modifier-border-hover);
  --interactive-accent-hsl: var(--color-accent-hsl, 258, 88%, 66%);
  --interactive-hover: rgba(var(--gray-80), 0.5);
  --interactive-normal: rgb(var(--gray-90));
  --list-marker-color: var(--text-faint, #ababab);
  --list-marker-color-collapsed: var(--text-accent, hsl(258, 88%, 66%));
  --list-marker-color-hover: var(--text-muted, #5c5c5c);
  --menu-background: var(--background-secondary, #f6f6f6);
  --metadata-border-color: var(--background-modifier-border, #e0e0e0);
  --metadata-divider-color: var(--background-modifier-border, #e0e0e0);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --metadata-input-text-color: var(--text-normal, #222222);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --metadata-label-text-color: var(--text-muted, #5c5c5c);
  --metadata-label-text-color-hover: var(--text-muted, #5c5c5c);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nav-collapse-icon-color: var(--collapse-icon-color, #ababab);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #ababab);
  --nav-heading-color: var(--text-normal, #222222);
  --nav-heading-color-collapsed: var(--text-faint, #ababab);
  --nav-heading-color-collapsed-hover: var(--text-muted, #5c5c5c);
  --nav-heading-color-hover: var(--text-normal, #222222);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(0, 0, 0, 0.12));
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.067));
  --nav-item-color: var(--text-muted, #5c5c5c);
  --nav-item-color-active: var(--text-normal, #222222);
  --nav-item-color-highlighted: var(--text-accent, hsl(258, 88%, 66%));
  --nav-item-color-hover: var(--text-normal, #222222);
  --nav-item-color-selected: var(--text-normal, #222222);
  --nav-tag-color: var(--text-faint, #ababab);
  --nav-tag-color-active: var(--text-muted, #5c5c5c);
  --nav-tag-color-hover: var(--text-muted, #5c5c5c);
  --pdf-background: var(--background-primary, #ffffff);
  --pdf-page-background: var(--background-primary, #ffffff);
  --pdf-sidebar-background: var(--background-primary, #ffffff);
  --pill-color: var(--text-muted, #5c5c5c);
  --pill-color-hover: var(--text-normal, #222222);
  --pill-color-remove: var(--text-faint, #ababab);
  --pill-color-remove-hover: var(--text-accent, hsl(258, 88%, 66%));
  --scrollbar-active-thumb-bg: rgba(var(--mono-rgb-100), 0.2);
  --scrollbar-bg: rgba(var(--mono-rgb-100), 0.05);
  --scrollbar-thumb-bg: rgba(var(--mono-rgb-100), 0.1);
  --search-clear-button-color: var(--text-muted, #5c5c5c);
  --search-icon-color: var(--text-muted, #5c5c5c);
  --search-result-background: var(--background-primary, #ffffff);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #d4d4d4);
  --slider-track-background: var(--background-modifier-border, #e0e0e0);
  --status-bar-background: var(--background-secondary, #f6f6f6);
  --status-bar-border-color: var(--divider-color, #e0e0e0);
  --status-bar-text-color: var(--text-muted, #5c5c5c);
  --tab-background-active: var(--background-primary, #ffffff);
  --tab-outline-color: var(--divider-color, #e0e0e0);
  --tab-switcher-background: var(--background-secondary, #f6f6f6);
  --tab-switcher-menubar-background: var(--mobile-sidebar-background, linear-gradient(to top, #f6f6f6, transparent));
  --tab-text-color: var(--text-faint, #ababab);
  --tab-text-color-active: var(--text-muted, #5c5c5c);
  --tab-text-color-focused: var(--text-muted, #5c5c5c);
  --tab-text-color-focused-active: var(--text-muted, #222222);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(258, 88%, 66%));
  --table-add-button-border-color: var(--background-modifier-border, #e0e0e0);
  --table-border-color: var(--background-modifier-border, #e0e0e0);
  --table-column-alt-background: var(--table-background, transparent);
  --table-drag-handle-color: var(--text-faint, #ababab);
  --table-header-background: var(--table-background, transparent);
  --table-header-color: var(--text-normal, #222222);
  --table-row-alt-background: var(--table-background, transparent);
  --table-row-alt-background-hover: var(--table-background, transparent);
  --table-row-background-hover: var(--table-background, transparent);
  --table-selection: hsla(var(--color-accent-hsl), 0.1);
  --table-selection-blend-mode: var(--highlight-mix-blend-mode, darken);
  --tag-background: hsla(var(--interactive-accent-hsl), 0.1);
  --tag-background-hover: hsla(var(--interactive-accent-hsl), 0.2);
  --tag-border-color: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-border-color-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --tag-color: var(--text-accent, hsl(258, 88%, 66%));
  --tag-color-hover: var(--text-accent, hsl(258, 88%, 66%));
  --text-accent: var(--color-accent-1, hsl(258, 88%, 66%));
  --text-accent-hover: var(--color-accent-2, hsl(255, 89.76%, 75.9%));
  --text-faint: rgb(var(--gray-60));
  --text-highlight-bg: rgba(var(--text-highlight-bg-rgb), 0.4);
  --text-muted: rgb(var(--gray-30));
  --text-normal: rgb(var(--gray-10));
  --titlebar-border-color: var(--background-modifier-border, #e0e0e0);
  --titlebar-text-color: var(--text-muted, #5c5c5c);
  --titlebar-text-color-focused: var(--text-normal, #222222);
  --vault-profile-color: var(--text-normal, #222222);
  --vault-profile-color-hover: var(--vault-profile-color, #222222);
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  color: var(--text-highlight, var(--text-normal));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--font-medium, 500);
}

html[saved-theme="light"] body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer {
  opacity: 0.5;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(34, 34, 34));
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  transition: opacity 0.16s ease-in-out;
}

html[saved-theme="light"] body a.internal-link.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(250, 250, 250));
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: var(--heading-spacing, 28px);
  width: 654px;
}

html[saved-theme="light"] body tbody {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-left-radius: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: var(--table-text-align-body, start);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: var(--table-header-weight, 700);
  padding-bottom: 8px;
  padding-top: 8px;
  text-align: var(--table-text-align-header, start);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: var(--code-normal, rgb(56, 58, 66));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body img {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body video {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, rgb(250, 250, 250));
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 171, 171);
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgb(250, 250, 250));
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through;
  text-decoration-color: rgb(171, 171, 171);
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
  background-color: rgb(242, 154, 100);
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
  background-color: rgb(187, 158, 245);
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
  background-color: rgb(224, 205, 99);
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
  background-color: rgb(106, 173, 250);
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
  background-color: rgb(56, 219, 214);
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
  background-color: rgb(243, 125, 183);
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
  background-color: rgb(242, 154, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' fill='none' viewBox='0 0 22 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M14.023 19.365a3.261 3.261 0 0 0 3.262-3.261 3.263 3.263 0 0 0-3.262-3.272 3.263 3.263 0 0 0-3.261 3.271 3.261 3.261 0 0 0 3.261 3.262Zm-7.177 0a3.261 3.261 0 0 0 3.261-3.261 3.263 3.263 0 0 0-3.261-3.272 3.263 3.263 0 0 0-3.262 3.271 3.261 3.261 0 0 0 3.262 3.262Zm10.761-6.425a3.255 3.255 0 0 0 3.262-3.262 3.255 3.255 0 0 0-3.262-3.262 3.263 3.263 0 0 0-3.271 3.262 3.263 3.263 0 0 0 3.271 3.261Zm-14.345 0a3.263 3.263 0 0 0 3.271-3.262 3.263 3.263 0 0 0-3.271-3.262 3.261 3.261 0 1 0 0 6.524Zm10.761-6.417a3.255 3.255 0 0 0 3.262-3.261A3.255 3.255 0 0 0 14.023 0a3.255 3.255 0 0 0-3.261 3.262 3.255 3.255 0 0 0 3.261 3.261Zm-7.177 0a3.255 3.255 0 0 0 3.261-3.261A3.255 3.255 0 0 0 6.846 0a3.255 3.255 0 0 0-3.262 3.262 3.255 3.255 0 0 0 3.262 3.261Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.23v19.365H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='22' height='20' fill='none' viewBox='0 0 22 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='black' d='M14.023 19.365a3.261 3.261 0 0 0 3.262-3.261 3.263 3.263 0 0 0-3.262-3.272 3.263 3.263 0 0 0-3.261 3.271 3.261 3.261 0 0 0 3.261 3.262Zm-7.177 0a3.261 3.261 0 0 0 3.261-3.261 3.263 3.263 0 0 0-3.261-3.272 3.263 3.263 0 0 0-3.262 3.271 3.261 3.261 0 0 0 3.262 3.262Zm10.761-6.425a3.255 3.255 0 0 0 3.262-3.262 3.255 3.255 0 0 0-3.262-3.262 3.263 3.263 0 0 0-3.271 3.262 3.263 3.263 0 0 0 3.271 3.261Zm-14.345 0a3.263 3.263 0 0 0 3.271-3.262 3.263 3.263 0 0 0-3.271-3.262 3.261 3.261 0 1 0 0 6.524Zm10.761-6.417a3.255 3.255 0 0 0 3.262-3.261A3.255 3.255 0 0 0 14.023 0a3.255 3.255 0 0 0-3.261 3.262 3.255 3.255 0 0 0 3.261 3.261Zm-7.177 0a3.255 3.255 0 0 0 3.261-3.261A3.255 3.255 0 0 0 6.846 0a3.255 3.255 0 0 0-3.262 3.262 3.255 3.255 0 0 0 3.262 3.261Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h21.23v19.365H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 125, 183);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M19.238 6.24c0-2.89-1.816-5.312-4.228-5.312h-1.72c1.758 1.28 2.54 3.213 2.5 5.41-.03 2.442-.976 4.19-1.826 5.245h1.406c2.178 0 3.867-2.344 3.867-5.342Zm-4.756.07C14.541 2.744 11.65.05 7.11.01L5.791 0c-1.27-.01-2.207.09-2.734.236-.762.185-1.494.644-1.494 1.571 0 .371.097.655.214.86.078.117.069.224-.058.273-.596.244-1.104.82-1.104 1.582 0 .45.127.83.352 1.104.107.146.088.273-.088.38-.44.254-.752.801-.752 1.436 0 .46.146.938.4 1.172.166.137.137.234-.029.38C.195 9.25 0 9.689 0 10.245a1.69 1.69 0 0 0 1.7 1.71h3.437c.869 0 1.445.449 1.445 1.172 0 1.299-1.621 3.691-1.621 5.41 0 .918.576 1.445 1.348 1.445.693 0 1.035-.478 1.406-1.21 1.455-2.823 3.389-5.108 4.863-7.071 1.25-1.66 1.865-3.086 1.904-5.39Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' viewBox='0 0 20 20'%3e%3cpath fill='black' d='M19.238 6.24c0-2.89-1.816-5.312-4.228-5.312h-1.72c1.758 1.28 2.54 3.213 2.5 5.41-.03 2.442-.976 4.19-1.826 5.245h1.406c2.178 0 3.867-2.344 3.867-5.342Zm-4.756.07C14.541 2.744 11.65.05 7.11.01L5.791 0c-1.27-.01-2.207.09-2.734.236-.762.185-1.494.644-1.494 1.571 0 .371.097.655.214.86.078.117.069.224-.058.273-.596.244-1.104.82-1.104 1.582 0 .45.127.83.352 1.104.107.146.088.273-.088.38-.44.254-.752.801-.752 1.436 0 .46.146.938.4 1.172.166.137.137.234-.029.38C.195 9.25 0 9.689 0 10.245a1.69 1.69 0 0 0 1.7 1.71h3.437c.869 0 1.445.449 1.445 1.172 0 1.299-1.621 3.691-1.621 5.41 0 .918.576 1.445 1.348 1.445.693 0 1.035-.478 1.406-1.21 1.455-2.823 3.389-5.108 4.863-7.071 1.25-1.66 1.865-3.086 1.904-5.39Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(254, 112, 112);
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
  background-color: rgb(106, 173, 250);
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
  background-color: rgb(242, 154, 100);
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
  background-color: rgb(106, 173, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='22' fill='none' viewBox='0 0 21 22'%3e%3cpath fill='black' d='M4.346 12.48c-.215 0-.362.137-.381.362-.371 3.017-.518 3.095-3.574 3.594-.254.029-.391.156-.391.38 0 .215.137.342.342.372 3.086.595 3.252.576 3.623 3.584.02.234.166.37.38.37.206 0 .362-.136.382-.36.39-3.057.507-3.145 3.613-3.595.195-.019.342-.156.342-.37 0-.215-.147-.352-.342-.381-3.106-.596-3.213-.596-3.613-3.614a.367.367 0 0 0-.381-.341ZM11.982 0c-.283 0-.507.205-.546.508-.85 6.181-1.7 7.002-7.793 7.812-.313.03-.538.254-.538.547 0 .303.225.537.538.567 6.113.664 6.992 1.62 7.792 7.793.04.302.264.517.547.517.293 0 .508-.215.557-.517.81-6.172 1.68-7.13 7.793-7.793a.552.552 0 0 0 .527-.567c0-.293-.205-.517-.527-.547-6.113-.683-6.982-1.63-7.793-7.812C12.49.205 12.275 0 11.982 0Z'/%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='22' fill='none' viewBox='0 0 21 22'%3e%3cpath fill='black' d='M4.346 12.48c-.215 0-.362.137-.381.362-.371 3.017-.518 3.095-3.574 3.594-.254.029-.391.156-.391.38 0 .215.137.342.342.372 3.086.595 3.252.576 3.623 3.584.02.234.166.37.38.37.206 0 .362-.136.382-.36.39-3.057.507-3.145 3.613-3.595.195-.019.342-.156.342-.37 0-.215-.147-.352-.342-.381-3.106-.596-3.213-.596-3.613-3.614a.367.367 0 0 0-.381-.341ZM11.982 0c-.283 0-.507.205-.546.508-.85 6.181-1.7 7.002-7.793 7.812-.313.03-.538.254-.538.547 0 .303.225.537.538.567 6.113.664 6.992 1.62 7.792 7.793.04.302.264.517.547.517.293 0 .508-.215.557-.517.81-6.172 1.68-7.13 7.793-7.793a.552.552 0 0 0 .527-.567c0-.293-.205-.517-.527-.547-6.113-.683-6.982-1.63-7.793-7.812C12.49.205 12.275 0 11.982 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 205, 99);
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
  background-color: rgb(224, 205, 99);
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
  background-color: rgb(254, 112, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' fill='none' viewBox='0 0 20 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M9.697 18.525c.205 0 .498-.136.713-.263 5.498-3.516 8.985-7.608 8.985-11.768 0-3.457-2.373-5.898-5.44-5.898-1.904 0-3.37 1.054-4.258 2.666C8.828 1.66 7.344.596 5.44.596 2.373.596 0 3.037 0 6.494c0 4.16 3.486 8.252 8.994 11.768.205.127.498.263.703.263Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.756v18.525H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='20' height='19' fill='none' viewBox='0 0 20 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M9.697 18.525c.205 0 .498-.136.713-.263 5.498-3.516 8.985-7.608 8.985-11.768 0-3.457-2.373-5.898-5.44-5.898-1.904 0-3.37 1.054-4.258 2.666C8.828 1.66 7.344.596 5.44.596 2.373.596 0 3.037 0 6.494c0 4.16 3.486 8.252 8.994 11.768.205.127.498.263.703.263Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h19.756v18.525H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 125, 183);
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
  background-color: rgb(106, 173, 250);
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
  background-color: rgb(74, 213, 95);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' fill='none' viewBox='0 0 19 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M5 13.154c2.871 2.881 6.309 5.069 9.072 5.069 1.3 0 2.432-.518 3.174-1.348.713-.8.957-1.396.957-1.924 0-.41-.254-.79-.898-1.24l-2.383-1.709c-.596-.42-.86-.498-1.211-.498-.303 0-.557.059-1.065.332l-1.562.86c-.186.107-.264.126-.4.126-.186 0-.313-.049-.498-.127-.743-.341-1.788-1.162-2.715-2.09-.928-.927-1.65-1.875-2.022-2.607a.971.971 0 0 1-.107-.41c0-.127.068-.234.146-.371l.918-1.572c.254-.43.323-.665.323-.997 0-.38-.127-.79-.489-1.308L4.6 1.055C4.13.4 3.78 0 3.252 0 2.598 0 1.807.498 1.24 1.045.43 1.826 0 2.92 0 4.15c0 2.784 2.139 6.153 5 9.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h18.564v18.232H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='19' height='19' fill='none' viewBox='0 0 19 19'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M5 13.154c2.871 2.881 6.309 5.069 9.072 5.069 1.3 0 2.432-.518 3.174-1.348.713-.8.957-1.396.957-1.924 0-.41-.254-.79-.898-1.24l-2.383-1.709c-.596-.42-.86-.498-1.211-.498-.303 0-.557.059-1.065.332l-1.562.86c-.186.107-.264.126-.4.126-.186 0-.313-.049-.498-.127-.743-.341-1.788-1.162-2.715-2.09-.928-.927-1.65-1.875-2.022-2.607a.971.971 0 0 1-.107-.41c0-.127.068-.234.146-.371l.918-1.572c.254-.43.323-.665.323-.997 0-.38-.127-.79-.489-1.308L4.6 1.055C4.13.4 3.78 0 3.252 0 2.598 0 1.807.498 1.24 1.045.43 1.826 0 2.92 0 4.15c0 2.784 2.139 6.153 5 9.004Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h18.564v18.232H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(74, 213, 95);
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
  background-color: rgb(56, 219, 214);
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
  background-color: rgb(74, 213, 95);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M4.854 11.016a.667.667 0 0 1-.684-.684c0-.38.293-.674.684-.674h4.423V3.75c0-.38.293-.674.674-.674.381 0 .684.293.684.674v6.582c0 .39-.303.684-.684.684H4.854Zm5.107 8.906c5.498 0 9.96-4.473 9.96-9.961C19.922 4.463 15.46 0 9.962 0 4.473 0 0 4.463 0 9.96c0 5.49 4.473 9.962 9.96 9.962Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20.283v19.932H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  -webkit-mask-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'%3e%3cg clip-path='url(%23a)'%3e%3cpath fill='white' d='M4.854 11.016a.667.667 0 0 1-.684-.684c0-.38.293-.674.684-.674h4.423V3.75c0-.38.293-.674.674-.674.381 0 .684.293.684.674v6.582c0 .39-.303.684-.684.684H4.854Zm5.107 8.906c5.498 0 9.96-4.473 9.96-9.961C19.922 4.463 15.46 0 9.962 0 4.473 0 0 4.463 0 9.96c0 5.49 4.473 9.962 9.96 9.962Z'/%3e%3c/g%3e%3cdefs%3e%3cclipPath id='a'%3e%3cpath fill='white' d='M0 0h20.283v19.932H0z'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 154, 100);
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
  background-color: rgb(242, 154, 100);
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
  background-color: rgb(242, 154, 100);
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
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 56, 219, 214);
  background: rgba(56, 219, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(56, 219, 214, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(56, 219, 214, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(56, 219, 214, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(56, 219, 214, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="banner-icon"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: rgb(254, 112, 112);
  --background-modifier-error-hover: rgb(254, 112, 112);
  --background-modifier-error-rgb: 254, 112, 112;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: rgb(74, 213, 95);
  --background-modifier-success-rgb: 74, 213, 95;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --banner-fade-height: 0px;
  --banner-icon-size: 0px;
  --banner-image-height: 0px;
  --banner-image-radius: 8px;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #fafafa;
  --blockquote-border-color: #ababab;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: calc(8px*(1 - clamp(0, (1 - 1) * 10000 + 1, 1)) + 100vh*clamp(0, (1 - 1) * 10000 + 1, 1));
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 254, 112, 112;
  --callout-color: var(--callout-default, 106, 173, 250);
  --callout-default: 106, 173, 250;
  --callout-error: 254, 112, 112;
  --callout-example: 187, 158, 245;
  --callout-fail: 254, 112, 112;
  --callout-important: 56, 219, 214;
  --callout-info: 106, 173, 250;
  --callout-padding: 16px;
  --callout-question: 242, 154, 100;
  --callout-radius: 8px;
  --callout-size: 16px;
  --callout-success: 74, 213, 95;
  --callout-summary: 56, 219, 214;
  --callout-tip: 56, 219, 214;
  --callout-title-weight: 700;
  --callout-todo: 106, 173, 250;
  --callout-warning: 242, 154, 100;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: #222222;
  --checkbox-color-hover: rgb(from #222222 r g b / 80%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 8px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #b6b9c5;
  --code-function: #b76b02;
  --code-important: #b76b02;
  --code-keyword: #e45749;
  --code-normal: #383a42;
  --code-operator: rgb(254, 112, 112);
  --code-property: #62afef;
  --code-punctuation: #383a42;
  --code-radius: 8px;
  --code-size: 0.8em;
  --code-string: #0d97b3;
  --code-tag: #e45749;
  --code-value: #a626a4;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: #5c5c5c;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: rgb(106, 173, 250);
  --color-cyan: rgb(56, 219, 214);
  --color-green: rgb(74, 213, 95);
  --color-orange: rgb(242, 154, 100);
  --color-pink: rgb(243, 125, 183);
  --color-purple: rgb(187, 158, 245);
  --color-red: rgb(254, 112, 112);
  --color-yellow: rgb(224, 205, 99);
  --divider-color: #e0e0e0;
  --divider-color-hover: #ababab;
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Inter, 'Arial';
  --font-text: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: rgb(224, 205, 99);
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: rgb(74, 213, 95);
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h1-font: '??', "Instrument Serif";
  --h2-font: '??', "Instrument Serif";
  --h3-font: '??', "Instrument Serif";
  --h4-font: '??', "Instrument Serif";
  --h5-font: '??', "Instrument Serif";
  --h5-line-height: 1.6;
  --h6-font: '??', "Instrument Serif";
  --h6-line-height: 1.6;
  --heading-formatting: #ababab;
  --heading-spacing: 2em;
  --hr-color: #e0e0e0;
  --interactive-accent: #222222;
  --interactive-accent-hover: rgb(from #222222 r g b / 80%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --media-radius: 8px;
  --menu-background: #f6f6f6;
  --menu-border-color: #e0e0e0;
  --menu-border-width: 1px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 4px;
  --menu-radius: 12px;
  --menu-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1);
  --nn-theme-file-tag-color: hsl(258, 88%, 66%);
  --nn-theme-mobile-list-header-link-color: #222222;
  --nn-theme-mobile-toolbar-button-active-bg: #222222;
  --nn-theme-mobile-toolbar-button-active-icon-color: #ffffff;
  --nn-theme-mobile-toolbar-button-icon-color: #222222;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(0, 0, 0, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(0, 0, 0, 0.067);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --radius-l: 20px;
  --radius-m: 12px;
  --radius-modifier-check: clamp(0, (1 - 1) * 10000 + 1, 1);
  --radius-s: 8px;
  --radius-xl: 28px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 20px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #ababab;
  --setting-group-heading-size: 13px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 16px 16px;
  --setting-items-radius: 12px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 8px;
  --shiki-code-block-spacing: 1.75rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: rgb(74, 213, 95);
  --shiki-code-important: rgb(242, 154, 100);
  --shiki-code-keyword: rgb(243, 125, 183);
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: rgb(56, 219, 214);
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: rgb(224, 205, 99);
  --shiki-code-value: rgb(187, 158, 245);
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(74, 213, 95, 0.5);
  --shiki-highlight-green-background: rgba(74, 213, 95, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(254, 112, 112, 0.5);
  --shiki-highlight-red-background: rgba(254, 112, 112, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(254, 112, 112);
  --sync-avatar-color-2: rgb(242, 154, 100);
  --sync-avatar-color-3: rgb(224, 205, 99);
  --sync-avatar-color-4: rgb(74, 213, 95);
  --sync-avatar-color-5: rgb(56, 219, 214);
  --sync-avatar-color-6: rgb(106, 173, 250);
  --sync-avatar-color-7: rgb(187, 158, 245);
  --sync-avatar-color-8: rgb(243, 125, 183);
  --tab-background-active: #ffffff;
  --tab-curve: 12px;
  --tab-divider-color: #e0e0e0;
  --tab-font-size: 13px;
  --tab-max-width: 200px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 8px;
  --tab-radius-active: 8px 8px 0 0;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 28px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #222222;
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: transparent;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #222222;
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
  --text-error: rgb(254, 112, 112);
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-on-accent: #ffffff;
  --text-on-accent-inverted: #ffffff;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: rgb(74, 213, 95);
  --text-warning: rgb(242, 154, 100);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --callout-color: var(--callout-bug, 254, 112, 112);
  background: rgba(254, 112, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(254, 112, 112, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(254, 112, 112, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(254, 112, 112, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(254, 112, 112, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 254, 112, 112);
  background: rgba(254, 112, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(254, 112, 112, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(254, 112, 112, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(254, 112, 112, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(254, 112, 112, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 187, 158, 245);
  background: rgba(187, 158, 245, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(187, 158, 245, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(187, 158, 245, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(187, 158, 245, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(187, 158, 245, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 254, 112, 112);
  background: rgba(254, 112, 112, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(254, 112, 112, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(254, 112, 112, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(254, 112, 112, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(254, 112, 112, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 106, 173, 250);
  background: rgba(106, 173, 250, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 106, 173, 250);
  background: rgba(106, 173, 250, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: #e0e0e0;
  --background-modifier-border-focus: #bdbdbd;
  --background-modifier-border-hover: #d4d4d4;
  --background-modifier-error: rgb(254, 112, 112);
  --background-modifier-error-hover: rgb(254, 112, 112);
  --background-modifier-error-rgb: 254, 112, 112;
  --background-modifier-form-field: #ffffff;
  --background-modifier-form-field-hover: #ffffff;
  --background-modifier-hover: rgba(0, 0, 0, 0.067);
  --background-modifier-success: rgb(74, 213, 95);
  --background-modifier-success-rgb: 74, 213, 95;
  --background-primary: #ffffff;
  --background-primary-alt: #fafafa;
  --background-secondary: #f6f6f6;
  --background-secondary-alt: #fcfcfc;
  --banner-fade-height: 0px;
  --banner-icon-size: 0px;
  --banner-image-height: 0px;
  --banner-image-radius: 8px;
  --bases-embed-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --bases-table-header-background-hover: rgba(var(--callout-color), 0.1);
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #fafafa;
  --blockquote-border-color: #ababab;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: calc(8px*(1 - clamp(0, (1 - 1) * 10000 + 1, 1)) + 100vh*clamp(0, (1 - 1) * 10000 + 1, 1));
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 254, 112, 112;
  --callout-color: var(--callout-default, 106, 173, 250);
  --callout-default: 106, 173, 250;
  --callout-error: 254, 112, 112;
  --callout-example: 187, 158, 245;
  --callout-fail: 254, 112, 112;
  --callout-important: 56, 219, 214;
  --callout-info: 106, 173, 250;
  --callout-padding: 16px;
  --callout-question: 242, 154, 100;
  --callout-radius: 8px;
  --callout-size: 16px;
  --callout-success: 74, 213, 95;
  --callout-summary: 56, 219, 214;
  --callout-tip: 56, 219, 214;
  --callout-title-weight: 700;
  --callout-todo: 106, 173, 250;
  --callout-warning: 242, 154, 100;
  --canvas-background: #ffffff;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
  --canvas-dot-pattern: #e0e0e0;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --caret-color: #222222;
  --checkbox-border-color: #ababab;
  --checkbox-border-color-hover: #5c5c5c;
  --checkbox-color: #222222;
  --checkbox-color-hover: rgb(from #222222 r g b / 80%);
  --checkbox-marker-color: #ffffff;
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: #5c5c5c;
  --clickable-icon-radius: 8px;
  --code-background: #fafafa;
  --code-border-color: #e0e0e0;
  --code-bracket-background: rgba(0, 0, 0, 0.067);
  --code-comment: #b6b9c5;
  --code-function: #b76b02;
  --code-important: #b76b02;
  --code-keyword: #e45749;
  --code-normal: #383a42;
  --code-operator: rgb(254, 112, 112);
  --code-property: #62afef;
  --code-punctuation: #383a42;
  --code-radius: 8px;
  --code-size: 0.8em;
  --code-string: #0d97b3;
  --code-tag: #e45749;
  --code-value: #a626a4;
  --collapse-icon-color: #ababab;
  --collapse-icon-color-collapsed: #5c5c5c;
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-blue: rgb(106, 173, 250);
  --color-cyan: rgb(56, 219, 214);
  --color-green: rgb(74, 213, 95);
  --color-orange: rgb(242, 154, 100);
  --color-pink: rgb(243, 125, 183);
  --color-purple: rgb(187, 158, 245);
  --color-red: rgb(254, 112, 112);
  --color-yellow: rgb(224, 205, 99);
  --divider-color: #e0e0e0;
  --divider-color-hover: #ababab;
  --divider-vertical-height: 100%;
  --dropdown-background: #ffffff;
  --dropdown-background-hover: #fafafa;
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: #ffffff;
  --flair-color: #222222;
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', Inter, 'Arial';
  --font-text: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --font-weight: 400;
  --graph-line: #d4d4d4;
  --graph-node: #5c5c5c;
  --graph-node-attachment: rgb(224, 205, 99);
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: rgb(74, 213, 95);
  --graph-node-unresolved: #ababab;
  --graph-text: #222222;
  --h1-font: '??', "Instrument Serif";
  --h2-font: '??', "Instrument Serif";
  --h3-font: '??', "Instrument Serif";
  --h4-font: '??', "Instrument Serif";
  --h5-font: '??', "Instrument Serif";
  --h5-line-height: 1.6;
  --h6-font: '??', "Instrument Serif";
  --h6-line-height: 1.6;
  --heading-formatting: #ababab;
  --heading-spacing: 2em;
  --hr-color: #e0e0e0;
  --interactive-accent: #222222;
  --interactive-accent-hover: rgb(from #222222 r g b / 80%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: #fafafa;
  --interactive-normal: #ffffff;
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --media-radius: 8px;
  --menu-background: #f6f6f6;
  --menu-border-color: #e0e0e0;
  --menu-border-width: 1px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 4px;
  --menu-radius: 12px;
  --menu-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: hsla(258, 88%, 66%, 0.1);
  --nn-theme-file-tag-color: hsl(258, 88%, 66%);
  --nn-theme-mobile-list-header-link-color: #222222;
  --nn-theme-mobile-toolbar-button-active-bg: #222222;
  --nn-theme-mobile-toolbar-button-active-icon-color: #ffffff;
  --nn-theme-mobile-toolbar-button-icon-color: #222222;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(0, 0, 0, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(0, 0, 0, 0.067);
  --pdf-background: #ffffff;
  --pdf-page-background: #ffffff;
  --pdf-sidebar-background: #ffffff;
  --popover-font-size: 16px;
  --radius-l: 20px;
  --radius-m: 12px;
  --radius-modifier-check: clamp(0, (1 - 1) * 10000 + 1, 1);
  --radius-s: 8px;
  --radius-xl: 28px;
  --raised-background: color-mix(in srgb, #ffffff 65%, transparent) linear-gradient(#ffffff, color-mix(in srgb, #ffffff 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 20px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: #5c5c5c;
  --search-icon-color: #5c5c5c;
  --search-result-background: #ffffff;
  --setting-group-heading-color: #ababab;
  --setting-group-heading-size: 13px;
  --setting-group-heading-weight: 600;
  --setting-items-background: #fafafa;
  --setting-items-border-color: #e0e0e0;
  --setting-items-padding: 16px 16px;
  --setting-items-radius: 12px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  --shiki-active-tab-border-color: #5c5c5c;
  --shiki-code-background: #fafafa;
  --shiki-code-block-border-radius: 8px;
  --shiki-code-block-spacing: 1.75rem;
  --shiki-code-comment: #ababab;
  --shiki-code-function: rgb(74, 213, 95);
  --shiki-code-important: rgb(242, 154, 100);
  --shiki-code-keyword: rgb(243, 125, 183);
  --shiki-code-normal: #5c5c5c;
  --shiki-code-property: rgb(56, 219, 214);
  --shiki-code-punctuation: #5c5c5c;
  --shiki-code-string: rgb(224, 205, 99);
  --shiki-code-value: rgb(187, 158, 245);
  --shiki-gutter-border-color: #e0e0e0;
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: #ababab;
  --shiki-gutter-text-color-highlight: #5c5c5c;
  --shiki-highlight-green: rgba(74, 213, 95, 0.5);
  --shiki-highlight-green-background: rgba(74, 213, 95, 0.1);
  --shiki-highlight-neutral: #5c5c5c;
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(254, 112, 112, 0.5);
  --shiki-highlight-red-background: rgba(254, 112, 112, 0.1);
  --shiki-terminal-dots-color: #ababab;
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: #ffffff;
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: rgb(254, 112, 112);
  --sync-avatar-color-2: rgb(242, 154, 100);
  --sync-avatar-color-3: rgb(224, 205, 99);
  --sync-avatar-color-4: rgb(74, 213, 95);
  --sync-avatar-color-5: rgb(56, 219, 214);
  --sync-avatar-color-6: rgb(106, 173, 250);
  --sync-avatar-color-7: rgb(187, 158, 245);
  --sync-avatar-color-8: rgb(243, 125, 183);
  --tab-background-active: #ffffff;
  --tab-curve: 12px;
  --tab-divider-color: #e0e0e0;
  --tab-font-size: 13px;
  --tab-max-width: 200px;
  --tab-outline-color: #e0e0e0;
  --tab-radius: 8px;
  --tab-radius-active: 8px 8px 0 0;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #f6f6f6;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6f6f6, transparent);
  --tab-switcher-preview-radius: 28px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: #ababab;
  --tab-text-color-active: #5c5c5c;
  --tab-text-color-focused: #5c5c5c;
  --tab-text-color-focused-active: #222222;
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: #e0e0e0;
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: #222222;
  --table-drag-handle-color: #ababab;
  --table-drag-handle-color-active: #ffffff;
  --table-header-background: transparent;
  --table-header-border-color: transparent;
  --table-header-border-width: 1px;
  --table-header-color: #222222;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: #222222;
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
  --text-error: rgb(254, 112, 112);
  --text-faint: #ababab;
  --text-highlight-bg: rgba(255, 208, 0, 0.4);
  --text-muted: #5c5c5c;
  --text-normal: #222222;
  --text-on-accent: #ffffff;
  --text-on-accent-inverted: #ffffff;
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: rgb(74, 213, 95);
  --text-warning: rgb(242, 154, 100);
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  --callout-color: var(--callout-question, 242, 154, 100);
  background: rgba(242, 154, 100, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(242, 154, 100, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(242, 154, 100, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(242, 154, 100, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(242, 154, 100, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 74, 213, 95);
  background: rgba(74, 213, 95, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(74, 213, 95, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(74, 213, 95, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(74, 213, 95, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(74, 213, 95, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 56, 219, 214);
  background: rgba(56, 219, 214, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(56, 219, 214, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(56, 219, 214, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(56, 219, 214, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(56, 219, 214, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 106, 173, 250);
  background: rgba(106, 173, 250, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 242, 154, 100);
  background: rgba(242, 154, 100, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(242, 154, 100, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(242, 154, 100, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(242, 154, 100, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(242, 154, 100, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 106, 173, 250;
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  color: color-mix(in srgb, rgb(var(--callout-color)), var(--text-normal) 15%);
  font-weight: var(--font-weight, 700);
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--background-secondary, rgb(246, 246, 246));
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.25) 0px 14px 62px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: var(--divider-color, rgb(224, 224, 224));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--pill-weight, 500);
}

html[saved-theme="light"] body h1 {
  font-family: var(--h1-font, "??", "Instrument Serif");
}

html[saved-theme="light"] body h2 {
  font-family: var(--h2-font, "??", "Instrument Serif");
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: var(--inline-title-font, "??", "Instrument Serif");
}

html[saved-theme="light"] body h3 {
  font-family: var(--h3-font, "??", "Instrument Serif");
}

html[saved-theme="light"] body h4 {
  font-family: var(--h4-font, "??", "Instrument Serif");
}

html[saved-theme="light"] body h5 {
  font-family: var(--h5-font, "??", "Instrument Serif");
}

html[saved-theme="light"] body h6 {
  font-family: var(--h6-font, "??", "Instrument Serif");
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 106, 173, 250);
  border-bottom-color: rgba(106, 173, 250, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(106, 173, 250, 0.25);
  border-left-width: 1px;
  border-right-color: rgba(106, 173, 250, 0.25);
  border-right-width: 1px;
  border-top-color: rgba(106, 173, 250, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 12px;
  border-top-width: 0px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node-file {
  background-color: var(--background-primary-alt, rgba(0, 0, 0, 0));
  color: var(--text-normal-editor, var(--text-normal));
}

html[saved-theme="light"] body .canvas-sidebar {
  box-shadow: var(--input-shadow, rgb(224, 224, 224) 0px 0px 0px 1px inset);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0) rgb(34, 34, 34) rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
  font-weight: var(--table-header-weight, 700);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-modifier-hover, rgb(255, 255, 255));
  color: var(--text-faint, rgb(34, 34, 34));
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--background-secondary, rgb(246, 246, 246));
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(224, 224, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(224, 224, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: var(--shadow-tactile, rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px);
  color: var(--text-muted, rgb(92, 92, 92));
  font-family: var(--font-text, "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  font-size: var(--code-size, 12.8px);
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
  },
};
