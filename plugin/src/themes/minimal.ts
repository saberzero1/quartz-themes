import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
    styleSettingsId: [
      "minimal-style",
      "minimal-cards-style",
      "minimal-advanced",
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 201;
  --accent-l: 60%;
  --accent-s: 17%;
  --active-line-bg: rgba(255, 255, 255, 0.04);
  --adaptive-list-edit-offset: var(--list-edit-offset, 0.5em);
  --ax1: hsl( var(--accent-h), var(--accent-s), var(--accent-l) );
  --ax2: hsl( var(--accent-h), var(--accent-s), calc(var(--accent-l) + 8%) );
  --ax3: hsl( var(--accent-h), var(--accent-s), calc(var(--accent-l) - 5%) );
  --background-modifier-accent: var(--ax3, hsl( 201, 17%, 55% ));
  --background-modifier-active-hover: var(--bg3, hsla( 0, 0%, 55%, 0.12 ));
  --background-modifier-border: var(--ui1, hsl( 0, 0%, 21% ));
  --background-modifier-border-focus: var(--ui3, hsl( 0, 0%, 35% ));
  --background-modifier-border-hover: var(--ui2, hsl( 0, 0%, 27% ));
  --background-modifier-cover: hsla(var(--base-h),var(--base-s), calc(var(--base-l) - 12%), 0.5);
  --background-modifier-error: var(--color-red, rgba(255, 20, 20, 0.12));
  --background-modifier-error-hover: var(--color-red, rgba(255, 20, 20, 0.18));
  --background-modifier-error-rgb: var(--color-red-rgb, 208,66,85);
  --background-modifier-form-field: var(--bg1, hsl( 0, 0%, 15% ));
  --background-modifier-form-field-highlighted: var(--bg1, hsl( 0, 0%, 15% ));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl( 0, 0%, 15% ));
  --background-modifier-hover: var(--bg3, hsla( 0, 0%, 55%, 0.12 ));
  --background-modifier-success: var(--color-green, #a8c373);
  --background-modifier-success-rgb: var(--color-green-rgb, 168,195,115);
  --background-primary: var(--bg1, hsl( 0, 0%, 15% ));
  --background-primary-alt: var(--bg2, hsl( 0, 0%, 13% ));
  --background-secondary: var(--bg2, hsl( 0, 0%, 13% ));
  --background-secondary-alt: var(--bg1, hsl( 0, 0%, 15% ));
  --background-table-rows: var(--bg2, hsl( 0, 0%, 13% ));
  --base-h: 0;
  --base-l: 15%;
  --base-s: 0%;
  --bases-cards-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --bases-cards-cover-background: var(--background-primary-alt, hsl( 0, 0%, 13% ));
  --bases-embed-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --bases-group-heading-property-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --bases-group-heading-property-size: var(--font-ui-smaller, 11px);
  --bases-table-border-color: var(--table-border-color, hsl( 0, 0%, 21% ));
  --bases-table-cell-background-active: var(--background-primary, hsl( 0, 0%, 15% ));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl( 0, 0%, 13% ));
  --bases-table-cell-background-selected: var(--table-selection, hsla( 201, 50%, 40%, 30% ));
  --bases-table-column-border-width: var(--border-width, 0px);
  --bases-table-font-size: calc(var(--font-adaptive-normal)*0.875);
  --bases-table-group-background: var(--background-primary-alt, hsl( 0, 0%, 13% ));
  --bases-table-header-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla( 0, 0%, 55%, 0.12 ));
  --bases-table-header-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --bases-table-summary-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla( 0, 0%, 55%, 0.12 ));
  --bg1: hsl( var(--base-h), var(--base-s), var(--base-l) );
  --bg2: hsl( var(--base-h), var(--base-s), calc(var(--base-l) - 2%) );
  --bg3: hsla( var(--base-h), var(--base-s), calc(var(--base-l) + 40%), 0.12 );
  --blockquote-border-color: var(--quote-opening-modifier, hsl( 0, 0%, 27% ));
  --blockquote-border-thickness: 1px;
  --blockquote-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --blockquote-style: normal;
  --btn-shadow-color: rgba(0, 0, 0, 0.2);
  --calendar-dot-active: var(--text-faint, hsl( 0, -10%, 35% ));
  --calendar-dot-today: var(--text-accent, hsl( 201, 17%, 60% ));
  --callout-bug: var(--color-red-rgb, 208,66,85);
  --callout-default: var(--color-blue-rgb, 108,153,187);
  --callout-error: var(--color-red-rgb, 208,66,85);
  --callout-example: var(--color-purple-rgb, 158,134,200);
  --callout-fail: var(--color-red-rgb, 208,66,85);
  --callout-important: var(--color-cyan-rgb, 115,187,178);
  --callout-info: var(--color-blue-rgb, 108,153,187);
  --callout-question: var(--color-orange-rgb, 213,118,63);
  --callout-success: var(--color-green-rgb, 168,195,115);
  --callout-summary: var(--color-cyan-rgb, 115,187,178);
  --callout-tip: var(--color-cyan-rgb, 115,187,178);
  --callout-todo: var(--color-blue-rgb, 108,153,187);
  --callout-warning: var(--color-orange-rgb, 213,118,63);
  --canvas-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --canvas-card-label-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --canvas-color-1: var(--color-red-rgb, 208,66,85);
  --canvas-color-2: var(--color-orange-rgb, 213,118,63);
  --canvas-color-3: var(--color-yellow-rgb, 229,181,103);
  --canvas-color-4: var(--color-green-rgb, 168,195,115);
  --canvas-color-5: var(--color-cyan-rgb, 115,187,178);
  --canvas-color-6: var(--color-purple-rgb, 158,134,200);
  --canvas-dot-pattern: var(--background-modifier-border-hover, hsl( 0, 0%, 27% ));
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-background-hover: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, hsl( 0, -10%, 82% ));
  --chart-color-1: var(--color-blue, #6c99bb);
  --chart-color-2: var(--color-red, #d04255);
  --chart-color-3: var(--color-yellow, #e5b567);
  --chart-color-4: var(--color-green, #a8c373);
  --chart-color-5: var(--color-orange, #d5763f);
  --chart-color-6: var(--color-purple, #9e86c8);
  --chart-color-7: var(--color-cyan, #73bbb2);
  --chart-color-8: var(--color-pink, #b05279);
  --chart-max-width: none;
  --chart-width: auto;
  --checkbox-border-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --checkbox-border-color-hover: var(--text-muted, hsl( 0, -20%, 60% ));
  --checkbox-color: var(--ax3, hsl( 201, 17%, 55% ));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl( 201, 17%, 60% ));
  --checkbox-left: 0px;
  --checkbox-margin: 0px 6px 0px -2em;
  --checkbox-marker-color: var(--background-primary, hsl( 0, 0%, 15% ));
  --checkbox-radius: var(--radius-s, 50%);
  --checkbox-top: 2px;
  --checklist-done-color: var(--text-normal, hsl( 0, -10%, 82% ));
  --checklist-done-decoration: none;
  --code-background: var(--background-primary-alt, hsl( 0, 0%, 13% ));
  --code-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --code-bracket-background: var(--background-modifier-hover, hsla( 0, 0%, 55%, 0.12 ));
  --code-comment: var(--text-faint, hsl( 0, -10%, 35% ));
  --code-function: var(--color-yellow, #e5b567);
  --code-important: var(--color-orange, #d5763f);
  --code-keyword: var(--color-pink, #b05279);
  --code-normal: var(--tx1, hsl( 0, -10%, 82% ));
  --code-operator: var(--color-red, #d04255);
  --code-property: var(--color-cyan, #73bbb2);
  --code-punctuation: var(--text-muted, hsl( 0, -20%, 60% ));
  --code-string: var(--color-green, #a8c373);
  --code-tag: var(--color-red, #d04255);
  --code-value: var(--color-purple, #9e86c8);
  --collapse-icon-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --collapse-icon-color-collapsed: var(--text-accent, hsl( 201, 17%, 60% ));
  --color-blue: #6c99bb;
  --color-blue-rgb: 108,153,187;
  --color-cyan: #73bbb2;
  --color-cyan-rgb: 115,187,178;
  --color-green: #a8c373;
  --color-green-rgb: 168,195,115;
  --color-orange: #d5763f;
  --color-orange-rgb: 213,118,63;
  --color-pink: #b05279;
  --color-pink-rgb: 176,82,121;
  --color-purple: #9e86c8;
  --color-purple-rgb: 158,134,200;
  --color-red: #d04255;
  --color-red-rgb: 208,66,85;
  --color-yellow: #e5b567;
  --color-yellow-rgb: 229,181,103;
  --container-chart-max-width: var(--max-width, 88%);
  --container-chart-width: var(--line-width, 40rem);
  --container-dataview-table-width: var(--line-width, 40rem);
  --container-iframe-max-width: var(--max-width, 88%);
  --container-iframe-width: var(--line-width, 40rem);
  --container-img-max-width: var(--max-width, 88%);
  --container-img-width: var(--line-width, 40rem);
  --container-map-max-width: var(--max-width, 88%);
  --container-map-width: var(--line-width, 40rem);
  --container-table-margin: calc(var(--content-margin-start) - var(--table-drag-space));
  --container-table-max-width: var(--max-width, 88%);
  --container-table-width: calc(var(--line-width) + var(--table-drag-space)*2);
  --content-line-width: min(var(--line-width), var(--max-width));
  --content-margin: auto;
  --content-margin-start: max( calc(50% - var(--line-width)/2), calc(50% - var(--max-width)/2) );
  --dark: var(--text-normal, var(--tx1, hsl( 0, -10%, 82% )));
  --darkgray: var(--text-normal, var(--tx1, hsl( 0, -10%, 82% )));
  --divider-color: var(--ui1, hsl( 0, 0%, 21% ));
  --divider-color-hover: var(--interactive-accent, hsl( 201, 17%, 55% ));
  --dropdown-background: var(--interactive-normal, hsla( 0, 0%, 55%, 0.12 ));
  --dropdown-background-hover: var(--interactive-hover, hsl( 0, 0%, 21% ));
  --embed-decoration-color: var(--background-modifier-border-hover, hsl( 0, 0%, 27% ));
  --embed-decoration-style: solid;
  --embed-max-height: none;
  --file-header-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --file-header-background-focused: var(--background-primary, hsl( 0, 0%, 15% ));
  --file-margins: var(--file-margins-y) var(--file-margins-x, 8px 32px);
  --file-margins-y: var(--size-4-2, 8px);
  --flair-background: var(--interactive-normal, hsla( 0, 0%, 55%, 0.12 ));
  --flair-color: var(--text-normal, hsl( 0, -10%, 82% ));
  --focus-animation-duration: 0.1s;
  --folding-offset: 32px;
  --font-adaptive-normal: var(--font-text-size,var(--editor-font-size));
  --font-adaptive-small: calc(var(--font-ui-small)*1.07);
  --font-adaptive-smaller: var(--font-ui-small, 13px);
  --font-adaptive-smallest: var(--font-ui-smaller, 11px);
  --font-code: calc(var(--font-adaptive-normal)*0.9);
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif;
  --font-ui-smaller: 11px;
  --footnote-divider-color: var(--metadata-divider-color, hsl( 0, 0%, 21% ));
  --footnote-id-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl( 0, -10%, 35% ));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla( 0, 0%, 55%, 0.12 ));
  --frame-background: hsl( var(--frame-background-h), var(--frame-background-s), var(--frame-background-l));
  --frame-background-h: var(--accent-h, 201);
  --frame-background-l: calc(var(--accent-l) - 25%);
  --frame-background-s: var(--accent-s, 17%);
  --frame-divider-color: var(--ui1, hsl( 0, 0%, 21% ));
  --frame-icon-color: var(--frame-muted-color, hsl( 201, 7%, 60%));
  --frame-muted-color: hsl( var(--frame-background-h), calc(var(--frame-background-s) - 10%), calc(var(--frame-background-l) + 25%));
  --frame-outline-color: hsla( var(--frame-background-h), calc(var(--frame-background-s) - 2%), calc(var(--frame-background-l) + 6.5%), 1 );
  --graph-node: var(--text-muted, hsl( 0, -20%, 60% ));
  --graph-node-attachment: var(--color-yellow, #e5b567);
  --graph-node-focused: var(--text-accent, hsl( 201, 17%, 60% ));
  --graph-node-tag: var(--color-green, #a8c373);
  --graph-node-unresolved: var(--text-faint, hsl( 0, -10%, 35% ));
  --graph-text: var(--text-normal, hsl( 0, -10%, 82% ));
  --gray: var(--text-muted, var(--tx2, hsl( 0, -20%, 60% )));
  --h1-size: 1.125em;
  --h1-weight: 600;
  --h1l: var(--ui1, hsl( 0, 0%, 21% ));
  --h2-size: 1.05em;
  --h2-weight: 600;
  --h2l: var(--ui1, hsl( 0, 0%, 21% ));
  --h3-size: 1em;
  --h3-weight: 500;
  --h3l: var(--ui1, hsl( 0, 0%, 21% ));
  --h4-size: 0.90em;
  --h4-weight: 500;
  --h4l: var(--ui1, hsl( 0, 0%, 21% ));
  --h5-size: 0.85em;
  --h5-variant: small-caps;
  --h5-weight: 500;
  --h5l: var(--ui1, hsl( 0, 0%, 21% ));
  --h6-size: 0.85em;
  --h6-variant: small-caps;
  --h6-weight: 400;
  --h6l: var(--ui1, hsl( 0, 0%, 21% ));
  --heading-formatting: var(--text-faint, hsl( 0, -10%, 35% ));
  --hider-ribbon-display: none;
  --highlight: var(--text-highlight-bg, var(--hl2, rgba(255, 177, 80, 0.3)));
  --hl1: hsla( var(--accent-h), 50%, 40%, 30% );
  --hl2: rgba(255, 177, 80, 0.3);
  --hr-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --icon-color: var(--tx2, hsl( 0, -20%, 60% ));
  --icon-color-active: var(--tx1, hsl( 0, -10%, 82% ));
  --icon-color-focused: var(--tx1, hsl( 0, -10%, 82% ));
  --icon-color-hover: var(--tx2, hsl( 0, -20%, 60% ));
  --icon-hex: var(--mono0, black);
  --icon-muted: 0.5;
  --iframe-max-width: none;
  --iframe-width: auto;
  --image-grid-background: transparent;
  --image-grid-fit: cover;
  --image-mix: normal;
  --image-muted: 0.7;
  --image-radius: 4px;
  --img-grid-gap: 0.5rem;
  --img-line-width: var(--content-line-width, min(40rem, 88%));
  --img-margin-start: var(--content-margin-start, max( calc(50% - 20rem), 6% ));
  --img-max-width: 100%;
  --img-width: auto;
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: var(--h1-size, 1.125em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, hsl( 0, -10%, 35% ));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --interactive-accent: var(--ax3, hsl( 201, 17%, 55% ));
  --interactive-accent-hover: var(--ax1, hsl( 201, 17%, 60% ));
  --interactive-accent-hsl: var(--color-accent-hsl, 201, 17%, 60%);
  --interactive-accent-rgb: 66,66,66;
  --interactive-hover: var(--ui1, hsl( 0, 0%, 21% ));
  --interactive-normal: var(--bg3, hsla( 0, 0%, 55%, 0.12 ));
  --kanban-border: 0px;
  --leaflet-borders: rgba(255, 255, 255, 0.1);
  --leaflet-buttons: var(--bg2, hsl( 0, 0%, 13% ));
  --light: var(--background-primary, var(--bg1, hsl( 0, 0%, 15% )));
  --lightgray: var(--background-secondary, var(--bg2, hsl( 0, 0%, 13% )));
  --line-height: 1.5;
  --line-height-normal: var(--line-height, 1.5);
  --line-number-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --line-number-color-active: var(--text-muted, hsl( 0, -20%, 60% ));
  --line-width: 40rem;
  --line-width-wide: calc(var(--line-width) + 12.5%);
  --link-color: var(--text-accent, hsl( 201, 17%, 60% ));
  --link-color-hover: var(--text-accent-hover, hsl( 201, 17%, 68% ));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl( 201, 17%, 60% ));
  --link-external-color-hover: var(--text-accent-hover, hsl( 201, 17%, 68% ));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, hsl( 201, 17%, 60% ));
  --list-edit-offset: 0.5em;
  --list-marker-color: var(--tx3, hsl( 0, -10%, 35% ));
  --list-marker-color-collapsed: var(--text-accent, hsl( 201, 17%, 60% ));
  --list-marker-color-hover: var(--text-muted, hsl( 0, -20%, 60% ));
  --map-header-padding: 2px;
  --map-max-width: none;
  --map-width: auto;
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: var(--background-secondary, hsl( 0, 0%, 13% ));
  --menu-border-color: var(--background-modifier-border-hover, hsl( 0, 0%, 27% ));
  --metadata-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --metadata-divider-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --metadata-input-background-active: var(--background-modifier-hover, hsla( 0, 0%, 55%, 0.12 ));
  --metadata-input-font-size: var(--font-adaptive-small, 13.91px);
  --metadata-input-text-color: var(--text-normal, hsl( 0, -10%, 82% ));
  --metadata-label-background-active: var(--background-modifier-hover, hsla( 0, 0%, 55%, 0.12 ));
  --metadata-label-font-size: var(--font-adaptive-small, 13.91px);
  --metadata-label-text-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --metadata-label-text-color-hover: var(--text-muted, hsl( 0, -20%, 60% ));
  --metadata-label-width: calc(var(--font-adaptive-small)*var(--metadata-label-width-multiplier));
  --metadata-label-width-multiplier: 9;
  --metadata-property-background-active: var(--background-modifier-hover, hsla( 0, 0%, 55%, 0.12 ));
  --minimal-tab-text-color: var(--tx2, hsl( 0, -20%, 60% ));
  --minimal-tab-text-color-active: var(--tx1, hsl( 0, -10%, 82% ));
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --mobile-sidebar-background: var(--bg1, hsl( 0, 0%, 15% ));
  --modal-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --modal-border-color: var(--ui2, hsl( 0, 0%, 27% ));
  --mono0: black;
  --mono100: white;
  --nav-collapse-icon-color: var(--tx2, hsl( 0, -20%, 60% ));
  --nav-collapse-icon-color-collapsed: var(--tx2, hsl( 0, -20%, 60% ));
  --nav-heading-color: var(--text-normal, hsl( 0, -10%, 82% ));
  --nav-heading-color-collapsed: var(--text-faint, hsl( 0, -10%, 35% ));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl( 0, -20%, 60% ));
  --nav-heading-color-hover: var(--text-normal, hsl( 0, -10%, 82% ));
  --nav-indentation-guide-color: var(--ui1, hsl( 0, 0%, 21% ));
  --nav-item-background-active: var(--bg3, hsla( 0, 0%, 55%, 0.12 ));
  --nav-item-background-hover: var(--bg3, hsla( 0, 0%, 55%, 0.12 ));
  --nav-item-color: var(--tx2, hsl( 0, -20%, 60% ));
  --nav-item-color-active: var(--tx1, hsl( 0, -10%, 82% ));
  --nav-item-color-highlighted: var(--text-accent, hsl( 201, 17%, 60% ));
  --nav-item-color-hover: var(--tx1, hsl( 0, -10%, 82% ));
  --nav-item-color-selected: var(--tx1, hsl( 0, -10%, 82% ));
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --nav-tag-color-active: var(--text-muted, hsl( 0, -20%, 60% ));
  --nav-tag-color-hover: var(--text-muted, hsl( 0, -20%, 60% ));
  --nested-padding: 1.1em;
  --normal-weight: 400;
  --p-spacing: 1.75rem;
  --pdf-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --pdf-dark-opacity: 1;
  --pdf-page-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --pdf-sidebar-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --pill-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl( 0, 0%, 27% ));
  --pill-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --pill-color-hover: var(--text-normal, hsl( 0, -10%, 82% ));
  --pill-color-remove: var(--text-faint, hsl( 0, -10%, 35% ));
  --pill-color-remove-hover: var(--text-accent, hsl( 201, 17%, 60% ));
  --progress-complete: var(--text-accent, hsl( 201, 17%, 60% ));
  --progress-outline: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --prompt-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --prompt-border-color: var(--ui3, hsl( 0, 0%, 35% ));
  --quote-opening-modifier: var(--ui2, hsl( 0, 0%, 27% ));
  --raised-background: var(--blur-background, color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent) linear-gradient(hsla( 0, 0%, 55%, 0.12 ), color-mix(in srgb, hsla( 0, 0%, 55%, 0.12 ) 65%, transparent)));
  --ribbon-animation-duration: 0.1s;
  --ribbon-background: var(--bg2, hsl( 0, 0%, 13% ));
  --ribbon-background-collapsed: var(--background-primary, hsl( 0, 0%, 15% ));
  --scrollbar-active-thumb-bg: var(--ui3, hsl( 0, 0%, 35% ));
  --scrollbar-thumb-bg: var(--ui1, hsl( 0, 0%, 21% ));
  --search-clear-button-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --search-icon-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --search-result-background: var(--bg1, hsl( 0, 0%, 15% ));
  --secondary: var(--text-accent, var(--ax1, hsl( 201, 17%, 60% )));
  --setting-group-heading-color: var(--text-normal, hsl( 0, -10%, 82% ));
  --setting-items-background: var(--background-primary-alt, hsl( 0, 0%, 13% ));
  --setting-items-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --shadow-color: rgba(0, 0, 0, 0.3);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl( 0, -20%, 60% ));
  --shiki-code-background: var(--code-background, hsl( 0, 0%, 13% ));
  --shiki-code-block-spacing: var(--p-spacing, 1.75rem);
  --shiki-code-comment: var(--text-faint, hsl( 0, -10%, 35% ));
  --shiki-code-function: var(--color-green, #a8c373);
  --shiki-code-important: var(--color-orange, #d5763f);
  --shiki-code-keyword: var(--color-pink, #b05279);
  --shiki-code-normal: var(--text-muted, hsl( 0, -20%, 60% ));
  --shiki-code-property: var(--color-cyan, #73bbb2);
  --shiki-code-punctuation: var(--text-muted, hsl( 0, -20%, 60% ));
  --shiki-code-string: var(--color-yellow, #e5b567);
  --shiki-code-value: var(--color-purple, #9e86c8);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --shiki-gutter-text-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl( 0, -20%, 60% ));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl( 0, -20%, 60% ));
  --shiki-terminal-dots-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl( 0, 0%, 27% ));
  --slider-track-background: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --sp1: white;
  --status-bar-background: var(--background-secondary, hsl( 0, 0%, 13% ));
  --status-bar-border-color: var(--divider-color, hsl( 0, 0%, 21% ));
  --status-bar-font-size: var(--font-ui-smaller, 11px);
  --status-bar-text-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --suggestion-background: var(--background-primary, hsl( 0, 0%, 15% ));
  --sync-avatar-color-1: var(--color-red, #d04255);
  --sync-avatar-color-2: var(--color-orange, #d5763f);
  --sync-avatar-color-3: var(--color-yellow, #e5b567);
  --sync-avatar-color-4: var(--color-green, #a8c373);
  --sync-avatar-color-5: var(--color-cyan, #73bbb2);
  --sync-avatar-color-6: var(--color-blue, #6c99bb);
  --sync-avatar-color-7: var(--color-purple, #9e86c8);
  --sync-avatar-color-8: var(--color-pink, #b05279);
  --tab-background-active: var(--background-primary, hsl( 0, 0%, 15% ));
  --tab-container-background: var(--background-secondary, hsl( 0, 0%, 13% ));
  --tab-divider-color: var(--background-modifier-border-hover, hsl( 0, 0%, 27% ));
  --tab-outline-color: var(--ui1, hsl( 0, 0%, 21% ));
  --tab-switcher-background: var(--background-secondary, hsl( 0, 0%, 13% ));
  --tab-text-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --tab-text-color-active: var(--text-muted, hsl( 0, -20%, 60% ));
  --tab-text-color-focused: var(--text-muted, hsl( 0, -20%, 60% ));
  --tab-text-color-focused-active: var(--tx1, hsl( 0, -10%, 82% ));
  --tab-text-color-focused-active-current: var(--text-normal, hsl( 0, -10%, 82% ));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl( 201, 17%, 60% ));
  --table-add-button-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --table-add-button-border-width: var(--table-border-width, 0px);
  --table-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --table-border-width: var(--border-width, 1px);
  --table-cell-padding: 4px 10px;
  --table-column-first-border-width: var(--table-border-width, 0);
  --table-column-last-border-width: var(--table-border-width, 0);
  --table-drag-handle-background-active: var(--text-selection, hsla( 201, 50%, 40%, 30% ));
  --table-drag-handle-color: var(--text-faint, hsl( 0, -10%, 35% ));
  --table-drag-handle-color-active: var(--text-accent, hsl( 201, 17%, 60% ));
  --table-drag-padding: var(--table-drag-space, 16px);
  --table-drag-space: 16px;
  --table-edge-cell-padding-first: 0;
  --table-edge-cell-padding-last: 0;
  --table-header-border-color: var(--table-border-color, hsl( 0, 0%, 21% ));
  --table-header-border-width: var(--table-border-width, 0);
  --table-header-color: var(--text-normal, hsl( 0, -10%, 82% ));
  --table-header-size: var(--table-text-size, 14px);
  --table-max-width: none;
  --table-row-last-border-width: var(--table-border-width, 0);
  --table-selection: var(--text-selection, hsla( 201, 50%, 40%, 30% ));
  --table-selection-border-color: var(--text-accent, hsl( 201, 17%, 60% ));
  --table-selection-border-radius: 0px;
  --table-selection-border-width: 0px;
  --table-text-size: calc(var(--font-adaptive-normal)*0.875);
  --table-white-space: normal;
  --table-width: auto;
  --table-wrapper-width: fit-content;
  --tag-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --tag-border-color-hover: var(--background-modifier-border-hover, hsl( 0, 0%, 27% ));
  --tag-border-width: 1px;
  --tag-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --tag-color-hover: var(--text-normal, hsl( 0, -10%, 82% ));
  --tag-padding-y: 0.2em;
  --tag-size: var(--font-smaller, 0.8em);
  --tertiary: var(--text-accent-hover, var(--ax2, hsl( 201, 17%, 68% )));
  --text-accent: var(--ax1, hsl( 201, 17%, 60% ));
  --text-accent-hover: var(--ax2, hsl( 201, 17%, 68% ));
  --text-blockquote: var(--tx2, hsl( 0, -20%, 60% ));
  --text-bold: var(--tx1, hsl( 0, -10%, 82% ));
  --text-code: var(--tx4, hsl( 0, -10%, 65% ));
  --text-error: var(--color-red, #d04255);
  --text-faint: var(--tx3, hsl( 0, -10%, 35% ));
  --text-formatting: var(--tx3, hsl( 0, -10%, 35% ));
  --text-highlight-bg: var(--hl2, rgba(255, 177, 80, 0.3));
  --text-highlight-bg-active: rgba(255, 255, 255, 0.1);
  --text-italic: var(--tx1, hsl( 0, -10%, 82% ));
  --text-muted: var(--tx2, hsl( 0, -20%, 60% ));
  --text-normal: var(--tx1, hsl( 0, -10%, 82% ));
  --text-on-accent: var(--sp1, white);
  --text-selection: var(--hl1, hsla( 201, 50%, 40%, 30% ));
  --text-success: var(--color-green, #a8c373);
  --text-warning: var(--color-orange, #d5763f);
  --textHighlight: var(--text-highlight-bg, var(--hl2, rgba(255, 177, 80, 0.3)));
  --title-color: var(--tx1, hsl( 0, -10%, 82% ));
  --title-color-inactive: var(--tx2, hsl( 0, -20%, 60% ));
  --titlebar-background: var(--bg1, hsl( 0, 0%, 15% ));
  --titlebar-background-focused: var(--background-secondary, hsl( 0, 0%, 13% ));
  --titlebar-border-color: var(--background-modifier-border, hsl( 0, 0%, 21% ));
  --titlebar-text-color: var(--text-muted, hsl( 0, -20%, 60% ));
  --titlebar-text-color-focused: var(--tx1, hsl( 0, -10%, 82% ));
  --top-left-padding-y: 0px;
  --tx1: hsl( var(--base-h), calc(var(--base-s) - 10%), calc(var(--base-l) + 67%) );
  --tx2: hsl( var(--base-h), calc(var(--base-s) - 20%), calc(var(--base-l) + 45%) );
  --tx3: hsl( var(--base-h), calc(var(--base-s) - 10%), calc(var(--base-l) + 20%) );
  --tx4: hsl( var(--base-h), calc(var(--base-s) - 10%), calc(var(--base-l) + 50%) );
  --ui1: hsl( var(--base-h), var(--base-s), calc(var(--base-l) + 6%) );
  --ui2: hsl( var(--base-h), var(--base-s), calc(var(--base-l) + 12%) );
  --ui3: hsl( var(--base-h), var(--base-s), calc(var(--base-l) + 20%) );
  --vault-profile-color: var(--tx1, hsl( 0, -10%, 82% ));
  --vault-profile-color-hover: var(--tx1, hsl( 0, -10%, 82% ));
  --workspace-background-translucent: hsla(var(--base-h),var(--base-s), var(--base-l), 0.7);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(33, 33, 33));
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(38, 38, 38));
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(33, 33, 33));
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(33, 33, 33));
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body html {
  --focus-animation-duration: 0.1s;
  --hider-ribbon-display: none;
  --image-mix: normal;
  --ribbon-animation-duration: 0.1s;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(209, 209, 209));
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(209, 209, 209));
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(209, 209, 209));
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(209, 209, 209));
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 177, 80, 0.3));
  color: var(--text-normal, rgb(209, 209, 209));
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body del {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(209, 209, 209));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(89, 89, 89);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(121, 146, 160));
  border-color: rgb(121, 146, 160);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(153, 153, 153));
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(136, 158, 170));
  outline: rgb(136, 158, 170) none 0px;
  text-decoration-color: rgb(136, 158, 170);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(136, 158, 170));
  outline: rgb(136, 158, 170) none 0px;
  text-decoration-color: rgb(136, 158, 170);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(136, 158, 170));
  outline: rgb(136, 158, 170) none 0px;
  text-decoration: rgba(136, 158, 170, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(136, 158, 170, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body dt {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, rgb(89, 89, 89));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
  margin-top: var(--heading-spacing, 8px);
  width: var(--table-width, 187.438px);
}

html[saved-theme="dark"] body td {
  border-left-width: var(--table-column-first-border-width, 0px);
  color: var(--table-text-color, rgb(209, 209, 209));
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="dark"] body th {
  border-left-width: var(--table-column-first-border-width, 0px);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(209, 209, 209));
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgb(33, 33, 33));
  color: var(--code-normal, rgb(209, 209, 209));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(33, 33, 33));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(209, 209, 209);
  border-radius: 4px;
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(209, 209, 209);
  border-radius: 4px;
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(33, 33, 33));
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(121, 146, 160);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(209, 209, 209);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(209, 209, 209);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(89, 89, 89);
  text-decoration: line-through 1px rgb(89, 89, 89);
  text-decoration-color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(213, 118, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 118, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 181, 103);
  color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(121, 146, 160);
  content: " ";
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 187, 178);
  color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 153, 187);
  color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
  color: rgb(213, 118, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
  color: rgb(213, 118, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
  color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
  color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 181, 103);
  color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 181, 103);
  color: rgb(229, 181, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 134, 200);
  color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 195, 115);
  color: rgb(168, 195, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 195, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 195, 115);
  color: rgb(168, 195, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(158, 134, 200);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 115,187,178);
  background: rgba(115, 187, 178, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 208,66,85);
  background: rgba(208, 66, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 208,66,85);
  background: rgba(208, 66, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 158,134,200);
  background: rgba(158, 134, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(158, 134, 200, 0.25);
  border-left-color: rgba(158, 134, 200, 0.25);
  border-right-color: rgba(158, 134, 200, 0.25);
  border-top-color: rgba(158, 134, 200, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 208,66,85);
  background: rgba(208, 66, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 108,153,187);
  background: rgba(108, 153, 187, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 108,153,187);
  background: rgba(108, 153, 187, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 213,118,63);
  background: rgba(213, 118, 63, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 168,195,115);
  background: rgba(168, 195, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(168, 195, 115, 0.25);
  border-left-color: rgba(168, 195, 115, 0.25);
  border-right-color: rgba(168, 195, 115, 0.25);
  border-top-color: rgba(168, 195, 115, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 115,187,178);
  background: rgba(115, 187, 178, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 108,153,187);
  background: rgba(108, 153, 187, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 213,118,63);
  background: rgba(213, 118, 63, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(209, 209, 209);
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
  background-color: rgb(38, 38, 38);
  color: var(--text-normal, rgb(209, 209, 209));
  font-family: var(--font-interface, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(38, 38, 38));
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(140, 140, 140, 0.12));
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(140, 140, 140, 0.12));
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(140, 140, 140, 0.12));
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(209, 209, 209));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(209, 209, 209));
  font-size: var(--inline-title-size, 18px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(209, 209, 209));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(209, 209, 209));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(209, 209, 209));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(209, 209, 209));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(209, 209, 209));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(209, 209, 209));
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 108,153,187);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(54, 54, 54);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(153, 153, 153));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(209, 209, 209);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: var(--icon-color, rgb(153, 153, 153));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--background-primary, rgb(38, 38, 38));
  border-left-width: 0px;
  border-top-width: 0px;
  color: var(--text-faint, rgb(89, 89, 89));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(89, 89, 89);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: var(--icon-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(89, 89, 89));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(209, 209, 209));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(33, 33, 33));
  border-color: rgb(209, 209, 209);
}`,
    bases: `html[saved-theme="dark"] body .bases-table {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: var(--table-header-color, rgb(209, 209, 209));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  color: var(--text-muted, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 27.82px;
  color: var(--pill-color, rgb(153, 153, 153));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(38, 38, 38));
  color: var(--text-normal, rgb(209, 209, 209));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(33, 33, 33));
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(33, 33, 33));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(209, 209, 209);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--background-primary, rgb(38, 38, 38));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(209, 209, 209));
}

