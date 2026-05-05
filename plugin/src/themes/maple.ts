import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "maple",
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
    styleSettingsId: [
      "maple-basic",
      "maple-workspace",
      "maple-editor",
      "maple-plugin",
      "maple-mobile",
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
  --search-result-background: var(--background-primary, hsl(0, 0%, 7%));
  --secondary: var(--text-accent, var(--color-accent-1, hsl(
    204,
    24.48%,
    50.83%
  )));
  --select-bg-img: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='%2523DDDDDD' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/%3E%3C/svg%3E");
  --setting-group-heading-color: var(--text-normal, hsla(207, 50%, 94%, 75%));
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, hsl(207, 8%, 13.5%));
  --setting-items-border-color: var(--background-modifier-border, hsla(
    207,
    6%,
    32%,
    75%
  ));
  --setting-scrollbar-hover: hsla(var(--color-accent-hsl), 40%);
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
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 7%));
  background-color: var(--bg-surface, rgba(18, 18, 18, 0.6));
  border-left-color: rgba(0, 0, 0, 0);
  color: rgba(232, 240, 247, 0.75);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-bold-font, inherit);
  font-weight: var(--setting-text-bold-weight, 600);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-italic-font, inherit);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-italic-font, inherit);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .markdown-rendered p > strong > em, html[saved-theme="dark"] strong > em {
  color: var(--italic-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-italic-font, inherit);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgba(232, 240, 247, 0.75));
  font-family: var(--setting-text-bold-font, inherit);
  font-weight: var(--setting-text-bold-weight, 600);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(214, 182, 133, 0.3));
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
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body dt {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body ol > li {
  color: rgba(232, 240, 247, 0.75);
  margin-left: 36px;
}

html[saved-theme="dark"] body ul > li {
  color: rgba(232, 240, 247, 0.75);
  margin-left: 36px;
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
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
  padding-top: 6px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body table {
  background-color: var(--indicator-color, rgba(0, 0, 0, 0));
  color: rgba(232, 240, 247, 0.75);
  margin-top: var(--heading-spacing, 8px);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-width: 0px;
  color: var(--table-text-color, rgba(232, 240, 247, 0.75));
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="dark"] body th {
  background-color: rgb(32, 35, 37);
  border-bottom-color: rgba(77, 82, 86, 0.75);
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 8px;
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
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 137, 137);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(209, 137, 137);
  border-radius: 8px;
  border-right-color: rgb(209, 137, 137);
  border-top-color: rgb(209, 137, 137);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  margin-top: 4px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgba(232, 240, 247, 0.75);
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
  margin-top: 4px;
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: var(--embed-background, rgba(18, 18, 18, 0.85));
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-bottom-style: solid;
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-right-style: solid;
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-style: solid;
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
  margin-left: -20.8px;
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
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(126, 200, 197, 0.25);
  border-right-color: rgba(126, 200, 197, 0.25);
  border-top-color: rgba(126, 200, 197, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(209, 137, 137, 0.25);
  border-right-color: rgba(209, 137, 137, 0.25);
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(209, 137, 137, 0.25);
  border-right-color: rgba(209, 137, 137, 0.25);
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(186, 179, 239, 0.25);
  border-right-color: rgba(186, 179, 239, 0.25);
  border-top-color: rgba(186, 179, 239, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(209, 137, 137, 0.25);
  border-right-color: rgba(209, 137, 137, 0.25);
  border-top-color: rgba(209, 137, 137, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(126, 184, 241, 0.25);
  border-right-color: rgba(126, 184, 241, 0.25);
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(126, 184, 241, 0.25);
  border-right-color: rgba(126, 184, 241, 0.25);
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(206, 163, 141, 0.25);
  border-right-color: rgba(206, 163, 141, 0.25);
  border-top-color: rgba(206, 163, 141, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(147, 200, 156, 0.25);
  border-right-color: rgba(147, 200, 156, 0.25);
  border-top-color: rgba(147, 200, 156, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(126, 200, 197, 0.25);
  border-right-color: rgba(126, 200, 197, 0.25);
  border-top-color: rgba(126, 200, 197, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(126, 184, 241, 0.25);
  border-right-color: rgba(126, 184, 241, 0.25);
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(206, 163, 141, 0.25);
  border-right-color: rgba(206, 163, 141, 0.25);
  border-top-color: rgba(206, 163, 141, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 126.48, 183.6, 240.72;
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
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
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--text-normal, rgba(232, 240, 247, 0.75));
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(18, 18, 18));
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgba(232, 240, 247, 0.75);
  outline: rgba(232, 240, 247, 0.75) none 0px;
  text-decoration-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
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
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(97, 131, 158, 0.2));
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
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
  border-left-color: rgb(209, 137, 137);
  border-right-color: rgb(209, 137, 137);
  border-top-color: rgb(209, 137, 137);
  color: var(--h-indicator-color, inherit);
  font-size: calc(var(--font-text-size)*0.7);
  font-weight: var(--font-weight, 750);
  letter-spacing: var(--h1-letter-spacing, -0.384px);
  line-height: var(--h1-line-height, 46.08px);
  margin-bottom: 8px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
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
  border-left-color: rgb(206, 163, 141);
  border-right-color: rgb(206, 163, 141);
  border-top-color: rgb(206, 163, 141);
  color: var(--h2-color, rgb(206, 163, 141));
  font-size: var(--h2-size, 16px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h2-letter-spacing, -0.176px);
  line-height: var(--h2-line-height, 16px);
  margin-bottom: 8px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  text-decoration: underline 2px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  border-bottom-color: rgb(209, 137, 137);
  border-left-color: rgb(209, 137, 137);
  border-right-color: rgb(209, 137, 137);
  border-top-color: rgb(209, 137, 137);
  color: var(--inline-title-color, rgb(209, 137, 137));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 750);
  letter-spacing: var(--setting-editor-letter-spacing, 0);
  line-height: var(--inline-title-line-height, 46.08px);
  margin-bottom: 12.8px;
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
  width: 16.625px;
}

html[saved-theme="dark"] body h3 {
  --font-weight: var(--h3-weight, 600);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(147, 200, 156);
  border-left-color: rgb(147, 200, 156);
  border-right-color: rgb(147, 200, 156);
  border-top-color: rgb(147, 200, 156);
  color: var(--h3-color, rgb(147, 200, 156));
  font-size: var(--h3-size, 22.4px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.1792px);
  line-height: var(--h3-line-height, 40.32px);
  margin-bottom: 8px;
  margin-top: var(--heading-spacing, 8px);
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
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
  width: 16.7969px;
}

html[saved-theme="dark"] body h4 {
  --font-weight: var(--h4-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(126, 184, 241);
  border-left-color: rgb(126, 184, 241);
  border-right-color: rgb(126, 184, 241);
  border-top-color: rgb(126, 184, 241);
  color: var(--h4-color, rgb(126, 184, 241));
  font-size: var(--h4-size, 20.8px);
  font-weight: var(--font-weight, 550);
  letter-spacing: var(--h4-letter-spacing, -0.104px);
  line-height: var(--h4-line-height, 37.44px);
  margin-bottom: 8px;
  margin-top: var(--heading-spacing, 8px);
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
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
  width: 16.9531px;
}

html[saved-theme="dark"] body h5 {
  --font-weight: var(--h5-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(186, 179, 239);
  border-left-color: rgb(186, 179, 239);
  border-right-color: rgb(186, 179, 239);
  border-top-color: rgb(186, 179, 239);
  color: var(--h5-color, rgb(186, 179, 239));
  font-size: var(--h5-size, 19.2px);
  font-weight: var(--font-weight, 550);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 34.56px);
  margin-bottom: 8px;
  margin-top: var(--heading-spacing, 8px);
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
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
  width: 17.0781px;
}

html[saved-theme="dark"] body h6 {
  --font-weight: var(--h6-weight, 500);
  border-bottom-color: rgb(126, 200, 197);
  border-left-color: rgb(126, 200, 197);
  border-right-color: rgb(126, 200, 197);
  border-top-color: rgb(126, 200, 197);
  color: var(--h6-color, rgb(126, 200, 197));
  font-size: var(--h6-size, 17.6px);
  font-weight: var(--font-weight, 500);
  line-height: var(--h6-line-height, 31.68px);
  margin-bottom: 8px;
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
  width: 15.5312px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 126.48, 183.6, 240.72);
  border-bottom-color: rgba(126, 184, 241, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(126, 184, 241, 0.25);
  border-right-color: rgba(126, 184, 241, 0.25);
  border-top-color: rgba(126, 184, 241, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(54, 54, 54);
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
  border-right-color: rgba(77, 82, 86, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(77, 82, 86, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: var(--status-bar-font-size, 13px);
  padding-right: var(--size-4-2, 4px);
}

html[saved-theme="dark"] body footer ul li a {
  font-size: 13px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  --nav-item-color-active: var(--text-normal, #eaeaea);
  color: var(--text-normal, rgb(179, 179, 179));
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  --nav-item-color-active: var(--text-normal, #eaeaea);
  color: var(--text-normal, rgb(179, 179, 179));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
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
  border-left-color: rgba(77, 82, 86, 0.75);
  border-right-color: rgba(77, 82, 86, 0.75);
  border-top-color: rgba(77, 82, 86, 0.75);
  margin-bottom: 8px;
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
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
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
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(18, 18, 18));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
  color: var(--text-normal, rgba(232, 240, 247, 0.75));
  font-size: 14px;
  line-height: 21px;
}

html[saved-theme="dark"] body abbr {
  color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgba(232, 240, 247, 0.75);
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
}

html[saved-theme="dark"] body input[type=text] {
  padding-bottom: 6px;
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
  border-left-color: rgba(232, 240, 247, 0.75);
  border-right-color: rgba(232, 240, 247, 0.75);
  border-top-color: rgba(232, 240, 247, 0.75);
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
  --search-result-background: var(--background-primary, hsl(0, 0%, 93%));
  --secondary: var(--text-accent, var(--color-accent, hsl(35, 22%, 56%)));
  --select-bg-img: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' stroke='%2523222222' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9l6 6l6-6'/%3E%3C/svg%3E");
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, hsl(35, 18%, 93.5%));
  --setting-items-border-color: var(--background-modifier-border, hsla(
    35,
    10%,
    78%,
    75%
  ));
  --setting-scrollbar-hover: hsla(var(--color-accent-hsl), 40%);
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
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  --bases-table-header-background: var(--background-secondary, hsl(0, 0%, 93%));
  background-color: var(--bg-surface, rgba(237, 237, 237, 0.6));
  border-left-color: rgba(0, 0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  font-family: var(--setting-text-bold-font, inherit);
  font-weight: var(--setting-text-bold-weight, 600);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  font-family: var(--setting-text-italic-font, inherit);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  font-family: var(--setting-text-italic-font, inherit);
}

html[saved-theme="light"] body .markdown-rendered p > strong > em, html[saved-theme="light"] strong > em {
  font-family: var(--setting-text-italic-font, inherit);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  font-family: var(--setting-text-bold-font, inherit);
  font-weight: var(--setting-text-bold-weight, 600);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(177, 140, 27, 0.3));
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
  margin-left: 36px;
}

html[saved-theme="light"] body ul > li {
  margin-left: 36px;
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
  padding-top: 6px;
}`,
    tables: `html[saved-theme="light"] body table {
  background-color: var(--indicator-color, rgba(0, 0, 0, 0));
  margin-top: var(--heading-spacing, 8px);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
  vertical-align: var(--table-cell-vertical-alignment, middle);
}

html[saved-theme="light"] body th {
  background-color: rgb(241, 239, 235);
  border-bottom-color: rgba(205, 200, 193, 0.75);
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 8px;
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
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  border-left-color: rgb(189, 81, 81);
  border-radius: 8px;
  border-right-color: rgb(189, 81, 81);
  border-top-color: rgb(189, 81, 81);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  margin-top: 4px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: var(--embed-background, rgba(237, 237, 237, 0.8));
  border-bottom-style: solid;
  border-right-style: solid;
  border-top-style: solid;
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
  margin-left: -20.8px;
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
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(18, 125, 82, 0.25);
  border-right-color: rgba(18, 125, 82, 0.25);
  border-top-color: rgba(18, 125, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(189, 81, 81, 0.25);
  border-right-color: rgba(189, 81, 81, 0.25);
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(189, 81, 81, 0.25);
  border-right-color: rgba(189, 81, 81, 0.25);
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(114, 98, 147, 0.25);
  border-right-color: rgba(114, 98, 147, 0.25);
  border-top-color: rgba(114, 98, 147, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(189, 81, 81, 0.25);
  border-right-color: rgba(189, 81, 81, 0.25);
  border-top-color: rgba(189, 81, 81, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(5, 133, 168, 0.25);
  border-right-color: rgba(5, 133, 168, 0.25);
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(5, 133, 168, 0.25);
  border-right-color: rgba(5, 133, 168, 0.25);
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(199, 123, 35, 0.25);
  border-right-color: rgba(199, 123, 35, 0.25);
  border-top-color: rgba(199, 123, 35, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(71, 143, 20, 0.25);
  border-right-color: rgba(71, 143, 20, 0.25);
  border-top-color: rgba(71, 143, 20, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(18, 125, 82, 0.25);
  border-right-color: rgba(18, 125, 82, 0.25);
  border-top-color: rgba(18, 125, 82, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(5, 133, 168, 0.25);
  border-right-color: rgba(5, 133, 168, 0.25);
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(199, 123, 35, 0.25);
  border-right-color: rgba(199, 123, 35, 0.25);
  border-top-color: rgba(199, 123, 35, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 5.202, 132.8822, 168.198;
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
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
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(237, 237, 237));
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
  border-left-color: rgb(189, 81, 81);
  border-right-color: rgb(189, 81, 81);
  border-top-color: rgb(189, 81, 81);
  color: var(--h-indicator-color, inherit);
  font-size: calc(var(--font-text-size)*0.7);
  font-weight: var(--font-weight, 750);
  letter-spacing: var(--h1-letter-spacing, -0.384px);
  line-height: var(--h1-line-height, 46.08px);
  margin-bottom: 8px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
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
  border-left-color: rgb(199, 123, 35);
  border-right-color: rgb(199, 123, 35);
  border-top-color: rgb(199, 123, 35);
  color: var(--h2-color, rgb(199, 123, 35));
  font-size: var(--h2-size, 16px);
  font-weight: var(--font-weight, 700);
  letter-spacing: var(--h2-letter-spacing, -0.176px);
  line-height: var(--h2-line-height, 16px);
  margin-bottom: 8px;
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
  text-decoration: underline 2px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  border-bottom-color: rgb(189, 81, 81);
  border-left-color: rgb(189, 81, 81);
  border-right-color: rgb(189, 81, 81);
  border-top-color: rgb(189, 81, 81);
  color: var(--inline-title-color, rgb(189, 81, 81));
  font-size: var(--inline-title-size, 25.6px);
  font-weight: var(--inline-title-weight, 750);
  letter-spacing: var(--setting-editor-letter-spacing, 0);
  line-height: var(--inline-title-line-height, 46.08px);
  margin-bottom: 12.8px;
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
  width: 16.625px;
}

html[saved-theme="light"] body h3 {
  --font-weight: var(--h3-weight, 600);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(71, 143, 20);
  border-left-color: rgb(71, 143, 20);
  border-right-color: rgb(71, 143, 20);
  border-top-color: rgb(71, 143, 20);
  color: var(--h3-color, rgb(71, 143, 20));
  font-size: var(--h3-size, 22.4px);
  font-weight: var(--font-weight, 600);
  letter-spacing: var(--h3-letter-spacing, -0.1792px);
  line-height: var(--h3-line-height, 40.32px);
  margin-bottom: 8px;
  margin-top: var(--heading-spacing, 8px);
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
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
  width: 16.7969px;
}

html[saved-theme="light"] body h4 {
  --font-weight: var(--h4-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(5, 133, 168);
  border-left-color: rgb(5, 133, 168);
  border-right-color: rgb(5, 133, 168);
  border-top-color: rgb(5, 133, 168);
  color: var(--h4-color, rgb(5, 133, 168));
  font-size: var(--h4-size, 20.8px);
  font-weight: var(--font-weight, 550);
  letter-spacing: var(--h4-letter-spacing, -0.104px);
  line-height: var(--h4-line-height, 37.44px);
  margin-bottom: 8px;
  margin-top: var(--heading-spacing, 8px);
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
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
  width: 16.9531px;
}

html[saved-theme="light"] body h5 {
  --font-weight: var(--h5-weight, 550);
  --h-indicator-color: var(--text-faint, transparent);
  border-bottom-color: rgb(114, 98, 147);
  border-left-color: rgb(114, 98, 147);
  border-right-color: rgb(114, 98, 147);
  border-top-color: rgb(114, 98, 147);
  color: var(--h5-color, rgb(114, 98, 147));
  font-size: var(--h5-size, 19.2px);
  font-weight: var(--font-weight, 550);
  letter-spacing: var(--h5-letter-spacing, -0.0384px);
  line-height: var(--h5-line-height, 34.56px);
  margin-bottom: 8px;
  margin-top: var(--heading-spacing, 8px);
  padding-left: var(--blockquote-border-thickness, 0px);
  padding-right: var(--size-4-3, 0px);
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
  width: 17.0781px;
}

html[saved-theme="light"] body h6 {
  --font-weight: var(--h6-weight, 500);
  border-bottom-color: rgb(18, 125, 82);
  border-left-color: rgb(18, 125, 82);
  border-right-color: rgb(18, 125, 82);
  border-top-color: rgb(18, 125, 82);
  color: var(--h6-color, rgb(18, 125, 82));
  font-size: var(--h6-size, 17.6px);
  font-weight: var(--font-weight, 500);
  line-height: var(--h6-line-height, 31.68px);
  margin-bottom: 8px;
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
  width: 15.5312px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 5.202, 132.8822, 168.198);
  border-bottom-color: rgba(5, 133, 168, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(5, 133, 168, 0.25);
  border-right-color: rgba(5, 133, 168, 0.25);
  border-top-color: rgba(5, 133, 168, 0.25);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgb(224, 224, 224);
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
  border-right-color: rgba(205, 200, 193, 0.75);
  border-right-width: 1px;
  border-top-color: rgba(205, 200, 193, 0.75);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: var(--status-bar-font-size, 13px);
  padding-right: var(--size-4-2, 4px);
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
  border-left-color: rgba(205, 200, 193, 0.75);
  border-right-color: rgba(205, 200, 193, 0.75);
  border-top-color: rgba(205, 200, 193, 0.75);
  margin-bottom: 8px;
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
  classSettings: {
    "color-highlight-only": {
      general: `body.color-highlight-only .setting-item[data-id=title-layout] {
display: none;
}

body.color-highlight-only .setting-item[data-id=title-layout] + .style-settings-container {
display: none;
}`,
    },
    "color-use-default": {
      general: `body.color-use-default .setting-item:is([data-id=title-light-mode], [data-id=title-dark-mode]) {
display: none;
}

body.color-use-default .setting-item:is([data-id=title-light-mode], [data-id=title-dark-mode]) + .style-settings-container {
display: none;
}`,
    },
    "color-use-minimal": {
      general: `body.color-use-minimal .setting-item:is([data-id=title-light-mode], [data-id=title-dark-mode]) {
display: none;
}

body.color-use-minimal .setting-item:is([data-id=title-light-mode], [data-id=title-dark-mode]) + .style-settings-container {
display: none;
}`,
      dark: `.color-use-minimal {
--text-on-accent: #1e1e1f !important;
--base-accent-h: var(--setting-color-active-custom-dark-h, 210);
--theme-accent-active-s: var(--setting-color-active-custom-dark-s, 4%);
--theme-accent-active-l: var(--setting-color-active-custom-dark-l, 72%);
--theme-accent-inactive-s: var(--setting-color-inactive-custom-dark-s, 12%);
--theme-accent-inactive-l: var(--setting-color-inactive-custom-dark-l, 42%);
}

.color-use-minimal:not(.color-highlight-only) {
--background-primary-hsl: var(--base-accent-h), 4%, 10%;
--background-primary-alt-hsl: var(--base-accent-h), 8%, 12%;
--background-secondary-hsl: calc(var(--base-accent-h) - 8), 4%, 12%;
--frame-bg: hsl(
    var(--base-accent-h),
    calc(var(--theme-accent-active-s) * 0.1),
    calc(8% + var(--theme-accent-active-l) * 0.1 * var(--color-opacity))
  );
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).color-use-minimal {
--background-primary-alt-hsl: var(--base-accent-h), 4%, 13%;
}`,
      light: `.color-use-minimal {
--base-accent-h: var(--setting-color-active-custom-light-h, 210);
--theme-accent-active-s: var(--setting-color-active-custom-light-s, 6%);
--theme-accent-active-l: var(--setting-color-active-custom-light-l, 36%);
--theme-accent-inactive-s: var(--setting-color-inactive-custom-light-s, 8%);
--theme-accent-inactive-l: var(--setting-color-inactive-custom-light-l, 70%);
}

.color-use-minimal:not(.color-highlight-only) {
--background-primary-hsl: var(--base-accent-h), 6%, 97%;
--background-primary-alt-hsl: var(--base-accent-h), 10%, 95.5%;
--background-secondary-hsl: calc(var(--base-accent-h) - 18), 4%, 93%;
--frame-bg: hsl(
    var(--base-accent-h),
    calc(var(--theme-accent-active-s) * 0.2),
    calc(85% + var(--theme-accent-active-l) * 0.1)
  );
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).color-use-minimal {
--background-primary-alt-hsl: var(--base-accent-h), 2%, 94%;
}`,
    },
    "color-use-custom": {
      dark: `.color-use-custom {
--base-accent-h: var(--setting-accent-h-dark, 207);
--theme-accent-active-s: 24%;
--theme-accent-active-l: 52%;
--theme-accent-inactive-s: 12%;
--theme-accent-inactive-l: 32%;
}

.color-use-custom:not(.color-highlight-only) {
--bg-delta-dark: var(--setting-bg-delta-dark, 0%);
--background-primary-hsl:
    var(--base-accent-h), calc(5% + var(--bg-delta-dark) / 2), calc(11% + var(--bg-delta-dark));
--background-primary-alt-hsl:
    var(--base-accent-h), calc(10% + var(--bg-delta-dark) / 2), calc(13% + var(--bg-delta-dark));
--background-secondary-hsl:
    calc(var(--base-accent-h) - 18), calc(6% + var(--bg-delta-dark) / 2),
    calc(12% + var(--bg-delta-dark));
}

.color-active-alt-dark {
--theme-accent-h: calc(var(--base-accent-h) + 60);
}

.color-active-custom-dark {
--theme-accent-active-h: var(--setting-color-active-custom-dark-h);
--theme-accent-active-s: var(--setting-color-active-custom-dark-s);
--theme-accent-active-l: var(--setting-color-active-custom-dark-l);
--theme-accent-inactive-h: var(--setting-color-inactive-custom-dark-h);
--theme-accent-inactive-s: var(--setting-color-inactive-custom-dark-s);
--theme-accent-inactive-l: var(--setting-color-inactive-custom-dark-l);
}

.color-modify-bg-dark, .color-use-custom:not(.color-highlight-only) {
--default-mod-bg-hsl: 0, 0%, 7%;
--background-primary-hsl: var(--setting-bg-primary-dark-hsl, var(--default-mod-bg-hsl));
--background-primary-alt-hsl: var(
    --setting-bg-primary-alt-dark-hsl,
    var(--default-mod-bg-hsl)
  );
--background-secondary-hsl: var(--setting-bg-secondary-dark-hsl, var(--default-mod-bg-hsl));
--frame-bg: var(--setting-bg-frame-dark, hsl(var(--default-mod-bg-hsl)));
}`,
      light: `.color-use-custom {
--base-accent-h: var(--setting-accent-h-light, 35);
--theme-accent-active-s: 22%;
--theme-accent-active-l: 56%;
--theme-accent-inactive-s: 20%;
--theme-accent-inactive-l: 78%;
}

.color-active-alt-light {
--theme-accent-h: calc(var(--base-accent-h) + 60);
}

.color-active-custom-light {
--theme-accent-active-h: var(--setting-color-active-custom-light-h);
--theme-accent-active-s: var(--setting-color-active-custom-light-s);
--theme-accent-active-l: var(--setting-color-active-custom-light-l);
--theme-accent-inactive-h: var(--setting-color-inactive-custom-light-h);
--theme-accent-inactive-s: var(--setting-color-inactive-custom-light-s);
--theme-accent-inactive-l: var(--setting-color-inactive-custom-light-l);
}

.color-modify-bg-light, .color-use-custom:not(.color-highlight-only) {
--default-mod-bg-hsl: 0, 0%, 93%;
--background-primary-hsl: var(--setting-bg-primary-light-hsl, var(--default-mod-bg-hsl));
--background-primary-alt-hsl: var(
    --setting-bg-primary-alt-light-hsl,
    var(--default-mod-bg-hsl)
  );
--background-secondary-hsl: var(--setting-bg-secondary-light-hsl, var(--default-mod-bg-hsl));
--frame-bg: var(--setting-bg-frame-light, hsl(var(--default-mod-bg-hsl)));
}`,
    },
    "color-active-alt-light": {
      light: `.color-use-custom.color-active-alt-light {
--theme-accent-h: calc(var(--base-accent-h) + 60);
}`,
    },
    "color-active-custom-light": {
      light: `.color-use-custom.color-active-custom-light {
--theme-accent-active-h: var(--setting-color-active-custom-light-h);
--theme-accent-active-s: var(--setting-color-active-custom-light-s);
--theme-accent-active-l: var(--setting-color-active-custom-light-l);
--theme-accent-inactive-h: var(--setting-color-inactive-custom-light-h);
--theme-accent-inactive-s: var(--setting-color-inactive-custom-light-s);
--theme-accent-inactive-l: var(--setting-color-inactive-custom-light-l);
}`,
    },
    "color-modify-bg-light": {
      light: `.color-use-custom.color-modify-bg-light {
--default-mod-bg-hsl: 0, 0%, 93%;
--background-primary-hsl: var(--setting-bg-primary-light-hsl, var(--default-mod-bg-hsl));
--background-primary-alt-hsl: var(
    --setting-bg-primary-alt-light-hsl,
    var(--default-mod-bg-hsl)
  );
--background-secondary-hsl: var(--setting-bg-secondary-light-hsl, var(--default-mod-bg-hsl));
--frame-bg: var(--setting-bg-frame-light, hsl(var(--default-mod-bg-hsl)));
}`,
    },
    "color-active-alt-dark": {
      dark: `.color-use-custom.color-active-alt-dark {
--theme-accent-h: calc(var(--base-accent-h) + 60);
}`,
    },
    "color-active-custom-dark": {
      dark: `.color-use-custom.color-active-custom-dark {
--theme-accent-active-h: var(--setting-color-active-custom-dark-h);
--theme-accent-active-s: var(--setting-color-active-custom-dark-s);
--theme-accent-active-l: var(--setting-color-active-custom-dark-l);
--theme-accent-inactive-h: var(--setting-color-inactive-custom-dark-h);
--theme-accent-inactive-s: var(--setting-color-inactive-custom-dark-s);
--theme-accent-inactive-l: var(--setting-color-inactive-custom-dark-l);
}`,
    },
    "color-modify-bg-dark": {
      dark: `.color-use-custom.color-modify-bg-dark {
--default-mod-bg-hsl: 0, 0%, 7%;
--background-primary-hsl: var(--setting-bg-primary-dark-hsl, var(--default-mod-bg-hsl));
--background-primary-alt-hsl: var(
    --setting-bg-primary-alt-dark-hsl,
    var(--default-mod-bg-hsl)
  );
--background-secondary-hsl: var(--setting-bg-secondary-dark-hsl, var(--default-mod-bg-hsl));
--frame-bg: var(--setting-bg-frame-dark, hsl(var(--default-mod-bg-hsl)));
}`,
    },
    "app-layout-card": {
      general: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only) {
--divider-color: transparent;
--pdf-background: transparent;
--tab-divider-color: var(--color-base-35);
--tab-active-shadow: none !important;
--app-layout-spacing: var(--setting-app-layout-spacing, var(--size-2-3));
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-split.mod-left-split > .workspace-leaf-resize-handle {
translate: var(--size-4-1);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-split.mod-right-split > .workspace-leaf-resize-handle {
translate: calc(-1 * var(--size-4-1));
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-split:is(.mod-left-split, .mod-right-split) .workspace-tabs > .workspace-leaf-resize-handle {
border-color: var(--setting-divider-color, transparent);
inset-inline: var(--size-4-1);
width: unset;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-gradient:not(.color-use-minimal) {
--bg-opacity: 0.6;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-border .mod-root .workspace-leaf-content {
border: 1px solid var(--background-modifier-border);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-border .workspace-tab-header {
border: 1px solid transparent;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-border .workspace-tab-header.is-active {
border-color: var(--background-modifier-border);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .mod-root .workspace-tab-container {
padding: var(--app-layout-spacing);
padding-top: 0;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .mod-root .workspace-tab-container .workspace-leaf-content {
border-radius: var(--radius-m);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .mod-root :is(.workspace-tabs + .workspace-tabs.mod-top, .workspace-split.mod-vertical > .workspace-tabs + .workspace-tabs, .workspace-tabs + .workspace-split > .workspace-tabs, .workspace-split + .workspace-tabs, .workspace-split + .workspace-split:not(.mod-root) > .workspace-tabs) > div {
padding-left: 0;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .mod-root .workspace-tabs:not(.mod-top) {
margin-top: -4px;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-tab-header {
--background-modifier-hover: hsla(var(--background-primary-hsl), var(--bg-opacity));
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) :is(.workspace-tab-header-container, .workspace-tab-header-container-inner, .titlebar-button-container, .sidebar-toggle-button, .workspace-fake-target-overlay:not(.is-in-sidebar) .workspace-tabs .workspace-leaf, .workspace-split:not(.mod-root) .workspace-tabs .workspace-leaf, .workspace-split.mod-root .workspace-tabs:not(.mod-stacked) .workspace-leaf, .workspace-split.mod-root .workspace-split, .pdf-toolbar, .workspace-leaf-content[data-type=empty], .workspace-leaf-content:not([data-type=empty]) :is(.view-content, .view-header)) {
background-color: transparent;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-ribbon {
--ribbon-background: var(--bg-surface);
--ribbon-background-collapsed: var(--bg-surface);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-ribbon::before {
background-color: var(--bg-surface);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-split {
background-color: var(--bg-surface);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-split.mod-root .workspace-leaf-content {
background-color: var(--bg-editor);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .workspace-split.mod-left-split .workspace-sidedock-vault-profile {
background-color: hsla(var(--background-secondary-hsl), calc(var(--bg-opacity) / 4));
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).labeled-nav .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding-top: 0;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .modal-container .mod-settings .modal-content {
background-color: var(--bg-surface);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .modal-container .mod-settings .modal-content .vertical-tab-header {
background-color: transparent;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .modal-container .mod-settings .modal-content .vertical-tab-content-container > .vertical-tab-content {
background-color: transparent;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .modal-container .mod-settings .modal-content .vertical-tab-content-container > .vertical-tab-content :is(.setting-group .setting-items, .setting-item:not(.setting-item-heading), .setting-group-search) {
background-color: var(--bg-editor);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .modal-container .mod-settings .modal-content :is(.style-settings-heading[data-level="0"] + .style-settings-container, .style-settings-container) {
border: none;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .modal-container .mod-settings .modal-content :is(.style-settings-heading[data-level="0"] + .style-settings-container, .style-settings-container) > .setting-item {
padding: var(--size-4-3) var(--size-4-4);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header.modal-setting-header-search .installed-plugins-container .setting-group-search {
padding: 0;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header.modal-setting-header-search .installed-plugins-container .setting-items {
padding-top: var(--size-4-6);
border-start-start-radius: var(--setting-items-radius);
border-start-end-radius: var(--setting-items-radius);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header.modal-setting-header-search .setting-group-search {
padding: 0 !important;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header.modal-setting-header-search .setting-group-search + .setting-items {
padding-top: var(--size-4-5);
border-start-start-radius: var(--setting-items-radius);
border-start-end-radius: var(--setting-items-radius);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .modal-sidebar {
background-color: var(--bg-surface);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only) .modal-setting-nav-bar {
border-color: transparent;
}`,
      dark: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).theme-dark {
--background-primary-alt-hsl: var(--base-accent-h), 8%, 13.5%;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).color-use-minimal {
--background-primary-alt-hsl: var(--base-accent-h), 4%, 13%;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-gradient:not(.color-use-minimal).theme-dark {
--app-bg-image: linear-gradient(
    320deg,
    hsl(calc(var(--base-accent-h) + 60), 11%, 22%),
    hsl(calc(var(--base-accent-h) - 10), 24%, 28%)
  );
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-custom.theme-dark {
--bg-opacity: var(--setting-layout-opacity-dark, 0.6);
--app-bg-image: var(
    --setting-layout-image-dark,
    linear-gradient(to bottom, var(--color-base-20))
  );
}`,
      light: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).theme-light {
--background-primary-alt-hsl: var(--base-accent-h), 18%, 93.5%;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).color-use-minimal {
--background-primary-alt-hsl: var(--base-accent-h), 2%, 94%;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-gradient:not(.color-use-minimal).theme-light {
--app-bg-image: linear-gradient(
    320deg,
    hsl(calc(var(--base-accent-h) + 50), 50%, 92%),
    hsl(calc(var(--base-accent-h) - 30), 36%, 87%)
  );
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-custom.theme-light {
--bg-opacity: var(--setting-layout-opacity-light, 0.6);
--app-bg-image: var(
    --setting-layout-image-light,
    linear-gradient(to bottom, var(--color-base-25))
  );
}`,
    },
    "app-layout-card-border": {
      general: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-border .mod-root .workspace-leaf-content {
border: 1px solid var(--background-modifier-border);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-border .workspace-tab-header {
border: 1px solid transparent;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-border .workspace-tab-header.is-active {
border-color: var(--background-modifier-border);
}`,
    },
    "app-layout-card-gradient": {
      general: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-gradient:not(.color-use-minimal) {
--bg-opacity: 0.6;
}`,
      dark: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-gradient:not(.color-use-minimal).theme-dark {
--app-bg-image: linear-gradient(
    320deg,
    hsl(calc(var(--base-accent-h) + 60), 11%, 22%),
    hsl(calc(var(--base-accent-h) - 10), 24%, 28%)
  );
}`,
      light: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).app-layout-card-gradient:not(.color-use-minimal).theme-light {
--app-bg-image: linear-gradient(
    320deg,
    hsl(calc(var(--base-accent-h) + 50), 50%, 92%),
    hsl(calc(var(--base-accent-h) - 30), 36%, 87%)
  );
}`,
    },
    "app-layout-card-custom": {
      dark: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).theme-dark {
--bg-opacity: var(--setting-layout-opacity-dark, 0.6);
--app-bg-image: var(
    --setting-layout-image-dark,
    linear-gradient(to bottom, var(--color-base-20))
  );
}`,
      light: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).theme-light {
--bg-opacity: var(--setting-layout-opacity-light, 0.6);
--app-bg-image: var(
    --setting-layout-image-light,
    linear-gradient(to bottom, var(--color-base-25))
  );
}`,
    },
    "enable-blur": {
      general: `body:not(.is-phone).enable-blur :is(.menu, .suggestion-container, .graph-control-section) {
background-color: hsla(var(--background-secondary-hsl), 0.7) !important;
backdrop-filter: blur(20px);
will-change: backdrop-filter;
}

body:not(.is-phone).enable-blur .modal-bg {
backdrop-filter: blur(6px);
transform: translateZ(0);
}`,
    },
    "explorer-title-wrap": {
      general: `body.explorer-title-wrap :is(.nav-file-title-content, .nav-folder-title-content) {
overflow: visible;
white-space: pre-wrap;
}`,
    },
    "explorer-icon": {
      general: `body:is(:not(.css-settings-manager), .explorer-icon) .workspace-tab-header-inner-icon .lucide-file-audio {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M9 18V5l12-2v13M9 9l12-2'/><circle cx='6' cy='18' r='3'/><circle cx='18' cy='16' r='3'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .workspace-tab-header-inner-icon .lucide-file-audio path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .workspace-tab-header-inner-icon .lucide-file {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><rect width='18' height='18' x='3' y='3' rx='2'/><path d='M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .workspace-tab-header-inner-icon .lucide-file path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .workspace-tab-header-inner-icon .lucide-file-text {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .workspace-tab-header-inner-icon .lucide-file-text path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .workspace-tab-header-inner-icon .lucide-table {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><ellipse cx='12' cy='5' rx='9' ry='3'/><path d='M3 5v14a9 3 0 0 0 18 0V5'/><path d='M3 12a9 3 0 0 0 18 0'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .workspace-tab-header-inner-icon .lucide-table path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .menu.mod-tab-list .lucide-file {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'/><path d='M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .menu.mod-tab-list .lucide-file path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .menu.mod-tab-list .lucide-file-text {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .menu.mod-tab-list .lucide-file-text path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .menu.mod-tab-list .lucide-file-audio {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M9 18V5l12-2v13M9 9l12-2'/><circle cx='6' cy='18' r='3'/><circle cx='18' cy='16' r='3'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .menu.mod-tab-list .lucide-file-audio path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .menu.mod-tab-list .lucide-table {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><ellipse cx='12' cy='5' rx='9' ry='3'/><path d='M3 5v14a9 3 0 0 0 18 0V5'/><path d='M3 12a9 3 0 0 0 18 0'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .menu.mod-tab-list .lucide-table path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .lucide-folder-closed {
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
}

body:is(:not(.css-settings-manager), .explorer-icon) .lucide-folder-closed path {
display: none;
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-folder-title {
cursor: pointer;
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-folder-title-content {
padding-left: var(--size-4-1);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-folder .nav-folder-children {
transition: border-color var(--animation-fast);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-folder .nav-folder-children:hover {
border-color: var(--accent-inactive);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-folder .collapse-icon {
margin-inline-start: calc(var(--size-2-1) - var(--size-4-5));
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-folder .collapse-icon svg.svg-icon {
display: inline-block;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 14l1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--folder-color);
width: var(--size-4-4);
height: var(--size-4-4);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-folder .collapse-icon.is-collapsed svg.svg-icon {
transform: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--folder-color);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title {
padding-inline-end: 0;
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title::before {
content: "";
position: absolute;
opacity: 0.8;
flex-shrink: 0;
translate: calc(var(--size-2-1) - var(--size-4-5)) -50%;
top: 50%;
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'/><path d='M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8'/></g></svg>");
-webkit-mask: var(--file-icon) no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--accent-active);
width: var(--size-4-4);
height: var(--size-4-4);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title:is([data-path$=pdf])::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z'/></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-unsupported::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title:is([data-path$=png], [data-path$=".svg"], [data-path$=".jpeg"], [data-path$=".jpg"], [data-path$=".bmp"], [data-path$=".gif"], [data-path$=".webp"], [data-path$=".tiff"])::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><rect width='18' height='18' x='3' y='3' rx='2' ry='2'/><circle cx='9' cy='9' r='2'/><path d='m21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-unsupported::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title:is([data-path$=mp3], [data-path$=".flac"], [data-path$=".wav"], [data-path$=".ape"], [data-path$=".alac"], [data-path$=".aac"], [data-path$=".m4a"])::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M9 18V5l12-2v13M9 9l12-2'/><circle cx='6' cy='18' r='3'/><circle cx='18' cy='16' r='3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-unsupported::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title:is([data-path$=mkv], [data-path$=".mp4"], [data-path$=".flv"], [data-path$=".webm"], [data-path$=".avi"], [data-path$=".mov"])::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><rect width='18' height='18' x='3' y='3' rx='2'/><path d='M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-unsupported::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title:is([data-path$=canvas])::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 22a1 1 0 0 1 0-20a10 9 0 0 1 10 9a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z'/><circle cx='13.5' cy='6.5' r='.5' fill='currentColor'/><circle cx='17.5' cy='10.5' r='.5' fill='currentColor'/><circle cx='6.5' cy='12.5' r='.5' fill='currentColor'/><circle cx='8.5' cy='7.5' r='.5' fill='currentColor'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-unsupported::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title:is([data-path$=base])::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><ellipse cx='12' cy='5' rx='9' ry='3'/><path d='M3 5v14a9 3 0 0 0 18 0V5'/><path d='M3 12a9 3 0 0 0 18 0'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-unsupported::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title:is([data-path$="excalidraw.md"], [data-path$=".excalidraw"])::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4'/></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-unsupported::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title:is([data-path$=".smm.md"])::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1026 1024'><path fill='currentColor' d='M981.333 473.173h-417.28a42.667 42.667 0 0 0 0 85.334h417.28a42.667 42.667 0 0 0 0-85.334m0 365.014h-417.28a42.667 42.667 0 0 0 0 85.333h417.28a42.667 42.667 0 0 0 0-85.333m-417.28-644.694h417.28a42.667 42.667 0 0 0 0-85.333h-417.28a42.667 42.667 0 0 0 0 85.333M398.293 515.84a42.667 42.667 0 0 0-42.666-42.667h-89.174a527 527 0 0 0 27.52-117.12c13.654-88.96 26.24-149.333 75.094-164.906a42.667 42.667 0 1 0-27.094-80.854c-101.76 33.92-118.826 144.214-132.48 232.747-15.146 99.2-25.813 130.133-62.506 130.133H42.667a42.667 42.667 0 0 0 0 85.334h104.32c36.693 0 47.36 30.933 62.506 130.133 13.654 88.533 30.72 198.613 132.48 232.747a42.7 42.7 0 0 0 13.654 2.133 42.667 42.667 0 0 0 13.44-83.2c-48.854-16.213-61.44-75.733-75.094-164.693a527 527 0 0 0-27.52-117.12h89.174a42.667 42.667 0 0 0 42.666-42.667'/></svg> ");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-unsupported::before {
--file-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M12 17h.01M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z'/><path d='M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3'/></g></svg>");
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title .nav-file-tag {
margin-right: var(--size-2-3);
background-color: var(--background-modifier-hover);
color: var(--text-accent);
line-height: unset;
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-active:not(.is-selected):first-child::before {
background-color: var(--nav-item-color-active);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-active:not(.is-selected) .nav-file-title-content {
color: var(--nav-item-color-active);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title.is-active:not(.is-selected) .nav-file-tag {
backdrop-filter: brightness(0.85);
color: var(--nav-item-color-active);
}

body:is(:not(.css-settings-manager), .explorer-icon) .nav-file-title-content {
padding-left: var(--size-4-1);
}`,
      dark: `body.explorer-icon .is-active .nav-file-tag {
--nav-item-background-active: var(--text-on-accent);
}`,
    },
    "explorer-folder-bold": {
      general: `body.explorer-folder-bold .nav-folder-title {
font-weight: 600;
}`,
    },
    "outline-enable": {
      general: `body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item {
position: relative;
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-self {
position: relative;
margin-bottom: 0;
white-space: nowrap;
margin-top: -1px;
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-self .tree-item-inner {
padding-left: var(--size-4-1);
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-self .tree-item-inner::before {
content: "";
width: calc(var(--size-4-1) * 1.2);
height: calc(var(--size-4-1) * 1.2);
border: var(--size-2-1) solid var(--outline-guideline-color-alt);
border-radius: 50%;
position: absolute;
top: 50%;
transform: translate(calc(-1 * var(--size-4-5) - var(--size-4-1) * 1.2 * 0.5 + 1px), -50%);
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-self.is-active .tree-item-inner::before {
border-color: var(--outline-guideline-color);
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-self .tree-item-icon ~ .tree-item-inner {
padding-left: var(--size-4-1);
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-self .tree-item-icon ~ .tree-item-inner::before {
content: none;
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item.is-collapsed .tree-item-icon::before {
box-shadow: 0 0 0 var(--size-4-1) var(--background-modifier-hover);
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item::after {
content: "";
width: var(--outline-guideline-width);
position: absolute;
background-color: transparent;
top: calc(var(--outline-item-height) / 2 * -1);
left: -14px;
height: calc(100% - var(--outline-item-height) + var(--size-4-8));
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-icon {
cursor: pointer;
transform: translateY(8px);
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-icon::before {
width: var(--size-4-2);
height: var(--size-4-2);
background-color: var(--outline-guideline-color-alt);
border-radius: 50%;
position: absolute;
left: 3px;
top: 50%;
transform: translateY(-50%);
z-index: 10;
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-icon svg path {
display: none;
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item-self.is-active .tree-item-icon::before {
background-color: var(--outline-guideline-color);
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item:hover > .tree-item-children > .tree-item::after {
background-color: var(--outline-guideline-color);
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item:hover > .tree-item-self:hover + .tree-item-children .tree-item::after {
background-color: transparent;
}

body.outline-enable .workspace-leaf-content[data-type=outline] .tree-item:hover > .tree-item-children > .tree-item:hover::before {
content: "";
position: absolute;
top: calc(var(--outline-item-height) / 2 * -1);
left: -14px;
bottom: calc(100% - (var(--outline-item-height) + var(--size-4-2)) / 2 - 1px);
width: var(--size-4-6);
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--outline-guideline-width) solid var(--outline-guideline-color);
border-left: var(--outline-guideline-width) solid var(--outline-guideline-color);
z-index: 9;
}

body.outline-enable .workspace-leaf-content[data-type=outline] :is(.tree-item-children, .tree-item-self) {
padding-left: 28px !important;
margin-left: 0 !important;
border-left: none;
}`,
    },
    "search-internal-enable": {
      general: `body.search-internal-enable .document-search-container:not(.excalidraw-search) {
background-color: var(--background-secondary);
position: absolute;
top: var(--size-4-10);
right: var(--size-4-4);
border-radius: var(--radius-m);
height: fit-content;
border: 1px solid var(--background-modifier-border);
box-shadow: var(--shadow-s);
padding: var(--size-4-2) 0;
margin: 0;
}

body.search-internal-enable .document-search-container:not(.excalidraw-search) :is(.document-replace, .document-search) {
gap: var(--size-4-1);
}

body.search-internal-enable .document-search-container:not(.excalidraw-search) .search-input-container input:hover + .document-search-count {
opacity: 0;
pointer-events: none;
cursor: none;
transition: opacity var(--animation-fast);
}

body.search-internal-enable .document-search-container:not(.excalidraw-search) .search-input-container .document-search-count {
letter-spacing: -0.5px;
background-color: var(--background-secondary);
height: calc(var(--input-height) - var(--size-2-3));
line-height: calc(var(--input-height) - var(--size-2-3));
padding-inline: var(--size-4-1);
right: var(--size-4-1);
border-radius: var(--radius-s);
opacity: 1;
transition: var(--animation-fast);
transition-delay: 0.5s;
}

body.search-internal-enable .document-search-container:not(.excalidraw-search) .document-search-buttons .document-search-button {
font-size: 0;
background-color: transparent !important;
color: var(--text-muted);
cursor: var(--cursor);
height: var(--input-height);
width: var(--input-height);
padding: var(--size-4-1);
box-shadow: unset !important;
}

body.search-internal-enable .document-search-container:not(.excalidraw-search) .document-search-buttons .document-search-button:hover {
background-color: var(--background-modifier-hover) !important;
color: var(--text-normal);
}

body.search-internal-enable .document-search-container {
width: calc(100% - 2 * var(--size-4-3));
}

body.search-internal-enable .document-search-container :is(.document-search-input, .document-replace-input) {
min-width: unset;
}`,
    },
    "search-remove-button": {
      general: `body.search-remove-button .document-search-buttons > :last-child {
display: none;
}`,
    },
    "modal-setting-header": {
      general: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header-search .installed-plugins-container .setting-group-search {
padding: 0;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header-search .installed-plugins-container .setting-items {
padding-top: var(--size-4-6);
border-start-start-radius: var(--setting-items-radius);
border-start-end-radius: var(--setting-items-radius);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header-search .setting-group-search {
padding: 0 !important;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header-search .setting-group-search + .setting-items {
padding-top: var(--size-4-5);
border-start-start-radius: var(--setting-items-radius);
border-start-end-radius: var(--setting-items-radius);
}

body:not(.is-mobile).modal-setting-header-search .settings-search-container {
padding: 0;
}

body:not(.is-mobile).modal-setting-header-search .settings-search-container .settings-search-input {
position: absolute;
top: var(--size-2-3);
width: calc(clamp(180px, var(--modal-width) / 4, 250px) - var(--size-4-5));
}

body.modal-setting-header:not(.is-mobile) {
--modal-close-button-padding: var(--size-4-2);
--modal-header-height: var(--size-4-10);
}

body.modal-setting-header:not(.is-mobile) .modal-close-button {
transition: background-color var(--animation);
z-index: calc(var(--layer-modal) + 1);
top: var(--modal-close-button-padding);
inset-inline-end: var(--modal-close-button-padding);
}

body.modal-setting-header:not(.is-mobile) .modal-container .mod-settings {
container-type: inline-size;
}

body.modal-setting-header:not(.is-mobile) .modal-container .mod-settings::before {
content: var(--setting-modal-header-title, "Maple 1.4.14");
position: absolute;
left: var(--size-4-4);
top: calc(var(--modal-header-height) / 2);
translate: 0 -50%;
font-size: 18px;
font-weight: 550;
color: var(--setting-color-logo, var(--text-accent));
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-title-center .modal-container .mod-settings::before {
left: 50%;
translate: -50% -50%;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-title-center .modal-container .mod-settings::before {
opacity: 0;
}

body.modal-setting-header:not(.is-mobile) .mod-settings .modal-content {
background-color: var(--titlebar-background);
}

body.modal-setting-header:not(.is-mobile) .mod-settings .modal-content .vertical-tab-header {
background-color: hsl(var(--background-secondary-hsl));
border-top: 1px solid var(--divider-color);
margin-top: var(--modal-header-height);
padding-top: 0;
}

body.modal-setting-header:not(.is-mobile) .mod-settings .modal-content .vertical-tab-content-container {
padding-top: var(--modal-header-height);
position: relative;
}

body.modal-setting-header:not(.is-mobile) .mod-settings .modal-content .vertical-tab-content-container .vertical-tab-content {
position: unset !important;
background-color: var(--background-primary);
border-top: 1px solid var(--divider-color);
padding-top: var(--size-4-6);
padding-right: var(--size-4-8);
}

body.modal-setting-header:not(.is-mobile) .mod-settings .modal-content .vertical-tab-content-container .vertical-tab-content h2 {
font-size: var(--h2-size);
font-weight: var(--h2-weight);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search {
--modal-close-button-padding: var(--size-4-3);
--modal-header-height: var(--size-4-12);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings::before {
font-size: 20px;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content :is(.plugin-list-plugins, .vertical-tab-content:is(:has(> .installed-plugins-container), :has(> .hotkey-list-container))) > .setting-item:has(input) {
position: absolute;
padding: 0;
top: 0;
right: var(--modal-header-height);
border: none;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content :is(.plugin-list-plugins, .vertical-tab-content:is(:has(> .installed-plugins-container), :has(> .hotkey-list-container))) > .setting-item:has(input) .setting-item-info {
visibility: hidden;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .plugin-list-plugins .setting-item-heading {
margin: 0;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-filter-container {
margin-bottom: var(--size-4-1);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-filter-container .hotkey-filter {
margin-bottom: var(--size-4-3);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content :is(.setting-group-search .search-input-container, .setting-item-control:has(.search-input-container.mod-hotkey)) {
position: absolute;
padding: 0;
top: calc(var(--size-4-2) + var(--size-2-1));
right: var(--modal-header-height);
border: none;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content :is(.setting-group-search .search-input-container, .setting-item-control:has(.search-input-container.mod-hotkey)) .setting-item-info {
visibility: hidden;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-group-search {
padding-block: calc(var(--size-4-2) + var(--size-2-1));
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-item:has(~ .hotkey-list-container) .setting-item-info {
display: flex;
flex-direction: row;
align-items: baseline;
gap: var(--size-4-2);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-item:has(~ .hotkey-list-container) .setting-item-info .setting-item-name {
font-size: var(--h4-size);
font-weight: bold;
}`,
    },
    "modal-setting-header-title-center": {
      general: `body.modal-setting-header:not(.is-mobile).modal-setting-header-title-center .modal-container .mod-settings::before {
left: 50%;
translate: -50% -50%;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-title-center .modal-container .mod-settings::before {
opacity: 0;
}`,
    },
    "modal-setting-header-search": {
      general: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header.modal-setting-header-search .installed-plugins-container .setting-group-search {
padding: 0;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header.modal-setting-header-search .installed-plugins-container .setting-items {
padding-top: var(--size-4-6);
border-start-start-radius: var(--setting-items-radius);
border-start-end-radius: var(--setting-items-radius);
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header.modal-setting-header-search .setting-group-search {
padding: 0 !important;
}

body.app-layout-card:not(.is-mobile):not(.color-highlight-only).modal-setting-header.modal-setting-header-search .setting-group-search + .setting-items {
padding-top: var(--size-4-5);
border-start-start-radius: var(--setting-items-radius);
border-start-end-radius: var(--setting-items-radius);
}

body:not(.is-mobile).modal-setting-header.modal-setting-header-search .settings-search-container {
padding: 0;
}

body:not(.is-mobile).modal-setting-header.modal-setting-header-search .settings-search-container .settings-search-input {
position: absolute;
top: var(--size-2-3);
width: calc(clamp(180px, var(--modal-width) / 4, 250px) - var(--size-4-5));
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search {
--modal-close-button-padding: var(--size-4-3);
--modal-header-height: var(--size-4-12);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings::before {
font-size: 20px;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content :is(.plugin-list-plugins, .vertical-tab-content:is(:has(> .installed-plugins-container), :has(> .hotkey-list-container))) > .setting-item:has(input) {
position: absolute;
padding: 0;
top: 0;
right: var(--modal-header-height);
border: none;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content :is(.plugin-list-plugins, .vertical-tab-content:is(:has(> .installed-plugins-container), :has(> .hotkey-list-container))) > .setting-item:has(input) .setting-item-info {
visibility: hidden;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .plugin-list-plugins .setting-item-heading {
margin: 0;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-filter-container {
margin-bottom: var(--size-4-1);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-filter-container .hotkey-filter {
margin-bottom: var(--size-4-3);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content :is(.setting-group-search .search-input-container, .setting-item-control:has(.search-input-container.mod-hotkey)) {
position: absolute;
padding: 0;
top: calc(var(--size-4-2) + var(--size-2-1));
right: var(--modal-header-height);
border: none;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content :is(.setting-group-search .search-input-container, .setting-item-control:has(.search-input-container.mod-hotkey)) .setting-item-info {
visibility: hidden;
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-group-search {
padding-block: calc(var(--size-4-2) + var(--size-2-1));
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-item:has(~ .hotkey-list-container) .setting-item-info {
display: flex;
flex-direction: row;
align-items: baseline;
gap: var(--size-4-2);
}

body.modal-setting-header:not(.is-mobile).modal-setting-header-search .mod-settings .modal-content .setting-item:has(~ .hotkey-list-container) .setting-item-info .setting-item-name {
font-size: var(--h4-size);
font-weight: bold;
}`,
    },
    "enable-group-title": {
      general: `body.enable-group-title .modal-container .mod-settings .modal-content .vertical-tab-header-group {
padding-bottom: 0;
}

body.enable-group-title .modal-container .mod-settings .modal-content .vertical-tab-header-group-title {
color: var(--text-accent);
font-size: var(--size-4-4);
font-weight: var(--font-bold);
}

body.enable-group-title .modal-container .mod-settings .modal-content .vertical-tab-header-group-title::before {
content: "";
display: inline-block;
translate: 0 var(--size-2-1);
margin-inline-end: var(--size-4-2);
-webkit-mask: var(--settings-icon) no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: inherit;
width: var(--size-4-4);
height: var(--size-4-4);
}

body.enable-group-title .modal-container .mod-settings .modal-content .vertical-tab-header-group:nth-last-of-type(3) > .vertical-tab-header-group-title::before {
--settings-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M9.671 4.136a2.34 2.34 0 0 1 4.659 0a2.34 2.34 0 0 0 3.319 1.915a2.34 2.34 0 0 1 2.33 4.033a2.34 2.34 0 0 0 0 3.831a2.34 2.34 0 0 1-2.33 4.033a2.34 2.34 0 0 0-3.319 1.915a2.34 2.34 0 0 1-4.659 0a2.34 2.34 0 0 0-3.32-1.915a2.34 2.34 0 0 1-2.33-4.033a2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915'/><circle cx='12' cy='12' r='3'/></g></svg>");
}

body.enable-group-title .modal-container .mod-settings .modal-content .vertical-tab-header-group:nth-last-of-type(2) > .vertical-tab-header-group-title::before {
--settings-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z'/><path d='m3.3 7l8.7 5l8.7-5M12 22V12'/></g></svg>");
}

body.enable-group-title .modal-container .mod-settings .modal-content .vertical-tab-header-group:nth-last-of-type(1) > .vertical-tab-header-group-title::before {
--settings-icon: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M18 21a8 8 0 0 0-16 0'/><circle cx='10' cy='8' r='5'/><path d='M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3'/></g></svg>");
}`,
    },
    "modal-will-change": {
      general: `body.modal-will-change :is(.prompt, .popover, .modal) {
will-change: transform, opacity;
}`,
    },
    "modal-control-gradient": {
      general: `body:is(:not(.css-settings-manager), .modal-control-gradient) button.mod-cta {
transition: box-shadow var(--animation);
background: linear-gradient(to bottom, transparent -240%, var(--color-accent) 100%);
}

body:is(:not(.css-settings-manager), .modal-control-gradient) button.mod-cta:hover {
background: linear-gradient(to bottom, transparent -240%, var(--color-accent-1) 100%);
}

body:is(:not(.css-settings-manager), .modal-control-gradient) button.mod-cta:not(.mod-loading) {
color: var(--text-on-accent);
}

body:is(:not(.css-settings-manager), .modal-control-gradient) button.mod-warning {
transition: box-shadow var(--animation);
background: linear-gradient(to bottom, transparent -240%, var(--background-modifier-error) 100%);
color: var(--text-on-accent);
}

body:is(:not(.css-settings-manager), .modal-control-gradient) button.mod-warning:hover {
background: linear-gradient(to bottom, transparent -240%, var(--background-modifier-error-hover) 100%);
}

body:is(:not(.css-settings-manager), .modal-control-gradient) .checkbox-container.is-enabled {
background: linear-gradient(to bottom, transparent -200%, var(--accent-active) 100%);
}`,
    },
    "modal-slider": {
      general: `body:not(.is-mobile).modal-slider {
--slider-thumb-width: 18px !important;
}

body:not(.is-mobile).modal-slider input[type=range]:focus {
--slider-thumb-ring-factor: 5.2;
}

body:not(.is-mobile).modal-slider input[type=range]::-webkit-slider-thumb {
box-shadow: inset 0 0 0 calc(var(--slider-thumb-width) / var(--slider-thumb-ring-factor, 4) * 0.9) var(--color-base-20), inset 0 0 0 calc(var(--slider-thumb-width) / 2) var(--accent-active), var(--input-shadow);
transition: box-shadow var(--animation);
border-width: 0;
}

body:not(.is-mobile).modal-slider input[type=range]::-webkit-slider-thumb:is(:hover, :active, :focus) {
--slider-thumb-ring-factor: 5.2;
}`,
    },
    "modal-toggle-square": {
      general: `.modal-toggle-square .checkbox-container {
--toggle-border-width: var(--size-4-1);
--toggle-thumb-width: calc(var(--input-height) / 2);
--toggle-thumb-height: var(--toggle-thumb-width);
--toggle-thumb-radius: calc(var(--toggle-thumb-width) / 3);
--toggle-radius: calc(var(--toggle-s-thumb-radius) + var(--toggle-border-width) / 2);
--toggle-s-border-width: var(--toggle-border-width);
--toggle-s-thumb-radius: var(--toggle-thumb-radius);
--toggle-s-thumb-width: var(--toggle-thumb-width);
--toggle-s-thumb-height: var(--toggle-thumb-height);
}`,
    },
    "modal-toggle-thin": {
      general: `body:not(.is-mobile).modal-toggle-thin .checkbox-container::after {
left: var(--toggle-border-width);
height: calc(var(--toggle-target-width) / 4 + var(--toggle-border-width));
bottom: 50%;
border-radius: calc(var(--toggle-target-width) / 8 + var(--toggle-border-width)) calc(var(--toggle-target-width) / 8 + var(--toggle-border-width)) 0 0;
border: var(--toggle-border-width) solid var(--text-faint);
width: calc(var(--toggle-target-width) / 8 + var(--toggle-border-width));
margin: 0;
transition: var(--animation);
}

:is(body:not(.is-mobile).modal-toggle-thin .checkbox-container:hover, body:not(.is-mobile).modal-toggle-thin .checkbox-container:focus-within)::after {
height: calc(var(--toggle-target-width) / 6 + var(--toggle-border-width));
}

body:not(.is-mobile).modal-toggle-thin .checkbox-container:active::after {
width: calc(100% - var(--toggle-border-width) * 6);
}

body:not(.is-mobile).modal-toggle-thin .checkbox-container.is-enabled {
border-color: var(--accent-active);
background: var(--accent-inactive);
}

body:not(.is-mobile).modal-toggle-thin .checkbox-container.is-enabled::before {
background-color: var(--accent-active-bg);
}

body:not(.is-mobile).modal-toggle-thin .checkbox-container.is-enabled::after {
border-color: var(--accent-active);
transform: none;
left: calc(80% - var(--toggle-border-width) * 4);
}

body:not(.is-mobile).modal-toggle-thin .checkbox-container.is-enabled:active::after {
left: calc(2 * var(--toggle-border-width));
}`,
    },
    "modal-toggle-floating": {
      general: `body:not(.is-mobile).modal-toggle-floating .checkbox-container::after {
left: 0;
height: calc(var(--toggle-target-width) / 3);
width: calc(var(--toggle-target-width) / 3);
bottom: 30%;
border-radius: calc(var(--toggle-target-width) / 2);
border: var(--toggle-border-width) solid var(--text-faint);
margin: 0;
transition: var(--animation);
}

:is(body:not(.is-mobile).modal-toggle-floating .checkbox-container:hover, body:not(.is-mobile).modal-toggle-floating .checkbox-container:focus-within)::after {
bottom: 10%;
}

body:not(.is-mobile).modal-toggle-floating .checkbox-container.is-enabled {
border-color: var(--accent-active);
background: var(--accent-inactive);
}

body:not(.is-mobile).modal-toggle-floating .checkbox-container.is-enabled::after {
border-color: var(--accent-active);
transform: none;
left: calc(100% - var(--toggle-target-width) / 3 - 3 * var(--toggle-border-width));
}`,
    },
    "labeled-nav": {
      general: `body.app-layout-card:not(.is-mobile):not(.color-highlight-only).labeled-nav .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding-top: 0;
}

.mod-windows, .is-fullscreen:not(.colorful-frame) {
--labeled-nav-top-margin: 0;
}

.labeled-nav {
--labeled-nav-top-margin: var(--header-height);
/* refactor this using a new variable for border above labeled nav
  in different conditions e.g. OSes and colorful frame */
}

.is-translucent .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
background-color: transparent;
}

.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .workspace-tabs.mod-top-left-space .workspace-tab-header-container {
padding-left: 0;
}

.mod-macos .mod-left-split .mod-top .workspace-tab-header-container:before, .mod-macos.is-hidden-frameless:not(.is-fullscreen) .mod-left-split .mod-top .workspace-tab-header-container:before {
-webkit-app-region: drag;
position: absolute;
width: calc(100% - var(--divider-width));
height: calc(var(--header-height) - var(--tab-outline-width));
border-bottom: 0 solid var(--tab-outline-color);
}

.mod-macos.is-hidden-frameless:not(.is-fullscreen) .workspace-ribbon.mod-left:not(.is-collapsed) {
border: none;
--tab-outline-width: 0px;
}

.labeled-nav:is(:not(.is-hidden-frameless), .mod-macos:not(.hider-ribbon), .colorful-frame.is-hidden-frameless:not(.is-fullscreen)) .mod-left-split .mod-top .workspace-tab-header-container:before {
border-bottom: var(--tab-outline-width) solid var(--tab-outline-color);
}

.labeled-nav:is(:not(.is-hidden-frameless), .mod-macos:not(.hider-ribbon), .colorful-frame.is-hidden-frameless:not(.is-fullscreen)) .workspace-ribbon.mod-left:not(.is-collapsed) {
--tab-outline-width: 1px;
}

.labeled-nav:not(.is-hidden-frameless) .mod-left-split .mod-top .workspace-tab-header-container:before {
position: absolute;
top: 0;
content: " ";
}

.hider-ribbon.mod-macos.is-hidden-frameless:not(.is-fullscreen):not(.is-popout-window) .mod-left-split:not(.is-sidedock-collapsed) .workspace-tabs.mod-top-left-space .workspace-tab-header-container {
padding-left: 0;
}

.labeled-nav:not(.is-grabbing):not(.is-fullscreen).is-hidden-frameless .mod-top .workspace-tab-header-container {
-webkit-app-region: no-drag;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-spacer {
display: none;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-inner-title {
display: inline-block;
font-weight: 550;
font-size: var(--font-ui-smaller);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container {
position: relative;
flex-direction: column-reverse !important;
height: auto;
width: 100%;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container .sidebar-toggle-button.mod-left {
position: absolute;
justify-content: flex-end;
padding-right: var(--size-4-2);
top: 0;
right: 0;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-header-container-inner {
padding-top: var(--size-4-2);
margin-top: var(--labeled-nav-top-margin);
flex-direction: column !important;
background-color: hsl(var(--background-secondary-hsl));
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container .workspace-tab-container-inner {
flex-grow: 1;
gap: 0;
padding: var(--size-4-2) var(--size-4-3);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header {
--icon-color: var(--text-faint);
--tab-text-color: var(--text-faint);
--tab-text-color-focused: var(--text-faint);
padding: 0;
margin-bottom: 2px;
border: none;
height: auto;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header.is-active:not(:hover) {
background-color: transparent;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header:hover {
opacity: 1;
--tab-text-color-active: var(--text-muted);
--tab-text-color-focused: var(--text-muted);
--tab-text-color-focused-active: var(--text-muted);
--tab-text-color-focused-active-current: var(--text-muted);
--icon-color: var(--text-muted);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header.is-active {
opacity: 1;
--tab-text-color-active: var(--text-normal);
--tab-text-color-focused: var(--text-normal);
--tab-text-color-focused-active: var(--text-normal);
--tab-text-color-focused-active-current: var(--text-normal);
--icon-color: var(--text-normal);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header .workspace-tab-header-inner {
gap: var(--size-2-3);
padding: var(--size-4-1) var(--size-4-2);
margin: 0 var(--size-4-2);
box-shadow: none;
border: none;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header:is(.has-active-menu, .is-active):hover {
background-color: transparent;
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header:hover .workspace-tab-header-inner {
background-color: var(--nav-item-background-hover);
}

.labeled-nav .mod-left-split .mod-top .workspace-tab-header-container {
border: none;
padding: 0;
}

.labeled-nav .nav-buttons-container {
justify-self: flex-start;
}`,
    },
    "tab-float": {
      general: `body:is(:not(.css-settings-manager), .tab-float) {
--tab-radius: var(--size-2-3);
}

body:is(:not(.css-settings-manager), .tab-float) .is-sidedock-collapsed + .mod-root .sidebar-toggle-button.mod-left {
margin-right: var(--size-4-2);
}

body:is(:not(.css-settings-manager), .tab-float) .mod-root .workspace-tab-header {
padding-block: 0 !important;
transition: var(--animation);
transition-property: color, width;
--tab-curve: 0;
--tab-radius-active: var(--radius-m);
}

body:is(:not(.css-settings-manager), .tab-float) .mod-root .workspace-tab-header.is-active {
box-shadow: var(--tab-active-shadow);
}

body:is(:not(.css-settings-manager), .tab-float) .mod-root .workspace-tab-header-container {
translate: calc(-1 * var(--size-4-1));
}

body:is(:not(.css-settings-manager), .tab-float) .mod-root .workspace-tab-header-container-inner {
margin-top: var(--size-4-1);
padding-bottom: var(--size-4-1);
padding-left: 5px;
}

body:is(:not(.css-settings-manager), .tab-float) .mod-root .workspace-tab-header-container-inner-close-button {
padding: var(--size-2-1);
}

body:is(:not(.css-settings-manager), .tab-float) .mod-root .workspace-tab-header-container-inner-close-button:hover {
background-color: var(--frame-background-color);
}

body:is(:not(.css-settings-manager), .tab-float) .mod-root .workspace-tabs:not(.mod-stacked):not(.mod-active) .workspace-tab-header.is-active {
--tab-background-active: hsla(var(--background-primary-hsl), 0.5);
}

body:is(:not(.css-settings-manager), .tab-float) .workspace-tab-header-new-tab {
padding-top: var(--size-4-1);
}`,
      light: `body:is(:not(.css-settings-manager), .tab-float).theme-light {
--tab-active-shadow: var(--shadow-s);
}`,
    },
    "tab-slide-up": {
      general: `body.tab-slide-up:not(.is-mobile) .workspace-split:not(.is-sidedock-collapsed) .workspace-tabs:not(.mod-stacked) .workspace-leaf-content:not([data-type=undefined]):not([data-type=empty]) :is(.view-content, .nav-files-container, .tag-container) {
animation: op var(--animation-slow), slide-up var(--animation-slow);
}`,
    },
    "tab-show-close-all": {
      general: `body.tab-show-close-all .mod-root .workspace-tab-header .workspace-tab-header-inner-close-button {
display: none;
}

body.tab-show-close-all .mod-root .workspace-tab-header:hover .workspace-tab-header-inner-close-button {
display: inherit;
}`,
    },
    "tab-show-close-part": {
      general: `body.tab-show-close-part .mod-root .workspace-tab-header:not(.is-active) .workspace-tab-header-inner-close-button {
display: none;
}

body.tab-show-close-part .mod-root .workspace-tab-header:not(.is-active):hover .workspace-tab-header-inner-close-button {
display: inherit;
}`,
    },
    "tab-title-bar-text-small": {
      general: `body.tab-title-bar-text-small .view-header {
--file-header-font-size: calc(var(--font-ui-smaller) - var(--size-2-1));
}`,
    },
    "tab-title-bar-text-hidden": {
      general: `body.tab-title-bar-text-hidden .workspace-leaf-content .view-header-title-container {
opacity: 0;
transition: var(--animation);
transition-delay: var(--animation-delay);
}

body.tab-title-bar-text-hidden .workspace-leaf-content .view-header-title-container:hover {
opacity: 1;
transition-delay: 0s;
}`,
    },
    "status-bar-style-float": {
      general: `body.status-bar-style-float {
--status-bar-radius: var(--size-2-3);
--status-bar-border-width: 1px;
}

body.status-bar-style-float .status-bar {
padding: var(--size-4-1);
bottom: var(--size-4-1);
right: var(--size-4-1);
box-shadow: var(--shadow-s);
}

body.status-bar-style-center:is(.status-bar-default, .status-bar-hidden) .status-bar {
left: 50%;
transform: translateX(-50%);
}

body.status-bar-scroll .status-bar {
transform: translateX(calc(100% - var(--size-4-2)));
transition-delay: var(--animation-delay);
right: 0;
padding: var(--size-4-1);
}

body.status-bar-scroll .status-bar:hover {
transform: translateX(0);
transition-delay: 0s;
}`,
    },
    "status-bar-hidden": {
      general: `.status-bar-hidden .status-bar {
opacity: 0;
transition-delay: var(--animation-delay);
}

.status-bar-hidden .status-bar:hover {
transition-delay: 0s;
opacity: 1;
}`,
    },
    "status-bar-scroll": {
      general: `body.status-bar-style-float.status-bar-scroll .status-bar {
transform: translateX(calc(100% - var(--size-4-2)));
transition-delay: var(--animation-delay);
right: 0;
padding: var(--size-4-1);
}

body.status-bar-style-float.status-bar-scroll .status-bar:hover {
transform: translateX(0);
transition-delay: 0s;
}`,
    },
    "status-bar-style-center": {
      general: `body.status-bar-style-float.status-bar-style-center:is(.status-bar-default, .status-bar-hidden) .status-bar {
left: 50%;
transform: translateX(-50%);
}`,
    },
    "message-tooltip-hide-arrow": {
      general: `body.message-tooltip-hide-arrow .tooltip-arrow {
display: none;
}`,
    },
    "message-tooltip-hide": {
      general: `body.message-tooltip-hide .tooltip {
display: none;
}

body.message-tooltip-hide-arrow .tooltip-arrow {
display: none;
}`,
    },
    "message-modify": {
      general: `body.message-modify {
--background-modifier-message: var(--setting-message-bg, var(--accent-active-bg)) !important;
}

body.message-modify :is(.tooltip, .notice) {
color: var(--setting-message-fg, var(--text-on-accent));
}

body.message-modify .notice-cta {
color: var(--text-on-accent);
text-decoration: underline;
}

body.message-modify .notice.is-loading::before {
background-color: var(--accent-inactive);
}`,
    },
    "scrollbar-hide": {
      general: `body.scrollbar-hide .setting-item:is([data-id*=scrollbar-hover], [data-id=scrollbar-movein-animation], [data-id=scrollbar-gutter]) {
display: none;
}

body.scrollbar-hide .setting-item:is([data-id*=scrollbar-hover], [data-id=scrollbar-movein-animation], [data-id=scrollbar-gutter]) + .style-settings-container {
display: none;
}

body.scrollbar-hide :not([style="overflow-x: auto;"])::-webkit-scrollbar {
display: none !important;
}`,
    },
    "scrollbar-enable": {
      general: `body.scrollbar-enable:not(.is-mobile) .mod-settings :is(.vertical-tab-content, .vertical-tab-header) {
scrollbar-gutter: stable;
}

body.scrollbar-enable:not(.is-mobile).scrollbar-hover-accent {
--setting-scrollbar-hover: hsla(var(--color-accent-hsl), 40%);
}

body.scrollbar-enable:not(.is-mobile).scrollbar-hover-expand ::-webkit-scrollbar-thumb:hover, body.scrollbar-enable:not(.is-mobile).scrollbar-hover-expand ::-webkit-scrollbar-thumb:active {
border-width: var(--size-2-1) !important;
}

body.scrollbar-enable:not(.is-mobile) ::-webkit-scrollbar {
width: 12px !important;
height: 12px !important;
background-color: transparent !important;
}

body.scrollbar-enable:not(.is-mobile) ::-webkit-scrollbar-track {
background-color: transparent !important;
box-shadow: none !important;
}

body.scrollbar-enable:not(.is-mobile) ::-webkit-scrollbar-thumb {
background-clip: padding-box;
border-radius: 8px !important;
border: 2.8px solid transparent !important;
background-color: var(--scrollbar-color) !important;
}

body.scrollbar-enable:not(.is-mobile) ::-webkit-scrollbar-thumb:hover {
--scrollbar-color: var(--setting-scrollbar-hover);
}

body.scrollbar-enable:not(.is-mobile) ::-webkit-scrollbar-thumb:active {
--scrollbar-color: hsla(var(--color-accent-hsl), 64%);
}

body.scrollbar-enable:not(.is-mobile) :is(.vertical-tab-header, .vertical-tab-content, .nav-files-container, .workspace-leaf-content .view-content, .search-result-container, .git-view-body, .suggestion-container .suggestion, .prompt-results, .community-modal-search-results-wrapper, .community-modal-info, .modal:not(.mod-settings, .mod-community-theme, .mod-community-plugin), .tag-container, .backlink-pane, .markdown-source-view .cm-scroller, .markdown-preview-view, .pdf-thumbnail-view, .pdf-viewer-container, .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container, .markdown-embed-content .markdown-rendered, pre code) {
transition: var(--scrollbar-transition, none);
}

body.scrollbar-enable:not(.is-mobile) :is(.vertical-tab-header, .vertical-tab-content, .nav-files-container, .workspace-leaf-content .view-content, .search-result-container, .git-view-body, .suggestion-container .suggestion, .prompt-results, .community-modal-search-results-wrapper, .community-modal-info, .modal:not(.mod-settings, .mod-community-theme, .mod-community-plugin), .tag-container, .backlink-pane, .markdown-source-view .cm-scroller, .markdown-preview-view, .pdf-thumbnail-view, .pdf-viewer-container, .workspace .mod-root .workspace-tabs.mod-stacked .workspace-tab-container, .markdown-embed-content .markdown-rendered, pre code):hover {
--scrollbar-color: hsla(var(--color-accent-hsl), 24%);
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable {
--scrollbar-transition: --scrollbar-color var(--animation);
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable :is(textarea:not(.excalidraw-wysiwyg), pre) {
color: transparent;
transition: var(--animation);
transition-property: color, border-color;
-webkit-text-fill-color: var(--text-normal);
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable :is(textarea:not(.excalidraw-wysiwyg), pre):hover {
color: hsla(var(--color-accent-hsl), 24%);
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable :is(textarea:not(.excalidraw-wysiwyg), pre) :not(code) {
-webkit-text-fill-color: initial;
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable :is(textarea:not(.excalidraw-wysiwyg), pre)::-webkit-scrollbar-thumb {
box-shadow: 0 0 0 10px inset;
border-width: 3.2px;
background-clip: content-box;
background-color: transparent !important;
}`,
    },
    "scrollbar-hover-accent": {
      general: `body.scrollbar-enable:not(.is-mobile).scrollbar-hover-accent {
--setting-scrollbar-hover: hsla(var(--color-accent-hsl), 40%);
}`,
    },
    "scrollbar-hover-expand": {
      general: `body.scrollbar-enable:not(.is-mobile).scrollbar-hover-expand ::-webkit-scrollbar-thumb:hover, body.scrollbar-enable:not(.is-mobile).scrollbar-hover-expand ::-webkit-scrollbar-thumb:active {
border-width: var(--size-2-1) !important;
}`,
    },
    "scrollbar-movein-animation-enable": {
      general: `body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable {
--scrollbar-transition: --scrollbar-color var(--animation);
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable :is(textarea:not(.excalidraw-wysiwyg), pre) {
color: transparent;
transition: var(--animation);
transition-property: color, border-color;
-webkit-text-fill-color: var(--text-normal);
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable :is(textarea:not(.excalidraw-wysiwyg), pre):hover {
color: hsla(var(--color-accent-hsl), 24%);
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable :is(textarea:not(.excalidraw-wysiwyg), pre) :not(code) {
-webkit-text-fill-color: initial;
}

body.scrollbar-enable:not(.is-mobile).scrollbar-movein-animation-enable :is(textarea:not(.excalidraw-wysiwyg), pre)::-webkit-scrollbar-thumb {
box-shadow: 0 0 0 10px inset;
border-width: 3.2px;
background-clip: content-box;
background-color: transparent !important;
}`,
    },
    "editor-bg-plain": {
      general: `body.editor-bg-plain .setting-item[data-id=setting-editor-bg-grid-spacing] {
display: none;
}

body.editor-bg-plain .setting-item[data-id=setting-editor-bg-grid-spacing] + .style-settings-container {
display: none;
}`,
    },
    "editor-bg-grid-dots": {
      general: `.editor-bg-grid-dots :is(.markdown-reading-view .markdown-rendered, .markdown-source-view.mod-cm6 .cm-scroller) {
background-image: radial-gradient(circle, var(--grid-dots-color) 1px, var(--bg-editor) 1px);
}`,
    },
    "editor-bg-grid-line": {
      general: `.editor-bg-grid-line :is(.markdown-reading-view .markdown-rendered, .markdown-source-view.mod-cm6 .cm-scroller) {
background-image: linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px);
}`,
    },
    "editor-custom-bottom-spacing": {
      general: `.editor-custom-bottom-spacing :is(.markdown-source-view.mod-cm6 .cm-contentContainer > .cm-content, .markdown-reading-view > div > .markdown-preview-sizer) {
padding-bottom: var(--setting-editor-bottom-spacing, 40vh) !important;
}`,
    },
    "line-indicator-enable": {
      general: `body.line-indicator-enable {
--indicator-color: var(--accent-active);
}

body.line-indicator-enable .markdown-preview-sizer > div:not(.search-highlight) {
position: relative;
}

body.line-indicator-enable :is(.markdown-reading-view .markdown-preview-sizer > div:not(:has(:is(.collapse-indicator, hr, pre, blockquote, table, p img, audio, video))), .markdown-source-view .cm-line:not(.HyperMD-header, .HyperMD-quote, .HyperMD-list-line-1:has(.collapse-indicator)))::after {
content: "";
width: var(--size-4-1);
position: absolute;
inset-block: var(--size-4-1);
left: calc(var(--size-4-3) * -1);
border-radius: var(--radius-s);
background-color: var(--indicator-color);
opacity: 0;
will-change: opacity;
}

body.line-indicator-enable :is(.markdown-reading-view .markdown-preview-sizer > div:not(:has(:is(.collapse-indicator, hr, pre, blockquote, table, p img, audio, video))), .markdown-source-view .cm-line:not(.HyperMD-header, .HyperMD-quote, .HyperMD-list-line-1:has(.collapse-indicator))):hover::after {
opacity: 1;
}`,
    },
    "line-indicator-full": {
      general: `body.line-indicator-full .cm-line:not(.HyperMD-codeblock):hover {
background-color: hsl(var(--active-line), 50%);
}

body.line-indicator-full .cm-line.HyperMD-codeblock:hover {
--code-background: hsl(var(--active-line), 70%);
}`,
    },
    "line-active-left": {
      general: `body.line-active-left {
--indicator-color: var(--accent-inactive) !important;
}

body.line-active-left .markdown-source-view .cm-line.cm-active:not(.HyperMD-header, .HyperMD-quote, .HyperMD-list-line-1:has(.collapse-indicator))::after {
content: "";
width: var(--size-4-1);
position: absolute;
inset-block: var(--size-4-1);
left: calc(var(--size-4-3) * -1);
background-color: var(--accent-active-bg) !important;
border-radius: var(--size-2-1);
}

body.line-active-left .cm-active.HyperMD-header::before {
opacity: 1 !important;
}

body.line-active-left .cm-active.HyperMD-header-1::before {
color: var(--h1-color) !important;
}

body.line-active-left .cm-active.HyperMD-header-2::before {
color: var(--h2-color) !important;
}

body.line-active-left .cm-active.HyperMD-header-3::before {
color: var(--h3-color) !important;
}

body.line-active-left .cm-active.HyperMD-header-4::before {
color: var(--h4-color) !important;
}

body.line-active-left .cm-active.HyperMD-header-5::before {
color: var(--h5-color) !important;
}

body.line-active-left .cm-active.HyperMD-header-6::before {
color: var(--h6-color) !important;
}`,
    },
    "line-active-enable": {
      general: `body:is(:not(.css-settings-manager), .line-active-enable) .workspace-leaf.mod-active .markdown-source-view .cm-scroller .cm-line.cm-active {
background-color: hsl(var(--active-line));
}

body:is(:not(.css-settings-manager), .line-active-enable) .table-cell-wrapper .cm-line.cm-active {
background-color: transparent !important;
}

body:is(:not(.css-settings-manager), .line-active-enable) .workspace-leaf .markdown-source-view .cm-scroller .cm-line:is(.cm-active, :hover):not(.HyperMD-quote) {
border-radius: var(--radius-s);
}`,
    },
    "text-highlight-all-round": {
      general: `.text-highlight-all-round :is(.markdown-source-view .cm-highlight, .markdown-rendered mark) {
-webkit-box-decoration-break: clone;
}`,
    },
    "font-maple-interface": {
      general: `.font-maple-interface {
--font-interface-theme: "maplemono";
}`,
    },
    "font-maple-text": {
      general: `.font-maple-text {
--font-text-theme: "maplemono";
}`,
    },
    "font-maple": {
      general: `body:is(:not(.css-settings-manager), .font-maple) {
--font-monospace-theme: "maplemono";
}

.font-maple-text {
--font-text-theme: "maplemono";
}

.font-maple-interface {
--font-interface-theme: "maplemono";
}`,
    },
    "font-latex-text": {
      general: `.font-latex-text mjx-container mjx-utext {
font-family: var(--font-text) !important;
}`,
    },
    "link-hover-expand": {
      general: `body.link-hover-expand .cm-url {
--link-external-decoration: none;
--link-external-decoration-hover: none;
}

body.link-hover-expand .cm-link {
--link-external-decoration-hover: none;
}

body.link-hover-expand .cm-hmd-internal-link > .cm-underline {
--link-decoration-hover: none;
}

body.link-hover-expand :is(a.external-link:not(.is-unresolved), :is(.cm-link, .cm-url) > .cm-underline) {
font-size: var(--link-text-size);
box-shadow: inset 0 calc(-1 * var(--size-2-1)) 0 var(--link-external-color-underline);
text-decoration: none !important;
transition: var(--animation);
transition-property: box-shadow, color;
color: var(--link-external-color) !important;
}

body.link-hover-expand :is(a.external-link:not(.is-unresolved), :is(.cm-link, .cm-url) > .cm-underline):hover, body.link-hover-expand :is(a.external-link:not(.is-unresolved), :is(.cm-link, .cm-url) > .cm-underline):focus {
box-shadow: inset 0 calc(-1 * var(--font-text-size) * var(--line-height-normal)) 0 var(--link-external-color-underline);
--link-color: var(--setting-link-internal-color-hover, var(--text-on-accent));
--link-external-color: var(--setting-link-external-color-hover, var(--text-on-accent));
}

body.link-hover-expand :is(a.external-link:not(.is-unresolved), :is(.cm-link, .cm-url) > .cm-underline) code {
padding-inline-end: var(--size-4-1) !important;
background-color: transparent;
}

body.link-hover-expand :is(a.external-link:not(.is-unresolved), :is(.cm-link, .cm-url) > .cm-underline):hover code {
color: inherit;
}

body.link-hover-expand :is(a.internal-link:not(.is-unresolved), .cm-hmd-internal-link > .cm-underline) {
font-size: var(--link-text-size);
box-shadow: inset 0 calc(-1 * var(--size-2-1)) 0 var(--link-color-underline);
text-decoration: none !important;
transition: var(--animation);
transition-property: box-shadow, color;
color: var(--link-color) !important;
}

body.link-hover-expand :is(a.internal-link:not(.is-unresolved), .cm-hmd-internal-link > .cm-underline):hover, body.link-hover-expand :is(a.internal-link:not(.is-unresolved), .cm-hmd-internal-link > .cm-underline):focus {
box-shadow: inset 0 calc(-1 * var(--font-text-size) * var(--line-height-normal)) 0 var(--link-color-underline);
--link-color: var(--setting-link-internal-color-hover, var(--text-on-accent));
--link-external-color: var(--setting-link-external-color-hover, var(--text-on-accent));
}

body.link-hover-expand :is(.cm-hmd-internal-link, .cm-link) {
transition: color var(--animation);
}`,
    },
    "link-icon": {
      general: `.link-icon :is(:is(.markdown-source-view, .markdown-preview-view) a.internal-link:not(.is-unresolved), .cm-hmd-internal-link > .cm-underline) {
padding-inline-end: var(--size-2-1);
}

.link-icon :is(:is(.markdown-source-view, .markdown-preview-view) a.internal-link:not(.is-unresolved), .cm-hmd-internal-link > .cm-underline)::before {
content: "";
display: inline-block;
transform: translateY(var(--size-2-1));
margin-inline: var(--size-2-1);
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z'/><path d='M14 2v4a2 2 0 0 0 2 2h4M10 9H8m8 4H8m8 4H8'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: inherit;
width: calc(var(--link-text-size) * 0.9);
height: calc(var(--link-text-size) * 0.9);
}

.link-icon .markdown-preview-view :is(.el-pre a.internal-link:not(.is-unresolved), a.external-link:has(> code))::before {
content: none !important;
}

.link-icon:not(.link-click-to-edit-in-live-preview) :is(:is(.markdown-source-view, .markdown-preview-view) a.external-link:not(.is-resolved), a.external-link:not(.is-resolved) code, :is(.cm-link:not(.cm-hmd-footnote, .cm-escape), .cm-url) > .cm-underline):not(.cm-escape + .cm-link .cm-underline) {
padding-inline-end: var(--size-2-1);
}

.link-icon:not(.link-click-to-edit-in-live-preview) :is(:is(.markdown-source-view, .markdown-preview-view) a.external-link:not(.is-resolved), a.external-link:not(.is-resolved) code, :is(.cm-link:not(.cm-hmd-footnote, .cm-escape), .cm-url) > .cm-underline):not(.cm-escape + .cm-link .cm-underline)::before {
content: "";
display: inline-block;
transform: translateY(var(--size-2-1));
margin-inline: var(--size-2-1);
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/><path d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: inherit;
width: calc(var(--link-text-size) * 0.85);
height: calc(var(--link-text-size) * 0.85);
}

.link-icon:not(.link-click-to-edit-in-live-preview) a.external-link {
background-image: none;
background-size: unset;
padding-right: 0;
}

.link-icon:not(.link-click-to-edit-in-live-preview) span.external-link {
display: none;
}`,
    },
    "link-heading": {
      general: `.link-heading :is(.HyperMD-header-1, .markdown-rendered h1) {
--link-color-rgb: var(--h1-color-rgb);
--link-color-underline: var(--h1-color);
--link-external-color-rgb: var(--h1-color-rgb);
--link-external-color-underline: var(--h1-color);
--link-text-size: var(--h1-size);
}

.link-heading :is(.HyperMD-header-2, .markdown-rendered h2) {
--link-color-rgb: var(--h2-color-rgb);
--link-color-underline: var(--h2-color);
--link-external-color-rgb: var(--h2-color-rgb);
--link-external-color-underline: var(--h2-color);
--link-text-size: var(--h2-size);
}

.link-heading :is(.HyperMD-header-3, .markdown-rendered h3) {
--link-color-rgb: var(--h3-color-rgb);
--link-color-underline: var(--h3-color);
--link-external-color-rgb: var(--h3-color-rgb);
--link-external-color-underline: var(--h3-color);
--link-text-size: var(--h3-size);
}

.link-heading :is(.HyperMD-header-4, .markdown-rendered h4) {
--link-color-rgb: var(--h4-color-rgb);
--link-color-underline: var(--h4-color);
--link-external-color-rgb: var(--h4-color-rgb);
--link-external-color-underline: var(--h4-color);
--link-text-size: var(--h4-size);
}

.link-heading :is(.HyperMD-header-5, .markdown-rendered h5) {
--link-color-rgb: var(--h5-color-rgb);
--link-color-underline: var(--h5-color);
--link-external-color-rgb: var(--h5-color-rgb);
--link-external-color-underline: var(--h5-color);
--link-text-size: var(--h5-size);
}

.link-heading :is(.HyperMD-header-6, .markdown-rendered h6) {
--link-color-rgb: var(--h6-color-rgb);
--link-color-underline: var(--h6-color);
--link-external-color-rgb: var(--h6-color-rgb);
--link-external-color-underline: var(--h6-color);
--link-text-size: var(--h6-size);
}`,
    },
    "link-click-to-edit-in-live-preview": {
      general: `.link-click-to-edit-in-live-preview :is(.cm-url, .cm-link, .cm-hmd-internal-link) .cm-underline {
pointer-events: none;
}`,
    },
    "heading-color-base": {
      general: `body.heading-color-base {
--h1-color: var(--text-normal);
--h2-color: var(--text-normal);
--h3-color: var(--text-normal);
--h4-color: var(--text-normal);
--h5-color: var(--text-normal);
--h6-color: var(--text-normal);
}

.heading-h1-block.heading-color-base {
--h1-color-bg: var(--color-base-30);
}

.heading-h2-block.heading-color-base {
--h2-color-bg: var(--color-base-30);
}

.heading-h3-block.heading-color-base {
--h3-color-bg: var(--color-base-30);
}

.heading-h4-block.heading-color-base {
--h4-color-bg: var(--color-base-30);
}

.heading-h5-block.heading-color-base {
--h5-color-bg: var(--color-base-30);
}

.heading-h6-block.heading-color-base {
--h6-color-bg: var(--color-base-30);
}`,
    },
    "heading-color-accent": {
      general: `body.heading-color-accent {
--h1-color: var(--accent-active);
--h2-color: var(--accent-active);
--h3-color: var(--accent-active);
--h4-color: var(--accent-active);
--h5-color: var(--accent-active);
--h6-color: var(--accent-active);
}

.heading-h1-block.heading-color-accent {
--h1-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-h2-block.heading-color-accent {
--h2-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-h3-block.heading-color-accent {
--h3-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-h4-block.heading-color-accent {
--h4-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-h5-block.heading-color-accent {
--h5-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-h6-block.heading-color-accent {
--h6-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}`,
    },
    "heading-color-colorful": {
      general: `body:is(:not(.css-settings-manager), .heading-color-colorful) {
--h1-color-rgb: var(
    --setting-h1-color,
    var(--color-red-rgb)
  );
--h1-color: rgb(var(--h1-color-rgb));
--h2-color-rgb: var(
    --setting-h2-color,
    var(--color-orange-rgb)
  );
--h2-color: rgb(var(--h2-color-rgb));
--h3-color-rgb: var(
    --setting-h3-color,
    var(--color-green-rgb)
  );
--h3-color: rgb(var(--h3-color-rgb));
--h4-color-rgb: var(
    --setting-h4-color,
    var(--color-blue-rgb)
  );
--h4-color: rgb(var(--h4-color-rgb));
--h5-color-rgb: var(
    --setting-h5-color,
    var(--color-purple-rgb)
  );
--h5-color: rgb(var(--h5-color-rgb));
--h6-color-rgb: var(
    --setting-h6-color,
    var(--color-cyan-rgb)
  );
--h6-color: rgb(var(--h6-color-rgb));
}

.heading-h1-block.heading-color-colorful {
--h1-color-bg: rgba(var(--h1-color-rgb), 0.15);
}

.heading-h2-block.heading-color-colorful {
--h2-color-bg: rgba(var(--h2-color-rgb), 0.15);
}

.heading-h3-block.heading-color-colorful {
--h3-color-bg: rgba(var(--h3-color-rgb), 0.15);
}

.heading-h4-block.heading-color-colorful {
--h4-color-bg: rgba(var(--h4-color-rgb), 0.15);
}

.heading-h5-block.heading-color-colorful {
--h5-color-bg: rgba(var(--h5-color-rgb), 0.15);
}

.heading-h6-block.heading-color-colorful {
--h6-color-bg: rgba(var(--h6-color-rgb), 0.15);
}`,
    },
    "heading-indicator-fixed": {
      general: `body:is(:not(.css-settings-manager), :not(.heading-indicator-disable)).heading-indicator-fixed :is(.markdown-source-view.mod-cm6.is-live-preview .HyperMD-header, div.markdown-reading-view > div > div > div > :is(h1, h2, h3, h4, h5, h6)) {
--h-indicator-color: var(--text-faint);
}

body:is(:not(.css-settings-manager), :not(.heading-indicator-disable)).heading-indicator-fixed :is(.markdown-source-view.mod-cm6.is-live-preview .HyperMD-header, div.markdown-reading-view > div > div > div > :is(h1, h2, h3, h4, h5, h6)):hover {
--h-indicator-color: inherit;
}

body:is(:not(.css-settings-manager), :not(.heading-indicator-disable)).heading-indicator-fixed :is(.markdown-source-view.mod-cm6.is-live-preview .HyperMD-header:has(> .is-collapsed), div.markdown-reading-view > div > div > div.is-collpased > :is(h1, h2, h3, h4, h5, h6)) {
--h-indicator-color: inherit;
--h-indicator-decoration: underline;
}`,
    },
    "heading-h1-underline": {
      general: `.heading-h1-underline :is(.HyperMD-header-1 .cm-header:not(.cm-formatting), .markdown-rendered h1) {
text-decoration: underline var(--size-2-1);
}`,
    },
    "heading-h1-full-line": {
      general: `.heading-h1-full-line :is(.HyperMD-header-1, .markdown-rendered h1) {
position: relative;
}

.heading-h1-full-line :is(.HyperMD-header-1, .markdown-rendered h1)::after {
content: "";
position: absolute;
bottom: var(--size-2-1);
height: var(--size-2-1);
inset-inline: 0;
background: var(--heading-h1-full-line-bg, currentColor);
border-radius: var(--size-2-1);
}

.heading-h1-full-line-left {
--heading-h1-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}

.heading-h1-full-line-right {
--heading-h1-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h1-block": {
      general: `.heading-color-base {
--h1-color-bg: var(--color-base-30);
}

.heading-color-accent {
--h1-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-color-colorful {
--h1-color-bg: rgba(var(--h1-color-rgb), 0.15);
}

.heading-h1-block-contrast {
--h1-color-bg: rgba(var(--h1-color-rgb));
}

.heading-h1-block-contrast :is(.HyperMD-header-1 .cm-header:not(.cm-formatting-header), .markdown-rendered h1) {
color: var(--text-on-accent);
caret-color: currentColor;
}

.heading-h1-block :is(.HyperMD-header-1 .cm-header:not(.cm-formatting-header), .markdown-rendered h1) {
background-color: var(--h1-color-bg);
padding: var(--size-4-1) 0.6rem;
border-radius: var(--size-2-3);
-webkit-box-decoration-break: clone;
}

.heading-h1-block :is(.HyperMD-header-1 .cm-header:not(.cm-formatting-header), .markdown-rendered h1)::selection {
color: var(--h1-color);
background-color: var(--background-secondary);
}

.heading-h1-block .markdown-rendered h1 {
width: fit-content;
line-height: 1.2;
--heading-spacing: calc(var(--h2-line-height) - 1.2 * var(--h1-size));
}

.heading-h1-block:not(.heading-indicator-disable) .markdown-rendered h1::before {
top: -0.3rem;
line-height: var(--h1-line-height);
}`,
    },
    "heading-h1-full-line-left": {
      general: `.heading-h1-full-line.heading-h1-full-line-left {
--heading-h1-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h1-full-line-right": {
      general: `.heading-h1-full-line.heading-h1-full-line-right {
--heading-h1-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h1-block-contrast": {
      general: `.heading-h1-block.heading-h1-block-contrast {
--h1-color-bg: rgba(var(--h1-color-rgb));
}

.heading-h1-block.heading-h1-block-contrast :is(.HyperMD-header-1 .cm-header:not(.cm-formatting-header), .markdown-rendered h1) {
color: var(--text-on-accent);
caret-color: currentColor;
}`,
    },
    "heading-h1-center": {
      general: `body.heading-h1-center :is(.HyperMD-header-1, h1) {
text-align: center;
}`,
    },
    "heading-h1-italic": {
      general: `body.heading-h1-italic {
--h1-style: italic;
}`,
    },
    "heading-h1-caps": {
      general: `body.heading-h1-caps {
--h1-variant: small-caps;
}`,
    },
    "heading-h2-underline": {
      general: `.heading-h2-underline :is(.HyperMD-header-2 .cm-header:not(.cm-formatting), .markdown-rendered h2) {
text-decoration: underline var(--size-2-1);
}`,
    },
    "heading-h2-full-line": {
      general: `.heading-h2-full-line :is(.HyperMD-header-2, .markdown-rendered h2) {
position: relative;
}

.heading-h2-full-line :is(.HyperMD-header-2, .markdown-rendered h2)::after {
content: "";
position: absolute;
bottom: var(--size-2-1);
height: var(--size-2-1);
inset-inline: 0;
background: var(--heading-h2-full-line-bg, currentColor);
border-radius: var(--size-2-1);
}

.heading-h2-full-line-left {
--heading-h2-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}

.heading-h2-full-line-right {
--heading-h2-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h2-block": {
      general: `.heading-color-base {
--h2-color-bg: var(--color-base-30);
}

.heading-color-accent {
--h2-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-color-colorful {
--h2-color-bg: rgba(var(--h2-color-rgb), 0.15);
}

.heading-h2-block-contrast {
--h2-color-bg: rgba(var(--h2-color-rgb));
}

.heading-h2-block-contrast :is(.HyperMD-header-2 .cm-header:not(.cm-formatting-header), .markdown-rendered h2) {
color: var(--text-on-accent);
caret-color: currentColor;
}

.heading-h2-block :is(.HyperMD-header-2 .cm-header:not(.cm-formatting-header), .markdown-rendered h2) {
background-color: var(--h2-color-bg);
padding: var(--size-4-1) 0.6rem;
border-radius: var(--size-2-3);
-webkit-box-decoration-break: clone;
}

.heading-h2-block :is(.HyperMD-header-2 .cm-header:not(.cm-formatting-header), .markdown-rendered h2)::selection {
color: var(--h2-color);
background-color: var(--background-secondary);
}

.heading-h2-block .markdown-rendered h2 {
width: fit-content;
line-height: 1.2;
--heading-spacing: calc(var(--h2-line-height) - 1.2 * var(--h2-size));
}

.heading-h2-block:not(.heading-indicator-disable) .markdown-rendered h2::before {
top: -0.3rem;
line-height: var(--h2-line-height);
}`,
    },
    "heading-h2-full-line-left": {
      general: `.heading-h2-full-line.heading-h2-full-line-left {
--heading-h2-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h2-full-line-right": {
      general: `.heading-h2-full-line.heading-h2-full-line-right {
--heading-h2-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h2-block-contrast": {
      general: `.heading-h2-block.heading-h2-block-contrast {
--h2-color-bg: rgba(var(--h2-color-rgb));
}

.heading-h2-block.heading-h2-block-contrast :is(.HyperMD-header-2 .cm-header:not(.cm-formatting-header), .markdown-rendered h2) {
color: var(--text-on-accent);
caret-color: currentColor;
}`,
    },
    "heading-h2-center": {
      general: `body.heading-h2-center :is(.HyperMD-header-2, h2) {
text-align: center;
}`,
    },
    "heading-h2-italic": {
      general: `body.heading-h2-italic {
--h2-style: italic;
}`,
    },
    "heading-h2-caps": {
      general: `body.heading-h2-caps {
--h2-variant: small-caps;
}`,
    },
    "heading-h3-underline": {
      general: `.heading-h3-underline :is(.HyperMD-header-3 .cm-header:not(.cm-formatting), .markdown-rendered h3) {
text-decoration: underline var(--size-2-1);
}`,
    },
    "heading-h3-full-line": {
      general: `.heading-h3-full-line :is(.HyperMD-header-3, .markdown-rendered h3) {
position: relative;
}

.heading-h3-full-line :is(.HyperMD-header-3, .markdown-rendered h3)::after {
content: "";
position: absolute;
bottom: var(--size-2-1);
height: var(--size-2-1);
inset-inline: 0;
background: var(--heading-h3-full-line-bg, currentColor);
border-radius: var(--size-2-1);
}

.heading-h3-full-line-left {
--heading-h3-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}

.heading-h3-full-line-right {
--heading-h3-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h3-block": {
      general: `.heading-color-base {
--h3-color-bg: var(--color-base-30);
}

.heading-color-accent {
--h3-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-color-colorful {
--h3-color-bg: rgba(var(--h3-color-rgb), 0.15);
}

.heading-h3-block-contrast {
--h3-color-bg: rgba(var(--h3-color-rgb));
}

.heading-h3-block-contrast :is(.HyperMD-header-3 .cm-header:not(.cm-formatting-header), .markdown-rendered h3) {
color: var(--text-on-accent);
caret-color: currentColor;
}

.heading-h3-block :is(.HyperMD-header-3 .cm-header:not(.cm-formatting-header), .markdown-rendered h3) {
background-color: var(--h3-color-bg);
padding: var(--size-4-1) 0.6rem;
border-radius: var(--size-2-3);
-webkit-box-decoration-break: clone;
}

.heading-h3-block :is(.HyperMD-header-3 .cm-header:not(.cm-formatting-header), .markdown-rendered h3)::selection {
color: var(--h3-color);
background-color: var(--background-secondary);
}

.heading-h3-block .markdown-rendered h3 {
width: fit-content;
line-height: 1.2;
--heading-spacing: calc(var(--h2-line-height) - 1.2 * var(--h3-size));
}

.heading-h3-block:not(.heading-indicator-disable) .markdown-rendered h3::before {
top: -0.3rem;
line-height: var(--h3-line-height);
}`,
    },
    "heading-h3-full-line-left": {
      general: `.heading-h3-full-line.heading-h3-full-line-left {
--heading-h3-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h3-full-line-right": {
      general: `.heading-h3-full-line.heading-h3-full-line-right {
--heading-h3-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h3-block-contrast": {
      general: `.heading-h3-block.heading-h3-block-contrast {
--h3-color-bg: rgba(var(--h3-color-rgb));
}

.heading-h3-block.heading-h3-block-contrast :is(.HyperMD-header-3 .cm-header:not(.cm-formatting-header), .markdown-rendered h3) {
color: var(--text-on-accent);
caret-color: currentColor;
}`,
    },
    "heading-h3-center": {
      general: `body.heading-h3-center :is(.HyperMD-header-3, h3) {
text-align: center;
}`,
    },
    "heading-h3-italic": {
      general: `body.heading-h3-italic {
--h3-style: italic;
}`,
    },
    "heading-h3-caps": {
      general: `body.heading-h3-caps {
--h3-variant: small-caps;
}`,
    },
    "heading-h4-underline": {
      general: `.heading-h4-underline :is(.HyperMD-header-4 .cm-header:not(.cm-formatting), .markdown-rendered h4) {
text-decoration: underline var(--size-2-1);
}`,
    },
    "heading-h4-full-line": {
      general: `.heading-h4-full-line :is(.HyperMD-header-4, .markdown-rendered h4) {
position: relative;
}

.heading-h4-full-line :is(.HyperMD-header-4, .markdown-rendered h4)::after {
content: "";
position: absolute;
bottom: var(--size-2-1);
height: var(--size-2-1);
inset-inline: 0;
background: var(--heading-h4-full-line-bg, currentColor);
border-radius: var(--size-2-1);
}

.heading-h4-full-line-left {
--heading-h4-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}

.heading-h4-full-line-right {
--heading-h4-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h4-block": {
      general: `.heading-color-base {
--h4-color-bg: var(--color-base-30);
}

.heading-color-accent {
--h4-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-color-colorful {
--h4-color-bg: rgba(var(--h4-color-rgb), 0.15);
}

.heading-h4-block-contrast {
--h4-color-bg: rgba(var(--h4-color-rgb));
}

.heading-h4-block-contrast :is(.HyperMD-header-4 .cm-header:not(.cm-formatting-header), .markdown-rendered h4) {
color: var(--text-on-accent);
caret-color: currentColor;
}

.heading-h4-block :is(.HyperMD-header-4 .cm-header:not(.cm-formatting-header), .markdown-rendered h4) {
background-color: var(--h4-color-bg);
padding: var(--size-4-1) 0.6rem;
border-radius: var(--size-2-3);
-webkit-box-decoration-break: clone;
}

.heading-h4-block :is(.HyperMD-header-4 .cm-header:not(.cm-formatting-header), .markdown-rendered h4)::selection {
color: var(--h4-color);
background-color: var(--background-secondary);
}

.heading-h4-block .markdown-rendered h4 {
width: fit-content;
line-height: 1.2;
--heading-spacing: calc(var(--h2-line-height) - 1.2 * var(--h4-size));
}

.heading-h4-block:not(.heading-indicator-disable) .markdown-rendered h4::before {
top: -0.3rem;
line-height: var(--h4-line-height);
}`,
    },
    "heading-h4-full-line-left": {
      general: `.heading-h4-full-line.heading-h4-full-line-left {
--heading-h4-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h4-full-line-right": {
      general: `.heading-h4-full-line.heading-h4-full-line-right {
--heading-h4-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h4-block-contrast": {
      general: `.heading-h4-block.heading-h4-block-contrast {
--h4-color-bg: rgba(var(--h4-color-rgb));
}

.heading-h4-block.heading-h4-block-contrast :is(.HyperMD-header-4 .cm-header:not(.cm-formatting-header), .markdown-rendered h4) {
color: var(--text-on-accent);
caret-color: currentColor;
}`,
    },
    "heading-h4-center": {
      general: `body.heading-h4-center :is(.HyperMD-header-4, h4) {
text-align: center;
}`,
    },
    "heading-h4-italic": {
      general: `body.heading-h4-italic {
--h4-style: italic;
}`,
    },
    "heading-h4-caps": {
      general: `body.heading-h4-caps {
--h4-variant: small-caps;
}`,
    },
    "heading-h5-underline": {
      general: `.heading-h5-underline :is(.HyperMD-header-5 .cm-header:not(.cm-formatting), .markdown-rendered h5) {
text-decoration: underline var(--size-2-1);
}`,
    },
    "heading-h5-full-line": {
      general: `.heading-h5-full-line :is(.HyperMD-header-5, .markdown-rendered h5) {
position: relative;
}

.heading-h5-full-line :is(.HyperMD-header-5, .markdown-rendered h5)::after {
content: "";
position: absolute;
bottom: var(--size-2-1);
height: var(--size-2-1);
inset-inline: 0;
background: var(--heading-h5-full-line-bg, currentColor);
border-radius: var(--size-2-1);
}

.heading-h5-full-line-left {
--heading-h5-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}

.heading-h5-full-line-right {
--heading-h5-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h5-block": {
      general: `.heading-color-base {
--h5-color-bg: var(--color-base-30);
}

.heading-color-accent {
--h5-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-color-colorful {
--h5-color-bg: rgba(var(--h5-color-rgb), 0.15);
}

.heading-h5-block-contrast {
--h5-color-bg: rgba(var(--h5-color-rgb));
}

.heading-h5-block-contrast :is(.HyperMD-header-5 .cm-header:not(.cm-formatting-header), .markdown-rendered h5) {
color: var(--text-on-accent);
caret-color: currentColor;
}

.heading-h5-block :is(.HyperMD-header-5 .cm-header:not(.cm-formatting-header), .markdown-rendered h5) {
background-color: var(--h5-color-bg);
padding: var(--size-4-1) 0.6rem;
border-radius: var(--size-2-3);
-webkit-box-decoration-break: clone;
}

.heading-h5-block :is(.HyperMD-header-5 .cm-header:not(.cm-formatting-header), .markdown-rendered h5)::selection {
color: var(--h5-color);
background-color: var(--background-secondary);
}

.heading-h5-block .markdown-rendered h5 {
width: fit-content;
line-height: 1.2;
--heading-spacing: calc(var(--h2-line-height) - 1.2 * var(--h5-size));
}

.heading-h5-block:not(.heading-indicator-disable) .markdown-rendered h5::before {
top: -0.3rem;
line-height: var(--h5-line-height);
}`,
    },
    "heading-h5-full-line-left": {
      general: `.heading-h5-full-line.heading-h5-full-line-left {
--heading-h5-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h5-full-line-right": {
      general: `.heading-h5-full-line.heading-h5-full-line-right {
--heading-h5-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h5-block-contrast": {
      general: `.heading-h5-block.heading-h5-block-contrast {
--h5-color-bg: rgba(var(--h5-color-rgb));
}

.heading-h5-block.heading-h5-block-contrast :is(.HyperMD-header-5 .cm-header:not(.cm-formatting-header), .markdown-rendered h5) {
color: var(--text-on-accent);
caret-color: currentColor;
}`,
    },
    "heading-h5-center": {
      general: `body.heading-h5-center :is(.HyperMD-header-5, h5) {
text-align: center;
}`,
    },
    "heading-h5-italic": {
      general: `body.heading-h5-italic {
--h5-style: italic;
}`,
    },
    "heading-h5-caps": {
      general: `body.heading-h5-caps {
--h5-variant: small-caps;
}`,
    },
    "heading-h6-underline": {
      general: `.heading-h6-underline :is(.HyperMD-header-6 .cm-header:not(.cm-formatting), .markdown-rendered h6) {
text-decoration: underline var(--size-2-1);
}`,
    },
    "heading-h6-full-line": {
      general: `.heading-h6-full-line :is(.HyperMD-header-6, .markdown-rendered h6) {
position: relative;
}

.heading-h6-full-line :is(.HyperMD-header-6, .markdown-rendered h6)::after {
content: "";
position: absolute;
bottom: var(--size-2-1);
height: var(--size-2-1);
inset-inline: 0;
background: var(--heading-h6-full-line-bg, currentColor);
border-radius: var(--size-2-1);
}

.heading-h6-full-line-left {
--heading-h6-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}

.heading-h6-full-line-right {
--heading-h6-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h6-block": {
      general: `.heading-color-base {
--h6-color-bg: var(--color-base-30);
}

.heading-color-accent {
--h6-color-bg: hsla(
    var(--theme-accent-active-h),
    var(--theme-accent-active-s),
    var(--theme-accent-active-l),
    0.15
  );
}

.heading-color-colorful {
--h6-color-bg: rgba(var(--h6-color-rgb), 0.15);
}

.heading-h6-block-contrast {
--h6-color-bg: rgba(var(--h6-color-rgb));
}

.heading-h6-block-contrast :is(.HyperMD-header-6 .cm-header:not(.cm-formatting-header), .markdown-rendered h6) {
color: var(--text-on-accent);
caret-color: currentColor;
}

.heading-h6-block :is(.HyperMD-header-6 .cm-header:not(.cm-formatting-header), .markdown-rendered h6) {
background-color: var(--h6-color-bg);
padding: var(--size-4-1) 0.6rem;
border-radius: var(--size-2-3);
-webkit-box-decoration-break: clone;
}

.heading-h6-block :is(.HyperMD-header-6 .cm-header:not(.cm-formatting-header), .markdown-rendered h6)::selection {
color: var(--h6-color);
background-color: var(--background-secondary);
}

.heading-h6-block .markdown-rendered h6 {
width: fit-content;
line-height: 1.2;
--heading-spacing: calc(var(--h2-line-height) - 1.2 * var(--h6-size));
}

.heading-h6-block:not(.heading-indicator-disable) .markdown-rendered h6::before {
top: -0.3rem;
line-height: var(--h6-line-height);
}`,
    },
    "heading-h6-full-line-left": {
      general: `.heading-h6-full-line.heading-h6-full-line-left {
--heading-h6-full-line-bg: linear-gradient(to right, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h6-full-line-right": {
      general: `.heading-h6-full-line.heading-h6-full-line-right {
--heading-h6-full-line-bg: linear-gradient(to left, currentColor 10%, transparent 90%);
}`,
    },
    "heading-h6-block-contrast": {
      general: `.heading-h6-block.heading-h6-block-contrast {
--h6-color-bg: rgba(var(--h6-color-rgb));
}

.heading-h6-block.heading-h6-block-contrast :is(.HyperMD-header-6 .cm-header:not(.cm-formatting-header), .markdown-rendered h6) {
color: var(--text-on-accent);
caret-color: currentColor;
}`,
    },
    "heading-h6-center": {
      general: `body.heading-h6-center :is(.HyperMD-header-6, h6) {
text-align: center;
}`,
    },
    "heading-h6-italic": {
      general: `body.heading-h6-italic {
--h6-style: italic;
}`,
    },
    "heading-h6-caps": {
      general: `body.heading-h6-caps {
--h6-variant: small-caps;
}`,
    },
    "hr-enable": {
      general: `.hr-enable :is(.markdown-source-view.mod-cm6, .markdown-rendered) hr {
overflow: initial;
border-width: 0;
position: relative;
height: var(--size-4-1);
background-image: linear-gradient(to right, transparent 0%, hsla(var(--color-accent-hsl), 40%) 16%, hsla(var(--color-accent-hsl), 90%) 44%, transparent 44%, transparent 56%, hsla(var(--color-accent-hsl), 90%) 56%, hsla(var(--color-accent-hsl), 40%) 84%, transparent 100%);
}

.hr-enable :is(.markdown-source-view.mod-cm6, .markdown-rendered) hr::after {
content: var(--setting-hr-icon, "⭐");
display: inline-block;
font-family: var(--font-monospace);
font-size: var(--font-ui-small);
position: absolute;
text-align: center;
width: var(--input-height);
height: var(--input-height);
line-height: var(--input-height);
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
color: var(--accent-active);
background: var(--background-primary-alt);
border-radius: 50%;
}`,
    },
    "table-full": {
      general: `body:is(:not(.css-settings-manager), .table-full) :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) {
--table-white-space: break-all;
width: 100%;
}

body:is(:not(.css-settings-manager), .table-full) :is(.markdown-source-view.mod-cm6 .cm-table-widget .table-wrapper, .markdown-rendered table) .table-editor {
width: 100%;
}`,
    },
    "table-remove-line-before": {
      general: `.table-remove-line-before .cm-line:has(+ .cm-embed-block.cm-table-widget.markdown-rendered) {
display: none;
}`,
    },
    "table-style-minimal": {
      general: `body.table-style-minimal .setting-item[data-id=table-round] {
display: none;
}

body.table-style-minimal .setting-item[data-id=table-round] + .style-settings-container {
display: none;
}

.table-style-minimal {
--table-header-background: transparent;
--table-border-color: transparent;
--table-header-border-color: var(--color-base-100);
--table-header-border-width: 3px;
--table-selection-border-radius: 0;
--table-row-last-border-width: var(--table-header-border-width);
}

.table-style-minimal table th {
border-bottom: var(--color-base-100) solid 2px;
border-inline: 0;
}

.table-style-minimal table tr:last-child > td {
border-bottom-color: var(--table-header-border-color);
}`,
    },
    "table-style-colorful": {
      general: `.table-style-colorful {
--table-background: var(--background-primary-alt);
--table-header-background: var(--setting-table-header-text, var(--accent-active-bg));
--table-row-alt-background: var(--bg-editor);
--table-row-alt-background-hover: var(--bg-editor);
--table-column-alt-background: inherit;
--table-column-alt-background-hover: inherit;
}

.table-style-colorful :is(.is-live-preview, .markdown-rendered) {
--table-header-color: var(--setting-table-header-bg, var(--text-on-accent));
}

.table-style-colorful th .cm-s-obsidian {
color: var(--text-normal);
}

.table-style-colorful .cm-html-embed .edit-block-button {
--background-modifier-hover: var(--background-secondary);
}`,
    },
    "table-round": {
      general: `body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) table {
border-collapse: initial;
border-spacing: 0;
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) :is(th, td):not(:first-child) {
border-left: 0;
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) tbody td {
border-top: 0;
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) thead tr {
background-color: transparent;
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) thead tr th {
background-color: var(--table-header-background) !important;
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) :is(th:first-child:not(:has(:is(.table-col-drag-handle, .table-row-drag-handle):hover)), th:first-child:not(:has(:is(.table-col-drag-handle, .table-row-drag-handle):hover)) .table-cell-wrapper) {
border-start-start-radius: var(--radius-m);
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) :is(th:last-child:not(:has(.table-col-drag-handle:hover)), th:last-child:not(:has(.table-col-drag-handle:hover)) .table-cell-wrapper) {
border-start-end-radius: var(--radius-m);
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) tr:last-child :is(td:first-child:not(:has(.table-row-drag-handle:hover)), td:first-child .table-cell-wrapper) {
border-end-start-radius: var(--radius-m);
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) tr:last-child :is(td:last-child, td:last-child .table-cell-wrapper) {
border-end-end-radius: var(--radius-m);
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) .table-wrapper:has(.table-row-btn:hover) tr:last-child td {
border-radius: 0 !important;
}

body:is(:not(.css-settings-manager), .table-round:not(.table-style-minimal)) .table-wrapper:has(.table-col-btn:hover) :is(tr:last-child td:last-child, th:last-child, th:last-child .table-cell-wrapper) {
border-radius: 0;
}`,
    },
    "embed-border-hidden": {
      general: `body.embed-border-hidden {
--embed-border-start: none;
--embed-background: hsl(var(--background-primary-alt-hsl), 0.4);
}`,
    },
    "embed-title-right-top": {
      general: `body.scrollbar-gutter-reserve.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]) .markdown-embed-heading .markdown-preview-section > div:nth-child(2) {
right: var(--size-4-3);
}

body.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]) .obsidian-metatable {
display: none;
}

body.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]):not([src*="#^"]) .embed-title:empty + .markdown-embed-content .markdown-preview-section > div:nth-child(3) {
position: absolute;
right: var(--size-4-6);
top: var(--size-4-2);
z-index: 99;
opacity: 0;
transition: var(--animation);
}

body.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]):not([src*="#^"]) .embed-title:empty + .markdown-embed-content .markdown-preview-section > div:nth-child(3) * {
font-size: 1rem;
cursor: pointer;
line-height: 1rem;
}

body.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]):not([src*="#^"]) .embed-title:empty + .markdown-embed-content .markdown-preview-section > div:nth-child(3) *::after {
content: none;
}

body.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]) .markdown-embed-title {
opacity: 0;
position: absolute;
z-index: 99;
width: fit-content;
right: 28px;
left: unset;
font-size: 1rem;
top: var(--size-4-1);
line-height: 28px;
height: 28px;
padding: 0 var(--size-4-2);
transition: var(--animation);
cursor: pointer;
}

body.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]):hover .embed-title:empty + .markdown-embed-content .markdown-preview-section > div:nth-child(3) {
opacity: 1;
}

body.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]):hover :is(.markdown-embed-title, .markdown-embed-link, .file-embed-link:hover svg) {
opacity: 1;
color: var(--text-normal);
}

body.embed-title-right-top .internal-embed.is-loaded:not([alt="#"]) :is(.markdown-embed, .file-embed) .markdown-preview-view {
padding: calc(var(--font-text-size) * 1.5);
padding-bottom: calc(var(--font-text-size) * 1.2);
}`,
    },
    "image-alt": {
      general: `.image-alt .image-embed[alt] {
padding: var(--size-4-1) 0;
}

.image-alt .image-embed[alt]::after {
display: block;
text-align: center;
}

.image-alt .image-embed[alt]:not([alt$=".png"], [alt$=".jpg"], [alt$=".jpeg"], [alt$=".svg"], [alt$=".webp"], [alt$=".gif"], [alt$=".tiff"], [alt$=".bmp"], [alt$=".tiff"])::after {
content: attr(alt);
font-size: var(--font-smaller);
color: var(--text-faint);
}

.image-alt .view-content img:not(.emoji) {
display: block;
margin-right: auto;
margin-left: auto;
}`,
    },
    "image-zoom": {
      general: `body.image-zoom:not(.is-mobile) .workspace-leaf-content[data-type=markdown] :is(.image-embed:not(.canvas-node-content), img[referrerpolicy=no-referrer], .cm-content > img) {
cursor: zoom-in;
}

body.image-zoom:not(.is-mobile) .markdown-preview-view .image-embed:not(.canvas-node-content):active img, body.image-zoom:not(.is-mobile) .markdown-preview-view img[referrerpolicy=no-referrer]:active {
position: fixed;
z-index: 1000;
cursor: zoom-out;
inset: 0;
background-color: var(--background-primary);
width: 100%;
height: 100%;
max-height: unset;
object-fit: contain;
}

body.image-zoom:not(.is-mobile) .markdown-source-view .image-embed:not(.canvas-node-content):active, body.image-zoom:not(.is-mobile) .markdown-source-view .cm-content > img:active {
position: fixed;
z-index: 1000;
cursor: zoom-out;
inset: var(--header-height) 0 0;
background-color: var(--background-primary);
}

body.image-zoom:not(.is-mobile) .markdown-source-view .image-embed:not(.canvas-node-content):active {
display: flex;
justify-content: center;
}

body.image-zoom:not(.is-mobile) .markdown-source-view .image-embed:not(.canvas-node-content):active img {
background-color: transparent;
width: 100%;
height: auto;
max-height: unset;
object-fit: contain;
}

body.image-zoom:not(.is-mobile) .markdown-source-view .cm-content > img:active {
width: 100%;
height: calc(100% - var(--header-height));
max-height: unset;
object-fit: contain;
}`,
    },
    "image-dark-hover": {
      dark: `body.image-dark-hover img {
filter: brightness(0.7);
transition: filter var(--animation);
}

body.image-dark-hover img:hover {
filter: brightness(0.85);
}`,
    },
    "quote-italic": {
      general: `.quote-italic {
--blockquote-font-style: italic;
}`,
    },
    "quote-mark": {
      general: `.quote-mark blockquote {
padding-inline-start: calc(var(--indent-unit) * var(--indent-size));
padding-block: calc(var(--indent-unit) * var(--indent-size) / 4) !important;
}

.quote-mark blockquote::before {
content: "“";
position: absolute;
font-family: Source Code Pro;
font-size: calc(var(--font-text-size) * 3);
line-height: 0.9;
color: var(--text-muted);
left: calc(var(--indent-unit) * 0.3);
}

.quote-mark blockquote::after {
content: none !important;
}`,
    },
    "quote-border": {
      general: `.quote-border .markdown-rendered blockquote {
border: 1px solid var(--background-modifier-border);
transition: border-color var(--animation);
box-shadow: none;
}

.quote-border .markdown-rendered blockquote:hover {
border-color: var(--background-modifier-border-hover);
}

.quote-border .markdown-rendered blockquote:active {
border-color: var(--background-modifier-border-focus);
}

.quote-border .markdown-rendered blockquote blockquote {
margin: var(--block-outline-width);
}`,
    },
    "quote-shadow": {
      general: `.quote-shadow .markdown-rendered blockquote {
box-shadow: var(--shadow-s);
}`,
    },
    "list-enable": {
      general: `body:is(:not(.css-settings-manager), .list-enable) {
--list-marker-color: var(--setting-list-marker, var(--accent-active));
--list-marker-color-alt: var(--setting-list-marker-alt, var(--list-marker-color));
--list-marker-color-alt-render: transparent;
--checkbox-color: var(--accent-active);
--checkbox-marker-color: var(--text-on-accent);
--checkbox-border-color: var(--setting-list-checkbox-color, var(--accent-inactive));
--checkbox-border-color-hover: var(--setting-list-checkbox-color-hover, var(--accent-active));
--list-bullet-size: calc(var(--font-text-size) / 3 + var(--size-2-1));
}

body:is(:not(.css-settings-manager), .list-enable) .cm-formatting-list {
padding-inline-start: var(--size-4-1);
}

body:is(:not(.css-settings-manager), .list-enable) .cm-formatting-list, body:is(:not(.css-settings-manager), .list-enable) li::marker {
font-family: var(--font-monospace);
}

body:is(:not(.css-settings-manager), .list-enable) .HyperMD-list-line-nobullet > .cm-hmd-list-indent {
margin-inline-end: var(--size-4-1);
}

body:is(:not(.css-settings-manager), .list-enable) :is(.markdown-source-view, .markdown-preview-view) .task-list-item-checkbox {
border-width: var(--size-2-1);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-source-view .task-list-item-checkbox {
--checkbox-margin-inline-start: var(--size-4-2);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-preview-view .task-list-item-checkbox {
margin-inline-start: calc(var(--checkbox-size) * -1.3);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-source-view.mod-cm6 .cm-indent::before {
transform: translateX(-0.4rem);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-source-view.mod-cm6 .HyperMD-list-line .collapse-indicator {
--cursor: pointer;
transform: translateX(-0.15rem) !important;
}

body:is(:not(.css-settings-manager), .list-enable) li .list-collapse-indicator {
margin-inline-start: 0 !important;
padding-inline-end: 1.2rem !important;
transform: translateX(-2.25rem);
}

body:is(:not(.css-settings-manager), .list-enable) ol li .list-collapse-indicator {
transform: translateX(-3rem);
}

body:is(:not(.css-settings-manager), .list-enable) .contains-task-list .list-collapse-indicator {
transform: translateX(-2.4rem);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-rendered ul > li {
margin-inline-start: calc(var(--font-text-size) * 2 + 0.25rem);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-rendered div > ul:is(.has-list-bullet, .contains-task-list) {
margin-inline-start: calc(var(--size-4-3) * -1);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-rendered ol {
padding-left: calc(var(--font-text-size) - 0.1rem);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-rendered ol > li {
margin-inline-start: calc(var(--font-text-size) + 0.25rem);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-rendered ol > li.task-list-item > .task-list-item-checkbox {
margin-inline-start: calc(var(--size-2-1) * -1);
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-rendered ol li > ol {
padding-left: calc(var(--font-text-size));
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-rendered ol li > ol::before {
left: calc(var(--font-text-size) * -1.5);
}

body:is(:not(.css-settings-manager), .list-enable) :is(.markdown-rendered, div) > ul {
--list-indent: 0;
}

body:is(:not(.css-settings-manager), .list-enable) .HyperMD-list-line-2 .list-bullet {
--list-marker-color: transparent;
--list-bullet-border: var(--setting-list-marker, var(--accent-active)) var(--size-2-1) solid;
--list-bullet-size: calc(calc(var(--font-text-size) / 3 + var(--size-2-1)) - var(--size-2-1));
}

body:is(:not(.css-settings-manager), .list-enable) .HyperMD-list-line-3 .list-bullet {
--list-bullet-radius: 0;
--list-marker-color: var(--list-marker-color-alt);
--list-bullet-size: calc(calc(var(--font-text-size) / 3 + var(--size-2-1)) * 0.95);
transform: rotate(45deg);
}

body:is(:not(.css-settings-manager), .list-enable) .HyperMD-list-line-4 .list-bullet {
--list-marker-color: transparent;
--list-bullet-border: var(--list-marker-color-alt) var(--size-2-1) solid;
--list-bullet-size: calc(calc(var(--font-text-size) / 3 + var(--size-2-1)) * 0.9 - var(--size-2-1));
--list-bullet-radius: 0;
transform: rotate(45deg);
}

body:is(:not(.css-settings-manager), .list-enable) ul.has-list-bullet > li > ul > li {
--list-marker-color: var(--list-marker-color-alt-render);
--list-bullet-border: var(--setting-list-marker, var(--accent-active)) var(--size-2-1) solid;
--list-bullet-size: calc(calc(var(--font-text-size) / 3 + var(--size-2-1)) - var(--size-2-1));
}

body:is(:not(.css-settings-manager), .list-enable) ul.has-list-bullet > li > ul > li > ul > li {
--list-bullet-size: calc(calc(var(--font-text-size) / 3 + var(--size-2-1)) * 0.5);
--list-bullet-radius: 0;
--list-marker-color: var(--list-marker-color-alt);
--deg: 45deg;
}

body:is(:not(.css-settings-manager), .list-enable) ul.has-list-bullet > li > ul > li > ul > li .list-bullet {
transform: rotate(var(--deg));
}

body:is(:not(.css-settings-manager), .list-enable) ul.has-list-bullet > li > ul > li > ul > li > ul > li {
--list-bullet-size: calc(calc(var(--font-text-size) / 3 + var(--size-2-1)) * 0.9 - var(--size-2-1));
--list-marker-color: var(--list-marker-color-alt-render);
}

body:is(:not(.css-settings-manager), .list-enable) ul.has-list-bullet > li > ul > li > ul > li > ul > li ul > li {
--list-bullet-radius: var(--radius-s);
--list-marker-color: var(--setting-list-marker, var(--accent-active));
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-source-view .callout ul > li > ul > li {
--list-marker-color: var(--setting-list-marker, var(--accent-active));
}

body:is(:not(.css-settings-manager), .list-enable) .markdown-source-view .callout .task-list-item-checkbox {
vertical-align: middle;
margin-inline-start: calc(var(--checkbox-size) * -1.3);
}

.list-bullet-thread-style {
--list-threading-width: max(0.1rem, var(--size-2-1));
--list-threading-color: var(--setting-list-guide-color, var(--accent-inactive));
}

.list-bullet-thread-style .list-bullet {
transform: none !important;
}

.list-bullet-thread-style .list-bullet::after {
--list-bullet-radius: 50%;
--list-bullet-border: 0;
--list-bullet-size: calc(var(--font-text-size) / 3 + var(--size-2-1));
--list-marker-color: var(--setting-list-marker, var(--accent-active-bg));
}

.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-2, .HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-2.cm-active, ~ .HyperMD-list-line-2 ~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 0 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-3.cm-active, ~ .HyperMD-list-line-3 ~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 1 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-4.cm-active, ~ .HyperMD-list-line-4 ~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 2 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-5.cm-active, ~ .HyperMD-list-line-5 ~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 3 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-6.cm-active, ~ .HyperMD-list-line-6 ~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 4 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-7.cm-active, ~ .HyperMD-list-line-7 ~ :is(.HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 5 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-8).cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-8.cm-active)::after, .list-bullet-thread-style .HyperMD-list-line-8:not(:has(~ .HyperMD-list-line-8 ~ .HyperMD-list-line.cm-active)):is(.cm-active) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 6 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-2, .HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-2, .HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-2.cm-active, ~ .HyperMD-list-line-2 ~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-3.cm-active, ~ .HyperMD-list-line-3 ~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-4.cm-active, ~ .HyperMD-list-line-4 ~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-5.cm-active, ~ .HyperMD-list-line-5 ~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-6.cm-active, ~ .HyperMD-list-line-6 ~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-7.cm-active, ~ .HyperMD-list-line-7 ~ :is(.HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-8.cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-bullet-thread-style .HyperMD-list-line-8:not(:has(~ .HyperMD-list-line-8 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

body.list-enable {
--list-marker-color-alt-render: var(--list-marker-color-alt);
}`,
    },
    "list-bullet-thread-style": {
      general: `.list-enable.list-bullet-thread-style {
--list-threading-width: max(0.1rem, var(--size-2-1));
--list-threading-color: var(--setting-list-guide-color, var(--accent-inactive));
}

.list-enable.list-bullet-thread-style .list-bullet {
transform: none !important;
}

.list-enable.list-bullet-thread-style .list-bullet::after {
--list-bullet-radius: 50%;
--list-bullet-border: 0;
--list-bullet-size: calc(var(--font-text-size) / 3 + var(--size-2-1));
--list-marker-color: var(--setting-list-marker, var(--accent-active-bg));
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-2, .HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-2.cm-active, ~ .HyperMD-list-line-2 ~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 0 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-3.cm-active, ~ .HyperMD-list-line-3 ~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 1 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-4.cm-active, ~ .HyperMD-list-line-4 ~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 2 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-5.cm-active, ~ .HyperMD-list-line-5 ~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 3 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-6.cm-active, ~ .HyperMD-list-line-6 ~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 4 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-7.cm-active, ~ .HyperMD-list-line-7 ~ :is(.HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):is(.cm-active, :has(~ :is(.HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 5 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):has(~ :is(.HyperMD-list-line-8).cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-8.cm-active)::after, .list-enable.list-bullet-thread-style .HyperMD-list-line-8:not(:has(~ .HyperMD-list-line-8 ~ .HyperMD-list-line.cm-active)):is(.cm-active) > .cm-hmd-list-indent::after {
--list-threading-offset: calc(
    0.4rem + 6 * var(--list-indent) + var(--list-threading-width) / 2
  );
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-2, .HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-2, .HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
bottom: 0;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
top: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 1.5);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):has(~ :is(.HyperMD-list-line-8).cm-active)::after:is(.HyperMD-task-line) {
max-height: calc(100% - 1.3em);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-1:not(:has(~ .HyperMD-list-line-1 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-2.cm-active, ~ .HyperMD-list-line-2 ~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-3.cm-active, ~ .HyperMD-list-line-3 ~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-4.cm-active, ~ .HyperMD-list-line-4 ~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-5.cm-active, ~ .HyperMD-list-line-5 ~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-6.cm-active, ~ .HyperMD-list-line-6 ~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-7.cm-active, ~ .HyperMD-list-line-7 ~ :is(.HyperMD-list-line-8).cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)) ~ .HyperMD-list-line:has(~ .HyperMD-list-line-8.cm-active)::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
top: 0;
height: 100%;
width: var(--list-threading-width);
background-color: var(--list-threading-color);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-2:not(:has(~ .HyperMD-list-line-2 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-3, .HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-3:not(:has(~ .HyperMD-list-line-3 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-4, .HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-4:not(:has(~ .HyperMD-list-line-4 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-5, .HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-5:not(:has(~ .HyperMD-list-line-5 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-6, .HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-6:not(:has(~ .HyperMD-list-line-6 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-7, .HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-7:not(:has(~ .HyperMD-list-line-7 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active, :has(~ :is(.HyperMD-list-line-8).cm-active)) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}

.list-enable.list-bullet-thread-style .HyperMD-list-line-8:not(:has(~ .HyperMD-list-line-8 ~ .HyperMD-list-line.cm-active)):not(.HyperMD-task-line):not(:has(.cm-formatting-list-ol)):is(.cm-active) > .cm-hmd-list-indent::after {
content: "";
position: absolute;
left: var(--list-threading-offset);
width: calc(var(--list-indent) - var(--list-threading-width));
top: 0;
border-bottom-left-radius: var(--radius-m);
border-bottom: var(--list-threading-width) solid var(--list-threading-color);
border-left: var(--list-threading-width) solid var(--list-threading-color);
height: calc(var(--line-height-normal) * var(--font-text-size) / 2 + var(--list-bullet-size) / 8);
}`,
    },
    "list-checkbox-decoration-underline": {
      general: `.list-checkbox-decoration-underline {
--checklist-done-decoration: underline;
}`,
    },
    "list-checkbox-decoration-none": {
      general: `.list-checkbox-decoration-none {
--checklist-done-decoration: none;
}`,
    },
    "list-checkbox-gray": {
      general: `.list-checkbox-gray {
--checklist-done-color: var(--text-faint);
}`,
    },
    "list-checkbox-alternative": {
      general: `body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="!"], li[data-task="!"] > input, li[data-task="!"] > p > input):checked {
--checkbox-color: var(--color-orange);
border: none;
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="!"], li[data-task="!"] > input, li[data-task="!"] > p > input):checked::after {
inset: 0 !important;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M7.005 3.1a1 1 0 1 1 1.99 0l-.388 6.35a.61.61 0 0 1-1.214 0zM7 12a1 1 0 1 1 2 0a1 1 0 0 1-2 0'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--background-primary);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="?"], li[data-task="?"] > input, li[data-task="?"] > p > input):checked {
--checkbox-color: var(--color-purple);
border: none;
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="?"], li[data-task="?"] > input, li[data-task="?"] > p > input):checked::after {
inset: 0 !important;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' fill-rule='evenodd' d='M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215c0 1.344-.665 2.288-1.79 2.973c-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712c1.03-.632 1.397-1.135 1.397-2.028c0-.979-.758-1.698-1.926-1.698c-1.009 0-1.71.529-1.938 1.402c-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09c0-.618-.473-1.092-1.095-1.092c-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--background-primary);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="+"], li[data-task="+"] > input, li[data-task="+"] > p > input):checked {
--checkbox-color: var(--color-red);
border: none;
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="+"], li[data-task="+"] > input, li[data-task="+"] > p > input):checked::after {
inset: 0 !important;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' fill-rule='evenodd' d='M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--background-primary);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="*"], li[data-task="*"] > input, li[data-task="*"] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327l4.898.696c.441.062.612.636.282.95l-3.522 3.356l.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-yellow);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=i], li[data-task=i] > input, li[data-task=i] > p > input):checked {
--checkbox-color: var(--color-blue);
border: none;
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=i], li[data-task=i] > input, li[data-task=i] > p > input):checked::after {
inset: 0 !important;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='m9.708 6.075l-3.024.379l-.108.502l.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74c.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325c-.363 0-.494-.255-.402-.704zm.091-2.755a1.32 1.32 0 1 1-2.64 0a1.32 1.32 0 0 1 2.64 0'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--background-primary);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="/"], li[data-task="/"] > input, li[data-task="/"] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-yellow);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=a], li[data-task=a] > input, li[data-task=a] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5m2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86A8.04 8.04 0 0 0 .86 5.387M11.613 1.86a2.5 2.5 0 1 1 3.527 3.527a8.04 8.04 0 0 0-3.527-3.527'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-orange);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=B], li[data-task=B] > input, li[data-task=B] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><g fill='currentColor'><path d='M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A5 5 0 0 0 3 6h10a5 5 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A5 5 0 0 0 8 1a5 5 0 0 0-2.731.811l-.29-.956z'/><path d='M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-purple);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="<"], li[data-task="<"] > input, li[data-task="<"] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M8.5 8.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5a.5.5 0 0 1 1 0'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-base-60);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=">"], li[data-task=">"] > input, li[data-task=">"] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='currentColor' d='M12.089 3.634A2 2 0 0 0 11 5.414L10.999 8H4a2 2 0 0 0-2 2v4l.005.15A2 2 0 0 0 4 16l6.999-.001l.001 2.587A2 2 0 0 0 14.414 20L21 13.414a2 2 0 0 0 0-2.828L14.414 4a2 2 0 0 0-2.18-.434z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-cyan);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=R], li[data-task=R] > input, li[data-task=R] > p > input):checked {
--checkbox-color: var(--color-blue);
border: none;
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=R], li[data-task=R] > input, li[data-task=R] > p > input):checked::after {
inset: 0 !important;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M7 20V4h5.5a4 4 0 0 1 0 9H7m5 0l5 7'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--background-primary);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="-"], li[data-task="-"] > input, li[data-task="-"] > p > input):checked {
--checkbox-color: var(--color-base-60);
border: none;
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task="-"], li[data-task="-"] > input, li[data-task="-"] > p > input):checked::after {
inset: 0 !important;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--background-primary);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) [data-task="-"] {
color: var(--text-faint);
text-decoration: line-through solid var(--text-faint) 1px;
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=I], li[data-task=I] > input, li[data-task=I] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='currentColor' d='M4 11a1 1 0 0 1 .117 1.993L4 13H3a1 1 0 0 1-.117-1.993L3 11zm8-9a1 1 0 0 1 .993.883L13 3v1a1 1 0 0 1-1.993.117L11 4V3a1 1 0 0 1 1-1m9 9a1 1 0 0 1 .117 1.993L21 13h-1a1 1 0 0 1-.117-1.993L20 11zM4.893 4.893a1 1 0 0 1 1.32-.083l.094.083l.7.7a1 1 0 0 1-1.32 1.497l-.094-.083l-.7-.7a1 1 0 0 1 0-1.414m12.8 0a1 1 0 0 1 1.497 1.32l-.083.094l-.7.7a1 1 0 0 1-1.497-1.32l.083-.094zM14 18a1 1 0 0 1 1 1a3 3 0 0 1-6 0a1 1 0 0 1 .883-.993L10 18zM12 6a6 6 0 0 1 3.6 10.8a1 1 0 0 1-.471.192L15 17H9a1 1 0 0 1-.6-.2A6 6 0 0 1 12 6'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-yellow);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=l], li[data-task=l] > input, li[data-task=l] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='currentColor' d='M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-red);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=b], li[data-task=b] > input, li[data-task=b] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-blue);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=n], li[data-task=n] > input, li[data-task=n] > p > input, input[data-task=N], li[data-task=N] > input, li[data-task=N] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-cyan);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=P], li[data-task=P] > input, li[data-task=P] > p > input, input[data-task=p], li[data-task=p] > input, li[data-task=p] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='currentColor' d='M13 3a3 3 0 0 1 2.995 2.824L16 6v4h2a3 3 0 0 1 2.98 2.65l.015.174L21 13l-.02.196l-1.006 5.032c-.381 1.626-1.502 2.796-2.81 2.78L17 21H9a1 1 0 0 1-.993-.883L8 20l.001-9.536a1 1 0 0 1 .5-.865a3 3 0 0 0 1.492-2.397L10 7V6a3 3 0 0 1 3-3m-8 7a1 1 0 0 1 .993.883L6 11v9a1 1 0 0 1-.883.993L5 21H4a2 2 0 0 1-1.995-1.85L2 19v-7a2 2 0 0 1 1.85-1.995L4 10z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-green);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=C], li[data-task=C] > input, li[data-task=C] > p > input, input[data-task=c], li[data-task=c] > input, li[data-task=c] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='currentColor' d='M13 21.008a3 3 0 0 0 2.995-2.823l.005-.177v-4h2a3 3 0 0 0 2.98-2.65l.015-.173l.005-.177l-.02-.196l-1.006-5.032c-.381-1.625-1.502-2.796-2.81-2.78L17 3.008H9a1 1 0 0 0-.993.884L8 4.008l.001 9.536a1 1 0 0 0 .5.866a3 3 0 0 1 1.492 2.396l.007.202v1a3 3 0 0 0 3 3m-8-7a1 1 0 0 0 .993-.883L6 13.008v-9a1 1 0 0 0-.883-.993L5 3.008H4A2 2 0 0 0 2.005 4.86L2 5.01v7a2 2 0 0 0 1.85 1.994l.15.005h1z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-red);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=“], li[data-task=“] > input, li[data-task=“] > p > input, input[data-task='"'], li[data-task='"'] > input, li[data-task='"'] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054q.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054q.094-.558.31-.992q.217-.434.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992a4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-purple);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=W], li[data-task=W] > input, li[data-task=W] > p > input, input[data-task=w], li[data-task=w] > input, li[data-task=w] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='currentColor' d='M17 3a1 1 0 0 1 .993.883L18 4v2.17a3 3 0 1 1 0 5.659V12a6 6 0 0 1-5 5.917V20h3a1 1 0 0 1 .117 1.993L16 22H8a1 1 0 0 1-.117-1.993L8 20h3v-2.083a6 6 0 0 1-4.996-5.692L6 12v-.171a3 3 0 0 1-3.996-2.653L2.001 9l.005-.176A3 3 0 0 1 6.001 6.17L6 4a1 1 0 0 1 1-1zM5 8a1 1 0 1 0 0 2a1 1 0 0 0 0-2m14 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-yellow);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=S], li[data-task=S] > input, li[data-task=S] > p > input):checked {
--checkbox-color: var(--color-green);
border: none;
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=S], li[data-task=S] > input, li[data-task=S] > p > input):checked::after {
inset: 0 !important;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' width='1em' height='1em'><path fill='currentColor' d='M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73z'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--background-primary);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=u], li[data-task=u] > input, li[data-task=u] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='m3 17l6-6l4 4l8-8'/><path d='M14 7h7v7'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-green);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=d], li[data-task=d] > input, li[data-task=d] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><g fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2'><path d='m3 7l6 6l4-4l8 8'/><path d='M21 10v7h-7'/></g></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-red);
width: var(--checkbox-size);
height: var(--checkbox-size);
}

body:is(:not(.css-settings-manager), .list-checkbox-alternative) :is(input[data-task=L], li[data-task=L] > input, li[data-task=L] > p > input):checked {
--checkbox-marker-color: transparent;
border: none;
-webkit-mask: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='currentColor' d='M6.979 3.074a6 6 0 0 1 4.988 1.425l.037.033l.034-.03a6 6 0 0 1 4.733-1.44l.246.036a6 6 0 0 1 3.364 10.008l-.18.185l-.048.041l-7.45 7.379a1 1 0 0 1-1.313.082l-.094-.082l-7.493-7.422A6 6 0 0 1 6.979 3.074'/></svg>") no-repeat;
-webkit-mask-size: 100% 100%;
background-color: currentColor;
color: var(--color-red);
width: var(--checkbox-size);
height: var(--checkbox-size);
}`,
    },
    "code-line-number": {
      general: `.code-line-number .cm-contentContainer {
counter-reset: code-line;
}

.code-line-number .cm-contentContainer .cm-line.HyperMD-codeblock {
padding-left: var(--size-4-12) !important;
}

.code-line-number .cm-contentContainer .cm-line.HyperMD-codeblock:not(.HyperMD-codeblock-begin):not(.HyperMD-codeblock-end)::before {
counter-increment: code-line;
content: counter(code-line);
position: absolute;
text-align: right;
width: var(--size-4-8);
left: 0;
color: var(--accent-active);
opacity: 0.6;
}

.code-line-number .cm-contentContainer .cm-line.HyperMD-codeblock:not(.HyperMD-codeblock-begin):not(.HyperMD-codeblock-end).cm-active::before {
opacity: 1;
}

.code-line-number .cm-contentContainer .cm-line.HyperMD-codeblock-end {
counter-set: code-line;
}`,
    },
    "code-language": {
      general: `body:is(:not(.css-settings-manager), .code-language) pre.language-markup {
--code-lang: "Markup";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-html {
--code-lang: "HTML";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-xml {
--code-lang: "XML";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-svg {
--code-lang: "SVG";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-mathml {
--code-lang: "MathML";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-ssml {
--code-lang: "SSML";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-atom {
--code-lang: "Atom";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-rss {
--code-lang: "RSS";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-css {
--code-lang: "CSS";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-javascript, .language-js) {
--code-lang: "JavaScript";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-typescript, .language-ts) {
--code-lang: "Typescript";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-jsx {
--code-lang: "JSX";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-typescript-jsx, .language-tsx) {
--code-lang: "TypeScript-JSX";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-ada {
--code-lang: "Ada";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-apex {
--code-lang: "Apex";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-applescript {
--code-lang: "AppleScript";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-aql {
--code-lang: "AQL";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-arduino, .language-ino) {
--code-lang: "Arduino";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-armasm, .language-arm-asm) {
--code-lang: "ArmAsm";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-asciidoc, .language-adoc) {
--code-lang: "AsciiDoc";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-aspnet {
--code-lang: "AspNet";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-asm6502 {
--code-lang: "Asm6502";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-autohotkey {
--code-lang: "AutoHotKey";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-awk, .language-gawk) {
--code-lang: "AWK";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-bash, .language-sh, .language-shell) {
--code-lang: "bash";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-basic {
--code-lang: "basic";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-batch {
--code-lang: "batch";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-bibtex {
--code-lang: "bibtex";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-bison {
--code-lang: "Bison";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-c {
--code-lang: "C";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-c\\#, .language-csharp, .language-cs, .language-dotnet) {
--code-lang: "C#";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-c\\+\\+, .language-cpp) {
--code-lang: "C++";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-clojure {
--code-lang: "Clojure";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-cmake {
--code-lang: "CMake";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-cobol {
--code-lang: "COBOL";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-coffeescript, .language-coffee) {
--code-lang: "CoffeeScript";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-csp {
--code-lang: "CSP";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-crystal {
--code-lang: "Crystal";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-csv {
--code-lang: "CSV";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-cue {
--code-lang: "CUE";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-d {
--code-lang: "D";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-dart {
--code-lang: "Dart";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-diff {
--code-lang: "Diff";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-django {
--code-lang: "Django";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-jinja2 {
--code-lang: "Jinja2";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-docker {
--code-lang: "Docker";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-dockerfile {
--code-lang: "Dockerfile";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-ebnf {
--code-lang: "EBNF";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-editorconfig {
--code-lang: "EditorConfig";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-ejs {
--code-lang: "EJS";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-elixir {
--code-lang: "Elixir";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-elm {
--code-lang: "Elm";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-erb {
--code-lang: "ERB";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-excel-formula, .language-xlsx, .language-xls) {
--code-lang: "Excel-Formula";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-f\\#, .language-fsharp) {
--code-lang: "F#";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-flow {
--code-lang: "Flow";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-fortran {
--code-lang: "Fortran";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-gdscript {
--code-lang: "GDScript";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-git {
--code-lang: "Git";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-glsl {
--code-lang: "GLSL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-go {
--code-lang: "Go";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-go-module, .language-go-mod) {
--code-lang: "Go-Module";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-gradle {
--code-lang: "Gradle";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-graphql {
--code-lang: "GraphQL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-groovy {
--code-lang: "Groovy";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-haml {
--code-lang: "HAML";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-handlebars, .language-hbs, .language-mustache) {
--code-lang: "Handlebars";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-haskell, .language-hs) {
--code-lang: "Haskell";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-hcl {
--code-lang: "HCL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-hlsl {
--code-lang: "HLSL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-http {
--code-lang: "HTTP";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-icon {
--code-lang: "Icon";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-icu-message-format {
--code-lang: "ICU-Message-Format";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-gitignore {
--code-lang: "gitignore";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-ini {
--code-lang: "Ini";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-java {
--code-lang: "Java";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-javadoc {
--code-lang: "JavaDoc";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-jq {
--code-lang: "JQ";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-jsdoc {
--code-lang: "JSDoc";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-json {
--code-lang: "JSON";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-json5 {
--code-lang: "JSON5";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-jsonp {
--code-lang: "JSONP";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-julia {
--code-lang: "Julia";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-kotlin, .language-kt, .language-kts) {
--code-lang: "Kotlin";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-latex, .language-tex) {
--code-lang: "Latex";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-less {
--code-lang: "Less";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-liquid {
--code-lang: "Liquid";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-lisp, .language-emacs, .language-elisp, .language-emacs-lisp) {
--code-lang: "Lisp";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-llvm {
--code-lang: "LLVM";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-log {
--code-lang: "Log";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-lua {
--code-lang: "Lua";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-makefile {
--code-lang: "Makefile";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-markdown, .language-md) {
--code-lang: "Markdown";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-matlab {
--code-lang: "MATLAB";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-mermaid {
--code-lang: "Mermaid";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-mongodb {
--code-lang: "MongoDB";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-monkey {
--code-lang: "Monkey";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-neon {
--code-lang: "Neon";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-nginx {
--code-lang: "Nginx";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-nim {
--code-lang: "Nim";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-nix {
--code-lang: "Nix";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-nsis {
--code-lang: "NSIS";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-objectc, .language-objc) {
--code-lang: "ObjectC";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-ocaml {
--code-lang: "OCaml";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-odin {
--code-lang: "odin";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-opencl {
--code-lang: "OpenCL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-pascal {
--code-lang: "Pascal";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-perl {
--code-lang: "Perl";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-php {
--code-lang: "PHP";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-phpdoc {
--code-lang: "PHPDoc";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-powershell {
--code-lang: "PowerShell";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-properties {
--code-lang: "Properties";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-protobuf {
--code-lang: "ProtoBuf";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-pug {
--code-lang: "Pug";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-python, .language-py) {
--code-lang: "Python";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-qml {
--code-lang: "QML";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-r {
--code-lang: "R";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-regex {
--code-lang: "Regex";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-rescript, .language-res) {
--code-lang: "ReScript";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-rip {
--code-lang: "Rip";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-ruby, .language-rb) {
--code-lang: "Ruby";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-rust, .language-rs) {
--code-lang: "Rust";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-sass {
--code-lang: "Sass";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-scss {
--code-lang: "Scss";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-scala {
--code-lang: "Scala";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-solidity {
--code-lang: "Solidity";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-sql {
--code-lang: "SQL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-stylus {
--code-lang: "stylus";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-swift {
--code-lang: "Swift";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-tcl {
--code-lang: "TCL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-toml {
--code-lang: "TOML";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-uri, .language-url) {
--code-lang: "URI";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-unrealscript, .language-uscript, .language-uc) {
--code-lang: "UnrealScript";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-v {
--code-lang: "V";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-vbnet {
--code-lang: "VBNet";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-velocity {
--code-lang: "Velocity";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-vhdl {
--code-lang: "VHDL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-vim {
--code-lang: "Vim";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-visual-basic, .language-vb, .language-vba) {
--code-lang: "Visual-Basic";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-wasm {
--code-lang: "WASM";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-wgsl {
--code-lang: "WGSL";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-wiki {
--code-lang: "WIKI";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-wren {
--code-lang: "Wren";
}

body:is(:not(.css-settings-manager), .code-language) pre:is(.language-yaml, .language-yml) {
--code-lang: "YAML";
}

body:is(:not(.css-settings-manager), .code-language) pre.language-zig {
--code-lang: "Zig";
}

body:is(:not(.css-settings-manager), .code-language) .markdown-rendered {
--code-block-padding: calc(var(--line-height-tight) * var(--code-size))
    calc(var(--line-height-normal) * var(--code-size));
}

body:is(:not(.css-settings-manager), .code-language) .markdown-rendered pre {
padding: var(--code-block-padding);
}

body:is(:not(.css-settings-manager), .code-language) .markdown-rendered pre[class*=language-] .copy-code-button {
padding-block: var(--size-2-1);
opacity: 1;
}

body:is(:not(.css-settings-manager), .code-language) .markdown-rendered pre[class*=language-] .copy-code-button:not([style="color: var(--text-success); display: inline-flex;"]) svg {
display: none;
}

body:is(:not(.css-settings-manager), .code-language) .markdown-rendered pre[class*=language-] .copy-code-button:not([style="color: var(--text-success); display: inline-flex;"])::before {
content: var(--code-lang, "Unkown");
font-family: var(--font-monospace);
color: var(--setting-code-language-color, var(--inline-code));
font-weight: 550;
}`,
    },
    "code-nowrap": {
      general: `.scrollbar-gutter-overlay:not(.code-mac-style-header) .app-container div pre {
padding-bottom: calc(var(--code-size) * var(--line-height-normal) * 0.8) !important;
}

.scrollbar-gutter-overlay pre code {
padding-bottom: var(--size-2-3);
}

.code-nowrap .el-pre {
position: relative;
}

.code-nowrap .el-pre pre {
position: unset;
}

.code-nowrap .el-pre pre code {
word-break: normal;
word-wrap: break-word;
white-space: pre;
}`,
    },
    "code-preview-bg": {
      general: `.code-preview-bg {
--code-bg-s: 50%;
--code-bg-l: 85%;
}

.code-preview-bg .markdown-preview-view .markdown-preview-section .el-pre {
padding: var(--size-4-4) var(--size-4-8);
margin-block: var(--size-4-4);
border-radius: var(--code-radius);
background-image: var(--setting-code-bg-outer, linear-gradient(-30deg, hsl(calc(var(--base-accent-h) + 145), var(--code-bg-s), var(--code-bg-l)), hsl(calc(var(--base-accent-h) + 115), var(--code-bg-s), var(--code-bg-l)), hsl(calc(var(--base-accent-h) + 90), var(--code-bg-s), var(--code-bg-l)), hsl(calc(var(--base-accent-h) + 65), var(--code-bg-s), var(--code-bg-l)), hsl(calc(var(--base-accent-h) + 35), var(--code-bg-s), var(--code-bg-l))));
}

.code-preview-bg .markdown-preview-view .markdown-preview-section .el-pre pre::before {
translate: var(--size-4-8) var(--size-4-4);
}

.code-preview-bg .markdown-preview-view .markdown-preview-section .el-pre pre::after {
top: var(--size-4-4);
inset-inline: var(--size-4-8);
}

.code-preview-bg .markdown-preview-view .markdown-preview-section .el-pre button.copy-code-button {
translate: calc(var(--size-4-8) * -1) var(--size-4-4);
}`,
      dark: `.theme-dark {
--code-bg-s: 20%;
--code-bg-l: 45%;
}`,
    },
    "code-mac-style-header": {
      general: `body.code-mac-style-header .markdown-rendered pre {
--mac-header-height: calc(var(--font-ui-smaller) + var(--size-4-4));
border: none;
padding-top: calc(var(--font-ui-smaller) * 0.5 + var(--mac-header-height));
padding-bottom: calc(var(--font-ui-smaller) * 0.5);
}

body.code-mac-style-header .markdown-rendered pre::after {
content: "";
height: var(--mac-header-height);
background-color: var(--code-mac-style-header-bg);
top: 0;
inset-inline: 0;
position: absolute;
border-top-left-radius: var(--code-radius);
border-top-right-radius: var(--code-radius);
}

body.code-mac-style-header .markdown-rendered pre::before {
content: "";
position: absolute;
width: calc(var(--mac-header-height) * 0.4);
height: calc(var(--mac-header-height) * 0.4);
left: calc(var(--mac-header-height) * 0.4);
top: calc(var(--mac-header-height) / 2);
translate: 0 -50%;
border-radius: 50%;
z-index: 9;
background-color: rgba(255, 94, 92, var(--color-opacity));
box-shadow: calc(var(--mac-header-height) * 0.6) 0 0 0 rgba(255, 187, 78, var(--color-opacity)), calc(var(--mac-header-height) * 1.2) 0 0 0 rgba(81, 188, 0, var(--color-opacity));
}

body.code-mac-style-header .markdown-rendered pre .copy-code-button {
z-index: 10;
color: var(--code-mac-style-header-color);
}

body.code-mac-style-header .markdown-rendered pre .copy-code-button::before {
color: inherit !important;
}

.code-mac-style-header .cm-preview-code-block[class*=cm-lang]:not(.cm-lang-query):not(.cm-lang-base):not(.cm-lang-dataview) .edit-block-button {
color: #ddd;
}`,
    },
    "code-theme": {
      general: `.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .token.script {
color: var(--code-normal);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .token.imports {
color: var(--code-variable);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .token:is(.builtin, .regex, .keyword) {
font-style: italic;
color: var(--code-important);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .token:is(.selector, .inserted, .char, .attr-value) {
color: var(--color-green);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .token:is(.class-name, .maybe-class-name, .color) {
color: var(--code-class);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .token:is(.property-access, .attr-name, .annotation, .key, .entity, .parameter, .url) {
color: var(--code-variable);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .token:is(.comment, .prolog, .doctype, .cdata) {
color: var(--code-comment);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .cm-tag {
color: var(--code-tag);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) :is(.cm-punctuation, .cm-bracket, .cm-hr, .cm-operator) {
color: var(--code-punctuation);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .cm-number {
color: var(--code-value);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) :is(.cm-qualifier, .cm-string:not(.cm-url), .cm-string-2, .cm-meta:not(.cm-hashtag)) {
color: var(--code-string);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) :is(.cm-def, .cm-property, .cm-number + .cm-variable, .cm-attribute, .cm-atom) {
color: var(--code-property);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) :is(.cm-type, .cm-builtin) {
color: var(--code-keyword);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .cm-type {
font-weight: 550;
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .cm-keyword {
font-style: italic;
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .cm-variable {
color: var(--code-function);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .cm-variable-2 {
color: var(--code-value);
}

.code-theme :is(.markdown-rendered, .markdown-source-view.mod-cm6) .cm-variable-3 {
filter: hue-rotate(40deg);
}`,
    },
    "tag-click-to-edit": {
      general: `.tag-click-to-edit .cm-line span.cm-hashtag:not(.cm-formatting) {
pointer-events: none;
}`,
    },
    "tag-plain": {
      general: `.tag-plain {
--tag-background: transparent;
}`,
    },
    "tag-outline": {
      general: `.tag-outline {
--tag-border-color: var(--setting-tag-outline, var(--text-accent)) !important;
--tag-border-width: 1px !important;
--tag-color: var(--setting-tag-color, var(--text-accent)) !important;
}

.tag-outline :is(.cm-tag-obsidian, .tag[href="#obsidian"]) {
--tag-border-color: var(--color-purple) !important;
--tag-color: var(--tag-border-color);
}

.tag-outline :is(.cm-tag-todo, .tag[href="#todo"]) {
--tag-border-color: var(--color-green) !important;
--tag-color: var(--tag-border-color);
}

.tag-outline :is(.cm-tag-important, .tag[href="#important"]) {
--tag-border-color: var(--color-red) !important;
--tag-color: var(--tag-border-color);
}

.tag-outline :is(.cm-tag-progress, .tag[href="#progress"]) {
--tag-border-color: var(--color-blue) !important;
--tag-color: var(--tag-border-color);
}

.tag-outline :is(.cm-tag-complete, .tag[href="#complete"]) {
--tag-border-color: var(--color-orange) !important;
--tag-color: var(--tag-border-color);
}`,
    },
    "tag-fill": {
      general: `.tag-fill {
--tag-background: var(--setting-tag-bg, var(--text-accent)) !important;
--tag-background-hover: var(--tag-background);
--tag-color: var(--text-on-accent);
--tag-color-hover: var(--tag-color);
}

.tag-fill :is(.cm-tag-obsidian, .tag[href="#obsidian"]) {
--tag-background: var(--color-purple) !important;
}

.tag-fill :is(.cm-tag-todo, .tag[href="#todo"]) {
--tag-background: var(--color-green) !important;
}

.tag-fill :is(.cm-tag-important, .tag[href="#important"]) {
--tag-background: var(--color-red) !important;
}

.tag-fill :is(.cm-tag-progress, .tag[href="#progress"]) {
--tag-background: var(--color-blue) !important;
}

.tag-fill :is(.cm-tag-complete, .tag[href="#complete"]) {
--tag-background: var(--color-orange) !important;
}`,
    },
    "canvas-center": {
      general: `body.canvas-center .canvas-node-content.markdown-embed > .markdown-embed-content > .markdown-preview-view > .markdown-preview-sizer {
text-align: center;
}`,
    },
    "pdf-dark-hover": {
      dark: `.pdf-dark-hover .pdfViewer {
opacity: 0.7;
transition: opacity var(--animation);
}

.pdf-dark-hover .pdfViewer:hover {
opacity: 0.85;
}`,
    },
    "pdf-dark-invert": {
      dark: `.pdf-dark-invert .pdfViewer .page {
filter: invert(1) contrast(0.8);
}`,
    },
    "pdf-export-transparent": {
      general: `body.pdf-export-transparent {
--background-primary: transparent;
}`,
    },
    "pdf-export-page-break": {
      general: `body.pdf-export-page-break :is(h1, h2, h3, h4, h5, h6) {
page-break-after: avoid;
}

body.pdf-export-page-break :is(table, figure, pre, .callout p) {
page-break-inside: avoid;
}

body.pdf-export-page-break h1 {
page-break-before: always;
}`,
    },
    "pdf-export-standard": {
      general: `body.pdf-export-standard p {
margin: 0 0 12pt 0 !important;
orphans: 3;
widows: 3;
}

body.pdf-export-standard :is(ul, ol) {
margin: 12pt 0 12pt 1.5cm !important;
padding: 0 !important;
}

body.pdf-export-standard li {
margin: 3pt 0 !important;
padding: 0 !important;
}`,
    },
    "pdf-export-default-hr": {
      general: `body.pdf-export-default-hr hr {
background-image: none !important;
border-width: var(--size-2-1) !important;
}

body.pdf-export-default-hr hr::after {
content: none !important;
}`,
    },
    "prop-outline": {
      general: `.prop-outline .metadata-container {
transform: none;
--metadata-padding: var(--radius-m);
--metadata-background: var(--background-primary-alt);
--metadata-border-width: 1px;
--metadata-border-radius: var(--radius-m);
}`,
    },
    "prop-hide-preview": {
      general: `.prop-hide-preview .metadata-container {
--metadata-display-reading: none;
}`,
    },
    "calendar-end-1-2": {
      general: `.calendar-end-1-2 #calendar-container tbody tr td:is(:nth-child(1), :nth-child(2)) {
background-color: hsla(var(--color-accent-hsl), 0.1);
}`,
    },
    "calendar-end-2-3": {
      general: `.calendar-end-2-3 #calendar-container tbody tr td:is(:nth-child(2), :nth-child(3)) {
background-color: hsla(var(--color-accent-hsl), 0.1);
}`,
    },
    "calendar-end-3-4": {
      general: `.calendar-end-3-4 #calendar-container tbody tr td:is(:nth-child(3), :nth-child(4)) {
background-color: hsla(var(--color-accent-hsl), 0.1);
}`,
    },
    "calendar-end-4-5": {
      general: `.calendar-end-4-5 #calendar-container tbody tr td:is(:nth-child(4), :nth-child(5)) {
background-color: hsla(var(--color-accent-hsl), 0.1);
}`,
    },
    "calendar-end-5-6": {
      general: `.calendar-end-5-6 #calendar-container tbody tr td:is(:nth-child(5), :nth-child(6)) {
background-color: hsla(var(--color-accent-hsl), 0.1);
}`,
    },
    "calendar-end-6-7": {
      general: `.calendar-end-6-7 #calendar-container tbody tr td:is(:nth-child(6), :nth-child(7)) {
background-color: hsla(var(--color-accent-hsl), 0.1);
}`,
    },
    "calendar-end-7-1": {
      general: `.calendar-end-7-1 #calendar-container tbody tr td:is(:nth-child(7), :nth-child(1)) {
background-color: hsla(var(--color-accent-hsl), 0.1);
}`,
    },
    "calendar-swap-year-month": {
      general: `body.calendar-swap-year-month #calendar-container .nav {
padding-left: var(--size-4-1);
}

body.calendar-swap-year-month #calendar-container .nav .title {
display: flex;
flex-direction: row-reverse;
font-weight: normal;
}

body.calendar-swap-year-month #calendar-container .nav .title .year {
color: var(--text-normal);
display: flex;
align-items: center;
}

body.calendar-swap-year-month #calendar-container .nav .title .year::after {
content: var(--setting-calendar-year-suffix, "年");
margin-right: var(--size-2-1);
margin-left: var(--size-2-1);
}

body.calendar-swap-year-month #calendar-container .nav .title .month {
height: var(--size-4-6);
line-height: var(--size-4-6);
font-weight: 550;
color: var(--accent-active);
}`,
    },
    "mobile-floating-button": {
      general: `body.is-phone.mobile-floating-button {
--navbar-bottom-padding: max(var(--safe-area-inset-bottom), 28px);
}

body.is-phone.mobile-floating-button .mod-root .view-header {
z-index: 3;
}

body.is-phone.mobile-floating-button .mobile-navbar {
bottom: var(--navbar-bottom-padding);
transform: translate(-10%);
margin-bottom: 0;
padding: var(--size-4-1);
max-width: unset;
width: 70%;
}

body.is-phone.mobile-floating-button .mobile-navbar-action > * {
padding: 0;
}

body.is-phone.mobile-floating-button:not(.mod-toolbar-open) .mod-root .workspace-leaf-content[data-type=markdown] .view-actions button:nth-last-child(2) {
position: fixed;
transform: translate(-2vw);
bottom: calc(var(--size-4-1) + var(--touch-size-m) + var(--safe-area-inset-top) + var(--navbar-bottom-padding) - 100vh);
color: var(--text-on-accent);
background-color: var(--accent-active-bg);
border-radius: 100%;
width: var(--touch-size-m);
height: var(--touch-size-m);
box-shadow: var(--shadow-s) !important;
transition: bottom var(--animation);
will-change: bottom;
}`,
    },
  },
};
