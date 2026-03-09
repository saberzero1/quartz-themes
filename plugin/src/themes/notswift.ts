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
  --background-modifier-border: #1E1E1E;
  --background-modifier-border-focus: rgb(104, 48, 232);
  --background-modifier-border-hover: #2F2F2F;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #1E1E1E;
  --background-modifier-form-field-hover: #1E1E1E;
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #1E1E1E;
  --background-primary-alt: #959595;
  --background-secondary-alt: #2F2F2F;
  --bases-cards-background: #1E1E1E;
  --bases-cards-cover-background: #959595;
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px #1E1E1E;
  --bases-cards-shadow-hover: 0 0 0 1px #2F2F2F;
  --bases-embed-border-color: #1E1E1E;
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: #959595;
  --bases-table-border-color: #1E1E1E;
  --bases-table-cell-background-active: #1E1E1E;
  --bases-table-cell-background-disabled: #959595;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(104, 48, 232);
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: #959595;
  --bases-table-header-background: #1E1E1E;
  --bases-table-header-color: #959595;
  --bases-table-summary-background: #1E1E1E;
  --blur-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
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
  --canvas-background: #1E1E1E;
  --canvas-card-label-color: #B8B2B1;
  --canvas-color-1: 236, 54, 67;
  --canvas-color-2: 249, 158, 21;
  --canvas-color-4: 101, 199, 86;
  --canvas-color-6: 193, 97, 253;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #2F2F2F;
  --caret-color: rgb(228, 228, 228);
  --checkbox-border-color: #2F2F2F;
  --checkbox-border-color-hover: rgb(104, 48, 232);
  --checkbox-marker-color: #1E1E1E;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --code-background: #171818;
  --code-border-color: #1E1E1E;
  --code-comment: #B8B2B1;
  --code-important: #f99e15;
  --code-normal: rgb(228, 228, 228);
  --code-operator: #ec3643;
  --code-punctuation: #959595;
  --code-radius: 2px;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #959595;
  --collapse-icon-color-collapsed: rgb(104, 48, 232);
  --color-base-00: #1E1E1E;
  --color-base-05: #1E1D1E;
  --color-base-10: #959595;
  --color-base-100: rgb(228, 228, 228);
  --color-base-100-ref: 228, 228, 228;
  --color-base-101: rgb(0, 0, 0);
  --color-base-101-ref: 0, 0, 0;
  --color-base-15: #363636;
  --color-base-17: #262626;
  --color-base-20: #000000;
  --color-base-25: #1E1E1E;
  --color-base-30: #2F2F2F;
  --color-base-35: #282828;
  --color-base-40: #605852;
  --color-base-50: #2F2F2F;
  --color-base-51: #6E665F;
  --color-base-60: #B8B2B1;
  --color-base-70: #959595;
  --color-base-80: #464545ff;
  --color-base-90: #414141;
  --color-base-darklight: hsl(258, 88%, 106%);
  --color-base-highlight: rgb(104, 48, 232);
  --color-base-icons: #95908E;
  --color-base-lowlight: rgb(102, 64, 191);
  --color-base-verylowlight: rgb(41, 25, 77);
  --color-base-warn: #EA5A47;
  --color-blue: #0884ff;
  --color-blue-rgb: 8, 132, 255;
  --color-blue-rgb-dark: 140, 148, 154;
  --color-blue-rgb-light: 28, 40, 52;
  --color-fakeclose-inner: #FE5F57;
  --color-fakeclose-outer: #DF544C;
  --color-green: #65c756;
  --color-green-rgb: 101, 199, 86;
  --color-green-rgb-dark: 145, 150, 145;
  --color-green-rgb-light: 37, 47, 36;
  --color-neutral: #414141;
  --color-neutral-rgb: 120, 120, 120;
  --color-neutral-rgb-dark: 142, 142, 142;
  --color-neutral-rgb-light: 40, 40, 40;
  --color-neutral-rgb-white: 38, 38, 38;
  --color-orange: #f99e15;
  --color-orange-rgb: 249, 158, 21;
  --color-orange-rgb-dark: 153, 148, 141;
  --color-orange-rgb-light: 52, 43, 29;
  --color-purple: #c161fd;
  --color-purple-rgb: 193, 97, 253;
  --color-purple-rgb-dark: 151, 146, 153;
  --color-purple-rgb-light: 46, 37, 52;
  --color-red: #ec3643;
  --color-red-rgb: 236, 54, 67;
  --color-red-rgb-dark: 152, 143, 144;
  --color-red-rgb-light: 50, 32, 34;
  --color-scrollbar-1: #959595;
  --color-scrollbar-2: #959595;
  --color-scrollbar-3: #6B6B6B;
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --divider-color-tabv: #524845;
  --divider-width: 0.5px;
  --dropdown-background: #1E1E1E;
  --dropdown-background-hover: #1E1D1E;
  --embed-block-shadow-hover: 0 0 0 1px #1E1E1E, inset 0 0 0 1px #1E1E1E;
  --file-header-background: #1E1E1E;
  --file-header-background-focused: #1E1E1E;
  --file-header-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-line-width: 100%;
  --flair-background: #1E1E1E;
  --flair-color: rgb(228, 228, 228);
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-monospace-default: SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text-theme: SFPro-Regular;
  --font-ui-teeny: 10px;
  --font-ui-unreadable: 8px;
  --footnote-divider-color: rgb(0, 0, 0);
  --footnote-id-color: #959595;
  --footnote-id-color-no-occurrences: #B8B2B1;
  --footnote-radius: 2px;
  --graph-line: #282828;
  --graph-node: #959595;
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(228, 228, 228);
  --h1-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
  --h1-size: 2.1rem;
  --h1-weight: 100;
  --h2-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h2-size: 1.5rem;
  --h2-weight: 100;
  --h3-font: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif;
  --h3-line-height: 1.2;
  --h3-size: 1.2rem;
  --h3-weight: 100;
  --h4-font: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif;
  --h4-line-height: 1.2;
  --h4-size: 1rem;
  --h4-weight: 100;
  --h5-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h5-size: 0.9rem;
  --h5-weight: 100;
  --h6-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h6-size: 0.8rem;
  --h6-weight: 100;
  --header-height: 50px;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #1E1E1E;
  --icon-color: #959595;
  --icon-color-active: rgb(104, 48, 232);
  --icon-color-focused: rgb(228, 228, 228);
  --icon-color-hover: #959595;
  --icon-l-stroke-width: 1.25px;
  --icon-m-stroke-width: 1.25px;
  --icon-stroke: 1.25px;
  --inline-title-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
  --inline-title-size: 2.1rem;
  --inline-title-weight: 100;
  --input-date-separator: #B8B2B1;
  --input-placeholder-color: #B8B2B1;
  --interactive-hover: #1E1D1E;
  --interactive-normal: #1E1E1E;
  --link-color: rgb(102, 64, 191);
  --link-color-hover: rgb(228, 228, 228);
  --link-decoration-color: rgb(102, 64, 191);
  --link-external-color: rgb(228, 228, 228);
  --link-external-color-hover: rgb(228, 228, 228);
  --link-external-decoration-color: #288133;
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --list-bullet-size: 0.4em;
  --list-marker-color: #464545ff;
  --list-marker-color-collapsed: rgb(104, 48, 232);
  --list-marker-color-hover: rgb(104, 48, 232);
  --menu-border-color: #2F2F2F;
  --menu-radius: 4px;
  --metadata-border-color: #1E1E1E;
  --metadata-divider-color: rgb(0, 0, 0);
  --metadata-divider-width: 0px;
  --metadata-input-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: 10px;
  --metadata-input-text-color: rgb(228, 228, 228);
  --metadata-label-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: 10px;
  --metadata-label-text-color: #959595;
  --metadata-label-text-color-hover: rgb(41, 25, 77);
  --metadata-label-width: 8em;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(104, 48, 232);
  --metadata-property-box-shadow-hover: 0 0 0 1px #2F2F2F;
  --metadata-sidebar-label-font-size: 10px;
  --modal-background: #1E1E1E;
  --modal-border-color: #605852;
  --modal-radius: 8px;
  --nav-collapse-icon-color: #959595;
  --nav-collapse-icon-color-collapsed: #B8B2B1;
  --nav-heading-color: rgb(228, 228, 228);
  --nav-heading-color-collapsed: #B8B2B1;
  --nav-heading-color-collapsed-hover: #959595;
  --nav-heading-color-hover: rgb(228, 228, 228);
  --nav-item-color: #959595;
  --nav-item-color-active: rgb(228, 228, 228);
  --nav-item-color-hover: rgb(228, 228, 228);
  --nav-item-color-selected: rgb(228, 228, 228);
  --nav-item-radius: 2px;
  --nav-tag-color: #B8B2B1;
  --nav-tag-color-active: #959595;
  --nav-tag-color-hover: #959595;
  --nav-tag-radius: 2px;
  --p-spacing: 0.5rem;
  --p-spacing-empty: 0.2rem;
  --pdf-background: #1E1E1E;
  --pdf-page-background: #1E1E1E;
  --pdf-shadow: 0 0 0 1px #1E1E1E;
  --pdf-sidebar-background: #1E1E1E;
  --pdf-thumbnail-shadow: 0 0 0 1px #1E1E1E;
  --pill-border-color: #1E1E1E;
  --pill-border-color-hover: #2F2F2F;
  --pill-color: #959595;
  --pill-color-hover: rgb(228, 228, 228);
  --pill-color-remove: #B8B2B1;
  --prompt-background: #1E1E1E;
  --prompt-border-color: #605852;
  --radius-l: 8px;
  --radius-m: 4px;
  --radius-none: 0px;
  --radius-round: 50%;
  --radius-s: 2px;
  --radius-xl: 13px;
  --radius-xs: 1px;
  --raised-background: color-mix(in srgb, #1E1E1E 65%, transparent) linear-gradient(#1E1E1E, color-mix(in srgb, #1E1E1E 65%, transparent));
  --ribbon-background-collapsed: #1E1E1E;
  --ribbon-width: 0px;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #959595;
  --search-icon-color: #959595;
  --search-result-background: #1E1E1E;
  --setting-group-heading-color: rgb(228, 228, 228);
  --setting-items-background: #959595;
  --setting-items-border-color: #1E1E1E;
  --setting-items-radius: 8px;
  --slider-thumb-border-color: #2F2F2F;
  --slider-track-background: #1E1E1E;
  --status-bar-border-color: rgb(0, 0, 0);
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: #959595;
  --suggestion-background: #1E1E1E;
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --tab-background-active: #1E1E1E;
  --tab-divider-color: #2F2F2F;
  --tab-font-size: 10px;
  --tab-outline-color: rgb(0, 0, 0);
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-preview-radius: 13px;
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #959595;
  --tab-text-color-focused: #959595;
  --tab-text-color-focused-active: #959595;
  --tab-text-color-focused-active-current: rgb(228, 228, 228);
  --table-add-button-border-color: #1E1E1E;
  --table-border-color: #1E1E1E;
  --table-drag-handle-color: #B8B2B1;
  --table-header-border-color: #1E1E1E;
  --table-header-color: rgb(228, 228, 228);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: rgb(41, 25, 77);
  --text-muted: #959595;
  --text-normal: rgb(228, 228, 228);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --titlebar-background-focused: #2F2F2F;
  --titlebar-border-color: #1E1E1E;
  --titlebar-text-color: #959595;
  --titlebar-text-color-focused: rgb(228, 228, 228);
  --toggle-border-width: 1px;
  --toggle-radius: 13px;
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 13px;
  --toggle-s-thumb-width: 13px;
  --toggle-s-width: 25px;
  --toggle-thumb-color: #ffffff;
  --toggle-thumb-height: 13px;
  --toggle-thumb-radius: 13px;
  --toggle-thumb-width: 13px;
  --toggle-width: 25px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  --vault-name-color: #959595;
  --vault-name-font-size: 12px;
  --vault-profile-color: rgb(228, 228, 228);
  --vault-profile-color-hover: rgb(228, 228, 228);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(228, 228, 228);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(228, 228, 228);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(228, 228, 228);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(0, 0, 0);
  color: rgb(228, 228, 228);
}

