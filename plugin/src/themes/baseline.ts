import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "baseline",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --anim-motion-baseline: cubic-bezier(0.1, 0, 0.1, 1.25);
  --anim-speed-modifier: 1;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-cover: rgba(0, 0, 0, 0.35);
  --background-modifier-error: rgb(217, 90, 95);
  --background-modifier-error-hover: rgb(217, 90, 95);
  --background-modifier-error-rgb: 217, 90, 95;
  --background-modifier-form-field: #363636;
  --background-modifier-form-field-hover: #363636;
  --background-modifier-success: rgb(72, 196, 90);
  --background-modifier-success-rgb: 72, 196, 90;
  --banner-fade-height: 80px;
  --banner-icon-size: 3rem;
  --banner-image-height: 320px;
  --banner-image-height-s: 240px;
  --banner-image-inset: 8px;
  --banner-image-object-fit: cover;
  --banner-mobile-offset: 0px;
  --bases-cards-corner-shape: superellipse(1.1);
  --bases-cards-radius: 12px;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-size: 12px;
  --bases-header-border-width: 0;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #dadada;
  --bases-table-container-border-radius: 8px;
  --bases-table-header-color: #666666;
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #242424;
  --blockquote-border-color: #666666;
  --blockquote-size: 16px;
  --bold-modifier: 300;
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: calc(8px*(1 - clamp(0, (1 - 1) * 10000 + 1, 1)) + 100vh*clamp(0, (1 - 1) * 10000 + 1, 1));
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 217, 90, 95;
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
  --canvas-color-1: 217, 90, 95;
  --canvas-color-2: 219, 134, 80;
  --canvas-color-3: 196, 180, 94;
  --canvas-color-4: 72, 196, 90;
  --canvas-color-5: 63, 186, 182;
  --canvas-color-6: 142, 125, 194;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
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
  --checkbox-color: #dadada;
  --checkbox-color-hover: rgb(from #dadada r g b / 80%);
  --clickable-icon-radius: 8px;
  --code-border-width: 1px;
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
  --collapse-icon-color-collapsed: #b3b3b3;
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-blue: rgb(86, 148, 218);
  --color-blue-rgb: 86, 148, 218;
  --color-cyan: rgb(63, 186, 182);
  --color-cyan-rgb: 63, 186, 182;
  --color-green: rgb(72, 196, 90);
  --color-green-rgb: 72, 196, 90;
  --color-orange: rgb(219, 134, 80);
  --color-orange-rgb: 219, 134, 80;
  --color-pink: rgb(222, 103, 147);
  --color-pink-rgb: 222, 103, 147;
  --color-purple: rgb(142, 125, 194);
  --color-purple-rgb: 142, 125, 194;
  --color-red: rgb(217, 90, 95);
  --color-red-rgb: 217, 90, 95;
  --color-yellow: rgb(196, 180, 94);
  --color-yellow-rgb: 196, 180, 94;
  --corner-shape: superellipse(1.1);
  --density-modifier: 1;
  --divider-color-hover: #666666;
  --embed-background: #242424;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid #666666;
  --embed-max-height: none;
  --embed-padding: 16px;
  --file-header-border: none;
  --file-header-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 13px;
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter;
  --font-mermaid: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', Inter, 'Arial';
  --font-text: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Inter;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-modifier: 0px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --footnote-line-height: 1.6;
  --footnote-radius: 8px;
  --frame-right-space: 144px;
  --graph-node-attachment: rgb(196, 180, 94);
  --graph-node-focused: rgb(166, 139, 249);
  --graph-node-tag: rgb(72, 196, 90);
  --h1-font: '??', "Instrument Serif";
  --h2-font: '??', "Instrument Serif";
  --h3-font: '??', "Instrument Serif";
  --h4-font: '??', "Instrument Serif";
  --h5-font: '??', "Instrument Serif";
  --h5-line-height: 1.6;
  --h6-font: '??', "Instrument Serif";
  --h6-line-height: 1.6;
  --header-height: 48px;
  --heading-spacing: 2em;
  --hover-sidedock-delay: 160ms;
  --hover-sidedock-trigger-area: 1px;
  --hover-sidedock-width: 320px;
  --hr-align: center;
  --hr-dashed-size: 1em;
  --hr-dashed-spacing: 0.5em;
  --hr-width: 100%;
  --icon-color-active: rgb(166, 139, 249);
  --icon-l: 16px;
  --icon-l-stroke-width: 2px;
  --icon-m: 16px;
  --icon-m-stroke-width: 2px;
  --icon-opacity: 1;
  --icon-s: 16px;
  --icon-s-stroke-width: 2px;
  --icon-size: 16px;
  --icon-size-modifier: 0px;
  --icon-stroke: 2px;
  --icon-stroke-modifier: 1;
  --icon-xl: 32px;
  --icon-xl-stroke-width: 1.25px;
  --icon-xs: 14px;
  --icon-xs-stroke-width: 2.25px;
  --indentation-guide-width: 0px;
  --inline-title-font: '??', "Instrument Serif";
  --inline-title-margin-bottom: 0.5em;
  --input-corner-shape: superellipse(1.1);
  --input-font-weight: 500;
  --input-height: 32px;
  --input-radius: 8px;
  --input-shadow: inset 0 0 0 1px #3f3f3f;
  --input-shadow-hover: inset 0 0 0 1px #3f3f3f;
  --interactive-accent: #dadada;
  --interactive-accent-hover: rgb(from #dadada r g b / 80%);
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
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --list-spacing: 0.175em;
  --media-radius: 8px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 4px;
  --menu-radius: 12px;
  --menu-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --metadata-gap: 8px;
  --metadata-input-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-height: 28px;
  --metadata-label-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-width: 9em;
  --metadata-property-corner-shape: superellipse(1.1);
  --metadata-property-corner-shape-focus: superellipse(1.1);
  --metadata-property-corner-shape-hover: superellipse(1.1);
  --metadata-sidebar-input-font-size: 13px;
  --metadata-sidebar-label-font-size: 13px;
  --modal-background: #262626;
  --modal-border-color: #3f3f3f;
  --modal-radius: 20px;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --nav-item-padding: 8px 16px 8px 32px;
  --nav-item-parent-padding: 8px 16px 8px 32px;
  --nav-item-radius: 8px;
  --nav-item-size: 13px;
  --nav-tag-radius: 8px;
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.1);
  --nn-theme-file-tag-color: rgb(166, 139, 249);
  --nn-theme-list-bg: transparent;
  --nn-theme-list-header-bg: transparent;
  --nn-theme-mobile-list-header-link-color: #dadada;
  --nn-theme-mobile-nav-bg: transparent;
  --nn-theme-mobile-toolbar-button-active-bg: #dadada;
  --nn-theme-mobile-toolbar-button-active-icon-color: #1e1e1e;
  --nn-theme-mobile-toolbar-button-icon-color: #dadada;
  --nn-theme-nav-bg: transparent;
  --nn-theme-nav-header-bg: transparent;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(255, 255, 255, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(255, 255, 255, 0.067);
  --p-spacing: 1.75rem;
  --pdf-shadow: none;
  --pill-color-remove-hover: rgb(166, 139, 249);
  --prompt-border-color: #3f3f3f;
  --prompt-input-height: 64px;
  --radius-l: 20px;
  --radius-m: 12px;
  --radius-modifier: 1;
  --radius-modifier-check: clamp(0, (1 - 1) * 10000 + 1, 1);
  --radius-s: 8px;
  --radius-xl: 28px;
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 20px;
  --setting-group-heading-color: #666666;
  --setting-group-heading-size: 13px;
  --setting-items-padding: 16px 16px;
  --setting-items-radius: 12px;
  --shadow-l: 0 14px 62px #00000040;
  --shadow-s: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  --sidebar-markdown-font-size: 14.4px;
  --status-bar-font-size: 12px;
  --status-bar-radius: 12px 0 0 0;
  --sync-avatar-color-1: rgb(217, 90, 95);
  --sync-avatar-color-2: rgb(219, 134, 80);
  --sync-avatar-color-3: rgb(196, 180, 94);
  --sync-avatar-color-4: rgb(72, 196, 90);
  --sync-avatar-color-5: rgb(63, 186, 182);
  --sync-avatar-color-6: rgb(86, 148, 218);
  --sync-avatar-color-7: rgb(142, 125, 194);
  --sync-avatar-color-8: rgb(222, 103, 147);
  --tab-action-width: 32px;
  --tab-curve: 12px;
  --tab-divider-color: #363636;
  --tab-font-size: 13px;
  --tab-max-width: 200px;
  --tab-outline-width: 0px;
  --tab-radius: 8px;
  --tab-radius-active: 8px 8px 0 0;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-preview-radius: 28px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-align: left;
  --tab-text-color-focused-active: #dadada;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --table-add-button-border-width: 0;
  --table-drag-handle-background-active: #dadada;
  --table-drag-handle-color-active: #1e1e1e;
  --table-header-border-color: transparent;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: #dadada;
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
  --text-error: rgb(217, 90, 95);
  --text-on-accent: #1e1e1e;
  --text-on-accent-inverted: #1e1e1e;
  --text-selection: rgba(138, 92, 245, 0.33);
  --text-success: rgb(72, 196, 90);
  --text-warning: rgb(219, 134, 80);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  --translucent-dark-opacity: 50%;
  --translucent-light-opacity: 50%;
  --vault-profile-font-size: 13px;
  --view-top-spacing-markdown: 0px;
  --workspace-background-translucent: rgb(from #262626 r g b / 50%);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .page article p > em, em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .text-highlight {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
  transition: opacity 0.16s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(166, 138, 249);
  transition: opacity 0.16s ease-in-out;
}

body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    blockquotes: `body blockquote {
  background-color: rgb(36, 36, 36);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body table {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 28px;
  width: 654px;
}

body tbody {
  background-color: rgb(36, 36, 36);
}

body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-left-radius: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 178, 191);
  border-right-color: rgb(171, 178, 191);
  border-top-color: rgb(171, 178, 191);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(171, 178, 191);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `body figcaption {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .transclude {
  background-color: rgb(36, 36, 36);
  border-bottom-right-radius: 8px;
  border-left-color: rgb(102, 102, 102);
  border-top-right-radius: 8px;
}

body .transclude-inner {
  background-color: rgb(36, 36, 36);
  border-bottom-right-radius: 8px;
  border-left-color: rgb(102, 102, 102);
  border-top-right-radius: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(86, 148, 218);
  border-left-color: rgb(86, 148, 218);
  border-right-color: rgb(86, 148, 218);
  border-top-color: rgb(86, 148, 218);
  gap: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout[data-callout="abstract"] {
  --callout-color: 63, 186, 182;
  background-color: rgba(63, 186, 182, 0.1);
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

body .callout[data-callout="bug"] {
  --callout-color: 217, 90, 95;
  background-color: rgba(217, 90, 95, 0.1);
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

body .callout[data-callout="danger"] {
  --callout-color: 217, 90, 95;
  background-color: rgba(217, 90, 95, 0.1);
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

body .callout[data-callout="example"] {
  --callout-color: 142, 125, 194;
  background-color: rgba(142, 125, 194, 0.1);
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

body .callout[data-callout="failure"] {
  --callout-color: 217, 90, 95;
  background-color: rgba(217, 90, 95, 0.1);
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

body .callout[data-callout="info"] {
  --callout-color: 86, 148, 218;
  background-color: rgba(86, 148, 218, 0.1);
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

body .callout[data-callout="note"] {
  --callout-color: 86, 148, 218;
  background-color: rgba(86, 148, 218, 0.1);
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

body .callout[data-callout="question"] {
  --callout-color: 219, 134, 80;
  background-color: rgba(219, 134, 80, 0.1);
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

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 72, 196, 90;
  background-color: rgba(72, 196, 90, 0.1);
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

body .callout[data-callout="tip"] {
  --callout-color: 63, 186, 182;
  background-color: rgba(63, 186, 182, 0.1);
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

body .callout[data-callout="todo"] {
  --callout-color: 86, 148, 218;
  background-color: rgba(86, 148, 218, 0.1);
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

body .callout[data-callout="warning"] {
  --callout-color: 219, 134, 80;
  background-color: rgba(219, 134, 80, 0.1);
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(54, 54, 54);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 62px 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(54, 54, 54);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body h1 {
  font-family: "??", "Instrument Serif";
}

body h2 {
  font-family: "??", "Instrument Serif";
}

body h2.page-title, h2.page-title a {
  font-family: "??", "Instrument Serif";
}

body h3 {
  font-family: "??", "Instrument Serif";
}

body h4 {
  font-family: "??", "Instrument Serif";
}

body h5 {
  font-family: "??", "Instrument Serif";
}

body h6 {
  font-family: "??", "Instrument Serif";
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 86, 148, 218;
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
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-left-width: 0px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 12px;
  border-top-width: 0px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(38, 38, 38);
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
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(255, 255, 255, 0.04) 0px 2px 4px -2px;
  color: rgb(179, 179, 179);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}`,
  },
  light: {
    base: `:root:root {
  --anim-duration-fast: 160ms;
  --anim-duration-moderate: 320ms;
  --anim-duration-slow: 480ms;
  --anim-duration-superfast: 80ms;
  --anim-motion-baseline: cubic-bezier(0.1, 0, 0.1, 1.25);
  --anim-speed-modifier: 1;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-cover: rgba(0, 0, 0, 0.35);
  --background-modifier-error: rgb(254, 112, 112);
  --background-modifier-error-hover: rgb(254, 112, 112);
  --background-modifier-error-rgb: 254, 112, 112;
  --background-modifier-success: rgb(74, 213, 95);
  --background-modifier-success-rgb: 74, 213, 95;
  --banner-fade-height: 80px;
  --banner-icon-size: 3rem;
  --banner-image-height: 320px;
  --banner-image-height-s: 240px;
  --banner-image-inset: 8px;
  --banner-image-object-fit: cover;
  --banner-mobile-offset: 0px;
  --bases-cards-corner-shape: superellipse(1.1);
  --bases-cards-radius: 12px;
  --bases-embed-border-radius: 8px;
  --bases-group-heading-property-size: 12px;
  --bases-header-border-width: 0;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #222222;
  --bases-table-container-border-radius: 8px;
  --bases-table-header-color: #ababab;
  --block-width-max: calc(100cqw - 64px);
  --block-width-offset: -32px;
  --block-width-wide: min(100cqw, 50rem);
  --blockquote-background-color: #fafafa;
  --blockquote-border-color: #ababab;
  --blockquote-size: 16px;
  --bold-modifier: 300;
  --bold-weight: 700;
  --button-corner-shape: superellipse(1.1);
  --button-radius: calc(8px*(1 - clamp(0, (1 - 1) * 10000 + 1, 1)) + 100vh*clamp(0, (1 - 1) * 10000 + 1, 1));
  --callout-blend-mode: normal;
  --callout-border-width: 1px;
  --callout-bug: 254, 112, 112;
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
  --canvas-color-1: 254, 112, 112;
  --canvas-color-2: 242, 154, 100;
  --canvas-color-3: 224, 205, 99;
  --canvas-color-4: 74, 213, 95;
  --canvas-color-5: 56, 219, 214;
  --canvas-color-6: 187, 158, 245;
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 8px;
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
  --checkbox-color: #222222;
  --checkbox-color-hover: rgb(from #222222 r g b / 80%);
  --clickable-icon-radius: 8px;
  --code-border-width: 1px;
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
  --collapse-icon-color-collapsed: #5c5c5c;
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --color-blue: rgb(106, 173, 250);
  --color-blue-rgb: 106, 173, 250;
  --color-cyan: rgb(56, 219, 214);
  --color-cyan-rgb: 56, 219, 214;
  --color-green: rgb(74, 213, 95);
  --color-green-rgb: 74, 213, 95;
  --color-orange: rgb(242, 154, 100);
  --color-orange-rgb: 242, 154, 100;
  --color-pink: rgb(243, 125, 183);
  --color-pink-rgb: 243, 125, 183;
  --color-purple: rgb(187, 158, 245);
  --color-purple-rgb: 187, 158, 245;
  --color-red: rgb(254, 112, 112);
  --color-red-rgb: 254, 112, 112;
  --color-yellow: rgb(224, 205, 99);
  --color-yellow-rgb: 224, 205, 99;
  --corner-shape: superellipse(1.1);
  --density-modifier: 1;
  --divider-color-hover: #ababab;
  --embed-background: #fafafa;
  --embed-block-shadow-hover: none;
  --embed-border-start: 2px solid #ababab;
  --embed-max-height: none;
  --embed-padding: 16px;
  --file-header-border: none;
  --file-header-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 13px;
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter;
  --font-mermaid: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', Inter, 'Arial';
  --font-text: '??', Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Inter;
  --font-ui-large: 20px;
  --font-ui-medium: 15px;
  --font-ui-modifier: 0px;
  --font-ui-small: 13px;
  --font-ui-smaller: 12px;
  --footnote-line-height: 1.6;
  --footnote-radius: 8px;
  --frame-right-space: 144px;
  --graph-node-attachment: rgb(224, 205, 99);
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-tag: rgb(74, 213, 95);
  --h1-font: '??', "Instrument Serif";
  --h2-font: '??', "Instrument Serif";
  --h3-font: '??', "Instrument Serif";
  --h4-font: '??', "Instrument Serif";
  --h5-font: '??', "Instrument Serif";
  --h5-line-height: 1.6;
  --h6-font: '??', "Instrument Serif";
  --h6-line-height: 1.6;
  --header-height: 48px;
  --heading-spacing: 2em;
  --hover-sidedock-delay: 160ms;
  --hover-sidedock-trigger-area: 1px;
  --hover-sidedock-width: 320px;
  --hr-align: center;
  --hr-dashed-size: 1em;
  --hr-dashed-spacing: 0.5em;
  --hr-width: 100%;
  --icon-color-active: rgb(138, 92, 245);
  --icon-l: 16px;
  --icon-l-stroke-width: 2px;
  --icon-m: 16px;
  --icon-m-stroke-width: 2px;
  --icon-opacity: 1;
  --icon-s: 16px;
  --icon-s-stroke-width: 2px;
  --icon-size: 16px;
  --icon-size-modifier: 0px;
  --icon-stroke: 2px;
  --icon-stroke-modifier: 1;
  --icon-xl: 32px;
  --icon-xl-stroke-width: 1.25px;
  --icon-xs: 14px;
  --icon-xs-stroke-width: 2.25px;
  --indentation-guide-width: 0px;
  --inline-title-font: '??', "Instrument Serif";
  --inline-title-margin-bottom: 0.5em;
  --input-corner-shape: superellipse(1.1);
  --input-font-weight: 500;
  --input-height: 32px;
  --input-radius: 8px;
  --input-shadow: inset 0 0 0 1px #e0e0e0;
  --input-shadow-hover: inset 0 0 0 1px #d4d4d4;
  --interactive-accent: #222222;
  --interactive-accent-hover: rgb(from #222222 r g b / 80%);
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
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --list-spacing: 0.175em;
  --media-radius: 8px;
  --menu-corner-shape: superellipse(1.1);
  --menu-padding: 4px;
  --menu-radius: 12px;
  --menu-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --metadata-gap: 8px;
  --metadata-input-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-height: 28px;
  --metadata-label-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-width: 9em;
  --metadata-property-corner-shape: superellipse(1.1);
  --metadata-property-corner-shape-focus: superellipse(1.1);
  --metadata-property-corner-shape-hover: superellipse(1.1);
  --metadata-sidebar-input-font-size: 13px;
  --metadata-sidebar-label-font-size: 13px;
  --modal-background: #f6f6f6;
  --modal-border-color: #d4d4d4;
  --modal-radius: 20px;
  --nav-indentation-guide-width: 0px;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --nav-item-padding: 8px 16px 8px 32px;
  --nav-item-parent-padding: 8px 16px 8px 32px;
  --nav-item-radius: 8px;
  --nav-item-size: 13px;
  --nav-tag-radius: 8px;
  --nn-theme-file-border-radius: 12px;
  --nn-theme-file-tag-bg: rgba(138, 92, 245, 0.1);
  --nn-theme-file-tag-color: rgb(138, 92, 245);
  --nn-theme-list-bg: transparent;
  --nn-theme-list-header-bg: transparent;
  --nn-theme-mobile-list-header-link-color: #222222;
  --nn-theme-mobile-nav-bg: transparent;
  --nn-theme-mobile-toolbar-button-active-bg: #222222;
  --nn-theme-mobile-toolbar-button-active-icon-color: #ffffff;
  --nn-theme-mobile-toolbar-button-icon-color: #222222;
  --nn-theme-nav-bg: transparent;
  --nn-theme-nav-header-bg: transparent;
  --nn-theme-navitem-border-radius: 12px;
  --nn-theme-navitem-selected-bg: rgba(0, 0, 0, 0.067);
  --nn-theme-navitem-selected-inactive-bg: rgba(0, 0, 0, 0.067);
  --p-spacing: 1.75rem;
  --pdf-shadow: none;
  --pill-color-remove-hover: rgb(138, 92, 245);
  --prompt-border-color: #d4d4d4;
  --prompt-input-height: 64px;
  --radius-l: 20px;
  --radius-m: 12px;
  --radius-modifier: 1;
  --radius-modifier-check: clamp(0, (1 - 1) * 10000 + 1, 1);
  --radius-s: 8px;
  --radius-xl: 28px;
  --ribbon-background: transparent;
  --ribbon-background-collapsed: transparent;
  --scrollbar-radius: 20px;
  --setting-group-heading-color: #ababab;
  --setting-group-heading-size: 13px;
  --setting-items-padding: 16px 16px;
  --setting-items-radius: 12px;
  --shadow-l: 0 14px 62px #00000040;
  --shadow-s: rgba(0, 0, 0, 0.08) 0px 12px 24px -4px, rgba(0, 0, 0, 0.04) 0px 8px 16px -4px;
  --shadow-tactile: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  --sidebar-markdown-font-size: 14.4px;
  --status-bar-font-size: 12px;
  --status-bar-radius: 12px 0 0 0;
  --sync-avatar-color-1: rgb(254, 112, 112);
  --sync-avatar-color-2: rgb(242, 154, 100);
  --sync-avatar-color-3: rgb(224, 205, 99);
  --sync-avatar-color-4: rgb(74, 213, 95);
  --sync-avatar-color-5: rgb(56, 219, 214);
  --sync-avatar-color-6: rgb(106, 173, 250);
  --sync-avatar-color-7: rgb(187, 158, 245);
  --sync-avatar-color-8: rgb(243, 125, 183);
  --tab-action-width: 32px;
  --tab-curve: 12px;
  --tab-divider-color: #e0e0e0;
  --tab-font-size: 13px;
  --tab-max-width: 200px;
  --tab-outline-width: 0px;
  --tab-radius: 8px;
  --tab-radius-active: 8px 8px 0 0;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 48px;
  --tab-switcher-preview-radius: 28px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-align: left;
  --tab-text-color-focused-active: #222222;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-add-button-border-width: 0;
  --table-drag-handle-background-active: #222222;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: transparent;
  --table-header-size: 0.933em;
  --table-header-weight: 700;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: #222222;
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
  --text-error: rgb(254, 112, 112);
  --text-on-accent: #ffffff;
  --text-on-accent-inverted: #ffffff;
  --text-selection: rgba(138, 92, 245, 0.2);
  --text-success: rgb(74, 213, 95);
  --text-warning: rgb(242, 154, 100);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --traffic-lights-offset-x: 48px;
  --traffic-lights-offset-y: 48px;
  --translucent-dark-opacity: 50%;
  --translucent-light-opacity: 50%;
  --vault-profile-font-size: 13px;
  --view-top-spacing-markdown: 0px;
  --workspace-background-translucent: #f6f6f6;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .page article p > em, em {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .text-highlight {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body del {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
  transition: opacity 0.16s ease-in-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(138, 92, 245);
  transition: opacity 0.16s ease-in-out;
}

body a.internal.broken {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
  transition: opacity 0.16s ease-in-out;
}`,
    blockquotes: `body blockquote {
  background-color: rgb(250, 250, 250);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body table {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 28px;
  width: 654px;
}

body tbody {
  background-color: rgb(250, 250, 250);
}

body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-left-radius: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-weight: 700;
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(56, 58, 66);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(56, 58, 66);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
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
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `body figcaption {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    embeds: `body .transclude {
  background-color: rgb(250, 250, 250);
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 171, 171);
  border-top-right-radius: 8px;
}

body .transclude-inner {
  background-color: rgb(250, 250, 250);
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 171, 171);
  border-top-right-radius: 8px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(106, 173, 250);
  border-left-color: rgb(106, 173, 250);
  border-right-color: rgb(106, 173, 250);
  border-top-color: rgb(106, 173, 250);
  gap: 8px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout[data-callout="abstract"] {
  --callout-color: 56, 219, 214;
  background-color: rgba(56, 219, 214, 0.1);
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

body .callout[data-callout="bug"] {
  --callout-color: 254, 112, 112;
  background-color: rgba(254, 112, 112, 0.1);
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

body .callout[data-callout="danger"] {
  --callout-color: 254, 112, 112;
  background-color: rgba(254, 112, 112, 0.1);
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

body .callout[data-callout="example"] {
  --callout-color: 187, 158, 245;
  background-color: rgba(187, 158, 245, 0.1);
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

body .callout[data-callout="failure"] {
  --callout-color: 254, 112, 112;
  background-color: rgba(254, 112, 112, 0.1);
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

body .callout[data-callout="info"] {
  --callout-color: 106, 173, 250;
  background-color: rgba(106, 173, 250, 0.1);
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

body .callout[data-callout="note"] {
  --callout-color: 106, 173, 250;
  background-color: rgba(106, 173, 250, 0.1);
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

body .callout[data-callout="question"] {
  --callout-color: 242, 154, 100;
  background-color: rgba(242, 154, 100, 0.1);
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

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 74, 213, 95;
  background-color: rgba(74, 213, 95, 0.1);
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

body .callout[data-callout="tip"] {
  --callout-color: 56, 219, 214;
  background-color: rgba(56, 219, 214, 0.1);
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

body .callout[data-callout="todo"] {
  --callout-color: 106, 173, 250;
  background-color: rgba(106, 173, 250, 0.1);
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

body .callout[data-callout="warning"] {
  --callout-color: 242, 154, 100;
  background-color: rgba(242, 154, 100, 0.1);
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
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 62px 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 224, 224);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body h1 {
  font-family: "??", "Instrument Serif";
}

body h2 {
  font-family: "??", "Instrument Serif";
}

body h2.page-title, h2.page-title a {
  font-family: "??", "Instrument Serif";
}

body h3 {
  font-family: "??", "Instrument Serif";
}

body h4 {
  font-family: "??", "Instrument Serif";
}

body h5 {
  font-family: "??", "Instrument Serif";
}

body h6 {
  font-family: "??", "Instrument Serif";
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  --callout-color: 106, 173, 250;
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
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(92, 92, 92);
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-top-color: rgb(92, 92, 92);
  border-top-left-radius: 12px;
  border-top-width: 0px;
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(246, 246, 246);
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
  box-shadow: rgba(0, 0, 0, 0.04) 0px 2px 8px -2px, rgba(0, 0, 0, 0.04) 0px 2px 4px -2px;
  color: rgb(92, 92, 92);
  font-family: "??", Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 12.8px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 4px;
}`,
  },
};
