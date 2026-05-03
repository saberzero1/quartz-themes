import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "iridium",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "iridium",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*17%) / 0.66);
  --background-modifier-border: var(--color-base-30, hsl(258 12% 21%));
  --background-modifier-border-focus: var(--color-base-40, hsl(258 12% 33%));
  --background-modifier-border-hover: var(--color-base-35, hsl(258 12% 25%));
  --background-modifier-form-field: var(--background-primary, hsl(258 12% 12%));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, hsl(258 12% 12%));
  --background-modifier-hover: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*17%) / 0.49);
  --background-primary: var(--color-base-00, hsl(258 12% 12%));
  --background-primary-alt: var(--color-base-10, hsl(258 12% 14%));
  --background-secondary: var(--i-1, hsl(258 12% 14%));
  --background-secondary-alt: var(--color-base-30, hsl(258 12% 21%));
  --bases-cards-background: var(--background-primary, hsl(258 12% 12%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(258 12% 14%));
  --bases-cards-shadow: 0 0 0 1px var(--i-editor-border);
  --bases-cards-shadow-hover: 0 0 0 1px var(--i-editor-border-hover);
  --bases-embed-border-color: var(--i-editor-border, hsl(258 12% 23%));
  --bases-embed-border-radius: var(--radius-s, 7px);
  --bases-embed-radius: 7px;
  --bases-group-heading-property-color: var(--text-muted, hsl(0 0% 70%));
  --bases-table-border-color: var(--table-border-color, hsl(258 12% 23%));
  --bases-table-cell-background-active: var(--background-primary, hsl(258 12% 12%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(258 12% 14%));
  --bases-table-group-background: var(--background-primary-alt, hsl(258 12% 14%));
  --bases-table-header-background: var(--background-primary, hsl(258 12% 12%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --bases-table-header-color: var(--text-normal, hsl(0 0% 85%));
  --bases-table-header-weight: var(--font-weight, 600);
  --bases-table-summary-background: var(--background-primary, hsl(258 12% 12%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --blockquote-background-color: hsl(var(--color-accent-hsl), 0.1);
  --bold-modifier: 300;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-radius: var(--radius-s, 7px);
  --callout-title-padding: 0.5em 1em;
  --canvas-background: var(--background-primary, hsl(258 12% 12%));
  --canvas-card-label-color: var(--text-faint, hsl(0 0% 40%));
  --canvas-dot-pattern: var(--color-base-30, hsl(258 12% 21%));
  --caret-color: var(--text-normal, hsl(0 0% 85%));
  --checkbox-border-color: var(--checkbox-color, hsl(258, 88%, 66%));
  --checkbox-border-color-hover: var(--checkbox-color-hover, oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h));
  --checkbox-color-hover: var(--interactive-accent-hover, oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h));
  --checkbox-marker-color: var(--background-primary, hsl(258 12% 12%));
  --checkbox-radius: var(--radius-s, 50%);
  --checklist-done-color: var(--text-normal, hsl(0 0% 85%));
  --checklist-done-decoration: none;
  --code-background: var(--i-1, hsl(258 12% 14%));
  --code-border-color: var(--i-editor-border, hsl(258 12% 23%));
  --code-border-width: 1px;
  --code-bracket-background: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --code-comment: var(--text-faint, hsl(0 0% 40%));
  --code-normal: var(--text-normal, hsl(0 0% 85%));
  --code-punctuation: var(--text-muted, hsl(0 0% 70%));
  --code-radius: var(--radius-s, 7px);
  --collapse-icon-color: var(--color-accent, hsl(258, 88%, 66%));
  --collapse-icon-color-collapsed: var(--interactive-accent-hover, oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h));
  --color-base-00: hsl(var(--accent-h) var(--i-dk-s) var(--i-dk-l));
  --color-base-05: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*1%));
  --color-base-10: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*2%));
  --color-base-100: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*73%));
  --color-base-20: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*3%));
  --color-base-25: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*4%));
  --color-base-30: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*9%));
  --color-base-35: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*13%));
  --color-base-40: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*21%));
  --color-base-50: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*28%));
  --color-base-60: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*48%));
  --color-base-70: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*58%));
  --dark: var(--text-normal, hsl(0 0% calc(var(--i-dk-l) + 73%*var(--i-dk-text-l-multiplier))));
  --darkgray: var(--text-normal, hsl(0 0% calc(var(--i-dk-l) + 73%*var(--i-dk-text-l-multiplier))));
  --divider-color: var(--background-modifier-border, hsl(258 12% 21%));
  --dropdown-background: var(--interactive-normal, hsl(258 12% 12%));
  --dropdown-background-hover: var(--interactive-hover, hsl(258 12% 20%));
  --embed-border-bottom: 1px solid var(--i-editor-border);
  --embed-border-end: 1px solid var(--i-editor-border);
  --embed-border-start: 1px solid var(--i-editor-border);
  --embed-border-top: 1px solid var(--i-editor-border);
  --file-header-background: var(--background-primary, hsl(258 12% 12%));
  --file-header-background-focused: var(--background-primary, hsl(258 12% 12%));
  --file-header-border: var(--border-width, 0) solid transparent;
  --flair-background: var(--interactive-normal, hsl(258 12% 12%));
  --flair-color: var(--text-normal, hsl(0 0% 85%));
  --footnote-divider-color: var(--metadata-divider-color, hsl(258 12% 21%));
  --footnote-id-color: var(--text-muted, hsl(0 0% 70%));
  --footnote-id-color-no-occurrences: var(--text-faint, hsl(0 0% 40%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(258 12% 29% / 0.49));
  --frame-right-space: 81px;
  --graph-line: var(--color-base-35, hsl(258 12% 25%));
  --graph-node: var(--color-base-70, hsl(258 12% 70%));
  --graph-node-focused: var(--color-accent, hsl(258, 88%, 66%));
  --graph-node-unresolved: var(--color-base-50, hsl(258 12% 40%));
  --graph-text: var(--text-normal, hsl(0 0% 85%));
  --gray: var(--text-muted, hsl(0 0% calc(var(--i-dk-l) + 58%*var(--i-dk-text-l-multiplier))));
  --h1-letter-spacing: 0;
  --h1-line-height: var(--line-height-normal, 1.5);
  --h1-size: var(--i-h1-size, 1.5em);
  --h1-weight: 600;
  --h2-letter-spacing: 0;
  --h2-line-height: var(--line-height-normal, 1.5);
  --h2-size: var(--i-h2-size, 1.4em);
  --h2-weight: 600;
  --h3-letter-spacing: 0;
  --h3-line-height: var(--line-height-normal, 1.5);
  --h3-size: var(--i-h3-size, 1.3em);
  --h3-weight: 600;
  --h4-letter-spacing: 0;
  --h4-line-height: var(--line-height-normal, 1.5);
  --h4-size: var(--i-h4-size, 1.2em);
  --h4-weight: 600;
  --h5-letter-spacing: 0;
  --h5-size: var(--i-h5-size, 1.1em);
  --h5-weight: 600;
  --h6-letter-spacing: 0;
  --h6-size: var(--i-h6-size, 1em);
  --heading-formatting: var(--text-faint, hsl(0 0% 40%));
  --heading-spacing: var(--p-spacing, 1.5rem);
  --highlight: var(--background-modifier-hover, hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*17%) / 0.49));
  --hr-color: var(--i-editor-border, hsl(258 12% 23%));
  --i-0: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*1%));
  --i-1: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*2%));
  --i-2: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*4%));
  --i-3: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*8%));
  --i-4: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*10%));
  --i-5: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*12%));
  --i-6: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*14%));
  --i-7: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*16%));
  --i-8: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*18%));
  --i-active-line-color: var(--color-accent, hsl(258, 88%, 66%));
  --i-active-line-highlight: oklch(from var(--i-active-line-color) 0.65 c h / 0.1);
  --i-active-line-highlight-inactive: oklch(from var(--i-active-line-highlight) l c h / 0.05);
  --i-border-radius: 8px;
  --i-bullet-color: var(--color-accent, hsl(258, 88%, 66%));
  --i-bullet-color-collapsed: var(--text-accent, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --i-bullet-color-hover: var(--interactive-accent-hover, oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h));
  --i-card-layout-border: var(--i-5, hsl(258 12% 24%));
  --i-card-radius: 8px;
  --i-card-radius-macos: 10px;
  --i-checkbox-shadow-hover: var(--i-3, hsl(258 12% 20%));
  --i-dk-border-l: 11%;
  --i-dk-custom-layout-s: 12%;
  --i-dk-folder-bg-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-dk-folder-name-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-dk-h1-h: 0;
  --i-dk-h6-h: 300;
  --i-dk-heading-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-dk-heading-highlighted-padding: 0;
  --i-dk-l: 12%;
  --i-dk-l-multiplier: 1;
  --i-dk-layout-border-l: 8%;
  --i-dk-layout-l: 8%;
  --i-dk-layout-s: var(--i-dk-s, 12%);
  --i-dk-s: 12%;
  --i-dk-text-l-multiplier: 1;
  --i-editor-border: hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*var(--i-dk-border-l)));
  --i-editor-border-hover: hsl(from var(--i-editor-border) h s calc(l + 4 * var(--i-dk-l-multiplier)));
  --i-h1-size: 1.5em;
  --i-h2-size: calc(var(--i-h6-size) + (var(--i-h1-size) - var(--i-h6-size))*0.8);
  --i-h3-size: calc(var(--i-h6-size) + (var(--i-h1-size) - var(--i-h6-size))*0.6);
  --i-h4-size: calc(var(--i-h6-size) + (var(--i-h1-size) - var(--i-h6-size))*0.4);
  --i-h5-size: calc(var(--i-h6-size) + (var(--i-h1-size) - var(--i-h6-size))*0.2);
  --i-h6-size: 1em;
  --i-hr-style: solid;
  --i-image-border-color: var(--i-editor-border, hsl(258 12% 23%));
  --i-image-border-style: solid;
  --i-image-border-width: 0;
  --i-image-padding: 0;
  --i-inline-title-accent-bg: oklch(from var(--color-accent) 40% 15% h / 50%);
  --i-inline-title-accent-text-color: oklch(from var(--color-accent) 80% 20% h);
  --i-layout-border-color: hsl(var(--accent-h) var(--i-dk-layout-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*(var(--i-dk-layout-l) + var(--i-dk-layout-border-l))));
  --i-layout-color: hsl(var(--accent-h) var(--i-dk-layout-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*var(--i-dk-layout-l)));
  --i-link-bg-hover: var(--i-3, hsl(258 12% 20%));
  --i-link-underline-color: oklch(from var(--link-color) l c h / calc(var(--i-link-underline-opacity-multiplier)*0.35));
  --i-link-underline-offset: 0.1em;
  --i-link-underline-opacity-multiplier: 1;
  --i-link-underline-style: solid;
  --i-lt-custom-layout-s: 25%;
  --i-lt-folder-bg-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-lt-folder-name-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-lt-h1-h: 0;
  --i-lt-h6-h: 300;
  --i-lt-heading-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-lt-heading-highlighted-padding: 0;
  --i-lt-layout-border-l: 8%;
  --i-lt-layout-l: 12%;
  --i-pattern-color: hsl(from var(--i-1) h s calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*var(--i-pattern-dk-l)));
  --i-pattern-dk-l: 3%;
  --i-pattern-height: 10px;
  --i-pattern-line-width: 1px;
  --i-pattern-lt-l: 3%;
  --i-pattern-width: 10px;
  --i-properties-s: var(--i-dk-s, 12%);
  --i-s: var(--i-dk-s, 12%);
  --i-scrollbar-color: var(--i-7, hsl(258 12% 28%));
  --i-scrollbar-color-active: var(--i-8, hsl(258 12% 30%));
  --i-scrollbar-thumb-size: 4px;
  --i-scrollbar-track-size: 9px;
  --i-slider-thumb-shadow: 0 0 0 5px hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*40%) / 0.35);
  --i-spacing-below-headings: 0.3rem;
  --i-style-settings-h1-color: oklch(from var(--color-accent) 80% 20% h);
  --i-style-settings-h2-color: oklch(from var(--color-accent) 80% 20% calc(h + 60));
  --i-style-settings-h3-color: oklch(from var(--color-accent) 80% 20% calc(h + 60 * 2));
  --i-style-settings-h4-color: oklch(from var(--color-accent) 80% 20% calc(h + 60 * 3));
  --i-style-settings-h5-color: oklch(from var(--color-accent) 80% 20% calc(h + 60 * 4));
  --i-style-settings-h6-color: oklch(from var(--color-accent) 80% 20% calc(h + 60 * 5));
  --i-style-settings-heading-underline-color: oklch(from currentColor l c h / 0.35);
  --i-translucent-floating-nav-opacity: 92%;
  --icon-color: var(--text-normal, hsl(0 0% 85%));
  --icon-color-active: var(--color-accent, hsl(258, 88%, 66%));
  --icon-color-focused: var(--text-normal, hsl(0 0% 85%));
  --icon-color-hover: var(--icon-color, hsl(0 0% 85%));
  --icon-opacity: 1;
  --indentation-guide-color: var(--i-editor-border, hsl(258 12% 23%));
  --indentation-guide-color-active: var(--i-editor-border-hover, hsl(from hsl(258 12% calc(12% + 1 * 11%)) h s calc(l + 4 * 1)));
  --inline-title-line-height: var(--h1-line-height, 1.5);
  --inline-title-size: var(--h1-size, 1.5em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-date-separator: var(--text-faint, hsl(0 0% 40%));
  --input-placeholder-color: var(--text-faint, hsl(0 0% 40%));
  --input-shadow: inset 0 0 0 1px hsl(258 12% 21%);
  --input-shadow-hover: inset 0 0 0 1px hsl(258 12% 25%);
  --interactive-accent-hover: oklch(from var(--color-accent) calc(l + 0.1) c h);
  --interactive-hover: var(--i-3, hsl(258 12% 20%));
  --interactive-normal: var(--background-primary, hsl(258 12% 12%));
  --light: var(--background-primary, var(--color-base-00, hsl(258 12% 12%)));
  --lightgray: var(--background-secondary, var(--i-1, hsl(258 12% 14%)));
  --link-color: var(--text-accent, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --link-color-hover: var(--link-color, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --link-external-color: var(--text-accent, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --link-external-color-hover: var(--link-external-color, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --link-unresolved-color: var(--text-accent, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --list-marker-color: var(--color-accent, hsl(258, 88%, 66%));
  --list-marker-color-collapsed: var(--text-accent, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --list-marker-color-hover: var(--interactive-accent-hover, oklch(from hsl(258, 88%, 66%) calc(l + 0.1) c h));
  --menu-background: var(--background-secondary, hsl(258 12% 14%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(258 12% 25%));
  --metadata-border-color: var(--background-modifier-border, hsl(258 12% 21%));
  --metadata-divider-color: var(--background-modifier-border, hsl(258 12% 21%));
  --metadata-input-background-active: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --metadata-input-text-color: var(--text-normal, hsl(0 0% 85%));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --metadata-label-text-color: var(--text-muted, hsl(0 0% 70%));
  --metadata-label-text-color-hover: var(--text-muted, hsl(0 0% 70%));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --modal-background: var(--background-primary, hsl(258 12% 12%));
  --modal-border-color: var(--background-modifier-border-hover, hsl(258 12% 25%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(258, 88%, 66%));
  --nav-collapse-icon-color-collapsed: var(--text-faint, hsl(0 0% 40%));
  --nav-heading-color: var(--text-normal, hsl(0 0% 85%));
  --nav-heading-color-collapsed: var(--text-faint, hsl(0 0% 40%));
  --nav-heading-color-collapsed-hover: var(--text-muted, hsl(0 0% 70%));
  --nav-heading-color-hover: var(--text-normal, hsl(0 0% 85%));
  --nav-indentation-guide-color: var(--i-4, hsl(258 12% 22%));
  --nav-item-background-active: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --nav-item-background-hover: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --nav-item-color: var(--text-normal, hsl(0 0% 85%));
  --nav-item-color-active: var(--text-normal, hsl(0 0% 85%));
  --nav-item-color-highlighted: var(--text-accent, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --nav-item-color-hover: var(--text-normal, hsl(0 0% 85%));
  --nav-item-color-selected: var(--text-normal, hsl(0 0% 85%));
  --nav-tag-color: var(--text-faint, hsl(0 0% 40%));
  --nav-tag-color-active: var(--text-muted, hsl(0 0% 70%));
  --nav-tag-color-hover: var(--text-muted, hsl(0 0% 70%));
  --nn-theme-file-selected-bg: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --nn-theme-file-tag-bg: var(--tag-background, hsl(258, 88%, 66%, 0.25));
  --nn-theme-file-tag-border-radius: var(--tag-radius, 4px);
  --nn-theme-file-tag-color: var(--tag-color, hsl(0 0% 85%));
  --nn-theme-mobile-toolbar-button-active-icon-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --nn-theme-mobile-toolbar-button-icon-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --nn-theme-nav-bg: hsl(258 12% 12%);
  --nn-theme-navitem-chevron-color: var(--nav-collapse-icon-color, hsl(258, 88%, 66%));
  --nn-theme-navitem-selected-bg: var(--background-modifier-hover, hsl(258 12% 29% / 0.49));
  --p-spacing: 1.5rem;
  --pdf-background: var(--background-primary, hsl(258 12% 12%));
  --pdf-page-background: var(--background-primary, hsl(258 12% 12%));
  --pdf-sidebar-background: var(--background-primary, hsl(258 12% 12%));
  --pill-border-color: var(--background-modifier-border, hsl(258 12% 21%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(258 12% 25%));
  --pill-color: var(--text-muted, hsl(0 0% 70%));
  --pill-color-hover: var(--text-normal, hsl(0 0% 85%));
  --pill-color-remove: var(--text-faint, hsl(0 0% 40%));
  --pill-color-remove-hover: var(--text-muted, hsl(0 0% 70%));
  --pill-focus-left-adjust: 0;
  --pill-focus-width: 100%;
  --pill-radius: var(--radius-s, 4px);
  --prompt-background: var(--background-primary, hsl(258 12% 12%));
  --prompt-border-color: var(--background-modifier-border-hover, hsl(258 12% 25%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(258 12% 12%) 65%, transparent) linear-gradient(hsl(258 12% 12%), color-mix(in srgb, hsl(258 12% 12%) 65%, transparent)));
  --ribbon-background: var(--i-layout-color, hsl(258 12% 20%));
  --ribbon-background-collapsed: var(--ribbon-background, hsl(258 12% 20%));
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 0 12px);
  --search-clear-button-color: var(--text-muted, hsl(0 0% 70%));
  --search-icon-color: var(--text-muted, hsl(0 0% 70%));
  --search-result-background: var(--background-primary, hsl(258 12% 12%));
  --secondary: var(--text-accent, oklch(from var(--color-accent) 80% 15% h));
  --setting-group-heading-color: var(--text-normal, hsl(0 0% 85%));
  --setting-items-background: var(--background-primary, hsl(258 12% 12%));
  --setting-items-border-color: var(--background-modifier-border, hsl(258 12% 21%));
  --setting-items-padding: var(--size-4-5, 0 0 20px 0);
  --setting-items-radius: var(--radius-l, 0);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, hsl(0 0% 70%));
  --shiki-code-background: var(--code-background, hsl(258 12% 14%));
  --shiki-code-block-border-radius: var(--code-radius, 7px);
  --shiki-code-block-spacing: var(--p-spacing, 1.5rem);
  --shiki-code-comment: var(--text-faint, hsl(0 0% 40%));
  --shiki-code-normal: var(--text-muted, hsl(0 0% 70%));
  --shiki-code-punctuation: var(--text-muted, hsl(0 0% 70%));
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(258 12% 21%));
  --shiki-gutter-text-color: var(--text-faint, hsl(0 0% 40%));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, hsl(0 0% 70%));
  --shiki-highlight-neutral: var(--shiki-code-normal, hsl(0 0% 70%));
  --shiki-terminal-dots-color: var(--text-faint, hsl(0 0% 40%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(258 12% 25%));
  --slider-track-background: var(--background-modifier-border, hsl(258 12% 21%));
  --status-bar-background: var(--titlebar-background, hsl(258 12% 13%));
  --status-bar-border-color: var(--divider-color, hsl(258 12% 21%));
  --status-bar-text-color: var(--text-normal, hsl(0 0% 85%));
  --suggestion-background: var(--background-primary, hsl(258 12% 12%));
  --tab-background-active: var(--background-primary, hsl(258 12% 12%));
  --tab-container-background: var(--titlebar-background, hsl(258 12% 13%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(258 12% 25%));
  --tab-outline-color: var(--divider-color, hsl(258 12% 21%));
  --tab-switcher-background: var(--background-secondary, hsl(258 12% 14%));
  --tab-text-color: var(--text-normal, hsl(0 0% 85%));
  --tab-text-color-active: var(--tab-text-color, hsl(0 0% 85%));
  --tab-text-color-focused: var(--tab-text-color, hsl(0 0% 85%));
  --tab-text-color-focused-active: var(--tab-text-color, hsl(0 0% 85%));
  --tab-text-color-focused-active-current: var(--text-normal, hsl(0 0% 85%));
  --tab-text-color-focused-highlighted: var(--text-accent, oklch(from hsl(258, 88%, 66%) 80% 15% h));
  --table-add-button-border-color: var(--i-editor-border, hsl(258 12% 23%));
  --table-border-color: var(--i-editor-border, hsl(258 12% 23%));
  --table-column-min-width: 4ch;
  --table-drag-handle-color: var(--color-accent, hsl(258, 88%, 66%));
  --table-header-background: var(--i-2, hsl(258 12% 16%));
  --table-header-background-hover: var(--table-header-background, hsl(258 12% 16%));
  --table-header-border-color: var(--table-border-color, hsl(258 12% 23%));
  --table-header-color: var(--text-normal, hsl(0 0% 85%));
  --table-selection-border-radius: 0;
  --tag-background: hsl(var(--color-accent-hsl), 0.25);
  --tag-background-hover: var(--tag-background, hsl(258, 88%, 66%, 0.25));
  --tag-color: var(--text-normal, hsl(0 0% 85%));
  --tag-color-hover: var(--tag-color, hsl(0 0% 85%));
  --tag-padding-x: 0.5em;
  --tag-radius: var(--radius-s, 4px);
  --tertiary: var(--text-accent-hover, oklch(from var(--text-accent) calc(l + 0.15) c h));
  --text-accent: oklch(from var(--color-accent) 80% 15% h);
  --text-accent-hover: oklch(from var(--text-accent) calc(l + 0.15) c h);
  --text-faint: hsl(0 0% calc(var(--i-dk-l) + 28%*var(--i-dk-text-l-multiplier)));
  --text-muted: hsl(0 0% calc(var(--i-dk-l) + 58%*var(--i-dk-text-l-multiplier)));
  --text-normal: hsl(0 0% calc(var(--i-dk-l) + 73%*var(--i-dk-text-l-multiplier)));
  --textHighlight: var(--background-modifier-hover, hsl(var(--accent-h) var(--i-dk-s) calc(var(--i-dk-l) + var(--i-dk-l-multiplier)*17%) / 0.49));
  --titlebar-background: var(--i-0, hsl(258 12% 13%));
  --titlebar-background-focused: var(--titlebar-background, hsl(258 12% 13%));
  --titlebar-border-color: var(--background-modifier-border, hsl(258 12% 21%));
  --titlebar-text-color: var(--text-muted, hsl(0 0% 70%));
  --titlebar-text-color-focused: var(--text-normal, hsl(0 0% 85%));
  --toggle-thumb-color: var(--text-normal, hsl(0 0% 85%));
  --traffic-lights-offset-y: var(--header-height, 58px);
  --vault-profile-color: var(--text-normal, hsl(0 0% 85%));
  --vault-profile-color-hover: var(--vault-profile-color, hsl(0 0% 85%));
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(49, 45, 57));
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(29, 27, 34));
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(29, 27, 34));
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(49, 45, 57));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(217, 217, 217);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(217, 217, 217));
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(217, 217, 217));
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(217, 217, 217));
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(217, 217, 217));
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--text-normal, rgb(217, 217, 217));
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
  border-radius: 50%;
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, oklch(0.8 0.06 292.489));
  outline: oklch(0.8 0.06 292.489) none 0px;
  text-decoration: underline oklch(0.8 0.06 292.489 / 0.35);
  text-decoration-color: var(--i-link-underline-color, oklch(0.8 0.06 292.489 / 0.35));
  text-decoration-style: var(--i-link-underline-style, solid);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, oklch(0.8 0.06 292.489));
  outline: oklch(0.8 0.06 292.489) none 0px;
  text-decoration: underline oklch(0.8 0.06 292.489 / 0.35);
  text-decoration-color: var(--i-link-underline-color, oklch(0.8 0.06 292.489 / 0.35));
  text-decoration-style: var(--i-link-underline-style, solid);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, oklch(0.8 0.06 292.489));
  outline: oklch(0.8 0.06 292.489) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(138, 92, 245, 0.1));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(217, 217, 217);
  margin-bottom: 16px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(56, 52, 66);
  border-left-color: rgb(56, 52, 66);
  border-right-color: rgb(56, 52, 66);
  border-top-color: rgb(56, 52, 66);
  color: var(--table-text-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(56, 52, 66);
  border-left-color: rgb(56, 52, 66);
  border-right-color: rgb(56, 52, 66);
  border-top-color: rgb(56, 52, 66);
  color: var(--table-header-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(39, 36, 46));
}`,
    code: `html[saved-theme="dark"] body code {
  --code-radius: var(--radius-s, 4px);
  background-color: var(--code-background, rgb(49, 45, 57));
  border-bottom-color: rgb(56, 52, 66);
  border-left-color: rgb(56, 52, 66);
  border-right-color: rgb(56, 52, 66);
  border-top-color: rgb(56, 52, 66);
  color: var(--code-normal, rgb(217, 217, 217));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(34, 31, 40));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 21px;
  padding-top: 21px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(258 12% 14%));
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: oklch(0.8 0.08 292.489);
  border-left-color: oklch(0.8 0.08 292.489);
  border-right-color: oklch(0.8 0.08 292.489);
  border-top-color: oklch(0.8 0.08 292.489);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(34, 31, 40));
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(56, 52, 66);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 52, 66);
  border-left-width: 1px;
  border-right-color: rgb(56, 52, 66);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 52, 66);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(217, 217, 217);
  border-bottom-style: solid;
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-right-style: solid;
  border-top-color: rgb(217, 217, 217);
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(217, 217, 217);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(217, 217, 217);
  text-decoration-line: none;
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(217, 217, 217);
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgMG0tOS41LS43NWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgMG0tOS41LS43NWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuOTIxIDEuNTc1LS4zNSA3QTEuNSAxLjUgMCAwIDEgOS4wNzMgMTBINi45MjdhMS41IDEuNSAwIDAgMS0xLjQ5OC0xLjQyNWwtLjM1LTdBMS41IDEuNSAwIDAgMSA2LjU3NyAwaDIuODQ2YTEuNSAxLjUgMCAwIDEgMS40OTggMS41NzVNOCAxMWEyLjUgMi41IDAgMSAxIDAgNSAyLjUgMi41IDAgMCAxIDAtNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuOTIxIDEuNTc1LS4zNSA3QTEuNSAxLjUgMCAwIDEgOS4wNzMgMTBINi45MjdhMS41IDEuNSAwIDAgMS0xLjQ5OC0xLjQyNWwtLjM1LTdBMS41IDEuNSAwIDAgMSA2LjU3NyAwaDIuODQ2YTEuNSAxLjUgMCAwIDEgMS40OTggMS41NzVNOCAxMWEyLjUgMi41IDAgMSAxIDAgNSAyLjUgMi41IDAgMCAxIDAtNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjQ0IDQuNTRjLjQzLS4zNTQuOTk0LS41NjUgMS41Ni0uNTY1IDEuMjE3IDAgMi4zNC44MiAyLjM0IDIuMTQgMCAuMzc3LS4wNzkuNzQ1LS4yOTggMS4xLS4yMDguMzM5LS41MTMuNjE0LS44NzUuODY3LS4yMTcuMTUzLS4zMjYuMjU3LS4zNzkuMzI4LS4wMzguMDUyLS4wMzguMDctLjAzOC4wODlhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjc5NC41NDQtMS4yODYgMS4wNTYtMS42NDUuMjgtLjE5Ni40MDItLjMzMi40Ni0uNDI1YS41NC41NCAwIDAgMCAuMDczLS4zMTNjMC0uMy0uMjQzLS42NDEtLjgzOS0uNjQxYTEgMSAwIDAgMC0uNjA4LjIyNGMtLjE2Ny4xMzctLjIzMS4yODYtLjIzMS40MTdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjY3My4zNDUtMS4yMi43OC0xLjU3N005IDExYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjQ0IDQuNTRjLjQzLS4zNTQuOTk0LS41NjUgMS41Ni0uNTY1IDEuMjE3IDAgMi4zNC44MiAyLjM0IDIuMTQgMCAuMzc3LS4wNzkuNzQ1LS4yOTggMS4xLS4yMDguMzM5LS41MTMuNjE0LS44NzUuODY3LS4yMTcuMTUzLS4zMjYuMjU3LS4zNzkuMzI4LS4wMzguMDUyLS4wMzguMDctLjAzOC4wODlhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjc5NC41NDQtMS4yODYgMS4wNTYtMS42NDUuMjgtLjE5Ni40MDItLjMzMi40Ni0uNDI1YS41NC41NCAwIDAgMCAuMDczLS4zMTNjMC0uMy0uMjQzLS42NDEtLjgzOS0uNjQxYTEgMSAwIDAgMC0uNjA4LjIyNGMtLjE2Ny4xMzctLjIzMS4yODYtLjIzMS40MTdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjY3My4zNDUtMS4yMi43OC0xLjU3N005IDExYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41ODkgOS42N0EyLjc1IDIuNzUgMCAwIDEgMS41IDd2LS4yNUEyLjc1IDIuNzUgMCAwIDEgNC4yNSA0aC4yNWEyLjc0NyAyLjc0NyAwIDAgMSAyLjc0OCAyLjY1N3YuMDAzaC4wMDJWN3EwIC4xOTctLjAyNy4zODYtLjAzLjM5Mi0uMDkuNzdhOCA4IDAgMCAxLS41NTkgMS45MTggNy4yIDcuMiAwIDAgMS0yLjE2MiAyLjgwMWwtLjA5OC4wNzZBLjI0LjI0IDAgMCAxIDQuMTcgMTNhLjI1LjI1IDAgMCAxLS4yMi0uMzY3IDE3IDE3IDAgMCAwIC42NS0xLjM4NGMuMTk3LS40NzQuMzk2LTEuMDEzLjU1Ny0xLjU3OGEyLjcgMi43IDAgMCAxLS42NTcuMDc5aC0uMjVxLS4zNDMtLjAwMS0uNjYxLS4wOG0tLjU0OSAxLjQwNUE0LjI1IDQuMjUgMCAwIDEgMCA3di0uMjVBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMi41aC4yNWMxLjQ1MiAwIDIuNzMzLjcyOCAzLjUgMS44MzhBNC4yNSA0LjI1IDAgMCAxIDExLjUgMi41aC4yNUE0LjI1IDQuMjUgMCAwIDEgMTYgNi42NjRWN3EwIC4yNzUtLjAzNS41NDNjLS4yMDcgMi42Mi0xLjM1OCA0Ljk2Ni0zLjQ4OCA2LjU5OWExLjc0IDEuNzQgMCAwIDEtMS4wNTcuMzU4Yy0xLjM0MSAwLTIuMTQ2LTEuNDI1LTEuNTQ4LTIuNTY0LjExMS0uMjExLjI2LS41MDguNDE4LS44NmE0LjI1IDQuMjUgMCAwIDEtMi4wMDUtMS4yOTcgOC43NiA4Ljc2IDAgMCAxLTMuMDU4IDQuMzYzIDEuNzQgMS43NCAwIDAgMS0xLjA1Ny4zNThjLTEuMzQxIDAtMi4xNDYtMS40MjUtMS41NDgtMi41NjQuMTExLS4yMTEuMjYtLjUwOC40MTgtLjg2bTcuOC0xLjQwNnEuMzE4LjA3OS42NjEuMDhoLjI1YTIuOCAyLjggMCAwIDAgLjY1Ny0uMDc5IDE0IDE0IDAgMCAxLS42OCAxLjg2NSAxOCAxOCAwIDAgMS0uNTI3IDEuMDk3LjI1LjI1IDAgMCAwIC4yMi4zNjcuMjQuMjQgMCAwIDAgLjE0NC0uMDQ5bC4wOTgtLjA3NnEuNDUyLS4zNTguODMyLS43NjhhNy4yIDcuMiAwIDAgMCAxLjM5LTIuMTcyIDggOCAwIDAgMCAuNDk4LTEuNzc5IDkgOSAwIDAgMCAuMDkxLS43N3EuMDI3LS4xOS4wMjctLjM4NnYtLjMzOUgxNC41di0uMDA0QTIuNzQ3IDIuNzQ3IDAgMCAwIDExLjc1IDRoLS4yNTFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVY3YzAgMS4yOS44OSAyLjM3NCAyLjA4OSAyLjY3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41ODkgOS42N0EyLjc1IDIuNzUgMCAwIDEgMS41IDd2LS4yNUEyLjc1IDIuNzUgMCAwIDEgNC4yNSA0aC4yNWEyLjc0NyAyLjc0NyAwIDAgMSAyLjc0OCAyLjY1N3YuMDAzaC4wMDJWN3EwIC4xOTctLjAyNy4zODYtLjAzLjM5Mi0uMDkuNzdhOCA4IDAgMCAxLS41NTkgMS45MTggNy4yIDcuMiAwIDAgMS0yLjE2MiAyLjgwMWwtLjA5OC4wNzZBLjI0LjI0IDAgMCAxIDQuMTcgMTNhLjI1LjI1IDAgMCAxLS4yMi0uMzY3IDE3IDE3IDAgMCAwIC42NS0xLjM4NGMuMTk3LS40NzQuMzk2LTEuMDEzLjU1Ny0xLjU3OGEyLjcgMi43IDAgMCAxLS42NTcuMDc5aC0uMjVxLS4zNDMtLjAwMS0uNjYxLS4wOG0tLjU0OSAxLjQwNUE0LjI1IDQuMjUgMCAwIDEgMCA3di0uMjVBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMi41aC4yNWMxLjQ1MiAwIDIuNzMzLjcyOCAzLjUgMS44MzhBNC4yNSA0LjI1IDAgMCAxIDExLjUgMi41aC4yNUE0LjI1IDQuMjUgMCAwIDEgMTYgNi42NjRWN3EwIC4yNzUtLjAzNS41NDNjLS4yMDcgMi42Mi0xLjM1OCA0Ljk2Ni0zLjQ4OCA2LjU5OWExLjc0IDEuNzQgMCAwIDEtMS4wNTcuMzU4Yy0xLjM0MSAwLTIuMTQ2LTEuNDI1LTEuNTQ4LTIuNTY0LjExMS0uMjExLjI2LS41MDguNDE4LS44NmE0LjI1IDQuMjUgMCAwIDEtMi4wMDUtMS4yOTcgOC43NiA4Ljc2IDAgMCAxLTMuMDU4IDQuMzYzIDEuNzQgMS43NCAwIDAgMS0xLjA1Ny4zNThjLTEuMzQxIDAtMi4xNDYtMS40MjUtMS41NDgtMi41NjQuMTExLS4yMTEuMjYtLjUwOC40MTgtLjg2bTcuOC0xLjQwNnEuMzE4LjA3OS42NjEuMDhoLjI1YTIuOCAyLjggMCAwIDAgLjY1Ny0uMDc5IDE0IDE0IDAgMCAxLS42OCAxLjg2NSAxOCAxOCAwIDAgMS0uNTI3IDEuMDk3LjI1LjI1IDAgMCAwIC4yMi4zNjcuMjQuMjQgMCAwIDAgLjE0NC0uMDQ5bC4wOTgtLjA3NnEuNDUyLS4zNTguODMyLS43NjhhNy4yIDcuMiAwIDAgMCAxLjM5LTIuMTcyIDggOCAwIDAgMCAuNDk4LTEuNzc5IDkgOSAwIDAgMCAuMDkxLS43N3EuMDI3LS4xOS4wMjctLjM4NnYtLjMzOUgxNC41di0uMDA0QTIuNzQ3IDIuNzQ3IDAgMCAwIDExLjc1IDRoLS4yNTFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVY3YzAgMS4yOS44OSAyLjM3NCAyLjA4OSAyLjY3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02Ljg4Ni43NzNDNy4yOS0uMjMxIDguNzEtLjIzMSA5LjExNC43NzNsMS40NzIgMy42NjcgMy45NDMuMjY4YzEuMDguMDczIDEuNTE4IDEuNDI0LjY4OCAyLjExOEwxMi4xODUgOS4zNmwuOTY0IDMuODMyYy4yNjQgMS4wNS0uODg2IDEuODg0LTEuODAyIDEuMzFMOCAxMi40bC0zLjM0NyAyLjEwMWMtLjkxNi41NzUtMi4wNjYtLjI2LTEuODAyLTEuMzA5bC45NjQtMy44MzJMLjc4MyA2LjgyNmMtLjgzLS42OTQtLjM5MS0yLjA0NS42ODgtMi4xMThsMy45NDMtLjI2OHoiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02Ljg4Ni43NzNDNy4yOS0uMjMxIDguNzEtLjIzMSA5LjExNC43NzNsMS40NzIgMy42NjcgMy45NDMuMjY4YzEuMDguMDczIDEuNTE4IDEuNDI0LjY4OCAyLjExOEwxMi4xODUgOS4zNmwuOTY0IDMuODMyYy4yNjQgMS4wNS0uODg2IDEuODg0LTEuODAyIDEuMzFMOCAxMi40bC0zLjM0NyAyLjEwMWMtLjkxNi41NzUtMi4wNjYtLjI2LTEuODAyLTEuMzA5bC45NjQtMy44MzJMLjc4MyA2LjgyNmMtLjgzLS42OTQtLjM5MS0yLjA0NS42ODgtMi4xMThsMy45NDMtLjI2OHoiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgNS40OTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNEExLjUgMS41IDAgMCAwIDMgNS41djFoMTB2LTFBMS41IDEuNSAwIDAgMCAxMS41IDR2Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY0SDZ2Ljc0N2EuNzUuNzUgMCAwIDEtLjc1Ljc1TTEwIDIuNUg2di0uNzUyYS43NS43NSAwIDEgMC0xLjUgMFYyLjVhMyAzIDAgMCAwLTMgM3Y2YTMgMyAwIDAgMCAzIDNoN2EzIDMgMCAwIDAgMy0zdi02YTMgMyAwIDAgMC0zLTN2LS43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTMgOHYzLjVBMS41IDEuNSAwIDAgMCA0LjUgMTNoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgNS40OTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNEExLjUgMS41IDAgMCAwIDMgNS41djFoMTB2LTFBMS41IDEuNSAwIDAgMCAxMS41IDR2Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY0SDZ2Ljc0N2EuNzUuNzUgMCAwIDEtLjc1Ljc1TTEwIDIuNUg2di0uNzUyYS43NS43NSAwIDEgMC0xLjUgMFYyLjVhMyAzIDAgMCAwLTMgM3Y2YTMgMyAwIDAgMCAzIDNoN2EzIDMgMCAwIDAgMy0zdi02YTMgMyAwIDAgMC0zLTN2LS43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTMgOHYzLjVBMS41IDEuNSAwIDAgMCA0LjUgMTNoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkgMTMuOTA0IDUuMjUgMTAuNzUgMi4wOTYgOC43MWEyLjQgMi40IDAgMCAxIC41LTQuMjc4bDkuMjczLTMuMjk2YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuOTk2IDIuOTk1TDEzLjQ1IDMuNjNhLjg0NC44NDQgMCAwIDAtMS4wOC0xLjA4TDMuMSA1Ljg0NmEuOS45IDAgMCAwLS4xOSAxLjYwNGwyLjc4IDEuNzk5IDMuMjc5LTMuMjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNjFMNi43NSAxMC4zMWwxLjc5OSAyLjc3OWEuOS45IDAgMCAwIDEuNjA0LS4xODhsMy4yOTctOS4yNzIgMS40MTMuNTAyLTMuMjk2IDkuMjczYTIuNCAyLjQgMCAwIDEtNC4yNzcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkgMTMuOTA0IDUuMjUgMTAuNzUgMi4wOTYgOC43MWEyLjQgMi40IDAgMCAxIC41LTQuMjc4bDkuMjczLTMuMjk2YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuOTk2IDIuOTk1TDEzLjQ1IDMuNjNhLjg0NC44NDQgMCAwIDAtMS4wOC0xLjA4TDMuMSA1Ljg0NmEuOS45IDAgMCAwLS4xOSAxLjYwNGwyLjc4IDEuNzk5IDMuMjc5LTMuMjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNjFMNi43NSAxMC4zMWwxLjc5OSAyLjc3OWEuOS45IDAgMCAwIDEuNjA0LS4xODhsMy4yOTctOS4yNzIgMS40MTMuNTAyLTMuMjk2IDkuMjczYTIuNCAyLjQgMCAwIDEtNC4yNzcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOFYxMDRhNDgsNDgsMCwwLDEsNDEuNjEtNDcuNTZBODMuODUsODMuODUsMCwwLDEsMTc4LDU2YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI1LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOFYxMDRhNDgsNDgsMCwwLDEsNDEuNjEtNDcuNTZBODMuODUsODMuODUsMCwwLDEsMTc4LDU2YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI1LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0uNzUtOS41YS43NS43NSAwIDAgMC0xLjUgMHYxLjc1SDUuNWEuNzUuNzUgMCAxIDAgMCAxLjVoMS43NXYxLjc1YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1aDEuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDguNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0uNzUtOS41YS43NS43NSAwIDAgMC0xLjUgMHYxLjc1SDUuNWEuNzUuNzUgMCAxIDAgMCAxLjVoMS43NXYxLjc1YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1aDEuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDguNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE01LjUgNy4yNWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE01LjUgNy4yNWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjUzIDUuNDdhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDggNS40NyA5LjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2bDEuNDcgMS40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDkuMDYgOGwxLjQ3LTEuNDdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkw4IDYuOTR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjUzIDUuNDdhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDggNS40NyA5LjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2bDEuNDcgMS40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDkuMDYgOGwxLjQ3LTEuNDdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkw4IDYuOTR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAxMS45MzdWMTNhLjUuNSAwIDAgMCAuNS41aDdhMS41IDEuNSAwIDAgMCAxLjUtMS41di0uNDAxQTMgMyAwIDAgMSAxMSAxMkg0cS0uMjYgMC0uNS0uMDYzTTIgMTBWM3EwLS4xMDMuMDEtLjIwNGEyIDIgMCAwIDEgLjY3Ni0xLjMwNEEyIDIgMCAwIDEgNCAxaDdhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNINGEyIDIgMCAwIDEtMi0yem0xLjUgMGEuNS41IDAgMCAwIC41LjVoN0ExLjUgMS41IDAgMCAwIDEyLjUgOVY0cTAtLjE1Ni0uMDMtLjMwMkExLjUgMS41IDAgMCAwIDExIDIuNUg0YS41LjUgMCAwIDAtLjUuNXptMi00Ljc1YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuNzUuNzUgMCAwIDEtLjc1LS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAxMS45MzdWMTNhLjUuNSAwIDAgMCAuNS41aDdhMS41IDEuNSAwIDAgMCAxLjUtMS41di0uNDAxQTMgMyAwIDAgMSAxMSAxMkg0cS0uMjYgMC0uNS0uMDYzTTIgMTBWM3EwLS4xMDMuMDEtLjIwNGEyIDIgMCAwIDEgLjY3Ni0xLjMwNEEyIDIgMCAwIDEgNCAxaDdhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNINGEyIDIgMCAwIDEtMi0yem0xLjUgMGEuNS41IDAgMCAwIC41LjVoN0ExLjUgMS41IDAgMCAwIDEyLjUgOVY0cTAtLjE1Ni0uMDMtLjMwMkExLjUgMS41IDAgMCAwIDExIDIuNUg0YS41LjUgMCAwIDAtLjUuNXptMi00Ljc1YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuNzUuNzUgMCAwIDEtLjc1LS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxLjVhMyAzIDAgMCAxIDMgM3Y4LjU0NmExLjQ1NCAxLjQ1NCAwIDAgMS0yLjQxMSAxLjA5NEw4IDExbC0zLjU4OSAzLjE0QTEuNDU0IDEuNDU0IDAgMCAxIDIgMTMuMDQ2VjQuNWEzIDMgMCAwIDEgMy0zeiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxLjVhMyAzIDAgMCAxIDMgM3Y4LjU0NmExLjQ1NCAxLjQ1NCAwIDAgMS0yLjQxMSAxLjA5NEw4IDExbC0zLjU4OSAzLjE0QTEuNDU0IDEuNDU0IDAgMCAxIDIgMTMuMDQ2VjQuNWEzIDMgMCAwIDEgMy0zeiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOSAxNC4zMTVhMS4zOCAxLjM4IDAgMCAxLTIuNTQyLS45ODRMNy4wNyAxMEgzLjEzYTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAybC41IDd6bTQuMzUyLTUuNzYyYS43NS43NSAwIDEgMCAxLjQ5Ni0uMTA2bC0uNS03YS43NS43NSAwIDAgMC0xLjQ5Ni4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOSAxNC4zMTVhMS4zOCAxLjM4IDAgMCAxLTIuNTQyLS45ODRMNy4wNyAxMEgzLjEzYTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAybC41IDd6bTQuMzUyLTUuNzYyYS43NS43NSAwIDEgMCAxLjQ5Ni0uMTA2bC0uNS03YS43NS43NSAwIDAgMC0xLjQ5Ni4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMWE3IDcgMCAxIDAgMCAxNEE3IDcgMCAwIDAgOCAxTTYuMDMgNi43MmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDIuNSAyLjVhLjc1Ljc1IDAgMCAwIDEuMDYgMGwyLjUtMi41YS43NS43NSAwIDEgMC0xLjA2LTEuMDZMOCA4LjY5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMWE3IDcgMCAxIDAgMCAxNEE3IDcgMCAwIDAgOCAxTTYuMDMgNi43MmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDIuNSAyLjVhLjc1Ljc1IDAgMCAwIDEuMDYgMGwyLjUtMi41YS43NS43NSAwIDEgMC0xLjA2LTEuMDZMOCA4LjY5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNDUyIDYuODY0IDEuMTMtMi4xNzNhMzIgMzIgMCAwIDEgMS44NzItMy4wOTVjLjk2NCAxLjA0NSAxLjkwNiAyLjMgMi42MTIgMy42MjIuNzQ4IDEuNDAyIDEuMTg0IDIuNzg5IDEuMTg0IDQuMDMyIDAgMS40MjctLjkwNCAyLjgzLTIuMTUzIDMuNjEzcS4wODgtLjM5OC4wOS0uODYzYzAtMS4yNTUtLjY3NC0yLjMzNi0xLjE0My0yLjk2M2E5IDkgMCAwIDAtMS4wMS0xLjEyNWwtLjAyNC0uMDItLjAwOC0uMDA4TDkgNy44OGwtLjAwMS0uMDAxQzguOTk2IDcuODggOC45OTYgNy44NzggOCA5YTcgNyAwIDAgMCAuOTg0IDEuMTMzYy4zNy41MzQuNzA0IDEuMi43MDQgMS44NjcgMCAuNzctLjMxMyAxLjI3Ni0uNjE4IDEuNTg3LS4xNTkuMTYyLS4yNzkuMzgtLjMxNC42YS44LjggMCAwIDAgMCAuMjY0cS4wMTcuMDk1LjA2LjE4MmMuMTEzLjIyNS4zNDMuMzcuNTk0LjM1IDIuODM2LS4yMzUgNS4zNC0yLjg3IDUuMzQtNS43MzMgMC0zLjE0OS0yLjE3Ny02LjUzOC00LjM1Ny04Ljg0NUExLjMgMS4zIDAgMCAwIDkuNDM1IDAgMS4zMiAxLjMyIDAgMCAwIDguMzUuNTU2IDM0IDM0IDAgMCAwIDYuMjUgNGwtLjk1NS0xLjMzNy0uMDE2LS4wMjJhLjk4Ni45ODYgMCAwIDAtMS41NzMuMDA0QzIuNjIgNC4xMjMgMS4yNSA2LjI0OSAxLjI1IDkuMjVjMCAyLjg2MyAyLjUwNCA1LjQ5OCA1LjM0IDUuNzMzLjI1LjAyLjQ4MS0uMTI1LjU5My0uMzVhLjcuNyAwIDAgMCAuMDYtLjE4Mi44LjggMCAwIDAgLjAwMS0uMjYzIDEuMTUgMS4xNSAwIDAgMC0uMzE0LS42MDFjLS4zMDUtLjMxLS42MTctLjgxNy0uNjE3LTEuNTg3IDAtLjY2Ni4zMzMtMS4zMzMuNzAzLTEuODY3bC4wOS0uMTI4QzcuNTQ0IDkuNDA1IDggOSA4IDlsLS45OTctMS4xMkg3bC0uMDAzLjAwMy0uMDA4LjAwNy0uMDI0LjAyMS0uMDczLjA3YTkgOSAwIDAgMC0uOTM3IDEuMDU2Yy0uNDcuNjI2LTEuMTQzIDEuNzA3LTEuMTQzIDIuOTYyIDAgLjMxLjAzMy41OTguMDkuODYzQzMuNjU0IDEyLjA4IDIuNzUgMTAuNjc3IDIuNzUgOS4yNWMwLTIuMTcxLjg0Ny0zLjgxMiAxLjc0NS01LjEyNmwuNTM0Ljc0OHpNOCA5bC45OTctMS4xMjFMOCA2Ljk5M2wtLjk5Ny44ODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNDUyIDYuODY0IDEuMTMtMi4xNzNhMzIgMzIgMCAwIDEgMS44NzItMy4wOTVjLjk2NCAxLjA0NSAxLjkwNiAyLjMgMi42MTIgMy42MjIuNzQ4IDEuNDAyIDEuMTg0IDIuNzg5IDEuMTg0IDQuMDMyIDAgMS40MjctLjkwNCAyLjgzLTIuMTUzIDMuNjEzcS4wODgtLjM5OC4wOS0uODYzYzAtMS4yNTUtLjY3NC0yLjMzNi0xLjE0My0yLjk2M2E5IDkgMCAwIDAtMS4wMS0xLjEyNWwtLjAyNC0uMDItLjAwOC0uMDA4TDkgNy44OGwtLjAwMS0uMDAxQzguOTk2IDcuODggOC45OTYgNy44NzggOCA5YTcgNyAwIDAgMCAuOTg0IDEuMTMzYy4zNy41MzQuNzA0IDEuMi43MDQgMS44NjcgMCAuNzctLjMxMyAxLjI3Ni0uNjE4IDEuNTg3LS4xNTkuMTYyLS4yNzkuMzgtLjMxNC42YS44LjggMCAwIDAgMCAuMjY0cS4wMTcuMDk1LjA2LjE4MmMuMTEzLjIyNS4zNDMuMzcuNTk0LjM1IDIuODM2LS4yMzUgNS4zNC0yLjg3IDUuMzQtNS43MzMgMC0zLjE0OS0yLjE3Ny02LjUzOC00LjM1Ny04Ljg0NUExLjMgMS4zIDAgMCAwIDkuNDM1IDAgMS4zMiAxLjMyIDAgMCAwIDguMzUuNTU2IDM0IDM0IDAgMCAwIDYuMjUgNGwtLjk1NS0xLjMzNy0uMDE2LS4wMjJhLjk4Ni45ODYgMCAwIDAtMS41NzMuMDA0QzIuNjIgNC4xMjMgMS4yNSA2LjI0OSAxLjI1IDkuMjVjMCAyLjg2MyAyLjUwNCA1LjQ5OCA1LjM0IDUuNzMzLjI1LjAyLjQ4MS0uMTI1LjU5My0uMzVhLjcuNyAwIDAgMCAuMDYtLjE4Mi44LjggMCAwIDAgLjAwMS0uMjYzIDEuMTUgMS4xNSAwIDAgMC0uMzE0LS42MDFjLS4zMDUtLjMxLS42MTctLjgxNy0uNjE3LTEuNTg3IDAtLjY2Ni4zMzMtMS4zMzMuNzAzLTEuODY3bC4wOS0uMTI4QzcuNTQ0IDkuNDA1IDggOSA4IDlsLS45OTctMS4xMkg3bC0uMDAzLjAwMy0uMDA4LjAwNy0uMDI0LjAyMS0uMDczLjA3YTkgOSAwIDAgMC0uOTM3IDEuMDU2Yy0uNDcuNjI2LTEuMTQzIDEuNzA3LTEuMTQzIDIuOTYyIDAgLjMxLjAzMy41OTguMDkuODYzQzMuNjU0IDEyLjA4IDIuNzUgMTAuNjc3IDIuNzUgOS4yNWMwLTIuMTcxLjg0Ny0zLjgxMiAxLjc0NS01LjEyNmwuNTM0Ljc0OHpNOCA5bC45OTctMS4xMjFMOCA2Ljk5M2wtLjk5Ny44ODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLTkuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNOCA3Ljc1YS43NS43NSAwIDAgMSAuNzUuNzVWMTFhLjc1Ljc1IDAgMCAxLTEuNSAwVjguNUEuNzUuNzUgMCAwIDEgOCA3Ljc1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLTkuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNOCA3Ljc1YS43NS43NSAwIDAgMSAuNzUuNzVWMTFhLjc1Ljc1IDAgMCAxLTEuNSAwVjguNUEuNzUuNzUgMCAwIDEgOCA3Ljc1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjYgMTUuMTA5YTQgNCAwIDAgMCAzLjQ4IDBsLjEzLS4wNjNhMiAyIDAgMCAwIDEuMTMtMS44di0uNDY4YzAtMS4zNTIuNzc2LTIuNTU3IDEuNTQtMy42NzNhNS41IDUuNSAwIDEgMC05LjA4IDBDNC4yMjQgMTAuMjIxIDUgMTEuNDI2IDUgMTIuNzc5di40NjdhMiAyIDAgMCAwIDEuMTMgMS44MDF6bTIuODI4LTEuMzUuMTMtLjA2NGEuNS41IDAgMCAwIC4yODItLjQ1di0uNDY3cTAtLjI1NS4wMjUtLjVhNS4zMyA1LjMzIDAgMCAxLTMuMDUgMHEuMDI0LjI0NS4wMjUuNXYuNDY3YS41LjUgMCAwIDAgLjI4Mi40NWwuMTMuMDYzYTIuNSAyLjUgMCAwIDAgMi4xNzYgMG0tNC4zOS01LjUwMWMuMzk0LjU3Ni44OTEgMS4zMDIgMS4yNjMgMi4xNDhhMy43OSAzLjc5IDAgMCAwIDQuMDc4IDBjLjM3Mi0uODQ2Ljg2OS0xLjU3MiAxLjI2NC0yLjE0OGE0IDQgMCAxIDAtNi42MDUgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTggMy41QS43NS43NSAwIDAgMCA4IDVhMSAxIDAgMCAxIDEgMSAuNzUuNzUgMCAwIDAgMS41IDBBMi41IDIuNSAwIDAgMCA4IDMuNSIvPjwvZz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjYgMTUuMTA5YTQgNCAwIDAgMCAzLjQ4IDBsLjEzLS4wNjNhMiAyIDAgMCAwIDEuMTMtMS44di0uNDY4YzAtMS4zNTIuNzc2LTIuNTU3IDEuNTQtMy42NzNhNS41IDUuNSAwIDEgMC05LjA4IDBDNC4yMjQgMTAuMjIxIDUgMTEuNDI2IDUgMTIuNzc5di40NjdhMiAyIDAgMCAwIDEuMTMgMS44MDF6bTIuODI4LTEuMzUuMTMtLjA2NGEuNS41IDAgMCAwIC4yODItLjQ1di0uNDY3cTAtLjI1NS4wMjUtLjVhNS4zMyA1LjMzIDAgMCAxLTMuMDUgMHEuMDI0LjI0NS4wMjUuNXYuNDY3YS41LjUgMCAwIDAgLjI4Mi40NWwuMTMuMDYzYTIuNSAyLjUgMCAwIDAgMi4xNzYgMG0tNC4zOS01LjUwMWMuMzk0LjU3Ni44OTEgMS4zMDIgMS4yNjMgMi4xNDhhMy43OSAzLjc5IDAgMCAwIDQuMDc4IDBjLjM3Mi0uODQ2Ljg2OS0xLjU3MiAxLjI2NC0yLjE0OGE0IDQgMCAxIDAtNi42MDUgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTggMy41QS43NS43NSAwIDAgMCA4IDVhMSAxIDAgMCAxIDEgMSAuNzUuNzUgMCAwIDAgMS41IDBBMi41IDIuNSAwIDAgMCA4IDMuNSIvPjwvZz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjMxMyA3LjQ4OCA5IDcuNjUzdjUuMzdhLjUuNSAwIDAgMS0uMzUzLjQ3OGwtMS42Mi40OTgtLjAwNi4wMDFoLS4wMDhsLS4wMDctLjAwNi0uMDA1LS4wMDd2LS4wMDNMNyAxMy45NzlWNy42NTNsLTEuMzEzLS4xNjVhMS41IDEuNSAwIDAgMS0xLjI3MS0xLjE0NGwtLjU4OC0yLjVBMS41IDEuNSAwIDAgMSA1LjI4OCAyaDUuNDI0YTEuNSAxLjUgMCAwIDEgMS40NiAxLjg0NGwtLjU4OCAyLjVhMS41IDEuNSAwIDAgMS0xLjI3MSAxLjE0NG0yLjczMS0uOEEzIDMgMCAwIDEgMTAuNSA4Ljk3NnY0LjA0NmEyIDIgMCAwIDEtMS40MTIgMS45MTFsLTEuNjIuNDk5QTEuNTIgMS41MiAwIDAgMSA1LjUgMTMuOTc5VjguOTc3YTMgMyAwIDAgMS0yLjU0NC0yLjI5bC0uNTg4LTIuNUEzIDMgMCAwIDEgNS4yODguNWg1LjQyNGEzIDMgMCAwIDEgMi45MiAzLjY4N3pNNi43NSAzLjVhLjc1Ljc1IDAgMCAwIDAgMS41aDIuNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjMxMyA3LjQ4OCA5IDcuNjUzdjUuMzdhLjUuNSAwIDAgMS0uMzUzLjQ3OGwtMS42Mi40OTgtLjAwNi4wMDFoLS4wMDhsLS4wMDctLjAwNi0uMDA1LS4wMDd2LS4wMDNMNyAxMy45NzlWNy42NTNsLTEuMzEzLS4xNjVhMS41IDEuNSAwIDAgMS0xLjI3MS0xLjE0NGwtLjU4OC0yLjVBMS41IDEuNSAwIDAgMSA1LjI4OCAyaDUuNDI0YTEuNSAxLjUgMCAwIDEgMS40NiAxLjg0NGwtLjU4OCAyLjVhMS41IDEuNSAwIDAgMS0xLjI3MSAxLjE0NG0yLjczMS0uOEEzIDMgMCAwIDEgMTAuNSA4Ljk3NnY0LjA0NmEyIDIgMCAwIDEtMS40MTIgMS45MTFsLTEuNjIuNDk5QTEuNTIgMS41MiAwIDAgMSA1LjUgMTMuOTc5VjguOTc3YTMgMyAwIDAgMS0yLjU0NC0yLjI5bC0uNTg4LTIuNUEzIDMgMCAwIDEgNS4yODguNWg1LjQyNGEzIDMgMCAwIDEgMi45MiAzLjY4N3pNNi43NSAzLjVhLjc1Ljc1IDAgMCAwIDAgMS41aDIuNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMTI1IDdhNC44NzUgNC44NzUgMCAxIDEgOS43NSAwYzAgMS44NjQtLjc3NCAyLjk2Mi0xLjY4NyAzLjgxNS0uMzg1LjM2LS43NjUuNjUtMS4xNy45NThsLS4zNjUuMjhhOSA5IDAgMCAwLS43ODEuNjY4Yy0uMjQzLjI0LS41MzUuNTc1LS43MyAxLjAxYS4zNC4zNCAwIDAgMS0uMDk1LjEzMmwtLjAxNS4wMDhzLS4wMS4wMDQtLjAzMi4wMDRsLS4wMzItLjAwMy0uMDE1LS4wMDlhLjM0LjM0IDAgMCAxLS4wOTUtLjEzMSAzLjQgMy40IDAgMCAwLS43My0xLjAxIDkgOSAwIDAgMC0uNzgxLS42NjhxLS4xODctLjE0NS0uMzY2LS4yOGExNSAxNSAwIDAgMS0xLjE2OS0uOTZDMy45IDkuOTYzIDMuMTI1IDguODY1IDMuMTI1IDdNMTQuNSA3YzAgMy40LTIuMDY2IDQuOTc1LTMuNTMgNi4wOTEtLjYzNC40ODUtMS4xNTYuODgyLTEuMzQ1IDEuMzA1QzkuMzU1IDE1IDguNzg4IDE1LjUgOCAxNS41cy0xLjM1NC0uNS0xLjYyNS0xLjEwNGMtLjE5LS40MjMtLjcxLS44Mi0xLjM0Ni0xLjMwNUMzLjU2NiAxMS45NzUgMS41IDEwLjM5OSAxLjUgN2E2LjUgNi41IDAgMCAxIDEzIDBtLTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME0xMSA3YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMTI1IDdhNC44NzUgNC44NzUgMCAxIDEgOS43NSAwYzAgMS44NjQtLjc3NCAyLjk2Mi0xLjY4NyAzLjgxNS0uMzg1LjM2LS43NjUuNjUtMS4xNy45NThsLS4zNjUuMjhhOSA5IDAgMCAwLS43ODEuNjY4Yy0uMjQzLjI0LS41MzUuNTc1LS43MyAxLjAxYS4zNC4zNCAwIDAgMS0uMDk1LjEzMmwtLjAxNS4wMDhzLS4wMS4wMDQtLjAzMi4wMDRsLS4wMzItLjAwMy0uMDE1LS4wMDlhLjM0LjM0IDAgMCAxLS4wOTUtLjEzMSAzLjQgMy40IDAgMCAwLS43My0xLjAxIDkgOSAwIDAgMC0uNzgxLS42NjhxLS4xODctLjE0NS0uMzY2LS4yOGExNSAxNSAwIDAgMS0xLjE2OS0uOTZDMy45IDkuOTYzIDMuMTI1IDguODY1IDMuMTI1IDdNMTQuNSA3YzAgMy40LTIuMDY2IDQuOTc1LTMuNTMgNi4wOTEtLjYzNC40ODUtMS4xNTYuODgyLTEuMzQ1IDEuMzA1QzkuMzU1IDE1IDguNzg4IDE1LjUgOCAxNS41cy0xLjM1NC0uNS0xLjYyNS0xLjEwNGMtLjE5LS40MjMtLjcxLS44Mi0xLjM0Ni0xLjMwNUMzLjU2NiAxMS45NzUgMS41IDEwLjM5OSAxLjUgN2E2LjUgNi41IDAgMCAxIDEzIDBtLTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME0xMSA3YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMi4yNTV2LS4wMWMuMDAzLS4wMy4wMTMtLjE1Ny0uMzYxLS4zNUM5LjcwMyAxLjY2OCA4Ljk2NyAxLjUgOCAxLjVzLTEuNzAzLjE2OS0yLjEzOC4zOTRjLS4zNzUuMTk0LS4zNjUuMzItLjM2Mi4zNTF2LjAxYy0uMDAzLjAzLS4wMTMuMTU3LjM2Mi4zNUM2LjI5NyAyLjgzMiA3LjAzMyAzIDggM3MxLjcwMy0uMTY5IDIuMTM5LS4zOTRjLjM3NC0uMTk0LjM2NC0uMzIuMzYxLS4zNTFNMTIgMi4yNWMwIC43MzgtLjQzMyAxLjI5NC0xLjEzNiAxLjY2OWwuODI1IDIuMzFjMS41NTMuNDggMi41NjEgMS4zMiAyLjU2MSAyLjUyIDAgMS44NTQtMi40MDIgMi44NDgtNS41IDIuOTg1VjE1YS43NS43NSAwIDAgMS0xLjUgMHYtMy4yNjZjLTMuMDk4LS4xMzYtNS41LTEuMTMxLTUuNS0yLjk4NCAwLTEuMiAxLjAwOC0yLjA0IDIuNTYxLTIuNTJsLjgyNS0yLjMxMUM0LjQzMyAzLjU0NCA0IDIuOTg4IDQgMi4yNSA0IC43NSA1Ljc5IDAgOCAwczQgLjc1IDQgMi4yNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMi4yNTV2LS4wMWMuMDAzLS4wMy4wMTMtLjE1Ny0uMzYxLS4zNUM5LjcwMyAxLjY2OCA4Ljk2NyAxLjUgOCAxLjVzLTEuNzAzLjE2OS0yLjEzOC4zOTRjLS4zNzUuMTk0LS4zNjUuMzItLjM2Mi4zNTF2LjAxYy0uMDAzLjAzLS4wMTMuMTU3LjM2Mi4zNUM2LjI5NyAyLjgzMiA3LjAzMyAzIDggM3MxLjcwMy0uMTY5IDIuMTM5LS4zOTRjLjM3NC0uMTk0LjM2NC0uMzIuMzYxLS4zNTFNMTIgMi4yNWMwIC43MzgtLjQzMyAxLjI5NC0xLjEzNiAxLjY2OWwuODI1IDIuMzFjMS41NTMuNDggMi41NjEgMS4zMiAyLjU2MSAyLjUyIDAgMS44NTQtMi40MDIgMi44NDgtNS41IDIuOTg1VjE1YS43NS43NSAwIDAgMS0xLjUgMHYtMy4yNjZjLTMuMDk4LS4xMzYtNS41LTEuMTMxLTUuNS0yLjk4NCAwLTEuMiAxLjAwOC0yLjA0IDIuNTYxLTIuNTJsLjgyNS0yLjMxMUM0LjQzMyAzLjU0NCA0IDIuOTg4IDQgMi4yNSA0IC43NSA1Ljc5IDAgOCAwczQgLjc1IDQgMi4yNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 153, 205);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMSAxLjY4NWExLjM4IDEuMzggMCAwIDEgMi41NDIuOTg0TDguOTMgNmgzLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTQgNCA3ek0yLjc0OSA3LjQ0N2EuNzUuNzUgMCAxIDAtMS40OTYuMTA2bC41IDdhLjc1Ljc1IDAgMCAwIDEuNDk2LS4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMSAxLjY4NWExLjM4IDEuMzggMCAwIDEgMi41NDIuOTg0TDguOTMgNmgzLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTQgNCA3ek0yLjc0OSA3LjQ0N2EuNzUuNzUgMCAxIDAtMS40OTYuMTA2bC41IDdhLjc1Ljc1IDAgMCAwIDEuNDk2LS4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgME04Ljc1IDQuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdi4zMzlhMi41IDIuNSAwIDAgMC0xLjAwNy40NyAxLjk1IDEuOTUgMCAwIDAtLjc0IDEuNTQ2YzAgLjc2NC40NzQgMS4yNjUuOTQgMS41NTkuNDU2LjI4NyAxLjAwNy40NDggMS40NDguNTQ3LjQ2Mi4xMDIuODQzLjE5MSAxLjExOC4zNDEuMjI4LjEyNS4yNzUuMjI0LjI3NS4zNzYgMCAuMTAyLS4wNC4yMTctLjI0OC4zNDEtLjIyNC4xMzUtLjU3Ny4yMjktLjk4Mi4yMjktLjM0NCAwLS42ODMtLjExNC0uOTUzLS4yOS0uMjgxLS4xODQtLjQyLS4zODgtLjQ1Ny0uNTA2YS43NS43NSAwIDEgMC0xLjQzLjQ1MmMuMTcxLjU0My41OTEgMSAxLjA2OCAxLjMxLjI4NC4xODUuNjEyLjMzNS45NjguNDI5di4zNTdhLjc1Ljc1IDAgMCAwIDEuNSAwdi0uMzEzYy4zNzUtLjA2Ny43NC0uMTkgMS4wNTgtLjM4Mi41My0uMzE5Ljk3Ni0uODY0Ljk3Ni0xLjYyNyAwLS44NjQtLjUxLTEuMzk0LTEuMDU1LTEuNjkyLS40NzgtLjI2LTEuMDU2LS4zODktMS40Ni0uNDc4bC0uMDUzLS4wMTJjLS4zODYtLjA4Ni0uNzM2LS4yMDItLjk3My0uMzUyLS4yMjctLjE0Mi0uMjQtLjIzNi0uMjQtLjI5YS40NS40NSAwIDAgMSAuMTgtLjM3NWMuMTM0LS4xMDguNDAzLS4yMjcuODctLjIyNy40NyAwIC43NDIuMTEuOS4yMThhLjgzLjgzIDAgMCAxIC4zMTYuNDEuNzUuNzUgMCAwIDAgMS40MDctLjUyIDIuMzMgMi4zMyAwIDAgMC0uODc4LTEuMTMgMi43IDIuNyAwIDAgMC0xLjA0OC0uNDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgME04Ljc1IDQuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdi4zMzlhMi41IDIuNSAwIDAgMC0xLjAwNy40NyAxLjk1IDEuOTUgMCAwIDAtLjc0IDEuNTQ2YzAgLjc2NC40NzQgMS4yNjUuOTQgMS41NTkuNDU2LjI4NyAxLjAwNy40NDggMS40NDguNTQ3LjQ2Mi4xMDIuODQzLjE5MSAxLjExOC4zNDEuMjI4LjEyNS4yNzUuMjI0LjI3NS4zNzYgMCAuMTAyLS4wNC4yMTctLjI0OC4zNDEtLjIyNC4xMzUtLjU3Ny4yMjktLjk4Mi4yMjktLjM0NCAwLS42ODMtLjExNC0uOTUzLS4yOS0uMjgxLS4xODQtLjQyLS4zODgtLjQ1Ny0uNTA2YS43NS43NSAwIDEgMC0xLjQzLjQ1MmMuMTcxLjU0My41OTEgMSAxLjA2OCAxLjMxLjI4NC4xODUuNjEyLjMzNS45NjguNDI5di4zNTdhLjc1Ljc1IDAgMCAwIDEuNSAwdi0uMzEzYy4zNzUtLjA2Ny43NC0uMTkgMS4wNTgtLjM4Mi41My0uMzE5Ljk3Ni0uODY0Ljk3Ni0xLjYyNyAwLS44NjQtLjUxLTEuMzk0LTEuMDU1LTEuNjkyLS40NzgtLjI2LTEuMDU2LS4zODktMS40Ni0uNDc4bC0uMDUzLS4wMTJjLS4zODYtLjA4Ni0uNzM2LS4yMDItLjk3My0uMzUyLS4yMjctLjE0Mi0uMjQtLjIzNi0uMjQtLjI5YS40NS40NSAwIDAgMSAuMTgtLjM3NWMuMTM0LS4xMDguNDAzLS4yMjcuODctLjIyNy40NyAwIC43NDIuMTEuOS4yMThhLjgzLjgzIDAgMCAxIC4zMTYuNDEuNzUuNzUgMCAwIDAgMS40MDctLjUyIDIuMzMgMi4zMyAwIDAgMC0uODc4LTEuMTMgMi43IDIuNyAwIDAgMC0xLjA0OC0uNDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI5MyAwYy4zOSAwIC43MDcuMzE3LjcwNy43MDdWMmgxLjI5M2EuNzA3LjcwNyAwIDAgMSAuNSAxLjIwN2wtMS40NiAxLjQ2QTEuMTQgMS4xNCAwIDAgMSAxMy41MyA1aC0xLjQ3TDguNTMgOC41M2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2TDExIDMuOTRWMi40N2MwLS4zMDEuMTItLjU5LjMzMy0uODA0bDEuNDYtMS40NmEuNy43IDAgMCAxIC41LS4yMDdNMi41IDhhNS41IDUuNSAwIDAgMSA2LjU5OC01LjM5Ljc1Ljc1IDAgMCAwIC4yOTgtMS40N0E3IDcgMCAxIDAgMTQuODYgNi42YS43NS43NSAwIDAgMC0xLjQ3LjI5OXEuMTA5LjUzMy4xMSAxLjEwMWE1LjUgNS41IDAgMSAxLTExIDBtNS4zNjQtMi40OTZhLjc1Ljc1IDAgMCAwLS4wOC0xLjQ5OEE0IDQgMCAxIDAgMTEuOTg4IDguM2EuNzUuNzUgMCAwIDAtMS40OTYtLjExMSAyLjUgMi41IDAgMSAxLTIuNjMtMi42ODYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI5MyAwYy4zOSAwIC43MDcuMzE3LjcwNy43MDdWMmgxLjI5M2EuNzA3LjcwNyAwIDAgMSAuNSAxLjIwN2wtMS40NiAxLjQ2QTEuMTQgMS4xNCAwIDAgMSAxMy41MyA1aC0xLjQ3TDguNTMgOC41M2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2TDExIDMuOTRWMi40N2MwLS4zMDEuMTItLjU5LjMzMy0uODA0bDEuNDYtMS40NmEuNy43IDAgMCAxIC41LS4yMDdNMi41IDhhNS41IDUuNSAwIDAgMSA2LjU5OC01LjM5Ljc1Ljc1IDAgMCAwIC4yOTgtMS40N0E3IDcgMCAxIDAgMTQuODYgNi42YS43NS43NSAwIDAgMC0xLjQ3LjI5OXEuMTA5LjUzMy4xMSAxLjEwMWE1LjUgNS41IDAgMSAxLTExIDBtNS4zNjQtMi40OTZhLjc1Ljc1IDAgMCAwLS4wOC0xLjQ5OEE0IDQgMCAxIDAgMTEuOTg4IDguM2EuNzUuNzUgMCAwIDAtMS40OTYtLjExMSAyLjUgMi41IDAgMSAxLTIuNjMtMi42ODYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLjk3LTUuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMi41LTIuNWEuNzUuNzUgMCAwIDAtMS4wNiAwbC0yLjUgMi41YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMOCA3LjMxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLjk3LTUuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMi41LTIuNWEuNzUuNzUgMCAwIDAtMS4wNiAwbC0yLjUgMi41YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMOCA3LjMxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjgzNiAxLjVhLjY2NC42NjQgMCAwIDEgLjQ5MSAxLjExbC0uMzU0LjM5SDQuMDI3bC0uMzU0LS4zOWEuNjY0LjY2NCAwIDAgMSAuNDktMS4xMXptLTYuNDQ1IDMgMi4xMjQgMi4zMzZhLjUuNSAwIDAgMCAuMzcuMTY0aC4yM2EuNS41IDAgMCAwIC4zNy0uMTY0TDEwLjYxIDQuNXptLjY1MiAyLjk0N0wzLjUgNC42NXYxLjg1MmEuNS41IDAgMCAwIC4xMjMuMzI4TDQuODcgOC4yNjZhNC41IDQuNSAwIDAgMSAxLjE3Mi0uODJtLTIuMDggMi4wNjEtMS40Ny0xLjY5M0EyIDIgMCAwIDEgMiA2LjUwMlYyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjQuNTAyYTIgMiAwIDAgMS0uNDkgMS4zMTJsLTEuNDc0IDEuNjk0YTQuNSA0LjUgMCAxIDEtOC4wNzMgMG03LjE2Ni0xLjI0MmE0LjUgNC41IDAgMCAwLTEuMTcyLS44MkwxMi41IDQuNjV2MS44NTJhLjUuNSAwIDAgMS0uMTIzLjMyOHpNMTEgMTEuNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjgzNiAxLjVhLjY2NC42NjQgMCAwIDEgLjQ5MSAxLjExbC0uMzU0LjM5SDQuMDI3bC0uMzU0LS4zOWEuNjY0LjY2NCAwIDAgMSAuNDktMS4xMXptLTYuNDQ1IDMgMi4xMjQgMi4zMzZhLjUuNSAwIDAgMCAuMzcuMTY0aC4yM2EuNS41IDAgMCAwIC4zNy0uMTY0TDEwLjYxIDQuNXptLjY1MiAyLjk0N0wzLjUgNC42NXYxLjg1MmEuNS41IDAgMCAwIC4xMjMuMzI4TDQuODcgOC4yNjZhNC41IDQuNSAwIDAgMSAxLjE3Mi0uODJtLTIuMDggMi4wNjEtMS40Ny0xLjY5M0EyIDIgMCAwIDEgMiA2LjUwMlYyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjQuNTAyYTIgMiAwIDAgMS0uNDkgMS4zMTJsLTEuNDc0IDEuNjk0YTQuNSA0LjUgMCAxIDEtOC4wNzMgMG03LjE2Ni0xLjI0MmE0LjUgNC41IDAgMCAwLTEuMTcyLS44MkwxMi41IDQuNjV2MS44NTJhLjUuNSAwIDAgMS0uMTIzLjMyOHpNMTEgMTEuNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-summary, 83, 223, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-bug, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-error, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-example, 168, 130, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.17906 295.405 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.17906 295.405 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.17906 295.405 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.17906 295.405 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-fail, 251, 70, 76);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.216875 23.8105 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-info, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-default, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-question, 233, 151, 63);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.0000347234 23.6829 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.0000347234 23.6829 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.0000347234 23.6829 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.0000347234 23.6829 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-success, 68, 207, 110);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.180999 149.614 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.180999 149.614 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.180999 149.614 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.180999 149.614 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-tip, 83, 223, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.118893 193.752 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-todo, 2, 122, 255);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-warning, 233, 151, 63);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.140765 64.0894 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
  background: rgba(2, 122, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(2, 122, 255, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(217, 217, 217);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
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
  background-color: rgb(29, 27, 34);
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  color: var(--text-normal, rgb(217, 217, 217));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(29, 27, 34));
  border-bottom-color: rgb(61, 56, 71);
  border-left-color: rgb(61, 56, 71);
  border-right-color: rgb(61, 56, 71);
  border-top-color: rgb(61, 56, 71);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(217, 217, 217);
  outline: rgb(217, 217, 217) none 0px;
  text-decoration-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(70, 65, 83, 0.49));
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(61, 56, 71);
  border-left-color: rgb(61, 56, 71);
  border-right-color: rgb(61, 56, 71);
  border-top-color: rgb(61, 56, 71);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 31, 40);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(70, 65, 83, 0.49));
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(70, 65, 83, 0.49));
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsl(258, 88%, 66%, 0.25));
  --pill-background-hover: var(--tag-background-hover, hsl(258, 88%, 66%, 0.25));
  --pill-color: var(--tag-color, hsl(0 0% 85%));
  --pill-color-hover: var(--tag-color-hover, hsl(0 0% 85%));
  --pill-color-remove: var(--tag-color, hsl(0 0% 40%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(0 0% 70%));
  --pill-padding-x: var(--tag-padding-x, 0.5em);
  --pill-padding-y: var(--tag-padding-y, 0.15em);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(138, 92, 245, 0.25));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 600);
  color: var(--h1-color, oklch(0.8 0.08 292.489));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(217, 217, 217));
  font-size: var(--inline-title-size, 24px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 600);
  color: var(--h2-color, oklch(0.8 0.08 352.489));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  color: var(--h3-color, oklch(0.8 0.08 52.4895));
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, oklch(0.8 0.08 112.489));
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, oklch(0.8 0.08 172.49));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, oklch(0.8 0.08 232.49));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 12% 23%));
  --bases-table-header-background-hover: var(--i-2, hsl(258 12% 16%));
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-left-width: 1px;
  border-right-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-right-width: 1px;
  border-top-color: oklch(0.7 0.217554 257.503 / 0.35);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(53, 49, 63);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  --nav-item-weight: var(--i-dk-folder-weight, 400);
  --nav-item-weight-active: var(--nav-item-weight, 400);
  --nav-item-weight-hover: var(--nav-item-weight, 400);
  color: var(--nav-item-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  --nav-item-weight: var(--i-dk-folder-weight, 400);
  --nav-item-weight-active: var(--nav-item-weight, 400);
  --nav-item-weight-hover: var(--nav-item-weight, 400);
  color: var(--nav-item-color, rgb(217, 217, 217));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.depth-0 {
  --nav-item-weight: var(--i-dk-folder-weight, 400);
  --nav-item-weight-active: var(--nav-item-weight, 400);
  --nav-item-weight-hover: var(--nav-item-weight, 400);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: var(--icon-color, rgb(217, 217, 217));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(32, 29, 37));
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  color: var(--status-bar-text-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(217, 217, 217);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(217, 217, 217);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: var(--icon-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(217, 217, 217);
  stroke: rgb(217, 217, 217);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: oklch(0.8 0.06 292.489);
  border-left-color: oklch(0.8 0.06 292.489);
  border-right-color: oklch(0.8 0.06 292.489);
  border-top-color: oklch(0.8 0.06 292.489);
  color: oklch(0.8 0.06 292.489);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(217, 217, 217));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(34, 31, 40));
  border-color: rgb(217, 217, 217);
  box-shadow: var(--input-shadow, rgb(51, 47, 60) 0px 0px 0px 1px inset);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(56, 52, 66);
  color: var(--table-header-color, rgb(217, 217, 217));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  --input-height: var(--metadata-input-height, 2em);
  --metadata-input-background-active: var(--metadata-input-background, transparent);
  --metadata-label-background: hsl(from var(--i-2) h var(--i-properties-s) l);
  --metadata-label-background-active: var(--metadata-label-background, hsl(from hsl(258 12% 16%) h 12% l));
  --metadata-label-background-hover: var(--metadata-label-background, hsl(from hsl(258 12% 16%) h 12% l));
  --metadata-label-text-color: var(--text-normal, hsl(0 0% 85%));
  --metadata-property-radius-focus: var(--metadata-property-radius, 0);
  --metadata-property-radius-hover: var(--metadata-property-radius, 0);
  border-bottom-color: rgb(51, 47, 60);
  border-left-color: rgb(51, 47, 60);
  border-right-color: rgb(51, 47, 60);
  border-top-color: rgb(51, 47, 60);
  margin-bottom: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.2856 0.264 0.336);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.2856 0.264 0.336);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.2856 0.264 0.336);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.2856 0.264 0.336);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .note-properties {
  --input-height: var(--metadata-input-height, 2em);
  --metadata-input-background-active: var(--metadata-input-background, transparent);
  --metadata-label-background: hsl(from var(--i-2) h var(--i-properties-s) l);
  --metadata-label-background-active: var(--metadata-label-background, hsl(from hsl(258 12% 16%) h 12% l));
  --metadata-label-background-hover: var(--metadata-label-background, hsl(from hsl(258 12% 16%) h 12% l));
  --metadata-label-text-color: var(--text-normal, hsl(0 0% 85%));
  --metadata-property-radius-focus: var(--metadata-property-radius, 0);
  --metadata-property-radius-hover: var(--metadata-property-radius, 0);
  border-color: rgb(51, 47, 60);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsl(258, 88%, 66%, 0.25));
  --pill-background-hover: var(--tag-background-hover, hsl(258, 88%, 66%, 0.25));
  --pill-color: var(--tag-color, hsl(0 0% 85%));
  --pill-color-hover: var(--tag-color-hover, hsl(0 0% 85%));
  --pill-color-remove: var(--tag-color, hsl(0 0% 40%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(0 0% 70%));
  --pill-padding-x: var(--tag-padding-x, 0.5em);
  --pill-padding-y: var(--tag-padding-y, 0.15em);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(138, 92, 245, 0.25));
  border-radius: 4px;
  color: var(--pill-color, rgb(217, 217, 217));
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(29, 27, 34));
  color: var(--text-normal, rgb(217, 217, 217));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgb(29, 27, 34));
  border-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(32, 29, 37));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(217, 217, 217);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(32, 29, 37));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(217, 217, 217));
}

