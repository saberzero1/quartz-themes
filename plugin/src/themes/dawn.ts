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
  --background-modifier-active-hover: rgba(61, 116, 255, 0.15);
  --background-modifier-border: rgba(255, 255, 255, 0.05);
  --background-modifier-border-focus: #495057;
  --background-modifier-border-hover: #979fa7;
  --background-modifier-border-row: #212529;
  --background-modifier-cover: rgba(0, 0, 0, 0.7);
  --background-modifier-error: #fa5252;
  --background-modifier-error-hover: #fa5252;
  --background-modifier-error-rgb: 250, 82, 82;
  --background-modifier-form-field: #343a40;
  --background-modifier-form-field-hover: #343a40;
  --background-modifier-hover: rgba(255, 255, 255, 0.1);
  --background-modifier-success: #69db7c;
  --background-modifier-success-rgb: 105, 219, 124;
  --background-primary: #212529;
  --background-primary-alt: #646b73;
  --background-primary-low: #15171a;
  --background-secondary: #343a40;
  --background-secondary-alt: rgba(255, 255, 255, 0.08);
  --bases-cards-background: #212529;
  --bases-cards-border-width: 0.75x;
  --bases-cards-cover-background: #646b73;
  --bases-cards-font-size: 0.875rem;
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --bases-cards-shadow-hover: 0 0 0 1px #979fa7;
  --bases-embed-border-color: rgba(255, 255, 255, 0.05);
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: #dee2e6;
  --bases-group-heading-property-size: 11px;
  --bases-group-heading-value-size: 0.875rem;
  --bases-header-border-width: 0 0 0.75x 0;
  --bases-table-border-color: #212529;
  --bases-table-cell-background-active: #212529;
  --bases-table-cell-background-disabled: #646b73;
  --bases-table-cell-background-selected: rgba(61, 116, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #495057;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(61, 116, 255);
  --bases-table-column-border-width: 0.75x;
  --bases-table-container-border-radius: 2px;
  --bases-table-container-border-width: 0.75x;
  --bases-table-font-size: 0.875rem;
  --bases-table-group-background: #646b73;
  --bases-table-header-background: #212529;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.1);
  --bases-table-header-color: #dee2e6;
  --bases-table-row-border-width: 0.75x;
  --bases-table-summary-background: #212529;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.1);
  --blockquote-border-color: rgb(61, 116, 255);
  --blockquote-border-thickness: 1px;
  --blur-background: color-mix(in srgb, #343a40 65%, transparent) linear-gradient(#343a40, color-mix(in srgb, #343a40 65%, transparent));
  --bold-background: rgba(0, 0, 0, 0.1);
  --bold-weight: 600;
  --border-width: 0.75x;
  --button-radius: 6px;
  --callout-border-opacity: 0.2;
  --callout-bug: 250, 82, 82;
  --callout-default: 255, 255, 255;
  --callout-error: 250, 82, 82;
  --callout-fail: 250, 82, 82;
  --callout-padding: 8px 20px 8px
    20px;
  --callout-question: 255, 228, 82;
  --callout-radius: 6px;
  --callout-success: 105, 219, 124;
  --callout-summary: 255, 255, 255;
  --callout-title-padding: 0px;
  --callout-title-size: 16px;
  --callout-warning: 255, 154, 103;
  --canvas-background: #212529;
  --canvas-card-label-color: #adb5bd;
  --canvas-color-1: 250, 82, 82;
  --canvas-color-2: 255, 154, 103;
  --canvas-color-3: 255, 228, 82;
  --canvas-color-4: 105, 219, 124;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #646b73;
  --caret-color: #f1f3f5;
  --checkbox-border-color: #adb5bd;
  --checkbox-border-color-hover: #dee2e6;
  --checkbox-color: rgb(61, 116, 255);
  --checkbox-color-hover: rgb(41, 101, 255);
  --checkbox-marker-color: #212529;
  --checkbox-radius: 6px;
  --checkbox-size: 17.6px;
  --checklist-done-color: #646b73;
  --clickable-icon-radius: 6px;
  --code-background: rgba(255, 255, 255, 0.05);
  --code-border-color: rgba(255, 255, 255, 0.05);
  --code-bracket-background: rgba(255, 255, 255, 0.1);
  --code-comment: #646b73;
  --code-function: #ffe452;
  --code-important: #ff9a67;
  --code-keyword: #6a94fc;
  --code-normal: #dee2e6;
  --code-operator: #fa5252;
  --code-property: #59e8d4;
  --code-punctuation: #dee2e6;
  --code-radius: 2px;
  --code-size: 0.875rem;
  --code-string: #69db7c;
  --code-tag: #fa5252;
  --code-value: #d0bfff;
  --collapse-icon-color: #adb5bd;
  --collapse-icon-color-collapsed: rgb(41, 101, 255);
  --color-accent: rgb(61, 116, 255);
  --color-accent-1: rgb(41, 101, 255);
  --color-accent-2: rgb(82, 131, 255);
  --color-accent-hsl: 223, 100%, 62%;
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
  --default-font: "Inter", sans-serif;
  --divider-color: rgba(255, 255, 255, 0.05);
  --divider-color-hover: rgb(61, 116, 255);
  --divider-width-hover: 2px;
  --dropdown-background: #343a40;
  --dropdown-background-hover: #495057;
  --embed-block-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.05),
    inset 0 0 0 1px rgba(255, 255, 255, 0.05);
  --embed-border-left: 2px solid rgb(61, 116, 255);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(61, 116, 255);
  --file-header-background: #212529;
  --file-header-background-focused: #212529;
  --file-header-border: 0.75x solid transparent;
  --file-header-font: '??', '??', "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-weight: 500;
  --file-line-width: 640px;
  --file-margins: 32px;
  --flair-background: #343a40;
  --flair-color: #f1f3f5;
  --font-interface: '??', '??', "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-small: 0.933rem;
  --font-smaller: 0.875rem;
  --font-smallest: 0.8rem;
  --font-ui-medium: 16px;
  --font-ui-smaller: 11px;
  --footnote-divider-color: rgba(255, 255, 255, 0.05);
  --footnote-divider-width: 0.75x;
  --footnote-id-color: #dee2e6;
  --footnote-id-color-no-occurrences: #adb5bd;
  --footnote-input-background-active: rgba(255, 255, 255, 0.1);
  --footnote-radius: 2px;
  --footnote-size: 0.875rem;
  --graph-line: #979fa7;
  --graph-node: #dee2e6;
  --graph-node-attachment: #ffe452;
  --graph-node-focused: rgb(41, 101, 255);
  --graph-node-tag: #69db7c;
  --graph-node-unresolved: #adb5bd;
  --graph-text: #f1f3f5;
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
  --heading-formatting: #adb5bd;
  --hr-color: rgba(255, 255, 255, 0.05);
  --hr-thickness: 1px;
  --icon-color: #dee2e6;
  --icon-color-active: rgb(41, 101, 255);
  --icon-color-focused: #f1f3f5;
  --icon-color-hover: #dee2e6;
  --icon-opacity: 0.6;
  --indentation-guide-color: rgba(255, 255, 255, 0.1);
  --indentation-guide-width-active: 0.75x;
  --inline-title-size: 1.375rem;
  --inline-title-weight: 600;
  --input-border-width: 0px;
  --input-date-separator: #adb5bd;
  --input-height: 32px;
  --input-placeholder-color: #adb5bd;
  --input-radius: 6px;
  --input-shadow: transparent;
  --input-shadow-hover: transparent;
  --interactive-accent: rgb(61, 116, 255);
  --interactive-accent-hover: rgb(41, 101, 255);
  --interactive-accent-hsl: 223, 100%, 62%;
  --interactive-hover: #495057;
  --interactive-normal: #343a40;
  --line-height-large: 1.6;
  --link-color: rgb(41, 101, 255);
  --link-color-hover: rgb(82, 131, 255);
  --link-decoration: none;
  --link-external-color: rgb(41, 101, 255);
  --link-external-color-hover: rgb(82, 131, 255);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(41, 101, 255);
  --link-unresolved-decoration-color: rgba(61, 116, 255, 0.3);
  --link-unresolved-opacity: 0.6;
  --list-bullet-size: 0.2rem;
  --list-indent: 1rem;
  --list-marker-color: #979fa7;
  --list-marker-color-collapsed: rgb(41, 101, 255);
  --list-marker-color-hover: #dee2e6;
  --list-spacing: 0.14rem;
  --menu-background: #343a40;
  --menu-border-color: #979fa7;
  --menu-border-width: 0.75x;
  --menu-radius: 6px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --metadata-border-color: rgba(255, 255, 255, 0.05);
  --metadata-divider-color: rgba(255, 255, 255, 0.05);
  --metadata-input-background-active: rgba(255, 255, 255, 0.1);
  --metadata-input-font: '??', '??', "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.875rem;
  --metadata-input-text-color: #f1f3f5;
  --metadata-label-background-active: rgba(255, 255, 255, 0.1);
  --metadata-label-font: '??', '??', "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.875rem;
  --metadata-label-text-color: #dee2e6;
  --metadata-label-text-color-hover: #dee2e6;
  --metadata-property-background-active: rgba(255, 255, 255, 0.1);
  --metadata-property-box-shadow-focus: 0 0 0 2px #495057;
  --metadata-property-box-shadow-hover: 0 0 0 0.75x #979fa7;
  --modal-background: #212529;
  --modal-border-color: #adb5bd;
  --modal-border-width: 0.75x;
  --nav-collapse-icon-color: #adb5bd;
  --nav-collapse-icon-color-collapsed: #adb5bd;
  --nav-heading-color: #f1f3f5;
  --nav-heading-color-collapsed: #adb5bd;
  --nav-heading-color-collapsed-hover: #dee2e6;
  --nav-heading-color-hover: #f1f3f5;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.1);
  --nav-item-background-active: rgba(255, 255, 255, 0.1);
  --nav-item-background-hover: rgba(255, 255, 255, 0.1);
  --nav-item-background-selected: rgba(61, 116, 255, 0.2);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 8px;
  --nav-item-color: #dee2e6;
  --nav-item-color-active: #f1f3f5;
  --nav-item-color-highlighted: rgb(82, 131, 255);
  --nav-item-color-hover: #f1f3f5;
  --nav-item-color-selected: #f1f3f5;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 2px;
  --nav-item-weight-active: 600;
  --nav-item-weight-hover: 600;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #adb5bd;
  --nav-tag-color-active: #dee2e6;
  --nav-tag-color-hover: #dee2e6;
  --nav-tag-radius: 2px;
  --pdf-background: #212529;
  --pdf-page-background: #212529;
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --pdf-sidebar-background: #212529;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --pill-border-color: rgba(255, 255, 255, 0.05);
  --pill-border-color-hover: #979fa7;
  --pill-border-width: 0.75x;
  --pill-color: #dee2e6;
  --pill-color-hover: #f1f3f5;
  --pill-color-remove: #adb5bd;
  --pill-color-remove-hover: rgb(41, 101, 255);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #212529;
  --prompt-border-color: #adb5bd;
  --prompt-border-width: 0.75x;
  --prompt-max-width: 62vw;
  --radius-full: 9999px;
  --radius-m: 6px;
  --radius-s: 2px;
  --raised-background: color-mix(in srgb, #343a40 65%, transparent) linear-gradient(#343a40, color-mix(in srgb, #343a40 65%, transparent));
  --ribbon-background: #212529;
  --ribbon-background-collapsed: #212529;
  --ribbon-width: 48px;
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
  --search-clear-button-color: #dee2e6;
  --search-icon-color: #dee2e6;
  --search-result-background: #212529;
  --setting-group-heading-color: #f1f3f5;
  --setting-group-heading-size: 16px;
  --setting-items-background: #646b73;
  --setting-items-border-color: rgba(255, 255, 255, 0.05);
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.121),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.179), 0px 15px 30px rgba(0, 0, 0, 0.3);
  --slider-thumb-border-color: #979fa7;
  --slider-thumb-radius: 50%;
  --slider-track-background: rgba(255, 255, 255, 0.05);
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
  --status-bar-background: #343a40;
  --status-bar-border-color: rgba(255, 255, 255, 0.05);
  --status-bar-font-size: 11px;
  --status-bar-radius: 6px;
  --status-bar-text-color: #dee2e6;
  --suggestion-background: #212529;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #fa5252;
  --sync-avatar-color-2: #ff9a67;
  --sync-avatar-color-3: #ffe452;
  --sync-avatar-color-4: #69db7c;
  --sync-avatar-color-5: #59e8d4;
  --sync-avatar-color-6: #6a94fc;
  --sync-avatar-color-7: #d0bfff;
  --sync-avatar-color-8: #ffc9c9;
  --tab-background-active: #212529;
  --tab-container-background: #343a40;
  --tab-divider-color: #979fa7;
  --tab-outline-color: rgba(255, 255, 255, 0.05);
  --tab-radius: 2px;
  --tab-stacked-header-width: 42px;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #343a40;
  --tab-switcher-menubar-background: linear-gradient(to top, #343a40, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(61, 116, 255);
  --tab-text-color: #adb5bd;
  --tab-text-color-active: #dee2e6;
  --tab-text-color-focused: #dee2e6;
  --tab-text-color-focused-active: #dee2e6;
  --tab-text-color-focused-active-current: #f1f3f5;
  --tab-text-color-focused-highlighted: rgb(41, 101, 255);
  --table-add-button-border-color: rgba(255, 255, 255, 0.05);
  --table-border-color: #212529;
  --table-drag-handle-background-active: rgb(61, 116, 255);
  --table-drag-handle-color: #adb5bd;
  --table-header-background: #343a40;
  --table-header-border-color: #212529;
  --table-header-color: #f1f3f5;
  --table-header-size: 13px;
  --table-header-weight: 600;
  --table-selection: rgba(61, 116, 255, 0.1);
  --table-selection-border-color: rgb(61, 116, 255);
  --table-white-space: normal;
  --tag-background: rgba(61, 116, 255, 0.1);
  --tag-background-hover: rgba(61, 116, 255, 0.2);
  --tag-border-color: rgba(61, 116, 255, 0.15);
  --tag-border-color-hover: rgba(61, 116, 255, 0.15);
  --tag-color: rgb(41, 101, 255);
  --tag-color-hover: rgb(41, 101, 255);
  --tag-padding-x: 0.65rem;
  --tag-padding-y: 0.25rem;
  --tag-radius: 6px;
  --tag-size: 0.875rem;
  --text-accent: rgb(41, 101, 255);
  --text-accent-hover: rgb(82, 131, 255);
  --text-error: #fa5252;
  --text-fade: #646b73;
  --text-faint: #adb5bd;
  --text-highlight-bg: rgba(255, 255, 255, 0.1);
  --text-highlight-bg-active: rgba(255, 227, 78, 0.1);
  --text-muted: #dee2e6;
  --text-normal: #f1f3f5;
  --text-selection: rgba(61, 116, 255, 0.25);
  --text-success: #69db7c;
  --text-warning: #ff9a67;
  --titlebar-background: #343a40;
  --titlebar-background-focused: #343a40;
  --titlebar-border-color: rgba(255, 255, 255, 0.05);
  --titlebar-text-color: #dee2e6;
  --titlebar-text-color-focused: #f1f3f5;
  --traffic-lights-offset-x: 42px;
  --traffic-lights-offset-y: 42px;
  --vault-name-color: #f1f3f5;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #f1f3f5;
  --vault-profile-color-hover: #f1f3f5;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(52, 58, 64);
  color: rgb(241, 243, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.05);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(52, 58, 64);
  border-left-color: rgba(255, 255, 255, 0.05);
  color: rgb(241, 243, 245);
}

