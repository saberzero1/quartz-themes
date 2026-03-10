import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dark-castle", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 40;
  --accent-l: 70%;
  --accent-s: 100%;
  --background-modifier-active-hover: #292929;
  --background-modifier-border: #292929;
  --background-modifier-border-focus: #9C9C9C;
  --background-modifier-border-hover: #FF8040;
  --background-modifier-error: #FF000F;
  --background-modifier-error-hover: #FF000F;
  --background-modifier-error-rgb: 239, 107, 115;
  --background-modifier-form-field: #292929;
  --background-modifier-form-field-hover: #292929;
  --background-modifier-hover: #292929;
  --background-modifier-message: color-mix(
    in hsl,
    #000000,
    #292929
  );
  --background-modifier-success: #08D220;
  --background-modifier-success-rgb: 186, 230, 126;
  --background-primary: #000000;
  --background-primary-alt: #292929;
  --background-secondary: #000000;
  --background-secondary-alt: #000000;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #292929;
  --bases-cards-radius: 4px;
  --bases-cards-shadow: 0 0 0 1px #292929;
  --bases-cards-shadow-hover: 0 0 0 1px #FF8040;
  --bases-embed-border-color: #292929;
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: #9C9C9C;
  --bases-table-border-color: #292929;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #292929;
  --bases-table-cell-background-selected: rgba(255, 204, 102, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #9C9C9C;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FF8040;
  --bases-table-container-border-radius: 2px;
  --bases-table-group-background: #292929;
  --bases-table-header-background: #000000;
  --bases-table-header-background-hover: #292929;
  --bases-table-header-color: #9C9C9C;
  --bases-table-row-background-hover: #000000;
  --bases-table-summary-background: #000000;
  --bases-table-summary-background-hover: #292929;
  --blockquote-border-color: #FF8040;
  --blockquote-color: #AA1B86;
  --blur-background: color-mix(in srgb, color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) 65%, transparent) linear-gradient(color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ), color-mix(in srgb, color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) 65%, transparent));
  --bold-color: #4DBCED;
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
  --canvas-background: #000000;
  --canvas-card-label-color: #FF8040;
  --canvas-color-1: 239, 107, 115;
  --canvas-color-2: 255, 174, 87;
  --canvas-color-3: 255, 204, 102;
  --canvas-color-4: 186, 230, 126;
  --canvas-color-5: 92, 207, 230;
  --canvas-color-6: 195, 166, 255;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: color-mix(
    in hsl,
    #292929,
    #9C9C9C
  );
  --caret-color: #FFD580;
  --checkbox-border-color: #AA1B86;
  --checkbox-border-color-hover: #9354FF;
  --checkbox-color: #AA1B86;
  --checkbox-color-hover: #9354FF;
  --checkbox-marker-color: #000000;
  --checkbox-radius: 2px;
  --checklist-done-color: #9C9C9C;
  --clickable-icon-radius: 0;
  --code-background: #1A1A1A;
  --code-border-color: #292929;
  --code-bracket-background: #292929;
  --code-comment: #0D8501;
  --code-function: #FF5503;
  --code-important: #FF8040;
  --code-keyword: #AA1B86;
  --code-normal: #08D220;
  --code-operator: #FF8040;
  --code-property: #9C9C9C;
  --code-punctuation: #FF8040;
  --code-radius: 2px;
  --code-string: #FF000F;
  --code-tag: #4DBCED;
  --code-value: #FFFFFF;
  --collapse-icon-color: #FF8040;
  --collapse-icon-color-collapsed: #FF8040;
  --color-accent: rgb(255, 204, 102);
  --color-accent-1: hsl(37, 102%, 80.5%);
  --color-accent-2: hsl(35, 105%, 90.3%);
  --color-accent-hsl: 40, 100%, 70%;
  --color-base-00: #000000;
  --color-base-05: color-mix(
    in hsl,
    #000000,
    #000000
  );
  --color-base-10: #000000;
  --color-base-100: #9C9C9C;
  --color-base-20: color-mix(
    in hsl,
    #000000,
    #292929
  );
  --color-base-25: #292929;
  --color-base-30: color-mix(
    in hsl,
    #292929,
    #9C9C9C
  );
  --color-base-35: #9C9C9C;
  --color-base-40: color-mix(
    in hsl,
    #9C9C9C,
    #9C9C9C
  );
  --color-base-50: #9C9C9C;
  --color-base-60: #9C9C9C;
  --color-base-70: color-mix(
    in hsl,
    #9C9C9C,
    #9C9C9C
  );
  --color-blue: #4DBCED;
  --color-blue-rgb: 112, 153, 219;
  --color-cyan: #4DBCED;
  --color-cyan-rgb: 92, 207, 230;
  --color-green: #08D220;
  --color-green-rgb: 186, 230, 126;
  --color-orange: #FF5503;
  --color-orange-rgb: 255, 174, 87;
  --color-pink: #EF6B73;
  --color-pink-rgb: 249, 207, 242;
  --color-purple: #FF8040;
  --color-purple-rgb: 195, 166, 255;
  --color-red: #FF000F;
  --color-red-rgb: 239, 107, 115;
  --color-yellow: #FFD580;
  --color-yellow-rgb: 255, 204, 102;
  --dark: var(--text-normal);
  --dark-castle-accent: #FF8040;
  --dark-castle-accent-h: 40;
  --dark-castle-accent-hover: #575757;
  --dark-castle-accent-l: 70%;
  --dark-castle-accent-s: 100%;
  --dark-castle-base-grey-mix: color-mix(
    in hsl,
    #9C9C9C,
    #9C9C9C
  );
  --dark-castle-code-error: #FF8040;
  --dark-castle-code-function: #FF5503;
  --dark-castle-code-keyword: #AA1B86;
  --dark-castle-code-operator: #FF8040;
  --dark-castle-code-variable: #08D220;
  --dark-castle-palette-black: #000000;
  --dark-castle-palette-black-02: #1A1A1A;
  --dark-castle-palette-black-02-mix: color-mix(
    in hsl,
    #000000,
    #000000
  );
  --dark-castle-palette-black-03-mix: color-mix(
    in hsl,
    #000000,
    #292929
  );
  --dark-castle-palette-blue: #4164FF;
  --dark-castle-palette-dark-blue: #2D449B;
  --dark-castle-palette-dark-gray: #292929;
  --dark-castle-palette-dark-gray-02: #333333;
  --dark-castle-palette-dark-gray-04-mix: color-mix(
    in hsl,
    #292929,
    #9C9C9C
  );
  --dark-castle-palette-dark-green: #0D8501;
  --dark-castle-palette-dark-purple: #AA1B86;
  --dark-castle-palette-dark-red: #AA0000;
  --dark-castle-palette-dark-teal: #007B88;
  --dark-castle-palette-dark-yellow: #DDAB13;
  --dark-castle-palette-gray: #575757;
  --dark-castle-palette-green: #08D220;
  --dark-castle-palette-light-blue: #4DBCED;
  --dark-castle-palette-light-blue-hover: color-mix(
    in hsl shorter hue,
    #4DBCED,
    #9C9C9C
  );
  --dark-castle-palette-light-gray: #9C9C9C;
  --dark-castle-palette-light-gray-05-mix: color-mix(
    in hsl,
    #9C9C9C,
    #9C9C9C
  );
  --dark-castle-palette-light-green: #BAE67E;
  --dark-castle-palette-light-orange: #FF8040;
  --dark-castle-palette-light-purple: #D8BFD8;
  --dark-castle-palette-light-red: #EF6B73;
  --dark-castle-palette-light-yellow: #FFD580;
  --dark-castle-palette-orange: #FF5503;
  --dark-castle-palette-pink: #FF3399;
  --dark-castle-palette-purple: #9354FF;
  --dark-castle-palette-red: #FF000F;
  --dark-castle-palette-white: #FFFFFF;
  --dark-castle-palette-yellow: #DFC200;
  --dark-castle-text-faint: #FF8040;
  --dark-castle-text-muted: #9C9C9C;
  --dark-castle-text-normal: #9C9C9C;
  --darkgray: var(--text-normal);
  --divider-color: #292929;
  --divider-color-hover: #FF8040;
  --drag-ghost-background: #292929;
  --drag-ghost-text-color: #FF8040;
  --dropdown-background: color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  );
  --dropdown-background-hover: #000000;
  --embed-block-shadow-hover: 0 0 0 1px #292929, inset 0 0 0 1px #292929;
  --embed-border-start: 2px solid #FF8040;
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --file-line-width: 50rem;
  --flair-background: color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  );
  --flair-color: #FFD580;
  --footnote-divider-color: #292929;
  --footnote-id-color: #9C9C9C;
  --footnote-id-color-no-occurrences: #FF8040;
  --footnote-input-background-active: #292929;
  --footnote-radius: 2px;
  --graph-line: #292929;
  --graph-node: #9C9C9C;
  --graph-node-attachment: #FFD580;
  --graph-node-focused: #FF8040;
  --graph-node-tag: #FF8040;
  --graph-node-unresolved: #FF8040;
  --graph-text: #FFD580;
  --gray: var(--text-muted);
  --h1-color: #BAE67E;
  --h2-color: #FF000F;
  --h2-weight: 675;
  --h3-color: #FF000F;
  --h3-weight: 650;
  --h4-color: #FF000F;
  --h4-weight: 625;
  --h5-color: #FF000F;
  --h5-weight: 600;
  --h6-color: #FF000F;
  --h6-weight: 575;
  --heading-formatting: #FF8040;
  --highlight: var(--text-highlight-bg);
  --hr-color: color-mix(
    in hsl shorter hue,
    #2D449B,
    #2D449B
  );
  --icon-color: #9C9C9C;
  --icon-color-active: #FFD580;
  --icon-color-focused: #FFD580;
  --icon-color-hover: #9C9C9C;
  --icon-stroke: 2px;
  --inline-title-color: #BAE67E;
  --input-date-separator: #FF8040;
  --input-placeholder-color: #FF8040;
  --interactive-accent: #FF8040;
  --interactive-accent-hover: color-mix(
    in hsl shorter hue,
    #FF8040 75%,
    transparent
  );
  --interactive-accent-hsl: 40, 100%, 70%;
  --interactive-hover: #000000;
  --interactive-normal: color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  );
  --italic-color: #4DBCED;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #FF8040;
  --link-color-hover: #4164FF;
  --link-external-color: #FF8040;
  --link-external-color-hover: #4164FF;
  --link-unresolved-color: #FF8040;
  --link-unresolved-decoration-color: #4164FF;
  --link-unresolved-decoration-style: dashed;
  --list-marker-color: #007B88;
  --list-marker-color-collapsed: #FF000F;
  --list-marker-color-hover: #575757;
  --menu-background: #000000;
  --menu-border-color: #FF8040;
  --menu-radius: 4px;
  --metadata-border-color: #292929;
  --metadata-divider-color: #292929;
  --metadata-input-background-active: #292929;
  --metadata-input-text-color: #FFD580;
  --metadata-label-background-active: #292929;
  --metadata-label-text-color: #4DBCED;
  --metadata-label-text-color-hover: color-mix(
    in hsl shorter hue,
    #4DBCED,
    #9C9C9C
  );
  --metadata-property-background-active: #292929;
  --metadata-property-box-shadow-focus: 0 0 0 2px #9C9C9C;
  --metadata-property-box-shadow-hover: 0 0 0 1px #FF8040;
  --modal-background: #000000;
  --modal-border-color: #000000;
  --modal-radius: 6px;
  --nav-collapse-icon-color: #FF8040;
  --nav-collapse-icon-color-collapsed: #FF8040;
  --nav-heading-color: #FFD580;
  --nav-heading-color-collapsed: #FF8040;
  --nav-heading-color-collapsed-hover: #9C9C9C;
  --nav-heading-color-hover: #FFD580;
  --nav-item-background-active: #292929;
  --nav-item-background-hover: #292929;
  --nav-item-background-selected: #292929;
  --nav-item-color: #9C9C9C;
  --nav-item-color-active: #FFD580;
  --nav-item-color-highlighted: #FF8040;
  --nav-item-color-hover: #FFD580;
  --nav-item-color-selected: #4DBCED;
  --nav-item-radius: 2px;
  --nav-tag-color: #FF8040;
  --nav-tag-color-active: #9C9C9C;
  --nav-tag-color-hover: #9C9C9C;
  --nav-tag-radius: 2px;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-shadow: 0 0 0 1px #292929;
  --pdf-sidebar-background: #000000;
  --pdf-thumbnail-shadow: 0 0 0 1px #292929;
  --pill-border-color: #292929;
  --pill-border-color-hover: #FF8040;
  --pill-color: #9C9C9C;
  --pill-color-hover: #FFD580;
  --pill-color-remove: #FF8040;
  --pill-color-remove-hover: #FF8040;
  --prompt-background: #000000;
  --prompt-border-color: color-mix(
    in hsl,
    #000000,
    #292929
  );
  --radius-l: 6px;
  --radius-m: 4px;
  --radius-s: 2px;
  --radius-xl: 8px;
  --raised-background: color-mix(in srgb, color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) 65%, transparent) linear-gradient(color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ), color-mix(in srgb, color-mix(
    in hsl shorter hue,
    #000000 75%,
    transparent
  ) 65%, transparent));
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --scrollbar-bg: transparent;
  --scrollbar-radius: 6px;
  --search-clear-button-color: #FF8040;
  --search-icon-color: #FF8040;
  --search-result-background: #000000;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #FFD580;
  --setting-items-background: #292929;
  --setting-items-border-color: #292929;
  --setting-items-radius: 6px;
  --slider-thumb-border-color: #FF8040;
  --slider-track-background: #292929;
  --status-bar-background: #000000;
  --status-bar-border-color: #292929;
  --status-bar-radius: 4px 0 0 0;
  --status-bar-text-color: #9C9C9C;
  --strikethrough-color: #4DBCED;
  --suggestion-background: #000000;
  --sync-avatar-color-1: #FF000F;
  --sync-avatar-color-2: #FF5503;
  --sync-avatar-color-3: #FFD580;
  --sync-avatar-color-4: #08D220;
  --sync-avatar-color-5: #4DBCED;
  --sync-avatar-color-6: #4DBCED;
  --sync-avatar-color-7: #FF8040;
  --sync-avatar-color-8: #EF6B73;
  --tab-background-active: #000000;
  --tab-container-background: #000000;
  --tab-curve: 0px;
  --tab-divider-color: #000000;
  --tab-outline-color: #292929;
  --tab-outline-width: 0px;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-switcher-preview-radius: 8px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 204, 102);
  --tab-text-color: #FF8040;
  --tab-text-color-focused: #9C9C9C;
  --tab-text-color-focused-highlighted: #FF8040;
  --table-add-button-border-color: #292929;
  --table-background: #000000;
  --table-border-color: #292929;
  --table-column-alt-background: #000000;
  --table-drag-handle-background-active: #FF8040;
  --table-drag-handle-color: #FF8040;
  --table-drag-handle-color-active: #292929;
  --table-header-background: #000000;
  --table-header-background-hover: #000000;
  --table-header-border-color: #292929;
  --table-header-color: #FFD580;
  --table-header-size: larger;
  --table-row-alt-background: #000000;
  --table-row-alt-background-hover: #000000;
  --table-row-background-hover: #000000;
  --table-selection: rgba(255, 204, 102, 0.1);
  --table-selection-border-color: #FF8040;
  --tag-background: #007B88;
  --tag-background-hover: #FFFFFF;
  --tag-border-color: rgba(255, 204, 102, 0.15);
  --tag-border-color-hover: rgba(255, 204, 102, 0.15);
  --tag-color: #FFFFFF;
  --tag-color-hover: #007B88;
  --tag-decoration-hover: underline;
  --tag-size: 12px;
  --tertiary: var(--text-accent-hover);
  --text-accent: #FF8040;
  --text-accent-hover: #575757;
  --text-error: #EF6B73;
  --text-faint: #FF8040;
  --text-highlight-bg: #292929;
  --text-muted: #9C9C9C;
  --text-normal: #FFD580;
  --text-on-accent: #292929;
  --text-selection: #575757;
  --text-success: #BAE67E;
  --text-warning: #FFD580;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --titlebar-border-color: #292929;
  --titlebar-text-color: #FF8040;
  --titlebar-text-color-focused: #9C9C9C;
  --toggle-thumb-color: #292929;
  --vault-name-color: #FF8040;
  --vault-name-font-size: 1em;
  --vault-profile-color: #FFD580;
  --vault-profile-color-hover: #FFD580;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 213, 128);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 213, 128);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 213, 128);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 41, 41);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 213, 128);
}`,
    typography: `body .page article p > b, b {
  color: rgb(77, 188, 237);
  outline: rgb(77, 188, 237) none 0px;
  text-decoration: rgb(77, 188, 237);
  text-decoration-color: rgb(77, 188, 237);
}