html[saved-theme="dark"] body abbr {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: var(--text-normal, rgb(217, 217, 217));
  padding-left: 0px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgb(34, 31, 40));
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
  color: var(--code-normal, rgb(217, 217, 217));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(217, 217, 217);
  border-left-color: rgb(217, 217, 217);
  border-right-color: rgb(217, 217, 217);
  border-top-color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body sup {
  color: rgb(217, 217, 217);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(138, 92, 245, 0.25));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(217, 217, 217));
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-active-hover: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*33%) / 0.3);
  --background-modifier-border: var(--color-base-30, hsl(258 25% 88%));
  --background-modifier-border-focus: var(--color-base-40, hsl(258 25% 74%));
  --background-modifier-border-hover: var(--color-base-35, hsl(258 25% 83%));
  --background-modifier-hover: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*33%) / 0.2);
  --background-primary-alt: var(--color-base-10, hsl(258 25% 98%));
  --background-secondary: var(--i-1, hsl(258 25% 97%));
  --background-secondary-alt: var(--color-base-05, hsl(258 25% 99%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(258 25% 98%));
  --bases-cards-shadow: 0 0 0 1px var(--i-editor-border);
  --bases-cards-shadow-hover: 0 0 0 1px var(--i-editor-border-hover);
  --bases-embed-border-color: var(--i-editor-border, hsl(258 25% 86%));
  --bases-embed-border-radius: var(--radius-s, 7px);
  --bases-embed-radius: 7px;
  --bases-table-border-color: var(--table-border-color, hsl(258 25% 86%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(258 25% 98%));
  --bases-table-group-background: var(--background-primary-alt, hsl(258 25% 98%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --bases-table-header-color: var(--text-normal, #222222);
  --bases-table-header-weight: var(--font-weight, 600);
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --blockquote-background-color: hsl(var(--color-accent-hsl), 0.1);
  --blockquote-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --bold-modifier: 300;
  --callout-border-width: 1px;
  --callout-content-padding: 1em;
  --callout-padding: var(--size-4-3) var(--size-4-3) var(--size-4-3) var(--size-4-6, 0);
  --callout-radius: var(--radius-s, 7px);
  --callout-title-padding: 0.5em 1em;
  --canvas-dot-pattern: var(--color-base-30, hsl(258 25% 88%));
  --checkbox-border-color: var(--checkbox-color, hsl(258, 88%, 66%));
  --checkbox-border-color-hover: var(--checkbox-color-hover, oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h));
  --checkbox-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --checkbox-color-hover: var(--interactive-accent-hover, oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h));
  --checkbox-radius: var(--radius-s, 50%);
  --checklist-done-color: var(--text-normal, #222222);
  --checklist-done-decoration: none;
  --code-background: var(--background-primary-alt, transparent);
  --code-border-color: var(--i-editor-border, hsl(258 25% 86%));
  --code-border-width: 1px;
  --code-bracket-background: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --code-radius: var(--radius-s, 7px);
  --collapse-icon-color: var(--color-accent, hsl(258, 88%, 66%));
  --collapse-icon-color-collapsed: var(--interactive-accent-hover, oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h));
  --color-base-05: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*1%));
  --color-base-10: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*2%));
  --color-base-100: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*87%));
  --color-base-20: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*4%));
  --color-base-25: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*11%));
  --color-base-30: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*12%));
  --color-base-35: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*17%));
  --color-base-40: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*26%));
  --color-base-50: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*33%));
  --color-base-60: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*56%));
  --color-base-70: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*64%));
  --divider-color: var(--background-modifier-border, hsl(258 25% 88%));
  --divider-color-hover: var(--interactive-accent, hsl(258, 88%, 66%));
  --dropdown-background-hover: var(--interactive-hover, hsl(258 25% 94%));
  --embed-border-bottom: 1px solid var(--i-editor-border);
  --embed-border-end: 1px solid var(--i-editor-border);
  --embed-border-start: 1px solid var(--i-editor-border);
  --embed-border-top: 1px solid var(--i-editor-border);
  --file-header-border: var(--border-width, 0) solid transparent;
  --footnote-divider-color: var(--metadata-divider-color, hsl(258 25% 88%));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(258 25% 67% / 0.18));
  --frame-right-space: 81px;
  --graph-line: var(--color-base-35, hsl(258 25% 83%));
  --graph-node: var(--color-base-70, hsl(258 25% 36%));
  --graph-node-focused: var(--color-accent, hsl(258, 88%, 66%));
  --graph-node-unresolved: var(--color-base-50, hsl(258 25% 67%));
  --h1-letter-spacing: 0;
  --h1-line-height: var(--line-height-normal, 1.5);
  --h1-size: var(--i-h1-size, 1.5em);
  --h1-weight: 600;
  --h2-letter-spacing: 0;
  --h2-line-height: var(--line-height-normal, 1.5);
  --h2-size: var(--i-h2-size, 1.4em);
  --h2-weight: 600;
  --h3-letter-spacing: 0;
  --h3-line-height: var(--line-height-normal, 1.5);
  --h3-size: var(--i-h3-size, 1.3em);
  --h3-weight: 600;
  --h4-letter-spacing: 0;
  --h4-line-height: var(--line-height-normal, 1.5);
  --h4-size: var(--i-h4-size, 1.2em);
  --h4-weight: 600;
  --h5-letter-spacing: 0;
  --h5-size: var(--i-h5-size, 1.1em);
  --h5-weight: 600;
  --h6-letter-spacing: 0;
  --h6-size: var(--i-h6-size, 1em);
  --heading-spacing: var(--p-spacing, 1.5rem);
  --highlight: var(--background-modifier-hover, hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*33%) / 0.2));
  --hr-color: var(--i-editor-border, hsl(258 25% 86%));
  --i-0: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*2%));
  --i-1: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*3%));
  --i-2: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*6%));
  --i-3: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*10%));
  --i-4: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*12%));
  --i-5: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*14%));
  --i-6: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*16%));
  --i-7: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*18%));
  --i-8: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*20%));
  --i-active-line-color: var(--color-accent, hsl(258, 88%, 66%));
  --i-active-line-highlight: oklch(from var(--i-active-line-color) 0.65 c h / 0.1);
  --i-active-line-highlight-inactive: oklch(from var(--i-active-line-highlight) l c h / 0.05);
  --i-border-radius: 8px;
  --i-bullet-color: var(--color-accent, hsl(258, 88%, 66%));
  --i-bullet-color-collapsed: var(--text-accent, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --i-bullet-color-hover: var(--interactive-accent-hover, oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h));
  --i-card-layout-border: var(--i-7, hsl(258 25% 82%));
  --i-card-radius: 8px;
  --i-card-radius-macos: 10px;
  --i-checkbox-shadow-hover: var(--i-2, hsl(258 25% 94%));
  --i-dk-custom-layout-s: 12%;
  --i-dk-folder-bg-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-dk-folder-name-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-dk-h1-h: 0;
  --i-dk-h6-h: 300;
  --i-dk-heading-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-dk-heading-highlighted-padding: 0;
  --i-dk-layout-border-l: 8%;
  --i-dk-layout-l: 8%;
  --i-editor-border: hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*var(--i-lt-border-l)));
  --i-editor-border-hover: hsl(from var(--i-editor-border) h s calc(l - 5 * var(--i-lt-l-multiplier)));
  --i-h1-size: 1.5em;
  --i-h2-size: calc(var(--i-h6-size) + (var(--i-h1-size) - var(--i-h6-size))*0.8);
  --i-h3-size: calc(var(--i-h6-size) + (var(--i-h1-size) - var(--i-h6-size))*0.6);
  --i-h4-size: calc(var(--i-h6-size) + (var(--i-h1-size) - var(--i-h6-size))*0.4);
  --i-h5-size: calc(var(--i-h6-size) + (var(--i-h1-size) - var(--i-h6-size))*0.2);
  --i-h6-size: 1em;
  --i-hr-style: solid;
  --i-image-border-color: var(--i-editor-border, hsl(258 25% 86%));
  --i-image-border-style: solid;
  --i-image-border-width: 0;
  --i-image-padding: 0;
  --i-inline-title-accent-bg: oklch(from var(--color-accent) 95% 8% h / 50%);
  --i-inline-title-accent-text-color: oklch(from var(--color-accent) 50% 50% h);
  --i-layout-border-color: hsl(var(--accent-h) var(--i-lt-layout-s) calc(100% - var(--i-lt-l-multiplier)*(var(--i-lt-layout-l) + var(--i-lt-layout-border-l))));
  --i-layout-color: hsl(var(--accent-h) var(--i-lt-layout-s) calc(100% - var(--i-lt-l-multiplier)*var(--i-lt-layout-l)));
  --i-link-bg-hover: var(--i-2, hsl(258 25% 94%));
  --i-link-underline-color: oklch(from var(--link-color) l c h / calc(var(--i-link-underline-opacity-multiplier)*0.25));
  --i-link-underline-offset: 0.1em;
  --i-link-underline-opacity-multiplier: 1;
  --i-link-underline-style: solid;
  --i-lt-border-l: 14%;
  --i-lt-custom-layout-s: 25%;
  --i-lt-folder-bg-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-lt-folder-name-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-lt-h1-h: 0;
  --i-lt-h6-h: 300;
  --i-lt-heading-accent: var(--color-accent, hsl(258, 88%, 66%));
  --i-lt-heading-highlighted-padding: 0;
  --i-lt-l-multiplier: 1;
  --i-lt-layout-border-l: 8%;
  --i-lt-layout-l: 12%;
  --i-lt-layout-s: var(--i-lt-s, 25%);
  --i-lt-s: 25%;
  --i-pattern-color: hsl(from var(--i-1) h s calc(100% - var(--i-lt-l-multiplier)*var(--i-pattern-lt-l)));
  --i-pattern-dk-l: 3%;
  --i-pattern-height: 10px;
  --i-pattern-line-width: 1px;
  --i-pattern-lt-l: 3%;
  --i-pattern-width: 10px;
  --i-properties-s: var(--accent-s, 88%);
  --i-s: var(--i-lt-s, 25%);
  --i-scrollbar-color: var(--i-5, hsl(258 25% 86%));
  --i-scrollbar-color-active: var(--i-7, hsl(258 25% 82%));
  --i-scrollbar-thumb-size: 4px;
  --i-scrollbar-track-size: 9px;
  --i-slider-thumb-shadow: 0 0 0 5px hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*50%) / 0.15);
  --i-spacing-below-headings: 0.3rem;
  --i-style-settings-h1-color: oklch(from var(--color-accent) 50% 50% h);
  --i-style-settings-h2-color: oklch(from var(--color-accent) 50% 50% calc(h + 60));
  --i-style-settings-h3-color: oklch(from var(--color-accent) 50% 50% calc(h + 60 * 2));
  --i-style-settings-h4-color: oklch(from var(--color-accent) 50% 50% calc(h + 60 * 3));
  --i-style-settings-h5-color: oklch(from var(--color-accent) 50% 50% calc(h + 60 * 4));
  --i-style-settings-h6-color: oklch(from var(--color-accent) 50% 50% calc(h + 60 * 5));
  --i-style-settings-heading-underline-color: oklch(from currentColor l c h / 0.25);
  --i-translucent-floating-nav-opacity: 92%;
  --icon-color: var(--text-normal, #222222);
  --icon-color-active: var(--color-accent, hsl(258, 88%, 66%));
  --icon-color-hover: var(--icon-color, #222222);
  --icon-opacity: 1;
  --indentation-guide-color: var(--i-editor-border, hsl(258 25% 86%));
  --indentation-guide-color-active: var(--i-editor-border-hover, hsl(from hsl(258 25% calc(100% - 1 * 14%)) h s calc(l - 5 * 1)));
  --inline-title-line-height: var(--h1-line-height, 1.5);
  --inline-title-size: var(--h1-size, 1.5em);
  --inline-title-weight: var(--h1-weight, 600);
  --input-shadow: inset 0 0 0 1px var(--background-modifier-border);
  --input-shadow-hover: inset 0 0 0 1px var(--background-modifier-border-hover);
  --interactive-accent: var(--color-accent, hsl(258, 88%, 66%));
  --interactive-accent-hover: oklch(from var(--color-accent) calc(l - 0.1) c h);
  --interactive-hover: var(--i-2, hsl(258 25% 94%));
  --light: var(--background-primary-alt, var(--color-base-10, hsl(258 25% 98%)));
  --lightgray: var(--background-secondary, var(--i-1, hsl(258 25% 97%)));
  --link-color: var(--text-accent, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --link-color-hover: var(--link-color, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --link-external-color: var(--text-accent, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --link-external-color-hover: var(--link-external-color, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --link-unresolved-color: var(--text-accent, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --list-marker-color: var(--color-accent, hsl(258, 88%, 66%));
  --list-marker-color-collapsed: var(--text-accent, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --list-marker-color-hover: var(--interactive-accent-hover, oklch(from hsl(258, 88%, 66%) calc(l - 0.1) c h));
  --menu-background: var(--background-secondary, hsl(258 25% 97%));
  --menu-border-color: var(--background-modifier-border-hover, hsl(258 25% 83%));
  --metadata-border-color: var(--background-modifier-border, hsl(258 25% 88%));
  --metadata-divider-color: var(--background-modifier-border, hsl(258 25% 88%));
  --metadata-input-background-active: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --modal-border-color: var(--background-modifier-border-hover, hsl(258 25% 83%));
  --nav-collapse-icon-color: var(--collapse-icon-color, hsl(258, 88%, 66%));
  --nav-indentation-guide-color: var(--i-4, hsl(258 25% 88%));
  --nav-item-background-active: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --nav-item-background-hover: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --nav-item-color: var(--text-normal, #222222);
  --nav-item-color-highlighted: var(--text-accent, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --nn-theme-file-selected-bg: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --nn-theme-file-tag-bg: var(--tag-background, hsl(258, 88%, 66%, 0.2));
  --nn-theme-file-tag-border-radius: var(--tag-radius, 4px);
  --nn-theme-file-tag-color: var(--tag-color, #222222);
  --nn-theme-mobile-toolbar-button-active-icon-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --nn-theme-mobile-toolbar-button-icon-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --nn-theme-nav-bg: #ffffff;
  --nn-theme-navitem-chevron-color: var(--nav-collapse-icon-color, hsl(258, 88%, 66%));
  --nn-theme-navitem-selected-bg: var(--background-modifier-hover, hsl(258 25% 67% / 0.18));
  --p-spacing: 1.5rem;
  --pill-border-color: var(--background-modifier-border, hsl(258 25% 88%));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsl(258 25% 83%));
  --pill-color-remove-hover: var(--text-muted, #5c5c5c);
  --pill-focus-left-adjust: 0;
  --pill-focus-width: 100%;
  --pill-radius: var(--radius-s, 4px);
  --prompt-border-color: var(--background-modifier-border-hover, hsl(258 25% 83%));
  --ribbon-background: var(--i-layout-color, hsl(258 25% 88%));
  --ribbon-background-collapsed: var(--ribbon-background, hsl(258 25% 88%));
  --ribbon-padding: var(--size-4-2) var(--size-4-1) var(--size-4-3, 8px 0 12px);
  --secondary: var(--text-accent, oklch(from var(--color-accent) 50% 35% h));
  --setting-items-background: var(--background-primary, #ffffff);
  --setting-items-border-color: var(--background-modifier-border, hsl(258 25% 88%));
  --setting-items-padding: var(--size-4-5, 0 0 20px 0);
  --setting-items-radius: var(--radius-l, 0);
  --shiki-code-background: var(--code-background, transparent);
  --shiki-code-block-border-radius: var(--code-radius, 7px);
  --shiki-code-block-spacing: var(--p-spacing, 1.5rem);
  --shiki-gutter-border-color: var(--background-modifier-border, hsl(258 25% 88%));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsl(258 25% 83%));
  --slider-track-background: var(--background-modifier-border, hsl(258 25% 88%));
  --status-bar-background: var(--titlebar-background, hsl(258 25% 98%));
  --status-bar-border-color: var(--divider-color, hsl(258 25% 88%));
  --status-bar-text-color: var(--text-normal, #222222);
  --tab-container-background: var(--titlebar-background, hsl(258 25% 98%));
  --tab-divider-color: var(--background-modifier-border-hover, hsl(258 25% 83%));
  --tab-outline-color: var(--divider-color, hsl(258 25% 88%));
  --tab-switcher-background: var(--background-secondary, hsl(258 25% 97%));
  --tab-text-color: var(--text-normal, #222222);
  --tab-text-color-active: var(--tab-text-color, #222222);
  --tab-text-color-focused: var(--tab-text-color, #222222);
  --tab-text-color-focused-active: var(--tab-text-color, #222222);
  --tab-text-color-focused-highlighted: var(--text-accent, oklch(from hsl(258, 88%, 66%) 50% 35% h));
  --table-add-button-border-color: var(--i-editor-border, hsl(258 25% 86%));
  --table-border-color: var(--i-editor-border, hsl(258 25% 86%));
  --table-column-min-width: 4ch;
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(258, 88%, 66%));
  --table-drag-handle-color: var(--color-accent, hsl(258, 88%, 66%));
  --table-header-background: var(--i-2, hsl(258 25% 94%));
  --table-header-background-hover: var(--table-header-background, hsl(258 25% 94%));
  --table-header-border-color: var(--table-border-color, hsl(258 25% 86%));
  --table-selection-border-color: var(--interactive-accent, hsl(258, 88%, 66%));
  --table-selection-border-radius: 0;
  --tag-background: hsl(var(--color-accent-hsl), 0.2);
  --tag-background-hover: var(--tag-background, hsl(258, 88%, 66%, 0.2));
  --tag-color: var(--text-normal, #222222);
  --tag-color-hover: var(--tag-color, #222222);
  --tag-padding-x: 0.5em;
  --tag-radius: var(--radius-s, 4px);
  --tertiary: var(--text-accent-hover, oklch(from var(--text-accent) calc(l - 0.15) c h));
  --text-accent: oklch(from var(--color-accent) 50% 35% h);
  --text-accent-hover: oklch(from var(--text-accent) calc(l - 0.15) c h);
  --textHighlight: var(--background-modifier-hover, hsl(var(--accent-h) var(--i-lt-s) calc(100% - var(--i-lt-l-multiplier)*33%) / 0.2));
  --titlebar-background: var(--i-0, hsl(258 25% 98%));
  --titlebar-background-focused: var(--titlebar-background, hsl(258 25% 98%));
  --titlebar-border-color: var(--background-modifier-border, hsl(258 25% 88%));
  --traffic-lights-offset-y: var(--header-height, 58px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-primary, #ffffff);
  background-color: var(--tab-container-background, rgb(221, 217, 232));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgb(255, 255, 255));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-primary, #ffffff);
  background-color: var(--tab-container-background, rgb(221, 217, 232));
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(138, 92, 245));
  border-color: rgb(138, 92, 245);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, oklch(0.5 0.14 292.489));
  outline: oklch(0.5 0.14 292.489) none 0px;
  text-decoration: underline oklch(0.5 0.14 292.489 / 0.25);
  text-decoration-color: var(--i-link-underline-color, oklch(0.5 0.14 292.489 / 0.25));
  text-decoration-style: var(--i-link-underline-style, solid);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, oklch(0.5 0.14 292.489));
  outline: oklch(0.5 0.14 292.489) none 0px;
  text-decoration: underline oklch(0.5 0.14 292.489 / 0.25);
  text-decoration-color: var(--i-link-underline-color, oklch(0.5 0.14 292.489 / 0.25));
  text-decoration-style: var(--i-link-underline-style, solid);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, oklch(0.5 0.14 292.489));
  outline: oklch(0.5 0.14 292.489) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: var(--blockquote-background-color, rgba(138, 92, 245, 0.1));
}`,
    tables: `html[saved-theme="light"] body table {
  margin-bottom: 16px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(216, 210, 228);
  border-left-color: rgb(216, 210, 228);
  border-right-color: rgb(216, 210, 228);
  border-top-color: rgb(216, 210, 228);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(216, 210, 228);
  border-left-color: rgb(216, 210, 228);
  border-right-color: rgb(216, 210, 228);
  border-top-color: rgb(216, 210, 228);
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(238, 236, 244));
}`,
    code: `html[saved-theme="light"] body code {
  --code-radius: var(--radius-s, 4px);
  background-color: var(--code-background, rgb(238, 236, 244));
  border-bottom-color: rgb(216, 210, 228);
  border-left-color: rgb(216, 210, 228);
  border-right-color: rgb(216, 210, 228);
  border-top-color: rgb(216, 210, 228);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  padding-bottom: 21px;
  padding-top: 21px;
}`,
    images: `html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, transparent);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

html[saved-theme="light"] body img {
  border-bottom-color: oklch(0.5 0.2 292.489);
  border-left-color: oklch(0.5 0.2 292.489);
  border-right-color: oklch(0.5 0.2 292.489);
  border-top-color: oklch(0.5 0.2 292.489);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(249, 249, 251));
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(216, 210, 228);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(216, 210, 228);
  border-left-width: 1px;
  border-right-color: rgb(216, 210, 228);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(216, 210, 228);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-style: solid;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(34, 34, 34);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(34, 34, 34);
  text-decoration-line: none;
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgMG0tOS41LS43NWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgMG0tOS41LS43NWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuOTIxIDEuNTc1LS4zNSA3QTEuNSAxLjUgMCAwIDEgOS4wNzMgMTBINi45MjdhMS41IDEuNSAwIDAgMS0xLjQ5OC0xLjQyNWwtLjM1LTdBMS41IDEuNSAwIDAgMSA2LjU3NyAwaDIuODQ2YTEuNSAxLjUgMCAwIDEgMS40OTggMS41NzVNOCAxMWEyLjUgMi41IDAgMSAxIDAgNSAyLjUgMi41IDAgMCAxIDAtNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJtMTAuOTIxIDEuNTc1LS4zNSA3QTEuNSAxLjUgMCAwIDEgOS4wNzMgMTBINi45MjdhMS41IDEuNSAwIDAgMS0xLjQ5OC0xLjQyNWwtLjM1LTdBMS41IDEuNSAwIDAgMSA2LjU3NyAwaDIuODQ2YTEuNSAxLjUgMCAwIDEgMS40OTggMS41NzVNOCAxMWEyLjUgMi41IDAgMSAxIDAgNSAyLjUgMi41IDAgMCAxIDAtNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9nPjxkZWZzPjxjbGlwUGF0aCBpZD0iYSI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMCAwaDE2djE2SDB6Ii8+PC9jbGlwUGF0aD48L2RlZnM+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjQ0IDQuNTRjLjQzLS4zNTQuOTk0LS41NjUgMS41Ni0uNTY1IDEuMjE3IDAgMi4zNC44MiAyLjM0IDIuMTQgMCAuMzc3LS4wNzkuNzQ1LS4yOTggMS4xLS4yMDguMzM5LS41MTMuNjE0LS44NzUuODY3LS4yMTcuMTUzLS4zMjYuMjU3LS4zNzkuMzI4LS4wMzguMDUyLS4wMzguMDctLjAzOC4wODlhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjc5NC41NDQtMS4yODYgMS4wNTYtMS42NDUuMjgtLjE5Ni40MDItLjMzMi40Ni0uNDI1YS41NC41NCAwIDAgMCAuMDczLS4zMTNjMC0uMy0uMjQzLS42NDEtLjgzOS0uNjQxYTEgMSAwIDAgMC0uNjA4LjIyNGMtLjE2Ny4xMzctLjIzMS4yODYtLjIzMS40MTdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjY3My4zNDUtMS4yMi43OC0xLjU3N005IDExYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjQ0IDQuNTRjLjQzLS4zNTQuOTk0LS41NjUgMS41Ni0uNTY1IDEuMjE3IDAgMi4zNC44MiAyLjM0IDIuMTQgMCAuMzc3LS4wNzkuNzQ1LS4yOTggMS4xLS4yMDguMzM5LS41MTMuNjE0LS44NzUuODY3LS4yMTcuMTUzLS4zMjYuMjU3LS4zNzkuMzI4LS4wMzguMDUyLS4wMzguMDctLjAzOC4wODlhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjc5NC41NDQtMS4yODYgMS4wNTYtMS42NDUuMjgtLjE5Ni40MDItLjMzMi40Ni0uNDI1YS41NC41NCAwIDAgMCAuMDczLS4zMTNjMC0uMy0uMjQzLS42NDEtLjgzOS0uNjQxYTEgMSAwIDAgMC0uNjA4LjIyNGMtLjE2Ny4xMzctLjIzMS4yODYtLjIzMS40MTdhLjc1Ljc1IDAgMCAxLTEuNSAwYzAtLjY3My4zNDUtMS4yMi43OC0xLjU3N005IDExYTEgMSAwIDEgMS0yIDAgMSAxIDAgMCAxIDIgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41ODkgOS42N0EyLjc1IDIuNzUgMCAwIDEgMS41IDd2LS4yNUEyLjc1IDIuNzUgMCAwIDEgNC4yNSA0aC4yNWEyLjc0NyAyLjc0NyAwIDAgMSAyLjc0OCAyLjY1N3YuMDAzaC4wMDJWN3EwIC4xOTctLjAyNy4zODYtLjAzLjM5Mi0uMDkuNzdhOCA4IDAgMCAxLS41NTkgMS45MTggNy4yIDcuMiAwIDAgMS0yLjE2MiAyLjgwMWwtLjA5OC4wNzZBLjI0LjI0IDAgMCAxIDQuMTcgMTNhLjI1LjI1IDAgMCAxLS4yMi0uMzY3IDE3IDE3IDAgMCAwIC42NS0xLjM4NGMuMTk3LS40NzQuMzk2LTEuMDEzLjU1Ny0xLjU3OGEyLjcgMi43IDAgMCAxLS42NTcuMDc5aC0uMjVxLS4zNDMtLjAwMS0uNjYxLS4wOG0tLjU0OSAxLjQwNUE0LjI1IDQuMjUgMCAwIDEgMCA3di0uMjVBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMi41aC4yNWMxLjQ1MiAwIDIuNzMzLjcyOCAzLjUgMS44MzhBNC4yNSA0LjI1IDAgMCAxIDExLjUgMi41aC4yNUE0LjI1IDQuMjUgMCAwIDEgMTYgNi42NjRWN3EwIC4yNzUtLjAzNS41NDNjLS4yMDcgMi42Mi0xLjM1OCA0Ljk2Ni0zLjQ4OCA2LjU5OWExLjc0IDEuNzQgMCAwIDEtMS4wNTcuMzU4Yy0xLjM0MSAwLTIuMTQ2LTEuNDI1LTEuNTQ4LTIuNTY0LjExMS0uMjExLjI2LS41MDguNDE4LS44NmE0LjI1IDQuMjUgMCAwIDEtMi4wMDUtMS4yOTcgOC43NiA4Ljc2IDAgMCAxLTMuMDU4IDQuMzYzIDEuNzQgMS43NCAwIDAgMS0xLjA1Ny4zNThjLTEuMzQxIDAtMi4xNDYtMS40MjUtMS41NDgtMi41NjQuMTExLS4yMTEuMjYtLjUwOC40MTgtLjg2bTcuOC0xLjQwNnEuMzE4LjA3OS42NjEuMDhoLjI1YTIuOCAyLjggMCAwIDAgLjY1Ny0uMDc5IDE0IDE0IDAgMCAxLS42OCAxLjg2NSAxOCAxOCAwIDAgMS0uNTI3IDEuMDk3LjI1LjI1IDAgMCAwIC4yMi4zNjcuMjQuMjQgMCAwIDAgLjE0NC0uMDQ5bC4wOTgtLjA3NnEuNDUyLS4zNTguODMyLS43NjhhNy4yIDcuMiAwIDAgMCAxLjM5LTIuMTcyIDggOCAwIDAgMCAuNDk4LTEuNzc5IDkgOSAwIDAgMCAuMDkxLS43N3EuMDI3LS4xOS4wMjctLjM4NnYtLjMzOUgxNC41di0uMDA0QTIuNzQ3IDIuNzQ3IDAgMCAwIDExLjc1IDRoLS4yNTFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVY3YzAgMS4yOS44OSAyLjM3NCAyLjA4OSAyLjY3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBjbGlwLXBhdGg9InVybCgjYSkiPjxwYXRoIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMy41ODkgOS42N0EyLjc1IDIuNzUgMCAwIDEgMS41IDd2LS4yNUEyLjc1IDIuNzUgMCAwIDEgNC4yNSA0aC4yNWEyLjc0NyAyLjc0NyAwIDAgMSAyLjc0OCAyLjY1N3YuMDAzaC4wMDJWN3EwIC4xOTctLjAyNy4zODYtLjAzLjM5Mi0uMDkuNzdhOCA4IDAgMCAxLS41NTkgMS45MTggNy4yIDcuMiAwIDAgMS0yLjE2MiAyLjgwMWwtLjA5OC4wNzZBLjI0LjI0IDAgMCAxIDQuMTcgMTNhLjI1LjI1IDAgMCAxLS4yMi0uMzY3IDE3IDE3IDAgMCAwIC42NS0xLjM4NGMuMTk3LS40NzQuMzk2LTEuMDEzLjU1Ny0xLjU3OGEyLjcgMi43IDAgMCAxLS42NTcuMDc5aC0uMjVxLS4zNDMtLjAwMS0uNjYxLS4wOG0tLjU0OSAxLjQwNUE0LjI1IDQuMjUgMCAwIDEgMCA3di0uMjVBNC4yNSA0LjI1IDAgMCAxIDQuMjUgMi41aC4yNWMxLjQ1MiAwIDIuNzMzLjcyOCAzLjUgMS44MzhBNC4yNSA0LjI1IDAgMCAxIDExLjUgMi41aC4yNUE0LjI1IDQuMjUgMCAwIDEgMTYgNi42NjRWN3EwIC4yNzUtLjAzNS41NDNjLS4yMDcgMi42Mi0xLjM1OCA0Ljk2Ni0zLjQ4OCA2LjU5OWExLjc0IDEuNzQgMCAwIDEtMS4wNTcuMzU4Yy0xLjM0MSAwLTIuMTQ2LTEuNDI1LTEuNTQ4LTIuNTY0LjExMS0uMjExLjI2LS41MDguNDE4LS44NmE0LjI1IDQuMjUgMCAwIDEtMi4wMDUtMS4yOTcgOC43NiA4Ljc2IDAgMCAxLTMuMDU4IDQuMzYzIDEuNzQgMS43NCAwIDAgMS0xLjA1Ny4zNThjLTEuMzQxIDAtMi4xNDYtMS40MjUtMS41NDgtMi41NjQuMTExLS4yMTEuMjYtLjUwOC40MTgtLjg2bTcuOC0xLjQwNnEuMzE4LjA3OS42NjEuMDhoLjI1YTIuOCAyLjggMCAwIDAgLjY1Ny0uMDc5IDE0IDE0IDAgMCAxLS42OCAxLjg2NSAxOCAxOCAwIDAgMS0uNTI3IDEuMDk3LjI1LjI1IDAgMCAwIC4yMi4zNjcuMjQuMjQgMCAwIDAgLjE0NC0uMDQ5bC4wOTgtLjA3NnEuNDUyLS4zNTguODMyLS43NjhhNy4yIDcuMiAwIDAgMCAxLjM5LTIuMTcyIDggOCAwIDAgMCAuNDk4LTEuNzc5IDkgOSAwIDAgMCAuMDkxLS43N3EuMDI3LS4xOS4wMjctLjM4NnYtLjMzOUgxNC41di0uMDA0QTIuNzQ3IDIuNzQ3IDAgMCAwIDExLjc1IDRoLS4yNTFhMi43NSAyLjc1IDAgMCAwLTIuNzUgMi43NVY3YzAgMS4yOS44OSAyLjM3NCAyLjA4OSAyLjY3IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PGRlZnM+PGNsaXBQYXRoIGlkPSJhIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0wIDBoMTZ2MTZIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02Ljg4Ni43NzNDNy4yOS0uMjMxIDguNzEtLjIzMSA5LjExNC43NzNsMS40NzIgMy42NjcgMy45NDMuMjY4YzEuMDguMDczIDEuNTE4IDEuNDI0LjY4OCAyLjExOEwxMi4xODUgOS4zNmwuOTY0IDMuODMyYy4yNjQgMS4wNS0uODg2IDEuODg0LTEuODAyIDEuMzFMOCAxMi40bC0zLjM0NyAyLjEwMWMtLjkxNi41NzUtMi4wNjYtLjI2LTEuODAyLTEuMzA5bC45NjQtMy44MzJMLjc4MyA2LjgyNmMtLjgzLS42OTQtLjM5MS0yLjA0NS42ODgtMi4xMThsMy45NDMtLjI2OHoiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik02Ljg4Ni43NzNDNy4yOS0uMjMxIDguNzEtLjIzMSA5LjExNC43NzNsMS40NzIgMy42NjcgMy45NDMuMjY4YzEuMDguMDczIDEuNTE4IDEuNDI0LjY4OCAyLjExOEwxMi4xODUgOS4zNmwuOTY0IDMuODMyYy4yNjQgMS4wNS0uODg2IDEuODg0LTEuODAyIDEuMzFMOCAxMi40bC0zLjM0NyAyLjEwMWMtLjkxNi41NzUtMi4wNjYtLjI2LTEuODAyLTEuMzA5bC45NjQtMy44MzJMLjc4MyA2LjgyNmMtLjgzLS42OTQtLjM5MS0yLjA0NS42ODgtMi4xMThsMy45NDMtLjI2OHoiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgNS40OTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNEExLjUgMS41IDAgMCAwIDMgNS41djFoMTB2LTFBMS41IDEuNSAwIDAgMCAxMS41IDR2Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY0SDZ2Ljc0N2EuNzUuNzUgMCAwIDEtLjc1Ljc1TTEwIDIuNUg2di0uNzUyYS43NS43NSAwIDEgMC0xLjUgMFYyLjVhMyAzIDAgMCAwLTMgM3Y2YTMgMyAwIDAgMCAzIDNoN2EzIDMgMCAwIDAgMy0zdi02YTMgMyAwIDAgMC0zLTN2LS43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTMgOHYzLjVBMS41IDEuNSAwIDAgMCA0LjUgMTNoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTUuMjUgNS40OTdhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNEExLjUgMS41IDAgMCAwIDMgNS41djFoMTB2LTFBMS41IDEuNSAwIDAgMCAxMS41IDR2Ljc1YS43NS43NSAwIDAgMS0xLjUgMFY0SDZ2Ljc0N2EuNzUuNzUgMCAwIDEtLjc1Ljc1TTEwIDIuNUg2di0uNzUyYS43NS43NSAwIDEgMC0xLjUgMFYyLjVhMyAzIDAgMCAwLTMgM3Y2YTMgMyAwIDAgMCAzIDNoN2EzIDMgMCAwIDAgMy0zdi02YTMgMyAwIDAgMC0zLTN2LS43NWEuNzUuNzUgMCAwIDAtMS41IDB6TTMgOHYzLjVBMS41IDEuNSAwIDAgMCA0LjUgMTNoN2ExLjUgMS41IDAgMCAwIDEuNS0xLjVWOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkgMTMuOTA0IDUuMjUgMTAuNzUgMi4wOTYgOC43MWEyLjQgMi40IDAgMCAxIC41LTQuMjc4bDkuMjczLTMuMjk2YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuOTk2IDIuOTk1TDEzLjQ1IDMuNjNhLjg0NC44NDQgMCAwIDAtMS4wOC0xLjA4TDMuMSA1Ljg0NmEuOS45IDAgMCAwLS4xOSAxLjYwNGwyLjc4IDEuNzk5IDMuMjc5LTMuMjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNjFMNi43NSAxMC4zMWwxLjc5OSAyLjc3OWEuOS45IDAgMCAwIDEuNjA0LS4xODhsMy4yOTctOS4yNzIgMS40MTMuNTAyLTMuMjk2IDkuMjczYTIuNCAyLjQgMCAwIDEtNC4yNzcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMjkgMTMuOTA0IDUuMjUgMTAuNzUgMi4wOTYgOC43MWEyLjQgMi40IDAgMCAxIC41LTQuMjc4bDkuMjczLTMuMjk2YTIuMzQ2IDIuMzQ2IDAgMCAxIDIuOTk2IDIuOTk1TDEzLjQ1IDMuNjNhLjg0NC44NDQgMCAwIDAtMS4wOC0xLjA4TDMuMSA1Ljg0NmEuOS45IDAgMCAwLS4xOSAxLjYwNGwyLjc4IDEuNzk5IDMuMjc5LTMuMjhhLjc1Ljc1IDAgMSAxIDEuMDYgMS4wNjFMNi43NSAxMC4zMWwxLjc5OSAyLjc3OWEuOS45IDAgMCAwIDEuNjA0LS4xODhsMy4yOTctOS4yNzIgMS40MTMuNTAyLTMuMjk2IDkuMjczYTIuNCAyLjQgMCAwIDEtNC4yNzcuNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY2LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY2LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOEMxMDkuNzQsMjA0LjE2LDMyLDE1NS42OSwzMiwxMDJBNDYuMDYsNDYuMDYsMCwwLDEsNzgsNTZjMTkuNDUsMCwzNS43OCwxMC4zNiw0Mi42LDI3YTgsOCwwLDAsMCwxNC44LDBjNi44Mi0xNi42NywyMy4xNS0yNyw0Mi42LTI3YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI0LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOFYxMDRhNDgsNDgsMCwwLDEsNDEuNjEtNDcuNTZBODMuODUsODMuODUsMCwwLDEsMTc4LDU2YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI1LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0xNzgsNDBjLTIwLjY1LDAtMzguNzMsOC44OC01MCwyMy44OUMxMTYuNzMsNDguODgsOTguNjUsNDAsNzgsNDBhNjIuMDcsNjIuMDcsMCwwLDAtNjIsNjJjMCw3MCwxMDMuNzksMTI2LjY3LDEwOC4yMSwxMjlhOCw4LDAsMCwwLDcuNTgsMEMxMzYuMjEsMjI4LjY3LDI0MCwxNzIsMjQwLDEwMkE2Mi4wNyw2Mi4wNywwLDAsMCwxNzgsNDBaTTEyOCwyMTQuOFYxMDRhNDgsNDgsMCwwLDEsNDEuNjEtNDcuNTZBODMuODUsODMuODUsMCwwLDEsMTc4LDU2YTQ2LjA2LDQ2LjA2LDAsMCwxLDQ2LDQ2QzIyNCwxNTUuNjEsMTQ2LjI1LDIwNC4xNSwxMjgsMjE0LjhaIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgMjU2IiBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGQ9Ik0yNDAsMTAyYzAsNzAtMTAzLjc5LDEyNi42Ni0xMDguMjEsMTI5YTgsOCwwLDAsMS03LjU4LDBDMTE5Ljc5LDIyOC42NiwxNiwxNzIsMTYsMTAyQTYyLjA3LDYyLjA3LDAsMCwxLDc4LDQwYzIwLjY1LDAsMzguNzMsOC44OCw1MCwyMy44OUMxMzkuMjcsNDguODgsMTU3LjM1LDQwLDE3OCw0MEE2Mi4wNyw2Mi4wNywwLDAsMSwyNDAsMTAyWiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0uNzUtOS41YS43NS43NSAwIDAgMC0xLjUgMHYxLjc1SDUuNWEuNzUuNzUgMCAxIDAgMCAxLjVoMS43NXYxLjc1YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1aDEuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDguNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0uNzUtOS41YS43NS43NSAwIDAgMC0xLjUgMHYxLjc1SDUuNWEuNzUuNzUgMCAxIDAgMCAxLjVoMS43NXYxLjc1YS43NS43NSAwIDAgMCAxLjUgMFY4Ljc1aDEuNzVhLjc1Ljc1IDAgMCAwIDAtMS41SDguNzV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE01LjUgNy4yNWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE01LjUgNy4yNWEuNzUuNzUgMCAxIDAgMCAxLjVoNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjUzIDUuNDdhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDggNS40NyA5LjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2bDEuNDcgMS40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDkuMDYgOGwxLjQ3LTEuNDdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkw4IDYuOTR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNE02LjUzIDUuNDdhLjc1Ljc1IDAgMCAwLTEuMDYgMS4wNkw2Ljk0IDggNS40NyA5LjQ3YS43NS43NSAwIDEgMCAxLjA2IDEuMDZMOCA5LjA2bDEuNDcgMS40N2EuNzUuNzUgMCAxIDAgMS4wNi0xLjA2TDkuMDYgOGwxLjQ3LTEuNDdhLjc1Ljc1IDAgMSAwLTEuMDYtMS4wNkw4IDYuOTR6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAxMS45MzdWMTNhLjUuNSAwIDAgMCAuNS41aDdhMS41IDEuNSAwIDAgMCAxLjUtMS41di0uNDAxQTMgMyAwIDAgMSAxMSAxMkg0cS0uMjYgMC0uNS0uMDYzTTIgMTBWM3EwLS4xMDMuMDEtLjIwNGEyIDIgMCAwIDEgLjY3Ni0xLjMwNEEyIDIgMCAwIDEgNCAxaDdhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNINGEyIDIgMCAwIDEtMi0yem0xLjUgMGEuNS41IDAgMCAwIC41LjVoN0ExLjUgMS41IDAgMCAwIDEyLjUgOVY0cTAtLjE1Ni0uMDMtLjMwMkExLjUgMS41IDAgMCAwIDExIDIuNUg0YS41LjUgMCAwIDAtLjUuNXptMi00Ljc1YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuNzUuNzUgMCAwIDEtLjc1LS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAxMS45MzdWMTNhLjUuNSAwIDAgMCAuNS41aDdhMS41IDEuNSAwIDAgMCAxLjUtMS41di0uNDAxQTMgMyAwIDAgMSAxMSAxMkg0cS0uMjYgMC0uNS0uMDYzTTIgMTBWM3EwLS4xMDMuMDEtLjIwNGEyIDIgMCAwIDEgLjY3Ni0xLjMwNEEyIDIgMCAwIDEgNCAxaDdhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNINGEyIDIgMCAwIDEtMi0yem0xLjUgMGEuNS41IDAgMCAwIC41LjVoN0ExLjUgMS41IDAgMCAwIDEyLjUgOVY0cTAtLjE1Ni0uMDMtLjMwMkExLjUgMS41IDAgMCAwIDExIDIuNUg0YS41LjUgMCAwIDAtLjUuNXptMi00Ljc1YS43NS43NSAwIDAgMSAuNzUtLjc1aDMuNWEuNzUuNzUgMCAwIDEgMCAxLjVoLTMuNWEuNzUuNzUgMCAwIDEtLjc1LS43NSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxLjVhMyAzIDAgMCAxIDMgM3Y4LjU0NmExLjQ1NCAxLjQ1NCAwIDAgMS0yLjQxMSAxLjA5NEw4IDExbC0zLjU4OSAzLjE0QTEuNDU0IDEuNDU0IDAgMCAxIDIgMTMuMDQ2VjQuNWEzIDMgMCAwIDEgMy0zeiIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMSAxLjVhMyAzIDAgMCAxIDMgM3Y4LjU0NmExLjQ1NCAxLjQ1NCAwIDAgMS0yLjQxMSAxLjA5NEw4IDExbC0zLjU4OSAzLjE0QTEuNDU0IDEuNDU0IDAgMCAxIDIgMTMuMDQ2VjQuNWEzIDMgMCAwIDEgMy0zeiIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOSAxNC4zMTVhMS4zOCAxLjM4IDAgMCAxLTIuNTQyLS45ODRMNy4wNyAxMEgzLjEzYTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAybC41IDd6bTQuMzUyLTUuNzYyYS43NS43NSAwIDEgMCAxLjQ5Ni0uMTA2bC0uNS03YS43NS43NSAwIDAgMC0xLjQ5Ni4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTguOSAxNC4zMTVhMS4zOCAxLjM4IDAgMCAxLTIuNTQyLS45ODRMNy4wNyAxMEgzLjEzYTIgMiAwIDAgMS0xLjkyNy0yLjUzNWwuODc5LTMuMTYyQTQgNCAwIDAgMSA2LjQwNCAxLjRMMTEuNSAybC41IDd6bTQuMzUyLTUuNzYyYS43NS43NSAwIDEgMCAxLjQ5Ni0uMTA2bC0uNS03YS43NS43NSAwIDAgMC0xLjQ5Ni4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMWE3IDcgMCAxIDAgMCAxNEE3IDcgMCAwIDAgOCAxTTYuMDMgNi43MmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDIuNSAyLjVhLjc1Ljc1IDAgMCAwIDEuMDYgMGwyLjUtMi41YS43NS43NSAwIDEgMC0xLjA2LTEuMDZMOCA4LjY5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMWE3IDcgMCAxIDAgMCAxNEE3IDcgMCAwIDAgOCAxTTYuMDMgNi43MmEuNzUuNzUgMCAwIDAtMS4wNiAxLjA2bDIuNSAyLjVhLjc1Ljc1IDAgMCAwIDEuMDYgMGwyLjUtMi41YS43NS43NSAwIDEgMC0xLjA2LTEuMDZMOCA4LjY5eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNDUyIDYuODY0IDEuMTMtMi4xNzNhMzIgMzIgMCAwIDEgMS44NzItMy4wOTVjLjk2NCAxLjA0NSAxLjkwNiAyLjMgMi42MTIgMy42MjIuNzQ4IDEuNDAyIDEuMTg0IDIuNzg5IDEuMTg0IDQuMDMyIDAgMS40MjctLjkwNCAyLjgzLTIuMTUzIDMuNjEzcS4wODgtLjM5OC4wOS0uODYzYzAtMS4yNTUtLjY3NC0yLjMzNi0xLjE0My0yLjk2M2E5IDkgMCAwIDAtMS4wMS0xLjEyNWwtLjAyNC0uMDItLjAwOC0uMDA4TDkgNy44OGwtLjAwMS0uMDAxQzguOTk2IDcuODggOC45OTYgNy44NzggOCA5YTcgNyAwIDAgMCAuOTg0IDEuMTMzYy4zNy41MzQuNzA0IDEuMi43MDQgMS44NjcgMCAuNzctLjMxMyAxLjI3Ni0uNjE4IDEuNTg3LS4xNTkuMTYyLS4yNzkuMzgtLjMxNC42YS44LjggMCAwIDAgMCAuMjY0cS4wMTcuMDk1LjA2LjE4MmMuMTEzLjIyNS4zNDMuMzcuNTk0LjM1IDIuODM2LS4yMzUgNS4zNC0yLjg3IDUuMzQtNS43MzMgMC0zLjE0OS0yLjE3Ny02LjUzOC00LjM1Ny04Ljg0NUExLjMgMS4zIDAgMCAwIDkuNDM1IDAgMS4zMiAxLjMyIDAgMCAwIDguMzUuNTU2IDM0IDM0IDAgMCAwIDYuMjUgNGwtLjk1NS0xLjMzNy0uMDE2LS4wMjJhLjk4Ni45ODYgMCAwIDAtMS41NzMuMDA0QzIuNjIgNC4xMjMgMS4yNSA2LjI0OSAxLjI1IDkuMjVjMCAyLjg2MyAyLjUwNCA1LjQ5OCA1LjM0IDUuNzMzLjI1LjAyLjQ4MS0uMTI1LjU5My0uMzVhLjcuNyAwIDAgMCAuMDYtLjE4Mi44LjggMCAwIDAgLjAwMS0uMjYzIDEuMTUgMS4xNSAwIDAgMC0uMzE0LS42MDFjLS4zMDUtLjMxLS42MTctLjgxNy0uNjE3LTEuNTg3IDAtLjY2Ni4zMzMtMS4zMzMuNzAzLTEuODY3bC4wOS0uMTI4QzcuNTQ0IDkuNDA1IDggOSA4IDlsLS45OTctMS4xMkg3bC0uMDAzLjAwMy0uMDA4LjAwNy0uMDI0LjAyMS0uMDczLjA3YTkgOSAwIDAgMC0uOTM3IDEuMDU2Yy0uNDcuNjI2LTEuMTQzIDEuNzA3LTEuMTQzIDIuOTYyIDAgLjMxLjAzMy41OTguMDkuODYzQzMuNjU0IDEyLjA4IDIuNzUgMTAuNjc3IDIuNzUgOS4yNWMwLTIuMTcxLjg0Ny0zLjgxMiAxLjc0NS01LjEyNmwuNTM0Ljc0OHpNOCA5bC45OTctMS4xMjFMOCA2Ljk5M2wtLjk5Ny44ODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTYuNDUyIDYuODY0IDEuMTMtMi4xNzNhMzIgMzIgMCAwIDEgMS44NzItMy4wOTVjLjk2NCAxLjA0NSAxLjkwNiAyLjMgMi42MTIgMy42MjIuNzQ4IDEuNDAyIDEuMTg0IDIuNzg5IDEuMTg0IDQuMDMyIDAgMS40MjctLjkwNCAyLjgzLTIuMTUzIDMuNjEzcS4wODgtLjM5OC4wOS0uODYzYzAtMS4yNTUtLjY3NC0yLjMzNi0xLjE0My0yLjk2M2E5IDkgMCAwIDAtMS4wMS0xLjEyNWwtLjAyNC0uMDItLjAwOC0uMDA4TDkgNy44OGwtLjAwMS0uMDAxQzguOTk2IDcuODggOC45OTYgNy44NzggOCA5YTcgNyAwIDAgMCAuOTg0IDEuMTMzYy4zNy41MzQuNzA0IDEuMi43MDQgMS44NjcgMCAuNzctLjMxMyAxLjI3Ni0uNjE4IDEuNTg3LS4xNTkuMTYyLS4yNzkuMzgtLjMxNC42YS44LjggMCAwIDAgMCAuMjY0cS4wMTcuMDk1LjA2LjE4MmMuMTEzLjIyNS4zNDMuMzcuNTk0LjM1IDIuODM2LS4yMzUgNS4zNC0yLjg3IDUuMzQtNS43MzMgMC0zLjE0OS0yLjE3Ny02LjUzOC00LjM1Ny04Ljg0NUExLjMgMS4zIDAgMCAwIDkuNDM1IDAgMS4zMiAxLjMyIDAgMCAwIDguMzUuNTU2IDM0IDM0IDAgMCAwIDYuMjUgNGwtLjk1NS0xLjMzNy0uMDE2LS4wMjJhLjk4Ni45ODYgMCAwIDAtMS41NzMuMDA0QzIuNjIgNC4xMjMgMS4yNSA2LjI0OSAxLjI1IDkuMjVjMCAyLjg2MyAyLjUwNCA1LjQ5OCA1LjM0IDUuNzMzLjI1LjAyLjQ4MS0uMTI1LjU5My0uMzVhLjcuNyAwIDAgMCAuMDYtLjE4Mi44LjggMCAwIDAgLjAwMS0uMjYzIDEuMTUgMS4xNSAwIDAgMC0uMzE0LS42MDFjLS4zMDUtLjMxLS42MTctLjgxNy0uNjE3LTEuNTg3IDAtLjY2Ni4zMzMtMS4zMzMuNzAzLTEuODY3bC4wOS0uMTI4QzcuNTQ0IDkuNDA1IDggOSA4IDlsLS45OTctMS4xMkg3bC0uMDAzLjAwMy0uMDA4LjAwNy0uMDI0LjAyMS0uMDczLjA3YTkgOSAwIDAgMC0uOTM3IDEuMDU2Yy0uNDcuNjI2LTEuMTQzIDEuNzA3LTEuMTQzIDIuOTYyIDAgLjMxLjAzMy41OTguMDkuODYzQzMuNjU0IDEyLjA4IDIuNzUgMTAuNjc3IDIuNzUgOS4yNWMwLTIuMTcxLjg0Ny0zLjgxMiAxLjc0NS01LjEyNmwuNTM0Ljc0OHpNOCA5bC45OTctMS4xMjFMOCA2Ljk5M2wtLjk5Ny44ODZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLTkuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNOCA3Ljc1YS43NS43NSAwIDAgMSAuNzUuNzVWMTFhLjc1Ljc1IDAgMCAxLTEuNSAwVjguNUEuNzUuNzUgMCAwIDEgOCA3Ljc1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLTkuNWExIDEgMCAxIDEtMiAwIDEgMSAwIDAgMSAyIDBNOCA3Ljc1YS43NS43NSAwIDAgMSAuNzUuNzVWMTFhLjc1Ljc1IDAgMCAxLTEuNSAwVjguNUEuNzUuNzUgMCAwIDEgOCA3Ljc1IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjYgMTUuMTA5YTQgNCAwIDAgMCAzLjQ4IDBsLjEzLS4wNjNhMiAyIDAgMCAwIDEuMTMtMS44di0uNDY4YzAtMS4zNTIuNzc2LTIuNTU3IDEuNTQtMy42NzNhNS41IDUuNSAwIDEgMC05LjA4IDBDNC4yMjQgMTAuMjIxIDUgMTEuNDI2IDUgMTIuNzc5di40NjdhMiAyIDAgMCAwIDEuMTMgMS44MDF6bTIuODI4LTEuMzUuMTMtLjA2NGEuNS41IDAgMCAwIC4yODItLjQ1di0uNDY3cTAtLjI1NS4wMjUtLjVhNS4zMyA1LjMzIDAgMCAxLTMuMDUgMHEuMDI0LjI0NS4wMjUuNXYuNDY3YS41LjUgMCAwIDAgLjI4Mi40NWwuMTMuMDYzYTIuNSAyLjUgMCAwIDAgMi4xNzYgMG0tNC4zOS01LjUwMWMuMzk0LjU3Ni44OTEgMS4zMDIgMS4yNjMgMi4xNDhhMy43OSAzLjc5IDAgMCAwIDQuMDc4IDBjLjM3Mi0uODQ2Ljg2OS0xLjU3MiAxLjI2NC0yLjE0OGE0IDQgMCAxIDAtNi42MDUgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTggMy41QS43NS43NSAwIDAgMCA4IDVhMSAxIDAgMCAxIDEgMSAuNzUuNzUgMCAwIDAgMS41IDBBMi41IDIuNSAwIDAgMCA4IDMuNSIvPjwvZz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48ZyBmaWxsPSJjdXJyZW50Q29sb3IiPjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTYuMjYgMTUuMTA5YTQgNCAwIDAgMCAzLjQ4IDBsLjEzLS4wNjNhMiAyIDAgMCAwIDEuMTMtMS44di0uNDY4YzAtMS4zNTIuNzc2LTIuNTU3IDEuNTQtMy42NzNhNS41IDUuNSAwIDEgMC05LjA4IDBDNC4yMjQgMTAuMjIxIDUgMTEuNDI2IDUgMTIuNzc5di40NjdhMiAyIDAgMCAwIDEuMTMgMS44MDF6bTIuODI4LTEuMzUuMTMtLjA2NGEuNS41IDAgMCAwIC4yODItLjQ1di0uNDY3cTAtLjI1NS4wMjUtLjVhNS4zMyA1LjMzIDAgMCAxLTMuMDUgMHEuMDI0LjI0NS4wMjUuNXYuNDY3YS41LjUgMCAwIDAgLjI4Mi40NWwuMTMuMDYzYTIuNSAyLjUgMCAwIDAgMi4xNzYgMG0tNC4zOS01LjUwMWMuMzk0LjU3Ni44OTEgMS4zMDIgMS4yNjMgMi4xNDhhMy43OSAzLjc5IDAgMCAwIDQuMDc4IDBjLjM3Mi0uODQ2Ljg2OS0xLjU3MiAxLjI2NC0yLjE0OGE0IDQgMCAxIDAtNi42MDUgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PHBhdGggZD0iTTggMy41QS43NS43NSAwIDAgMCA4IDVhMSAxIDAgMCAxIDEgMSAuNzUuNzUgMCAwIDAgMS41IDBBMi41IDIuNSAwIDAgMCA4IDMuNSIvPjwvZz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjMxMyA3LjQ4OCA5IDcuNjUzdjUuMzdhLjUuNSAwIDAgMS0uMzUzLjQ3OGwtMS42Mi40OTgtLjAwNi4wMDFoLS4wMDhsLS4wMDctLjAwNi0uMDA1LS4wMDd2LS4wMDNMNyAxMy45NzlWNy42NTNsLTEuMzEzLS4xNjVhMS41IDEuNSAwIDAgMS0xLjI3MS0xLjE0NGwtLjU4OC0yLjVBMS41IDEuNSAwIDAgMSA1LjI4OCAyaDUuNDI0YTEuNSAxLjUgMCAwIDEgMS40NiAxLjg0NGwtLjU4OCAyLjVhMS41IDEuNSAwIDAgMS0xLjI3MSAxLjE0NG0yLjczMS0uOEEzIDMgMCAwIDEgMTAuNSA4Ljk3NnY0LjA0NmEyIDIgMCAwIDEtMS40MTIgMS45MTFsLTEuNjIuNDk5QTEuNTIgMS41MiAwIDAgMSA1LjUgMTMuOTc5VjguOTc3YTMgMyAwIDAgMS0yLjU0NC0yLjI5bC0uNTg4LTIuNUEzIDMgMCAwIDEgNS4yODguNWg1LjQyNGEzIDMgMCAwIDEgMi45MiAzLjY4N3pNNi43NSAzLjVhLjc1Ljc1IDAgMCAwIDAgMS41aDIuNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjMxMyA3LjQ4OCA5IDcuNjUzdjUuMzdhLjUuNSAwIDAgMS0uMzUzLjQ3OGwtMS42Mi40OTgtLjAwNi4wMDFoLS4wMDhsLS4wMDctLjAwNi0uMDA1LS4wMDd2LS4wMDNMNyAxMy45NzlWNy42NTNsLTEuMzEzLS4xNjVhMS41IDEuNSAwIDAgMS0xLjI3MS0xLjE0NGwtLjU4OC0yLjVBMS41IDEuNSAwIDAgMSA1LjI4OCAyaDUuNDI0YTEuNSAxLjUgMCAwIDEgMS40NiAxLjg0NGwtLjU4OCAyLjVhMS41IDEuNSAwIDAgMS0xLjI3MSAxLjE0NG0yLjczMS0uOEEzIDMgMCAwIDEgMTAuNSA4Ljk3NnY0LjA0NmEyIDIgMCAwIDEtMS40MTIgMS45MTFsLTEuNjIuNDk5QTEuNTIgMS41MiAwIDAgMSA1LjUgMTMuOTc5VjguOTc3YTMgMyAwIDAgMS0yLjU0NC0yLjI5bC0uNTg4LTIuNUEzIDMgMCAwIDEgNS4yODguNWg1LjQyNGEzIDMgMCAwIDEgMi45MiAzLjY4N3pNNi43NSAzLjVhLjc1Ljc1IDAgMCAwIDAgMS41aDIuNWEuNzUuNzUgMCAwIDAgMC0xLjV6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMTI1IDdhNC44NzUgNC44NzUgMCAxIDEgOS43NSAwYzAgMS44NjQtLjc3NCAyLjk2Mi0xLjY4NyAzLjgxNS0uMzg1LjM2LS43NjUuNjUtMS4xNy45NThsLS4zNjUuMjhhOSA5IDAgMCAwLS43ODEuNjY4Yy0uMjQzLjI0LS41MzUuNTc1LS43MyAxLjAxYS4zNC4zNCAwIDAgMS0uMDk1LjEzMmwtLjAxNS4wMDhzLS4wMS4wMDQtLjAzMi4wMDRsLS4wMzItLjAwMy0uMDE1LS4wMDlhLjM0LjM0IDAgMCAxLS4wOTUtLjEzMSAzLjQgMy40IDAgMCAwLS43My0xLjAxIDkgOSAwIDAgMC0uNzgxLS42NjhxLS4xODctLjE0NS0uMzY2LS4yOGExNSAxNSAwIDAgMS0xLjE2OS0uOTZDMy45IDkuOTYzIDMuMTI1IDguODY1IDMuMTI1IDdNMTQuNSA3YzAgMy40LTIuMDY2IDQuOTc1LTMuNTMgNi4wOTEtLjYzNC40ODUtMS4xNTYuODgyLTEuMzQ1IDEuMzA1QzkuMzU1IDE1IDguNzg4IDE1LjUgOCAxNS41cy0xLjM1NC0uNS0xLjYyNS0xLjEwNGMtLjE5LS40MjMtLjcxLS44Mi0xLjM0Ni0xLjMwNUMzLjU2NiAxMS45NzUgMS41IDEwLjM5OSAxLjUgN2E2LjUgNi41IDAgMCAxIDEzIDBtLTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME0xMSA3YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMTI1IDdhNC44NzUgNC44NzUgMCAxIDEgOS43NSAwYzAgMS44NjQtLjc3NCAyLjk2Mi0xLjY4NyAzLjgxNS0uMzg1LjM2LS43NjUuNjUtMS4xNy45NThsLS4zNjUuMjhhOSA5IDAgMCAwLS43ODEuNjY4Yy0uMjQzLjI0LS41MzUuNTc1LS43MyAxLjAxYS4zNC4zNCAwIDAgMS0uMDk1LjEzMmwtLjAxNS4wMDhzLS4wMS4wMDQtLjAzMi4wMDRsLS4wMzItLjAwMy0uMDE1LS4wMDlhLjM0LjM0IDAgMCAxLS4wOTUtLjEzMSAzLjQgMy40IDAgMCAwLS43My0xLjAxIDkgOSAwIDAgMC0uNzgxLS42NjhxLS4xODctLjE0NS0uMzY2LS4yOGExNSAxNSAwIDAgMS0xLjE2OS0uOTZDMy45IDkuOTYzIDMuMTI1IDguODY1IDMuMTI1IDdNMTQuNSA3YzAgMy40LTIuMDY2IDQuOTc1LTMuNTMgNi4wOTEtLjYzNC40ODUtMS4xNTYuODgyLTEuMzQ1IDEuMzA1QzkuMzU1IDE1IDguNzg4IDE1LjUgOCAxNS41cy0xLjM1NC0uNS0xLjYyNS0xLjEwNGMtLjE5LS40MjMtLjcxLS44Mi0xLjM0Ni0xLjMwNUMzLjU2NiAxMS45NzUgMS41IDEwLjM5OSAxLjUgN2E2LjUgNi41IDAgMCAxIDEzIDBtLTUgMGExLjUgMS41IDAgMSAxLTMgMCAxLjUgMS41IDAgMCAxIDMgME0xMSA3YTMgMyAwIDEgMS02IDAgMyAzIDAgMCAxIDYgMCIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMi4yNTV2LS4wMWMuMDAzLS4wMy4wMTMtLjE1Ny0uMzYxLS4zNUM5LjcwMyAxLjY2OCA4Ljk2NyAxLjUgOCAxLjVzLTEuNzAzLjE2OS0yLjEzOC4zOTRjLS4zNzUuMTk0LS4zNjUuMzItLjM2Mi4zNTF2LjAxYy0uMDAzLjAzLS4wMTMuMTU3LjM2Mi4zNUM2LjI5NyAyLjgzMiA3LjAzMyAzIDggM3MxLjcwMy0uMTY5IDIuMTM5LS4zOTRjLjM3NC0uMTk0LjM2NC0uMzIuMzYxLS4zNTFNMTIgMi4yNWMwIC43MzgtLjQzMyAxLjI5NC0xLjEzNiAxLjY2OWwuODI1IDIuMzFjMS41NTMuNDggMi41NjEgMS4zMiAyLjU2MSAyLjUyIDAgMS44NTQtMi40MDIgMi44NDgtNS41IDIuOTg1VjE1YS43NS43NSAwIDAgMS0xLjUgMHYtMy4yNjZjLTMuMDk4LS4xMzYtNS41LTEuMTMxLTUuNS0yLjk4NCAwLTEuMiAxLjAwOC0yLjA0IDIuNTYxLTIuNTJsLjgyNS0yLjMxMUM0LjQzMyAzLjU0NCA0IDIuOTg4IDQgMi4yNSA0IC43NSA1Ljc5IDAgOCAwczQgLjc1IDQgMi4yNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjUgMi4yNTV2LS4wMWMuMDAzLS4wMy4wMTMtLjE1Ny0uMzYxLS4zNUM5LjcwMyAxLjY2OCA4Ljk2NyAxLjUgOCAxLjVzLTEuNzAzLjE2OS0yLjEzOC4zOTRjLS4zNzUuMTk0LS4zNjUuMzItLjM2Mi4zNTF2LjAxYy0uMDAzLjAzLS4wMTMuMTU3LjM2Mi4zNUM2LjI5NyAyLjgzMiA3LjAzMyAzIDggM3MxLjcwMy0uMTY5IDIuMTM5LS4zOTRjLjM3NC0uMTk0LjM2NC0uMzIuMzYxLS4zNTFNMTIgMi4yNWMwIC43MzgtLjQzMyAxLjI5NC0xLjEzNiAxLjY2OWwuODI1IDIuMzFjMS41NTMuNDggMi41NjEgMS4zMiAyLjU2MSAyLjUyIDAgMS44NTQtMi40MDIgMi44NDgtNS41IDIuOTg1VjE1YS43NS43NSAwIDAgMS0xLjUgMHYtMy4yNjZjLTMuMDk4LS4xMzYtNS41LTEuMTMxLTUuNS0yLjk4NCAwLTEuMiAxLjAwOC0yLjA0IDIuNTYxLTIuNTJsLjgyNS0yLjMxMUM0LjQzMyAzLjU0NCA0IDIuOTg4IDQgMi4yNSA0IC43NSA1Ljc5IDAgOCAwczQgLjc1IDQgMi4yNSIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(213, 57, 132);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMSAxLjY4NWExLjM4IDEuMzggMCAwIDEgMi41NDIuOTg0TDguOTMgNmgzLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTQgNCA3ek0yLjc0OSA3LjQ0N2EuNzUuNzUgMCAxIDAtMS40OTYuMTA2bC41IDdhLjc1Ljc1IDAgMCAwIDEuNDk2LS4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTcuMSAxLjY4NWExLjM4IDEuMzggMCAwIDEgMi41NDIuOTg0TDguOTMgNmgzLjk0YTIgMiAwIDAgMSAxLjkyNyAyLjUzNWwtLjg3OSAzLjE2MkE0IDQgMCAwIDEgOS41OTYgMTQuNkw0LjUgMTQgNCA3ek0yLjc0OSA3LjQ0N2EuNzUuNzUgMCAxIDAtMS40OTYuMTA2bC41IDdhLjc1Ljc1IDAgMCAwIDEuNDk2LS4xMDZ6IiBjbGlwLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgME04Ljc1IDQuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdi4zMzlhMi41IDIuNSAwIDAgMC0xLjAwNy40NyAxLjk1IDEuOTUgMCAwIDAtLjc0IDEuNTQ2YzAgLjc2NC40NzQgMS4yNjUuOTQgMS41NTkuNDU2LjI4NyAxLjAwNy40NDggMS40NDguNTQ3LjQ2Mi4xMDIuODQzLjE5MSAxLjExOC4zNDEuMjI4LjEyNS4yNzUuMjI0LjI3NS4zNzYgMCAuMTAyLS4wNC4yMTctLjI0OC4zNDEtLjIyNC4xMzUtLjU3Ny4yMjktLjk4Mi4yMjktLjM0NCAwLS42ODMtLjExNC0uOTUzLS4yOS0uMjgxLS4xODQtLjQyLS4zODgtLjQ1Ny0uNTA2YS43NS43NSAwIDEgMC0xLjQzLjQ1MmMuMTcxLjU0My41OTEgMSAxLjA2OCAxLjMxLjI4NC4xODUuNjEyLjMzNS45NjguNDI5di4zNTdhLjc1Ljc1IDAgMCAwIDEuNSAwdi0uMzEzYy4zNzUtLjA2Ny43NC0uMTkgMS4wNTgtLjM4Mi41My0uMzE5Ljk3Ni0uODY0Ljk3Ni0xLjYyNyAwLS44NjQtLjUxLTEuMzk0LTEuMDU1LTEuNjkyLS40NzgtLjI2LTEuMDU2LS4zODktMS40Ni0uNDc4bC0uMDUzLS4wMTJjLS4zODYtLjA4Ni0uNzM2LS4yMDItLjk3My0uMzUyLS4yMjctLjE0Mi0uMjQtLjIzNi0uMjQtLjI5YS40NS40NSAwIDAgMSAuMTgtLjM3NWMuMTM0LS4xMDguNDAzLS4yMjcuODctLjIyNy40NyAwIC43NDIuMTEuOS4yMThhLjgzLjgzIDAgMCAxIC4zMTYuNDEuNzUuNzUgMCAwIDAgMS40MDctLjUyIDIuMzMgMi4zMyAwIDAgMC0uODc4LTEuMTMgMi43IDIuNyAwIDAgMC0xLjA0OC0uNDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjUgOGE1LjUgNS41IDAgMSAxLTExIDAgNS41IDUuNSAwIDAgMSAxMSAwTTE1IDhBNyA3IDAgMSAxIDEgOGE3IDcgMCAwIDEgMTQgME04Ljc1IDQuMjVhLjc1Ljc1IDAgMCAwLTEuNSAwdi4zMzlhMi41IDIuNSAwIDAgMC0xLjAwNy40NyAxLjk1IDEuOTUgMCAwIDAtLjc0IDEuNTQ2YzAgLjc2NC40NzQgMS4yNjUuOTQgMS41NTkuNDU2LjI4NyAxLjAwNy40NDggMS40NDguNTQ3LjQ2Mi4xMDIuODQzLjE5MSAxLjExOC4zNDEuMjI4LjEyNS4yNzUuMjI0LjI3NS4zNzYgMCAuMTAyLS4wNC4yMTctLjI0OC4zNDEtLjIyNC4xMzUtLjU3Ny4yMjktLjk4Mi4yMjktLjM0NCAwLS42ODMtLjExNC0uOTUzLS4yOS0uMjgxLS4xODQtLjQyLS4zODgtLjQ1Ny0uNTA2YS43NS43NSAwIDEgMC0xLjQzLjQ1MmMuMTcxLjU0My41OTEgMSAxLjA2OCAxLjMxLjI4NC4xODUuNjEyLjMzNS45NjguNDI5di4zNTdhLjc1Ljc1IDAgMCAwIDEuNSAwdi0uMzEzYy4zNzUtLjA2Ny43NC0uMTkgMS4wNTgtLjM4Mi41My0uMzE5Ljk3Ni0uODY0Ljk3Ni0xLjYyNyAwLS44NjQtLjUxLTEuMzk0LTEuMDU1LTEuNjkyLS40NzgtLjI2LTEuMDU2LS4zODktMS40Ni0uNDc4bC0uMDUzLS4wMTJjLS4zODYtLjA4Ni0uNzM2LS4yMDItLjk3My0uMzUyLS4yMjctLjE0Mi0uMjQtLjIzNi0uMjQtLjI5YS40NS40NSAwIDAgMSAuMTgtLjM3NWMuMTM0LS4xMDguNDAzLS4yMjcuODctLjIyNy40NyAwIC43NDIuMTEuOS4yMThhLjgzLjgzIDAgMCAxIC4zMTYuNDEuNzUuNzUgMCAwIDAgMS40MDctLjUyIDIuMzMgMi4zMyAwIDAgMC0uODc4LTEuMTMgMi43IDIuNyAwIDAgMC0xLjA0OC0uNDE3eiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI5MyAwYy4zOSAwIC43MDcuMzE3LjcwNy43MDdWMmgxLjI5M2EuNzA3LjcwNyAwIDAgMSAuNSAxLjIwN2wtMS40NiAxLjQ2QTEuMTQgMS4xNCAwIDAgMSAxMy41MyA1aC0xLjQ3TDguNTMgOC41M2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2TDExIDMuOTRWMi40N2MwLS4zMDEuMTItLjU5LjMzMy0uODA0bDEuNDYtMS40NmEuNy43IDAgMCAxIC41LS4yMDdNMi41IDhhNS41IDUuNSAwIDAgMSA2LjU5OC01LjM5Ljc1Ljc1IDAgMCAwIC4yOTgtMS40N0E3IDcgMCAxIDAgMTQuODYgNi42YS43NS43NSAwIDAgMC0xLjQ3LjI5OXEuMTA5LjUzMy4xMSAxLjEwMWE1LjUgNS41IDAgMSAxLTExIDBtNS4zNjQtMi40OTZhLjc1Ljc1IDAgMCAwLS4wOC0xLjQ5OEE0IDQgMCAxIDAgMTEuOTg4IDguM2EuNzUuNzUgMCAwIDAtMS40OTYtLjExMSAyLjUgMi41IDAgMSAxLTIuNjMtMi42ODYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEzLjI5MyAwYy4zOSAwIC43MDcuMzE3LjcwNy43MDdWMmgxLjI5M2EuNzA3LjcwNyAwIDAgMSAuNSAxLjIwN2wtMS40NiAxLjQ2QTEuMTQgMS4xNCAwIDAgMSAxMy41MyA1aC0xLjQ3TDguNTMgOC41M2EuNzUuNzUgMCAwIDEtMS4wNi0xLjA2TDExIDMuOTRWMi40N2MwLS4zMDEuMTItLjU5LjMzMy0uODA0bDEuNDYtMS40NmEuNy43IDAgMCAxIC41LS4yMDdNMi41IDhhNS41IDUuNSAwIDAgMSA2LjU5OC01LjM5Ljc1Ljc1IDAgMCAwIC4yOTgtMS40N0E3IDcgMCAxIDAgMTQuODYgNi42YS43NS43NSAwIDAgMC0xLjQ3LjI5OXEuMTA5LjUzMy4xMSAxLjEwMWE1LjUgNS41IDAgMSAxLTExIDBtNS4zNjQtMi40OTZhLjc1Ljc1IDAgMCAwLS4wOC0xLjQ5OEE0IDQgMCAxIDAgMTEuOTg4IDguM2EuNzUuNzUgMCAwIDAtMS40OTYtLjExMSAyLjUgMi41IDAgMSAxLTIuNjMtMi42ODYiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLjk3LTUuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMi41LTIuNWEuNzUuNzUgMCAwIDAtMS4wNiAwbC0yLjUgMi41YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMOCA3LjMxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNG0xLjk3LTUuNzJhLjc1Ljc1IDAgMSAwIDEuMDYtMS4wNmwtMi41LTIuNWEuNzUuNzUgMCAwIDAtMS4wNiAwbC0yLjUgMi41YS43NS43NSAwIDAgMCAxLjA2IDEuMDZMOCA3LjMxeiIgY2xpcC1ydWxlPSJldmVub2RkIi8+PC9zdmc+");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjgzNiAxLjVhLjY2NC42NjQgMCAwIDEgLjQ5MSAxLjExbC0uMzU0LjM5SDQuMDI3bC0uMzU0LS4zOWEuNjY0LjY2NCAwIDAgMSAuNDktMS4xMXptLTYuNDQ1IDMgMi4xMjQgMi4zMzZhLjUuNSAwIDAgMCAuMzcuMTY0aC4yM2EuNS41IDAgMCAwIC4zNy0uMTY0TDEwLjYxIDQuNXptLjY1MiAyLjk0N0wzLjUgNC42NXYxLjg1MmEuNS41IDAgMCAwIC4xMjMuMzI4TDQuODcgOC4yNjZhNC41IDQuNSAwIDAgMSAxLjE3Mi0uODJtLTIuMDggMi4wNjEtMS40Ny0xLjY5M0EyIDIgMCAwIDEgMiA2LjUwMlYyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjQuNTAyYTIgMiAwIDAgMS0uNDkgMS4zMTJsLTEuNDc0IDEuNjk0YTQuNSA0LjUgMCAxIDEtOC4wNzMgMG03LjE2Ni0xLjI0MmE0LjUgNC41IDAgMCAwLTEuMTcyLS44MkwxMi41IDQuNjV2MS44NTJhLjUuNSAwIDAgMS0uMTIzLjMyOHpNMTEgMTEuNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  -webkit-mask-image: url("data:image/svg+xmlbase64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTExLjgzNiAxLjVhLjY2NC42NjQgMCAwIDEgLjQ5MSAxLjExbC0uMzU0LjM5SDQuMDI3bC0uMzU0LS4zOWEuNjY0LjY2NCAwIDAgMSAuNDktMS4xMXptLTYuNDQ1IDMgMi4xMjQgMi4zMzZhLjUuNSAwIDAgMCAuMzcuMTY0aC4yM2EuNS41IDAgMCAwIC4zNy0uMTY0TDEwLjYxIDQuNXptLjY1MiAyLjk0N0wzLjUgNC42NXYxLjg1MmEuNS41IDAgMCAwIC4xMjMuMzI4TDQuODcgOC4yNjZhNC41IDQuNSAwIDAgMSAxLjE3Mi0uODJtLTIuMDggMi4wNjEtMS40Ny0xLjY5M0EyIDIgMCAwIDEgMiA2LjUwMlYyYTIgMiAwIDAgMSAyLTJoOGEyIDIgMCAwIDEgMiAydjQuNTAyYTIgMiAwIDAgMS0uNDkgMS4zMTJsLTEuNDc0IDEuNjk0YTQuNSA0LjUgMCAxIDEtOC4wNzMgMG03LjE2Ni0xLjI0MmE0LjUgNC41IDAgMCAwLTEuMTcyLS44MkwxMi41IDQuNjV2MS44NTJhLjUuNSAwIDAgMS0uMTIzLjMyOHpNMTEgMTEuNWEzIDMgMCAxIDEtNiAwIDMgMyAwIDAgMSA2IDAiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-summary, 0, 191, 188);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-bug, 233, 49, 71);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-error, 233, 49, 71);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-example, 120, 82, 238);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.221884 288.456 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.221884 288.456 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.221884 288.456 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.221884 288.456 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-fail, 233, 49, 71);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.216957 20.8417 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-info, 8, 109, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-default, 8, 109, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-question, 236, 117, 0);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-quote, 158, 158, 158);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.0000347234 23.6829 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.0000347234 23.6829 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.0000347234 23.6829 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.0000347234 23.6829 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-success, 8, 185, 78);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.194562 148.477 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.194562 148.477 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.194562 148.477 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.194562 148.477 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-tip, 0, 191, 188);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.124634 192.763 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-todo, 8, 109, 221);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-warning, 236, 117, 0);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.175867 52.5446 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
  background: rgba(8, 109, 221, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(8, 109, 221, 0.1);
  gap: 9.6px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  --font-weight: var(--callout-title-weight, 700);
  font-weight: var(--font-weight, 700);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
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
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(207, 201, 222);
  border-left-color: rgb(207, 201, 222);
  border-right-color: rgb(207, 201, 222);
  border-top-color: rgb(207, 201, 222);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(162, 150, 192, 0.18));
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(207, 201, 222);
  border-left-color: rgb(207, 201, 222);
  border-right-color: rgb(207, 201, 222);
  border-top-color: rgb(207, 201, 222);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 245, 249);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(162, 150, 192, 0.18));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(162, 150, 192, 0.18));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsl(258, 88%, 66%, 0.2));
  --pill-background-hover: var(--tag-background-hover, hsl(258, 88%, 66%, 0.2));
  --pill-color: var(--tag-color, #222222);
  --pill-color-hover: var(--tag-color-hover, #222222);
  --pill-color-remove: var(--tag-color, #ababab);
  --pill-color-remove-hover: var(--tag-color-hover, #5c5c5c);
  --pill-padding-x: var(--tag-padding-x, 0.5em);
  --pill-padding-y: var(--tag-padding-y, 0.15em);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(138, 92, 245, 0.2));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 600);
  color: var(--h1-color, oklch(0.5 0.2 292.489));
}

html[saved-theme="light"] body h1.article-title {
  font-size: var(--inline-title-size, 24px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 600);
  color: var(--h2-color, oklch(0.5 0.2 352.489));
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  color: var(--h3-color, oklch(0.5 0.2 52.4895));
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 600);
  color: var(--h4-color, oklch(0.5 0.2 112.489));
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 600);
  color: var(--h5-color, oklch(0.5 0.2 172.49));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, oklch(0.5 0.2 232.49));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --bases-embed-border-color: var(--bases-table-border-color, hsl(258 25% 86%));
  --bases-table-header-background: var(--background-primary, #ffffff);
  --bases-table-header-background-hover: var(--i-2, hsl(258 25% 94%));
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-width: 1px;
  border-left-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-left-width: 1px;
  border-right-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-right-width: 1px;
  border-top-color: oklch(0.65 0.189745 256.787 / 0.45);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-width: 1px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(221, 217, 232);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  --nav-item-weight: var(--i-lt-folder-weight, 400);
  --nav-item-weight-active: var(--nav-item-weight, 400);
  --nav-item-weight-hover: var(--nav-item-weight, 400);
  color: var(--nav-item-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  --nav-item-weight: var(--i-lt-folder-weight, 400);
  --nav-item-weight-active: var(--nav-item-weight, 400);
  --nav-item-weight-hover: var(--nav-item-weight, 400);
  color: var(--nav-item-color, rgb(34, 34, 34));
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
  --nav-item-weight: var(--i-lt-folder-weight, 400);
  --nav-item-weight-active: var(--nav-item-weight, 400);
  --nav-item-weight-hover: var(--nav-item-weight, 400);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: var(--icon-color, rgb(34, 34, 34));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(249, 249, 251));
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
  color: var(--status-bar-text-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(34, 34, 34);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(34, 34, 34);
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(34, 34, 34));
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: var(--icon-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(34, 34, 34);
  stroke: rgb(34, 34, 34);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: oklch(0.5 0.14 292.489);
  border-left-color: oklch(0.5 0.14 292.489);
  border-right-color: oklch(0.5 0.14 292.489);
  border-top-color: oklch(0.5 0.14 292.489);
  color: oklch(0.5 0.14 292.489);
}`,
    canvas: `html[saved-theme="light"] body .canvas-sidebar {
  box-shadow: var(--input-shadow, rgb(221, 217, 232) 0px 0px 0px 1px inset);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(216, 210, 228);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  --input-height: var(--metadata-input-height, 2em);
  --metadata-input-background-active: var(--metadata-input-background, transparent);
  --metadata-label-background: hsl(from var(--i-2) h var(--i-properties-s) l);
  --metadata-label-background-active: var(--metadata-label-background, hsl(from hsl(258 25% 94%) h 88% l));
  --metadata-label-background-hover: var(--metadata-label-background, hsl(from hsl(258 25% 94%) h 88% l));
  --metadata-label-text-color: var(--text-normal, #222222);
  --metadata-property-radius-focus: var(--metadata-property-radius, 0);
  --metadata-property-radius-hover: var(--metadata-property-radius, 0);
  border-bottom-color: rgb(221, 217, 232);
  border-left-color: rgb(221, 217, 232);
  border-right-color: rgb(221, 217, 232);
  border-top-color: rgb(221, 217, 232);
  margin-bottom: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.7296 0.624 0.976);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: color(srgb 0.7296 0.624 0.976);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: color(srgb 0.7296 0.624 0.976);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: color(srgb 0.7296 0.624 0.976);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body .note-properties {
  --input-height: var(--metadata-input-height, 2em);
  --metadata-input-background-active: var(--metadata-input-background, transparent);
  --metadata-label-background: hsl(from var(--i-2) h var(--i-properties-s) l);
  --metadata-label-background-active: var(--metadata-label-background, hsl(from hsl(258 25% 94%) h 88% l));
  --metadata-label-background-hover: var(--metadata-label-background, hsl(from hsl(258 25% 94%) h 88% l));
  --metadata-label-text-color: var(--text-normal, #222222);
  --metadata-property-radius-focus: var(--metadata-property-radius, 0);
  --metadata-property-radius-hover: var(--metadata-property-radius, 0);
  border-color: rgb(221, 217, 232);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsl(258, 88%, 66%, 0.2));
  --pill-background-hover: var(--tag-background-hover, hsl(258, 88%, 66%, 0.2));
  --pill-color: var(--tag-color, #222222);
  --pill-color-hover: var(--tag-color-hover, #222222);
  --pill-color-remove: var(--tag-color, #ababab);
  --pill-color-remove-hover: var(--tag-color-hover, #5c5c5c);
  --pill-padding-x: var(--tag-padding-x, 0.5em);
  --pill-padding-y: var(--tag-padding-y, 0.15em);
  --pill-radius: var(--tag-radius, 4px);
  background-color: var(--pill-background, rgba(138, 92, 245, 0.2));
  border-radius: 4px;
  color: var(--pill-color, rgb(34, 34, 34));
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgb(255, 255, 255));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(249, 249, 251));
}`,
    misc: `html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(249, 249, 251));
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: var(--text-normal, rgb(34, 34, 34));
  padding-left: 0px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(138, 92, 245, 0.2));
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: var(--tag-color, rgb(34, 34, 34));
}`,
  },
  classSettings: {
    "i-border-layout": {
      general: `.i-border-layout:not(.is-mobile) {
--ribbon-background: var(--background-primary);
--titlebar-background: var(--background-primary);
--traffic-lights-offset-x: 58px;
.app-container {
		padding: 8px;
		background-color: var(--i-layout-color);
	};
.workspace {
		border: 1px solid var(--i-layout-border-color);
		border-radius: var(--i-border-radius);
	};
&:not(.is-hidden-frameless) .titlebar {
		background-color: var(--i-layout-color);
	};
.workspace-split.mod-left-split .workspace-sidedock-vault-profile {
		width: 100%;
		background-color: var(--background-primary);
	};
.sidebar-toggle-button {
		padding: 7px 0;
	};
.workspace-ribbon .sidebar-toggle-button {
		top: 9px;
		left: 9px;
	};
.workspace-ribbon.mod-left::before {
		top: 9px;
		left: 9px;
		border-top-left-radius: var(--i-border-radius);
	};
&:is(.mod-windows, .mod-linux):not(.is-hidden-frameless) .titlebar-button.mod-logo {
		position: absolute;
		left: 8px;
	};
}

&.i-border-layout {
--status-bar-border-color: var(--i-layout-border-color);
--status-bar-border-width: 0 1px 1px;
--status-bar-radius: 0 0 var(--i-border-radius) var(--i-border-radius);
}

&.i-border-layout:not(.i-hide-status-bar, .i-focus-mode.i-focus-mode-status-bar, .is-popout-window) .workspace {
border-bottom-color: var(--background-modifier-border);
border-radius: var(--i-border-radius) var(--i-border-radius) 0 0;
}`,
    },
    "i-default-layout": {
      general: `.i-default-layout:not(.is-mobile) {
--titlebar-background: var(--i-2);
}

&.i-default-layout:not(.is-hidden-frameless) {
--titlebar-background: var(--background-primary);
}

&.mod-macos.is-hidden-frameless.i-default-layout:not(.is-fullscreen) .horizontal-main-container {
padding-top: 28px;
}

&.i-default-layout .status-bar {
margin-bottom: 8px;
}

&:not(.i-centered-status-bar).i-default-layout .status-bar {
margin-right: 8px;
}

&.i-default-layout .mod-root {
--nn-theme-nav-bg: var(--background-primary);
}

&.i-default-layout .mod-sidedock {
--nn-theme-list-bg: var(--background-secondary);
}`,
    },
    "i-lt-layout-s": {
      general: `.i-lt-layout-s {
--i-lt-layout-s: var(--i-lt-custom-layout-s);
}`,
    },
    "i-dk-layout-s": {
      general: `.i-dk-layout-s {
--i-dk-layout-s: var(--i-dk-custom-layout-s);
}`,
    },
    "i-active-line-border": {
      general: `&.i-active-line-border {
&.i-spacing .HyperMD-header.cm-active.cm-line::after {
			bottom: calc(var(--i-spacing-below-headings) + 0.25em);
		};
&:not(.i-spacing) .HyperMD-header.cm-active.cm-line::after {
			top: calc(var(--p-spacing) + 0.25em);
		};
&:not(.i-spacing) .cm-line.HyperMD-header + .cm-line:not(.HyperMD-header):has(> br:only-child) + .HyperMD-header.cm-active.cm-line::after {
			top: 0.25em;
		};
.cm-active.cm-line::after {
			inset-inline-start: -16px;
		};
.mod-sidedock .cm-active.cm-line::after {
			inset-inline-start: -10px;
		};
.workspace-leaf.mod-active .cm-active.cm-line::after {
			border-inline-start: 2px solid var(--i-active-line-color);
		};
&:not(.i-active-line-active-pane-only) .workspace-leaf:not(.mod-active) .cm-active.cm-line::after {
			border-inline-start: 2px solid oklch(from var(--i-active-line-color) l c h / 0.5);
		};
.mod-root .HyperMD-header.cm-active.cm-line .cm-fold-indicator .collapse-indicator {
			padding-inline-end: 2px;
		};
.cm-gutters + .cm-content .HyperMD-header.cm-active.cm-line .cm-fold-indicator .collapse-indicator {
			padding-inline-end: 1px;
		};
.cm-gutters + .cm-content .cm-active.cm-line::after {
			inset-inline-start: -14px;
		};
}`,
    },
    "i-active-line-highlight": {
      general: `&.i-active-line-highlight {
.workspace-leaf.mod-active .cm-active.cm-line {
			background-color: var(--i-active-line-highlight);
			box-shadow: -128px 0 var(--i-active-line-highlight), 128px 0 var(--i-active-line-highlight);
		};
&:not(.i-active-line-active-pane-only) .workspace-leaf:not(.mod-active) .cm-active.cm-line {
			background-color: var(--i-active-line-highlight-inactive);
			box-shadow: -128px 0 var(--i-active-line-highlight-inactive), 128px 0 var(--i-active-line-highlight-inactive);
		};
}

&.i-active-line-highlight-border {
.workspace-leaf.mod-active .cm-active.cm-line {
			background-color: var(--i-active-line-highlight);
			box-shadow: -10px 0 var(--i-active-line-highlight), 10px 0 var(--i-active-line-highlight);
		};
.mod-sidedock .workspace-leaf.mod-active .cm-active.cm-line {
			box-shadow: -6px 0 var(--i-active-line-highlight), 6px 0 var(--i-active-line-highlight);
		};
&:not(.i-active-line-active-pane-only) .workspace-leaf:not(.mod-active) .cm-active.cm-line {
			background-color: var(--i-active-line-highlight-inactive);
			box-shadow: -10px 0 var(--i-active-line-highlight-inactive), 10px 0 var(--i-active-line-highlight-inactive);
		};
&:not(.i-active-line-active-pane-only) .mod-sidedock .workspace-leaf:not(.mod-active) .cm-active.cm-line {
			box-shadow: -6px 0 var(--i-active-line-highlight-inactive), 6px 0 var(--i-active-line-highlight-inactive);
		};
.cm-active.cm-line::after {
			inset-inline-start: -18px;
			top: 0;
			bottom: 0;
		};
.mod-sidedock .cm-active.cm-line::after {
			inset-inline-start: -12px;
		};
.workspace-leaf.mod-active .cm-active.cm-line::after {
			border-inline-start: 2px solid var(--i-active-line-color);
		};
&:not(.i-active-line-active-pane-only) .workspace-leaf:not(.mod-active) .cm-active.cm-line::after {
			border-inline-start: 2px solid oklch(from var(--i-active-line-color) l c h / 0.5);
		};
}`,
    },
    "i-active-line-highlight-border": {
      general: `&.i-active-line-highlight-border {
.workspace-leaf.mod-active .cm-active.cm-line {
			background-color: var(--i-active-line-highlight);
			box-shadow: -10px 0 var(--i-active-line-highlight), 10px 0 var(--i-active-line-highlight);
		};
.mod-sidedock .workspace-leaf.mod-active .cm-active.cm-line {
			box-shadow: -6px 0 var(--i-active-line-highlight), 6px 0 var(--i-active-line-highlight);
		};
&:not(.i-active-line-active-pane-only) .workspace-leaf:not(.mod-active) .cm-active.cm-line {
			background-color: var(--i-active-line-highlight-inactive);
			box-shadow: -10px 0 var(--i-active-line-highlight-inactive), 10px 0 var(--i-active-line-highlight-inactive);
		};
&:not(.i-active-line-active-pane-only) .mod-sidedock .workspace-leaf:not(.mod-active) .cm-active.cm-line {
			box-shadow: -6px 0 var(--i-active-line-highlight-inactive), 6px 0 var(--i-active-line-highlight-inactive);
		};
.cm-active.cm-line::after {
			inset-inline-start: -18px;
			top: 0;
			bottom: 0;
		};
.mod-sidedock .cm-active.cm-line::after {
			inset-inline-start: -12px;
		};
.workspace-leaf.mod-active .cm-active.cm-line::after {
			border-inline-start: 2px solid var(--i-active-line-color);
		};
&:not(.i-active-line-active-pane-only) .workspace-leaf:not(.mod-active) .cm-active.cm-line::after {
			border-inline-start: 2px solid oklch(from var(--i-active-line-color) l c h / 0.5);
		};
}`,
    },
    "i-italic-blockquote-text": {
      general: `.i-italic-blockquote-text {
--blockquote-font-style: italic;
--blockquote-style: italic;
}`,
    },
    "i-transparent-blockquote-background": {
      general: `.i-transparent-blockquote-background {
--blockquote-background-color: transparent;
}`,
    },
    "i-callout-outlined": {
      general: `.i-callout-outlined, .i-callout-outlined-filled {
--callout-content-padding: calc(var(--p-spacing) - 1em) 1em 1em;
}

.i-callout-outlined-filled {
&.theme-light .callout {
		background-color: oklch(from rgb(var(--callout-color)) 0.65 c h / 0.06);
		border-color: oklch(from rgb(var(--callout-color)) 0.65 c h / 0.3);
	};
&.theme-dark .callout {
		background-color: oklch(from rgb(var(--callout-color)) 0.75 c h / 0.08);
		border-color: oklch(from rgb(var(--callout-color)) 0.75 c h / 0.2);
	};
}`,
    },
    "i-callout-filled": {
      general: `.i-callout-filled {
--callout-content-padding: calc(var(--p-spacing) - 1em) 1em 1em;
}`,
    },
    "i-callout-outlined-filled": {
      general: `.i-callout-outlined-filled {
--callout-content-padding: calc(var(--p-spacing) - 1em) 1em 1em;
}

.i-callout-outlined-filled {
&.theme-light .callout {
		background-color: oklch(from rgb(var(--callout-color)) 0.65 c h / 0.06);
		border-color: oklch(from rgb(var(--callout-color)) 0.65 c h / 0.3);
	};
&.theme-dark .callout {
		background-color: oklch(from rgb(var(--callout-color)) 0.75 c h / 0.08);
		border-color: oklch(from rgb(var(--callout-color)) 0.75 c h / 0.2);
	};
}`,
    },
    "i-lined-bg": {
      general: `.i-lined-bg .mod-root .view-content {
background-image: linear-gradient(var(--i-pattern-color) var(--i-pattern-line-width), transparent var(--i-pattern-line-width));
}`,
    },
    "i-grid-bg": {
      general: `.i-grid-bg .mod-root .view-content {
background-image:
		linear-gradient(var(--i-pattern-color) var(--i-pattern-line-width), transparent var(--i-pattern-line-width)),
		linear-gradient(to right, var(--i-pattern-color) var(--i-pattern-line-width), transparent var(--i-pattern-line-width));
background-position-x: calc(50% - var(--i-pattern-line-width) / 2);
}`,
    },
    "i-dotted-bg": {
      general: `.i-dotted-bg:is(.i-tab-titlebar-border-solid, .i-tab-titlebar-border-dashed) .mod-root .view-content {
background-position-y: calc((var(--i-pattern-width) - var(--i-pattern-line-width)) / 2);
}

.i-dotted-bg .mod-root .view-content {
background-image: radial-gradient(var(--i-pattern-color) calc(var(--i-pattern-line-width) / 2), transparent calc(var(--i-pattern-line-width) / 2));
background-position-x: center;
}`,
    },
    "i-lt-heading-colored": {
      light: `.i-lt-heading-colored :is(.markdown-source-view, .markdown-rendered) {
--h1-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-colored-l, 50%) var(--i-lt-heading-colored-c, 50%) calc(h + var(--i-lt-h1-h)));
--h2-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-colored-l, 50%) var(--i-lt-heading-colored-c, 50%) calc(h + var(--i-lt-h1-h) + (var(--i-lt-h6-h) - var(--i-lt-h1-h)) * 0.2));
--h3-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-colored-l, 50%) var(--i-lt-heading-colored-c, 50%) calc(h + var(--i-lt-h1-h) + (var(--i-lt-h6-h) - var(--i-lt-h1-h)) * 0.4));
--h4-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-colored-l, 50%) var(--i-lt-heading-colored-c, 50%) calc(h + var(--i-lt-h1-h) + (var(--i-lt-h6-h) - var(--i-lt-h1-h)) * 0.6));
--h5-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-colored-l, 50%) var(--i-lt-heading-colored-c, 50%) calc(h + var(--i-lt-h1-h) + (var(--i-lt-h6-h) - var(--i-lt-h1-h)) * 0.8));
--h6-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-colored-l, 50%) var(--i-lt-heading-colored-c, 50%) calc(h + var(--i-lt-h6-h)));
}`,
    },
    "i-lt-heading-highlighted": {
      light: `.i-lt-heading-highlighted {
:is(.cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6) {
		padding-block: var(--i-lt-heading-highlighted-padding);
	};
.markdown-rendered h1, .cm-header-1 {background-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-highlighted-l, 95%) var(--i-lt-heading-highlighted-c, 8%) calc(h + var(--i-lt-h1-h)) / var(--i-lt-heading-highlighted-a, 50%));};
.markdown-rendered h2, .cm-header-2 {background-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-highlighted-l, 95%) var(--i-lt-heading-highlighted-c, 8%) calc(h + var(--i-lt-h1-h) + (var(--i-lt-h6-h) - var(--i-lt-h1-h)) * 0.2) / var(--i-lt-heading-highlighted-a, 50%));};
.markdown-rendered h3, .cm-header-3 {background-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-highlighted-l, 95%) var(--i-lt-heading-highlighted-c, 8%) calc(h + var(--i-lt-h1-h) + (var(--i-lt-h6-h) - var(--i-lt-h1-h)) * 0.4) / var(--i-lt-heading-highlighted-a, 50%));};
.markdown-rendered h4, .cm-header-4 {background-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-highlighted-l, 95%) var(--i-lt-heading-highlighted-c, 8%) calc(h + var(--i-lt-h1-h) + (var(--i-lt-h6-h) - var(--i-lt-h1-h)) * 0.6) / var(--i-lt-heading-highlighted-a, 50%));};
.markdown-rendered h5, .cm-header-5 {background-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-highlighted-l, 95%) var(--i-lt-heading-highlighted-c, 8%) calc(h + var(--i-lt-h1-h) + (var(--i-lt-h6-h) - var(--i-lt-h1-h)) * 0.8) / var(--i-lt-heading-highlighted-a, 50%));};
.markdown-rendered h6, .cm-header-6 {background-color: oklch(from var(--i-lt-heading-accent, red) var(--i-lt-heading-highlighted-l, 95%) var(--i-lt-heading-highlighted-c, 8%) calc(h + var(--i-lt-h6-h)) / var(--i-lt-heading-highlighted-a, 50%));};
}`,
    },
    "i-lt-heading-accent": {
      general: `.i-lt-heading-accent {
--i-lt-heading-accent: var(--color-accent);
}`,
    },
    "i-dk-heading-colored": {
      dark: `.i-dk-heading-colored :is(.markdown-source-view, .markdown-rendered) {
--h1-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-colored-l, 80%) var(--i-dk-heading-colored-c, 20%) calc(h + var(--i-dk-h1-h)));
--h2-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-colored-l, 80%) var(--i-dk-heading-colored-c, 20%) calc(h + var(--i-dk-h1-h) + (var(--i-dk-h6-h) - var(--i-dk-h1-h)) * 0.2));
--h3-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-colored-l, 80%) var(--i-dk-heading-colored-c, 20%) calc(h + var(--i-dk-h1-h) + (var(--i-dk-h6-h) - var(--i-dk-h1-h)) * 0.4));
--h4-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-colored-l, 80%) var(--i-dk-heading-colored-c, 20%) calc(h + var(--i-dk-h1-h) + (var(--i-dk-h6-h) - var(--i-dk-h1-h)) * 0.6));
--h5-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-colored-l, 80%) var(--i-dk-heading-colored-c, 20%) calc(h + var(--i-dk-h1-h) + (var(--i-dk-h6-h) - var(--i-dk-h1-h)) * 0.8));
--h6-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-colored-l, 80%) var(--i-dk-heading-colored-c, 20%) calc(h + var(--i-dk-h6-h)));
}`,
    },
    "i-dk-heading-highlighted": {
      dark: `.i-dk-heading-highlighted {
:is(.cm-header-1, .cm-header-2, .cm-header-3, .cm-header-4, .cm-header-5, .cm-header-6) {
		padding-block: var(--i-dk-heading-highlighted-padding);
	};
.markdown-rendered h1, .cm-header-1 {background-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-highlighted-l, 40%) var(--i-dk-heading-highlighted-c, 15%) calc(h + var(--i-dk-h1-h)) / var(--i-dk-heading-highlighted-a, 50%));};
.markdown-rendered h2, .cm-header-2 {background-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-highlighted-l, 40%) var(--i-dk-heading-highlighted-c, 15%) calc(h + var(--i-dk-h1-h) + (var(--i-dk-h6-h) - var(--i-dk-h1-h)) * 0.2) / var(--i-dk-heading-highlighted-a, 50%));};
.markdown-rendered h3, .cm-header-3 {background-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-highlighted-l, 40%) var(--i-dk-heading-highlighted-c, 15%) calc(h + var(--i-dk-h1-h) + (var(--i-dk-h6-h) - var(--i-dk-h1-h)) * 0.4) / var(--i-dk-heading-highlighted-a, 50%));};
.markdown-rendered h4, .cm-header-4 {background-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-highlighted-l, 40%) var(--i-dk-heading-highlighted-c, 15%) calc(h + var(--i-dk-h1-h) + (var(--i-dk-h6-h) - var(--i-dk-h1-h)) * 0.6) / var(--i-dk-heading-highlighted-a, 50%));};
.markdown-rendered h5, .cm-header-5 {background-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-highlighted-l, 40%) var(--i-dk-heading-highlighted-c, 15%) calc(h + var(--i-dk-h1-h) + (var(--i-dk-h6-h) - var(--i-dk-h1-h)) * 0.8) / var(--i-dk-heading-highlighted-a, 50%));};
.markdown-rendered h6, .cm-header-6 {background-color: oklch(from var(--i-dk-heading-accent, red) var(--i-dk-heading-highlighted-l, 40%) var(--i-dk-heading-highlighted-c, 15%) calc(h + var(--i-dk-h6-h)) / var(--i-dk-heading-highlighted-a, 50%));};
}`,
    },
    "i-dk-heading-accent": {
      general: `.i-dk-heading-accent {
--i-dk-heading-accent: var(--color-accent);
}`,
    },
    "i-headings": {
      general: `.i-headings {
--h1-letter-spacing: 0;
--h2-letter-spacing: 0;
--h3-letter-spacing: 0;
--h4-letter-spacing: 0;
--h5-letter-spacing: 0;
--h6-letter-spacing: 0;
--h1-line-height: var(--line-height-normal);
--h2-line-height: var(--line-height-normal);
--h3-line-height: var(--line-height-normal);
--h4-line-height: var(--line-height-normal);
--h1-size: var(--i-h1-size);
--h2-size: var(--i-h2-size);
--h3-size: var(--i-h3-size);
--h4-size: var(--i-h4-size);
--h5-size: var(--i-h5-size);
--h6-size: var(--i-h6-size);
--h1-weight: 600;
--h2-weight: 600;
--h3-weight: 600;
--h4-weight: 600;
--h5-weight: 600;
--h6-weight: 600;
}`,
    },
    "i-image-rounded-corners": {
      general: `.i-image-rounded-corners & {
border-radius: 7px;
}`,
    },
    "i-center-images": {
      general: `.i-center-images {
.markdown-rendered img {
		display: block;
		margin-inline: auto;
	};
.markdown-source-view.mod-cm6 .cm-content > .image-embed {
		justify-self: center;
	};
}`,
    },
    "i-inline-title-centered": {
      general: `&.i-inline-title-centered .inline-title:not([data-level]) {
align-self: center;
}

