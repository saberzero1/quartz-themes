import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "origami",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0;
  --accent-l: 62%;
  --accent-s: 92%;
  --ancestor-editor-color: #b3b3b3;
  --aside-background: transparent;
  --aside-background-hover: rgba(255, 255, 255, 0.075);
  --aside-border-color: #555555;
  --aside-text-color: #999999;
  --background-modifier-active-hover: rgba(247, 69, 69, 0.15);
  --background-modifier-border: #555555;
  --background-modifier-border-focus: #606060;
  --background-modifier-error: #F74545;
  --background-modifier-error-hover: #F74545;
  --background-modifier-error-rgb: 247, 69, 69;
  --background-modifier-form-field: #757575;
  --background-modifier-form-field-hover: #757575;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #95f745;
  --background-modifier-success-rgb: 51, 255, 51;
  --background-primary: #202020;
  --background-primary-alt: #444444;
  --background-primary-pre-alt: #333333;
  --background-secondary: #555555;
  --background-secondary-alt: #555555;
  --background-transparent: #55555599;
  --bases-cards-background: #202020;
  --bases-cards-cover-background: #444444;
  --bases-cards-shadow: 0 0 0 1px #555555;
  --bases-embed-border-color: #555555;
  --bases-group-heading-property-color: #999999;
  --bases-table-border-color: #555555;
  --bases-table-cell-background-active: #202020;
  --bases-table-cell-background-disabled: #444444;
  --bases-table-cell-background-selected: rgba(247, 69, 69, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #606060;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(247, 69, 69);
  --bases-table-group-background: #444444;
  --bases-table-header-background: #202020;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: #999999;
  --bases-table-summary-background: #202020;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --bb-border: 1px solid #555555;
  --bb-border-alt: 1px solid #757575;
  --bb-border-dashed: 1px dashed #555555;
  --bb-border-high-contrast: 1px solid #999999;
  --bb-border-transparent: 1px solid transparent;
  --bb-shadow: -33px 24px 64px -8px rgba(247, 69, 69, 0.1), 33px 12px 64px -8px rgba(155, 245, 253, 0.1);
  --blockquote-border-color: rgb(247, 69, 69);
  --blur-background: color-mix(in srgb, #555555 65%, transparent) linear-gradient(#555555, color-mix(in srgb, #555555 65%, transparent));
  --callout-bug: 247, 69, 69;
  --callout-cite: 87, 61, 132;
  --callout-default: 90, 100, 248;
  --callout-error: 247, 69, 69;
  --callout-example: 170, 69, 247;
  --callout-fail: 247, 69, 69;
  --callout-important: 69, 206, 247;
  --callout-info: 90, 100, 248;
  --callout-question: 247, 138, 69;
  --callout-success: 51, 255, 51;
  --callout-summary: 69, 206, 247;
  --callout-tip: 69, 206, 247;
  --callout-todo: 90, 100, 248;
  --callout-warning: 247, 138, 69;
  --canvas-background: #202020;
  --canvas-card-label-color: #707070;
  --canvas-color-1: 247, 69, 69;
  --canvas-color-2: 247, 138, 69;
  --canvas-color-3: 247, 204, 68;
  --canvas-color-4: 51, 255, 51;
  --canvas-color-5: 69, 206, 247;
  --canvas-color-6: 170, 69, 247;
  --canvas-dot-pattern: #707070;
  --caret-color: #b3b3b3;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #999999;
  --checkbox-color: rgb(247, 69, 69);
  --checkbox-color-hover: rgb(251, 112, 118);
  --checkbox-marker-color: #202020;
  --checklist-done-color: #999999;
  --code-background: #444444;
  --code-border-color: #555555;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #707070;
  --code-function: #F7CC44;
  --code-important: #F78A45;
  --code-keyword: #fb5ed8;
  --code-normal: #999999;
  --code-operator: #F74545;
  --code-property: #45CEF7;
  --code-punctuation: #999999;
  --code-string: #95f745;
  --code-tag: #F74545;
  --code-value: #AA45F7;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: rgb(247, 69, 69);
  --color-accent: rgb(247, 69, 69);
  --color-accent-1: rgb(251, 112, 118);
  --color-accent-2: rgb(253, 155, 163);
  --color-accent-3: hsl(-175,
        142.6%,
        79.98%);
  --color-accent-hsl: 0, 92%, 62%;
  --color-accent-rgb: 247, 69, 69;
  --color-base-00: #202020;
  --color-base-05: #333333;
  --color-base-10: #444444;
  --color-base-20: #555555;
  --color-base-25: #757575;
  --color-base-30: #555555;
  --color-base-40: #606060;
  --color-base-50: #707070;
  --color-blue: #5a64f8;
  --color-blue-hsl: 216, 95%, 68%;
  --color-blue-rgb: 90, 100, 248;
  --color-cyan: #45CEF7;
  --color-cyan-hsl: 194, 92%, 62%;
  --color-cyan-rgb: 69, 206, 247;
  --color-green: #95f745;
  --color-green-hsl: 120, 100%, 60%;
  --color-green-rgb: 51, 255, 51;
  --color-orange: #F78A45;
  --color-orange-hsl: 23, 92%, 62%;
  --color-orange-rgb: 247, 138, 69;
  --color-pink: #fb5ed8;
  --color-pink-hsl: 313, 95%, 68%;
  --color-pink-rgb: 251, 94, 216, 1;
  --color-purple: #AA45F7;
  --color-purple-hsl: 274, 92%, 62%;
  --color-purple-rgb: 170, 69, 247;
  --color-red: #F74545;
  --color-red-hsl: 0, 92%, 62%;
  --color-red-rgb: 247, 69, 69;
  --color-yellow: #F7CC44;
  --color-yellow-hsl: 46, 92%, 62%;
  --color-yellow-rgb: 247, 204, 68;
  --divider-color: #555555;
  --divider-color-hover: rgb(247, 69, 69);
  --dropdown-background: #555555;
  --embed-block-shadow-hover: 0 0 0 1px #555555,
        inset 0 0 0 1px #555555;
  --embed-border-start: 2px solid rgb(247, 69, 69);
  --file-header-background: #202020;
  --file-header-background-focused: #202020;
  --file-header-font: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 14px;
  --file-margins: 32px;
  --flair-background: #555555;
  --flair-color: #b3b3b3;
  --font-interface: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Aspekta", sans-serif;
  --font-monospace: "Monaspace", monospace;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --footnote-divider-color: #555555;
  --footnote-id-color: #999999;
  --footnote-id-color-no-occurrences: #707070;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --graph-node: #999999;
  --graph-node-attachment: rgb(251, 112, 118);
  --graph-node-focused: #606060;
  --graph-node-tag: rgb(247, 69, 69);
  --graph-node-unresolved: #707070;
  --graph-text: #b3b3b3;
  --h1-color: #dadada;
  --h1-size: 3.5em;
  --h1-weight: 900;
  --h2-size: 1.842em;
  --h2-weight: 800;
  --h3-size: 1.3572em;
  --h3-weight: 700;
  --h4-size: 1.250em;
  --h4-weight: 600;
  --h5-size: 1em;
  --h5-weight: 600;
  --h6-size: 0.7368em;
  --h6-weight: 500;
  --heading-formatting: #707070;
  --hr-color: #555555;
  --icon-color: #999999;
  --icon-color-active: rgb(247, 69, 69);
  --icon-color-focused: #b3b3b3;
  --icon-color-hover: #999999;
  --inline-title-color: #dadada;
  --inline-title-size: clamp(2.5rem, 8vw - 4rem, 5rem);
  --inline-title-weight: 900;
  --input-date-separator: #707070;
  --input-placeholder-color: #707070;
  --interactive-accent: rgb(247, 69, 69);
  --interactive-accent-hover: rgb(251, 112, 118);
  --interactive-accent-hsl: 0, 92%, 62%;
  --interactive-normal: #555555;
  --link-color: rgb(247, 69, 69);
  --link-color-hover: rgb(253, 155, 163);
  --link-external-color: rgb(247, 69, 69);
  --link-external-color-hover: rgb(253, 155, 163);
  --link-unresolved-color: rgb(247, 69, 69);
  --link-unresolved-decoration-color: rgba(247, 69, 69, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #707070;
  --list-marker-color-collapsed: rgb(247, 69, 69);
  --list-marker-color-hover: #999999;
  --menu-background: #555555;
  --menu-shadow: 0px 10px 21px 13px rgba(0, 0, 0, 0.1);
  --metadata-border-color: #555555;
  --metadata-divider-color: #555555;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-input-font: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #b3b3b3;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-font: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #999999;
  --metadata-label-text-color-hover: #999999;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #606060;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #202020;
  --modal-border-color: #606060;
  --nav-collapse-icon-color: #707070;
  --nav-collapse-icon-color-collapsed: #707070;
  --nav-heading-color: #b3b3b3;
  --nav-heading-color-collapsed: #707070;
  --nav-heading-color-collapsed-hover: #999999;
  --nav-heading-color-hover: #b3b3b3;
  --nav-item-background-active: rgba(255, 255, 255, 0.075);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: rgba(247, 69, 69, 0.15);
  --nav-item-color: #999999;
  --nav-item-color-active: #b3b3b3;
  --nav-item-color-highlighted: rgb(247, 69, 69);
  --nav-item-color-hover: #b3b3b3;
  --nav-item-color-selected: #b3b3b3;
  --nav-item-size: 14px;
  --nav-tag-color: #707070;
  --nav-tag-color-active: #999999;
  --nav-tag-color-hover: #999999;
  --o-h1-color: #555555;
  --o-h2-color: #555555;
  --o-h3-color: #555555;
  --o-h4-color: #555555;
  --o-h5-color: #555555;
  --o-h6-color: #555555;
  --pdf-background: #202020;
  --pdf-page-background: #202020;
  --pdf-shadow: 0 0 0 1px #555555;
  --pdf-sidebar-background: #202020;
  --pdf-thumbnail-shadow: 0 0 0 1px #555555;
  --pill-border-color: #555555;
  --pill-color: #999999;
  --pill-color-hover: #b3b3b3;
  --pill-color-remove: #707070;
  --pill-color-remove-hover: rgb(247, 69, 69);
  --prompt-background: #202020;
  --prompt-border-color: #606060;
  --raised-background: color-mix(in srgb, #555555 65%, transparent) linear-gradient(#555555, color-mix(in srgb, #555555 65%, transparent));
  --ribbon-background: #555555;
  --ribbon-background-collapsed: #202020;
  --scrollbar-active-thumb-bg: rgba(247, 69, 69, 0.2);
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.05);
  --search-clear-button-color: #999999;
  --search-icon-color: #999999;
  --search-result-background: #202020;
  --setting-group-heading-color: #b3b3b3;
  --setting-group-heading-size: 16px;
  --setting-items-background: #444444;
  --setting-items-border-color: #555555;
  --shadow-l: rgb(0 0 0 / 20%) 0px 8px 24px;
  --shadow-lm-only: none;
  --shadow-s: 0px 10px 21px 13px rgba(0, 0, 0, 0.1);
  --slider-thumb-radius: 50%;
  --slider-track-background: #555555;
  --status-bar-background: #555555;
  --status-bar-border-color: #555555;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #999999;
  --suggestion-background: #202020;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #F74545;
  --sync-avatar-color-2: #F78A45;
  --sync-avatar-color-3: #F7CC44;
  --sync-avatar-color-4: #95f745;
  --sync-avatar-color-5: #45CEF7;
  --sync-avatar-color-6: #5a64f8;
  --sync-avatar-color-7: #AA45F7;
  --sync-avatar-color-8: #fb5ed8;
  --tab-background-active: #202020;
  --tab-container-background: #555555;
  --tab-font-size: 14px;
  --tab-outline-color: #555555;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: #555555;
  --tab-switcher-menubar-background: linear-gradient(to top, #555555, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(247, 69, 69);
  --tab-text-color: #707070;
  --tab-text-color-active: #999999;
  --tab-text-color-focused: #999999;
  --tab-text-color-focused-active: #999999;
  --tab-text-color-focused-active-current: #b3b3b3;
  --tab-text-color-focused-highlighted: rgb(247, 69, 69);
  --table-add-button-border-color: #555555;
  --table-border-color: #555555;
  --table-drag-handle-background-active: rgb(247, 69, 69);
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #dadada;
  --table-header-border-color: #555555;
  --table-header-color: #b3b3b3;
  --table-selection: rgba(247, 69, 69, 0.1);
  --table-selection-border-color: rgb(247, 69, 69);
  --tag-background: rgba(247, 69, 69, 0.1);
  --tag-background-hover: rgba(247, 69, 69, 0.2);
  --tag-border-color: rgba(247, 69, 69, 0.15);
  --tag-border-color-hover: rgba(247, 69, 69, 0.15);
  --tag-color: rgb(247, 69, 69);
  --tag-color-hover: rgb(247, 69, 69);
  --text-accent: rgb(247, 69, 69);
  --text-accent-hover: rgb(253, 155, 163);
  --text-cite: 87, 161, 132;
  --text-error: #F74545;
  --text-faint: #707070;
  --text-muted: #999999;
  --text-normal: #b3b3b3;
  --text-on-accent: #dadada;
  --text-on-button: #202020;
  --text-selection: rgba(247, 69, 69, 0.33);
  --text-success: #95f745;
  --text-warning: #F78A45;
  --titlebar-background: #555555;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: #555555;
  --titlebar-text-color: #999999;
  --titlebar-text-color-focused: #b3b3b3;
  --transition-duration: 700ms;
  --transition-duration-short: 350ms;
  --transition-ease: ease;
  --transition-props: background 700ms, 
                        border 700ms, 
                        color 700ms;
  --vault-name-color: #b3b3b3;
  --vault-name-font-size: 14px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #b3b3b3;
  --vault-profile-color-hover: #b3b3b3;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 32, 32);
  color: rgb(179, 179, 179);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(179, 179, 179);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(85, 85, 85);
  border-right-style: dashed;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(85, 85, 85);
  color: rgb(179, 179, 179);
}

body div#quartz-root {
  background-color: rgb(32, 32, 32);
  color: rgb(179, 179, 179);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .page article p > em, em {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body .page article p > i, i {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body .page article p > strong, strong {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
}

body .text-highlight {
  background-color: rgba(247, 69, 69, 0.2);
  color: rgb(247, 69, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(247, 69, 69) none 0px;
  text-decoration: rgb(247, 69, 69);
  text-decoration-color: rgb(247, 69, 69);
}

body del {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: line-through rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body p {
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(247, 69, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(247, 69, 69) none 0px;
  text-decoration: underline rgb(247, 69, 69);
  text-decoration-color: rgb(247, 69, 69);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(247, 69, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(247, 69, 69) none 0px;
  text-decoration: rgb(247, 69, 69);
  text-decoration-color: rgb(247, 69, 69);
  transition: 0.7s;
}

body a.internal.broken {
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
  transition: 0.7s;
}`,
    lists: `body dd {
  color: rgb(179, 179, 179);
}

body dt {
  color: rgb(179, 179, 179);
  font-weight: 500;
}

body ol > li {
  color: rgb(179, 179, 179);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body ul > li {
  color: rgb(179, 179, 179);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body blockquote {
  background-color: rgb(85, 85, 85);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body table {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.109px;
}

body td {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-width: 0px;
  color: rgb(179, 179, 179);
  font-weight: 500;
}

body th {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 8px;
  color: rgb(179, 179, 179);
}`,
    code: `body code {
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(247, 69, 69);
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(247, 69, 69);
  font-family: Monaspace, monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(179, 179, 179);
}

body pre > code > [data-line] {
  border-left-color: rgb(247, 204, 68);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(247, 204, 68);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(247, 204, 68);
  border-left-color: rgb(247, 204, 68);
  border-right-color: rgb(247, 204, 68);
  border-top-color: rgb(247, 204, 68);
}

body pre > code, pre:has(> code) {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body figcaption {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body img {
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(179, 179, 179);
  border-radius: 12px;
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body video {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    embeds: `body .file-embed {
  background-color: rgb(68, 68, 68);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .footnotes {
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

body .transclude {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body .transclude-inner {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 112, 112);
  text-decoration: line-through 2px rgb(247, 69, 69);
  text-decoration-color: rgb(247, 69, 69);
}

body input[type=checkbox] {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  transition: 0.3s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='*'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='-'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='/'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='>'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='?'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='I'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='S'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='b'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='c'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='d'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='f'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='i'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='k'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='l'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='p'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='u'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body li.task-list-item[data-task='w'] {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(90, 100, 248);
  border-left-color: rgb(90, 100, 248);
  border-right-color: rgb(90, 100, 248);
  border-top-color: rgb(90, 100, 248);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout[data-callout="abstract"] {
  --callout-color: 69, 206, 247;
  background-color: rgba(69, 206, 247, 0.1);
  border-bottom-color: rgb(69, 206, 247);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 206, 247);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(69, 206, 247);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(69, 206, 247);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 247, 69, 69;
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 247, 69, 69;
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 170, 69, 247;
  background-color: rgba(170, 69, 247, 0.1);
  border-bottom-color: rgb(170, 69, 247);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(170, 69, 247);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(170, 69, 247);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(170, 69, 247);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 247, 69, 69;
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 69, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 69, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 90, 100, 248;
  background-color: rgba(90, 100, 248, 0.1);
  border-bottom-color: rgb(90, 100, 248);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(90, 100, 248);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(90, 100, 248);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(90, 100, 248);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 90, 100, 248;
  background-color: rgba(90, 100, 248, 0.1);
  border-bottom-color: rgb(90, 100, 248);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(90, 100, 248);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(90, 100, 248);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(90, 100, 248);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 247, 138, 69;
  background-color: rgba(247, 138, 69, 0.1);
  border-bottom-color: rgb(247, 138, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 138, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 138, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 138, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 51, 255, 51;
  background-color: rgba(51, 255, 51, 0.1);
  border-bottom-color: rgb(51, 255, 51);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(51, 255, 51);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(51, 255, 51);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(51, 255, 51);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 69, 206, 247;
  background-color: rgba(69, 206, 247, 0.1);
  border-bottom-color: rgb(69, 206, 247);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(69, 206, 247);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(69, 206, 247);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(69, 206, 247);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 90, 100, 248;
  background-color: rgba(90, 100, 248, 0.1);
  border-bottom-color: rgb(90, 100, 248);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(90, 100, 248);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(90, 100, 248);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(90, 100, 248);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 247, 138, 69;
  background-color: rgba(247, 138, 69, 0.1);
  border-bottom-color: rgb(247, 138, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(247, 138, 69);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(247, 138, 69);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(247, 138, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(117, 117, 117);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(179, 179, 179);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(117, 117, 117);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(179, 179, 179);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(85, 85, 85);
  color: rgb(179, 179, 179);
  font-weight: 500;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(85, 85, 85);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(85, 85, 85);
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(117, 117, 117);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(117, 117, 117);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(179, 179, 179);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(85, 85, 85);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(179, 179, 179);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(247, 69, 69, 0.1);
  border-bottom-color: rgba(247, 69, 69, 0.15);
  border-left-color: rgba(247, 69, 69, 0.15);
  border-right-color: rgba(247, 69, 69, 0.15);
  border-top-color: rgba(247, 69, 69, 0.15);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(247, 69, 69);
}

body h1 {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h2 {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h2.page-title, h2.page-title a {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h3 {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h4 {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h5 {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h6 {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body hr {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-right-style: dashed;
}`,
    scrollbars: `body .callout {
  --callout-color: 90, 100, 248;
  border-bottom-color: rgb(90, 100, 248);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(90, 100, 248);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(90, 100, 248);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(90, 100, 248);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 32, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 32, 32);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(68, 68, 68);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(179, 179, 179);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
}`,
    footer: `body footer {
  background-color: rgb(85, 85, 85);
  border-bottom-color: rgb(117, 117, 117);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-right-width: 1px;
  border-top-color: rgb(117, 117, 117);
  border-top-right-radius: 8px;
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body li.section-li > .section .meta {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body ul.section-ul {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .breadcrumb-element p {
  color: rgb(112, 112, 112);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
}

body .metadata {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(85, 85, 85);
}

body .page-header h2.page-title {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(179, 179, 179);
  text-decoration: underline dotted rgb(179, 179, 179);
}

body details {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body input[type=text] {
  border-bottom-color: rgb(247, 69, 69);
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(247, 69, 69);
  border-top-color: rgb(247, 69, 69);
  color: rgb(247, 69, 69);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(247, 69, 69);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(247, 69, 69);
  border-right-color: rgb(247, 69, 69);
  border-top-color: rgb(247, 69, 69);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(247, 69, 69);
  font-family: Monaspace, monospace;
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

body progress {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body sub {
  color: rgb(179, 179, 179);
}

body summary {
  color: rgb(179, 179, 179);
  font-weight: 500;
}

body sup {
  color: rgb(179, 179, 179);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 5;
  --accent-l: 56%;
  --accent-s: 90%;
  --ancestor-editor-color: #222222;
  --aside-background: transparent;
  --aside-background-hover: rgba(0, 0, 0, 0.075);
  --aside-border-color: #d3d3d3;
  --aside-text-color: #6b6b6b;
  --background-modifier-active-hover: rgba(244, 59, 42, 0.15);
  --background-modifier-border: #d3d3d3;
  --background-modifier-border-focus: #dddddd;
  --background-modifier-border-hover: #c7c7c7;
  --background-modifier-error: #FF5E23;
  --background-modifier-error-hover: #FF5E23;
  --background-modifier-error-rgb: 255, 94, 35;
  --background-modifier-form-field: #f8f5f3;
  --background-modifier-form-field-hover: #f8f5f3;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #689C2B;
  --background-modifier-success-rgb: 104, 156, 43;
  --background-primary: #f8f5f3;
  --background-primary-alt: #e4e1de;
  --background-primary-pre-alt: #f0ece9;
  --background-scondary-alt: #6b6b6b;
  --background-secondary: #e9e9e9;
  --background-secondary-alt: #f0ece9;
  --bases-cards-background: #f8f5f3;
  --bases-cards-cover-background: #e4e1de;
  --bases-cards-shadow: 0 0 0 1px #d3d3d3;
  --bases-cards-shadow-hover: 0 0 0 1px #c7c7c7;
  --bases-embed-border-color: #d3d3d3;
  --bases-group-heading-property-color: #6b6b6b;
  --bases-table-border-color: #d3d3d3;
  --bases-table-cell-background-active: #f8f5f3;
  --bases-table-cell-background-disabled: #e4e1de;
  --bases-table-cell-background-selected: rgba(244, 59, 42, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #dddddd;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(246, 73, 60);
  --bases-table-group-background: #e4e1de;
  --bases-table-header-background: #f8f5f3;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075);
  --bases-table-header-color: #6b6b6b;
  --bases-table-summary-background: #f8f5f3;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075);
  --bb-border: 1px solid #d3d3d3;
  --bb-border-alt: 1px solid #d3d3d3;
  --bb-border-dashed: 1px dashed #d3d3d3;
  --bb-border-high-contrast: 1px solid #6b6b6b;
  --bb-border-transparent: 1px solid transparent;
  --bb-shadow: -33px 24px 64px -8px rgba(244, 59, 42, 0.1), 33px 12px 64px -8px rgba(116, 229, 251, 0.1);
  --blockquote-border-color: rgb(246, 73, 60);
  --blur-background: color-mix(in srgb, #f8f5f3 65%, transparent) linear-gradient(#f8f5f3, color-mix(in srgb, #f8f5f3 65%, transparent));
  --callout-bug: 255, 94, 35;
  --callout-cite: 87, 61, 132;
  --callout-default: 112, 180, 249;
  --callout-error: 255, 94, 35;
  --callout-example: 116, 76, 180;
  --callout-fail: 255, 94, 35;
  --callout-important: 66, 163, 173;
  --callout-info: 112, 180, 249;
  --callout-question: 253, 145, 44;
  --callout-success: 104, 156, 43;
  --callout-summary: 66, 163, 173;
  --callout-tip: 66, 163, 173;
  --callout-todo: 112, 180, 249;
  --callout-warning: 253, 145, 44;
  --canvas-background: #f8f5f3;
  --canvas-card-label-color: #b3b3b3;
  --canvas-color: 20, 20, 20;
  --canvas-color-1: 255, 94, 35;
  --canvas-color-2: 253, 145, 44;
  --canvas-color-3: 252, 220, 55;
  --canvas-color-4: 104, 156, 43;
  --canvas-color-5: 66, 163, 173;
  --canvas-color-6: 116, 76, 180;
  --canvas-dot-pattern: #b3b3b3;
  --checkbox-border-color: #b3b3b3;
  --checkbox-border-color-hover: #6b6b6b;
  --checkbox-color: rgb(246, 73, 60);
  --checkbox-color-hover: rgb(248, 84, 79);
  --checkbox-marker-color: #f8f5f3;
  --checklist-done-color: #6b6b6b;
  --code-background: #e4e1de;
  --code-border-color: #d3d3d3;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: #b3b3b3;
  --code-function: #FCDC37;
  --code-important: #FD912C;
  --code-keyword: #f9a7e8;
  --code-normal: #6b6b6b;
  --code-operator: #FF5E23;
  --code-property: #42A3AD;
  --code-punctuation: #6b6b6b;
  --code-string: #689C2B;
  --code-tag: #FF5E23;
  --code-value: #744CB4;
  --collapse-icon-color: #b3b3b3;
  --collapse-icon-color-collapsed: rgb(244, 59, 42);
  --color-accent: rgb(244, 59, 42);
  --color-accent-1: rgb(246, 73, 60);
  --color-accent-2: rgb(248, 84, 79);
  --color-accent-3: hsl(-170,
        139.5%,
        72.24%);
  --color-accent-hsl: 5, 90%, 56%;
  --color-accent-rgb: 255, 94, 35;
  --color-base-00: #f8f5f3;
  --color-base-05: #f0ece9;
  --color-base-10: #e4e1de;
  --color-base-100: #000;
  --color-base-20: #e9e9e9;
  --color-base-25: #d3d3d3;
  --color-base-30: #d3d3d3;
  --color-base-35: #c7c7c7;
  --color-base-40: #dddddd;
  --color-base-50: #b3b3b3;
  --color-base-60: #6b6b6b;
  --color-base-70: #222222;
  --color-blue: #70B4F9;
  --color-blue-hsl: 210, 92%, 71%;
  --color-blue-rgb: 112, 180, 249;
  --color-cyan: #42A3AD;
  --color-cyan-hsl: 186, 45%, 47%;
  --color-cyan-rgb: 66, 163, 173;
  --color-green: #689C2B;
  --color-green-hsl: 88, 57%, 39%;
  --color-green-rgb: 104, 156, 43;
  --color-orange: #FD912C;
  --color-orange-hsl: 29, 98%, 58%;
  --color-orange-rgb: 253, 145, 44;
  --color-pink: #f9a7e8;
  --color-pink-hsl: 313, 95%, 68%;
  --color-pink-rgb: 251, 94, 216, 1;
  --color-purple: #744CB4;
  --color-purple-hsl: 263, 41%, 50%;
  --color-purple-rgb: 116, 76, 180;
  --color-red: #FF5E23;
  --color-red-hsl: 16, 100%, 57%;
  --color-red-rgb: 255, 94, 35;
  --color-yellow: #FCDC37;
  --color-yellow-hsl: 50, 97%, 60%;
  --color-yellow-rgb: 252, 220, 55;
  --divider-color: #d3d3d3;
  --divider-color-hover: rgb(246, 73, 60);
  --dropdown-background: #f8f5f3;
  --dropdown-background-hover: #e4e1de;
  --embed-block-shadow-hover: 0 0 0 1px #d3d3d3,
        inset 0 0 0 1px #d3d3d3;
  --embed-border-start: 2px solid rgb(246, 73, 60);
  --file-header-background: #f8f5f3;
  --file-header-background-focused: #f8f5f3;
  --file-header-font: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-size: 14px;
  --file-margins: 32px;
  --flair-background: #f8f5f3;
  --font-interface: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Aspekta", sans-serif;
  --font-monospace: "Monaspace", monospace;
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --footnote-divider-color: #d3d3d3;
  --footnote-id-color: #6b6b6b;
  --footnote-id-color-no-occurrences: #b3b3b3;
  --footnote-input-background-active: rgba(0, 0, 0, 0.075);
  --graph-line: #c7c7c7;
  --graph-node: #6b6b6b;
  --graph-node-attachment: rgb(246, 73, 60);
  --graph-node-focused: #dddddd;
  --graph-node-tag: rgb(244, 59, 42);
  --graph-node-unresolved: #b3b3b3;
  --h1-color: #000;
  --h1-size: 3.5em;
  --h1-weight: 900;
  --h2-size: 1.842em;
  --h2-weight: 800;
  --h3-size: 1.3572em;
  --h3-weight: 700;
  --h4-size: 1.250em;
  --h4-weight: 600;
  --h5-size: 1em;
  --h5-weight: 600;
  --h6-size: 0.7368em;
  --h6-weight: 500;
  --heading-formatting: #b3b3b3;
  --hr-color: #d3d3d3;
  --icon-color: #6b6b6b;
  --icon-color-active: rgb(244, 59, 42);
  --icon-color-hover: #6b6b6b;
  --inline-title-color: #000;
  --inline-title-size: clamp(2.5rem, 8vw - 4rem, 5rem);
  --inline-title-weight: 900;
  --input-date-separator: #b3b3b3;
  --input-placeholder-color: #b3b3b3;
  --interactive-accent: rgb(246, 73, 60);
  --interactive-accent-hover: rgb(248, 84, 79);
  --interactive-accent-hsl: 5, 90%, 56%;
  --interactive-hover: #e4e1de;
  --interactive-normal: #f8f5f3;
  --link-color: rgb(244, 59, 42);
  --link-color-hover: rgb(248, 84, 79);
  --link-external-color: rgb(244, 59, 42);
  --link-external-color-hover: rgb(248, 84, 79);
  --link-unresolved-color: rgb(244, 59, 42);
  --link-unresolved-decoration-color: rgba(244, 59, 42, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #b3b3b3;
  --list-marker-color-collapsed: rgb(244, 59, 42);
  --list-marker-color-hover: #6b6b6b;
  --menu-background: #e9e9e9;
  --menu-border-color: #c7c7c7;
  --menu-shadow: rgb(0 0 0 / 4%) 0px 3px 5px;
  --metadata-border-color: #d3d3d3;
  --metadata-divider-color: #d3d3d3;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075);
  --metadata-input-font: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075);
  --metadata-label-font: '??', "Aspekta", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #6b6b6b;
  --metadata-label-text-color-hover: #6b6b6b;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #dddddd;
  --metadata-property-box-shadow-hover: 0 0 0 1px #c7c7c7;
  --metadata-sidebar-input-font-size: 14px;
  --metadata-sidebar-label-font-size: 14px;
  --modal-background: #f8f5f3;
  --modal-border-color: #dddddd;
  --nav-collapse-icon-color: #b3b3b3;
  --nav-collapse-icon-color-collapsed: #b3b3b3;
  --nav-heading-color-collapsed: #b3b3b3;
  --nav-heading-color-collapsed-hover: #6b6b6b;
  --nav-item-background-active: rgba(0, 0, 0, 0.075);
  --nav-item-background-hover: rgba(0, 0, 0, 0.075);
  --nav-item-background-selected: rgba(244, 59, 42, 0.15);
  --nav-item-color: #6b6b6b;
  --nav-item-color-highlighted: rgb(244, 59, 42);
  --nav-item-size: 14px;
  --nav-tag-color: #b3b3b3;
  --nav-tag-color-active: #6b6b6b;
  --nav-tag-color-hover: #6b6b6b;
  --o-h1-color: #d3d3d3;
  --o-h2-color: #d3d3d3;
  --o-h3-color: #d3d3d3;
  --o-h4-color: #d3d3d3;
  --o-h5-color: #d3d3d3;
  --o-h6-color: #d3d3d3;
  --pdf-background: #f8f5f3;
  --pdf-page-background: #f8f5f3;
  --pdf-sidebar-background: #f8f5f3;
  --pill-border-color: #d3d3d3;
  --pill-border-color-hover: #c7c7c7;
  --pill-color: #6b6b6b;
  --pill-color-remove: #b3b3b3;
  --pill-color-remove-hover: rgb(244, 59, 42);
  --prompt-background: #f8f5f3;
  --prompt-border-color: #dddddd;
  --raised-background: color-mix(in srgb, #f8f5f3 65%, transparent) linear-gradient(#f8f5f3, color-mix(in srgb, #f8f5f3 65%, transparent));
  --ribbon-background: #e9e9e9;
  --ribbon-background-collapsed: #f8f5f3;
  --scrollbar-active-thumb-bg: rgba(244, 59, 42, 0.2);
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.05);
  --search-clear-button-color: #6b6b6b;
  --search-icon-color: #6b6b6b;
  --search-result-background: #f8f5f3;
  --setting-group-heading-size: 16px;
  --setting-items-background: #e4e1de;
  --setting-items-border-color: #d3d3d3;
  --shadow-l: rgb(149 157 165 / 20%) 0px 8px 24px;
  --shadow-lm-only: rgb(0 0 0 / 10%) 0px 10px 15px -3px, rgb(0 0 0 / 5%) 0px 4px 6px -2px;
  --shadow-s: rgb(0 0 0 / 4%) 0px 3px 5px;
  --slider-thumb-border-color: #c7c7c7;
  --slider-thumb-radius: 50%;
  --slider-track-background: #d3d3d3;
  --status-bar-background: #e9e9e9;
  --status-bar-border-color: #d3d3d3;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #6b6b6b;
  --suggestion-background: #f8f5f3;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #FF5E23;
  --sync-avatar-color-2: #FD912C;
  --sync-avatar-color-3: #FCDC37;
  --sync-avatar-color-4: #689C2B;
  --sync-avatar-color-5: #42A3AD;
  --sync-avatar-color-6: #70B4F9;
  --sync-avatar-color-7: #744CB4;
  --sync-avatar-color-8: #f9a7e8;
  --tab-background-active: #f8f5f3;
  --tab-container-background: #e9e9e9;
  --tab-divider-color: #c7c7c7;
  --tab-font-size: 14px;
  --tab-outline-color: #d3d3d3;
  --tab-stacked-font-size: 14px;
  --tab-switcher-background: #e9e9e9;
  --tab-switcher-menubar-background: linear-gradient(to top, #e9e9e9, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(244, 59, 42);
  --tab-text-color: #b3b3b3;
  --tab-text-color-active: #6b6b6b;
  --tab-text-color-focused: #6b6b6b;
  --tab-text-color-focused-active: #6b6b6b;
  --tab-text-color-focused-highlighted: rgb(244, 59, 42);
  --table-add-button-border-color: #d3d3d3;
  --table-border-color: #d3d3d3;
  --table-drag-handle-background-active: rgb(246, 73, 60);
  --table-drag-handle-color: #b3b3b3;
  --table-drag-handle-color-active: #000;
  --table-header-border-color: #d3d3d3;
  --table-selection: rgba(244, 59, 42, 0.1);
  --table-selection-border-color: rgb(246, 73, 60);
  --tag-background: rgba(244, 59, 42, 0.1);
  --tag-background-hover: rgba(244, 59, 42, 0.2);
  --tag-border-color: rgba(244, 59, 42, 0.15);
  --tag-border-color-hover: rgba(244, 59, 42, 0.15);
  --tag-color: rgb(244, 59, 42);
  --tag-color-hover: rgb(244, 59, 42);
  --text-accent: rgb(244, 59, 42);
  --text-accent-hover: rgb(248, 84, 79);
  --text-cite: 87, 161, 132;
  --text-error: #FF5E23;
  --text-faint: #b3b3b3;
  --text-muted: #6b6b6b;
  --text-on-accent: #000;
  --text-on-button: #f8f5f3;
  --text-selection: rgba(244, 59, 42, 0.2);
  --text-success: #689C2B;
  --text-warning: #FD912C;
  --titlebar-background: #e9e9e9;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: #d3d3d3;
  --titlebar-text-color: #6b6b6b;
  --transition-duration: 700ms;
  --transition-duration-short: 350ms;
  --transition-ease: ease;
  --transition-props: background 700ms, 
                        border 700ms, 
                        color 700ms;
  --vault-name-color: #222222;
  --vault-name-font-size: 14px;
  --vault-name-font-weight: 500;
  --vault-profile-font-size: 14px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 245, 243);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(211, 211, 211);
  border-right-style: dashed;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgb(211, 211, 211);
}

body div#quartz-root {
  background-color: rgb(248, 245, 243);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(255, 94, 35, 0.2);
  color: rgb(244, 59, 42);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(244, 59, 42) none 0px;
  text-decoration: rgb(244, 59, 42);
  text-decoration-color: rgb(244, 59, 42);
}

body del {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body p {
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(107, 107, 107) none 0px;
  text-decoration: rgb(107, 107, 107);
  text-decoration-color: rgb(107, 107, 107);
}`,
    links: `body a.external, footer a {
  color: rgb(244, 59, 42);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(244, 59, 42) none 0px;
  text-decoration: underline rgb(244, 59, 42);
  text-decoration-color: rgb(244, 59, 42);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(244, 59, 42);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(244, 59, 42) none 0px;
  text-decoration: rgb(244, 59, 42);
  text-decoration-color: rgb(244, 59, 42);
  transition: 0.7s;
}

body a.internal.broken {
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(107, 107, 107) none 0px;
  text-decoration: rgb(107, 107, 107);
  text-decoration-color: rgb(107, 107, 107);
  transition: 0.7s;
}`,
    lists: `body dt {
  font-weight: 500;
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(179, 179, 179);
  text-decoration: rgb(179, 179, 179);
}

body blockquote {
  background-color: rgb(233, 233, 233);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `body table {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 186.109px;
}

body td {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-width: 0px;
  font-weight: 500;
}

body th {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: 8px;
}`,
    code: `body code {
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(244, 59, 42);
  border-right-color: rgb(244, 59, 42);
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(244, 59, 42);
  font-family: Monaspace, monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

body pre > code > [data-line] {
  border-left-color: rgb(252, 220, 55);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(252, 220, 55);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(252, 220, 55);
  border-left-color: rgb(252, 220, 55);
  border-right-color: rgb(252, 220, 55);
  border-top-color: rgb(252, 220, 55);
}

body pre > code, pre:has(> code) {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgb(244, 59, 42);
  border-left-width: 1px;
  border-right-color: rgb(244, 59, 42);
  border-right-width: 1px;
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
}`,
    images: `body figcaption {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    embeds: `body .file-embed {
  background-color: rgb(228, 225, 222);
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
}

body .transclude {
  border-left-color: rgb(246, 74, 61);
}

body .transclude-inner {
  border-left-color: rgb(246, 74, 61);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(179, 179, 179);
  text-decoration: line-through 2px rgb(244, 59, 42);
  text-decoration-color: rgb(244, 59, 42);
}

body input[type=checkbox] {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  transition: 0.3s;
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(112, 180, 249);
  border-left-color: rgb(112, 180, 249);
  border-right-color: rgb(112, 180, 249);
  border-top-color: rgb(112, 180, 249);
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout[data-callout="abstract"] {
  --callout-color: 66, 163, 173;
  background-color: rgba(66, 163, 173, 0.1);
  border-bottom-color: rgb(66, 163, 173);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(66, 163, 173);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(66, 163, 173);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(66, 163, 173);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  --callout-color: 255, 94, 35;
  background-color: rgba(255, 94, 35, 0.1);
  border-bottom-color: rgb(255, 94, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 94, 35);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(255, 94, 35);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(255, 94, 35);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  --callout-color: 255, 94, 35;
  background-color: rgba(255, 94, 35, 0.1);
  border-bottom-color: rgb(255, 94, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 94, 35);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(255, 94, 35);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(255, 94, 35);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 116, 76, 180;
  background-color: rgba(116, 76, 180, 0.1);
  border-bottom-color: rgb(116, 76, 180);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(116, 76, 180);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(116, 76, 180);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(116, 76, 180);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  --callout-color: 255, 94, 35;
  background-color: rgba(255, 94, 35, 0.1);
  border-bottom-color: rgb(255, 94, 35);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 94, 35);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(255, 94, 35);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(255, 94, 35);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 112, 180, 249;
  background-color: rgba(112, 180, 249, 0.1);
  border-bottom-color: rgb(112, 180, 249);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 180, 249);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(112, 180, 249);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(112, 180, 249);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  --callout-color: 112, 180, 249;
  background-color: rgba(112, 180, 249, 0.1);
  border-bottom-color: rgb(112, 180, 249);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 180, 249);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(112, 180, 249);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(112, 180, 249);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 253, 145, 44;
  background-color: rgba(253, 145, 44, 0.1);
  border-bottom-color: rgb(253, 145, 44);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(253, 145, 44);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(253, 145, 44);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(253, 145, 44);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(158, 158, 158);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(158, 158, 158);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 104, 156, 43;
  background-color: rgba(104, 156, 43, 0.1);
  border-bottom-color: rgb(104, 156, 43);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(104, 156, 43);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(104, 156, 43);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(104, 156, 43);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 66, 163, 173;
  background-color: rgba(66, 163, 173, 0.1);
  border-bottom-color: rgb(66, 163, 173);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(66, 163, 173);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(66, 163, 173);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(66, 163, 173);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 112, 180, 249;
  background-color: rgba(112, 180, 249, 0.1);
  border-bottom-color: rgb(112, 180, 249);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 180, 249);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(112, 180, 249);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(112, 180, 249);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  --callout-color: 253, 145, 44;
  background-color: rgba(253, 145, 44, 0.1);
  border-bottom-color: rgb(253, 145, 44);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(253, 145, 44);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(253, 145, 44);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(253, 145, 44);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(248, 245, 243);
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(240, 236, 233);
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 211, 211);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(211, 211, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(233, 233, 233);
  font-weight: 500;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(248, 245, 243);
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(211, 211, 211);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(211, 211, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(233, 233, 233);
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 211, 211);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(211, 211, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(233, 233, 233);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(244, 59, 42, 0.1);
  border-bottom-color: rgba(244, 59, 42, 0.15);
  border-left-color: rgba(244, 59, 42, 0.15);
  border-right-color: rgba(244, 59, 42, 0.15);
  border-top-color: rgba(244, 59, 42, 0.15);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(244, 59, 42);
}

body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h2 {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h3 {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h4 {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h5 {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body h6 {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 0px 0px 1px;
}

body hr {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-right-style: dashed;
}`,
    scrollbars: `body .callout {
  --callout-color: 112, 180, 249;
  border-bottom-color: rgb(112, 180, 249);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-left-color: rgb(112, 180, 249);
  border-left-style: dashed;
  border-left-width: 1px;
  border-right-color: rgb(112, 180, 249);
  border-right-style: dashed;
  border-right-width: 1px;
  border-top-color: rgb(112, 180, 249);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: dashed;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(248, 245, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 243);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 245, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 243);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 245, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 243);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 245, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 243);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 245, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 243);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 245, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 245, 243);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(107, 107, 107);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(107, 107, 107);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(107, 107, 107);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(228, 225, 222);
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 0px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-right-color: rgb(211, 211, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-left-radius: 0px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(34, 34, 34);
}`,
    footer: `body footer {
  background-color: rgb(233, 233, 233);
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-right-radius: 8px;
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(107, 107, 107);
  text-decoration: rgb(107, 107, 107);
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(107, 107, 107);
  text-decoration: rgb(107, 107, 107);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(34, 34, 34);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(34, 34, 34);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(107, 107, 107);
  text-decoration: rgb(107, 107, 107);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  color: rgb(107, 107, 107);
}

body .breadcrumb-element p {
  color: rgb(179, 179, 179);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  border-bottom-color: rgb(211, 211, 211);
  border-left-color: rgb(211, 211, 211);
  border-right-color: rgb(211, 211, 211);
  border-top-color: rgb(211, 211, 211);
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(107, 107, 107);
  border-left-color: rgb(107, 107, 107);
  border-right-color: rgb(107, 107, 107);
  border-top-color: rgb(107, 107, 107);
  color: rgb(107, 107, 107);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(233, 233, 233);
}

body .page-header h2.page-title {
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  border-bottom-color: rgb(244, 59, 42);
  border-left-color: rgb(244, 59, 42);
  border-right-color: rgb(244, 59, 42);
  border-top-color: rgb(244, 59, 42);
  color: rgb(244, 59, 42);
  font-family: "??", Aspekta, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(244, 59, 42);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(244, 59, 42);
  border-right-color: rgb(244, 59, 42);
  border-top-color: rgb(244, 59, 42);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(244, 59, 42);
  font-family: Monaspace, monospace;
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

body summary {
  font-weight: 500;
}`,
  },
};
