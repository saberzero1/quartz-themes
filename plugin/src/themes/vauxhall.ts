import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vauxhall",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
    styleSettingsId: "vauxhall",
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --background-modifier-border-focus: var(--color-base-40, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 80%,
    hsl(255, 100%, 80%)
  ));
  --background-modifier-border-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --background-modifier-error: var(--color-red, #e3365e);
  --background-modifier-error-hover: var(--color-red, #e3365e);
  --background-modifier-form-field: var(--color-base-20, color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000));
  --background-modifier-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --background-modifier-success: var(--color-green, #52eea3);
  --background-primary: var(--color-base-00, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --background-primary-alt: var(--color-base-10, color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000));
  --background-secondary: var(--color-base-05, color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000));
  --background-secondary-alt: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --bases-cards-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --bases-group-heading-property-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --bases-table-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --bases-table-cell-background-active: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000));
  --bases-table-group-background: var(--background-primary-alt, color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000));
  --bases-table-header-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --bases-table-header-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --bases-table-header-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --bases-table-summary-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --bases-table-summary-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --black: #000;
  --blue: #437cf3;
  --blue-violet: #6f51f4;
  --canvas-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --canvas-card-label-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --canvas-dot-pattern: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --caret-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --checkbox-border-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --checkbox-border-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --checkbox-marker-color: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --checklist-done-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --code-background: var(--color-base-25, color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000));
  --code-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --code-bracket-background: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --code-function: var(--color-yellow, #ffd85e);
  --code-important: var(--color-orange, #fa9f50);
  --code-keyword: var(--color-pink, #e54f9b);
  --code-normal: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --code-operator: var(--color-red, #e3365e);
  --code-property: var(--color-cyan, #43cfea);
  --code-punctuation: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --code-string: var(--color-green, #52eea3);
  --code-tag: var(--color-red, #e3365e);
  --code-value: var(--color-purple, #9446f8);
  --collapse-icon-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --color-base-00: color-mix(in srgb, var(--vauxhall-bg) 25%, var(--black));
  --color-base-05: color-mix(in srgb, var(--vauxhall-bg) 40%, var(--black));
  --color-base-10: color-mix(in srgb, var(--vauxhall-bg) 50%, var(--black));
  --color-base-100: color-mix(
    in srgb,
    var(--vauxhall-bg) 0%,
    var(--vauxhall-fg)
  );
  --color-base-20: color-mix(in srgb, var(--vauxhall-bg) 80%, var(--black));
  --color-base-25: color-mix(in srgb, var(--vauxhall-bg) 80%, var(--black));
  --color-base-30: color-mix(
    in srgb,
    var(--vauxhall-bg) 90%,
    var(--vauxhall-fg)
  );
  --color-base-35: color-mix(
    in srgb,
    var(--vauxhall-bg) 95%,
    var(--vauxhall-fg)
  );
  --color-base-40: color-mix(
    in srgb,
    var(--vauxhall-bg) 80%,
    var(--vauxhall-fg)
  );
  --color-base-50: color-mix(
    in srgb,
    var(--vauxhall-bg) 60%,
    var(--vauxhall-fg)
  );
  --color-base-60: color-mix(
    in srgb,
    var(--vauxhall-bg) 60%,
    var(--vauxhall-fg)
  );
  --color-base-70: color-mix(
    in srgb,
    var(--vauxhall-bg) 30%,
    var(--vauxhall-fg)
  );
  --color-blue: var(--blue, #437cf3);
  --color-cyan: var(--cool-cyan, #43cfea);
  --color-green: var(--mint, #52eea3);
  --color-orange: #fa9f50;
  --color-pink: var(--magenta, #e54f9b);
  --color-purple: var(--violet, #9446f8);
  --color-red: var(--hot-red, #e3365e);
  --color-yellow: #ffd85e;
  --cool-cyan: #43cfea;
  --cool-gray: #515768;
  --cyan: #51e1e9;
  --dark: var(--text-normal, color-mix(in srgb, var(--vauxhall-fg) 30%, var(--white)));
  --darkgray: var(--text-normal, color-mix(in srgb, var(--vauxhall-fg) 30%, var(--white)));
  --divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --dropdown-background: var(--interactive-normal, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --dropdown-background-hover: var(--interactive-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --file-header-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --file-header-background-focused: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --flair-background: var(--interactive-normal, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --flair-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --footnote-id-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --footnote-id-color-no-occurrences: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --graph-node: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --graph-node-attachment: var(--color-yellow, #ffd85e);
  --graph-node-tag: var(--color-green, #52eea3);
  --graph-node-unresolved: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --graph-text: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --gray: var(--text-muted, var(--color-base-70, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  )));
  --h1-color: var(--cool-cyan, #43cfea);
  --h2-color: var(--light-blue, #54b6f8);
  --h3-color: var(--blue, #437cf3);
  --h4-color: var(--blue-violet, #6f51f4);
  --h5-color: var(--violet, #9446f8);
  --h6-color: var(--purple, #c952ed);
  --heading-formatting: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --highlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --hot-red: #e3365e;
  --hr-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --hue-bg: 238;
  --hue-fg: 255;
  --icon-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --icon-color-focused: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --icon-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --indentation-guide-color: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --indentation-guide-color-active: var(--color-base-35, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --inline-title-color: var(--h1-color, #43cfea);
  --input-date-separator: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --input-placeholder-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --interactive-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --interactive-normal: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --light: var(--background-primary, var(--color-base-00, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000)));
  --light-blue: #54b6f8;
  --lightgray: var(--background-secondary, var(--color-base-05, color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000)));
  --list-marker-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --list-marker-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --lum: 11%;
  --magenta: #e54f9b;
  --menu-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --metadata-input-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --metadata-input-text-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --metadata-label-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --metadata-label-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --metadata-property-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --mint: #52eea3;
  --modal-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --nav-collapse-icon-color: var(--collapse-icon-color, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --nav-collapse-icon-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --nav-heading-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --nav-heading-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --nav-heading-color-hover: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --nav-indentation-guide-color: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --nav-item-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --nav-item-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --nav-item-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --nav-item-color-active: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --nav-item-color-hover: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --nav-item-color-selected: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --nav-tag-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --nav-tag-color-active: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --nav-tag-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --pdf-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --pdf-page-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --pdf-sidebar-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --pill-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --pill-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --pill-color-hover: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --pill-color-remove: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --prompt-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --purple: #c952ed;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ) 65%, transparent) linear-gradient(color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ), color-mix(in srgb, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ) 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000));
  --ribbon-background-collapsed: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --sat-bg: 60%;
  --sat-fg: 100%;
  --search-clear-button-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --search-icon-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --search-result-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --setting-group-heading-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --setting-items-background: var(--background-primary-alt, color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000));
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --shiki-code-background: var(--code-background, color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000));
  --shiki-code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --shiki-code-function: var(--color-green, #52eea3);
  --shiki-code-important: var(--color-orange, #fa9f50);
  --shiki-code-keyword: var(--color-pink, #e54f9b);
  --shiki-code-normal: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --shiki-code-property: var(--color-cyan, #43cfea);
  --shiki-code-punctuation: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --shiki-code-string: var(--color-yellow, #ffd85e);
  --shiki-code-value: var(--color-purple, #9446f8);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --shiki-gutter-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --shiki-terminal-dots-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --slider-track-background: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --status-bar-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000));
  --status-bar-border-color: var(--divider-color, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --status-bar-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --suggestion-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --sync-avatar-color-1: var(--color-red, #e3365e);
  --sync-avatar-color-2: var(--color-orange, #fa9f50);
  --sync-avatar-color-3: var(--color-yellow, #ffd85e);
  --sync-avatar-color-4: var(--color-green, #52eea3);
  --sync-avatar-color-5: var(--color-cyan, #43cfea);
  --sync-avatar-color-6: var(--color-blue, #437cf3);
  --sync-avatar-color-7: var(--color-purple, #9446f8);
  --sync-avatar-color-8: var(--color-pink, #e54f9b);
  --tab-background-active: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --tab-container-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000));
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  ));
  --tab-outline-color: var(--divider-color, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --tab-switcher-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000));
  --tab-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --tab-text-color-active: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --tab-text-color-focused: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --tab-text-color-focused-active: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --tab-text-color-focused-active-current: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --table-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --table-drag-handle-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --table-header-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --table-header-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --text-error: var(--color-red, #e3365e);
  --text-faint: var(--color-base-50, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  ));
  --text-highlight-bg: color-mix(in srgb, var(--h1-color) 25%, transparent);
  --text-highlight-bg-active: color-mix(
    in srgb,
    var(--h1-color) 25%,
    transparent
  );
  --text-muted: var(--color-base-70, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --text-normal: color-mix(in srgb, var(--vauxhall-fg) 30%, var(--white));
  --text-success: var(--color-green, #52eea3);
  --text-warning: var(--color-orange, #fa9f50);
  --textHighlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --titlebar-background: var(--color-base-00, color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000));
  --titlebar-background-focused: var(--color-base-10, color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000));
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ));
  --titlebar-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  ));
  --titlebar-text-color-focused: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --vault-profile-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --vault-profile-color-hover: var(--vault-profile-color, color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff));
  --vauxhall-bg: hsl(var(--hue-bg), var(--sat-bg), var(--lum));
  --vauxhall-fg: hsl(var(--hue-fg), var(--sat-fg), 80%);
  --violet: #9446f8;
  --white: #fff;
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, color(srgb 0.0176 0.01936 0.0704));
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, color(srgb 0.011 0.0121 0.044));
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, color(srgb 0.0176 0.01936 0.0704));
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, color(srgb 0.0176 0.01936 0.0704));
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  color: color(srgb 0.91 0.88 1);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, color(srgb 0.91 0.88 1));
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, color(srgb 0.91 0.88 1));
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, color(srgb 0.91 0.88 1));
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, color(srgb 0.91 0.88 1));
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, color(srgb 0.262745 0.811765 0.917647 / 0.25));
  color: var(--text-normal, color(srgb 0.91 0.88 1));
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, color(srgb 0.91 0.88 1));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.3064 0.26904 0.5056);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, color(srgb 0.5032 0.43452 0.7528));
  outline: color(srgb 0.5032 0.43452 0.7528) none 0px;
  text-decoration-color: color(srgb 0.5032 0.43452 0.7528);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body dt {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body ol > li {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, color(srgb 0.3064 0.26904 0.5056));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body table {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: var(--table-text-color, color(srgb 0.91 0.88 1));
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: var(--table-header-color, color(srgb 0.91 0.88 1));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, color(srgb 0.0352 0.03872 0.1408));
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: var(--code-normal, color(srgb 0.91 0.88 1));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.0352 0.03872 0.1408));
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body figcaption {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(67, 207, 234);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(67, 207, 234);
  border-radius: 6px;
  border-right-color: rgb(67, 207, 234);
  border-top-color: rgb(67, 207, 234);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, color(srgb 0.022 0.0242 0.088));
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.3064 0.26904 0.5056);
  border-left-color: color(srgb 0.3064 0.26904 0.5056);
  border-right-color: color(srgb 0.3064 0.26904 0.5056);
  border-top-color: color(srgb 0.3064 0.26904 0.5056);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.91 0.88 1);
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.011 0.0121 0.044);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.011 0.0121 0.044);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 159, 80);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.3064 0.26904 0.5056);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 216, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(67, 207, 234);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(67, 124, 243);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(67, 124, 243);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 216, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 216, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 70, 248);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 238, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 238, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(82, 238, 163);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 83, 223, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 251, 70, 76);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --background-modifier-border-focus: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 80%,
    hsl(255, 100%, 80%)
  );
  --background-modifier-border-hover: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --background-modifier-error: #e3365e;
  --background-modifier-error-hover: #e3365e;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000);
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000);
  --background-modifier-hover: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --background-modifier-success: #52eea3;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-primary: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --background-primary-alt: color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000);
  --background-secondary: color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000);
  --background-secondary-alt: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --blockquote-border-color: hsl(258, 88%, 66%);
  --blur-background: color-mix(in srgb, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ) 65%, transparent) linear-gradient(color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ), color-mix(in srgb, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: lighten;
  --callout-bug: 251, 70, 76;
  --callout-color: var(--callout-default, 2, 122, 255);
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 233, 151, 63;
  --callout-radius: 4px;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-title-weight: 600;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --caret-color: color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff);
  --checkbox-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --checkbox-border-color-hover: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --checkbox-color: hsl(258, 88%, 66%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --clickable-icon-radius: 4px;
  --code-background: color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000);
  --code-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --code-bracket-background: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --code-comment: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --code-function: #ffd85e;
  --code-important: #fa9f50;
  --code-keyword: #e54f9b;
  --code-normal: color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff);
  --code-operator: #e3365e;
  --code-property: #43cfea;
  --code-punctuation: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #52eea3;
  --code-tag: #e3365e;
  --code-value: #9446f8;
  --collapse-icon-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --collapse-icon-color-collapsed: hsl(255, 89.76%, 75.9%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(255, 89.76%, 75.9%);
  --color-accent-2: hsl(253, 92.4%, 85.14%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-00: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --color-base-05: color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000);
  --color-base-10: color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000);
  --color-base-100: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 0%,
    hsl(255, 100%, 80%)
  );
  --color-base-20: color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000);
  --color-base-25: color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000);
  --color-base-30: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --color-base-35: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --color-base-40: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 80%,
    hsl(255, 100%, 80%)
  );
  --color-base-50: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --color-base-60: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --color-base-70: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --color-blue: #437cf3;
  --color-cyan: #43cfea;
  --color-green: #52eea3;
  --color-pink: #e54f9b;
  --color-purple: #9446f8;
  --color-red: #e3365e;
  --divider-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --divider-color-hover: hsl(258, 88%, 66%);
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --dropdown-background-hover: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --flair-color: color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --graph-node: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --graph-node-attachment: #ffd85e;
  --graph-node-focused: hsl(255, 89.76%, 75.9%);
  --graph-node-tag: #52eea3;
  --graph-node-unresolved: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --graph-text: color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff);
  --h1-color: #43cfea;
  --h2-color: #54b6f8;
  --h3-color: #437cf3;
  --h4-color: #6f51f4;
  --h5-color: #9446f8;
  --h5-line-height: 1.5;
  --h6-color: #c952ed;
  --h6-line-height: 1.5;
  --heading-formatting: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --heading-spacing: 2.5rem;
  --hr-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --interactive-accent: hsl(258, 88%, 66%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --interactive-normal: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --link-color: hsl(255, 89.76%, 75.9%);
  --link-color-hover: hsl(253, 92.4%, 85.14%);
  --link-external-color: hsl(255, 89.76%, 75.9%);
  --link-external-color-hover: hsl(253, 92.4%, 85.14%);
  --link-unresolved-color: hsl(255, 89.76%, 75.9%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000);
  --menu-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121), 0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --pdf-background: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --pdf-page-background: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --pdf-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --pdf-sidebar-background: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --pdf-thumbnail-shadow: 0 0 0 1px color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ) 65%, transparent) linear-gradient(color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ), color-mix(in srgb, color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  ) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --search-icon-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --search-result-background: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --setting-group-heading-color: color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: color-mix(in srgb, hsl(238, 60%, 11%) 50%, #000);
  --setting-items-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --shiki-code-background: color-mix(in srgb, hsl(238, 60%, 11%) 80%, #000);
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --shiki-code-function: #52eea3;
  --shiki-code-important: #fa9f50;
  --shiki-code-keyword: #e54f9b;
  --shiki-code-normal: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --shiki-code-property: #43cfea;
  --shiki-code-punctuation: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --shiki-code-string: #ffd85e;
  --shiki-code-value: #9446f8;
  --shiki-gutter-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --shiki-gutter-text-color-highlight: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --shiki-highlight-green: rgba(68, 207, 110, 0.5);
  --shiki-highlight-green-background: rgba(68, 207, 110, 0.1);
  --shiki-highlight-neutral: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --shiki-highlight-neutral-background: rgba(255, 255, 255, 0.05);
  --shiki-highlight-red: rgba(251, 70, 76, 0.5);
  --shiki-highlight-red-background: rgba(251, 70, 76, 0.1);
  --shiki-terminal-dots-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --sync-avatar-color-1: #e3365e;
  --sync-avatar-color-2: #fa9f50;
  --sync-avatar-color-3: #ffd85e;
  --sync-avatar-color-4: #52eea3;
  --sync-avatar-color-5: #43cfea;
  --sync-avatar-color-6: #437cf3;
  --sync-avatar-color-7: #9446f8;
  --sync-avatar-color-8: #e54f9b;
  --tab-background-active: color-mix(in srgb, hsl(238, 60%, 11%) 25%, #000);
  --tab-divider-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 95%,
    hsl(255, 100%, 80%)
  );
  --tab-font-size: 13px;
  --tab-outline-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000);
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(238, 60%, 11%) 40%, #000), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --tab-text-color-active: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --tab-text-color-focused: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --tab-text-color-focused-active: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --tab-text-color-focused-active-current: color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff);
  --tab-text-color-focused-highlighted: hsl(255, 89.76%, 75.9%);
  --table-add-button-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(258, 88%, 66%);
  --table-drag-handle-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 90%,
    hsl(255, 100%, 80%)
  );
  --table-header-border-width: 1px;
  --table-header-color: color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: lighten;
  --table-selection-border-color: hsl(258, 88%, 66%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(255, 89.76%, 75.9%);
  --tag-color-hover: hsl(255, 89.76%, 75.9%);
  --tag-size: 0.875em;
  --text-accent: hsl(255, 89.76%, 75.9%);
  --text-accent-hover: hsl(253, 92.4%, 85.14%);
  --text-error: #e3365e;
  --text-faint: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 60%,
    hsl(255, 100%, 80%)
  );
  --text-highlight-bg: color-mix(in srgb, #43cfea 25%, transparent);
  --text-highlight-bg-active: color-mix(
    in srgb,
    #43cfea 25%,
    transparent
  );
  --text-muted: color-mix(
    in srgb,
    hsl(238, 60%, 11%) 30%,
    hsl(255, 100%, 80%)
  );
  --text-normal: color-mix(in srgb, hsl(255, 100%, 80%) 30%, #fff);
  --text-selection: hsla(258, 88%, 66%, 0.33);
  --text-success: #52eea3;
  --text-warning: #fa9f50;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --vauxhall-bg: hsl(238, 60%, 11%);
  --vauxhall-fg: hsl(255, 100%, 80%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(2, 122, 255, 0.25);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(2, 122, 255, 0.25);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(2, 122, 255, 0.25);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 233, 151, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 68, 207, 110);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 233, 151, 63);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: color(srgb 0.91 0.88 1);
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

html[saved-theme="dark"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: color(srgb 0.0352 0.03872 0.1408);
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: var(--text-normal, color(srgb 0.91 0.88 1));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, color(srgb 0.011 0.0121 0.044));
  border-bottom-color: color(srgb 0.1752 0.15872 0.3408);
  border-left-color: color(srgb 0.1752 0.15872 0.3408);
  border-right-color: color(srgb 0.1752 0.15872 0.3408);
  border-top-color: color(srgb 0.1752 0.15872 0.3408);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.91 0.88 1);
  outline: color(srgb 0.91 0.88 1) none 0px;
  text-decoration-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.0768 0.07598 0.2172));
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.1752 0.15872 0.3408);
  border-left-color: color(srgb 0.1752 0.15872 0.3408);
  border-right-color: color(srgb 0.1752 0.15872 0.3408);
  border-top-color: color(srgb 0.1752 0.15872 0.3408);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.0176 0.01936 0.0704);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.0768 0.07598 0.2172));
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.0768 0.07598 0.2172));
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(67, 207, 234));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(67, 207, 234));
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(84, 182, 248));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(67, 207, 234));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(67, 124, 243));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(111, 81, 244));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(148, 70, 248));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(201, 82, 237));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 2, 122, 255);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.5032 0.43452 0.7528));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.5032 0.43452 0.7528));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: color(srgb 0.91 0.88 1);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: var(--icon-color, color(srgb 0.5032 0.43452 0.7528));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, color(srgb 0.0176 0.01936 0.0704));
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: var(--status-bar-text-color, color(srgb 0.5032 0.43452 0.7528));
}

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.5032 0.43452 0.7528);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.5032 0.43452 0.7528));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.5032 0.43452 0.7528);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.5032 0.43452 0.7528));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: var(--icon-color, color(srgb 0.5032 0.43452 0.7528));
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.5032 0.43452 0.7528);
  stroke: color(srgb 0.5032 0.43452 0.7528);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, color(srgb 0.3064 0.26904 0.5056));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, color(srgb 0.91 0.88 1));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, color(srgb 0.0176 0.01936 0.0704));
  border-color: color(srgb 0.91 0.88 1);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.1096 0.10356 0.2584);
  color: var(--table-header-color, color(srgb 0.91 0.88 1));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.1096 0.10356 0.2584);
  border-left-color: color(srgb 0.1096 0.10356 0.2584);
  border-right-color: color(srgb 0.1096 0.10356 0.2584);
  border-top-color: color(srgb 0.1096 0.10356 0.2584);
  color: var(--text-muted, color(srgb 0.5032 0.43452 0.7528));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.1096 0.10356 0.2584);
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.5032 0.43452 0.7528);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, color(srgb 0.011 0.0121 0.044));
  color: var(--text-normal, color(srgb 0.91 0.88 1));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, color(srgb 0.0176 0.01936 0.0704));
  border-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, color(srgb 0.022 0.0242 0.088));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: color(srgb 0.91 0.88 1);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, color(srgb 0.0176 0.01936 0.0704));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, color(srgb 0.91 0.88 1));
}