.i-inline-title-centered .inline-title:not([data-level]) {
text-align: center;
}`,
    },
    "i-colored-inline-title": {
      general: `.i-colored-inline-title {
--inline-title-color: var(--i-inline-title-accent-text-color);
}`,
    },
    "i-highlighted-inline-title": {
      general: `.i-highlighted-inline-title {
.inline-title:not([data-level]) {
		width: fit-content;
		padding-inline: 0.3em;
		background-color: var(--i-inline-title-accent-bg);
		border-radius: var(--radius-s);
	};
&.is-mobile .inline-title:not([data-level]) {
		padding-top: 0;
		margin-top: 0.25em;
	};
&.i-inline-title-centered .inline-title:not([data-level]) {
		align-self: center;
	};
}`,
    },
    "i-hide-link-underline": {
      general: `.i-hide-link-underline {
--link-decoration: none;
--link-external-decoration: none;
}

.i-hide-link-underline-hover {
--link-decoration-hover: none;
--link-external-decoration-hover: none;
}`,
    },
    "i-hide-link-underline-hover": {
      general: `.i-hide-link-underline-hover {
--link-decoration-hover: none;
--link-external-decoration-hover: none;
}`,
    },
    "i-strike-completed-tasks": {
      general: `.i-strike-completed-tasks {
--checklist-done-decoration: line-through;
}`,
    },
    "i-hide-properties-heading": {
      general: `.i-hide-properties-heading .view-content .metadata-properties-heading {
display: none;
}`,
    },
    "i-hide-add-property-button": {
      general: `.i-hide-add-property-button .metadata-container .metadata-add-button {
display: none;
}`,
    },
    "i-hide-property-icons": {
      general: `.i-hide-property-icons .metadata-container .metadata-property-icon {
display: none;
}`,
    },
    "i-lt-properties-background": {
      light: `.i-lt-properties-background {
--i-properties-s: var(--i-lt-s);
}`,
    },
    "i-dk-properties-accent": {
      dark: `.i-dk-properties-accent {
--i-properties-s: var(--accent-s);
}`,
    },
    "i-highlight-active-property": {
      dark: `:where(.i-highlight-active-property .metadata-container .metadata-property:not([data-property-key=tags]):is(:hover, :focus-within) .multi-select-pill) {
--pill-background: hsl(from var(--i-5) h var(--i-properties-s) l);
}