body div#quartz-root {
  color: rgb(228, 228, 228);
}`,
    typography: `body .page article p > b, b {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body .page article p > em, em {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body .page article p > i, i {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body .page article p > strong, strong {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body .text-highlight {
  background-color: rgb(41, 26, 77);
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body del {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: line-through rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body p {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(149, 149, 149) none 0px;
  text-decoration: rgb(149, 149, 149);
  text-decoration-color: rgb(149, 149, 149);
}`,
    links: `body a.external, footer a {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: underline rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: underline rgb(102, 64, 191);
  text-decoration-color: rgb(102, 64, 191);
}

body a.internal.broken {
  color: rgb(234, 90, 71);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(234, 90, 71) none 0px;
  text-decoration: underline rgb(234, 90, 71);
  text-decoration-color: rgb(234, 90, 71);
}`,
    lists: `body dd {
  color: rgb(228, 228, 228);
}

body dt {
  color: rgb(228, 228, 228);
}

body ol > li {
  color: rgb(228, 228, 228);
}

body ol.overflow {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body ul > li {
  color: rgb(228, 228, 228);
}

body ul.overflow {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(184, 178, 177);
  text-decoration: rgb(184, 178, 177);
}

body blockquote {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body table {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: 0px;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(41, 26, 77);
  border-left-color: rgb(41, 26, 77);
  border-right-color: rgb(41, 26, 77);
  border-top-color: rgb(41, 26, 77);
  color: rgb(228, 228, 228);
}

body th {
  border-bottom-color: rgb(41, 26, 77);
  border-left-color: rgb(41, 26, 77);
  border-right-color: rgb(41, 26, 77);
  border-top-color: rgb(41, 26, 77);
  border-top-left-radius: 2px;
  color: rgb(228, 228, 228);
}

body thead {
  background-color: rgb(41, 26, 77);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body figcaption {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body img {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body video {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

body .transclude {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-left-width: 0px;
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-top: 6px;
}

body .transclude-inner {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-left-width: 0px;
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-top: 6px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(184, 178, 177);
  text-decoration: line-through rgb(184, 178, 177);
  text-decoration-color: rgb(184, 178, 177);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='*'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='-'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='/'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='>'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='?'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='I'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='S'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='b'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='c'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='d'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='f'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='i'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='k'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='l'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='p'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='u'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body li.task-list-item[data-task='w'] {
  color: rgb(228, 228, 228);
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(8, 132, 255);
  border-left-color: rgb(8, 132, 255);
  border-right-color: rgb(8, 132, 255);
  border-top-color: rgb(8, 132, 255);
}

body .callout > .callout-content {
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(228, 228, 228);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(228, 228, 228);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(228, 228, 228) none 0px;
  text-decoration: rgb(228, 228, 228);
  text-decoration-color: rgb(228, 228, 228);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(228, 228, 228);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(228, 228, 228);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(47, 47, 47);
  color: rgb(228, 228, 228);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(96, 88, 82);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(96, 88, 82);
  border-right-color: rgb(96, 88, 82);
  border-top-color: rgb(96, 88, 82);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(54, 54, 54);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(47, 47, 47);
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(47, 47, 47);
  color: rgb(228, 228, 228);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h1 {
  color: rgb(228, 228, 228);
  font-family: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h2 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(228, 228, 228);
  font-family: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h3 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h4 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h5 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h6 {
  color: rgb(228, 228, 228);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

body hr {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(149, 149, 149);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(149, 149, 149);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(149, 149, 149);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(228, 228, 228);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(228, 228, 228);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
}`,
    footer: `body footer {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 4px;
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(228, 228, 228);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body li.section-li > .section .meta {
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(149, 149, 149);
  text-decoration: rgb(149, 149, 149);
}

body ul.section-ul {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(104, 48, 232);
  border-left-color: rgb(104, 48, 232);
  border-right-color: rgb(104, 48, 232);
  border-top-color: rgb(104, 48, 232);
  color: rgb(104, 48, 232);
}

body .darkmode svg {
  color: rgb(104, 48, 232);
  stroke: rgb(104, 48, 232);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(184, 178, 177);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
  color: rgb(228, 228, 228);
}

body .metadata {
  border-bottom-color: rgb(30, 30, 30);
  border-left-color: rgb(30, 30, 30);
  border-right-color: rgb(30, 30, 30);
  border-top-color: rgb(30, 30, 30);
  color: rgb(149, 149, 149);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page-header h2.page-title {
  color: rgb(30, 30, 30);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(228, 228, 228);
  text-decoration: underline dotted rgb(228, 228, 228);
}

body details {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body input[type=text] {
  border-bottom-color: rgb(149, 149, 149);
  border-left-color: rgb(149, 149, 149);
  border-right-color: rgb(149, 149, 149);
  border-top-color: rgb(149, 149, 149);
  color: rgb(149, 149, 149);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(228, 228, 228);
  border-left-color: rgb(228, 228, 228);
  border-right-color: rgb(228, 228, 228);
  border-top-color: rgb(228, 228, 228);
}

body sub {
  color: rgb(228, 228, 228);
}

body summary {
  color: rgb(228, 228, 228);
}

body sup {
  color: rgb(228, 228, 228);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #D8D2D2;
  --background-modifier-border-focus: rgb(138, 92, 245);
  --background-modifier-border-hover: #D8D2D2;
  --background-modifier-error: #ec3643;
  --background-modifier-error-hover: #ec3643;
  --background-modifier-error-rgb: 236, 54, 67;
  --background-modifier-form-field: #FFFFFF;
  --background-modifier-form-field-hover: #FFFFFF;
  --background-modifier-success: #65c756;
  --background-modifier-success-rgb: 101, 199, 86;
  --background-primary: #FFFFFF;
  --background-primary-alt: #FFFFFF;
  --background-secondary: #F0E8E6;
  --background-secondary-alt: #FAFAFA;
  --bases-cards-background: #FFFFFF;
  --bases-cards-cover-background: #FFFFFF;
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px #D8D2D2;
  --bases-cards-shadow-hover: 0 0 0 1px #D8D2D2;
  --bases-embed-border-color: #D8D2D2;
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: #6E6966;
  --bases-table-border-color: #D8D2D2;
  --bases-table-cell-background-active: #FFFFFF;
  --bases-table-cell-background-disabled: #FFFFFF;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: #FFFFFF;
  --bases-table-header-background: #FFFFFF;
  --bases-table-header-color: #6E6966;
  --bases-table-summary-background: #FFFFFF;
  --blockquote-border-color: rgb(138, 92, 245);
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
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
  --canvas-background: #FFFFFF;
  --canvas-card-label-color: #B8B2B1;
  --canvas-color-1: 236, 54, 67;
  --canvas-color-2: 249, 158, 21;
  --canvas-color-4: 101, 199, 86;
  --canvas-color-6: 193, 97, 253;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #DFD7D7;
  --caret-color: rgb(76, 73, 73);
  --checkbox-border-color: #E0DAD8;
  --checkbox-border-color-hover: rgb(138, 92, 245);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-marker-color: #FFFFFF;
  --checkbox-radius: 50%;
  --checkbox-size: 10px;
  --checklist-done-color: #B8B2B1;
  --code-background: #FAFAFA;
  --code-border-color: #D8D2D2;
  --code-comment: #B8B2B1;
  --code-important: #f99e15;
  --code-normal: rgb(76, 73, 73);
  --code-operator: #ec3643;
  --code-punctuation: #6E6966;
  --code-radius: 2px;
  --code-string: #65c756;
  --code-tag: #ec3643;
  --code-value: #c161fd;
  --codeblock-radius: 4px;
  --collapse-icon-color: #6E6966;
  --color-base-00: #FFFFFF;
  --color-base-05: #FAFAFA;
  --color-base-10: #FFFFFF;
  --color-base-100: rgb(76, 73, 73);
  --color-base-100-ref: 76, 73, 73;
  --color-base-101: rgb(0, 0, 0);
  --color-base-101-ref: 0, 0, 0;
  --color-base-15: #F8F2F1;
  --color-base-17: #F0E8E6;
  --color-base-20: #ECE6E5;
  --color-base-25: #ECE6E4;
  --color-base-30: #DFD7D7;
  --color-base-35: #EBE5E5;
  --color-base-40: #DFD9D7;
  --color-base-50: #E0DAD8;
  --color-base-51: #C6C0BE;
  --color-base-60: #B8B2B1;
  --color-base-70: #6E6966;
  --color-base-80: #464545ff;
  --color-base-90: #D5D5D5;
  --color-base-darklight: rgb(43, 8, 125);
  --color-base-highlight: rgb(138, 92, 245);
  --color-base-lowlight: rgb(207, 188, 251);
  --color-base-verylowlight: rgb(234, 226, 253);
  --color-base-warn: #EA5A47;
  --color-blue: #0884ff;
  --color-blue-rgb: 8, 132, 255;
  --color-blue-rgb-dark: 3, 48, 93;
  --color-blue-rgb-light: 224, 240, 255;
  --color-fakeclose-inner: #FE5F57;
  --color-fakeclose-outer: #DF544C;
  --color-green: #65c756;
  --color-green-rgb: 101, 199, 86;
  --color-green-rgb-light: 235, 255, 232;
  --color-neutral: #414141;
  --color-neutral-rgb: 120, 120, 120;
  --color-neutral-rgb-dark: 67, 67, 67;
  --color-neutral-rgb-light: 250, 250, 250;
  --color-neutral-rgb-white: 255, 255, 255;
  --color-orange: #f99e15;
  --color-orange-rgb: 249, 158, 21;
  --color-orange-rgb-dark: 84, 53, 7;
  --color-orange-rgb-light: 255, 248, 237;
  --color-purple: #c161fd;
  --color-purple-rgb: 193, 97, 253;
  --color-purple-rgb-dark: 58, 28, 77;
  --color-purple-rgb-light: 249, 239, 254;
  --color-red: #ec3643;
  --color-red-rgb: 236, 54, 67;
  --color-red-rgb-dark: 94, 0, 7;
  --color-red-rgb-light: 255, 233, 234;
  --color-scrollbar-1: #C2C2C2;
  --color-scrollbar-2: #B4AFAE;
  --color-scrollbar-3: #E2E2E2;
  --divider-color: #D8D2D2;
  --divider-color-hover: #D8D2D2;
  --divider-width: 0.5px;
  --dropdown-background: #FFFFFF;
  --dropdown-background-hover: #FAFAFA;
  --embed-block-shadow-hover: 0 0 0 1px #D8D2D2, inset 0 0 0 1px #D8D2D2;
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --file-header-background: #FFFFFF;
  --file-header-background-focused: #FFFFFF;
  --file-header-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --file-line-width: 100%;
  --flair-background: #FFFFFF;
  --flair-color: rgb(76, 73, 73);
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-mermaid: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-monospace: '??', '??', SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-monospace-default: SFMono-Regular, Menlo, Consolas, "Roboto Mono", 'Source Code Pro', monospace;
  --font-print: '??', '??', SFPro-Regular, 'Arial';
  --font-text: '??', SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --font-text-theme: SFPro-Regular;
  --font-ui-teeny: 10px;
  --font-ui-unreadable: 8px;
  --footnote-divider-color: #D8D2D2;
  --footnote-id-color: #6E6966;
  --footnote-id-color-no-occurrences: #B8B2B1;
  --footnote-radius: 2px;
  --graph-line: #EBE5E5;
  --graph-node: #6E6966;
  --graph-node-tag: #65c756;
  --graph-node-unresolved: #B8B2B1;
  --graph-text: rgb(76, 73, 73);
  --h1-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
  --h1-size: 2.1rem;
  --h1-weight: 100;
  --h2-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h2-size: 1.5rem;
  --h2-weight: 100;
  --h3-font: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif;
  --h3-line-height: 1.2;
  --h3-size: 1.2rem;
  --h3-weight: 100;
  --h4-font: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif;
  --h4-line-height: 1.2;
  --h4-size: 1rem;
  --h4-weight: 100;
  --h5-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h5-size: 0.9rem;
  --h5-weight: 100;
  --h6-font: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
  --h6-size: 0.8rem;
  --h6-weight: 100;
  --header-height: 50px;
  --heading-formatting: #B8B2B1;
  --heading-spacing: 1.25rem;
  --hr-color: #D8D2D2;
  --icon-color: #6E6966;
  --icon-color-focused: rgb(76, 73, 73);
  --icon-color-hover: #6E6966;
  --icon-l-stroke-width: 1.25px;
  --icon-m-stroke-width: 1.25px;
  --icon-stroke: 1.25px;
  --inline-title-font: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
  --inline-title-size: 2.1rem;
  --inline-title-weight: 100;
  --input-date-separator: #B8B2B1;
  --input-placeholder-color: #B8B2B1;
  --interactive-accent: rgb(138, 92, 245);
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFFFFF;
  --link-color-hover: rgb(76, 73, 73);
  --link-decoration-color: rgb(138, 92, 245);
  --link-external-color: rgb(76, 73, 73);
  --link-external-color-hover: rgb(76, 73, 73);
  --link-external-decoration-color: #35B649;
  --link-unresolved-color: #EA5A47;
  --link-unresolved-decoration-color: hsla(#EA5A47, 0.3);
  --list-bullet-size: 0.4em;
  --list-marker-color: #464545ff;
  --list-marker-color-hover: rgb(138, 92, 245);
  --menu-background: #F0E8E6;
  --menu-border-color: #D8D2D2;
  --menu-radius: 4px;
  --metadata-border-color: #D8D2D2;
  --metadata-divider-color: #D8D2D2;
  --metadata-divider-width: 0px;
  --metadata-input-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-input-font-size: 10px;
  --metadata-input-text-color: rgb(76, 73, 73);
  --metadata-label-font: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  --metadata-label-font-size: 10px;
  --metadata-label-text-color: #6E6966;
  --metadata-label-text-color-hover: rgb(234, 226, 253);
  --metadata-label-width: 8em;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --metadata-property-box-shadow-hover: 0 0 0 1px #D8D2D2;
  --metadata-sidebar-label-font-size: 10px;
  --modal-background: #FFFFFF;
  --modal-border-color: #DFD9D7;
  --modal-radius: 8px;
  --nav-collapse-icon-color: #6E6966;
  --nav-collapse-icon-color-collapsed: #B8B2B1;
  --nav-heading-color: rgb(76, 73, 73);
  --nav-heading-color-collapsed: #B8B2B1;
  --nav-heading-color-collapsed-hover: #6E6966;
  --nav-heading-color-hover: rgb(76, 73, 73);
  --nav-item-color: #6E6966;
  --nav-item-color-active: rgb(76, 73, 73);
  --nav-item-color-hover: rgb(76, 73, 73);
  --nav-item-color-selected: rgb(76, 73, 73);
  --nav-item-radius: 2px;
  --nav-tag-color: #B8B2B1;
  --nav-tag-color-active: #6E6966;
  --nav-tag-color-hover: #6E6966;
  --nav-tag-radius: 2px;
  --p-spacing: 0.5rem;
  --p-spacing-empty: 0.2rem;
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --pill-border-color: #D8D2D2;
  --pill-border-color-hover: #D8D2D2;
  --pill-color: #6E6966;
  --pill-color-hover: rgb(76, 73, 73);
  --pill-color-remove: #B8B2B1;
  --prompt-background: #FFFFFF;
  --prompt-border-color: #DFD9D7;
  --radius-l: 8px;
  --radius-m: 4px;
  --radius-none: 0px;
  --radius-round: 50%;
  --radius-s: 2px;
  --radius-xl: 13px;
  --radius-xs: 1px;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --ribbon-background: #F0E8E6;
  --ribbon-background-collapsed: #FFFFFF;
  --ribbon-width: 0px;
  --scrollbar-radius: 8px;
  --search-clear-button-color: #6E6966;
  --search-icon-color: #6E6966;
  --search-result-background: #FFFFFF;
  --setting-group-heading-color: rgb(76, 73, 73);
  --setting-items-background: #FFFFFF;
  --setting-items-border-color: #D8D2D2;
  --setting-items-radius: 8px;
  --slider-thumb-border-color: #D8D2D2;
  --slider-track-background: #D8D2D2;
  --status-bar-background: #F0E8E6;
  --status-bar-border-color: #D8D2D2;
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: #6E6966;
  --suggestion-background: #FFFFFF;
  --sync-avatar-color-1: #ec3643;
  --sync-avatar-color-2: #f99e15;
  --sync-avatar-color-4: #65c756;
  --sync-avatar-color-6: #0884ff;
  --sync-avatar-color-7: #c161fd;
  --tab-background-active: #FFFFFF;
  --tab-container-background: #F0E8E6;
  --tab-divider-color: #D8D2D2;
  --tab-font-size: 10px;
  --tab-outline-color: #D8D2D2;
  --tab-stacked-font-size: 10px;
  --tab-stacked-header-width: 50px;
  --tab-switcher-background: #F0E8E6;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0E8E6, transparent);
  --tab-switcher-preview-radius: 13px;
  --tab-text-color: #B8B2B1;
  --tab-text-color-active: #6E6966;
  --tab-text-color-focused: #6E6966;
  --tab-text-color-focused-active: #6E6966;
  --tab-text-color-focused-active-current: rgb(76, 73, 73);
  --table-add-button-border-color: #D8D2D2;
  --table-border-color: #D8D2D2;
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: #B8B2B1;
  --table-header-border-color: #D8D2D2;
  --table-header-color: rgb(76, 73, 73);
  --table-selection-border-color: rgb(138, 92, 245);
  --text-error: #ec3643;
  --text-faint: #B8B2B1;
  --text-highlight-bg: rgb(234, 226, 253);
  --text-muted: #6E6966;
  --text-normal: rgb(76, 73, 73);
  --text-success: #65c756;
  --text-warning: #f99e15;
  --titlebar-background: #F0E8E6;
  --titlebar-background-focused: #FAFAFA;
  --titlebar-border-color: #D8D2D2;
  --titlebar-text-color: #6E6966;
  --titlebar-text-color-focused: rgb(76, 73, 73);
  --toggle-border-width: 1px;
  --toggle-radius: 13px;
  --toggle-s-border-width: 1px;
  --toggle-s-thumb-height: 13px;
  --toggle-s-thumb-width: 13px;
  --toggle-s-width: 25px;
  --toggle-thumb-color: #ffffff;
  --toggle-thumb-height: 13px;
  --toggle-thumb-radius: 13px;
  --toggle-thumb-width: 13px;
  --toggle-width: 25px;
  --traffic-lights-offset-x: 50px;
  --traffic-lights-offset-y: 50px;
  --vault-name-color: #6E6966;
  --vault-name-font-size: 12px;
  --vault-profile-color: rgb(76, 73, 73);
  --vault-profile-color-hover: rgb(76, 73, 73);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 232, 230);
  color: rgb(76, 73, 73);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(76, 73, 73);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 232, 230);
  color: rgb(76, 73, 73);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(216, 210, 210);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 232, 230);
  border-left-color: rgb(216, 210, 210);
  color: rgb(76, 73, 73);
}

body div#quartz-root {
  color: rgb(76, 73, 73);
}`,
    typography: `body .page article p > b, b {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body .page article p > em, em {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body .page article p > i, i {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body .page article p > strong, strong {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body .text-highlight {
  background-color: rgb(234, 226, 253);
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body del {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: line-through rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body p {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(110, 105, 102) none 0px;
  text-decoration: rgb(110, 105, 102);
  text-decoration-color: rgb(110, 105, 102);
}`,
    links: `body a.external, footer a {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: underline rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
}

body a.internal.broken {
  color: rgb(234, 90, 71);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(234, 90, 71) none 0px;
  text-decoration: underline rgb(234, 90, 71);
  text-decoration-color: rgb(234, 90, 71);
}`,
    lists: `body dd {
  color: rgb(76, 73, 73);
}

body dt {
  color: rgb(76, 73, 73);
}

body ol > li {
  color: rgb(76, 73, 73);
}

body ol.overflow {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body ul > li {
  color: rgb(76, 73, 73);
}

body ul.overflow {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(184, 178, 177);
  text-decoration: rgb(184, 178, 177);
}

body blockquote {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body table {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  margin-top: 0px;
  width: 194.844px;
}

body td {
  border-bottom-color: rgb(234, 226, 253);
  border-left-color: rgb(234, 226, 253);
  border-right-color: rgb(234, 226, 253);
  border-top-color: rgb(234, 226, 253);
  color: rgb(76, 73, 73);
}

body th {
  border-bottom-color: rgb(234, 226, 253);
  border-left-color: rgb(234, 226, 253);
  border-right-color: rgb(234, 226, 253);
  border-top-color: rgb(234, 226, 253);
  border-top-left-radius: 2px;
  color: rgb(138, 92, 245);
}

body thead {
  background-color: rgb(234, 226, 253);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(223, 215, 215);
  border-bottom-width: 1px;
  border-left-color: rgb(223, 215, 215);
  border-left-width: 1px;
  border-right-color: rgb(223, 215, 215);
  border-right-width: 1px;
  border-top-color: rgb(223, 215, 215);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(223, 215, 215);
  border-bottom-width: 1px;
  border-left-color: rgb(223, 215, 215);
  border-left-width: 1px;
  border-right-color: rgb(223, 215, 215);
  border-right-width: 1px;
  border-top-color: rgb(223, 215, 215);
  border-top-width: 1px;
}

body pre:has(> code) {
  border-bottom-color: rgb(223, 215, 215);
  border-bottom-width: 1px;
  border-left-color: rgb(223, 215, 215);
  border-left-width: 1px;
  border-right-color: rgb(223, 215, 215);
  border-right-width: 1px;
  border-top-color: rgb(223, 215, 215);
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body figcaption {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body figure {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body img {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body video {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

body .transclude {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-left-width: 0px;
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-top: 6px;
}

body .transclude-inner {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-left-width: 0px;
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-top: 6px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(184, 178, 177);
  text-decoration: line-through rgb(184, 178, 177);
  text-decoration-color: rgb(184, 178, 177);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='*'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='-'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='/'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='>'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='?'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='I'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='S'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='b'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='c'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='d'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='f'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='i'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='k'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='l'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='p'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='u'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body li.task-list-item[data-task='w'] {
  color: rgb(76, 73, 73);
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(8, 132, 255);
  border-left-color: rgb(8, 132, 255);
  border-right-color: rgb(8, 132, 255);
  border-top-color: rgb(8, 132, 255);
}

body .callout > .callout-content {
  padding-bottom: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-top: 1px;
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  color: rgb(76, 73, 73);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(76, 73, 73);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  outline: rgb(76, 73, 73) none 0px;
  text-decoration: rgb(76, 73, 73);
  text-decoration-color: rgb(76, 73, 73);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(76, 73, 73);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(76, 73, 73);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 215, 215);
  color: rgb(76, 73, 73);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 217, 215);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(223, 217, 215);
  border-right-color: rgb(223, 217, 215);
  border-top-color: rgb(223, 217, 215);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(248, 242, 241);
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(223, 215, 215);
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 215, 215);
  color: rgb(76, 73, 73);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body h1 {
  color: rgb(76, 73, 73);
  font-family: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h2 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(76, 73, 73);
  font-family: SFProText-Ultralight, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h3 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Black, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h4 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Bold, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h5 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

body h6 {
  color: rgb(76, 73, 73);
  font-family: SFPro-Regular, -apple-system, BlinkMacSystemFont, sans-serif;
}

body hr {
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(110, 105, 102);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(110, 105, 102);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
  text-decoration: rgb(110, 105, 102);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(76, 73, 73);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(76, 73, 73);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: rgb(110, 105, 102);
}`,
    footer: `body footer {
  background-color: rgb(240, 232, 230);
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  border-top-left-radius: 4px;
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body footer ul li a {
  color: rgb(110, 105, 102);
  text-decoration: rgb(110, 105, 102);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(76, 73, 73);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 105, 102);
  text-decoration: rgb(110, 105, 102);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body li.section-li > .section .meta {
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 105, 102);
  text-decoration: rgb(110, 105, 102);
}

body ul.section-ul {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    breadcrumbs: `body .breadcrumb-container {
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

body .breadcrumb-element p {
  color: rgb(184, 178, 177);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
  color: rgb(76, 73, 73);
}

body .metadata {
  border-bottom-color: rgb(216, 210, 210);
  border-left-color: rgb(216, 210, 210);
  border-right-color: rgb(216, 210, 210);
  border-top-color: rgb(216, 210, 210);
  color: rgb(110, 105, 102);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: rgb(110, 105, 102);
  font-family: "??", SFPro-Regular, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body .navigation-progress {
  background-color: rgb(240, 232, 230);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body abbr {
  color: rgb(76, 73, 73);
  text-decoration: underline dotted rgb(76, 73, 73);
}

body details {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body input[type=text] {
  border-bottom-color: rgb(110, 105, 102);
  border-left-color: rgb(110, 105, 102);
  border-right-color: rgb(110, 105, 102);
  border-top-color: rgb(110, 105, 102);
  color: rgb(110, 105, 102);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Microsoft YaHei Light", sans-serif;
}

body kbd {
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

body progress {
  border-bottom-color: rgb(76, 73, 73);
  border-left-color: rgb(76, 73, 73);
  border-right-color: rgb(76, 73, 73);
  border-top-color: rgb(76, 73, 73);
}

body sub {
  color: rgb(76, 73, 73);
}

body summary {
  color: rgb(76, 73, 73);
}

body sup {
  color: rgb(76, 73, 73);
}`,
  },
};
