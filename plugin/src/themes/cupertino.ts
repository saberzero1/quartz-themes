import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cupertino",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["sf-pro-display"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1);
  --anim-speed-modifier: 1;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-border: color-mix(in srgb, #2e2e32, #fff 15%);
  --background-modifier-border-focus: #77767b;
  --background-modifier-border-hover: #6b6970;
  --background-modifier-cover: rgba(0, 0, 0, 0.35);
  --background-modifier-error: rgb(224, 27, 36);
  --background-modifier-error-hover: rgb(224, 27, 36);
  --background-modifier-error-rgb: 224, 27, 36;
  --background-modifier-form-field: color-mix(in srgb, #2e2e32, #fff 10%);
  --background-modifier-form-field-hover: color-mix(in srgb, #2e2e32, #fff 10%);
  --background-modifier-success: rgb(38, 162, 105);
  --background-modifier-success-rgb: 38, 162, 105;
  --background-primary: #1d1d20;
  --background-primary-alt: #2e2e32;
  --background-secondary: #2e2e32;
  --background-secondary-alt: #28282c;
  --banner-fade-height: 80px;
  --banner-icon-size: 3rem;
  --banner-image-height: 320px;
  --banner-image-height-s: 240px;
  --banner-image-inset: 8px;
  --banner-image-object-fit: cover;
  --banner-mobile-offset: 0px;
  --bases-cards-background: #1d1d20;
  --bases-cards-corner-shape: superellipse(1.1);
  --bases-cards-cover-background: #2e2e32;
  --bases-cards-radius: 12px;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%);
  --bases-cards-shadow-hover: 0 0 0 1px #6b6970;
  --bases-embed-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --bases-embed-border-radius: 9px;
  --bases-group-heading-property-color: #d2d2d2;
  --bases-group-heading-property-size: 9.02px;
  --bases-header-border-width: 0;
  --bases-table-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --bases-table-cell-background-active: #1d1d20;
  --bases-table-cell-background-disabled: #2e2e32;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #77767b;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-container-border-radius: 9px;
  --bases-table-group-background: #2e2e32;
  --bases-table-header-background: #1d1d20;
  --bases-table-header-color: #99999b;
  --bases-table-summary-background: #1d1d20;
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #2e2e32;
  --blockquote-border-color: #9a9996;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent));
  --bold-modifier: 300;
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: 9px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 224, 27, 36;
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
  --canvas-card-label-color: #99999b;
  --canvas-color-1: 224, 27, 36;
  --canvas-color-2: 230, 97, 0;
  --canvas-color-3: 245, 194, 17;
  --canvas-color-4: 38, 162, 105;
  --canvas-color-5: 33, 144, 164;
  --canvas-color-6: 145, 65, 172;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 9px;
  --canvas-dot-pattern: #5e5c64;
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-background-hover: transparent;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 160px;
  --cards-mobile-width: 120px;
  --cards-padding: 4px;
  --caret-color: #fff;
  --checkbox-border-color: #99999b;
  --checkbox-border-color-hover: #d2d2d2;
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: #1d1d20;
  --checkbox-radius: 100px;
  --checklist-done-color: #d2d2d2;
  --clickable-icon-radius: 9px;
  --code-background: #2e2e32;
  --code-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --code-border-width: 1px;
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
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
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
  --color-blue: rgb(53, 132, 228);
  --color-blue-rgb: 53, 132, 228;
  --color-cyan: rgb(33, 144, 164);
  --color-cyan-rgb: 33, 144, 164;
  --color-green: rgb(38, 162, 105);
  --color-green-rgb: 38, 162, 105;
  --color-orange: rgb(230, 97, 0);
  --color-orange-rgb: 230, 97, 0;
  --color-pink: rgb(213, 97, 170);
  --color-pink-rgb: 213, 97, 170;
  --color-purple: rgb(145, 65, 172);
  --color-purple-rgb: 145, 65, 172;
  --color-red: rgb(224, 27, 36);
  --color-red-rgb: 224, 27, 36;
  --color-yellow: rgb(245, 194, 17);
  --color-yellow-rgb: 245, 194, 17;
  --corner-shape: superellipse(1.1);
  --density-modifier: 1;
  --divider-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --divider-color-alt: rgba(0, 0, 6, 0.36);
  --divider-color-hover: #9a9996;
  --dropdown-background: color-mix(in srgb, #2e2e32, #fff 10%);
  --dropdown-background-hover: color-mix(in srgb, #2e2e32, #fff 15%);
  --dropdown-padding: 0 2.4em 0 0.8em;
  --dropdown-padding-end: 2.4em;
  --embed-background: #2e2e32;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid #9a9996;
  --embed-max-height: none;
  --embed-padding: 16px;
  --file-header-background: #1d1d20;
  --file-header-background-focused: #1d1d20;
  --file-header-border: none;
  --file-header-font: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 11px;
  --flair-background: color-mix(in srgb, #2e2e32, #fff 10%);
  --flair-color: #fff;
  --font-interface: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Adwaita Sans", "Adwaita Sans Text";
  --font-mermaid: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Adwaita Sans", "Adwaita Sans Text", 'Arial';
  --font-text: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Adwaita Sans", "Adwaita Sans Text";
  --font-ui-large: 14.96px;
  --font-ui-medium: 11px;
  --font-ui-modifier: 0px;
  --font-ui-small: 11px;
  --font-ui-smaller: 9.02px;
  --footnote-divider-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --footnote-id-color: #d2d2d2;
  --footnote-id-color-no-occurrences: #99999b;
  --footnote-line-height: 1.6;
  --footnote-radius: 9px;
  --frame-right-space: 124px;
  --graph-line: #6b6970;
  --graph-node: #d2d2d2;
  --graph-node-attachment: rgb(245, 194, 17);
  --graph-node-focused: rgb(166, 139, 249);
  --graph-node-tag: rgb(38, 162, 105);
  --graph-node-unresolved: #99999b;
  --graph-text: #fff;
  --h1-size: 1.5em;
  --h2-size: 1.25em;
  --h3-size: 1.125em;
  --h4-size: 1em;
  --h5-line-height: 1.6;
  --h5-size: 1em;
  --h6-line-height: 1.6;
  --h6-size: 0.875em;
  --header-height: 48px;
  --heading-formatting: #99999b;
  --heading-spacing: 2em;
  --hover-sidedock-delay: 160ms;
  --hover-sidedock-trigger-area: 1px;
  --hover-sidedock-width: 320px;
  --hr-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --icon-color: #d2d2d2;
  --icon-color-active: rgb(166, 139, 249);
  --icon-color-focused: #fff;
  --icon-color-hover: #d2d2d2;
  --icon-l: 18px;
  --icon-l-stroke-width: 2px;
  --icon-m: 18px;
  --icon-m-stroke-width: 2px;
  --icon-opacity: 1;
  --icon-s: 16px;
  --icon-s-stroke-width: 2px;
  --icon-size: 18px;
  --icon-size-modifier: 0px;
  --icon-stroke: 2px;
  --icon-stroke-modifier: 1;
  --icon-xl: 32px;
  --icon-xl-stroke-width: 1.25px;
  --icon-xs: 14px;
  --icon-xs-stroke-width: 2.25px;
  --indentation-guide-width: 0px;
  --inline-title-margin-bottom: 0.5em;
  --inline-title-size: 1.5em;
  --input-border-width: 0;
  --input-corner-shape: superellipse(1.1);
  --input-date-separator: #99999b;
  --input-font-weight: 700;
  --input-height: 32px;
  --input-placeholder-color: #99999b;
  --input-radius: 9px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-hover: color-mix(in srgb, #2e2e32, #fff 15%);
  --interactive-normal: color-mix(in srgb, #2e2e32, #fff 10%);
  --line-height-normal: 1.6;
  --line-width: 700px;
  --line-width-wide: 50rem;
  --link-color: rgb(166, 139, 249);
  --link-color-hover: rgb(197, 182, 252);
  --link-decoration: none;
  --link-external-color: rgb(166, 139, 249);
  --link-external-color-hover: rgb(197, 182, 252);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(166, 139, 249);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #99999b;
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --list-marker-color-hover: #d2d2d2;
  --list-spacing: 0.175em;
  --media-radius: 9px;
  --menu-background: #36363a;
  --menu-border-color: color-mix(in srgb, #2e2e32, #fff 10%);
  --menu-corner-shape: superellipse(1.1);
  --menu-radius: 12px;
  --menu-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --metadata-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --metadata-divider-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --metadata-gap: 8px;
  --metadata-input-font: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #fff;
  --metadata-label-font: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #d2d2d2;
  --metadata-label-text-color-hover: #d2d2d2;
  --metadata-label-width: 9em;
  --metadata-property-box-shadow-focus: 0 0 0 2px #77767b;
  --metadata-property-box-shadow-hover: 0 0 0 1px #6b6970;
  --metadata-property-corner-shape: superellipse(1.1);
  --metadata-property-corner-shape-focus: superellipse(1.1);
  --metadata-property-corner-shape-hover: superellipse(1.1);
  --metadata-sidebar-input-font-size: 11px;
  --metadata-sidebar-label-font-size: 11px;
  --modal-background: #222226;
  --modal-border-color: color-mix(in srgb, #2e2e32, #fff 10%);
  --modal-radius: 15px;
  --mono-rgb-adwaita: 255, 255, 255;
  --nav-collapse-icon-color: #99999b;
  --nav-collapse-icon-color-collapsed: #99999b;
  --nav-heading-color: #fff;
  --nav-heading-color-collapsed: #99999b;
  --nav-heading-color-collapsed-hover: #d2d2d2;
  --nav-heading-color-hover: #fff;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color: #d2d2d2;
  --nav-item-color-active: #fff;
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --nav-item-color-hover: #fff;
  --nav-item-color-selected: #fff;
  --nav-item-padding: 8px 16px 8px 32px;
  --nav-item-parent-padding: 8px 16px 8px 32px;
  --nav-item-radius: 9px;
  --nav-item-size: 11px;
  --nav-tag-color: #99999b;
  --nav-tag-color-active: #d2d2d2;
  --nav-tag-color-hover: #d2d2d2;
  --nav-tag-radius: 9px;
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.1);
  --nn-theme-file-tag-color: rgb(166, 139, 249);
  --nn-theme-list-bg: transparent;
  --nn-theme-list-header-bg: transparent;
  --nn-theme-mobile-list-header-link-color: #fff;
  --nn-theme-mobile-nav-bg: transparent;
  --nn-theme-mobile-toolbar-button-active-bg: rgb(138, 92, 245);
  --nn-theme-mobile-toolbar-button-active-icon-color: white;
  --nn-theme-mobile-toolbar-button-icon-color: #fff;
  --nn-theme-nav-bg: transparent;
  --nn-theme-nav-header-bg: transparent;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(255, 255, 255, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(255, 255, 255, 0.067);
  --p-spacing: 1.75rem;
  --pdf-background: #1d1d20;
  --pdf-page-background: #1d1d20;
  --pdf-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%);
  --pdf-sidebar-background: #1d1d20;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(in srgb, #2e2e32, #fff 15%);
  --pill-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --pill-border-color-hover: #6b6970;
  --pill-color: #d2d2d2;
  --pill-color-hover: #fff;
  --pill-color-remove: #99999b;
  --pill-color-remove-hover: rgb(166, 139, 249);
  --prompt-background: #1d1d20;
  --prompt-border-color: color-mix(in srgb, #2e2e32, #fff 10%);
  --prompt-input-height: 64px;
  --radius-l: 15px;
  --radius-m: 12px;
  --radius-modifier: 1;
  --radius-s: 9px;
  --radius-xl: 18px;
  --raised-background: color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent) linear-gradient(color-mix(in srgb, #2e2e32, #fff 10%), color-mix(in srgb, color-mix(in srgb, #2e2e32, #fff 10%) 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 15px;
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
  --setting-items-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --shadow-l: 0 0 14px 5px rgba(0, 0, 0, 0.15), 0 0 5px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
  --shadow-s: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #6b6970;
  --slider-thumb-border-width: 0;
  --slider-thumb-height: 20px;
  --slider-thumb-width: 20px;
  --slider-thumb-y: -8px;
  --slider-track-background: rgb(from #fff r g b / 15%);
  --slider-track-background-active: rgb(from #fff r g b / 25%);
  --slider-track-background-hover: rgb(from #fff r g b / 20%);
  --slider-track-height: 4px;
  --status-bar-background: #2e2e32;
  --status-bar-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --status-bar-font-size: 9.02px;
  --status-bar-radius: 12px 0 0 0;
  --status-bar-text-color: #d2d2d2;
  --suggestion-background: #1d1d20;
  --sync-avatar-color-1: rgb(224, 27, 36);
  --sync-avatar-color-2: rgb(230, 97, 0);
  --sync-avatar-color-3: rgb(245, 194, 17);
  --sync-avatar-color-4: rgb(38, 162, 105);
  --sync-avatar-color-5: rgb(33, 144, 164);
  --sync-avatar-color-6: rgb(53, 132, 228);
  --sync-avatar-color-7: rgb(145, 65, 172);
  --sync-avatar-color-8: rgb(213, 97, 170);
  --tab-action-width: 32px;
  --tab-background-active: #1d1d20;
  --tab-container-background: #2e2e32;
  --tab-curve: 13px;
  --tab-divider-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --tab-font-size: 11px;
  --tab-max-width: 200px;
  --tab-outline-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --tab-radius: 9px;
  --tab-radius-active: 9px 9px 0 0;
  --tab-stacked-font-size: 11px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #2e2e32;
  --tab-switcher-menubar-background: linear-gradient(to top, #2e2e32, transparent);
  --tab-switcher-preview-radius: 18px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-align: left;
  --tab-text-color: #99999b;
  --tab-text-color-active: #d2d2d2;
  --tab-text-color-focused: #d2d2d2;
  --tab-text-color-focused-active: #fff;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --table-add-button-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: #99999b;
  --table-header-border-color: transparent;
  --table-header-color: #fff;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --table-text-size: 0.933em;
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(166, 139, 249);
  --tag-color-hover: rgb(166, 139, 249);
  --tag-padding-x: 8px;
  --tag-padding-y: 4px;
  --tag-radius: 8px;
  --tag-weight: 500;
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-error: rgb(224, 27, 36);
  --text-faint: #99999b;
  --text-muted: #d2d2d2;
  --text-normal: #fff;
  --text-selection: rgba(138, 92, 245, 0.33);
  --text-success: rgb(38, 162, 105);
  --text-warning: rgb(230, 97, 0);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: color-mix(in srgb, #2e2e32, #fff 15%);
  --titlebar-border-width: 1px;
  --titlebar-text-color: #d2d2d2;
  --titlebar-text-color-focused: #fff;
  --toggle-border-width: 3px;
  --toggle-s-border-width: 3px;
  --toggle-s-thumb-height: 20px;
  --toggle-s-thumb-width: 20px;
  --toggle-s-width: 46px;
  --toggle-thumb-color: color-mix(in srgb, white 80%, #1d1d20);
  --toggle-thumb-height: 20px;
  --toggle-thumb-width: 20px;
  --toggle-width: 46px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  --translucent-dark-opacity: 0%;
  --translucent-light-opacity: 0%;
  --vault-profile-color: #fff;
  --vault-profile-color-hover: #fff;
  --vault-profile-font-size: 11px;
  --view-top-spacing-markdown: 0px;
  --workspace-background-translucent: rgb(from #2e2e32 r g b / 0%);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(46, 46, 50);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 29, 32);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 6, 0.36);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 6, 0.36);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(29, 29, 32);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(210, 210, 210) none 0px;
  text-decoration: rgb(210, 210, 210);
  text-decoration-color: rgb(210, 210, 210);
}`,
    links: `body a.external, footer a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
  transition: opacity 0.16s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
  transition: opacity 0.16s ease-in-out;
}

body a.internal.broken {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(29, 29, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(29, 29, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 155);
  text-decoration: rgb(153, 153, 155);
}

body blockquote {
  background-color: rgb(46, 46, 50);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 28px;
  width: 654px;
}

body tbody {
  background-color: rgb(46, 46, 50);
}

body td {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-left-radius: 9px;
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(171, 178, 191);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(46, 46, 50);
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
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(46, 46, 50);
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
  color: rgb(255, 255, 255);
}

body pre > code > [data-line] {
  border-left-color: rgb(209, 154, 102);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(209, 154, 102);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(209, 154, 102);
  border-left-color: rgb(209, 154, 102);
  border-right-color: rgb(209, 154, 102);
  border-top-color: rgb(209, 154, 102);
}

body pre > code, pre:has(> code) {
  background-color: rgb(46, 46, 50);
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
}

body pre:has(> code) {
  background-color: rgb(46, 46, 50);
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
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
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

body video {
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
    embeds: `body .file-embed {
  background-color: rgb(46, 46, 50);
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  background-color: rgb(46, 46, 50);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-right-radius: 9px;
}

body .transclude-inner {
  background-color: rgb(46, 46, 50);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-right-radius: 9px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(210, 210, 210);
  text-decoration: line-through rgb(210, 210, 210);
  text-decoration-color: rgb(210, 210, 210);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 155);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(153, 153, 155);
  border-right-color: rgb(153, 153, 155);
  border-top-color: rgb(153, 153, 155);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(153, 153, 155);
  text-decoration: line-through rgb(153, 153, 155);
  text-decoration-color: rgb(153, 153, 155);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(53, 132, 228);
  border-left-color: rgb(53, 132, 228);
  border-right-color: rgb(53, 132, 228);
  border-top-color: rgb(53, 132, 228);
  gap: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout[data-callout="abstract"] {
  --callout-color: 33, 144, 164;
  background-color: rgba(33, 144, 164, 0.1);
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
}

body .callout[data-callout="bug"] {
  --callout-color: 224, 27, 36;
  background-color: rgba(224, 27, 36, 0.1);
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
}

body .callout[data-callout="danger"] {
  --callout-color: 224, 27, 36;
  background-color: rgba(224, 27, 36, 0.1);
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
}

body .callout[data-callout="example"] {
  --callout-color: 145, 65, 172;
  background-color: rgba(145, 65, 172, 0.1);
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
}

body .callout[data-callout="failure"] {
  --callout-color: 224, 27, 36;
  background-color: rgba(224, 27, 36, 0.1);
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
}

body .callout[data-callout="info"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
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
}

body .callout[data-callout="note"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
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
}

body .callout[data-callout="question"] {
  --callout-color: 230, 97, 0;
  background-color: rgba(230, 97, 0, 0.1);
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
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 38, 162, 105;
  background-color: rgba(38, 162, 105, 0.1);
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
}

body .callout[data-callout="tip"] {
  --callout-color: 33, 144, 164;
  background-color: rgba(33, 144, 164, 0.1);
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
}

body .callout[data-callout="todo"] {
  --callout-color: 53, 132, 228;
  background-color: rgba(53, 132, 228, 0.1);
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
}

body .callout[data-callout="warning"] {
  --callout-color: 230, 97, 0;
  background-color: rgba(230, 97, 0, 0.1);
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
}`,
    search: `body .search > .search-button {
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
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 46, 50);
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px 0px 5px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(40, 40, 44);
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 6, 0.36);
  border-left-color: rgba(0, 0, 6, 0.36);
  border-right-color: rgba(0, 0, 6, 0.36);
  border-top-color: rgba(0, 0, 6, 0.36);
}`,
    scrollbars: `body .callout {
  --callout-color: 53, 132, 228;
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
}

body ::-webkit-scrollbar {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 29, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 29, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(210, 210, 210);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(210, 210, 210);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(210, 210, 210);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(210, 210, 210);
}`,
    footer: `body footer {
  background-color: rgba(255, 255, 255, 0.2);
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
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(210, 210, 210);
  text-decoration: rgb(210, 210, 210);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(210, 210, 210);
  text-decoration: rgb(210, 210, 210);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(210, 210, 210);
  text-decoration: rgb(210, 210, 210);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(210, 210, 210);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(210, 210, 210);
}

body .darkmode svg {
  color: rgb(210, 210, 210);
  stroke: rgb(210, 210, 210);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(153, 153, 155);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: color(srgb 0.303333 0.303333 0.316667);
  border-left-color: color(srgb 0.303333 0.303333 0.316667);
  border-right-color: color(srgb 0.303333 0.303333 0.316667);
  border-top-color: color(srgb 0.303333 0.303333 0.316667);
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  background-color: rgb(46, 46, 50);
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

body .navigation-progress {
  background-color: rgba(255, 255, 255, 0.2);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  border-bottom-color: rgb(210, 210, 210);
  border-left-color: rgb(210, 210, 210);
  border-right-color: rgb(210, 210, 210);
  border-top-color: rgb(210, 210, 210);
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(46, 46, 50);
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
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  color: rgb(210, 210, 210);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --anim-motion-baseline: cubic-bezier(0.32, 0.72, 0, 1);
  --anim-speed-modifier: 1;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-border: color-mix(in srgb, #ebebed, #333338 15%);
  --background-modifier-border-focus: #c0bfbc;
  --background-modifier-border-hover: #deddda;
  --background-modifier-cover: rgba(0, 0, 0, 0.35);
  --background-modifier-error: rgb(237, 51, 59);
  --background-modifier-error-hover: rgb(237, 51, 59);
  --background-modifier-error-rgb: 237, 51, 59;
  --background-modifier-form-field: color-mix(in srgb, #ebebed, #333338 10%);
  --background-modifier-form-field-hover: color-mix(in srgb, #ebebed, #333338 10%);
  --background-modifier-success: rgb(46, 194, 126);
  --background-modifier-success-rgb: 46, 194, 126;
  --background-primary: #fff;
  --background-primary-alt: #fff;
  --background-secondary: #ebebed;
  --background-secondary-alt: #f3f3f5;
  --banner-fade-height: 80px;
  --banner-icon-size: 3rem;
  --banner-image-height: 320px;
  --banner-image-height-s: 240px;
  --banner-image-inset: 8px;
  --banner-image-object-fit: cover;
  --banner-mobile-offset: 0px;
  --bases-cards-background: #fff;
  --bases-cards-corner-shape: superellipse(1.1);
  --bases-cards-cover-background: #fff;
  --bases-cards-radius: 12px;
  --bases-cards-shadow: 0 0 0 1px color-mix(in srgb, #ebebed, #333338 15%);
  --bases-cards-shadow-hover: 0 0 0 1px #deddda;
  --bases-embed-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --bases-embed-border-radius: 9px;
  --bases-group-heading-property-color: #5c5c60;
  --bases-group-heading-property-size: 9.02px;
  --bases-header-border-width: 0;
  --bases-table-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --bases-table-cell-background-active: #fff;
  --bases-table-cell-background-disabled: #fff;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #c0bfbc;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(153, 115, 247);
  --bases-table-container-border-radius: 9px;
  --bases-table-group-background: #fff;
  --bases-table-header-background: #fff;
  --bases-table-header-color: #858587;
  --bases-table-summary-background: #fff;
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #f3f3f5;
  --blockquote-border-color: #9a9996;
  --blockquote-size: 16px;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --bold-modifier: 300;
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: 9px;
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 237, 51, 59;
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
  --canvas-card-label-color: #858587;
  --canvas-color-1: 237, 51, 59;
  --canvas-color-2: 255, 120, 0;
  --canvas-color-3: 246, 211, 45;
  --canvas-color-4: 46, 194, 126;
  --canvas-color-5: 35, 164, 173;
  --canvas-color-6: 192, 97, 203;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 9px;
  --canvas-dot-pattern: #e6e5e3;
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-background-hover: transparent;
  --cards-columns: repeat(auto-fit, minmax(160px, 1fr));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 160px;
  --cards-mobile-width: 120px;
  --cards-padding: 4px;
  --caret-color: #333338;
  --checkbox-border-color: #858587;
  --checkbox-border-color-hover: #5c5c60;
  --checkbox-color: rgb(153, 115, 247);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: #fff;
  --checkbox-radius: 100px;
  --checklist-done-color: #5c5c60;
  --clickable-icon-radius: 9px;
  --code-background: #f3f3f5;
  --code-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --code-border-width: 1px;
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
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
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
  --color-blue: rgb(98, 160, 234);
  --color-blue-rgb: 98, 160, 234;
  --color-cyan: rgb(35, 164, 173);
  --color-cyan-rgb: 35, 164, 173;
  --color-green: rgb(46, 194, 126);
  --color-green-rgb: 46, 194, 126;
  --color-orange: rgb(255, 120, 0);
  --color-orange-rgb: 255, 120, 0;
  --color-pink: rgb(224, 97, 178);
  --color-pink-rgb: 224, 97, 178;
  --color-purple: rgb(192, 97, 203);
  --color-purple-rgb: 192, 97, 203;
  --color-red: rgb(237, 51, 59);
  --color-red-rgb: 237, 51, 59;
  --color-yellow: rgb(246, 211, 45);
  --color-yellow-rgb: 246, 211, 45;
  --corner-shape: superellipse(1.1);
  --density-modifier: 1;
  --divider-color: color-mix(in srgb, #ebebed, #333338 15%);
  --divider-color-alt: rgba(0, 0, 6, 0.07);
  --divider-color-hover: #9a9996;
  --dropdown-background: color-mix(in srgb, #ebebed, #333338 10%);
  --dropdown-background-hover: color-mix(in srgb, #ebebed, #333338 15%);
  --dropdown-padding: 0 2.4em 0 0.8em;
  --dropdown-padding-end: 2.4em;
  --embed-background: #fff;
  --embed-background-color: #f3f3f5;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid #9a9996;
  --embed-max-height: none;
  --embed-padding: 16px;
  --file-header-background: #fff;
  --file-header-background-focused: #fff;
  --file-header-border: none;
  --file-header-font: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 11px;
  --flair-background: color-mix(in srgb, #ebebed, #333338 10%);
  --flair-color: #333338;
  --font-interface: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Adwaita Sans", "Adwaita Sans Text";
  --font-mermaid: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Adwaita Sans", "Adwaita Sans Text", 'Arial';
  --font-text: '??', "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Adwaita Sans", "Adwaita Sans Text";
  --font-ui-large: 14.96px;
  --font-ui-medium: 11px;
  --font-ui-modifier: 0px;
  --font-ui-small: 11px;
  --font-ui-smaller: 9.02px;
  --footnote-divider-color: color-mix(in srgb, #ebebed, #333338 15%);
  --footnote-id-color: #5c5c60;
  --footnote-id-color-no-occurrences: #858587;
  --footnote-line-height: 1.6;
  --footnote-radius: 9px;
  --frame-right-space: 124px;
  --graph-line: #deddda;
  --graph-node: #5c5c60;
  --graph-node-attachment: rgb(246, 211, 45);
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-tag: rgb(46, 194, 126);
  --graph-node-unresolved: #858587;
  --graph-text: #333338;
  --h1-size: 1.5em;
  --h2-size: 1.25em;
  --h3-size: 1.125em;
  --h4-size: 1em;
  --h5-line-height: 1.6;
  --h5-size: 1em;
  --h6-line-height: 1.6;
  --h6-size: 0.875em;
  --header-height: 48px;
  --heading-formatting: #858587;
  --heading-spacing: 2em;
  --hover-sidedock-delay: 160ms;
  --hover-sidedock-trigger-area: 1px;
  --hover-sidedock-width: 320px;
  --hr-color: color-mix(in srgb, #ebebed, #333338 15%);
  --icon-color: #5c5c60;
  --icon-color-active: rgb(138, 92, 245);
  --icon-color-focused: #333338;
  --icon-color-hover: #5c5c60;
  --icon-l: 18px;
  --icon-l-stroke-width: 2px;
  --icon-m: 18px;
  --icon-m-stroke-width: 2px;
  --icon-opacity: 1;
  --icon-s: 16px;
  --icon-s-stroke-width: 2px;
  --icon-size: 18px;
  --icon-size-modifier: 0px;
  --icon-stroke: 2px;
  --icon-stroke-modifier: 1;
  --icon-xl: 32px;
  --icon-xl-stroke-width: 1.25px;
  --icon-xs: 14px;
  --icon-xs-stroke-width: 2.25px;
  --indentation-guide-width: 0px;
  --inline-title-margin-bottom: 0.5em;
  --inline-title-size: 1.5em;
  --input-border-width: 0;
  --input-corner-shape: superellipse(1.1);
  --input-date-separator: #858587;
  --input-font-weight: 700;
  --input-height: 32px;
  --input-placeholder-color: #858587;
  --input-radius: 9px;
  --input-shadow: none;
  --input-shadow-hover: none;
  --interactive-accent: rgb(153, 115, 247);
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-hover: color-mix(in srgb, #ebebed, #333338 15%);
  --interactive-normal: color-mix(in srgb, #ebebed, #333338 10%);
  --line-height-normal: 1.6;
  --line-width: 700px;
  --line-width-wide: 50rem;
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-decoration: none;
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #858587;
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --list-marker-color-hover: #5c5c60;
  --list-spacing: 0.175em;
  --media-radius: 9px;
  --menu-background: #fff;
  --menu-border-color: color-mix(in srgb, #ebebed, #333338 10%);
  --menu-corner-shape: superellipse(1.1);
  --menu-radius: 12px;
  --menu-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --metadata-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --metadata-divider-color: color-mix(in srgb, #ebebed, #333338 15%);
  --metadata-gap: 8px;
  --metadata-input-font: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-height: 28px;
  --metadata-input-text-color: #333338;
  --metadata-label-font: '??', "Adwaita Sans", "Adwaita Sans Text", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #5c5c60;
  --metadata-label-text-color-hover: #5c5c60;
  --metadata-label-width: 9em;
  --metadata-property-box-shadow-focus: 0 0 0 2px #c0bfbc;
  --metadata-property-box-shadow-hover: 0 0 0 1px #deddda;
  --metadata-property-corner-shape: superellipse(1.1);
  --metadata-property-corner-shape-focus: superellipse(1.1);
  --metadata-property-corner-shape-hover: superellipse(1.1);
  --metadata-sidebar-input-font-size: 11px;
  --metadata-sidebar-label-font-size: 11px;
  --modal-background: #fafafb;
  --modal-border-color: color-mix(in srgb, #ebebed, #333338 10%);
  --modal-radius: 15px;
  --mono-rgb-adwaita: 0, 0, 6;
  --nav-collapse-icon-color: #858587;
  --nav-collapse-icon-color-collapsed: #858587;
  --nav-heading-color: #333338;
  --nav-heading-color-collapsed: #858587;
  --nav-heading-color-collapsed-hover: #5c5c60;
  --nav-heading-color-hover: #333338;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color: #5c5c60;
  --nav-item-color-active: #333338;
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --nav-item-color-hover: #333338;
  --nav-item-color-selected: #333338;
  --nav-item-padding: 8px 16px 8px 32px;
  --nav-item-parent-padding: 8px 16px 8px 32px;
  --nav-item-radius: 9px;
  --nav-item-size: 11px;
  --nav-tag-color: #858587;
  --nav-tag-color-active: #5c5c60;
  --nav-tag-color-hover: #5c5c60;
  --nav-tag-radius: 9px;
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.1);
  --nn-theme-file-tag-color: rgb(138, 92, 245);
  --nn-theme-list-bg: transparent;
  --nn-theme-list-header-bg: transparent;
  --nn-theme-mobile-list-header-link-color: #333338;
  --nn-theme-mobile-nav-bg: transparent;
  --nn-theme-mobile-toolbar-button-active-bg: rgb(153, 115, 247);
  --nn-theme-mobile-toolbar-button-active-icon-color: white;
  --nn-theme-mobile-toolbar-button-icon-color: #333338;
  --nn-theme-nav-bg: transparent;
  --nn-theme-nav-header-bg: transparent;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(0, 0, 0, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(0, 0, 0, 0.067);
  --p-spacing: 1.75rem;
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --pill-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --pill-border-color-hover: #deddda;
  --pill-color: #5c5c60;
  --pill-color-hover: #333338;
  --pill-color-remove: #858587;
  --pill-color-remove-hover: rgb(138, 92, 245);
  --prompt-background: #fff;
  --prompt-border-color: color-mix(in srgb, #ebebed, #333338 10%);
  --prompt-input-height: 64px;
  --radius-l: 15px;
  --radius-m: 12px;
  --radius-modifier: 1;
  --radius-s: 9px;
  --radius-xl: 18px;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 15px;
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
  --setting-items-shadow: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --shadow-l: 0 0 14px 5px rgba(0, 0, 0, 0.15), 0 0 5px 2px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05);
  --shadow-s: 0 0 0 1px rgba(0, 0, 6, 0.03), 0 1px 3px 1px rgba(0, 0, 6, 0.07), 0 2px 6px 2px rgba(0, 0, 6, 0.03);
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  --sidebar-markdown-font-size: 14.4px;
  --slider-thumb-border-color: #deddda;
  --slider-thumb-border-width: 0;
  --slider-thumb-height: 20px;
  --slider-thumb-width: 20px;
  --slider-thumb-y: -8px;
  --slider-track-background: rgb(from #333338 r g b / 15%);
  --slider-track-background-active: rgb(from #333338 r g b / 25%);
  --slider-track-background-hover: rgb(from #333338 r g b / 20%);
  --slider-track-height: 4px;
  --status-bar-background: #ebebed;
  --status-bar-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --status-bar-font-size: 9.02px;
  --status-bar-radius: 12px 0 0 0;
  --status-bar-text-color: #5c5c60;
  --suggestion-background: #fff;
  --sync-avatar-color-1: rgb(237, 51, 59);
  --sync-avatar-color-2: rgb(255, 120, 0);
  --sync-avatar-color-3: rgb(246, 211, 45);
  --sync-avatar-color-4: rgb(46, 194, 126);
  --sync-avatar-color-5: rgb(35, 164, 173);
  --sync-avatar-color-6: rgb(98, 160, 234);
  --sync-avatar-color-7: rgb(192, 97, 203);
  --sync-avatar-color-8: rgb(224, 97, 178);
  --tab-action-width: 32px;
  --tab-background-active: #fff;
  --tab-container-background: #ebebed;
  --tab-curve: 13px;
  --tab-divider-color: color-mix(in srgb, #ebebed, #333338 15%);
  --tab-font-size: 11px;
  --tab-max-width: 200px;
  --tab-outline-color: color-mix(in srgb, #ebebed, #333338 15%);
  --tab-radius: 9px;
  --tab-radius-active: 9px 9px 0 0;
  --tab-stacked-font-size: 11px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-background: #ebebed;
  --tab-switcher-menubar-background: linear-gradient(to top, #ebebed, transparent);
  --tab-switcher-preview-radius: 18px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-align: left;
  --tab-text-color: #858587;
  --tab-text-color-active: #5c5c60;
  --tab-text-color-focused: #5c5c60;
  --tab-text-color-focused-active: #333338;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-add-button-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --table-add-button-border-width: 0;
  --table-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --table-drag-handle-background-active: rgb(153, 115, 247);
  --table-drag-handle-color: #858587;
  --table-header-border-color: transparent;
  --table-header-color: #333338;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(153, 115, 247);
  --table-text-size: 0.933em;
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tag-padding-x: 8px;
  --tag-padding-y: 4px;
  --tag-radius: 8px;
  --tag-weight: 500;
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-error: rgb(237, 51, 59);
  --text-faint: #858587;
  --text-muted: #5c5c60;
  --text-normal: #333338;
  --text-selection: rgba(138, 92, 245, 0.2);
  --text-success: rgb(46, 194, 126);
  --text-warning: rgb(255, 120, 0);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: color-mix(in srgb, #ebebed, #333338 15%);
  --titlebar-border-width: 1px;
  --titlebar-text-color: #5c5c60;
  --titlebar-text-color-focused: #333338;
  --toggle-border-width: 3px;
  --toggle-s-border-width: 3px;
  --toggle-s-thumb-height: 20px;
  --toggle-s-thumb-width: 20px;
  --toggle-s-width: 46px;
  --toggle-thumb-color: color-mix(in srgb, white 80%, #fff);
  --toggle-thumb-height: 20px;
  --toggle-thumb-width: 20px;
  --toggle-width: 46px;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  --translucent-dark-opacity: 0%;
  --translucent-light-opacity: 0%;
  --vault-profile-color: #333338;
  --vault-profile-color-hover: #333338;
  --vault-profile-font-size: 11px;
  --view-top-spacing-markdown: 0px;
  --workspace-background-translucent: #ebebed;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 235, 237);
  color: rgb(51, 51, 56);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(51, 51, 56);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(51, 51, 56);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 6, 0.07);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 6, 0.07);
  color: rgb(51, 51, 56);
}

body div#quartz-root {
  color: rgb(51, 51, 56);
}`,
    typography: `body .page article p > b, b {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body .page article p > em, em {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body .page article p > i, i {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body .page article p > strong, strong {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body .text-highlight {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body del {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: line-through rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body p {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(92, 92, 96) none 0px;
  text-decoration: rgb(92, 92, 96);
  text-decoration-color: rgb(92, 92, 96);
}`,
    links: `body a.external, footer a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
  transition: opacity 0.16s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
  transition: opacity 0.16s ease-in-out;
}

body a.internal.broken {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    lists: `body dd {
  color: rgb(51, 51, 56);
}

body dt {
  color: rgb(51, 51, 56);
}

body ol > li {
  color: rgb(51, 51, 56);
}

body ol.overflow {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

body ul > li {
  color: rgb(51, 51, 56);
}

body ul.overflow {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(133, 133, 135);
  text-decoration: rgb(133, 133, 135);
}

body blockquote {
  background-color: rgb(243, 243, 245);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

body table {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 28px;
  width: 654px;
}

body tbody {
  background-color: rgb(255, 255, 255);
}

body td {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-width: 0px;
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-left-radius: 9px;
  color: rgb(51, 51, 56);
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(51, 51, 56);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(56, 58, 66);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(56, 58, 66);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(243, 243, 245);
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
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(243, 243, 245);
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
  color: rgb(51, 51, 56);
}

body pre > code > [data-line] {
  border-left-color: rgb(183, 107, 2);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(183, 107, 2);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(183, 107, 2);
  border-left-color: rgb(183, 107, 2);
  border-right-color: rgb(183, 107, 2);
  border-top-color: rgb(183, 107, 2);
}

body pre > code, pre:has(> code) {
  background-color: rgb(243, 243, 245);
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
}

body pre:has(> code) {
  background-color: rgb(243, 243, 245);
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
}`,
    images: `body audio {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

body figcaption {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

body img {
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

body video {
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
    embeds: `body .file-embed {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

body .footnotes {
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

body .transclude {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-right-radius: 9px;
}

body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-right-radius: 9px;
  border-left-color: rgb(154, 153, 150);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-right-radius: 9px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(92, 92, 96);
  text-decoration: line-through rgb(92, 92, 96);
  text-decoration-color: rgb(92, 92, 96);
}

body input[type=checkbox] {
  border-bottom-color: rgb(133, 133, 135);
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  border-left-color: rgb(133, 133, 135);
  border-right-color: rgb(133, 133, 135);
  border-top-color: rgb(133, 133, 135);
  border-top-left-radius: 100px;
  border-top-right-radius: 100px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='-'] {
  color: rgb(133, 133, 135);
  text-decoration: line-through rgb(133, 133, 135);
  text-decoration-color: rgb(133, 133, 135);
}

body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 56);
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(98, 160, 234);
  border-left-color: rgb(98, 160, 234);
  border-right-color: rgb(98, 160, 234);
  border-top-color: rgb(98, 160, 234);
  gap: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout[data-callout="abstract"] {
  --callout-color: 35, 164, 173;
  background-color: rgba(35, 164, 173, 0.1);
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
}

body .callout[data-callout="bug"] {
  --callout-color: 237, 51, 59;
  background-color: rgba(237, 51, 59, 0.1);
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
}

body .callout[data-callout="danger"] {
  --callout-color: 237, 51, 59;
  background-color: rgba(237, 51, 59, 0.1);
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
}

body .callout[data-callout="example"] {
  --callout-color: 192, 97, 203;
  background-color: rgba(192, 97, 203, 0.1);
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
}

body .callout[data-callout="failure"] {
  --callout-color: 237, 51, 59;
  background-color: rgba(237, 51, 59, 0.1);
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
}

body .callout[data-callout="info"] {
  --callout-color: 98, 160, 234;
  background-color: rgba(98, 160, 234, 0.1);
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
}

body .callout[data-callout="note"] {
  --callout-color: 98, 160, 234;
  background-color: rgba(98, 160, 234, 0.1);
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
}

body .callout[data-callout="question"] {
  --callout-color: 255, 120, 0;
  background-color: rgba(255, 120, 0, 0.1);
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
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 46, 194, 126;
  background-color: rgba(46, 194, 126, 0.1);
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
}

body .callout[data-callout="tip"] {
  --callout-color: 35, 164, 173;
  background-color: rgba(35, 164, 173, 0.1);
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
}

body .callout[data-callout="todo"] {
  --callout-color: 98, 160, 234;
  background-color: rgba(98, 160, 234, 0.1);
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
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 120, 0;
  background-color: rgba(255, 120, 0, 0.1);
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
}`,
    search: `body .search > .search-button {
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
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(235, 235, 237);
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
  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 14px 5px, rgba(0, 0, 0, 0.1) 0px 0px 5px 2px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
}

body .search > .search-container > .search-space > * {
  background-color: rgb(243, 243, 245);
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(51, 51, 56) none 0px;
  text-decoration: rgb(51, 51, 56);
  text-decoration-color: rgb(51, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 56);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(51, 51, 56);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-width: 0px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body h1 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(0, 0, 6, 0.07);
  border-left-color: rgba(0, 0, 6, 0.07);
  border-right-color: rgba(0, 0, 6, 0.07);
  border-top-color: rgba(0, 0, 6, 0.07);
}`,
    scrollbars: `body .callout {
  --callout-color: 98, 160, 234;
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
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(92, 92, 96);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(92, 92, 96);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(92, 92, 96);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(51, 51, 56);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(51, 51, 56);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(92, 92, 96);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0.2);
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
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(92, 92, 96);
  text-decoration: rgb(92, 92, 96);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(92, 92, 96);
  text-decoration: rgb(92, 92, 96);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

body li.section-li > .section .meta {
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(92, 92, 96);
  text-decoration: rgb(92, 92, 96);
}

body ul.section-ul {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(92, 92, 96);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  color: rgb(92, 92, 96);
}

body .darkmode svg {
  color: rgb(92, 92, 96);
  stroke: rgb(92, 92, 96);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(133, 133, 135);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
  color: rgb(51, 51, 56);
}

body .metadata {
  border-bottom-color: color(srgb 0.813333 0.813333 0.822941);
  border-left-color: color(srgb 0.813333 0.813333 0.822941);
  border-right-color: color(srgb 0.813333 0.813333 0.822941);
  border-top-color: color(srgb 0.813333 0.813333 0.822941);
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 0px;
  padding-top: 0px;
}

body .metadata-properties {
  background-color: rgb(255, 255, 255);
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

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0.2);
}

body .page-header h2.page-title {
  color: rgb(51, 51, 56);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(51, 51, 56);
  text-decoration: underline dotted rgb(51, 51, 56);
}

body details {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

body input[type=text] {
  border-bottom-color: rgb(92, 92, 96);
  border-left-color: rgb(92, 92, 96);
  border-right-color: rgb(92, 92, 96);
  border-top-color: rgb(92, 92, 96);
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(235, 235, 237);
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
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  color: rgb(92, 92, 96);
  font-family: "??", "Adwaita Sans", "Adwaita Sans Text", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}

body progress {
  border-bottom-color: rgb(51, 51, 56);
  border-left-color: rgb(51, 51, 56);
  border-right-color: rgb(51, 51, 56);
  border-top-color: rgb(51, 51, 56);
}

body sub {
  color: rgb(51, 51, 56);
}

body summary {
  color: rgb(51, 51, 56);
}

body sup {
  color: rgb(51, 51, 56);
}`,
  },
};