.i-highlight-active-property .metadata-container {
--metadata-property-background-hover: hsl(from var(--i-2) h var(--i-properties-s) l);
}`,
      light: `:where(.i-highlight-active-property .metadata-container .metadata-property:not([data-property-key=tags]):is(:hover, :focus-within) .multi-select-pill) {
--pill-background: hsl(var(--accent-h) var(--i-properties-s) calc(100% - var(--i-lt-l-multiplier) * 8%));
}

.i-highlight-active-property .metadata-container {
--metadata-property-background-hover: hsl(from var(--i-1) h var(--i-properties-s) l);
}`,
    },
    "i-spacing": {
      general: `&.i-spacing .HyperMD-header.cm-active.cm-line::after {
bottom: calc(var(--i-spacing-below-headings) + 0.25em);
}

.i-spacing:not(.modal-container) {
--heading-spacing: var(--p-spacing);
--p-spacing: 1.5rem;
.cm-s-obsidian .cm-line.HyperMD-header {
		padding: 0 0 var(--i-spacing-below-headings);
	};
.markdown-rendered {
		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			margin-bottom: var(--i-spacing-below-headings);
		}

		:is(.el-h1, .el-h2, .el-h3, .el-h4, .el-h5, .el-h6) + :is(.el-h1, .el-h2, .el-h3, .el-h4, .el-h5, .el-h6, .el-p, .el-blockquote, .el-ul, .el-ol) > *,
		:is(.el-h1, .el-h2, .el-h3, .el-h4, .el-h5, .el-h6) + .el-pre :is(pre, .internal-query),
		:is(.el-h1, .el-h2, .el-h3, .el-h4, .el-h5, .el-h6) + .el-div .callout,
		:is(h1, h2, h3, h4, h5, h6) + :is(h1, h2, h3, h4, h5, h6, p, blockquote, ul, ol, pre, .callout, .internal-query) {
			margin-top: 0;
		}

		hr {
			margin: calc(var(--p-spacing) * 1.5 - var(--hr-thickness) / 2) 0;
		}

		:is(.el-h1, .el-h2, .el-h3, .el-h4, .el-h5, .el-h6) + .el-hr hr,
		:is(h1, h2, h3, h4, h5, h6) + hr {
			margin-top: calc((var(--p-spacing) - var(--hr-thickness)) / 2 + var(--i-spacing-below-headings));
		}

		.el-hr + .el-hr hr,
		hr + hr {
			margin-top: calc(var(--p-spacing) * 2 - var(--hr-thickness));
		}

		pre {
			padding: calc(var(--code-size) * var(--line-height-normal)) 16px;
			line-height: calc(var(--code-size) * var(--line-height-normal));
		}

		:is(.el-h1, .el-h2, .el-h3, .el-h4, .el-h5, .el-h6) + .el-table table {
			margin-top: calc(16px + var(--i-spacing-below-headings));
		}

		.el-table table {
			margin: 16px 0;
		}

		:is(h1, h2, h3, h4, h5, h6) + table {
			margin-top: calc(16px + var(--p-spacing) + var(--i-spacing-below-headings));
		}

		table + table {
			margin-top: calc(var(--p-spacing) + 32px);
		}
	};