html[saved-theme="dark"] body abbr {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body details {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: color(srgb 0.5032 0.43452 0.7528);
  border-left-color: color(srgb 0.5032 0.43452 0.7528);
  border-right-color: color(srgb 0.5032 0.43452 0.7528);
  border-top-color: color(srgb 0.5032 0.43452 0.7528);
  color: var(--text-normal, color(srgb 0.5032 0.43452 0.7528));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, color(srgb 0.0352 0.03872 0.1408));
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
  color: var(--code-normal, color(srgb 0.91 0.88 1));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: color(srgb 0.91 0.88 1);
  border-left-color: color(srgb 0.91 0.88 1);
  border-right-color: color(srgb 0.91 0.88 1);
  border-top-color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body sub {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body summary {
  color: color(srgb 0.91 0.88 1);
}

html[saved-theme="dark"] body sup {
  color: color(srgb 0.91 0.88 1);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --background-modifier-border-focus: var(--color-base-40, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 80%,
    hsl(255, 100%, 50%)
  ));
  --background-modifier-border-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --background-modifier-error: var(--color-red, #e3365e);
  --background-modifier-error-hover: var(--color-red, #e3365e);
  --background-modifier-form-field: var(--color-base-20, color-mix(in srgb, hsl(238, 60%, 95%) 80%, #fff));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, hsl(238, 60%, 95%) 80%, #fff));
  --background-modifier-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --background-modifier-success: var(--color-green, #47cc91);
  --background-primary: var(--color-base-05, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --background-primary-alt: var(--color-base-10, color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff));
  --background-secondary: var(--color-base-05, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --background-secondary-alt: var(--color-base-05, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --bases-cards-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --bases-group-heading-property-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --bases-table-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --bases-table-cell-background-active: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff));
  --bases-table-group-background: var(--background-primary-alt, color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff));
  --bases-table-header-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --bases-table-header-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --bases-table-header-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --bases-table-summary-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --bases-table-summary-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --black: #000;
  --blue: #437cf3;
  --blue-violet: #6f51f4;
  --canvas-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --canvas-card-label-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --canvas-dot-pattern: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --caret-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --checkbox-border-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --checkbox-border-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --checkbox-marker-color: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --checklist-done-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --code-background: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --code-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --code-bracket-background: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --code-function: var(--color-yellow, #ffd85e);
  --code-important: var(--color-orange, #fa9f50);
  --code-keyword: var(--color-pink, #e54f9b);
  --code-normal: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --code-operator: var(--color-red, #e3365e);
  --code-property: var(--color-cyan, #3bb2ce);
  --code-punctuation: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --code-string: var(--color-green, #47cc91);
  --code-tag: var(--color-red, #e3365e);
  --code-value: var(--color-purple, #9446f8);
  --collapse-icon-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --color-base-00: color-mix(in srgb, var(--vauxhall-bg) 25%, var(--white));
  --color-base-05: color-mix(in srgb, var(--vauxhall-bg) 40%, var(--white));
  --color-base-10: color-mix(in srgb, var(--vauxhall-bg) 50%, var(--white));
  --color-base-100: color-mix(
    in srgb,
    var(--vauxhall-bg) 0%,
    var(--vauxhall-fg)
  );
  --color-base-20: color-mix(in srgb, var(--vauxhall-bg) 80%, var(--white));
  --color-base-25: color-mix(in srgb, var(--vauxhall-bg) 80%, var(--white));
  --color-base-30: color-mix(
    in srgb,
    var(--vauxhall-bg) 90%,
    var(--vauxhall-fg)
  );
  --color-base-35: color-mix(
    in srgb,
    var(--vauxhall-bg) 95%,
    var(--vauxhall-fg)
  );
  --color-base-40: color-mix(
    in srgb,
    var(--vauxhall-bg) 80%,
    var(--vauxhall-fg)
  );
  --color-base-50: color-mix(
    in srgb,
    var(--vauxhall-bg) 60%,
    var(--vauxhall-fg)
  );
  --color-base-60: color-mix(
    in srgb,
    var(--vauxhall-bg) 60%,
    var(--vauxhall-fg)
  );
  --color-base-70: color-mix(
    in srgb,
    var(--vauxhall-bg) 30%,
    var(--vauxhall-fg)
  );
  --color-blue: var(--blue, #437cf3);
  --color-cyan: var(--cool-cyan, #3bb2ce);
  --color-green: var(--mint, #47cc91);
  --color-orange: #fa9f50;
  --color-pink: var(--magenta, #e54f9b);
  --color-purple: var(--violet, #9446f8);
  --color-red: var(--hot-red, #e3365e);
  --color-yellow: #ffd85e;
  --cool-cyan: #3bb2ce;
  --cool-gray: #515768;
  --cyan: #47c1cd;
  --dark: var(--text-normal, color-mix(in srgb, var(--vauxhall-fg) 50%, var(--black)));
  --darkgray: var(--text-normal, color-mix(in srgb, var(--vauxhall-fg) 50%, var(--black)));
  --divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --dropdown-background: var(--interactive-normal, color-mix(in srgb, hsl(238, 60%, 95%) 25%, #fff));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff));
  --file-header-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --file-header-background-focused: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --flair-background: var(--interactive-normal, color-mix(in srgb, hsl(238, 60%, 95%) 25%, #fff));
  --flair-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --footnote-id-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --footnote-id-color-no-occurrences: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --graph-node: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --graph-node-attachment: var(--color-yellow, #ffd85e);
  --graph-node-tag: var(--color-green, #47cc91);
  --graph-node-unresolved: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --graph-text: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --gray: var(--text-muted, var(--color-base-70, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  )));
  --h1-color: var(--cool-cyan, #3bb2ce);
  --h2-color: var(--light-blue, #54b6f8);
  --h3-color: var(--blue, #437cf3);
  --h4-color: var(--blue-violet, #6f51f4);
  --h5-color: var(--violet, #9446f8);
  --h6-color: var(--purple, #c952ed);
  --heading-formatting: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --highlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --hot-red: #e3365e;
  --hr-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --hue-bg: 238;
  --hue-fg: 255;
  --icon-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --icon-color-focused: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --icon-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --indentation-guide-color: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --indentation-guide-color-active: var(--color-base-35, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --inline-title-color: var(--h1-color, #3bb2ce);
  --input-date-separator: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --input-placeholder-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --interactive-hover: var(--color-base-10, color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff));
  --interactive-normal: var(--color-base-00, color-mix(in srgb, hsl(238, 60%, 95%) 25%, #fff));
  --light: var(--background-primary, var(--color-base-05, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff)));
  --light-blue: #54b6f8;
  --lightgray: var(--background-secondary, var(--color-base-05, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff)));
  --list-marker-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --list-marker-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --lum: 11%;
  --lum-bg: 95%;
  --lum-fg: 50%;
  --magenta: #e54f9b;
  --menu-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --metadata-input-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --metadata-input-text-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --metadata-label-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --metadata-label-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --metadata-property-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --mint: #47cc91;
  --modal-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --nav-collapse-icon-color: var(--collapse-icon-color, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --nav-collapse-icon-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --nav-heading-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --nav-heading-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --nav-heading-color-hover: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --nav-indentation-guide-color: var(--color-base-30, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --nav-item-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --nav-item-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --nav-item-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --nav-item-color-active: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --nav-item-color-hover: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --nav-item-color-selected: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --nav-tag-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --nav-tag-color-active: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --nav-tag-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --pdf-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --pdf-page-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --pdf-sidebar-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --pill-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --pill-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --pill-color-hover: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --pill-color-remove: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --prompt-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --purple: #c952ed;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff), color-mix(in srgb, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff) 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --ribbon-background-collapsed: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --sat-bg: 60%;
  --sat-fg: 100%;
  --search-clear-button-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --search-icon-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --search-result-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --setting-group-heading-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --setting-items-background: var(--background-primary-alt, color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff));
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --shiki-code-background: var(--code-background, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --shiki-code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --shiki-code-function: var(--color-green, #47cc91);
  --shiki-code-important: var(--color-orange, #fa9f50);
  --shiki-code-keyword: var(--color-pink, #e54f9b);
  --shiki-code-normal: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --shiki-code-property: var(--color-cyan, #3bb2ce);
  --shiki-code-punctuation: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --shiki-code-string: var(--color-yellow, #ffd85e);
  --shiki-code-value: var(--color-purple, #9446f8);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --shiki-gutter-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --shiki-terminal-dots-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --slider-track-background: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --status-bar-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --status-bar-border-color: var(--divider-color, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --status-bar-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --suggestion-background: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --sync-avatar-color-1: var(--color-red, #e3365e);
  --sync-avatar-color-2: var(--color-orange, #fa9f50);
  --sync-avatar-color-3: var(--color-yellow, #ffd85e);
  --sync-avatar-color-4: var(--color-green, #47cc91);
  --sync-avatar-color-5: var(--color-cyan, #3bb2ce);
  --sync-avatar-color-6: var(--color-blue, #437cf3);
  --sync-avatar-color-7: var(--color-purple, #9446f8);
  --sync-avatar-color-8: var(--color-pink, #e54f9b);
  --tab-background-active: var(--background-primary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --tab-container-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  ));
  --tab-outline-color: var(--divider-color, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --tab-switcher-background: var(--background-secondary, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff));
  --tab-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --tab-text-color-active: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --tab-text-color-focused: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --tab-text-color-focused-active: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --tab-text-color-focused-active-current: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --table-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --table-drag-handle-color: var(--text-faint, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --table-header-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --table-header-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --text-error: var(--color-red, #e3365e);
  --text-faint: var(--color-base-50, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  ));
  --text-highlight-bg: color-mix(in srgb, var(--h1-color) 25%, transparent);
  --text-highlight-bg-active: color-mix(
    in srgb,
    var(--h1-color) 25%,
    transparent
  );
  --text-muted: var(--color-base-70, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --text-normal: color-mix(in srgb, var(--vauxhall-fg) 50%, var(--black));
  --text-success: var(--color-green, #47cc91);
  --text-warning: var(--color-orange, #fa9f50);
  --textHighlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --titlebar-background: var(--color-base-00, color-mix(in srgb, hsl(238, 60%, 95%) 25%, #fff));
  --titlebar-background-focused: var(--color-base-10, color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff));
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  ));
  --titlebar-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  ));
  --titlebar-text-color-focused: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --vault-profile-color: var(--text-normal, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --vault-profile-color-hover: var(--vault-profile-color, color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000));
  --vauxhall-bg: hsl(var(--hue-bg), var(--sat-bg), var(--lum-bg));
  --vauxhall-fg: hsl(var(--hue-fg), var(--sat-fg), var(--lum-fg));
  --violet: #9446f8;
  --white: #fff;
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, color(srgb 0.968 0.9688 0.992));
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, color(srgb 0.968 0.9688 0.992));
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, color(srgb 0.968 0.9688 0.992));
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.853 0.8298 0.982);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, color(srgb 0.968 0.9688 0.992));
  border-left-color: color(srgb 0.853 0.8298 0.982);
  color: color(srgb 0.125 0 0.5);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, color(srgb 0.125 0 0.5));
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, color(srgb 0.125 0 0.5));
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, color(srgb 0.125 0 0.5));
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, color(srgb 0.125 0 0.5));
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, color(srgb 0.231373 0.698039 0.807843 / 0.25));
  color: var(--text-normal, color(srgb 0.125 0 0.5));
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body del {
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, color(srgb 0.125 0 0.5));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.652 0.5532 0.988);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, color(srgb 0.451 0.2766 0.994));
  outline: color(srgb 0.451 0.2766 0.994) none 0px;
  text-decoration-color: color(srgb 0.451 0.2766 0.994);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body dt {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body ol > li {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body ul > li {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, color(srgb 0.652 0.5532 0.988));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body table {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body td {
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: var(--table-text-color, color(srgb 0.125 0 0.5));
}

html[saved-theme="light"] body th {
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: var(--table-header-color, color(srgb 0.125 0 0.5));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, color(srgb 0.853 0.8298 0.982));
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: var(--code-normal, color(srgb 0.125 0 0.5));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.853 0.8298 0.982));
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body figcaption {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body figure {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(59, 178, 206);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(59, 178, 206);
  border-radius: 6px;
  border-right-color: rgb(59, 178, 206);
  border-top-color: rgb(59, 178, 206);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body video {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, color(srgb 0.96 0.961 0.99));
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.652 0.5532 0.988);
  border-left-color: color(srgb 0.652 0.5532 0.988);
  border-right-color: color(srgb 0.652 0.5532 0.988);
  border-top-color: color(srgb 0.652 0.5532 0.988);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.125 0 0.5);
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.968 0.9688 0.992);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.968 0.9688 0.992);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 159, 80);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.652 0.5532 0.988);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 216, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(59, 178, 206);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(67, 124, 243);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(67, 124, 243);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 216, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 216, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(148, 70, 248);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(227, 54, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 204, 145);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 204, 145);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(71, 204, 145);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 191, 188);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 120, 82, 238);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 233, 49, 71);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --background-modifier-active-hover: hsla(258, 88%, 66%, 0.1);
  --background-modifier-border: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --background-modifier-border-focus: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 80%,
    hsl(255, 100%, 50%)
  );
  --background-modifier-border-hover: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  );
  --background-modifier-error: #e3365e;
  --background-modifier-error-hover: #e3365e;
  --background-modifier-error-rgb: 233, 49, 71;
  --background-modifier-form-field: color-mix(in srgb, hsl(238, 60%, 95%) 80%, #fff);
  --background-modifier-form-field-hover: color-mix(in srgb, hsl(238, 60%, 95%) 80%, #fff);
  --background-modifier-hover: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  );
  --background-modifier-success: #47cc91;
  --background-modifier-success-rgb: 8, 185, 78;
  --background-primary: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --background-primary-alt: color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff);
  --background-secondary: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --background-secondary-alt: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --blockquote-border-color: hsl(257, 88.88%, 70.95%);
  --blur-background: color-mix(in srgb, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff), color-mix(in srgb, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff) 65%, transparent));
  --blur-l: blur(16px) saturate(1.5) brightness(1.15);
  --blur-m: blur(10px) saturate(1.5) brightness(1.15);
  --blur-s: blur(6px) saturate(1.5) brightness(1.15);
  --bold-weight: 600;
  --button-corner-shape: round;
  --button-radius: 5px;
  --callout-blend-mode: darken;
  --callout-bug: 233, 49, 71;
  --callout-color: var(--callout-default, 8, 109, 221);
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-padding: 12px 12px 12px 24px;
  --callout-question: 236, 117, 0;
  --callout-radius: 4px;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-title-weight: 600;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --canvas-controls-icon-size: 16px;
  --canvas-controls-icon-stroke: 2px;
  --canvas-controls-radius: 4px;
  --canvas-dot-pattern: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --caret-color: color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000);
  --checkbox-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --checkbox-border-color-hover: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --checkbox-color: hsl(257, 88.88%, 70.95%);
  --checkbox-color-hover: hsl(255, 89.76%, 75.9%);
  --checkbox-marker-color: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --checkbox-radius: 4px;
  --checkbox-size: 16px;
  --checklist-done-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --clickable-icon-radius: 4px;
  --code-background: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --code-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --code-bracket-background: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  );
  --code-comment: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --code-function: #ffd85e;
  --code-important: #fa9f50;
  --code-keyword: #e54f9b;
  --code-normal: color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000);
  --code-operator: #e3365e;
  --code-property: #3bb2ce;
  --code-punctuation: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --code-radius: 4px;
  --code-size: 0.875em;
  --code-string: #47cc91;
  --code-tag: #e3365e;
  --code-value: #9446f8;
  --collapse-icon-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --collapse-icon-color-collapsed: hsl(258, 88%, 66%);
  --color-accent: hsl(258, 88%, 66%);
  --color-accent-1: hsl(257, 88.88%, 70.95%);
  --color-accent-2: hsl(255, 89.76%, 75.9%);
  --color-accent-hsl: 258, 88%, 66%;
  --color-base-00: color-mix(in srgb, hsl(238, 60%, 95%) 25%, #fff);
  --color-base-05: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --color-base-10: color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff);
  --color-base-100: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 0%,
    hsl(255, 100%, 50%)
  );
  --color-base-20: color-mix(in srgb, hsl(238, 60%, 95%) 80%, #fff);
  --color-base-25: color-mix(in srgb, hsl(238, 60%, 95%) 80%, #fff);
  --color-base-30: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --color-base-35: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  );
  --color-base-40: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 80%,
    hsl(255, 100%, 50%)
  );
  --color-base-50: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --color-base-60: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --color-base-70: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --color-blue: #437cf3;
  --color-cyan: #3bb2ce;
  --color-green: #47cc91;
  --color-pink: #e54f9b;
  --color-purple: #9446f8;
  --color-red: #e3365e;
  --divider-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --divider-color-hover: hsl(257, 88.88%, 70.95%);
  --divider-vertical-height: 100%;
  --dropdown-background: color-mix(in srgb, hsl(238, 60%, 95%) 25%, #fff);
  --dropdown-background-hover: color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff);
  --dropdown-background-position: right 0.5em top 50%, 0 0;
  --dropdown-background-size: 1em auto, 100%;
  --dropdown-padding: 0 1.9em 0 0.8em;
  --flair-background: color-mix(in srgb, hsl(238, 60%, 95%) 25%, #fff);
  --flair-color: color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000);
  --font-interface: '??', '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mermaid: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', '??', ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-print: '??', '??', '??', 'Arial';
  --font-text: '??', '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-weight: 400;
  --graph-line: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  );
  --graph-node: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --graph-node-attachment: #ffd85e;
  --graph-node-focused: hsl(258, 88%, 66%);
  --graph-node-tag: #47cc91;
  --graph-node-unresolved: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --graph-text: color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000);
  --h1-color: #3bb2ce;
  --h2-color: #54b6f8;
  --h3-color: #437cf3;
  --h4-color: #6f51f4;
  --h5-color: #9446f8;
  --h5-line-height: 1.5;
  --h6-color: #c952ed;
  --h6-line-height: 1.5;
  --heading-formatting: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --heading-spacing: 2.5rem;
  --hr-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --interactive-accent: hsl(257, 88.88%, 70.95%);
  --interactive-accent-hover: hsl(255, 89.76%, 75.9%);
  --interactive-accent-hsl: 258, 88%, 66%;
  --interactive-hover: color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff);
  --interactive-normal: color-mix(in srgb, hsl(238, 60%, 95%) 25%, #fff);
  --link-color: hsl(258, 88%, 66%);
  --link-color-hover: hsl(255, 89.76%, 75.9%);
  --link-external-color: hsl(258, 88%, 66%);
  --link-external-color-hover: hsl(255, 89.76%, 75.9%);
  --link-unresolved-color: hsl(258, 88%, 66%);
  --link-unresolved-decoration-color: hsla(258, 88%, 66%, 0.3);
  --link-weight: 400;
  --list-indent: 2.25em;
  --menu-background: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --menu-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  );
  --menu-border-width: 1px;
  --menu-corner-shape: round;
  --menu-padding: 6px;
  --menu-radius: 8px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028), 0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --pdf-background: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --pdf-page-background: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --pdf-sidebar-background: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --popover-font-size: 16px;
  --raised-background: color-mix(in srgb, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff), color-mix(in srgb, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff) 65%, transparent));
  --raised-blur: blur(6px) saturate(1.5) brightness(1.15);
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.2);
  --scrollbar-bg: rgba(0, 0, 0, 0.05);
  --scrollbar-radius: 12px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.1);
  --search-clear-button-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --search-icon-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --search-result-background: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --setting-group-heading-color: color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000);
  --setting-group-heading-size: 15px;
  --setting-group-heading-weight: 600;
  --setting-items-background: color-mix(in srgb, hsl(238, 60%, 95%) 50%, #fff);
  --setting-items-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --setting-items-padding: 20px;
  --setting-items-radius: 12px;
  --shiki-active-tab-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --shiki-code-background: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --shiki-code-block-border-radius: 4px;
  --shiki-code-block-spacing: 1rem;
  --shiki-code-comment: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --shiki-code-function: #47cc91;
  --shiki-code-important: #fa9f50;
  --shiki-code-keyword: #e54f9b;
  --shiki-code-normal: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --shiki-code-property: #3bb2ce;
  --shiki-code-punctuation: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --shiki-code-string: #ffd85e;
  --shiki-code-value: #9446f8;
  --shiki-gutter-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --shiki-gutter-border-width: 1px;
  --shiki-gutter-text-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --shiki-gutter-text-color-highlight: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --shiki-highlight-green: rgba(8, 185, 78, 0.5);
  --shiki-highlight-green-background: rgba(8, 185, 78, 0.1);
  --shiki-highlight-neutral: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --shiki-highlight-neutral-background: rgba(0, 0, 0, 0.05);
  --shiki-highlight-red: rgba(233, 49, 71, 0.5);
  --shiki-highlight-red-background: rgba(233, 49, 71, 0.1);
  --shiki-terminal-dots-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --shiki-tooltip-background: rgba(0, 0, 0, 0.9);
  --suggestion-background: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --swatch-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  --sync-avatar-color-1: #e3365e;
  --sync-avatar-color-2: #fa9f50;
  --sync-avatar-color-3: #ffd85e;
  --sync-avatar-color-4: #47cc91;
  --sync-avatar-color-5: #3bb2ce;
  --sync-avatar-color-6: #437cf3;
  --sync-avatar-color-7: #9446f8;
  --sync-avatar-color-8: #e54f9b;
  --tab-background-active: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --tab-divider-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 95%,
    hsl(255, 100%, 50%)
  );
  --tab-font-size: 13px;
  --tab-outline-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --tab-radius: 4px;
  --tab-stacked-font-size: 13px;
  --tab-stacked-header-width: 40px;
  --tab-switcher-background: color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff);
  --tab-switcher-menubar-background: linear-gradient(to top, color-mix(in srgb, hsl(238, 60%, 95%) 40%, #fff), transparent);
  --tab-switcher-preview-radius: 16px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(258, 88%, 66%);
  --tab-text-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --tab-text-color-active: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --tab-text-color-focused: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --tab-text-color-focused-active: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --tab-text-color-focused-active-current: color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000);
  --tab-text-color-focused-highlighted: hsl(258, 88%, 66%);
  --table-add-button-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --table-add-button-border-width: 1px;
  --table-border-color: color-mix(in srgb, rgb(var(--callout-color)) 25%, var(--background-primary) 50%);
  --table-column-alt-background: transparent;
  --table-column-first-border-width: 1px;
  --table-column-last-border-width: 1px;
  --table-drag-handle-background-active: hsl(257, 88.88%, 70.95%);
  --table-drag-handle-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --table-drag-handle-color-active: white;
  --table-header-background: transparent;
  --table-header-border-color: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 90%,
    hsl(255, 100%, 50%)
  );
  --table-header-border-width: 1px;
  --table-header-color: color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000);
  --table-header-size: 16px;
  --table-header-weight: 600;
  --table-line-height: 1.3;
  --table-row-alt-background: transparent;
  --table-row-alt-background-hover: transparent;
  --table-row-background-hover: transparent;
  --table-row-last-border-width: 1px;
  --table-selection: hsla(258, 88%, 66%, 0.1);
  --table-selection-blend-mode: darken;
  --table-selection-border-color: hsl(257, 88.88%, 70.95%);
  --table-text-size: 16px;
  --tag-background: hsla(258, 88%, 66%, 0.1);
  --tag-background-hover: hsla(258, 88%, 66%, 0.2);
  --tag-border-color: hsla(258, 88%, 66%, 0.15);
  --tag-border-color-hover: hsla(258, 88%, 66%, 0.15);
  --tag-color: hsl(258, 88%, 66%);
  --tag-color-hover: hsl(258, 88%, 66%);
  --tag-size: 0.875em;
  --text-accent: hsl(258, 88%, 66%);
  --text-accent-hover: hsl(255, 89.76%, 75.9%);
  --text-error: #e3365e;
  --text-faint: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 60%,
    hsl(255, 100%, 50%)
  );
  --text-highlight-bg: color-mix(in srgb, #3bb2ce 25%, transparent);
  --text-highlight-bg-active: color-mix(
    in srgb,
    #3bb2ce 25%,
    transparent
  );
  --text-muted: color-mix(
    in srgb,
    hsl(238, 60%, 95%) 30%,
    hsl(255, 100%, 50%)
  );
  --text-normal: color-mix(in srgb, hsl(255, 100%, 50%) 50%, #000);
  --text-selection: hsla(258, 88%, 66%, 0.2);
  --text-success: #47cc91;
  --text-warning: #fa9f50;
  --touch-radius-l: 52px;
  --touch-radius-m: 44px;
  --touch-radius-s: 40px;
  --touch-radius-xl: 60px;
  --touch-radius-xs: 30px;
  --touch-radius-xxs: 24px;
  --traffic-lights-offset-x: 40px;
  --traffic-lights-offset-y: 40px;
  --vauxhall-bg: hsl(238, 60%, 95%);
  --vauxhall-fg: hsl(255, 100%, 50%);
  background-color: rgba(var(--callout-color), 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(8, 109, 221, 0.25);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(8, 109, 221, 0.25);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(8, 109, 221, 0.25);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  line-height: 24px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 12px;
  padding-left: 24px;
  padding-right: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 236, 117, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 0, 191, 188);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 236, 117, 0);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: color(srgb 0.125 0 0.5);
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

html[saved-theme="light"] body .callout[data-callout="note-toolbar"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
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
  background-color: color(srgb 0.936 0.9376 0.984);
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: var(--text-normal, color(srgb 0.125 0 0.5));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, color(srgb 0.968 0.9688 0.992));
  border-bottom-color: color(srgb 0.786 0.7376 0.984);
  border-left-color: color(srgb 0.786 0.7376 0.984);
  border-right-color: color(srgb 0.786 0.7376 0.984);
  border-top-color: color(srgb 0.786 0.7376 0.984);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.125 0 0.5);
  outline: color(srgb 0.125 0 0.5) none 0px;
  text-decoration-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.8865 0.8759 0.981));
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.786 0.7376 0.984);
  border-left-color: color(srgb 0.786 0.7376 0.984);
  border-right-color: color(srgb 0.786 0.7376 0.984);
  border-top-color: color(srgb 0.786 0.7376 0.984);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.968 0.9688 0.992);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.8865 0.8759 0.981));
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.8865 0.8759 0.981));
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(59, 178, 206));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(59, 178, 206));
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(84, 182, 248));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(59, 178, 206));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(67, 124, 243));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(111, 81, 244));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(148, 70, 248));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(201, 82, 237));
}

