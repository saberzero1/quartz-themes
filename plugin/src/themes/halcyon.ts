import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "halcyon", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 40;
  --accent-l: 70%;
  --accent-s: 100%;
  --background-modifier-active-hover: #2f3b54;
  --background-modifier-border: color-mix( in hsl, #1d2433, #2f3b54 );
  --background-modifier-border-focus: #6679a4;
  --background-modifier-border-hover: #ffcc66;
  --background-modifier-error: #ef6b73;
  --background-modifier-error-hover: #ef6b73;
  --background-modifier-error-rgb: 239, 107, 115;
  --background-modifier-form-field: #2f3b54;
  --background-modifier-form-field-hover: #2f3b54;
  --background-modifier-hover: #2f3b54;
  --background-modifier-message: color-mix( in hsl, #1d2433, #2f3b54 );
  --background-modifier-success: #bae67e;
  --background-modifier-success-rgb: 186, 230, 126;
  --background-primary: #1d2433;
  --background-primary-alt: #2f3b54;
  --background-secondary: #171c28;
  --background-secondary-alt: color-mix( in hsl, #2f3b54, #6679a4 );
  --bases-cards-background: #1d2433;
  --bases-cards-cover-background: #2f3b54;
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 );
  --bases-cards-shadow-hover: 0 0 0 1px #ffcc66;
  --bases-embed-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --bases-table-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --bases-table-cell-background-active: #1d2433;
  --bases-table-cell-background-disabled: #2f3b54;
  --bases-table-cell-background-selected: rgba(255, 204, 102, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #6679a4;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ffcc66;
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: #2f3b54;
  --bases-table-header-background: #1d2433;
  --bases-table-header-background-hover: #2f3b54;
  --bases-table-header-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --bases-table-row-background-hover: #1d2433;
  --bases-table-summary-background: #1d2433;
  --bases-table-summary-background-hover: #2f3b54;
  --blockquote-border-color: #ffcc66;
  --blockquote-color: color-mix( in srgb, #ffd580 75%, #d7dce2 );
  --blur-background: color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent) linear-gradient(color-mix( in hsl, #1d2433 75%, transparent ), color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent));
  --bold-color: #ef6b73;
  --button-radius: 0;
  --callout-bug: 239, 107, 115;
  --callout-default: 112, 153, 219;
  --callout-error: 239, 107, 115;
  --callout-example: 195, 166, 255;
  --callout-fail: 239, 107, 115;
  --callout-important: 92, 207, 230;
  --callout-info: 112, 153, 219;
  --callout-padding: 12px 24px;
  --callout-question: 255, 174, 87;
  --callout-radius: 2px;
  --callout-success: 186, 230, 126;
  --callout-summary: 92, 207, 230;
  --callout-tip: 92, 207, 230;
  --callout-todo: 112, 153, 219;
  --callout-warning: 255, 174, 87;
  --canvas-background: #1d2433;
  --canvas-card-label-color: #8695b799;
  --canvas-color-1: 239, 107, 115;
  --canvas-color-2: 255, 174, 87;
  --canvas-color-3: 255, 204, 102;
  --canvas-color-4: 186, 230, 126;
  --canvas-color-5: 92, 207, 230;
  --canvas-color-6: 195, 166, 255;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: color-mix( in hsl, #2f3b54, #6679a4 );
  --caret-color: #d7dce2;
  --checkbox-border-color: #c3a6ff;
  --checkbox-border-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc );
  --checkbox-color: #c3a6ff;
  --checkbox-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc );
  --checkbox-marker-color: #1d2433;
  --checkbox-radius: 2px;
  --checklist-done-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --clickable-icon-radius: 0;
  --code-background: #171c28;
  --code-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --code-bracket-background: #2f3b54;
  --code-comment: #8695b799;
  --code-function: #ffd580;
  --code-important: #ef6b73;
  --code-keyword: #c3a6ff;
  --code-normal: #5ccfe6;
  --code-operator: #ffae57;
  --code-property: color-mix( in hsl, #8695b799, #d7dce2 );
  --code-punctuation: #c3a6ff;
  --code-radius: 2px;
  --code-string: #bae67e;
  --code-tag: #a2aabc;
  --code-value: #c3a6ff;
  --collapse-icon-color: #8695b799;
  --collapse-icon-color-collapsed: #ffcc66;
  --color-accent: rgb(255, 204, 102);
  --color-accent-1: hsl(37, 102%, 80.5%);
  --color-accent-2: hsl(35, 105%, 90.3%);
  --color-accent-hsl: 40, 100%, 70%;
  --color-base-00: #171c28;
  --color-base-05: color-mix( in hsl, #171c28, #1d2433 );
  --color-base-10: #1d2433;
  --color-base-100: #d7dce2;
  --color-base-20: color-mix( in hsl, #1d2433, #2f3b54 );
  --color-base-25: #2f3b54;
  --color-base-30: color-mix( in hsl, #2f3b54, #6679a4 );
  --color-base-35: #6679a4;
  --color-base-40: color-mix( in hsl, #6679a4, #8695b7 );
  --color-base-50: #8695b7;
  --color-base-60: #a2aabc;
  --color-base-70: color-mix( in hsl, #d7dce2, #a2aabc );
  --color-blue: #7099db;
  --color-blue-rgb: 112, 153, 219;
  --color-cyan: #5ccfe6;
  --color-cyan-rgb: 92, 207, 230;
  --color-green: #bae67e;
  --color-green-rgb: 186, 230, 126;
  --color-orange: #ffae57;
  --color-orange-rgb: 255, 174, 87;
  --color-pink: #f9cff2;
  --color-pink-rgb: 249, 207, 242;
  --color-purple: #c3a6ff;
  --color-purple-rgb: 195, 166, 255;
  --color-red: #ef6b73;
  --color-red-rgb: 239, 107, 115;
  --color-yellow: #ffd580;
  --color-yellow-rgb: 255, 204, 102;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --divider-color-hover: #ffcc66;
  --drag-ghost-background: #2f3b54;
  --drag-ghost-text-color: #ffcc66;
  --dropdown-background: color-mix( in hsl, #1d2433 75%, transparent );
  --dropdown-background-hover: #1d2433;
  --embed-block-shadow-hover: 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 ), inset 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 );
  --embed-border-start: 2px solid #ffcc66;
  --file-header-background: #1d2433;
  --file-header-background-focused: #1d2433;
  --file-line-width: 50rem;
  --flair-background: color-mix( in hsl, #1d2433 75%, transparent );
  --flair-color: #d7dce2;
  --footnote-divider-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --footnote-id-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --footnote-id-color-no-occurrences: #8695b799;
  --footnote-input-background-active: #2f3b54;
  --footnote-radius: 2px;
  --graph-line: #2f3b54;
  --graph-node: color-mix( in hsl, #8695b799, #d7dce2 );
  --graph-node-attachment: #ffd580;
  --graph-node-focused: #ffcc66;
  --graph-node-tag: #c3a6ff;
  --graph-node-unresolved: #ef6b73;
  --graph-text: #d7dce2;
  --gray: var(--text-muted);
  --h1-color: #bae67e;
  --h2-color: #bae67e;
  --h2-weight: 675;
  --h3-color: #bae67e;
  --h3-weight: 650;
  --h4-color: #bae67e;
  --h4-weight: 625;
  --h5-color: #bae67e;
  --h5-weight: 600;
  --h6-color: #bae67e;
  --h6-weight: 575;
  --halcyon-accent: #ffcc66;
  --halcyon-accent-h: 40;
  --halcyon-accent-hover: #ffd580;
  --halcyon-accent-l: 70%;
  --halcyon-accent-s: 100%;
  --halcyon-base-blue-01: #171c28;
  --halcyon-base-blue-01-02-mix: color-mix( in hsl, #171c28, #1d2433 );
  --halcyon-base-blue-02: #1d2433;
  --halcyon-base-blue-02-03-mix: color-mix( in hsl, #1d2433, #2f3b54 );
  --halcyon-base-blue-03: #2f3b54;
  --halcyon-base-blue-03-04-mix: color-mix( in hsl, #2f3b54, #6679a4 );
  --halcyon-base-blue-03-rgb: 47, 59, 84;
  --halcyon-base-blue-04: #6679a4;
  --halcyon-base-blue-04-05-mix: color-mix( in hsl, #6679a4, #8695b7 );
  --halcyon-base-blue-05: #8695b7;
  --halcyon-base-grey-dark: #a2aabc;
  --halcyon-base-grey-light: #d7dce2;
  --halcyon-base-grey-mix: color-mix( in hsl, #d7dce2, #a2aabc );
  --halcyon-base-grey-scroll: #3f495e;
  --halcyon-base-grey-scroll-hover: #5c6782;
  --halcyon-base-grey-tab: #71777f;
  --halcyon-base-grey-token: #586582;
  --halcyon-code-error: #ef6b73;
  --halcyon-code-function: #ffd580;
  --halcyon-code-keyword: #c3a6ff;
  --halcyon-code-operator: #ffae57;
  --halcyon-code-variable: #a2aabc;
  --halcyon-palette-blue: #7099db;
  --halcyon-palette-cyan: #5ccfe6;
  --halcyon-palette-cyan-hover: color-mix( in hsl, #5ccfe6, #a2aabc );
  --halcyon-palette-lilac: #c3a6ff;
  --halcyon-palette-lilac-hover: color-mix( in hsl, #c3a6ff, #a2aabc );
  --halcyon-palette-lime: #bae67e;
  --halcyon-palette-orange: #ffae57;
  --halcyon-palette-pink: #f9cff2;
  --halcyon-palette-salmon: #ef6b73;
  --halcyon-palette-yellow: #ffd580;
  --halcyon-text-muted: #8695b799;
  --halcyon-text-normal: #d7dce2;
  --heading-formatting: #8695b799;
  --highlight: var(--text-highlight-bg);
  --hr-color: color-mix( in hsl, #8695b799, color-mix( in hsl, #1d2433, #2f3b54 ) );
  --icon-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --icon-color-active: #ffcc66;
  --icon-color-focused: #ffcc66;
  --icon-color-hover: color-mix( in hsl, #8695b799, #d7dce2 );
  --icon-stroke: 2px;
  --inline-title-color: #bae67e;
  --input-date-separator: #8695b799;
  --input-placeholder-color: #8695b799;
  --input-radius: 0;
  --interactive-accent: #ffcc66;
  --interactive-accent-hover: color-mix( in hsl, #ffcc66 75%, transparent );
  --interactive-accent-hsl: 40, 100%, 70%;
  --interactive-hover: #1d2433;
  --interactive-normal: color-mix( in hsl, #1d2433 75%, transparent );
  --italic-color: #ef6b73;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #c3a6ff;
  --link-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc );
  --link-external-color: #c3a6ff;
  --link-external-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc );
  --link-unresolved-color: #c3a6ff;
  --link-unresolved-decoration-color: #c3a6ff;
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: #c3a6ff;
  --list-marker-color-collapsed: #bae67e;
  --list-marker-color-hover: color-mix( in hsl, #c3a6ff, #a2aabc );
  --menu-background: #171c28;
  --menu-border-color: #ffcc66;
  --menu-radius: 4px;
  --metadata-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --metadata-divider-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --metadata-input-background-active: #2f3b54;
  --metadata-input-text-color: #d7dce2;
  --metadata-label-background-active: #2f3b54;
  --metadata-label-text-color: #5ccfe6;
  --metadata-label-text-color-hover: color-mix( in hsl, #5ccfe6, #a2aabc );
  --metadata-property-background-active: #2f3b54;
  --metadata-property-box-shadow-focus: 0 0 0 2px #6679a4;
  --metadata-property-box-shadow-hover: 0 0 0 1px #ffcc66;
  --modal-background: #1d2433;
  --modal-border-color: #1d2433;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #8695b799;
  --nav-collapse-icon-color-collapsed: #8695b799;
  --nav-heading-color: #d7dce2;
  --nav-heading-color-collapsed: #8695b799;
  --nav-heading-color-collapsed-hover: color-mix( in hsl, #8695b799, #d7dce2 );
  --nav-heading-color-hover: #d7dce2;
  --nav-item-background-active: #2f3b54;
  --nav-item-background-hover: #2f3b54;
  --nav-item-background-selected: #2f3b54;
  --nav-item-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --nav-item-color-active: #d7dce2;
  --nav-item-color-highlighted: #ffcc66;
  --nav-item-color-hover: #d7dce2;
  --nav-item-color-selected: #ffae57;
  --nav-item-radius: 2px;
  --nav-tag-color: #8695b799;
  --nav-tag-color-active: color-mix( in hsl, #8695b799, #d7dce2 );
  --nav-tag-color-hover: color-mix( in hsl, #8695b799, #d7dce2 );
  --nav-tag-radius: 2px;
  --pdf-background: #1d2433;
  --pdf-page-background: #1d2433;
  --pdf-shadow: 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 );
  --pdf-sidebar-background: #1d2433;
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix( in hsl, #1d2433, #2f3b54 );
  --pill-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --pill-border-color-hover: #ffcc66;
  --pill-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --pill-color-hover: #d7dce2;
  --pill-color-remove: #8695b799;
  --pill-color-remove-hover: #ffcc66;
  --prompt-background: #1d2433;
  --prompt-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-xl: 8px;
  --raised-background: color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent) linear-gradient(color-mix( in hsl, #1d2433 75%, transparent ), color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent));
  --ribbon-background: #171c28;
  --ribbon-background-collapsed: #171c28;
  --scrollbar-radius: 6px;
  --search-clear-button-color: #ef6b73;
  --search-icon-color: #ffcc66;
  --search-result-background: #1d2433;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d7dce2;
  --setting-items-background: #2f3b54;
  --setting-items-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --setting-items-radius: 6px;
  --slider-thumb-border-color: #ffcc66;
  --slider-track-background: color-mix( in hsl, #1d2433, #2f3b54 );
  --status-bar-background: #171c28;
  --status-bar-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --suggestion-background: #1d2433;
  --sync-avatar-color-1: #ef6b73;
  --sync-avatar-color-2: #ffae57;
  --sync-avatar-color-3: #ffd580;
  --sync-avatar-color-4: #bae67e;
  --sync-avatar-color-5: #5ccfe6;
  --sync-avatar-color-6: #7099db;
  --sync-avatar-color-7: #c3a6ff;
  --sync-avatar-color-8: #f9cff2;
  --tab-background-active: #1d2433;
  --tab-container-background: #171c28;
  --tab-curve: 0px;
  --tab-divider-color: #171c28;
  --tab-outline-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --tab-outline-width: 0px;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #171c28;
  --tab-switcher-menubar-background: linear-gradient(to top, #171c28, transparent);
  --tab-switcher-preview-radius: 8px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 204, 102);
  --tab-text-color: #8695b799;
  --tab-text-color-active: #ffcc66;
  --tab-text-color-focused: color-mix( in hsl, #8695b799, #d7dce2 );
  --tab-text-color-focused-active: #ffcc66;
  --tab-text-color-focused-active-current: #ffcc66;
  --tab-text-color-focused-highlighted: #ffcc66;
  --table-add-button-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --table-background: #1d2433;
  --table-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --table-column-alt-background: #1d2433;
  --table-drag-handle-background-active: #ffcc66;
  --table-drag-handle-color: #8695b799;
  --table-drag-handle-color-active: #2f3b54;
  --table-header-background: #1d2433;
  --table-header-background-hover: #1d2433;
  --table-header-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --table-header-color: #d7dce2;
  --table-header-size: larger;
  --table-row-alt-background: #1d2433;
  --table-row-alt-background-hover: #1d2433;
  --table-row-background-hover: #1d2433;
  --table-selection: rgba(255, 204, 102, 0.1);
  --table-selection-border-color: #ffcc66;
  --tag-background: color-mix(in hsl, #5ccfe6 25%, transparent);
  --tag-background-hover: color-mix( in hsl, #5ccfe6 25%, transparent );
  --tag-border-color: rgba(255, 204, 102, 0.15);
  --tag-border-color-hover: rgba(255, 204, 102, 0.15);
  --tag-color: #5ccfe6;
  --tag-color-hover: #5ccfe6;
  --tag-decoration-hover: underline;
  --tertiary: var(--text-accent-hover);
  --text-accent: #ffcc66;
  --text-accent-hover: #ffd580;
  --text-error: #ef6b73;
  --text-faint: #8695b799;
  --text-highlight-bg: rgb(47, 59, 84);
  --text-muted: color-mix( in hsl, #8695b799, #d7dce2 );
  --text-normal: #d7dce2;
  --text-on-accent: #2f3b54;
  --text-selection: color-mix( in hsl, color-mix( in hsl, #2f3b54, #6679a4 ) 35%, transparent );
  --text-success: #bae67e;
  --text-warning: #ef6b73;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #171c28;
  --titlebar-background-focused: #171c28;
  --titlebar-border-color: color-mix( in hsl, #1d2433, #2f3b54 );
  --titlebar-text-color: color-mix( in hsl, #8695b799, #d7dce2 );
  --titlebar-text-color-focused: #d7dce2;
  --toggle-thumb-color: #2f3b54;
  --vault-profile-color: #d7dce2;
  --vault-profile-color-hover: #d7dce2;
  --vault-profile-font-size: 1em;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 28, 40);
  color: rgb(215, 220, 226);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 36, 51);
  color: rgb(215, 220, 226);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 28, 40);
  color: rgb(215, 220, 226);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 28, 40);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  color: rgb(215, 220, 226);
}

body div#quartz-root {
  background-color: rgb(29, 36, 51);
  color: rgb(215, 220, 226);
}`,
    typography: `body .page article p > b, b {
  color: rgb(239, 107, 115);
  outline: rgb(239, 107, 115) none 0px;
  text-decoration: rgb(239, 107, 115);
  text-decoration-color: rgb(239, 107, 115);
}

body .page article p > em, em {
  color: rgb(239, 107, 115);
  outline: rgb(239, 107, 115) none 0px;
  text-decoration: rgb(239, 107, 115);
  text-decoration-color: rgb(239, 107, 115);
}

body .page article p > i, i {
  color: rgb(239, 107, 115);
  outline: rgb(239, 107, 115) none 0px;
  text-decoration: rgb(239, 107, 115);
  text-decoration-color: rgb(239, 107, 115);
}

body .page article p > strong, strong {
  color: rgb(239, 107, 115);
  outline: rgb(239, 107, 115) none 0px;
  text-decoration: rgb(239, 107, 115);
  text-decoration-color: rgb(239, 107, 115);
}

body .text-highlight {
  background-color: rgb(47, 59, 84);
  color: rgb(215, 220, 226);
  outline: rgb(215, 220, 226) none 0px;
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body del {
  color: rgb(215, 220, 226);
  outline: rgb(215, 220, 226) none 0px;
  text-decoration: line-through rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body p {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  outline: color(srgb 0.729403 0.762969 0.817656 / 0.8) none 0px;
  text-decoration: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    links: `body a.external, footer a {
  color: rgb(195, 166, 255);
  outline: rgb(195, 166, 255) none 0px;
  text-decoration: underline rgb(195, 166, 255);
  text-decoration-color: rgb(195, 166, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(195, 166, 255);
  outline: rgb(195, 166, 255) none 0px;
  text-decoration: underline rgb(195, 166, 255);
  text-decoration-color: rgb(195, 166, 255);
}

body a.internal.broken {
  color: rgb(195, 166, 255);
  outline: rgb(195, 166, 255) none 0px;
  text-decoration: underline dashed rgb(195, 166, 255);
  text-decoration-color: rgb(195, 166, 255);
  text-decoration-style: dashed;
}`,
    lists: `body dd {
  color: rgb(215, 220, 226);
}

body dt {
  color: rgb(215, 220, 226);
}

body ol > li {
  color: rgb(215, 220, 226);
}

body ol.overflow {
  background-color: rgb(29, 36, 51);
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body ul > li {
  color: rgb(215, 220, 226);
}

body ul.overflow {
  background-color: rgb(29, 36, 51);
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(134, 149, 183, 0.6);
  text-decoration: rgba(134, 149, 183, 0.6);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body table {
  color: rgb(215, 220, 226);
  width: 767px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(29, 36, 51);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(29, 36, 51);
}

body td {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: rgb(215, 220, 226);
}

body th {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: rgb(215, 220, 226);
}

body tr {
  background-color: rgb(29, 36, 51);
}`,
    code: `body code {
  border-bottom-color: rgb(92, 207, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(92, 207, 230);
  border-right-color: rgb(92, 207, 230);
  border-top-color: rgb(92, 207, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(92, 207, 230);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 213, 128);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 213, 128);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body pre > code, pre:has(> code) {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body figcaption {
  color: rgb(215, 220, 226);
}

body figure {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body img {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body video {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    embeds: `body .file-embed {
  background-color: rgb(47, 59, 84);
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .footnotes {
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

body .transclude {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body .transclude-inner {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration: line-through color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body input[type=checkbox] {
  border-bottom-color: rgb(195, 166, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(195, 166, 255);
  border-right-color: rgb(195, 166, 255);
  border-top-color: rgb(195, 166, 255);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='*'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='-'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='/'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='>'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='?'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='I'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='S'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='b'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='c'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='d'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='f'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='i'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='k'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='l'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='p'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='u'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body li.task-list-item[data-task='w'] {
  color: rgb(215, 220, 226);
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

body .callout[data-callout="abstract"] {
  --callout-color: 92, 207, 230;
  background-color: rgba(92, 207, 230, 0.1);
  border-bottom-color: rgba(92, 207, 230, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(92, 207, 230, 0.25);
  border-right-color: rgba(92, 207, 230, 0.25);
  border-top-color: rgba(92, 207, 230, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="bug"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="danger"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="example"] {
  --callout-color: 195, 166, 255;
  background-color: rgba(195, 166, 255, 0.1);
  border-bottom-color: rgba(195, 166, 255, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(195, 166, 255, 0.25);
  border-right-color: rgba(195, 166, 255, 0.25);
  border-top-color: rgba(195, 166, 255, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="failure"] {
  --callout-color: 239, 107, 115;
  background-color: rgba(239, 107, 115, 0.1);
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="info"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="note"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="question"] {
  --callout-color: 255, 174, 87;
  background-color: rgba(255, 174, 87, 0.1);
  border-bottom-color: rgba(255, 174, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(255, 174, 87, 0.25);
  border-right-color: rgba(255, 174, 87, 0.25);
  border-top-color: rgba(255, 174, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="success"] {
  --callout-color: 186, 230, 126;
  background-color: rgba(186, 230, 126, 0.1);
  border-bottom-color: rgba(186, 230, 126, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(186, 230, 126, 0.25);
  border-right-color: rgba(186, 230, 126, 0.25);
  border-top-color: rgba(186, 230, 126, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="tip"] {
  --callout-color: 92, 207, 230;
  background-color: rgba(92, 207, 230, 0.1);
  border-bottom-color: rgba(92, 207, 230, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(92, 207, 230, 0.25);
  border-right-color: rgba(92, 207, 230, 0.25);
  border-top-color: rgba(92, 207, 230, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="todo"] {
  --callout-color: 112, 153, 219;
  background-color: rgba(112, 153, 219, 0.1);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 174, 87;
  background-color: rgba(255, 174, 87, 0.1);
  border-bottom-color: rgba(255, 174, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(255, 174, 87, 0.25);
  border-right-color: rgba(255, 174, 87, 0.25);
  border-top-color: rgba(255, 174, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(29, 36, 51);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(215, 220, 226);
}

body .search > .search-container > .search-space {
  background-color: rgb(29, 36, 51);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > * {
  color: rgb(215, 220, 226);
  outline: rgb(215, 220, 226) none 0px;
  text-decoration: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(215, 220, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(215, 220, 226);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(215, 220, 226);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(47, 59, 84);
  color: rgb(215, 220, 226);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 28, 40);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(255, 204, 102);
  border-top-color: rgb(255, 204, 102);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(47, 59, 84);
  border-bottom-color: rgb(215, 220, 226);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(47, 59, 84);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: color(srgb 0.360784 0.811765 0.901961 / 0.25);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(92, 207, 230);
}

body h1 {
  color: rgb(186, 230, 126);
}

body h2 {
  color: rgb(186, 230, 126);
}

body h2.page-title, h2.page-title a {
  color: rgb(186, 230, 126);
}

body h3 {
  color: rgb(186, 230, 126);
}

body h4 {
  color: rgb(186, 230, 126);
}

body h5 {
  color: rgb(186, 230, 126);
}

body h6 {
  color: rgb(186, 230, 126);
}

body hr {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-right: 24px;
}

body ::-webkit-scrollbar {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 36, 51);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(47, 59, 84);
  border-bottom-color: rgb(215, 220, 226);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    footer: `body footer {
  background-color: rgb(23, 28, 40);
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 4px;
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body footer ul li a {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(215, 220, 226);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body li.section-li > .section .meta {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  text-decoration: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body ul.section-ul {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body .darkmode svg {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  stroke: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body .breadcrumb-element p {
  color: rgba(134, 149, 183, 0.6);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

body .metadata {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

body .navigation-progress {
  background-color: rgb(23, 28, 40);
}

body .page-header h2.page-title {
  color: rgb(215, 220, 226);
}

body abbr {
  color: rgb(215, 220, 226);
  text-decoration: underline dotted rgb(215, 220, 226);
}

body details {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body input[type=text] {
  border-bottom-color: rgb(92, 207, 230);
  border-left-color: rgb(92, 207, 230);
  border-right-color: rgb(92, 207, 230);
  border-top-color: rgb(92, 207, 230);
  color: rgb(92, 207, 230);
}

body kbd {
  background-color: rgb(23, 28, 40);
  border-bottom-color: rgb(92, 207, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(92, 207, 230);
  border-right-color: rgb(92, 207, 230);
  border-top-color: rgb(92, 207, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(92, 207, 230);
}

body progress {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

body sub {
  color: rgb(215, 220, 226);
}

body summary {
  color: rgb(215, 220, 226);
}

body sup {
  color: rgb(215, 220, 226);
}`,
  },
  light: {},
};