body .page article p > em, em {
  color: rgb(77, 188, 237);
  outline: rgb(77, 188, 237) none 0px;
  text-decoration: rgb(77, 188, 237);
  text-decoration-color: rgb(77, 188, 237);
}

body .page article p > i, i {
  color: rgb(77, 188, 237);
  outline: rgb(77, 188, 237) none 0px;
  text-decoration: rgb(77, 188, 237);
  text-decoration-color: rgb(77, 188, 237);
}

body .page article p > strong, strong {
  color: rgb(77, 188, 237);
  outline: rgb(77, 188, 237) none 0px;
  text-decoration: rgb(77, 188, 237);
  text-decoration-color: rgb(77, 188, 237);
}

body .text-highlight {
  background-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
  outline: rgb(255, 213, 128) none 0px;
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body del {
  color: rgb(255, 213, 128);
  outline: rgb(255, 213, 128) none 0px;
  text-decoration: line-through rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body p {
  color: rgb(156, 156, 156);
  outline: rgb(156, 156, 156) none 0px;
  text-decoration: rgb(156, 156, 156);
  text-decoration-color: rgb(156, 156, 156);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 128, 64);
  outline: rgb(255, 128, 64) none 0px;
  text-decoration: underline rgb(255, 128, 64);
  text-decoration-color: rgb(255, 128, 64);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 128, 64);
  outline: rgb(255, 128, 64) none 0px;
  text-decoration: underline rgb(255, 128, 64);
  text-decoration-color: rgb(255, 128, 64);
}