.markdown-rendered :is(blockquote, pre, .el-table),
	.markdown-source-view.mod-cm6 .callout-content .callout {
		margin: var(--p-spacing) 0;
	};
.callout :is(h1, h2, h3, h4, h5, h6) + table,
	.markdown-source-view.mod-cm6 .callout-content :is(h1, h2, h3, h4, h5, h6) + .callout {
		margin-top: 0;
	};
.callout table + table {
		margin-top: var(--p-spacing);
	};
}

&.i-spacing:not(.modal-container) .markdown-rendered :is(.el-h1, .el-h2, .el-h3, .el-h4, .el-h5, .el-h6) + .el-pre .block-language-dataview, &.i-spacing:not(.modal-container) .markdown-rendered :is(h1, h2, h3, h4, h5, h6) + .block-language-dataview {
margin-top: 0;
}`,
    },
    "i-highlight-active-row": {
      general: `.i-highlight-active-row {
--table-row-alt-background-hover: var(--table-row-background-hover);
--table-row-background-hover: hsl(var(--accent-h) var(--i-s) 50% / 0.05);
.cm-table-widget tr:focus-within {
		background-color: var(--table-row-background-hover);
	};
&.i-striped-rows :is(.cm-html-embed, .markdown-rendered) tr:is(:hover, :focus-within) {
		background-color: hsl(var(--accent-h) var(--i-s) 50% / 0.1);
	};
}`,
    },
    "i-striped-rows": {
      general: `.i-striped-rows :is(.cm-html-embed, .markdown-rendered) tbody tr:nth-child(even) {
background-color:hsl(var(--accent-h) var(--i-s) 50% / 0.05);
}

