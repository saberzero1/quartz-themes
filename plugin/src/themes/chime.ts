import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "chime",
    modes: ["dark", "light"],
    variations: [],
    fonts: [
      "archivo",
      "arima",
      "ibm-plex-sans",
      "linux-libertine",
      "icons/noto-sans-symbols-2",
    ],
    styleSettingsId: "chime-theme",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--color-base-30, #4e4560);
  --background-modifier-border-focus: var(--color-base-40, rgb(98, 111, 134));
  --background-modifier-border-hover: var(--color-base-35, #545e76);
  --background-modifier-error: var(--color-red, #e17884);
  --background-modifier-error-hover: var(--color-red, #e17884);
  --background-modifier-error-rgb: var(--color-red-rgb, 225, 120, 132);
  --background-modifier-form-field: var(--color-base-25, #55546e);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #55546e);
  --background-modifier-success: var(--color-green, #75c297);
  --background-modifier-success-rgb: var(--color-green-rgb, 117, 194, 151);
  --background-primary: var(--color-base-00, #3b3347);
  --background-primary-alt: var(--color-base-10, #413b4e);
  --background-secondary: var(--color-base-20, #2f2837);
  --background-secondary-alt: var(--color-base-20, #2f2837);
  --bases-cards-background: var(--background-primary, #3b3347);
  --bases-cards-cover-background: var(--background-primary-alt, #413b4e);
  --bases-cards-radius: var(--radius-m, 10px);
  --bases-embed-border-color: var(--background-modifier-border, #4e4560);
  --bases-embed-border-radius: var(--radius-s, 8px);
  --bases-group-heading-property-color: var(--text-muted, #7f83a1);
  --bases-table-border-color: var(--table-border-color, #4e4560);
  --bases-table-cell-background-active: var(--background-primary, #3b3347);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #413b4e);
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-group-background: var(--background-primary-alt, #413b4e);
  --bases-table-header-background: var(--background-primary, #3b3347);
  --bases-table-header-color: var(--text-muted, #7f83a1);
  --bases-table-summary-background: var(--background-primary, #3b3347);
  --blockquote-background-color: var(--background-secondary-alt, #2f2837);
  --blockquote-border-thickness: 2.5px;
  --blockquote-color: var(--text-normal, #a0a7c4);
  --border-radius-average: 11px;
  --callout-bug: var(--color-pink-rgb, 220, 118, 167);
  --callout-default: var(--color-blue-rgb, 136, 198, 227);
  --callout-error: var(--color-red-rgb, 225, 120, 132);
  --callout-example: var(--color-purple-rgb, 181, 132, 199);
  --callout-fail: var(--color-red-rgb, 225, 120, 132);
  --callout-important: var(--color-cyan-rgb, 111, 210, 194);
  --callout-info: var(--color-blue-rgb, 136, 198, 227);
  --callout-question: var(--color-orange-rgb, 241, 144, 112);
  --callout-radius: var(--radius-s, 8px);
  --callout-success: var(--color-green-rgb, 117, 194, 151);
  --callout-summary: var(--color-cyan-rgb, 111, 210, 194);
  --callout-tip: var(--color-cyan-rgb, 111, 210, 194);
  --callout-todo: var(--color-blue-rgb, 136, 198, 227);
  --callout-warning: var(--color-orange-rgb, 241, 144, 112);
  --canvas-background: var(--background-primary, #3b3347);
  --canvas-card-label-color: var(--text-faint, rgb(125, 127, 149));
  --canvas-color-1: var(--color-red-rgb, 225, 120, 132);
  --canvas-color-2: var(--color-orange-rgb, 241, 144, 112);
  --canvas-color-3: var(--color-yellow-rgb, 255, 168, 46);
  --canvas-color-4: var(--color-green-rgb, 117, 194, 151);
  --canvas-color-5: var(--color-cyan-rgb, 111, 210, 194);
  --canvas-color-6: var(--color-purple-rgb, 181, 132, 199);
  --canvas-controls-radius: var(--radius-s, 8px);
  --canvas-dot-pattern: var(--color-base-30, #4e4560);
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, #a0a7c4);
  --checkbox-border-color: var(--text-faint, rgb(125, 127, 149));
  --checkbox-border-color-hover: var(--text-muted, #7f83a1);
  --checkbox-marker-color: var(--background-primary, #3b3347);
  --checkbox-radius: var(--radius-s, 8px);
  --checklist-done-color: var(--text-muted, #7f83a1);
  --checklist-done-decoration: none;
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: var(--background-primary-alt, #413b4e);
  --code-border-color: var(--background-modifier-border, #4e4560);
  --code-comment: var(--text-faint, rgb(125, 127, 149));
  --code-function: var(--color-yellow, #dcb46f);
  --code-important: var(--color-orange, #f19070);
  --code-keyword: var(--color-pink, #dc76a7);
  --code-normal: var(--text-normal, #a0a7c4);
  --code-operator: var(--color-red, #e17884);
  --code-property: var(--color-cyan, #6fd2c2);
  --code-punctuation: var(--text-muted, #7f83a1);
  --code-radius: var(--radius-s, 8px);
  --code-string: var(--color-green, #75c297);
  --code-tag: var(--color-red, #e17884);
  --code-value: var(--color-purple, #b584c7);
  --collapse-icon-color: var(--text-faint, rgb(125, 127, 149));
  --color-base-00: #3b3347;
  --color-base-05: var(--color-base-20, #2f2837);
  --color-base-10: #413b4e;
  --color-base-100: #a0a7c4;
  --color-base-20: #2f2837;
  --color-base-25: #55546e;
  --color-base-30: #4e4560;
  --color-base-35: #545e76;
  --color-base-40: rgb(98, 111, 134);
  --color-base-50: rgb(125, 127, 149);
  --color-base-60: rgb(103, 129, 148);
  --color-base-70: #7f83a1;
  --color-blue: #88c6e3;
  --color-blue-rgb: 136, 198, 227;
  --color-cyan: #6fd2c2;
  --color-cyan-rgb: 111, 210, 194;
  --color-green: #75c297;
  --color-green-rgb: 117, 194, 151;
  --color-orange: #f19070;
  --color-orange-rgb: 241, 144, 112;
  --color-pink: #dc76a7;
  --color-pink-rgb: 220, 118, 167;
  --color-purple: #b584c7;
  --color-purple-rgb: 181, 132, 199;
  --color-red: #e17884;
  --color-red-rgb: 225, 120, 132;
  --color-yellow: #dcb46f;
  --color-yellow-rgb: 255, 168, 46;
  --dark: var(--text-normal, var(--color-base-100, #a0a7c4));
  --darkgray: var(--text-normal, var(--color-base-100, #a0a7c4));
  --divider-color: var(--background-modifier-border, #4e4560);
  --divider-width: 0px;
  --dropdown-background: var(--interactive-normal, #4e4560);
  --dropdown-background-hover: var(--interactive-hover, #545e76);
  --file-header-background: var(--background-primary, #3b3347);
  --file-header-background-focused: var(--background-primary, #3b3347);
  --file-header-font: var(--font-interface, "Arima", cursive);
  --flair-background: var(--interactive-normal, #4e4560);
  --flair-color: var(--text-normal, #a0a7c4);
  --font-default: "Arima", cursive;
  --font-mermaid: var(--font-text, "Arima", cursive);
  --footnote-divider-color: var(--metadata-divider-color, #4e4560);
  --footnote-id-color: var(--text-muted, #7f83a1);
  --footnote-id-color-no-occurrences: var(--text-faint, rgb(125, 127, 149));
  --footnote-line-height: var(--line-height-normal, 1.7);
  --footnote-radius: var(--radius-s, 8px);
  --graph-node: var(--text-muted, #7f83a1);
  --graph-node-attachment: var(--color-yellow, #dcb46f);
  --graph-node-tag: var(--color-green, #75c297);
  --graph-node-unresolved: var(--text-faint, rgb(125, 127, 149));
  --graph-text: var(--text-normal, #a0a7c4);
  --gray: var(--text-muted, var(--color-base-70, #7f83a1));
  --h1-color: var(--text-normal, #a0a7c4);
  --h2-color: var(--text-normal, #a0a7c4);
  --h2-weight: 600;
  --h3-color: var(--text-normal, #a0a7c4);
  --h3-weight: 600;
  --h4-color: var(--text-normal, #a0a7c4);
  --h4-weight: 600;
  --h5-color: var(--text-normal, #a0a7c4);
  --h5-line-height: var(--line-height-normal, 1.7);
  --h5-weight: 600;
  --h6-color: var(--text-normal, #a0a7c4);
  --h6-line-height: var(--line-height-normal, 1.7);
  --h6-variant: small-caps;
  --heading-formatting: var(--text-faint, rgb(125, 127, 149));
  --highlight: var(--text-highlight-bg, hsl(
    var(--accent-h),
    var(--accent-s),
    var(--accent-l),
    0.3
  ));
  --hr-color: var(--background-modifier-border, #4e4560);
  --icon-color: var(--text-muted, #7f83a1);
  --icon-color-focused: var(--text-normal, #a0a7c4);
  --icon-color-hover: var(--text-muted, #7f83a1);
  --inline-title-color: var(--h1-color, #a0a7c4);
  --input-date-separator: var(--text-faint, rgb(125, 127, 149));
  --input-placeholder-color: var(--text-faint, rgb(125, 127, 149));
  --interactive-hover: var(--color-base-35, #545e76);
  --interactive-normal: var(--color-base-30, #4e4560);
  --light: var(--background-primary, var(--color-base-00, #3b3347));
  --lightgray: var(--background-secondary, var(--color-base-20, #2f2837));
  --line-height-normal: 1.7;
  --line-style: solid;
  --link-decoration: none;
  --link-external-decoration: none;
  --list-marker-color: var(--text-faint, rgb(125, 127, 149));
  --list-marker-color-hover: var(--text-muted, #7f83a1);
  --menu-background: var(--background-secondary, #2f2837);
  --menu-border-color: var(--background-modifier-border-hover, #545e76);
  --menu-radius: var(--radius-m, 10px);
  --metadata-border-color: var(--background-modifier-border, #4e4560);
  --metadata-divider-color: var(--background-modifier-border, #4e4560);
  --metadata-input-font: var(--font-interface, "Arima", cursive);
  --metadata-input-text-color: var(--text-normal, #a0a7c4);
  --metadata-label-font: var(--font-interface, "Arima", cursive);
  --metadata-label-text-color: var(--text-muted, #7f83a1);
  --metadata-label-text-color-hover: var(--text-muted, #7f83a1);
  --modal-background: var(--background-primary, #3b3347);
  --modal-radius: var(--radius-l, 12px);
  --nav-collapse-icon-color: var(--collapse-icon-color, rgb(125, 127, 149));
  --nav-collapse-icon-color-collapsed: var(--text-faint, rgb(125, 127, 149));
  --nav-heading-color: var(--text-normal, #a0a7c4);
  --nav-heading-color-collapsed: var(--text-faint, rgb(125, 127, 149));
  --nav-heading-color-collapsed-hover: var(--text-muted, #7f83a1);
  --nav-heading-color-hover: var(--text-normal, #a0a7c4);
  --nav-item-color: var(--text-muted, #7f83a1);
  --nav-item-color-active: var(--text-normal, #a0a7c4);
  --nav-item-color-hover: var(--text-normal, #a0a7c4);
  --nav-item-color-selected: var(--text-normal, #a0a7c4);
  --nav-item-radius: var(--radius-s, 8px);
  --nav-tag-color: var(--text-faint, rgb(125, 127, 149));
  --nav-tag-color-active: var(--text-muted, #7f83a1);
  --nav-tag-color-hover: var(--text-muted, #7f83a1);
  --nav-tag-radius: var(--radius-s, 8px);
  --pdf-background: var(--background-primary, #3b3347);
  --pdf-page-background: var(--background-primary, #3b3347);
  --pdf-sidebar-background: var(--background-primary, #3b3347);
  --pill-border-color: var(--background-modifier-border, #4e4560);
  --pill-border-color-hover: var(--background-modifier-border-hover, #545e76);
  --pill-color: var(--text-muted, #7f83a1);
  --pill-color-hover: var(--text-normal, #a0a7c4);
  --pill-color-remove: var(--text-faint, rgb(125, 127, 149));
  --prompt-background: var(--background-primary, #3b3347);
  --prompt-width: 450px;
  --radius-l: calc(var(--border-radius-average) + 1px);
  --radius-m: calc(var(--border-radius-average) - 1px);
  --radius-s: calc(var(--border-radius-average) - 3px);
  --radius-xl: calc(var(--border-radius-average) + 3px);
  --raised-background: var(--blur-background, color-mix(in srgb, #4e4560 65%, transparent) linear-gradient(#4e4560, color-mix(in srgb, #4e4560 65%, transparent)));
  --ribbon-background: var(--background-secondary, #2f2837);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --scrollbar-radius: var(--radius-l, 12px);
  --search-clear-button-color: var(--text-muted, #7f83a1);
  --search-icon-color: var(--text-muted, #7f83a1);
  --search-result-background: var(--background-primary, #3b3347);
  --setting-group-heading-color: var(--text-normal, #a0a7c4);
  --setting-items-background: var(--background-primary-alt, #413b4e);
  --setting-items-border-color: var(--background-modifier-border, #4e4560);
  --setting-items-radius: var(--radius-l, 12px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #7f83a1);
  --shiki-code-background: var(--code-background, #413b4e);
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-comment: var(--text-faint, rgb(125, 127, 149));
  --shiki-code-function: var(--color-green, #75c297);
  --shiki-code-important: var(--color-orange, #f19070);
  --shiki-code-keyword: var(--color-pink, #dc76a7);
  --shiki-code-normal: var(--text-muted, #7f83a1);
  --shiki-code-property: var(--color-cyan, #6fd2c2);
  --shiki-code-punctuation: var(--text-muted, #7f83a1);
  --shiki-code-string: var(--color-yellow, #dcb46f);
  --shiki-code-value: var(--color-purple, #b584c7);
  --shiki-gutter-border-color: var(--background-modifier-border, #4e4560);
  --shiki-gutter-text-color: var(--text-faint, rgb(125, 127, 149));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #7f83a1);
  --shiki-highlight-neutral: var(--shiki-code-normal, #7f83a1);
  --shiki-terminal-dots-color: var(--text-faint, rgb(125, 127, 149));
  --slider-thumb-border-color: var(--background-modifier-border-hover, #545e76);
  --slider-track-background: var(--background-modifier-border, #4e4560);
  --status-bar-background: var(--background-secondary, #2f2837);
  --status-bar-border-color: var(--divider-color, #4e4560);
  --status-bar-radius: var(--radius-m, 10px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #7f83a1);
  --suggestion-background: var(--background-primary, #3b3347);
  --sync-avatar-color-1: var(--color-red, #e17884);
  --sync-avatar-color-2: var(--color-orange, #f19070);
  --sync-avatar-color-3: var(--color-yellow, #dcb46f);
  --sync-avatar-color-4: var(--color-green, #75c297);
  --sync-avatar-color-5: var(--color-cyan, #6fd2c2);
  --sync-avatar-color-6: var(--color-blue, #88c6e3);
  --sync-avatar-color-7: var(--color-purple, #b584c7);
  --sync-avatar-color-8: var(--color-pink, #dc76a7);
  --tab-background-active: var(--background-primary, #3b3347);
  --tab-container-background: var(--background-secondary, #2f2837);
  --tab-curve: 0px;
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-font-size: var(--font-ui-small, 0.84em);
  --tab-outline-color: var(--divider-color, #4e4560);
  --tab-outline-width: var(--border-width, 1px);
  --tab-radius: var(--radius-s, 8px);
  --tab-radius-active: var(--radius-s, 8px);
  --tab-switcher-background: var(--background-secondary, #2f2837);
  --tab-switcher-preview-radius: var(--radius-xl, 14px);
  --tab-text-color: var(--text-faint, rgb(125, 127, 149));
  --tab-text-color-active: var(--text-muted, #7f83a1);
  --tab-text-color-focused: var(--text-muted, #7f83a1);
  --tab-text-color-focused-active: var(--text-muted, #7f83a1);
  --tab-text-color-focused-active-current: var(--color-accent-2, hsl(253, 92.4%, 85.14%));
  --tab-width: 240px;
  --table-add-button-border-color: var(--background-modifier-border, #4e4560);
  --table-add-button-border-width: var(--table-border-width, 0px);
  --table-border-color: var(--background-modifier-border, #4e4560);
  --table-border-width: 0px;
  --table-column-first-border-width: var(--table-border-width, 0px);
  --table-column-last-border-width: var(--table-border-width, 0px);
  --table-drag-handle-color: var(--text-faint, rgb(125, 127, 149));
  --table-header-border-color: var(--table-border-color, #4e4560);
  --table-header-border-width: var(--table-border-width, 0px);
  --table-header-color: var(--text-normal, #a0a7c4);
  --table-row-alt-background: var(--color-base-05, #2f2837);
  --table-row-last-border-width: var(--table-border-width, 0px);
  --text-error: var(--color-red, #e17884);
  --text-faint: var(--color-base-50, rgb(125, 127, 149));
  --text-highlight-bg: hsl(
    var(--accent-h),
    var(--accent-s),
    var(--accent-l),
    0.3
  );
  --text-muted: var(--color-base-70, #7f83a1);
  --text-normal: var(--color-base-100, #a0a7c4);
  --text-success: var(--color-green, #75c297);
  --text-warning: var(--color-orange, #f19070);
  --textHighlight: var(--text-highlight-bg, hsl(
    var(--accent-h),
    var(--accent-s),
    var(--accent-l),
    0.3
  ));
  --titlebar-background: var(--background-secondary, #2f2837);
  --titlebar-background-focused: var(--background-secondary-alt, #2f2837);
  --titlebar-border-color: var(--background-modifier-border, #4e4560);
  --titlebar-text-color: var(--text-muted, #7f83a1);
  --titlebar-text-color-focused: var(--text-normal, #a0a7c4);
  --vault-profile-color: var(--text-normal, #a0a7c4);
  --vault-profile-color-hover: var(--vault-profile-color, #a0a7c4);
  --workspace-background: var(--background-secondary, #2f2837);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #2f2837);
  background-color: var(--tab-container-background, rgb(47, 40, 55));
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(78, 69, 96);
  border-right-style: var(--line-style, solid);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #2f2837);
  background-color: var(--tab-container-background, rgb(47, 40, 55));
  border-left-color: rgb(78, 69, 96);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body html {
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(160, 167, 196));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(160, 167, 196));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(160, 167, 196));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(160, 167, 196));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(138, 92, 245, 0.3));
  color: var(--text-normal, rgb(255, 255, 255));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(160, 167, 196));
  font-size: 14px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(125, 127, 149);
  border-radius: 8px;
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(127, 131, 161));
  font-family: "??", "??", "??", Arima, cursive;
  outline: rgb(127, 131, 161) none 0px;
  text-decoration-color: rgb(127, 131, 161);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body a.internal-link.broken {
  font-family: "??", "??", Arima, cursive;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body dt {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(125, 127, 149));
}

html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(47, 40, 55));
  font-family: "??", "??", Arima, cursive;
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body table {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  width: 662px;
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(47, 40, 55));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-width: 0px;
  border-left-color: rgb(78, 69, 96);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
  border-top-color: rgb(78, 69, 96);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(160, 167, 196));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-width: 0px;
  border-left-color: rgb(78, 69, 96);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(78, 69, 96);
  border-right-width: 0px;
  border-top-color: rgb(78, 69, 96);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(160, 167, 196));
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(197, 182, 252);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(197, 182, 252);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(65, 59, 78));
  border-bottom-color: rgb(78, 69, 96);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(160, 167, 196));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(65, 59, 78));
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, #413b4e);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 167, 196);
  border-radius: 10px;
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(65, 59, 78));
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(125, 127, 149);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(125, 127, 149);
  border-right-color: rgb(125, 127, 149);
  border-top-color: rgb(125, 127, 149);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(127, 131, 161);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(127, 131, 161);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(160, 167, 196);
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 51, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 51, 71);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(241, 144, 112);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(125, 127, 149);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 210, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 132, 199);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 111, 210, 194);
  background: rgba(111, 210, 194, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 220, 118, 167);
  background: rgba(220, 118, 167, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-warning, 241, 144, 112);
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 181, 132, 199);
  background: rgba(181, 132, 199, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 225, 120, 132);
  background: rgba(225, 120, 132, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 136, 198, 227);
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 136, 198, 227);
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 241, 144, 112);
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 117, 194, 151);
  background: rgba(117, 194, 151, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 111, 210, 194);
  background: rgba(111, 210, 194, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 136, 198, 227);
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 241, 144, 112);
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(160, 167, 196);
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
  background-color: rgb(85, 84, 110);
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  color: var(--text-normal, rgb(160, 167, 196));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(59, 51, 71));
  border-bottom-color: rgb(98, 111, 134);
  border-left-color: rgb(98, 111, 134);
  border-right-color: rgb(98, 111, 134);
  border-top-color: rgb(98, 111, 134);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(160, 167, 196);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(160, 167, 196) none 0px;
  text-decoration-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(98, 111, 134);
  border-left-color: rgb(98, 111, 134);
  border-right-color: rgb(98, 111, 134);
  border-top-color: rgb(98, 111, 134);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 40, 55);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(160, 167, 196));
  font-family: var(--h1-font, "??", "??", Arima, cursive);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(160, 167, 196));
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  color: var(--h2-color, rgb(160, 167, 196));
  font-family: var(--h2-font, "??", "??", Arima, cursive);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(160, 167, 196));
  font-family: var(--inline-title-font, "??", "??", Arima, cursive);
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  color: var(--h3-color, rgb(160, 167, 196));
  font-family: var(--h3-font, "??", "??", Arima, cursive);
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, rgb(160, 167, 196));
  font-family: var(--h4-font, "??", "??", Arima, cursive);
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(160, 167, 196));
  font-family: var(--h5-font, "??", "??", Arima, cursive);
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(160, 167, 196));
  font-family: var(--h6-font, "??", "??", Arima, cursive);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-right-style: var(--line-style, solid);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 136, 198, 227);
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(127, 131, 161));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(127, 131, 161));
  font-family: "??", "??", "??", Arima, cursive;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(160, 167, 196);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, rgb(127, 131, 161));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(47, 40, 55));
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  border-top-left-radius: 10px;
  color: var(--status-bar-text-color, rgb(127, 131, 161));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(127, 131, 161);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(160, 167, 196);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(127, 131, 161));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(127, 131, 161);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(127, 131, 161));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(127, 131, 161);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, rgb(127, 131, 161));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(127, 131, 161);
  stroke: rgb(127, 131, 161);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(125, 127, 149);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(125, 127, 149);
  border-right-color: rgb(125, 127, 149);
  border-top-color: rgb(125, 127, 149);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-faint, rgb(125, 127, 149));
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(125, 127, 149));
  font-family: "??", "??", "??", Arima, cursive;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(160, 167, 196));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(47, 40, 55));
  border-color: rgb(160, 167, 196);
}`,
    bases: `html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(47, 40, 55));
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(78, 69, 96);
  color: var(--table-header-color, rgb(160, 167, 196));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(78, 69, 96);
  border-left-color: rgb(78, 69, 96);
  border-right-color: rgb(78, 69, 96);
  border-top-color: rgb(78, 69, 96);
  color: var(--text-muted, rgb(127, 131, 161));
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(127, 131, 161);
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  color: rgb(127, 131, 161);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(78, 69, 96);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(127, 131, 161);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(59, 51, 71));
  color: var(--text-normal, rgb(160, 167, 196));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(160, 167, 196);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(47, 40, 55));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(160, 167, 196));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body abbr {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(127, 131, 161);
  border-left-color: rgb(127, 131, 161);
  border-right-color: rgb(127, 131, 161);
  border-top-color: rgb(127, 131, 161);
  color: var(--text-normal, rgb(127, 131, 161));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(65, 59, 78));
  border-bottom-color: rgb(160, 167, 196);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(160, 167, 196));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(160, 167, 196);
  border-left-color: rgb(160, 167, 196);
  border-right-color: rgb(160, 167, 196);
  border-top-color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body sub {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body summary {
  color: rgb(160, 167, 196);
}

html[saved-theme="dark"] body sup {
  color: rgb(160, 167, 196);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 323;
  --accent-l: 65%;
  --accent-s: 30%;
  --background-modifier-border: var(--color-base-30, #cec2c577);
  --background-modifier-border-focus: var(--color-base-40, #b6a4b2);
  --background-modifier-border-hover: var(--color-base-35, #b5a7ac);
  --background-modifier-error: var(--color-red, #e17884);
  --background-modifier-error-hover: var(--color-red, #e17884);
  --background-modifier-error-rgb: var(--color-red-rgb, 225, 120, 132);
  --background-modifier-form-field: var(--color-base-00, #f8f3f2);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #f8f3f2);
  --background-modifier-success: var(--color-green, #75c297);
  --background-modifier-success-rgb: var(--color-green-rgb, 117, 194, 151);
  --background-primary: var(--color-base-00, #f8f3f2);
  --background-primary-alt: var(--color-base-10, #f0e9e4);
  --background-secondary: var(--color-base-20, #f4ebeb);
  --background-secondary-alt: var(--color-base-05, #faf3f1);
  --bases-cards-background: var(--background-primary, #f8f3f2);
  --bases-cards-cover-background: var(--background-primary-alt, #f0e9e4);
  --bases-cards-radius: var(--radius-m, 10px);
  --bases-embed-border-color: var(--background-modifier-border, #cec2c577);
  --bases-embed-border-radius: var(--radius-s, 8px);
  --bases-group-heading-property-color: var(--text-muted, #685a68);
  --bases-table-border-color: var(--table-border-color, #cec2c577);
  --bases-table-cell-background-active: var(--background-primary, #f8f3f2);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #f0e9e4);
  --bases-table-cell-background-selected: var(--table-selection, hsla(323, 30%, 65%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 8px);
  --bases-table-group-background: var(--background-primary-alt, #f0e9e4);
  --bases-table-header-background: var(--background-primary, #f8f3f2);
  --bases-table-header-color: var(--text-muted, #685a68);
  --bases-table-summary-background: var(--background-primary, #f8f3f2);
  --blockquote-background-color: var(--background-secondary-alt, #faf3f1);
  --blockquote-border-color: var(--interactive-accent, hsl(322, 30.3%, 69.875%));
  --blockquote-border-thickness: 2.5px;
  --blockquote-color: var(--text-normal, #594f67);
  --border-radius-average: 11px;
  --callout-bug: var(--color-pink-rgb, 220, 118, 167);
  --callout-default: var(--color-blue-rgb, 136, 198, 227);
  --callout-error: var(--color-red-rgb, 225, 120, 132);
  --callout-example: var(--color-purple-rgb, 181, 132, 199);
  --callout-fail: var(--color-red-rgb, 225, 120, 132);
  --callout-important: var(--color-cyan-rgb, 111, 210, 194);
  --callout-info: var(--color-blue-rgb, 136, 198, 227);
  --callout-question: var(--color-orange-rgb, 241, 144, 112);
  --callout-radius: var(--radius-s, 8px);
  --callout-success: var(--color-green-rgb, 117, 194, 151);
  --callout-summary: var(--color-cyan-rgb, 111, 210, 194);
  --callout-tip: var(--color-cyan-rgb, 111, 210, 194);
  --callout-todo: var(--color-blue-rgb, 136, 198, 227);
  --callout-warning: var(--color-orange-rgb, 241, 144, 112);
  --canvas-background: var(--background-primary, #f8f3f2);
  --canvas-card-label-color: var(--text-faint, #a391a3);
  --canvas-color-1: var(--color-red-rgb, 225, 120, 132);
  --canvas-color-2: var(--color-orange-rgb, 241, 144, 112);
  --canvas-color-3: var(--color-yellow-rgb, 255, 168, 46);
  --canvas-color-4: var(--color-green-rgb, 117, 194, 151);
  --canvas-color-5: var(--color-cyan-rgb, 111, 210, 194);
  --canvas-color-6: var(--color-purple-rgb, 181, 132, 199);
  --canvas-controls-radius: var(--radius-s, 8px);
  --canvas-dot-pattern: var(--color-base-30, #cec2c577);
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, #594f67);
  --checkbox-border-color: var(--text-faint, #a391a3);
  --checkbox-border-color-hover: var(--text-muted, #685a68);
  --checkbox-color: var(--interactive-accent, hsl(322, 30.3%, 69.875%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(320, 30.6%, 74.75%));
  --checkbox-marker-color: var(--background-primary, #f8f3f2);
  --checkbox-radius: var(--radius-s, 8px);
  --checklist-done-color: var(--text-muted, #685a68);
  --checklist-done-decoration: none;
  --clickable-icon-radius: var(--radius-s, 8px);
  --code-background: var(--background-primary-alt, #f0e9e4);
  --code-border-color: var(--background-modifier-border, #cec2c577);
  --code-comment: var(--text-faint, #a391a3);
  --code-function: var(--color-yellow, #dcb46f);
  --code-important: var(--color-orange, #f19070);
  --code-keyword: var(--color-pink, #dc76a7);
  --code-normal: var(--text-normal, #594f67);
  --code-operator: var(--color-red, #e17884);
  --code-property: var(--color-cyan, #6fd2c2);
  --code-punctuation: var(--text-muted, #685a68);
  --code-radius: var(--radius-s, 8px);
  --code-string: var(--color-green, #75c297);
  --code-tag: var(--color-red, #e17884);
  --code-value: var(--color-purple, #b584c7);
  --collapse-icon-color: var(--text-faint, #a391a3);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(323, 30%, 65%));
  --color-base-00: #f8f3f2;
  --color-base-05: #faf3f1;
  --color-base-10: #f0e9e4;
  --color-base-100: #594f67;
  --color-base-20: #f4ebeb;
  --color-base-25: #d9c9ca;
  --color-base-30: #cec2c577;
  --color-base-35: #b5a7ac;
  --color-base-40: #b6a4b2;
  --color-base-50: #a391a3;
  --color-base-60: #867786;
  --color-base-70: #685a68;
  --color-blue: #88c6e3;
  --color-blue-rgb: 136, 198, 227;
  --color-cyan: #6fd2c2;
  --color-cyan-rgb: 111, 210, 194;
  --color-green: #75c297;
  --color-green-rgb: 117, 194, 151;
  --color-orange: #f19070;
  --color-orange-rgb: 241, 144, 112;
  --color-pink: #dc76a7;
  --color-pink-rgb: 220, 118, 167;
  --color-purple: #b584c7;
  --color-purple-rgb: 181, 132, 199;
  --color-red: #e17884;
  --color-red-rgb: 225, 120, 132;
  --color-yellow: #dcb46f;
  --color-yellow-rgb: 255, 168, 46;
  --dark: var(--text-normal, var(--color-base-100, #594f67));
  --darkgray: var(--text-normal, var(--color-base-100, #594f67));
  --divider-color: var(--background-modifier-border, #cec2c577);
  --divider-color-hover: var(--interactive-accent, hsl(322, 30.3%, 69.875%));
  --divider-width: 0px;
  --dropdown-background: var(--interactive-normal, #f8f3f2);
  --dropdown-background-hover: var(--interactive-hover, #f0e9e4);
  --file-header-background: var(--background-primary, #f8f3f2);
  --file-header-background-focused: var(--background-primary, #f8f3f2);
  --file-header-font: var(--font-interface, "Arima", cursive);
  --flair-background: var(--interactive-normal, #f8f3f2);
  --flair-color: var(--text-normal, #594f67);
  --font-default: "Arima", cursive;
  --font-mermaid: var(--font-text, "Arima", cursive);
  --footnote-divider-color: var(--metadata-divider-color, #cec2c577);
  --footnote-id-color: var(--text-muted, #685a68);
  --footnote-id-color-no-occurrences: var(--text-faint, #a391a3);
  --footnote-line-height: var(--line-height-normal, 1.7);
  --footnote-radius: var(--radius-s, 8px);
  --graph-node: var(--text-muted, #685a68);
  --graph-node-attachment: var(--color-yellow, #dcb46f);
  --graph-node-focused: var(--text-accent, hsl(323, 30%, 65%));
  --graph-node-tag: var(--color-green, #75c297);
  --graph-node-unresolved: var(--text-faint, #a391a3);
  --graph-text: var(--text-normal, #594f67);
  --gray: var(--text-muted, var(--color-base-70, #685a68));
  --h1-color: var(--text-normal, #594f67);
  --h2-color: var(--text-normal, #594f67);
  --h2-weight: 600;
  --h3-color: var(--text-normal, #594f67);
  --h3-weight: 600;
  --h4-color: var(--text-normal, #594f67);
  --h4-weight: 600;
  --h5-color: var(--text-normal, #594f67);
  --h5-line-height: var(--line-height-normal, 1.7);
  --h5-weight: 600;
  --h6-color: var(--text-normal, #594f67);
  --h6-line-height: var(--line-height-normal, 1.7);
  --h6-variant: small-caps;
  --heading-formatting: var(--text-faint, #a391a3);
  --highlight: var(--text-highlight-bg, hsl(
    var(--accent-h),
    var(--accent-s),
    var(--accent-l),
    0.2
  ));
  --hr-color: var(--background-modifier-border, #cec2c577);
  --icon-color: var(--text-muted, #685a68);
  --icon-color-active: var(--text-accent, hsl(323, 30%, 65%));
  --icon-color-focused: var(--text-normal, #594f67);
  --icon-color-hover: var(--text-muted, #685a68);
  --inline-title-color: var(--h1-color, #594f67);
  --input-date-separator: var(--text-faint, #a391a3);
  --input-placeholder-color: var(--text-faint, #a391a3);
  --interactive-accent: var(--color-accent-1, hsl(322, 30.3%, 69.875%));
  --interactive-accent-hover: var(--color-accent-2, hsl(320, 30.6%, 74.75%));
  --interactive-accent-hsl: var(--color-accent-hsl, 323, 30%, 65%);
  --interactive-hover: var(--color-base-10, #f0e9e4);
  --interactive-normal: var(--color-base-00, #f8f3f2);
  --light: var(--background-primary, var(--color-base-00, #f8f3f2));
  --lightgray: var(--background-secondary, var(--color-base-20, #f4ebeb));
  --line-height-normal: 1.7;
  --line-style: solid;
  --link-color: var(--text-accent, hsl(323, 30%, 65%));
  --link-color-hover: var(--text-accent-hover, hsl(320, 30.6%, 74.75%));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(323, 30%, 65%));
  --link-external-color-hover: var(--text-accent-hover, hsl(320, 30.6%, 74.75%));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, hsl(323, 30%, 65%));
  --list-marker-color: var(--text-faint, #a391a3);
  --list-marker-color-collapsed: var(--text-accent, hsl(323, 30%, 65%));
  --list-marker-color-hover: var(--text-muted, #685a68);
  --menu-background: var(--background-secondary, #f4ebeb);
  --menu-border-color: var(--background-modifier-border-hover, #b5a7ac);
  --menu-radius: var(--radius-m, 10px);
  --metadata-border-color: var(--background-modifier-border, #cec2c577);
  --metadata-divider-color: var(--background-modifier-border, #cec2c577);
  --metadata-input-font: var(--font-interface, "Arima", cursive);
  --metadata-input-text-color: var(--text-normal, #594f67);
  --metadata-label-font: var(--font-interface, "Arima", cursive);
  --metadata-label-text-color: var(--text-muted, #685a68);
  --metadata-label-text-color-hover: var(--text-muted, #685a68);
  --modal-background: var(--background-primary, #f8f3f2);
  --modal-radius: var(--radius-l, 12px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #a391a3);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #a391a3);
  --nav-heading-color: var(--text-normal, #594f67);
  --nav-heading-color-collapsed: var(--text-faint, #a391a3);
  --nav-heading-color-collapsed-hover: var(--text-muted, #685a68);
  --nav-heading-color-hover: var(--text-normal, #594f67);
  --nav-item-color: var(--text-muted, #685a68);
  --nav-item-color-active: var(--text-normal, #594f67);
  --nav-item-color-highlighted: var(--text-accent, hsl(323, 30%, 65%));
  --nav-item-color-hover: var(--text-normal, #594f67);
  --nav-item-color-selected: var(--text-normal, #594f67);
  --nav-item-radius: var(--radius-s, 8px);
  --nav-tag-color: var(--text-faint, #a391a3);
  --nav-tag-color-active: var(--text-muted, #685a68);
  --nav-tag-color-hover: var(--text-muted, #685a68);
  --nav-tag-radius: var(--radius-s, 8px);
  --pdf-background: var(--background-primary, #f8f3f2);
  --pdf-page-background: var(--background-primary, #f8f3f2);
  --pdf-sidebar-background: var(--background-primary, #f8f3f2);
  --pill-border-color: var(--background-modifier-border, #cec2c577);
  --pill-border-color-hover: var(--background-modifier-border-hover, #b5a7ac);
  --pill-color: var(--text-muted, #685a68);
  --pill-color-hover: var(--text-normal, #594f67);
  --pill-color-remove: var(--text-faint, #a391a3);
  --pill-color-remove-hover: var(--text-accent, hsl(323, 30%, 65%));
  --prompt-background: var(--background-primary, #f8f3f2);
  --prompt-width: 450px;
  --radius-l: calc(var(--border-radius-average) + 1px);
  --radius-m: calc(var(--border-radius-average) - 1px);
  --radius-s: calc(var(--border-radius-average) - 3px);
  --radius-xl: calc(var(--border-radius-average) + 3px);
  --raised-background: var(--blur-background, color-mix(in srgb, #f8f3f2 65%, transparent) linear-gradient(#f8f3f2, color-mix(in srgb, #f8f3f2 65%, transparent)));
  --ribbon-background: var(--background-secondary, #f4ebeb);
  --ribbon-background-collapsed: var(--background-primary, transparent);
  --scrollbar-radius: var(--radius-l, 12px);
  --search-clear-button-color: var(--text-muted, #685a68);
  --search-icon-color: var(--text-muted, #685a68);
  --search-result-background: var(--background-primary, #f8f3f2);
  --secondary: var(--text-accent, var(--color-accent, hsl(323, 30%, 65%)));
  --setting-group-heading-color: var(--text-normal, #594f67);
  --setting-items-background: var(--background-primary-alt, #f0e9e4);
  --setting-items-border-color: var(--background-modifier-border, #cec2c577);
  --setting-items-radius: var(--radius-l, 12px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #685a68);
  --shiki-code-background: var(--code-background, #f0e9e4);
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-comment: var(--text-faint, #a391a3);
  --shiki-code-function: var(--color-green, #75c297);
  --shiki-code-important: var(--color-orange, #f19070);
  --shiki-code-keyword: var(--color-pink, #dc76a7);
  --shiki-code-normal: var(--text-muted, #685a68);
  --shiki-code-property: var(--color-cyan, #6fd2c2);
  --shiki-code-punctuation: var(--text-muted, #685a68);
  --shiki-code-string: var(--color-yellow, #dcb46f);
  --shiki-code-value: var(--color-purple, #b584c7);
  --shiki-gutter-border-color: var(--background-modifier-border, #cec2c577);
  --shiki-gutter-text-color: var(--text-faint, #a391a3);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #685a68);
  --shiki-highlight-neutral: var(--shiki-code-normal, #685a68);
  --shiki-terminal-dots-color: var(--text-faint, #a391a3);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #b5a7ac);
  --slider-track-background: var(--background-modifier-border, #cec2c577);
  --status-bar-background: var(--background-secondary, #f4ebeb);
  --status-bar-border-color: var(--divider-color, #cec2c577);
  --status-bar-radius: var(--radius-m, 10px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, #685a68);
  --suggestion-background: var(--background-primary, #f8f3f2);
  --sync-avatar-color-1: var(--color-red, #e17884);
  --sync-avatar-color-2: var(--color-orange, #f19070);
  --sync-avatar-color-3: var(--color-yellow, #dcb46f);
  --sync-avatar-color-4: var(--color-green, #75c297);
  --sync-avatar-color-5: var(--color-cyan, #6fd2c2);
  --sync-avatar-color-6: var(--color-blue, #88c6e3);
  --sync-avatar-color-7: var(--color-purple, #b584c7);
  --sync-avatar-color-8: var(--color-pink, #dc76a7);
  --tab-background-active: var(--background-primary, #f8f3f2);
  --tab-container-background: var(--background-secondary, #f4ebeb);
  --tab-curve: 0px;
  --tab-divider-color: var(--background-modifier-border-hover, transparent);
  --tab-font-size: var(--font-ui-small, 0.84em);
  --tab-outline-color: var(--divider-color, #cec2c577);
  --tab-outline-width: var(--border-width, 1px);
  --tab-radius: var(--radius-s, 8px);
  --tab-radius-active: var(--radius-s, 8px);
  --tab-switcher-background: var(--background-secondary, #f4ebeb);
  --tab-switcher-preview-radius: var(--radius-xl, 14px);
  --tab-text-color: var(--text-faint, #a391a3);
  --tab-text-color-active: var(--text-muted, #685a68);
  --tab-text-color-focused: var(--text-muted, #685a68);
  --tab-text-color-focused-active: var(--text-muted, #685a68);
  --tab-text-color-focused-active-current: var(--color-accent-2, hsl(320, 30.6%, 74.75%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(323, 30%, 65%));
  --tab-width: 240px;
  --table-add-button-border-color: var(--background-modifier-border, #cec2c577);
  --table-add-button-border-width: var(--table-border-width, 0px);
  --table-border-color: var(--background-modifier-border, #cec2c577);
  --table-border-width: 0px;
  --table-column-first-border-width: var(--table-border-width, 0px);
  --table-column-last-border-width: var(--table-border-width, 0px);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(322, 30.3%, 69.875%));
  --table-drag-handle-color: var(--text-faint, #a391a3);
  --table-header-border-color: var(--table-border-color, #cec2c577);
  --table-header-border-width: var(--table-border-width, 0px);
  --table-header-color: var(--text-normal, #594f67);
  --table-row-alt-background: var(--color-base-05, #faf3f1);
  --table-row-last-border-width: var(--table-border-width, 0px);
  --table-selection-border-color: var(--interactive-accent, hsl(322, 30.3%, 69.875%));
  --tag-color: var(--text-accent, hsl(323, 30%, 65%));
  --tag-color-hover: var(--text-accent, hsl(323, 30%, 65%));
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(320, 30.6%, 74.75%)));
  --text-accent: var(--color-accent, hsl(323, 30%, 65%));
  --text-accent-hover: var(--color-accent-2, hsl(320, 30.6%, 74.75%));
  --text-error: var(--color-red, #e17884);
  --text-faint: var(--color-base-50, #a391a3);
  --text-highlight-bg: hsl(
    var(--accent-h),
    var(--accent-s),
    var(--accent-l),
    0.2
  );
  --text-muted: var(--color-base-70, #685a68);
  --text-normal: var(--color-base-100, #594f67);
  --text-success: var(--color-green, #75c297);
  --text-warning: var(--color-orange, #f19070);
  --textHighlight: var(--text-highlight-bg, hsl(
    var(--accent-h),
    var(--accent-s),
    var(--accent-l),
    0.2
  ));
  --titlebar-background: var(--background-secondary, #f4ebeb);
  --titlebar-background-focused: var(--background-secondary-alt, #faf3f1);
  --titlebar-border-color: var(--background-modifier-border, #cec2c577);
  --titlebar-text-color: var(--text-muted, #685a68);
  --titlebar-text-color-focused: var(--text-normal, #594f67);
  --vault-profile-color: var(--text-normal, #594f67);
  --vault-profile-color-hover: var(--vault-profile-color, #594f67);
  --workspace-background: var(--background-secondary, #f4ebeb);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #f4ebeb);
  background-color: var(--tab-container-background, rgb(244, 235, 235));
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-style: var(--line-style, solid);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #f4ebeb);
  background-color: var(--tab-container-background, rgb(244, 235, 235));
  border-left-color: rgba(206, 194, 197, 0.467);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body html {
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(89, 79, 103));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(89, 79, 103));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(89, 79, 103));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(89, 79, 103));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(193, 139, 172, 0.2));
  color: var(--text-normal, rgb(89, 79, 103));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body del {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(89, 79, 103));
  font-size: 14px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(163, 145, 163);
  border-radius: 8px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(201, 155, 184));
  border-color: rgb(201, 155, 184);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(104, 90, 104));
  font-family: "??", "??", "??", Arima, cursive;
  outline: rgb(104, 90, 104) none 0px;
  text-decoration-color: rgb(104, 90, 104);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(193, 139, 172));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration-color: rgb(193, 139, 172);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(193, 139, 172));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration-color: rgb(193, 139, 172);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(193, 139, 172));
  font-family: "??", "??", Arima, cursive;
  outline: rgb(193, 139, 172) none 0px;
  text-decoration: rgba(193, 139, 172, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(193, 139, 172, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body dt {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ol > li {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ul > li {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(163, 145, 163));
}

html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgb(250, 243, 241));
  font-family: "??", "??", Arima, cursive;
  font-style: var(--blockquote-font-style, italic);
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body table {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  width: 662px;
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(250, 243, 241));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-width: 0px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-width: 0px;
  color: var(--table-text-color, rgb(89, 79, 103));
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-width: 0px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-width: 0px;
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(89, 79, 103));
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(210, 171, 197);
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(210, 171, 197);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(240, 233, 228));
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(89, 79, 103));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(240, 233, 228));
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body figcaption {
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, #f0e9e4);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(89, 79, 103);
  border-radius: 10px;
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(240, 233, 228));
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(201, 155, 184);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(163, 145, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(163, 145, 163);
  border-right-color: rgb(163, 145, 163);
  border-top-color: rgb(163, 145, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(104, 90, 104);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(104, 90, 104);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(89, 79, 103);
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 243, 242);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(248, 243, 242);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(241, 144, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(163, 145, 163);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(111, 210, 194);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(220, 180, 111);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(181, 132, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(225, 120, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(117, 194, 151);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 111, 210, 194);
  background: rgba(111, 210, 194, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 220, 118, 167);
  background: rgba(220, 118, 167, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-warning, 241, 144, 112);
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 181, 132, 199);
  background: rgba(181, 132, 199, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 225, 120, 132);
  background: rgba(225, 120, 132, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 136, 198, 227);
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 136, 198, 227);
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 241, 144, 112);
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(158, 158, 158, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 117, 194, 151);
  background: rgba(117, 194, 151, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 111, 210, 194);
  background: rgba(111, 210, 194, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 136, 198, 227);
  background: rgba(136, 198, 227, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 241, 144, 112);
  background: rgba(241, 144, 112, 0.17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(var(--callout-color), 0.17);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 136, 198, 227;
  border-bottom-color: rgb(136, 198, 227);
  border-left-color: rgb(136, 198, 227);
  border-right-color: rgb(136, 198, 227);
  border-top-color: rgb(136, 198, 227);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(136, 198, 227));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(89, 79, 103);
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
  background-color: rgb(248, 243, 242);
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  color: var(--text-normal, rgb(89, 79, 103));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(248, 243, 242));
  border-bottom-color: rgb(182, 164, 178);
  border-left-color: rgb(182, 164, 178);
  border-right-color: rgb(182, 164, 178);
  border-top-color: rgb(182, 164, 178);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(89, 79, 103);
  font-family: "??", "??", Arima, cursive;
  outline: rgb(89, 79, 103) none 0px;
  text-decoration-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(182, 164, 178);
  border-left-color: rgb(182, 164, 178);
  border-right-color: rgb(182, 164, 178);
  border-top-color: rgb(182, 164, 178);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 235, 235);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(323, 30%, 65%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(323, 30%, 65%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(323, 30%, 65%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(323, 30%, 65%, 0.15));
  --pill-color: var(--tag-color, hsl(323, 30%, 65%));
  --pill-color-hover: var(--tag-color-hover, hsl(323, 30%, 65%));
  --pill-color-remove: var(--tag-color, hsl(323, 30%, 65%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(323, 30%, 65%));
  background-color: var(--pill-background, rgba(193, 139, 172, 0.1));
  border-bottom-color: rgba(193, 139, 172, 0.15);
  border-left-color: rgba(193, 139, 172, 0.15);
  border-right-color: rgba(193, 139, 172, 0.15);
  border-top-color: rgba(193, 139, 172, 0.15);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(193, 139, 172);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(89, 79, 103));
  font-family: var(--h1-font, "??", "??", Arima, cursive);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(89, 79, 103));
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  color: var(--h2-color, rgb(89, 79, 103));
  font-family: var(--h2-font, "??", "??", Arima, cursive);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(89, 79, 103));
  font-family: var(--inline-title-font, "??", "??", Arima, cursive);
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  color: var(--h3-color, rgb(89, 79, 103));
  font-family: var(--h3-font, "??", "??", Arima, cursive);
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, rgb(89, 79, 103));
  font-family: var(--h4-font, "??", "??", Arima, cursive);
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, rgb(89, 79, 103));
  font-family: var(--h5-font, "??", "??", Arima, cursive);
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(89, 79, 103));
  font-family: var(--h6-font, "??", "??", Arima, cursive);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-right-style: var(--line-style, solid);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 136, 198, 227);
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(104, 90, 104));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(104, 90, 104));
  font-family: "??", "??", "??", Arima, cursive;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(89, 79, 103);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, rgb(104, 90, 104));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(244, 235, 235));
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  border-top-left-radius: 10px;
  color: var(--status-bar-text-color, rgb(104, 90, 104));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(104, 90, 104);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(89, 79, 103);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(104, 90, 104));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(104, 90, 104);
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(104, 90, 104));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(104, 90, 104);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--icon-color, rgb(104, 90, 104));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(104, 90, 104);
  stroke: rgb(104, 90, 104);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(163, 145, 163);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(163, 145, 163);
  border-right-color: rgb(163, 145, 163);
  border-top-color: rgb(163, 145, 163);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--text-faint, rgb(163, 145, 163));
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(163, 145, 163));
  font-family: "??", "??", "??", Arima, cursive;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(89, 79, 103));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(248, 243, 242));
  border-color: rgb(89, 79, 103);
}`,
    bases: `html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(250, 243, 241));
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(206, 194, 197, 0.467);
  color: var(--table-header-color, rgb(89, 79, 103));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(206, 194, 197, 0.467);
  border-left-color: rgba(206, 194, 197, 0.467);
  border-right-color: rgba(206, 194, 197, 0.467);
  border-top-color: rgba(206, 194, 197, 0.467);
  color: var(--text-muted, rgb(104, 90, 104));
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(104, 90, 104);
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  color: rgb(104, 90, 104);
  font-family: "??", "??", Arima, cursive;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(206, 194, 197, 0.467);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(104, 90, 104);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(104, 90, 104);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(323, 30%, 65%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(323, 30%, 65%, 0.2));
  --pill-border-color: var(--tag-border-color, hsla(323, 30%, 65%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(323, 30%, 65%, 0.15));
  --pill-color: var(--tag-color, hsl(323, 30%, 65%));
  --pill-color-hover: var(--tag-color-hover, hsl(323, 30%, 65%));
  --pill-color-remove: var(--tag-color, hsl(323, 30%, 65%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(323, 30%, 65%));
  background-color: var(--pill-background, rgba(193, 139, 172, 0.1));
  color: var(--pill-color, rgb(193, 139, 172));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(104, 90, 104);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(248, 243, 242));
  color: var(--text-normal, rgb(89, 79, 103));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(89, 79, 103);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(244, 235, 235));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(89, 79, 103));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body abbr {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(104, 90, 104);
  border-left-color: rgb(104, 90, 104);
  border-right-color: rgb(104, 90, 104);
  border-top-color: rgb(104, 90, 104);
  color: var(--text-normal, rgb(104, 90, 104));
  font-family: "??", "??", "??", Arima, cursive;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(240, 233, 228));
  border-bottom-color: rgb(89, 79, 103);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--code-normal, rgb(89, 79, 103));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(89, 79, 103);
  border-left-color: rgb(89, 79, 103);
  border-right-color: rgb(89, 79, 103);
  border-top-color: rgb(89, 79, 103);
}

html[saved-theme="light"] body sub {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body summary {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body sup {
  color: rgb(89, 79, 103);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(193, 139, 172, 0.1));
  border-bottom-color: rgba(193, 139, 172, 0.15);
  border-left-color: rgba(193, 139, 172, 0.15);
  border-right-color: rgba(193, 139, 172, 0.15);
  border-top-color: rgba(193, 139, 172, 0.15);
  color: var(--tag-color, rgb(193, 139, 172));
}`,
  },
  classSettings: {
    "theme-default": {
      general: `.theme-default .horizontal-tab-nav-item.is-active {
color: var(--text-on-accent) !important;
}

.colorful-headings-alt.theme-default {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}

.colorful-headings.theme-default {
--h1-color: rgb(217, 174, 180);
--h2-color: rgb(218, 178, 201);
--h3-color: rgb(200, 165, 200);
--h4-color: rgb(191, 165, 199);
--h5-color: rgb(158, 142, 184);
--h6-color: rgb(156, 156, 190);
}

.theme-default {
--font-default: "Arima", cursive;
}`,
      dark: `.theme-default .markdown-rendered mark, .theme-default .cm-s-obsidian span.cm highlight {
color: white;
}

.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 225, 120, 132;
--color-red: #e17884;
--color-green-rgb: 117, 194, 151;
--color-green: #75c297;
--color-orange-rgb: 241, 144, 112;
--color-orange: #f19070;
--color-yellow-rgb: 255, 168, 46;
--color-yellow: #dcb46f;
--color-cyan-rgb: 111, 210, 194;
--color-cyan: #6fd2c2;
--color-blue-rgb: 136, 198, 227;
--color-blue: #88c6e3;
--color-purple-rgb: 181, 132, 199;
--color-purple: #b584c7;
--color-pink-rgb: 220, 118, 167;
--color-pink: #dc76a7;
--color-base-00: #3b3347;
--color-base-10: #413b4e;
--color-base-20: #2f2837;
--color-base-25: #55546e;
--color-base-30: #4e4560;
--color-base-35: #545e76;
--color-base-40: rgb(98, 111, 134);
--color-base-50: rgb(125, 127, 149);
--color-base-60: rgb(103, 129, 148);
--color-base-70: #7f83a1;
--color-base-100: #a0a7c4;
--background-secondary-alt: var(--color-base-20);
}`,
      light: `.theme-light {
--accent-h: 323;
--accent-s: 30%;
--accent-l: 65%;
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 225, 120, 132;
--color-red: #e17884;
--color-green-rgb: 117, 194, 151;
--color-green: #75c297;
--color-orange-rgb: 241, 144, 112;
--color-orange: #f19070;
--color-yellow-rgb: 255, 168, 46;
--color-yellow: #dcb46f;
--color-cyan-rgb: 111, 210, 194;
--color-cyan: #6fd2c2;
--color-blue-rgb: 136, 198, 227;
--color-blue: #88c6e3;
--color-purple-rgb: 181, 132, 199;
--color-purple: #b584c7;
--color-pink-rgb: 220, 118, 167;
--color-pink: #dc76a7;
--color-base-00: #f8f3f2;
--color-base-05: #faf3f1;
--color-base-10: #f0e9e4;
--color-base-20: #f4ebeb;
--color-base-25: #d9c9ca;
--color-base-30: #cec2c577;
--color-base-35: #b5a7ac;
--color-base-40: #b6a4b2;
--color-base-50: #a391a3;
--color-base-60: #867786;
--color-base-70: #685a68;
--color-base-100: #594f67;
}`,
    },
    "theme-crystal": {
      general: `body.classic-layout {
--ribbon-background-collapsed: transparent;
}

.theme-crystal .nav-file-title:hover {
color: var(--interactive-accent) !important;
}

.theme-crystal {
--font-default:
    "IBM Plex Sans", "Yu Micho", "Franklin Gothic", "Lucida Sans", sans-serif;
--nav-item-color-active: var(--color-accent);
}

.theme-crystal .nav-folder.mod-root > .nav-folder-title {
color: var(--color-accent);
font-weight: 900;
font-size: 1.25em;
}

.folder-rainbow-backgrounds.theme-crystal .nav-folder-title {
background-color: rgba(var(--rainbow-folder-color), 0.13);
border: 0.25px solid rgb(var(--rainbow-folder-color));
margin-bottom: 5px;
color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color-collapsed: rgb(var(--rainbow-folder-color));
}`,
      dark: `.colorful-headings.theme-crystal {
--h6-color: rgb(91, 117, 161);
--h5-color: rgb(140, 132, 190);
--h4-color: rgb(154, 118, 168);
--h3-color: rgb(191, 118, 151);
--h2-color: rgb(203, 120, 132);
--h1-color: rgb(208, 92, 92);
}

.theme-dark {
color-scheme: dark;
--vault-name-color: var(--color-accent-1);
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--accent-h: 0;
--accent-s: 65%;
--accent-l: 62%;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 228, 111, 125;
--color-red-rgb: 255, 0, 0;
--color-red-rgb: 255, 0, 0;
--color-red: #d96943;
--color-green-rgb: 8, 185, 78;
--color-green: #a2bb79;
--color-orange-rgb: 246, 78, 0;
--color-orange: #d58b69;
--color-yellow-rgb: 255, 128, 0;
--color-yellow: #c9b174;
--color-cyan-rgb: 0, 179, 149;
--color-cyan: #96b7aa;
--color-blue-rgb: 0, 181, 197;
--color-blue: #79a2ae;
--color-purple-rgb: 82, 131, 238;
--color-purple: #969cc1;
--color-pink-rgb: 126, 88, 216;
--color-pink: #b69ac2;
/*
    --color-base-00: #32373e;
    --color-base-10: #3c4249;
    --color-base-20: #1d1f22;
    --color-base-25: #4e545c;
    --color-base-30: #575e6765;
    --color-base-35: #697179;
    --color-base-40: #7b848e;
    --color-base-50: #8b949f;
    --color-base-60: #919ba6;
    --color-base-70: #757b82;
    --color-base-100: #a1abb7;
    */
--color-base-00: #2d323a;
--color-base-10: #3a3f42;
--color-base-20: #26272e;
--color-base-25: #262323;
--color-base-30: #373d48;
--color-base-35: #546a76;
--color-base-40: rgb(105, 122, 142);
--color-base-50: rgb(74, 98, 138);
--color-base-60: rgb(122, 139, 165);
--color-base-70: #65707d;
--color-base-100: #a4acb5;
}`,
      light: `.colorful-headings.theme-crystal {
--h1-color: rgb(91, 117, 161);
--h2-color: rgb(140, 132, 190);
--h3-color: rgb(154, 118, 168);
--h4-color: rgb(191, 118, 151);
--h5-color: rgb(203, 120, 132);
--h6-color: rgb(208, 92, 92);
}

.theme-light .vertical-tab-nav-item {
color: var(--text-muted);
}

.theme-light {
color-scheme: light;
--icon-color-focused: var(--interactive-accent);
--highlight-mix-blend-mode: darken;
--vault-name-color: var(--color-accent-1);
--accent-h: 0;
--accent-s: 69%;
--accent-l: 59%;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 255, 0, 0;
--color-red: #c75d5d;
--color-green-rgb: 8, 185, 78;
--color-green: #a2bb79;
--color-orange-rgb: 246, 78, 0;
--color-orange: #d58b69;
--color-yellow-rgb: 255, 128, 0;
--color-yellow: #c9b174;
--color-cyan-rgb: 0, 179, 149;
--color-cyan: #96b7aa;
--color-blue-rgb: 0, 181, 197;
--color-blue: #79a2ae;
--color-purple-rgb: 82, 131, 238;
--color-purple: #969cc1;
--color-pink-rgb: 126, 88, 216;
--color-pink: #b69ac2;
--color-base-00: #e8e8e8;
--color-base-05: #e2e2e2;
--color-base-10: #dadada;
--color-base-20: #a8a8a8;
--color-base-25: #959595;
--color-base-30: #7b7b7b4c;
--color-base-35: #757575;
--color-base-40: #5e5e5e;
--color-base-50: #8d8d8d;
--color-base-60: #2f3234;
--color-base-70: #717171;
--color-base-100: #000000;
--background-secondary: var(--color-base-60);
/* 
    --color-base-00: #e2e9ed;
    --color-base-05: #c5d5de;
    --color-base-10: #ccd9e1;
    --color-base-20: #2c323b;
    --color-base-25: #bac5d0;
    --color-base-30: #5f728f41;
    --color-base-35: #e05f5f;
    --color-base-40: #9facbb;
    --color-base-50: #5877a2;
    --color-base-60: #7a5757;
    --color-base-70: #617686;
    --color-base-100: #222222;
    */
}`,
    },
    "theme-ash-old": {
      general: `body.classic-layout {
--ribbon-background-collapsed: transparent;
}

.theme-ash-old .nav-file-title:hover {
color: var(--interactive-accent) !important;
}

.theme-ash-old .nav-folder.mod-root > .nav-folder-title {
color: var(--color-accent);
font-weight: 700;
}

.theme-ash-old {
--font-default: "Hindi", "Moulpali", "Bahnschrift", sans-serif;
--nav-item-color-active: var(--color-accent);
}

.folder-rainbow-backgrounds.theme-ash-old .nav-folder-title {
background-color: rgba(var(--rainbow-folder-color), 0.13);
border: 0.25px solid rgb(var(--rainbow-folder-color));
margin-bottom: 5px;
color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color-collapsed: rgb(var(--rainbow-folder-color));
}`,
      dark: `.colorful-headings.theme-ash-old {
--h6-color: rgb(91, 117, 161);
--h5-color: rgb(140, 132, 190);
--h4-color: rgb(154, 118, 168);
--h3-color: rgb(191, 118, 151);
--h2-color: rgb(203, 120, 132);
--h1-color: rgb(208, 92, 92);
}

.theme-dark {
color-scheme: dark;
--vault-name-color: var(--color-accent-1);
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--accent-h: 5 !important;
--accent-s: 59% !important;
--accent-l: 60% !important;
--color-red-rgb: 228, 111, 125;
--color-red-rgb: 255, 0, 0;
--color-red: #ff0000;
--color-green-rgb: 8, 185, 78;
--color-green: #00c445;
--color-orange-rgb: 246, 78, 0;
--color-orange: #f64e00;
--color-yellow-rgb: 255, 128, 0;
--color-yellow: #ff8000;
--color-cyan-rgb: 0, 179, 149;
--color-cyan: #00b395;
--color-blue-rgb: 0, 181, 197;
--color-blue: #00b5c5;
--color-purple-rgb: 82, 131, 238;
--color-purple: #5283ee;
--color-pink-rgb: 126, 88, 216;
--color-pink: #7e58d8;
--color-base-00: #2d323a;
--color-base-10: #483437;
--color-base-20: #26272e;
--color-base-25: #262323;
--color-base-30: #373d48;
--color-base-35: #765454;
--color-base-40: rgb(105, 122, 142);
--color-base-50: rgb(142, 81, 81);
--color-base-60: rgb(202, 112, 112);
--color-base-70: #65707d;
--color-base-100: #b5a4a4;
}`,
      light: `.colorful-headings.theme-ash-old {
--h1-color: rgb(91, 117, 161);
--h2-color: rgb(140, 132, 190);
--h3-color: rgb(154, 118, 168);
--h4-color: rgb(191, 118, 151);
--h5-color: rgb(203, 120, 132);
--h6-color: rgb(208, 92, 92);
}

.theme-light .vertical-tab-nav-item {
color: var(--text-muted);
}

.theme-light {
color-scheme: light;
--icon-color-focused: var(--interactive-accent);
--highlight-mix-blend-mode: darken;
--vault-name-color: var(--color-accent-1);
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--accent-h: 0 !important;
--accent-s: 79% !important;
--accent-l: 59% !important;
--color-red-rgb: 255, 0, 0;
--color-red: #ff0000;
--color-green-rgb: 8, 185, 78;
--color-green: #00c445;
--color-orange-rgb: 246, 78, 0;
--color-orange: #f64e00;
--color-yellow-rgb: 255, 128, 0;
--color-yellow: #ff8000;
--color-cyan-rgb: 0, 179, 149;
--color-cyan: #00b395;
--color-blue-rgb: 0, 181, 197;
--color-blue: #00b5c5;
--color-purple-rgb: 82, 131, 238;
--color-purple: #5283ee;
--color-pink-rgb: 126, 88, 216;
--color-pink: #7e58d8;
--color-base-00: #e2e9ed;
--color-base-05: #c5d5de;
--color-base-10: #ccd9e1;
--color-base-20: #2c323b;
--color-base-25: #bac5d0;
--color-base-30: #5f728f41;
--color-base-35: #e05f5f;
--color-base-40: #9facbb;
--color-base-50: #5877a2;
--color-base-60: #7a5757;
--color-base-70: #617686;
--color-base-100: #222222;
}`,
    },
    "theme-anytype": {
      general: `.h1-bottom-border.colorful-headings.theme-anytype h1, .h1-bottom-border.colorful-headings.theme-anytype .HyperMD-header-1, .h2-bottom-border.colorful-headings.theme-anytype h2, .h2-bottom-border.colorful-headings.theme-anytype .HyperMD-header-2, .h3-bottom-border.colorful-headings.theme-anytype h3, .h3-bottom-border.colorful-headings.theme-anytype .HyperMD-header-3, .h4-bottom-border.colorful-headings.theme-anytype h4, .h4-bottom-border.colorful-headings.theme-anytype .HyperMD-header-4, .h5-bottom-border.colorful-headings.theme-anytype h5, .h5-bottom-border.colorful-headings.theme-anytype .HyperMD-header-5, .h6-bottom-border.colorful-headings.theme-anytype h6, .h6-bottom-border.colorful-headings.theme-anytype .HyperMD-header-6 {
border-bottom: none;
}

.checkbox-anytype input[type="checkbox"]:checked:after {
background-color: #1eabeb;
}

.colored-bold-and-italic {
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
}

.colorful-headings {
--h1-color: var(--text-normal);
--h2-color: var(--text-normal);
--h3-color: var(--text-normal);
--h4-color: var(--text-normal);
--h5-color: var(--text-normal);
--h6-color: var(--text-normal);
}

.colorful-headings-alt {
--h1-color: var(--color-blue);
--h2-color: var(--color-cyan);
--h3-color: var(--color-green);
--h4-color: var(--color-yellow);
--h5-color: var(--color-orange);
--h6-color: var(--color-red);
}

.colorful-headings h1, .colorful-headings .HyperMD-header-1 {
background-color: rgba(var(--color-red-rgb), 0.2);
padding: 5px 10px 5px 10px;
}

.colorful-headings h2, .colorful-headings .HyperMD-header-2 {
background-color: rgba(var(--color-orange-rgb), 0.3);
padding: 5px 10px 5px 10px;
}

.colorful-headings h3, .colorful-headings .HyperMD-header-3 {
background-color: rgba(var(--color-yellow-rgb), 0.3);
padding: 5px 10px 5px 10px;
}

.colorful-headings h4, .colorful-headings .HyperMD-header-4 {
background-color: rgba(var(--color-green-rgb), 0.3);
padding: 5px 0px 5px 10px;
}

.colorful-headings h5, .colorful-headings .HyperMD-header-5 {
background-color: rgba(var(--color-cyan-rgb), 0.3);
padding: 3px 10px 3px 10px;
}

.colorful-headings h6, .colorful-headings .HyperMD-header-6 {
background-color: rgba(var(--color-blue-rgb), 0.3);
padding: 3px 10px 3px 10px;
}

.theme-anytype {
--accent-h: 45 !important;
--accent-s: 100% !important;
--accent-l: 50% !important;
--callout-title-color: var(--text-normal);
--callout-quote: 216, 216, 216;
--callout-radius: 5px;
--font-default: "Inter", "Aevnir Next", sans-serif;
--color-red-rgb: 220, 83, 40;
--color-red: #dc5328;
--color-green-rgb: 139, 208, 49;
--color-green: #8bd031;
--color-orange-rgb: 241, 177, 56;
--color-orange: #f1b138;
--color-yellow-rgb: 234, 213, 60;
--color-yellow: #ead53c;
--color-cyan-rgb: 107, 200, 186;
--color-cyan: #6bc8ba;
--color-blue-rgb: 90, 171, 235;
--color-blue: #5aabeb;
--color-purple-rgb: 60, 100, 231;
--color-purple: #3c64e7;
--color-pink-rgb: 152, 89, 200;
--color-pink: #9859c8;
}

.callout-outlined .callout {
background-color: transparent !important;
border-width: 2px;
border-color: rgba(var(--callout-color), 0.75);
}

.callout-bordered .callout {
background-color: rgba(var(--callout-color), 0.3);
border-width: 2px;
}

.theme-anytype .callout-icon .svg-icon {
color: var(--text-normal);
}

.theme-anytype .callout-fold .svg-icon {
color: var(--text-normal);
}

.theme-anytype {
--list-marker-color: var(--text-normal);
}`,
      dark: `.theme-dark .callout {
background-color: rgba(var(--callout-color), 0.3);
}

.theme-dark {
color-scheme: dark;
--background-modifier-border: #323130;
--highlight-mix-blend-mode: lighten;
--color-base-00: #21201e;
--color-base-10: #32312f;
--color-base-20: rgb(28, 26, 23);
--color-base-25: #21201e;
--color-base-30: #2e2c29;
--color-base-35: #484643;
--color-base-40: #605d5a;
--color-base-50: #7b7974;
--color-base-60: #9c9994;
--color-base-70: #aeaba6;
--color-base-100: #ffffff;
}`,
      light: `.theme-light .callout {
background-color: rgba(var(--callout-color), 0.3);
}

.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-base-00: #ffffff;
--color-base-05: #f8f8f8;
--color-base-10: #f1f1f1;
--color-base-20: #fafafa;
--color-base-25: #f2f2f2;
--color-base-30: rgb(230, 230, 230);
--color-base-35: #d4d4d4;
--color-base-40: #bdbdbd;
--color-base-50: #a2a0a0;
--color-base-60: #7b7b7b;
--color-base-70: #999999;
--color-base-100: #2f2f2f;
}`,
    },
    "theme-celestial": {
      general: `.theme-celestial .nav-folder.mod-root > .nav-folder-title::before {
content: var(--theme-decoration);
padding-right: 8px;
text-align: center;
}

.theme-celestial .nav-folder.mod-root > .nav-folder-title {
color: var(--color-accent-2) !important;
font-size: 1.2em;
font-weight: bold;
text-align: center;
}

.theme-celestial .markdown-rendered hr::before, .theme-celestial .markdown-source-view hr::before {
font-size: 1.5em;
content: var(--theme-decoration);
display: inline-block;
position: absolute;
left: 50%;
transform: translate(-50%, -50%);
transform-origin: 50% 50%;
padding: 0.35rem;
color: var(--color-accent-1);
background-color: var(--background-primary);
z-index: 1;
}`,
      dark: `.theme-celestial .markdown-rendered mark, .theme-celestial .cm-s-obsidian span.cm highlight {
color: white;
}

.colorful-headings-alt {
--h1-color: #5684d9;
--h2-color: rgb(119, 148, 214);
--h3-color: #6e9dc7;
--h4-color: #609eb8;
--h5-color: rgb(89, 155, 181);
--h6-color: #7194a9;
}

.colorful-headings {
--h6-color: #898fe1;
--h5-color: rgb(94, 133, 224);
--h4-color: #579fde;
--h3-color: #c5eeff;
--h2-color: #94d0e7;
--h1-color: #ceebff;
}

.theme-dark {
color-scheme: dark;
--font-default: "Merienda", cursive;
--highlight-mix-blend-mode: lighten;
--background-modifier-border: #3b3f56;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--accent-h: 41 !important;
--accent-s: 100% !important;
--accent-l: 100% !important;
--color-red-rgb: 228, 111, 125;
--color-red: #e46f7d;
--color-green-rgb: 165, 209, 140;
--color-green: #a5d18c;
--color-orange-rgb: 251, 179, 108;
--color-orange: #fbb36c;
--color-yellow-rgb: 255, 222, 115;
--color-yellow: #ffde73;
--color-cyan-rgb: 111, 210, 194;
--color-cyan: #6fd2c2;
--color-blue-rgb: 86, 174, 214;
--color-blue: #56aed6;
--color-purple-rgb: 181, 132, 199;
--color-purple: #b584c7;
--color-pink-rgb: 255, 148, 200;
--color-pink: #ff94c8;
--color-base-00: #2a3141;
--color-base-10: #25273a;
--color-base-20: #1d1f2f;
--color-base-25: #3a435d;
--color-base-30: #1d1f2f;
--color-base-35: #3b445d;
--color-base-40: #515b71;
--color-base-50: #5f6980;
--color-base-60: #70778e;
--color-base-70: #8890a6;
--color-base-100: #989eb2;
--theme-decoration: "☾";
--h1-color: rgb(255, 255, 255);
--h2-color: white;
--h3-color: white;
--h4-color: white;
--h5-color: white;
--h6-color: white;
}

.theme-dark blockquote {
border-radius: 50px;
padding: 1em 1.5em 1em 1.5em;
}

.theme-dark .markdown-rendered hr, .theme-dark .markdown-source-view hr {
border-color: var(--text-faint);
}`,
      light: `.colorful-headings {
--h1-color: #8ac9de;
--h2-color: #94d1e6;
--h3-color: #abd0dc;
--h4-color: #b2c7da;
--h5-color: #b2bccf;
--h6-color: #b4b5dd;
}

.theme-light {
color-scheme: light;
--font-default: "Yu Gothic", "Inter", sans-serif;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--accent-h: 42 !important;
--accent-s: 100% !important;
--accent-l: 50% !important;
--color-red-rgb: 255, 114, 114;
--color-red: rgb(255, 145, 114);
--color-green-rgb: 170, 199, 83;
--color-green: #aac753;
--color-orange-rgb: 247, 153, 70;
--color-orange: #f79946;
--color-yellow-rgb: 251, 193, 48;
--color-yellow: #fbc130;
--color-cyan-rgb: 111, 210, 147;
--color-cyan: #6fd293;
--color-blue-rgb: 86, 214, 201;
--color-blue: #56d6c9;
--color-purple-rgb: 106, 160, 217;
--color-purple: #6aa0d9;
--color-pink-rgb: 148, 113, 231;
--color-pink: #9471e7;
--color-base-00: #fff9eb;
--color-base-05: #fff2dd;
--color-base-10: #ffefd6;
--color-base-20: #ffefd6;
--color-base-25: #fbe0ba;
--color-base-30: #fbe0ba;
--color-base-35: #f2d17d;
--color-base-40: #ecbf5f;
--color-base-50: #f0b36e;
--color-base-60: #d99e5a;
--color-base-70: #af7d43;
--color-base-100: rgb(155, 109, 87);
--theme-decoration: "☀️";
}

.theme-light .markdown-rendered hr, .theme-light .markdown-source-view hr {
font-family: "Yu Gothic", "Inter", sans-serif !important;
}`,
    },
    "theme-chinchilla": {
      general: `.theme-chinchilla {
--accent-h: 184 !important;
--accent-s: 33% !important;
--accent-l: 60% !important;
--color-red-rgb: 245, 167, 167;
--color-red: #b15e5e;
--color-green-rgb: 150, 207, 173;
--color-green: #699c7d;
--color-orange-rgb: 224, 189, 155;
--color-orange: #b39373;
--color-yellow-rgb: 219, 209, 176;
--color-yellow: #cdbd8a;
--color-cyan-rgb: 166, 199, 199;
--color-cyan: #83a5a5;
--color-blue-rgb: 147, 177, 210;
--color-blue: #7290af;
--color-purple-rgb: 175, 158, 228;
--color-purple: #8573ba;
--color-pink-rgb: 213, 139, 175;
--color-pink: #a86384;
}

.colorful-headings {
--h1-color: rgb(115, 195, 195);
--h2-color: rgb(145, 214, 214);
--h3-color: rgb(149, 217, 209);
--h4-color: rgb(162, 213, 202);
--h5-color: rgb(171, 218, 203);
--h6-color: rgb(188, 214, 201);
}

.colorful-headings-alt {
--h1-color: var(--color-blue);
--h2-color: var(--color-cyan);
--h3-color: var(--color-green);
--h4-color: var(--color-yellow);
--h5-color: var(--color-orange);
--h6-color: var(--color-red);
}

.colored-bold-and-italic {
--bold-color: var(--color-blue);
--italic-color: var(--color-purple);
}

.theme-chinchilla {
--font-default: "Avenir Next", "Roboto", sans-serif;
}`,
      dark: `.theme-dark {
/* Base Colors */
--color-base-00: #676b6d;
--color-base-10: #6e7375;
--color-base-20: #5b5f60;
--color-base-25: #767b7d;
--color-base-30: #7e8486;
--color-base-35: #7f8486;
--color-base-40: #919799;
--color-base-50: #a4a4a4;
--color-base-60: rgb(176, 176, 176);
--color-base-70: #c1c1c1;
--color-base-100: rgb(255, 255, 255);
}`,
      light: `.theme-light {
--color-base-00: rgb(242, 243, 244);
--color-base-05: rgb(236, 237, 239);
--color-base-10: rgb(227, 229, 233);
--color-base-20: rgb(236, 237, 239);
--color-base-25: rgb(221, 224, 228);
--color-base-30: rgb(221, 223, 229);
--color-base-35: rgb(219, 222, 227);
--color-base-40: rgb(198, 204, 211);
--color-base-50: rgb(173, 180, 190);
--color-base-60: rgb(166, 172, 182);
--color-base-70: rgb(129, 135, 146);
--color-base-100: #000000;
}`,
    },
    "theme-spring": {
      general: `.theme-spring {
--font-default: "Courgette", "Handlee", cursive;
}

.colored-bold-and-italic {
--bold-color: rgb(135, 204, 135);
}

.colorful-headings.theme-spring {
--h1-color: rgb(142, 202, 127);
--h2-color: rgb(126, 216, 188);
--h4-color: rgb(227, 185, 114);
--h3-color: rgb(239, 165, 180);
--h5-color: rgb(200, 207, 85);
--h6-color: rgb(104, 189, 203);
}

.colorful-headings-alt.theme-spring {
--h1-color: rgb(156, 196, 129);
--h2-color: rgb(175, 209, 145);
--h3-color: rgb(179, 216, 115);
--h4-color: rgb(190, 218, 106);
--h5-color: rgb(213, 218, 61);
--h6-color: rgb(215, 214, 141);
}`,
      dark: `.theme-spring .markdown-rendered mark, .theme-spring .cm-s-obsidian span.cm highlight {
color: white;
}

.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--accent-h: 79 !important;
--accent-s: 80% !important;
--accent-l: 69% !important;
--color-red-rgb: 228, 111, 125;
--color-red: #e46f7d;
--color-green-rgb: 165, 209, 140;
--color-green: #a5d18c;
--color-orange-rgb: 251, 179, 108;
--color-orange: #fbb36c;
--color-yellow-rgb: 255, 222, 115;
--color-yellow: #ffde73;
--color-cyan-rgb: 111, 210, 194;
--color-cyan: #6fd2c2;
--color-blue-rgb: 86, 174, 214;
--color-blue: #56aed6;
--color-purple-rgb: 181, 132, 199;
--color-purple: #b584c7;
--color-pink-rgb: 255, 148, 200;
--color-pink: #ff94c8;
--color-base-00: #414e44;
--color-base-10: #45594b;
--color-base-20: #37463d;
--color-base-25: #556951;
--color-base-30: #4e624b;
--color-base-35: #6b8669;
--color-base-40: rgb(119, 161, 116);
--color-base-50: rgb(143, 163, 141);
--color-base-60: rgb(137, 161, 118);
--color-base-70: #a0ae8e;
--color-base-100: #c5ccac;
}`,
      light: `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--accent-h: 81 !important;
--accent-s: 68% !important;
--accent-l: 58% !important;
--color-base-00: #fdfff5;
--color-base-05: #f4f8e2;
--color-base-10: #e7eed4;
--color-base-20: #e3efd2;
--color-base-25: #ddeace;
--color-base-30: rgb(186, 209, 177);
--color-base-35: #a5c1a1;
--color-base-40: #96c09f;
--color-base-50: #8cb59b;
--color-base-60: #82a196;
--color-base-70: #608b76;
--color-base-100: #467262;
}`,
    },
    "theme-novelist": {
      general: `.theme-novelist {
--font-default:
    Merriweather, Georgia, "Libre Baskerville", "Baskerville Old Face",
    "Book Antiqua", sans-serif;
}

.theme-novelist .markdown-preview-view br {
content: "";
display: block;
margin-top: 10px;
}

.theme-novelist:not(.is-mobile) .markdown-rendered hr::before, .theme-novelist .markdown-source-view hr::before {
font-size: 1.5em;
content: "🕮";
font-weight: 500;
display: inline-block;
position: absolute;
left: 50%;
transform: translate(-50%, -50%);
transform-origin: 50% 50%;
padding: 0.35rem;
color: var(--background-modifier-border-hover);
background-color: var(--background-primary);
z-index: 1;
}

.colorful-headings-alt .inline-title, .colorful-headings-alt h1, .colorful-headings-alt .HyperMD-header-1, .colorful-headings-alt h2, .colorful-headings-alt .HyperMD-header-2, .colorful-headings-alt h3, .colorful-headings-alt .HyperMD-header-3, .colorful-headings-alt h4, .colorful-headings-alt .HyperMD-header-4, .colorful-headings-alt h5, .colorful-headings-alt .HyperMD-header-5, .colorful-headings-alt h6, .colorful-headings-alt .HyperMD-header-6 {
-webkit-background-clip: text;
color: transparent;
}

.colorful-headings-alt h1, .colorful-headings-alt HyperMD-header-1, .colorful-headings-alt .inline-title {
background-image: linear-gradient(rgb(244, 205, 11), rgb(216, 171, 57));
}

.colorful-headings-alt h2, .colorful-headings-alt HyperMD-header-2 {
background-image: linear-gradient(#f4ba69, rgb(210, 170, 51));
}

.colorful-headings-alt h3, .colorful-headings-alt HyperMD-header-3 {
background-image: linear-gradient(#dfb535, #d29035);
}

.colorful-headings-alt h4, .colorful-headings-alt HyperMD-header-4 {
background-image: linear-gradient(#f1a73f, #b7895d);
}

.colorful-headings-alt h5, .colorful-headings-alt HyperMD-header-5 {
background-image: linear-gradient(#f1ae6f, #b47f4e);
}

.colorful-headings-alt h6, .colorful-headings-alt HyperMD-header-6 {
background-image: linear-gradient(#f08e34, #946d4f);
}`,
      dark: `.colorful-headings {
--h1-color: rgb(228, 191, 163);
--h2-color: rgb(215, 179, 145);
--h3-color: rgb(207, 166, 129);
--h4-color: rgb(191, 157, 108);
--h5-color: rgb(203, 177, 99);
--h6-color: rgb(195, 165, 75);
}

.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-base-00: #4d3d2e;
--color-base-10: #574534;
--color-base-20: #3a2e20;
--color-base-25: #574c40;
--color-base-30: #5f4b38;
--color-base-35: #847163;
--color-base-40: rgb(146, 130, 111);
--color-base-50: rgb(167, 153, 146);
--color-base-60: rgb(188, 172, 162);
--color-base-70: #cabbac;
--color-base-100: #dacfbc;
}`,
      light: `.colorful-headings {
--h1-color: #9e7759;
--h2-color: #b58a62;
--h3-color: #cd9b6d;
--h4-color: #d29035;
--h5-color: rgb(210, 170, 51);
--h6-color: rgb(222, 173, 26);
}

.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-base-00: #faf8f0;
--color-base-05: #f2eadb;
--color-base-10: #f4f0e9;
--color-base-20: #f4eee3;
--color-base-25: #ccb8a0;
--color-base-30: #e1d5c9;
--color-base-35: #cebcac;
--color-base-40: #c1a88f;
--color-base-50: #a2988f;
--color-base-60: #9f7b5f;
--color-base-70: #7b6c65;
--color-base-100: #524f4d;
}`,
    },
    "theme-nord": {
      general: `.colorful-headings {
/* --h1-color: #5E81AC;
    --h2-color: #7da0c3;
    --h3-color: #85b4cf;
    --h4-color: #80b5c3;
    --h5-color: #81b8c2;
    --h6-color: #8FBCBB;*/
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}

.colorful-headings-alt {
--h1-color: #5e81ac;
--h2-color: #81a1c1;
--h3-color: #88c0d0;
--h4-color: #8fbcbb;
--h5-color: #a3be8c;
--h6-color: #ebcb8b;
}

.colored-bold-and-italic {
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
}

.theme-nord {
--accent-h: 92 !important;
--accent-s: 28% !important;
--accent-l: 65% !important;
--font-default: "Bahnschrift", "Aevnir Next", sans-serif;
}`,
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 191, 97, 106;
--color-red: #bf616a;
--color-green-rgb: 163, 190, 140;
--color-green: #a3be8c;
--color-orange-rgb: 208, 135, 112;
--color-orange: #d08770;
--color-yellow-rgb: 235, 203, 139;
--color-yellow: #ebcb8b;
--color-cyan-rgb: 136, 192, 208;
--color-cyan: #88c0d0;
--color-blue-rgb: 129, 161, 193;
--color-blue: #81a1c1;
--color-purple-rgb: 94, 129, 172;
--color-purple: #5e81ac;
--color-pink-rgb: 180, 142, 173;
--color-pink: #b48ead;
--color-base-00: hsl(220, 16%, 22%);
/* --color-base-00:  #3B4252; */
--color-base-10: hsl(220, 16.8%, 25%);
--color-base-20: hsl(222, 16%, 28%);
/*--color-base-20:  #2E3440; */
--color-base-25: #474e5f;
--color-base-30: #434c5e;
--color-base-35: #50596b;
--color-base-40: #4c566a;
--color-base-50: #5f697e;
--color-base-60: #7d8698;
--color-base-60: #979fb1;
--color-base-70: #b5bdcc;
--color-base-100: #cad0de;
}`,
      light: `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 191, 97, 106;
--color-red: #bf616a;
--color-green-rgb: 163, 190, 140;
--color-green: #a3be8c;
--color-orange-rgb: 208, 135, 112;
--color-orange: #d08770;
--color-yellow-rgb: 235, 203, 139;
--color-yellow: #ebcb8b;
--color-cyan-rgb: 136, 192, 208;
--color-cyan: #88c0d0;
--color-blue-rgb: 129, 161, 193;
--color-blue: #81a1c1;
--color-purple-rgb: 94, 129, 172;
--color-purple: #5e81ac;
--color-pink-rgb: 180, 142, 173;
--color-pink: #b48ead;
--color-base-00: #ffffff;
--color-base-05: #f1f3f6;
--color-base-10: #edf0f4;
--color-base-20: #e5e9f0;
--color-base-25: #dbe0e9;
--color-base-30: #d8dee9;
--color-base-35: #ced4de;
--color-base-40: #bec5d2;
--color-base-50: #abb4c4;
--color-base-60: #99a3b6;
--color-base-70: #848fa4;
--color-base-100: #4a5364;
}`,
    },
    "theme-notion": {
      general: `.h1-bottom-border.colorful-headings.theme-notion h1, .h1-bottom-border.colorful-headings.theme-notion .HyperMD-header-1, .h2-bottom-border.colorful-headings.theme-notion h2, .h2-bottom-border.colorful-headings.theme-notion .HyperMD-header-2, .h3-bottom-border.colorful-headings.theme-notion h3, .h3-bottom-border.colorful-headings.theme-notion .HyperMD-header-3, .h4-bottom-border.colorful-headings.theme-notion h4, .h4-bottom-border.colorful-headings.theme-notion .HyperMD-header-4, .h5-bottom-border.colorful-headings.theme-notion h5, .h5-bottom-border.colorful-headings.theme-notion .HyperMD-header-5, .h6-bottom-border.colorful-headings.theme-notion h6, .h6-bottom-border.colorful-headings.theme-notion .HyperMD-header-6 {
border-bottom: none;
}

.colored-bold-and-italic {
--bold-color: var(--color-red);
--italic-color: var(--color-blue);
}

.theme-notion hr {
margin: 0px;
border-width: 1px;
opacity: 0.5;
}

.colorful-headings, .colorful-headings-alt {
--h1-color: var(--text-normal);
--h2-color: var(--text-normal);
--h3-color: var(--text-normal);
--h4-color: var(--text-normal);
--h5-color: var(--text-normal);
--h6-color: var(--text-normal);
}

.theme-notion {
--accent-h: 210 !important;
--accent-s: 77% !important;
--accent-l: 51% !important;
--callout-quote: 120, 119, 116;
--font-default:
    -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica,
    "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol";
}

.colorful-headings-alt h2, .colorful-headings-alt .HyperMD-header-2, .colorful-headings-alt h3, .colorful-headings-alt .HyperMD-header-3, .colorful-headings-alt h4, .colorful-headings-alt .HyperMD-header-4 {
background-color: var(--color-gray);
padding: 5px 4px 5px 4px;
border-bottom: none !important;
}

.colorful-headings-alt h5, .colorful-headings-alt .HyperMD-header-5, .colorful-headings-alt h6, .colorful-headings-alt .HyperMD-header-6 {
background-color: var(--color-gray);
padding: 3px 0px 4px 4px;
border-bottom: none !important;
}

.theme-notion .callout-title-inner {
margin-left: 1em;
}

.theme-notion .markdown-rendered blockquote {
border-color: var(--text-normal);
}

.theme-notion input[type="checkbox"]:not(:checked) {
border: 1.7px solid var(--text-normal);
}

.theme-notion {
--list-marker-color: var(--text-normal);
}

.theme-notion input[type="checkbox"] {
border-radius: 0px;
}`,
      dark: `.colorful-headings h1, .colorful-headings .HyperMD-header-1 {
background-color: rgba(var(--color-red-rgb), 0.26);
padding: 5px 10px 5px 10px;
}

.colorful-headings h2, .colorful-headings .HyperMD-header-2 {
background-color: rgba(var(--color-orange-rgb), 0.26);
padding: 5px 10px 5px 10px;
}

.colorful-headings h3, .colorful-headings .HyperMD-header-3 {
background-color: rgba(var(--color-yellow-rgb), 0.26);
padding: 5px 10px 5px 10px;
}

.colorful-headings h4, .colorful-headings .HyperMD-header-4 {
background-color: rgba(var(--color-green-rgb), 0.26);
padding: 5px 10px 5px 10px;
}

.colorful-headings h5, .colorful-headings .HyperMD-header-5 {
background-color: rgba(var(--color-blue-rgb), 0.26);
padding: 3px 10px 3px 10px;
}

.colorful-headings h6, .colorful-headings .HyperMD-header-6 {
background-color: rgba(var(--color-purple-rgb), 0.26);
padding: 3px 10px 3px 10px;
}

.theme-dark .callout {
background-color: rgba(var(--callout-color), 0.2);
}

.theme-dark {
color-scheme: dark;
--background-modifier-border: #323130;
--highlight-mix-blend-mode: lighten;
--color-base-00: #191919;
--color-base-10: #2d2d2d;
--color-base-20: #202020;
--color-base-25: #21201e;
--color-base-30: #21201e;
--color-base-35: #363636;
--color-base-40: #535353;
--color-base-50: #707070;
--color-base-60: #5d5d5d;
--color-base-70: #a0a0a0;
--color-base-100: rgba(255, 255, 255, 0.81);
--color-red-rgb: 212, 76, 71;
--color-gray: #363636a3;
--color-red: #d44c47;
--color-green-rgb: 79, 131, 68;
--color-green: #4f8344;
--color-orange-rgb: 217, 115, 13;
--color-orange: #d9730d;
--color-yellow-rgb: 203, 145, 47;
--color-yellow: #cb912f;
--color-cyan-rgb: 88, 148, 138;
--color-cyan: #58948a;
--color-blue-rgb: 51, 126, 169;
--color-blue: #337ea9;
--color-purple-rgb: 144, 101, 176;
--color-purple: #9065b0;
--color-pink-rgb: 193, 76, 138;
--color-pink: #c14c8a;
}`,
      light: `.colorful-headings h1, .colorful-headings .HyperMD-header-1 {
background-color: rgba(var(--color-red-rgb), 0.13);
padding: 5px 10px 5px 10px;
}

.colorful-headings h2, .colorful-headings .HyperMD-header-2 {
background-color: rgba(var(--color-orange-rgb), 0.13);
padding: 5px 10px 5px 10px;
}

.colorful-headings h3, .colorful-headings .HyperMD-header-3 {
background-color: rgba(var(--color-yellow-rgb), 0.15);
padding: 5px 10px 5px 10px;
}

.colorful-headings h4, .colorful-headings .HyperMD-header-4 {
background-color: rgba(var(--color-green-rgb), 0.13);
padding: 5px 10px 5px 10px;
}

.colorful-headings h5, .colorful-headings .HyperMD-header-5 {
background-color: rgba(var(--color-blue-rgb), 0.13);
padding: 3px 10px 3px 10px;
}

.colorful-headings h6, .colorful-headings .HyperMD-header-6 {
background-color: rgba(var(--color-purple-rgb), 0.13);
padding: 3px 10px 3px 10px;
}

.theme-light .callout {
background-color: rgba(var(--callout-color), 0.1);
}

.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-base-00: #ffffff;
--color-base-05: #f5f5f5;
--color-base-10: #f0f0f0;
--color-base-20: #f5f5f5;
--color-base-25: #e1e1e1;
--color-base-30: #cecece;
--color-base-35: #c7c7c7;
--color-base-40: #afafaf;
--color-base-50: #989898;
--color-base-60: #7b7b7b;
--color-base-70: #5f5f5f;
--color-base-100: #000000;
--color-red-rgb: 212, 76, 71;
--color-red: #d44c47;
--color-green-rgb: 79, 131, 68;
--color-green: #4f8344;
--color-orange-rgb: 217, 115, 13;
--color-orange: #d9730d;
--color-yellow-rgb: 203, 145, 47;
--color-yellow: #cb912f;
--color-cyan-rgb: 88, 148, 138;
--color-cyan: #58948a;
--color-blue-rgb: 51, 126, 169;
--color-blue: #337ea9;
--color-purple-rgb: 144, 101, 176;
--color-purple: #9065b0;
--color-pink-rgb: 193, 76, 138;
--color-pink: #c14c8a;
--color-gray-rgb: 245, 245, 245;
--color-gray: #f2f2f2;
}`,
    },
    "theme-solarized": {
      general: `.colored-bold-and-italic {
--bold-color: var(--color-orange);
--italic-color: var(--color-green);
}

.colorful-headings {
--h1-color: var(--color-cyan);
--h2-color: var(--color-blue);
--h3-color: var(--color-purple);
--h4-color: var(--color-pink);
--h5-color: var(--color-red);
--h6-color: var(--color-orange);
}

.colorful-headings-alt {
--h1-color: var(--color-orange);
--h2-color: var(--color-yellow);
--h3-color: var(--color-green);
--h4-color: var(--color-cyan);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}

.theme-solarized {
--font-default: "Hind", sans-serif;
--accent-h: 18 !important;
--accent-s: 80% !important;
--accent-l: 44% !important;
--color-red-rgb: 220, 50, 47;
--color-red: #dc322f;
--color-green-rgb: 133, 153, 0;
--color-green: #859900;
--color-orange-rgb: 203, 75, 22;
--color-orange: #cb4b16;
--color-yellow-rgb: 181, 137, 0;
--color-yellow: #b58900;
--color-cyan-rgb: 42, 161, 152;
--color-cyan: #2aa198;
--color-blue-rgb: 38, 139, 210;
--color-blue: #268bd2;
--color-purple-rgb: 108, 113, 196;
--color-purple: #6c71c4;
--color-pink-rgb: 211, 54, 130;
--color-pink: #d33682;
}`,
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-base-00: #002b36;
--color-base-10: #06333f;
--color-base-20: #073642;
--color-base-25: #0c404d;
--color-base-30: #173c47;
--color-base-35: #3a4e54;
--color-base-40: #3e545c;
--color-base-50: #536668;
--color-base-60: #586b6d;
--color-base-70: #657c7e;
--color-base-100: #8a9a9c;
}`,
      light: `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-base-00: #fdf6e3;
--color-base-05: #f4efde;
--color-base-10: #f1ecda;
--color-base-20: #eee8d5;
--color-base-25: #eee8d5;
--color-base-30: #ddd6c1;
--color-base-35: #ccc5ae;
--color-base-40: #a7b4b4;
--color-base-50: #93a1a1;
--color-base-60: #839496;
--color-base-70: #657b83;
--color-base-100: #586e75;
}`,
    },
    "theme-gruvbox": {
      general: `.colored-bold-and-italic {
--bold-color: var(--color-orange);
--italic-color: var(--color-green);
}

.theme-gruvbox {
--font-default: "Hind", sans-serif;
}

.colorful-headings {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}

.colorful-headings-alt {
--h1-color: var(--color-green);
--h2-color: var(--color-cyan);
--h3-color: var(--color-blue);
--h4-color: var(--color-purple);
--h5-color: var(--color-pink);
--h6-color: var(--color-red);
}`,
      dark: `.theme-dark {
--accent-h: 6 !important;
--accent-s: 96% !important;
--accent-l: 59% !important;
--color-red-rgb: 251, 73, 52;
--color-red: #fb4934;
--color-green-rgb: 184, 186, 38;
--color-green: #b8bb26;
--color-orange-rgb: 255, 135, 55;
--color-orange: #ff8737;
--color-yellow-rgb: 215, 153, 33;
--color-yellow: #fabd2f;
--color-cyan-rgb: 142, 192, 124;
--color-cyan: #8ec07c;
--color-blue-rgb: 131, 165, 152;
--color-blue: #83a598;
--color-purple-rgb: 211, 134, 155;
--color-purple: #d3869b;
--color-pink-rgb: 241, 168, 203;
--color-pink: #f1a8cb;
}

.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--color-base-00: #282828;
--color-base-10: #282828;
--color-base-20: #1d2021;
--color-base-25: #3c3836;
--color-base-30: #413b37;
--color-base-35: #665c54;
--color-base-40: #7c6f64;
--color-base-50: #928374;
--color-base-60: #a89984;
--color-base-70: #beb19f;
--color-base-100: #c5baa9;
}`,
      light: `.theme-light {
--accent-h: 2 !important;
--accent-s: 75% !important;
--accent-l: 46% !important;
--color-red-rgb: 204, 36, 29;
--color-red: #cc241d;
--color-green-rgb: 152, 151, 26;
--color-green: #98971a;
--color-orange-rgb: 214, 93, 14;
--color-orange: #d65d0e;
--color-yellow-rgb: 215, 153, 33;
--color-yellow: #d79921;
--color-cyan-rgb: 104, 157, 106;
--color-cyan: #689d6a;
--color-blue-rgb: 69, 133, 136;
--color-blue: #458588;
--color-purple-rgb: 177, 98, 130;
--color-purple: #b16282;
--color-pink-rgb: 211, 54, 130;
--color-pink: #d33682;
}

.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-base-00: #fbf1c7;
--color-base-05: #f2e5bc;
--color-base-10: #f2e5bc;
--color-base-20: #f2e5bc;
--color-base-25: #ebdbb2;
--color-base-30: #d5c4a1;
--color-base-35: #bdae93;
--color-base-40: #a89984;
--color-base-50: #928374;
--color-base-60: #928374;
--color-base-70: #7c6f64;
--color-base-100: #665c54;
}`,
    },
    "theme-classic": {
      general: `.theme-classic {
--font-default: "Aevnir Next", sans-serif;
}`,
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 251, 70, 76;
--color-red: #fb464c;
--color-orange-rgb: 233, 151, 63;
--color-orange: #e9973f;
--color-yellow-rgb: 224, 222, 113;
--color-yellow: #e0de71;
--color-green-rgb: 68, 207, 110;
--color-green: #44cf6e;
--color-cyan-rgb: 83, 223, 221;
--color-cyan: #53dfdd;
--color-blue-rgb: 2, 122, 255;
--color-blue: #027aff;
--color-purple-rgb: 168, 130, 255;
--color-purple: #a882ff;
--color-pink-rgb: 250, 153, 205;
--color-pink: #fa99cd;
--color-base-00: #1e1e1e;
--color-base-10: #242424;
--color-base-20: #262626;
--color-base-25: #2a2a2a;
--color-base-30: #363636;
--color-base-35: #3f3f3f;
--color-base-40: #555;
--color-base-50: #666;
--color-base-60: #999;
--color-base-70: #bababa;
--color-base-100: #dadada;
}`,
      light: `.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 233, 49, 71;
--color-red: #e93147;
--color-green-rgb: 8, 185, 78;
--color-green: #08b94e;
--color-orange-rgb: 236, 117, 0;
--color-orange: #ec7500;
--color-yellow-rgb: 224, 172, 0;
--color-yellow: #e0ac00;
--color-cyan-rgb: 0, 191, 188;
--color-cyan: #00bfbc;
--color-blue-rgb: 8, 109, 221;
--color-blue: #086ddd;
--color-purple-rgb: 120, 82, 238;
--color-purple: #7852ee;
--color-pink-rgb: 213, 57, 132;
--color-pink: #d53984;
--color-base-00: #ffffff;
--color-base-05: #fcfcfc;
--color-base-10: #fafafa;
--color-base-20: #f6f6f6;
--color-base-25: #e3e3e3;
--color-base-30: #e0e0e0;
--color-base-35: #d4d4d4;
--color-base-40: #bdbdbd;
--color-base-50: #ababab;
--color-base-60: #707070;
--color-base-70: #5a5a5a;
--color-base-100: #222222;
}`,
    },
    "theme-light-and-bright": {
      dark: `.theme-dark {
color-scheme: dark;
--highlight-mix-blend-mode: lighten;
--mono-rgb-0: 0, 0, 0;
--mono-rgb-100: 255, 255, 255;
--color-red-rgb: 228, 111, 125;
--color-red: #e46f7d;
--color-green-rgb: 165, 209, 140;
--color-green: #a5d18c;
--color-orange-rgb: 251, 179, 108;
--color-orange: #fbb36c;
--color-yellow-rgb: 255, 222, 115;
--color-yellow: #ffde73;
--color-cyan-rgb: 111, 210, 194;
--color-cyan: #6fd2c2;
--color-blue-rgb: 86, 174, 214;
--color-blue: #56aed6;
--color-purple-rgb: 181, 132, 199;
--color-purple: #b584c7;
--color-pink-rgb: 255, 148, 200;
--color-pink: #ff94c8;
--color-base-00: hsl(calc(0 + var(--accent-h)), 11%, 15.5%);
--color-base-10: hsl(calc(0 + var(--accent-h)), 11.5%, 18.5%);
--color-base-20: hsl(calc(0 + var(--accent-h)), 10%, 12%);
--color-base-25: hsl(calc(0 + var(--accent-h)), 11.5%, 10%);
--color-base-30: hsl(calc(0 + var(--accent-h)), 12%, 23%);
--color-base-35: hsl(calc(0 + var(--accent-h)), 14%, 11%);
--color-base-40: hsl(calc(0 + var(--accent-h)), 16%, 12%);
--color-base-50: hsl(calc(0 + var(--accent-h)), 18%, 55%);
--color-base-60: hsl(calc(0 + var(--accent-h)), 20%, 13%);
--color-base-70: hsl(calc(0 + var(--accent-h)), 15%, 45%);
--color-base-100: hsl(calc(0 + var(--accent-h)), 15%, 75%);
}`,
      light: `.theme-light-and-bright {
--font-default: "Noto Sans", sans-serif;
--h1-weight: 600;
--h2-weight: 600;
--h3-weight: 600;
--h4-weight: 600;
--h5-weight: 600;
--h6-weight: 600;
}

.theme-light {
color-scheme: light;
--highlight-mix-blend-mode: darken;
--mono-rgb-0: 255, 255, 255;
--mono-rgb-100: 0, 0, 0;
--color-red-rgb: 228, 111, 125;
--color-red: #e46f7d;
--color-green-rgb: 165, 209, 140;
--color-green: #a5d18c;
--color-orange-rgb: 251, 179, 108;
--color-orange: #fbb36c;
--color-yellow-rgb: 255, 222, 115;
--color-yellow: #ffde73;
--color-cyan-rgb: 111, 210, 194;
--color-cyan: #6fd2c2;
--color-blue-rgb: 86, 174, 214;
--color-blue: #56aed6;
--color-purple-rgb: 181, 132, 199;
--color-purple: #b584c7;
--color-pink-rgb: 255, 148, 200;
--color-pink: #ff94c8;
--color-base-00: hsl(calc(0 + var(--accent-h)), 100%, 99.5%);
--color-base-05: hsl(calc(0 + var(--accent-h)), 40%, 96.5%);
--color-base-10: hsl(calc(0 + var(--accent-h)), 30%, 95.9%);
--color-base-20: hsl(
    calc(0 + var(--accent-h)),
    calc(var(--accent-s) - 5%),
    calc(95% - calc(var(--accent-l) / 100))
  );
--color-base-25: hsl(calc(0 + var(--accent-h)), 80%, 42%);
--color-base-30: hsl(
    calc(0 + var(--accent-h)),
    calc(var(--accent-s) - 55%),
    89%
  );
--color-base-35: hsl(calc(0 + var(--accent-h)), 70%, 88%);
--color-base-40: hsl(calc(0 + var(--accent-h)), 65%, 86%);
--color-base-50: hsl(calc(0 + var(--accent-h)), 18%, 63%);
--color-base-60: hsl(calc(0 + var(--accent-h)), 55%, 72%);
--color-base-70: hsl(calc(0 + var(--accent-h)), 5%, 55%);
--color-base-100: hsl(calc(0 + var(--accent-h)), 5%, 30%);
}

.theme-light-and-bright .markdown-rendered hr::before, .theme-light-and-bright .markdown-source-view hr::before {
font-size: 1.5em;
content: "✦";
display: inline-block;
position: absolute;
left: 50%;
transform: translate(-50%, -50%);
transform-origin: 50% 50%;
padding: 0.35rem;
color: var(--background-modifier-border);
background-color: var(--background-primary);
z-index: 1;
}`,
    },
    "hide-dividers": {
      general: `body.hide-dividers {
--border-width: 0px !important;
}`,
    },
    "cards-layout": {
      general: `.cards-layout .workspace-split.mod-horizontal.mod-left-split .workspace-leaf-content {
border: var(--border-width) var(--line-style)
    var(--background-modifier-border);
box-shadow: none;
background-color: var(--background-primary);
}

.classic-layout .workspace-split.mod-horizontal.mod-left-split .workspace-leaf-content, .cards-layout .is-mobile .workspace-split.mod-horizontal.mod-left-split .workspace-leaf-content {
border: none;
box-shadow: none;
background-color: var(--background-secondary);
}`,
    },
    "classic-layout": {
      general: `body.classic-layout {
--divider-width: var(--border-width);
}

body.classic-layout {
--radius-s: 4px;
--radius-m: 8px;
--radius-l: 10px;
--radius-xl: 16px;
}

.classic-layout .workspace-leaf-content {
border-radius: 0px;
margin-bottom: 0px;
border: none;
}

.classic-layout .workspace-leaf {
border-radius: 0px;
margin-right: 0px;
margin-left: 0px;
background-color: var(--background-primary);
}

body.theme-crystal.classic-layout, body.theme-ash-old.classic-layout {
--ribbon-background-collapsed: transparent;
}

body.classic-layout {
--ribbon-background-collapsed: var(--background-primary);
}

.cards-layout.classic-layout .workspace-split.mod-horizontal.mod-left-split .workspace-leaf-content {
border: none;
box-shadow: none;
background-color: var(--background-secondary);
}

.classic-layout .workspace-ribbon::before {
border-bottom: var(--border-width) var(--line-style)
    var(--background-modifier-border) !important;
}

.classic-layout {
--tab-radius-active: 6px 6px 0px 0px;
--tab-curve: 6px;
}

.classic-layout .workspace .mod-root .workspace-tab-header {
margin: 0px;
height: inherit;
border-bottom: none;
}

.classic-layout .workspace-tab-header-container {
border-bottom: var(--border-width) var(--line-style)
    var(--background-modifier-border);
margin-bottom: 0px;
}

.hide-buttons.classic-layout {
--border-width: 0px;
}

.ultra-focus.classic-layout {
--workspace-background: var(--background-primary);
--divider-width: 0px;
}

.ultra-focus.classic-layout .workspace-ribbon::before {
background-color: var(--background-secondary) !important;
border-bottom: 2px solid var(--background-secondary) !important;
}`,
    },
    "line-style-solid": {
      general: `body.line-style-solid {
--line-style: solid;
}`,
    },
    "line-style-dashed": {
      general: `body.line-style-dashed {
--line-style: dashed;
}`,
    },
    "line-style-dotted": {
      general: `body.line-style-dotted {
--line-style: dotted;
}`,
    },
    "line-style-double": {
      general: `body.line-style-double {
--line-style: double;
}`,
    },
    "line-style-groove": {
      general: `body.line-style-groove {
--line-style: groove;
}`,
    },
    "line-style-ridge": {
      general: `body.line-style-ridge {
--line-style: ridge;
}`,
    },
    "line-style-inset": {
      general: `body.line-style-inset {
--line-style: inset;
}`,
    },
    "line-style-outset": {
      general: `body.line-style-outset {
--line-style: outset;
}`,
    },
    "folder-rainbow-titles": {
      general: `.folder-rainbow-titles .nav-folder-title {
color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color-collapsed: rgb(var(--rainbow-folder-color));
}`,
    },
    "folder-rainbow-backgrounds": {
      general: `.folder-rainbow-backgrounds .nav-folder-title {
color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color-collapsed: rgb(var(--rainbow-folder-color));
}

.folder-rainbow-backgrounds .nav-folder-title {
background-color: rgba(var(--rainbow-folder-color), 0.3);
color: inherit;
--nav-collapse-icon-color: var(--text-normal);
--nav-collapse-icon-color-collapsed: var(--text-normal);
}

.theme-crystal .nav-folder-title, .theme-ash-old .nav-folder-title {
background-color: rgba(var(--rainbow-folder-color), 0.13);
border: 0.25px solid rgb(var(--rainbow-folder-color));
margin-bottom: 5px;
color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color: rgb(var(--rainbow-folder-color));
--nav-collapse-icon-color-collapsed: rgb(var(--rainbow-folder-color));
}

.folder-rainbow-backgrounds .nav-folder.mod-root .nav-folder .nav-file-title {
--rainbow-folder-color: inherit;
color: rgb(var(--rainbow-folder-color));
}`,
    },
    "background-image": {
      general: `.background-image {
--workspace-background: var(--custom-image);
--tab-container-background: transparent;
--ribbon-background-collapsed: transparent !important;
--ribbon-background: transparent !important;
--border-width: 0px !important;
}

.background-image .side-dock-actions, .background-image .side-dock-settings {
margin-right: -4px;
margin-left: -4px;
}

.background-image .side-dock-actions {
margin-top: -8px;
}

.background-image .side-dock-settings {
margin-bottom: -11px;
margin-top: -4px;
padding-top: 505px;
padding-bottom: 4px;
}`,
      dark: `.background-image .workspace-ribbon.mod-left:before, .background-image .side-dock-actions, .background-image .side-dock-settings {
backdrop-filter: brightness(50%) blur(var(--bg-blur));
}

.background-image .workspace-split {
background: transparent !important;
backdrop-filter: brightness(50%) blur(var(--bg-blur));
}`,
      light: `.background-image .workspace-ribbon.mod-left:before, .background-image .side-dock-actions, .background-image .side-dock-settings {
backdrop-filter: brightness(107%) blur(var(--bg-blur));
}

.background-image .workspace-split {
background: transparent !important;
backdrop-filter: brightness(107%) blur(var(--bg-blur));
}`,
    },
    "blockquote-normal": {
      general: `.blockquote-normal .markdown-rendered blockquote {
padding-top: 10px;
padding-bottom: 10px;
z-index: 2;
font-style: italic;
position: relative;
border-left-width: 5px;
padding-left: 15px;
padding-right: 15px;
}

.blockquote-normal .markdown-rendered blockquote p {
display: inline;
}`,
    },
    "blockquote-block": {
      general: `.blockquote-block .markdown-rendered blockquote {
border-radius: var(--radius-s);
border-left: none;
font-style: normal;
}`,
    },
    "blockquote-quote": {
      general: `.blockquote-quote .markdown-rendered blockquote {
background-color: transparent;
padding-top: 0px;
padding-bottom: 0px;
font-style: normal;
border-width: 2px;
}`,
    },
    "blockquote-minimal": {
      general: `.blockquote-minimal .markdown-rendered blockquote {
background-color: transparent;
padding-top: 0px;
padding-bottom: 0px;
border-color: var(--text-normal);
color: var(--text-normal);
font-style: normal;
border-width: 1.4px;
line-height: inherit;
}`,
    },
    "blockquote-floating": {
      general: `.blockquote-floating .markdown-rendered blockquote {
background-color: transparent;
padding: 12px 12px 12px 12px;
border-radius: var(--radius-s);
border: 1.2px var(--line-style) var(--background-modifier-border);
box-shadow: var(--shadow-s);
position: relative;
font-style: normal;
}`,
    },
    "blockquote-sleek": {
      general: `.blockquote-sleek .markdown-rendered blockquote:not(.blockquote-floating), .blockquote-sleek .markdown-rendered blockquote:not(.blockquote-minimal), .blockquote-sleek .markdown-rendered blockquote:not(.blockquote-block), .blockquote-sleek .markdown-rendered blockquote:not(.blockquote-normal) {
border: 1px solid;
border-color: var(--background-modifier-border) !important;
border-left-width: 6px;
font-style: normal;
}`,
    },
    "blockquote-basic": {
      general: `.blockquote-basic .markdown-rendered blockquote {
background-color: transparent;
border: none;
margin-left: 1.3em;
padding: 0px;
font-size: var(--h6-size);
font-weight: 300;
}

.blockquote-basic .markdown-rendered blockquote h1 {
padding: 0px;
font-style: italic;
font-weight: 300;
}`,
    },
    "blockquote-mark": {
      general: `.blockquote-mark .markdown-rendered blockquote::before {
font-style: normal;
content: "❛❛";
display: inline;
font-size: 2.25em;
line-height: 0.1em;
vertical-align: -0.4em;
margin-right: 15px;
}`,
    },
    "callout-normal": {
      general: `.callout-normal .callout {
background-color: rgba(var(--callout-color), 0.17);
border: none;
position: relative;
z-index: 2;
}`,
    },
    "callout-bordered": {
      general: `.callout-bordered .callout {
border: 1.2px var(--line-style) rgb(var(--callout-color));
}

.theme-anytype.callout-bordered .callout {
background-color: rgba(var(--callout-color), 0.3);
border-width: 2px;
}`,
    },
    "callout-outlined": {
      general: `.callout-outlined {
--callout-title-padding: 5px;
}

.callout-outlined .callout, .callout-outlined .markdown-source-view.mod-cm6 .callout {
background-color: transparent !important;
border: 1.5px var(--line-style) rgb(var(--callout-color));
overflow: visible;
margin: 1.5em 0px 1.5em;
}

.callout-outlined .callout-title {
background-color: var(--background-primary);
margin-top: -22.5px;
margin-left: -0.75em;
padding: 0 0.5em;
width: fit-content;
}

.theme-anytype.callout-outlined .callout {
background-color: transparent !important;
border-width: 2px;
border-color: rgba(var(--callout-color), 0.75);
}`,
    },
    "callout-floating": {
      general: `.callout-floating .callout, .callout-floating .markdown-source-view.mod-cm6 .callout {
margin: 13px 0px;
border-radius: var(--radius-s);
border: 1.2px var(--line-style) rgba(var(--callout-color), 0.7);
box-shadow: var(--shadow-s);
background-color: transparent;
padding: 0px;
}

.callout-floating .callout-title, .callout-floating .markdown-source-view.mod-cm6 .callout-title {
background-color: rgba(var(--callout-color), 0.2);
padding: 10px;
min-width: 100%;
}

.callout-floating .callout-content, .callout-floating .markdown-source-view.mod-cm6 .callout-content {
padding: 0px 10px;
}`,
    },
    "checkbox-block": {
      general: `.checkbox-block input[type="checkbox"]:checked:after {
background-color: transparent;
-webkit-mask-image: none;
}

.checkbox-block input[type="checkbox"]:checked {
background-color: var(--checkbox-color);
box-shadow: inset 0 0 0 2px var(--background-primary);
}

.checkbox-block input[type="checkbox"] {
border-radius: 0px;
}`,
    },
    "checkbox-anytype": {
      general: `.checkbox-anytype input[type="checkbox"]:checked:after {
background-color: var(--color-green);
top: 0px;
bottom: 0px;
-webkit-mask-size: 100%;
-webkit-mask-image: url("<?xmlversion='1.0'?><svgdata-name='Capa 1'id='Capa_1'viewBox='0 0 20 19.84'xmlns='http://www.w3.org/2000/svg'><pathd='M15.39,5.66a.37.37,0,0,0-.52,0L8,13.39,5.09,11.06a.38.38,0,1,0-.47.59L7.85,14.2a.38.38,0,0,0,.52,0l7.06-8A.38.38,0,0,0,15.39,5.66Z'/></svg>");
}

.theme-anytype.checkbox-anytype input[type="checkbox"]:checked:after {
background-color: #1eabeb;
}

.checkbox-anytype input[type="checkbox"]:checked {
background-color: transparent;
border-color: transparent !important;
}

.checkbox-anytype input[type="checkbox"] {
border-radius: 1em;
}`,
    },
    "tag-default": {
      general: `.tag-default {
--tag-color: var(--text-accent);
--tag-color-hover: var(--text-accent);
--tag-decoration: none;
--tag-decoration-hover: none;
--tag-background: hsla(var(--interactive-accent-hsl), 0.1);
--tag-background-hover: hsla(var(--interactive-accent-hsl), 0.2);
--tag-border-color: hsla(var(--interactive-accent-hsl), 0.15);
--tag-border-color-hover: hsla(var(--interactive-accent-hsl), 0.15);
--tag-border-width: 0px;
--tag-padding-x: 0.65em;
--tag-padding-y: 0.25em;
--tag-radius: 2em;
}`,
    },
    "tag-block": {
      general: `.tag-block {
--tag-color: var(--text-normal);
--tag-background: var(--code-background);
--tag-radius: 3px;
}`,
    },
    "tag-minimal": {
      general: `.tag-minimal {
--tag-background: none;
--tag-background-hover: none;
--tag-color-hover: var(--color-accent-1);
--tag-color: var(--interactive-accent);
--tag-decoration-hover: underline;
}

.tag-minimal a.tag, .tag-minimal .editor .cm-hashtag {
font-style: italic;
padding: 0px;
}`,
    },
    "tag-button": {
      general: `.tag-button {
--tag-background: var(--background-primary);
--tag-background-hover: var(--code-background);
--tag-color: var(--text-normal);
--tag-color-hover: var(--text-normal);
--tag-radius: 0.8em;
--tag-border-color: var(--background-modifier-border);
--tag-border-width: 1px;
--tag-border-color-hover: var(--color-base-25);
}

.tag-button a.tag, .tag-button .editor .cm-hashtag {
-webkit-box-shadow: 0 -1px 7px -1px rgb(118 118 118 / 20%) inset;
}

.tag-button a.tag:hover, .tag-button .editor .cm-hashtag:hover {
-webkit-box-shadow: 0 -1px 7px -1px rgb(118 118 118 / 10%) inset;
}`,
    },
    "link-default": {
      general: `.link-default {
--link-decoration: none;
--link-external-decoration: none;
}`,
    },
    "link-web": {
      general: `.link-web {
--link-decoration: underline;
--link-external-decoratoin: underline;
--link-color: var(--color-blue);
--link-external-color: var(--color-blue);
--link-color-hover: var(--color-purple);
--link-external-color-hover: var(--color-purple);
--link-unresolved-color: var(--color-cyan);
--link-unresolved-decoration-color: var(--color-cyan);
}`,
    },
    "link-em": {
      general: `.link-em {
--link-unresolved-color: var(--text-muted);
--link-unresolved-decoration-color: var(--background-modifier-border-hover);
}

.link-em .internal-link, .link-em .external-link {
color: var(--text-normal);
text-decoration: underline var(--background-modifier-border) 2.3px;
text-underline-offset: 0.19em;
}

.link-em .markdown-source-view.mod-cm6 .cm-underline {
color: var(--text-normal);
text-decoration: underline var(--background-modifier-border) 2.3px;
}

.link-em .internal-link:hover, .link-em .external-link:hover, .link-em .markdown-source-view.mod-cm6 .cm-underline:hover {
color: var(--color-accent-2);
text-decoration: underline var(--color-accent-1) 4px;
}

.link-em .internal-link::before, .link-em .external-link::before {
content: "🡭";
margin-right: 0.3em;
display: inline-block;
font-size: 0.8em;
font-weight: 600;
font-family: "Noto Sans Symbols 2", sans-serif;
}`,
    },
    "link-button": {
      general: `.link-button {
--link-color: var(--text-normal);
--link-unresolved-color: var(--text-normal);
--link-external-color: var(--text-normal);
--link-decoration-hover: none;
--link-external-decoration-hover: none;
}

.link-button .internal-link, .link-button .external-link, .link-button .markdown-source-view.mod-cm6 .cm-underline {
background-color: var(--background-primary);
-webkit-box-shadow: 0 -1px 7px -1px rgb(118 118 118 / 15%) inset;
padding: 1px 10px;
border-radius: 0.4em;
border: solid var(--background-modifier-border) 1.1px;
background-image: none;
white-space: nowrap;
overflow: hidden;
}

.link-button .internal-link:hover, .link-button .external-link:hover, .link-button .markdown-source-view.mod-cm6 .cm-underline:hover {
-webkit-box-shadow: 0 -1px 10px -1px rgb(118 118 118 / 30%) inset;
}`,
    },
    "colorful-headings": {
      general: `.colorful-headings {
--h1-color: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) - 10%)
  );
--h2-color: hsl(
    calc(var(--accent-h) + 40),
    calc(var(--accent-s) - 5%),
    calc(var(--accent-l) - 15%)
  );
--h3-color: hsl(
    calc(var(--accent-h) + 80),
    calc(var(--accent-s) - 25%),
    calc(var(--accent-l) - 15%)
  );
--h4-color: hsl(
    calc(var(--accent-h) + 130),
    calc(var(--accent-s) - 30%),
    calc(var(--accent-l) - 15%)
  );
--h5-color: hsl(
    calc(var(--accent-h) + 180),
    calc(var(--accent-s) - 35%),
    calc(var(--accent-l) - 15%)
  );
--h6-color: hsl(
    calc(var(--accent-h) + 240),
    calc(var(--accent-s) - 55%),
    calc(var(--accent-l) - 15%)
  );
}

.colorful-headings-alt {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-cyan);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}

.colorful-headings-alt.theme-default {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}

.theme-default {
--h1-color: rgb(217, 174, 180);
--h2-color: rgb(218, 178, 201);
--h3-color: rgb(200, 165, 200);
--h4-color: rgb(191, 165, 199);
--h5-color: rgb(158, 142, 184);
--h6-color: rgb(156, 156, 190);
}

.h1-bottom-border.theme-notion h1, .h1-bottom-border.theme-notion .HyperMD-header-1, .h2-bottom-border.theme-notion h2, .h2-bottom-border.theme-notion .HyperMD-header-2, .h3-bottom-border.theme-notion h3, .h3-bottom-border.theme-notion .HyperMD-header-3, .h4-bottom-border.theme-notion h4, .h4-bottom-border.theme-notion .HyperMD-header-4, .h5-bottom-border.theme-notion h5, .h5-bottom-border.theme-notion .HyperMD-header-5, .h6-bottom-border.theme-notion h6, .h6-bottom-border.theme-notion .HyperMD-header-6, .h1-bottom-border.theme-anytype h1, .h1-bottom-border.theme-anytype .HyperMD-header-1, .h2-bottom-border.theme-anytype h2, .h2-bottom-border.theme-anytype .HyperMD-header-2, .h3-bottom-border.theme-anytype h3, .h3-bottom-border.theme-anytype .HyperMD-header-3, .h4-bottom-border.theme-anytype h4, .h4-bottom-border.theme-anytype .HyperMD-header-4, .h5-bottom-border.theme-anytype h5, .h5-bottom-border.theme-anytype .HyperMD-header-5, .h6-bottom-border.theme-anytype h6, .h6-bottom-border.theme-anytype .HyperMD-header-6 {
border-bottom: none;
}

.theme-spring {
--h1-color: rgb(142, 202, 127);
--h2-color: rgb(126, 216, 188);
--h4-color: rgb(227, 185, 114);
--h3-color: rgb(239, 165, 180);
--h5-color: rgb(200, 207, 85);
--h6-color: rgb(104, 189, 203);
}

.colorful-headings-alt.theme-spring {
--h1-color: rgb(156, 196, 129);
--h2-color: rgb(175, 209, 145);
--h3-color: rgb(179, 216, 115);
--h4-color: rgb(190, 218, 106);
--h5-color: rgb(213, 218, 61);
--h6-color: rgb(215, 214, 141);
}

.theme-novelist.colorful-headings-alt .inline-title, .theme-novelist.colorful-headings-alt h1, .theme-novelist.colorful-headings-alt .HyperMD-header-1, .theme-novelist.colorful-headings-alt h2, .theme-novelist.colorful-headings-alt .HyperMD-header-2, .theme-novelist.colorful-headings-alt h3, .theme-novelist.colorful-headings-alt .HyperMD-header-3, .theme-novelist.colorful-headings-alt h4, .theme-novelist.colorful-headings-alt .HyperMD-header-4, .theme-novelist.colorful-headings-alt h5, .theme-novelist.colorful-headings-alt .HyperMD-header-5, .theme-novelist.colorful-headings-alt h6, .theme-novelist.colorful-headings-alt .HyperMD-header-6 {
-webkit-background-clip: text;
color: transparent;
}

.theme-novelist.colorful-headings-alt h1, .theme-novelist.colorful-headings-alt HyperMD-header-1, .theme-novelist.colorful-headings-alt .inline-title {
background-image: linear-gradient(rgb(244, 205, 11), rgb(216, 171, 57));
}

.theme-novelist.colorful-headings-alt h2, .theme-novelist.colorful-headings-alt HyperMD-header-2 {
background-image: linear-gradient(#f4ba69, rgb(210, 170, 51));
}

.theme-novelist.colorful-headings-alt h3, .theme-novelist.colorful-headings-alt HyperMD-header-3 {
background-image: linear-gradient(#dfb535, #d29035);
}

.theme-novelist.colorful-headings-alt h4, .theme-novelist.colorful-headings-alt HyperMD-header-4 {
background-image: linear-gradient(#f1a73f, #b7895d);
}

.theme-novelist.colorful-headings-alt h5, .theme-novelist.colorful-headings-alt HyperMD-header-5 {
background-image: linear-gradient(#f1ae6f, #b47f4e);
}

.theme-novelist.colorful-headings-alt h6, .theme-novelist.colorful-headings-alt HyperMD-header-6 {
background-image: linear-gradient(#f08e34, #946d4f);
}

.theme-nord.colorful-headings {
/* --h1-color: #5E81AC;
    --h2-color: #7da0c3;
    --h3-color: #85b4cf;
    --h4-color: #80b5c3;
    --h5-color: #81b8c2;
    --h6-color: #8FBCBB;*/
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}

.theme-nord.colorful-headings-alt {
--h1-color: #5e81ac;
--h2-color: #81a1c1;
--h3-color: #88c0d0;
--h4-color: #8fbcbb;
--h5-color: #a3be8c;
--h6-color: #ebcb8b;
}

.theme-solarized.colorful-headings {
--h1-color: var(--color-cyan);
--h2-color: var(--color-blue);
--h3-color: var(--color-purple);
--h4-color: var(--color-pink);
--h5-color: var(--color-red);
--h6-color: var(--color-orange);
}

.theme-solarized.colorful-headings-alt {
--h1-color: var(--color-orange);
--h2-color: var(--color-yellow);
--h3-color: var(--color-green);
--h4-color: var(--color-cyan);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}

.theme-gruvbox.colorful-headings {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}

.theme-gruvbox.colorful-headings-alt {
--h1-color: var(--color-green);
--h2-color: var(--color-cyan);
--h3-color: var(--color-blue);
--h4-color: var(--color-purple);
--h5-color: var(--color-pink);
--h6-color: var(--color-red);
}

.theme-anytype.colorful-headings {
--h1-color: var(--text-normal);
--h2-color: var(--text-normal);
--h3-color: var(--text-normal);
--h4-color: var(--text-normal);
--h5-color: var(--text-normal);
--h6-color: var(--text-normal);
}

.theme-anytype.colorful-headings-alt {
--h1-color: var(--color-blue);
--h2-color: var(--color-cyan);
--h3-color: var(--color-green);
--h4-color: var(--color-yellow);
--h5-color: var(--color-orange);
--h6-color: var(--color-red);
}

.theme-anytype.colorful-headings h1, .theme-anytype.colorful-headings .HyperMD-header-1 {
background-color: rgba(var(--color-red-rgb), 0.2);
padding: 5px 10px 5px 10px;
}

.theme-anytype.colorful-headings h2, .theme-anytype.colorful-headings .HyperMD-header-2 {
background-color: rgba(var(--color-orange-rgb), 0.3);
padding: 5px 10px 5px 10px;
}

.theme-anytype.colorful-headings h3, .theme-anytype.colorful-headings .HyperMD-header-3 {
background-color: rgba(var(--color-yellow-rgb), 0.3);
padding: 5px 10px 5px 10px;
}

.theme-anytype.colorful-headings h4, .theme-anytype.colorful-headings .HyperMD-header-4 {
background-color: rgba(var(--color-green-rgb), 0.3);
padding: 5px 0px 5px 10px;
}

.theme-anytype.colorful-headings h5, .theme-anytype.colorful-headings .HyperMD-header-5 {
background-color: rgba(var(--color-cyan-rgb), 0.3);
padding: 3px 10px 3px 10px;
}

.theme-anytype.colorful-headings h6, .theme-anytype.colorful-headings .HyperMD-header-6 {
background-color: rgba(var(--color-blue-rgb), 0.3);
padding: 3px 10px 3px 10px;
}

.theme-chinchilla.colorful-headings {
--h1-color: rgb(115, 195, 195);
--h2-color: rgb(145, 214, 214);
--h3-color: rgb(149, 217, 209);
--h4-color: rgb(162, 213, 202);
--h5-color: rgb(171, 218, 203);
--h6-color: rgb(188, 214, 201);
}

.theme-chinchilla.colorful-headings-alt {
--h1-color: var(--color-blue);
--h2-color: var(--color-cyan);
--h3-color: var(--color-green);
--h4-color: var(--color-yellow);
--h5-color: var(--color-orange);
--h6-color: var(--color-red);
}

.theme-notion.colorful-headings, .theme-notion.colorful-headings-alt {
--h1-color: var(--text-normal);
--h2-color: var(--text-normal);
--h3-color: var(--text-normal);
--h4-color: var(--text-normal);
--h5-color: var(--text-normal);
--h6-color: var(--text-normal);
}

.theme-notion.colorful-headings-alt h2, .theme-notion.colorful-headings-alt .HyperMD-header-2, .theme-notion.colorful-headings-alt h3, .theme-notion.colorful-headings-alt .HyperMD-header-3, .theme-notion.colorful-headings-alt h4, .theme-notion.colorful-headings-alt .HyperMD-header-4 {
background-color: var(--color-gray);
padding: 5px 4px 5px 4px;
border-bottom: none !important;
}

.theme-notion.colorful-headings-alt h5, .theme-notion.colorful-headings-alt .HyperMD-header-5, .theme-notion.colorful-headings-alt h6, .theme-notion.colorful-headings-alt .HyperMD-header-6 {
background-color: var(--color-gray);
padding: 3px 0px 4px 4px;
border-bottom: none !important;
}`,
      dark: `.theme-crystal, .theme-ash-old {
--h6-color: rgb(91, 117, 161);
--h5-color: rgb(140, 132, 190);
--h4-color: rgb(154, 118, 168);
--h3-color: rgb(191, 118, 151);
--h2-color: rgb(203, 120, 132);
--h1-color: rgb(208, 92, 92);
}

.theme-novelist.colorful-headings {
--h1-color: rgb(228, 191, 163);
--h2-color: rgb(215, 179, 145);
--h3-color: rgb(207, 166, 129);
--h4-color: rgb(191, 157, 108);
--h5-color: rgb(203, 177, 99);
--h6-color: rgb(195, 165, 75);
}

.theme-celestial.colorful-headings-alt {
--h1-color: #5684d9;
--h2-color: rgb(119, 148, 214);
--h3-color: #6e9dc7;
--h4-color: #609eb8;
--h5-color: rgb(89, 155, 181);
--h6-color: #7194a9;
}

.theme-celestial.colorful-headings {
--h6-color: #898fe1;
--h5-color: rgb(94, 133, 224);
--h4-color: #579fde;
--h3-color: #c5eeff;
--h2-color: #94d0e7;
--h1-color: #ceebff;
}

.theme-notion.colorful-headings h1, .theme-notion.colorful-headings .HyperMD-header-1 {
background-color: rgba(var(--color-red-rgb), 0.26);
padding: 5px 10px 5px 10px;
}

.theme-notion.colorful-headings h2, .theme-notion.colorful-headings .HyperMD-header-2 {
background-color: rgba(var(--color-orange-rgb), 0.26);
padding: 5px 10px 5px 10px;
}

.theme-notion.colorful-headings h3, .theme-notion.colorful-headings .HyperMD-header-3 {
background-color: rgba(var(--color-yellow-rgb), 0.26);
padding: 5px 10px 5px 10px;
}

.theme-notion.colorful-headings h4, .theme-notion.colorful-headings .HyperMD-header-4 {
background-color: rgba(var(--color-green-rgb), 0.26);
padding: 5px 10px 5px 10px;
}

.theme-notion.colorful-headings h5, .theme-notion.colorful-headings .HyperMD-header-5 {
background-color: rgba(var(--color-blue-rgb), 0.26);
padding: 3px 10px 3px 10px;
}

.theme-notion.colorful-headings h6, .theme-notion.colorful-headings .HyperMD-header-6 {
background-color: rgba(var(--color-purple-rgb), 0.26);
padding: 3px 10px 3px 10px;
}`,
      light: `.theme-crystal, .theme-ash-old {
--h1-color: rgb(91, 117, 161);
--h2-color: rgb(140, 132, 190);
--h3-color: rgb(154, 118, 168);
--h4-color: rgb(191, 118, 151);
--h5-color: rgb(203, 120, 132);
--h6-color: rgb(208, 92, 92);
}

.theme-novelist.colorful-headings {
--h1-color: #9e7759;
--h2-color: #b58a62;
--h3-color: #cd9b6d;
--h4-color: #d29035;
--h5-color: rgb(210, 170, 51);
--h6-color: rgb(222, 173, 26);
}

.theme-celestial.colorful-headings {
--h1-color: #8ac9de;
--h2-color: #94d1e6;
--h3-color: #abd0dc;
--h4-color: #b2c7da;
--h5-color: #b2bccf;
--h6-color: #b4b5dd;
}

.theme-notion.colorful-headings h1, .theme-notion.colorful-headings .HyperMD-header-1 {
background-color: rgba(var(--color-red-rgb), 0.13);
padding: 5px 10px 5px 10px;
}

.theme-notion.colorful-headings h2, .theme-notion.colorful-headings .HyperMD-header-2 {
background-color: rgba(var(--color-orange-rgb), 0.13);
padding: 5px 10px 5px 10px;
}

.theme-notion.colorful-headings h3, .theme-notion.colorful-headings .HyperMD-header-3 {
background-color: rgba(var(--color-yellow-rgb), 0.15);
padding: 5px 10px 5px 10px;
}

.theme-notion.colorful-headings h4, .theme-notion.colorful-headings .HyperMD-header-4 {
background-color: rgba(var(--color-green-rgb), 0.13);
padding: 5px 10px 5px 10px;
}

.theme-notion.colorful-headings h5, .theme-notion.colorful-headings .HyperMD-header-5 {
background-color: rgba(var(--color-blue-rgb), 0.13);
padding: 3px 10px 3px 10px;
}

.theme-notion.colorful-headings h6, .theme-notion.colorful-headings .HyperMD-header-6 {
background-color: rgba(var(--color-purple-rgb), 0.13);
padding: 3px 10px 3px 10px;
}`,
    },
    "colorful-headings-alt": {
      general: `.colorful-headings-alt {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-cyan);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}

.theme-default {
--h1-color: var(--color-red);
--h2-color: var(--color-orange);
--h3-color: var(--color-yellow);
--h4-color: var(--color-green);
--h5-color: var(--color-cyan);
--h6-color: var(--color-blue);
}

.theme-spring {
--h1-color: rgb(156, 196, 129);
--h2-color: rgb(175, 209, 145);
--h3-color: rgb(179, 216, 115);
--h4-color: rgb(190, 218, 106);
--h5-color: rgb(213, 218, 61);
--h6-color: rgb(215, 214, 141);
}

.theme-novelist.colorful-headings-alt .inline-title, .theme-novelist.colorful-headings-alt h1, .theme-novelist.colorful-headings-alt .HyperMD-header-1, .theme-novelist.colorful-headings-alt h2, .theme-novelist.colorful-headings-alt .HyperMD-header-2, .theme-novelist.colorful-headings-alt h3, .theme-novelist.colorful-headings-alt .HyperMD-header-3, .theme-novelist.colorful-headings-alt h4, .theme-novelist.colorful-headings-alt .HyperMD-header-4, .theme-novelist.colorful-headings-alt h5, .theme-novelist.colorful-headings-alt .HyperMD-header-5, .theme-novelist.colorful-headings-alt h6, .theme-novelist.colorful-headings-alt .HyperMD-header-6 {
-webkit-background-clip: text;
color: transparent;
}

.theme-novelist.colorful-headings-alt h1, .theme-novelist.colorful-headings-alt HyperMD-header-1, .theme-novelist.colorful-headings-alt .inline-title {
background-image: linear-gradient(rgb(244, 205, 11), rgb(216, 171, 57));
}

.theme-novelist.colorful-headings-alt h2, .theme-novelist.colorful-headings-alt HyperMD-header-2 {
background-image: linear-gradient(#f4ba69, rgb(210, 170, 51));
}

.theme-novelist.colorful-headings-alt h3, .theme-novelist.colorful-headings-alt HyperMD-header-3 {
background-image: linear-gradient(#dfb535, #d29035);
}

.theme-novelist.colorful-headings-alt h4, .theme-novelist.colorful-headings-alt HyperMD-header-4 {
background-image: linear-gradient(#f1a73f, #b7895d);
}

.theme-novelist.colorful-headings-alt h5, .theme-novelist.colorful-headings-alt HyperMD-header-5 {
background-image: linear-gradient(#f1ae6f, #b47f4e);
}

.theme-novelist.colorful-headings-alt h6, .theme-novelist.colorful-headings-alt HyperMD-header-6 {
background-image: linear-gradient(#f08e34, #946d4f);
}

.theme-nord.colorful-headings-alt {
--h1-color: #5e81ac;
--h2-color: #81a1c1;
--h3-color: #88c0d0;
--h4-color: #8fbcbb;
--h5-color: #a3be8c;
--h6-color: #ebcb8b;
}

.theme-solarized.colorful-headings-alt {
--h1-color: var(--color-orange);
--h2-color: var(--color-yellow);
--h3-color: var(--color-green);
--h4-color: var(--color-cyan);
--h5-color: var(--color-blue);
--h6-color: var(--color-purple);
}

.theme-gruvbox.colorful-headings-alt {
--h1-color: var(--color-green);
--h2-color: var(--color-cyan);
--h3-color: var(--color-blue);
--h4-color: var(--color-purple);
--h5-color: var(--color-pink);
--h6-color: var(--color-red);
}

.theme-anytype.colorful-headings-alt {
--h1-color: var(--color-blue);
--h2-color: var(--color-cyan);
--h3-color: var(--color-green);
--h4-color: var(--color-yellow);
--h5-color: var(--color-orange);
--h6-color: var(--color-red);
}

.theme-chinchilla.colorful-headings-alt {
--h1-color: var(--color-blue);
--h2-color: var(--color-cyan);
--h3-color: var(--color-green);
--h4-color: var(--color-yellow);
--h5-color: var(--color-orange);
--h6-color: var(--color-red);
}

.theme-notion.colorful-headings-alt {
--h1-color: var(--text-normal);
--h2-color: var(--text-normal);
--h3-color: var(--text-normal);
--h4-color: var(--text-normal);
--h5-color: var(--text-normal);
--h6-color: var(--text-normal);
}

.theme-notion.colorful-headings-alt h2, .theme-notion.colorful-headings-alt .HyperMD-header-2, .theme-notion.colorful-headings-alt h3, .theme-notion.colorful-headings-alt .HyperMD-header-3, .theme-notion.colorful-headings-alt h4, .theme-notion.colorful-headings-alt .HyperMD-header-4 {
background-color: var(--color-gray);
padding: 5px 4px 5px 4px;
border-bottom: none !important;
}

.theme-notion.colorful-headings-alt h5, .theme-notion.colorful-headings-alt .HyperMD-header-5, .theme-notion.colorful-headings-alt h6, .theme-notion.colorful-headings-alt .HyperMD-header-6 {
background-color: var(--color-gray);
padding: 3px 0px 4px 4px;
border-bottom: none !important;
}`,
      dark: `.theme-celestial.colorful-headings-alt {
--h1-color: #5684d9;
--h2-color: rgb(119, 148, 214);
--h3-color: #6e9dc7;
--h4-color: #609eb8;
--h5-color: rgb(89, 155, 181);
--h6-color: #7194a9;
}`,
    },
    "smaller-headings": {
      general: `.smaller-headings {
--h1-size: 1.4em;
--h2-size: 1.3em;
--h3-size: 1.15em;
--h4-size: 1.1em;
--h5-size: 1.05em;
--h6-size: 1em;
}`,
    },
    "h1-center": {
      general: `.h1-center h1, .h1-center .HyperMD-header-1 {
text-align: center;
}

.h1-center .inline-title {
text-align: center;
}`,
    },
    "h1-bottom-border": {
      general: `.h1-bottom-border h1, .h1-bottom-border .HyperMD-header-1 {
padding-bottom: 2px;
border-bottom: 1.4px var(--line-style) var(--hr-color);
}

.colorful-headings.theme-notion h1, .colorful-headings.theme-notion .HyperMD-header-1, .colorful-headings.theme-anytype h1, .colorful-headings.theme-anytype .HyperMD-header-1 {
border-bottom: none;
}`,
    },
    "h2-center": {
      general: `.h2-center h2, .h2-center .HyperMD-header-2 {
text-align: center;
}`,
    },
    "h2-bottom-border": {
      general: `.h2-bottom-border h2, .h2-bottom-border .HyperMD-header-2 {
padding-bottom: 2px;
border-bottom: 1.4px var(--line-style) var(--hr-color);
}

.colorful-headings.theme-notion h2, .colorful-headings.theme-notion .HyperMD-header-2, .colorful-headings.theme-anytype h2, .colorful-headings.theme-anytype .HyperMD-header-2 {
border-bottom: none;
}`,
    },
    "h3-center": {
      general: `.h3-center h3, .h3-center .HyperMD-header-3 {
text-align: center;
}`,
    },
    "h3-bottom-border": {
      general: `.h3-bottom-border h3, .h3-bottom-border .HyperMD-header-3 {
padding-bottom: 2px;
border-bottom: 1.4px var(--line-style) var(--hr-color);
}

.colorful-headings.theme-notion h3, .colorful-headings.theme-notion .HyperMD-header-3, .colorful-headings.theme-anytype h3, .colorful-headings.theme-anytype .HyperMD-header-3 {
border-bottom: none;
}`,
    },
    "h4-center": {
      general: `.h4-center h4, .h4-center .HyperMD-header-4 {
text-align: center;
}`,
    },
    "h4-bottom-border": {
      general: `.h4-bottom-border h4, .h4-bottom-border .HyperMD-header-4 {
padding-bottom: 2px;
border-bottom: 1.4px var(--line-style) var(--hr-color);
}

.colorful-headings.theme-notion h4, .colorful-headings.theme-notion .HyperMD-header-4, .colorful-headings.theme-anytype h4, .colorful-headings.theme-anytype .HyperMD-header-4 {
border-bottom: none;
}`,
    },
    "h5-center": {
      general: `.h5-center h5, .h5-center .HyperMD-header-5 {
text-align: center;
}`,
    },
    "h5-bottom-border": {
      general: `.h5-bottom-border h5, .h5-bottom-border .HyperMD-header-5 {
padding-bottom: 2px;
border-bottom: 1.4px var(--line-style) var(--hr-color);
}

.colorful-headings.theme-notion h5, .colorful-headings.theme-notion .HyperMD-header-5, .colorful-headings.theme-anytype h5, .colorful-headings.theme-anytype .HyperMD-header-5 {
border-bottom: none;
}`,
    },
    "h6-center": {
      general: `.h6-center h6, .h6-center .HyperMD-header-6 {
text-align: center;
}`,
    },
    "h6-bottom-border": {
      general: `.h6-bottom-border h6, .h6-bottom-border .HyperMD-header-6 {
padding-bottom: 2px;
border-bottom: 1.4px var(--line-style) var(--hr-color);
}

.colorful-headings.theme-notion h6, .colorful-headings.theme-notion .HyperMD-header-6, .colorful-headings.theme-anytype h6, .colorful-headings.theme-anytype .HyperMD-header-6 {
border-bottom: none;
}`,
    },
    "colored-bold-and-italic": {
      general: `.theme-solarized.colored-bold-and-italic, .theme-gruvbox.colored-bold-and-italic {
--bold-color: var(--color-orange);
--italic-color: var(--color-green);
}

.theme-spring.colored-bold-and-italic {
--bold-color: rgb(135, 204, 135);
}

.theme-nord.colored-bold-and-italic {
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
}

.theme-anytype.colored-bold-and-italic {
--bold-color: var(--color-blue);
--italic-color: var(--color-green);
}

.theme-chinchilla.colored-bold-and-italic {
--bold-color: var(--color-blue);
--italic-color: var(--color-purple);
}

.theme-notion.colored-bold-and-italic {
--bold-color: var(--color-red);
--italic-color: var(--color-blue);
}`,
      dark: `.theme-dark {
--bold-color: hsl(calc(var(--accent-h) + 180), 50%, 60%);
--italic-color: hsl(calc(var(--accent-h) + 90), 50%, 60%);
}`,
      light: `.theme-light {
--bold-color: hsl(calc(var(--accent-h) + 180), 45%, 50%);
--italic-color: hsl(calc(var(--accent-h) + 90), 45%, 50%);
}`,
    },
    "underlined-highlight": {
      general: `.underlined-highlight .markdown-rendered mark, .underlined-highlight .cm-s-obsidian span.cm-highlight {
background-color: transparent;
border-radius: 0px;
padding: 0px;
border-bottom: 3px var(--color-accent-2) var(--line-style);
font-weight: bold;
}`,
      dark: `.underlined-highlight .markdown-rendered mark, .underlined-highlight .cm-s-obsidian span.cm-highlight {
color: var(--color-accent-2);
}`,
    },
    "increased-line-height": {
      general: `.increased-line-height {
--line-height-normal: 2.15;
--line-height-tight: 1.6;
}

.increased-line-height .markdown-rendered h1, .increased-line-height .HyperMD-header-1, .increased-line-height .markdown-rendered h2, .increased-line-height .HyperMD-header-2, .increased-line-height .markdown-rendered h3, .increased-line-height .HyperMD-header-3, .increased-line-height .markdown-rendered h4, .increased-line-height .HyperMD-header-4, .increased-line-height .markdown-rendered h5, .increased-line-height .HyperMD-header-5, .increased-line-height .markdown-rendered h6, .HyperMD-header-6 {
margin-top: 2.2em;
}

.increased-line-height .markdown-preview-view br, .increased-line-height .markdown-preview-view br {
content: "";
display: block;
margin-top: 0.5em !important;
}`,
    },
    "custom-font-toggle": {
      general: `.custom-font-toggle {
--font-default: var(--custom-font), sans-serif !important;
}`,
    },
    "hide-filter": {
      general: `.hide-filter .page-gallery__filter {
display: none;
}`,
    },
    "responsive-tile-height": {
      general: `.responsive-tile-height .page-gallery__field {
text-shadow: none;
word-wrap: break-word;
white-space: initial;
overflow: hidden;
}`,
    },
    "flex-tiles": {
      general: `.flex-tiles .page-gallery__field {
text-shadow: none;
word-wrap: break-word;
white-space: initial;
overflow: hidden;
}

.flex-tiles .page-gallery__tile {
width: fit-content;
height: flex;
min-width: 10em;
max-width: 25em;
min-height: 10em;
flex-grow: 1;
}

.flex-tiles .page-gallery {
--columns: auto;
--gutter-size: 0.75em;
}

.flex-tiles .page-gallery__tiles {
min-width: 100%;
justify-content: center;
}`,
    },
    "hide-buttons": {
      general: `.classic-layout {
--border-width: 0px;
}

.hide-buttons .view-actions, .hide-buttons .side-dock-settings, .hide-buttons .side-dock-actions, .hide-buttons .sidebar-toggle-button {
opacity: 0;
}

.hide-buttons .view-actions:hover, .hide-buttons .side-dock-settings:hover, .hide-buttons .side-dock-actions:hover {
opacity: 1;
transition: opacity 0.15s ease-in-out;
transition-delay: 0ms;
}`,
    },
    "hide-tabs": {
      general: `.hide-tabs .workspace-tab-header-container {
opacity: 0;
}

.hide-tabs .workspace-tab-header-container:hover {
opacity: 1;
transition: opacity 0.23s ease-in-out;
transition-delay: 0ms;
}`,
    },
    "hide-titlebar": {
      general: `.hide-titlebar .view-header {
opacity: 0;
height: 1px;
transition:
    height 0.1s,
    opacity 0.25s;
}

.hide-titlebar .view-header:hover {
opacity: 1;
height: var(--header-height);
}`,
    },
    "hide-scrollbars": {
      general: `.hide-scrollbars {
--scrollbar-active-thumb-bg: transparent;
--scrollbar-bg: transparent;
--scrollbar-thumb-bg: transparent;
}`,
    },
    "ultra-focus": {
      general: `.ultra-focus .workspace-leaf-content {
margin-left: 0px;
margin-right: 0px;
}

.classic-layout {
--workspace-background: var(--background-primary);
--divider-width: 0px;
}

.classic-layout .workspace-ribbon::before {
background-color: var(--background-secondary) !important;
border-bottom: 2px solid var(--background-secondary) !important;
}

.ultra-focus .workspace-ribbon.mod-left.is-collapsed {
display: block;
max-width: 5px;
opacity: 0;
}

.ultra-focus .workspace-ribbon.mod-left.is-collapsed:hover {
display: flex;
max-width: inherit;
opacity: 1;
transition:
    opacity 0.2s ease-in-out,
    width 0.3s ease-in-out,
    display 0.1s ease-in;
transition-delay: 0ms;
}

.ultra-focus .workspace-tab-header-container:not(:hover) {
height: 5px;
opacity: 0;
transition:
    opacity 0.2s ease-in-out,
    height 0.1s ease-in-out,
    display 0.1s ease-in;
transition-delay: 0ms;
}

.ultra-focus .workspace-tab-header-container:hover {
display: flex;
height: var(--header-height);
opacity: 1;
transition:
    opacity 0.2s ease-in-out,
    height 0.1s ease-in-out,
    display 0.1s ease-in;
transition-delay: 0ms;
}`,
    },
  },
};