html[saved-theme="dark"] body abbr {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: var(--text-normal, rgb(153, 153, 153));
  font-family: var(--font-interface, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(33, 33, 33));
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: var(--code-normal, rgb(209, 209, 209));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sub {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body summary {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sup {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(54, 54, 54);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgb(54, 54, 54);
  border-left-width: 1px;
  border-right-color: rgb(54, 54, 54);
  border-right-width: 1px;
  border-top-color: rgb(54, 54, 54);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: var(--tag-color, rgb(153, 153, 153));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 201;
  --accent-l: 50%;
  --accent-s: 17%;
  --active-line-bg: rgba(0, 0, 0, 0.035);
  --adaptive-list-edit-offset: var(--list-edit-offset, 0.5em);
  --ax1: hsl( var(--accent-h), var(--accent-s), var(--accent-l) );
  --ax2: hsl( var(--accent-h), var(--accent-s), calc(var(--accent-l) - 8%) );
  --ax3: hsl( var(--accent-h), var(--accent-s), calc(var(--accent-l) + 6%) );
  --background-modifier-accent: var(--ax3, hsl( 201, 17%, 56% ));
  --background-modifier-active-hover: var(--bg3, hsla( 0, 0%, 46%, 0.12 ));
  --background-modifier-border: var(--ui1, hsl( 0, 0%, 90% ));
  --background-modifier-border-focus: var(--ui3, hsl( 0, 0%, 76% ));
  --background-modifier-border-hover: var(--ui2, hsl( 0, 0%, 84% ));
  --background-modifier-cover: hsla(var(--base-h),calc(var(--base-s) - 70%),calc(var(--base-l) - 20%),0.5);
  --background-modifier-error: var(--color-red, rgba(255, 0, 0, 0.14));
  --background-modifier-error-hover: var(--color-red, rgba(255, 0, 0, 0.08));
  --background-modifier-error-rgb: var(--color-red-rgb, 208,66,85);
  --background-modifier-form-field: var(--bg1, white);
  --background-modifier-form-field-highlighted: var(--bg1, white);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, white);
  --background-modifier-hover: var(--bg3, hsla( 0, 0%, 46%, 0.12 ));
  --background-modifier-success: var(--color-green, #a8c373);
  --background-modifier-success-rgb: var(--color-green-rgb, 168,195,115);
  --background-primary: var(--bg1, white);
  --background-primary-alt: var(--bg2, hsl( 0, 0%, 96% ));
  --background-secondary: var(--bg2, hsl( 0, 0%, 96% ));
  --background-secondary-alt: var(--bg1, white);
  --background-table-rows: var(--bg2, hsl( 0, 0%, 96% ));
  --base-h: 0;
  --base-l: 96%;
  --base-s: 0%;
  --bases-cards-background: var(--background-primary, white);
  --bases-cards-cover-background: var(--background-primary-alt, hsl( 0, 0%, 96% ));
  --bases-embed-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --bases-group-heading-property-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --bases-group-heading-property-size: var(--font-ui-smaller, 11px);
  --bases-table-border-color: var(--table-border-color, hsl( 0, 0%, 90% ));
  --bases-table-cell-background-active: var(--background-primary, white);
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl( 0, 0%, 96% ));
  --bases-table-cell-background-selected: var(--table-selection, hsla( 201, 50%, 76%, 30% ));
  --bases-table-column-border-width: var(--border-width, 0px);
  --bases-table-font-size: calc(var(--font-adaptive-normal)*0.875);
  --bases-table-group-background: var(--background-primary-alt, hsl( 0, 0%, 96% ));
  --bases-table-header-background: var(--background-primary, white);
  --bases-table-header-background-hover: var(--background-modifier-hover, hsla( 0, 0%, 46%, 0.12 ));
  --bases-table-header-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --bases-table-summary-background: var(--background-primary, white);
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsla( 0, 0%, 46%, 0.12 ));
  --bg1: white;
  --bg2: hsl( var(--base-h), var(--base-s), var(--base-l) );
  --bg3: hsla( var(--base-h), var(--base-s), calc(var(--base-l) - 50%), 0.12 );
  --blockquote-border-color: var(--quote-opening-modifier, hsl( 0, 0%, 84% ));
  --blockquote-border-thickness: 1px;
  --blockquote-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --blockquote-style: normal;
  --btn-shadow-color: rgba(0, 0, 0, 0.05);
  --calendar-dot-active: var(--text-faint, hsl( 0, -10%, 71% ));
  --calendar-dot-today: var(--text-accent, hsl( 201, 17%, 50% ));
  --callout-bug: var(--color-red-rgb, 208,66,85);
  --callout-default: var(--color-blue-rgb, 108,153,187);
  --callout-error: var(--color-red-rgb, 208,66,85);
  --callout-example: var(--color-purple-rgb, 158,134,200);
  --callout-fail: var(--color-red-rgb, 208,66,85);
  --callout-important: var(--color-cyan-rgb, 115,187,178);
  --callout-info: var(--color-blue-rgb, 108,153,187);
  --callout-question: var(--color-orange-rgb, 213,118,63);
  --callout-success: var(--color-green-rgb, 168,195,115);
  --callout-summary: var(--color-cyan-rgb, 115,187,178);
  --callout-tip: var(--color-cyan-rgb, 115,187,178);
  --callout-todo: var(--color-blue-rgb, 108,153,187);
  --callout-warning: var(--color-orange-rgb, 213,118,63);
  --canvas-background: var(--background-primary, white);
  --canvas-card-label-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --canvas-color-1: var(--color-red-rgb, 208,66,85);
  --canvas-color-2: var(--color-orange-rgb, 213,118,63);
  --canvas-color-3: var(--color-yellow-rgb, 229,181,103);
  --canvas-color-4: var(--color-green-rgb, 168,195,115);
  --canvas-color-5: var(--color-cyan-rgb, 115,187,178);
  --canvas-color-6: var(--color-purple-rgb, 158,134,200);
  --canvas-dot-pattern: var(--background-modifier-border-hover, hsl( 0, 0%, 84% ));
  --cards-aspect-ratio: auto;
  --cards-background: transparent;
  --cards-background-hover: transparent;
  --cards-border-width: 1px;
  --cards-columns: repeat(auto-fit, minmax(var(--cards-min-width), var(--cards-max-width)));
  --cards-image-fit: contain;
  --cards-image-height: 400px;
  --cards-max-width: 1fr;
  --cards-min-width: 180px;
  --cards-mobile-width: 120px;
  --cards-padding: 1.2em;
  --caret-color: var(--text-normal, hsl( 0, 0%, 6% ));
  --chart-color-1: var(--color-blue, #6c99bb);
  --chart-color-2: var(--color-red, #d04255);
  --chart-color-3: var(--color-yellow, #e5b567);
  --chart-color-4: var(--color-green, #a8c373);
  --chart-color-5: var(--color-orange, #d5763f);
  --chart-color-6: var(--color-purple, #9e86c8);
  --chart-color-7: var(--color-cyan, #73bbb2);
  --chart-color-8: var(--color-pink, #b05279);
  --chart-max-width: none;
  --chart-width: auto;
  --checkbox-border-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --checkbox-border-color-hover: var(--text-muted, hsl( 0, -20%, 46% ));
  --checkbox-color: var(--ax3, hsl( 201, 17%, 56% ));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl( 201, 17%, 50% ));
  --checkbox-left: 0px;
  --checkbox-margin: 0px 6px 0px -2em;
  --checkbox-marker-color: var(--background-primary, white);
  --checkbox-radius: var(--radius-s, 50%);
  --checkbox-top: 2px;
  --checklist-done-color: var(--text-normal, hsl( 0, 0%, 6% ));
  --checklist-done-decoration: none;
  --code-background: var(--background-primary-alt, hsl( 0, 0%, 96% ));
  --code-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --code-bracket-background: var(--background-modifier-hover, hsla( 0, 0%, 46%, 0.12 ));
  --code-comment: var(--text-faint, hsl( 0, -10%, 71% ));
  --code-function: var(--color-yellow, #e5b567);
  --code-important: var(--color-orange, #d5763f);
  --code-keyword: var(--color-pink, #b05279);
  --code-normal: var(--tx1, hsl( 0, 0%, 6% ));
  --code-operator: var(--color-red, #d04255);
  --code-property: var(--color-cyan, #73bbb2);
  --code-punctuation: var(--text-muted, hsl( 0, -20%, 46% ));
  --code-string: var(--color-green, #a8c373);
  --code-tag: var(--color-red, #d04255);
  --code-value: var(--color-purple, #9e86c8);
  --collapse-icon-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --collapse-icon-color-collapsed: var(--text-accent, hsl( 201, 17%, 50% ));
  --color-blue: #6c99bb;
  --color-blue-rgb: 108,153,187;
  --color-cyan: #73bbb2;
  --color-cyan-rgb: 115,187,178;
  --color-green: #a8c373;
  --color-green-rgb: 168,195,115;
  --color-orange: #d5763f;
  --color-orange-rgb: 213,118,63;
  --color-pink: #b05279;
  --color-pink-rgb: 176,82,121;
  --color-purple: #9e86c8;
  --color-purple-rgb: 158,134,200;
  --color-red: #d04255;
  --color-red-rgb: 208,66,85;
  --color-yellow: #e5b567;
  --color-yellow-rgb: 229,181,103;
  --container-chart-max-width: var(--max-width, 88%);
  --container-chart-width: var(--line-width, 40rem);
  --container-dataview-table-width: var(--line-width, 40rem);
  --container-iframe-max-width: var(--max-width, 88%);
  --container-iframe-width: var(--line-width, 40rem);
  --container-img-max-width: var(--max-width, 88%);
  --container-img-width: var(--line-width, 40rem);
  --container-map-max-width: var(--max-width, 88%);
  --container-map-width: var(--line-width, 40rem);
  --container-table-margin: calc(var(--content-margin-start) - var(--table-drag-space));
  --container-table-max-width: var(--max-width, 88%);
  --container-table-width: calc(var(--line-width) + var(--table-drag-space)*2);
  --content-line-width: min(var(--line-width), var(--max-width));
  --content-margin: auto;
  --content-margin-start: max( calc(50% - var(--line-width)/2), calc(50% - var(--max-width)/2) );
  --dark: var(--text-normal, var(--tx1, hsl( 0, 0%, 6% )));
  --darkgray: var(--text-normal, var(--tx1, hsl( 0, 0%, 6% )));
  --divider-color: var(--ui1, hsl( 0, 0%, 90% ));
  --divider-color-hover: var(--interactive-accent, hsl( 201, 17%, 56% ));
  --dropdown-background: var(--interactive-normal, white);
  --dropdown-background-hover: var(--interactive-hover, hsl( 0, 0%, 90% ));
  --embed-decoration-color: var(--background-modifier-border-hover, hsl( 0, 0%, 84% ));
  --embed-decoration-style: solid;
  --embed-max-height: none;
  --file-header-background: var(--background-primary, white);
  --file-header-background-focused: var(--background-primary, white);
  --file-margins: var(--file-margins-y) var(--file-margins-x, 8px 32px);
  --file-margins-y: var(--size-4-2, 8px);
  --flair-background: var(--interactive-normal, white);
  --flair-color: var(--text-normal, hsl( 0, 0%, 6% ));
  --focus-animation-duration: 0.1s;
  --folding-offset: 32px;
  --font-adaptive-normal: var(--font-text-size,var(--editor-font-size));
  --font-adaptive-small: calc(var(--font-ui-small)*1.07);
  --font-adaptive-smaller: var(--font-ui-small, 13px);
  --font-adaptive-smallest: var(--font-ui-smaller, 11px);
  --font-code: calc(var(--font-adaptive-normal)*0.9);
  --font-editor-theme: system,BlinkMacSystemFont,"Segoe UI",Roboto,Inter,Ubuntu,sans-serif;
  --font-ui-smaller: 11px;
  --footnote-divider-color: var(--metadata-divider-color, hsl( 0, 0%, 90% ));
  --footnote-id-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl( 0, -10%, 71% ));
  --footnote-input-background-active: var(--metadata-input-background-active, hsla( 0, 0%, 46%, 0.12 ));
  --frame-background: hsl( var(--frame-background-h), var(--frame-background-s), var(--frame-background-l));
  --frame-background-h: var(--accent-h, 201);
  --frame-background-l: calc(var(--accent-l) + 30%);
  --frame-background-s: var(--accent-s, 17%);
  --frame-divider-color: var(--ui1, hsl( 0, 0%, 90% ));
  --frame-icon-color: var(--frame-muted-color, hsl( 201, 7%, 45%));
  --frame-muted-color: hsl( var(--frame-background-h), calc(var(--frame-background-s) - 10%), calc(var(--frame-background-l) - 35%));
  --frame-outline-color: hsla( var(--frame-background-h), var(--frame-background-s), calc(var(--frame-background-l) - 6.5%), 1 );
  --graph-node: var(--text-muted, hsl( 0, -20%, 46% ));
  --graph-node-attachment: var(--color-yellow, #e5b567);
  --graph-node-focused: var(--text-accent, hsl( 201, 17%, 50% ));
  --graph-node-tag: var(--color-green, #a8c373);
  --graph-node-unresolved: var(--text-faint, hsl( 0, -10%, 71% ));
  --graph-text: var(--text-normal, hsl( 0, 0%, 6% ));
  --gray: var(--text-muted, var(--tx2, hsl( 0, -20%, 46% )));
  --h1-size: 1.125em;
  --h1-weight: 600;
  --h1l: var(--ui1, hsl( 0, 0%, 90% ));
  --h2-size: 1.05em;
  --h2-weight: 600;
  --h2l: var(--ui1, hsl( 0, 0%, 90% ));
  --h3-size: 1em;
  --h3-weight: 500;
  --h3l: var(--ui1, hsl( 0, 0%, 90% ));
  --h4-size: 0.90em;
  --h4-weight: 500;
  --h4l: var(--ui1, hsl( 0, 0%, 90% ));
  --h5-size: 0.85em;
  --h5-variant: small-caps;
  --h5-weight: 500;
  --h5l: var(--ui1, hsl( 0, 0%, 90% ));
  --h6-size: 0.85em;
  --h6-variant: small-caps;
  --h6-weight: 400;
  --h6l: var(--ui1, hsl( 0, 0%, 90% ));
  --heading-formatting: var(--text-faint, hsl( 0, -10%, 71% ));
  --hider-ribbon-display: none;
  --highlight: var(--text-highlight-bg, var(--hl2, rgba(255, 225, 0, 0.5)));
  --hl1: hsla( var(--accent-h), 50%, calc(var(--base-l) - 20%), 30% );
  --hl2: rgba(255, 225, 0, 0.5);
  --hr-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --icon-color: var(--tx2, hsl( 0, -20%, 46% ));
  --icon-color-active: var(--tx1, hsl( 0, 0%, 6% ));
  --icon-color-focused: var(--tx1, hsl( 0, 0%, 6% ));
  --icon-color-hover: var(--tx2, hsl( 0, -20%, 46% ));
  --icon-hex: var(--mono0, white);
  --icon-muted: 0.5;
  --iframe-max-width: none;
  --iframe-width: auto;
  --image-grid-background: transparent;
  --image-grid-fit: cover;
  --image-mix: normal;
  --image-muted: 0.7;
  --image-radius: 4px;
  --img-grid-gap: 0.5rem;
  --img-line-width: var(--content-line-width, min(40rem, 88%));
  --img-margin-start: var(--content-margin-start, max( calc(50% - 20rem), 6% ));
  --img-max-width: 100%;
  --img-width: auto;
  --inline-title-margin-bottom: 1rem;
  --inline-title-size: var(--h1-size, 1.125em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, hsl( 0, -10%, 71% ));
  --input-height: 32px;
  --input-placeholder-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --interactive-accent: var(--ax3, hsl( 201, 17%, 56% ));
  --interactive-accent-hover: var(--ax1, hsl( 201, 17%, 50% ));
  --interactive-accent-hsl: var(--color-accent-hsl, 201, 17%, 50%);
  --interactive-accent-rgb: 220,220,220;
  --interactive-hover: var(--ui1, hsl( 0, 0%, 90% ));
  --interactive-normal: var(--bg1, white);
  --leaflet-borders: rgba(0, 0, 0, 0.1);
  --leaflet-buttons: var(--bg1, white);
  --light: var(--background-primary, var(--bg1, white));
  --lightgray: var(--background-secondary, var(--bg2, hsl( 0, 0%, 96% )));
  --line-height: 1.5;
  --line-height-normal: var(--line-height, 1.5);
  --line-number-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --line-number-color-active: var(--text-muted, hsl( 0, -20%, 46% ));
  --line-width: 40rem;
  --line-width-wide: calc(var(--line-width) + 12.5%);
  --link-color: var(--text-accent, hsl( 201, 17%, 50% ));
  --link-color-hover: var(--text-accent-hover, hsl( 201, 17%, 42% ));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl( 201, 17%, 50% ));
  --link-external-color-hover: var(--text-accent-hover, hsl( 201, 17%, 42% ));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, hsl( 201, 17%, 50% ));
  --list-edit-offset: 0.5em;
  --list-marker-color: var(--tx3, hsl( 0, -10%, 71% ));
  --list-marker-color-collapsed: var(--text-accent, hsl( 201, 17%, 50% ));
  --list-marker-color-hover: var(--text-muted, hsl( 0, -20%, 46% ));
  --map-header-padding: 2px;
  --map-max-width: none;
  --map-width: auto;
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: var(--background-secondary, hsl( 0, 0%, 96% ));
  --menu-border-color: var(--background-modifier-border-hover, hsl( 0, 0%, 84% ));
  --metadata-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --metadata-divider-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --metadata-input-background-active: var(--background-modifier-hover, hsla( 0, 0%, 46%, 0.12 ));
  --metadata-input-font-size: var(--font-adaptive-small, 13.91px);
  --metadata-input-text-color: var(--text-normal, hsl( 0, 0%, 6% ));
  --metadata-label-background-active: var(--background-modifier-hover, hsla( 0, 0%, 46%, 0.12 ));
  --metadata-label-font-size: var(--font-adaptive-small, 13.91px);
  --metadata-label-text-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --metadata-label-text-color-hover: var(--text-muted, hsl( 0, -20%, 46% ));
  --metadata-label-width: calc(var(--font-adaptive-small)*var(--metadata-label-width-multiplier));
  --metadata-label-width-multiplier: 9;
  --metadata-property-background-active: var(--background-modifier-hover, hsla( 0, 0%, 46%, 0.12 ));
  --minimal-tab-text-color: var(--tx2, hsl( 0, -20%, 46% ));
  --minimal-tab-text-color-active: var(--tx1, hsl( 0, 0%, 6% ));
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --mobile-sidebar-background: var(--bg1, white);
  --modal-background: var(--background-primary, white);
  --mono0: white;
  --mono100: black;
  --nav-collapse-icon-color: var(--tx2, hsl( 0, -20%, 46% ));
  --nav-collapse-icon-color-collapsed: var(--tx2, hsl( 0, -20%, 46% ));
  --nav-heading-color: var(--text-normal, hsl( 0, 0%, 6% ));
  --nav-heading-color-collapsed: var(--text-faint, hsl( 0, -10%, 71% ));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl( 0, -20%, 46% ));
  --nav-heading-color-hover: var(--text-normal, hsl( 0, 0%, 6% ));
  --nav-indentation-guide-color: var(--ui1, hsl( 0, 0%, 90% ));
  --nav-item-background-active: var(--bg3, hsla( 0, 0%, 46%, 0.12 ));
  --nav-item-background-hover: var(--bg3, hsla( 0, 0%, 46%, 0.12 ));
  --nav-item-color: var(--tx2, hsl( 0, -20%, 46% ));
  --nav-item-color-active: var(--tx1, hsl( 0, 0%, 6% ));
  --nav-item-color-highlighted: var(--text-accent, hsl( 201, 17%, 50% ));
  --nav-item-color-hover: var(--tx1, hsl( 0, 0%, 6% ));
  --nav-item-color-selected: var(--tx1, hsl( 0, 0%, 6% ));
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --nav-tag-color-active: var(--text-muted, hsl( 0, -20%, 46% ));
  --nav-tag-color-hover: var(--text-muted, hsl( 0, -20%, 46% ));
  --nested-padding: 1.1em;
  --normal-weight: 400;
  --p-spacing: 1.75rem;
  --pdf-background: var(--background-primary, white);
  --pdf-dark-opacity: 1;
  --pdf-page-background: var(--background-primary, white);
  --pdf-shadow: none;
  --pdf-sidebar-background: var(--background-primary, white);
  --pdf-thumbnail-shadow: none;
  --pill-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl( 0, 0%, 84% ));
  --pill-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --pill-color-hover: var(--text-normal, hsl( 0, 0%, 6% ));
  --pill-color-remove: var(--text-faint, hsl( 0, -10%, 71% ));
  --pill-color-remove-hover: var(--text-accent, hsl( 201, 17%, 50% ));
  --progress-complete: var(--text-accent, hsl( 201, 17%, 50% ));
  --progress-outline: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --prompt-background: var(--background-primary, white);
  --prompt-border-color: var(--ui3, hsl( 0, 0%, 76% ));
  --quote-opening-modifier: var(--ui2, hsl( 0, 0%, 84% ));
  --raised-background: var(--blur-background, color-mix(in srgb, white 65%, transparent) linear-gradient(white, color-mix(in srgb, white 65%, transparent)));
  --ribbon-animation-duration: 0.1s;
  --ribbon-background: var(--bg2, hsl( 0, 0%, 96% ));
  --ribbon-background-collapsed: var(--background-primary, white);
  --scrollbar-active-thumb-bg: var(--ui3, hsl( 0, 0%, 76% ));
  --scrollbar-thumb-bg: var(--ui1, hsl( 0, 0%, 90% ));
  --search-clear-button-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --search-icon-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --search-result-background: var(--bg1, white);
  --secondary: var(--text-accent, var(--ax1, hsl( 201, 17%, 50% )));
  --setting-group-heading-color: var(--text-normal, hsl( 0, 0%, 6% ));
  --setting-items-background: var(--background-primary-alt, hsl( 0, 0%, 96% ));
  --setting-items-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --shadow-color: rgba(0, 0, 0, 0.1);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl( 0, -20%, 46% ));
  --shiki-code-background: var(--code-background, hsl( 0, 0%, 96% ));
  --shiki-code-block-spacing: var(--p-spacing, 1.75rem);
  --shiki-code-comment: var(--text-faint, hsl( 0, -10%, 71% ));
  --shiki-code-function: var(--color-green, #a8c373);
  --shiki-code-important: var(--color-orange, #d5763f);
  --shiki-code-keyword: var(--color-pink, #b05279);
  --shiki-code-normal: var(--text-muted, hsl( 0, -20%, 46% ));
  --shiki-code-property: var(--color-cyan, #73bbb2);
  --shiki-code-punctuation: var(--text-muted, hsl( 0, -20%, 46% ));
  --shiki-code-string: var(--color-yellow, #e5b567);
  --shiki-code-value: var(--color-purple, #9e86c8);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --shiki-gutter-text-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl( 0, -20%, 46% ));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl( 0, -20%, 46% ));
  --shiki-terminal-dots-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl( 0, 0%, 84% ));
  --slider-track-background: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --sp1: white;
  --status-bar-background: var(--background-secondary, hsl( 0, 0%, 96% ));
  --status-bar-border-color: var(--divider-color, hsl( 0, 0%, 90% ));
  --status-bar-font-size: var(--font-ui-smaller, 11px);
  --status-bar-text-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --suggestion-background: var(--background-primary, white);
  --sync-avatar-color-1: var(--color-red, #d04255);
  --sync-avatar-color-2: var(--color-orange, #d5763f);
  --sync-avatar-color-3: var(--color-yellow, #e5b567);
  --sync-avatar-color-4: var(--color-green, #a8c373);
  --sync-avatar-color-5: var(--color-cyan, #73bbb2);
  --sync-avatar-color-6: var(--color-blue, #6c99bb);
  --sync-avatar-color-7: var(--color-purple, #9e86c8);
  --sync-avatar-color-8: var(--color-pink, #b05279);
  --tab-background-active: var(--background-primary, white);
  --tab-container-background: var(--background-secondary, hsl( 0, 0%, 96% ));
  --tab-divider-color: var(--background-modifier-border-hover, hsl( 0, 0%, 84% ));
  --tab-outline-color: var(--ui1, hsl( 0, 0%, 90% ));
  --tab-switcher-background: var(--background-secondary, hsl( 0, 0%, 96% ));
  --tab-text-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --tab-text-color-active: var(--text-muted, hsl( 0, -20%, 46% ));
  --tab-text-color-focused: var(--text-muted, hsl( 0, -20%, 46% ));
  --tab-text-color-focused-active: var(--tx1, hsl( 0, 0%, 6% ));
  --tab-text-color-focused-active-current: var(--text-normal, hsl( 0, 0%, 6% ));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl( 201, 17%, 50% ));
  --table-add-button-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --table-add-button-border-width: var(--table-border-width, 0px);
  --table-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --table-border-width: var(--border-width, 1px);
  --table-cell-padding: 4px 10px;
  --table-column-first-border-width: var(--table-border-width, 0);
  --table-column-last-border-width: var(--table-border-width, 0);
  --table-drag-handle-background-active: var(--text-selection, hsla( 201, 50%, 76%, 30% ));
  --table-drag-handle-color: var(--text-faint, hsl( 0, -10%, 71% ));
  --table-drag-handle-color-active: var(--text-accent, hsl( 201, 17%, 50% ));
  --table-drag-padding: var(--table-drag-space, 16px);
  --table-drag-space: 16px;
  --table-edge-cell-padding-first: 0;
  --table-edge-cell-padding-last: 0;
  --table-header-border-color: var(--table-border-color, hsl( 0, 0%, 90% ));
  --table-header-border-width: var(--table-border-width, 0);
  --table-header-color: var(--text-normal, hsl( 0, 0%, 6% ));
  --table-header-size: var(--table-text-size, 14px);
  --table-max-width: none;
  --table-row-last-border-width: var(--table-border-width, 0);
  --table-selection: var(--text-selection, hsla( 201, 50%, 76%, 30% ));
  --table-selection-border-color: var(--text-accent, hsl( 201, 17%, 50% ));
  --table-selection-border-radius: 0px;
  --table-selection-border-width: 0px;
  --table-text-size: calc(var(--font-adaptive-normal)*0.875);
  --table-white-space: normal;
  --table-width: auto;
  --table-wrapper-width: fit-content;
  --tag-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --tag-border-color-hover: var(--background-modifier-border-hover, hsl( 0, 0%, 84% ));
  --tag-border-width: 1px;
  --tag-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --tag-color-hover: var(--text-normal, hsl( 0, 0%, 6% ));
  --tag-padding-y: 0.2em;
  --tag-size: var(--font-smaller, 0.8em);
  --tertiary: var(--text-accent-hover, var(--ax2, hsl( 201, 17%, 42% )));
  --text-accent: var(--ax1, hsl( 201, 17%, 50% ));
  --text-accent-hover: var(--ax2, hsl( 201, 17%, 42% ));
  --text-blockquote: var(--tx2, hsl( 0, -20%, 46% ));
  --text-bold: var(--tx1, hsl( 0, 0%, 6% ));
  --text-code: var(--tx4, hsl( 0, -10%, 36% ));
  --text-error: var(--color-red, #d04255);
  --text-faint: var(--tx3, hsl( 0, -10%, 71% ));
  --text-formatting: var(--tx3, hsl( 0, -10%, 71% ));
  --text-highlight-bg: var(--hl2, rgba(255, 225, 0, 0.5));
  --text-highlight-bg-active: rgba(0, 0, 0, 0.1);
  --text-italic: var(--tx1, hsl( 0, 0%, 6% ));
  --text-muted: var(--tx2, hsl( 0, -20%, 46% ));
  --text-normal: var(--tx1, hsl( 0, 0%, 6% ));
  --text-on-accent: var(--sp1, white);
  --text-selection: var(--hl1, hsla( 201, 50%, 76%, 30% ));
  --text-success: var(--color-green, #a8c373);
  --text-warning: var(--color-orange, #d5763f);
  --textHighlight: var(--text-highlight-bg, var(--hl2, rgba(255, 225, 0, 0.5)));
  --title-color: var(--tx1, hsl( 0, 0%, 6% ));
  --title-color-inactive: var(--tx2, hsl( 0, -20%, 46% ));
  --titlebar-background: var(--bg1, white);
  --titlebar-background-focused: var(--background-secondary, hsl( 0, 0%, 96% ));
  --titlebar-border-color: var(--background-modifier-border, hsl( 0, 0%, 90% ));
  --titlebar-text-color: var(--text-muted, hsl( 0, -20%, 46% ));
  --titlebar-text-color-focused: var(--tx1, hsl( 0, 0%, 6% ));
  --top-left-padding-y: 0px;
  --tx1: hsl( var(--base-h), var(--base-s), calc(var(--base-l) - 90%) );
  --tx2: hsl( var(--base-h), calc(var(--base-s) - 20%), calc(var(--base-l) - 50%) );
  --tx3: hsl( var(--base-h), calc(var(--base-s) - 10%), calc(var(--base-l) - 25%) );
  --tx4: hsl( var(--base-h), calc(var(--base-s) - 10%), calc(var(--base-l) - 60%) );
  --ui1: hsl( var(--base-h), var(--base-s), calc(var(--base-l) - 6%) );
  --ui2: hsl( var(--base-h), var(--base-s), calc(var(--base-l) - 12%) );
  --ui3: hsl( var(--base-h), var(--base-s), calc(var(--base-l) - 20%) );
  --vault-profile-color: var(--tx1, hsl( 0, 0%, 6% ));
  --vault-profile-color-hover: var(--tx1, hsl( 0, 0%, 6% ));
  --workspace-background-translucent: hsla(var(--base-h),var(--base-s), var(--base-l), 0.7);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(245, 245, 245));
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(245, 245, 245));
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(245, 245, 245));
  border-left-color: rgb(230, 230, 230);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body html {
  --focus-animation-duration: 0.1s;
  --hider-ribbon-display: none;
  --image-mix: normal;
  --ribbon-animation-duration: 0.1s;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(15, 15, 15));
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(15, 15, 15));
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(15, 15, 15));
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(15, 15, 15));
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 225, 0, 0.5));
  color: var(--text-normal, rgb(15, 15, 15));
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body del {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(15, 15, 15));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(181, 181, 181);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(124, 149, 162));
  border-color: rgb(124, 149, 162);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(117, 117, 117));
  outline: rgb(117, 117, 117) none 0px;
  text-decoration-color: rgb(117, 117, 117);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(106, 134, 149));
  outline: rgb(106, 134, 149) none 0px;
  text-decoration-color: rgb(106, 134, 149);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(106, 134, 149));
  outline: rgb(106, 134, 149) none 0px;
  text-decoration-color: rgb(106, 134, 149);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(106, 134, 149));
  outline: rgb(106, 134, 149) none 0px;
  text-decoration: rgba(106, 134, 149, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(106, 134, 149, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body dt {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ol > li {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ul > li {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, rgb(181, 181, 181));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
  margin-top: var(--heading-spacing, 8px);
  width: var(--table-width, 187.438px);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--table-text-color, rgb(15, 15, 15));
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: var(--table-column-first-border-width, 0px);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-width: var(--table-header-border-width, 0px);
  color: var(--table-header-color, rgb(15, 15, 15));
  padding-left: 0px;
  padding-right: 10px;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgb(245, 245, 245));
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--code-normal, rgb(15, 15, 15));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(245, 245, 245));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body figcaption {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(15, 15, 15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(15, 15, 15);
  border-radius: 4px;
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(15, 15, 15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(15, 15, 15);
  border-radius: 4px;
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(245, 245, 245));
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(124, 149, 162);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(181, 181, 181);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(181, 181, 181);
  border-right-color: rgb(181, 181, 181);
  border-top-color: rgb(181, 181, 181);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(15, 15, 15);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(15, 15, 15);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(181, 181, 181);
  text-decoration: line-through 1px rgb(181, 181, 181);
  text-decoration-color: rgb(181, 181, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(15, 15, 15);
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(181, 181, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  color: rgb(213, 118, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 118, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 181, 103);
  color: rgb(229, 181, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(124, 149, 162);
  content: " ";
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(115, 187, 178);
  color: rgb(181, 181, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 153, 187);
  color: rgb(181, 181, 181);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
  color: rgb(213, 118, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
  color: rgb(213, 118, 63);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
  color: rgb(208, 66, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
  color: rgb(208, 66, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 181, 103);
  color: rgb(229, 181, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(229, 181, 103);
  color: rgb(229, 181, 103);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(158, 134, 200);
  color: rgb(208, 66, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 66, 85);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath d='M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 195, 115);
  color: rgb(168, 195, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 195, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 195, 115);
  color: rgb(168, 195, 115);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(158, 134, 200);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 115,187,178);
  background: rgba(115, 187, 178, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 208,66,85);
  background: rgba(208, 66, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 208,66,85);
  background: rgba(208, 66, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 158,134,200);
  background: rgba(158, 134, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(158, 134, 200, 0.25);
  border-left-color: rgba(158, 134, 200, 0.25);
  border-right-color: rgba(158, 134, 200, 0.25);
  border-top-color: rgba(158, 134, 200, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 208,66,85);
  background: rgba(208, 66, 85, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(208, 66, 85, 0.25);
  border-left-color: rgba(208, 66, 85, 0.25);
  border-right-color: rgba(208, 66, 85, 0.25);
  border-top-color: rgba(208, 66, 85, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 108,153,187);
  background: rgba(108, 153, 187, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 108,153,187);
  background: rgba(108, 153, 187, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 213,118,63);
  background: rgba(213, 118, 63, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 168,195,115);
  background: rgba(168, 195, 115, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(168, 195, 115, 0.25);
  border-left-color: rgba(168, 195, 115, 0.25);
  border-right-color: rgba(168, 195, 115, 0.25);
  border-top-color: rgba(168, 195, 115, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 115,187,178);
  background: rgba(115, 187, 178, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(115, 187, 178, 0.25);
  border-left-color: rgba(115, 187, 178, 0.25);
  border-right-color: rgba(115, 187, 178, 0.25);
  border-top-color: rgba(115, 187, 178, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 108,153,187);
  background: rgba(108, 153, 187, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 213,118,63);
  background: rgba(213, 118, 63, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(213, 118, 63, 0.25);
  border-left-color: rgba(213, 118, 63, 0.25);
  border-right-color: rgba(213, 118, 63, 0.25);
  border-top-color: rgba(213, 118, 63, 0.25);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 108,153,187;
  border-bottom-color: rgb(108, 153, 187);
  border-left-color: rgb(108, 153, 187);
  border-right-color: rgb(108, 153, 187);
  border-top-color: rgb(108, 153, 187);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(108, 153, 187));
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(15, 15, 15);
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
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--text-normal, rgb(15, 15, 15));
  font-family: var(--font-interface, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(15, 15, 15);
  outline: rgb(15, 15, 15) none 0px;
  text-decoration-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(117, 117, 117, 0.12));
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0.05);
  border-left-color: rgba(0, 0, 0, 0.05);
  border-right-color: rgba(0, 0, 0, 0.05);
  border-top-color: rgba(0, 0, 0, 0.05);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(117, 117, 117, 0.12));
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(117, 117, 117, 0.12));
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 27.82px;
  border-bottom-right-radius: 27.82px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 27.82px;
  border-top-right-radius: 27.82px;
  border-top-width: 1px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(15, 15, 15));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(15, 15, 15));
  font-size: var(--inline-title-size, 18px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(15, 15, 15));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(15, 15, 15));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(15, 15, 15));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(15, 15, 15));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(15, 15, 15));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(15, 15, 15));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 108,153,187);
  border-bottom-color: rgba(108, 153, 187, 0.25);
  border-left-color: rgba(108, 153, 187, 0.25);
  border-right-color: rgba(108, 153, 187, 0.25);
  border-top-color: rgba(108, 153, 187, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(117, 117, 117));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(117, 117, 117));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(15, 15, 15);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: var(--icon-color, rgb(117, 117, 117));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--background-primary, rgb(255, 255, 255));
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-left-width: 0px;
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  border-top-width: 0px;
  color: var(--text-faint, rgb(181, 181, 181));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(181, 181, 181);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(117, 117, 117));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 117, 117);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(117, 117, 117));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: var(--icon-color, rgb(117, 117, 117));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(117, 117, 117);
  stroke: rgb(117, 117, 117);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(181, 181, 181));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(15, 15, 15));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(15, 15, 15);
}`,
    bases: `html[saved-theme="light"] body .bases-table {
  border-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 230, 230);
  color: var(--table-header-color, rgb(15, 15, 15));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: var(--text-muted, rgb(117, 117, 117));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(117, 117, 117);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(0, 0, 0, 0));
  border-radius: 27.82px;
  color: var(--pill-color, rgb(117, 117, 117));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(117, 117, 117);
}

html[saved-theme="light"] body div#quartz-root {
  color: var(--text-normal, rgb(15, 15, 15));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(245, 245, 245));
  border-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(245, 245, 245));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(15, 15, 15);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--background-primary, rgb(255, 255, 255));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(15, 15, 15));
}

