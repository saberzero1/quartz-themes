import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "focus",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 106.9879518072deg;
  --accent-l: 73.9215686275%;
  --accent-s: 62.4060150376%;
  --background-modifier-active-hover: hsla(106.9879518072deg,
    62%,
    74%, 0.15);
  --background-modifier-border: #222222;
  --background-modifier-border-focus: #505050;
  --background-modifier-border-hover: #303030;
  --background-modifier-error: #f5988f;
  --background-modifier-error-hover: #f5988f;
  --background-modifier-error-rgb: 245,
    152,
    143;
  --background-modifier-form-field: #222222;
  --background-modifier-form-field-hover: #222222;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #a5e693;
  --background-modifier-success-rgb: 165,
    230,
    147;
  --background-primary: #1a1a1a;
  --background-primary-alt: #1a1a1a;
  --background-secondary: #121212;
  --background-secondary-alt: #121212;
  --bases-cards-background: #1a1a1a;
  --bases-cards-border-width: 0px;
  --bases-cards-cover-background: #1a1a1a;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #222222;
  --bases-cards-shadow-hover: 0 0 0 1px #303030;
  --bases-embed-border-color: #222222;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #707070;
  --bases-header-border-width: 0 0 0px 0;
  --bases-table-border-color: #222222;
  --bases-table-cell-background-active: #1a1a1a;
  --bases-table-cell-background-disabled: #1a1a1a;
  --bases-table-cell-background-selected: hsla(106.9879518072deg,
    62%,
    74%, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #505050;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(106.9879518072deg, 62%, 74%);
  --bases-table-column-border-width: 0px;
  --bases-table-container-border-radius: 0px;
  --bases-table-container-border-width: 0px;
  --bases-table-group-background: #1a1a1a;
  --bases-table-header-background: #1a1a1a;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: #707070;
  --bases-table-row-border-width: 0px;
  --bases-table-summary-background: #1a1a1a;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-background-color: rgba(234, 169, 255, 0.1);
  --blockquote-border-color: hsl(285.3488372093deg, 100%, 83%);
  --blockquote-border-thickness: 4px;
  --blur-background: color-mix(in srgb, #222222 65%, transparent) linear-gradient(#222222, color-mix(in srgb, #222222 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: hsl(106.9879518072deg, 62%, 74%);
  --bold-weight: 700;
  --border-width: 0px;
  --button-radius: 0px;
  --callout-border-opacity: 1;
  --callout-border-width: 0 0 0 4px;
  --callout-bug: 245,
    152,
    143;
  --callout-default: 151,
    192,
    243;
  --callout-error: 245,
    152,
    143;
  --callout-example: 172,
    157,
    242;
  --callout-fail: 245,
    152,
    143;
  --callout-important: 139,
    240,
    219;
  --callout-info: 151,
    192,
    243;
  --callout-question: 255,
    200,
    163;
  --callout-quote: 158,
    158,
    158;
  --callout-radius: 0px;
  --callout-success: 165,
    230,
    147;
  --callout-summary: 139,
    240,
    219;
  --callout-tip: 139,
    240,
    219;
  --callout-todo: 151,
    192,
    243;
  --callout-warning: 255,
    200,
    163;
  --canvas-background: #1a1a1a;
  --canvas-card-label-color: #505050;
  --canvas-color-1: 245,
    152,
    143;
  --canvas-color-2: 255,
    200,
    163;
  --canvas-color-3: 240,
    227,
    149;
  --canvas-color-4: 165,
    230,
    147;
  --canvas-color-5: 139,
    240,
    219;
  --canvas-color-6: 172,
    157,
    242;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #222222;
  --caret-color: #909090;
  --checkbox-border-color: #505050;
  --checkbox-border-color-hover: #707070;
  --checkbox-color: hsl(106.9879518072deg, 62%, 74%);
  --checkbox-color-hover: hsl(106.9879518072deg, 62.4060150376%, 83.92157%);
  --checkbox-marker-color: #1a1a1a;
  --checkbox-radius: 0px;
  --checklist-done-color: #707070;
  --clickable-icon-radius: 0px;
  --code-background: #1a1a1a;
  --code-border-color: #222222;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: #505050;
  --code-function: #f0e395;
  --code-important: #ffc8a3;
  --code-keyword: #eaa9ff;
  --code-normal: #909090;
  --code-operator: #f5988f;
  --code-property: #8bf0db;
  --code-punctuation: #707070;
  --code-radius: 0px;
  --code-string: #a5e693;
  --code-tag: #f5988f;
  --code-value: #ac9df2;
  --codeFont: var(--font-text);
  --collapse-icon-color: #505050;
  --collapse-icon-color-collapsed: hsl(106.9879518072deg, 62%, 74%);
  --color-accent: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%);
  --color-accent-1: hsl(106.9879518072deg, 62%, 64%);
  --color-accent-2: hsl(106.9879518072deg, 62.4060150376%, 83.92157%);
  --color-accent-hsl: 106.9879518072deg,
    62.4060150376%,
    73.9215686275%;
  --color-accent-rgb: 165,
    230,
    147;
  --color-base-00: #1a1a1a;
  --color-base-05: #1a1a1a;
  --color-base-10: #1a1a1a;
  --color-base-100: #ffffff;
  --color-base-15: #1a1a1a;
  --color-base-20: #121212;
  --color-base-25: #121212;
  --color-base-30: #222222;
  --color-base-35: #303030;
  --color-base-40: #505050;
  --color-base-50: #707070;
  --color-base-60: #909090;
  --color-base-70: #a0a0a0;
  --color-base-80: #c0c0c0;
  --color-base-90: #e0e0e0;
  --color-blue: #97c0f3;
  --color-blue-rgb: 151,
    192,
    243;
  --color-complement: hsl(285.3488372093deg, 100%, 83%);
  --color-complement-1: hsl(285.3488372093deg, 100%, 73.13725%);
  --color-complement-2: hsl(285.3488372093deg, 100%, 93%);
  --color-complement-hsl: 285.3488372093deg,
    100%,
    83.137254902%;
  --color-complement-rgb: 234,
    169,
    255;
  --color-cyan: #8bf0db;
  --color-cyan-rgb: 139,
    240,
    219;
  --color-green: #a5e693;
  --color-green-rgb: 165,
    230,
    147;
  --color-orange: #ffc8a3;
  --color-orange-rgb: 255,
    200,
    163;
  --color-pink: #eaa9ff;
  --color-pink-rgb: 234,
    169,
    255;
  --color-purple: #ac9df2;
  --color-purple-rgb: 172,
    157,
    242;
  --color-red: #f5988f;
  --color-red-rgb: 245,
    152,
    143;
  --color-yellow: #f0e395;
  --color-yellow-rgb: 240,
    227,
    149;
  --complement-h: 285.3488372093deg;
  --complement-l: 83.137254902%;
  --complement-s: 100%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: transparent;
  --divider-color-hover: hsl(106.9879518072deg, 62%, 74%);
  --divider-width: 0px;
  --dropdown-background: #222222;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px #222222, inset 0 0 0 1px #222222;
  --embed-border-left: 2px solid hsl(106.9879518072deg, 62%, 74%);
  --embed-border-right: none;
  --embed-border-start: 2px solid hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%);
  --file-header-background: #1a1a1a;
  --file-header-background-focused: #1a1a1a;
  --file-header-border: 0px solid transparent;
  --file-header-font: '??', '??', '??', JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --file-margins: 32px;
  --flair-background: #222222;
  --flair-color: #909090;
  --font-default: JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-interface: '??', '??', '??', JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-mermaid: '??', '??', JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --font-text: '??', '??', JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --footnote-divider-color: #222222;
  --footnote-divider-width: 0px;
  --footnote-id-color: #707070;
  --footnote-id-color-no-occurrences: #505050;
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --footnote-radius: 0px;
  --graph-line: #303030;
  --graph-node: #707070;
  --graph-node-attachment: #f0e395;
  --graph-node-focused: hsl(106.9879518072deg, 62%, 74%);
  --graph-node-tag: #a5e693;
  --graph-node-unresolved: #505050;
  --graph-text: #909090;
  --gray: var(--text-muted);
  --h1-color: #ffffff;
  --h1-size: 1.802em;
  --h1-weight: 500;
  --h2-color: #ffffff;
  --h2-size: 1.602em;
  --h2-weight: 500;
  --h3-color: #ffffff;
  --h3-size: 1.424em;
  --h3-weight: 500;
  --h4-color: #ffffff;
  --h4-size: 1.266em;
  --h4-weight: 500;
  --h5-color: #ffffff;
  --h5-size: 1.125em;
  --h5-weight: 500;
  --h6-color: #ffffff;
  --h6-weight: 500;
  --headerFont: var(--font-text);
  --heading-formatting: #505050;
  --highlight: var(--text-highlight-bg);
  --hr-color: #222222;
  --icon-color: #707070;
  --icon-color-active: hsl(106.9879518072deg, 62%, 74%);
  --icon-color-focused: #909090;
  --icon-color-hover: #707070;
  --indentation-guide-color: rgba(255, 255, 255, 0.12);
  --indentation-guide-color-active: rgba(255, 255, 255, 0.3);
  --indentation-guide-source-indent: 0.2em;
  --inline-title-color: #ffffff;
  --inline-title-size: 1.802em;
  --inline-title-weight: 500;
  --input-border-width: 0px;
  --input-date-separator: #505050;
  --input-placeholder-color: #505050;
  --input-radius: 0px;
  --input-shadow: 0 0 0 0 transparent;
  --input-shadow-hover: 0 0 0 0 transparent;
  --interactive-accent: hsl(106.9879518072deg, 62%, 74%);
  --interactive-accent-hover: hsl(106.9879518072deg, 62.4060150376%, 83.92157%);
  --interactive-accent-hsl: 106.9879518072deg,
    62.4060150376%,
    73.9215686275%;
  --interactive-hover: #303030;
  --interactive-normal: #222222;
  --italic-color: hsl(285.3488372093deg, 100%, 83%);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: hsl(285.3488372093deg, 100%, 83.137254902%);
  --link-color-hover: hsl(285.3488372093deg, 100%, 93%);
  --link-external-color: hsl(285.3488372093deg, 100%, 83.137254902%);
  --link-external-color-hover: hsl(285.3488372093deg, 100%, 93%);
  --link-unresolved-color: hsl(285.3488372093deg, 100%, 83.137254902%);
  --link-unresolved-decoration-color: hsla(106.9879518072deg,
    62%,
    74%, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: #505050;
  --list-marker-color-collapsed: hsl(106.9879518072deg, 62%, 74%);
  --list-marker-color-hover: #707070;
  --mb-background-modifier-active: hsla(106.9879518072deg,
    62%,
    74%, 0.05);
  --mb-background-modifier-active-hover: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.1);
  --menu-background: #121212;
  --menu-border-color: #303030;
  --menu-border-width: 0px;
  --menu-radius: 0px;
  --menu-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --metadata-border-color: #222222;
  --metadata-divider-color: #222222;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-input-font: '??', '??', '??', JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --metadata-input-text-color: #909090;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-font: '??', '??', '??', JetBrains Mono,
    Menlo,
    SFMono-Regular,
    Consolas,
    "Roboto Mono",
    "Source Code Pro",
    monospace;
  --metadata-label-text-color: #707070;
  --metadata-label-text-color-hover: #707070;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #505050;
  --metadata-property-box-shadow-hover: 0 0 0 0px #303030;
  --modal-background: #1a1a1a;
  --modal-border-color: #505050;
  --modal-border-width: 0px;
  --modal-radius: 0px;
  --mono-rgb-0: 0,
    0,
    0;
  --mono-rgb-100: 255,
    255,
    255;
  --nav-collapse-icon-color: #505050;
  --nav-collapse-icon-color-collapsed: #505050;
  --nav-heading-color: #909090;
  --nav-heading-color-collapsed: #505050;
  --nav-heading-color-collapsed-hover: #707070;
  --nav-heading-color-hover: #909090;
  --nav-indentation-guide-color: rgba(255, 255, 255, 0.12);
  --nav-item-background-active: rgba(255, 255, 255, 0.075);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: hsla(106.9879518072deg,
    62%,
    74%, 0.05);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: #707070;
  --nav-item-color-active: #909090;
  --nav-item-color-highlighted: hsl(106.9879518072deg, 62%, 84%);
  --nav-item-color-hover: #909090;
  --nav-item-color-selected: #909090;
  --nav-item-radius: 0px;
  --nav-item-white-space: nowrap;
  --nav-tag-color: #505050;
  --nav-tag-color-active: #707070;
  --nav-tag-color-hover: #707070;
  --nav-tag-radius: 0px;
  --pdf-background: #1a1a1a;
  --pdf-page-background: #1a1a1a;
  --pdf-shadow: 0 0 0 1px #222222;
  --pdf-sidebar-background: #1a1a1a;
  --pdf-thumbnail-shadow: 0 0 0 1px #222222;
  --pill-border-color: #222222;
  --pill-border-color-hover: #303030;
  --pill-border-width: 0px;
  --pill-color: #707070;
  --pill-color-hover: #909090;
  --pill-color-remove: #505050;
  --pill-color-remove-hover: hsl(106.9879518072deg, 62%, 74%);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #1a1a1a;
  --prompt-border-color: #505050;
  --prompt-border-width: 0px;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --radius-xl: 0px;
  --raised-background: color-mix(in srgb, #222222 65%, transparent) linear-gradient(#222222, color-mix(in srgb, #222222 65%, transparent));
  --ribbon-background: #121212;
  --ribbon-background-collapsed: #1a1a1a;
  --scrollbar-active-thumb-bg: rgba(255, 255, 255, 0.2);
  --scrollbar-bg: rgba(255, 255, 255, 0.05);
  --scrollbar-radius: 0px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.1);
  --search-clear-button-color: #707070;
  --search-icon-color: #707070;
  --search-result-background: #1a1a1a;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #909090;
  --setting-items-background: #1a1a1a;
  --setting-items-border-color: #222222;
  --setting-items-radius: 0px;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.05),
    0px 6.3px 24.7px rgba(0, 0, 0, 0.1),
    0px 30px 90px rgba(0, 0, 0, 0.15);
  --shadow-s: 0px 1px 2px rgba(0, 0, 0, 0.05),
    0px 3.4px 6.7px rgba(0, 0, 0, 0.1),
    0px 15px 30px rgba(0, 0, 0, 0.15);
  --shiki-code-normal: #909090;
  --slider-thumb-border-color: #303030;
  --slider-thumb-radius: 50%;
  --slider-track-background: #222222;
  --status-bar-background: #121212;
  --status-bar-border-color: transparent;
  --status-bar-border-width: 0;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #707070;
  --suggestion-background: #1a1a1a;
  --swatch-height: 24px;
  --swatch-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
  --swatch-width: 24px;
  --sync-avatar-color-1: #f5988f;
  --sync-avatar-color-2: #ffc8a3;
  --sync-avatar-color-3: #f0e395;
  --sync-avatar-color-4: #a5e693;
  --sync-avatar-color-5: #8bf0db;
  --sync-avatar-color-6: #97c0f3;
  --sync-avatar-color-7: #ac9df2;
  --sync-avatar-color-8: #eaa9ff;
  --tab-background-active: #1a1a1a;
  --tab-container-background: #121212;
  --tab-curve: 0px;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-outline-width: 0px;
  --tab-radius: 0px;
  --tab-radius-active: 0;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #121212;
  --tab-switcher-menubar-background: linear-gradient(to top, #121212, transparent);
  --tab-switcher-preview-radius: 0px;
  --tab-switcher-preview-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05);
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(106.9879518072deg, 62%, 74%);
  --tab-text-color: #707070;
  --tab-text-color-active: #ffffff;
  --tab-text-color-focused: #707070;
  --tab-text-color-focused-active: #ffffff;
  --tab-text-color-focused-active-current: #ffffff;
  --tab-text-color-focused-highlighted: hsl(106.9879518072deg, 62%, 74%);
  --table-add-button-border-color: #222222;
  --table-border-color: #222222;
  --table-drag-handle-background-active: hsl(106.9879518072deg, 62%, 74%);
  --table-drag-handle-color: #505050;
  --table-drag-handle-color-active: black;
  --table-header-border-color: #222222;
  --table-header-color: #ffffff;
  --table-header-weight: 700;
  --table-selection: hsla(106.9879518072deg,
    62%,
    74%, 0.1);
  --table-selection-border-color: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%);
  --table-selection-border-radius: 0;
  --tag-background: hsla(106.9879518072deg,
    62%,
    74%, 0.1);
  --tag-background-hover: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.2);
  --tag-border-color: hsla(106.9879518072deg,
    62%,
    74%, 0.15);
  --tag-border-color-hover: hsla(106.9879518072deg,
    62.4060150376%,
    73.9215686275%, 0.15);
  --tag-color: hsl(106.9879518072deg, 62%, 74%);
  --tag-color-hover: hsl(106.9879518072deg, 62.4060150376%, 73.9215686275%);
  --tertiary: var(--text-accent-hover);
  --text-accent: hsl(106.9879518072deg, 62%, 74%);
  --text-accent-hover: hsl(106.9879518072deg, 62.4060150376%, 83.92157%);
  --text-complement: hsl(285.3488372093deg, 100%, 83%);
  --text-complement-hover: hsl(285.3488372093deg, 100%, 93.13725%);
  --text-error: #f5988f;
  --text-faint: #505050;
  --text-highlight-bg: transparent;
  --text-highlight-bg-rgb: transparent;
  --text-important: #ffffff;
  --text-muted: #707070;
  --text-normal: #909090;
  --text-on-accent: black;
  --text-on-accent-inverted: white;
  --text-selection: rgba(255, 255, 255, 0.2);
  --text-success: #a5e693;
  --text-warning: #ffc8a3;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #121212;
  --titlebar-background-focused: #121212;
  --titlebar-border-color: #222222;
  --titlebar-text-color: #707070;
  --titlebar-text-color-focused: #ffffff;
  --vault-name-color: #909090;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #909090;
  --vault-profile-color-hover: #909090;
  --workspace-background-translucent: rgba(0, 0, 0, 0.6);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 18, 18);
  color: rgb(144, 144, 144);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(144, 144, 144);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(18, 18, 18);
  color: rgb(144, 144, 144);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 18, 18);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(144, 144, 144);
}