&.i-striped-rows :is(.cm-html-embed, .markdown-rendered) tr:is(:hover, :focus-within) {
background-color: hsl(var(--accent-h) var(--i-s) 50% / 0.1);
}`,
    },
    "i-striped-columns": {
      general: `.i-striped-columns {
--table-column-alt-background: hsl(var(--accent-h) var(--i-s) 50% / 0.05);
}`,
    },
    "i-center-table-header-text": {
      general: `.i-center-table-header-text :is(.cm-html-embed, .markdown-rendered) th {
text-align: center;
}`,
    },
    "i-center-table-body-text": {
      general: `.i-center-table-body-text :is(.cm-html-embed, .markdown-rendered) td {
text-align: center;
}`,
    },
    "i-smaller-tags": {
      general: `.i-smaller-tags {
--tag-padding-x: 0.4em;
--tag-padding-y: 0.14em;
}`,
    },
    "i-focus-mode": {
      general: `&.i-focus-mode-main {
--i-card-radius: var(--i-card-radius-macos);
}

.i-focus-mode-tab-titlebar.i-focus-mode:not(.is-mobile) .view-header, .i-focus-mode-status-bar.i-focus-mode:not(.is-mobile) .status-bar {
display: none;
}

.i-focus-mode-main:not(.is-mobile) {
--status-bar-background: var(--background-primary);
--traffic-lights-offset-x: 30px;
--traffic-lights-offset-y: 30px;
.workspace-tab-header-container,
	.workspace-ribbon,
	.workspace-split.mod-right-split {
		display: none;
	};
&:not(.i-border-layout, .i-default-layout) .workspace-tab-container {
		margin-top: 3px;
		border-top: 1px solid var(--i-layout-border-color);
		border-radius: var(--i-card-radius);
	};
.workspace-split.mod-left-split {
		width: 0 !important;

		&.is-sidedock-collapsed {
			display: flex !important;
		}
	};
.workspace-sidedock-vault-profile .workspace-drawer-vault-actions .clickable-icon:last-child {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 16;
		width: 36px;
		height: 36px;
		background-color: var(--i-2);
		border-top: 1px solid var(--background-modifier-border);
		border-right: 1px solid var(--background-modifier-border);
		border-radius: 0 50% 0 0;
		opacity: 0;
		transition: opacity 100ms ease-in-out;

		&:hover {
			opacity: 1;
		}
	};
&:not(.i-default-layout) .workspace-sidedock-vault-profile .workspace-drawer-vault-actions .clickable-icon:last-child {
		border-top: 1px solid var(--i-layout-border-color);
		border-right: 1px solid var(--i-layout-border-color);
	};
&.i-default-layout:not(.is-hidden-frameless) {
		--titlebar-background: var(--background-primary);
	};
&.mod-macos.is-hidden-frameless.i-default-layout:not(.is-fullscreen) .horizontal-main-container {
		padding-top: 28px;
	};
&.mod-macos.is-hidden-frameless:not(.is-fullscreen, .i-default-layout) .horizontal-main-container {
		padding-top: 19px;
	};
&:is(.mod-windows, .mod-linux).is-hidden-frameless {
		.titlebar-button-container.mod-right {
			height: 24px;
			background-color: var(--background-primary);
		}

		.titlebar-button {
			padding: 0 6px;
		}

		&:not(.is-fullscreen) .horizontal-main-container {
			padding-top: 24px;
		}

		&:not(.i-default-layout) .titlebar-button-container.mod-right {
			background-color: var(--i-layout-color);
		}

		&:not(.is-fullscreen, .i-default-layout) .horizontal-main-container {
			padding-top: 16px;
		}
	};
}`,
    },
    "i-focus-mode-main": {
      general: `&.i-focus-mode.i-focus-mode-main {
--i-card-radius: var(--i-card-radius-macos);
}

