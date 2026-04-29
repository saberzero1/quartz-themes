import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dawn", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 223;
  --accent-l: 62%;
  --accent-s: 100%;
  --alpha-100: 0.1;
  --alpha-200: 0.2;
  --alpha-500: 0.5;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-gray-alpha-50, rgba(255, 255, 255, 0.05));
  --background-modifier-border-focus: var(--color-base-25, #495057);
  --background-modifier-border-hover: var(--color-base-35, #979fa7);
  --background-modifier-border-row: var(--color-base-10, #212529);
  --background-modifier-cover: var(--static-alpha-balck-700, rgba(0, 0, 0, 0.7));
  --background-modifier-error: var(--color-red, #fa5252);
  --background-modifier-error-hover: var(--color-red, #fa5252);
  --background-modifier-error-rgb: var(--color-red-rgb, 250, 82, 82);
  --background-modifier-form-field: var(--color-base-20, #343a40);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #343a40);
  --background-modifier-hover: var(--color-gray-alpha-100, rgba(255, 255, 255, 0.1));
  --background-modifier-success: var(--color-green, #69db7c);
  --background-modifier-success-rgb: var(--color-green-rgb, 105, 219, 124);
  --background-primary: var(--color-base-10, #212529);
  --background-primary-alt: var(--color-base-30, #646b73);
  --background-primary-low: var(--color-base-05, #15171a);
  --background-secondary: var(--color-base-20, #343a40);
  --background-secondary-alt: var(--color-gray-alpha-75, rgba(255, 255, 255, 0.08));
  --bases-cards-background: var(--background-primary, #212529);
  --bases-cards-border-width: var(--border-width, 0.75x);
  --bases-cards-cover-background: var(--background-primary-alt, #646b73);
  --bases-cards-font-size: var(--font-smaller, 0.875rem);
  --bases-cards-radius: var(--radius-m, 6px);
  --bases-embed-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, #dee2e6);
  --bases-group-heading-property-size: var(--font-ui-smaller, 11px);
  --bases-group-heading-value-size: var(--font-smaller, 0.875rem);
  --bases-table-border-color: var(--table-border-color, #212529);
  --bases-table-cell-background-active: var(--background-primary, #212529);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #646b73);
  --bases-table-cell-background-selected: var(--table-selection, hsla(223, 100%, 62%, 0.1));
  --bases-table-column-border-width: var(--border-width, 0.75x);
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-container-border-width: var(--border-width, 0.75x);
  --bases-table-font-size: var(--font-smaller, 0.875rem);
  --bases-table-group-background: var(--background-primary-alt, #646b73);
  --bases-table-header-background: var(--background-primary, #212529);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  --bases-table-header-color: var(--text-muted, #dee2e6);
  --bases-table-row-border-width: var(--border-width, 0.75x);
  --bases-table-summary-background: var(--background-primary, #212529);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  --blockquote-border-color: var(--interactive-accent, hsl(223, 100%, 62%));
  --blockquote-border-thickness: 1px;
  --bold-background: var(--static-alpha-balck-150, rgba(0, 0, 0, 0.1));
  --bold-weight: var(--font-semibold, 600);
  --border-width: 0.75x;
  --button-radius: var(--input-radius, 6px);
  --callout-border-opacity: 0.2;
  --callout-bug: var(--color-red-rgb, 250, 82, 82);
  --callout-default: var(--mono-rgb-100, 255, 255, 255);
  --callout-error: var(--color-red-rgb, 250, 82, 82);
  --callout-fail: var(--color-red-rgb, 250, 82, 82);
  --callout-padding: var(--size-4-2) var(--size-4-5) var(--size-4-2)
    var(--size-4-5, 8px 20px 8px
    20px);
  --callout-question: var(--color-yellow-rgb, 255, 228, 82);
  --callout-radius: var(--radius-m, 6px);
  --callout-success: var(--color-green-rgb, 105, 219, 124);
  --callout-summary: var(--mono-rgb-100, 255, 255, 255);
  --callout-title-padding: var(--scale-dimension-size-0, 0px);
  --callout-title-size: var(--font-ui-medium, 16px);
  --callout-warning: var(--color-orange-rgb, 255, 154, 103);
  --canvas-background: var(--background-primary, #212529);
  --canvas-card-label-color: var(--text-faint, #adb5bd);
  --canvas-color-1: var(--color-red-rgb, 250, 82, 82);
  --canvas-color-2: var(--color-orange-rgb, 255, 154, 103);
  --canvas-color-3: var(--color-yellow-rgb, 255, 228, 82);
  --canvas-color-4: var(--color-green-rgb, 105, 219, 124);
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, #646b73);
  --caret-color: var(--text-normal, #f1f3f5);
  --checkbox-border-color: var(--text-faint, #adb5bd);
  --checkbox-border-color-hover: var(--text-muted, #dee2e6);
  --checkbox-color: var(--interactive-accent, hsl(223, 100%, 62%));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    223,
    100%,
    58.2%
  ));
  --checkbox-marker-color: var(--background-primary, #212529);
  --checkbox-radius: var(--radius-m, 6px);
  --checkbox-size: calc(var(--font-text-size)*1.1);
  --checklist-done-color: var(--text-fade, #646b73);
  --clickable-icon-radius: var(--radius-m, 6px);
  --code-background: var(--color-gray-alpha-50, rgba(255, 255, 255, 0.05));
  --code-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --code-bracket-background: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  --code-comment: var(--text-fade, #646b73);
  --code-function: var(--color-yellow, #ffe452);
  --code-important: var(--color-orange, #ff9a67);
  --code-keyword: var(--color-blue, #6a94fc);
  --code-normal: var(--text-muted, #dee2e6);
  --code-operator: var(--color-red, #fa5252);
  --code-property: var(--color-cyan, #59e8d4);
  --code-punctuation: var(--text-muted, #dee2e6);
  --code-radius: var(--radius-s, 2px);
  --code-size: var(--font-smaller, 0.875rem);
  --code-string: var(--color-green, #69db7c);
  --code-tag: var(--color-red, #fa5252);
  --code-value: var(--color-purple, #d0bfff);
  --collapse-icon-color: var(--text-faint, #adb5bd);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --color-accent-1: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) - 3.8%)
  );
  --color-accent-2: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) + 3.8%)
  );
  --color-ash-100: #131311;
  --color-ash-1000: #bebaa7;
  --color-ash-200: #262521;
  --color-ash-300: #393832;
  --color-ash-400: #4c4a43;
  --color-ash-500: #5f5d54;
  --color-ash-600: #727064;
  --color-ash-700: #858275;
  --color-ash-800: #989586;
  --color-ash-900: #aba796;
  --color-base-00: #0e0e0f;
  --color-base-05: #15171a;
  --color-base-10: #212529;
  --color-base-100: #fefefe;
  --color-base-20: #343a40;
  --color-base-25: #495057;
  --color-base-30: #646b73;
  --color-base-35: #979fa7;
  --color-base-40: #adb5bd;
  --color-base-50: #dee2e6;
  --color-base-60: #f1f3f5;
  --color-base-70: #f8f9fa;
  --color-blue: #6a94fc;
  --color-blue-100: #002c67;
  --color-blue-200: #1e409b;
  --color-blue-300: #2c54cd;
  --color-blue-400: #3160e1;
  --color-blue-500: #3d73ff;
  --color-blue-600: #6a94fc;
  --color-blue-700: #b0cdff;
  --color-blue-800: #d1e9ff;
  --color-blue-900: #e7f7ff;
  --color-blue-alpha-100: rgba(0, 102, 255, 0.2);
  --color-blue-alpha-200: rgba(0, 102, 255, 0.3);
  --color-cyan: #59e8d4;
  --color-cyan-alpha-100: rgba(83, 223, 221, 0.1);
  --color-gray-alpha-100: rgba(255, 255, 255, 0.1);
  --color-gray-alpha-25: rgba(255, 255, 255, 0.03);
  --color-gray-alpha-50: rgba(255, 255, 255, 0.05);
  --color-gray-alpha-75: rgba(255, 255, 255, 0.08);
  --color-green: #69db7c;
  --color-green-100: #0e2e15;
  --color-green-200: #1c5928;
  --color-green-300: #28803a;
  --color-green-400: #2f9e44;
  --color-green-500: #40c057;
  --color-green-600: #69db7c;
  --color-green-700: #b2f2bb;
  --color-green-800: #d3f9d8;
  --color-green-900: #ebfbee;
  --color-green-alpha-100: rgba(64, 192, 87, 0.1);
  --color-green-alpha-200: rgba(64, 192, 87, 0.2);
  --color-green-rgb: 105, 219, 124;
  --color-orange: #ff9a67;
  --color-orange-100: #4f1905;
  --color-orange-200: #8f300a;
  --color-orange-300: #d9480f;
  --color-orange-400: #e8590c;
  --color-orange-500: #fd7e14;
  --color-orange-600: #ffa94d;
  --color-orange-700: #ffd8a8;
  --color-orange-800: #ffe8cc;
  --color-orange-900: #fff4e6;
  --color-orange-rgb: 255, 154, 103;
  --color-pink: #ffc9c9;
  --color-purple: #d0bfff;
  --color-purple-100: #2d1d5c;
  --color-purple-200: #482e94;
  --color-purple-300: #5f3dc4;
  --color-purple-400: #6741d9;
  --color-purple-500: #7950f2;
  --color-purple-600: #9775fa;
  --color-purple-700: #d0bfff;
  --color-purple-800: #e5dbff;
  --color-purple-900: #f3f0ff;
  --color-purple-alpha-100: rgba(149, 114, 255, 0.2);
  --color-purple-alpha-200: rgba(149, 114, 255, 0.3);
  --color-red: #fa5252;
  --color-red-100: #700707;
  --color-red-200: #9b0404;
  --color-red-300: #c92a2a;
  --color-red-400: #e03131;
  --color-red-500: #fa5252;
  --color-red-600: #ff8787;
  --color-red-700: #ffc9c9;
  --color-red-800: #ffe3e3;
  --color-red-900: #fff5f5;
  --color-red-alpha-100: rgba(250, 82, 82, 0.1);
  --color-red-alpha-200: rgba(250, 82, 82, 0.2);
  --color-red-rgb: 250, 82, 82;
  --color-yellow: #ffe452;
  --color-yellow-alpha-100: rgba(255, 227, 78, 0.18);
  --color-yellow-alpha-200: rgba(255, 227, 78, 0.3);
  --color-yellow-alpha-50: rgba(255, 227, 78, 0.1);
  --color-yellow-rgb: 255, 228, 82;
  --cursor-action: pointer;
  --dark: var(--text-normal, var(--color-base-60, #f1f3f5));
  --darkgray: var(--text-normal, var(--color-base-60, #f1f3f5));
  --default-font: "Inter", sans-serif;
  --divider-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --divider-color-hover: var(--interactive-accent, hsl(223, 100%, 62%));
  --divider-width: var(--scale-dimension-size-10, 1px);
  --divider-width-hover: var(--scale-dimension-size-25, 2px);
  --dropdown-background: var(--interactive-normal, #343a40);
  --dropdown-background-hover: var(--interactive-hover, #495057);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
    inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --file-header-background: var(--background-primary, #212529);
  --file-header-background-focused: var(--background-primary, #212529);
  --file-header-border: var(--border-width, 0.75x solid transparent) solid transparent;
  --file-header-font: var(--font-interface, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-weight: 500;
  --file-line-width: 640px;
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #343a40);
  --flair-color: var(--text-normal, #f1f3f5);
  --font-small: 0.933rem;
  --font-smaller: 0.875rem;
  --font-smallest: 0.8rem;
  --font-ui-large: var(--scale-dimension-font-size-400, 20px);
  --font-ui-medium: var(--scale-dimension-font-size-200, 16px);
  --font-ui-small: var(--scale-dimension-font-size-75, 13px);
  --font-ui-smaller: var(--scale-dimension-font-size-25, 11px);
  --footnote-divider-color: var(--metadata-divider-color, rgba(255, 255, 255, 0.05));
  --footnote-divider-width: var(--border-width, 0.75x);
  --footnote-id-color: var(--text-muted, #dee2e6);
  --footnote-id-color-no-occurrences: var(--text-faint, #adb5bd);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(255, 255, 255, 0.1));
  --footnote-radius: var(--radius-s, 2px);
  --footnote-size: var(--font-smaller, 0.875rem);
  --graph-node: var(--text-muted, #dee2e6);
  --graph-node-attachment: var(--color-yellow, #ffe452);
  --graph-node-focused: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --graph-node-tag: var(--color-green, #69db7c);
  --graph-node-unresolved: var(--text-faint, #adb5bd);
  --graph-text: var(--text-normal, #f1f3f5);
  --gray: var(--text-muted, var(--color-base-50, #dee2e6));
  --h1-size: 1.375rem;
  --h1-weight: 600;
  --h2-size: 1.25rem;
  --h2-weight: 600;
  --h3-size: 1.125rem;
  --h3-weight: 600;
  --h4-size: 1rem;
  --h4-weight: 600;
  --h5-size: 0.875rem;
  --h5-style: small-caps;
  --h5-weight: 600;
  --h6-size: 0.813rem;
  --h6-style: small-caps;
  --header-height: 42px;
  --heading-formatting: var(--text-faint, #adb5bd);
  --highlight: var(--text-highlight-bg, var(--color-gray-alpha-100, rgba(255, 255, 255, 0.1)));
  --hr-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, #dee2e6);
  --icon-color-active: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --icon-color-focused: var(--text-normal, #f1f3f5);
  --icon-color-hover: var(--text-muted, #dee2e6);
  --icon-opacity: 0.6;
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.1);
  --indentation-guide-width-active: var(--border-width, 0.75x);
  --inline-title-size: var(--h1-size, 1.375rem);
  --inline-title-weight: var(--h1-weight, 600);
  --input-border-width: var(--scale-dimension-size-0, 0px);
  --input-date-separator: var(--text-faint, #adb5bd);
  --input-height: var(--scale-dimension-size-400, 32px);
  --input-placeholder-color: var(--text-faint, #adb5bd);
  --input-radius: var(--radius-m, 6px);
  --input-shadow: transparent;
  --input-shadow-hover: transparent;
  --interactive-accent: var(--color-accent-1, hsl(223, 100%, 62%));
  --interactive-accent-hover: var(--color-accent-2, hsl(
    223,
    100%,
    58.2%
  ));
  --interactive-accent-hsl: var(--color-accent-hsl, 223, 100%, 62%);
  --interactive-hover: var(--color-base-25, #495057);
  --interactive-normal: var(--color-base-20, #343a40);
  --light: var(--background-primary, var(--color-base-10, #212529));
  --lightgray: var(--background-secondary, var(--color-base-20, #343a40));
  --line-height-large: 1.6;
  --link-color: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --link-color-hover: var(--text-accent-hover, hsl(
    223,
    100%,
    65.8%
  ));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --link-external-color-hover: var(--text-accent-hover, hsl(
    223,
    100%,
    65.8%
  ));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --link-unresolved-opacity: 0.6;
  --list-bullet-size: 0.2rem;
  --list-marker-color: var(--color-base-35, #979fa7);
  --list-marker-color-collapsed: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --list-marker-color-hover: var(--text-muted, #dee2e6);
  --list-spacing: 0.14rem;
  --menu-background: var(--background-secondary, #343a40);
  --menu-border-color: var(--background-modifier-border-hover, #979fa7);
  --menu-border-width: var(--border-width, 0.75x);
  --menu-radius: var(--radius-m, 6px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3));
  --metadata-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --metadata-divider-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --metadata-input-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  --metadata-input-font: var(--font-interface, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-font-size: var(--font-smaller, 0.875rem);
  --metadata-input-text-color: var(--text-normal, #f1f3f5);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  --metadata-label-font: var(--font-interface, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-size: var(--font-smaller, 0.875rem);
  --metadata-label-text-color: var(--text-muted, #dee2e6);
  --metadata-label-text-color-hover: var(--text-muted, #dee2e6);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  --modal-background: var(--background-primary, #212529);
  --modal-border-color: var(
    --color-base-40,
    var(--background-modifier-border-focus)
  );
  --modal-border-width: var(--border-width, 0.75x);
  --nav-collapse-icon-color: var(--collapse-icon-color, #adb5bd);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #adb5bd);
  --nav-heading-color: var(--text-normal, #f1f3f5);
  --nav-heading-color-collapsed: var(--text-faint, #adb5bd);
  --nav-heading-color-collapsed-hover: var(--text-muted, #dee2e6);
  --nav-heading-color-hover: var(--text-normal, #f1f3f5);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(255, 255, 255, 0.1));
  --nav-item-background-active: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
  --nav-item-children-margin-left: var(--size-4-3, 12px);
  --nav-item-children-padding-left: var(--size-4-2, 8px);
  --nav-item-color: var(--text-muted, #dee2e6);
  --nav-item-color-active: var(--text-normal, #f1f3f5);
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(
    223,
    100%,
    65.8%
  ));
  --nav-item-color-hover: var(--text-normal, #f1f3f5);
  --nav-item-color-selected: var(--text-normal, #f1f3f5);
  --nav-item-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px);
  --nav-item-radius: var(--radius-s, 2px);
  --nav-item-weight-active: var(--bold-weight, 600);
  --nav-item-weight-hover: var(--bold-weight, 600);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, #adb5bd);
  --nav-tag-color-active: var(--text-muted, #dee2e6);
  --nav-tag-color-hover: var(--text-muted, #dee2e6);
  --nav-tag-radius: var(--radius-s, 2px);
  --pdf-background: var(--background-primary, #212529);
  --pdf-page-background: var(--background-primary, #212529);
  --pdf-sidebar-background: var(--background-primary, #212529);
  --pill-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --pill-border-color-hover: var(--background-modifier-border-hover, #979fa7);
  --pill-border-width: var(--border-width, 0.75x);
  --pill-color: var(--text-muted, #dee2e6);
  --pill-color-hover: var(--text-normal, #f1f3f5);
  --pill-color-remove: var(--text-faint, #adb5bd);
  --pill-color-remove-hover: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, #212529);
  --prompt-border-color: var(
    --color-base-40,
    var(--background-modifier-border-focus)
  );
  --prompt-border-width: var(--border-width, 0.75x);
  --prompt-max-width: 62vw;
  --radius-full: var(--scale-dimension-size-max, 9999px);
  --radius-l: var(--scale-radius-4, 12px);
  --radius-m: var(--scale-radius-3, 6px);
  --radius-s: var(--scale-radius-1, 2px);
  --radius-xl: var(--scale-radius-5, 16px);
  --raised-background: var(--blur-background, color-mix(in srgb, #343a40 65%, transparent) linear-gradient(#343a40, color-mix(in srgb, #343a40 65%, transparent)));
  --ribbon-background: var(--background-primary, #212529);
  --ribbon-background-collapsed: var(--background-primary, #212529);
  --ribbon-width: var(--scale-dimension-size-600, 48px);
  --scale-dimension-font-size-10: 10px;
  --scale-dimension-font-size-100: 14px;
  --scale-dimension-font-size-1000: 48px;
  --scale-dimension-font-size-1100: 54px;
  --scale-dimension-font-size-1200: 60px;
  --scale-dimension-font-size-1300: 72px;
  --scale-dimension-font-size-200: 16px;
  --scale-dimension-font-size-25: 11px;
  --scale-dimension-font-size-300: 18px;
  --scale-dimension-font-size-400: 20px;
  --scale-dimension-font-size-50: 12px;
  --scale-dimension-font-size-500: 24px;
  --scale-dimension-font-size-600: 28px;
  --scale-dimension-font-size-700: 32px;
  --scale-dimension-font-size-75: 13px;
  --scale-dimension-font-size-800: 36px;
  --scale-dimension-font-size-900: 42px;
  --scale-dimension-size-0: 0px;
  --scale-dimension-size-10: 1px;
  --scale-dimension-size-100: 8px;
  --scale-dimension-size-1000: 80px;
  --scale-dimension-size-125: 10px;
  --scale-dimension-size-150: 12px;
  --scale-dimension-size-1500: 100px;
  --scale-dimension-size-175: 14px;
  --scale-dimension-size-200: 16px;
  --scale-dimension-size-2000: 160px;
  --scale-dimension-size-225: 18px;
  --scale-dimension-size-25: 2px;
  --scale-dimension-size-250: 20px;
  --scale-dimension-size-300: 24px;
  --scale-dimension-size-3000: 240px;
  --scale-dimension-size-400: 32px;
  --scale-dimension-size-50: 4px;
  --scale-dimension-size-500: 40px;
  --scale-dimension-size-600: 48px;
  --scale-dimension-size-700: 56px;
  --scale-dimension-size-75: 6px;
  --scale-dimension-size-800: 64px;
  --scale-dimension-size-900: 72px;
  --scale-dimension-size-max: 9999px;
  --scale-radius-1: 2px;
  --scale-radius-2: 4px;
  --scale-radius-3: 6px;
  --scale-radius-4: 12px;
  --scale-radius-5: 16px;
  --scale-radius-6: 24px;
  --scale-radius-9999: 24px;
  --search-clear-button-color: var(--text-muted, #dee2e6);
  --search-icon-color: var(--text-muted, #dee2e6);
  --search-result-background: var(--background-primary, #212529);
  --secondary: var(--text-accent, var(--color-accent, hsl(
    223,
    100%,
    58.2%
  )));
  --setting-group-heading-color: var(--text-normal, #f1f3f5);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #646b73);
  --setting-items-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #dee2e6);
  --shiki-code-background: var(--code-background, rgba(255, 255, 255, 0.05));
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, #adb5bd);
  --shiki-code-function: var(--color-green, #69db7c);
  --shiki-code-important: var(--color-orange, #ff9a67);
  --shiki-code-keyword: var(--color-pink, #ffc9c9);
  --shiki-code-normal: var(--text-muted, #dee2e6);
  --shiki-code-property: var(--color-cyan, #59e8d4);
  --shiki-code-punctuation: var(--text-muted, #dee2e6);
  --shiki-code-string: var(--color-yellow, #ffe452);
  --shiki-code-value: var(--color-purple, #d0bfff);
  --shiki-gutter-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --shiki-gutter-border-width: var(--border-width, 0.75x);
  --shiki-gutter-text-color: var(--text-faint, #adb5bd);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #dee2e6);
  --shiki-highlight-neutral: var(--shiki-code-normal, #dee2e6);
  --shiki-terminal-dots-color: var(--text-faint, #adb5bd);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #979fa7);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-track-background: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --static-alpha-balck-100: rgba(0, 0, 0, 0.06);
  --static-alpha-balck-150: rgba(0, 0, 0, 0.1);
  --static-alpha-balck-200: rgba(0, 0, 0, 0.2);
  --static-alpha-balck-500: rgba(0, 0, 0, 0.5);
  --static-alpha-balck-700: rgba(0, 0, 0, 0.7);
  --static-alpha-white-200: rgba(255, 255, 255, 0.2);
  --static-alpha-white-500: rgba(255, 255, 255, 0.5);
  --static-black: #000000;
  --static-blue: #3d73ff;
  --static-large: 162%;
  --static-medium: 150%;
  --static-small: 132%;
  --static-white: #ffffff;
  --status-bar-background: var(--background-secondary, #343a40);
  --status-bar-border-color: var(--divider-color, rgba(255, 255, 255, 0.05));
  --status-bar-font-size: var(--font-ui-smaller, 11px);
  --status-bar-radius: var(--radius-m, 6px);
  --status-bar-text-color: var(--text-muted, #dee2e6);
  --suggestion-background: var(--background-primary, #212529);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: var(--color-red, #fa5252);
  --sync-avatar-color-2: var(--color-orange, #ff9a67);
  --sync-avatar-color-3: var(--color-yellow, #ffe452);
  --sync-avatar-color-4: var(--color-green, #69db7c);
  --sync-avatar-color-5: var(--color-cyan, #59e8d4);
  --sync-avatar-color-6: var(--color-blue, #6a94fc);
  --sync-avatar-color-7: var(--color-purple, #d0bfff);
  --sync-avatar-color-8: var(--color-pink, #ffc9c9);
  --tab-background-active: var(--background-primary, #212529);
  --tab-container-background: var(--background-secondary, #343a40);
  --tab-divider-color: var(--background-modifier-border-hover, #979fa7);
  --tab-outline-color: var(--divider-color, rgba(255, 255, 255, 0.05));
  --tab-radius: var(--radius-s, 2px);
  --tab-stacked-header-width: var(--header-height, 42px);
  --tab-stacked-text-align: left;
  --tab-switcher-background: var(--background-secondary, #343a40);
  --tab-text-color: var(--text-faint, #adb5bd);
  --tab-text-color-active: var(--text-muted, #dee2e6);
  --tab-text-color-focused: var(--text-muted, #dee2e6);
  --tab-text-color-focused-active: var(--text-muted, #dee2e6);
  --tab-text-color-focused-active-current: var(--text-normal, #f1f3f5);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --table-add-button-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --table-border-color: var(--background-modifier-border-row, #212529);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(223, 100%, 62%));
  --table-drag-handle-color: var(--text-faint, #adb5bd);
  --table-header-background: var(--background-secondary, #343a40);
  --table-header-border-color: var(--table-border-color, #212529);
  --table-header-color: var(--text-normal, #f1f3f5);
  --table-header-size: var(--font-ui-small, 13px);
  --table-header-weight: var(--bold-weight, 600);
  --table-selection-border-color: var(--interactive-accent, hsl(223, 100%, 62%));
  --table-text-size: var(--font-ui-medium, 16px);
  --table-white-space: normal;
  --tag-color: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --tag-color-hover: var(--text-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --tag-padding-x: 0.65rem;
  --tag-padding-y: 0.25rem;
  --tag-radius: var(--radius-m, 6px);
  --tag-size: var(--font-smaller, 0.875rem);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(
    223,
    100%,
    65.8%
  )));
  --text-accent: var(--color-accent, hsl(
    223,
    100%,
    58.2%
  ));
  --text-accent-hover: var(--color-accent-2, hsl(
    223,
    100%,
    65.8%
  ));
  --text-error: var(--color-red, #fa5252);
  --text-fade: var(--color-base-30, #646b73);
  --text-faint: var(--color-base-40, #adb5bd);
  --text-highlight-bg: var(--color-gray-alpha-100, rgba(255, 255, 255, 0.1));
  --text-highlight-bg-active: var(--color-yellow-alpha-50, rgba(255, 227, 78, 0.1));
  --text-muted: var(--color-base-50, #dee2e6);
  --text-normal: var(--color-base-60, #f1f3f5);
  --text-selection: hsla(var(--interactive-accent-hsl), 0.25);
  --text-success: var(--color-green, #69db7c);
  --text-warning: var(--color-orange, #ff9a67);
  --textHighlight: var(--text-highlight-bg, var(--color-gray-alpha-100, rgba(255, 255, 255, 0.1)));
  --titlebar-background: var(--background-secondary, #343a40);
  --titlebar-background-focused: var(--background-secondary, #343a40);
  --titlebar-border-color: var(--background-modifier-border, rgba(255, 255, 255, 0.05));
  --titlebar-text-color: var(--text-muted, #dee2e6);
  --titlebar-text-color-focused: var(--text-normal, #f1f3f5);
  --traffic-lights-offset-x: var(--header-height, 42px);
  --traffic-lights-offset-y: var(--header-height, 42px);
  --vault-name-color: var(--text-normal, #f1f3f5);
  --vault-name-font-size: var(--font-ui-small, 13px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, #f1f3f5);
  --vault-profile-color-hover: var(--vault-profile-color, #f1f3f5);
  --quartz-icon-color: currentColor;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(52, 58, 64));
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(33, 37, 41));
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, rgb(33, 37, 41));
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(52, 58, 64));
  border-left-color: rgba(255, 255, 255, 0.05);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body html {
  --default-font: "Inter", sans-serif;
  --font-monospace: "Source Code Pro", monospace;
  --scale-dimension-font-size-10: 10px;
  --scale-dimension-font-size-100: 14px;
  --scale-dimension-font-size-1000: 48px;
  --scale-dimension-font-size-1100: 54px;
  --scale-dimension-font-size-1200: 60px;
  --scale-dimension-font-size-1300: 72px;
  --scale-dimension-font-size-200: 16px;
  --scale-dimension-font-size-25: 11px;
  --scale-dimension-font-size-300: 18px;
  --scale-dimension-font-size-400: 20px;
  --scale-dimension-font-size-50: 12px;
  --scale-dimension-font-size-500: 24px;
  --scale-dimension-font-size-600: 28px;
  --scale-dimension-font-size-700: 32px;
  --scale-dimension-font-size-75: 13px;
  --scale-dimension-font-size-800: 36px;
  --scale-dimension-font-size-900: 42px;
  --scale-dimension-size-0: 0px;
  --scale-dimension-size-10: 1px;
  --scale-dimension-size-100: 8px;
  --scale-dimension-size-1000: 80px;
  --scale-dimension-size-125: 10px;
  --scale-dimension-size-150: 12px;
  --scale-dimension-size-1500: 100px;
  --scale-dimension-size-175: 14px;
  --scale-dimension-size-200: 16px;
  --scale-dimension-size-2000: 160px;
  --scale-dimension-size-225: 18px;
  --scale-dimension-size-25: 2px;
  --scale-dimension-size-250: 20px;
  --scale-dimension-size-300: 24px;
  --scale-dimension-size-3000: 240px;
  --scale-dimension-size-400: 32px;
  --scale-dimension-size-50: 4px;
  --scale-dimension-size-500: 40px;
  --scale-dimension-size-600: 48px;
  --scale-dimension-size-700: 56px;
  --scale-dimension-size-75: 6px;
  --scale-dimension-size-800: 64px;
  --scale-dimension-size-900: 72px;
  --scale-dimension-size-max: 9999px;
  --scale-radius-1: var(--scale-dimension-size-25, 2px);
  --scale-radius-2: var(--scale-dimension-size-50, 4px);
  --scale-radius-3: var(--scale-dimension-size-75, 6px);
  --scale-radius-4: var(--scale-dimension-size-150, 12px);
  --scale-radius-5: var(--scale-dimension-size-200, 16px);
  --scale-radius-6: var(--scale-dimension-size-300, 24px);
  --scale-radius-9999: var(--scale-dimension-size-300, 24px);
  --static-large: 162%;
  --static-medium: 150%;
  --static-small: 132%;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: var(--bold-color, rgb(241, 243, 245));
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: var(--italic-color, rgb(241, 243, 245));
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: var(--italic-color, rgb(241, 243, 245));
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: var(--bold-color, rgb(241, 243, 245));
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgba(255, 255, 255, 0.1));
  color: var(--text-normal, rgb(241, 243, 245));
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body del {
  color: var(--text-faint, rgb(173, 181, 189));
  outline: rgb(173, 181, 189) none 0px;
  text-decoration-color: rgb(173, 181, 189);
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--text-normal, rgb(241, 243, 245));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(173, 181, 189);
  border-radius: 6px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(61, 116, 255));
  border-color: rgb(61, 116, 255);
}

html[saved-theme="dark"] body p {
  color: var(--text-muted, rgb(222, 226, 230));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 226, 230) none 0px;
  text-decoration-color: rgb(222, 226, 230);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: var(--link-external-color, rgb(42, 102, 255));
  outline: rgb(42, 102, 255) none 0px;
  text-decoration-color: rgb(42, 102, 255);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(42, 102, 255));
  outline: rgb(42, 102, 255) none 0px;
  text-decoration-color: rgb(42, 102, 255);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(42, 102, 255));
  outline: rgb(42, 102, 255) none 0px;
  text-decoration: rgba(61, 116, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(61, 116, 255, 0.3));
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body dt {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: var(--color-accent, rgb(61, 116, 255));
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body table {
  background-color: var(--color-gray-alpha-25, rgba(255, 255, 255, 0.03));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
  margin-bottom: var(--scale-dimension-size-25, 0px);
  width: 602px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: var(--background-secondary, rgb(52, 58, 64));
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  color: var(--table-text-color, rgb(241, 243, 245));
  padding-bottom: var(--size-4-3, 12px);
  padding-top: var(--size-4-3, 12px);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  color: var(--table-header-color, rgb(241, 243, 245));
  padding-bottom: var(--size-4-3, 12px);
  padding-top: var(--size-4-3, 12px);
}

html[saved-theme="dark"] body tr {
  background-color: var(--table-header-background, rgb(52, 58, 64));
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: var(--code-background, rgba(255, 255, 255, 0.05));
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--code-normal, rgb(222, 226, 230));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: var(--code-background, rgba(255, 255, 255, 0.05));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(241, 243, 245);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-radius: 6px;
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-radius: 6px;
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(100, 107, 115));
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(241, 243, 245);
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(61, 116, 255);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(173, 181, 189);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(173, 181, 189);
  border-right-color: rgb(173, 181, 189);
  border-top-color: rgb(173, 181, 189);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-left: -26.4px;
  width: var(--checkbox-size, 17.5938px);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(100, 107, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(100, 107, 115);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 37, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(33, 37, 41);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 154, 103);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 228, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(89, 232, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(106, 148, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(106, 148, 252);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 228, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 228, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 191, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(250, 82, 82);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(105, 219, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(105, 219, 124);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(105, 219, 124);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 255, 255, 255);
  background: rgba(255, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 250, 82, 82);
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 250, 82, 82);
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 168, 130, 255);
  border-bottom-color: rgba(168, 130, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(168, 130, 255, 0.2);
  border-right-color: rgba(168, 130, 255, 0.2);
  border-top-color: rgba(168, 130, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 250, 82, 82);
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(2, 122, 255, 0.2);
  border-right-color: rgba(2, 122, 255, 0.2);
  border-top-color: rgba(2, 122, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 255, 255, 255);
  background: rgba(255, 255, 255, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 255, 228, 82);
  background: rgba(255, 228, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 228, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 228, 82, 0.2);
  border-right-color: rgba(255, 228, 82, 0.2);
  border-top-color: rgba(255, 228, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgba(158, 158, 158, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(158, 158, 158, 0.2);
  border-right-color: rgba(158, 158, 158, 0.2);
  border-top-color: rgba(158, 158, 158, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 105, 219, 124);
  background: rgba(105, 219, 124, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(105, 219, 124, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(105, 219, 124, 0.2);
  border-right-color: rgba(105, 219, 124, 0.2);
  border-top-color: rgba(105, 219, 124, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 83, 223, 221);
  border-bottom-color: rgba(83, 223, 221, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(83, 223, 221, 0.2);
  border-right-color: rgba(83, 223, 221, 0.2);
  border-top-color: rgba(83, 223, 221, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 2, 122, 255);
  border-bottom-color: rgba(2, 122, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(2, 122, 255, 0.2);
  border-right-color: rgba(2, 122, 255, 0.2);
  border-top-color: rgba(2, 122, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 255, 154, 103);
  background: rgba(255, 154, 103, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(255, 154, 103, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 154, 103, 0.2);
  border-right-color: rgba(255, 154, 103, 0.2);
  border-top-color: rgba(255, 154, 103, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 255, 255, 255;
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(255, 255, 255));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(241, 243, 245);
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
  background-color: rgb(52, 58, 64);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-left-width: 0px;
  border-right-color: rgba(255, 255, 255, 0.05);
  border-right-width: 0px;
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(241, 243, 245));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(33, 37, 41));
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-left-width: 0px;
  border-right-color: rgb(241, 243, 245);
  border-right-width: 0px;
  border-top-color: rgb(241, 243, 245);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-left-width: 0px;
  border-right-color: rgb(241, 243, 245);
  border-right-width: 0px;
  border-top-color: rgb(241, 243, 245);
  border-top-width: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(255, 255, 255, 0.1));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(61, 116, 255, 0.1));
  border-bottom-color: rgba(61, 116, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(61, 116, 255, 0.15);
  border-right-color: rgba(61, 116, 255, 0.15);
  border-top-color: rgba(61, 116, 255, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(42, 102, 255);
}

html[saved-theme="dark"] body h1 {
  color: var(--h1-color, rgb(241, 243, 245));
}

html[saved-theme="dark"] body h1.article-title {
  color: var(--inline-title-color, rgb(241, 243, 245));
  font-size: var(--inline-title-size, 22px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="dark"] body h2 {
  color: var(--h2-color, rgb(241, 243, 245));
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: var(--inline-title-color, rgb(241, 243, 245));
}

html[saved-theme="dark"] body h3 {
  color: var(--h3-color, rgb(241, 243, 245));
}

html[saved-theme="dark"] body h4 {
  color: var(--h4-color, rgb(241, 243, 245));
}

html[saved-theme="dark"] body h5 {
  color: var(--h5-color, rgb(241, 243, 245));
}

html[saved-theme="dark"] body h6 {
  color: var(--h6-color, rgb(241, 243, 245));
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: var(--callout-default, 255, 255, 255);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(255, 255, 255, 0.1);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(222, 226, 230));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(222, 226, 230));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold-weight, 600);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: var(--bold-weight, 600);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(222, 226, 230));
  cursor: var(--cursor-action, pointer);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: var(--status-bar-background, rgb(52, 58, 64));
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--status-bar-text-color, rgb(222, 226, 230));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(222, 226, 230);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(241, 243, 245);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(222, 226, 230));
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(222, 226, 230));
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(222, 226, 230));
  cursor: var(--cursor-action, pointer);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(222, 226, 230);
  stroke: rgb(222, 226, 230);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(173, 181, 189);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(173, 181, 189);
  border-right-color: rgb(173, 181, 189);
  border-top-color: rgb(173, 181, 189);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--text-faint, rgb(173, 181, 189));
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(173, 181, 189));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: var(--text-normal, rgb(241, 243, 245));
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: var(--background-secondary, rgb(52, 58, 64));
  border-color: rgb(241, 243, 245);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(33, 37, 41);
  color: var(--table-header-color, rgb(241, 243, 245));
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: var(--text-muted, rgb(222, 226, 230));
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(222, 226, 230);
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(61, 116, 255, 0.1));
  border-radius: 6px;
  color: var(--pill-color, rgb(42, 102, 255));
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(222, 226, 230);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: var(--background-primary, rgb(33, 37, 41));
  color: var(--text-normal, rgb(241, 243, 245));
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: var(--background-primary, rgb(33, 37, 41));
  border-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(52, 58, 64));
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(241, 243, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(52, 58, 64));
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(241, 243, 245));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(222, 226, 230);
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  color: var(--text-normal, rgb(222, 226, 230));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: var(--code-background, rgba(255, 255, 255, 0.05));
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(222, 226, 230));
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body sub {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body summary {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body sup {
  color: rgb(241, 243, 245);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: var(--tag-background, rgba(61, 116, 255, 0.1));
  border-bottom-color: rgba(61, 116, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(61, 116, 255, 0.15);
  border-right-color: rgba(61, 116, 255, 0.15);
  border-top-color: rgba(61, 116, 255, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--tag-color, rgb(42, 102, 255));
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 223;
  --accent-l: 62%;
  --accent-s: 100%;
  --alpha-100: 0.1;
  --alpha-200: 0.2;
  --alpha-500: 0.5;
  --background-modifier-active-hover: hsla(var(--interactive-accent-hsl), 0.15);
  --background-modifier-border: var(--color-ash-400, #e5e3dc);
  --background-modifier-border-focus: var(--color-ash-600, #d8d6ca);
  --background-modifier-border-hover: var(--color-base-35, #868e96);
  --background-modifier-border-row: var(--color-ash-500, #dfddd3);
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: var(--static-alpha-balck-700, rgba(0, 0, 0, 0.7));
  --background-modifier-error-rgb: var(--color-red-rgb, 250, 82, 82);
  --background-modifier-form-field: var(--color-ash-400, #e5e3dc);
  --background-modifier-form-field-hover: var(--background-modifier-form-field, #e5e3dc);
  --background-modifier-hover: var(--color-gray-alpha-100, rgba(0, 0, 0, 0.1));
  --background-modifier-success: var(--color-green, #40c057);
  --background-primary: var(--color-ash-200, #f2f1ed);
  --background-primary-alt: var(--color-ash-500, #dfddd3);
  --background-primary-low: var(--color-ash-100, #f9f8f6);
  --background-secondary: var(--color-ash-400, #e5e3dc);
  --background-secondary-alt: var(--color-ash-600, #d8d6ca);
  --bases-cards-background: var(--background-primary, #f2f1ed);
  --bases-cards-border-width: var(--border-width, 0.75x);
  --bases-cards-cover-background: var(--background-primary-alt, #dfddd3);
  --bases-cards-font-size: var(--font-smaller, 0.875rem);
  --bases-cards-radius: var(--radius-m, 6px);
  --bases-embed-border-color: var(--background-modifier-border, #e5e3dc);
  --bases-embed-border-radius: var(--radius-s, 2px);
  --bases-group-heading-property-color: var(--text-muted, #343a40);
  --bases-group-heading-property-size: var(--font-ui-smaller, 11px);
  --bases-group-heading-value-size: var(--font-smaller, 0.875rem);
  --bases-table-border-color: var(--table-border-color, #dfddd3);
  --bases-table-cell-background-active: var(--background-primary, #f2f1ed);
  --bases-table-cell-background-disabled: var(--background-primary-alt, #dfddd3);
  --bases-table-cell-background-selected: var(--table-selection, hsla(223, 100%, 62%, 0.1));
  --bases-table-column-border-width: var(--border-width, 0.75x);
  --bases-table-container-border-radius: var(--radius-s, 2px);
  --bases-table-container-border-width: var(--border-width, 0.75x);
  --bases-table-font-size: var(--font-smaller, 0.875rem);
  --bases-table-group-background: var(--background-primary-alt, #dfddd3);
  --bases-table-header-background: var(--background-primary, #f2f1ed);
  --bases-table-header-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --bases-table-header-color: var(--text-muted, #343a40);
  --bases-table-row-border-width: var(--border-width, 0.75x);
  --bases-table-summary-background: var(--background-primary, #f2f1ed);
  --bases-table-summary-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --blockquote-border-color: var(--interactive-accent, hsl(
    223,
    100%,
    64.5%
  ));
  --blockquote-border-thickness: 1px;
  --bold-background: var(--static-alpha-balck-150, rgba(0, 0, 0, 0.1));
  --bold-weight: var(--font-semibold, 600);
  --border-width: 0.75x;
  --button-radius: var(--input-radius, 6px);
  --callout-border-opacity: 0.2;
  --callout-bug: var(--color-red-rgb, 250, 82, 82);
  --callout-default: var(--mono-rgb-100, 0, 0, 0);
  --callout-error: var(--color-red-rgb, 250, 82, 82);
  --callout-example: var(--color-purple-rgb, 121, 80, 242);
  --callout-fail: var(--color-red-rgb, 250, 82, 82);
  --callout-important: var(--color-cyan-rgb, 40, 173, 202);
  --callout-info: var(--color-blue-rgb, 3, 105, 224);
  --callout-padding: var(--size-4-2) var(--size-4-5) var(--size-4-2)
    var(--size-4-5, 8px 20px 8px
    20px);
  --callout-question: var(--color-yellow-rgb, 245, 162, 0);
  --callout-radius: var(--radius-m, 6px);
  --callout-summary: var(--mono-rgb-100, 0, 0, 0);
  --callout-tip: var(--color-cyan-rgb, 40, 173, 202);
  --callout-title-padding: var(--scale-dimension-size-0, 0px);
  --callout-title-size: var(--font-ui-medium, 16px);
  --callout-todo: var(--color-blue-rgb, 3, 105, 224);
  --callout-warning: var(--color-orange-rgb, 253, 126, 20);
  --canvas-background: var(--background-primary, #f2f1ed);
  --canvas-card-label-color: var(--text-faint, #495057);
  --canvas-color-1: var(--color-red-rgb, 250, 82, 82);
  --canvas-color-2: var(--color-orange-rgb, 253, 126, 20);
  --canvas-color-3: var(--color-yellow-rgb, 245, 162, 0);
  --canvas-color-5: var(--color-cyan-rgb, 40, 173, 202);
  --canvas-color-6: var(--color-purple-rgb, 121, 80, 242);
  --canvas-controls-radius: var(--radius-s, 2px);
  --canvas-dot-pattern: var(--color-base-30, #adb5bd);
  --caret-color: var(--text-normal, #212529);
  --checkbox-border-color: var(--text-faint, #495057);
  --checkbox-border-color-hover: var(--text-muted, #343a40);
  --checkbox-color: var(--interactive-accent, hsl(
    223,
    100%,
    64.5%
  ));
  --checkbox-color-hover: var(--interactive-accent-hover, hsl(
    223,
    100%,
    67%
  ));
  --checkbox-marker-color: var(--background-primary, #f2f1ed);
  --checkbox-radius: var(--radius-m, 6px);
  --checkbox-size: calc(var(--font-text-size)*1.1);
  --checklist-done-color: var(--text-fade, #adb5bd);
  --clickable-icon-radius: var(--radius-m, 6px);
  --code-background: var(--color-gray-alpha-50, rgba(0, 0, 0, 0.05));
  --code-border-color: var(--background-modifier-border, #e5e3dc);
  --code-bracket-background: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --code-comment: var(--text-fade, #adb5bd);
  --code-function: var(--color-yellow, #f5a200);
  --code-important: var(--color-orange, #fd7e14);
  --code-keyword: var(--color-blue, #3d73ff);
  --code-normal: var(--text-muted, #343a40);
  --code-property: var(--color-cyan, #28adca);
  --code-punctuation: var(--text-muted, #343a40);
  --code-radius: var(--radius-s, 2px);
  --code-size: var(--font-smaller, 0.875rem);
  --code-string: var(--color-green, #40c057);
  --code-value: var(--color-purple, #7950f2);
  --collapse-icon-color: var(--text-faint, #495057);
  --collapse-icon-color-collapsed: var(--text-accent, hsl(223, 100%, 62%));
  --color-accent-1: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) + 2.5%)
  );
  --color-accent-2: hsl(
    var(--accent-h),
    var(--accent-s),
    calc(var(--accent-l) + 5%)
  );
  --color-ash-100: #f9f8f6;
  --color-ash-1000: #bebaa7;
  --color-ash-200: #f2f1ed;
  --color-ash-300: #eceae5;
  --color-ash-400: #e5e3dc;
  --color-ash-500: #dfddd3;
  --color-ash-600: #d8d6ca;
  --color-ash-700: #d2cfc1;
  --color-ash-800: #cbc8b9;
  --color-ash-900: #c5c1b0;
  --color-base-05: #fefefe;
  --color-base-10: #f8f9fa;
  --color-base-100: #0e0e0f;
  --color-base-20: #f1f3f5;
  --color-base-25: #dee2e6;
  --color-base-30: #adb5bd;
  --color-base-35: #868e96;
  --color-base-40: #495057;
  --color-base-50: #343a40;
  --color-base-60: #212529;
  --color-base-70: #15171a;
  --color-blue: #3d73ff;
  --color-blue-100: #e7f7ff;
  --color-blue-200: #d1e9ff;
  --color-blue-300: #b0cdff;
  --color-blue-400: #6a94fc;
  --color-blue-500: #3d73ff;
  --color-blue-600: #3160e1;
  --color-blue-700: #2c54cd;
  --color-blue-800: #1e409b;
  --color-blue-900: #002c67;
  --color-blue-alpha-100: rgba(61, 174, 255, 0.1);
  --color-blue-alpha-200: rgba(61, 174, 255, 0.2);
  --color-blue-rgb: 3, 105, 224;
  --color-cyan: #28adca;
  --color-cyan-alpha-100: rgba(70, 192, 192, 0.1);
  --color-cyan-rgb: 40, 173, 202;
  --color-gray-alpha-100: rgba(0, 0, 0, 0.1);
  --color-gray-alpha-25: rgba(0, 0, 0, 0.03);
  --color-gray-alpha-50: rgba(0, 0, 0, 0.05);
  --color-gray-alpha-75: rgba(0, 0, 0, 0.08);
  --color-green: #40c057;
  --color-green-100: #ebfbee;
  --color-green-200: #d3f9d8;
  --color-green-300: #b2f2bb;
  --color-green-400: #69db7c;
  --color-green-500: #40c057;
  --color-green-600: #2f9e44;
  --color-green-700: #28803a;
  --color-green-800: #1c5928;
  --color-green-900: #0e2e15;
  --color-green-alpha-100: rgba(64, 192, 87, 0.1);
  --color-green-alpha-200: rgba(64, 192, 87, 0.2);
  --color-orange: #fd7e14;
  --color-orange-100: #fff4e6;
  --color-orange-200: #ffe8cc;
  --color-orange-300: #ffd8a8;
  --color-orange-400: #ffa94d;
  --color-orange-500: #fd7e14;
  --color-orange-600: #e8590c;
  --color-orange-700: #d9480f;
  --color-orange-800: #8f300a;
  --color-orange-900: #4f1905;
  --color-orange-rgb: 253, 126, 20;
  --color-pink: #f558ad;
  --color-pink-rgb: 245, 88, 173;
  --color-purple: #7950f2;
  --color-purple-100: #f3f0ff;
  --color-purple-200: #e5dbff;
  --color-purple-300: #d0bfff;
  --color-purple-400: #9775fa;
  --color-purple-500: #7950f2;
  --color-purple-600: #6741d9;
  --color-purple-700: #5f3dc4;
  --color-purple-800: #482e94;
  --color-purple-900: #2d1d5c;
  --color-purple-alpha-100: rgba(121, 80, 242, 0.1);
  --color-purple-alpha-200: rgba(121, 80, 242, 0.2);
  --color-purple-rgb: 121, 80, 242;
  --color-red-100: #fff5f5;
  --color-red-200: #ffe3e3;
  --color-red-300: #ffc9c9;
  --color-red-400: #ff8787;
  --color-red-500: #fa5252;
  --color-red-600: #e03131;
  --color-red-700: #c92a2a;
  --color-red-800: #9b0404;
  --color-red-900: #700707;
  --color-red-alpha-100: rgba(250, 82, 82, 0.1);
  --color-red-alpha-200: rgba(250, 82, 82, 0.2);
  --color-red-rgb: 250, 82, 82;
  --color-yellow: #f5a200;
  --color-yellow-alpha-100: rgba(255, 232, 23, 0.2);
  --color-yellow-alpha-200: rgba(255, 232, 23, 0.3);
  --color-yellow-alpha-50: rgba(255, 232, 23, 0.05);
  --color-yellow-rgb: 245, 162, 0;
  --cursor-action: pointer;
  --dark: var(--text-normal, var(--color-base-60, #212529));
  --darkgray: var(--text-normal, var(--color-base-60, #212529));
  --default-font: "Inter", sans-serif;
  --divider-color: var(--background-modifier-border, #e5e3dc);
  --divider-color-hover: var(--interactive-accent, hsl(
    223,
    100%,
    64.5%
  ));
  --divider-width: var(--scale-dimension-size-10, 1px);
  --divider-width-hover: var(--scale-dimension-size-25, 2px);
  --dropdown-background: var(--interactive-normal, #e5e3dc);
  --dropdown-background-hover: var(--interactive-hover, #dfddd3);
  --embed-block-shadow-hover: 0 0 0 1px var(--background-modifier-border),
    inset 0 0 0 1px var(--background-modifier-border);
  --embed-border-left: 2px solid var(--interactive-accent);
  --embed-border-right: none;
  --file-header-background: var(--background-primary, #f2f1ed);
  --file-header-background-focused: var(--background-primary, #f2f1ed);
  --file-header-border: var(--border-width, 0.75x solid transparent) solid transparent;
  --file-header-font: var(--font-interface, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --file-header-font-weight: 500;
  --file-line-width: 640px;
  --file-margins: var(--size-4-8, 32px);
  --flair-background: var(--interactive-normal, #e5e3dc);
  --flair-color: var(--text-normal, #212529);
  --font-small: 0.933rem;
  --font-smaller: 0.875rem;
  --font-smallest: 0.8rem;
  --font-ui-large: var(--scale-dimension-font-size-400, 20px);
  --font-ui-medium: var(--scale-dimension-font-size-200, 16px);
  --font-ui-small: var(--scale-dimension-font-size-75, 13px);
  --font-ui-smaller: var(--scale-dimension-font-size-25, 11px);
  --footnote-divider-color: var(--metadata-divider-color, #e5e3dc);
  --footnote-divider-width: var(--border-width, 0.75x);
  --footnote-id-color: var(--text-muted, #343a40);
  --footnote-id-color-no-occurrences: var(--text-faint, #495057);
  --footnote-input-background-active: var(--metadata-input-background-active, rgba(0, 0, 0, 0.1));
  --footnote-radius: var(--radius-s, 2px);
  --footnote-size: var(--font-smaller, 0.875rem);
  --graph-node: var(--text-muted, #343a40);
  --graph-node-attachment: var(--color-yellow, #f5a200);
  --graph-node-focused: var(--text-accent, hsl(223, 100%, 62%));
  --graph-node-tag: var(--color-green, #40c057);
  --graph-node-unresolved: var(--text-faint, #495057);
  --graph-text: var(--text-normal, #212529);
  --gray: var(--text-muted, var(--color-base-50, #343a40));
  --h1-size: 1.375rem;
  --h1-weight: 600;
  --h2-size: 1.25rem;
  --h2-weight: 600;
  --h3-size: 1.125rem;
  --h3-weight: 600;
  --h4-size: 1rem;
  --h4-weight: 600;
  --h5-size: 0.875rem;
  --h5-style: small-caps;
  --h5-weight: 600;
  --h6-size: 0.813rem;
  --h6-style: small-caps;
  --header-height: 42px;
  --heading-formatting: var(--text-faint, #495057);
  --highlight: var(--text-highlight-bg, var(--color-ash-500, #dfddd3));
  --hr-color: var(--background-modifier-border, #e5e3dc);
  --hr-thickness: 1px;
  --icon-color: var(--text-muted, #343a40);
  --icon-color-active: var(--text-accent, hsl(223, 100%, 62%));
  --icon-color-focused: var(--text-normal, #212529);
  --icon-color-hover: var(--text-muted, #343a40);
  --icon-opacity: 0.6;
  --indentation-guide-color: rgba(var(--mono-rgb-100), 0.1);
  --indentation-guide-width-active: var(--border-width, 0.75x);
  --inline-title-size: var(--h1-size, 1.375rem);
  --inline-title-weight: var(--h1-weight, 600);
  --input-border-width: var(--scale-dimension-size-0, 0px);
  --input-date-separator: var(--text-faint, #495057);
  --input-height: var(--scale-dimension-size-400, 32px);
  --input-placeholder-color: var(--text-faint, #495057);
  --input-radius: var(--radius-m, 6px);
  --input-shadow: transparent;
  --input-shadow-hover: transparent;
  --interactive-accent: var(--color-accent-1, hsl(
    223,
    100%,
    64.5%
  ));
  --interactive-accent-hover: var(--color-accent-2, hsl(
    223,
    100%,
    67%
  ));
  --interactive-accent-hsl: var(--color-accent-hsl, 223, 100%, 62%);
  --interactive-hover: var(--color-ash-500, #dfddd3);
  --interactive-normal: var(--color-ash-400, #e5e3dc);
  --light: var(--background-primary, var(--color-ash-200, #f2f1ed));
  --lightgray: var(--background-secondary, var(--color-ash-400, #e5e3dc));
  --line-height-large: 1.6;
  --link-color: var(--text-accent, hsl(223, 100%, 62%));
  --link-color-hover: var(--text-accent-hover, hsl(
    223,
    100%,
    67%
  ));
  --link-decoration: none;
  --link-external-color: var(--text-accent, hsl(223, 100%, 62%));
  --link-external-color-hover: var(--text-accent-hover, hsl(
    223,
    100%,
    67%
  ));
  --link-external-decoration: none;
  --link-unresolved-color: var(--text-accent, hsl(223, 100%, 62%));
  --link-unresolved-opacity: 0.6;
  --list-bullet-size: 0.2rem;
  --list-marker-color: var(--color-base-35, #868e96);
  --list-marker-color-collapsed: var(--text-accent, hsl(223, 100%, 62%));
  --list-marker-color-hover: var(--text-muted, #343a40);
  --list-spacing: 0.14rem;
  --menu-background: var(--background-secondary, #e5e3dc);
  --menu-border-color: var(--background-modifier-border-hover, #868e96);
  --menu-border-width: var(--border-width, 0.75x);
  --menu-radius: var(--radius-m, 6px);
  --menu-shadow: var(--shadow-s, 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07));
  --metadata-border-color: var(--background-modifier-border, #e5e3dc);
  --metadata-divider-color: var(--background-modifier-border, #e5e3dc);
  --metadata-input-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --metadata-input-font: var(--font-interface, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-input-font-size: var(--font-smaller, 0.875rem);
  --metadata-input-text-color: var(--text-normal, #212529);
  --metadata-label-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --metadata-label-font: var(--font-interface, "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif);
  --metadata-label-font-size: var(--font-smaller, 0.875rem);
  --metadata-label-text-color: var(--text-muted, #343a40);
  --metadata-label-text-color-hover: var(--text-muted, #343a40);
  --metadata-property-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --modal-background: var(--background-primary, #f2f1ed);
  --modal-border-color: var(
    --color-base-40,
    var(--background-modifier-border-focus)
  );
  --modal-border-width: var(--border-width, 0.75x);
  --nav-collapse-icon-color: var(--collapse-icon-color, #495057);
  --nav-collapse-icon-color-collapsed: var(--text-faint, #495057);
  --nav-heading-color: var(--text-normal, #212529);
  --nav-heading-color-collapsed: var(--text-faint, #495057);
  --nav-heading-color-collapsed-hover: var(--text-muted, #343a40);
  --nav-heading-color-hover: var(--text-normal, #212529);
  --nav-indentation-guide-color: var(--indentation-guide-color, rgba(0, 0, 0, 0.1));
  --nav-item-background-active: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --nav-item-background-hover: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  --nav-item-background-selected: hsla(var(--color-accent-hsl), 0.2);
  --nav-item-children-margin-left: var(--size-4-3, 12px);
  --nav-item-children-padding-left: var(--size-4-2, 8px);
  --nav-item-color: var(--text-muted, #343a40);
  --nav-item-color-active: var(--text-normal, #212529);
  --nav-item-color-highlighted: var(--text-accent-hover, hsl(
    223,
    100%,
    67%
  ));
  --nav-item-color-hover: var(--text-normal, #212529);
  --nav-item-color-selected: var(--text-normal, #212529);
  --nav-item-padding: var(--size-4-1) var(--size-4-2, 4px 8px);
  --nav-item-parent-padding: var(--nav-item-padding, 4px 8px);
  --nav-item-radius: var(--radius-s, 2px);
  --nav-item-weight-active: var(--bold-weight, 600);
  --nav-item-weight-hover: var(--bold-weight, 600);
  --nav-item-white-space: nowrap;
  --nav-tag-color: var(--text-faint, #495057);
  --nav-tag-color-active: var(--text-muted, #343a40);
  --nav-tag-color-hover: var(--text-muted, #343a40);
  --nav-tag-radius: var(--radius-s, 2px);
  --pdf-background: var(--background-primary, #f2f1ed);
  --pdf-page-background: var(--background-primary, #f2f1ed);
  --pdf-sidebar-background: var(--background-primary, #f2f1ed);
  --pill-border-color: var(--background-modifier-border, #e5e3dc);
  --pill-border-color-hover: var(--background-modifier-border-hover, #868e96);
  --pill-border-width: var(--border-width, 0.75x);
  --pill-color: var(--text-muted, #343a40);
  --pill-color-hover: var(--text-normal, #212529);
  --pill-color-remove: var(--text-faint, #495057);
  --pill-color-remove-hover: var(--text-accent, hsl(223, 100%, 62%));
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: var(--background-primary, #f2f1ed);
  --prompt-border-color: var(
    --color-base-40,
    var(--background-modifier-border-focus)
  );
  --prompt-border-width: var(--border-width, 0.75x);
  --prompt-max-width: 62vw;
  --radius-full: var(--scale-dimension-size-max, 9999px);
  --radius-l: var(--scale-radius-4, 12px);
  --radius-m: var(--scale-radius-3, 6px);
  --radius-s: var(--scale-radius-1, 2px);
  --radius-xl: var(--scale-radius-5, 16px);
  --raised-background: var(--blur-background, color-mix(in srgb, #f2f1ed 65%, transparent) linear-gradient(#f2f1ed, color-mix(in srgb, #f2f1ed 65%, transparent)));
  --ribbon-background: var(--background-primary, #f2f1ed);
  --ribbon-background-collapsed: var(--background-primary, #f2f1ed);
  --ribbon-width: var(--scale-dimension-size-600, 48px);
  --scale-dimension-font-size-10: 10px;
  --scale-dimension-font-size-100: 14px;
  --scale-dimension-font-size-1000: 48px;
  --scale-dimension-font-size-1100: 54px;
  --scale-dimension-font-size-1200: 60px;
  --scale-dimension-font-size-1300: 72px;
  --scale-dimension-font-size-200: 16px;
  --scale-dimension-font-size-25: 11px;
  --scale-dimension-font-size-300: 18px;
  --scale-dimension-font-size-400: 20px;
  --scale-dimension-font-size-50: 12px;
  --scale-dimension-font-size-500: 24px;
  --scale-dimension-font-size-600: 28px;
  --scale-dimension-font-size-700: 32px;
  --scale-dimension-font-size-75: 13px;
  --scale-dimension-font-size-800: 36px;
  --scale-dimension-font-size-900: 42px;
  --scale-dimension-size-0: 0px;
  --scale-dimension-size-10: 1px;
  --scale-dimension-size-100: 8px;
  --scale-dimension-size-1000: 80px;
  --scale-dimension-size-125: 10px;
  --scale-dimension-size-150: 12px;
  --scale-dimension-size-1500: 100px;
  --scale-dimension-size-175: 14px;
  --scale-dimension-size-200: 16px;
  --scale-dimension-size-2000: 160px;
  --scale-dimension-size-225: 18px;
  --scale-dimension-size-25: 2px;
  --scale-dimension-size-250: 20px;
  --scale-dimension-size-300: 24px;
  --scale-dimension-size-3000: 240px;
  --scale-dimension-size-400: 32px;
  --scale-dimension-size-50: 4px;
  --scale-dimension-size-500: 40px;
  --scale-dimension-size-600: 48px;
  --scale-dimension-size-700: 56px;
  --scale-dimension-size-75: 6px;
  --scale-dimension-size-800: 64px;
  --scale-dimension-size-900: 72px;
  --scale-dimension-size-max: 9999px;
  --scale-radius-1: 2px;
  --scale-radius-2: 4px;
  --scale-radius-3: 6px;
  --scale-radius-4: 12px;
  --scale-radius-5: 16px;
  --scale-radius-6: 24px;
  --scale-radius-9999: 24px;
  --search-clear-button-color: var(--text-muted, #343a40);
  --search-icon-color: var(--text-muted, #343a40);
  --search-result-background: var(--background-primary, #f2f1ed);
  --secondary: var(--text-accent, var(--color-accent, hsl(223, 100%, 62%)));
  --setting-group-heading-color: var(--text-normal, #212529);
  --setting-group-heading-size: var(--font-ui-medium, 16px);
  --setting-items-background: var(--background-primary-alt, #dfddd3);
  --setting-items-border-color: var(--background-modifier-border, #e5e3dc);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --shiki-active-tab-border-color: var(--shiki-highlight-neutral, #343a40);
  --shiki-code-background: var(--code-background, rgba(0, 0, 0, 0.05));
  --shiki-code-block-border-radius: var(--code-radius, 2px);
  --shiki-code-comment: var(--text-faint, #495057);
  --shiki-code-function: var(--color-green, #40c057);
  --shiki-code-important: var(--color-orange, #fd7e14);
  --shiki-code-keyword: var(--color-pink, #f558ad);
  --shiki-code-normal: var(--text-muted, #343a40);
  --shiki-code-property: var(--color-cyan, #28adca);
  --shiki-code-punctuation: var(--text-muted, #343a40);
  --shiki-code-string: var(--color-yellow, #f5a200);
  --shiki-code-value: var(--color-purple, #7950f2);
  --shiki-gutter-border-color: var(--background-modifier-border, #e5e3dc);
  --shiki-gutter-border-width: var(--border-width, 0.75x);
  --shiki-gutter-text-color: var(--text-faint, #495057);
  --shiki-gutter-text-color-highlight: var(--shiki-code-normal, #343a40);
  --shiki-highlight-neutral: var(--shiki-code-normal, #343a40);
  --shiki-terminal-dots-color: var(--text-faint, #495057);
  --slider-thumb-border-color: var(--background-modifier-border-hover, #868e96);
  --slider-thumb-radius: var(--slider-thumb-height, 50%);
  --slider-track-background: var(--background-modifier-border, #e5e3dc);
  --static-alpha-balck-100: rgba(0, 0, 0, 0.06);
  --static-alpha-balck-150: rgba(0, 0, 0, 0.1);
  --static-alpha-balck-200: rgba(0, 0, 0, 0.2);
  --static-alpha-balck-500: rgba(0, 0, 0, 0.5);
  --static-alpha-balck-700: rgba(0, 0, 0, 0.7);
  --static-alpha-white-200: rgba(255, 255, 255, 0.2);
  --static-alpha-white-500: rgba(255, 255, 255, 0.5);
  --static-black: #000000;
  --static-blue: #3d73ff;
  --static-large: 162%;
  --static-medium: 150%;
  --static-small: 132%;
  --static-white: #ffffff;
  --status-bar-background: var(--background-secondary, #e5e3dc);
  --status-bar-border-color: var(--divider-color, #e5e3dc);
  --status-bar-font-size: var(--font-ui-smaller, 11px);
  --status-bar-radius: var(--radius-m, 6px);
  --status-bar-text-color: var(--text-muted, #343a40);
  --suggestion-background: var(--background-primary, #f2f1ed);
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-2: var(--color-orange, #fd7e14);
  --sync-avatar-color-3: var(--color-yellow, #f5a200);
  --sync-avatar-color-4: var(--color-green, #40c057);
  --sync-avatar-color-5: var(--color-cyan, #28adca);
  --sync-avatar-color-6: var(--color-blue, #3d73ff);
  --sync-avatar-color-7: var(--color-purple, #7950f2);
  --sync-avatar-color-8: var(--color-pink, #f558ad);
  --tab-background-active: var(--background-primary, #f2f1ed);
  --tab-container-background: var(--background-secondary, #e5e3dc);
  --tab-divider-color: var(--background-modifier-border-hover, #868e96);
  --tab-outline-color: var(--divider-color, #e5e3dc);
  --tab-radius: var(--radius-s, 2px);
  --tab-stacked-header-width: var(--header-height, 42px);
  --tab-stacked-text-align: left;
  --tab-switcher-background: var(--background-secondary, #e5e3dc);
  --tab-text-color: var(--text-faint, #495057);
  --tab-text-color-active: var(--text-muted, #343a40);
  --tab-text-color-focused: var(--text-muted, #343a40);
  --tab-text-color-focused-active: var(--text-muted, #343a40);
  --tab-text-color-focused-active-current: var(--text-normal, #212529);
  --tab-text-color-focused-highlighted: var(--text-accent, hsl(223, 100%, 62%));
  --table-add-button-border-color: var(--background-modifier-border, #e5e3dc);
  --table-border-color: var(--background-modifier-border-row, #dfddd3);
  --table-drag-handle-background-active: var(--table-selection-border-color, hsl(
    223,
    100%,
    64.5%
  ));
  --table-drag-handle-color: var(--text-faint, #495057);
  --table-header-background: var(--background-secondary, #e5e3dc);
  --table-header-border-color: var(--table-border-color, #dfddd3);
  --table-header-color: var(--text-normal, #212529);
  --table-header-size: var(--font-ui-small, 13px);
  --table-header-weight: var(--bold-weight, 600);
  --table-selection-border-color: var(--interactive-accent, hsl(
    223,
    100%,
    64.5%
  ));
  --table-text-size: var(--font-ui-medium, 16px);
  --table-white-space: normal;
  --tag-color: var(--text-accent, hsl(223, 100%, 62%));
  --tag-color-hover: var(--text-accent, hsl(223, 100%, 62%));
  --tag-padding-x: 0.65rem;
  --tag-padding-y: 0.25rem;
  --tag-radius: var(--radius-m, 6px);
  --tag-size: var(--font-smaller, 0.875rem);
  --tertiary: var(--text-accent-hover, var(--color-accent-2, hsl(
    223,
    100%,
    67%
  )));
  --text-accent: var(--color-accent, hsl(223, 100%, 62%));
  --text-accent-hover: var(--color-accent-2, hsl(
    223,
    100%,
    67%
  ));
  --text-fade: var(--color-base-30, #adb5bd);
  --text-faint: var(--color-base-40, #495057);
  --text-highlight-bg: var(--color-ash-500, #dfddd3);
  --text-highlight-bg-active: var(--color-yellow-alpha-100, rgba(255, 232, 23, 0.2));
  --text-muted: var(--color-base-50, #343a40);
  --text-normal: var(--color-base-60, #212529);
  --text-selection: hsla(var(--interactive-accent-hsl), 0.25);
  --text-success: var(--color-green, #40c057);
  --text-warning: var(--color-orange, #fd7e14);
  --textHighlight: var(--text-highlight-bg, var(--color-ash-500, #dfddd3));
  --titlebar-background: var(--background-secondary, #e5e3dc);
  --titlebar-background-focused: var(--background-secondary, #e5e3dc);
  --titlebar-border-color: var(--background-modifier-border, #e5e3dc);
  --titlebar-text-color: var(--text-muted, #343a40);
  --titlebar-text-color-focused: var(--text-normal, #212529);
  --traffic-lights-offset-x: var(--header-height, 42px);
  --traffic-lights-offset-y: var(--header-height, 42px);
  --vault-name-color: var(--text-normal, #212529);
  --vault-name-font-size: var(--font-ui-small, 13px);
  --vault-name-font-weight: var(--font-medium, 500);
  --vault-profile-color: var(--text-normal, #212529);
  --vault-profile-color-hover: var(--vault-profile-color, #212529);
  --quartz-icon-color: currentColor;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary);
  color: var(--text-normal);
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: var(--tab-container-background, rgb(229, 227, 220));
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: var(--background-primary, rgb(242, 241, 237));
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: var(--background-primary, rgb(242, 241, 237));
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 227, 220);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: var(--tab-container-background, rgb(229, 227, 220));
  border-left-color: rgb(229, 227, 220);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body html {
  --default-font: "Inter", sans-serif;
  --font-monospace: "Source Code Pro", monospace;
  --scale-dimension-font-size-10: 10px;
  --scale-dimension-font-size-100: 14px;
  --scale-dimension-font-size-1000: 48px;
  --scale-dimension-font-size-1100: 54px;
  --scale-dimension-font-size-1200: 60px;
  --scale-dimension-font-size-1300: 72px;
  --scale-dimension-font-size-200: 16px;
  --scale-dimension-font-size-25: 11px;
  --scale-dimension-font-size-300: 18px;
  --scale-dimension-font-size-400: 20px;
  --scale-dimension-font-size-50: 12px;
  --scale-dimension-font-size-500: 24px;
  --scale-dimension-font-size-600: 28px;
  --scale-dimension-font-size-700: 32px;
  --scale-dimension-font-size-75: 13px;
  --scale-dimension-font-size-800: 36px;
  --scale-dimension-font-size-900: 42px;
  --scale-dimension-size-0: 0px;
  --scale-dimension-size-10: 1px;
  --scale-dimension-size-100: 8px;
  --scale-dimension-size-1000: 80px;
  --scale-dimension-size-125: 10px;
  --scale-dimension-size-150: 12px;
  --scale-dimension-size-1500: 100px;
  --scale-dimension-size-175: 14px;
  --scale-dimension-size-200: 16px;
  --scale-dimension-size-2000: 160px;
  --scale-dimension-size-225: 18px;
  --scale-dimension-size-25: 2px;
  --scale-dimension-size-250: 20px;
  --scale-dimension-size-300: 24px;
  --scale-dimension-size-3000: 240px;
  --scale-dimension-size-400: 32px;
  --scale-dimension-size-50: 4px;
  --scale-dimension-size-500: 40px;
  --scale-dimension-size-600: 48px;
  --scale-dimension-size-700: 56px;
  --scale-dimension-size-75: 6px;
  --scale-dimension-size-800: 64px;
  --scale-dimension-size-900: 72px;
  --scale-dimension-size-max: 9999px;
  --scale-radius-1: var(--scale-dimension-size-25, 2px);
  --scale-radius-2: var(--scale-dimension-size-50, 4px);
  --scale-radius-3: var(--scale-dimension-size-75, 6px);
  --scale-radius-4: var(--scale-dimension-size-150, 12px);
  --scale-radius-5: var(--scale-dimension-size-200, 16px);
  --scale-radius-6: var(--scale-dimension-size-300, 24px);
  --scale-radius-9999: var(--scale-dimension-size-300, 24px);
  --static-large: 162%;
  --static-medium: 150%;
  --static-small: 132%;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: var(--bold-color, rgb(33, 37, 41));
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: var(--italic-color, rgb(33, 37, 41));
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: var(--italic-color, rgb(33, 37, 41));
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: var(--bold-color, rgb(33, 37, 41));
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .text-highlight {
  background-color: var(--text-highlight-bg, rgb(223, 221, 211));
  color: var(--text-normal, rgb(33, 37, 41));
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body del {
  color: var(--text-faint, rgb(73, 80, 87));
  outline: rgb(73, 80, 87) none 0px;
  text-decoration-color: rgb(73, 80, 87);
}

html[saved-theme="light"] body h1.article-title {
  color: var(--text-normal, rgb(33, 37, 41));
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(73, 80, 87);
  border-radius: 6px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: var(--checkbox-color, rgb(74, 125, 255));
  border-color: rgb(74, 125, 255);
}

html[saved-theme="light"] body p {
  color: var(--text-muted, rgb(52, 58, 64));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(52, 58, 64) none 0px;
  text-decoration-color: rgb(52, 58, 64);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: var(--link-external-color, rgb(61, 116, 255));
  outline: rgb(61, 116, 255) none 0px;
  text-decoration-color: rgb(61, 116, 255);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: var(--link-color, rgb(61, 116, 255));
  outline: rgb(61, 116, 255) none 0px;
  text-decoration-color: rgb(61, 116, 255);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: var(--link-unresolved-color, rgb(61, 116, 255));
  outline: rgb(61, 116, 255) none 0px;
  text-decoration: rgba(61, 116, 255, 0.3);
  text-decoration-color: var(--link-unresolved-decoration-color, rgba(61, 116, 255, 0.3));
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body dt {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ol > li {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ul > li {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: var(--color-accent, rgb(61, 116, 255));
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body table {
  background-color: var(--color-gray-alpha-25, rgba(0, 0, 0, 0.03));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
  margin-bottom: var(--scale-dimension-size-25, 0px);
  width: 602px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: var(--background-secondary, rgb(229, 227, 220));
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 221, 211);
  border-left-color: rgb(223, 221, 211);
  border-right-color: rgb(223, 221, 211);
  border-top-color: rgb(223, 221, 211);
  color: var(--table-text-color, rgb(33, 37, 41));
  padding-bottom: var(--size-4-3, 12px);
  padding-top: var(--size-4-3, 12px);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(223, 221, 211);
  border-left-color: rgb(223, 221, 211);
  border-right-color: rgb(223, 221, 211);
  border-top-color: rgb(223, 221, 211);
  color: var(--table-header-color, rgb(33, 37, 41));
  padding-bottom: var(--size-4-3, 12px);
  padding-top: var(--size-4-3, 12px);
}

html[saved-theme="light"] body tr {
  background-color: var(--table-header-background, rgb(229, 227, 220));
}`,
    code: `html[saved-theme="light"] body code {
  background-color: var(--code-background, rgba(0, 0, 0, 0.05));
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--code-normal, rgb(52, 58, 64));
  padding-bottom: 2px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 2px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: var(--code-background, rgba(0, 0, 0, 0.05));
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(33, 37, 41);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-radius: 6px;
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-radius: 6px;
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: var(--background-primary-alt, rgb(223, 221, 211));
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(33, 37, 41);
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(74, 125, 255);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(73, 80, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(73, 80, 87);
  border-right-color: rgb(73, 80, 87);
  border-top-color: rgb(73, 80, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-left: -26.4px;
  width: var(--checkbox-size, 17.5938px);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(173, 181, 189);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(173, 181, 189);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 241, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(242, 241, 237);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 126, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(52, 58, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 162, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 173, 202);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(61, 115, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(61, 115, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 162, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(245, 162, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(121, 80, 242);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 192, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 192, 87);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(64, 192, 87);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: var(--callout-summary, 0, 0, 0);
  background: rgba(0, 0, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: var(--callout-bug, 250, 82, 82);
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: var(--callout-error, 250, 82, 82);
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: var(--callout-example, 121, 80, 242);
  background: rgba(121, 80, 242, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(121, 80, 242, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(121, 80, 242, 0.2);
  border-right-color: rgba(121, 80, 242, 0.2);
  border-top-color: rgba(121, 80, 242, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: var(--callout-fail, 250, 82, 82);
  background: rgba(250, 82, 82, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: var(--callout-info, 3, 105, 224);
  background: rgba(3, 105, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(3, 105, 224, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(3, 105, 224, 0.2);
  border-right-color: rgba(3, 105, 224, 0.2);
  border-top-color: rgba(3, 105, 224, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: var(--callout-default, 0, 0, 0);
  background: rgba(0, 0, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: var(--callout-question, 245, 162, 0);
  background: rgba(245, 162, 0, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(245, 162, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(245, 162, 0, 0.2);
  border-right-color: rgba(245, 162, 0, 0.2);
  border-top-color: rgba(245, 162, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: var(--callout-quote, 158, 158, 158);
  border-bottom-color: rgba(158, 158, 158, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(158, 158, 158, 0.2);
  border-right-color: rgba(158, 158, 158, 0.2);
  border-top-color: rgba(158, 158, 158, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: var(--callout-success, 8, 185, 78);
  border-bottom-color: rgba(8, 185, 78, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(8, 185, 78, 0.2);
  border-right-color: rgba(8, 185, 78, 0.2);
  border-top-color: rgba(8, 185, 78, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: var(--callout-tip, 40, 173, 202);
  background: rgba(40, 173, 202, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(40, 173, 202, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(40, 173, 202, 0.2);
  border-right-color: rgba(40, 173, 202, 0.2);
  border-top-color: rgba(40, 173, 202, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: var(--callout-todo, 3, 105, 224);
  background: rgba(3, 105, 224, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(3, 105, 224, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(3, 105, 224, 0.2);
  border-right-color: rgba(3, 105, 224, 0.2);
  border-top-color: rgba(3, 105, 224, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: var(--callout-warning, 253, 126, 20);
  background: rgba(253, 126, 20, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  border-bottom-color: rgba(253, 126, 20, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(253, 126, 20, 0.2);
  border-right-color: rgba(253, 126, 20, 0.2);
  border-top-color: rgba(253, 126, 20, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 0, 0, 0;
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: var(--callout-title-color, rgb(0, 0, 0));
  font-weight: var(--font-normal, 400);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(33, 37, 41);
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
  background-color: rgb(229, 227, 220);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 0px;
  border-left-color: rgb(229, 227, 220);
  border-left-width: 0px;
  border-right-color: rgb(229, 227, 220);
  border-right-width: 0px;
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 0px;
  color: var(--text-normal, rgb(33, 37, 41));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: var(--prompt-background, rgb(242, 241, 237));
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-left-width: 0px;
  border-right-color: rgb(33, 37, 41);
  border-right-width: 0px;
  border-top-color: rgb(33, 37, 41);
  border-top-width: 0px;
  box-shadow: var(--shadow-l, rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-left-width: 0px;
  border-right-color: rgb(33, 37, 41);
  border-right-width: 0px;
  border-top-color: rgb(33, 37, 41);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: var(--background-modifier-hover, rgba(0, 0, 0, 0.1));
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: var(--pill-background, rgba(61, 116, 255, 0.1));
  border-bottom-color: rgba(61, 116, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(61, 116, 255, 0.15);
  border-right-color: rgba(61, 116, 255, 0.15);
  border-top-color: rgba(61, 116, 255, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(61, 116, 255);
}

html[saved-theme="light"] body h1 {
  color: var(--h1-color, rgb(33, 37, 41));
}

html[saved-theme="light"] body h1.article-title {
  color: var(--inline-title-color, rgb(33, 37, 41));
  font-size: var(--inline-title-size, 22px);
  font-weight: var(--inline-title-weight, 600);
}

html[saved-theme="light"] body h2 {
  color: var(--h2-color, rgb(33, 37, 41));
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: var(--inline-title-color, rgb(33, 37, 41));
}

html[saved-theme="light"] body h3 {
  color: var(--h3-color, rgb(33, 37, 41));
}

html[saved-theme="light"] body h4 {
  color: var(--h4-color, rgb(33, 37, 41));
}

html[saved-theme="light"] body h5 {
  color: var(--h5-color, rgb(33, 37, 41));
}

html[saved-theme="light"] body h6 {
  color: var(--h6-color, rgb(33, 37, 41));
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(229, 227, 220);
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: var(--callout-default, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 8px;
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container .tree-item-children {
  border-left-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: var(--nav-item-color, rgb(52, 58, 64));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold-weight, 600);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: var(--nav-item-color, rgb(52, 58, 64));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: var(--bold-weight, 600);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: var(--bold-weight, 600);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(52, 58, 64));
  cursor: var(--cursor-action, pointer);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: var(--status-bar-background, rgb(229, 227, 220));
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--status-bar-text-color, rgb(52, 58, 64));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(52, 58, 64);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(33, 37, 41);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(52, 58, 64));
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: var(--nav-item-color, rgb(52, 58, 64));
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--icon-color, rgb(52, 58, 64));
  cursor: var(--cursor-action, pointer);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(52, 58, 64);
  stroke: rgb(52, 58, 64);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(73, 80, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(73, 80, 87);
  border-right-color: rgb(73, 80, 87);
  border-top-color: rgb(73, 80, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--text-faint, rgb(73, 80, 87));
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: var(--text-faint, rgb(73, 80, 87));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .canvas-node-file {
  color: var(--text-normal, rgb(33, 37, 41));
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: var(--background-primary, rgb(242, 241, 237));
  border-color: rgb(33, 37, 41);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(223, 221, 211);
  color: var(--table-header-color, rgb(33, 37, 41));
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(229, 227, 220);
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  color: var(--text-muted, rgb(52, 58, 64));
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(52, 58, 64);
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(229, 227, 220);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(52, 58, 64);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: var(--pill-background, rgba(61, 116, 255, 0.1));
  border-radius: 6px;
  color: var(--pill-color, rgb(61, 116, 255));
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(52, 58, 64);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: var(--background-primary, rgb(242, 241, 237));
  color: var(--text-normal, rgb(33, 37, 41));
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: var(--background-primary, rgb(242, 241, 237));
  border-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: var(--tab-container-background, rgb(229, 227, 220));
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(33, 37, 41);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: var(--status-bar-background, rgb(229, 227, 220));
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: var(--text-normal, rgb(33, 37, 41));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(52, 58, 64);
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  color: var(--text-normal, rgb(52, 58, 64));
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: var(--code-background, rgba(0, 0, 0, 0.05));
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: var(--code-normal, rgb(52, 58, 64));
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

html[saved-theme="light"] body sub {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body summary {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body sup {
  color: rgb(33, 37, 41);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: var(--tag-background, rgba(61, 116, 255, 0.1));
  border-bottom-color: rgba(61, 116, 255, 0.15);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(61, 116, 255, 0.15);
  border-right-color: rgba(61, 116, 255, 0.15);
  border-top-color: rgba(61, 116, 255, 0.15);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: var(--tag-color, rgb(61, 116, 255));
}`,
  },
};