body div#quartz-root {
  background-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body .page article p > em, em {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body .page article p > i, i {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body .page article p > strong, strong {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body .text-highlight {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body del {
  color: rgb(173, 181, 189);
  outline: rgb(173, 181, 189) none 0px;
  text-decoration: line-through rgb(173, 181, 189);
  text-decoration-color: rgb(173, 181, 189);
}

body p {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 226, 230) none 0px;
  text-decoration: rgb(222, 226, 230);
  text-decoration-color: rgb(222, 226, 230);
}`,
    links: `body a.external, footer a {
  color: rgb(42, 102, 255);
  outline: rgb(42, 102, 255) none 0px;
  text-decoration: rgb(42, 102, 255);
  text-decoration-color: rgb(42, 102, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(42, 102, 255);
  outline: rgb(42, 102, 255) none 0px;
  text-decoration: rgb(42, 102, 255);
  text-decoration-color: rgb(42, 102, 255);
}

body a.internal.broken {
  color: rgb(42, 102, 255);
  outline: rgb(42, 102, 255) none 0px;
  text-decoration: rgba(61, 116, 255, 0.3);
  text-decoration-color: rgba(61, 116, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(241, 243, 245);
}

body dt {
  color: rgb(241, 243, 245);
}

body ol > li {
  color: rgb(241, 243, 245);
}

body ol.overflow {
  background-color: rgb(33, 37, 41);
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

body ul > li {
  color: rgb(241, 243, 245);
}

body ul.overflow {
  background-color: rgb(33, 37, 41);
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(61, 116, 255);
  text-decoration: rgb(61, 116, 255);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

body table {
  background-color: rgba(255, 255, 255, 0.03);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
  width: 602px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(52, 58, 64);
}

body td {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
  padding-bottom: 12px;
  padding-top: 12px;
}

body th {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  color: rgb(241, 243, 245);
  padding-bottom: 12px;
  padding-top: 12px;
}

body tr {
  background-color: rgb(52, 58, 64);
}`,
    code: `body code {
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(222, 226, 230);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(255, 228, 82);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(255, 228, 82);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(255, 228, 82);
  border-left-color: rgb(255, 228, 82);
  border-right-color: rgb(255, 228, 82);
  border-top-color: rgb(255, 228, 82);
}

body pre > code, pre:has(> code) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body figcaption {
  color: rgb(241, 243, 245);
}

body figure {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

body img {
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

body video {
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
    embeds: `body .file-embed {
  background-color: rgb(100, 107, 115);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .footnotes {
  border-top-color: rgb(241, 243, 245);
  color: rgb(241, 243, 245);
}

body .transclude {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(61, 116, 255);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .transclude-inner {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(61, 116, 255);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(100, 107, 115);
  text-decoration: line-through rgb(100, 107, 115);
  text-decoration-color: rgb(100, 107, 115);
}

body input[type=checkbox] {
  border-bottom-color: rgb(173, 181, 189);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(173, 181, 189);
  border-right-color: rgb(173, 181, 189);
  border-top-color: rgb(173, 181, 189);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-left: -26.4px;
  width: 17.5938px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='/'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(241, 243, 245);
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout[data-callout="abstract"] {
  --callout-color: 255, 255, 255;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="bug"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="danger"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgba(168, 130, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(168, 130, 255, 0.2);
  border-right-color: rgba(168, 130, 255, 0.2);
  border-top-color: rgba(168, 130, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="failure"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgba(2, 122, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(2, 122, 255, 0.2);
  border-right-color: rgba(2, 122, 255, 0.2);
  border-top-color: rgba(2, 122, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="note"] {
  --callout-color: 255, 255, 255;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.2);
  border-right-color: rgba(255, 255, 255, 0.2);
  border-top-color: rgba(255, 255, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="question"] {
  --callout-color: 255, 228, 82;
  background-color: rgba(255, 228, 82, 0.1);
  border-bottom-color: rgba(255, 228, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 228, 82, 0.2);
  border-right-color: rgba(255, 228, 82, 0.2);
  border-top-color: rgba(255, 228, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(158, 158, 158, 0.2);
  border-right-color: rgba(158, 158, 158, 0.2);
  border-top-color: rgba(158, 158, 158, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="success"] {
  --callout-color: 105, 219, 124;
  background-color: rgba(105, 219, 124, 0.1);
  border-bottom-color: rgba(105, 219, 124, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(105, 219, 124, 0.2);
  border-right-color: rgba(105, 219, 124, 0.2);
  border-top-color: rgba(105, 219, 124, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgba(83, 223, 221, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(83, 223, 221, 0.2);
  border-right-color: rgba(83, 223, 221, 0.2);
  border-top-color: rgba(83, 223, 221, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgba(2, 122, 255, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(2, 122, 255, 0.2);
  border-right-color: rgba(2, 122, 255, 0.2);
  border-top-color: rgba(2, 122, 255, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255, 154, 103;
  background-color: rgba(255, 154, 103, 0.1);
  border-bottom-color: rgba(255, 154, 103, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 154, 103, 0.2);
  border-right-color: rgba(255, 154, 103, 0.2);
  border-top-color: rgba(255, 154, 103, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    search: `body .search > .search-button {
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
  color: rgb(241, 243, 245);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(33, 37, 41);
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-left-width: 0px;
  border-right-color: rgb(241, 243, 245);
  border-right-width: 0px;
  border-top-color: rgb(241, 243, 245);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(241, 243, 245);
  outline: rgb(241, 243, 245) none 0px;
  text-decoration: rgb(241, 243, 245);
  text-decoration-color: rgb(241, 243, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(241, 243, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(241, 243, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgb(241, 243, 245);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-left-width: 0px;
  border-right-color: rgb(241, 243, 245);
  border-right-width: 0px;
  border-top-color: rgb(241, 243, 245);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-width: 0px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.1);
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(61, 116, 255, 0.1);
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

body a.internal.tag-link::before {
  color: rgb(42, 102, 255);
}

body h1 {
  color: rgb(241, 243, 245);
}

body h2 {
  color: rgb(241, 243, 245);
}

body h2.page-title, h2.page-title a {
  color: rgb(241, 243, 245);
}

body h3 {
  color: rgb(241, 243, 245);
}

body h4 {
  color: rgb(241, 243, 245);
}

body h5 {
  color: rgb(241, 243, 245);
}

body h6 {
  color: rgb(241, 243, 245);
}

body hr {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
}`,
    scrollbars: `body .callout {
  --callout-color: 255, 255, 255;
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
}

body ::-webkit-scrollbar {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 37, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 37, 41);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(222, 226, 230);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(222, 226, 230);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(222, 226, 230);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(241, 243, 245);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(222, 226, 230);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(52, 58, 64);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(222, 226, 230);
  text-decoration: rgb(222, 226, 230);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(241, 243, 245);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(222, 226, 230);
  text-decoration: rgb(222, 226, 230);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(241, 243, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body li.section-li > .section .meta {
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(222, 226, 230);
  text-decoration: rgb(222, 226, 230);
}

body ul.section-ul {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(222, 226, 230);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(222, 226, 230);
  stroke: rgb(222, 226, 230);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(173, 181, 189);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(173, 181, 189);
  border-right-color: rgb(173, 181, 189);
  border-top-color: rgb(173, 181, 189);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(173, 181, 189);
}

body .breadcrumb-element p {
  color: rgb(173, 181, 189);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
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

body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(222, 226, 230);
}

body .metadata-properties {
  border-bottom-color: rgb(222, 226, 230);
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  color: rgb(222, 226, 230);
}

body .navigation-progress {
  background-color: rgb(52, 58, 64);
}

body .page-header h2.page-title {
  color: rgb(241, 243, 245);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(241, 243, 245);
  text-decoration: underline dotted rgb(241, 243, 245);
}

body details {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

body input[type=text] {
  border-bottom-color: rgb(222, 226, 230);
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  color: rgb(222, 226, 230);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgb(222, 226, 230);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(222, 226, 230);
  border-right-color: rgb(222, 226, 230);
  border-top-color: rgb(222, 226, 230);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(222, 226, 230);
}

body progress {
  border-bottom-color: rgb(241, 243, 245);
  border-left-color: rgb(241, 243, 245);
  border-right-color: rgb(241, 243, 245);
  border-top-color: rgb(241, 243, 245);
}

body sub {
  color: rgb(241, 243, 245);
}

body summary {
  color: rgb(241, 243, 245);
}

body sup {
  color: rgb(241, 243, 245);
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
  --background-modifier-active-hover: rgba(61, 116, 255, 0.15);
  --background-modifier-border: #e5e3dc;
  --background-modifier-border-focus: #d8d6ca;
  --background-modifier-border-hover: #868e96;
  --background-modifier-border-row: #dfddd3;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.3);
  --background-modifier-cover: rgba(0, 0, 0, 0.7);
  --background-modifier-error-rgb: 250, 82, 82;
  --background-modifier-form-field: #e5e3dc;
  --background-modifier-form-field-hover: #e5e3dc;
  --background-modifier-hover: rgba(0, 0, 0, 0.1);
  --background-modifier-success: #40c057;
  --background-primary: #f2f1ed;
  --background-primary-alt: #dfddd3;
  --background-primary-low: #f9f8f6;
  --background-secondary: #e5e3dc;
  --background-secondary-alt: #d8d6ca;
  --bases-cards-background: #f2f1ed;
  --bases-cards-border-width: 0.75x;
  --bases-cards-cover-background: #dfddd3;
  --bases-cards-font-size: 0.875rem;
  --bases-cards-radius: 6px;
  --bases-cards-shadow: 0 0 0 1px #e5e3dc;
  --bases-cards-shadow-hover: 0 0 0 1px #868e96;
  --bases-embed-border-color: #e5e3dc;
  --bases-embed-border-radius: 2px;
  --bases-group-heading-property-color: #343a40;
  --bases-group-heading-property-size: 11px;
  --bases-group-heading-value-size: 0.875rem;
  --bases-header-border-width: 0 0 0.75x 0;
  --bases-table-border-color: #dfddd3;
  --bases-table-cell-background-active: #f2f1ed;
  --bases-table-cell-background-disabled: #dfddd3;
  --bases-table-cell-background-selected: rgba(61, 116, 255, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #d8d6ca;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(77, 127, 255);
  --bases-table-column-border-width: 0.75x;
  --bases-table-container-border-radius: 2px;
  --bases-table-container-border-width: 0.75x;
  --bases-table-font-size: 0.875rem;
  --bases-table-group-background: #dfddd3;
  --bases-table-header-background: #f2f1ed;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.1);
  --bases-table-header-color: #343a40;
  --bases-table-row-border-width: 0.75x;
  --bases-table-summary-background: #f2f1ed;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.1);
  --blockquote-border-color: rgb(77, 127, 255);
  --blockquote-border-thickness: 1px;
  --blur-background: color-mix(in srgb, #f2f1ed 65%, transparent) linear-gradient(#f2f1ed, color-mix(in srgb, #f2f1ed 65%, transparent));
  --bold-background: rgba(0, 0, 0, 0.1);
  --bold-weight: 600;
  --border-width: 0.75x;
  --button-radius: 6px;
  --callout-border-opacity: 0.2;
  --callout-bug: 250, 82, 82;
  --callout-default: 0, 0, 0;
  --callout-error: 250, 82, 82;
  --callout-example: 121, 80, 242;
  --callout-fail: 250, 82, 82;
  --callout-important: 40, 173, 202;
  --callout-info: 3, 105, 224;
  --callout-padding: 8px 20px 8px
    20px;
  --callout-question: 245, 162, 0;
  --callout-radius: 6px;
  --callout-summary: 0, 0, 0;
  --callout-tip: 40, 173, 202;
  --callout-title-padding: 0px;
  --callout-title-size: 16px;
  --callout-todo: 3, 105, 224;
  --callout-warning: 253, 126, 20;
  --canvas-background: #f2f1ed;
  --canvas-card-label-color: #495057;
  --canvas-color-1: 250, 82, 82;
  --canvas-color-2: 253, 126, 20;
  --canvas-color-3: 245, 162, 0;
  --canvas-color-5: 40, 173, 202;
  --canvas-color-6: 121, 80, 242;
  --canvas-controls-radius: 2px;
  --canvas-dot-pattern: #adb5bd;
  --caret-color: #212529;
  --checkbox-border-color: #495057;
  --checkbox-border-color-hover: #343a40;
  --checkbox-color: rgb(77, 127, 255);
  --checkbox-color-hover: rgb(87, 134, 255);
  --checkbox-marker-color: #f2f1ed;
  --checkbox-radius: 6px;
  --checkbox-size: 17.6px;
  --checklist-done-color: #adb5bd;
  --clickable-icon-radius: 6px;
  --code-background: rgba(0, 0, 0, 0.05);
  --code-border-color: #e5e3dc;
  --code-bracket-background: rgba(0, 0, 0, 0.1);
  --code-comment: #adb5bd;
  --code-function: #f5a200;
  --code-important: #fd7e14;
  --code-keyword: #3d73ff;
  --code-normal: #343a40;
  --code-property: #28adca;
  --code-punctuation: #343a40;
  --code-radius: 2px;
  --code-size: 0.875rem;
  --code-string: #40c057;
  --code-value: #7950f2;
  --collapse-icon-color: #495057;
  --collapse-icon-color-collapsed: rgb(61, 116, 255);
  --color-accent: rgb(61, 116, 255);
  --color-accent-1: rgb(77, 127, 255);
  --color-accent-2: rgb(87, 134, 255);
  --color-accent-hsl: 223, 100%, 62%;
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
  --default-font: "Inter", sans-serif;
  --divider-color: #e5e3dc;
  --divider-color-hover: rgb(77, 127, 255);
  --divider-width-hover: 2px;
  --dropdown-background: #e5e3dc;
  --dropdown-background-hover: #dfddd3;
  --embed-block-shadow-hover: 0 0 0 1px #e5e3dc,
    inset 0 0 0 1px #e5e3dc;
  --embed-border-left: 2px solid rgb(77, 127, 255);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(77, 127, 255);
  --file-header-background: #f2f1ed;
  --file-header-background-focused: #f2f1ed;
  --file-header-border: 0.75x solid transparent;
  --file-header-font: '??', '??', "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-header-font-weight: 500;
  --file-line-width: 640px;
  --file-margins: 32px;
  --flair-background: #e5e3dc;
  --flair-color: #212529;
  --font-interface: '??', '??', "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-small: 0.933rem;
  --font-smaller: 0.875rem;
  --font-smallest: 0.8rem;
  --font-ui-medium: 16px;
  --font-ui-smaller: 11px;
  --footnote-divider-color: #e5e3dc;
  --footnote-divider-width: 0.75x;
  --footnote-id-color: #343a40;
  --footnote-id-color-no-occurrences: #495057;
  --footnote-input-background-active: rgba(0, 0, 0, 0.1);
  --footnote-radius: 2px;
  --footnote-size: 0.875rem;
  --graph-line: #868e96;
  --graph-node: #343a40;
  --graph-node-attachment: #f5a200;
  --graph-node-focused: rgb(61, 116, 255);
  --graph-node-tag: #40c057;
  --graph-node-unresolved: #495057;
  --graph-text: #212529;
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
  --heading-formatting: #495057;
  --hr-color: #e5e3dc;
  --hr-thickness: 1px;
  --icon-color: #343a40;
  --icon-color-active: rgb(61, 116, 255);
  --icon-color-focused: #212529;
  --icon-color-hover: #343a40;
  --icon-opacity: 0.6;
  --indentation-guide-color: rgba(0, 0, 0, 0.1);
  --indentation-guide-width-active: 0.75x;
  --inline-title-size: 1.375rem;
  --inline-title-weight: 600;
  --input-border-width: 0px;
  --input-date-separator: #495057;
  --input-height: 32px;
  --input-placeholder-color: #495057;
  --input-radius: 6px;
  --input-shadow: transparent;
  --input-shadow-hover: transparent;
  --interactive-accent: rgb(77, 127, 255);
  --interactive-accent-hover: rgb(87, 134, 255);
  --interactive-accent-hsl: 223, 100%, 62%;
  --interactive-hover: #dfddd3;
  --interactive-normal: #e5e3dc;
  --line-height-large: 1.6;
  --link-color: rgb(61, 116, 255);
  --link-color-hover: rgb(87, 134, 255);
  --link-decoration: none;
  --link-external-color: rgb(61, 116, 255);
  --link-external-color-hover: rgb(87, 134, 255);
  --link-external-decoration: none;
  --link-unresolved-color: rgb(61, 116, 255);
  --link-unresolved-decoration-color: rgba(61, 116, 255, 0.3);
  --link-unresolved-opacity: 0.6;
  --list-bullet-size: 0.2rem;
  --list-indent: 1rem;
  --list-marker-color: #868e96;
  --list-marker-color-collapsed: rgb(61, 116, 255);
  --list-marker-color-hover: #343a40;
  --list-spacing: 0.14rem;
  --menu-background: #e5e3dc;
  --menu-border-color: #868e96;
  --menu-border-width: 0.75x;
  --menu-radius: 6px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --metadata-border-color: #e5e3dc;
  --metadata-divider-color: #e5e3dc;
  --metadata-input-background-active: rgba(0, 0, 0, 0.1);
  --metadata-input-font: '??', '??', "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-font-size: 0.875rem;
  --metadata-input-text-color: #212529;
  --metadata-label-background-active: rgba(0, 0, 0, 0.1);
  --metadata-label-font: '??', '??', "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font-size: 0.875rem;
  --metadata-label-text-color: #343a40;
  --metadata-label-text-color-hover: #343a40;
  --metadata-property-background-active: rgba(0, 0, 0, 0.1);
  --metadata-property-box-shadow-focus: 0 0 0 2px #d8d6ca;
  --metadata-property-box-shadow-hover: 0 0 0 0.75x #868e96;
  --modal-background: #f2f1ed;
  --modal-border-color: #495057;
  --modal-border-width: 0.75x;
  --nav-collapse-icon-color: #495057;
  --nav-collapse-icon-color-collapsed: #495057;
  --nav-heading-color: #212529;
  --nav-heading-color-collapsed: #495057;
  --nav-heading-color-collapsed-hover: #343a40;
  --nav-heading-color-hover: #212529;
  --nav-indentation-guide-color: rgba(0, 0, 0, 0.1);
  --nav-item-background-active: rgba(0, 0, 0, 0.1);
  --nav-item-background-hover: rgba(0, 0, 0, 0.1);
  --nav-item-background-selected: rgba(61, 116, 255, 0.2);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 8px;
  --nav-item-color: #343a40;
  --nav-item-color-active: #212529;
  --nav-item-color-highlighted: rgb(87, 134, 255);
  --nav-item-color-hover: #212529;
  --nav-item-color-selected: #212529;
  --nav-item-padding: 4px 8px;
  --nav-item-parent-padding: 4px 8px;
  --nav-item-radius: 2px;
  --nav-item-weight-active: 600;
  --nav-item-weight-hover: 600;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #495057;
  --nav-tag-color-active: #343a40;
  --nav-tag-color-hover: #343a40;
  --nav-tag-radius: 2px;
  --pdf-background: #f2f1ed;
  --pdf-page-background: #f2f1ed;
  --pdf-sidebar-background: #f2f1ed;
  --pill-border-color: #e5e3dc;
  --pill-border-color-hover: #868e96;
  --pill-border-width: 0.75x;
  --pill-color: #343a40;
  --pill-color-hover: #212529;
  --pill-color-remove: #495057;
  --pill-color-remove-hover: rgb(61, 116, 255);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #f2f1ed;
  --prompt-border-color: #495057;
  --prompt-border-width: 0.75x;
  --prompt-max-width: 62vw;
  --radius-full: 9999px;
  --radius-m: 6px;
  --radius-s: 2px;
  --raised-background: color-mix(in srgb, #f2f1ed 65%, transparent) linear-gradient(#f2f1ed, color-mix(in srgb, #f2f1ed 65%, transparent));
  --ribbon-background: #f2f1ed;
  --ribbon-background-collapsed: #f2f1ed;
  --ribbon-width: 48px;
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
  --search-clear-button-color: #343a40;
  --search-icon-color: #343a40;
  --search-result-background: #f2f1ed;
  --setting-group-heading-color: #212529;
  --setting-group-heading-size: 16px;
  --setting-items-background: #dfddd3;
  --setting-items-border-color: #e5e3dc;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.028),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.042), 0px 15px 30px rgba(0, 0, 0, 0.07);
  --slider-thumb-border-color: #868e96;
  --slider-thumb-radius: 50%;
  --slider-track-background: #e5e3dc;
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
  --status-bar-background: #e5e3dc;
  --status-bar-border-color: #e5e3dc;
  --status-bar-font-size: 11px;
  --status-bar-radius: 6px;
  --status-bar-text-color: #343a40;
  --suggestion-background: #f2f1ed;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-2: #fd7e14;
  --sync-avatar-color-3: #f5a200;
  --sync-avatar-color-4: #40c057;
  --sync-avatar-color-5: #28adca;
  --sync-avatar-color-6: #3d73ff;
  --sync-avatar-color-7: #7950f2;
  --sync-avatar-color-8: #f558ad;
  --tab-background-active: #f2f1ed;
  --tab-container-background: #e5e3dc;
  --tab-divider-color: #868e96;
  --tab-outline-color: #e5e3dc;
  --tab-radius: 2px;
  --tab-stacked-header-width: 42px;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #e5e3dc;
  --tab-switcher-menubar-background: linear-gradient(to top, #e5e3dc, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(61, 116, 255);
  --tab-text-color: #495057;
  --tab-text-color-active: #343a40;
  --tab-text-color-focused: #343a40;
  --tab-text-color-focused-active: #343a40;
  --tab-text-color-focused-active-current: #212529;
  --tab-text-color-focused-highlighted: rgb(61, 116, 255);
  --table-add-button-border-color: #e5e3dc;
  --table-border-color: #dfddd3;
  --table-drag-handle-background-active: rgb(77, 127, 255);
  --table-drag-handle-color: #495057;
  --table-header-background: #e5e3dc;
  --table-header-border-color: #dfddd3;
  --table-header-color: #212529;
  --table-header-size: 13px;
  --table-header-weight: 600;
  --table-selection: rgba(61, 116, 255, 0.1);
  --table-selection-border-color: rgb(77, 127, 255);
  --table-white-space: normal;
  --tag-background: rgba(61, 116, 255, 0.1);
  --tag-background-hover: rgba(61, 116, 255, 0.2);
  --tag-border-color: rgba(61, 116, 255, 0.15);
  --tag-border-color-hover: rgba(61, 116, 255, 0.15);
  --tag-color: rgb(61, 116, 255);
  --tag-color-hover: rgb(61, 116, 255);
  --tag-padding-x: 0.65rem;
  --tag-padding-y: 0.25rem;
  --tag-radius: 6px;
  --tag-size: 0.875rem;
  --text-accent: rgb(61, 116, 255);
  --text-accent-hover: rgb(87, 134, 255);
  --text-fade: #adb5bd;
  --text-faint: #495057;
  --text-highlight-bg: #dfddd3;
  --text-highlight-bg-active: rgba(255, 232, 23, 0.2);
  --text-muted: #343a40;
  --text-normal: #212529;
  --text-selection: rgba(61, 116, 255, 0.25);
  --text-success: #40c057;
  --text-warning: #fd7e14;
  --titlebar-background: #e5e3dc;
  --titlebar-background-focused: #e5e3dc;
  --titlebar-border-color: #e5e3dc;
  --titlebar-text-color: #343a40;
  --titlebar-text-color-focused: #212529;
  --traffic-lights-offset-x: 42px;
  --traffic-lights-offset-y: 42px;
  --vault-name-color: #212529;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #212529;
  --vault-profile-color-hover: #212529;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(229, 227, 220);
  color: rgb(33, 37, 41);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(242, 241, 237);
  color: rgb(33, 37, 41);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 241, 237);
  color: rgb(33, 37, 41);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(229, 227, 220);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(229, 227, 220);
  border-left-color: rgb(229, 227, 220);
  color: rgb(33, 37, 41);
}

body div#quartz-root {
  background-color: rgb(242, 241, 237);
  color: rgb(33, 37, 41);
}`,
    typography: `body .page article p > b, b {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body .page article p > em, em {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body .page article p > i, i {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body .page article p > strong, strong {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body .text-highlight {
  background-color: rgb(223, 221, 211);
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body del {
  color: rgb(73, 80, 87);
  outline: rgb(73, 80, 87) none 0px;
  text-decoration: line-through rgb(73, 80, 87);
  text-decoration-color: rgb(73, 80, 87);
}

body p {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(52, 58, 64) none 0px;
  text-decoration: rgb(52, 58, 64);
  text-decoration-color: rgb(52, 58, 64);
}`,
    links: `body a.external, footer a {
  color: rgb(61, 116, 255);
  outline: rgb(61, 116, 255) none 0px;
  text-decoration: rgb(61, 116, 255);
  text-decoration-color: rgb(61, 116, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(61, 116, 255);
  outline: rgb(61, 116, 255) none 0px;
  text-decoration: rgb(61, 116, 255);
  text-decoration-color: rgb(61, 116, 255);
}

body a.internal.broken {
  color: rgb(61, 116, 255);
  outline: rgb(61, 116, 255) none 0px;
  text-decoration: rgba(61, 116, 255, 0.3);
  text-decoration-color: rgba(61, 116, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(33, 37, 41);
}

body dt {
  color: rgb(33, 37, 41);
}

body ol > li {
  color: rgb(33, 37, 41);
}

body ol.overflow {
  background-color: rgb(242, 241, 237);
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

body ul > li {
  color: rgb(33, 37, 41);
}

body ul.overflow {
  background-color: rgb(242, 241, 237);
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(61, 116, 255);
  text-decoration: rgb(61, 116, 255);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

body table {
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
  width: 602px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(229, 227, 220);
}

body td {
  border-bottom-color: rgb(223, 221, 211);
  border-left-color: rgb(223, 221, 211);
  border-right-color: rgb(223, 221, 211);
  border-top-color: rgb(223, 221, 211);
  color: rgb(33, 37, 41);
  padding-bottom: 12px;
  padding-top: 12px;
}

body th {
  border-bottom-color: rgb(223, 221, 211);
  border-left-color: rgb(223, 221, 211);
  border-right-color: rgb(223, 221, 211);
  border-top-color: rgb(223, 221, 211);
  color: rgb(33, 37, 41);
  padding-bottom: 12px;
  padding-top: 12px;
}

body tr {
  background-color: rgb(229, 227, 220);
}`,
    code: `body code {
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(52, 58, 64);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

body pre > code > [data-line] {
  border-left-color: rgb(245, 162, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(245, 162, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(245, 162, 0);
  border-left-color: rgb(245, 162, 0);
  border-right-color: rgb(245, 162, 0);
  border-top-color: rgb(245, 162, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body figcaption {
  color: rgb(33, 37, 41);
}

body figure {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

body img {
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

body video {
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
    embeds: `body .file-embed {
  background-color: rgb(223, 221, 211);
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .footnotes {
  border-top-color: rgb(33, 37, 41);
  color: rgb(33, 37, 41);
}

body .transclude {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(74, 125, 255);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body .transclude-inner {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(74, 125, 255);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(173, 181, 189);
  text-decoration: line-through rgb(173, 181, 189);
  text-decoration-color: rgb(173, 181, 189);
}

body input[type=checkbox] {
  border-bottom-color: rgb(73, 80, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(73, 80, 87);
  border-right-color: rgb(73, 80, 87);
  border-top-color: rgb(73, 80, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  margin-left: -26.4px;
  width: 17.5938px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='*'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='-'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='/'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='>'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='?'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='I'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='S'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='b'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='c'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='d'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='f'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='i'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='k'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='l'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='p'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='u'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body li.task-list-item[data-task='w'] {
  color: rgb(33, 37, 41);
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  gap: 0px;
  padding-bottom: 12px;
  padding-top: 12px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 400;
}

body .callout[data-callout="abstract"] {
  --callout-color: 0, 0, 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="bug"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="danger"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="example"] {
  --callout-color: 121, 80, 242;
  background-color: rgba(121, 80, 242, 0.1);
  border-bottom-color: rgba(121, 80, 242, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(121, 80, 242, 0.2);
  border-right-color: rgba(121, 80, 242, 0.2);
  border-top-color: rgba(121, 80, 242, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="failure"] {
  --callout-color: 250, 82, 82;
  background-color: rgba(250, 82, 82, 0.1);
  border-bottom-color: rgba(250, 82, 82, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(250, 82, 82, 0.2);
  border-right-color: rgba(250, 82, 82, 0.2);
  border-top-color: rgba(250, 82, 82, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="info"] {
  --callout-color: 3, 105, 224;
  background-color: rgba(3, 105, 224, 0.1);
  border-bottom-color: rgba(3, 105, 224, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(3, 105, 224, 0.2);
  border-right-color: rgba(3, 105, 224, 0.2);
  border-top-color: rgba(3, 105, 224, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="note"] {
  --callout-color: 0, 0, 0;
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="question"] {
  --callout-color: 245, 162, 0;
  background-color: rgba(245, 162, 0, 0.1);
  border-bottom-color: rgba(245, 162, 0, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(245, 162, 0, 0.2);
  border-right-color: rgba(245, 162, 0, 0.2);
  border-top-color: rgba(245, 162, 0, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgba(158, 158, 158, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(158, 158, 158, 0.2);
  border-right-color: rgba(158, 158, 158, 0.2);
  border-top-color: rgba(158, 158, 158, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgba(8, 185, 78, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(8, 185, 78, 0.2);
  border-right-color: rgba(8, 185, 78, 0.2);
  border-top-color: rgba(8, 185, 78, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="tip"] {
  --callout-color: 40, 173, 202;
  background-color: rgba(40, 173, 202, 0.1);
  border-bottom-color: rgba(40, 173, 202, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(40, 173, 202, 0.2);
  border-right-color: rgba(40, 173, 202, 0.2);
  border-top-color: rgba(40, 173, 202, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="todo"] {
  --callout-color: 3, 105, 224;
  background-color: rgba(3, 105, 224, 0.1);
  border-bottom-color: rgba(3, 105, 224, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(3, 105, 224, 0.2);
  border-right-color: rgba(3, 105, 224, 0.2);
  border-top-color: rgba(3, 105, 224, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .callout[data-callout="warning"] {
  --callout-color: 253, 126, 20;
  background-color: rgba(253, 126, 20, 0.1);
  border-bottom-color: rgba(253, 126, 20, 0.2);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgba(253, 126, 20, 0.2);
  border-right-color: rgba(253, 126, 20, 0.2);
  border-top-color: rgba(253, 126, 20, 0.2);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}`,
    search: `body .search > .search-button {
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
  color: rgb(33, 37, 41);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(242, 241, 237);
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-left-width: 0px;
  border-right-color: rgb(33, 37, 41);
  border-right-width: 0px;
  border-top-color: rgb(33, 37, 41);
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(33, 37, 41);
  outline: rgb(33, 37, 41) none 0px;
  text-decoration: rgb(33, 37, 41);
  text-decoration-color: rgb(33, 37, 41);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(33, 37, 41);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(33, 37, 41);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(33, 37, 41);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-left-width: 0px;
  border-right-color: rgb(33, 37, 41);
  border-right-width: 0px;
  border-top-color: rgb(33, 37, 41);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-width: 0px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.1);
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(61, 116, 255, 0.1);
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

body a.internal.tag-link::before {
  color: rgb(61, 116, 255);
}

body h1 {
  color: rgb(33, 37, 41);
}

body h2 {
  color: rgb(33, 37, 41);
}

body h2.page-title, h2.page-title a {
  color: rgb(33, 37, 41);
}

body h3 {
  color: rgb(33, 37, 41);
}

body h4 {
  color: rgb(33, 37, 41);
}

body h5 {
  color: rgb(33, 37, 41);
}

body h6 {
  color: rgb(33, 37, 41);
}

body hr {
  border-bottom-color: rgb(229, 227, 220);
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
}`,
    scrollbars: `body .callout {
  --callout-color: 0, 0, 0;
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
}

body ::-webkit-scrollbar {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}

body ::-webkit-scrollbar-corner {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}

body ::-webkit-scrollbar-track {
  background: rgb(242, 241, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 241, 237);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(52, 58, 64);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 600;
  text-decoration: rgb(52, 58, 64);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(52, 58, 64);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(33, 37, 41);
}`,
    toc: `body li.depth-0 {
  font-weight: 600;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(52, 58, 64);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(229, 227, 220);
  border-bottom-color: rgb(229, 227, 220);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(52, 58, 64);
  text-decoration: rgb(52, 58, 64);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(33, 37, 41);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
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

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(52, 58, 64);
  text-decoration: rgb(52, 58, 64);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(33, 37, 41);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

body li.section-li > .section .meta {
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(52, 58, 64);
  text-decoration: rgb(52, 58, 64);
}

body ul.section-ul {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(52, 58, 64);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(52, 58, 64);
  stroke: rgb(52, 58, 64);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(73, 80, 87);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(73, 80, 87);
  border-right-color: rgb(73, 80, 87);
  border-top-color: rgb(73, 80, 87);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(73, 80, 87);
}

body .breadcrumb-element p {
  color: rgb(73, 80, 87);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
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

body .metadata {
  border-bottom-color: rgb(229, 227, 220);
  border-left-color: rgb(229, 227, 220);
  border-right-color: rgb(229, 227, 220);
  border-top-color: rgb(229, 227, 220);
  color: rgb(52, 58, 64);
}

body .metadata-properties {
  border-bottom-color: rgb(52, 58, 64);
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  color: rgb(52, 58, 64);
}

body .navigation-progress {
  background-color: rgb(229, 227, 220);
}

body .page-header h2.page-title {
  color: rgb(33, 37, 41);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(33, 37, 41);
  text-decoration: underline dotted rgb(33, 37, 41);
}

body details {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

body input[type=text] {
  border-bottom-color: rgb(52, 58, 64);
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  color: rgb(52, 58, 64);
  font-family: "??", "??", Inter, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(0, 0, 0, 0.05);
  border-bottom-color: rgb(52, 58, 64);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(52, 58, 64);
  border-right-color: rgb(52, 58, 64);
  border-top-color: rgb(52, 58, 64);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  color: rgb(52, 58, 64);
}

body progress {
  border-bottom-color: rgb(33, 37, 41);
  border-left-color: rgb(33, 37, 41);
  border-right-color: rgb(33, 37, 41);
  border-top-color: rgb(33, 37, 41);
}

body sub {
  color: rgb(33, 37, 41);
}

body summary {
  color: rgb(33, 37, 41);
}

body sup {
  color: rgb(33, 37, 41);
}`,
  },
};
