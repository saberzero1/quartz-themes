import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "notswift",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto", "sf-mono", "sf-pro-display"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #1E1E1E !important;
  --background-modifier-border-focus: hsl(258, 80%, 55%) !important;
  --background-modifier-border-hover: #2F2F2F !important;
  --background-modifier-error: #ec3643 !important;
  --background-modifier-error-hover: #ec3643 !important;
  --background-modifier-error-rgb: 236, 54, 67 !important;
  --background-modifier-form-field: #1E1E1E !important;
  --background-modifier-form-field-hover: #1E1E1E !important;
  --background-modifier-success: #65c756 !important;
  --background-modifier-success-rgb: 101, 199, 86 !important;
  --background-primary: #1E1E1E !important;
  --background-primary-alt: #959595 !important;
  --background-secondary-alt: #2F2F2F !important;
  --bases-cards-background: #1E1E1E !important;
  --bases-cards-cover-background: #959595 !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px #1E1E1E !important;
  --bases-cards-shadow-hover: 0 0 0 1px #2F2F2F !important;
  --bases-embed-border-color: #1E1E1E !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: #959595 !important;
  --bases-table-border-color: #1E1E1E !important;
  --bases-table-cell-background-active: #1E1E1E !important;
  --bases-table-cell-background-disabled: #959595 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258, 80%, 55%) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: #959595 !important;
  --bases-table-header-background: #1E1E1E !important;
  --bases-table-header-color: #959595 !important;
  --bases-table-summary-background: #1E1E1E !important;
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent)) !important;
  --bodyFont: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 0.5;
  --callout-border-width: 0.5px;
  --callout-bug: 236, 54, 67;
  --callout-content-padding: 1px;
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #1E1E1E !important;
  --canvas-card-label-color: #B8B2B1 !important;
  --canvas-color-1: 236, 54, 67 !important;
  --canvas-color-2: 249, 158, 21 !important;
  --canvas-color-4: 101, 199, 86 !important;
  --canvas-color-6: 193, 97, 253 !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: #2F2F2F !important;
  --caret-color: rgb(228, 228, 228) !important;
  --checkbox-border-color: #2F2F2F !important;
  --checkbox-border-color-hover: hsl(258, 80%, 55%) !important;
  --checkbox-marker-color: #1E1E1E !important;
  --checkbox-radius: 50% !important;
  --checkbox-size: 10px !important;
  --checklist-done-color: #B8B2B1 !important;
  --code-background: #171818 !important;
  --code-border-color: #1E1E1E !important;
  --code-comment: #B8B2B1 !important;
  --code-important: #f99e15 !important;
  --code-normal: rgb(228, 228, 228) !important;
  --code-operator: #ec3643 !important;
  --code-punctuation: #959595 !important;
  --code-radius: 2px !important;
  --code-string: #65c756 !important;
  --code-tag: #ec3643 !important;
  --code-value: #c161fd !important;
  --codeFont: SFMono-Regular, Menlo, Consolas, "Roboto Mono", Source Code Pro, monospace !important;
  --codeblock-radius: 4px !important;
  --collapse-icon-color: #959595 !important;
  --collapse-icon-color-collapsed: hsl(258, 80%, 55%) !important;
  --color-base-00: #1E1E1E !important;
  --color-base-05: #1E1D1E !important;
  --color-base-10: #959595 !important;
  --color-base-100: rgb(228, 228, 228) !important;
  --color-base-100-ref: 228, 228, 228 !important;
  --color-base-101: rgb(0, 0, 0) !important;
  --color-base-101-ref: 0, 0, 0 !important;
  --color-base-15: #363636 !important;
  --color-base-17: #262626 !important;
  --color-base-20: #000000 !important;
  --color-base-25: #1E1E1E !important;
  --color-base-30: #2F2F2F !important;
  --color-base-35: #282828 !important;
  --color-base-40: #605852 !important;
  --color-base-50: #2F2F2F !important;
  --color-base-51: #6E665F !important;
  --color-base-60: #B8B2B1 !important;
  --color-base-70: #959595 !important;
  --color-base-80: #464545ff !important;
  --color-base-90: #414141 !important;
  --color-base-darklight: hsl(258, 88%, 106%) !important;
  --color-base-highlight: hsl(258, 80%, 55%) !important;
  --color-base-icons: #95908E !important;
  --color-base-lowlight: hsl(258, 50%, 50%) !important;
  --color-base-verylowlight: hsl(258, 50%, 20%) !important;
  --color-base-warn: #EA5A47 !important;
  --color-blue: #0884ff !important;
  --color-blue-rgb: 8, 132, 255 !important;
  --color-blue-rgb-dark: 140, 148, 154 !important;
  --color-blue-rgb-light: 28, 40, 52 !important;
  --color-fakeclose-inner: #FE5F57 !important;
  --color-fakeclose-outer: #DF544C !important;
  --color-green: #65c756 !important;
  --color-green-rgb: 101, 199, 86 !important;
  --color-green-rgb-dark: 145, 150, 145 !important;
  --color-green-rgb-light: 37, 47, 36 !important;
  --color-neutral: #414141 !important;
  --color-neutral-rgb: 120, 120, 120 !important;
  --color-neutral-rgb-dark: 142, 142, 142 !important;
  --color-neutral-rgb-light: 40, 40, 40 !important;
  --color-neutral-rgb-white: 38, 38, 38 !important;
  --color-orange: #f99e15 !important;
  --color-orange-rgb: 249, 158, 21 !important;
  --color-orange-rgb-dark: 153, 148, 141 !important;
  --color-orange-rgb-light: 52, 43, 29 !important;
  --color-purple: #c161fd !important;
  --color-purple-rgb: 193, 97, 253 !important;
  --color-purple-rgb-dark: 151, 146, 153 !important;
  --color-purple-rgb-light: 46, 37, 52 !important;
  --color-red: #ec3643 !important;
  --color-red-rgb: 236, 54, 67 !important;
  --color-red-rgb-dark: 152, 143, 144 !important;
  --color-red-rgb-light: 50, 32, 34 !important;
  --color-scrollbar-1: #959595 !important;
  --color-scrollbar-2: #959595 !important;
  --color-scrollbar-3: #6B6B6B !important;
  --dark: rgb(228, 228, 228) !important;
  --darkgray: rgb(228, 228, 228) !important;
  --divider-color: rgb(0, 0, 0) !important;
  --divider-color-hover: rgb(0, 0, 0) !important;
  --divider-color-tabv: #524845 !important;
  --divider-width: 0.5px !important;
  --dropdown-background: #1E1E1E !important;
  --dropdown-background-hover: #1E1D1E !important;
  --embed-block-shadow-hover: 0 0 0 1px #1E1E1E, inset 0 0 0 1px #1E1E1E !important;
  --file-header-background: #1E1E1E !important;
  --file-header-background-focused: #1E1E1E !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-line-width: 100% !important;
  --flair-background: #1E1E1E !important;
  --flair-color: rgb(228, 228, 228) !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-mermaid: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: SFMono-Regular, Menlo, Consolas, "Roboto Mono", Source Code Pro, monospace !important;
  --font-monospace-default: SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace !important;
  --font-print: SFPro-Regular, Arial' !important;
  --font-text: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-text-theme: SFPro-Regular !important;
  --font-ui-teeny: 10px !important;
  --font-ui-unreadable: 8px !important;
  --footnote-divider-color: rgb(0, 0, 0) !important;
  --footnote-id-color: #959595 !important;
  --footnote-id-color-no-occurrences: #B8B2B1 !important;
  --footnote-radius: 2px !important;
  --graph-line: #282828 !important;
  --graph-node: #959595 !important;
  --graph-node-tag: #65c756 !important;
  --graph-node-unresolved: #B8B2B1 !important;
  --graph-text: rgb(228, 228, 228) !important;
  --gray: #959595 !important;
  --h1-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h1-size: 2.1rem !important;
  --h1-weight: 100 !important;
  --h2-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h2-size: 1.5rem !important;
  --h2-weight: 100 !important;
  --h3-font: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h3-line-height: 1.2 !important;
  --h3-size: 1.2rem !important;
  --h3-weight: 100 !important;
  --h4-font: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h4-line-height: 1.2 !important;
  --h4-size: 1rem !important;
  --h4-weight: 100 !important;
  --h5-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h5-size: 0.9rem !important;
  --h5-weight: 100 !important;
  --h6-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h6-size: 0.8rem !important;
  --h6-weight: 100 !important;
  --header-height: 50px !important;
  --headerFont: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --heading-formatting: #B8B2B1 !important;
  --heading-spacing: 1.25rem !important;
  --highlight: hsl(258, 50%, 20%) !important;
  --hr-color: #1E1E1E !important;
  --icon-color: #959595 !important;
  --icon-color-active: hsl(258, 80%, 55%) !important;
  --icon-color-focused: rgb(228, 228, 228) !important;
  --icon-color-hover: #959595 !important;
  --icon-l-stroke-width: 1.25px !important;
  --icon-m-stroke-width: 1.25px !important;
  --icon-stroke: 1.25px !important;
  --inline-title-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --inline-title-size: 2.1rem !important;
  --inline-title-weight: 100 !important;
  --input-date-separator: #B8B2B1 !important;
  --input-placeholder-color: #B8B2B1 !important;
  --interactive-hover: #1E1D1E !important;
  --interactive-normal: #1E1E1E !important;
  --light: #1E1E1E !important;
  --lightgray: #2F2F2F !important;
  --link-color: hsl(258, 50%, 50%) !important;
  --link-color-hover: rgb(228, 228, 228) !important;
  --link-decoration-color: hsl(258, 50%, 50%) !important;
  --link-external-color: rgb(228, 228, 228) !important;
  --link-external-color-hover: rgb(228, 228, 228) !important;
  --link-external-decoration-color: #288133 !important;
  --link-unresolved-color: #EA5A47 !important;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3) !important;
  --list-bullet-size: 0.4em !important;
  --list-marker-color: #464545ff !important;
  --list-marker-color-collapsed: hsl(258, 80%, 55%) !important;
  --list-marker-color-hover: hsl(258, 80%, 55%) !important;
  --menu-border-color: #2F2F2F !important;
  --menu-radius: 4px !important;
  --metadata-border-color: #1E1E1E !important;
  --metadata-divider-color: rgb(0, 0, 0) !important;
  --metadata-divider-width: 0px !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: 10px !important;
  --metadata-input-text-color: rgb(228, 228, 228) !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: 10px !important;
  --metadata-label-text-color: #959595 !important;
  --metadata-label-text-color-hover: hsl(258, 50%, 20%) !important;
  --metadata-label-width: 8em !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258, 80%, 55%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #2F2F2F !important;
  --metadata-sidebar-label-font-size: 10px !important;
  --modal-background: #1E1E1E !important;
  --modal-border-color: #605852 !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: #959595 !important;
  --nav-collapse-icon-color-collapsed: #B8B2B1 !important;
  --nav-heading-color: rgb(228, 228, 228) !important;
  --nav-heading-color-collapsed: #B8B2B1 !important;
  --nav-heading-color-collapsed-hover: #959595 !important;
  --nav-heading-color-hover: rgb(228, 228, 228) !important;
  --nav-item-color: #959595 !important;
  --nav-item-color-active: rgb(228, 228, 228) !important;
  --nav-item-color-hover: rgb(228, 228, 228) !important;
  --nav-item-color-selected: rgb(228, 228, 228) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: #B8B2B1 !important;
  --nav-tag-color-active: #959595 !important;
  --nav-tag-color-hover: #959595 !important;
  --nav-tag-radius: 2px !important;
  --p-spacing: 0.5rem !important;
  --p-spacing-empty: 0.2rem !important;
  --pdf-background: #1E1E1E !important;
  --pdf-page-background: #1E1E1E !important;
  --pdf-shadow: 0 0 0 1px #1E1E1E !important;
  --pdf-sidebar-background: #1E1E1E !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E !important;
  --pill-border-color: #1E1E1E !important;
  --pill-border-color-hover: #2F2F2F !important;
  --pill-color: #959595 !important;
  --pill-color-hover: rgb(228, 228, 228) !important;
  --pill-color-remove: #B8B2B1 !important;
  --prompt-background: #1E1E1E !important;
  --prompt-border-color: #605852 !important;
  --radius-l: 8px !important;
  --radius-m: 4px !important;
  --radius-none: 0px !important;
  --radius-round: 50% !important;
  --radius-s: 2px !important;
  --radius-xl: 13px !important;
  --radius-xs: 1px !important;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent)) !important;
  --ribbon-background-collapsed: #1E1E1E !important;
  --ribbon-width: 0px !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #959595 !important;
  --search-icon-color: #959595 !important;
  --search-result-background: #1E1E1E !important;
  --setting-group-heading-color: rgb(228, 228, 228) !important;
  --setting-items-background: #959595 !important;
  --setting-items-border-color: #1E1E1E !important;
  --setting-items-radius: 8px !important;
  --slider-thumb-border-color: #2F2F2F !important;
  --slider-track-background: #1E1E1E !important;
  --status-bar-border-color: rgb(0, 0, 0) !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: #959595 !important;
  --suggestion-background: #1E1E1E !important;
  --sync-avatar-color-1: #ec3643 !important;
  --sync-avatar-color-2: #f99e15 !important;
  --sync-avatar-color-4: #65c756 !important;
  --sync-avatar-color-6: #0884ff !important;
  --sync-avatar-color-7: #c161fd !important;
  --tab-background-active: #1E1E1E !important;
  --tab-divider-color: #2F2F2F !important;
  --tab-font-size: 10px !important;
  --tab-outline-color: rgb(0, 0, 0) !important;
  --tab-stacked-font-size: 10px !important;
  --tab-stacked-header-width: 50px !important;
  --tab-switcher-preview-radius: 13px !important;
  --tab-text-color: #B8B2B1 !important;
  --tab-text-color-active: #959595 !important;
  --tab-text-color-focused: #959595 !important;
  --tab-text-color-focused-active: #959595 !important;
  --tab-text-color-focused-active-current: rgb(228, 228, 228) !important;
  --table-add-button-border-color: #1E1E1E !important;
  --table-border-color: #1E1E1E !important;
  --table-drag-handle-color: #B8B2B1 !important;
  --table-header-border-color: #1E1E1E !important;
  --table-header-color: rgb(228, 228, 228) !important;
  --text-error: #ec3643 !important;
  --text-faint: #B8B2B1 !important;
  --text-highlight-bg: hsl(258, 50%, 20%) !important;
  --text-muted: #959595 !important;
  --text-normal: rgb(228, 228, 228) !important;
  --text-success: #65c756 !important;
  --text-warning: #f99e15 !important;
  --textHighlight: hsl(258, 50%, 20%) !important;
  --titleFont: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background-focused: #2F2F2F !important;
  --titlebar-border-color: #1E1E1E !important;
  --titlebar-text-color: #959595 !important;
  --titlebar-text-color-focused: rgb(228, 228, 228) !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 13px !important;
  --toggle-s-border-width: 1px !important;
  --toggle-s-thumb-height: 13px !important;
  --toggle-s-thumb-width: 13px !important;
  --toggle-s-width: 25px !important;
  --toggle-thumb-color: #ffffff !important;
  --toggle-thumb-height: 13px !important;
  --toggle-thumb-radius: 13px !important;
  --toggle-thumb-width: 13px !important;
  --toggle-width: 25px !important;
  --traffic-lights-offset-x: 50px !important;
  --traffic-lights-offset-y: 50px !important;
  --vault-name-color: #959595 !important;
  --vault-name-font-size: 12px !important;
  --vault-profile-color: rgb(228, 228, 228) !important;
  --vault-profile-color-hover: rgb(228, 228, 228) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(41, 26, 77);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .canvas-sidebar {
  border-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body .note-properties-tags {
  border-radius: 4px;
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(0, 0, 0);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body div#quartz-root {
  color: rgb(228, 228, 228);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(41, 26, 77);
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body del {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(30, 30, 30);
  font-size: 10px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(70, 69, 69);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(96, 88, 82);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration-color: rgb(149, 149, 149);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: underline rgb(102, 64, 191);
  text-decoration-color: rgb(102, 64, 191);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(234, 90, 71);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(234, 90, 71) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(234, 90, 71);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body dt {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(184, 178, 177);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body table {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: 0px;
  width: 194.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(41, 26, 77);
  border-left-color: rgb(41, 26, 77);
  border-right-color: rgb(41, 26, 77);
  border-top-color: rgb(41, 26, 77);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(41, 26, 77);
  border-left-color: rgb(41, 26, 77);
  border-right-color: rgb(41, 26, 77);
  border-top-color: rgb(41, 26, 77);
  border-top-left-radius: 2px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body thead {
  background-color: rgb(41, 26, 77);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(228, 228, 228);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(228, 228, 228);
  font-family: "??", "??", SFMono-Regular, Menlo, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 24, 24);
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-width: 1px;
  border-left-color: rgb(47, 47, 47);
  border-left-width: 1px;
  border-right-color: rgb(47, 47, 47);
  border-right-width: 1px;
  border-top-color: rgb(47, 47, 47);
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 24, 24);
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-width: 1px;
  border-left-color: rgb(47, 47, 47);
  border-left-width: 1px;
  border-right-color: rgb(47, 47, 47);
  border-right-width: 1px;
  border-top-color: rgb(47, 47, 47);
  border-top-width: 1px;
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(23, 24, 24);
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-width: 1px;
  border-left-color: rgb(47, 47, 47);
  border-left-width: 1px;
  border-right-color: rgb(47, 47, 47);
  border-right-width: 1px;
  border-top-color: rgb(47, 47, 47);
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(23, 24, 24);
  border-bottom-color: rgb(47, 47, 47);
  border-bottom-width: 1px;
  border-left-color: rgb(47, 47, 47);
  border-left-width: 1px;
  border-right-color: rgb(47, 47, 47);
  border-right-width: 1px;
  border-top-color: rgb(47, 47, 47);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(149, 149, 149);
  border-bottom-color: rgb(149, 149, 149);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-left-width: 0px;
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(70, 69, 69);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(70, 69, 69);
  border-right-color: rgb(70, 69, 69);
  border-top-color: rgb(70, 69, 69);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -15px;
  width: 10px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
  color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(236, 54, 67);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 120, 120, 120;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgba(120, 120, 120, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(120, 120, 120, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(120, 120, 120, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(120, 120, 120, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 120, 120, 120;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 5px;
  border-right-color: rgb(120, 120, 120);
  border-right-width: 5px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 236, 54, 67;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(236, 54, 67);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(236, 54, 67);
  border-left-width: 5px;
  border-right-color: rgb(236, 54, 67);
  border-right-width: 5px;
  border-top-color: rgb(236, 54, 67);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 193, 97, 253;
  background-color: rgb(46, 37, 52);
  border-bottom-color: rgba(193, 97, 253, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(193, 97, 253, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(193, 97, 253, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(193, 97, 253, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 236, 54, 67;
  background-color: rgb(50, 32, 34);
  border-bottom-color: rgba(236, 54, 67, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 54, 67, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(236, 54, 67, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(236, 54, 67, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 8, 132, 255;
  background-color: rgb(28, 40, 52);
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 8, 132, 255;
  background-color: rgb(28, 40, 52);
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 8, 132, 255;
  background-color: rgb(28, 40, 52);
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 120, 120, 120;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 3px;
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 101, 199, 86;
  background-color: rgb(37, 47, 36);
  border-bottom-color: rgba(101, 199, 86, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(101, 199, 86, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(101, 199, 86, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(101, 199, 86, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 193, 97, 253;
  background-color: rgb(46, 37, 52);
  border-bottom-color: rgba(193, 97, 253, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(193, 97, 253, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(193, 97, 253, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(193, 97, 253, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 249, 158, 21;
  background-color: rgb(52, 43, 29);
  border-bottom-color: rgba(249, 158, 21, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(249, 158, 21, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(249, 158, 21, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(249, 158, 21, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 249, 158, 21;
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(249, 158, 21);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(249, 158, 21);
  border-left-width: 5px;
  border-right-color: rgb(249, 158, 21);
  border-right-width: 5px;
  border-top-color: rgb(249, 158, 21);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="avoid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bad"] {
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

html[saved-theme="dark"] body .callout[data-callout="good"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="issue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="metadata"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z'/%3E%3Cpath d='M12 22V12'/%3E%3Cpolyline points='3.29 7 12 12 20.71 7'/%3E%3Cpath d='m7.5 4.27 9 5.15'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="problem"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="purpose"] {
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
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(228, 228, 228);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(54, 54, 54);
  border-bottom-color: rgb(96, 88, 82);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(96, 88, 82);
  border-right-color: rgb(96, 88, 82);
  border-top-color: rgb(96, 88, 82);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(47, 47, 47);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(96, 88, 82);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(96, 88, 82);
  border-right-color: rgb(96, 88, 82);
  border-top-color: rgb(96, 88, 82);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(54, 54, 54);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(47, 47, 47);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body h1 {
  color: rgb(228, 228, 228);
  font-family: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(228, 228, 228);
  font-family: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 8, 132, 255;
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(228, 228, 228);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}`,
    footer: `html[saved-theme="dark"] body footer {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 4px;
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(149, 149, 149);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(228, 228, 228);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(104, 48, 232);
  border-left-color: rgb(104, 48, 232);
  border-right-color: rgb(104, 48, 232);
  border-top-color: rgb(104, 48, 232);
  color: rgb(104, 48, 232);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(104, 48, 232);
  stroke: rgb(104, 48, 232);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(149, 149, 149);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(149, 149, 149);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(184, 178, 177);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(149, 149, 149);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(30, 30, 30);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(23, 24, 24);
  border-bottom-color: rgb(228, 228, 228);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(228, 228, 228);
  font-family: "??", "??", SFMono-Regular, Menlo, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body sub {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body summary {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body sup {
  color: rgb(228, 228, 228);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #D8D2D2 !important;
  --background-modifier-border-focus: hsl(258, 88%, 66%) !important;
  --background-modifier-border-hover: #D8D2D2 !important;
  --background-modifier-error: #ec3643 !important;
  --background-modifier-error-hover: #ec3643 !important;
  --background-modifier-error-rgb: 236, 54, 67 !important;
  --background-modifier-form-field: #FFFFFF !important;
  --background-modifier-form-field-hover: #FFFFFF !important;
  --background-modifier-success: #65c756 !important;
  --background-modifier-success-rgb: 101, 199, 86 !important;
  --background-primary: #FFFFFF !important;
  --background-primary-alt: #FFFFFF !important;
  --background-secondary: #F0E8E6 !important;
  --background-secondary-alt: #FAFAFA !important;
  --bases-cards-background: #FFFFFF !important;
  --bases-cards-cover-background: #FFFFFF !important;
  --bases-cards-radius: 4px !important;
  --bases-cards-shadow: 0 0 0 1px #D8D2D2 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #D8D2D2 !important;
  --bases-embed-border-color: #D8D2D2 !important;
  --bases-embed-border-radius: 2px !important;
  --bases-group-heading-property-color: #6E6966 !important;
  --bases-table-border-color: #D8D2D2 !important;
  --bases-table-cell-background-active: #FFFFFF !important;
  --bases-table-cell-background-disabled: #FFFFFF !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-container-border-radius: 2px !important;
  --bases-table-group-background: #FFFFFF !important;
  --bases-table-header-background: #FFFFFF !important;
  --bases-table-header-color: #6E6966 !important;
  --bases-table-summary-background: #FFFFFF !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --bodyFont: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --callout-blend-mode: normal;
  --callout-border-opacity: 0.5;
  --callout-border-width: 0.5px;
  --callout-bug: 236, 54, 67;
  --callout-content-padding: 1px;
  --callout-default: 8, 132, 255;
  --callout-error: 236, 54, 67;
  --callout-example: 193, 97, 253;
  --callout-fail: 236, 54, 67;
  --callout-info: 8, 132, 255;
  --callout-padding: 12px 12px 12px 12px;
  --callout-question: 249, 158, 21;
  --callout-radius: 2px;
  --callout-success: 101, 199, 86;
  --callout-todo: 8, 132, 255;
  --callout-warning: 249, 158, 21;
  --canvas-background: #FFFFFF !important;
  --canvas-card-label-color: #B8B2B1 !important;
  --canvas-color-1: 236, 54, 67 !important;
  --canvas-color-2: 249, 158, 21 !important;
  --canvas-color-4: 101, 199, 86 !important;
  --canvas-color-6: 193, 97, 253 !important;
  --canvas-controls-radius: 2px !important;
  --canvas-dot-pattern: #DFD7D7 !important;
  --caret-color: rgb(76, 73, 73) !important;
  --checkbox-border-color: #E0DAD8 !important;
  --checkbox-border-color-hover: hsl(258, 88%, 66%) !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: #FFFFFF !important;
  --checkbox-radius: 50% !important;
  --checkbox-size: 10px !important;
  --checklist-done-color: #B8B2B1 !important;
  --code-background: #FAFAFA !important;
  --code-border-color: #D8D2D2 !important;
  --code-comment: #B8B2B1 !important;
  --code-important: #f99e15 !important;
  --code-normal: rgb(76, 73, 73) !important;
  --code-operator: #ec3643 !important;
  --code-punctuation: #6E6966 !important;
  --code-radius: 2px !important;
  --code-string: #65c756 !important;
  --code-tag: #ec3643 !important;
  --code-value: #c161fd !important;
  --codeFont: SFMono-Regular, Menlo, Consolas, "Roboto Mono", Source Code Pro, monospace !important;
  --codeblock-radius: 4px !important;
  --collapse-icon-color: #6E6966 !important;
  --color-base-00: #FFFFFF !important;
  --color-base-05: #FAFAFA !important;
  --color-base-10: #FFFFFF !important;
  --color-base-100: rgb(76, 73, 73) !important;
  --color-base-100-ref: 76, 73, 73 !important;
  --color-base-101: rgb(0, 0, 0) !important;
  --color-base-101-ref: 0, 0, 0 !important;
  --color-base-15: #F8F2F1 !important;
  --color-base-17: #F0E8E6 !important;
  --color-base-20: #ECE6E5 !important;
  --color-base-25: #ECE6E4 !important;
  --color-base-30: #DFD7D7 !important;
  --color-base-35: #EBE5E5 !important;
  --color-base-40: #DFD9D7 !important;
  --color-base-50: #E0DAD8 !important;
  --color-base-51: #C6C0BE !important;
  --color-base-60: #B8B2B1 !important;
  --color-base-70: #6E6966 !important;
  --color-base-80: #464545ff !important;
  --color-base-90: #D5D5D5 !important;
  --color-base-darklight: hsl(258, 88%, 26%) !important;
  --color-base-highlight: hsl(258, 88%, 66%) !important;
  --color-base-lowlight: hsl(258, 88%, 86%) !important;
  --color-base-verylowlight: hsl(258, 88%, 94%) !important;
  --color-base-warn: #EA5A47 !important;
  --color-blue: #0884ff !important;
  --color-blue-rgb: 8, 132, 255 !important;
  --color-blue-rgb-dark: 3, 48, 93 !important;
  --color-blue-rgb-light: 224, 240, 255 !important;
  --color-fakeclose-inner: #FE5F57 !important;
  --color-fakeclose-outer: #DF544C !important;
  --color-green: #65c756 !important;
  --color-green-rgb: 101, 199, 86 !important;
  --color-green-rgb-light: 235, 255, 232 !important;
  --color-neutral: #414141 !important;
  --color-neutral-rgb: 120, 120, 120 !important;
  --color-neutral-rgb-dark: 67, 67, 67 !important;
  --color-neutral-rgb-light: 250, 250, 250 !important;
  --color-neutral-rgb-white: 255, 255, 255 !important;
  --color-orange: #f99e15 !important;
  --color-orange-rgb: 249, 158, 21 !important;
  --color-orange-rgb-dark: 84, 53, 7 !important;
  --color-orange-rgb-light: 255, 248, 237 !important;
  --color-purple: #c161fd !important;
  --color-purple-rgb: 193, 97, 253 !important;
  --color-purple-rgb-dark: 58, 28, 77 !important;
  --color-purple-rgb-light: 249, 239, 254 !important;
  --color-red: #ec3643 !important;
  --color-red-rgb: 236, 54, 67 !important;
  --color-red-rgb-dark: 94, 0, 7 !important;
  --color-red-rgb-light: 255, 233, 234 !important;
  --color-scrollbar-1: #C2C2C2 !important;
  --color-scrollbar-2: #B4AFAE !important;
  --color-scrollbar-3: #E2E2E2 !important;
  --dark: rgb(76, 73, 73) !important;
  --darkgray: rgb(76, 73, 73) !important;
  --divider-color: #D8D2D2 !important;
  --divider-color-hover: #D8D2D2 !important;
  --divider-width: 0.5px !important;
  --dropdown-background: #FFFFFF !important;
  --dropdown-background-hover: #FAFAFA !important;
  --embed-block-shadow-hover: 0 0 0 1px #D8D2D2, inset 0 0 0 1px #D8D2D2 !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --file-header-background: #FFFFFF !important;
  --file-header-background-focused: #FFFFFF !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --file-line-width: 100% !important;
  --flair-background: #FFFFFF !important;
  --flair-color: rgb(76, 73, 73) !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-mermaid: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-monospace: SFMono-Regular, Menlo, Consolas, "Roboto Mono", Source Code Pro, monospace !important;
  --font-monospace-default: SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace !important;
  --font-print: SFPro-Regular, Arial' !important;
  --font-text: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --font-text-theme: SFPro-Regular !important;
  --font-ui-teeny: 10px !important;
  --font-ui-unreadable: 8px !important;
  --footnote-divider-color: #D8D2D2 !important;
  --footnote-id-color: #6E6966 !important;
  --footnote-id-color-no-occurrences: #B8B2B1 !important;
  --footnote-radius: 2px !important;
  --graph-line: #EBE5E5 !important;
  --graph-node: #6E6966 !important;
  --graph-node-tag: #65c756 !important;
  --graph-node-unresolved: #B8B2B1 !important;
  --graph-text: rgb(76, 73, 73) !important;
  --gray: #6E6966 !important;
  --h1-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h1-size: 2.1rem !important;
  --h1-weight: 100 !important;
  --h2-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h2-size: 1.5rem !important;
  --h2-weight: 100 !important;
  --h3-font: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h3-line-height: 1.2 !important;
  --h3-size: 1.2rem !important;
  --h3-weight: 100 !important;
  --h4-font: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h4-line-height: 1.2 !important;
  --h4-size: 1rem !important;
  --h4-weight: 100 !important;
  --h5-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h5-size: 0.9rem !important;
  --h5-weight: 100 !important;
  --h6-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --h6-size: 0.8rem !important;
  --h6-weight: 100 !important;
  --header-height: 50px !important;
  --headerFont: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --heading-formatting: #B8B2B1 !important;
  --heading-spacing: 1.25rem !important;
  --highlight: hsl(258, 88%, 94%) !important;
  --hr-color: #D8D2D2 !important;
  --icon-color: #6E6966 !important;
  --icon-color-focused: rgb(76, 73, 73) !important;
  --icon-color-hover: #6E6966 !important;
  --icon-l-stroke-width: 1.25px !important;
  --icon-m-stroke-width: 1.25px !important;
  --icon-stroke: 1.25px !important;
  --inline-title-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif !important;
  --inline-title-size: 2.1rem !important;
  --inline-title-weight: 100 !important;
  --input-date-separator: #B8B2B1 !important;
  --input-placeholder-color: #B8B2B1 !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-hover: #FAFAFA !important;
  --interactive-normal: #FFFFFF !important;
  --light: #FFFFFF !important;
  --lightgray: #F0E8E6 !important;
  --link-color-hover: rgb(76, 73, 73) !important;
  --link-decoration-color: hsl(258, 88%, 66%) !important;
  --link-external-color: rgb(76, 73, 73) !important;
  --link-external-color-hover: rgb(76, 73, 73) !important;
  --link-external-decoration-color: #35B649 !important;
  --link-unresolved-color: #EA5A47 !important;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3) !important;
  --list-bullet-size: 0.4em !important;
  --list-marker-color: #464545ff !important;
  --list-marker-color-hover: hsl(258, 88%, 66%) !important;
  --menu-background: #F0E8E6 !important;
  --menu-border-color: #D8D2D2 !important;
  --menu-radius: 4px !important;
  --metadata-border-color: #D8D2D2 !important;
  --metadata-divider-color: #D8D2D2 !important;
  --metadata-divider-width: 0px !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-input-font-size: 10px !important;
  --metadata-input-text-color: rgb(76, 73, 73) !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --metadata-label-font-size: 10px !important;
  --metadata-label-text-color: #6E6966 !important;
  --metadata-label-text-color-hover: hsl(258, 88%, 94%) !important;
  --metadata-label-width: 8em !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D8D2D2 !important;
  --metadata-sidebar-label-font-size: 10px !important;
  --modal-background: #FFFFFF !important;
  --modal-border-color: #DFD9D7 !important;
  --modal-radius: 8px !important;
  --nav-collapse-icon-color: #6E6966 !important;
  --nav-collapse-icon-color-collapsed: #B8B2B1 !important;
  --nav-heading-color: rgb(76, 73, 73) !important;
  --nav-heading-color-collapsed: #B8B2B1 !important;
  --nav-heading-color-collapsed-hover: #6E6966 !important;
  --nav-heading-color-hover: rgb(76, 73, 73) !important;
  --nav-item-color: #6E6966 !important;
  --nav-item-color-active: rgb(76, 73, 73) !important;
  --nav-item-color-hover: rgb(76, 73, 73) !important;
  --nav-item-color-selected: rgb(76, 73, 73) !important;
  --nav-item-radius: 2px !important;
  --nav-tag-color: #B8B2B1 !important;
  --nav-tag-color-active: #6E6966 !important;
  --nav-tag-color-hover: #6E6966 !important;
  --nav-tag-radius: 2px !important;
  --p-spacing: 0.5rem !important;
  --p-spacing-empty: 0.2rem !important;
  --pdf-background: #FFFFFF !important;
  --pdf-page-background: #FFFFFF !important;
  --pdf-sidebar-background: #FFFFFF !important;
  --pill-border-color: #D8D2D2 !important;
  --pill-border-color-hover: #D8D2D2 !important;
  --pill-color: #6E6966 !important;
  --pill-color-hover: rgb(76, 73, 73) !important;
  --pill-color-remove: #B8B2B1 !important;
  --prompt-background: #FFFFFF !important;
  --prompt-border-color: #DFD9D7 !important;
  --radius-l: 8px !important;
  --radius-m: 4px !important;
  --radius-none: 0px !important;
  --radius-round: 50% !important;
  --radius-s: 2px !important;
  --radius-xl: 13px !important;
  --radius-xs: 1px !important;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --ribbon-background: #F0E8E6 !important;
  --ribbon-background-collapsed: #FFFFFF !important;
  --ribbon-width: 0px !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #6E6966 !important;
  --search-icon-color: #6E6966 !important;
  --search-result-background: #FFFFFF !important;
  --secondary: hsl(258, 88%, 66%) !important;
  --setting-group-heading-color: rgb(76, 73, 73) !important;
  --setting-items-background: #FFFFFF !important;
  --setting-items-border-color: #D8D2D2 !important;
  --setting-items-radius: 8px !important;
  --slider-thumb-border-color: #D8D2D2 !important;
  --slider-track-background: #D8D2D2 !important;
  --status-bar-background: #F0E8E6 !important;
  --status-bar-border-color: #D8D2D2 !important;
  --status-bar-radius: 4px 0 0 0 !important;
  --status-bar-text-color: #6E6966 !important;
  --suggestion-background: #FFFFFF !important;
  --sync-avatar-color-1: #ec3643 !important;
  --sync-avatar-color-2: #f99e15 !important;
  --sync-avatar-color-4: #65c756 !important;
  --sync-avatar-color-6: #0884ff !important;
  --sync-avatar-color-7: #c161fd !important;
  --tab-background-active: #FFFFFF !important;
  --tab-container-background: #F0E8E6 !important;
  --tab-divider-color: #D8D2D2 !important;
  --tab-font-size: 10px !important;
  --tab-outline-color: #D8D2D2 !important;
  --tab-stacked-font-size: 10px !important;
  --tab-stacked-header-width: 50px !important;
  --tab-switcher-background: #F0E8E6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent) !important;
  --tab-switcher-preview-radius: 13px !important;
  --tab-text-color: #B8B2B1 !important;
  --tab-text-color-active: #6E6966 !important;
  --tab-text-color-focused: #6E6966 !important;
  --tab-text-color-focused-active: #6E6966 !important;
  --tab-text-color-focused-active-current: rgb(76, 73, 73) !important;
  --table-add-button-border-color: #D8D2D2 !important;
  --table-border-color: #D8D2D2 !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: #B8B2B1 !important;
  --table-header-border-color: #D8D2D2 !important;
  --table-header-color: rgb(76, 73, 73) !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --text-error: #ec3643 !important;
  --text-faint: #B8B2B1 !important;
  --text-highlight-bg: hsl(258, 88%, 94%) !important;
  --text-muted: #6E6966 !important;
  --text-normal: rgb(76, 73, 73) !important;
  --text-success: #65c756 !important;
  --text-warning: #f99e15 !important;
  --textHighlight: hsl(258, 88%, 94%) !important;
  --titleFont: SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif !important;
  --titlebar-background: #F0E8E6 !important;
  --titlebar-background-focused: #FAFAFA !important;
  --titlebar-border-color: #D8D2D2 !important;
  --titlebar-text-color: #6E6966 !important;
  --titlebar-text-color-focused: rgb(76, 73, 73) !important;
  --toggle-border-width: 1px !important;
  --toggle-radius: 13px !important;
  --toggle-s-border-width: 1px !important;
  --toggle-s-thumb-height: 13px !important;
  --toggle-s-thumb-width: 13px !important;
  --toggle-s-width: 25px !important;
  --toggle-thumb-color: #ffffff !important;
  --toggle-thumb-height: 13px !important;
  --toggle-thumb-radius: 13px !important;
  --toggle-thumb-width: 13px !important;
  --toggle-width: 25px !important;
  --traffic-lights-offset-x: 50px !important;
  --traffic-lights-offset-y: 50px !important;
  --vault-name-color: #6E6966 !important;
  --vault-name-font-size: 12px !important;
  --vault-profile-color: rgb(76, 73, 73) !important;
  --vault-profile-color-hover: rgb(76, 73, 73) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 232, 230);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(234, 226, 253);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(216, 210, 210);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(110, 105, 102);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(110, 105, 102);
}

html[saved-theme="light"] body .note-properties-tags {
  border-radius: 4px;
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(110, 105, 102);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 232, 230);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(216, 210, 210);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 232, 230);
  border-left-color: rgb(216, 210, 210);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(76, 73, 73);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(234, 226, 253);
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body del {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(255, 255, 255);
  font-size: 10px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(70, 69, 69);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(223, 217, 215);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(110, 105, 102) none 0px;
  text-decoration-color: rgb(110, 105, 102);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: underline rgb(138, 92, 245);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(234, 90, 71);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(234, 90, 71) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(234, 90, 71);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body dt {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body ol > li {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body ul > li {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(184, 178, 177);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body table {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: 0px;
  width: 194.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(234, 226, 253);
  border-left-color: rgb(234, 226, 253);
  border-right-color: rgb(234, 226, 253);
  border-top-color: rgb(234, 226, 253);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(234, 226, 253);
  border-left-color: rgb(234, 226, 253);
  border-right-color: rgb(234, 226, 253);
  border-top-color: rgb(234, 226, 253);
  border-top-left-radius: 2px;
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body thead {
  background-color: rgb(234, 226, 253);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(76, 73, 73);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(76, 73, 73);
  font-family: "??", "??", SFMono-Regular, Menlo, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(223, 215, 215);
  border-bottom-width: 1px;
  border-left-color: rgb(223, 215, 215);
  border-left-width: 1px;
  border-right-color: rgb(223, 215, 215);
  border-right-width: 1px;
  border-top-color: rgb(223, 215, 215);
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(223, 215, 215);
  border-bottom-width: 1px;
  border-left-color: rgb(223, 215, 215);
  border-left-width: 1px;
  border-right-color: rgb(223, 215, 215);
  border-right-width: 1px;
  border-top-color: rgb(223, 215, 215);
  border-top-width: 1px;
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(223, 215, 215);
  border-bottom-width: 1px;
  border-left-color: rgb(223, 215, 215);
  border-left-width: 1px;
  border-right-color: rgb(223, 215, 215);
  border-right-width: 1px;
  border-top-color: rgb(223, 215, 215);
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(223, 215, 215);
  border-bottom-width: 1px;
  border-left-color: rgb(223, 215, 215);
  border-left-width: 1px;
  border-right-color: rgb(223, 215, 215);
  border-right-width: 1px;
  border-top-color: rgb(223, 215, 215);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body figcaption {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(110, 105, 102);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-left-width: 0px;
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-top: 6px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(70, 69, 69);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(70, 69, 69);
  border-right-color: rgb(70, 69, 69);
  border-top-color: rgb(70, 69, 69);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-left: -15px;
  width: 10px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(236, 54, 67);
  border-left-color: rgb(236, 54, 67);
  border-right-color: rgb(236, 54, 67);
  border-top-color: rgb(236, 54, 67);
  color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(236, 54, 67);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 120, 120, 120;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgba(120, 120, 120, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(120, 120, 120, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(120, 120, 120, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(120, 120, 120, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 120, 120, 120;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 5px;
  border-right-color: rgb(120, 120, 120);
  border-right-width: 5px;
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 236, 54, 67;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(236, 54, 67);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(236, 54, 67);
  border-left-width: 5px;
  border-right-color: rgb(236, 54, 67);
  border-right-width: 5px;
  border-top-color: rgb(236, 54, 67);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 193, 97, 253;
  background-color: rgb(249, 239, 254);
  border-bottom-color: rgba(193, 97, 253, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(193, 97, 253, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(193, 97, 253, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(193, 97, 253, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 236, 54, 67;
  background-color: rgb(255, 233, 234);
  border-bottom-color: rgba(236, 54, 67, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 54, 67, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(236, 54, 67, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(236, 54, 67, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 132, 255;
  background-color: rgb(224, 240, 255);
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 132, 255;
  background-color: rgb(224, 240, 255);
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 8, 132, 255;
  background-color: rgb(224, 240, 255);
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 120, 120, 120;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(120, 120, 120);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(120, 120, 120);
  border-left-width: 3px;
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 101, 199, 86;
  background-color: rgb(235, 255, 232);
  border-bottom-color: rgba(101, 199, 86, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(101, 199, 86, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(101, 199, 86, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(101, 199, 86, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 193, 97, 253;
  background-color: rgb(249, 239, 254);
  border-bottom-color: rgba(193, 97, 253, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(193, 97, 253, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(193, 97, 253, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(193, 97, 253, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 249, 158, 21;
  background-color: rgb(255, 248, 237);
  border-bottom-color: rgba(249, 158, 21, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(249, 158, 21, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(249, 158, 21, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(249, 158, 21, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 249, 158, 21;
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(249, 158, 21);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 5px;
  border-left-color: rgb(249, 158, 21);
  border-left-width: 5px;
  border-right-color: rgb(249, 158, 21);
  border-right-width: 5px;
  border-top-color: rgb(249, 158, 21);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 5px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="avoid"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bad"] {
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

html[saved-theme="light"] body .callout[data-callout="good"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="issue"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="metadata"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z'/%3E%3Cpath d='M12 22V12'/%3E%3Cpolyline points='3.29 7 12 12 20.71 7'/%3E%3Cpath d='m7.5 4.27 9 5.15'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="problem"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="purpose"] {
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
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  color: rgb(76, 73, 73);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(248, 242, 241);
  border-bottom-color: rgb(223, 217, 215);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(223, 217, 215);
  border-right-color: rgb(223, 217, 215);
  border-top-color: rgb(223, 217, 215);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(223, 215, 215);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 217, 215);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(223, 217, 215);
  border-right-color: rgb(223, 217, 215);
  border-top-color: rgb(223, 217, 215);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(248, 242, 241);
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(223, 215, 215);
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(223, 215, 215);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body h1 {
  color: rgb(76, 73, 73);
  font-family: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(76, 73, 73);
  font-family: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 132, 255;
  border-bottom-color: rgba(8, 132, 255, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 132, 255, 0.5);
  border-left-width: 1px;
  border-right-color: rgba(8, 132, 255, 0.5);
  border-right-width: 1px;
  border-top-color: rgba(8, 132, 255, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(76, 73, 73);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: rgb(110, 105, 102);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(240, 232, 230);
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  border-top-left-radius: 4px;
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(110, 105, 102);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(76, 73, 73);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 105, 102);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 105, 102);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 105, 102);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(110, 105, 102);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(184, 178, 177);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  color: rgb(110, 105, 102);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: rgb(110, 105, 102);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(240, 232, 230);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(76, 73, 73);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(76, 73, 73);
  font-family: "??", "??", SFMono-Regular, Menlo, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

html[saved-theme="light"] body sub {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body summary {
  color: rgb(76, 73, 73);
}

html[saved-theme="light"] body sup {
  color: rgb(76, 73, 73);
}`,
  },
};
