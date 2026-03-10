import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vauxhall",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --background-modifier-border-focus: color-mix(
    in srgb,
    rgb(11, 12, 45) 80%,
    rgb(179, 153, 255)
  );
  --background-modifier-border-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --background-modifier-error: #e3365e;
  --background-modifier-error-hover: #e3365e;
  --background-modifier-form-field: color-mix(in srgb, rgb(11, 12, 45) 80%, #000);
  --background-modifier-form-field-hover: color-mix(in srgb, rgb(11, 12, 45) 80%, #000);
  --background-modifier-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --background-modifier-success: #52eea3;
  --background-primary: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --background-primary-alt: color-mix(in srgb, rgb(11, 12, 45) 50%, #000);
  --background-secondary: color-mix(in srgb, rgb(11, 12, 45) 40%, #000);
  --background-secondary-alt: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --bases-cards-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --bases-cards-cover-background: color-mix(in srgb, rgb(11, 12, 45) 50%, #000);
  --bases-cards-shadow: 0 0 0 1px color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --bases-embed-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --bases-group-heading-property-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --bases-table-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --bases-table-cell-background-active: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --bases-table-cell-background-disabled: color-mix(in srgb, rgb(11, 12, 45) 50%, #000);
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in srgb,
    rgb(11, 12, 45) 80%,
    rgb(179, 153, 255)
  );
  --bases-table-group-background: color-mix(in srgb, rgb(11, 12, 45) 50%, #000);
  --bases-table-header-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --bases-table-header-background-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --bases-table-header-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --bases-table-summary-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --bases-table-summary-background-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --black: #000;
  --blue: #437cf3;
  --blue-violet: #6f51f4;
  --blur-background: color-mix(in srgb, color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  ) 65%, transparent) linear-gradient(color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  ), color-mix(in srgb, color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  ) 65%, transparent));
  --canvas-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --canvas-card-label-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --canvas-dot-pattern: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --caret-color: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --checkbox-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --checkbox-border-color-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --checkbox-marker-color: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --checklist-done-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --code-background: color-mix(in srgb, rgb(11, 12, 45) 80%, #000);
  --code-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --code-bracket-background: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --code-comment: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --code-function: #ffd85e;
  --code-important: #fa9f50;
  --code-keyword: #e54f9b;
  --code-normal: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --code-operator: #e3365e;
  --code-property: #43cfea;
  --code-punctuation: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --code-string: #52eea3;
  --code-tag: #e3365e;
  --code-value: #9446f8;
  --collapse-icon-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --color-base-00: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --color-base-05: color-mix(in srgb, rgb(11, 12, 45) 40%, #000);
  --color-base-10: color-mix(in srgb, rgb(11, 12, 45) 50%, #000);
  --color-base-100: color-mix(
    in srgb,
    rgb(11, 12, 45) 0%,
    rgb(179, 153, 255)
  );
  --color-base-20: color-mix(in srgb, rgb(11, 12, 45) 80%, #000);
  --color-base-25: color-mix(in srgb, rgb(11, 12, 45) 80%, #000);
  --color-base-30: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --color-base-35: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --color-base-40: color-mix(
    in srgb,
    rgb(11, 12, 45) 80%,
    rgb(179, 153, 255)
  );
  --color-base-50: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --color-base-60: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --color-base-70: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --color-blue: #437cf3;
  --color-cyan: #43cfea;
  --color-green: #52eea3;
  --color-orange: #fa9f50;
  --color-pink: #e54f9b;
  --color-purple: #9446f8;
  --color-red: #e3365e;
  --color-yellow: #ffd85e;
  --cool-cyan: #43cfea;
  --cool-gray: #515768;
  --cyan: #51e1e9;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --dropdown-background: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --dropdown-background-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  ), inset 0 0 0 1px color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --file-header-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --file-header-background-focused: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --flair-background: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --flair-color: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --footnote-divider-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --footnote-id-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --footnote-input-background-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --graph-line: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --graph-node: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --graph-node-attachment: #ffd85e;
  --graph-node-tag: #52eea3;
  --graph-node-unresolved: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --graph-text: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --gray: var(--text-muted);
  --h1-color: #43cfea;
  --h2-color: #54b6f8;
  --h3-color: #437cf3;
  --h4-color: #6f51f4;
  --h5-color: #9446f8;
  --h6-color: #c952ed;
  --heading-formatting: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --highlight: var(--text-highlight-bg);
  --hot-red: #e3365e;
  --hr-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --hue-bg: 238;
  --hue-fg: 255;
  --icon-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --icon-color-focused: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --icon-color-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --indentation-guide-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --indentation-guide-color-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --inline-title-color: #43cfea;
  --input-date-separator: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --input-placeholder-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --interactive-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --interactive-normal: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --light: var(--background-primary);
  --light-blue: #54b6f8;
  --lightgray: var(--background-secondary);
  --list-marker-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --list-marker-color-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --lum: 11%;
  --magenta: #e54f9b;
  --menu-background: color-mix(in srgb, rgb(11, 12, 45) 40%, #000);
  --menu-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --metadata-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --metadata-divider-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --metadata-input-background-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --metadata-input-text-color: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --metadata-label-background-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --metadata-label-text-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --metadata-label-text-color-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --metadata-property-background-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in srgb,
    rgb(11, 12, 45) 80%,
    rgb(179, 153, 255)
  );
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --mint: #52eea3;
  --modal-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --modal-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 80%,
    rgb(179, 153, 255)
  );
  --nav-collapse-icon-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --nav-collapse-icon-color-collapsed: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --nav-heading-color: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --nav-heading-color-collapsed-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --nav-heading-color-hover: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --nav-indentation-guide-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --nav-item-background-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --nav-item-background-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --nav-item-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --nav-item-color-active: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --nav-item-color-hover: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --nav-item-color-selected: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --nav-tag-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --nav-tag-color-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --nav-tag-color-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --pdf-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --pdf-page-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --pdf-shadow: 0 0 0 1px color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --pdf-sidebar-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --pill-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --pill-border-color-hover: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --pill-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --pill-color-hover: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --pill-color-remove: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --prompt-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --prompt-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 80%,
    rgb(179, 153, 255)
  );
  --purple: #c952ed;
  --raised-background: color-mix(in srgb, color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  ) 65%, transparent) linear-gradient(color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  ), color-mix(in srgb, color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  ) 65%, transparent));
  --ribbon-background: color-mix(in srgb, rgb(11, 12, 45) 40%, #000);
  --ribbon-background-collapsed: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --sat-bg: 60%;
  --sat-fg: 100%;
  --search-clear-button-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --search-icon-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --search-result-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --setting-group-heading-color: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --setting-items-background: color-mix(in srgb, rgb(11, 12, 45) 50%, #000);
  --setting-items-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --slider-thumb-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --slider-track-background: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --status-bar-background: color-mix(in srgb, rgb(11, 12, 45) 40%, #000);
  --status-bar-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --status-bar-text-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --suggestion-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --sync-avatar-color-1: #e3365e;
  --sync-avatar-color-2: #fa9f50;
  --sync-avatar-color-3: #ffd85e;
  --sync-avatar-color-4: #52eea3;
  --sync-avatar-color-5: #43cfea;
  --sync-avatar-color-6: #437cf3;
  --sync-avatar-color-7: #9446f8;
  --sync-avatar-color-8: #e54f9b;
  --tab-background-active: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --tab-container-background: color-mix(in srgb, rgb(11, 12, 45) 40%, #000);
  --tab-divider-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 95%,
    rgb(179, 153, 255)
  );
  --tab-outline-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --tab-switcher-background: color-mix(in srgb, rgb(11, 12, 45) 40%, #000);
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, rgb(11, 12, 45) 40%, #000), transparent);
  --tab-text-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --tab-text-color-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --tab-text-color-focused: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --tab-text-color-focused-active: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --tab-text-color-focused-active-current: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --table-add-button-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --table-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --table-drag-handle-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --table-header-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --table-header-color: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --text-error: #e3365e;
  --text-faint: color-mix(
    in srgb,
    rgb(11, 12, 45) 60%,
    rgb(179, 153, 255)
  );
  --text-highlight-bg: color-mix(in srgb, #43cfea 25%, transparent);
  --text-highlight-bg-active: color-mix(
    in srgb,
    #43cfea 25%,
    transparent
  );
  --text-muted: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --text-normal: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --text-success: #52eea3;
  --text-warning: #fa9f50;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: color-mix(in srgb, rgb(11, 12, 45) 25%, #000);
  --titlebar-background-focused: color-mix(in srgb, rgb(11, 12, 45) 50%, #000);
  --titlebar-border-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 90%,
    rgb(179, 153, 255)
  );
  --titlebar-text-color: color-mix(
    in srgb,
    rgb(11, 12, 45) 30%,
    rgb(179, 153, 255)
  );
  --titlebar-text-color-focused: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --vault-profile-color: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --vault-profile-color-hover: color-mix(in srgb, rgb(179, 153, 255) 30%, #fff);
  --vauxhall-bg: rgb(11, 12, 45);
  --vauxhall-fg: rgb(179, 153, 255);
  --violet: #9446f8;
  --white: #fff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: color(srgb 0.0176 0.01936 0.0704);
  color: color(srgb 0.91 0.88 1);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: color(srgb 0.011 0.0121 0.044);
  color: color(srgb 0.91 0.88 1);
}

body .page > div#quartz-body div.sidebar {
  background-color: color(srgb 0.0176 0.01936 0.0704);
  color: color(srgb 0.91 0.88 1);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: color(srgb 0.0176 0.01936 0.0704);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  color: color(srgb 0.91 0.88 1);
}

body div#quartz-root {
  background-color: color(srgb 0.011 0.0121 0.044);
  color: color(srgb 0.91 0.88 1);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body .page article p > em, em {
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body .page article p > i, i {
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body .page article p > strong, strong {
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body .text-highlight {
  background-color: color(srgb 0.262745 0.811765 0.917647 / 0.25);
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body del {
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration: line-through color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body p {
  color: color(srgb 0.5032 0.43452 0.7528);
  outline: color(srgb 0.5032 0.43452 0.7528) none 0px;
  text-decoration: color(srgb 0.5032 0.43452 0.7528);
  text-decoration-color: color(srgb 0.5032 0.43452 0.7528);
}`,
    lists: `body dd {
  color: color(srgb 0.91 0.88 1);
}

body dt {
  color: color(srgb 0.91 0.88 1);
}

body ol > li {
  color: color(srgb 0.91 0.88 1);
}

body ol.overflow {
  background-color: color(srgb 0.011 0.0121 0.044);
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body ul > li {
  color: color(srgb 0.91 0.88 1);
}

body ul.overflow {
  background-color: color(srgb 0.011 0.0121 0.044);
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    blockquotes: `body .data-footnote-backref {
  color: color(srgb 0.3064 0.26904 0.5056);
  text-decoration: color(srgb 0.3064 0.26904 0.5056);
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body table {
  color: color(srgb 0.91 0.88 1);
}

body td {
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: color(srgb 0.91 0.88 1);
}

body th {
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: color(srgb 0.91 0.88 1);
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.0352 0.03872 0.1408);
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.0352 0.03872 0.1408);
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: color(srgb 0.91 0.88 1);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 216, 94);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 216, 94);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 216, 94);
  border-left-color: rgb(255, 216, 94);
  border-right-color: rgb(255, 216, 94);
  border-top-color: rgb(255, 216, 94);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.0352 0.03872 0.1408);
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
}

body pre:has(> code) {
  background-color: color(srgb 0.0352 0.03872 0.1408);
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body figcaption {
  color: color(srgb 0.91 0.88 1);
}

body figure {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body img {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.91 0.88 1);
  border-radius: 6px;
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body video {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.022 0.0242 0.088);
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
}

body .footnotes {
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

body .transclude {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body .transclude-inner {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.5032 0.43452 0.7528);
  text-decoration: line-through color(srgb 0.5032 0.43452 0.7528);
  text-decoration-color: color(srgb 0.5032 0.43452 0.7528);
}

body input[type=checkbox] {
  border-bottom-color: color(srgb 0.3064 0.26904 0.5056);
  border-left-color: color(srgb 0.3064 0.26904 0.5056);
  border-right-color: color(srgb 0.3064 0.26904 0.5056);
  border-top-color: color(srgb 0.3064 0.26904 0.5056);
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: color(srgb 0.0352 0.03872 0.1408);
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: color(srgb 0.91 0.88 1);
}

body .search > .search-container > .search-space {
  background-color: color(srgb 0.011 0.0121 0.044);
  border-bottom-color: color(srgb 0.1752 0.15872 0.3408);
  border-left-color: color(srgb 0.1752 0.15872 0.3408);
  border-right-color: color(srgb 0.1752 0.15872 0.3408);
  border-top-color: color(srgb 0.1752 0.15872 0.3408);
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.91 0.88 1);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.91 0.88 1);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.0768 0.07598 0.2172);
  color: color(srgb 0.91 0.88 1);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.1752 0.15872 0.3408);
  border-left-color: color(srgb 0.1752 0.15872 0.3408);
  border-right-color: color(srgb 0.1752 0.15872 0.3408);
  border-top-color: color(srgb 0.1752 0.15872 0.3408);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.0176 0.01936 0.0704);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.0768 0.07598 0.2172);
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.0768 0.07598 0.2172);
  color: color(srgb 0.91 0.88 1);
}

body h1 {
  color: rgb(67, 207, 234);
}

body h2 {
  color: rgb(84, 182, 248);
}

body h2.page-title, h2.page-title a {
  color: rgb(67, 207, 234);
}

body h3 {
  color: rgb(67, 124, 243);
}

body h4 {
  color: rgb(111, 81, 244);
}

body h5 {
  color: rgb(148, 70, 248);
}

body h6 {
  color: rgb(201, 82, 237);
}

body hr {
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: color(srgb 0.011 0.0121 0.044) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.011 0.0121 0.044);
}

body ::-webkit-scrollbar-corner {
  background: color(srgb 0.011 0.0121 0.044) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.011 0.0121 0.044);
}

body ::-webkit-scrollbar-thumb {
  background: color(srgb 0.011 0.0121 0.044) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.011 0.0121 0.044);
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body ::-webkit-scrollbar-thumb:active {
  background: color(srgb 0.011 0.0121 0.044) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.011 0.0121 0.044);
}

body ::-webkit-scrollbar-thumb:hover {
  background: color(srgb 0.011 0.0121 0.044) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.011 0.0121 0.044);
}

body ::-webkit-scrollbar-track {
  background: color(srgb 0.011 0.0121 0.044) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.011 0.0121 0.044);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.5032 0.43452 0.7528);
  text-decoration: color(srgb 0.5032 0.43452 0.7528);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.5032 0.43452 0.7528);
  text-decoration: color(srgb 0.5032 0.43452 0.7528);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.5032 0.43452 0.7528);
  text-decoration: color(srgb 0.5032 0.43452 0.7528);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.0768 0.07598 0.2172);
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: color(srgb 0.5032 0.43452 0.7528);
}`,
    footer: `body footer {
  background-color: color(srgb 0.0176 0.01936 0.0704);
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: color(srgb 0.5032 0.43452 0.7528);
}

body footer ul li a {
  color: color(srgb 0.5032 0.43452 0.7528);
  text-decoration: color(srgb 0.5032 0.43452 0.7528);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.91 0.88 1);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.5032 0.43452 0.7528);
  text-decoration: color(srgb 0.5032 0.43452 0.7528);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.5032 0.43452 0.7528);
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body li.section-li > .section .meta {
  color: color(srgb 0.5032 0.43452 0.7528);
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.5032 0.43452 0.7528);
  text-decoration: color(srgb 0.5032 0.43452 0.7528);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: color(srgb 0.5032 0.43452 0.7528);
}

body .darkmode svg {
  color: color(srgb 0.5032 0.43452 0.7528);
  stroke: color(srgb 0.5032 0.43452 0.7528);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: color(srgb 0.5032 0.43452 0.7528);
}

body .breadcrumb-element p {
  color: color(srgb 0.3064 0.26904 0.5056);
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

body .metadata {
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: color(srgb 0.5032 0.43452 0.7528);
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: color(srgb 0.5032 0.43452 0.7528);
}

body .navigation-progress {
  background-color: color(srgb 0.0176 0.01936 0.0704);
}

body .page-header h2.page-title {
  color: color(srgb 0.91 0.88 1);
}

body abbr {
  color: color(srgb 0.91 0.88 1);
  text-decoration: underline dotted color(srgb 0.91 0.88 1);
}

body details {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: color(srgb 0.5032 0.43452 0.7528);
}

body kbd {
  background-color: color(srgb 0.0352 0.03872 0.1408);
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

body progress {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

body sub {
  color: color(srgb 0.91 0.88 1);
}

body summary {
  color: color(srgb 0.91 0.88 1);
}

body sup {
  color: color(srgb 0.91 0.88 1);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --background-modifier-border-focus: color-mix(
    in srgb,
    rgb(235, 235, 250) 80%,
    rgb(64, 0, 255)
  );
  --background-modifier-border-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --background-modifier-error: #e3365e;
  --background-modifier-error-hover: #e3365e;
  --background-modifier-form-field: color-mix(in srgb, rgb(235, 235, 250) 80%, #fff);
  --background-modifier-form-field-hover: color-mix(in srgb, rgb(235, 235, 250) 80%, #fff);
  --background-modifier-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --background-modifier-success: #47cc91;
  --background-primary: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --background-primary-alt: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --background-secondary: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --background-secondary-alt: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --bases-cards-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --bases-cards-cover-background: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --bases-cards-shadow: 0 0 0 1px color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --bases-cards-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --bases-embed-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --bases-group-heading-property-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --bases-table-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --bases-table-cell-background-active: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --bases-table-cell-background-disabled: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --bases-table-cell-shadow-active: 0 0 0 2px color-mix(
    in srgb,
    rgb(235, 235, 250) 80%,
    rgb(64, 0, 255)
  );
  --bases-table-group-background: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --bases-table-header-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --bases-table-header-background-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --bases-table-header-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --bases-table-summary-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --bases-table-summary-background-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --black: #000;
  --blue: #437cf3;
  --blue-violet: #6f51f4;
  --blur-background: color-mix(in srgb, color-mix(in srgb, rgb(235, 235, 250) 40%, #fff) 65%, transparent) linear-gradient(color-mix(in srgb, rgb(235, 235, 250) 40%, #fff), color-mix(in srgb, color-mix(in srgb, rgb(235, 235, 250) 40%, #fff) 65%, transparent));
  --canvas-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --canvas-card-label-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --canvas-dot-pattern: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --caret-color: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --checkbox-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --checkbox-border-color-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --checkbox-marker-color: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --checklist-done-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --code-background: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --code-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --code-bracket-background: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --code-comment: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --code-function: #ffd85e;
  --code-important: #fa9f50;
  --code-keyword: #e54f9b;
  --code-normal: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --code-operator: #e3365e;
  --code-property: #3bb2ce;
  --code-punctuation: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --code-string: #47cc91;
  --code-tag: #e3365e;
  --code-value: #9446f8;
  --collapse-icon-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --color-base-00: color-mix(in srgb, rgb(235, 235, 250) 25%, #fff);
  --color-base-05: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --color-base-10: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --color-base-100: color-mix(
    in srgb,
    rgb(235, 235, 250) 0%,
    rgb(64, 0, 255)
  );
  --color-base-20: color-mix(in srgb, rgb(235, 235, 250) 80%, #fff);
  --color-base-25: color-mix(in srgb, rgb(235, 235, 250) 80%, #fff);
  --color-base-30: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --color-base-35: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --color-base-40: color-mix(
    in srgb,
    rgb(235, 235, 250) 80%,
    rgb(64, 0, 255)
  );
  --color-base-50: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --color-base-60: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --color-base-70: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --color-blue: #437cf3;
  --color-cyan: #3bb2ce;
  --color-green: #47cc91;
  --color-orange: #fa9f50;
  --color-pink: #e54f9b;
  --color-purple: #9446f8;
  --color-red: #e3365e;
  --color-yellow: #ffd85e;
  --cool-cyan: #3bb2ce;
  --cool-gray: #515768;
  --cyan: #47c1cd;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --dropdown-background: color-mix(in srgb, rgb(235, 235, 250) 25%, #fff);
  --dropdown-background-hover: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --embed-block-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  ), inset 0 0 0 1px color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --file-header-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --file-header-background-focused: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --flair-background: color-mix(in srgb, rgb(235, 235, 250) 25%, #fff);
  --flair-color: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --footnote-divider-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --footnote-id-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --footnote-id-color-no-occurrences: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --footnote-input-background-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --graph-line: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --graph-node: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --graph-node-attachment: #ffd85e;
  --graph-node-tag: #47cc91;
  --graph-node-unresolved: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --graph-text: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --gray: var(--text-muted);
  --h1-color: #3bb2ce;
  --h2-color: #54b6f8;
  --h3-color: #437cf3;
  --h4-color: #6f51f4;
  --h5-color: #9446f8;
  --h6-color: #c952ed;
  --heading-formatting: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --highlight: var(--text-highlight-bg);
  --hot-red: #e3365e;
  --hr-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --hue-bg: 238;
  --hue-fg: 255;
  --icon-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --icon-color-focused: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --icon-color-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --indentation-guide-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --indentation-guide-color-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --inline-title-color: #3bb2ce;
  --input-date-separator: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --input-placeholder-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --interactive-hover: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --interactive-normal: color-mix(in srgb, rgb(235, 235, 250) 25%, #fff);
  --light: var(--background-primary);
  --light-blue: #54b6f8;
  --lightgray: var(--background-secondary);
  --list-marker-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --list-marker-color-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --lum: 11%;
  --lum-bg: 95%;
  --lum-fg: 50%;
  --magenta: #e54f9b;
  --menu-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --menu-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --metadata-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --metadata-divider-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --metadata-input-background-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --metadata-input-text-color: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --metadata-label-background-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --metadata-label-text-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --metadata-label-text-color-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --metadata-property-background-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --metadata-property-box-shadow-focus: 0 0 0 2px color-mix(
    in srgb,
    rgb(235, 235, 250) 80%,
    rgb(64, 0, 255)
  );
  --metadata-property-box-shadow-hover: 0 0 0 1px color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --mint: #47cc91;
  --modal-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --modal-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 80%,
    rgb(64, 0, 255)
  );
  --nav-collapse-icon-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --nav-collapse-icon-color-collapsed: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --nav-heading-color: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --nav-heading-color-collapsed: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --nav-heading-color-collapsed-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --nav-heading-color-hover: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --nav-indentation-guide-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --nav-item-background-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --nav-item-background-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --nav-item-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --nav-item-color-active: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --nav-item-color-hover: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --nav-item-color-selected: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --nav-tag-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --nav-tag-color-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --nav-tag-color-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --pdf-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --pdf-page-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --pdf-sidebar-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --pill-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --pill-border-color-hover: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --pill-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --pill-color-hover: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --pill-color-remove: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --prompt-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --prompt-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 80%,
    rgb(64, 0, 255)
  );
  --purple: #c952ed;
  --raised-background: color-mix(in srgb, color-mix(in srgb, rgb(235, 235, 250) 40%, #fff) 65%, transparent) linear-gradient(color-mix(in srgb, rgb(235, 235, 250) 40%, #fff), color-mix(in srgb, color-mix(in srgb, rgb(235, 235, 250) 40%, #fff) 65%, transparent));
  --ribbon-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --ribbon-background-collapsed: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --sat-bg: 60%;
  --sat-fg: 100%;
  --search-clear-button-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --search-icon-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --search-result-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --setting-group-heading-color: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --setting-items-background: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --setting-items-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --slider-thumb-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --slider-track-background: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --status-bar-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --status-bar-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --status-bar-text-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --suggestion-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --sync-avatar-color-1: #e3365e;
  --sync-avatar-color-2: #fa9f50;
  --sync-avatar-color-3: #ffd85e;
  --sync-avatar-color-4: #47cc91;
  --sync-avatar-color-5: #3bb2ce;
  --sync-avatar-color-6: #437cf3;
  --sync-avatar-color-7: #9446f8;
  --sync-avatar-color-8: #e54f9b;
  --tab-background-active: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --tab-container-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --tab-divider-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 95%,
    rgb(64, 0, 255)
  );
  --tab-outline-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --tab-switcher-background: color-mix(in srgb, rgb(235, 235, 250) 40%, #fff);
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, rgb(235, 235, 250) 40%, #fff), transparent);
  --tab-text-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --tab-text-color-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --tab-text-color-focused: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --tab-text-color-focused-active: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --tab-text-color-focused-active-current: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --table-add-button-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --table-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --table-drag-handle-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --table-header-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --table-header-color: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --text-error: #e3365e;
  --text-faint: color-mix(
    in srgb,
    rgb(235, 235, 250) 60%,
    rgb(64, 0, 255)
  );
  --text-highlight-bg: color-mix(in srgb, #3bb2ce 25%, transparent);
  --text-highlight-bg-active: color-mix(
    in srgb,
    #3bb2ce 25%,
    transparent
  );
  --text-muted: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --text-normal: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --text-success: #47cc91;
  --text-warning: #fa9f50;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: color-mix(in srgb, rgb(235, 235, 250) 25%, #fff);
  --titlebar-background-focused: color-mix(in srgb, rgb(235, 235, 250) 50%, #fff);
  --titlebar-border-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 90%,
    rgb(64, 0, 255)
  );
  --titlebar-text-color: color-mix(
    in srgb,
    rgb(235, 235, 250) 30%,
    rgb(64, 0, 255)
  );
  --titlebar-text-color-focused: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --vault-profile-color: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --vault-profile-color-hover: color-mix(in srgb, rgb(64, 0, 255) 50%, #000);
  --vauxhall-bg: rgb(235, 235, 250);
  --vauxhall-fg: rgb(64, 0, 255);
  --violet: #9446f8;
  --white: #fff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: color(srgb 0.968 0.9688 0.992);
  color: color(srgb 0.125 0 0.5);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: color(srgb 0.968 0.9688 0.992);
  color: color(srgb 0.125 0 0.5);
}

body .page > div#quartz-body div.sidebar {
  background-color: color(srgb 0.968 0.9688 0.992);
  color: color(srgb 0.125 0 0.5);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.853 0.8298 0.982);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: color(srgb 0.968 0.9688 0.992);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  color: color(srgb 0.125 0 0.5);
}

body div#quartz-root {
  background-color: color(srgb 0.968 0.9688 0.992);
  color: color(srgb 0.125 0 0.5);
}`,
    typography: `body .page article p > b, b {
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body .page article p > em, em {
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body .page article p > i, i {
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body .page article p > strong, strong {
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body .text-highlight {
  background-color: color(srgb 0.231373 0.698039 0.807843 / 0.25);
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body del {
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration: line-through color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body p {
  color: color(srgb 0.451 0.2766 0.994);
  outline: color(srgb 0.451 0.2766 0.994) none 0px;
  text-decoration: color(srgb 0.451 0.2766 0.994);
  text-decoration-color: color(srgb 0.451 0.2766 0.994);
}`,
    lists: `body dd {
  color: color(srgb 0.125 0 0.5);
}

body dt {
  color: color(srgb 0.125 0 0.5);
}

body ol > li {
  color: color(srgb 0.125 0 0.5);
}

body ol.overflow {
  background-color: color(srgb 0.968 0.9688 0.992);
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body ul > li {
  color: color(srgb 0.125 0 0.5);
}

body ul.overflow {
  background-color: color(srgb 0.968 0.9688 0.992);
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    blockquotes: `body .data-footnote-backref {
  color: color(srgb 0.652 0.5532 0.988);
  text-decoration: color(srgb 0.652 0.5532 0.988);
}`,
    tables: `body .table-container {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body table {
  color: color(srgb 0.125 0 0.5);
}

body td {
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: color(srgb 0.125 0 0.5);
}

body th {
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: color(srgb 0.125 0 0.5);
}`,
    code: `body code {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: color(srgb 0.853 0.8298 0.982);
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: color(srgb 0.853 0.8298 0.982);
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: color(srgb 0.125 0 0.5);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 216, 94);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 216, 94);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 216, 94);
  border-left-color: rgb(255, 216, 94);
  border-right-color: rgb(255, 216, 94);
  border-top-color: rgb(255, 216, 94);
}

body pre > code, pre:has(> code) {
  background-color: color(srgb 0.853 0.8298 0.982);
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
}

body pre:has(> code) {
  background-color: color(srgb 0.853 0.8298 0.982);
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
}`,
    images: `body audio {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body figcaption {
  color: color(srgb 0.125 0 0.5);
}

body figure {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body img {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: color(srgb 0.125 0 0.5);
  border-radius: 6px;
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body video {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    embeds: `body .file-embed {
  background-color: color(srgb 0.96 0.961 0.99);
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
}

body .footnotes {
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

body .transclude {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body .transclude-inner {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: color(srgb 0.451 0.2766 0.994);
  text-decoration: line-through color(srgb 0.451 0.2766 0.994);
  text-decoration-color: color(srgb 0.451 0.2766 0.994);
}

body input[type=checkbox] {
  border-bottom-color: color(srgb 0.652 0.5532 0.988);
  border-left-color: color(srgb 0.652 0.5532 0.988);
  border-right-color: color(srgb 0.652 0.5532 0.988);
  border-top-color: color(srgb 0.652 0.5532 0.988);
}

body li.task-list-item[data-task='!'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='*'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='-'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='/'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='>'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='?'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='I'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='S'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='b'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='c'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='d'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='f'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='i'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='k'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='l'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='p'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='u'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body li.task-list-item[data-task='w'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: color(srgb 0.936 0.9376 0.984);
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: color(srgb 0.125 0 0.5);
}

body .search > .search-container > .search-space {
  background-color: color(srgb 0.968 0.9688 0.992);
  border-bottom-color: color(srgb 0.786 0.7376 0.984);
  border-left-color: color(srgb 0.786 0.7376 0.984);
  border-right-color: color(srgb 0.786 0.7376 0.984);
  border-top-color: color(srgb 0.786 0.7376 0.984);
}

body .search > .search-container > .search-space > * {
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.125 0 0.5);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: color(srgb 0.125 0 0.5);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.8865 0.8759 0.981);
  color: color(srgb 0.125 0 0.5);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.786 0.7376 0.984);
  border-left-color: color(srgb 0.786 0.7376 0.984);
  border-right-color: color(srgb 0.786 0.7376 0.984);
  border-top-color: color(srgb 0.786 0.7376 0.984);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.968 0.9688 0.992);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: color(srgb 0.8865 0.8759 0.981);
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: color(srgb 0.8865 0.8759 0.981);
  color: color(srgb 0.125 0 0.5);
}

body h1 {
  color: rgb(59, 178, 206);
}

body h2 {
  color: rgb(84, 182, 248);
}

body h2.page-title, h2.page-title a {
  color: rgb(59, 178, 206);
}

body h3 {
  color: rgb(67, 124, 243);
}

body h4 {
  color: rgb(111, 81, 244);
}

body h5 {
  color: rgb(148, 70, 248);
}

body h6 {
  color: rgb(201, 82, 237);
}

body hr {
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: color(srgb 0.968 0.9688 0.992) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.968 0.9688 0.992);
}

body ::-webkit-scrollbar-corner {
  background: color(srgb 0.968 0.9688 0.992) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.968 0.9688 0.992);
}

body ::-webkit-scrollbar-thumb {
  background: color(srgb 0.968 0.9688 0.992) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.968 0.9688 0.992);
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body ::-webkit-scrollbar-thumb:active {
  background: color(srgb 0.968 0.9688 0.992) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.968 0.9688 0.992);
}

body ::-webkit-scrollbar-thumb:hover {
  background: color(srgb 0.968 0.9688 0.992) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.968 0.9688 0.992);
}

body ::-webkit-scrollbar-track {
  background: color(srgb 0.968 0.9688 0.992) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: color(srgb 0.968 0.9688 0.992);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: color(srgb 0.451 0.2766 0.994);
  text-decoration: color(srgb 0.451 0.2766 0.994);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: color(srgb 0.451 0.2766 0.994);
  text-decoration: color(srgb 0.451 0.2766 0.994);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: color(srgb 0.451 0.2766 0.994);
  text-decoration: color(srgb 0.451 0.2766 0.994);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: color(srgb 0.8865 0.8759 0.981);
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: color(srgb 0.451 0.2766 0.994);
}`,
    footer: `body footer {
  background-color: color(srgb 0.968 0.9688 0.992);
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: color(srgb 0.451 0.2766 0.994);
}

body footer ul li a {
  color: color(srgb 0.451 0.2766 0.994);
  text-decoration: color(srgb 0.451 0.2766 0.994);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: color(srgb 0.125 0 0.5);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: color(srgb 0.451 0.2766 0.994);
  text-decoration: color(srgb 0.451 0.2766 0.994);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.451 0.2766 0.994);
}`,
    listPage: `body li.section-li {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body li.section-li > .section .meta {
  color: color(srgb 0.451 0.2766 0.994);
}

body li.section-li > .section > .desc > h3 > a {
  color: color(srgb 0.451 0.2766 0.994);
  text-decoration: color(srgb 0.451 0.2766 0.994);
}

body ul.section-ul {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: color(srgb 0.451 0.2766 0.994);
}

body .darkmode svg {
  color: color(srgb 0.451 0.2766 0.994);
  stroke: color(srgb 0.451 0.2766 0.994);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: color(srgb 0.451 0.2766 0.994);
}

body .breadcrumb-element p {
  color: color(srgb 0.652 0.5532 0.988);
}`,
    misc: `body .katex-display {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

body .metadata {
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: color(srgb 0.451 0.2766 0.994);
}

body .metadata-properties {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: color(srgb 0.451 0.2766 0.994);
}

body .navigation-progress {
  background-color: color(srgb 0.968 0.9688 0.992);
}

body .page-header h2.page-title {
  color: color(srgb 0.125 0 0.5);
}

body abbr {
  color: color(srgb 0.125 0 0.5);
  text-decoration: underline dotted color(srgb 0.125 0 0.5);
}

body details {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body input[type=text] {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: color(srgb 0.451 0.2766 0.994);
}

body kbd {
  background-color: color(srgb 0.853 0.8298 0.982);
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

body progress {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

body sub {
  color: color(srgb 0.125 0 0.5);
}

body summary {
  color: color(srgb 0.125 0 0.5);
}

body sup {
  color: color(srgb 0.125 0 0.5);
}`,
  },
};