body a.internal.broken {
  color: rgb(255, 128, 64);
  outline: rgb(255, 128, 64) none 0px;
  text-decoration: underline dashed rgb(65, 100, 255);
  text-decoration-color: rgb(65, 100, 255);
  text-decoration-style: dashed;
}`,
    lists: `body dd {
  color: rgb(255, 213, 128);
}

body dt {
  color: rgb(255, 213, 128);
}

body ol > li {
  color: rgb(255, 213, 128);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body ul > li {
  color: rgb(255, 213, 128);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(255, 128, 64);
  text-decoration: rgb(255, 128, 64);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body table {
  color: rgb(255, 213, 128);
  width: 767px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(0, 0, 0);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(0, 0, 0);
}

body td {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

body th {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

body tr {
  background-color: rgb(0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(8, 210, 32);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 210, 32);
  border-right-color: rgb(8, 210, 32);
  border-top-color: rgb(8, 210, 32);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 210, 32);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(255, 213, 128);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 85, 3);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 85, 3);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 85, 3);
  border-left-color: rgb(255, 85, 3);
  border-right-color: rgb(255, 85, 3);
  border-top-color: rgb(255, 85, 3);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body figcaption {
  color: rgb(255, 213, 128);
}

body figure {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body img {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body video {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}`,
    embeds: `body .file-embed {
  background-color: rgb(41, 41, 41);
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .footnotes {
  border-top-color: rgb(255, 213, 128);
  color: rgb(255, 213, 128);
}

body .transclude {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 128, 64);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 128, 64);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(156, 156, 156);
  text-decoration: line-through rgb(156, 156, 156);
  text-decoration-color: rgb(156, 156, 156);
}

body input[type=checkbox] {
  border-bottom-color: rgb(170, 27, 134);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(170, 27, 134);
  border-right-color: rgb(170, 27, 134);
  border-top-color: rgb(170, 27, 134);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 213, 128);
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
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
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(87, 87, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(87, 87, 87);
  border-right-color: rgb(87, 87, 87);
  border-top-color: rgb(87, 87, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 213, 128);
  outline: rgb(255, 213, 128) none 0px;
  text-decoration: rgb(255, 213, 128);
  text-decoration-color: rgb(255, 213, 128);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 213, 128);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 213, 128);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 213, 128);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 41, 41);
  color: rgb(255, 213, 128);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(87, 87, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(87, 87, 87);
  border-right-color: rgb(87, 87, 87);
  border-top-color: rgb(87, 87, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 128, 64);
  border-right-color: rgb(255, 128, 64);
  border-top-color: rgb(255, 128, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(41, 41, 41);
  border-bottom-color: rgb(255, 213, 128);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(255, 213, 128);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 41, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(255, 213, 128);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(0, 123, 136);
  border-bottom-color: rgba(255, 204, 102, 0.15);
  border-left-color: rgba(255, 204, 102, 0.15);
  border-right-color: rgba(255, 204, 102, 0.15);
  border-top-color: rgba(255, 204, 102, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(186, 230, 126);
}

body h2 {
  color: rgb(255, 0, 15);
}

body h2.page-title, h2.page-title a {
  color: rgb(186, 230, 126);
}

body h3 {
  color: rgb(255, 0, 15);
}

body h4 {
  color: rgb(255, 0, 15);
}

body h5 {
  color: rgb(255, 0, 15);
}

body h6 {
  color: rgb(255, 0, 15);
}

body hr {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
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
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(41, 41, 41);
  border-bottom-color: rgb(255, 213, 128);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(255, 213, 128);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(156, 156, 156);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  border-top-left-radius: 4px;
  color: rgb(156, 156, 156);
}

body footer ul li a {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 213, 128);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  color: rgb(255, 213, 128);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(156, 156, 156);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body li.section-li > .section .meta {
  color: rgb(156, 156, 156);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(156, 156, 156);
  text-decoration: rgb(156, 156, 156);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(156, 156, 156);
}

body .darkmode svg {
  color: rgb(156, 156, 156);
  stroke: rgb(156, 156, 156);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(156, 156, 156);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(156, 156, 156);
}

body .breadcrumb-element p {
  color: rgb(255, 128, 64);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
  color: rgb(255, 213, 128);
}

body .metadata {
  border-bottom-color: rgb(41, 41, 41);
  border-left-color: rgb(41, 41, 41);
  border-right-color: rgb(41, 41, 41);
  border-top-color: rgb(41, 41, 41);
  color: rgb(156, 156, 156);
}

body .metadata-properties {
  border-bottom-color: rgb(156, 156, 156);
  border-left-color: rgb(156, 156, 156);
  border-right-color: rgb(156, 156, 156);
  border-top-color: rgb(156, 156, 156);
  color: rgb(156, 156, 156);
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(255, 213, 128);
}

body abbr {
  color: rgb(255, 213, 128);
  text-decoration: underline dotted rgb(255, 213, 128);
}

body details {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body input[type=text] {
  border-bottom-color: rgb(77, 188, 237);
  border-left-color: rgb(77, 188, 237);
  border-right-color: rgb(77, 188, 237);
  border-top-color: rgb(77, 188, 237);
  color: rgb(77, 188, 237);
}

body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(8, 210, 32);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(8, 210, 32);
  border-right-color: rgb(8, 210, 32);
  border-top-color: rgb(8, 210, 32);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(8, 210, 32);
}

body progress {
  border-bottom-color: rgb(255, 213, 128);
  border-left-color: rgb(255, 213, 128);
  border-right-color: rgb(255, 213, 128);
  border-top-color: rgb(255, 213, 128);
}

body sub {
  color: rgb(255, 213, 128);
}

body summary {
  color: rgb(255, 213, 128);
}

body sup {
  color: rgb(255, 213, 128);
}`,
  },
  light: {},
};