.i-focus-mode.i-focus-mode-main:not(.is-mobile) {
--status-bar-background: var(--background-primary);
--traffic-lights-offset-x: 30px;
--traffic-lights-offset-y: 30px;
.workspace-tab-header-container,
	.workspace-ribbon,
	.workspace-split.mod-right-split {
		display: none;
	};
&:not(.i-border-layout, .i-default-layout) .workspace-tab-container {
		margin-top: 3px;
		border-top: 1px solid var(--i-layout-border-color);
		border-radius: var(--i-card-radius);
	};
.workspace-split.mod-left-split {
		width: 0 !important;

		&.is-sidedock-collapsed {
			display: flex !important;
		}
	};
.workspace-sidedock-vault-profile .workspace-drawer-vault-actions .clickable-icon:last-child {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 16;
		width: 36px;
		height: 36px;
		background-color: var(--i-2);
		border-top: 1px solid var(--background-modifier-border);
		border-right: 1px solid var(--background-modifier-border);
		border-radius: 0 50% 0 0;
		opacity: 0;
		transition: opacity 100ms ease-in-out;

		&:hover {
			opacity: 1;
		}
	};
&:not(.i-default-layout) .workspace-sidedock-vault-profile .workspace-drawer-vault-actions .clickable-icon:last-child {
		border-top: 1px solid var(--i-layout-border-color);
		border-right: 1px solid var(--i-layout-border-color);
	};
&.i-default-layout:not(.is-hidden-frameless) {
		--titlebar-background: var(--background-primary);
	};
&.mod-macos.is-hidden-frameless.i-default-layout:not(.is-fullscreen) .horizontal-main-container {
		padding-top: 28px;
	};
&.mod-macos.is-hidden-frameless:not(.is-fullscreen, .i-default-layout) .horizontal-main-container {
		padding-top: 19px;
	};
&:is(.mod-windows, .mod-linux).is-hidden-frameless {
		.titlebar-button-container.mod-right {
			height: 24px;
			background-color: var(--background-primary);
		}

		.titlebar-button {
			padding: 0 6px;
		}

		&:not(.is-fullscreen) .horizontal-main-container {
			padding-top: 24px;
		}

		&:not(.i-default-layout) .titlebar-button-container.mod-right {
			background-color: var(--i-layout-color);
		}

		&:not(.is-fullscreen, .i-default-layout) .horizontal-main-container {
			padding-top: 16px;
		}
	};
}`,
    },
    "i-focus-mode-tab-titlebar": {
      general: `.i-focus-mode:not(.is-mobile) .view-header {
display: none;
}`,
    },
    "i-focus-mode-status-bar": {
      general: `.i-focus-mode:not(.is-mobile) .status-bar {
display: none;
}`,
    },
    "i-remove-fade-effects": {
      general: `.i-remove-fade-effects {
--tab-switcher-menubar-background: var(--tab-switcher-background);
&.is-mobile.is-floating-nav {
		.workspace-drawer .workspace-leaf-content::after,
		.workspace-drawer .nav-buttons-container::after,
		&.is-phone .workspace-drawer .nav-buttons-container::after {
			display: none;
		}

		.workspace-drawer .nav-buttons-container {
			background-color: var(--mobile-sidebar-background);
		}
	};
&.is-phone {
		.modal.mod-settings .modal-header {
			background-color: var(--settings-background);

			&::after {
				display: none;
			}
		}

		&.is-floating-nav,
		&.is-hidden-nav {
			--view-bottom-fade-mask: linear-gradient(to top, #000 0%, #000 1px);
			--view-top-fade-mask: linear-gradient(to bottom, #000 0%, #000 1px);
		}

		.workspace-drawer-tab-options-list {
			box-shadow: none;
		}

		.workspace-drawer .nav-buttons-container {
			padding-bottom: 4px;
		}
	};
}`,
    },
    "i-anchored-toolbar": {
      general: `.i-anchored-toolbar {
&.is-mobile {
		--mobile-toolbar-height: var(--input-height);
	};
&.is-floating-nav .mobile-toolbar {
		background-color: var(--background-primary);
		box-shadow: none;
	};
&.is-floating-nav .mobile-toolbar-options-container {
		width: 100%;
	};
.mobile-toolbar-options-container {
		margin-block: 2px;
	};
.mobile-toolbar-options-list-container,
	.mobile-toolbar-options-list {
		border-radius: 0;
	};
.mobile-toolbar {
		--raised-background: transparent;
		--raised-blur: none;
		--raised-mask-display: none;
		--raised-shadow: none;
	};
&.is-mobile.is-floating-nav.is-ios .mobile-toolbar {
		--raised-mask-border-width: 0;
	};
}`,
    },
    "i-translucent-floating-nav": {
      general: `.is-phone.is-floating-nav.i-translucent-floating-nav {
.mobile-navbar,
	.view-header {
		--raised-background: oklch(from var(--background-primary) l c h / var(--i-translucent-floating-nav-opacity));
		--raised-blur: none;
		--raised-mask-display: none;
		--raised-shadow: none;
	};
&.is-mobile.is-ios :is(.mobile-navbar, .view-header) {
		--raised-mask-border-width: 0;
	};
}`,
    },
    "i-scrollbar": {
      general: `&.i-scrollbar-square ::-webkit-scrollbar-thumb {
border-radius: 0 !important;
}

&.i-scrollbar-hide ::-webkit-scrollbar {
display: none;
}`,
    },
    "i-scrollbar-square": {
      general: `&.i-scrollbar-square ::-webkit-scrollbar-thumb {
border-radius: 0 !important;
}`,
    },
    "i-scrollbar-hide": {
      general: `&.i-scrollbar-hide ::-webkit-scrollbar {
display: none;
}`,
    },
    "i-autohide-status-bar": {
      general: `.i-autohide-status-bar {
--status-bar-background: var(--i-1);
--status-bar-border-width: 1px;
--status-bar-radius: 8px;
.status-bar {
		opacity: 0;
		transform: translateY(12px);
		transition: transform 100ms ease-in-out, opacity 100ms ease-in-out;

		&:hover {
			opacity: 1;
			transform: translateY(0);
		}

		&::before {
			position: absolute;
			inset: 27px 0 -17px;
			content: '';
		}
	};
&:not(.i-default-layout) .status-bar {
		margin-bottom: 16px;
	};
&:not(.i-centered-status-bar) .status-bar {
		margin-right: 16px;
	};
&.i-default-layout .status-bar {
		margin-bottom: 8px;
	};
&:not(.i-centered-status-bar).i-default-layout .status-bar {
		margin-right: 8px;
	};
}

&.i-autohide-status-bar {
.status-bar {
			left: 0;
			width: fit-content;
			margin-inline: auto;
		};
}

.i-autohide-status-bar .setting-item[data-id=i-full-width-status-bar] {
display: none;
}`,
    },
    "i-hide-status-bar": {
      general: `.i-hide-status-bar .status-bar {
display: none;
}`,
    },
    "i-centered-status-bar": {
      general: `.i-centered-status-bar {
&:not(.i-full-width-status-bar, .i-autohide-status-bar) {
		--status-bar-border-width: 1px 1px 0;
		--status-bar-radius: 8px 8px 0 0;
	};
&:not(.i-full-width-status-bar),
	&.i-autohide-status-bar {
		.status-bar {
			left: 0;
			width: fit-content;
			margin-inline: auto;
		}
	};
&.i-full-width-status-bar .status-bar {
		justify-content: center;
	};
}`,
    },
    "i-full-width-status-bar": {
      general: `.i-full-width-status-bar:not(.i-autohide-status-bar) {
--status-bar-border-width: 1px 0 0;
--status-bar-position: static;
--status-bar-radius: 0;
&.i-border-layout {
		--status-bar-border-color: var(--i-layout-border-color);
		--status-bar-border-width: 0 1px 1px;
		--status-bar-radius: 0 0 var(--i-border-radius) var(--i-border-radius);
	};
&.i-border-layout:not(.i-hide-status-bar, .i-focus-mode.i-focus-mode-status-bar, .is-popout-window) .workspace {
		border-bottom-color: var(--background-modifier-border);
		border-radius: var(--i-border-radius) var(--i-border-radius) 0 0;
	};
&:not(.i-border-layout, .i-default-layout, .i-hide-status-bar, .i-focus-mode.i-focus-mode-status-bar, .is-popout-window) .workspace {
		padding-bottom: 3px;
	};
&:not(.i-border-layout, .i-default-layout) {
		--status-bar-border-color: var(--i-layout-border-color);
	};
}

&.i-full-width-status-bar .status-bar {
justify-content: center;
}`,
    },
    "i-tab-titlebar-autohide": {
      general: `.i-tab-titlebar-autohide:not(.is-mobile) {
.view-header-title-parent {
		position: absolute;
		top: 30px;
		opacity: 0 !important;
		translate: 0 -9px;
		transition: opacity 100ms ease-in-out 400ms, translate 100ms ease-in-out 400ms;
	};
.view-header-title-container {
		overflow: visible;

		&:hover .view-header-title-parent {
			opacity: 1 !important;
			translate: 0 0;
		}
	};
.view-header::after {
		position: absolute;
		top: 37px;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 0;
		content: '';
		background-color: var(--background-primary);
		border-bottom: var(--file-header-border);
		transition: height 100ms ease-in-out 400ms;
	};
.view-header:has(.view-header-title-container:hover):not(:has(.view-header-title:focus-within))::after {
		height: 19px;
	};
}`,
    },
    "i-autohide-tab-titlebar-buttons": {
      general: `.i-autohide-tab-titlebar-buttons:not(.is-mobile) :is(.view-header-left, .view-actions) {
opacity: 0;
transition: opacity 100ms ease-in-out;
&:hover {
		opacity: 1;
	};
}`,
    },
    "i-hide-tab-titlebar-buttons": {
      general: `.i-hide-tab-titlebar-buttons:not(.is-mobile) :is(.view-header-left, .view-actions) {
display: none;
}`,
    },
    "i-tab-titlebar-border-solid": {
      general: `.i-tab-titlebar-border-solid {
--file-header-border: 1px solid var(--background-modifier-border);
}`,
    },
    "i-tab-titlebar-border-dashed": {
      general: `.i-tab-titlebar-border-dashed {
--file-header-border: 1px dashed var(--background-modifier-border);
}`,
    },
    "i-autohide-vault-profile": {
      general: `.i-autohide-vault-profile:not(.i-focus-mode-main.i-focus-mode, .is-mobile) .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
position: absolute;
bottom: 0;
z-index: 1;
height: 16px;
overflow: hidden;
opacity: 0;
transition: height 100ms ease-in-out, opacity 100ms ease-in-out;
&:hover {
		height: 44px;
		opacity: 1;
	};
}`,
    },
    "i-hide-vault-profile": {
      general: `.i-hide-vault-profile:not(.i-focus-mode-main.i-focus-mode) {
--vault-profile-display: none;
}`,
    },
    "i-bases-hide-tab-titlebar": {
      general: `.i-bases-hide-tab-titlebar:not(.is-mobile) .workspace-leaf-content[data-type=bases] .view-header {
display: none;
}`,
    },
    "i-bases-hide-table-header-icons": {
      general: `.i-bases-hide-table-header-icons {
--bases-table-header-icon-display: none;
}`,
    },
    "i-bases-highlight-active-row": {
      general: `.i-bases-highlight-active-row {
--bases-table-row-background-hover: hsl(var(--accent-h) var(--i-s) 50% / 0.05);
}`,
    },
    "i-lt-folder-bg": {
      general: `.i-lt-folder-bg-accent {
--i-lt-folder-bg-accent: var(--color-accent);
}`,
      light: `.i-lt-white-folder-names .nav-files-container .nav-folder-title {
--nav-item-color: #fff;
}

.i-lt-folder-bg:not(.is-mobile) .nav-files-container > div > .nav-folder {
&:nth-child(6n + 2) .nav-folder-title:not(:hover) {background-color: var(--i-lt-folder-bg-1, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) h / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 3) .nav-folder-title:not(:hover) {background-color: var(--i-lt-folder-bg-2, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 60) / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 4) .nav-folder-title:not(:hover) {background-color: var(--i-lt-folder-bg-3, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 120) / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 5) .nav-folder-title:not(:hover) {background-color: var(--i-lt-folder-bg-4, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 180) / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 6) .nav-folder-title:not(:hover) {background-color: var(--i-lt-folder-bg-5, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 240) / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 7) .nav-folder-title:not(:hover) {background-color: var(--i-lt-folder-bg-6, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 300) / var(--i-lt-folder-bg-a, 25%)));};
}