body div#quartz-root {
  background-color: rgb(26, 26, 26);
  color: rgb(144, 144, 144);
}`,
    typography: `body .page article p > b, b {
  color: rgb(165, 230, 147);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(165, 230, 147) none 0px;
  text-decoration: rgb(165, 230, 147);
  text-decoration-color: rgb(165, 230, 147);
}

body .page article p > em, em {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration: rgb(234, 169, 255);
  text-decoration-color: rgb(234, 169, 255);
}

body .page article p > i, i {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration: rgb(234, 169, 255);
  text-decoration-color: rgb(234, 169, 255);
}

body .page article p > strong, strong {
  color: rgb(165, 230, 147);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(165, 230, 147) none 0px;
  text-decoration: rgb(165, 230, 147);
  text-decoration-color: rgb(165, 230, 147);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(80, 80, 80);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(80, 80, 80) none 0px;
  text-decoration: line-through rgb(80, 80, 80);
  text-decoration-color: rgb(80, 80, 80);
}

body p {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}`,
    links: `body a.external, footer a {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration: underline rgb(234, 169, 255);
  text-decoration-color: rgb(234, 169, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration: underline rgb(234, 169, 255);
  text-decoration-color: rgb(234, 169, 255);
}

body a.internal.broken {
  color: rgb(234, 169, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(234, 169, 255) none 0px;
  text-decoration: underline rgba(165, 230, 147, 0.3);
  text-decoration-color: rgba(165, 230, 147, 0.3);
}`,
    lists: `body dd {
  color: rgb(144, 144, 144);
}

body dt {
  color: rgb(144, 144, 144);
}

body ol > li {
  color: rgb(144, 144, 144);
}

body ol.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body ul > li {
  color: rgb(144, 144, 144);
}

body ul.overflow {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(80, 80, 80);
  text-decoration: rgb(80, 80, 80);
}

body blockquote {
  background-color: rgba(234, 169, 255, 0.1);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body table {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  width: 217.422px;
}

body td {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(144, 144, 144);
}

body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

body pre > code > [data-line] {
  border-left-color: rgb(240, 227, 149);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(240, 227, 149);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(240, 227, 149);
  border-left-color: rgb(240, 227, 149);
  border-right-color: rgb(240, 227, 149);
  border-top-color: rgb(240, 227, 149);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body figcaption {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body figure {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body img {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body video {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

body .transclude {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(165, 230, 147);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body .transclude-inner {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(165, 230, 147);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 112, 112);
  text-decoration: line-through rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

body input[type=checkbox] {
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(80, 80, 80);
  border-right-color: rgb(80, 80, 80);
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='*'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='-'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='/'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='>'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='?'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='I'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='S'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='b'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='c'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='d'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='f'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='i'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='k'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='l'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='p'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='u'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body li.task-list-item[data-task='w'] {
  color: rgb(144, 144, 144);
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(151, 192, 243);
  border-left-color: rgb(151, 192, 243);
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
}

body .callout[data-callout="abstract"] {
  --callout-color: 139,
    240,
    219;
  background-color: rgba(139, 240, 219, 0.1);
  border-bottom-color: rgb(139, 240, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(139, 240, 219);
  border-left-width: 4px;
  border-right-color: rgb(139, 240, 219);
  border-top-color: rgb(139, 240, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  --callout-color: 245,
    152,
    143;
  background-color: rgba(245, 152, 143, 0.1);
  border-bottom-color: rgb(245, 152, 143);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 152, 143);
  border-left-width: 4px;
  border-right-color: rgb(245, 152, 143);
  border-top-color: rgb(245, 152, 143);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  --callout-color: 245,
    152,
    143;
  background-color: rgba(245, 152, 143, 0.1);
  border-bottom-color: rgb(245, 152, 143);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 152, 143);
  border-left-width: 4px;
  border-right-color: rgb(245, 152, 143);
  border-top-color: rgb(245, 152, 143);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  --callout-color: 172,
    157,
    242;
  background-color: rgba(172, 157, 242, 0.1);
  border-bottom-color: rgb(172, 157, 242);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(172, 157, 242);
  border-left-width: 4px;
  border-right-color: rgb(172, 157, 242);
  border-top-color: rgb(172, 157, 242);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  --callout-color: 245,
    152,
    143;
  background-color: rgba(245, 152, 143, 0.1);
  border-bottom-color: rgb(245, 152, 143);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 152, 143);
  border-left-width: 4px;
  border-right-color: rgb(245, 152, 143);
  border-top-color: rgb(245, 152, 143);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  --callout-color: 151,
    192,
    243;
  background-color: rgba(151, 192, 243, 0.1);
  border-bottom-color: rgb(151, 192, 243);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 192, 243);
  border-left-width: 4px;
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  --callout-color: 151,
    192,
    243;
  background-color: rgba(151, 192, 243, 0.1);
  border-bottom-color: rgb(151, 192, 243);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 192, 243);
  border-left-width: 4px;
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  --callout-color: 255,
    200,
    163;
  background-color: rgba(255, 200, 163, 0.1);
  border-bottom-color: rgb(255, 200, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 200, 163);
  border-left-width: 4px;
  border-right-color: rgb(255, 200, 163);
  border-top-color: rgb(255, 200, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  --callout-color: 158,
    158,
    158;
  border-bottom-color: rgb(158, 158, 158);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(158, 158, 158);
  border-left-width: 4px;
  border-right-color: rgb(158, 158, 158);
  border-top-color: rgb(158, 158, 158);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  --callout-color: 165,
    230,
    147;
  background-color: rgba(165, 230, 147, 0.1);
  border-bottom-color: rgb(165, 230, 147);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(165, 230, 147);
  border-left-width: 4px;
  border-right-color: rgb(165, 230, 147);
  border-top-color: rgb(165, 230, 147);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  --callout-color: 139,
    240,
    219;
  background-color: rgba(139, 240, 219, 0.1);
  border-bottom-color: rgb(139, 240, 219);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(139, 240, 219);
  border-left-width: 4px;
  border-right-color: rgb(139, 240, 219);
  border-top-color: rgb(139, 240, 219);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  --callout-color: 151,
    192,
    243;
  background-color: rgba(151, 192, 243, 0.1);
  border-bottom-color: rgb(151, 192, 243);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 192, 243);
  border-left-width: 4px;
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  --callout-color: 255,
    200,
    163;
  background-color: rgba(255, 200, 163, 0.1);
  border-bottom-color: rgb(255, 200, 163);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 200, 163);
  border-left-width: 4px;
  border-right-color: rgb(255, 200, 163);
  border-top-color: rgb(255, 200, 163);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(144, 144, 144);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.1) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.15) 0px 30px 90px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  outline: rgb(144, 144, 144) none 0px;
  text-decoration: rgb(144, 144, 144);
  text-decoration-color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(144, 144, 144);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 80, 80);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 0px;
  border-left-color: rgb(80, 80, 80);
  border-left-width: 0px;
  border-right-color: rgb(80, 80, 80);
  border-right-width: 0px;
  border-top-color: rgb(80, 80, 80);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-width: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(165, 230, 147, 0.1);
  border-bottom-color: rgba(165, 230, 147, 0.15);
  border-left-color: rgba(165, 230, 147, 0.15);
  border-right-color: rgba(165, 230, 147, 0.15);
  border-top-color: rgba(165, 230, 147, 0.15);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body a.internal.tag-link::before {
  color: rgb(165, 230, 147);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  --callout-color: 151,
    192,
    243;
  border-bottom-color: rgb(151, 192, 243);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(151, 192, 243);
  border-left-width: 4px;
  border-right-color: rgb(151, 192, 243);
  border-top-color: rgb(151, 192, 243);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 26, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  text-decoration: rgb(112, 112, 112);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  text-decoration: rgb(112, 112, 112);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
  text-decoration: rgb(112, 112, 112);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
}`,
    footer: `body footer {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-width: 0px;
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body footer ul li a {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body li.section-li > .section .meta {
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body ul.section-ul {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
}

body .darkmode svg {
  color: rgb(112, 112, 112);
  stroke: rgb(112, 112, 112);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(112, 112, 112);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(112, 112, 112);
}

body .breadcrumb-element p {
  color: rgb(80, 80, 80);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  color: rgb(144, 144, 144);
}

body .metadata {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(112, 112, 112);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .metadata-properties {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body .navigation-progress {
  background-color: rgb(18, 18, 18);
}

body .page-header h2.page-title {
  color: rgb(144, 144, 144);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body abbr {
  color: rgb(144, 144, 144);
  text-decoration: underline dotted rgb(144, 144, 144);
}

body details {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body input[type=text] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "??", "??", "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Roboto Mono", "Source Code Pro", monospace;
}

body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(144, 144, 144);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(144, 144, 144);
}

body progress {
  border-bottom-color: rgb(144, 144, 144);
  border-left-color: rgb(144, 144, 144);
  border-right-color: rgb(144, 144, 144);
  border-top-color: rgb(144, 144, 144);
}

body sub {
  color: rgb(144, 144, 144);
}

body summary {
  color: rgb(144, 144, 144);
}

body sup {
  color: rgb(144, 144, 144);
}`,
  },
  light: {},
};