html[saved-theme="light"] body abbr {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(117, 117, 117);
  border-left-color: rgb(117, 117, 117);
  border-right-color: rgb(117, 117, 117);
  border-top-color: rgb(117, 117, 117);
  color: var(--text-normal, rgb(117, 117, 117));
  font-family: var(--font-interface, "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgb(245, 245, 245));
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
  color: var(--code-normal, rgb(15, 15, 15));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(15, 15, 15);
  border-left-color: rgb(15, 15, 15);
  border-right-color: rgb(15, 15, 15);
  border-top-color: rgb(15, 15, 15);
}

html[saved-theme="light"] body sub {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body summary {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body sup {
  color: rgb(15, 15, 15);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgb(230, 230, 230);
  border-bottom-left-radius: 22.4px;
  border-bottom-right-radius: 22.4px;
  border-bottom-width: 1px;
  border-left-color: rgb(230, 230, 230);
  border-left-width: 1px;
  border-right-color: rgb(230, 230, 230);
  border-right-width: 1px;
  border-top-color: rgb(230, 230, 230);
  border-top-left-radius: 22.4px;
  border-top-right-radius: 22.4px;
  border-top-width: 1px;
  color: var(--tag-color, rgb(117, 117, 117));
}`,
  },
  classSettings: {
    "callouts-outlined": {
      general: `.callouts-outlined .callout .callout-title {
background-color:var(--background-primary);
margin-top:-24px;
z-index:200;
width:fit-content;
padding:0 .5em;
margin-left:-.75em;
letter-spacing:.05em;
font-variant-caps:all-small-caps;
}

.callouts-outlined .callout {
overflow:visible;
--callout-border-width:1px;
--callout-border-opacity:0.5;
--callout-title-size:0.8em;
--callout-blend-mode:normal;
background-color:rgba(0,0,0,0);
}

.callouts-outlined .cm-embed-block.cm-callout {
padding-top:12px;
}

.callouts-outlined .callout-content .callout {
margin-top:18px;
}`,
    },
    "minimal-code-scroll": {
      general: `.minimal-code-scroll {
--code-white-space:pre;
}

.minimal-code-scroll .HyperMD-codeblock.HyperMD-codeblock-bg {
overflow-y:scroll;
white-space:pre;
}

.minimal-code-scroll .cm-hmd-codeblock {
white-space:pre!important;
}`,
    },
    "trim-cols": {
      general: `.trim-cols .cards table.dataview tbody>tr>td {
white-space:normal;
}

.trim-cols {
--table-white-space:normal;
}

.trim-cols .markdown-preview-view .table-view-table>tbody>tr>td, .trim-cols .markdown-source-view.mod-cm6 .table-view-table>tbody>tr>td, .trim-cols .markdown-source-view.mod-cm6 .table-view-table>thead>tr>th {
white-space:nowrap;
text-overflow:ellipsis;
overflow:hidden;
}`,
    },
    "dataview-inline-lists": {
      general: `.dataview-inline-lists .markdown-preview-view .dataview-ul, .dataview-inline-lists .markdown-source-view .dataview-ul {
--list-spacing:0;
}

.dataview-inline-lists .markdown-preview-view .dataview-ol li:not(:last-child):after, .dataview-inline-lists .markdown-preview-view .dataview-ul li:not(:last-child):after, .dataview-inline-lists .markdown-source-view .dataview-ol li:not(:last-child):after, .dataview-inline-lists .markdown-source-view .dataview-ul li:not(:last-child):after {
content:", ";
}

.dataview-inline-lists .markdown-preview-view ul.dataview-ol>li::before, .dataview-inline-lists .markdown-preview-view ul.dataview-ul>li::before, .dataview-inline-lists .markdown-source-view ul.dataview-ol>li::before, .dataview-inline-lists .markdown-source-view ul.dataview-ul>li::before {
display:none;
}

.dataview-inline-lists .markdown-preview-view .dataview-ol li, .dataview-inline-lists .markdown-preview-view .dataview-ul li, .dataview-inline-lists .markdown-source-view .dataview-ol li, .dataview-inline-lists .markdown-source-view .dataview-ul li {
display:inline-block;
padding-inline-end:.25em;
margin-inline-start:0;
}`,
    },
    "embed-strict": {
      general: `.embed-strict {
--embed-background:transparent;
--embed-border-start:0;
--embed-border-left:0;
--embed-padding:0;
}

.embed-strict .markdown-embed-content {
--folding-offset:0px;
}

.embed-strict .internal-embed .markdown-embed, .embed-strict .markdown-preview-view .markdown-embed, .markdown-preview-view .markdown-embed {
padding:0;
}

.embed-strict .internal-embed .markdown-embed .markdown-embed-title, .embed-strict .markdown-embed-title {
display:none;
}

.embed-strict .internal-embed:not([src*="#^"]) .markdown-embed-link {
width:24px;
opacity:0;
}

.contextual-typography .embed-strict .internal-embed .markdown-preview-view .markdown-preview-sizer>div, .contextual-typography .internal-embed .markdown-preview-view .markdown-preview-sizer>div {
margin:0;
width:100%;
}`,
    },
    "embed-hide-title": {
      general: `.embed-hide-title .markdown-embed-title {
display:none;
}`,
    },
    "embed-underline": {
      general: `.embed-underline .internal-embed:not(.pdf-embed,.bases-embed) {
text-decoration-line:underline;
text-decoration-style:var(--embed-decoration-style);
text-decoration-color:var(--embed-decoration-color);
}`,
    },
    "h1-l": {
      general: `.h1-l .markdown-reading-view h1:not(.embedded-note-title), .h1-l .mod-cm6 .cm-editor .HyperMD-header-1 {
border-bottom:1px solid var(--h1l);
padding-bottom:.4em;
margin-block-end:.6em;
}`,
    },
    "h2-l": {
      general: `.h2-l .markdown-reading-view h2, .h2-l .mod-cm6 .cm-editor .HyperMD-header-2 {
border-bottom:1px solid var(--h2l);
padding-bottom:.4em;
margin-block-end:.6em;
}`,
    },
    "h3-l": {
      general: `.h3-l .markdown-reading-view h3, .h3-l .mod-cm6 .cm-editor .HyperMD-header-3 {
border-bottom:1px solid var(--h3l);
padding-bottom:.4em;
margin-block-end:.6em;
}`,
    },
    "h4-l": {
      general: `.h4-l .markdown-reading-view h4, .h4-l .mod-cm6 .cm-editor .HyperMD-header-4 {
border-bottom:1px solid var(--h4l);
padding-bottom:.4em;
margin-block-end:.6em;
}`,
    },
    "h5-l": {
      general: `.h5-l .markdown-reading-view h5, .h5-l .mod-cm6 .cm-editor .HyperMD-header-5 {
border-bottom:1px solid var(--h5l);
padding-bottom:.4em;
margin-block-end:.6em;
}`,
    },
    "h6-l": {
      general: `.h6-l .markdown-reading-view h6, .h6-l .mod-cm6 .cm-editor .HyperMD-header-6 {
border-bottom:1px solid var(--h6l);
padding-bottom:.4em;
margin-block-end:.6em;
}`,
    },
    "image-blend-light": {
      general: `.image-blend-light {
--image-mix:multiply;
}`,
    },
    "active-line-on": {
      general: `.active-line-on .workspace-leaf-content[data-type=markdown] .cm-line.cm-active, .active-line-on .workspace-leaf-content[data-type=markdown] .markdown-source-view.mod-cm6.is-live-preview .HyperMD-quote.cm-active {
background-color:var(--active-line-bg);
box-shadow:-25vw 0 var(--active-line-bg),25vw 0 var(--active-line-bg);
}`,
    },
    "checkbox-square": {
      general: `.checkbox-square {
--checkbox-size:calc(var(--font-text-size) * 0.85);
--checkbox-radius:4px;
--checkbox-top:1px;
--checkbox-left:0px;
--checkbox-margin:0px 8px 0px -2em;
}`,
    },
    "minimal-strike-lists": {
      general: `body.minimal-strike-lists {
--checklist-done-decoration:line-through;
}`,
    },
    "pdf-invert-dark": {
      dark: `.pdf-invert-dark .workspace-leaf-content[data-type=pdf] .pdf-viewer .canvasWrapper, .pdf-invert-dark .workspace-leaf-content[data-type=pdf] .pdfViewer .canvasWrapper {
filter:invert(1) hue-rotate(180deg);
mix-blend-mode:screen;
}`,
    },
    "pdf-blend-light": {
      light: `.pdf-blend-light .workspace-leaf-content[data-type=pdf] .pdf-viewer .canvasWrapper, .pdf-blend-light .workspace-leaf-content[data-type=pdf] .pdfViewer .canvasWrapper {
mix-blend-mode:multiply;
}`,
    },
    "metadata-heading-off": {
      general: `body.metadata-heading-off .metadata-properties-heading {
display:none;
}`,
    },
    "metadata-add-property-off": {
      general: `.metadata-add-property-off .mod-root .metadata-add-button {
display:none;
}`,
    },
    "metadata-icons-off": {
      general: `.metadata-icons-off .workspace-leaf-content[data-type=all-properties] .tree-item-inner {
margin-inline-start:-16px;
}

.metadata-icons-off .workspace-leaf-content[data-type=all-properties] .tree-item-icon {
display:none;
}

.metadata-icons-off .metadata-property-icon {
display:none;
}`,
    },
    "metadata-dividers": {
      general: `.metadata-dividers {
--metadata-divider-width:1px;
--metadata-gap:0px;
}`,
    },
    "sidebar-tabs-index": {
      general: `.labeled-nav .mod-left-split .workspace-tabs:not(.mod-top), .sidebar-tabs-index:not(.labeled-nav) .mod-left-split {
--tab-background-active:var(--background-secondary);
}

.sidebar-tabs-index .mod-right-split .workspace-tab-header-container-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container-inner, .sidebar-tabs-index:not(.labeled-nav) .mod-left-split .workspace-tab-header-container-inner {
padding:1px var(--size-4-2) 0;
margin:6px 0 calc(var(--tab-outline-width)*-1);
flex-grow:1;
}

.sidebar-tabs-index .mod-right-split .workspace-tab-header, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header, .sidebar-tabs-index:not(.labeled-nav) .mod-left-split .workspace-tab-header {
flex-grow:1;
max-width:100px;
border-radius:var(--tab-radius) var(--tab-radius) 0 0;
}

.sidebar-tabs-index .mod-right-split .workspace-tab-header.is-active, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header.is-active, .sidebar-tabs-index:not(.labeled-nav) .mod-left-split .workspace-tab-header.is-active {
box-shadow:0 0 0 var(--tab-outline-width) var(--tab-outline-color);
color:var(--tab-text-color-active);
background-color:var(--tab-background-active);
}`,
    },
    "sidebar-tabs-square": {
      general: `.sidebar-tabs-square .mod-left-split, .sidebar-tabs-square .mod-right-split {
--tab-radius:0px;
}

.labeled-nav .mod-left-split .workspace-tabs:not(.mod-top), .sidebar-tabs-square:not(.labeled-nav) .mod-left-split {
--tab-background-active:var(--background-secondary);
}

.sidebar-tabs-square .mod-right-split .workspace-tab-header-container-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container-inner, .sidebar-tabs-square:not(.labeled-nav) .mod-left-split .workspace-tab-header-container-inner {
padding:1px var(--size-4-2) 0;
margin:6px 0 calc(var(--tab-outline-width)*-1);
flex-grow:1;
}

.sidebar-tabs-square .mod-right-split .workspace-tab-header, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header, .sidebar-tabs-square:not(.labeled-nav) .mod-left-split .workspace-tab-header {
flex-grow:1;
max-width:100px;
border-radius:var(--tab-radius) var(--tab-radius) 0 0;
}

.sidebar-tabs-square .mod-right-split .workspace-tab-header.is-active, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header.is-active, .sidebar-tabs-square:not(.labeled-nav) .mod-left-split .workspace-tab-header.is-active {
box-shadow:0 0 0 var(--tab-outline-width) var(--tab-outline-color);
color:var(--tab-text-color-active);
background-color:var(--tab-background-active);
}`,
    },
    "sidebar-tabs-default": {
      general: `.tabs-modern.sidebar-tabs-default .mod-right-split {
--tab-outline-width:0;
}`,
    },
    "sidebar-tabs-wide": {
      general: `.tabs-modern.sidebar-tabs-wide .mod-right-split {
--tab-outline-width:0;
}

.sidebar-tabs-wide .mod-right-split .workspace-tab-header-container-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container-inner, .sidebar-tabs-wide:not(.labeled-nav) .mod-left-split .workspace-tab-header-container-inner {
flex-grow:1;
border:1px solid var(--tab-outline-color);
padding:3px;
margin:6px 8px 6px;
border-radius:4px;
}

.sidebar-tabs-wide .mod-right-split .workspace-tab-header, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header, .sidebar-tabs-wide:not(.labeled-nav) .mod-left-split .workspace-tab-header {
flex-grow:1;
}

.sidebar-tabs-wide .mod-right-split .workspace-tab-header.is-active, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header.is-active, .sidebar-tabs-wide:not(.labeled-nav) .mod-left-split .workspace-tab-header.is-active {
border-color:transparent;
}

.sidebar-tabs-wide .mod-right-split .workspace-tab-header-container, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, .sidebar-tabs-wide:not(.labeled-nav) .mod-left-split .workspace-tab-header-container {
padding-right:0;
}

.sidebar-tabs-wide .mod-right-split .workspace-tab-header-spacer, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-spacer, .sidebar-tabs-wide:not(.labeled-nav) .mod-left-split .workspace-tab-header-spacer {
display:none;
}`,
    },
    "sidebar-tabs-plain-square": {
      general: `.sidebar-tabs-plain-square .mod-left-split, .sidebar-tabs-plain-square .mod-right-split {
--tab-radius:0px;
}

.labeled-nav .mod-left-split .workspace-tabs:not(.mod-top), .sidebar-tabs-plain-square:not(.labeled-nav) .mod-left-split {
--tab-background-active:var(--background-secondary);
}

.sidebar-tabs-plain-square .mod-right-split .workspace-tab-header-container, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, .sidebar-tabs-plain-square:not(.labeled-nav) .mod-left-split .workspace-tab-header-container {
padding-left:0;
}

.sidebar-tabs-plain-square .mod-right-split .workspace-tab-header-container-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container-inner, .sidebar-tabs-plain-square:not(.labeled-nav) .mod-left-split .workspace-tab-header-container-inner {
padding:0;
margin:0 0 calc(var(--tab-outline-width)*-1);
flex-grow:1;
gap:0;
}

.sidebar-tabs-plain-square .mod-right-split .workspace-tab-header, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header, .sidebar-tabs-plain-square:not(.labeled-nav) .mod-left-split .workspace-tab-header {
flex-grow:1;
max-width:100px;
border-radius:var(--tab-radius) var(--tab-radius) 0 0;
}

.sidebar-tabs-plain-square .mod-right-split .workspace-tab-header.is-active, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header.is-active, .sidebar-tabs-plain-square:not(.labeled-nav) .mod-left-split .workspace-tab-header.is-active {
box-shadow:0 0 0 var(--tab-outline-width) var(--tab-outline-color);
color:var(--tab-text-color-active);
background-color:var(--tab-background-active);
}`,
    },
    "sidebar-tabs-underline": {
      general: `.sidebar-tabs-underline .mod-right-split .workspace-tab-header-spacer, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-spacer, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-spacer {
display:none;
}

.sidebar-tabs-underline .mod-right-split .workspace-tab-header-container, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container {
padding-right:0;
}

.sidebar-tabs-underline .mod-right-split .workspace-tab-header-container-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container-inner, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container-inner {
padding:0;
margin:0;
flex-grow:1;
gap:0;
}

.sidebar-tabs-underline .mod-right-split .workspace-tab-header-container .workspace-tab-header, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container .workspace-tab-header {
flex-grow:1;
border-radius:0;
max-width:100px;
}

.sidebar-tabs-underline .mod-right-split .workspace-tab-header-container .workspace-tab-header.is-active, .sidebar-tabs-underline .mod-right-split .workspace-tab-header-container .workspace-tab-header:hover, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header.is-active, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header:hover, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container .workspace-tab-header.is-active, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container .workspace-tab-header:hover {
background-color:rgba(0,0,0,0);
}

.sidebar-tabs-underline .mod-right-split .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner, .sidebar-tabs-underline .mod-right-split .workspace-tab-header-container .workspace-tab-header:hover .workspace-tab-header-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header:hover .workspace-tab-header-inner, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container .workspace-tab-header:hover .workspace-tab-header-inner {
background-color:rgba(0,0,0,0);
}

.sidebar-tabs-underline .mod-right-split .workspace-tab-header-container .workspace-tab-header .workspace-tab-header-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header .workspace-tab-header-inner, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container .workspace-tab-header .workspace-tab-header-inner {
border-bottom:2px solid transparent;
border-radius:0;
}

.sidebar-tabs-underline .mod-right-split .workspace-tab-header-container .workspace-tab-header .workspace-tab-header-inner:hover, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header .workspace-tab-header-inner:hover, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container .workspace-tab-header .workspace-tab-header-inner:hover {
border-color:var(--ui2);
}

.sidebar-tabs-underline .mod-right-split .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner, .labeled-nav .mod-left-split .workspace-tabs:not(.mod-top) .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner, .sidebar-tabs-underline:not(.labeled-nav) .mod-left-split .workspace-tab-header-container .workspace-tab-header.is-active .workspace-tab-header-inner {
border-color:var(--ax3);
padding-top:1px;
}`,
    },
    "tab-names-on": {
      general: `.tab-names-on .workspace-split:not(.mod-root) .workspace-tab-header-container-inner {
--sidebar-tab-text-display:static;
}

.tab-names-on .workspace-split:not(.mod-root) .workspace-tab-header-container-inner .workspace-tab-header-inner-title {
font-weight:500;
}

.tab-names-on .workspace-split:not(.mod-root) .workspace-tab-header-container-inner .workspace-tab-header-inner {
gap:var(--size-2-3);
}`,
    },
    "tab-names-single": {
      general: `.tab-names-single .workspace>.workspace-split:not(.mod-root) .workspace-tab-header-container-inner .workspace-tab-header:only-child {
--sidebar-tab-text-display:static;
background-color:rgba(0,0,0,0);
}

.tab-names-single .workspace>.workspace-split:not(.mod-root) .workspace-tab-header-container-inner .workspace-tab-header:only-child .workspace-tab-header-inner-title {
font-weight:500;
}

.tab-names-single .workspace>.workspace-split:not(.mod-root) .workspace-tab-header-container-inner .workspace-tab-header:only-child .workspace-tab-header-inner {
gap:var(--size-2-3);
}`,
    },
    "vault-profile-top": {
      general: `body:not(.is-grabbing):not(.is-fullscreen).labeled-nav.is-hidden-frameless.vault-profile-top .mod-left-split .mod-top .workspace-tab-header-container {
-webkit-app-region:no-drag;
}

body:not(.is-grabbing):not(.is-fullscreen).labeled-nav.is-hidden-frameless.vault-profile-top .mod-left-split .mod-top .workspace-tab-header-container:before {
position:absolute;
top:0;
content:"";
height:var(--header-height);
width:100%;
-webkit-app-region:drag;
}

body:not(.is-mobile):not(.labeled-nav).vault-profile-top .workspace-split.mod-left-split .mod-top .workspace-tab-container {
margin-top:calc(var(--header-height) + 8px);
}

body:not(.is-mobile):not(.labeled-nav).vault-profile-top .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
-webkit-app-region:no-drag;
position:absolute;
top:var(--header-height);
z-index:6;
width:100%;
border-top:0;
border-bottom:1px solid var(--background-modifier-border);
}

body:not(.is-mobile):not(.labeled-nav).vault-profile-top .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-switcher {
padding-left:var(--size-4-2);
}

body:not(.is-mobile).labeled-nav.vault-profile-top .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
-webkit-app-region:no-drag;
position:absolute;
top:var(--labeled-nav-top-margin);
z-index:6;
width:100%;
background-color:rgba(0,0,0,0);
border-top:0;
border-bottom:1px solid var(--background-modifier-border);
}

body:not(.is-mobile).labeled-nav.vault-profile-top .workspace-split.mod-left-split .workspace-sidedock-vault-profile .workspace-drawer-vault-switcher {
padding-left:var(--size-4-2);
}

.vault-profile-top .workspace-tab-header-container-inner {
--labeled-nav-top-margin:84px;
}`,
    },
    "hide-help": {
      general: `body:not(.is-mobile).hide-help .workspace-drawer-vault-actions .clickable-icon:first-child {
display:none;
}

body:not(.is-mobile).hide-settings .workspace-drawer-vault-actions {
display:none!important;
}`,
    },
    "hide-settings": {
      general: `body:not(.is-mobile).hide-settings .workspace-drawer-vault-actions .clickable-icon:last-child {
display:none;
}

body:not(.is-mobile).hide-help.hide-settings .workspace-drawer-vault-actions {
display:none!important;
}

.hide-settings-desc.is-phone .setting-item {
padding:.65em 0;
}

.hide-settings-desc.is-phone .setting-item-name {
font-weight:400;
font-size:16px;
}

.hide-settings-desc .setting-item-name {
transition:max-height .2s ease-in-out,padding-top .2s ease-in-out;
}

.hide-settings-desc .setting-item-name:active+.setting-item-description {
opacity:1;
max-height:500px;
padding-top:4px;
transition:opacity .1s ease-out,max-height .2s ease-out,padding-top .2s ease-in-out;
}

.hide-settings-desc .setting-item-description {
opacity:0;
max-height:0;
padding-top:0;
transition:max-height .2s ease-in-out,padding-top .2s ease-in-out;
}`,
    },
    "ribbon-vertical-expand": {
      general: `body.ribbon-vertical-expand:not(.is-mobile) {
--ribbon-width:0px;
}

body.ribbon-vertical-expand:not(.is-mobile) .workspace-ribbon.mod-left {
width:10px;
flex-basis:10px;
opacity:0;
position:fixed;
height:100%;
top:0;
bottom:0;
left:0;
z-index:10;
transition:all var(--ribbon-animation-duration) linear .6s;
}

body.ribbon-vertical-expand:not(.is-mobile) .workspace-ribbon.mod-left .side-dock-actions {
transition:opacity var(--ribbon-animation-duration) linear .3s;
}

body.ribbon-vertical-expand:not(.is-mobile) .workspace-ribbon.mod-left:hover {
width:44px;
opacity:1;
flex-basis:44px;
transition:opacity var(--ribbon-animation-duration) linear .1s;
}

body.ribbon-vertical-expand:not(.is-mobile) .workspace-ribbon.mod-left:hover .side-dock-actions {
opacity:1;
transition:opacity calc(var(--ribbon-animation-duration)*2) linear .2s;
}

body.ribbon-vertical-expand:not(.is-mobile).labeled-nav .workspace-ribbon.mod-left~.mod-left-split .workspace-tab-header-container {
margin-left:0;
transition:all var(--ribbon-animation-duration) linear .6s;
}

body.ribbon-vertical-expand:not(.is-mobile).labeled-nav .workspace-ribbon.mod-left:hover~.mod-left-split .workspace-tab-header-container {
margin-left:44px;
transition:all var(--ribbon-animation-duration) linear;
}

body.ribbon-vertical-expand:not(.is-mobile) .workspace-ribbon.mod-left~.mod-left-split .workspace-tab-container {
padding-left:0;
transition:all var(--ribbon-animation-duration) linear .6s;
}

body.ribbon-vertical-expand:not(.is-mobile) .workspace-ribbon.mod-left~.mod-left-split .workspace-sidedock-vault-profile {
transition:all var(--ribbon-animation-duration) linear .6s;
}

body.ribbon-vertical-expand:not(.is-mobile) .workspace-ribbon.mod-left:hover~.mod-left-split .workspace-tab-container {
padding-left:44px;
transition:all var(--ribbon-animation-duration) linear;
}

body.ribbon-vertical-expand:not(.is-mobile) .workspace-ribbon.mod-left:hover~.mod-left-split .workspace-sidedock-vault-profile {
padding-left:52px;
transition:all var(--ribbon-animation-duration) linear;
}`,
    },
    "ribbon-bottom-left-hover-vertical": {
      general: `.ribbon-bottom-left-hover-vertical:not(.is-mobile) {
--hider-ribbon-display:flex;
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left:before {
opacity:0;
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon-collapse-btn {
display:none;
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-right {
pointer-events:none;
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left {
overflow:visible;
border-top:var(--border-width) solid var(--background-modifier-border)!important;
border-right:var(--border-width) solid var(--background-modifier-border)!important;
border-top-right-radius:var(--radius-m);
padding:0;
position:absolute;
border-right:0px;
margin:0;
width:auto;
height:44px;
flex-basis:0;
bottom:0;
top:auto;
background:var(--background-secondary);
display:var(--hider-ribbon-display)!important;
flex-direction:row;
z-index:17;
opacity:0;
transition:opacity calc(var(--ribbon-animation-duration)*2) ease-in-out;
filter:drop-shadow(2px 10px 30px rgba(0, 0, 0, .2));
gap:0;
}

.ribbon-bottom-left-hover-vertical .side-dock-actions, .ribbon-bottom-left-hover-vertical .side-dock-settings {
flex-direction:row;
display:var(--hider-ribbon-display);
background:rgba(0,0,0,0);
margin:0;
position:relative;
gap:var(--size-2-2);
}

.ribbon-bottom-left-hover-vertical .side-dock-actions {
padding:6px 6px 6px 8px;
}

.ribbon-bottom-left-hover-vertical .side-dock-settings:empty {
display:none;
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left .side-dock-ribbon-action {
display:var(--hider-ribbon-display);
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left:hover {
opacity:1;
transition:opacity .25s ease-in-out;
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left .workspace-ribbon-collapse-btn {
opacity:0;
}

.ribbon-bottom-left-hover-vertical .workspace-split.mod-left-split {
margin:0;
}

.ribbon-bottom-left-hover-vertical .workspace-leaf-content .item-list {
padding-bottom:40px;
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left {
height:auto;
}

.ribbon-bottom-left-hover-vertical .side-dock-actions {
flex-direction:column;
padding:8px 6px;
}`,
    },
    "ribbon-bottom-left-hover": {
      general: `.ribbon-bottom-left-hover-vertical:not(.is-mobile), .ribbon-bottom-left-hover:not(.is-mobile) {
--hider-ribbon-display:flex;
}

.ribbon-bottom-left-hover .workspace-ribbon.mod-left:before, .ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left:before {
opacity:0;
}

.ribbon-bottom-left-hover .workspace-ribbon-collapse-btn, .ribbon-bottom-left-hover-vertical .workspace-ribbon-collapse-btn {
display:none;
}

.ribbon-bottom-left-hover .workspace-ribbon.mod-right, .ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-right {
pointer-events:none;
}

.ribbon-bottom-left-hover .workspace-ribbon.mod-left, .ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left {
overflow:visible;
border-top:var(--border-width) solid var(--background-modifier-border)!important;
border-right:var(--border-width) solid var(--background-modifier-border)!important;
border-top-right-radius:var(--radius-m);
padding:0;
position:absolute;
border-right:0px;
margin:0;
width:auto;
height:44px;
flex-basis:0;
bottom:0;
top:auto;
background:var(--background-secondary);
display:var(--hider-ribbon-display)!important;
flex-direction:row;
z-index:17;
opacity:0;
transition:opacity calc(var(--ribbon-animation-duration)*2) ease-in-out;
filter:drop-shadow(2px 10px 30px rgba(0, 0, 0, .2));
gap:0;
}

.ribbon-bottom-left-hover .side-dock-actions, .ribbon-bottom-left-hover .side-dock-settings, .ribbon-bottom-left-hover-vertical .side-dock-actions, .ribbon-bottom-left-hover-vertical .side-dock-settings {
flex-direction:row;
display:var(--hider-ribbon-display);
background:rgba(0,0,0,0);
margin:0;
position:relative;
gap:var(--size-2-2);
}

.ribbon-bottom-left-hover .side-dock-actions, .ribbon-bottom-left-hover-vertical .side-dock-actions {
padding:6px 6px 6px 8px;
}

.ribbon-bottom-left-hover .side-dock-settings:empty, .ribbon-bottom-left-hover-vertical .side-dock-settings:empty {
display:none;
}

.ribbon-bottom-left-hover .workspace-ribbon.mod-left .side-dock-ribbon-action, .ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left .side-dock-ribbon-action {
display:var(--hider-ribbon-display);
}

.ribbon-bottom-left-hover .workspace-ribbon.mod-left:hover, .ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left:hover {
opacity:1;
transition:opacity .25s ease-in-out;
}

.ribbon-bottom-left-hover .workspace-ribbon.mod-left .workspace-ribbon-collapse-btn, .ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left .workspace-ribbon-collapse-btn {
opacity:0;
}

.ribbon-bottom-left-hover .workspace-split.mod-left-split, .ribbon-bottom-left-hover-vertical .workspace-split.mod-left-split {
margin:0;
}

.ribbon-bottom-left-hover .workspace-leaf-content .item-list, .ribbon-bottom-left-hover-vertical .workspace-leaf-content .item-list {
padding-bottom:40px;
}

.ribbon-bottom-left-hover-vertical .workspace-ribbon.mod-left {
height:auto;
}

.ribbon-bottom-left-hover-vertical .side-dock-actions {
flex-direction:column;
padding:8px 6px;
}`,
    },
    "maximize-tables-auto": {
      general: `.maximize-tables-auto {
--container-table-max-width:100%;
--container-table-width:100%;
--container-dataview-table-width:100%;
--container-table-margin:0;
--table-drag-padding:var(--table-drag-space) 0;
--table-max-width:100%;
--table-margin:var(--content-margin-start) auto;
--table-width:auto;
}

.maximize-tables-auto .cards {
--container-table-max-width:var(--max-width);
}

.maximize-tables-auto .cards .block-language-dataview {
--table-margin:auto;
}`,
    },
    "maximize-tables": {
      general: `.maximize-tables-auto {
--container-table-max-width:100%;
--container-table-width:100%;
--container-dataview-table-width:100%;
--container-table-margin:0;
--table-drag-padding:var(--table-drag-space) 0;
--table-max-width:100%;
--table-margin:var(--content-margin-start) auto;
--table-width:auto;
}

.maximize-tables-auto .cards {
--container-table-max-width:var(--max-width);
}

.maximize-tables-auto .cards .block-language-dataview {
--table-margin:auto;
}

.maximize-tables {
--container-table-max-width:100%;
--container-table-width:100%;
--container-table-margin:0;
--table-drag-padding:var(--table-drag-space) 0;
--table-min-width:min(var(--line-width), var(--max-width));
--table-max-width:100%;
--table-margin:auto;
--table-width:auto;
--table-edge-cell-padding-first:8px;
--table-edge-cell-padding-last:8px;
--table-wrapper-width:auto;
}`,
    },
    "row-lines": {
      general: `.row-lines-off {
--table-row-last-border-width:0;
--bases-table-row-border-width:0;
}

.row-lines-off .table-view-table>tbody>tr>td, .row-lines-off table:not(.calendar) tbody>tr:last-child>td, .row-lines-off table:not(.calendar) tbody>tr>td {
border-bottom:none;
}

.row-lines:not(.table-lines) .markdown-preview-view:not(.cards), .row-lines:not(.table-lines) .markdown-source-view:not(.cards) {
--table-row-last-border-width:0;
}

.row-lines:not(.table-lines) .markdown-preview-view:not(.cards) .table-view-table>tbody>tr:not(:last-child)>td, .row-lines:not(.table-lines) .markdown-preview-view:not(.cards) table:not(.calendar) tbody>tr:not(:last-child)>td, .row-lines:not(.table-lines) .markdown-source-view:not(.cards) .table-view-table>tbody>tr:not(:last-child)>td, .row-lines:not(.table-lines) .markdown-source-view:not(.cards) table:not(.calendar) tbody>tr:not(:last-child)>td {
border-bottom:var(--table-border-width) solid var(--table-border-color);
}`,
    },
    "col-lines": {
      general: `.col-lines {
--bases-table-column-border-width:var(--table-border-width);
}

.col-lines .table-view-table thead>tr>th:not(:last-child), .col-lines .table-view-table>tbody>tr>td:not(:last-child), .col-lines table:not(.calendar) tbody>tr>td:not(:last-child) {
border-right:var(--table-border-width) solid var(--background-modifier-border);
}`,
    },
    "table-lines": {
      general: `.table-lines {
--table-border-width:var(--border-width);
--table-header-border-width:var(--border-width);
--table-column-first-border-width:var(--border-width);
--table-column-last-border-width:var(--border-width);
--table-row-last-border-width:var(--border-width);
--table-edge-cell-padding:8px;
--table-edge-cell-padding-first:8px;
--table-edge-cell-padding-last:8px;
--table-add-button-border-width:1px;
}`,
    },
    "row-alt": {
      general: `.row-alt {
--table-row-alt-background:var(--background-table-rows);
--table-row-alt-background-hover:var(--background-table-rows);
--table-edge-cell-padding-first:8px;
--table-edge-cell-padding-last:8px;
}`,
    },
    "col-alt": {
      general: `.col-alt .markdown-rendered:not(.cards) {
--table-column-alt-background:var(--background-table-rows);
}`,
    },
    "table-tabular": {
      general: `.table-tabular table:not(.calendar) {
font-variant-numeric:tabular-nums;
}`,
    },
    "table-numbers": {
      general: `.table-numbers {
--table-numbers-padding-right:0.5em;
}

.table-numbers table:not(.calendar) {
counter-reset:section;
}

.table-numbers table:not(.calendar)>thead>tr>th:first-child {
white-space:nowrap;
}

.table-numbers table:not(.calendar)>thead>tr>th:first-child::before {
content:" ";
padding-right:var(--table-numbers-padding-right);
display:inline-block;
min-width:2em;
}

.table-numbers table:not(.calendar)>thead>tr>th:first-child .cm-s-obsidian, .table-numbers table:not(.calendar)>thead>tr>th:first-child .table-cell-wrapper {
display:inline-block;
min-width:10px;
}

.table-numbers table:not(.calendar).table-editor>tbody>tr>td:first-child .table-cell-wrapper, .table-numbers table:not(.calendar):not(.table-editor)>tbody>tr>td:first-child {
white-space:nowrap;
}

.table-numbers table:not(.calendar).table-editor>tbody>tr>td:first-child .table-cell-wrapper::before, .table-numbers table:not(.calendar):not(.table-editor)>tbody>tr>td:first-child::before {
counter-increment:section;
content:counter(section) " ";
text-align:center;
padding-right:var(--table-numbers-padding-right);
display:inline-block;
min-width:2em;
color:var(--text-faint);
font-variant-numeric:tabular-nums;
}

.table-numbers table:not(.calendar).table-editor>tbody>tr>td:first-child .table-cell-wrapper .cm-s-obsidian, .table-numbers table:not(.calendar):not(.table-editor)>tbody>tr>td:first-child .cm-s-obsidian {
display:inline-block;
min-width:10px;
}

.table-numbers .table-editor {
--table-numbers-padding-right:0;
}`,
    },
    "table-center": {
      general: `.table-center .markdown-preview-view .markdown-preview-sizer table, .table-center .markdown-source-view.mod-cm6 .table-wrapper, .markdown-preview-view .markdown-preview-sizer table, .markdown-source-view.mod-cm6 .table-wrapper {
margin:0 auto;
}`,
    },
    "table-nowrap": {
      general: `.table-nowrap {
--table-white-space:nowrap;
}

.table-nowrap-first table tbody>tr>td:first-child, .table-nowrap-first table thead>tr>th:first-child {
--table-white-space:nowrap;
}

.table-nowrap .table-wrap {
--table-white-space:normal;
}`,
    },
    "row-hover": {
      general: `.row-hover {
--table-edge-cell-padding-first:8px;
--table-edge-cell-padding-last:8px;
--table-row-background-hover:var(--hl1);
--table-row-alt-background-hover:var(--hl1);
}

body.row-hover .dataview.task-list-basic-item:hover, body.row-hover .dataview.task-list-item:hover, body.row-hover .table-view-table>tbody>tr:hover {
background-color:var(--table-row-background-hover);
}`,
    },
    "tabs-square": {
      general: `.tabs-square .mod-root {
--tab-curve:0;
--tab-radius:0;
--tab-radius-active:0;
}`,
    },
    "tabs-modern": {
      general: `.colorful-frame .mod-root .mod-top.workspace-tabs:not(.mod-stacked) {
--tab-background:var(--frame-outline-color);
--tab-outline-width:1px;
}

.colorful-frame .mod-root .mod-top.workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-close-button, .colorful-frame .mod-root .mod-top.workspace-tabs:not(.mod-stacked) .workspace-tab-header:hover .workspace-tab-header-inner-close-button {
color:var(--minimal-tab-text-color-active);
}

.minimal-focus-mode .mod-root .workspace-tab-header-container:hover {
--tab-outline-width:0px;
}

.tabs-modern .mod-root {
--tab-container-background:var(--background-primary);
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) {
--tab-background:var(--background-modifier-hover);
--tab-height:calc(var(--header-height) - 14px);
--tab-outline-width:0px;
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner::after, .tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header::after, .tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header::before {
display:none;
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-container-inner {
align-items:center;
margin:0;
padding:2px var(--size-4-2) 0 var(--size-4-1);
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner-title {
text-overflow:ellipsis;
-webkit-mask-image:none;
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header {
background:rgba(0,0,0,0);
border-radius:5px;
border:none;
box-shadow:none;
height:var(--tab-height);
margin-left:var(--size-4-1);
padding:0;
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color:var(--tab-text-color-active);
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active.mod-active, .tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:hover {
opacity:1;
background-color:var(--tab-background);
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-new-tab {
margin-inline-end:0;
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header-inner {
padding:0 var(--size-4-1) 0 var(--size-4-2);
border:1px solid transparent;
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner {
background-color:rgba(0,0,0,0);
}

.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active:not(.mod-active) .workspace-tab-header-inner, .tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header:not(:hover):not(.mod-active) .workspace-tab-header-inner {
border:1px solid var(--tab-outline-color);
}

.sidebar-tabs-default .mod-right-split, .sidebar-tabs-wide .mod-right-split {
--tab-outline-width:0;
}`,
      dark: `.minimal-eink-dark.tabs-modern, .theme-light.minimal-eink-light.tabs-modern {
--minimal-tab-text-color-active:var(--bg1);
--tab-text-color-focused:var(--bg1);
--tab-text-color-focused-active-current:var(--bg1);
}

.minimal-eink-dark.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active, .theme-light.minimal-eink-light.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active {
background-color:var(--tx1);
}

.minimal-eink-dark.is-focused.tabs-modern .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, .theme-light.minimal-eink-light.is-focused.tabs-modern .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color:var(--bg1);
}`,
      light: `.theme-dark.minimal-eink-dark.tabs-modern, .minimal-eink-light.tabs-modern {
--minimal-tab-text-color-active:var(--bg1);
--tab-text-color-focused:var(--bg1);
--tab-text-color-focused-active-current:var(--bg1);
}

.theme-dark.minimal-eink-dark.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active, .minimal-eink-light.tabs-modern .mod-root .workspace-tabs:not(.mod-stacked) .workspace-tab-header.is-active {
background-color:var(--tx1);
}

.theme-dark.minimal-eink-dark.is-focused.tabs-modern .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title, .minimal-eink-light.is-focused.tabs-modern .mod-active .workspace-tab-header.is-active .workspace-tab-header-inner-title {
color:var(--bg1);
}`,
    },
    "tabs-plain-square": {
      general: `.tabs-plain-square .mod-root {
--tab-curve:0;
--tab-radius:0;
--tab-radius-active:0;
}

.tabs-plain-square .mod-root .workspace-tab-header-container {
padding-left:0;
padding-right:0;
}

.tabs-plain-square .mod-root .workspace-tab-header-container-inner {
margin-top:-1px;
margin-left:-15px;
}

.tabs-plain-square .mod-root .workspace-tab-header {
padding:0;
}

.tabs-plain-square .mod-root .workspace-tab-header-inner {
padding:0 8px;
}`,
    },
    "tabs-underline": {
      general: `.tabs-underline .mod-root {
--tab-curve:0;
--tab-radius:0;
--tab-radius-active:0;
--tab-outline-width:0px;
--tab-background-active:transparent;
}

.tabs-underline .mod-root .workspace-tab-header-container {
border-bottom:1px solid var(--divider-color);
}

.tabs-underline .mod-root .workspace-tab-header {
border-bottom:2px solid transparent;
}

.tabs-underline .mod-root .workspace-tab-header:hover {
border-bottom:2px solid var(--ui2);
}

.tabs-underline .mod-root .workspace-tab-header:hover .workspace-tab-header-inner {
background-color:rgba(0,0,0,0);
}

.tabs-underline .mod-root .workspace-tab-header.is-active {
border-bottom:2px solid var(--ax3);
}

.tabs-underline .mod-root .workspace-tab-header-inner:hover {
background-color:rgba(0,0,0,0);
}`,
    },
    "tab-stack-top": {
      general: `.tab-stack-top-flipped {
--tab-stacked-text-transform:rotate(180deg);
--tab-stacked-text-align:right;
}`,
    },
    "tab-stack-top-flipped": {
      general: `.tab-stack-top-flipped {
--tab-stacked-text-transform:rotate(180deg);
--tab-stacked-text-align:right;
}`,
    },
    "tab-stack-bottom": {
      general: `.tab-stack-bottom {
--tab-stacked-text-transform:rotate(180deg);
}

.tab-stack-bottom-flipped {
--tab-stacked-text-align:right;
}`,
    },
    "tab-stack-bottom-flipped": {
      general: `.tab-stack-bottom-flipped {
--tab-stacked-text-align:right;
}`,
    },
    "tab-stack-center": {
      general: `.tab-stack-center {
--tab-stacked-text-align:center;
}

.tab-stack-center-flipped {
--tab-stacked-text-transform:rotate(180deg);
--tab-stacked-text-align:center;
}`,
    },
    "tab-stack-center-flipped": {
      general: `.tab-stack-center-flipped {
--tab-stacked-text-transform:rotate(180deg);
--tab-stacked-text-align:center;
}`,
    },
    "minimal-unstyled-tags": {
      general: `body.minimal-unstyled-tags {
--tag-background:transparent;
--tag-background-hover:transparent;
--tag-border-width:0px;
--tag-padding-x:0;
--tag-padding-y:0;
--tag-size:inherit;
--tag-color-hover:var(--text-accent-hover);
}`,
      dark: `body.is-mobile.theme-dark {
--tag-background:transparent;
}`,
    },
    "minimal-tab-title-hidden": {
      general: `.minimal-tab-title-hidden .view-header-title-container {
opacity:0;
}

.minimal-tab-title-hidden .view-header-title-container:focus-within {
opacity:1;
transition:opacity .1s ease-in-out;
}

.minimal-tab-title-hidden .view-header:hover .view-header-title-container, .minimal-tab-title-hidden .workspace-tab-header-container:hover+.workspace-tab-container .view-header-title-container {
opacity:0;
}`,
    },
    "minimal-tab-title-visible": {
      general: `.minimal-tab-title-visible .view-header-title-container {
opacity:1;
}`,
    },
    "window-title-off": {
      general: `body.window-title-off .titlebar-text {
display:none;
}`,
    },
    "hide-markdown": {
      general: `.hide-markdown .is-live-preview .cm-formatting.cm-formatting-code.cm-inline-code, .hide-markdown .is-live-preview .cm-formatting.cm-formatting-em, .hide-markdown .is-live-preview .cm-formatting.cm-formatting-highlight, .hide-markdown .is-live-preview .cm-formatting.cm-formatting-link, .hide-markdown .is-live-preview .cm-formatting.cm-formatting-strikethrough, .hide-markdown .is-live-preview .cm-formatting.cm-formatting-strong {
display:none;
}

.hide-markdown .is-live-preview .cm-formatting-quote {
opacity:0;
}

.hide-markdown .is-live-preview .cm-formatting-header, .hide-markdown .is-live-preview .cm-formatting-link, .hide-markdown .is-live-preview .cm-hmd-internal-link.cm-link-has-alias, .hide-markdown .is-live-preview .cm-link-alias-pipe {
display:none;
}`,
    },
    "hide-settings-desc": {
      general: `.is-phone .setting-item {
padding:.65em 0;
}

.is-phone .setting-item-name {
font-weight:400;
font-size:16px;
}

.hide-settings-desc .setting-item-name {
transition:max-height .2s ease-in-out,padding-top .2s ease-in-out;
}

.hide-settings-desc .setting-item-name:active+.setting-item-description {
opacity:1;
max-height:500px;
padding-top:4px;
transition:opacity .1s ease-out,max-height .2s ease-out,padding-top .2s ease-in-out;
}

.hide-settings-desc .setting-item-description {
opacity:0;
max-height:0;
padding-top:0;
transition:max-height .2s ease-in-out,padding-top .2s ease-in-out;
}`,
    },
    "disable-animations": {
      general: `.disable-animations {
--ribbon-animation-duration:0ms;
--focus-animation-duration:0ms;
}

.disable-animations .mod-sidedock {
transition-duration:0s!important;
}`,
    },
    "fast-animations": {
      general: `.fast-animations {
--ribbon-animation-duration:0.05s;
--focus-animation-duration:0.05s;
}

.fast-animations .mod-sidedock {
transition-duration:70ms!important;
}`,
    },
  },
};