html[saved-theme="light"] body hr {
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 8, 109, 221);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-right-width: 2px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 2px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: color(srgb 0.853 0.8298 0.982);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.451 0.2766 0.994));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.451 0.2766 0.994));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: color(srgb 0.125 0 0.5);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: var(--icon-color, color(srgb 0.451 0.2766 0.994));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, color(srgb 0.968 0.9688 0.992));
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: var(--status-bar-text-color, color(srgb 0.451 0.2766 0.994));
}

html[saved-theme="light"] body footer ul li a {
  color: color(srgb 0.451 0.2766 0.994);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.451 0.2766 0.994));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.451 0.2766 0.994);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.451 0.2766 0.994));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: var(--icon-color, color(srgb 0.451 0.2766 0.994));
}

html[saved-theme="light"] body .darkmode svg {
  color: color(srgb 0.451 0.2766 0.994);
  stroke: color(srgb 0.451 0.2766 0.994);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, color(srgb 0.652 0.5532 0.988));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .canvas-node-content {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, color(srgb 0.125 0 0.5));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, color(srgb 0.968 0.9688 0.992));
  border-color: color(srgb 0.125 0 0.5);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: color(srgb 0.853 0.8298 0.982);
  color: var(--table-header-color, color(srgb 0.125 0 0.5));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: color(srgb 0.853 0.8298 0.982);
  border-left-color: color(srgb 0.853 0.8298 0.982);
  border-right-color: color(srgb 0.853 0.8298 0.982);
  border-top-color: color(srgb 0.853 0.8298 0.982);
  color: var(--text-muted, color(srgb 0.451 0.2766 0.994));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body .note-properties {
  border-color: color(srgb 0.853 0.8298 0.982);
}

