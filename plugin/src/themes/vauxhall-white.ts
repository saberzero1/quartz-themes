import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vauxhall.white",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --background-modifier-border-focus: var(--color-base-40, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 80%,
    hsl(220, 20%, 80%)
  ));
  --background-modifier-border-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --background-modifier-error: var(--color-red, #e3365e);
  --background-modifier-error-hover: var(--color-red, #e3365e);
  --background-modifier-form-field: var(--color-base-20, color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000));
  --background-modifier-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --background-modifier-success: var(--color-green, #52eea3);
  --background-primary: var(--color-base-00, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --background-primary-alt: var(--color-base-10, color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000));
  --background-secondary: var(--color-base-05, color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000));
  --background-secondary-alt: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --bases-cards-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --bases-group-heading-property-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --bases-table-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --bases-table-cell-background-active: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000));
  --bases-table-group-background: var(--background-primary-alt, color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000));
  --bases-table-header-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --bases-table-header-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --bases-table-header-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --bases-table-summary-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --bases-table-summary-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --black: #000;
  --blue: #437cf3;
  --blue-violet: #6f51f4;
  --canvas-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --canvas-card-label-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --canvas-dot-pattern: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --caret-color: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --checkbox-border-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --checkbox-border-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --checkbox-marker-color: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --checklist-done-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --code-background: var(--color-base-25, color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000));
  --code-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --code-bracket-background: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --code-function: var(--color-yellow, #ffd85e);
  --code-important: var(--color-orange, #fa9f50);
  --code-keyword: var(--color-pink, #e54f9b);
  --code-normal: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --code-operator: var(--color-red, #e3365e);
  --code-property: var(--color-cyan, #43cfea);
  --code-punctuation: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --code-string: var(--color-green, #52eea3);
  --code-tag: var(--color-red, #e3365e);
  --code-value: var(--color-purple, #9446f8);
  --collapse-icon-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
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
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --dropdown-background: var(--interactive-normal, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --dropdown-background-hover: var(--interactive-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --file-header-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --file-header-background-focused: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --flair-background: var(--interactive-normal, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --flair-color: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --footnote-id-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --footnote-id-color-no-occurrences: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --graph-node: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --graph-node-attachment: var(--color-yellow, #ffd85e);
  --graph-node-tag: var(--color-green, #52eea3);
  --graph-node-unresolved: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --graph-text: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --gray: var(--text-muted, var(--color-base-70, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  )));
  --h1-color: var(--cool-cyan, #43cfea);
  --h2-color: var(--light-blue, #54b6f8);
  --h3-color: var(--blue, #437cf3);
  --h4-color: var(--blue-violet, #6f51f4);
  --h5-color: var(--violet, #9446f8);
  --h6-color: var(--purple, #c952ed);
  --heading-formatting: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --highlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --hot-red: #e3365e;
  --hr-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --hue-bg: 228;
  --hue-fg: 220;
  --icon-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --icon-color-focused: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --icon-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --indentation-guide-color: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --indentation-guide-color-active: var(--color-base-35, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --inline-title-color: var(--h1-color, #43cfea);
  --input-date-separator: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --input-placeholder-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --interactive-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --interactive-normal: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --light: var(--background-primary, var(--color-base-00, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000)));
  --light-blue: #54b6f8;
  --lightgray: var(--background-secondary, var(--color-base-05, color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000)));
  --list-marker-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --list-marker-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --lum: 11%;
  --magenta: #e54f9b;
  --menu-background: var(--background-secondary, color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --metadata-input-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --metadata-input-text-color: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --metadata-label-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --metadata-label-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --metadata-property-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --mint: #52eea3;
  --modal-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --nav-collapse-icon-color: var(--collapse-icon-color, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --nav-collapse-icon-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --nav-heading-color: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --nav-heading-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --nav-heading-color-hover: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --nav-indentation-guide-color: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --nav-item-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --nav-item-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --nav-item-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --nav-item-color-active: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --nav-item-color-hover: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --nav-item-color-selected: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --nav-tag-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --nav-tag-color-active: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --nav-tag-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --pdf-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --pdf-page-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --pdf-sidebar-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --pill-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --pill-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --pill-color-hover: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --pill-color-remove: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --prompt-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --purple: #c952ed;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) 65%, transparent) linear-gradient(color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ), color-mix(in srgb, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ) 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000));
  --ribbon-background-collapsed: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --sat-bg: 20%;
  --sat-fg: 20%;
  --search-clear-button-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --search-icon-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --search-result-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --setting-group-heading-color: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --setting-items-background: var(--background-primary-alt, color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000));
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --shiki-code-background: var(--code-background, color-mix(in srgb, hsl(228, 20%, 11%) 80%, #000));
  --shiki-code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --shiki-code-function: var(--color-green, #52eea3);
  --shiki-code-important: var(--color-orange, #fa9f50);
  --shiki-code-keyword: var(--color-pink, #e54f9b);
  --shiki-code-normal: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --shiki-code-property: var(--color-cyan, #43cfea);
  --shiki-code-punctuation: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --shiki-code-string: var(--color-yellow, #ffd85e);
  --shiki-code-value: var(--color-purple, #9446f8);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --shiki-gutter-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --shiki-terminal-dots-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --slider-track-background: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --status-bar-background: var(--background-secondary, color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000));
  --status-bar-border-color: var(--divider-color, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --status-bar-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --suggestion-background: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --sync-avatar-color-1: var(--color-red, #e3365e);
  --sync-avatar-color-2: var(--color-orange, #fa9f50);
  --sync-avatar-color-3: var(--color-yellow, #ffd85e);
  --sync-avatar-color-4: var(--color-green, #52eea3);
  --sync-avatar-color-5: var(--color-cyan, #43cfea);
  --sync-avatar-color-6: var(--color-blue, #437cf3);
  --sync-avatar-color-7: var(--color-purple, #9446f8);
  --sync-avatar-color-8: var(--color-pink, #e54f9b);
  --tab-background-active: var(--background-primary, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --tab-container-background: var(--background-secondary, color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000));
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 95%,
    hsl(220, 20%, 80%)
  ));
  --tab-outline-color: var(--divider-color, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --tab-switcher-background: var(--background-secondary, color-mix(in srgb, hsl(228, 20%, 11%) 40%, #000));
  --tab-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --tab-text-color-active: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --tab-text-color-focused: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --tab-text-color-focused-active: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --tab-text-color-focused-active-current: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --table-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --table-drag-handle-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --table-header-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --table-header-color: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --text-error: var(--color-red, #e3365e);
  --text-faint: var(--color-base-50, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 60%,
    hsl(220, 20%, 80%)
  ));
  --text-highlight-bg: color-mix(in srgb, var(--h1-color) 25%, transparent);
  --text-highlight-bg-active: color-mix(
    in srgb,
    var(--h1-color) 25%,
    transparent
  );
  --text-muted: var(--color-base-70, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --text-normal: color-mix(in srgb, var(--vauxhall-fg) 30%, var(--white));
  --text-success: var(--color-green, #52eea3);
  --text-warning: var(--color-orange, #fa9f50);
  --textHighlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --titlebar-background: var(--color-base-00, color-mix(in srgb, hsl(228, 20%, 11%) 25%, #000));
  --titlebar-background-focused: var(--color-base-10, color-mix(in srgb, hsl(228, 20%, 11%) 50%, #000));
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 90%,
    hsl(220, 20%, 80%)
  ));
  --titlebar-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 20%, 11%) 30%,
    hsl(220, 20%, 80%)
  ));
  --titlebar-text-color-focused: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --vault-profile-color: var(--text-normal, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
  --vault-profile-color-hover: var(--vault-profile-color, color-mix(in srgb, hsl(220, 20%, 80%) 30%, #fff));
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
  background-color: var(--tab-container-background, color(srgb 0.0352 0.03872 0.0528));
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, color(srgb 0.022 0.0242 0.033));
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, color(srgb 0.0352 0.03872 0.0528));
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, color(srgb 0.0352 0.03872 0.0528));
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  color: color(srgb 0.928 0.936 0.952);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, color(srgb 0.928 0.936 0.952));
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, color(srgb 0.928 0.936 0.952));
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, color(srgb 0.928 0.936 0.952));
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, color(srgb 0.928 0.936 0.952));
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, color(srgb 0.262745 0.811765 0.917647 / 0.25));
  color: var(--text-normal, color(srgb 0.928 0.936 0.952));
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body del {
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, color(srgb 0.928 0.936 0.952));
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.3568 0.372747 0.4152);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, color(srgb 0.5584 0.579707 0.6276));
  outline: color(srgb 0.5584 0.579707 0.6276) none 0px;
  text-decoration-color: color(srgb 0.5584 0.579707 0.6276);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body dt {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body ol > li {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body ul > li {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--text-faint, color(srgb 0.3568 0.372747 0.4152));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body table {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body td {
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: var(--table-text-color, color(srgb 0.928 0.936 0.952));
}

html[saved-theme="dark"] body th {
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: var(--table-header-color, color(srgb 0.928 0.936 0.952));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, color(srgb 0.0704 0.07744 0.1056));
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: var(--code-normal, color(srgb 0.928 0.936 0.952));
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.0704 0.07744 0.1056));
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body figcaption {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
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
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, color(srgb 0.044 0.0484 0.066));
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.3568 0.372747 0.4152);
  border-left-color: color(srgb 0.3568 0.372747 0.4152);
  border-right-color: color(srgb 0.3568 0.372747 0.4152);
  border-top-color: color(srgb 0.3568 0.372747 0.4152);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0.928 0.936 0.952);
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.022 0.0242 0.033);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.022 0.0242 0.033);
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
  background-color: color(srgb 0.3568 0.372747 0.4152);
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
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: color(srgb 0.928 0.936 0.952);
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
  background-color: color(srgb 0.0704 0.07744 0.1056);
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: var(--text-normal, color(srgb 0.928 0.936 0.952));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, color(srgb 0.022 0.0242 0.033));
  border-bottom-color: color(srgb 0.2224 0.234773 0.2736);
  border-left-color: color(srgb 0.2224 0.234773 0.2736);
  border-right-color: color(srgb 0.2224 0.234773 0.2736);
  border-top-color: color(srgb 0.2224 0.234773 0.2736);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: color(srgb 0.928 0.936 0.952);
  outline: color(srgb 0.928 0.936 0.952) none 0px;
  text-decoration-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.1216 0.131293 0.1674));
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.2224 0.234773 0.2736);
  border-left-color: color(srgb 0.2224 0.234773 0.2736);
  border-right-color: color(srgb 0.2224 0.234773 0.2736);
  border-top-color: color(srgb 0.2224 0.234773 0.2736);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.0352 0.03872 0.0528);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.1216 0.131293 0.1674));
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.1216 0.131293 0.1674));
  color: color(srgb 0.928 0.936 0.952);
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
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
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
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.5584 0.579707 0.6276));
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.5584 0.579707 0.6276));
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: color(srgb 0.928 0.936 0.952);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: var(--icon-color, color(srgb 0.5584 0.579707 0.6276));
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, color(srgb 0.0352 0.03872 0.0528));
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: var(--status-bar-text-color, color(srgb 0.5584 0.579707 0.6276));
}

html[saved-theme="dark"] body footer ul li a {
  color: color(srgb 0.5584 0.579707 0.6276);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.5584 0.579707 0.6276));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.5584 0.579707 0.6276);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.5584 0.579707 0.6276));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: var(--icon-color, color(srgb 0.5584 0.579707 0.6276));
}

html[saved-theme="dark"] body .darkmode svg {
  color: color(srgb 0.5584 0.579707 0.6276);
  stroke: color(srgb 0.5584 0.579707 0.6276);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, color(srgb 0.3568 0.372747 0.4152));
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, color(srgb 0.928 0.936 0.952));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, color(srgb 0.0352 0.03872 0.0528));
  border-color: color(srgb 0.928 0.936 0.952);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: color(srgb 0.1552 0.165787 0.2028);
  color: var(--table-header-color, color(srgb 0.928 0.936 0.952));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: color(srgb 0.1552 0.165787 0.2028);
  border-left-color: color(srgb 0.1552 0.165787 0.2028);
  border-right-color: color(srgb 0.1552 0.165787 0.2028);
  border-top-color: color(srgb 0.1552 0.165787 0.2028);
  color: var(--text-muted, color(srgb 0.5584 0.579707 0.6276));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .note-properties {
  border-color: color(srgb 0.1552 0.165787 0.2028);
}

html[saved-theme="dark"] body .note-properties-key {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body .note-properties-value {
  color: color(srgb 0.5584 0.579707 0.6276);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, color(srgb 0.022 0.0242 0.033));
  color: var(--text-normal, color(srgb 0.928 0.936 0.952));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, color(srgb 0.0352 0.03872 0.0528));
  border-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, color(srgb 0.044 0.0484 0.066));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: color(srgb 0.928 0.936 0.952);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, color(srgb 0.0352 0.03872 0.0528));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, color(srgb 0.928 0.936 0.952));
}

html[saved-theme="dark"] body abbr {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body details {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: color(srgb 0.5584 0.579707 0.6276);
  border-left-color: color(srgb 0.5584 0.579707 0.6276);
  border-right-color: color(srgb 0.5584 0.579707 0.6276);
  border-top-color: color(srgb 0.5584 0.579707 0.6276);
  color: var(--text-normal, color(srgb 0.5584 0.579707 0.6276));
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, color(srgb 0.0704 0.07744 0.1056));
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
  color: var(--code-normal, color(srgb 0.928 0.936 0.952));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: color(srgb 0.928 0.936 0.952);
  border-left-color: color(srgb 0.928 0.936 0.952);
  border-right-color: color(srgb 0.928 0.936 0.952);
  border-top-color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body sub {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body summary {
  color: color(srgb 0.928 0.936 0.952);
}

html[saved-theme="dark"] body sup {
  color: color(srgb 0.928 0.936 0.952);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --background-modifier-border-focus: var(--color-base-40, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 80%,
    hsl(220, 0%, 0%)
  ));
  --background-modifier-border-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --background-modifier-error: var(--color-red, #e3365e);
  --background-modifier-error-hover: var(--color-red, #e3365e);
  --background-modifier-form-field: var(--color-base-20, color-mix(in srgb, hsl(228, 30%, 90%) 80%, #fff));
  --background-modifier-form-field-hover: var(--background-modifier-form-field, color-mix(in srgb, hsl(228, 30%, 90%) 80%, #fff));
  --background-modifier-hover: var(--color-base-35, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --background-modifier-success: var(--color-green, #47cc91);
  --background-primary: var(--color-base-05, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --background-primary-alt: var(--color-base-10, color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff));
  --background-secondary: var(--color-base-05, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --background-secondary-alt: var(--color-base-05, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --bases-cards-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --bases-cards-cover-background: var(--background-primary-alt, color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff));
  --bases-embed-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --bases-group-heading-property-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --bases-table-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --bases-table-cell-background-active: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --bases-table-cell-background-disabled: var(--background-primary-alt, color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff));
  --bases-table-group-background: var(--background-primary-alt, color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff));
  --bases-table-header-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --bases-table-header-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --bases-table-header-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --bases-table-summary-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --bases-table-summary-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --black: #000;
  --blue: #437cf3;
  --blue-violet: #6f51f4;
  --canvas-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --canvas-card-label-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --canvas-dot-pattern: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --caret-color: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --checkbox-border-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --checkbox-border-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --checkbox-marker-color: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --checklist-done-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --code-background: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --code-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --code-bracket-background: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --code-function: var(--color-yellow, #ffd85e);
  --code-important: var(--color-orange, #fa9f50);
  --code-keyword: var(--color-pink, #e54f9b);
  --code-normal: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --code-operator: var(--color-red, #e3365e);
  --code-property: var(--color-cyan, #3bb2ce);
  --code-punctuation: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --code-string: var(--color-green, #47cc91);
  --code-tag: var(--color-red, #e3365e);
  --code-value: var(--color-purple, #9446f8);
  --collapse-icon-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
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
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --dropdown-background: var(--interactive-normal, color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff));
  --dropdown-background-hover: var(--interactive-hover, color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff));
  --file-header-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --file-header-background-focused: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --flair-background: var(--interactive-normal, color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff));
  --flair-color: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --footnote-divider-color: var(--metadata-divider-color, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --footnote-id-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --footnote-id-color-no-occurrences: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --footnote-input-background-active: var(--metadata-input-background-active, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --graph-node: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --graph-node-attachment: var(--color-yellow, #ffd85e);
  --graph-node-tag: var(--color-green, #47cc91);
  --graph-node-unresolved: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --graph-text: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --gray: var(--text-muted, var(--color-base-70, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  )));
  --h1-color: var(--cool-cyan, #3bb2ce);
  --h2-color: var(--light-blue, #54b6f8);
  --h3-color: var(--blue, #437cf3);
  --h4-color: var(--blue-violet, #6f51f4);
  --h5-color: var(--violet, #9446f8);
  --h6-color: var(--purple, #c952ed);
  --heading-formatting: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --highlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --hot-red: #e3365e;
  --hr-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --hue-bg: 228;
  --hue-fg: 220;
  --icon-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --icon-color-focused: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --icon-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --indentation-guide-color: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --indentation-guide-color-active: var(--color-base-35, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --inline-title-color: var(--h1-color, #3bb2ce);
  --input-date-separator: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --input-placeholder-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --interactive-hover: var(--color-base-10, color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff));
  --interactive-normal: var(--color-base-00, color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff));
  --light: var(--background-primary, var(--color-base-05, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff)));
  --light-blue: #54b6f8;
  --lightgray: var(--background-secondary, var(--color-base-05, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff)));
  --list-marker-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --list-marker-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --lum: 11%;
  --lum-bg: 90%;
  --lum-fg: 0%;
  --magenta: #e54f9b;
  --menu-background: var(--background-secondary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --menu-border-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --metadata-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --metadata-divider-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --metadata-input-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --metadata-input-text-color: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --metadata-label-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --metadata-label-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --metadata-label-text-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --metadata-property-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --mint: #47cc91;
  --modal-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --nav-collapse-icon-color: var(--collapse-icon-color, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --nav-collapse-icon-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --nav-heading-color: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --nav-heading-color-collapsed: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --nav-heading-color-collapsed-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --nav-heading-color-hover: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --nav-indentation-guide-color: var(--color-base-30, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --nav-item-background-active: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --nav-item-background-hover: var(--background-modifier-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --nav-item-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --nav-item-color-active: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --nav-item-color-hover: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --nav-item-color-selected: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --nav-tag-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --nav-tag-color-active: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --nav-tag-color-hover: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --pdf-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --pdf-page-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --pdf-sidebar-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --pill-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --pill-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --pill-color-hover: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --pill-color-remove: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --prompt-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --purple: #c952ed;
  --raised-background: var(--blur-background, color-mix(in srgb, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) 65%, transparent) linear-gradient(color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff), color-mix(in srgb, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff) 65%, transparent)));
  --ribbon-background: var(--background-secondary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --ribbon-background-collapsed: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --sat-bg: 30%;
  --sat-fg: 0%;
  --search-clear-button-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --search-icon-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --search-result-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --setting-group-heading-color: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --setting-items-background: var(--background-primary-alt, color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff));
  --setting-items-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --shiki-code-background: var(--code-background, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --shiki-code-comment: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --shiki-code-function: var(--color-green, #47cc91);
  --shiki-code-important: var(--color-orange, #fa9f50);
  --shiki-code-keyword: var(--color-pink, #e54f9b);
  --shiki-code-normal: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --shiki-code-property: var(--color-cyan, #3bb2ce);
  --shiki-code-punctuation: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --shiki-code-string: var(--color-yellow, #ffd85e);
  --shiki-code-value: var(--color-purple, #9446f8);
  --shiki-gutter-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --shiki-gutter-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --shiki-highlight-neutral: var(--shiki-code-normal, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --shiki-terminal-dots-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --slider-track-background: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --status-bar-background: var(--background-secondary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --status-bar-border-color: var(--divider-color, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --status-bar-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --suggestion-background: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --sync-avatar-color-1: var(--color-red, #e3365e);
  --sync-avatar-color-2: var(--color-orange, #fa9f50);
  --sync-avatar-color-3: var(--color-yellow, #ffd85e);
  --sync-avatar-color-4: var(--color-green, #47cc91);
  --sync-avatar-color-5: var(--color-cyan, #3bb2ce);
  --sync-avatar-color-6: var(--color-blue, #437cf3);
  --sync-avatar-color-7: var(--color-purple, #9446f8);
  --sync-avatar-color-8: var(--color-pink, #e54f9b);
  --tab-background-active: var(--background-primary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --tab-container-background: var(--background-secondary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --tab-divider-color: var(--background-modifier-border-hover, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 95%,
    hsl(220, 0%, 0%)
  ));
  --tab-outline-color: var(--divider-color, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --tab-switcher-background: var(--background-secondary, color-mix(in srgb, hsl(228, 30%, 90%) 40%, #fff));
  --tab-text-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --tab-text-color-active: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --tab-text-color-focused: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --tab-text-color-focused-active: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --tab-text-color-focused-active-current: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --table-add-button-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --table-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --table-drag-handle-color: var(--text-faint, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --table-header-border-color: var(--table-border-color, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --table-header-color: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --text-error: var(--color-red, #e3365e);
  --text-faint: var(--color-base-50, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 60%,
    hsl(220, 0%, 0%)
  ));
  --text-highlight-bg: color-mix(in srgb, var(--h1-color) 25%, transparent);
  --text-highlight-bg-active: color-mix(
    in srgb,
    var(--h1-color) 25%,
    transparent
  );
  --text-muted: var(--color-base-70, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --text-normal: color-mix(in srgb, var(--vauxhall-fg) 50%, var(--black));
  --text-success: var(--color-green, #47cc91);
  --text-warning: var(--color-orange, #fa9f50);
  --textHighlight: var(--text-highlight-bg, color-mix(in srgb, var(--h1-color) 25%, transparent));
  --titlebar-background: var(--color-base-00, color-mix(in srgb, hsl(228, 30%, 90%) 25%, #fff));
  --titlebar-background-focused: var(--color-base-10, color-mix(in srgb, hsl(228, 30%, 90%) 50%, #fff));
  --titlebar-border-color: var(--background-modifier-border, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 90%,
    hsl(220, 0%, 0%)
  ));
  --titlebar-text-color: var(--text-muted, color-mix(
    in srgb,
    hsl(228, 30%, 90%) 30%,
    hsl(220, 0%, 0%)
  ));
  --titlebar-text-color-focused: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --vault-profile-color: var(--text-normal, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
  --vault-profile-color-hover: var(--vault-profile-color, color-mix(in srgb, hsl(220, 0%, 0%) 50%, #000));
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
  background-color: var(--tab-container-background, color(srgb 0.948 0.9528 0.972));
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, color(srgb 0.948 0.9528 0.972));
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, color(srgb 0.948 0.9528 0.972));
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: color(srgb 0.783 0.7938 0.837);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, color(srgb 0.948 0.9528 0.972));
  border-left-color: color(srgb 0.783 0.7938 0.837);
  color: color(srgb 0 0 0);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, color(srgb 0 0 0));
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, color(srgb 0 0 0));
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, color(srgb 0 0 0));
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, color(srgb 0 0 0));
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, color(srgb 0.231373 0.698039 0.807843 / 0.25));
  color: var(--text-normal, color(srgb 0 0 0));
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body del {
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, color(srgb 0 0 0));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: color(srgb 0.522 0.5292 0.558);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, color(srgb 0.261 0.2646 0.279));
  outline: color(srgb 0.261 0.2646 0.279) none 0px;
  text-decoration-color: color(srgb 0.261 0.2646 0.279);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body dt {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body ol > li {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body ul > li {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--text-faint, color(srgb 0.522 0.5292 0.558));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body table {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body td {
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: var(--table-text-color, color(srgb 0 0 0));
}

html[saved-theme="light"] body th {
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: var(--table-header-color, color(srgb 0 0 0));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, color(srgb 0.783 0.7938 0.837));
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: var(--code-normal, color(srgb 0 0 0));
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, color(srgb 0.783 0.7938 0.837));
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body figcaption {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body figure {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
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
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, color(srgb 0.935 0.941 0.965));
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: color(srgb 0.522 0.5292 0.558);
  border-left-color: color(srgb 0.522 0.5292 0.558);
  border-right-color: color(srgb 0.522 0.5292 0.558);
  border-top-color: color(srgb 0.522 0.5292 0.558);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: color(srgb 0 0 0);
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.948 0.9528 0.972);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: color(srgb 0.948 0.9528 0.972);
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
  background-color: color(srgb 0.522 0.5292 0.558);
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
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: color(srgb 0 0 0);
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
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: color(srgb 0 0 0);
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
  background-color: color(srgb 0.896 0.9056 0.944);
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: var(--text-normal, color(srgb 0 0 0));
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, color(srgb 0.948 0.9528 0.972));
  border-bottom-color: color(srgb 0.696 0.7056 0.744);
  border-left-color: color(srgb 0.696 0.7056 0.744);
  border-right-color: color(srgb 0.696 0.7056 0.744);
  border-top-color: color(srgb 0.696 0.7056 0.744);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: color(srgb 0 0 0);
  outline: color(srgb 0 0 0) none 0px;
  text-decoration-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.8265 0.8379 0.8835));
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: color(srgb 0.696 0.7056 0.744);
  border-left-color: color(srgb 0.696 0.7056 0.744);
  border-right-color: color(srgb 0.696 0.7056 0.744);
  border-top-color: color(srgb 0.696 0.7056 0.744);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: color(srgb 0.948 0.9528 0.972);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, color(srgb 0.8265 0.8379 0.8835));
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, color(srgb 0.8265 0.8379 0.8835));
  color: color(srgb 0 0 0);
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
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
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
  border-left-color: color(srgb 0.783 0.7938 0.837);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.261 0.2646 0.279));
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, color(srgb 0.261 0.2646 0.279));
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: color(srgb 0 0 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: var(--icon-color, color(srgb 0.261 0.2646 0.279));
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, color(srgb 0.948 0.9528 0.972));
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: var(--status-bar-text-color, color(srgb 0.261 0.2646 0.279));
}

html[saved-theme="light"] body footer ul li a {
  color: color(srgb 0.261 0.2646 0.279);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.261 0.2646 0.279));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: color(srgb 0.261 0.2646 0.279);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, color(srgb 0.261 0.2646 0.279));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: var(--icon-color, color(srgb 0.261 0.2646 0.279));
}

html[saved-theme="light"] body .darkmode svg {
  color: color(srgb 0.261 0.2646 0.279);
  stroke: color(srgb 0.261 0.2646 0.279);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, color(srgb 0.522 0.5292 0.558));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, color(srgb 0 0 0));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, color(srgb 0.948 0.9528 0.972));
  border-color: color(srgb 0 0 0);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: color(srgb 0.783 0.7938 0.837);
  color: var(--table-header-color, color(srgb 0 0 0));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: color(srgb 0.783 0.7938 0.837);
  border-left-color: color(srgb 0.783 0.7938 0.837);
  border-right-color: color(srgb 0.783 0.7938 0.837);
  border-top-color: color(srgb 0.783 0.7938 0.837);
  color: var(--text-muted, color(srgb 0.261 0.2646 0.279));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .note-properties {
  border-color: color(srgb 0.783 0.7938 0.837);
}

html[saved-theme="light"] body .note-properties-key {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body .note-properties-value {
  color: color(srgb 0.261 0.2646 0.279);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, color(srgb 0.948 0.9528 0.972));
  color: var(--text-normal, color(srgb 0 0 0));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, color(srgb 0.948 0.9528 0.972));
  border-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, color(srgb 0.935 0.941 0.965));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: color(srgb 0 0 0);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, color(srgb 0.948 0.9528 0.972));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, color(srgb 0 0 0));
}

html[saved-theme="light"] body abbr {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: color(srgb 0.261 0.2646 0.279);
  border-left-color: color(srgb 0.261 0.2646 0.279);
  border-right-color: color(srgb 0.261 0.2646 0.279);
  border-top-color: color(srgb 0.261 0.2646 0.279);
  color: var(--text-normal, color(srgb 0.261 0.2646 0.279));
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, color(srgb 0.783 0.7938 0.837));
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
  color: var(--code-normal, color(srgb 0 0 0));
}

html[saved-theme="light"] body progress {
  border-bottom-color: color(srgb 0 0 0);
  border-left-color: color(srgb 0 0 0);
  border-right-color: color(srgb 0 0 0);
  border-top-color: color(srgb 0 0 0);
}

html[saved-theme="light"] body sub {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body summary {
  color: color(srgb 0 0 0);
}

html[saved-theme="light"] body sup {
  color: color(srgb 0 0 0);
}`,
  },
};
