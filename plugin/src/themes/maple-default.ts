import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "maple.default",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["maple-mono"],
    fontFiles: [
      {
        family: "maplemono",
        style: "normal",
        weight: "400",
        file: "maplemono.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "maplemono",
        style: "italic",
        weight: "400",
        file: "maplemono-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-active: hsl(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l)
  );
  --accent-active-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    var(--color-opacity)
  );
  --accent-inactive: hsl(
    var(--theme-accent-inactive-h),
    var(--theme-accent-inactive-s),
    var(--theme-accent-inactive-l)
  );
  --active-line: var(
    --setting-line-active-color,
    var(--base-accent-h),
    var(--theme-accent-inactive-s),
    14%
  );
  --animation: var(--animation-dur) var(--anim-motion-smooth, 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95));
  --animation-delay: calc(var(--animation-dur)*4);
  --animation-dur: var(--setting-animation-time, 250ms);
  --animation-fast: calc(var(--animation-dur)/2) var(--anim-motion-smooth);
  --animation-slow: calc(var(--animation-dur)*2) var(--anim-motion-smooth);
  --app-bg-image: linear-gradient(
    320deg,
    hsl(calc(var(--base-accent-h) + 60), 11%, 22%),
    hsl(calc(var(--base-accent-h) - 10), 24%, 28%)
  );
  --app-layout-spacing: var(--setting-app-layout-spacing, var(--size-2-3));
  --background-modifier-border: hsla(
    var(--theme-accent-inactive-h),
    calc(var(--theme-accent-inactive-s)/2),
    var(--theme-accent-inactive-l),
    75%
  );
  --background-modifier-border-focus: var(--background-modifier-border-hover, hsla(
    207,
    16.8%,
    52%,
    60%
  ));
  --background-modifier-border-hover: hsla(
    var(--theme-accent-active-h),
    calc(var(--theme-accent-active-s)*0.7),
    var(--theme-accent-active-l),
    60%
  );
  --background-modifier-cover: hsla(var(--background-secondary-hsl), 0.6);
  --background-modifier-error: rgba(var(--color-red-rgb), 1);
  --background-modifier-error-hover: rgba(var(--color-red-rgb), 0.9);
  --background-modifier-error-rgb: var(--color-red-rgb, 209.304, 137.496, 137.496);
  --background-modifier-hover: hsl(
    var(--base-accent-h),
    var(--theme-accent-active-s),
    max(50%, var(--accent-l) * 0.6),
    20%
  );
  --background-modifier-message: var(--setting-message-bg, var(--accent-active-bg));
  --background-modifier-success: var(--color-green, rgba(147.288, 199.512, 155.992, 0.85));
  --background-modifier-success-rgb: var(--color-green-rgb, 147.288, 199.512, 155.992);
  --background-primary: hsl(var(--background-primary-hsl));
  --background-primary-alt: hsl(var(--background-primary-alt-hsl));
  --background-primary-alt-hsl: var(--base-accent-h), 8%, 13.5%;
  --background-primary-hsl: var(--setting-bg-primary-dark-hsl, var(--default-mod-bg-hsl));
  --background-secondary: hsl(var(--background-secondary-hsl));
  --background-secondary-hsl: var(--setting-bg-secondary-dark-hsl, var(--default-mod-bg-hsl));
  --base-accent-h: var(--setting-accent-h-dark, 207);
  --bases-cards-background: var(--background-primary, hsl(0, 0%, 7%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --bases-embed-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --bases-embed-border-radius: var(--embed-radius, 8px);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 0%, 7%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(207, 24%,
    44.2%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --bases-table-header-background: var(--background-primary, hsl(0, 0%, 7%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --bases-table-summary-background: var(--background-primary, hsl(0, 0%, 7%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --bg-delta-dark: var(--setting-bg-delta-dark, 0%);
  --bg-editor: hsla(
    var(--background-primary-hsl),
    max(var(--bg-opacity), var(--editor-min-opacity))
  );
  --bg-opacity: var(--setting-layout-opacity, 0.4);
  --bg-surface: hsla(var(--background-secondary-hsl), var(--bg-opacity));
  --block-outline-width: var(--size-2-1, 2px);
  --blockquote-background-color: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --blockquote-border-color: var(--accent-active, hsl(
    207,
    24%,
    52%
  ));
  --blockquote-border-thickness: var(--size-4-1, 4px);
  --blockquote-radius: var(--size-2-3, 6px);
  --button-radius: var(--input-radius, 6px);
  --callout-bug: var(--color-red-rgb, 209.304, 137.496, 137.496);
  --callout-default: var(--color-blue-rgb, 126.48, 183.6, 240.72);
  --callout-error: var(--color-red-rgb, 209.304, 137.496, 137.496);
  --callout-example: var(--color-purple-rgb, 186.2265, 179.265, 238.935);
  --callout-fail: var(--color-red-rgb, 209.304, 137.496, 137.496);
  --callout-important: var(--color-cyan-rgb, 126.48, 199.92, 197.472);
  --callout-info: var(--color-blue-rgb, 126.48, 183.6, 240.72);
  --callout-question: var(--color-orange-rgb, 206.04, 162.52, 140.76);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--color-green-rgb, 147.288, 199.512, 155.992);
  --callout-summary: var(--color-cyan-rgb, 126.48, 199.92, 197.472);
  --callout-tip: var(--color-cyan-rgb, 126.48, 199.92, 197.472);
  --callout-todo: var(--color-blue-rgb, 126.48, 183.6, 240.72);
  --callout-warning: var(--color-orange-rgb, 206.04, 162.52, 140.76);
  --canvas-background: var(--background-primary, hsl(0, 0%, 7%));
  --canvas-color-1: var(--color-red-rgb, 209.304, 137.496, 137.496);
  --canvas-color-2: var(--color-orange-rgb, 206.04, 162.52, 140.76);
  --canvas-color-3: var(--color-yellow-rgb, 214.2, 181.56, 132.6);
  --canvas-color-4: var(--color-green-rgb, 147.288, 199.512, 155.992);
  --canvas-color-5: var(--color-cyan-rgb, 126.48, 199.92, 197.472);
  --canvas-color-6: var(--color-purple-rgb, 186.2265, 179.265, 238.935);
  --caret-color: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --checkbox-border-color: var(--text-faint, hsl(
    207,
    12%,
    32%
  ));
  --checkbox-border-color-hover: var(--text-muted, hsl(
    207,
    24%,
    52%
  ));
  --checkbox-color: var(--interactive-accent, hsl(
    207,
    24%,
    52%
  ));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    204,
    24.48%,
    50.83%
  ));
  --checkbox-marker-color: var(--background-primary, #eaeaea);
  --code-background: var(--setting-code-bg, var(--background-primary-alt));
  --code-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --code-border-width: 1px;
  --code-bracket-background: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --code-class: var(--color-orange, rgba(206.04, 162.52, 140.76, 0.85));
  --code-function: var(--color-blue, rgba(126.48, 183.6, 240.72, 0.85));
  --code-important: var(--color-purple, rgba(186.2265, 179.265, 238.935, 0.85));
  --code-keyword: var(--color-purple, rgba(186.2265, 179.265, 238.935, 0.85));
  --code-mac-style-header-bg: #111;
  --code-mac-style-header-color: #aaa;
  --code-normal: var(--text-muted, #b3b3b3);
  --code-operator: var(--code-punctuation, #999999);
  --code-property: var(--color-yellow, rgba(214.2, 181.56, 132.6, 0.85));
  --code-punctuation: var(--color-base-60, #999999);
  --code-radius: var(--radius-m, 8px);
  --code-string: var(--color-green, rgba(147.288, 199.512, 155.992, 0.85));
  --code-tag: var(--color-red, rgba(209.304, 137.496, 137.496, 0.85));
  --code-value: var(--color-cyan, rgba(126.48, 199.92, 197.472, 0.85));
  --code-variable: var(--color-yellow, rgba(214.2, 181.56, 132.6, 0.85));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(
    204,
    24.48%,
    50.83%
  ));
  --color-accent: hsl(var(--color-accent-hsl));
  --color-accent-1: hsl(
    calc(var(--base-accent-h) - 3),
    calc(var(--theme-accent-active-s)*1.02),
    calc(var(--theme-accent-active-l)*1.15*var(--color-opacity))
  );
  --color-accent-2: hsl(
    calc(var(--base-accent-h) - 5),
    calc(var(--theme-accent-active-s)*1.05),
    calc(var(--theme-accent-active-l)*1.29*var(--color-opacity))
  );
  --color-accent-hsl: var(--base-accent-h), var(--theme-accent-active-s),
    calc(var(--theme-accent-active-l)*var(--color-opacity));
  --color-blue: rgba(var(--color-blue-rgb), var(--color-opacity));
  --color-blue-rgb: 126.48, 183.6, 240.72;
  --color-cyan: rgba(var(--color-cyan-rgb), var(--color-opacity));
  --color-cyan-rgb: 126.48, 199.92, 197.472;
  --color-green: rgba(var(--color-green-rgb), var(--color-opacity));
  --color-green-rgb: 147.288, 199.512, 155.992;
  --color-opacity: 0.85;
  --color-orange: rgba(var(--color-orange-rgb), var(--color-opacity));
  --color-orange-rgb: 206.04, 162.52, 140.76;
  --color-purple: rgba(var(--color-purple-rgb), var(--color-opacity));
  --color-purple-rgb: 186.2265, 179.265, 238.935;
  --color-red: rgba(var(--color-red-rgb), var(--color-opacity));
  --color-red-rgb: 209.304, 137.496, 137.496;
  --color-yellow: rgba(var(--color-yellow-rgb), var(--color-opacity));
  --color-yellow-rgb: 214.2, 181.56, 132.6;
  --dark: var(--text-normal, hsla(var(--base-accent-h), 50%, 94%, 75%));
  --darkgray: var(--text-normal, hsla(var(--base-accent-h), 50%, 94%, 75%));
  --default-mod-bg-hsl: 0, 0%, 7%;
  --divider-color: var(--setting-divider-color, var(--color-base-30));
  --divider-color-hover: var(--interactive-accent, hsl(207, 24%,
    44.2%));
  --divider-width-hover: var(--size-4-1, 4px);
  --editor-min-opacity: 0.85;
  --embed-background: var(--bg-editor, hsla(
    0, 0%, 7%,
    max(0.6, 0.85)
  ));
  --embed-block-shadow-hover: 0 0 0 1px var(--accent-inactive), inset 0 0 0 1px var(--accent-inactive);
  --embed-border-bottom: var(--embed-border-start, 2px solid hsl(
    207,
    12%,
    32%
  ));
  --embed-border-end: var(--embed-border-start, 2px solid hsl(
    207,
    12%,
    32%
  ));
  --embed-border-start: var(--size-2-1) solid var(--accent-inactive, 2px solid hsl(
    207,
    12%,
    32%
  ));
  --embed-border-top: var(--embed-border-start, 2px solid hsl(
    207,
    12%,
    32%
  ));
  --embed-padding: var(--size-4-4) var(--size-4-5, 16px 20px);
  --embed-radius: var(--radius-m, 8px);
  --file-folding-offset: 28px;
  --file-header-background: var(--background-primary, hsl(0, 0%, 7%));
  --file-header-background-focused: var(--background-primary, hsl(0, 0%, 7%));
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-line-width: var(--setting-file-line-width, clamp(600px, 72%, 820px));
  --flair-color: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --folder-color: var(--setting-color-dirs, hsl(46, 81%, 45%));
  --folder-inactive: 70%;
  --font-monospace-theme: "maplemono";
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --footnote-line-height: var(--line-height-normal, 1.8);
  --frame-bg: var(--setting-bg-frame-dark, hsl(var(--default-mod-bg-hsl)));
  --graph-node: var(--setting-graph-node, var(--text-muted));
  --graph-node-attachment: var(--color-yellow, rgba(214.2, 181.56, 132.6, 0.85));
  --graph-node-focused: var(--setting-graph-node-focus, var(--accent-active));
  --graph-node-tag: var(--color-green, rgba(147.288, 199.512, 155.992, 0.85));
  --graph-node-unresolved: var(--setting-graph-node-unresolved, var(--text-faint));
  --graph-text: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --gray: var(--text-normal, hsla(var(--base-accent-h), 50%, 94%, 75%));
  --grid-dots-color: var(--setting-editor-bg-grid-dots, var(--color-base-35));
  --grid-line-color: var(--setting-editor-bg-grid-line, var(--color-base-25));
  --grid-spacing: var(--setting-editor-bg-grid-spacing, var(--size-4-5));
  --h1-color: rgb(209.304, 137.496, 137.496);
  --h1-color-rgb: 209.304, 137.496, 137.496;
  --h1-font: var(--setting-h1-font, var(--font-text));
  --h1-line-height: calc(var(--line-height-normal)*var(--h1-size));
  --h1-size: calc(var(--font-text-size)*var(--setting-h1-size, 1.6));
  --h1-weight: var(--setting-h1-weight, 750);
  --h2-color: rgb(206.04, 162.52, 140.76);
  --h2-color-rgb: 206.04, 162.52, 140.76;
  --h2-font: var(--setting-h2-font, var(--font-text));
  --h2-line-height: calc(var(--line-height-normal)*var(--h2-size));
  --h2-size: calc(var(--font-text-size)*var(--setting-h2-size, 1.5));
  --h2-weight: var(--setting-h2-weight, 700);
  --h3-color: rgb(147.288, 199.512, 155.992);
  --h3-color-rgb: 147.288, 199.512, 155.992;
  --h3-font: var(--setting-h3-font, var(--font-text));
  --h3-line-height: calc(var(--line-height-normal)*var(--h3-size));
  --h3-size: calc(var(--font-text-size)*var(--setting-h3-size, 1.4));
  --h3-weight: var(--setting-h3-weight, 600);
  --h4-color: rgb(126.48, 183.6, 240.72);
  --h4-color-rgb: 126.48, 183.6, 240.72;
  --h4-font: var(--setting-h4-font, var(--font-text));
  --h4-line-height: calc(var(--line-height-normal)*var(--h4-size));
  --h4-size: calc(var(--font-text-size)*var(--setting-h4-size, 1.3));
  --h4-weight: var(--setting-h4-weight, 550);
  --h5-color: rgb(186.2265, 179.265, 238.935);
  --h5-color-rgb: 186.2265, 179.265, 238.935;
  --h5-font: var(--setting-h5-font, var(--font-text));
  --h5-line-height: calc(var(--line-height-normal)*var(--h5-size));
  --h5-size: calc(var(--font-text-size)*var(--setting-h5-size, 1.2));
  --h5-weight: var(--setting-h5-weight, 550);
  --h6-color: rgb(126.48, 199.92, 197.472);
  --h6-color-rgb: 126.48, 199.92, 197.472;
  --h6-font: var(--setting-h6-font, var(--font-text));
  --h6-line-height: calc(var(--line-height-normal)*var(--h6-size));
  --h6-size: calc(var(--font-text-size)*var(--setting-h6-size, 1.1));
  --h6-variant: small-caps;
  --h6-weight: var(--setting-h6-weight, 500);
  --highlight: var(--text-highlight-bg, var(--setting-text-highlight-bg, rgba(var(--color-yellow-rgb), 0.3)));
  --hr-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --icon-color-active: var(--text-accent, hsl(
    204,
    24.48%,
    50.83%
  ));
  --icon-color-focused: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --inline-code: var(--setting-code-inline, var(--color-red));
  --inline-title-color: var(--h1-color, rgb(209.304, 137.496, 137.496));
  --inline-title-font: var(--h1-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --inline-title-line-height: var(--h1-line-height, 46.08px);
  --inline-title-size: var(--h1-size, 25.6px);
  --inline-title-weight: var(--h1-weight, 750);
  --input-radius: var(--size-2-3, 6px);
  --input-shadow: 0 0.125px 0 0.5px var(--color-base-10), inset 0 -0.125px 1px 0px var(--color-base-30),
    0 0.75px 2px 0.5px var(--color-base-50);
  --input-shadow-hover: 0 0.125px 0 0.5px var(--color-base-20), inset 0 -0.125px 1px 0px var(--color-base-40),
    0 0.75px 2px 0.5px var(--color-base-50);
  --interactive-accent: var(--color-accent, hsl(207, 24%,
    44.2%));
  --interactive-accent-hover: var(--color-accent-1, hsl(
    204,
    24.48%,
    50.83%
  ));
  --interactive-accent-hsl: var(--color-accent-hsl, 207, 24%,
    44.2%);
  --light: var(--background-primary, hsl(var(--background-primary-hsl)));
  --lightgray: var(--background-secondary, hsl(var(--background-secondary-hsl)));
  --line-height-normal: var(--setting-line-height, 1.8);
  --line-height-tight: var(--setting-item-line-height, 1.5);
  --link-color: rgba(var(--link-color-rgb), var(--color-opacity));
  --link-color-hover: var(--link-color, rgba(126.48, 199.92, 197.472, 0.85));
  --link-color-rgb: var(--setting-link-internal-color, var(--color-cyan-rgb));
  --link-color-underline: var(--setting-link-internal-color-underline, var(--link-color));
  --link-external-color: rgba(var(--link-external-color-rgb), var(--color-opacity));
  --link-external-color-hover: var(--link-external-color, rgba(214.2, 181.56, 132.6, 0.85));
  --link-external-color-rgb: var(--setting-link-external-color, var(--color-yellow-rgb));
  --link-external-color-underline: var(
    --setting-link-external-color-underline,
    var(--link-external-color)
  );
  --link-footnote: var(--color-purple, rgba(186.2265, 179.265, 238.935, 0.85));
  --link-text-size: var(--font-text-size, 16px);
  --link-unresolved-color: rgba(var(--link-color-rgb), calc(var(--color-opacity)*0.85));
  --link-unresolved-decoration-color: var(--link-unresolved-color, rgba(126.48, 199.92, 197.472, 0.7225));
  --list-bullet-size: 7.33333px;
  --list-marker-color: var(--text-faint, hsl(
    207,
    24%,
    52%
  ));
  --list-marker-color-alt: hsl(
    207,
    24%,
    52%
  );
  --list-marker-color-alt-render: transparent;
  --list-marker-color-collapsed: var(--text-accent, hsl(
    204,
    24.48%,
    50.83%
  ));
  --list-threading-color: var(--setting-list-guide-color, var(--accent-inactive));
  --list-threading-width: max(0.1rem, var(--size-2-1));
  --menu-background: var(--background-secondary, hsl(0, 0%, 7%));
  --menu-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --menu-padding: var(--size-2-3, 4px);
  --metadata-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --metadata-divider-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --metadata-input-background-active: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --metadata-input-text-color: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, hsl(0, 0%, 7%));
  --modal-close-button-padding: var(--size-4-3, 12px);
  --modal-header-height: var(--size-4-12, 48px);
  --modal-height: min(85vh, var(--modal-max-height));
  --modal-width: min(90vw, var(--modal-max-width));
  --nav-heading-color: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --nav-heading-color-hover: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --nav-indentation-guide-color: var(--color-base-30, #363636);
  --nav-indentation-guide-width: var(--indentation-guide-width, 1.8px);
  --nav-item-background-active: var(--accent-active-bg, hsla(
    207,
    24%,
    52%,
    0.85
  ));
  --nav-item-background-hover: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --nav-item-background-selected: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --nav-item-children-padding-left: var(--size-4-2, 8px);
  --nav-item-color-active: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --nav-item-color-highlighted: var(--text-accent, hsl(
    204,
    24.48%,
    50.83%
  ));
  --nav-item-color-hover: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --nav-item-color-selected: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --nav-item-size: calc(var(--size-4-4)*0.9);
  --outline-guideline-color: var(--settingoutline-line-color, var(--accent-inactive));
  --outline-guideline-color-alt: var(--outline-dot-color, var(--accent-active));
  --outline-guideline-width: var(--setting-outline-width, 2px);
  --outline-item-height: calc(var(--nav-item-size)*1.8);
  --p-spacing: var(--setting-editor-p-spacing, var(--size-4-2));
  --pdf-background: var(--background-primary, transparent);
  --pdf-page-background: var(--background-primary, hsl(0, 0%, 7%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 0%, 7%));
  --pill-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsla(
    207,
    16.8%,
    52%,
    60%
  ));
  --pill-color-hover: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --pill-color-remove-hover: var(--text-accent, hsl(
    204,
    24.48%,
    50.83%
  ));
  --prompt-background: var(--background-primary, hsl(0, 0%, 7%));
  --ribbon-background: var(--background-secondary, hsl(0, 0%, 7%));
  --ribbon-background-collapsed: var(--background-primary, hsl(0, 0%, 7%));
  --scrollbar-color: rgba(0, 0, 0, 0);
  --scrollbar-transition: --scrollbar-color var(--animation);
  --search-result-background: var(--background-primary, hsl(0, 0%, 7%));
  --secondary: var(--text-accent, var(--color-accent-1, hsl(
    204,
    24.48%,
    50.83%
  )));
  --select-bg-img: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='%2523DDDDDD' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/%3E%3C/svg%3E");
  --setting-accent-h-dark: 207;
  --setting-calendar-max-width: 500px;
  --setting-code-ligature: 'calt';
  --setting-color-dirs: hsl(45.81,80.87%,45.1%);
  --setting-file-line-width: clamp(600px, 72%, 850px);
  --setting-group-heading-color: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-h1-weight: 750;
  --setting-h2-font: "";
  --setting-h2-weight: 700;
  --setting-h3-font: "";
  --setting-h3-weight: 600;
  --setting-h4-font: "";
  --setting-h4-weight: 550;
  --setting-h5-font: "";
  --setting-h5-weight: 550;
  --setting-h6-font: "";
  --setting-h6-weight: 500;
  --setting-hr-icon: ''⭐'';
  --setting-items-background: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --setting-items-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --setting-modal-header-title: 'Maple 1.0.0-beta.33';
  --setting-scrollbar-hover: hsla(var(--color-accent-hsl), 40%);
  --setting-text-bold-style: underline dotted;
  --setting-text-highlight-bg: rgba(255, 208, 0, 0.4);
  --setting-text-italic-style: underline dotted;
  --shiki-code-background: var(--code-background, hsl(207, 8%, 13.5%));
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-block-spacing: var(--p-spacing, 8px);
  --shiki-code-function: var(--color-green, rgba(147.288, 199.512, 155.992, 0.85));
  --shiki-code-important: var(--color-orange, rgba(206.04, 162.52, 140.76, 0.85));
  --shiki-code-property: var(--color-cyan, rgba(126.48, 199.92, 197.472, 0.85));
  --shiki-code-string: var(--color-yellow, rgba(214.2, 181.56, 132.6, 0.85));
  --shiki-code-value: var(--color-purple, rgba(186.2265, 179.265, 238.935, 0.85));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --shiki-tooltip-background: var(--background-modifier-message, hsla(
    207,
    24%,
    52%,
    0.85
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsla(
    207,
    16.8%,
    52%,
    60%
  ));
  --slider-track-background: var(--accent-inactive, hsl(
    207,
    12%,
    32%
  ));
  --status-bar-background: var(--background-secondary, hsl(0, 0%, 7%));
  --status-bar-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 1px);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-radius: var(--size-2-3, 6px);
  --suggestion-background: var(--background-primary, hsl(0, 0%, 7%));
  --sync-avatar-color-1: var(--color-red, rgba(209.304, 137.496, 137.496, 0.85));
  --sync-avatar-color-2: var(--color-orange, rgba(206.04, 162.52, 140.76, 0.85));
  --sync-avatar-color-3: var(--color-yellow, rgba(214.2, 181.56, 132.6, 0.85));
  --sync-avatar-color-4: var(--color-green, rgba(147.288, 199.512, 155.992, 0.85));
  --sync-avatar-color-5: var(--color-cyan, rgba(126.48, 199.92, 197.472, 0.85));
  --sync-avatar-color-6: var(--color-blue, rgba(126.48, 183.6, 240.72, 0.85));
  --sync-avatar-color-7: var(--color-purple, rgba(186.2265, 179.265, 238.935, 0.85));
  --tab-active-shadow: none;
  --tab-background-active: var(--background-primary, hsl(0, 0%, 7%));
  --tab-container-background: var(--frame-bg, hsl(0, 0%, 7%));
  --tab-divider-color: var(--color-base-35, #3f3f3f);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 6px);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-stacked-header-width: var(--setting-tab-stack-header-width, var(--header-height));
  --tab-switcher-background: var(--background-secondary, hsl(0, 0%, 7%));
  --tab-text-color-focused-active-current: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(
    204,
    24.48%,
    50.83%
  ));
  --table-add-button-background: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --table-add-button-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --table-add-button-border-width: var(--table-border-width, 0);
  --table-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --table-cell-vertical-alignment: middle;
  --table-drag-handle-background: var(--background-modifier-hover, hsl(
    207,
    24%,
    max(50%, 66% * 0.6),
    20%
  ));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(
    207,
    12%,
    32%
  ));
  --table-drag-handle-color-active: var(--text-on-accent, #eaeaea);
  --table-header-background: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --table-header-background-hover: var(--table-header-background, hsl(207, 8%, 13.5%));
  --table-header-border-color: var(--table-border-color, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --table-header-color: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --table-line-height: var(--line-height-tight, 1.5);
  --table-selection-border-color: var(--accent-inactive, hsl(
    207,
    12%,
    32%
  ));
  --table-selection-border-radius: var(--radius-m, 8px);
  --tag-border-color: var(--setting-tag-outline, var(--text-accent));
  --tag-border-width: 1px;
  --tag-color: var(--setting-tag-color, var(--text-accent));
  --tag-color-hover: var(--text-accent, hsl(
    204,
    24.48%,
    50.83%
  ));
  --tag-padding-x: var(--size-4-2, 8px);
  --tag-padding-y: 0;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(
    202,
    25.2%,
    57.018%
  )));
  --text-accent: var(--color-accent-1, hsl(
    204,
    24.48%,
    50.83%
  ));
  --text-accent-hover: var(--color-accent-2, hsl(
    202,
    25.2%,
    57.018%
  ));
  --text-error: var(--color-red, rgba(209.304, 137.496, 137.496, 0.85));
  --text-highlight-bg: var(--setting-text-highlight-bg, rgba(var(--color-yellow-rgb), 0.3));
  --text-normal: hsla(var(--base-accent-h), 50%, 94%, 75%);
  --text-on-accent: #eaeaea;
  --text-selection: hsla(var(--color-accent-hsl), 0.25);
  --text-success: var(--color-green, rgba(147.288, 199.512, 155.992, 0.85));
  --text-warning: var(--color-orange, rgba(206.04, 162.52, 140.76, 0.85));
  --textHighlight: var(--text-highlight-bg, var(--setting-text-highlight-bg, rgba(var(--color-yellow-rgb), 0.3)));
  --theme-accent-active-h: var(--theme-accent-h, 207);
  --theme-accent-active-l: calc(40% + var(--accent-l)/10);
  --theme-accent-active-s: calc(20% + var(--accent-s)/10);
  --theme-accent-h: var(--base-accent-h, 207);
  --theme-accent-inactive-h: var(--theme-accent-h, 207);
  --theme-accent-inactive-l: calc(30% + var(--accent-l)/10);
  --theme-accent-inactive-s: calc(15% + var(--accent-s)/10);
  --titlebar-background: var(--frame-bg, hsl(0, 0%, 7%));
  --titlebar-background-focused: var(--frame-bg, hsl(0, 0%, 7%));
  --titlebar-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --titlebar-text-color-focused: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --vault-profile-color: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --vault-profile-color-hover: var(--vault-profile-color, hsla(207, 50%, 94%, 75%));
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 7%));
  background-color: var(--bg-surface, rgba(18, 18, 18, 0.6));
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 7%));
  background-color: var(--bg-surface, rgba(18, 18, 18, 0.6));
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-bold-font, inherit);
  font-weight: var(--setting-text-bold-weight, 600);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-italic-font, inherit);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-italic-font, inherit);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-italic-font, inherit);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-bold-font, inherit);
  font-weight: var(--setting-text-bold-weight, 600);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration: underline dotted;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="dark"] body .text-highlight {
  color: var(--setting-text-highlight-color, rgba(232, 240, 247, 0.75));
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body del {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(72, 83, 91);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(103, 136, 162));
  border-color: rgb(103, 136, 162);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  background-color: rgba(var(--link-external-color-rgb), 0.35);
  color: rgba(var(--link-external-color-rgb), var(--color-opacity));
  outline: rgba(214, 182, 133, 0.85) none 0px;
  text-decoration: underline rgba(214, 182, 133, 0.85);
  text-decoration-color: var(--link-external-color-underline, rgba(214, 182, 133, 0.85));
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(var(--link-color-rgb), 0.35);
  color: rgba(var(--link-color-rgb), var(--color-opacity));
  outline: rgba(126, 200, 197, 0.85) none 0px;
  text-decoration: underline rgba(126, 200, 197, 0.85);
  text-decoration-color: var(--link-color-underline, rgba(126, 200, 197, 0.85));
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgba(126, 200, 197, 0.72));
  outline: rgba(126, 200, 197, 0.72) none 0px;
  text-decoration: underline rgba(126, 200, 197, 0.72);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(126, 200, 197, 0.72));
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgba(232, 240, 247, 0.75);
}`,
    lists: `html[saved-theme="dark"] body dd {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ol > li {
  color: rgba(232, 240, 247, 0.75);
  margin-bottom: 0px;
  margin-left: 36px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul > li {
  color: rgba(232, 240, 247, 0.75);
  margin-bottom: 0px;
  margin-left: 36px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  --h1-line-height: var(--setting-line-height, var(--line-height-normal));
  --h1-size: var(--font-text-size, 16px);
  --h2-line-height: var(--setting-line-height, var(--line-height-normal));
  --h2-size: var(--font-text-size, 16px);
  --h3-line-height: var(--setting-line-height, var(--line-height-normal));
  --h3-size: var(--font-text-size, 16px);
  --h4-line-height: var(--setting-line-height, var(--line-height-normal));
  --h4-size: var(--font-text-size, 16px);
  --h5-line-height: var(--setting-line-height, var(--line-height-normal));
  --h5-size: var(--font-text-size, 16px);
  --h6-line-height: var(--setting-line-height, var(--line-height-normal));
  --h6-size: var(--font-text-size, 16px);
  background-color: var(--blockquote-background-color, rgb(32, 35, 37));
  color: var(--blockquote-color, rgba(232, 240, 247, 0.75));
  line-height: 28.8px;
  padding-bottom: 6px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}

html[saved-theme="dark"] body table {
  background-color: var(--indicator-color, rgba(0, 0, 0, 0));
  color: rgba(232, 240, 247, 0.75);
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: var(--table-text-color, rgba(232, 240, 247, 0.75));
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="dark"] body th {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-width: 0px;
  color: var(--table-header-color, rgba(232, 240, 247, 0.75));
  vertical-align: var(--table-cell-vertical-alignment, middle);
}`,
    code: `html[saved-theme="dark"] body code {
  --code-radius: var(--radius-s, 4px);
  background-color: var(--code-background, rgb(32, 35, 37));
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-width: 1px;
  color: var(--inline-code, rgba(209, 137, 137, 0.85));
  font-family: var(--font-monospace, "??", maplemono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgb(32, 35, 37));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  padding-bottom: 21px;
  padding-left: 25.2px;
  padding-right: 25.2px;
  padding-top: 21px;
}`,
    images: `html[saved-theme="dark"] body audio {
  background-color: var(--indicator-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figcaption {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(207, 8%, 13.5%));
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 137, 137);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(209, 137, 137);
  border-left-width: 0px;
  border-radius: 8px;
  border-right-color: rgb(209, 137, 137);
  border-right-width: 0px;
  border-top-color: rgb(209, 137, 137);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  filter: brightness(0.7);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 8px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(32, 35, 37));
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-left-color: rgb(102, 102, 102);
  border-left-style: dotted;
  border-left-width: 2px;
  border-right-color: rgb(102, 102, 102);
  border-right-style: dotted;
  border-right-width: 2px;
  border-top-color: rgb(102, 102, 102);
  border-top-style: dotted;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .transclude {
  background-color: var(--embed-background, rgba(18, 18, 18, 0.85));
  border-bottom-color: rgb(72, 83, 91);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(72, 83, 91);
  border-left-width: 0px;
  border-radius: 8px;
  border-right-color: rgb(72, 83, 91);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(72, 83, 91);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgba(232, 240, 247, 0.75);
  margin-bottom: 4px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgba(18, 18, 18, 0.85));
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-style: solid;
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-style: solid;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}`,
    checkboxes: `html[saved-theme="dark"] body html {
  --scrollbar-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(72, 83, 91);
  border-bottom-width: 2px;
  border-left-color: rgb(72, 83, 91);
  border-left-width: 2px;
  border-right-color: rgb(72, 83, 91);
  border-right-width: 2px;
  border-top-color: rgb(72, 83, 91);
  border-top-width: 2px;
  margin-bottom: 0px;
  margin-left: -20.8px;
  margin-right: 0px;
  margin-top: 0px;
  transition: 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgba(232, 240, 247, 0.75);
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 18, 18);
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 18, 18);
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 18, 18);
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
  color: rgba(186, 179, 239, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3E%3C/svg%3E");
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
  background-color: rgba(214, 182, 133, 0.85);
  color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 18, 18);
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/%3E%3C/svg%3E");
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
  background-color: rgba(126, 200, 197, 0.85);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/%3E%3C/svg%3E");
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
  background-color: rgba(126, 184, 241, 0.85);
  color: rgba(126, 200, 197, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgba(206, 163, 141, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cg fill='currentColor'%3E%3Cpath d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/%3E%3Cpath d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cg fill='currentColor'%3E%3Cpath d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/%3E%3Cpath d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgba(209, 137, 137, 0.85);
  color: rgba(126, 184, 241, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgba(186, 179, 239, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
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
  background-color: rgba(209, 137, 137, 0.85);
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 7l6 6l4-4l8 8'/%3E%3Cpath d='M21 10v7h-7'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 7l6 6l4-4l8 8'/%3E%3Cpath d='M21 10v7h-7'/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgba(209, 137, 137, 0.85);
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 18, 18);
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(214, 182, 133, 0.85);
  color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/%3E%3C/svg%3E");
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
  background-color: rgba(186, 179, 239, 0.85);
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgba(209, 137, 137, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgba(209, 137, 137, 0.85);
  color: rgba(126, 200, 197, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgba(126, 200, 197, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
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
  background-color: rgba(147, 200, 156, 0.85);
  color: rgba(147, 200, 156, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgba(147, 200, 156, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 18, 18);
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(18, 18, 18);
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 17l6-6l4 4l8-8'/%3E%3Cpath d='M14 7h7v7'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 17l6-6l4 4l8-8'/%3E%3Cpath d='M14 7h7v7'/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgba(147, 200, 156, 0.85);
  color: rgba(147, 200, 156, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgba(214, 182, 133, 0.85);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgba(214, 182, 133, 0.85);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 126.48, 199.92, 197.472);
  background: rgba(126, 200, 197, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(126, 200, 197, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(126, 200, 197, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(126, 200, 197, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(126, 200, 197, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 209.304, 137.496, 137.496);
  background: rgba(209, 137, 137, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(209, 137, 137, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(209, 137, 137, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(209, 137, 137, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 209.304, 137.496, 137.496);
  background: rgba(209, 137, 137, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(209, 137, 137, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(209, 137, 137, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(209, 137, 137, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 186.2265, 179.265, 238.935);
  background: rgba(186, 179, 239, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(186, 179, 239, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(186, 179, 239, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(186, 179, 239, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(186, 179, 239, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 209.304, 137.496, 137.496);
  background: rgba(209, 137, 137, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(209, 137, 137, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(209, 137, 137, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(209, 137, 137, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 126.48, 183.6, 240.72);
  background: rgba(126, 184, 241, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(126, 184, 241, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 126.48, 183.6, 240.72);
  background: rgba(126, 184, 241, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(126, 184, 241, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 206.04, 162.52, 140.76);
  background: rgba(206, 163, 141, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(206, 163, 141, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(206, 163, 141, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(206, 163, 141, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(206, 163, 141, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 147.288, 199.512, 155.992);
  background: rgba(147, 200, 156, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(147, 200, 156, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(147, 200, 156, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(147, 200, 156, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(147, 200, 156, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 126.48, 199.92, 197.472);
  background: rgba(126, 200, 197, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(126, 200, 197, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(126, 200, 197, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(126, 200, 197, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(126, 200, 197, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 126.48, 183.6, 240.72);
  background: rgba(126, 184, 241, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(126, 184, 241, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 206.04, 162.52, 140.76);
  background: rgba(206, 163, 141, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(206, 163, 141, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(206, 163, 141, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(206, 163, 141, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(206, 163, 141, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(126, 184, 241));
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgba(232, 240, 247, 0.75);
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
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--text-normal, rgba(232, 240, 247, 0.75));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(18, 18, 18));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
  transition: --scrollbar-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(97, 131, 158, 0.2));
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(97, 131, 158, 0.2));
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(97, 131, 158, 0.2));
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(207, 24%,
    44.2%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(207, 24%,
    44.2%, 0.2));
  --pill-border-color: var(--tag-border-color, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(207, 24%,
    44.2%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-color-hover: var(--tag-color-hover, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-color-remove: var(--tag-color, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 0);
  background-color: var(--pill-background, rgba(86, 115, 140, 0.1));
  border-bottom-color: rgb(99, 136, 160);
  border-bottom-width: 1px;
  border-left-color: rgb(99, 136, 160);
  border-left-width: 1px;
  border-right-color: rgb(99, 136, 160);
  border-right-width: 1px;
  border-top-color: rgb(99, 136, 160);
  border-top-width: 1px;
  color: var(--pill-color, rgb(99, 136, 160));
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(99, 136, 160);
}

html[saved-theme="dark"] body h1 {
  --font-weight: var(--h1-weight, 750);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(209, 137, 137);
  border-bottom-width: 0px;
  border-left-color: rgb(209, 137, 137);
  border-left-width: 0px;
  border-right-color: rgb(209, 137, 137);
  border-right-width: 0px;
  border-top-color: rgb(209, 137, 137);
  border-top-width: 0px;
  color: var(--h-indicator-color, inherit);
  font-size: calc(var(--font-text-size)*0.7);
  font-weight: var(--font-weight, 750);
  letter-spacing: var(--h1-letter-spacing, -0.384px);
  line-height: var(--h1-line-height, 46.08px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(209, 137, 137));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 750);
}

html[saved-theme="dark"] body h1::before {
  --font-weight: var(--h1-weight, 750);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h-indicator-color, inherit);
  content: "H1";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 16.3906px;
}

html[saved-theme="dark"] body h2 {
  --font-weight: var(--h2-weight, 700);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(206, 163, 141);
  border-bottom-width: 0px;
  border-left-color: rgb(206, 163, 141);
  border-left-width: 0px;
  border-right-color: rgb(206, 163, 141);
  border-right-width: 0px;
  border-top-color: rgb(206, 163, 141);
  border-top-width: 0px;
  color: var(--h2-color, rgb(206, 163, 141));
  font-family: var(--h2-font, "");
  font-size: var(--h2-size, 16px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h2-letter-spacing, -0.176px);
  line-height: var(--h2-line-height, 16px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
  text-decoration: underline 2px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(209, 137, 137);
  border-bottom-width: 0px;
  border-left-color: rgb(209, 137, 137);
  border-left-width: 0px;
  border-right-color: rgb(209, 137, 137);
  border-right-width: 0px;
  border-top-color: rgb(209, 137, 137);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(209, 137, 137));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 750);
  letter-spacing: var(--setting-editor-letter-spacing, 0);
  line-height: var(--inline-title-line-height, 46.08px);
  margin-bottom: 12.8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body h2::before {
  --font-weight: var(--h2-weight, 700);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgba(0, 0, 0, 0));
  content: "H2";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 13.7812px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(147, 200, 156);
  border-bottom-width: 0px;
  border-left-color: rgb(147, 200, 156);
  border-left-width: 0px;
  border-right-color: rgb(147, 200, 156);
  border-right-width: 0px;
  border-top-color: rgb(147, 200, 156);
  border-top-width: 0px;
  color: var(--h3-color, rgb(147, 200, 156));
  font-family: var(--h3-font, "");
  font-size: var(--h3-size, 22.4px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.1792px);
  line-height: var(--h3-line-height, 40.32px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
}

html[saved-theme="dark"] body h3::before {
  --font-weight: var(--h3-weight, 600);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgba(0, 0, 0, 0));
  content: "H3";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 13.9375px;
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(126, 184, 241);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 184, 241);
  border-left-width: 0px;
  border-right-color: rgb(126, 184, 241);
  border-right-width: 0px;
  border-top-color: rgb(126, 184, 241);
  border-top-width: 0px;
  color: var(--h4-color, rgb(126, 184, 241));
  font-family: var(--h4-font, "");
  font-size: var(--h4-size, 20.8px);
  font-weight: var(--font-weight, 550);
  letter-spacing: var(--h4-letter-spacing, -0.104px);
  line-height: var(--h4-line-height, 37.44px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
}

html[saved-theme="dark"] body h4::before {
  --font-weight: var(--h4-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgba(0, 0, 0, 0));
  content: "H4";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 14.0938px;
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(186, 179, 239);
  border-bottom-width: 0px;
  border-left-color: rgb(186, 179, 239);
  border-left-width: 0px;
  border-right-color: rgb(186, 179, 239);
  border-right-width: 0px;
  border-top-color: rgb(186, 179, 239);
  border-top-width: 0px;
  color: var(--h5-color, rgb(186, 179, 239));
  font-family: var(--h5-font, "");
  font-size: var(--h5-size, 19.2px);
  font-weight: var(--font-weight, 550);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 34.56px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
}

html[saved-theme="dark"] body h5::before {
  --font-weight: var(--h5-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgba(0, 0, 0, 0));
  content: "H5";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 14.2344px;
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 500);
  border-bottom-color: rgb(126, 200, 197);
  border-bottom-width: 0px;
  border-left-color: rgb(126, 200, 197);
  border-left-width: 0px;
  border-right-color: rgb(126, 200, 197);
  border-right-width: 0px;
  border-top-color: rgb(126, 200, 197);
  border-top-width: 0px;
  color: var(--h6-color, rgb(126, 200, 197));
  font-family: var(--h6-font, "");
  font-size: var(--h6-size, 17.6px);
  font-weight: var(--font-weight, 500);
  line-height: var(--h6-line-height, 31.68px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
}

html[saved-theme="dark"] body h6::before {
  --font-weight: var(--h6-weight, 500);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgba(0, 0, 0, 0));
  content: "H6";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 13.6875px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 126.48, 183.6, 240.72);
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(126, 184, 241, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(54, 54, 54);
  border-left-width: 0px;
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  cursor: var(--cursor, pointer);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  cursor: var(--cursor, pointer);
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
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgba(232, 240, 247, 0.75);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(18, 18, 18));
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  font-size: var(--status-bar-font-size, 13px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: var(--size-4-2, 4px);
  padding-top: 0px;
}

html[saved-theme="dark"] body footer ul li a {
  font-size: 13px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  --nav-item-color-active: var(--text-normal, #eaeaea);
  color: var(--text-normal, rgb(179, 179, 179));
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  --nav-item-color-active: var(--text-normal, #eaeaea);
  color: var(--text-normal, rgb(179, 179, 179));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--code-value, rgba(232, 240, 247, 0.75));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(18, 18, 18));
  border-color: rgba(232, 240, 247, 0.75);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(32, 35, 37);
  border-color: rgba(77, 82, 86, 0.75);
  color: var(--table-header-color, rgba(232, 240, 247, 0.75));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  --metadata-input-background-active: var(--background-primary, hsl(0, 0%, 7%));
  --metadata-label-background-active: var(--background-primary, hsl(0, 0%, 7%));
  --metadata-property-background-hover: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --pill-focus-width: calc(100% + var(--size-4-2));
  --pill-radius: var(--size-4-1, 4px);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(77, 82, 86, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-width: 0px;
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="dark"] body .note-properties {
  --metadata-input-background-active: var(--background-primary, hsl(0, 0%, 7%));
  --metadata-label-background-active: var(--background-primary, hsl(0, 0%, 7%));
  --metadata-property-background-hover: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --pill-focus-width: calc(100% + var(--size-4-2));
  --pill-radius: var(--size-4-1, 4px);
  border-color: rgba(77, 82, 86, 0.75);
}

html[saved-theme="dark"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(207, 24%,
    44.2%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(207, 24%,
    44.2%, 0.2));
  --pill-border-color: var(--tag-border-color, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(207, 24%,
    44.2%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-color-hover: var(--tag-color-hover, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-color-remove: var(--tag-color, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(
    204,
    24.48%,
    50.83%
  ));
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 0);
  background-color: var(--pill-background, rgba(86, 115, 140, 0.1));
  color: var(--pill-color, rgb(99, 136, 160));
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
  color: var(--text-normal, rgba(232, 240, 247, 0.75));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
  border-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgba(232, 240, 247, 0.75);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(18, 18, 18));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: var(--text-normal, rgba(232, 240, 247, 0.75));
  font-size: 14px;
  line-height: 21px;
}

html[saved-theme="dark"] body abbr {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}

html[saved-theme="dark"] body input[type=text] {
  padding-bottom: 6px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 6px;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--color-base-05, rgb(33, 33, 33));
  border-bottom-color: rgb(63, 63, 63);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(63, 63, 63);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(63, 63, 63);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(63, 63, 63);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: 0 1px 1px var(--color-base-35);
  color: var(--code-normal, rgb(179, 179, 179));
  font-family: system, BlinkMacSystemFont, var(--font-monospace);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
}

html[saved-theme="dark"] body sub {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body summary {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body sup {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(86, 115, 140, 0.1));
  border-bottom-color: rgb(99, 136, 160);
  border-bottom-width: 1px;
  border-left-color: rgb(99, 136, 160);
  border-left-width: 1px;
  border-right-color: rgb(99, 136, 160);
  border-right-width: 1px;
  border-top-color: rgb(99, 136, 160);
  border-top-width: 1px;
  color: var(--tag-color, rgb(99, 136, 160));
}`,
  },
  light: {
    base: `:root:root {
  --accent-active: hsl(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l)
  );
  --accent-active-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    var(--color-opacity)
  );
  --accent-inactive: hsl(
    var(--theme-accent-inactive-h),
    var(--theme-accent-inactive-s),
    var(--theme-accent-inactive-l)
  );
  --active-line: var(
    --setting-line-active-color,
    var(--base-accent-h),
    var(--theme-accent-inactive-s),
    92%
  );
  --animation: var(--animation-dur) var(--anim-motion-smooth, 250ms cubic-bezier(0.45, 0.05, 0.55, 0.95));
  --animation-delay: calc(var(--animation-dur)*4);
  --animation-dur: var(--setting-animation-time, 250ms);
  --animation-fast: calc(var(--animation-dur)/2) var(--anim-motion-smooth);
  --animation-slow: calc(var(--animation-dur)*2) var(--anim-motion-smooth);
  --app-bg-image: linear-gradient(
    320deg,
    hsl(calc(var(--base-accent-h) + 50), 50%, 92%),
    hsl(calc(var(--base-accent-h) - 30), 36%, 87%)
  );
  --app-layout-spacing: var(--setting-app-layout-spacing, var(--size-2-3));
  --background-modifier-border: hsla(
    var(--theme-accent-inactive-h),
    calc(var(--theme-accent-inactive-s)/2),
    var(--theme-accent-inactive-l),
    75%
  );
  --background-modifier-border-focus: var(--background-modifier-border-hover, hsla(
    35,
    15.4%,
    56%,
    60%
  ));
  --background-modifier-border-hover: hsla(
    var(--theme-accent-active-h),
    calc(var(--theme-accent-active-s)*0.7),
    var(--theme-accent-active-l),
    60%
  );
  --background-modifier-cover: hsla(var(--background-secondary-hsl), 0.6);
  --background-modifier-error: rgba(var(--color-red-rgb), 1);
  --background-modifier-error-hover: rgba(var(--color-red-rgb), 0.9);
  --background-modifier-error-rgb: var(--color-red-rgb, 189.0825, 81.2175, 81.2175);
  --background-modifier-hover: hsl(
    var(--base-accent-h),
    var(--theme-accent-inactive-s),
    max(70%, var(--accent-l) * 0.8),
    25%
  );
  --background-modifier-message: var(--setting-message-bg, var(--accent-active-bg));
  --background-modifier-success: var(--color-green, rgba(71.4, 142.8, 20.4, 1));
  --background-modifier-success-rgb: var(--color-green-rgb, 71.4, 142.8, 20.4);
  --background-primary: hsl(var(--background-primary-hsl));
  --background-primary-alt: hsl(var(--background-primary-alt-hsl));
  --background-primary-alt-hsl: var(--base-accent-h), 18%, 93.5%;
  --background-primary-hsl: var(--setting-bg-primary-light-hsl, var(--default-mod-bg-hsl));
  --background-secondary: hsl(var(--background-secondary-hsl));
  --background-secondary-hsl: var(--setting-bg-secondary-light-hsl, var(--default-mod-bg-hsl));
  --base-accent-h: var(--setting-accent-h-light, 35);
  --bases-cards-background: var(--background-primary, hsl(0, 0%, 93%));
  --bases-cards-cover-background: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --bases-embed-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --bases-embed-border-radius: var(--embed-radius, 8px);
  --bases-group-heading-property-size: var(--font-ui-smaller, 13px);
  --bases-table-border-color: var(--table-border-color, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --bases-table-cell-background-active: var(--background-primary, hsl(0, 0%, 93%));
  --bases-table-cell-background-disabled: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --bases-table-cell-background-selected: var(--table-selection, hsla(35, 22%, 56%, 0.1));
  --bases-table-group-background: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --bases-table-header-background: var(--background-primary, hsl(0, 0%, 93%));
  --bases-table-header-background-hover: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --bases-table-summary-background: var(--background-primary, hsl(0, 0%, 93%));
  --bases-table-summary-background-hover: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --bg-editor: hsla(
    var(--background-primary-hsl),
    max(var(--bg-opacity), var(--editor-min-opacity))
  );
  --bg-opacity: var(--setting-layout-opacity, 0.4);
  --bg-surface: hsla(var(--background-secondary-hsl), var(--bg-opacity));
  --block-outline-width: var(--size-2-1, 2px);
  --blockquote-background-color: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --blockquote-border-color: var(--accent-active, hsl(
    35,
    22%,
    56%
  ));
  --blockquote-border-thickness: var(--size-4-1, 4px);
  --blockquote-radius: var(--size-2-3, 6px);
  --button-radius: var(--input-radius, 6px);
  --callout-bug: var(--color-red-rgb, 189.0825, 81.2175, 81.2175);
  --callout-default: var(--color-blue-rgb, 5.202, 132.8822, 168.198);
  --callout-error: var(--color-red-rgb, 189.0825, 81.2175, 81.2175);
  --callout-example: var(--color-purple-rgb, 114.24, 97.92, 146.88);
  --callout-fail: var(--color-red-rgb, 189.0825, 81.2175, 81.2175);
  --callout-important: var(--color-cyan-rgb, 17.85, 124.95, 82.11);
  --callout-info: var(--color-blue-rgb, 5.202, 132.8822, 168.198);
  --callout-question: var(--color-orange-rgb, 199.41, 122.774, 35.19);
  --callout-quote: var(--callout-quote, 158, 158, 158);
  --callout-radius: var(--radius-m, 8px);
  --callout-success: var(--color-green-rgb, 71.4, 142.8, 20.4);
  --callout-summary: var(--color-cyan-rgb, 17.85, 124.95, 82.11);
  --callout-tip: var(--color-cyan-rgb, 17.85, 124.95, 82.11);
  --callout-todo: var(--color-blue-rgb, 5.202, 132.8822, 168.198);
  --callout-warning: var(--color-orange-rgb, 199.41, 122.774, 35.19);
  --canvas-background: var(--background-primary, hsl(0, 0%, 93%));
  --canvas-color-1: var(--color-red-rgb, 189.0825, 81.2175, 81.2175);
  --canvas-color-2: var(--color-orange-rgb, 199.41, 122.774, 35.19);
  --canvas-color-3: var(--color-yellow-rgb, 177.48, 139.74, 26.52);
  --canvas-color-4: var(--color-green-rgb, 71.4, 142.8, 20.4);
  --canvas-color-5: var(--color-cyan-rgb, 17.85, 124.95, 82.11);
  --canvas-color-6: var(--color-purple-rgb, 114.24, 97.92, 146.88);
  --checkbox-border-color: var(--text-faint, hsl(
    35,
    20%,
    78%
  ));
  --checkbox-border-color-hover: var(--text-muted, hsl(
    35,
    22%,
    56%
  ));
  --checkbox-color: var(--interactive-accent, hsl(
    35,
    22%,
    56%
  ));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    32,
    22.44%,
    64.4%
  ));
  --checkbox-marker-color: var(--background-primary, #fafafa);
  --code-background: var(--setting-code-bg, var(--background-primary-alt));
  --code-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --code-border-width: 1px;
  --code-bracket-background: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --code-class: var(--color-orange, rgba(199.41, 122.774, 35.19, 1));
  --code-function: var(--color-blue, rgba(5.202, 132.8822, 168.198, 1));
  --code-important: var(--color-purple, rgba(114.24, 97.92, 146.88, 1));
  --code-keyword: var(--color-purple, rgba(114.24, 97.92, 146.88, 1));
  --code-mac-style-header-bg: #333;
  --code-mac-style-header-color: #ddd;
  --code-normal: var(--text-muted, #5c5c5c);
  --code-operator: var(--code-punctuation, #707070);
  --code-property: var(--color-yellow, rgba(177.48, 139.74, 26.52, 1));
  --code-punctuation: var(--color-base-60, #707070);
  --code-radius: var(--radius-m, 8px);
  --code-string: var(--color-green, rgba(71.4, 142.8, 20.4, 1));
  --code-tag: var(--color-red, rgba(189.0825, 81.2175, 81.2175, 1));
  --code-value: var(--color-cyan, rgba(17.85, 124.95, 82.11, 1));
  --code-variable: var(--color-yellow, rgba(177.48, 139.74, 26.52, 1));
  --collapse-icon-color-collapsed: var(--text-accent, hsl(35, 22%, 56%));
  --color-accent: hsl(var(--color-accent-hsl));
  --color-accent-1: hsl(
    calc(var(--base-accent-h) - 1),
    calc(var(--theme-accent-active-s)*1.01),
    calc(var(--theme-accent-active-l)*1.075)
  );
  --color-accent-2: hsl(
    calc(var(--base-accent-h) - 3),
    calc(var(--theme-accent-active-s)*1.02),
    calc(var(--theme-accent-active-l)*1.15)
  );
  --color-accent-hsl: var(--base-accent-h), var(--theme-accent-active-s), var(--theme-accent-active-l);
  --color-blue: rgba(var(--color-blue-rgb), var(--color-opacity));
  --color-blue-rgb: 5.202, 132.8822, 168.198;
  --color-cyan: rgba(var(--color-cyan-rgb), var(--color-opacity));
  --color-cyan-rgb: 17.85, 124.95, 82.11;
  --color-green: rgba(var(--color-green-rgb), var(--color-opacity));
  --color-green-rgb: 71.4, 142.8, 20.4;
  --color-opacity: 1;
  --color-orange: rgba(var(--color-orange-rgb), var(--color-opacity));
  --color-orange-rgb: 199.41, 122.774, 35.19;
  --color-purple: rgba(var(--color-purple-rgb), var(--color-opacity));
  --color-purple-rgb: 114.24, 97.92, 146.88;
  --color-red: rgba(var(--color-red-rgb), var(--color-opacity));
  --color-red-rgb: 189.0825, 81.2175, 81.2175;
  --color-yellow: rgba(var(--color-yellow-rgb), var(--color-opacity));
  --color-yellow-rgb: 177.48, 139.74, 26.52;
  --default-mod-bg-hsl: 0, 0%, 93%;
  --divider-color: var(--setting-divider-color, var(--color-base-30));
  --divider-color-hover: var(--interactive-accent, hsl(
    34,
    22.22%,
    60.2%
  ));
  --divider-width-hover: var(--size-4-1, 4px);
  --editor-min-opacity: 0.8;
  --embed-background: var(--bg-editor, hsla(
    0, 0%, 93%,
    max(0.6, 0.8)
  ));
  --embed-block-shadow-hover: 0 0 0 1px var(--accent-inactive), inset 0 0 0 1px var(--accent-inactive);
  --embed-border-bottom: var(--embed-border-start, 2px solid hsl(
    35,
    20%,
    78%
  ));
  --embed-border-end: var(--embed-border-start, 2px solid hsl(
    35,
    20%,
    78%
  ));
  --embed-border-start: var(--size-2-1) solid var(--accent-inactive, 2px solid hsl(
    35,
    20%,
    78%
  ));
  --embed-border-top: var(--embed-border-start, 2px solid hsl(
    35,
    20%,
    78%
  ));
  --embed-padding: var(--size-4-4) var(--size-4-5, 16px 20px);
  --embed-radius: var(--radius-m, 8px);
  --file-folding-offset: 28px;
  --file-header-background: var(--background-primary, hsl(0, 0%, 93%));
  --file-header-background-focused: var(--background-primary, hsl(0, 0%, 93%));
  --file-header-font-size: var(--font-ui-small, 14px);
  --file-line-width: var(--setting-file-line-width, clamp(600px, 72%, 820px));
  --folder-color: var(--setting-color-dirs, hsl(46, 81%, 45%));
  --folder-inactive: 85%;
  --font-monospace-theme: "maplemono";
  --font-ui-medium: 16px;
  --font-ui-small: 14px;
  --font-ui-smaller: 13px;
  --footnote-divider-color: var(--metadata-divider-color, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --footnote-input-background-active: var(--metadata-input-background-active, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --footnote-line-height: var(--line-height-normal, 1.8);
  --frame-bg: var(--setting-bg-frame-light, hsl(var(--default-mod-bg-hsl)));
  --graph-node: var(--setting-graph-node, var(--text-muted));
  --graph-node-attachment: var(--color-yellow, rgba(177.48, 139.74, 26.52, 1));
  --graph-node-focused: var(--setting-graph-node-focus, var(--accent-active));
  --graph-node-tag: var(--color-green, rgba(71.4, 142.8, 20.4, 1));
  --graph-node-unresolved: var(--setting-graph-node-unresolved, var(--text-faint));
  --grid-dots-color: var(--setting-editor-bg-grid-dots, var(--color-base-35));
  --grid-line-color: var(--setting-editor-bg-grid-line, var(--color-base-25));
  --grid-spacing: var(--setting-editor-bg-grid-spacing, var(--size-4-5));
  --h1-color: rgb(189.0825, 81.2175, 81.2175);
  --h1-color-rgb: 189.0825, 81.2175, 81.2175;
  --h1-font: var(--setting-h1-font, var(--font-text));
  --h1-line-height: calc(var(--line-height-normal)*var(--h1-size));
  --h1-size: calc(var(--font-text-size)*var(--setting-h1-size, 1.6));
  --h1-weight: var(--setting-h1-weight, 750);
  --h2-color: rgb(199.41, 122.774, 35.19);
  --h2-color-rgb: 199.41, 122.774, 35.19;
  --h2-font: var(--setting-h2-font, var(--font-text));
  --h2-line-height: calc(var(--line-height-normal)*var(--h2-size));
  --h2-size: calc(var(--font-text-size)*var(--setting-h2-size, 1.5));
  --h2-weight: var(--setting-h2-weight, 700);
  --h3-color: rgb(71.4, 142.8, 20.4);
  --h3-color-rgb: 71.4, 142.8, 20.4;
  --h3-font: var(--setting-h3-font, var(--font-text));
  --h3-line-height: calc(var(--line-height-normal)*var(--h3-size));
  --h3-size: calc(var(--font-text-size)*var(--setting-h3-size, 1.4));
  --h3-weight: var(--setting-h3-weight, 600);
  --h4-color: rgb(5.202, 132.8822, 168.198);
  --h4-color-rgb: 5.202, 132.8822, 168.198;
  --h4-font: var(--setting-h4-font, var(--font-text));
  --h4-line-height: calc(var(--line-height-normal)*var(--h4-size));
  --h4-size: calc(var(--font-text-size)*var(--setting-h4-size, 1.3));
  --h4-weight: var(--setting-h4-weight, 550);
  --h5-color: rgb(114.24, 97.92, 146.88);
  --h5-color-rgb: 114.24, 97.92, 146.88;
  --h5-font: var(--setting-h5-font, var(--font-text));
  --h5-line-height: calc(var(--line-height-normal)*var(--h5-size));
  --h5-size: calc(var(--font-text-size)*var(--setting-h5-size, 1.2));
  --h5-weight: var(--setting-h5-weight, 550);
  --h6-color: rgb(17.85, 124.95, 82.11);
  --h6-color-rgb: 17.85, 124.95, 82.11;
  --h6-font: var(--setting-h6-font, var(--font-text));
  --h6-line-height: calc(var(--line-height-normal)*var(--h6-size));
  --h6-size: calc(var(--font-text-size)*var(--setting-h6-size, 1.1));
  --h6-variant: small-caps;
  --h6-weight: var(--setting-h6-weight, 500);
  --highlight: var(--text-highlight-bg, var(--setting-text-highlight-bg, rgba(var(--color-yellow-rgb), 0.3)));
  --hr-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --icon-color-active: var(--text-accent, hsl(35, 22%, 56%));
  --inline-code: var(--setting-code-inline, var(--color-red));
  --inline-title-color: var(--h1-color, rgb(189.0825, 81.2175, 81.2175));
  --inline-title-font: var(--h1-font, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --inline-title-line-height: var(--h1-line-height, 46.08px);
  --inline-title-size: var(--h1-size, 25.6px);
  --inline-title-weight: var(--h1-weight, 750);
  --input-radius: var(--size-2-3, 6px);
  --input-shadow: 0 0.125px 0 0.5px var(--color-base-10), inset 0 -0.125px 1px 0px var(--color-base-30),
    0 0.75px 2px 0.5px var(--color-base-50);
  --input-shadow-hover: 0 0.125px 0 0.5px var(--color-base-20), inset 0 -0.125px 1px 0px var(--color-base-40),
    0 0.75px 2px 0.5px var(--color-base-50);
  --interactive-accent: var(--color-accent-1, hsl(
    34,
    22.22%,
    60.2%
  ));
  --interactive-accent-hover: var(--color-accent-2, hsl(
    32,
    22.44%,
    64.4%
  ));
  --interactive-accent-hsl: var(--color-accent-hsl, 35, 22%, 56%);
  --light: var(--background-primary, hsl(var(--background-primary-hsl)));
  --lightgray: var(--background-secondary, hsl(var(--background-secondary-hsl)));
  --line-height-normal: var(--setting-line-height, 1.8);
  --line-height-tight: var(--setting-item-line-height, 1.5);
  --link-color: rgba(var(--link-color-rgb), var(--color-opacity));
  --link-color-hover: var(--link-color, rgba(17.85, 124.95, 82.11, 1));
  --link-color-rgb: var(--setting-link-internal-color, var(--color-cyan-rgb));
  --link-color-underline: var(--setting-link-internal-color-underline, var(--link-color));
  --link-external-color: rgba(var(--link-external-color-rgb), var(--color-opacity));
  --link-external-color-hover: var(--link-external-color, rgba(177.48, 139.74, 26.52, 1));
  --link-external-color-rgb: var(--setting-link-external-color, var(--color-yellow-rgb));
  --link-external-color-underline: var(
    --setting-link-external-color-underline,
    var(--link-external-color)
  );
  --link-footnote: var(--color-purple, rgba(114.24, 97.92, 146.88, 1));
  --link-text-size: var(--font-text-size, 16px);
  --link-unresolved-color: rgba(var(--link-color-rgb), calc(var(--color-opacity)*0.85));
  --link-unresolved-decoration-color: var(--link-unresolved-color, rgba(17.85, 124.95, 82.11, 0.85));
  --list-bullet-size: 7.33333px;
  --list-marker-color: var(--text-faint, hsl(
    35,
    22%,
    56%
  ));
  --list-marker-color-alt: hsl(
    35,
    22%,
    56%
  );
  --list-marker-color-alt-render: transparent;
  --list-marker-color-collapsed: var(--text-accent, hsl(35, 22%, 56%));
  --list-threading-color: var(--setting-list-guide-color, var(--accent-inactive));
  --list-threading-width: max(0.1rem, var(--size-2-1));
  --menu-background: var(--background-secondary, hsl(0, 0%, 93%));
  --menu-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --menu-padding: var(--size-2-3, 4px);
  --metadata-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --metadata-divider-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --metadata-input-background-active: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --metadata-label-background-active: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --metadata-property-background-active: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --metadata-sidebar-input-font-size: var(--font-ui-small, 14px);
  --metadata-sidebar-label-font-size: var(--font-ui-small, 14px);
  --modal-background: var(--background-primary, hsl(0, 0%, 93%));
  --modal-close-button-padding: var(--size-4-3, 12px);
  --modal-header-height: var(--size-4-12, 48px);
  --modal-height: min(85vh, var(--modal-max-height));
  --modal-width: min(90vw, var(--modal-max-width));
  --nav-indentation-guide-color: var(--color-base-30, #e0e0e0);
  --nav-indentation-guide-width: var(--indentation-guide-width, 1.8px);
  --nav-item-background-active: var(--accent-active-bg, hsla(
    35,
    22%,
    56%,
    1
  ));
  --nav-item-background-hover: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --nav-item-background-selected: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --nav-item-children-padding-left: var(--size-4-2, 8px);
  --nav-item-color-highlighted: var(--text-accent, hsl(35, 22%, 56%));
  --nav-item-size: calc(var(--size-4-4)*0.9);
  --outline-guideline-color: var(--settingoutline-line-color, var(--accent-inactive));
  --outline-guideline-color-alt: var(--outline-dot-color, var(--accent-active));
  --outline-guideline-width: var(--setting-outline-width, 2px);
  --outline-item-height: calc(var(--nav-item-size)*1.8);
  --p-spacing: var(--setting-editor-p-spacing, var(--size-4-2));
  --pdf-background: var(--background-primary, transparent);
  --pdf-page-background: var(--background-primary, hsl(0, 0%, 93%));
  --pdf-sidebar-background: var(--background-primary, hsl(0, 0%, 93%));
  --pill-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --pill-border-color-hover: var(--background-modifier-border-hover, hsla(
    35,
    15.4%,
    56%,
    60%
  ));
  --pill-color-remove-hover: var(--text-accent, hsl(35, 22%, 56%));
  --prompt-background: var(--background-primary, hsl(0, 0%, 93%));
  --raised-background: var(--blur-background, color-mix(in srgb, hsl(0, 0%, 93%) 65%, transparent) linear-gradient(hsl(0, 0%, 93%), color-mix(in srgb, hsl(0, 0%, 93%) 65%, transparent)));
  --ribbon-background: var(--background-secondary, hsl(0, 0%, 93%));
  --ribbon-background-collapsed: var(--background-primary, hsl(0, 0%, 93%));
  --scrollbar-color: rgba(0, 0, 0, 0);
  --scrollbar-transition: --scrollbar-color var(--animation);
  --search-result-background: var(--background-primary, hsl(0, 0%, 93%));
  --secondary: var(--text-accent, var(--color-accent, hsl(35, 22%, 56%)));
  --select-bg-img: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='%2523222222' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/%3E%3C/svg%3E");
  --setting-accent-h-dark: 207;
  --setting-calendar-max-width: 500px;
  --setting-code-ligature: 'calt';
  --setting-color-dirs: hsl(45.81,80.87%,45.1%);
  --setting-file-line-width: clamp(600px, 72%, 850px);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-h1-weight: 750;
  --setting-h2-font: "";
  --setting-h2-weight: 700;
  --setting-h3-font: "";
  --setting-h3-weight: 600;
  --setting-h4-font: "";
  --setting-h4-weight: 550;
  --setting-h5-font: "";
  --setting-h5-weight: 550;
  --setting-h6-font: "";
  --setting-h6-weight: 500;
  --setting-hr-icon: ''⭐'';
  --setting-items-background: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --setting-items-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --setting-modal-header-title: 'Maple 1.0.0-beta.33';
  --setting-scrollbar-hover: hsla(var(--color-accent-hsl), 40%);
  --setting-text-bold-style: underline dotted;
  --setting-text-highlight-bg: rgba(255, 208, 0, 0.4);
  --setting-text-italic-style: underline dotted;
  --shiki-code-background: var(--code-background, hsl(35, 18%, 93.5%));
  --shiki-code-block-border-radius: var(--code-radius, 8px);
  --shiki-code-block-spacing: var(--p-spacing, 8px);
  --shiki-code-function: var(--color-green, rgba(71.4, 142.8, 20.4, 1));
  --shiki-code-important: var(--color-orange, rgba(199.41, 122.774, 35.19, 1));
  --shiki-code-property: var(--color-cyan, rgba(17.85, 124.95, 82.11, 1));
  --shiki-code-string: var(--color-yellow, rgba(177.48, 139.74, 26.52, 1));
  --shiki-code-value: var(--color-purple, rgba(114.24, 97.92, 146.88, 1));
  --shiki-gutter-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --shiki-tooltip-background: var(--background-modifier-message, hsla(
    35,
    22%,
    56%,
    1
  ));
  --slider-thumb-border-color: var(--background-modifier-border-hover, hsla(
    35,
    15.4%,
    56%,
    60%
  ));
  --slider-track-background: var(--accent-inactive, hsl(
    35,
    20%,
    78%
  ));
  --status-bar-background: var(--background-secondary, hsl(0, 0%, 93%));
  --status-bar-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --status-bar-border-width: var(--border-width) 0 0 var(--border-width, 1px);
  --status-bar-font-size: var(--font-ui-smaller, 13px);
  --status-bar-radius: var(--size-2-3, 6px);
  --suggestion-background: var(--background-primary, hsl(0, 0%, 93%));
  --sync-avatar-color-1: var(--color-red, rgba(189.0825, 81.2175, 81.2175, 1));
  --sync-avatar-color-2: var(--color-orange, rgba(199.41, 122.774, 35.19, 1));
  --sync-avatar-color-3: var(--color-yellow, rgba(177.48, 139.74, 26.52, 1));
  --sync-avatar-color-4: var(--color-green, rgba(71.4, 142.8, 20.4, 1));
  --sync-avatar-color-5: var(--color-cyan, rgba(17.85, 124.95, 82.11, 1));
  --sync-avatar-color-6: var(--color-blue, rgba(5.202, 132.8822, 168.198, 1));
  --sync-avatar-color-7: var(--color-purple, rgba(114.24, 97.92, 146.88, 1));
  --tab-active-shadow: none;
  --tab-background-active: var(--background-primary, hsl(0, 0%, 93%));
  --tab-container-background: var(--frame-bg, hsl(0, 0%, 93%));
  --tab-divider-color: var(--color-base-35, #d4d4d4);
  --tab-font-size: var(--font-ui-small, 14px);
  --tab-outline-color: var(--divider-color, transparent);
  --tab-radius: var(--radius-s, 6px);
  --tab-stacked-font-size: var(--font-ui-small, 14px);
  --tab-stacked-header-width: var(--setting-tab-stack-header-width, var(--header-height));
  --tab-switcher-background: var(--background-secondary, hsl(0, 0%, 93%));
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(35, 22%, 56%));
  --table-add-button-background: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --table-add-button-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --table-add-button-border-width: var(--table-border-width, 0);
  --table-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --table-cell-vertical-alignment: middle;
  --table-drag-handle-background: var(--background-modifier-hover, hsl(
    35,
    20%,
    max(70%, 66% * 0.8),
    25%
  ));
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(
    35,
    20%,
    78%
  ));
  --table-drag-handle-color-active: var(--text-on-accent, #fafafa);
  --table-header-background: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --table-header-background-hover: var(--table-header-background, hsl(35, 18%, 93.5%));
  --table-header-border-color: var(--table-border-color, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --table-line-height: var(--line-height-tight, 1.5);
  --table-selection-border-color: var(--accent-inactive, hsl(
    35,
    20%,
    78%
  ));
  --table-selection-border-radius: var(--radius-m, 8px);
  --tag-border-color: var(--setting-tag-outline, var(--text-accent));
  --tag-border-width: 1px;
  --tag-color: var(--setting-tag-color, var(--text-accent));
  --tag-color-hover: var(--text-accent, hsl(35, 22%, 56%));
  --tag-padding-x: var(--size-4-2, 8px);
  --tag-padding-y: 0;
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(
    32,
    22.44%,
    64.4%
  )));
  --text-accent: var(--color-accent, hsl(35, 22%, 56%));
  --text-accent-hover: var(--color-accent-2, hsl(
    32,
    22.44%,
    64.4%
  ));
  --text-error: var(--color-red, rgba(189.0825, 81.2175, 81.2175, 1));
  --text-highlight-bg: var(--setting-text-highlight-bg, rgba(var(--color-yellow-rgb), 0.3));
  --text-on-accent: #fafafa;
  --text-selection: hsla(var(--color-accent-hsl), 0.25);
  --text-success: var(--color-green, rgba(71.4, 142.8, 20.4, 1));
  --text-warning: var(--color-orange, rgba(199.41, 122.774, 35.19, 1));
  --textHighlight: var(--text-highlight-bg, var(--setting-text-highlight-bg, rgba(var(--color-yellow-rgb), 0.3)));
  --theme-accent-active-h: var(--theme-accent-h, 35);
  --theme-accent-active-l: calc(50% + var(--accent-l)/10);
  --theme-accent-active-s: calc(20% + var(--accent-s)/10);
  --theme-accent-h: var(--base-accent-h, 35);
  --theme-accent-inactive-h: var(--theme-accent-h, 35);
  --theme-accent-inactive-l: calc(75% + var(--accent-l)/10);
  --theme-accent-inactive-s: calc(15% + var(--accent-s)/10);
  --titlebar-background: var(--frame-bg, hsl(0, 0%, 93%));
  --titlebar-background-focused: var(--frame-bg, hsl(0, 0%, 93%));
  --titlebar-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --vault-profile-font-size: var(--font-ui-small, 14px);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 93%));
  background-color: var(--bg-surface, rgba(237, 237, 237, 0.6));
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 93%));
  background-color: var(--bg-surface, rgba(237, 237, 237, 0.6));
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  font-family: var(--setting-text-bold-font, inherit);
  font-weight: var(--setting-text-bold-weight, 600);
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  font-family: var(--setting-text-italic-font, inherit);
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  font-family: var(--setting-text-italic-font, inherit);
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  font-family: var(--setting-text-italic-font, inherit);
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  font-family: var(--setting-text-bold-font, inherit);
  font-weight: var(--setting-text-bold-weight, 600);
  text-decoration: underline dotted;
  text-decoration-line: underline;
  text-decoration-style: dotted;
}

html[saved-theme="light"] body .text-highlight {
  color: var(--setting-text-highlight-color, rgb(34, 34, 34));
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(210, 201, 188);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(167, 147, 118));
  border-color: rgb(167, 147, 118);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  background-color: rgba(var(--link-external-color-rgb), 0.35);
  color: rgba(var(--link-external-color-rgb), var(--color-opacity));
  outline: rgb(177, 140, 27) none 0px;
  text-decoration: underline rgb(177, 140, 27);
  text-decoration-color: var(--link-external-color-underline, rgb(177, 140, 27));
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  background-color: rgba(var(--link-color-rgb), 0.35);
  color: rgba(var(--link-color-rgb), var(--color-opacity));
  outline: rgb(18, 125, 82) none 0px;
  text-decoration: underline rgb(18, 125, 82);
  text-decoration-color: var(--link-color-underline, rgb(18, 125, 82));
  transition: background-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgba(18, 125, 82, 0.85));
  outline: rgba(18, 125, 82, 0.85) none 0px;
  text-decoration: underline rgba(18, 125, 82, 0.85);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(18, 125, 82, 0.85));
}`,
    lists: `html[saved-theme="light"] body ol > li {
  margin-bottom: 0px;
  margin-left: 36px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body ul > li {
  margin-bottom: 0px;
  margin-left: 36px;
  margin-right: 0px;
  margin-top: 0px;
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  --h1-line-height: var(--setting-line-height, var(--line-height-normal));
  --h1-size: var(--font-text-size, 16px);
  --h2-line-height: var(--setting-line-height, var(--line-height-normal));
  --h2-size: var(--font-text-size, 16px);
  --h3-line-height: var(--setting-line-height, var(--line-height-normal));
  --h3-size: var(--font-text-size, 16px);
  --h4-line-height: var(--setting-line-height, var(--line-height-normal));
  --h4-size: var(--font-text-size, 16px);
  --h5-line-height: var(--setting-line-height, var(--line-height-normal));
  --h5-size: var(--font-text-size, 16px);
  --h6-line-height: var(--setting-line-height, var(--line-height-normal));
  --h6-size: var(--font-text-size, 16px);
  background-color: var(--blockquote-background-color, rgb(241, 239, 235));
  line-height: 28.8px;
  padding-bottom: 6px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body table {
  background-color: var(--indicator-color, rgba(0, 0, 0, 0));
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="light"] body th {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-width: 0px;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}`,
    code: `html[saved-theme="light"] body code {
  --code-radius: var(--radius-s, 4px);
  background-color: var(--code-background, rgb(241, 239, 235));
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 1px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-width: 1px;
  color: var(--inline-code, rgb(189, 81, 81));
  font-family: var(--font-monospace, "??", maplemono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgb(241, 239, 235));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
  padding-bottom: 21px;
  padding-left: 25.2px;
  padding-right: 25.2px;
  padding-top: 21px;
}`,
    images: `html[saved-theme="light"] body audio {
  background-color: var(--indicator-color, rgba(0, 0, 0, 0));
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure {
  --code-background: var(--ec-frm-edBg, hsl(35, 18%, 93.5%));
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(189, 81, 81);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgb(189, 81, 81);
  border-left-width: 0px;
  border-radius: 8px;
  border-right-color: rgb(189, 81, 81);
  border-right-width: 0px;
  border-top-color: rgb(189, 81, 81);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-style: solid;
  border-left-width: 1px;
  border-radius: 8px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 1px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(241, 239, 235));
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-style: dotted;
  border-bottom-width: 2px;
  border-left-color: rgb(171, 171, 171);
  border-left-style: dotted;
  border-left-width: 2px;
  border-right-color: rgb(171, 171, 171);
  border-right-style: dotted;
  border-right-width: 2px;
  border-top-color: rgb(171, 171, 171);
  border-top-style: dotted;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
}

html[saved-theme="light"] body .transclude {
  background-color: var(--embed-background, rgba(237, 237, 237, 0.8));
  border-bottom-color: rgb(210, 201, 188);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(210, 201, 188);
  border-left-width: 0px;
  border-radius: 8px;
  border-right-color: rgb(210, 201, 188);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(210, 201, 188);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
  margin-bottom: 4px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 4px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgba(237, 237, 237, 0.8));
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-right-style: solid;
  border-right-width: 0px;
  border-top-style: solid;
  border-top-width: 0px;
}`,
    checkboxes: `html[saved-theme="light"] body html {
  --scrollbar-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(210, 201, 188);
  border-bottom-width: 2px;
  border-left-color: rgb(210, 201, 188);
  border-left-width: 2px;
  border-right-color: rgb(210, 201, 188);
  border-right-width: 2px;
  border-top-color: rgb(210, 201, 188);
  border-top-width: 2px;
  margin-bottom: 0px;
  margin-left: -20.8px;
  margin-right: 0px;
  margin-top: 0px;
  transition: 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(171, 171, 171);
  text-decoration: line-through 1px rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
  color: rgb(114, 98, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/%3E%3C/svg%3E");
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
  background-color: rgb(177, 140, 27);
  color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/%3E%3C/svg%3E");
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
  background-color: rgb(18, 125, 82);
  color: rgb(112, 112, 112);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/%3E%3C/svg%3E");
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
  background-color: rgb(5, 133, 168);
  color: rgb(18, 125, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  color: rgb(199, 123, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cg fill='currentColor'%3E%3Cpath d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/%3E%3Cpath d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cg fill='currentColor'%3E%3Cpath d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/%3E%3Cpath d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(189, 81, 81);
  color: rgb(5, 133, 168);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  color: rgb(114, 98, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/%3E%3C/svg%3E");
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
  background-color: rgb(189, 81, 81);
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 7l6 6l4-4l8 8'/%3E%3Cpath d='M21 10v7h-7'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 7l6 6l4-4l8 8'/%3E%3Cpath d='M21 10v7h-7'/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(189, 81, 81);
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 140, 27);
  color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/%3E%3C/svg%3E");
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
  background-color: rgb(114, 98, 147);
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  color: rgb(189, 81, 81);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(189, 81, 81);
  color: rgb(18, 125, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  color: rgb(18, 125, 82);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/%3E%3C/svg%3E");
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
  background-color: rgb(71, 143, 20);
  color: rgb(71, 143, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  color: rgb(71, 143, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'%3E%3Cpath fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(237, 237, 237);
  color: rgb(237, 237, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 17l6-6l4 4l8-8'/%3E%3Cpath d='M14 7h7v7'/%3E%3C/g%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cg fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'%3E%3Cpath d='m3 17l6-6l4 4l8-8'/%3E%3Cpath d='M14 7h7v7'/%3E%3C/g%3E%3C/svg%3E");
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
  background-color: rgb(71, 143, 20);
  color: rgb(71, 143, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"] {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  color: rgb(177, 140, 27);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  color: rgb(177, 140, 27);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 17.85, 124.95, 82.11);
  background: rgba(18, 125, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(18, 125, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(18, 125, 82, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(18, 125, 82, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(18, 125, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 189.0825, 81.2175, 81.2175);
  background: rgba(189, 81, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(189, 81, 81, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(189, 81, 81, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(189, 81, 81, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 189.0825, 81.2175, 81.2175);
  background: rgba(189, 81, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(189, 81, 81, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(189, 81, 81, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(189, 81, 81, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 114.24, 97.92, 146.88);
  background: rgba(114, 98, 147, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(114, 98, 147, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(114, 98, 147, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(114, 98, 147, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(114, 98, 147, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 189.0825, 81.2175, 81.2175);
  background: rgba(189, 81, 81, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(189, 81, 81, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(189, 81, 81, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(189, 81, 81, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 5.202, 132.8822, 168.198);
  background: rgba(5, 133, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(5, 133, 168, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 5.202, 132.8822, 168.198);
  background: rgba(5, 133, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(5, 133, 168, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 199.41, 122.774, 35.19);
  background: rgba(199, 123, 35, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(199, 123, 35, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(199, 123, 35, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(199, 123, 35, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(199, 123, 35, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 71.4, 142.8, 20.4);
  background: rgba(71, 143, 20, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(71, 143, 20, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(71, 143, 20, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(71, 143, 20, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(71, 143, 20, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 17.85, 124.95, 82.11);
  background: rgba(18, 125, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(18, 125, 82, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(18, 125, 82, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(18, 125, 82, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(18, 125, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 5.202, 132.8822, 168.198);
  background: rgba(5, 133, 168, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(5, 133, 168, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 199.41, 122.774, 35.19);
  background: rgba(199, 123, 35, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(199, 123, 35, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(199, 123, 35, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(199, 123, 35, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(199, 123, 35, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(5, 133, 168));
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
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(237, 237, 237));
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  transition: --scrollbar-color 0.25s cubic-bezier(0.45, 0.05, 0.55, 0.95);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(194, 181, 163, 0.25));
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(194, 181, 163, 0.25));
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(194, 181, 163, 0.25));
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  --pill-background: var(--tag-background, hsla(35, 22%, 56%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(35, 22%, 56%, 0.2));
  --pill-border-color: var(--tag-border-color, hsl(35, 22%, 56%));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(35, 22%, 56%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(35, 22%, 56%));
  --pill-color-hover: var(--tag-color-hover, hsl(35, 22%, 56%));
  --pill-color-remove: var(--tag-color, hsl(35, 22%, 56%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(35, 22%, 56%));
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 0);
  background-color: var(--pill-background, rgba(167, 147, 118, 0.1));
  border-bottom-color: rgb(167, 147, 118);
  border-bottom-width: 1px;
  border-left-color: rgb(167, 147, 118);
  border-left-width: 1px;
  border-right-color: rgb(167, 147, 118);
  border-right-width: 1px;
  border-top-color: rgb(167, 147, 118);
  border-top-width: 1px;
  color: var(--pill-color, rgb(167, 147, 118));
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(167, 147, 118);
}

html[saved-theme="light"] body h1 {
  --font-weight: var(--h1-weight, 750);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(189, 81, 81);
  border-bottom-width: 0px;
  border-left-color: rgb(189, 81, 81);
  border-left-width: 0px;
  border-right-color: rgb(189, 81, 81);
  border-right-width: 0px;
  border-top-color: rgb(189, 81, 81);
  border-top-width: 0px;
  color: var(--h-indicator-color, inherit);
  font-size: calc(var(--font-text-size)*0.7);
  font-weight: var(--font-weight, 750);
  letter-spacing: var(--h1-letter-spacing, -0.384px);
  line-height: var(--h1-line-height, 46.08px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(189, 81, 81));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 750);
}

html[saved-theme="light"] body h1::before {
  --font-weight: var(--h1-weight, 750);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h-indicator-color, inherit);
  content: "H1";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 16.3906px;
}

html[saved-theme="light"] body h2 {
  --font-weight: var(--h2-weight, 700);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(199, 123, 35);
  border-bottom-width: 0px;
  border-left-color: rgb(199, 123, 35);
  border-left-width: 0px;
  border-right-color: rgb(199, 123, 35);
  border-right-width: 0px;
  border-top-color: rgb(199, 123, 35);
  border-top-width: 0px;
  color: var(--h2-color, rgb(199, 123, 35));
  font-family: var(--h2-font, "");
  font-size: var(--h2-size, 16px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h2-letter-spacing, -0.176px);
  line-height: var(--h2-line-height, 16px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
  text-decoration: underline 2px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(189, 81, 81);
  border-bottom-width: 0px;
  border-left-color: rgb(189, 81, 81);
  border-left-width: 0px;
  border-right-color: rgb(189, 81, 81);
  border-right-width: 0px;
  border-top-color: rgb(189, 81, 81);
  border-top-width: 0px;
  color: var(--inline-title-color, rgb(189, 81, 81));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 750);
  letter-spacing: var(--setting-editor-letter-spacing, 0);
  line-height: var(--inline-title-line-height, 46.08px);
  margin-bottom: 12.8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body h2::before {
  --font-weight: var(--h2-weight, 700);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h2-color, rgba(0, 0, 0, 0));
  content: "H2";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 13.7812px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(71, 143, 20);
  border-bottom-width: 0px;
  border-left-color: rgb(71, 143, 20);
  border-left-width: 0px;
  border-right-color: rgb(71, 143, 20);
  border-right-width: 0px;
  border-top-color: rgb(71, 143, 20);
  border-top-width: 0px;
  color: var(--h3-color, rgb(71, 143, 20));
  font-family: var(--h3-font, "");
  font-size: var(--h3-size, 22.4px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.1792px);
  line-height: var(--h3-line-height, 40.32px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
}

html[saved-theme="light"] body h3::before {
  --font-weight: var(--h3-weight, 600);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h3-color, rgba(0, 0, 0, 0));
  content: "H3";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 13.9375px;
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(5, 133, 168);
  border-bottom-width: 0px;
  border-left-color: rgb(5, 133, 168);
  border-left-width: 0px;
  border-right-color: rgb(5, 133, 168);
  border-right-width: 0px;
  border-top-color: rgb(5, 133, 168);
  border-top-width: 0px;
  color: var(--h4-color, rgb(5, 133, 168));
  font-family: var(--h4-font, "");
  font-size: var(--h4-size, 20.8px);
  font-weight: var(--font-weight, 550);
  letter-spacing: var(--h4-letter-spacing, -0.104px);
  line-height: var(--h4-line-height, 37.44px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
}

html[saved-theme="light"] body h4::before {
  --font-weight: var(--h4-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h4-color, rgba(0, 0, 0, 0));
  content: "H4";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 14.0938px;
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(114, 98, 147);
  border-bottom-width: 0px;
  border-left-color: rgb(114, 98, 147);
  border-left-width: 0px;
  border-right-color: rgb(114, 98, 147);
  border-right-width: 0px;
  border-top-color: rgb(114, 98, 147);
  border-top-width: 0px;
  color: var(--h5-color, rgb(114, 98, 147));
  font-family: var(--h5-font, "");
  font-size: var(--h5-size, 19.2px);
  font-weight: var(--font-weight, 550);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 34.56px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 8px);
  padding-bottom: 0px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  padding-top: 0px;
}

html[saved-theme="light"] body h5::before {
  --font-weight: var(--h5-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h5-color, rgba(0, 0, 0, 0));
  content: "H5";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: var(--heading-spacing, 0px);
  width: 14.2344px;
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 500);
  border-bottom-color: rgb(18, 125, 82);
  border-bottom-width: 0px;
  border-left-color: rgb(18, 125, 82);
  border-left-width: 0px;
  border-right-color: rgb(18, 125, 82);
  border-right-width: 0px;
  border-top-color: rgb(18, 125, 82);
  border-top-width: 0px;
  color: var(--h6-color, rgb(18, 125, 82));
  font-family: var(--h6-font, "");
  font-size: var(--h6-size, 17.6px);
  font-weight: var(--font-weight, 500);
  line-height: var(--h6-line-height, 31.68px);
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 8px;
}

html[saved-theme="light"] body h6::before {
  --font-weight: var(--h6-weight, 500);
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: var(--h6-color, rgba(0, 0, 0, 0));
  content: "H6";
  display: block;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  width: 13.6875px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 5.202, 132.8822, 168.198);
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 0px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-left-width: 0px;
  border-right-color: rgba(5, 133, 168, 0.25);
  border-right-width: 0px;
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 0px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(224, 224, 224);
  border-left-width: 0px;
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  cursor: var(--cursor, pointer);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  cursor: var(--cursor, pointer);
}

html[saved-theme="light"] body .explorer .nav-files-container a:hover {
  background-color: var(--nav-item-background-hover);
}

html[saved-theme="light"] body .explorer .nav-files-container .folder-outer > ul {
  border-left-color: var(--nav-indentation-guide-color);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(237, 237, 237));
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 1px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  font-size: var(--status-bar-font-size, 13px);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: var(--size-4-2, 4px);
  padding-top: 0px;
}

html[saved-theme="light"] body footer ul li a {
  font-size: 13px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  --nav-item-color-active: var(--text-normal, #fafafa);
  color: var(--text-normal, rgb(92, 92, 92));
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  --nav-item-color-active: var(--text-normal, #fafafa);
  color: var(--text-normal, rgb(92, 92, 92));
}`,
    canvas: `html[saved-theme="light"] body .canvas-node-file {
  color: var(--code-value, rgb(34, 34, 34));
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(237, 237, 237));
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(241, 239, 235);
  border-color: rgba(205, 200, 193, 0.75);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  --metadata-input-background-active: var(--background-primary, hsl(0, 0%, 93%));
  --metadata-label-background-active: var(--background-primary, hsl(0, 0%, 93%));
  --metadata-property-background-hover: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --pill-focus-width: calc(100% + var(--size-4-2));
  --pill-radius: var(--size-4-1, 4px);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-bottom-width: 0px;
  border-left-color: rgba(205, 200, 193, 0.75);
  border-left-width: 0px;
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 0px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-width: 0px;
  margin-bottom: 8px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
}

html[saved-theme="light"] body .note-properties {
  --metadata-input-background-active: var(--background-primary, hsl(0, 0%, 93%));
  --metadata-label-background-active: var(--background-primary, hsl(0, 0%, 93%));
  --metadata-property-background-hover: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --pill-focus-width: calc(100% + var(--size-4-2));
  --pill-radius: var(--size-4-1, 4px);
  border-color: rgba(205, 200, 193, 0.75);
}

html[saved-theme="light"] body .note-properties-tags {
  --pill-background: var(--tag-background, hsla(35, 22%, 56%, 0.1));
  --pill-background-hover: var(--tag-background-hover, hsla(35, 22%, 56%, 0.2));
  --pill-border-color: var(--tag-border-color, hsl(35, 22%, 56%));
  --pill-border-color-hover: var(--tag-border-color-hover, hsla(35, 22%, 56%, 0.15));
  --pill-border-width: var(--tag-border-width, 1px);
  --pill-color: var(--tag-color, hsl(35, 22%, 56%));
  --pill-color-hover: var(--tag-color-hover, hsl(35, 22%, 56%));
  --pill-color-remove: var(--tag-color, hsl(35, 22%, 56%));
  --pill-color-remove-hover: var(--tag-color-hover, hsl(35, 22%, 56%));
  --pill-padding-x: var(--tag-padding-x, 8px);
  --pill-padding-y: var(--tag-padding-y, 0);
  background-color: var(--pill-background, rgba(167, 147, 118, 0.1));
  color: var(--pill-color, rgb(167, 147, 118));
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgba(0, 0, 0, 0));
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-secondary, rgba(0, 0, 0, 0));
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgba(0, 0, 0, 0));
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(237, 237, 237));
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-size: 14px;
  line-height: 21px;
}

html[saved-theme="light"] body input[type=text] {
  padding-bottom: 6px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 6px;
}

html[saved-theme="light"] body kbd {
  background-color: var(--color-base-05, rgb(252, 252, 252));
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(212, 212, 212);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(212, 212, 212);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: 0 1px 1px var(--color-base-35);
  color: var(--code-normal, rgb(92, 92, 92));
  font-family: system, BlinkMacSystemFont, var(--font-monospace);
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(167, 147, 118, 0.1));
  border-bottom-color: rgb(167, 147, 118);
  border-bottom-width: 1px;
  border-left-color: rgb(167, 147, 118);
  border-left-width: 1px;
  border-right-color: rgb(167, 147, 118);
  border-right-width: 1px;
  border-top-color: rgb(167, 147, 118);
  border-top-width: 1px;
  color: var(--tag-color, rgb(167, 147, 118));
}`,
  },
};