html[saved-theme="light"] body .note-properties-key {
  color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body .note-properties-value {
  color: color(srgb 0.451 0.2766 0.994);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, color(srgb 0.968 0.9688 0.992));
  color: var(--text-normal, color(srgb 0.125 0 0.5));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, color(srgb 0.968 0.9688 0.992));
  border-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, color(srgb 0.96 0.961 0.99));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: color(srgb 0.125 0 0.5);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, color(srgb 0.968 0.9688 0.992));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, color(srgb 0.125 0 0.5));
}

html[saved-theme="light"] body abbr {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body details {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: color(srgb 0.451 0.2766 0.994);
  border-left-color: color(srgb 0.451 0.2766 0.994);
  border-right-color: color(srgb 0.451 0.2766 0.994);
  border-top-color: color(srgb 0.451 0.2766 0.994);
  color: var(--text-normal, color(srgb 0.451 0.2766 0.994));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, color(srgb 0.853 0.8298 0.982));
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
  color: var(--code-normal, color(srgb 0.125 0 0.5));
}

html[saved-theme="light"] body progress {
  border-bottom-color: color(srgb 0.125 0 0.5);
  border-left-color: color(srgb 0.125 0 0.5);
  border-right-color: color(srgb 0.125 0 0.5);
  border-top-color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body sub {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body summary {
  color: color(srgb 0.125 0 0.5);
}

html[saved-theme="light"] body sup {
  color: color(srgb 0.125 0 0.5);
}`,
  },
  classSettings: {
    "vauxhall-teal": {
      general: `.vauxhall-teal {
--hue-bg: 200;
--hue-fg: 180;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 30%;
    --lum-bg: 95%;
  };
}`,
    },
    "vauxhall-blue": {
      general: `.vauxhall-blue {
--hue-bg: 228;
--hue-fg: 220;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "vauxhall-indigo": {
      general: `.vauxhall-indigo {
--hue-bg: 238;
--hue-fg: 255;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "vauxhall-purple": {
      general: `.vauxhall-purple {
--hue-bg: 265;
--hue-fg: 265;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "vauxhall-magenta": {
      general: `.vauxhall-magenta {
--hue-bg: 290;
--hue-fg: 280;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "vauxhall-red": {
      general: `.vauxhall-red {
--hue-bg: 340;
--hue-fg: 320;
--sat-bg: 60%;
--sat-fg: 100%;
&.theme-light {
    --lum-fg: 50%;
    --lum-bg: 95%;
  };
}`,
    },
    "vauxhall-white": {
      general: `.vauxhall-white {
--hue-bg: 228;
--hue-fg: 220;
--sat-bg: 20%;
--sat-fg: 20%;
&.theme-light {
    --sat-bg: 30%;
    --sat-fg: 0%;
    --lum-bg: 90%;
    --lum-fg: 0%;

    &.intensity-void {
      --lum-bg: 100%;
    }

    &.intensity-nebula {
      --lum-bg: 80%;
    }
  };
}`,
    },
    "intensity-void": {
      general: `&.intensity-void {
--lum-bg: 100%;
}

.intensity-void {
--lum: 0%;
--background-modifier-border: var(--color-base-40);
}`,
    },
    "intensity-standard": {
      general: `.intensity-standard {
--lum: 11%;
}`,
    },
    "intensity-nebula": {
      general: `&.intensity-nebula {
--lum-bg: 80%;
}

.intensity-nebula {
--lum: 22%;
--background-secondary: var(--color-base-00) !important;
--titlebar-background-focused: var(--color-base-05) !important;
--background-modifier-form-field: var(--color-base-05) !important;
}`,
    },
    "headers-mono": {
      general: `.headers-mono {
--h1-color: var(--vauxhall-fg);
--h2-color: var(--vauxhall-fg);
--h3-color: var(--vauxhall-fg);
--h4-color: var(--vauxhall-fg);
--h5-color: var(--vauxhall-fg);
--h6-color: var(--vauxhall-fg);
}

.headers-mono-gradient {
--h1-color: hsl(var(--hue-fg), var(--sat-fg), 65%);
--h2-color: hsl(var(--hue-fg), var(--sat-fg), 75%);
--h3-color: hsl(var(--hue-fg), var(--sat-fg), 80%);
--h4-color: hsl(var(--hue-fg), var(--sat-fg), 80%);
--h5-color: hsl(var(--hue-fg), var(--sat-fg), 90%);
--h6-color: hsl(var(--hue-fg), var(--sat-fg), 95%);
}`,
    },
    "headers-mono-gradient": {
      general: `.headers-mono-gradient {
--h1-color: hsl(var(--hue-fg), var(--sat-fg), 65%);
--h2-color: hsl(var(--hue-fg), var(--sat-fg), 75%);
--h3-color: hsl(var(--hue-fg), var(--sat-fg), 80%);
--h4-color: hsl(var(--hue-fg), var(--sat-fg), 80%);
--h5-color: hsl(var(--hue-fg), var(--sat-fg), 90%);
--h6-color: hsl(var(--hue-fg), var(--sat-fg), 95%);
}`,
    },
    "headers-colorful": {
      general: `.headers-colorful {
--h1-color: var(--mint);
--h2-color: var(--cool-cyan);
--h3-color: var(--blue);
--h4-color: var(--violet);
--h5-color: var(--magenta);
--h6-color: var(--hot-red);
}`,
    },
    "headers-gradient-mint-to-blue": {
      general: `.headers-gradient-mint-to-blue {
--h1-color: var(--mint);
--h2-color: color-mix(in srgb, var(--mint) 50%, var(--cool-cyan));
--h3-color: var(--cool-cyan);
--h4-color: color-mix(in srgb, var(--cool-cyan) 60%, var(--blue));
--h5-color: color-mix(in srgb, var(--cool-cyan) 40%, var(--blue));
--h6-color: var(--blue);
}`,
    },
    "headers-gradient-cyan-to-purple": {
      general: `.headers-gradient-cyan-to-purple {
--h1-color: var(--cool-cyan);
--h2-color: var(--light-blue);
--h3-color: var(--blue);
--h4-color: var(--blue-violet);
--h5-color: var(--violet);
--h6-color: var(--purple);
}`,
    },
    "headers-gradient-blue-to-red": {
      general: `.headers-gradient-blue-to-red {
--h1-color: var(--light-blue);
--h2-color: var(--blue);
--h3-color: var(--violet);
--h4-color: var(--purple);
--h5-color: var(--magenta);
--h6-color: var(--hot-red);
}`,
    },
    "h1-accent": {
      general: `.h1-accent {
--h1-color: var(--color-accent) !important;
}`,
    },
  },
};
