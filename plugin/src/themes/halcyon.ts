import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "halcyon", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: var(--halcyon-accent-h, 40);
  --accent-l: var(--halcyon-accent-l, 70%);
  --accent-s: var(--halcyon-accent-s, 100%);
  --background-modifier-active-hover: var(--halcyon-base-blue-03, #2f3b54);
  --background-modifier-border: var(--halcyon-base-blue-02-03-mix, color-mix( in hsl, #1d2433, #2f3b54 ));
  --background-modifier-border-focus: var(--halcyon-base-blue-04, #6679a4);
  --background-modifier-border-hover: var(--halcyon-accent, #ffcc66);
  --background-modifier-error: var(--color-red, #ef6b73);
  --background-modifier-error-hover: var(--color-red, #ef6b73);
  --background-modifier-error-rgb: var(--color-red-rgb, 239, 107, 115);
  --background-modifier-form-field: var(--color-base-25, #2f3b54);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #2f3b54);
  --background-modifier-hover: var(--halcyon-base-blue-03, #2f3b54);
  --background-modifier-message: var(--halcyon-base-blue-02-03-mix, color-mix( in hsl, #1d2433, #2f3b54 ));
  --background-modifier-success: var(--color-green, #bae67e);
  --background-modifier-success-rgb: var(--color-green-rgb, 186, 230, 126);
  --background-primary: var(--halcyon-base-blue-02, #1d2433);
  --background-primary-alt: var(--halcyon-base-blue-03, #2f3b54);
  --background-secondary: var(--halcyon-base-blue-01, #171c28);
  --background-secondary-alt: var(--color-base-30, color-mix( in hsl, #2f3b54, #6679a4 ));
  --bases-cards-background: var(--background-primary, #1d2433);
  --bases-cards-cover-background: var(--background-primary-alt, #2f3b54);
  --bases-cards-radius: var(--radius-m, 4px);
  --bases-embed-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --bases-table-border-color: var(--table-border-color, color-mix( in hsl, #1d2433, #2f3b54 ));
  --bases-table-cell-background-active: var(--background-primary, #1d2433);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #2f3b54);
  --bases-table-cell-background-selected: var(--table-selection, hsla(40, 100%, 70%, 0.1));
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-group-background: var(--background-primary-alt, #2f3b54);
  --bases-table-header-background: var(--background-primary, #1d2433);
  --bases-table-header-background-hover: var(--background-modifier-hover, #2f3b54);
  --bases-table-header-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --bases-table-row-background-hover: var(--table-row-background-hover, #1d2433);
  --bases-table-summary-background: var(--background-primary, #1d2433);
  --bases-table-summary-background-hover: var(--background-modifier-hover, #2f3b54);
  --blockquote-border-color: var(--interactive-accent, #ffcc66);
  --blockquote-color: color-mix( in srgb, var(--halcyon-palette-yellow) 75%, var(--halcyon-text-normal) );
  --bold-color: var(--halcyon-palette-salmon, #ef6b73);
  --button-radius: var(--input-radius, 0);
  --callout-bug: var(--color-red-rgb, 239, 107, 115);
  --callout-default: var(--color-blue-rgb, 112, 153, 219);
  --callout-error: var(--color-red-rgb, 239, 107, 115);
  --callout-example: var(--color-purple-rgb, 195, 166, 255);
  --callout-fail: var(--color-red-rgb, 239, 107, 115);
  --callout-important: var(--color-cyan-rgb, 92, 207, 230);
  --callout-info: var(--color-blue-rgb, 112, 153, 219);
  --callout-padding: var(--size-4-3) var(--size-4-6, 12px 24px);
  --callout-question: var(--color-orange-rgb, 255, 174, 87);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-s, 2px);
  --callout-success: var(--color-green-rgb, 186, 230, 126);
  --callout-summary: var(--color-cyan-rgb, 92, 207, 230);
  --callout-tip: var(--color-cyan-rgb, 92, 207, 230);
  --callout-todo: var(--color-blue-rgb, 112, 153, 219);
  --callout-warning: var(--color-orange-rgb, 255, 174, 87);
  --canvas-background: var(--background-primary, #1d2433);
  --canvas-card-label-color: var(--text-faint, #8695b799);
  --canvas-color-1: var(--color-red-rgb, 239, 107, 115);
  --canvas-color-2: var(--color-orange-rgb, 255, 174, 87);
  --canvas-color-3: var(--color-yellow-rgb, 255, 204, 102);
  --canvas-color-4: var(--color-green-rgb, 186, 230, 126);
  --canvas-color-5: var(--color-cyan-rgb, 92, 207, 230);
  --canvas-color-6: var(--color-purple-rgb, 195, 166, 255);
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, color-mix( in hsl, #2f3b54, #6679a4 ));
  --caret-color: var(--text-normal, #d7dce2);
  --checkbox-border-color: var(--halcyon-palette-lilac, #c3a6ff);
  --checkbox-border-color-hover: var(--halcyon-palette-lilac-hover, color-mix( in hsl, #c3a6ff, #a2aabc ));
  --checkbox-color: var(--halcyon-palette-lilac, #c3a6ff);
  --checkbox-color-hover: var(--halcyon-palette-lilac-hover, color-mix( in hsl, #c3a6ff, #a2aabc ));
  --checkbox-marker-color: var(--background-primary, #1d2433);
  --checkbox-radius: var(--radius-s, 2px);
  --checklist-done-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --clickable-icon-radius: var(--radius-s, 0);
  --code-background: var(--halcyon-base-blue-01, #171c28);
  --code-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --code-bracket-background: var(--background-modifier-hover, #2f3b54);
  --code-comment: var(--text-faint, #8695b799);
  --code-function: var(--halcyon-code-function, #ffd580);
  --code-important: var(--halcyon-code-error, #ef6b73);
  --code-keyword: var(--halcyon-code-keyword, #c3a6ff);
  --code-normal: var(--halcyon-palette-cyan, #5ccfe6);
  --code-operator: var(--halcyon-code-operator, #ffae57);
  --code-property: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --code-punctuation: var(--halcyon-palette-lilac, #c3a6ff);
  --code-radius: var(--radius-s, 2px);
  --code-string: var(--halcyon-palette-lime, #bae67e);
  --code-tag: var(--halcyon-base-grey-dark, #a2aabc);
  --code-value: var(--color-purple, #c3a6ff);
  --collapse-icon-color: var(--text-faint, #8695b799);
  --collapse-icon-color-collapsed: var(--text-accent, #ffcc66);
  --color-base-00: var(--halcyon-base-blue-01, #171c28);
  --color-base-05: var(--halcyon-base-blue-01-02-mix, color-mix( in hsl, #171c28, #1d2433 ));
  --color-base-10: var(--halcyon-base-blue-02, #1d2433);
  --color-base-100: var(--halcyon-base-grey-light, #d7dce2);
  --color-base-20: var(--halcyon-base-blue-02-03-mix, color-mix( in hsl, #1d2433, #2f3b54 ));
  --color-base-25: var(--halcyon-base-blue-03, #2f3b54);
  --color-base-30: var(--halcyon-base-blue-03-04-mix, color-mix( in hsl, #2f3b54, #6679a4 ));
  --color-base-35: var(--halcyon-base-blue-04, #6679a4);
  --color-base-40: var(--halcyon-base-blue-04-05-mix, color-mix( in hsl, #6679a4, #8695b7 ));
  --color-base-50: var(--halcyon-base-blue-05, #8695b7);
  --color-base-60: var(--halcyon-base-grey-dark, #a2aabc);
  --color-base-70: var(--halcyon-base-grey-mix, color-mix( in hsl, #d7dce2, #a2aabc ));
  --color-blue: var(--halcyon-palette-blue, #7099db);
  --color-blue-rgb: 112, 153, 219;
  --color-cyan: var(--halcyon-palette-cyan, #5ccfe6);
  --color-cyan-rgb: 92, 207, 230;
  --color-green: var(--halcyon-palette-lime, #bae67e);
  --color-green-rgb: 186, 230, 126;
  --color-orange: var(--halcyon-palette-orange, #ffae57);
  --color-orange-rgb: 255, 174, 87;
  --color-pink: var(--halcyon-palette-pink, #f9cff2);
  --color-pink-rgb: 249, 207, 242;
  --color-purple: var(--halcyon-palette-lilac, #c3a6ff);
  --color-purple-rgb: 195, 166, 255;
  --color-red: var(--halcyon-palette-salmon, #ef6b73);
  --color-red-rgb: 239, 107, 115;
  --color-yellow: var(--halcyon-palette-yellow, #ffd580);
  --color-yellow-rgb: 255, 204, 102;
  --dark: var(--text-normal, var(--halcyon-text-normal, #d7dce2));
  --darkgray: var(--text-normal, var(--halcyon-text-normal, #d7dce2));
  --divider-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --divider-color-hover: var(--interactive-accent, #ffcc66);
  --drag-ghost-background: var(--halcyon-base-blue-03, #2f3b54);
  --drag-ghost-text-color: var(--interactive-accent, #ffcc66);
  --dropdown-background: var(--interactive-normal, color-mix( in hsl, #1d2433 75%, transparent ));
  --dropdown-background-hover: var(--interactive-hover, #1d2433);
  --file-header-background: var(--background-primary, #1d2433);
  --file-header-background-focused: var(--background-primary, #1d2433);
  --file-line-width: 50rem;
  --flair-background: var(--interactive-normal, color-mix( in hsl, #1d2433 75%, transparent ));
  --flair-color: var(--text-normal, #d7dce2);
  --footnote-divider-color: var(--metadata-divider-color, color-mix( in hsl, #1d2433, #2f3b54 ));
  --footnote-id-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --footnote-id-color-no-occurrences: var(--text-faint, #8695b799);
  --footnote-input-background-active: var(--metadata-input-background-active, #2f3b54);
  --footnote-radius: var(--radius-s, 2px);
  --graph-line: var(--halcyon-base-blue-03, #2f3b54);
  --graph-node: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --graph-node-attachment: var(--color-yellow, #ffd580);
  --graph-node-focused: var(--text-accent, #ffcc66);
  --graph-node-tag: var(--halcyon-palette-lilac, #c3a6ff);
  --graph-node-unresolved: var(--halcyon-palette-salmon, #ef6b73);
  --graph-text: var(--text-normal, #d7dce2);
  --gray: var(--text-muted, color-mix( in hsl, var(--halcyon-text-muted), var(--text-normal) ));
  --h1-color: var(--halcyon-palette-lime, #bae67e);
  --h2-color: var(--halcyon-palette-lime, #bae67e);
  --h2-weight: 675;
  --h3-color: var(--halcyon-palette-lime, #bae67e);
  --h3-weight: 650;
  --h4-color: var(--halcyon-palette-lime, #bae67e);
  --h4-weight: 625;
  --h5-color: var(--halcyon-palette-lime, #bae67e);
  --h5-weight: 600;
  --h6-color: var(--halcyon-palette-lime, #bae67e);
  --h6-weight: 575;
  --halcyon-accent: #ffcc66;
  --halcyon-accent-h: 40;
  --halcyon-accent-hover: var(--halcyon-palette-yellow, #ffd580);
  --halcyon-accent-l: 70%;
  --halcyon-accent-s: 100%;
  --halcyon-base-blue-01: #171c28;
  --halcyon-base-blue-01-02-mix: color-mix( in hsl, var(--halcyon-base-blue-01), var(--halcyon-base-blue-02) );
  --halcyon-base-blue-02: #1d2433;
  --halcyon-base-blue-02-03-mix: color-mix( in hsl, var(--halcyon-base-blue-02), var(--halcyon-base-blue-03) );
  --halcyon-base-blue-03: #2f3b54;
  --halcyon-base-blue-03-04-mix: color-mix( in hsl, var(--halcyon-base-blue-03), var(--halcyon-base-blue-04) );
  --halcyon-base-blue-03-rgb: 47, 59, 84;
  --halcyon-base-blue-04: #6679a4;
  --halcyon-base-blue-04-05-mix: color-mix( in hsl, var(--halcyon-base-blue-04), var(--halcyon-base-blue-05) );
  --halcyon-base-blue-05: #8695b7;
  --halcyon-base-grey-dark: #a2aabc;
  --halcyon-base-grey-light: #d7dce2;
  --halcyon-base-grey-mix: color-mix( in hsl, var(--halcyon-base-grey-light), var(--halcyon-base-grey-dark) );
  --halcyon-base-grey-scroll: #3f495e;
  --halcyon-base-grey-scroll-hover: #5c6782;
  --halcyon-base-grey-tab: #71777f;
  --halcyon-base-grey-token: #586582;
  --halcyon-code-error: var(--halcyon-palette-salmon, #ef6b73);
  --halcyon-code-function: var(--halcyon-palette-yellow, #ffd580);
  --halcyon-code-keyword: var(--halcyon-palette-lilac, #c3a6ff);
  --halcyon-code-operator: var(--halcyon-palette-orange, #ffae57);
  --halcyon-code-variable: var(--halcyon-base-grey-dark, #a2aabc);
  --halcyon-palette-blue: #7099db;
  --halcyon-palette-cyan: #5ccfe6;
  --halcyon-palette-cyan-hover: color-mix( in hsl, var(--halcyon-palette-cyan), var(--halcyon-base-grey-dark) );
  --halcyon-palette-lilac: #c3a6ff;
  --halcyon-palette-lilac-hover: color-mix( in hsl, var(--halcyon-palette-lilac), var(--halcyon-base-grey-dark) );
  --halcyon-palette-lime: #bae67e;
  --halcyon-palette-orange: #ffae57;
  --halcyon-palette-pink: #f9cff2;
  --halcyon-palette-salmon: #ef6b73;
  --halcyon-palette-yellow: #ffd580;
  --halcyon-text-muted: #8695b799;
  --halcyon-text-normal: var(--halcyon-base-grey-light, #d7dce2);
  --heading-formatting: var(--text-faint, #8695b799);
  --highlight: var(--text-highlight-bg, rgb(var(--halcyon-base-blue-03-rgb)));
  --hr-color: color-mix( in hsl, var(--text-faint), var(--background-modifier-border) );
  --icon-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --icon-color-active: var(--interactive-accent, #ffcc66);
  --icon-color-focused: var(--interactive-accent, #ffcc66);
  --icon-color-hover: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --icon-stroke: var(--icon-m-stroke-width, 2px);
  --inline-title-color: var(--h1-color, #bae67e);
  --input-date-separator: var(--text-faint, #8695b799);
  --input-placeholder-color: var(--text-faint, #8695b799);
  --input-radius: 0;
  --interactive-accent: var(--halcyon-accent, #ffcc66);
  --interactive-accent-hover: color-mix( in hsl, var(--halcyon-accent) 75%, transparent );
  --interactive-accent-hsl: var(--accent-h), var(--accent-s), var(--accent-l);
  --interactive-hover: var(--background-primary, #1d2433);
  --interactive-normal: color-mix( in hsl, var(--background-primary) 75%, transparent );
  --italic-color: var(--halcyon-palette-salmon, #ef6b73);
  --light: var(--background-primary, var(--halcyon-base-blue-02, #1d2433));
  --lightgray: var(--background-secondary, var(--halcyon-base-blue-01, #171c28));
  --link-color: var(--halcyon-palette-lilac, #c3a6ff);
  --link-color-hover: var(--halcyon-palette-lilac-hover, color-mix( in hsl, #c3a6ff, #a2aabc ));
  --link-external-color: var(--halcyon-palette-lilac, #c3a6ff);
  --link-external-color-hover: var(--halcyon-palette-lilac-hover, color-mix( in hsl, #c3a6ff, #a2aabc ));
  --link-unresolved-color: var(--halcyon-palette-lilac, #c3a6ff);
  --link-unresolved-decoration-color: var(--halcyon-palette-lilac, #c3a6ff);
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: var(--halcyon-palette-lilac, #c3a6ff);
  --list-marker-color-collapsed: var(--halcyon-palette-lime, #bae67e);
  --list-marker-color-hover: var(--halcyon-palette-lilac-hover, color-mix( in hsl, #c3a6ff, #a2aabc ));
  --menu-background: var(--background-secondary, #171c28);
  --menu-border-color: var(--background-modifier-border-hover, #ffcc66);
  --menu-radius: var(--radius-m, 4px);
  --metadata-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --metadata-divider-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --metadata-input-background-active: var(--background-modifier-hover, #2f3b54);
  --metadata-input-text-color: var(--text-normal, #d7dce2);
  --metadata-label-background-active: var(--background-modifier-hover, #2f3b54);
  --metadata-label-text-color: var(--halcyon-palette-cyan, #5ccfe6);
  --metadata-label-text-color-hover: var(--halcyon-palette-cyan-hover, color-mix( in hsl, #5ccfe6, #a2aabc ));
  --metadata-property-background-active: var(--background-modifier-hover, #2f3b54);
  --modal-background: var(--background-primary, #1d2433);
  --modal-border-color: var(--halcyon-base-blue-02, #1d2433);
  --modal-radius: var(--radius-l, 6px);
  --nav-collapse-icon-color: var(--collapse-icon-color, #8695b799);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #8695b799);
  --nav-heading-color: var(--text-normal, #d7dce2);
  --nav-heading-color-collapsed: var(--text-faint, #8695b799);
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --nav-heading-color-hover: var(--text-normal, #d7dce2);
  --nav-item-background-active: var(--background-modifier-hover, #2f3b54);
  --nav-item-background-hover: var(--background-modifier-hover, #2f3b54);
  --nav-item-background-selected: var(--halcyon-base-blue-03, #2f3b54);
  --nav-item-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --nav-item-color-active: var(--text-normal, #d7dce2);
  --nav-item-color-highlighted: var(--text-accent, #ffcc66);
  --nav-item-color-hover: var(--text-normal, #d7dce2);
  --nav-item-color-selected: var(--halcyon-palette-orange, #ffae57);
  --nav-item-radius: var(--radius-s, 2px);
  --nav-tag-color: var(--text-faint, #8695b799);
  --nav-tag-color-active: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --nav-tag-color-hover: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --nav-tag-radius: var(--radius-s, 2px);
  --pdf-background: var(--background-primary, #1d2433);
  --pdf-page-background: var(--background-primary, #1d2433);
  --pdf-sidebar-background: var(--background-primary, #1d2433);
  --pill-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --pill-border-color-hover: var(--background-modifier-border-hover, #ffcc66);
  --pill-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --pill-color-hover: var(--text-normal, #d7dce2);
  --pill-color-remove: var(--text-faint, #8695b799);
  --pill-color-remove-hover: var(--text-accent, #ffcc66);
  --prompt-background: var(--background-primary, #1d2433);
  --prompt-border-color: var(--halcyon-base-blue-02-03-mix, color-mix( in hsl, #1d2433, #2f3b54 ));
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-xl: 8px;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent) linear-gradient(color-mix( in hsl, #1d2433 75%, transparent ), color-mix(in srgb, color-mix( in hsl, #1d2433 75%, transparent ) 65%, transparent)));
  --ribbon-background: var(--background-secondary, #171c28);
  --ribbon-background-collapsed: var(--ribbon-background, #171c28);
  --scrollbar-radius: var(--radius-l, 6px);
  --search-clear-button-color: var(--halcyon-palette-salmon, #ef6b73);
  --search-icon-color: var(--halcyon-accent, #ffcc66);
  --search-result-background: var(--background-primary, #1d2433);
  --secondary: var(--text-accent, var(--halcyon-accent, #ffcc66));
  --setting-group-heading-color: var(--text-normal, #d7dce2);
  --setting-items-background: var(--background-primary-alt, #2f3b54);
  --setting-items-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --setting-items-radius: var(--radius-l, 6px);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix( in hsl, #8695b799, #d7dce2 ));
  --shiki-code-background: var(--code-background, #171c28);
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, #8695b799);
  --shiki-code-function: var(--color-green, #bae67e);
  --shiki-code-important: var(--color-orange, #ffae57);
  --shiki-code-keyword: var(--color-pink, #f9cff2);
  --shiki-code-normal: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --shiki-code-property: var(--color-cyan, #5ccfe6);
  --shiki-code-punctuation: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --shiki-code-string: var(--color-yellow, #ffd580);
  --shiki-code-value: var(--color-purple, #c3a6ff);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --shiki-gutter-text-color: var(--text-faint, #8695b799);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix( in hsl, #8695b799, #d7dce2 ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix( in hsl, #8695b799, #d7dce2 ));
  --shiki-terminal-dots-color: var(--text-faint, #8695b799);
  --shiki-tooltip-background: var(--background-modifier-message, color-mix( in hsl, #1d2433, #2f3b54 ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, #ffcc66);
  --slider-track-background: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --status-bar-background: var(--background-secondary, #171c28);
  --status-bar-border-color: var(--divider-color, color-mix( in hsl, #1d2433, #2f3b54 ));
  --status-bar-radius: var(--radius-m, 4px 0 0 0) 0 0 0;
  --status-bar-text-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --suggestion-background: var(--background-primary, #1d2433);
  --sync-avatar-color-1: var(--color-red, #ef6b73);
  --sync-avatar-color-2: var(--color-orange, #ffae57);
  --sync-avatar-color-3: var(--color-yellow, #ffd580);
  --sync-avatar-color-4: var(--color-green, #bae67e);
  --sync-avatar-color-5: var(--color-cyan, #5ccfe6);
  --sync-avatar-color-6: var(--color-blue, #7099db);
  --sync-avatar-color-7: var(--color-purple, #c3a6ff);
  --sync-avatar-color-8: var(--color-pink, #f9cff2);
  --tab-background-active: var(--background-primary, #1d2433);
  --tab-container-background: var(--background-secondary, #171c28);
  --tab-curve: 0px;
  --tab-divider-color: var(--titlebar-background, #171c28);
  --tab-outline-color: var(--divider-color, color-mix( in hsl, #1d2433, #2f3b54 ));
  --tab-outline-width: 0px;
  --tab-radius: var(--radius-s, 0px);
  --tab-radius-active: 0px;
  --tab-switcher-background: var(--background-secondary, #171c28);
  --tab-switcher-preview-radius: var(--radius-xl, 8px);
  --tab-text-color: var(--text-faint, #8695b799);
  --tab-text-color-active: var(--text-accent, #ffcc66);
  --tab-text-color-focused: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --tab-text-color-focused-active: var(--text-accent, #ffcc66);
  --tab-text-color-focused-active-current: var(--text-accent, #ffcc66);
  --tab-text-color-focused-highlighted: var(--text-accent, #ffcc66);
  --table-add-button-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --table-background: var(--background-primary, #1d2433);
  --table-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --table-column-alt-background: var(--table-background, #1d2433);
  --table-drag-handle-background-active: var(--table-selection-border-color, #ffcc66);
  --table-drag-handle-color: var(--text-faint, #8695b799);
  --table-drag-handle-color-active: var(--text-on-accent, #2f3b54);
  --table-header-background: var(--table-background, #1d2433);
  --table-header-background-hover: var(--table-background, #1d2433);
  --table-header-border-color: var(--table-border-color, color-mix( in hsl, #1d2433, #2f3b54 ));
  --table-header-color: var(--text-normal, #d7dce2);
  --table-header-size: var(--table-text-size, larger);
  --table-row-alt-background: var(--table-background, #1d2433);
  --table-row-alt-background-hover: var(--table-background, #1d2433);
  --table-row-background-hover: var(--table-background, #1d2433);
  --table-selection-border-color: var(--interactive-accent, #ffcc66);
  --tag-background: color-mix(in hsl, var(--tag-color) 25%, transparent);
  --tag-background-hover: color-mix( in hsl, var(--tag-color-hover) 25%, transparent );
  --tag-color: var(--halcyon-palette-cyan, #5ccfe6);
  --tag-color-hover: var(--halcyon-palette-cyan, #5ccfe6);
  --tag-decoration-hover: underline;
  --tag-size: var(--code-size, 0.875em);
  --tertiary: var(--text-accent-hover, var(--halcyon-accent-hover, #ffd580));
  --text-accent: var(--halcyon-accent, #ffcc66);
  --text-accent-hover: var(--halcyon-accent-hover, #ffd580);
  --text-error: var(--halcyon-palette-salmon, #ef6b73);
  --text-faint: var(--halcyon-text-muted, #8695b799);
  --text-highlight-bg: rgb(var(--halcyon-base-blue-03-rgb));
  --text-muted: color-mix( in hsl, var(--halcyon-text-muted), var(--text-normal) );
  --text-normal: var(--halcyon-text-normal, #d7dce2);
  --text-on-accent: var(--halcyon-base-blue-03, #2f3b54);
  --text-selection: color-mix( in hsl, var(--halcyon-base-blue-03-04-mix) 35%, transparent );
  --text-success: var(--halcyon-palette-lime, #bae67e);
  --text-warning: var(--halcyon-palette-salmon, #ef6b73);
  --textHighlight: var(--text-highlight-bg, rgb(var(--halcyon-base-blue-03-rgb)));
  --titlebar-background: var(--background-secondary, #171c28);
  --titlebar-background-focused: var(--background-secondary, #171c28);
  --titlebar-border-color: var(--background-modifier-border, color-mix( in hsl, #1d2433, #2f3b54 ));
  --titlebar-text-color: var(--text-muted, color-mix( in hsl, #8695b799, #d7dce2 ));
  --titlebar-text-color-focused: var(--text-normal, #d7dce2);
  --toggle-thumb-color: var(--text-on-accent, #2f3b54);
  --vault-profile-color: var(--text-normal, #d7dce2);
  --vault-profile-color-hover: var(--vault-profile-color, #d7dce2);
  --vault-profile-font-size: var(--font-ui-small, 1em);
  --quartz-icon-color: var(--icon-color, currentColor);
  --collapse-icon-color: var(--nav-collapse-icon-color);
  --collapse-icon-color-collapsed: var(--nav-collapse-icon-color-collapsed);
}

html body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, #171c28);
  background-color: var(--tab-container-background, rgb(23, 28, 40));
  color: rgb(215, 220, 226);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(29, 36, 51));
  color: rgb(215, 220, 226);
}

html body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(23, 28, 40));
  color: rgb(215, 220, 226);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, #171c28);
  background-color: var(--tab-container-background, rgb(23, 28, 40));
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  color: rgb(215, 220, 226);
}`,
    typography: `html body .markdown-rendered p > b, html b {
  color: var(--bold-color, rgb(239, 107, 115));
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .markdown-rendered p > em, html em {
  color: var(--italic-color, rgb(239, 107, 115));
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .markdown-rendered p > i, html i {
  color: var(--italic-color, rgb(239, 107, 115));
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .markdown-rendered p > strong > em, html strong > em {
  color: var(--italic-color, rgb(239, 107, 115));
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .markdown-rendered p > strong, html strong {
  color: var(--bold-color, rgb(239, 107, 115));
  outline: rgb(239, 107, 115) none 0px;
  text-decoration-color: rgb(239, 107, 115);
}

html body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(47, 59, 84));
  color: var(--text-normal, rgb(215, 220, 226));
  outline: rgb(215, 220, 226) none 0px;
  text-decoration-color: rgb(215, 220, 226);
}

html body del {
  color: rgb(215, 220, 226);
  outline: rgb(215, 220, 226) none 0px;
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(195, 166, 255);
  border-radius: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(195, 166, 255));
  border-color: rgb(195, 166, 255);
}

html body p {
  color: var(--text-muted, color(srgb 0.729403 0.762969 0.817656 / 0.8));
  outline: color(srgb 0.729403 0.762969 0.817656 / 0.8) none 0px;
  text-decoration-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    links: `html body a.external-link, html footer a {
  color: var(--link-external-color, rgb(195, 166, 255));
  outline: rgb(195, 166, 255) none 0px;
  text-decoration-color: rgb(195, 166, 255);
}

html body a.internal-link, html .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(195, 166, 255));
  outline: rgb(195, 166, 255) none 0px;
  text-decoration-color: rgb(195, 166, 255);
}

html body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(195, 166, 255));
  outline: rgb(195, 166, 255) none 0px;
  text-decoration: underline dashed rgb(195, 166, 255);
  text-decoration-color: var(--link-unresolved-decoration-color, rgb(195, 166, 255));
  text-decoration-style: var(--link-unresolved-decoration-style, dashed);
}`,
    lists: `html body dd {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body dt {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body ol > li {
  color: rgb(215, 220, 226);
}

html body ul > li {
  color: rgb(215, 220, 226);
}

html body ul.overflow {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: var(--text-faint, rgba(134, 149, 183, 0.6));
}

html body blockquote {
  color: var(--blockquote-color, color(srgb 0.960784 0.842157 0.598039));
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body table {
  color: rgb(215, 220, 226);
}

html body tbody tr:nth-child(even) {
  background-color: var(--table-background, rgb(29, 36, 51));
}

html body tbody tr:nth-child(odd) {
  background-color: var(--table-row-alt-background, rgb(29, 36, 51));
}

html body td {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: var(--table-text-color, rgb(215, 220, 226));
}

html body th {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: var(--table-header-color, rgb(215, 220, 226));
}

html body tr {
  background-color: var(--table-header-background, rgb(29, 36, 51));
}`,
    code: `html body code {
  background-color: var(--code-background, rgb(23, 28, 40));
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(92, 207, 230));
}

html body pre:has(> code) {
  background-color: var(--code-background, rgb(23, 28, 40));
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body figcaption {
  color: rgb(215, 220, 226);
}

html body figure {
  --code-background: var(--ec-frm-edBg, #171c28);
  border-bottom-color: rgb(215, 220, 226);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body img {
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
}

html body video {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    embeds: `html body .file-embed {
  background-color: var(--background-primary-alt, rgb(47, 59, 84));
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-radius: 4px;
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--text-muted, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}

html body .footnotes {
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body .transclude {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body .transclude-inner {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(195, 166, 255);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(195, 166, 255);
  border-right-color: rgb(195, 166, 255);
  border-top-color: rgb(195, 166, 255);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body li.task-list-item[data-task="#"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="$"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="%"] {
  color: rgb(215, 220, 226);
}

html li.task-list-item[data-task="body"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="'"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="+"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task=", html "] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="."] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="0"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="1"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="2"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="3"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="4"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="5"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="6"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="7"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="8"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="9"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task=":"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task=";"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="<"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="="] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="@"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="A"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="B"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="C"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="D"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="E"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="F"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="G"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="H"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="J"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="K"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="L"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="M"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="N"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="O"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="P"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="Q"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="R"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="T"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="U"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="V"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="W"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="X"] {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body li.task-list-item[data-task="Y"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="Z"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="_"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="\`"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="a"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="e"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="g"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="h"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="j"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="m"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="n"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="o"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="q"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="r"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="s"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="t"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="v"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="x"] {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body li.task-list-item[data-task="y"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="z"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="|"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="~"] {
  color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(215, 220, 226);
  text-decoration-color: rgb(215, 220, 226);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 36, 51);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(29, 36, 51);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 174, 87);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(134, 149, 183);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(92, 207, 230);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 153, 219);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 107, 115);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 107, 115);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 107, 115);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 107, 115);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(112, 153, 219);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 213, 128);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(195, 166, 255);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(239, 107, 115);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(186, 230, 126);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(186, 230, 126);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(186, 230, 126);
}`,
    callouts: `html body .callout .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 92, 207, 230);
  background: rgba(92, 207, 230, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(92, 207, 230, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(92, 207, 230, 0.25);
  border-right-color: rgba(92, 207, 230, 0.25);
  border-top-color: rgba(92, 207, 230, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 239, 107, 115);
  background: rgba(239, 107, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="bug"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="bug"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 239, 107, 115);
  background: rgba(239, 107, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="danger"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="danger"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 195, 166, 255);
  background: rgba(195, 166, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(195, 166, 255, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(195, 166, 255, 0.25);
  border-right-color: rgba(195, 166, 255, 0.25);
  border-top-color: rgba(195, 166, 255, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="example"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="example"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 239, 107, 115);
  background: rgba(239, 107, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(239, 107, 115, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(239, 107, 115, 0.25);
  border-right-color: rgba(239, 107, 115, 0.25);
  border-top-color: rgba(239, 107, 115, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="failure"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="failure"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 112, 153, 219);
  background: rgba(112, 153, 219, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="info"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="info"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 112, 153, 219);
  background: rgba(112, 153, 219, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="note"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="note"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 174, 87);
  background: rgba(255, 174, 87, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 174, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(255, 174, 87, 0.25);
  border-right-color: rgba(255, 174, 87, 0.25);
  border-top-color: rgba(255, 174, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="question"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="question"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="quote"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="quote"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 186, 230, 126);
  background: rgba(186, 230, 126, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 230, 126, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(186, 230, 126, 0.25);
  border-right-color: rgba(186, 230, 126, 0.25);
  border-top-color: rgba(186, 230, 126, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="success"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="success"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 92, 207, 230);
  background: rgba(92, 207, 230, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(92, 207, 230, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(92, 207, 230, 0.25);
  border-right-color: rgba(92, 207, 230, 0.25);
  border-top-color: rgba(92, 207, 230, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="tip"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="tip"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 112, 153, 219);
  background: rgba(112, 153, 219, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="todo"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="todo"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 174, 87);
  background: rgba(255, 174, 87, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 174, 87, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(255, 174, 87, 0.25);
  border-right-color: rgba(255, 174, 87, 0.25);
  border-top-color: rgba(255, 174, 87, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="warning"] .callout-title {
  --callout-color: 112, 153, 219;
  border-bottom-color: rgb(112, 153, 219);
  border-left-color: rgb(112, 153, 219);
  border-right-color: rgb(112, 153, 219);
  border-top-color: rgb(112, 153, 219);
}

html body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(112, 153, 219));
}

html body .callout[data-callout="warning"] > .callout-content {
  color: rgb(215, 220, 226);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: var(--background-primary, rgb(29, 36, 51));
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--text-normal, rgb(215, 220, 226));
}

html body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(29, 36, 51));
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(215, 220, 226);
  outline: rgb(215, 220, 226) none 0px;
  text-decoration-color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(215, 220, 226);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(47, 59, 84));
  color: rgb(215, 220, 226);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 28, 40);
  border-left-color: rgb(255, 204, 102);
  border-right-color: rgb(255, 204, 102);
  border-top-color: rgb(255, 204, 102);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgb(47, 59, 84));
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgb(47, 59, 84));
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(215, 220, 226);
}

html body a.internal-link.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, color-mix(in hsl, #5ccfe6 25%, transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix( in hsl, #5ccfe6 25%, transparent ));
  --pill-border-color: var(--tag-border-color, hsla(40, 100%, 70%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(40, 100%, 70%, 0.15));
  --pill-color: var(--tag-color, #5ccfe6);
  --pill-color-hover: var(--tag-color-hover, #5ccfe6);
  --pill-color-remove: var(--tag-color, #5ccfe6);
  --pill-color-remove-hover: var(--tag-color-hover, #5ccfe6);
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  background-color: var(--pill-background, color(srgb 0.360784 0.811765 0.901961 / 0.25));
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  color: var(--pill-color, rgb(92, 207, 230));
}

html body a.internal-link.tag-link::before {
  color: rgb(92, 207, 230);
}

html body h1 {
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
  color: var(--h1-color, rgb(186, 230, 126));
}

html body h1.article-title {
  color: var(--inline-title-color, rgb(186, 230, 126));
}

html body h2 {
  --font-weight: var(--h2-weight, 675);
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
  color: var(--h2-color, rgb(186, 230, 126));
  font-weight: var(--font-weight, 675);
}

html body h2.page-title, html h2.page-title a {
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
  color: var(--inline-title-color, rgb(186, 230, 126));
}

html body h3 {
  --font-weight: var(--h3-weight, 650);
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
  color: var(--h3-color, rgb(186, 230, 126));
  font-weight: var(--font-weight, 650);
}

html body h4 {
  --font-weight: var(--h4-weight, 625);
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
  color: var(--h4-color, rgb(186, 230, 126));
  font-weight: var(--font-weight, 625);
}

html body h5 {
  --font-weight: var(--h5-weight, 600);
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
  color: var(--h5-color, rgb(186, 230, 126));
  font-weight: var(--font-weight, 600);
}

html body h6 {
  --font-weight: var(--h6-weight, 575);
  border-bottom-color: rgb(186, 230, 126);
  border-left-color: rgb(186, 230, 126);
  border-right-color: rgb(186, 230, 126);
  border-top-color: rgb(186, 230, 126);
  color: var(--h6-color, rgb(186, 230, 126));
  font-weight: var(--font-weight, 575);
}

html body hr {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: var(--callout-default, 112, 153, 219);
  border-bottom-color: rgba(112, 153, 219, 0.25);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(112, 153, 219, 0.25);
  border-right-color: rgba(112, 153, 219, 0.25);
  border-top-color: rgba(112, 153, 219, 0.25);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-right: 24px;
}`,
    explorer: `html body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}

html body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}

html body .explorer .nav-files-container a {
  color: var(--nav-item-color);
}

html body .explorer .nav-files-container a:hover {
  color: var(--nav-item-color-hover);
}

html body .explorer .nav-files-container .is-active {
  color: var(--nav-item-color-active);
}

html body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html body .explorer .nav-files-container .collapse-icon svg {
  color: var(--nav-collapse-icon-color);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(215, 220, 226);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}`,
    footer: `html body footer {
  background-color: var(--status-bar-background, rgb(23, 28, 40));
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-left-radius: 4px;
  color: var(--status-bar-text-color, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}

html body footer ul li a {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(215, 220, 226);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body li.section-li > .section .meta {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}

html body ul.section-ul {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: var(--icon-color, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}

html body .darkmode svg {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  stroke: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}`,
    breadcrumbs: `html body .breadcrumb-container {
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

html body .breadcrumb-element p {
  color: var(--text-faint, rgba(134, 149, 183, 0.6));
}`,
    canvas: `html body .canvas-node {
  border-color: rgb(215, 220, 226);
}

html body .canvas-node-content {
  color: rgb(215, 220, 226);
}

html body .canvas-node-file {
  color: var(--text-normal, rgb(215, 220, 226));
}

html body .canvas-node-group {
  border-color: rgb(215, 220, 226);
}

html body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(23, 28, 40));
  border-color: rgb(215, 220, 226);
}`,
    bases: `html body .bases-table tbody tr:nth-child(even) {
  background-color: var(--table-row-alt-background, rgb(29, 36, 51));
}

html body .bases-table thead th {
  border-color: color(srgb 0.149206 0.186251 0.26452);
  color: var(--table-header-color, rgb(215, 220, 226));
}`,
    properties: `html body .metadata {
  border-bottom-color: color(srgb 0.149206 0.186251 0.26452);
  border-left-color: color(srgb 0.149206 0.186251 0.26452);
  border-right-color: color(srgb 0.149206 0.186251 0.26452);
  border-top-color: color(srgb 0.149206 0.186251 0.26452);
  color: var(--text-muted, color(srgb 0.729403 0.762969 0.817656 / 0.8));
}

html body .metadata-container .metadata-property {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .metadata-properties {
  border-bottom-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-left-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-right-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  border-top-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .metadata-property-key {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .metadata-property-value {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .note-properties {
  border-color: color(srgb 0.149206 0.186251 0.26452);
}

html body .note-properties-key {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .note-properties-row {
  border-color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body .note-properties-tags {
  --pill-background: var(--tag-background, color-mix(in hsl, #5ccfe6 25%, transparent));
  --pill-background-hover: var(--tag-background-hover, color-mix( in hsl, #5ccfe6 25%, transparent ));
  --pill-border-color: var(--tag-border-color, hsla(40, 100%, 70%, 0.15));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(40, 100%, 70%, 0.15));
  --pill-color: var(--tag-color, #5ccfe6);
  --pill-color-hover: var(--tag-color-hover, #5ccfe6);
  --pill-color-remove: var(--tag-color, #5ccfe6);
  --pill-color-remove-hover: var(--tag-color-hover, #5ccfe6);
  --pill-decoration-hover: var(--tag-decoration-hover, underline);
  background-color: var(--pill-background, color(srgb 0.360784 0.811765 0.901961 / 0.25));
  color: var(--pill-color, rgb(92, 207, 230));
}

html body .note-properties-value {
  color: color(srgb 0.729403 0.762969 0.817656 / 0.8);
}

html body div#quartz-root {
  background-color: var(--background-primary, rgb(29, 36, 51));
  color: var(--text-normal, rgb(215, 220, 226));
}

html body ol.overflow {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}`,
    stacked: `html body .stacked-page {
  background-color: var(--background-secondary, rgb(23, 28, 40));
  border-color: rgb(215, 220, 226);
}

html body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(23, 28, 40));
}

html body .stacked-page.active {
  border-color: rgb(215, 220, 226);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: rgb(215, 220, 226);
}

html body .navigation-progress {
  background-color: var(--status-bar-background, rgb(23, 28, 40));
}

html body .page-header h2.page-title {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
  color: var(--text-normal, rgb(215, 220, 226));
}

html body abbr {
  color: rgb(215, 220, 226);
}

html body details {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body input[type=text] {
  border-bottom-color: rgb(92, 207, 230);
  border-left-color: rgb(92, 207, 230);
  border-right-color: rgb(92, 207, 230);
  border-top-color: rgb(92, 207, 230);
  color: var(--text-normal, rgb(92, 207, 230));
}

html body kbd {
  background-color: var(--code-background, rgb(23, 28, 40));
  border-bottom-color: rgb(92, 207, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(92, 207, 230);
  border-right-color: rgb(92, 207, 230);
  border-top-color: rgb(92, 207, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(92, 207, 230));
}

html body progress {
  border-bottom-color: rgb(215, 220, 226);
  border-left-color: rgb(215, 220, 226);
  border-right-color: rgb(215, 220, 226);
  border-top-color: rgb(215, 220, 226);
}

html body sub {
  color: rgb(215, 220, 226);
}

html body summary {
  color: rgb(215, 220, 226);
}

html body sup {
  color: rgb(215, 220, 226);
}

html body ul.tags > li {
  background-color: var(--tag-background, color(srgb 0.360784 0.811765 0.901961 / 0.25));
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
  color: var(--tag-color, rgb(92, 207, 230));
}`,
  },
  light: {},
};
