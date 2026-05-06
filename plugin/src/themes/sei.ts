import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sei",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "sei",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--divider-color, rgb(255 255 255 / 5%));
  --background-modifier-border-focus: hsla(var(--interactive-accent-hsl), 0.5);
  --background-modifier-cover: rgb(0 0 0 / 30%);
  --background-modifier-error: var(--color-red, hsl(355deg 50% 45%));
  --background-modifier-error-hover: var(--color-red, hsl(355deg 50% 55%));
  --background-modifier-error-rgb: var(--color-red-rgb, 243, 139, 168);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.05);
  --background-modifier-message: var(--background-secondary, hsl(220deg 2% 13%));
  --background-modifier-success: var(--color-green, #A6E3A1);
  --background-modifier-success-rgb: var(--color-green-rgb, 166, 227, 161);
  --background-primary: var(--color-base-00, hsl(220deg 2% 15%));
  --background-primary-alt: var(--color-base-10, hsl(220deg 2% 13%));
  --background-secondary: var(--color-base-20, hsl(220deg 2% 13%));
  --background-secondary-alt: var(--color-base-30, hsl(220deg 2% 15%));
  --background-table-rows: hsl(220deg 2% 13%);
  --bases-cards-background: var(--background-primary, hsl(220deg 2% 15%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(220deg 2% 13%));
  --bases-cards-radius: var(--radius-m, 6px);
  --bases-embed-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --bases-table-border-color: var(--table-border-color, rgb(255 255 255 / 5%));
  --bases-table-cell-background-active: var(--background-primary, hsl(220deg 2% 15%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(220deg 2% 13%));
  --bases-table-group-background: var(--background-primary-alt, hsl(220deg 2% 13%));
  --bases-table-header-background: var(--background-primary, hsl(220deg 2% 15%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
  --bases-table-summary-background: var(--background-primary, hsl(220deg 2% 15%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
  --blockquote-background-color: var(--background-secondary, hsl(220deg 2% 13%));
  --blockquote-border-color: var(--color-base-50, #666666);
  --button-radius: var(--input-radius, 6px);
  --callout-bug: var(--color-red-rgb, 243, 139, 168);
  --callout-default: var(--color-blue-rgb, 116, 199, 236);
  --callout-error: var(--color-red-rgb, 243, 139, 168);
  --callout-example: var(--color-purple-rgb, 169, 180, 250);
  --callout-fail: var(--color-red-rgb, 243, 139, 168);
  --callout-important: var(--color-cyan-rgb, 148, 226, 213);
  --callout-info: var(--color-blue-rgb, 116, 199, 236);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--color-orange-rgb, 250, 179, 135);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--color-green-rgb, 166, 227, 161);
  --callout-summary: var(--color-cyan-rgb, 148, 226, 213);
  --callout-tip: var(--color-cyan-rgb, 148, 226, 213);
  --callout-todo: var(--color-blue-rgb, 116, 199, 236);
  --callout-warning: var(--color-orange-rgb, 250, 179, 135);
  --canvas-background: var(--background-primary, hsl(220deg 2% 15%));
  --canvas-color-1: var(--color-red-rgb, 243, 139, 168);
  --canvas-color-2: var(--color-orange-rgb, 250, 179, 135);
  --canvas-color-3: var(--color-yellow-rgb, 249, 226, 175);
  --canvas-color-4: var(--color-green-rgb, 166, 227, 161);
  --canvas-color-5: var(--color-cyan-rgb, 148, 226, 213);
  --canvas-color-6: var(--color-purple-rgb, 169, 180, 250);
  --caret-color: var(--text-accent, hsl(255, 89.76%, 75.9%));
  --checkbox-marker-color: var(--background-primary, hsl(220deg 2% 15%));
  --checkbox-size: var(--font-text-size, 14px);
  --code-background: var(--background-primary-alt, hsl(220deg 2% 13%));
  --code-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
  --code-comment: var(--text-faint, #5C6370);
  --code-function: var(--color-yellow, #E5C07B);
  --code-important: var(--color-orange, #D19A66);
  --code-keyword: var(--color-pink, #E06C75);
  --code-normal: var(--text-normal, #ABB2BF);
  --code-operator: var(--color-red, #BE5046);
  --code-property: var(--color-cyan, #56B6C2);
  --code-punctuation: var(--text-muted, #ABB2BF);
  --code-string: var(--color-green, #98C379);
  --code-tag: var(--color-red, #61AFEF);
  --code-value: var(--color-purple, #C678DD);
  --color-blue: #74C7EC;
  --color-blue-rgb: 116, 199, 236;
  --color-cyan: #94E2D5;
  --color-cyan-rgb: 148, 226, 213;
  --color-green: #A6E3A1;
  --color-green-rgb: 166, 227, 161;
  --color-orange: #FAB387;
  --color-orange-rgb: 250, 179, 135;
  --color-pink: #F5C2E7;
  --color-pink-rgb: 245, 194, 231;
  --color-purple: #a9b4fa;
  --color-purple-rgb: 169, 180, 250;
  --color-red: #F38BA8;
  --color-red-rgb: 243, 139, 168;
  --color-yellow: #F9E2AF;
  --color-yellow-rgb: 249, 226, 175;
  --dialog-width: 500px;
  --divider-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --divider-color-hover: var(--text-normal, #dadada);
  --dropdown-background: var(--interactive-normal, #3f3f3f);
  --dropdown-background-size: var(--icon-s, 16px);
  --file-header-background: var(--background-primary, hsl(220deg 2% 15%));
  --file-header-background-focused: var(--background-primary, hsl(220deg 2% 15%));
  --file-line-width: 768px;
  --flair-background: var(--interactive-normal, #3f3f3f);
  --footnote-divider-color: var(--metadata-divider-color, rgb(255 255 255 / 5%));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.05));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --graph-node-attachment: var(--color-yellow, #F9E2AF);
  --graph-node-tag: var(--color-green, #A6E3A1);
  --h1-color: rgb(166, 227, 161);
  --h1-size: 1.802em;
  --h2-color: rgb(148, 226, 213);
  --h2-size: 1.602em;
  --h2-weight: 600;
  --h3-color: rgb(137, 220, 235);
  --h3-size: 1.424em;
  --h3-weight: 600;
  --h4-color: rgb(116, 199, 236);
  --h4-size: 1.266em;
  --h4-weight: 600;
  --h5-color: rgb(135, 176, 249);
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-color: rgb(135, 176, 249);
  --h6-line-height: var(--line-height-normal, 1.6);
  --header-height: 44px;
  --highlight: var(--text-highlight-bg, rgba(var(--color-orange-rgb), 0.25));
  --hr-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --icon-xl: 24px;
  --inline-title-color: var(--h1-color, rgb(166, 227, 161));
  --inline-title-size: var(--h1-size, 1.802em);
  --input-radius: var(--radius-m, 6px);
  --input-shadow: 0px 0px 0px 1px rgb(0 0 0 / 10%), 0 0.5px 0 0 rgb(255 255 255 / 10%) inset;
  --interactive-normal: var(--color-base-35, #3f3f3f);
  --labeled-nav-top-margin: var(--header-height, 44px);
  --light: var(--background-primary, var(--color-base-00, hsl(220deg 2% 15%)));
  --lightgray: var(--background-secondary, var(--color-base-20, hsl(220deg 2% 13%)));
  --line-height-normal: 1.6;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-spacing: 0.1em;
  --menu-background: var(--background-secondary, hsl(220deg 2% 13%));
  --menu-radius: var(--radius-m, 6px);
  --metadata-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --metadata-divider-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
  --metadata-padding: var(--size-4-2, 0) 0;
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
  --metadata-property-radius: var(--input-radius, 6px);
  --metadata-property-radius-focus: var(--input-radius, 6px);
  --metadata-property-radius-hover: var(--input-radius, 6px);
  --modal-background: var(--background-secondary, hsl(220deg 2% 13%));
  --modal-radius: var(--radius-l, 10px);
  --nav-indentation-guide-color: rgba(var(--mono-rgb-100), 0.08);
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
  --nav-item-color-active: var(--text-muted, #b3b3b3);
  --nav-item-color-hover: var(--text-muted, #b3b3b3);
  --nav-item-color-selected: var(--text-muted, #b3b3b3);
  --nav-item-padding: var(--size-4-1) var(--size-4-2) var(--size-4-1) var(--size-4-6, 5px 8px 5px 24px);
  --nav-item-parent-padding: var(--nav-item-padding, 5px 8px 5px 24px);
  --pdf-background: var(--background-primary, hsl(220deg 2% 15%));
  --pdf-page-background: var(--background-primary, hsl(220deg 2% 15%));
  --pdf-sidebar-background: var(--background-primary, hsl(220deg 2% 15%));
  --pill-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --prompt-background: var(--background-primary, hsl(220deg 2% 15%));
  --prompt-border-color: var(--modal-border-color, rgb(255 255 255 / 10%));
  --radius-l: 10px;
  --radius-m: 6px;
  --raised-background: var(--blur-background, color-mix(in srgb, #3f3f3f 65%, transparent) linear-gradient(#3f3f3f, color-mix(in srgb, #3f3f3f 65%, transparent)));
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 4px 8px);
  --ribbon-width: 56px;
  --scrollbar-radius: var(--radius-l, 10px);
  --search-icon-size: var(--icon-s, 16px);
  --search-result-background: var(--background-primary, hsl(220deg 2% 15%));
  --setting-items-background: var(--background-primary-alt, hsl(220deg 2% 13%));
  --setting-items-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --setting-items-radius: var(--radius-l, 10px);
  --shiki-code-background: var(--code-background, hsl(220deg 2% 13%));
  --shiki-code-function: var(--color-green, #A6E3A1);
  --shiki-code-important: var(--color-orange, #FAB387);
  --shiki-code-keyword: var(--color-pink, #F5C2E7);
  --shiki-code-property: var(--color-cyan, #94E2D5);
  --shiki-code-string: var(--color-yellow, #F9E2AF);
  --shiki-code-value: var(--color-purple, #a9b4fa);
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --shiki-tooltip-background: var(--background-modifier-message, hsl(220deg 2% 13%));
  --slider-thumb-border-color: var(--color-base-35, #3f3f3f);
  --slider-thumb-border-width: var(--border-width, 4px);
  --slider-track-background: var(--color-base-40, #555555);
  --slider-track-height: 4px;
  --status-bar-background: var(--background-secondary, hsl(220deg 2% 13%));
  --status-bar-border-color: var(--divider-color, rgb(255 255 255 / 5%));
  --status-bar-radius: var(--radius-m, 6px 0 0 0) 0 0 0;
  --status-bar-text-color: rgb(from var(--text-muted) r g b / 80%);
  --suggestion-background: var(--background-primary, hsl(220deg 2% 15%));
  --sync-avatar-color-1: var(--color-red, #F38BA8);
  --sync-avatar-color-2: var(--color-orange, #FAB387);
  --sync-avatar-color-3: var(--color-yellow, #F9E2AF);
  --sync-avatar-color-4: var(--color-green, #A6E3A1);
  --sync-avatar-color-5: var(--color-cyan, #94E2D5);
  --sync-avatar-color-6: var(--color-blue, #74C7EC);
  --sync-avatar-color-7: var(--color-purple, #a9b4fa);
  --sync-avatar-color-8: var(--color-pink, #F5C2E7);
  --tab-background-active: var(--background-primary-alt, hsl(220deg 2% 13%));
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-max-width: var(--tab-width, 200px);
  --tab-outline-color: var(--divider-color, rgb(255 255 255 / 5%));
  --tab-outline-width: 0;
  --tab-radius-active: var(--radius-s, 4px);
  --tab-stacked-header-width: var(--header-height, 44px);
  --tab-switcher-background: var(--background-secondary, hsl(220deg 2% 13%));
  --table-add-button-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --table-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --table-column-first-border-width: var(--table-border-width, 0);
  --table-column-last-border-width: var(--table-border-width, 0);
  --table-header-border-color: var(--table-border-color, rgb(255 255 255 / 5%));
  --table-header-border-width: var(--table-border-width, 0);
  --table-row-last-border-width: var(--table-border-width, 0);
  --tag-border-width: var(--border-width, 1px);
  --tag-padding-x: 8px;
  --tag-padding-y: 2px;
  --tag-size: var(--font-smallest, 0.8em);
  --text-error: var(--color-red, #F38BA8);
  --text-highlight-bg: rgba(var(--color-orange-rgb), 0.25);
  --text-selection: var(--background-modifier-hover, hsla(258, 88%, 66%, 0.33));
  --text-success: var(--color-green, #A6E3A1);
  --text-warning: var(--color-orange, #FAB387);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-orange-rgb), 0.25));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, rgb(255 255 255 / 5%));
  --toggle-border-width: 4px;
  --toggle-s-border-width: var(--toggle-border-width, 4px);
  --toggle-s-thumb-height: var(--toggle-thumb-height, 12px);
  --toggle-s-thumb-width: var(--toggle-thumb-width, 12px);
  --toggle-s-width: var(--toggle-width, 40px);
  --toggle-thumb-height: 12px;
  --toggle-thumb-width: 12px;
  --traffic-lights-offset-x: var(--header-height, 44px);
  --traffic-lights-offset-y: var(--header-height, 44px);
  --view-header-height: 40px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(220deg 2% 13%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(220deg 2% 13%));
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
}`,
    typography: `html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(250, 179, 135, 0.25));
  color: var(--color-orange, rgb(250, 179, 135));
  outline: rgb(250, 179, 135) none 0px;
  text-decoration-color: rgb(250, 179, 135);
}

html[saved-theme="dark"] body footer {
  opacity: 0.3;
}`,
    links: `html[saved-theme="dark"] body a.internal-link.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body ol > li {
  padding-bottom: var(--list-spacing, 1.6px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 1.6px);
}

html[saved-theme="dark"] body ul > li {
  padding-bottom: var(--list-spacing, 1.6px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 1.6px);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(32, 33, 34));
  line-height: 25.6px;
  padding-bottom: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="dark"] body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body tbody {
  background-color: var(--background-secondary, rgb(32, 33, 34));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-width: 0px;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: var(--table-header-border-width, 0px);
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="dark"] body thead {
  background-color: var(--background-secondary, rgb(32, 33, 34));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(32, 33, 34));
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.05);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-width: 1px;
  color: var(--code-normal, rgb(171, 178, 191));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(32, 33, 34));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(220deg 2% 13%));
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(166, 227, 161);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(166, 227, 161);
  border-left-width: 0px;
  border-radius: 4px;
  border-right-color: rgb(166, 227, 161);
  border-right-width: 0px;
  border-top-color: rgb(166, 227, 161);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-secondary, rgb(32, 33, 34));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--background-secondary, rgb(32, 33, 34));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  margin-bottom: 0px;
  margin-left: -21px;
  margin-right: 0px;
  margin-top: 0px;
  width: var(--checkbox-size, 14px);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(179, 179, 179);
  text-decoration: line-through;
  text-decoration-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(37, 38, 39);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(37, 38, 39);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 179, 135);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(179, 179, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 226, 213);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 199, 236);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(243, 139, 168);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(116, 199, 236);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(249, 226, 175);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(169, 180, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 194, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 227, 161);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(169, 180, 250);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 148, 226, 213);
  background: rgba(148, 226, 213, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(148, 226, 213, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(148, 226, 213, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(148, 226, 213, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(148, 226, 213, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 243, 139, 168);
  background: rgba(243, 139, 168, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(243, 139, 168, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 243, 139, 168);
  background: rgba(243, 139, 168, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(243, 139, 168, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 169, 180, 250);
  background: rgba(169, 180, 250, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(169, 180, 250, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(169, 180, 250, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(169, 180, 250, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(169, 180, 250, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 243, 139, 168);
  background: rgba(243, 139, 168, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(243, 139, 168, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(243, 139, 168, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(243, 139, 168, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(243, 139, 168, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 116, 199, 236);
  background: rgba(116, 199, 236, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(116, 199, 236, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 116, 199, 236);
  background: rgba(116, 199, 236, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(116, 199, 236, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 250, 179, 135);
  background: rgba(250, 179, 135, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(250, 179, 135, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(250, 179, 135, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(250, 179, 135, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-left-color: rgba(158, 158, 158, 0.9);
  border-left-width: 6px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 166, 227, 161);
  background: rgba(166, 227, 161, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(166, 227, 161, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(166, 227, 161, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(166, 227, 161, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(166, 227, 161, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 148, 226, 213);
  background: rgba(148, 226, 213, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(148, 226, 213, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(148, 226, 213, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(148, 226, 213, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(148, 226, 213, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 116, 199, 236);
  background: rgba(116, 199, 236, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(116, 199, 236, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 250, 179, 135);
  background: rgba(250, 179, 135, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(250, 179, 135, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(250, 179, 135, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(250, 179, 135, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(250, 179, 135, 0.25);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 116, 199, 236;
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(116, 199, 236));
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
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--modal-background, rgb(32, 33, 34));
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.05));
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 2px);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body h1 {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(166, 227, 161);
  border-left-width: 0px;
  border-right-color: rgb(166, 227, 161);
  border-right-width: 0px;
  border-top-color: rgb(166, 227, 161);
  border-top-width: 0px;
  color: var(--h1-color, rgb(166, 227, 161));
  font-size: var(--h1-size, 28.832px);
  letter-spacing: var(--h1-letter-spacing, -0.43248px);
  line-height: var(--h1-line-height, 34.5984px);
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(218, 218, 218));
  font-size: var(--inline-title-size, 28.832px);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(148, 226, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(148, 226, 213);
  border-left-width: 0px;
  border-right-color: rgb(148, 226, 213);
  border-right-width: 0px;
  border-top-color: rgb(148, 226, 213);
  border-top-width: 0px;
  color: var(--h2-color, rgb(148, 226, 213));
  font-size: var(--h2-size, 25.632px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.281952px);
  line-height: var(--h2-line-height, 30.7584px);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  color: var(--text-normal, rgb(218, 218, 218));
  font-size: var(--inline-title-size, 28.832px);
  letter-spacing: -0.43248px;
  line-height: var(--inline-title-line-height, 34.5984px);
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgb(137, 220, 235);
  border-bottom-width: 0px;
  border-left-color: rgb(137, 220, 235);
  border-left-width: 0px;
  border-right-color: rgb(137, 220, 235);
  border-right-width: 0px;
  border-top-color: rgb(137, 220, 235);
  border-top-width: 0px;
  color: var(--h3-color, rgb(137, 220, 235));
  font-size: var(--h3-size, 22.784px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.182272px);
  line-height: var(--h3-line-height, 29.6192px);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  color: var(--h4-color, rgb(116, 199, 236));
  font-size: var(--h4-size, 20.256px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.10128px);
  line-height: var(--h4-line-height, 28.3584px);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(135, 176, 249);
  border-bottom-width: 0px;
  border-left-color: rgb(135, 176, 249);
  border-left-width: 0px;
  border-right-color: rgb(135, 176, 249);
  border-right-width: 0px;
  border-top-color: rgb(135, 176, 249);
  border-top-width: 0px;
  color: var(--h5-color, rgb(135, 176, 249));
  font-size: var(--h5-size, 18px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.036px);
  line-height: var(--h5-line-height, 28.8px);
}

html[saved-theme="dark"] body h6 {
  border-bottom-color: rgb(135, 176, 249);
  border-bottom-width: 0px;
  border-left-color: rgb(135, 176, 249);
  border-left-width: 0px;
  border-right-color: rgb(135, 176, 249);
  border-right-width: 0px;
  border-top-color: rgb(135, 176, 249);
  border-top-width: 0px;
  color: var(--h6-color, rgb(135, 176, 249));
  line-height: var(--h6-line-height, 25.6px);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 116, 199, 236);
  border-bottom-color: rgba(116, 199, 236, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(116, 199, 236, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(116, 199, 236, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(116, 199, 236, 0.25);
  border-top-width: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(255, 255, 255, 0.08);
  border-left-width: 0px;
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

html[saved-theme="dark"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(32, 33, 34));
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.05);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, color(srgb 0.701961 0.701961 0.701961 / 0.8));
}

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.701961 0.701961 0.701961 / 0.8);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  color: var(--text-muted, rgb(179, 179, 179));
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-muted, rgb(179, 179, 179));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(from var(--background-secondary) r g b/50%);
  border-color: rgba(255, 255, 255, 0.05);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(218, 218, 218) rgb(218, 218, 218) rgb(218, 218, 218) rgba(255, 255, 255, 0.05);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  background-color: var(--background-secondary, rgb(32, 33, 34));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 2px);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(37, 38, 39));
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}`,
    misc: `html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(32, 33, 34));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(32, 33, 34));
  border-bottom-color: rgb(171, 178, 191);
  border-bottom-width: 0px;
  border-left-color: rgb(171, 178, 191);
  border-left-width: 0px;
  border-right-color: rgb(171, 178, 191);
  border-right-width: 0px;
  border-top-color: rgb(171, 178, 191);
  border-top-width: 0px;
  color: var(--code-normal, rgb(171, 178, 191));
}

html[saved-theme="dark"] body ul.tags > li {
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: var(--divider-color, rgb(0 0 0 / 5%));
  --background-modifier-border-focus: hsla(var(--interactive-accent-hsl), 0.5);
  --background-modifier-border-hover: var(--color-base-25, #e3e3e3);
  --background-modifier-cover: rgb(170 170 170 / 60%);
  --background-modifier-error: var(--color-red, hsl(355deg 70% 55%));
  --background-modifier-error-hover: var(--color-red, hsl(355deg 70% 65%));
  --background-modifier-error-rgb: var(--color-red-rgb, 255, 59, 48);
  --background-modifier-hover: rgba(var(--mono-rgb-100), 0.05);
  --background-modifier-message: var(--background-secondary, #f6f6f6);
  --background-modifier-success: var(--color-green, #28cd41);
  --background-modifier-success-rgb: var(--color-green-rgb, 40, 205, 65);
  --bases-cards-radius: var(--radius-m, 6px);
  --bases-embed-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --bases-table-border-color: var(--table-border-color, rgb(0 0 0 / 5%));
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --blockquote-background-color: var(--background-secondary, #f6f6f6);
  --blockquote-border-color: var(--color-base-50, #ababab);
  --button-radius: var(--input-radius, 6px);
  --callout-bug: var(--color-red-rgb, 255, 59, 48);
  --callout-default: var(--color-blue-rgb, 0, 122, 255);
  --callout-error: var(--color-red-rgb, 255, 59, 48);
  --callout-example: var(--color-purple-rgb, 175, 82, 222);
  --callout-fail: var(--color-red-rgb, 255, 59, 48);
  --callout-important: var(--color-cyan-rgb, 85, 190, 240);
  --callout-info: var(--color-blue-rgb, 0, 122, 255);
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 16px);
  --callout-question: var(--color-orange-rgb, 255, 149, 0);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-success: var(--color-green-rgb, 40, 205, 65);
  --callout-summary: var(--color-cyan-rgb, 85, 190, 240);
  --callout-tip: var(--color-cyan-rgb, 85, 190, 240);
  --callout-todo: var(--color-blue-rgb, 0, 122, 255);
  --callout-warning: var(--color-orange-rgb, 255, 149, 0);
  --canvas-color-1: var(--color-red-rgb, 255, 59, 48);
  --canvas-color-2: var(--color-orange-rgb, 255, 149, 0);
  --canvas-color-3: var(--color-yellow-rgb, 255, 204, 0);
  --canvas-color-4: var(--color-green-rgb, 40, 205, 65);
  --canvas-color-5: var(--color-cyan-rgb, 85, 190, 240);
  --canvas-color-6: var(--color-purple-rgb, 175, 82, 222);
  --caret-color: var(--text-accent, hsl(258, 88%, 66%));
  --checkbox-size: var(--font-text-size, 14px);
  --code-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --code-function: var(--color-yellow, #ffcc00);
  --code-important: var(--color-orange, #ff9500);
  --code-keyword: var(--color-red, #ff3b30);
  --code-normal: var(--text-muted, #5c5c5c);
  --code-operator: var(--color-red, #BE5046);
  --code-property: var(--color-cyan, #55bef0);
  --code-string: var(--color-green, #28cd41);
  --code-tag: var(--color-blue, #007aff);
  --code-value: var(--color-purple, #af52de);
  --color-blue: #007aff;
  --color-blue-rgb: 0, 122, 255;
  --color-cyan: #55bef0;
  --color-cyan-rgb: 85, 190, 240;
  --color-green: #28cd41;
  --color-green-rgb: 40, 205, 65;
  --color-orange: #ff9500;
  --color-orange-rgb: 255, 149, 0;
  --color-pink: #ff2d55;
  --color-pink-rgb: 255, 45, 85;
  --color-purple: #af52de;
  --color-purple-rgb: 175, 82, 222;
  --color-red: #ff3b30;
  --color-red-rgb: 255, 59, 48;
  --color-yellow: #ffcc00;
  --color-yellow-rgb: 255, 204, 0;
  --dialog-width: 500px;
  --divider-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --divider-color-hover: var(--text-normal, #222222);
  --dropdown-background-size: var(--icon-s, 16px);
  --file-line-width: 768px;
  --footnote-divider-color: var(--metadata-divider-color, rgb(0 0 0 / 5%));
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.05));
  --footnote-line-height: var(--line-height-normal, 1.6);
  --graph-node-attachment: var(--color-yellow, #ffcc00);
  --graph-node-tag: var(--color-green, #28cd41);
  --h1-color: rgb(166, 227, 161);
  --h1-size: 1.802em;
  --h2-color: rgb(148, 226, 213);
  --h2-size: 1.602em;
  --h2-weight: 600;
  --h3-color: rgb(137, 220, 235);
  --h3-size: 1.424em;
  --h3-weight: 600;
  --h4-color: rgb(116, 199, 236);
  --h4-size: 1.266em;
  --h4-weight: 600;
  --h5-color: rgb(135, 176, 249);
  --h5-line-height: var(--line-height-normal, 1.6);
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-color: rgb(135, 176, 249);
  --h6-line-height: var(--line-height-normal, 1.6);
  --header-height: 44px;
  --highlight: var(--text-highlight-bg, rgba(var(--color-orange-rgb), 0.25));
  --hr-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --icon-xl: 24px;
  --inline-title-color: var(--h1-color, rgb(166, 227, 161));
  --inline-title-size: var(--h1-size, 1.802em);
  --input-radius: var(--radius-m, 6px);
  --input-shadow: 0px 0px 0px 1px var(--background-modifier-border), 0 -0.5px 0 0 rgb(0 0 0 / 25%) inset;
  --interactive-normal: var(--background-primary, #ffffff);
  --labeled-nav-top-margin: var(--header-height, 44px);
  --line-height-normal: 1.6;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-spacing: 0.1em;
  --menu-border-color: var(--background-modifier-border-hover, #e3e3e3);
  --menu-radius: var(--radius-m, 6px);
  --metadata-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --metadata-divider-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --metadata-padding: var(--size-4-2, 0) 0;
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --metadata-property-radius: var(--input-radius, 6px);
  --metadata-property-radius-focus: var(--input-radius, 6px);
  --metadata-property-radius-hover: var(--input-radius, 6px);
  --modal-background: var(--background-secondary, #f6f6f6);
  --modal-radius: var(--radius-l, 10px);
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --nav-item-padding: var(--size-4-1) var(--size-4-2) var(--size-4-1) var(--size-4-6, 5px 8px 5px 24px);
  --nav-item-parent-padding: var(--nav-item-padding, 5px 8px 5px 24px);
  --pill-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --pill-border-color-hover: var(--background-modifier-border-hover, #e3e3e3);
  --prompt-border-color: var(--modal-border-color, rgb(0 0 0 / 10%));
  --radius-l: 10px;
  --radius-m: 6px;
  --ribbon-background: var(--background-secondary, transparent);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 4px 8px);
  --ribbon-width: 56px;
  --scrollbar-radius: var(--radius-l, 10px);
  --search-icon-size: var(--icon-s, 16px);
  --setting-items-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --setting-items-radius: var(--radius-l, 10px);
  --shiki-code-function: var(--color-green, #28cd41);
  --shiki-code-important: var(--color-orange, #ff9500);
  --shiki-code-keyword: var(--color-pink, #ff2d55);
  --shiki-code-property: var(--color-cyan, #55bef0);
  --shiki-code-string: var(--color-yellow, #ffcc00);
  --shiki-code-value: var(--color-purple, #af52de);
  --shiki-gutter-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --shiki-tooltip-background: var(--background-modifier-message, #f6f6f6);
  --slider-thumb-border-color: var(--color-base-00, #ffffff);
  --slider-thumb-border-width: var(--border-width, 4px);
  --slider-track-background: var(--color-base-40, #bdbdbd);
  --slider-track-height: 4px;
  --status-bar-border-color: var(--divider-color, rgb(0 0 0 / 5%));
  --status-bar-radius: var(--radius-m, 6px 0 0 0) 0 0 0;
  --status-bar-text-color: rgb(from var(--text-muted) r g b / 80%);
  --sync-avatar-color-1: var(--color-red, #ff3b30);
  --sync-avatar-color-2: var(--color-orange, #ff9500);
  --sync-avatar-color-3: var(--color-yellow, #ffcc00);
  --sync-avatar-color-4: var(--color-green, #28cd41);
  --sync-avatar-color-5: var(--color-cyan, #55bef0);
  --sync-avatar-color-6: var(--color-blue, #007aff);
  --sync-avatar-color-7: var(--color-purple, #af52de);
  --sync-avatar-color-8: var(--color-pink, #ff2d55);
  --tab-background-active: var(--background-primary-alt, #fafafa);
  --tab-container-background: var(--background-secondary, transparent);
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-max-width: var(--tab-width, 200px);
  --tab-outline-color: var(--divider-color, rgb(0 0 0 / 5%));
  --tab-outline-width: 0;
  --tab-radius-active: var(--radius-s, 4px);
  --tab-stacked-header-width: var(--header-height, 44px);
  --table-add-button-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --table-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --table-column-first-border-width: var(--table-border-width, 0);
  --table-column-last-border-width: var(--table-border-width, 0);
  --table-header-border-color: var(--table-border-color, rgb(0 0 0 / 5%));
  --table-header-border-width: var(--table-border-width, 0);
  --table-row-last-border-width: var(--table-border-width, 0);
  --tag-border-width: var(--border-width, 1px);
  --tag-padding-x: 8px;
  --tag-padding-y: 2px;
  --tag-size: var(--font-smallest, 0.8em);
  --text-error: var(--color-red, #ff3b30);
  --text-highlight-bg: rgba(var(--color-orange-rgb), 0.25);
  --text-selection: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
  --text-success: var(--color-green, #28cd41);
  --text-warning: var(--color-orange, #ff9500);
  --textHighlight: var(--text-highlight-bg, rgba(var(--color-orange-rgb), 0.25));
  --titlebar-background: var(--background-secondary, transparent);
  --titlebar-background-focused: var(--background-secondary-alt, transparent);
  --titlebar-border-color: var(--background-modifier-border, rgb(0 0 0 / 5%));
  --toggle-border-width: 4px;
  --toggle-s-border-width: var(--toggle-border-width, 4px);
  --toggle-s-thumb-height: var(--toggle-thumb-height, 12px);
  --toggle-s-thumb-width: var(--toggle-thumb-width, 12px);
  --toggle-s-width: var(--toggle-width, 40px);
  --toggle-thumb-height: 12px;
  --toggle-thumb-width: 12px;
  --traffic-lights-offset-x: var(--header-height, 44px);
  --traffic-lights-offset-y: var(--header-height, 44px);
  --view-header-height: 40px;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 149, 0, 0.25));
  color: var(--color-orange, rgb(255, 149, 0));
  outline: rgb(255, 149, 0) none 0px;
  text-decoration-color: rgb(255, 149, 0);
}

html[saved-theme="light"] body footer {
  opacity: 0.3;
}`,
    links: `html[saved-theme="light"] body a.internal-link.broken {
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body ol > li {
  padding-bottom: var(--list-spacing, 1.6px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 1.6px);
}

html[saved-theme="light"] body ul > li {
  padding-bottom: var(--list-spacing, 1.6px);
  padding-left: 0px;
  padding-right: 0px;
  padding-top: var(--list-spacing, 1.6px);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(246, 246, 246));
  line-height: 25.6px;
  padding-bottom: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 5px;
}`,
    tables: `html[saved-theme="light"] body table {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body tbody {
  background-color: var(--background-secondary, rgb(246, 246, 246));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-width: 0px;
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: var(--table-header-border-width, 0px);
  padding-bottom: 8px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 8px;
}

html[saved-theme="light"] body thead {
  background-color: var(--background-secondary, rgb(246, 246, 246));
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: 1px;
  border-right-color: rgba(0, 0, 0, 0.05);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-width: 1px;
  color: var(--code-normal, rgb(92, 92, 92));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body img {
  border-bottom-color: rgb(166, 227, 161);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 0px;
  border-left-color: rgb(166, 227, 161);
  border-left-width: 0px;
  border-radius: 4px;
  border-right-color: rgb(166, 227, 161);
  border-right-width: 0px;
  border-top-color: rgb(166, 227, 161);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-width: 0px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-secondary, rgb(246, 246, 246));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .transclude {
  background-color: var(--background-secondary, rgb(246, 246, 246));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  margin-bottom: 0px;
  margin-left: -21px;
  margin-right: 0px;
  margin-top: 0px;
  width: var(--checkbox-size, 14px);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(92, 92, 92);
  text-decoration: line-through;
  text-decoration-color: rgb(92, 92, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--!  --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--!  --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 149, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 92, 92);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--!  --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 204, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--!  --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(85, 190, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 122, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 59, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 59, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLWRvd24iPjxwb2x5bGluZSBwb2ludHM9IjIyIDE3IDEzLjUgOC41IDguNSAxMy41IDIgNyIvPjxwb2x5bGluZSBwb2ludHM9IjE2IDE3IDIyIDE3IDIyIDExIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 59, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWZsYW1lIj48cGF0aCBkPSJNOC41IDE0LjVBMi41IDIuNSAwIDAgMCAxMSAxMmMwLTEuMzgtLjUtMi0xLTMtMS4wNzItMi4xNDMtLjIyNC00LjA1NCAyLTYgLjUgMi41IDIgNC45IDQgNi41IDIgMS42IDMgMy41IDMgNS41YTcgNyAwIDEgMS0xNCAwYzAtMS4xNTMuNDMzLTIuMjk0IDEtM2EyLjUgMi41IDAgMCAwIDIuNSAyLjV6Ii8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 59, 48);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 122, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 204, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWtleS1yb3VuZCI+PHBhdGggZD0iTTIgMTh2M2MwIC42LjQgMSAxIDFoNHYtM2gzdi0zaDJsMS40LTEuNGE2LjUgNi41IDAgMSAwLTQtNFoiLz48Y2lyY2xlIGN4PSIxNi41IiBjeT0iNy41IiByPSIuNSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 204, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 82, 222);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--!  --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 45, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 205, 65);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!  --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 205, 65);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRyZW5kaW5nLXVwIj48cG9seWxpbmUgcG9pbnRzPSIyMiA3IDEzLjUgMTUuNSA4LjUgMTAuNSAyIDE3Ii8+PHBvbHlsaW5lIHBvaW50cz0iMTYgNyAyMiA3IDIyIDEzIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 205, 65);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNha2UiPjxwYXRoIGQ9Ik0yMCAyMXYtOGEyIDIgMCAwIDAtMi0ySDZhMiAyIDAgMCAwLTIgMnY4Ii8+PHBhdGggZD0iTTQgMTZzLjUtMSAyLTEgMi41IDIgNCAyIDIuNS0yIDQtMiAyLjUgMiA0IDIgMi0xIDItMSIvPjxwYXRoIGQ9Ik0yIDIxaDIwIi8+PHBhdGggZD0iTTcgOHYzIi8+PHBhdGggZD0iTTEyIDh2MyIvPjxwYXRoIGQ9Ik0xNyA4djMiLz48cGF0aCBkPSJNNyA0aDAuMDEiLz48cGF0aCBkPSJNMTIgNGgwLjAxIi8+PHBhdGggZD0iTTE3IDRoMC4wMSIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 82, 222);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 85, 190, 240);
  background: rgba(85, 190, 240, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(85, 190, 240, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(85, 190, 240, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(85, 190, 240, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(85, 190, 240, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 255, 59, 48);
  background: rgba(255, 59, 48, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 59, 48, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 255, 59, 48);
  background: rgba(255, 59, 48, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 59, 48, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 175, 82, 222);
  background: rgba(175, 82, 222, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(175, 82, 222, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(175, 82, 222, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(175, 82, 222, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(175, 82, 222, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 255, 59, 48);
  background: rgba(255, 59, 48, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(255, 59, 48, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 59, 48, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 59, 48, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 59, 48, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 0, 122, 255);
  background: rgba(0, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 122, 255, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 0, 122, 255);
  background: rgba(0, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 122, 255, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 149, 0);
  background: rgba(255, 149, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(255, 149, 0, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 149, 0, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 149, 0, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 149, 0, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-left-color: rgba(158, 158, 158, 0.9);
  border-left-width: 6px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 40, 205, 65);
  background: rgba(40, 205, 65, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(40, 205, 65, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(40, 205, 65, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(40, 205, 65, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(40, 205, 65, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 85, 190, 240);
  background: rgba(85, 190, 240, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(85, 190, 240, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(85, 190, 240, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(85, 190, 240, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(85, 190, 240, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 0, 122, 255);
  background: rgba(0, 122, 255, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 122, 255, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 149, 0);
  background: rgba(255, 149, 0, 0.15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.15);
  border-bottom-color: rgba(255, 149, 0, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(255, 149, 0, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(255, 149, 0, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(255, 149, 0, 0.25);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 122, 255;
  border-bottom-color: rgb(0, 122, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 122, 255);
  border-left-width: 0px;
  border-right-color: rgb(0, 122, 255);
  border-right-width: 0px;
  border-top-color: rgb(0, 122, 255);
  border-top-width: 0px;
  gap: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 122, 255));
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
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--modal-background, rgb(246, 246, 246));
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.05));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 2px);
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-width: 1px;
}

html[saved-theme="light"] body h1 {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(166, 227, 161);
  border-left-width: 0px;
  border-right-color: rgb(166, 227, 161);
  border-right-width: 0px;
  border-top-color: rgb(166, 227, 161);
  border-top-width: 0px;
  color: var(--h1-color, rgb(166, 227, 161));
  font-size: var(--h1-size, 28.832px);
  letter-spacing: var(--h1-letter-spacing, -0.43248px);
  line-height: var(--h1-line-height, 34.5984px);
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(34, 34, 34));
  font-size: var(--inline-title-size, 28.832px);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  border-bottom-color: rgb(148, 226, 213);
  border-bottom-width: 0px;
  border-left-color: rgb(148, 226, 213);
  border-left-width: 0px;
  border-right-color: rgb(148, 226, 213);
  border-right-width: 0px;
  border-top-color: rgb(148, 226, 213);
  border-top-width: 0px;
  color: var(--h2-color, rgb(148, 226, 213));
  font-size: var(--h2-size, 25.632px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h2-letter-spacing, -0.281952px);
  line-height: var(--h2-line-height, 30.7584px);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  color: var(--text-normal, rgb(34, 34, 34));
  font-size: var(--inline-title-size, 28.832px);
  letter-spacing: -0.43248px;
  line-height: var(--inline-title-line-height, 34.5984px);
  margin-bottom: 24px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 16px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  border-bottom-color: rgb(137, 220, 235);
  border-bottom-width: 0px;
  border-left-color: rgb(137, 220, 235);
  border-left-width: 0px;
  border-right-color: rgb(137, 220, 235);
  border-right-width: 0px;
  border-top-color: rgb(137, 220, 235);
  border-top-width: 0px;
  color: var(--h3-color, rgb(137, 220, 235));
  font-size: var(--h3-size, 22.784px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.182272px);
  line-height: var(--h3-line-height, 29.6192px);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  border-bottom-color: rgb(116, 199, 236);
  border-bottom-width: 0px;
  border-left-color: rgb(116, 199, 236);
  border-left-width: 0px;
  border-right-color: rgb(116, 199, 236);
  border-right-width: 0px;
  border-top-color: rgb(116, 199, 236);
  border-top-width: 0px;
  color: var(--h4-color, rgb(116, 199, 236));
  font-size: var(--h4-size, 20.256px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h4-letter-spacing, -0.10128px);
  line-height: var(--h4-line-height, 28.3584px);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(135, 176, 249);
  border-bottom-width: 0px;
  border-left-color: rgb(135, 176, 249);
  border-left-width: 0px;
  border-right-color: rgb(135, 176, 249);
  border-right-width: 0px;
  border-top-color: rgb(135, 176, 249);
  border-top-width: 0px;
  color: var(--h5-color, rgb(135, 176, 249));
  font-size: var(--h5-size, 18px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h5-letter-spacing, -0.036px);
  line-height: var(--h5-line-height, 28.8px);
}

html[saved-theme="light"] body h6 {
  border-bottom-color: rgb(135, 176, 249);
  border-bottom-width: 0px;
  border-left-color: rgb(135, 176, 249);
  border-left-width: 0px;
  border-right-color: rgb(135, 176, 249);
  border-right-width: 0px;
  border-top-color: rgb(135, 176, 249);
  border-top-width: 0px;
  color: var(--h6-color, rgb(135, 176, 249));
  line-height: var(--h6-line-height, 25.6px);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-width: 0px;
  border-left-color: rgb(128, 128, 128);
  border-left-width: 0px;
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 0, 122, 255);
  border-bottom-color: rgba(0, 122, 255, 0.25);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 122, 255, 0.9);
  border-left-width: 6px;
  border-right-color: rgba(0, 122, 255, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(0, 122, 255, 0.25);
  border-top-width: 0px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}`,
    explorer: `html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}`,
    footer: `html[saved-theme="light"] body footer {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0.05);
  border-right-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-top-width: 0px;
  color: var(--status-bar-text-color, color(srgb 0.360784 0.360784 0.360784 / 0.8));
}

html[saved-theme="light"] body footer ul li a {
  color: color(srgb 0.360784 0.360784 0.360784 / 0.8);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  color: var(--text-muted, rgb(92, 92, 92));
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-muted, rgb(92, 92, 92));
}`,
    canvas: `html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(from var(--background-secondary) r g b/50%);
  border-color: rgba(0, 0, 0, 0.05);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(34, 34, 34) rgb(34, 34, 34) rgb(34, 34, 34) rgba(0, 0, 0, 0.05);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0.05);
  border-top-width: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  background-color: var(--background-secondary, rgb(246, 246, 246));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 2px);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}`,
    misc: `html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-width: 0px;
  border-left-color: rgb(92, 92, 92);
  border-left-width: 0px;
  border-right-color: rgb(92, 92, 92);
  border-right-width: 0px;
  border-top-color: rgb(92, 92, 92);
  border-top-width: 0px;
  color: var(--code-normal, rgb(92, 92, 92));
}

html[saved-theme="light"] body ul.tags > li {
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-width: 1px;
  border-right-width: 1px;
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
}`,
  },
  classSettings: {
    "sei-enable-labeled-nav": {
      general: `body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-spacer, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-spacer {
display: none;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-inner-title, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-inner-title {
display: inline-block;
font-weight: 500;
font-size: var(--font-ui-small);
margin-bottom: -3px;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container {
position: relative;
flex-direction: column-reverse !important;
height: auto;
width: 100%;
border: none;
padding: 0;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .sidebar-toggle-button.mod-left, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .sidebar-toggle-button.mod-left {
position: absolute;
justify-content: flex-end;
padding-right: var(--size-4-2);
top: 0;
right: 0;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner {
padding: var(--size-4-2) var(--size-4-2);
margin-top: var(--labeled-nav-top-margin);
flex-direction: column !important;
background-color: transparent;
gap: 4px !important;
margin-bottom: 0;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:active, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:focus, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:active, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:focus {
background-color: transparent;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-container-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-container-inner {
flex-grow: 1;
gap: 0;
padding: var(--size-4-2) var(--size-4-3);
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header {
--icon-color: var(--text-muted);
--tab-text-color: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
padding: 0;
margin-bottom: 0;
border: none;
height: auto;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active:not(:hover), body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active:not(:hover) {
background-color: transparent;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header:hover {
opacity: 1;
--tab-text-color-active: var(--text-normal);
--tab-text-color-focused: var(--text-normal);
--tab-text-color-focused-active: var(--text-normal);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-normal);
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header .workspace-tab-header-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header .workspace-tab-header-inner {
gap: var(--size-2-3);
padding: var(--size-4-1) var(--size-4-2);
box-shadow: none;
border: none;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.has-active-menu:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.has-active-menu:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active:hover {
background-color: transparent;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active:hover .workspace-tab-header-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active:hover .workspace-tab-header-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: var(--nav-item-background-hover);
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header:hover .workspace-tab-header-inner-icon, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active .workspace-tab-header-inner-icon, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header:hover .workspace-tab-header-inner-icon, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--icon-color-active);
}`,
    },
    "sei-enable-labeled-nav-everywhere": {
      general: `body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-spacer, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-spacer {
display: none;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-inner-title, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-inner-title {
display: inline-block;
font-weight: 500;
font-size: var(--font-ui-small);
margin-bottom: -3px;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container {
position: relative;
flex-direction: column-reverse !important;
height: auto;
width: 100%;
border: none;
padding: 0;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .sidebar-toggle-button.mod-left, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .sidebar-toggle-button.mod-left {
position: absolute;
justify-content: flex-end;
padding-right: var(--size-4-2);
top: 0;
right: 0;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner {
padding: var(--size-4-2) var(--size-4-2);
margin-top: var(--labeled-nav-top-margin);
flex-direction: column !important;
background-color: transparent;
gap: 4px !important;
margin-bottom: 0;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:active, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:focus, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:active, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-header-container-inner:focus {
background-color: transparent;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header-container .workspace-tab-container-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header-container .workspace-tab-container-inner {
flex-grow: 1;
gap: 0;
padding: var(--size-4-2) var(--size-4-3);
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header {
--icon-color: var(--text-muted);
--tab-text-color: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
padding: 0;
margin-bottom: 0;
border: none;
height: auto;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active:not(:hover), body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active:not(:hover) {
background-color: transparent;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header:hover {
opacity: 1;
--tab-text-color-active: var(--text-normal);
--tab-text-color-focused: var(--text-normal);
--tab-text-color-focused-active: var(--text-normal);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-normal);
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header .workspace-tab-header-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header .workspace-tab-header-inner {
gap: var(--size-2-3);
padding: var(--size-4-1) var(--size-4-2);
box-shadow: none;
border: none;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.has-active-menu:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.has-active-menu:hover, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active:hover {
background-color: transparent;
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active:hover .workspace-tab-header-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active:hover .workspace-tab-header-inner, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color: var(--nav-item-background-hover);
}

body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header:hover .workspace-tab-header-inner-icon, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-left-split .workspace-tabs .workspace-tab-header.is-active .workspace-tab-header-inner-icon, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header:hover .workspace-tab-header-inner-icon, body:not(.sei-disable-labeled-nav).sei-enable-labeled-nav-everywhere .mod-right-split .workspace-tabs .workspace-tab-header.is-active .workspace-tab-header-inner-icon {
color: var(--icon-color-active);
}`,
    },
    "sei-hide-backlinks-status-bar": {
      general: `body.sei-hide-backlinks-status-bar .status-bar-item.plugin-backlink {
display: none !important;
}`,
    },
  },
};