.is-mobile .nav-files-container > div > .nav-folder {
&:nth-child(6n + 2) .nav-folder-title {background-color: var(--i-lt-folder-bg-1, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) h / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 3) .nav-folder-title {background-color: var(--i-lt-folder-bg-2, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 60) / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 4) .nav-folder-title {background-color: var(--i-lt-folder-bg-3, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 120) / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 5) .nav-folder-title {background-color: var(--i-lt-folder-bg-4, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 180) / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 6) .nav-folder-title {background-color: var(--i-lt-folder-bg-5, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 240) / var(--i-lt-folder-bg-a, 25%)));};
&:nth-child(6n + 7) .nav-folder-title {background-color: var(--i-lt-folder-bg-6, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-bg-l, 90%) var(--i-lt-folder-bg-c, 20%) calc(h + 300) / var(--i-lt-folder-bg-a, 25%)));};
}

.i-lt-folder-bg:not(.i-lt-folder-borders-off) .nav-files-container > div > .nav-folder {
&:nth-child(6n + 2) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-lt-folder-border-1, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-border-l, 35%) var(--i-lt-folder-border-c, 10%) h / var(--i-lt-folder-border-a, 25%)));};
&:nth-child(6n + 3) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-lt-folder-border-2, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-border-l, 35%) var(--i-lt-folder-border-c, 10%) calc(h + 60) / var(--i-lt-folder-border-a, 25%)));};
&:nth-child(6n + 4) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-lt-folder-border-3, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-border-l, 35%) var(--i-lt-folder-border-c, 10%) calc(h + 120) / var(--i-lt-folder-border-a, 25%)));};
&:nth-child(6n + 5) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-lt-folder-border-4, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-border-l, 35%) var(--i-lt-folder-border-c, 10%) calc(h + 180) / var(--i-lt-folder-border-a, 25%)));};
&:nth-child(6n + 6) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-lt-folder-border-5, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-border-l, 35%) var(--i-lt-folder-border-c, 10%) calc(h + 240) / var(--i-lt-folder-border-a, 25%)));};
&:nth-child(6n + 7) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-lt-folder-border-6, oklch(from var(--i-lt-folder-bg-accent, red) var(--i-lt-folder-border-l, 35%) var(--i-lt-folder-border-c, 10%) calc(h + 300) / var(--i-lt-folder-border-a, 25%)));};
}`,
    },
    "i-lt-folder-bg-accent": {
      general: `.i-lt-folder-bg-accent {
--i-lt-folder-bg-accent: var(--color-accent);
}`,
    },
    "i-lt-white-folder-names": {
      light: `.i-lt-folder-bg.i-lt-white-folder-names .nav-files-container .nav-folder-title {
--nav-item-color: #fff;
}`,
    },
    "i-lt-folder-name": {
      general: `.i-lt-folder-name-accent {
--i-lt-folder-name-accent: var(--color-accent);
}`,
      light: `.i-lt-folder-name .nav-files-container > div > .nav-folder {
&:nth-child(6n + 2) .nav-folder-title {--nav-item-color: var(--i-lt-folder-name-1, oklch(from var(--i-lt-folder-name-accent, red) var(--i-lt-folder-name-l, 50%) var(--i-lt-folder-name-c, 50%) h));};
&:nth-child(6n + 3) .nav-folder-title {--nav-item-color: var(--i-lt-folder-name-2, oklch(from var(--i-lt-folder-name-accent, red) var(--i-lt-folder-name-l, 50%) var(--i-lt-folder-name-c, 50%) calc(h + 60)));};
&:nth-child(6n + 4) .nav-folder-title {--nav-item-color: var(--i-lt-folder-name-3, oklch(from var(--i-lt-folder-name-accent, red) var(--i-lt-folder-name-l, 50%) var(--i-lt-folder-name-c, 50%) calc(h + 120)));};
&:nth-child(6n + 5) .nav-folder-title {--nav-item-color: var(--i-lt-folder-name-4, oklch(from var(--i-lt-folder-name-accent, red) var(--i-lt-folder-name-l, 50%) var(--i-lt-folder-name-c, 50%) calc(h + 180)));};
&:nth-child(6n + 6) .nav-folder-title {--nav-item-color: var(--i-lt-folder-name-5, oklch(from var(--i-lt-folder-name-accent, red) var(--i-lt-folder-name-l, 50%) var(--i-lt-folder-name-c, 50%) calc(h + 240)));};
&:nth-child(6n + 7) .nav-folder-title {--nav-item-color: var(--i-lt-folder-name-6, oklch(from var(--i-lt-folder-name-accent, red) var(--i-lt-folder-name-l, 50%) var(--i-lt-folder-name-c, 50%) calc(h + 300)));};
}`,
    },
    "i-lt-folder-name-accent": {
      general: `.i-lt-folder-name-accent {
--i-lt-folder-name-accent: var(--color-accent);
}`,
    },
    "i-dk-folder-bg": {
      general: `.i-dk-folder-bg-accent {
--i-dk-folder-bg-accent: var(--color-accent);
}`,
      dark: `.i-dk-black-folder-names .nav-files-container .nav-folder-title {
--nav-item-color: #000;
}

:is(.theme-light.i-lt-folder-bg:not(.i-lt-folder-borders-off), .i-dk-folder-bg:not(.i-dk-folder-borders-off)) .nav-files-container .nav-folder .nav-folder-title {
border-radius: 5px;
}

.is-mobile:is(.theme-light.i-lt-folder-bg:not(.i-lt-folder-borders-off), .i-dk-folder-bg:not(.i-dk-folder-borders-off)) .nav-files-container .nav-folder .nav-folder-title {
border-radius: var(--nav-item-radius);
}

.i-dk-folder-bg:not(.is-mobile) .nav-files-container > div > .nav-folder {
&:nth-child(6n + 2) .nav-folder-title:not(:hover) {background-color: var(--i-dk-folder-bg-1, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) h / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 3) .nav-folder-title:not(:hover) {background-color: var(--i-dk-folder-bg-2, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 60) / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 4) .nav-folder-title:not(:hover) {background-color: var(--i-dk-folder-bg-3, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 120) / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 5) .nav-folder-title:not(:hover) {background-color: var(--i-dk-folder-bg-4, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 180) / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 6) .nav-folder-title:not(:hover) {background-color: var(--i-dk-folder-bg-5, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 240) / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 7) .nav-folder-title:not(:hover) {background-color: var(--i-dk-folder-bg-6, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 300) / var(--i-dk-folder-bg-a, 25%)));};
}

.is-mobile .nav-files-container > div > .nav-folder {
&:nth-child(6n + 2) .nav-folder-title {background-color: var(--i-dk-folder-bg-1, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) h / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 3) .nav-folder-title {background-color: var(--i-dk-folder-bg-2, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 60) / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 4) .nav-folder-title {background-color: var(--i-dk-folder-bg-3, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 120) / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 5) .nav-folder-title {background-color: var(--i-dk-folder-bg-4, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 180) / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 6) .nav-folder-title {background-color: var(--i-dk-folder-bg-5, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 240) / var(--i-dk-folder-bg-a, 25%)));};
&:nth-child(6n + 7) .nav-folder-title {background-color: var(--i-dk-folder-bg-6, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-bg-l, 70%) var(--i-dk-folder-bg-c, 25%) calc(h + 300) / var(--i-dk-folder-bg-a, 25%)));};
}

.i-dk-folder-bg:not(.i-dk-folder-borders-off) .nav-files-container > div > .nav-folder {
&:nth-child(6n + 2) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-dk-folder-border-1, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-border-l, 90%) var(--i-dk-folder-border-c, 25%) h / var(--i-dk-folder-border-a, 25%)));};
&:nth-child(6n + 3) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-dk-folder-border-2, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-border-l, 90%) var(--i-dk-folder-border-c, 25%) calc(h + 60) / var(--i-dk-folder-border-a, 25%)));};
&:nth-child(6n + 4) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-dk-folder-border-3, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-border-l, 90%) var(--i-dk-folder-border-c, 25%) calc(h + 120) / var(--i-dk-folder-border-a, 25%)));};
&:nth-child(6n + 5) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-dk-folder-border-4, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-border-l, 90%) var(--i-dk-folder-border-c, 25%) calc(h + 180) / var(--i-dk-folder-border-a, 25%)));};
&:nth-child(6n + 6) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-dk-folder-border-5, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-border-l, 90%) var(--i-dk-folder-border-c, 25%) calc(h + 240) / var(--i-dk-folder-border-a, 25%)));};
&:nth-child(6n + 7) .nav-folder-title {box-shadow: inset 0 0 0 1px var(--i-dk-folder-border-6, oklch(from var(--i-dk-folder-bg-accent, red) var(--i-dk-folder-border-l, 90%) var(--i-dk-folder-border-c, 25%) calc(h + 300) / var(--i-dk-folder-border-a, 25%)));};
}`,
      light: `:is(.i-lt-folder-bg:not(.i-lt-folder-borders-off), .theme-dark.i-dk-folder-bg:not(.i-dk-folder-borders-off)) .nav-files-container .nav-folder .nav-folder-title {
border-radius: 5px;
}

.is-mobile:is(.i-lt-folder-bg:not(.i-lt-folder-borders-off), .theme-dark.i-dk-folder-bg:not(.i-dk-folder-borders-off)) .nav-files-container .nav-folder .nav-folder-title {
border-radius: var(--nav-item-radius);
}`,
    },
    "i-dk-folder-bg-accent": {
      general: `.i-dk-folder-bg-accent {
--i-dk-folder-bg-accent: var(--color-accent);
}`,
    },
    "i-dk-black-folder-names": {
      dark: `.i-dk-folder-bg.i-dk-black-folder-names .nav-files-container .nav-folder-title {
--nav-item-color: #000;
}`,
    },
    "i-dk-folder-name": {
      general: `.i-dk-folder-name-accent {
--i-dk-folder-name-accent: var(--color-accent);
}`,
      dark: `.i-dk-folder-name .nav-files-container > div > .nav-folder {
&:nth-child(6n + 2) .nav-folder-title {--nav-item-color: var(--i-dk-folder-name-1, oklch(from var(--i-dk-folder-name-accent, red) var(--i-dk-folder-name-l, 80%) var(--i-dk-folder-name-c, 20%) h));};
&:nth-child(6n + 3) .nav-folder-title {--nav-item-color: var(--i-dk-folder-name-2, oklch(from var(--i-dk-folder-name-accent, red) var(--i-dk-folder-name-l, 80%) var(--i-dk-folder-name-c, 20%) calc(h + 60)));};
&:nth-child(6n + 4) .nav-folder-title {--nav-item-color: var(--i-dk-folder-name-3, oklch(from var(--i-dk-folder-name-accent, red) var(--i-dk-folder-name-l, 80%) var(--i-dk-folder-name-c, 20%) calc(h + 120)));};
&:nth-child(6n + 5) .nav-folder-title {--nav-item-color: var(--i-dk-folder-name-4, oklch(from var(--i-dk-folder-name-accent, red) var(--i-dk-folder-name-l, 80%) var(--i-dk-folder-name-c, 20%) calc(h + 180)));};
&:nth-child(6n + 6) .nav-folder-title {--nav-item-color: var(--i-dk-folder-name-5, oklch(from var(--i-dk-folder-name-accent, red) var(--i-dk-folder-name-l, 80%) var(--i-dk-folder-name-c, 20%) calc(h + 240)));};
&:nth-child(6n + 7) .nav-folder-title {--nav-item-color: var(--i-dk-folder-name-6, oklch(from var(--i-dk-folder-name-accent, red) var(--i-dk-folder-name-l, 80%) var(--i-dk-folder-name-c, 20%) calc(h + 300)));};
}`,
    },
    "i-dk-folder-name-accent": {
      general: `.i-dk-folder-name-accent {
--i-dk-folder-name-accent: var(--color-accent);
}`,
    },
    "i-calendar-remove-padding": {
      general: `.i-calendar-remove-padding:not(.is-mobile) #calendar-container.container {
padding: 0;
}`,
    },
    "i-notebook-navigator-hide-tab-titlebar": {
      general: `.i-notebook-navigator-hide-tab-titlebar:not(.is-mobile) .workspace-leaf-content[data-type=notebook-navigator] .view-header {
display: none;
}`,
    },
  },
};
